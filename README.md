# IELTS 8.5 Prep app (Academic)

An IELTS Academic practice app for two friends. It has four prep tabs (Listening, Reading, Writing, Speaking), 10 full mock tests with band scores, an AI examiner, daily streaks and a daily reminder.

```
web/        the app (HTML + JS + content). Runs in any phone browser.
  data/     10 mock tests + practice sets, vocabulary, tips
android/    Android app that wraps web/ and adds native voice, mic, daily notifications
.github/    automatic builds: APK (Android) and website (iPhone)
```

## Get the Android APK (free, about 10 minutes, no coding)

1. Create a free account at github.com (if you don't have one).
2. Click **+ → New repository**, name it `ielts85`, choose **Private** or Public, and click **Create**.
3. On the new repo page click **uploading an existing file**. Unzip this project on your computer and drag **all** its folders into the upload box (`web`, `android`, `.github`, `README.md`). Click **Commit changes**.
   - On a phone? Use the GitHub website in desktop mode, or upload from a laptop. The hidden `.github` folder must be included. If your file picker hides it, create the two workflow files by hand with **Add file → Create new file** and paste their contents.
4. Open the **Actions** tab. The "Build Android APK" job starts automatically (about 5 minutes).
5. When it's green, open **Releases → IELTS 8.5 app (latest build)** and download `IELTS85.apk` on each Android phone.
6. Tap the file and allow "Install unknown apps" for your browser/Files app when Android asks.

The first time you open the app, enter your name. Each phone keeps its own progress.

## iPhone

An APK cannot be installed on an iPhone, and a real App Store app needs a Mac and a paid Apple developer account. Instead, use the same app as a home-screen web app:

1. In the repo, go to **Settings → Pages → Source: GitHub Actions**.
2. Run **Actions → Publish web app (for iPhone) → Run workflow**.
3. Open the link it shows (like `https://YOURNAME.github.io/ielts85/`) in **Safari** on the iPhone.
4. Tap **Share → Add to Home Screen**. It now opens full-screen like an app.

Listening audio and the mic work in Safari. For the daily reminder on iPhone, open Settings in the app and tap **Add to phone calendar**.

## AI examiner (Writing and Speaking scores)

1. Create an API key at https://console.anthropic.com (add a few dollars of credit; each essay costs about 1–3 US cents with Sonnet).
2. In the app: **gear icon → AI examiner → paste key → Test AI connection**.

The key is stored only on that phone. With AI on you get:
- Band scores for each criterion, a list of corrections, and a Band 9 rewrite for every essay and speaking answer
- Automatic Writing and Speaking bands at the end of each mock test
- Unlimited new Listening and Reading practice sets on the prep tabs

Without a key, you can still use everything else: Listening and Reading are scored automatically, and Writing and Speaking use a self-check list.

## How scoring works

- **Listening / Reading:** each mock has 20 questions per section (half the real test). Your score is scaled to 40 and converted with the standard IELTS Academic band table.
- **Writing:** Task 2 counts double: (Task 1 + 2 × Task 2) ÷ 3.
- **Speaking:** scored from what you said, using speech-to-text. Pronunciation can only be estimated.
- **Overall:** the average of the four sections, rounded the IELTS way (to the nearest 0.5).

These are practice estimates. A real exam score can be different.

## Edit the content

All questions are plain JavaScript in `web/data/`. Copy one `MOCKS.push({...})` block to add a test. After you push to GitHub, a new APK builds automatically.

## Android Studio (optional)

Copy `web/` into `android/app/src/main/assets/www/`, then open the `android` folder in Android Studio and click **Run**.
