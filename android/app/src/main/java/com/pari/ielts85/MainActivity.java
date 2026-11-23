package com.pari.ielts85;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Locale;

/** Hosts the IELTS 8.5 web app and gives it native voice, speech input, reminders and AI calls. */
public class MainActivity extends Activity {
    private static final int REQ_SPEECH = 41;
    private static final int REQ_NOTIF = 42;
    private WebView web;
    private TextToSpeech tts;
    private boolean ttsReady = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
        web = new WebView(this);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setTextZoom(100);
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, android.webkit.WebResourceRequest req) {
                String u = req.getUrl().toString();
                if (u.startsWith("http")) {
                    try { startActivity(new Intent(Intent.ACTION_VIEW, android.net.Uri.parse(u))); } catch (Exception ignored) { }
                    return true;
                }
                return false;
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onCreateWindow(WebView v, boolean dialog, boolean user, android.os.Message msg) {
                WebView.HitTestResult r = v.getHitTestResult();
                String u = r != null ? r.getExtra() : null;
                if (u != null && u.startsWith("http")) {
                    try { startActivity(new Intent(Intent.ACTION_VIEW, android.net.Uri.parse(u))); } catch (Exception ignored) { }
                }
                return false;
            }
        });
        s.setSupportMultipleWindows(true);
        web.addJavascriptInterface(new Bridge(), "Android");

        tts = new TextToSpeech(this, status -> {
            if (status == TextToSpeech.SUCCESS) {
                int r = tts.setLanguage(Locale.UK);
                if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) tts.setLanguage(Locale.US);
                ttsReady = true;
            }
        });
        tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
            @Override public void onStart(String id) { }
            @Override public void onDone(String id) { if ("last".equals(id)) js("window.onTtsDone&&window.onTtsDone()"); }
            @Override public void onError(String id) { js("window.onTtsDone&&window.onTtsDone()"); }
        });

        web.loadUrl("file:///android_asset/www/index.html");
        Reminders.restore(this);
    }

    private void js(final String code) {
        runOnUiThread(() -> web.evaluateJavascript(code, null));
    }

    /** Methods callable from JavaScript as window.Android.* */
    private class Bridge {
        @JavascriptInterface public void onReady() { }

        @JavascriptInterface
        public void speakLines(String json, float rate) {
            if (!ttsReady) { js("window.onTtsDone&&window.onTtsDone()"); toast("Voice engine not ready. Install Google Text-to-speech."); return; }
            try {
                JSONArray arr = new JSONArray(json);
                tts.stop();
                tts.setSpeechRate(0.95f * rate);
                for (int i = 0; i < arr.length(); i++) {
                    JSONObject o = arr.getJSONObject(i);
                    tts.setPitch((float) o.optDouble("p", 1.0));
                    String id = (i == arr.length() - 1) ? "last" : ("u" + i);
                    tts.speak(o.getString("t"), TextToSpeech.QUEUE_ADD, null, id);
                    tts.playSilentUtterance(350, TextToSpeech.QUEUE_ADD, "gap" + i);
                }
            } catch (Exception e) {
                js("window.onTtsDone&&window.onTtsDone()");
            }
        }

        @JavascriptInterface public void stopSpeak() { if (tts != null) tts.stop(); }

        @JavascriptInterface
        public void listen() {
            runOnUiThread(() -> {
                Intent i = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
                i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
                i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-GB");
                i.putExtra(RecognizerIntent.EXTRA_PROMPT, "Speak your answer");
                try {
                    startActivityForResult(i, REQ_SPEECH);
                } catch (ActivityNotFoundException e) {
                    toast("Speech input not available. Install the Google app.");
                    js("window.onSpeechEnd&&window.onSpeechEnd()");
                }
            });
        }

        @JavascriptInterface
        public void setReminder(int hour, int minute) {
            if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission("android.permission.POST_NOTIFICATIONS") != PackageManager.PERMISSION_GRANTED) {
                runOnUiThread(() -> requestPermissions(new String[]{"android.permission.POST_NOTIFICATIONS"}, REQ_NOTIF));
            }
            Reminders.schedule(MainActivity.this, hour, minute);
        }

        @JavascriptInterface public void cancelReminder() { Reminders.cancel(MainActivity.this); }

        /** Generic HTTPS POST used for the AI examiner (Groq, Gemini or Claude). Result: window.onHttpResult(id, status, text). */
        @JavascriptInterface
        public void httpPost(final String id, final String url, final String headersJson, final String body) {
            new Thread(() -> {
                int code = 0;
                String out;
                try {
                    if (!url.startsWith("https://")) throw new IllegalArgumentException("https only");
                    HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
                    c.setRequestMethod("POST");
                    c.setConnectTimeout(20000);
                    c.setReadTimeout(180000);
                    c.setDoOutput(true);
                    JSONObject h = new JSONObject(headersJson);
                    java.util.Iterator<String> it = h.keys();
                    while (it.hasNext()) { String k = it.next(); c.setRequestProperty(k, h.getString(k)); }
                    try (OutputStream os = c.getOutputStream()) { os.write(body.getBytes(StandardCharsets.UTF_8)); }
                    code = c.getResponseCode();
                    out = readAll(code < 400 ? c.getInputStream() : c.getErrorStream());
                } catch (Exception e) {
                    out = "Network error: " + e.getMessage() + ". Check your internet connection.";
                }
                js("window.onHttpResult&&window.onHttpResult(" + JSONObject.quote(id) + "," + code + "," + JSONObject.quote(out) + ")");
            }).start();
        }
    }

    private static String readAll(InputStream is) throws Exception {
        if (is == null) return "{}";
        StringBuilder sb = new StringBuilder();
        try (BufferedReader r = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))) {
            String line;
            while ((line = r.readLine()) != null) sb.append(line).append('\n');
        }
        return sb.toString();
    }

    private void toast(final String msg) {
        runOnUiThread(() -> Toast.makeText(this, msg, Toast.LENGTH_LONG).show());
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQ_SPEECH) {
            if (resultCode == RESULT_OK && data != null) {
                ArrayList<String> res = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                if (res != null && !res.isEmpty()) js("window.onSpeechResult&&window.onSpeechResult(" + JSONObject.quote(res.get(0)) + ")");
            }
            js("window.onSpeechEnd&&window.onSpeechEnd()");
        }
    }

    @Override
    public void onBackPressed() {
        web.evaluateJavascript("(function(){var b=document.querySelector('#modal [data-act=close],[data-act=back],[data-act=rback]');if(b){b.click();return 1}return 0})()",
                v -> { if (!"1".equals(v)) MainActivity.super.onBackPressed(); });
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (tts != null) tts.stop();
    }

    @Override
    protected void onDestroy() {
        if (tts != null) tts.shutdown();
        super.onDestroy();
    }
}
