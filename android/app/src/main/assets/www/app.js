/* IELTS 8.5 Prep — app logic. Works in a browser, as a home-screen web app (iPhone/Android),
   and inside the Android WebView wrapper (window.Android bridge for voice, mic, reminders, AI). */
{
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = n => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const A = window.Android || null; // native bridge in the APK
const MODS = { L: { name: "Listening", short: "Listen", c: "var(--L)" }, R: { name: "Reading", short: "Read", c: "var(--R)" }, W: { name: "Writing", short: "Write", c: "var(--W)" }, S: { name: "Speaking", short: "Speak", c: "var(--S)" }, M: { name: "Mock Tests", short: "Mock", c: "var(--M)" } };
const ICONS = {
  L: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>',
  R: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/></svg>',
  W: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  S: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5"/></svg>',
  M: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  fire: '<svg viewBox="0 0 24 24" fill="#ffd23f"><path d="M12 2s5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="#ffd23f"><path d="m12 2 3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5"/></svg>',
  play: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>',
  stop: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>'
};

/* ---------- storage ---------- */
const KEY = "ielts85_v1";
let DB;
try { DB = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { DB = null; }
if (!DB) DB = { profiles: {}, cur: null, settings: { apiKey: "", model: "claude-sonnet-5-5", remOn: false, remH: 19, remM: 0 }, run: null };
{ const st = DB.settings; if (!st.keys) { st.keys = { groq: "", gemini: "", claude: st.apiKey || "" }; st.models = { groq: "openai/gpt-oss-120b", gemini: "gemini-flash-latest", claude: st.model || "claude-sonnet-5-5" }; st.provider = st.apiKey ? "claude" : "groq"; delete st.apiKey; delete st.model; try { localStorage.setItem("ielts85_v1", JSON.stringify(DB)); } catch (e) {} } }
const PROV = {
  groq: { name: "Groq", tag: "FREE · recommended", url: "https://console.groq.com/keys", site: "console.groq.com", prefix: "gsk_",
    steps: ["Open console.groq.com and sign in with your Google account.", "Tap <b>API Keys → Create API Key</b>, give it any name.", "Copy the key (starts with gsk_) and paste it below."],
    note: "Completely free, no card needed. There's a daily limit, which is plenty for personal practice." },
  gemini: { name: "Google Gemini", tag: "FREE", url: "https://aistudio.google.com/apikey", site: "aistudio.google.com", prefix: "",
    steps: ["Open aistudio.google.com and sign in with your Google account.", "Tap <b>Get API key → Create API key</b>.", "Copy the key and paste it below."],
    note: "Free, no card needed. On the free tier Google may use what you send to improve its products." },
  claude: { name: "Claude", tag: "paid", url: "https://console.anthropic.com/settings/keys", site: "console.anthropic.com", prefix: "sk-ant-",
    steps: ["Open console.anthropic.com and sign up.", "Add credit in Billing.", "Tap <b>Create Key</b>, copy it and paste it below."],
    note: "Strictest marking, but costs a little per essay." }
};
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {} };
const P = () => DB.profiles[DB.cur];
function newProfile(name) {
  const id = "p" + Date.now();
  DB.profiles[id] = { name, target: 8.5, examDate: "", xp: 0, days: {}, results: [], words: [], badges: [], writes: 0, gen: { L: [], R: [] }, drafts: {}, done: {} };
  DB.cur = id; save();
}

/* ---------- Claude capabilities (when opened as a Claude artifact) ---------- */
const CL = { sample: null, tts: null, dict: null };
if (window.claude && typeof window.claude.use === "function") {
  Promise.all(["sample", "tts", "dictation"].map(n => window.claude.use(n).catch(() => null))).then(([s, t, d]) => {
    CL.sample = s; CL.tts = t; CL.dict = d; render();
  });
}

/* ---------- AI scoring ---------- */
const httpCbs = {};
window.onHttpResult = (id, status, text) => { const cb = httpCbs[id]; if (cb) { delete httpCbs[id]; cb({ status, text }); } };
const curKey = () => (DB.settings.keys[DB.settings.provider] || "").trim();
const aiReady = () => !!(curKey() || CL.sample);
function nativePost(url, headers, body) {
  const id = "h" + Math.random().toString(36).slice(2);
  return new Promise(res => { httpCbs[id] = res; A.httpPost(id, url, JSON.stringify(headers), body); });
}
async function post(url, headers, bodyObj) {
  const body = JSON.stringify(bodyObj); let status, text;
  if (A && A.httpPost) ({ status, text } = await nativePost(url, headers, body));
  else { const r = await fetch(url, { method: "POST", headers, body }); status = r.status; text = await r.text(); }
  let j; try { j = JSON.parse(text); } catch (e) { throw new Error(status ? "HTTP " + status : String(text)); }
  if (status >= 400 || j.error) {
    const m = (j.error && (j.error.message || j.error)) || ("HTTP " + status);
    throw new Error(status === 429 ? "Free limit reached for now. Wait a minute and try again." : String(m));
  }
  return j;
}
async function askAI(prompt, json = true) {
  const st = DB.settings, p = st.provider, key = curKey(), model = (st.models[p] || "").trim();
  if (!key) { if (CL.sample) { const r = await CL.sample(prompt, { modelTier: "complex" }); return r.text; } throw new Error("NO_AI"); }
  if (p === "groq") {
    const j = await post("https://api.groq.com/openai/v1/chat/completions", { "content-type": "application/json", authorization: "Bearer " + key },
      { model: model || "openai/gpt-oss-120b", messages: [{ role: "user", content: prompt }], max_tokens: 4000, temperature: 0.3, ...(json ? { response_format: { type: "json_object" } } : {}) });
    return j.choices[0].message.content || "";
  }
  if (p === "gemini") {
    const j = await post(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model || "gemini-flash-latest")}:generateContent`, { "content-type": "application/json", "x-goog-api-key": key },
      { contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig: { temperature: 0.3, ...(json ? { responseMimeType: "application/json" } : {}) } });
    return (j.candidates?.[0]?.content?.parts || []).map(x => x.text || "").join("");
  }
  const j = await post("https://api.anthropic.com/v1/messages", { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
    { model: model || "claude-sonnet-5-5", max_tokens: 3000, messages: [{ role: "user", content: prompt }] });
  return j.content.map(c => c.text || "").join("");
}
function parseJSON(t) { const a = t.indexOf("{"), b = t.lastIndexOf("}"); return JSON.parse(t.slice(a, b + 1)); }

const RUBRIC_W = `Use the official public IELTS Writing band descriptors. Criteria: Task Achievement (Task 1) or Task Response (Task 2), Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy. Be strict and realistic like a real examiner; do not inflate. Penalise under-length answers (Task 1 < 150 words, Task 2 < 250 words) and off-topic or memorised content.`;
function writingPrompt(task, prompt, text, chart) {
  return `You are an experienced, certified IELTS Academic examiner. ${RUBRIC_W}
Task ${task} question: ${prompt}
${chart ? "Chart data (JSON): " + JSON.stringify(chart) : ""}
Candidate's answer (${wc(text)} words):
"""${text}"""
Reply with ONLY valid JSON, no markdown:
{"band":6.5,"criteria":{"TA":6,"CC":7,"LR":6,"GRA":6},"summary":"2-3 sentence overall verdict","strengths":["..."],"improve":["specific, actionable point", "..."],"fixes":[{"from":"exact phrase from the answer with an error","to":"corrected version"}],"upgrade":"Rewrite ONE weak paragraph from the answer at Band 8.5-9 level"}
Give at most 6 fixes. Bands in 0.5 steps; overall band = average of criteria rounded to nearest 0.5.`;
}
function speakingPrompt(parts) {
  return `You are an experienced, certified IELTS Speaking examiner. Below are transcripts of a candidate's answers (produced by speech-to-text or typed, so ignore punctuation and minor transcription errors). Score with the official public IELTS Speaking band descriptors: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation. Pronunciation cannot be heard from text: estimate it conservatively from the other criteria and say so. Penalise very short answers. Be strict and realistic.
${parts}
Reply with ONLY valid JSON, no markdown:
{"band":6.5,"criteria":{"FC":6,"LR":7,"GRA":6,"P":6},"summary":"2-3 sentences","strengths":["..."],"improve":["specific, actionable point"],"fixes":[{"from":"phrase the candidate said","to":"more natural / accurate version"}],"upgrade":"A model Band 8.5-9 version of the candidate's Part 2 answer (or best answer), about 150 words, keeping their ideas"}`;
}

/* ---------- voice (listening audio) ---------- */
let speaking = false;
window.onTtsDone = () => { speaking = false; ttsResolve && ttsResolve(); ttsResolve = null; refreshPlay(); };
let ttsResolve = null;
function canSpeak() { return !!(A && A.speakLines) || !!CL.tts || "speechSynthesis" in window; }
function pickVoices() {
  const vs = (window.speechSynthesis?.getVoices() || []).filter(v => /^en/i.test(v.lang));
  const pref = vs.filter(v => /GB|AU|IE/i.test(v.lang));
  const pool = pref.length > 1 ? pref : vs;
  return { F: pool.find(v => /female|samantha|karen|serena|moira|kate|susan|libby|sonia/i.test(v.name)) || pool[0], M: pool.find(v => /male|daniel|arthur|oliver|ryan|george|fred|aaron/i.test(v.name) && !/female/i.test(v.name)) || pool[1] || pool[0] };
}
function speakLines(lines, rate = 1) {
  stopSpeak(); speaking = true; refreshPlay();
  return new Promise((res, rej) => {
    ttsResolve = res;
    if (A && A.speakLines) { A.speakLines(JSON.stringify(lines.map(([s, t]) => ({ t, p: s === "F" ? 1.15 : 0.88 }))), rate); return; }
    if (CL.tts) {
      CL.tts.speak(lines.map(([s, t]) => ({ text: t, voice: s === "F" ? "airy" : "rounded", rate, language: "en" }))).then(() => window.onTtsDone()).catch(e => { speaking = false; refreshPlay(); rej(e); });
      return;
    }
    if ("speechSynthesis" in window) {
      const v = pickVoices(); const ss = window.speechSynthesis;
      const parts = lines.flatMap(([s, t]) => (t.match(/[^.!?]+[.!?]*/g) || [t]).map(x => [s, x.trim()]).filter(x => x[1]));
      parts.forEach(([s, t], i) => {
        const u = new SpeechSynthesisUtterance(t); u.lang = "en-GB"; u.rate = 0.95 * rate; u.pitch = s === "F" ? 1.12 : 0.88;
        if (v[s]) u.voice = v[s];
        if (i === parts.length - 1) u.onend = () => window.onTtsDone();
        ss.speak(u);
      });
      return;
    }
    speaking = false; rej(new Error("no voice"));
  });
}
function stopSpeak() {
  if (A && A.stopSpeak) A.stopSpeak();
  if (CL.tts) { try { CL.tts.stop(); } catch (e) {} }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  speaking = false; ttsResolve = null;
}
function refreshPlay() { document.querySelectorAll("[data-act=play]").forEach(b => { b.innerHTML = speaking ? ICONS.stop + " Stop" : ICONS.play + (b.dataset.once ? " Play recording (once)" : " Play recording"); }); }
if ("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = () => {};

/* ---------- microphone (speaking) ---------- */
let micTarget = null, rec = null;
window.onSpeechResult = text => { appendTo(micTarget, text); };
window.onSpeechEnd = () => { setMic(false); };
function appendTo(id, text) {
  const ta = document.getElementById(id); if (!ta || !text) return;
  ta.value = (ta.value ? ta.value.trimEnd() + " " : "") + text.trim();
  ta.dispatchEvent(new Event("input", { bubbles: true }));
}
function setMic(on) { document.querySelectorAll(".mic").forEach(m => m.classList.toggle("on", on && m.dataset.t === micTarget)); }
function micToggle(target) {
  if (micTarget === target && document.querySelector(".mic.on")) { stopMic(); return; }
  stopMic(); micTarget = target;
  if (A && A.listen) { A.listen(); setMic(true); return; }
  if (CL.dict) {
    rec = { stop: () => CL.dict.stop() };
    CL.dict.onFinal(({ text }) => appendTo(micTarget, text));
    CL.dict.onState(({ state }) => setMic(state === "listening"));
    CL.dict.start().catch(() => toast("Microphone not allowed — you can type your answer."));
    setMic(true); return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) {
    rec = new SR(); rec.lang = "en-GB"; rec.continuous = true; rec.interimResults = false;
    rec.onresult = e => { for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) appendTo(micTarget, e.results[i][0].transcript); };
    rec.onend = () => setMic(false); rec.onerror = e => { setMic(false); if (e.error !== "aborted") toast("Mic error: " + e.error + ". You can type instead."); };
    try { rec.start(); setMic(true); } catch (e) { toast("Mic not available — type your answer."); }
    return;
  }
  toast("Speech-to-text isn't available in this browser. Speak aloud, then type what you said, or use Chrome/Safari.");
}
function stopMic() { try { rec && rec.stop(); } catch (e) {} rec = null; setMic(false); }
const micBtn = t => `<button class="mic" data-act="mic" data-t="${t}" aria-label="Speak your answer">${ICONS.mic}</button>`;

/* ---------- scoring helpers ---------- */
const LTAB = [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 2]];
const RTAB = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 2]];
const toBand = (raw, total, tab) => { const s = Math.round(raw / total * 40); return tab.find(([m]) => s >= m)[1]; };
const roundBand = x => { const f = Math.floor(x), r = x - f; return r < 0.25 ? f : r < 0.75 ? f + 0.5 : f + 1; };
const fmtB = b => (b == null ? "–" : Number(b).toFixed(1));
const norm = s => String(s ?? "").toLowerCase().replace(/[£$,]/g, "").replace(/\s+/g, " ").replace(/[.\s]+$/, "").trim();
function isRight(q, a) {
  if (a == null || a === "") return false;
  if (q.t === "gap") return q.a.some(x => norm(x) === norm(a) || norm(x).replace(/,/g, "") === norm(a));
  return a === q.a;
}
const answerText = q => q.t === "gap" ? q.a[0] : q.t === "mc" ? q.o[q.a] : ({ T: "TRUE", F: "FALSE", NG: "NOT GIVEN", Y: "YES", N: "NO" })[q.a];
const wc = t => (String(t).trim().match(/\S+/g) || []).length;

/* ---------- state ---------- */
const S = { tab: "L", act: null, ans: {}, shown: {}, timerEnd: 0, timerStart: 0, fb: {}, busy: {} };
let timerInt = null;
function startTimer(mins) { S.timerStart = Date.now(); S.timerEnd = mins ? Date.now() + mins * 60000 : 0; }
function tick() {
  const el = document.getElementById("tmr"); if (!el) return;
  let ms = S.timerEnd ? S.timerEnd - Date.now() : Date.now() - S.timerStart;
  const neg = ms < 0; ms = Math.abs(ms);
  const m = Math.floor(ms / 60000), s = Math.floor(ms % 60000 / 1000);
  el.textContent = (neg ? "-" : "") + m + ":" + pad(s);
  el.classList.toggle("low", !!S.timerEnd && (S.timerEnd - Date.now()) < 120000);
  const pt = document.getElementById("ptmr");
  if (pt && S.pt) { const left = Math.max(0, Math.ceil((S.pt.end - Date.now()) / 1000)); pt.textContent = S.pt.label + " " + Math.floor(left / 60) + ":" + pad(left % 60); if (!left && !S.pt.fired) { S.pt.fired = true; beep(); if (S.pt.next) { S.pt = { label: "Speak", end: Date.now() + S.pt.next * 1000 }; } } }
}
timerInt = setInterval(tick, 1000);
function beep() { try { const c = new (window.AudioContext || window.webkitAudioContext)(); const o = c.createOscillator(); o.frequency.value = 880; o.connect(c.destination); o.start(); setTimeout(() => { o.stop(); c.close(); }, 250); } catch (e) {} if (navigator.vibrate) navigator.vibrate(200); }

/* ---------- daily progress, XP, streak, badges ---------- */
function todayRec() { const p = P(); const k = dayKey(); return p.days[k] || (p.days[k] = {}); }
function addXP(n) { P().xp += n; save(); drawTop(); }
function markDone(m) {
  const t = todayRec(); const was = ["L", "R", "W", "S"].every(k => t[k]);
  t[m] = true; P().done[m] = (P().done[m] || 0) + 1; save();
  if (!was && ["L", "R", "W", "S"].every(k => t[k])) { addXP(50); confetti(); toast("All four modules done today! +50 XP. Streak: " + streak() + " days"); }
  checkBadges(); drawTop();
}
function streak() {
  const p = P(); let n = 0; const d = new Date();
  const full = k => { const r = p.days[k]; return r && r.L && r.R && r.W && r.S; };
  if (!full(dayKey(d))) d.setDate(d.getDate() - 1);
  while (full(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
const LEVELS = ["Starter", "Explorer", "Achiever", "Scholar", "Expert", "Band 8 Hunter", "Band 9 Legend"];
const level = xp => { const i = Math.min(LEVELS.length - 1, Math.floor(xp / 400)); return { i: i + 1, name: LEVELS[i], pct: (xp % 400) / 4 }; };
const BADGES = [
  ["first", "First step", p => p.xp > 0], ["four", "All 4 in a day", p => Object.values(p.days).some(r => r.L && r.R && r.W && r.S)],
  ["s3", "3-day streak", () => streak() >= 3], ["s7", "7-day streak", () => streak() >= 7], ["s21", "21-day streak", () => streak() >= 21],
  ["m1", "First mock", p => p.results.length >= 1], ["m5", "5 mocks", p => new Set(p.results.map(r => r.id)).size >= 5], ["m10", "All 10 mocks", p => new Set(p.results.map(r => r.id)).size >= 10],
  ["b7", "Band 7 section", p => p.results.some(r => ["L", "R", "W", "S"].some(k => r[k] >= 7))], ["b8", "Band 8 section", p => p.results.some(r => ["L", "R", "W", "S"].some(k => r[k] >= 8))],
  ["b85", "8.5 overall!", p => p.results.some(r => r.overall >= 8.5)], ["w25", "25 words learned", p => p.words.length >= 25], ["wr10", "10 essays", p => p.writes >= 10]
];
function checkBadges() { const p = P(); BADGES.forEach(([id, n, f]) => { if (!p.badges.includes(id) && f(p)) { p.badges.push(id); toast("Badge unlocked: " + n); } }); save(); }

/* ---------- UI helpers ---------- */
function toast(msg) { let box = document.getElementById("toasts"); if (!box) { box = document.createElement("div"); box.id = "toasts"; document.body.appendChild(box); } const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; box.appendChild(t); setTimeout(() => t.remove(), 3400); }
function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("canvas"); c.className = "confetti"; c.width = innerWidth; c.height = innerHeight; document.body.appendChild(c);
  const x = c.getContext("2d"), cols = ["#ffd23f", "#ff6b4a", "#0f8b8d", "#2f5bea", "#7a4dd8"];
  const ps = Array.from({ length: 120 }, () => ({ x: innerWidth / 2, y: innerHeight / 3, vx: (Math.random() - .5) * 12, vy: Math.random() * -12 - 2, c: cols[Math.floor(Math.random() * 5)], s: 4 + Math.random() * 5 }));
  let f = 0; const step = () => { x.clearRect(0, 0, c.width, c.height); ps.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.35; x.fillStyle = p.c; x.fillRect(p.x, p.y, p.s, p.s); }); if (++f < 110) requestAnimationFrame(step); else c.remove(); }; step();
}
function ring(pct, label, sub) {
  const r = 34, C = 2 * Math.PI * r, off = C * (1 - Math.max(0, Math.min(1, pct)));
  return `<svg class="ring" viewBox="0 0 84 84" role="img" aria-label="${esc(label)}"><circle cx="42" cy="42" r="${r}" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="8"/><circle cx="42" cy="42" r="${r}" fill="none" stroke="#ffd23f" stroke-width="8" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${off}" transform="rotate(-90 42 42)"/><text x="42" y="44" text-anchor="middle" fill="#fff" font-size="18" font-weight="700" font-family="Lexend">${esc(label)}</text><text x="42" y="60" text-anchor="middle" fill="#fff" font-size="9" opacity=".85" font-family="Lexend">${esc(sub)}</text></svg>`;
}
function drawTop() {
  const p = P(); if (!p) return;
  $("#hello").textContent = "Hi " + p.name + " · target " + fmtB(p.target);
  $("#streakPill").innerHTML = ICONS.fire + streak();
  $("#xpPill").innerHTML = ICONS.star + p.xp;
  const t = p.days[dayKey()] || {};
  $("#daybar").innerHTML = ["L", "R", "W", "S"].map(k => `<div class="chip ${t[k] ? "done" : ""}">${t[k] ? "✓" : ""} ${MODS[k].short}</div>`).join("");
  $("#nav").innerHTML = Object.entries(MODS).map(([k, m]) => `<button data-act="tab" data-v="${k}" class="${S.tab === k ? "on" : ""}" style="--c:${m.c}" aria-label="${m.name}">${ICONS[k]}${m.short === "Mock" ? "Mock Tests" : m.name}</button>`).join("");
}

/* ---------- question rendering ---------- */
function renderQs(qs, key, reveal, numStart = 1) {
  const ans = S.ans[key] || (S.ans[key] = []);
  return qs.map((q, i) => {
    const a = ans[i]; const ok = reveal && isRight(q, a);
    let input;
    if (q.t === "gap") input = `<input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" data-k="${key}" data-i="${i}" value="${esc(a || "")}" ${reveal ? "disabled" : ""} aria-label="Answer ${numStart + i}">`;
    else {
      const opts = q.t === "mc" ? q.o.map((o, j) => [j, String.fromCharCode(65 + j) + ". " + o]) : q.t === "tfng" ? [["T", "TRUE"], ["F", "FALSE"], ["NG", "NOT GIVEN"]] : [["Y", "YES"], ["N", "NO"], ["NG", "NOT GIVEN"]];
      input = `<div class="${q.t === "mc" ? "opts" : "seg"}">${opts.map(([v, l]) => {
        const sel = a === v; let cls = sel ? "sel" : "";
        if (reveal) cls = v === q.a ? "right" : sel ? "wrong" : "";
        return `<button class="opt ${cls}" data-act="pick" data-k="${key}" data-i="${i}" data-v="${v}" ${reveal ? "disabled" : ""}>${esc(l)}</button>`;
      }).join("")}</div>`;
    }
    return `<div class="q"><div class="qt">${numStart + i}. ${esc(q.q)}</div>${input}${reveal ? `<div class="fb ${ok ? "ok" : "no"}">${ok ? "Correct" : "Answer: " + esc(answerText(q))}</div>` : ""}</div>`;
  }).join("");
}
function scoreQs(qs, key) { const a = S.ans[key] || []; return qs.reduce((n, q, i) => n + (isRight(q, a[i]) ? 1 : 0), 0); }
const scriptHTML = sc => `<div class="script">${sc.map(([s, t]) => `<p><b>${s === "F" ? "Woman" : "Man"}:</b> ${esc(t)}</p>`).join("")}</div>`;
function chartHTML(ch) {
  if (ch.type === "table") return `<div class="scroll"><table class="t1"><caption class="mute" style="text-align:left;padding-bottom:6px">${esc(ch.title)}</caption><thead><tr><th></th>${ch.series.map(s => `<th>${esc(s.name)}</th>`).join("")}</tr></thead><tbody>${ch.labels.map((l, i) => `<tr><td>${esc(l)}</td>${ch.series.map(s => `<td>${s.values[i]}${ch.unit === "%" ? "%" : ""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const W = 600, H = 300, L = 46, B = 52, T = 30, R = 12, cols = ["#0f8b8d", "#e8553a", "#2f5bea", "#7a4dd8"];
  const raw = Math.max(...ch.series.flatMap(s => s.values)), mag = 10 ** Math.floor(Math.log10(raw)), stp = [1, 2, 2.5, 5, 10].map(x => x * mag / 4).find(x => x * 4 >= raw) || mag, max = stp * 4, ih = H - T - B, iw = W - L - R, n = ch.labels.length;
  const y = v => T + ih - v / max * ih;
  let g = "";
  for (let k = 0; k <= 4; k++) { const v = max / 4 * k; g += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" stroke="currentColor" opacity=".12"/><text x="${L - 6}" y="${y(v) + 4}" font-size="11" text-anchor="end" fill="currentColor" opacity=".7">${Math.round(v)}</text>`; }
  if (ch.type === "bar") {
    const gw = iw / n, bw = Math.min(28, (gw - 12) / ch.series.length);
    ch.labels.forEach((lab, i) => { ch.series.forEach((s, j) => { const x = L + i * gw + (gw - bw * ch.series.length) / 2 + j * bw; g += `<rect x="${x}" y="${y(s.values[i])}" width="${bw - 2}" height="${T + ih - y(s.values[i])}" fill="${cols[j]}" rx="2"/>`; }); g += `<text x="${L + i * gw + gw / 2}" y="${H - B + 16}" font-size="11.5" text-anchor="middle" fill="currentColor">${esc(lab)}</text>`; });
  } else {
    const x = i => L + (n === 1 ? iw / 2 : i / (n - 1) * iw);
    ch.labels.forEach((lab, i) => g += `<text x="${x(i)}" y="${H - B + 16}" font-size="11.5" text-anchor="middle" fill="currentColor">${esc(lab)}</text>`);
    ch.series.forEach((s, j) => { g += `<polyline fill="none" stroke="${cols[j]}" stroke-width="2.5" points="${s.values.map((v, i) => x(i) + "," + y(v)).join(" ")}"/>` + s.values.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="3.5" fill="${cols[j]}"/>`).join(""); });
  }
  const leg = ch.series.map((s, j) => `<rect x="${L + j * 130}" y="${H - 22}" width="12" height="12" fill="${cols[j]}" rx="2"/><text x="${L + j * 130 + 17}" y="${H - 12}" font-size="12" fill="currentColor">${esc(s.name)}</text>`).join("");
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(ch.title)}"><text x="${L}" y="16" font-size="13" font-weight="600" fill="currentColor">${esc(ch.title)}</text>${g}${leg}</svg>`;
}
function feedbackHTML(fb, kind) {
  if (!fb) return "";
  if (fb.loading) return `<div class="card ai"><span class="spin"></span> Examiner is marking your answer…</div>`;
  if (fb.error) return `<div class="card ai"><b>Couldn't score:</b> ${esc(fb.error)}</div>`;
  const names = kind === "W" ? { TA: "Task response", CC: "Coherence", LR: "Vocabulary", GRA: "Grammar" } : { FC: "Fluency", LR: "Vocabulary", GRA: "Grammar", P: "Pronunciation*" };
  return `<div class="card ai"><div class="row" style="justify-content:space-between"><h3>AI examiner score</h3><span class="word">Band ${fmtB(fb.band)}</span></div>
  ${Object.entries(fb.criteria || {}).map(([k, v]) => `<div class="crit"><span>${names[k] || k}</span><div class="bar"><i style="width:${v / 9 * 100}%"></i></div><b>${fmtB(v)}</b></div>`).join("")}
  ${kind === "S" ? `<p class="mute">*Pronunciation is estimated from your transcript.</p>` : ""}
  <p>${esc(fb.summary)}</p>
  ${fb.strengths?.length ? `<h3>Strengths</h3><ul>${fb.strengths.map(s => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
  ${fb.improve?.length ? `<h3>To reach 8.5</h3><ul>${fb.improve.map(s => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
  ${fb.fixes?.length ? `<h3>Corrections</h3>${fb.fixes.map(f => `<div class="fix"><s>${esc(f.from)}</s> → <b>${esc(f.to)}</b></div>`).join("")}` : ""}
  ${fb.upgrade ? `<h3 style="margin-top:12px">Band 9 version</h3><p style="font-size:15px">${esc(fb.upgrade)}</p>` : ""}</div>`;
}
const noAI = `<div class="card ai"><b>AI scoring is off.</b> <span class="mute">Add a free Groq or Gemini key to get a band score, corrections and a Band 9 rewrite.</span><div style="margin-top:8px"><button class="btn small" data-act="keysheet">Add free API key</button></div></div>`;

/* ---------- PREP TABS ---------- */
function hero(m, title, text, extra = "") {
  return `<div class="hero" style="--c:${MODS[m].c}"><div><h1>${title}</h1><p>${text}</p>${extra}</div>${ring(Math.min(1, (P().done[m] || 0) / 20), String(P().done[m] || 0), "sessions")}</div>`;
}
const tipsHTML = m => `<details class="tips"><summary>Strategy tips for Band 8+</summary><ul>${PRACTICE.tips[{ L: "listening", R: "reading", W: "writing", S: "speaking" }[m]].map(t => `<li>${esc(t)}</li>`).join("")}</ul></details>`;

function viewL() {
  if (S.act) return actLR("L");
  const p = P(); const sets = [...PRACTICE.listening, ...p.gen.L];
  return hero("L", "Listening", "30 minutes, 4 parts, 40 questions in the real test. Every drill plays the audio aloud; the transcript appears after you check your answers.") + tipsHTML("L") +
    `<h2>Practice sets</h2><div class="list" style="--c:var(--L)">${sets.map((s, i) => `<button class="item" data-act="open" data-v="${i}"><span class="num">P${s.part}</span><span class="grow"><b>${esc(s.title)}</b><br><span class="mute">${s.qs.length} questions${i >= PRACTICE.listening.length ? " · AI-made" : ""}</span></span><span class="score">${p.drafts["L" + i] != null ? p.drafts["L" + i] + "/" + s.qs.length : ""}</span></button>`).join("")}</div>` +
    genBtn("L", "listening");
}
function viewR() {
  if (S.act) return actLR("R");
  const p = P(); const sets = [...PRACTICE.reading, ...p.gen.R];
  return hero("R", "Reading", "60 minutes, 3 passages, 40 questions. Aim for 20 minutes per passage.") + tipsHTML("R") + wordCard() +
    `<h2>Practice passages</h2><div class="list" style="--c:var(--R)">${sets.map((s, i) => `<button class="item" data-act="open" data-v="${i}"><span class="num">${i + 1}</span><span class="grow"><b>${esc(s.title.replace("Practice: ", ""))}</b><br><span class="mute">${s.qs.length} questions${i >= PRACTICE.reading.length ? " · AI-made" : ""}</span></span><span class="score">${p.drafts["R" + i] != null ? p.drafts["R" + i] + "/" + s.qs.length : ""}</span></button>`).join("")}</div>` +
    genBtn("R", "reading passage");
}
function genBtn(m, what) {
  if (!aiReady()) return `<button class="btn ghost" style="--c:${MODS[m].c};margin-top:12px;width:100%" data-act="keysheet">Add a free API key to generate unlimited new ${what}s</button>`;
  return `<button class="btn ghost" style="--c:${MODS[m].c};margin-top:12px;width:100%" data-act="gen" data-v="${m}" ${S.busy.gen ? "disabled" : ""}>${S.busy.gen ? '<span class="spin"></span> Writing a new ' + what + "…" : "Generate a new " + what + " with AI"}</button>`;
}
function actLR(m) {
  const sets = m === "L" ? [...PRACTICE.listening, ...P().gen.L] : [...PRACTICE.reading, ...P().gen.R];
  const s = sets[S.act.i]; const key = m + "p" + S.act.i; const rev = S.shown[key];
  const top = `<button class="btn ghost small" style="--c:${MODS[m].c}" data-act="back">← Back</button>`;
  if (m === "L") {
    return `${top}<h1 style="margin-top:12px">${esc(s.title)}</h1><p class="mute">${esc(s.intro)}</p>
    <div class="card" style="--c:var(--L)"><div class="row"><button class="btn" data-act="play">${ICONS.play} Play recording</button>
    <select id="rate" aria-label="Speed" style="min-height:44px;border-radius:10px;border:1.5px solid var(--line);background:var(--bg);padding:0 10px"><option value="0.85">Slower</option><option value="1" selected>Normal</option><option value="1.15">Faster</option></select></div>
    ${canSpeak() ? "" : `<p class="mute" style="margin-top:8px">Audio isn't available in this browser. Use "Show transcript" to practise reading instead.</p>`}
    ${rev || S.act.tr ? scriptHTML(s.script) : `<button class="btn ghost small" style="margin-top:10px" data-act="tr">Show transcript (no peeking!)</button>`}</div>
    <div class="card" style="--c:var(--L)">${renderQs(s.qs, key, rev)}</div>${checkBar(m, key, s.qs)}`;
  }
  return `${top}<div class="stat"><span>${esc(s.title.replace("Practice: ", ""))}</span><span class="timer" id="tmr" style="--c:var(--R)">0:00</span></div>
  <div class="passage">${s.text.map(t => `<p>${esc(t)}</p>`).join("")}</div>
  <div class="card" style="--c:var(--R)">${renderQs(s.qs, key, rev)}</div>${checkBar(m, key, s.qs)}`;
}
function checkBar(m, key, qs) {
  if (S.shown[key]) { const sc = scoreQs(qs, key); return `<div class="card" style="--c:${MODS[m].c}"><h3>Score: ${sc}/${qs.length}</h3><p class="mute">About Band ${fmtB(toBand(sc, qs.length, m === "L" ? LTAB : RTAB))} if you kept this rate across a full test.</p><button class="btn" data-act="retry">Try again</button></div>`; }
  return `<button class="btn" style="--c:${MODS[m].c};width:100%" data-act="check">Check answers</button>`;
}

function wordOfDay() { const d = new Date(); const i = (d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate()) % PRACTICE.vocab.length; return [i, PRACTICE.vocab[i]]; }
function wordCard() {
  const [i, [w, def, ex]] = wordOfDay(); const learned = P().words.includes(w);
  const q = S.wq; let quiz = "";
  if (!learned) {
    if (!q || q.i !== i) { const others = PRACTICE.vocab.filter((_, j) => j !== i).sort(() => Math.random() - .5).slice(0, 2).map(v => v[1]); S.wq = { i, opts: [def, ...others].sort(() => Math.random() - .5) }; }
    quiz = `<p class="mute" style="margin-top:8px">Quick quiz: what does it mean?</p><div class="opts">${S.wq.opts.map(o => `<button class="opt" data-act="wq" data-v="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
  }
  return `<div class="card" style="--c:var(--R)"><span class="tag">Word of the day · ${P().words.length} learned</span><div class="word" style="margin-top:6px">${esc(w)}</div>${learned ? `<p>${esc(def)}</p>` : ""}<p class="mute"><i>${esc(ex)}</i></p>${quiz}</div>`;
}

function viewW() {
  const p = P();
  if (S.act) {
    const a = S.act; const t = a.task === 1 ? PRACTICE.writingT1[a.i] : { prompt: PRACTICE.writingT2[a.i] };
    const dk = "w" + a.task + "_" + a.i; const text = p.drafts[dk] || ""; const min = a.task === 1 ? 150 : 250;
    return `<button class="btn ghost small" style="--c:var(--W)" data-act="back">← Back</button>
    <div class="stat" style="margin-top:12px"><span class="tag" style="--c:var(--W)">Task ${a.task} · ${a.task === 1 ? "20" : "40"} min</span><span class="timer" id="tmr" style="--c:var(--W)"></span></div>
    <div class="card"><p>${esc(t.prompt)}</p>${t.chart ? chartHTML(t.chart) : ""}</div>
    <textarea id="wtext" data-draft="${dk}" placeholder="Write your answer here…">${esc(text)}</textarea>
    <div class="stat"><span id="wcount">${wc(text)} words</span><span>min ${min}</span></div>
    <button class="btn" style="--c:var(--W);width:100%" data-act="wsubmit" ${S.busy.w ? "disabled" : ""}>${aiReady() ? "Submit for AI examiner score" : "Submit (self-check)"}</button>
    ${S.fb[dk] ? feedbackHTML(S.fb[dk], "W") : ""}${!aiReady() && S.shown[dk] ? noAI + selfCheck("W") : ""}`;
  }
  return hero("W", "Writing", "Task 1 (150+ words, describe a chart) and Task 2 (250+ word essay). Task 2 counts double.") + aiCard() + tipsHTML("W") +
    `<h2>Task 1 · describe the data</h2><div class="list" style="--c:var(--W)">${PRACTICE.writingT1.map((t, i) => `<button class="item" data-act="wopen" data-v="1_${i}"><span class="num">T1</span><span class="grow">${esc(t.chart.title)}<br><span class="mute">${t.chart.type} ${t.chart.type === "table" ? "" : "chart"}</span></span></button>`).join("")}</div>
    <h2>Task 2 · essays</h2><div class="list" style="--c:var(--W)">${PRACTICE.writingT2.map((t, i) => `<button class="item" data-act="wopen" data-v="2_${i}"><span class="num">${i + 1}</span><span class="grow" style="font-size:14.5px">${esc(t)}</span></button>`).join("")}</div>
    <h2>Band 8 phrases</h2><div class="card">${PRACTICE.phrases.slice(0, 10).map(x => `<p>• ${esc(x)}</p>`).join("")}</div>`;
}
function selfCheck(m) {
  const items = m === "W" ? ["I answered every part of the question", "I wrote a clear overview / position", "Each paragraph has one main idea", "I used linking words naturally (however, consequently…)", "I used precise, less common vocabulary", "I mixed complex and simple sentences with few errors", "I met the word count"]
    : ["I answered at length with reasons and examples", "I rarely hesitated or repeated myself", "I used idioms and topic vocabulary naturally", "I used a range of tenses and complex sentences", "I spoke clearly with natural stress"];
  return `<div class="card"><h3>Self-check</h3>${items.map(i => `<label class="row" style="margin:8px 0;flex-wrap:nowrap;align-items:flex-start"><input type="checkbox" style="width:20px;height:20px;flex:none;margin-top:3px"> <span>${esc(i)}</span></label>`).join("")}<p class="mute">Ticking all of these consistently is roughly Band 7.5+.</p></div>`;
}

const P1POOL = () => MOCKS.flatMap(m => m.speaking.p1);
const P3POOL = () => MOCKS.flatMap(m => m.speaking.p3);
function viewS() {
  if (S.act) return actS();
  const ph = PRACTICE.phrases[new Date().getDate() % PRACTICE.phrases.length];
  return hero("S", "Speaking", "11–14 minutes with an examiner: Part 1 about you, Part 2 a 2-minute talk, Part 3 a discussion.") + aiCard() + tipsHTML("S") +
    `<div class="card" style="--c:var(--S)"><span class="tag">Phrase of the day</span><p style="font-size:19px;font-weight:600;margin-top:6px">“${esc(ph)}”</p><p class="mute">Use it at least once in today's practice.</p></div>
    <h2>Practice</h2><div class="list" style="--c:var(--S)">
    <button class="item" data-act="sopen" data-v="p1"><span class="num">P1</span><span class="grow"><b>Part 1 quick-fire</b><br><span class="mute">4 random questions about you</span></span></button>
    <button class="item" data-act="sopen" data-v="p3"><span class="num">P3</span><span class="grow"><b>Part 3 discussion</b><br><span class="mute">3 abstract questions</span></span></button></div>
    <h2>Part 2 cue cards</h2><div class="list" style="--c:var(--S)">${PRACTICE.speakingCards.map((c, i) => `<button class="item" data-act="sopen" data-v="c${i}"><span class="num">${i + 1}</span><span class="grow">${esc(c.topic)}</span></button>`).join("")}</div>`;
}
function actS() {
  const a = S.act; const top = `<button class="btn ghost small" style="--c:var(--S)" data-act="back">← Back</button>`;
  let body = "";
  if (a.kind === "card") {
    const c = PRACTICE.speakingCards[a.i];
    body = `<div class="card cue"><h3>${esc(c.topic)}</h3>You should say:<ul>${c.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
    <div class="row" style="margin-bottom:10px"><button class="btn small" style="--c:var(--S)" data-act="ptimer">Start 1-min prep → 2-min talk</button><span class="timer" id="ptmr" style="--c:var(--S)"></span></div>
    <div class="row" style="align-items:flex-start;flex-wrap:nowrap">${micBtn("sa0")}<textarea id="sa0" class="short" placeholder="Tap the mic and speak, or type what you said…">${esc(a.ans[0] || "")}</textarea></div>`;
  } else {
    body = a.qs.map((q, i) => `<div class="card"><p><b>${i + 1}. ${esc(q)}</b></p><div class="row" style="align-items:flex-start;flex-wrap:nowrap">${micBtn("sa" + i)}<textarea id="sa${i}" class="short" placeholder="Tap the mic and answer out loud…">${esc(a.ans[i] || "")}</textarea></div></div>`).join("");
  }
  return `${top}<h1 style="margin-top:12px">${a.kind === "card" ? "Part 2 talk" : a.kind === "p1" ? "Part 1" : "Part 3"}</h1>
  <p class="mute">Answer out loud. The mic turns your speech into text so the AI examiner can score it.</p>${body}
  <button class="btn" style="--c:var(--S);width:100%" data-act="ssubmit" ${S.busy.s ? "disabled" : ""}>${aiReady() ? "Get my speaking band" : "Finish (self-check)"}</button>
  ${S.fb.sp ? feedbackHTML(S.fb.sp, "S") : ""}${!aiReady() && S.shown.sp ? noAI + selfCheck("S") : ""}`;
}

/* ---------- MOCK TESTS ---------- */
function viewM() {
  if (DB.run && DB.run.pid === DB.cur) return mockRun();
  if (S.review != null) return mockReview();
  const p = P(); const res = p.results; const best = res.length ? Math.max(...res.map(r => r.overall || 0)) : null;
  const days = p.examDate ? Math.ceil((new Date(p.examDate) - new Date(dayKey())) / 86400000) : null;
  const lv = level(p.xp);
  const last = res.slice(-10);
  return `<div class="hero" style="--c:var(--M)"><div><h1>Mock Tests</h1><p>10 full Academic tests: Listening, Reading, Writing and Speaking, timed like the real exam, with a band for each section and overall.</p>
    <p style="margin-top:8px"><b>Best overall: ${fmtB(best)}</b> · target ${fmtB(p.target)}${days != null ? ` · exam in ${days} days` : ""}</p></div>${ring((best || 0) / p.target, fmtB(best), "best band")}</div>
  ${last.length ? `<div class="card"><h3>Your last ${last.length} mock${last.length > 1 ? "s" : ""}</h3><div class="hist">${last.map(r => `<div style="height:${(r.overall || 0) / 9 * 100}%" title="Mock ${r.id}"><span>${fmtB(r.overall)}</span></div>`).join("")}</div></div>` : ""}
  <h2>Choose a test</h2><div class="list" style="--c:var(--M)">${MOCKS.map(m => { const rs = res.filter(r => r.id === m.id); const b = rs.length ? Math.max(...rs.map(r => r.overall || 0)) : null; return `<button class="item" data-act="mstart" data-v="${m.id}"><span class="num">${m.id}</span><span class="grow"><b>${esc(m.title)}</b><br><span class="mute">${rs.length ? rs.length + " attempt" + (rs.length > 1 ? "s" : "") : "Not taken yet"}</span></span><span class="score">${b != null ? "Band " + fmtB(b) : ""}</span></button>`; }).join("")}</div>
  ${res.length ? `<h2>History</h2><div class="list">${res.slice().reverse().map((r, k) => `<button class="item" data-act="review" data-v="${res.length - 1 - k}" style="--c:var(--M)"><span class="num">${r.id}</span><span class="grow">${esc(r.date)}<br><span class="mute">L ${fmtB(r.L)} · R ${fmtB(r.R)} · W ${fmtB(r.W)} · S ${fmtB(r.S)}</span></span><span class="score">${fmtB(r.overall)}</span></button>`).join("")}</div>` : ""}
  <h2>Level ${lv.i}: ${lv.name}</h2><div class="card"><div class="bar" style="--c:var(--coral)"><i style="width:${lv.pct}%"></i></div><p class="mute" style="margin-top:6px">${p.xp} XP · ${400 - p.xp % 400} XP to next level</p>
  <h3 style="margin-top:12px">Badges</h3><div class="badges">${BADGES.map(([id, n]) => `<span class="badge ${p.badges.includes(id) ? "" : "off"}">${esc(n)}</span>`).join("")}</div></div>
  <div class="card"><h3>Share progress with your friend</h3><p class="mute">Copy a summary and send it to your study partner.</p><button class="btn small" data-act="share">Copy my progress</button></div>`;
}
const STAGES = ["L", "R", "W", "S", "done"];
function mockRun() {
  const r = DB.run; const m = MOCKS.find(x => x.id === r.id);
  const steps = `<div class="row" style="margin-bottom:12px">${["L", "R", "W", "S"].map(k => `<span class="tag" style="--c:${MODS[k].c};${r.stage === k ? "outline:2px solid currentColor" : ""}">${MODS[k].name}</span>`).join("")}<button class="btn ghost small" data-act="mquit" style="margin-left:auto">Quit</button></div>`;
  if (r.stage === "L") {
    const part = m.listening[r.part]; const key = "mL" + r.part;
    return `${steps}<div class="stat"><b>Mock ${m.id} · Listening Part ${r.part + 1} of 4</b><span class="timer" id="tmr" style="--c:var(--L)"></span></div>
    <div class="card" style="--c:var(--L)"><h3>${esc(part.title)}</h3><p class="mute">${esc(part.intro)}</p>
    ${r.played[r.part] && !speaking ? `<p class="mute">Recording played. Answer the questions.</p>` : `<button class="btn" data-act="mplay" data-once="1">${ICONS.play} Play recording (once)</button>`}
    ${canSpeak() ? "" : `<p class="mute">Audio isn't available here, so the transcript is shown instead (this makes the test easier).</p>${scriptHTML(part.script)}`}</div>
    <div class="card" style="--c:var(--L)">${renderQs(part.qs, key, false, r.part * 5 + 1)}</div>
    <button class="btn" style="--c:var(--L);width:100%" data-act="mnext">${r.part < 3 ? "Next part →" : "Finish Listening → Reading"}</button>`;
  }
  if (r.stage === "R") {
    const pas = m.reading[r.part]; const key = "mR" + r.part; const off = m.reading.slice(0, r.part).reduce((n, x) => n + x.qs.length, 1);
    return `${steps}<div class="stat"><b>Reading Passage ${r.part + 1} of 3</b><span class="timer" id="tmr" style="--c:var(--R)"></span></div>
    <div class="row" style="margin-bottom:10px">${m.reading.map((_, i) => `<button class="btn small ${i === r.part ? "" : "ghost"}" style="--c:var(--R)" data-act="mpart" data-v="${i}">Passage ${i + 1}</button>`).join("")}</div>
    <div class="passage"><h3>${esc(pas.title)}</h3>${pas.text.map(t => `<p>${esc(t)}</p>`).join("")}</div>
    <div class="card" style="--c:var(--R)">${renderQs(pas.qs, key, false, off)}</div>
    <button class="btn" style="--c:var(--R);width:100%" data-act="mnext">${r.part < 2 ? "Next passage →" : "Finish Reading → Writing"}</button>`;
  }
  if (r.stage === "W") {
    const t = r.part === 0 ? m.writing.t1 : { prompt: m.writing.t2 }; const k = "w" + (r.part + 1);
    return `${steps}<div class="stat"><b>Writing Task ${r.part + 1}</b><span class="timer" id="tmr" style="--c:var(--W)"></span></div>
    <div class="row" style="margin-bottom:10px">${[0, 1].map(i => `<button class="btn small ${i === r.part ? "" : "ghost"}" style="--c:var(--W)" data-act="mpart" data-v="${i}">Task ${i + 1}</button>`).join("")}</div>
    <div class="card"><p>${esc(t.prompt)}</p>${t.chart ? chartHTML(t.chart) : ""}</div>
    <textarea id="mw" data-run="${k}" placeholder="Write here…">${esc(r[k] || "")}</textarea><div class="stat"><span id="wcount">${wc(r[k] || "")} words</span><span>min ${r.part ? 250 : 150}</span></div>
    <button class="btn" style="--c:var(--W);width:100%" data-act="mnext">${r.part === 0 ? "Go to Task 2 →" : "Finish Writing → Speaking"}</button>`;
  }
  if (r.stage === "S") {
    const sp = m.speaking; const sa = r.sp || (r.sp = {});
    const qbox = (id, q) => `<div class="card"><p><b>${esc(q)}</b></p><div class="row" style="align-items:flex-start;flex-wrap:nowrap">${micBtn(id)}<textarea id="${id}" data-run-sp="${id}" class="short" placeholder="Tap the mic and answer out loud…">${esc(sa[id] || "")}</textarea></div></div>`;
    let body;
    if (r.part === 0) body = `<h3>Part 1 · about you (4–5 min)</h3>` + sp.p1.map((q, i) => qbox("m1_" + i, q)).join("");
    else if (r.part === 1) body = `<h3>Part 2 · long turn (1 min prep, 2 min talk)</h3><div class="card cue"><h3>${esc(sp.p2.topic)}</h3>You should say:<ul>${sp.p2.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="row" style="margin-bottom:10px"><button class="btn small" style="--c:var(--S)" data-act="ptimer">Start prep timer</button><span class="timer" id="ptmr" style="--c:var(--S)"></span></div>
      <div class="row" style="align-items:flex-start;flex-wrap:nowrap">${micBtn("m2")}<textarea id="m2" data-run-sp="m2" placeholder="Speak for 2 minutes…">${esc(sa.m2 || "")}</textarea></div>`;
    else body = `<h3>Part 3 · discussion (4–5 min)</h3>` + sp.p3.map((q, i) => qbox("m3_" + i, q)).join("");
    return `${steps}<div class="stat"><b>Speaking Part ${r.part + 1} of 3</b><span class="timer" id="tmr" style="--c:var(--S)"></span></div>${body}
    <button class="btn" style="--c:var(--S);width:100%;margin-top:12px" data-act="mnext">${r.part < 2 ? "Next part →" : "Finish test & see my band"}</button>`;
  }
  return "";
}
function mockReview() {
  const r = P().results[S.review]; const m = MOCKS.find(x => x.id === r.id);
  const scoreBox = (k, extra) => `<div class="band" style="--c:${MODS[k].c}"><span>${MODS[k].name}</span><b>${r[k] == null ? (S.busy["m" + k] ? '<span class="spin"></span>' : "–") : fmtB(r[k])}</b><span>${extra || ""}</span></div>`;
  const needSelf = ["W", "S"].filter(k => r[k] == null && !S.busy["m" + k]);
  return `<button class="btn ghost small" style="--c:var(--M)" data-act="rback">← All tests</button>
  <h1 style="margin-top:12px">Mock ${m.id}: ${esc(m.title)}</h1><p class="mute">${esc(r.date)}</p>
  <div class="overall"><span>Overall band</span><b>${fmtB(r.overall)}</b><span>${r.overall != null ? (r.overall >= P().target ? "Target reached!" : "Target " + fmtB(P().target) + " · keep going") : "Waiting for Writing & Speaking scores"}</span></div>
  <div class="bands">${scoreBox("L", r.Lraw + "/20 correct")}${scoreBox("R", r.Rraw + "/" + m.reading.reduce((n, x) => n + x.qs.length, 0) + " correct")}${scoreBox("W")}${scoreBox("S")}</div>
  ${needSelf.length ? `<div class="card" style="margin-top:12px"><h3>Score Writing & Speaking</h3>${aiReady() ? `<button class="btn" data-act="mai">Score with AI examiner</button>` : `<p class="mute">AI scoring is off. Add a free API key to score automatically, or rate yourself honestly.</p><button class="btn small" data-act="keysheet" style="margin-bottom:12px">Add free API key</button>${needSelf.map(k => `<div class="field"><label>${MODS[k].name} self-assessed band</label><select data-act="selfband" data-k="${k}"><option value="">Choose…</option>${[4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map(b => `<option>${b}</option>`).join("")}</select></div>`).join("")}`}</div>` : ""}
  ${r.fbW ? `<h2>Writing feedback</h2><p class="mute">Task 1: Band ${fmtB(r.fbW1?.band)} · Task 2: Band ${fmtB(r.fbW2?.band)}</p>${feedbackHTML(r.fbW2, "W")}${feedbackHTML(r.fbW1, "W")}` : ""}
  ${r.fbS ? `<h2>Speaking feedback</h2>${feedbackHTML(r.fbS, "S")}` : ""}
  <h2>Listening answers</h2>${m.listening.map((pt, i) => { S.ans["rvL" + i] = r.Lans[i] || []; return `<div class="card"><h3>Part ${i + 1}: ${esc(pt.title)}</h3>${renderQs(pt.qs, "rvL" + i, true, i * 5 + 1)}<details><summary class="mute">Transcript</summary>${scriptHTML(pt.script)}</details></div>`; }).join("")}
  <h2>Reading answers</h2>${m.reading.map((pt, i) => { S.ans["rvR" + i] = r.Rans[i] || []; return `<div class="card"><h3>${esc(pt.title)}</h3>${renderQs(pt.qs, "rvR" + i, true)}</div>`; }).join("")}`;
}
function finishMock() {
  const r = DB.run; const m = MOCKS.find(x => x.id === r.id);
  const Lans = m.listening.map((_, i) => S.ans["mL" + i] || []), Rans = m.reading.map((_, i) => S.ans["mR" + i] || []);
  const Lraw = m.listening.reduce((n, pt, i) => n + pt.qs.reduce((k, q, j) => k + (isRight(q, Lans[i][j]) ? 1 : 0), 0), 0);
  const Rtot = m.reading.reduce((n, x) => n + x.qs.length, 0);
  const Rraw = m.reading.reduce((n, pt, i) => n + pt.qs.reduce((k, q, j) => k + (isRight(q, Rans[i][j]) ? 1 : 0), 0), 0);
  const res = { id: m.id, date: new Date().toLocaleString(), Lraw, Rraw, L: toBand(Lraw, 20, LTAB), R: toBand(Rraw, Rtot, RTAB), W: null, S: null, overall: null, Lans, Rans, w1: r.w1 || "", w2: r.w2 || "", sp: r.sp || {} };
  P().results.push(res); DB.run = null;
  ["R", "W", "S"].forEach(k => todayRec()[k] = true);
  save(); addXP(100 + Lraw + Rraw); markDone("L");
  S.review = P().results.length - 1; S.tab = "M";
  if (aiReady()) scoreMockAI(S.review);
  render();
}
function finalize(r) { if (r.W != null && r.S != null) { r.overall = roundBand((r.L + r.R + r.W + r.S) / 4); if (r.overall >= 8.5) confetti(); } save(); checkBadges(); }
async function scoreMockAI(idx) {
  const r = P().results[idx]; const m = MOCKS.find(x => x.id === r.id);
  S.busy.mW = S.busy.mS = true; render();
  const jobs = [
    async () => {
      try {
        const a = r.w1.trim() ? parseJSON(await askAI(writingPrompt(1, m.writing.t1.prompt, r.w1, m.writing.t1.chart))) : { band: 0, summary: "No answer written." };
        const b = r.w2.trim() ? parseJSON(await askAI(writingPrompt(2, m.writing.t2, r.w2))) : { band: 0, summary: "No answer written." };
        r.fbW1 = a; r.fbW2 = b; r.fbW = true; r.W = roundBand((a.band + 2 * b.band) / 3);
      } catch (e) { toast("Writing scoring failed: " + e.message); }
      S.busy.mW = false; finalize(r); render();
    },
    async () => {
      const sp = m.speaking, a = r.sp;
      const txt = `PART 1:\n${sp.p1.map((q, i) => "Q: " + q + "\nA: " + (a["m1_" + i] || "(no answer)")).join("\n")}\nPART 2 cue card: ${sp.p2.topic}\nA: ${a.m2 || "(no answer)"}\nPART 3:\n${sp.p3.map((q, i) => "Q: " + q + "\nA: " + (a["m3_" + i] || "(no answer)")).join("\n")}`;
      try { const f = parseJSON(await askAI(speakingPrompt(txt))); r.fbS = f; r.S = f.band; } catch (e) { toast("Speaking scoring failed: " + e.message); }
      S.busy.mS = false; finalize(r); render();
    }];
  for (const job of jobs) await job();
}

/* ---------- API key sheet ---------- */
function openKeySheet(first, prov) {
  document.getElementById("modal")?.remove();
  const st = DB.settings; const p = prov || st.provider || "groq"; const pv = PROV[p];
  const m = document.createElement("div"); m.className = "modal"; m.id = "modal";
  m.innerHTML = `<div class="sheet" role="dialog" aria-label="AI examiner"><h1>Turn on the AI examiner</h1>
  <p class="mute">The AI marks your Writing and Speaking like a real examiner, corrects mistakes, writes a Band 9 version, and creates unlimited new practice. Groq and Gemini are free.</p>
  <div class="seg" role="radiogroup" aria-label="AI provider" style="margin-bottom:12px">${Object.entries(PROV).map(([k, v]) => `<button class="opt ${k === p ? "sel" : ""}" data-act="kprov" data-v="${k}" style="--c:var(--teal2);flex-direction:column;gap:0"><b>${v.name}</b><span style="font-size:11.5px">${v.tag}</span></button>`).join("")}</div>
  <div class="card" style="font-size:15px"><b>Get your free ${pv.name} key (2 min)</b><ol style="margin:8px 0 0 18px;padding:0">${pv.steps.map((x, i) => `<li>${i === 0 ? x.replace(pv.site, `<a href="${pv.url}" target="_blank" rel="noopener">${pv.site}</a>`) : x}</li>`).join("")}</ol>
  <p class="mute" style="margin:8px 0 0">${pv.note}</p></div>
  <div class="field"><label for="kKey">${pv.name} API key</label><input id="kKey" data-prov="${p}" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${pv.prefix ? pv.prefix + "…" : "Paste your key"}" value="${esc(st.keys[p] || "")}"></div>
  <details class="tips"><summary>Advanced: model name</summary><div class="field" style="margin-top:8px"><input id="kModel" value="${esc(st.models[p] || "")}" aria-label="Model name"></div><p class="mute">Leave as it is unless the provider renames its models.</p></details>
  <p class="mute">Your key is saved only on this phone and sent only to ${pv.name}.</p>
  <div class="row"><button class="btn" data-act="keysave">Save & test</button>${st.keys[p] ? `<button class="btn ghost small" data-act="keyclear" data-v="${p}" style="--c:var(--bad)">Remove key</button>` : ""}<button class="btn ghost small" data-act="close">${first ? "Skip for now" : "Close"}</button></div>
  <p id="kStatus" class="mute" style="margin-top:10px"></p></div>`;
  document.body.appendChild(m);
}
const aiLabel = () => curKey() ? PROV[DB.settings.provider].name + (DB.settings.provider === "claude" ? "" : " (free)") : "Claude";
const aiCard = () => aiReady() ? `<div class="card" style="--c:var(--ok)"><span class="tag" style="--c:var(--ok)">AI examiner on</span> <span class="mute">Using ${aiLabel()} · <button class="btn ghost small" data-act="keysheet" style="min-height:30px;padding:2px 10px">Change</button></span></div>`
  : `<div class="card ai" style="--c:var(--coral)"><b>Get your band score, free</b><p class="mute" style="margin:4px 0 10px">Add a free Groq or Gemini key (2 minutes) to get an AI examiner's score, corrections and a Band 9 rewrite.</p><button class="btn" style="--c:var(--coral)" data-act="keysheet">Add free API key</button></div>`;

/* ---------- settings ---------- */
function openSettings() {
  const p = P(), st = DB.settings; const isA = !!(A && A.setReminder);
  const m = document.createElement("div"); m.className = "modal"; m.id = "modal";
  m.innerHTML = `<div class="sheet" role="dialog" aria-label="Settings"><div class="row" style="justify-content:space-between"><h1>Settings</h1><button class="btn ghost small" data-act="close">Done</button></div>
  <h2>Profile</h2>
  <div class="field"><label for="sName">Name</label><input id="sName" value="${esc(p.name)}"></div>
  <div class="field"><label for="sTarget">Target band</label><select id="sTarget">${[6, 6.5, 7, 7.5, 8, 8.5, 9].map(b => `<option ${b === p.target ? "selected" : ""}>${b}</option>`).join("")}</select></div>
  <div class="field"><label for="sExam">Exam date</label><input id="sExam" type="date" value="${esc(p.examDate)}"></div>
  <div class="field"><label for="sProf">Switch profile (if you share this phone)</label><select id="sProf">${Object.entries(DB.profiles).map(([id, x]) => `<option value="${id}" ${id === DB.cur ? "selected" : ""}>${esc(x.name)}</option>`).join("")}<option value="__new">+ Add new profile</option></select></div>
  <h2>Daily reminder</h2>
  <p class="mute">A reminder to finish all four modules: Listening, Reading, Writing and Speaking.</p>
  <div class="field"><label for="sRem">Reminder time</label><input id="sRem" type="time" value="${pad(st.remH)}:${pad(st.remM)}"></div>
  <div class="row"><button class="btn small" data-act="remset">${st.remOn ? "Update reminder" : "Turn on reminder"}</button>${st.remOn ? `<button class="btn ghost small" data-act="remoff">Turn off</button>` : ""}${isA ? "" : `<button class="btn ghost small" data-act="ics">Add to phone calendar</button>`}</div>
  <p class="mute" style="margin-top:8px">${isA ? "The Android app sends a notification every day at this time." : "In a browser, notifications only appear while the app is open, so add the daily event to your phone calendar for a reliable alert."}</p>
  <h2>AI examiner</h2>
  <p class="mute">Scores Writing and Speaking and creates new practice. Free options: Groq or Google Gemini.</p>
  <p><b>Status:</b> ${curKey() ? "On, using " + aiLabel() : CL.sample ? "On, connected through Claude" : "Off"}</p>
  <div class="row"><button class="btn small" data-act="keysheet">${curKey() ? "Change API key" : "Add free API key"}</button>${aiReady() ? `<button class="btn ghost small" data-act="aitest">Test AI connection</button>` : ""}</div>
  <h2>Data</h2><button class="btn ghost small" data-act="reset" style="--c:var(--bad)">Reset this profile</button></div>`;
  document.body.appendChild(m);
}
function readSettings() {
  const p = P(); const g = id => document.getElementById(id);
  if (!g("sName")) return;
  p.name = g("sName").value.trim() || p.name; p.target = +g("sTarget").value; p.examDate = g("sExam").value;
  const [h, mi] = (g("sRem").value || "19:00").split(":").map(Number); DB.settings.remH = h; DB.settings.remM = mi;
  save();
}
function setReminder() {
  readSettings(); const st = DB.settings; st.remOn = true; save();
  if (A && A.setReminder) { A.setReminder(st.remH, st.remM); toast("Daily reminder set for " + pad(st.remH) + ":" + pad(st.remM)); return; }
  if ("Notification" in window) Notification.requestPermission().then(r => toast(r === "granted" ? "Reminder on while the app is open. Add it to your calendar too." : "Notifications blocked. Use 'Add to phone calendar'."));
  else toast("Use 'Add to phone calendar' for a daily alert.");
}
function downloadICS() {
  readSettings(); const st = DB.settings; const d = new Date(); const ds = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//IELTS85//EN", "BEGIN:VEVENT", "UID:ielts85-daily-" + ds + "@app", "DTSTAMP:" + ds + "T000000Z", `DTSTART:${ds}T${pad(st.remH)}${pad(st.remM)}00`, "DURATION:PT1H", "RRULE:FREQ=DAILY", "SUMMARY:IELTS 8.5: Listen · Read · Write · Speak", "DESCRIPTION:Open the IELTS 8.5 app and finish all four modules today.", "BEGIN:VALARM", "TRIGGER:PT0M", "ACTION:DISPLAY", "DESCRIPTION:IELTS practice time", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" })); a.download = "ielts-daily-reminder.ics"; document.body.appendChild(a); a.click(); a.remove();
  toast("Open the downloaded file to add the daily reminder to your calendar.");
}
let lastNotified = "";
setInterval(() => {
  const st = DB.settings; if (!st.remOn || A || !P()) return; const d = new Date(), k = dayKey();
  if (d.getHours() === st.remH && d.getMinutes() === st.remM && lastNotified !== k) {
    lastNotified = k; const t = P().days[k] || {}; const left = ["L", "R", "W", "S"].filter(x => !t[x]).map(x => MODS[x].name);
    if (left.length && "Notification" in window && Notification.permission === "granted") new Notification("IELTS 8.5 practice time", { body: "Still to do today: " + left.join(", ") });
  }
}, 30000);

/* ---------- AI practice generation ---------- */
async function generate(m) {
  S.busy.gen = true; render();
  const part = 1 + Math.floor(Math.random() * 4);
  const prompt = m === "L"
    ? `Create an ORIGINAL IELTS Academic Listening Part ${part} practice task (${["a conversation about an everyday booking or enquiry with form completion", "a monologue in an everyday social context", "a discussion between 2 students and/or a tutor about an assignment", "an academic lecture"][part - 1]}). Script 170-230 words, realistic, with at least one distractor (speaker corrects themselves). Exactly 5 questions in script order. Part 1 and 4: gap-fill (word limit stated in intro); Parts 2-3: mostly multiple choice with 3 options. Return ONLY JSON: {"part":${part},"title":"...","intro":"instruction line","script":[["F","line"],["M","line"]],"qs":[{"t":"gap","q":"text with ________","a":["answer","acceptable variant"]},{"t":"mc","q":"question","o":["A","B","C"],"a":0}]}`
    : `Write an ORIGINAL IELTS Academic Reading passage (about 380 words, 4-5 paragraphs, academic topic of your choice, Band 8 difficulty with paraphrase and NOT GIVEN traps) and exactly 7 questions: 3 TRUE/FALSE/NOT GIVEN, 2 multiple choice (4 options), 2 gap-fill (ONE WORD from the passage). Return ONLY JSON: {"title":"...","text":["paragraph 1","paragraph 2"],"qs":[{"t":"tfng","q":"statement","a":"T|F|NG"},{"t":"mc","q":"question","o":["A","B","C","D"],"a":0},{"t":"gap","q":"sentence with ________ (ONE WORD)","a":["word"]}]}`;
  try {
    const j = parseJSON(await askAI(prompt));
    if (!j.qs || !j.qs.length) throw new Error("bad format");
    P().gen[m].push(j); save(); toast("New practice ready!"); S.act = { i: (m === "L" ? PRACTICE.listening.length : PRACTICE.reading.length) + P().gen[m].length - 1 };
    if (m === "R") startTimer(0);
  } catch (e) { toast(e.message === "NO_AI" ? "Turn on AI in Settings first." : "Couldn't generate: " + e.message); }
  S.busy.gen = false; render();
}

/* ---------- events ---------- */
document.addEventListener("click", async e => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const act = b.dataset.act, v = b.dataset.v;
  if (act === "mic") { micToggle(b.dataset.t); return; }
  if (act === "tab") { stopSpeak(); stopMic(); S.tab = v; S.act = null; S.review = null; render(); scrollTo(0, 0); return; }
  if (act === "pick") { const k = b.dataset.k, i = +b.dataset.i; const val = /^\d+$/.test(v) ? +v : v; (S.ans[k] || (S.ans[k] = []))[i] = val; b.parentElement.querySelectorAll(".opt").forEach(o => o.classList.toggle("sel", o === b)); if (DB.run) persistRun(); return; }
  if (act === "back") { stopSpeak(); stopMic(); S.act = null; render(); return; }
  if (act === "open") { S.act = { i: +v }; if (S.tab === "R") startTimer(0); render(); scrollTo(0, 0); return; }
  if (act === "tr") { S.act.tr = true; render(); return; }
  if (act === "play" || act === "mplay") {
    if (speaking) { stopSpeak(); refreshPlay(); return; }
    let lines;
    if (act === "mplay") { const r = DB.run; const m = MOCKS.find(x => x.id === r.id); lines = m.listening[r.part].script; r.played[r.part] = true; persistRun(); }
    else lines = [...PRACTICE.listening, ...P().gen.L][S.act.i].script;
    const rate = +(document.getElementById("rate")?.value || 1);
    speakLines(lines, rate).then(() => { if (act === "mplay") render(); }).catch(() => toast("Audio couldn't play here. Use the transcript."));
    return;
  }
  if (act === "check") {
    const m = S.tab; const sets = m === "L" ? [...PRACTICE.listening, ...P().gen.L] : [...PRACTICE.reading, ...P().gen.R]; const s = sets[S.act.i]; const key = m + "p" + S.act.i;
    S.shown[key] = true; const sc = scoreQs(s.qs, key); P().drafts[m + S.act.i] = sc; addXP(5 + sc * 2); markDone(m); stopSpeak(); render(); return;
  }
  if (act === "retry") { const key = S.tab + "p" + S.act.i; S.shown[key] = false; S.ans[key] = []; S.act.tr = false; render(); return; }
  if (act === "gen") { generate(v); return; }
  if (act === "wq") { const [, [w, def]] = wordOfDay(); if (v === def) { P().words.push(w); addXP(10); toast("Correct! +10 XP"); checkBadges(); } else { toast("Not quite. It means: " + def); P().words.push(w); } save(); render(); return; }
  if (act === "wopen") { const [t, i] = v.split("_").map(Number); S.act = { task: t, i }; startTimer(t === 1 ? 20 : 40); render(); scrollTo(0, 0); return; }
  if (act === "wsubmit") {
    const a = S.act; const dk = "w" + a.task + "_" + a.i; const text = document.getElementById("wtext").value;
    if (wc(text) < 30) { toast("Write a bit more first."); return; }
    P().writes++; addXP(25); markDone("W"); S.shown[dk] = true;
    if (!aiReady()) { render(); return; }
    const t = a.task === 1 ? PRACTICE.writingT1[a.i] : { prompt: PRACTICE.writingT2[a.i] };
    S.fb[dk] = { loading: true }; S.busy.w = true; render();
    try { S.fb[dk] = parseJSON(await askAI(writingPrompt(a.task, t.prompt, text, t.chart))); } catch (err) { S.fb[dk] = { error: err.message }; }
    S.busy.w = false; render(); return;
  }
  if (act === "sopen") {
    const pick = (arr, n) => arr.slice().sort(() => Math.random() - .5).slice(0, n);
    S.fb.sp = null; S.shown.sp = false;
    S.act = v[0] === "c" ? { kind: "card", i: +v.slice(1), ans: [] } : v === "p1" ? { kind: "p1", qs: pick(P1POOL(), 4), ans: [] } : { kind: "p3", qs: pick(P3POOL(), 3), ans: [] };
    render(); scrollTo(0, 0); return;
  }
  if (act === "ptimer") { S.pt = { label: "Prep", end: Date.now() + 60000, next: 120 }; tick(); return; }
  if (act === "ssubmit") {
    stopMic(); const a = S.act; const answers = [...document.querySelectorAll("textarea[id^=sa]")].map(t => t.value.trim());
    if (!answers.some(x => wc(x) > 5)) { toast("Answer at least one question first (speak or type)."); return; }
    addXP(20); markDone("S"); S.shown.sp = true;
    if (!aiReady()) { render(); return; }
    const txt = a.kind === "card" ? `PART 2 cue card: ${PRACTICE.speakingCards[a.i].topic}\nA: ${answers[0]}` : a.qs.map((q, i) => `${a.kind === "p1" ? "PART 1" : "PART 3"} Q: ${q}\nA: ${answers[i] || "(no answer)"}`).join("\n");
    S.fb.sp = { loading: true }; S.busy.s = true; render();
    try { S.fb.sp = parseJSON(await askAI(speakingPrompt(txt))); } catch (err) { S.fb.sp = { error: err.message }; }
    S.busy.s = false; render(); return;
  }
  // mock flow
  if (act === "mstart") { DB.run = { pid: DB.cur, id: +v, stage: "L", part: 0, played: {}, ans: {} }; S.ans = {}; startTimer(30); DB.run.tEnd = S.timerEnd; save(); render(); scrollTo(0, 0); return; }
  if (act === "mquit") { if (b.dataset.sure) { stopSpeak(); DB.run = null; save(); render(); } else { b.dataset.sure = 1; b.textContent = "Tap again to quit"; } return; }
  if (act === "mpart") { DB.run.part = +v; persistRun(); render(); scrollTo(0, 0); return; }
  if (act === "mnext") {
    const r = DB.run; stopSpeak(); stopMic(); persistRun();
    const max = { L: 3, R: 2, W: 1, S: 2 }[r.stage];
    if (r.part < max) r.part++;
    else { r.stage = STAGES[STAGES.indexOf(r.stage) + 1]; r.part = 0; const mins = { R: 60, W: 60, S: 14 }[r.stage]; if (mins) { startTimer(mins); r.tEnd = S.timerEnd; } }
    if (r.stage === "done") { finishMock(); return; }
    save(); render(); scrollTo(0, 0); return;
  }
  if (act === "review") { S.review = +v; render(); scrollTo(0, 0); return; }
  if (act === "rback") { S.review = null; render(); return; }
  if (act === "mai") { scoreMockAI(S.review); return; }
  if (act === "share") {
    const p = P(); const res = p.results; const best = res.length ? Math.max(...res.map(r => r.overall || 0)) : 0;
    const txt = `${p.name}'s IELTS prep: ${streak()}-day streak, ${p.xp} XP, ${res.length} mock tests, best overall band ${fmtB(best)} (target ${fmtB(p.target)}).`;
    try { await navigator.clipboard.writeText(txt); toast("Copied! Paste it to your friend."); } catch (err) { toast(txt); }
    return;
  }
  // settings
  if (act === "close") { readSettings(); document.getElementById("modal")?.remove(); render(); return; }
  if (act === "keysheet") { readSettings(); openKeySheet(false); return; }
  if (act === "kprov") { const k = document.getElementById("kKey"); if (k && k.value.trim()) DB.settings.keys[k.dataset.prov] = k.value.trim(); openKeySheet(false, v); return; }
  if (act === "keyclear") { DB.settings.keys[v] = ""; save(); document.getElementById("modal")?.remove(); render(); toast("API key removed"); return; }
  if (act === "keysave") {
    const kEl = document.getElementById("kKey"), k = kEl.value.trim(), prov = kEl.dataset.prov, st = document.getElementById("kStatus");
    if (!k) { st.textContent = "Paste your key first."; return; }
    if (PROV[prov].prefix && !k.startsWith(PROV[prov].prefix)) { st.textContent = `That doesn't look like a ${PROV[prov].name} key. It should start with ${PROV[prov].prefix}`; return; }
    DB.settings.provider = prov; DB.settings.keys[prov] = k; DB.settings.models[prov] = document.getElementById("kModel").value.trim(); save();
    b.disabled = true; st.innerHTML = '<span class="spin"></span> Testing your key…';
    try { await askAI("Reply with exactly: OK", false); st.textContent = "Connected! The AI examiner is ready."; toast("AI examiner is on"); setTimeout(() => { document.getElementById("modal")?.remove(); render(); }, 900); }
    catch (err) { st.textContent = "Saved, but the test failed: " + err.message + ". Check that you copied the whole key."; b.disabled = false; }
    return;
  }
  if (act === "remset") { setReminder(); return; }
  if (act === "remoff") { DB.settings.remOn = false; save(); if (A && A.cancelReminder) A.cancelReminder(); toast("Reminder off"); document.getElementById("modal")?.remove(); openSettings(); return; }
  if (act === "ics") { downloadICS(); return; }
  if (act === "aitest") { readSettings(); b.innerHTML = '<span class="spin"></span> Testing…'; try { const t = await askAI("Reply with exactly: OK", false); toast(/ok/i.test(t) ? "AI examiner connected" : "Got a reply: " + t.slice(0, 40)); } catch (err) { toast(err.message === "NO_AI" ? "Add an API key first." : "Failed: " + err.message); } b.textContent = "Test AI connection"; return; }
  if (act === "reset") { if (b.dataset.sure) { const n = P().name; delete DB.profiles[DB.cur]; newProfile(n); document.getElementById("modal")?.remove(); render(); toast("Profile reset"); } else { b.dataset.sure = 1; b.textContent = "Tap again to erase all progress"; } return; }
});
document.getElementById("setBtn").addEventListener("click", openSettings);
document.addEventListener("input", e => {
  const t = e.target;
  if (t.dataset.k && t.dataset.i != null) { (S.ans[t.dataset.k] || (S.ans[t.dataset.k] = []))[+t.dataset.i] = t.value; if (DB.run) persistRun(); }
  if (t.dataset.draft) { P().drafts[t.dataset.draft] = t.value; save(); }
  if (t.dataset.run) { DB.run[t.dataset.run] = t.value; save(); }
  if (t.id && /^sa\d+$/.test(t.id) && S.act && S.act.ans) S.act.ans[+t.id.slice(2)] = t.value;
  if (t.dataset.runSp) { (DB.run.sp || (DB.run.sp = {}))[t.dataset.runSp] = t.value; save(); }
  const wcEl = document.getElementById("wcount"); if (wcEl && (t.id === "wtext" || t.id === "mw")) wcEl.textContent = wc(t.value) + " words";
});
document.addEventListener("change", e => {
  const t = e.target;
  if (t.id === "sProf") { if (t.value === "__new") { readSettings(); document.getElementById("modal").remove(); askName(true); } else { readSettings(); DB.cur = t.value; save(); document.getElementById("modal").remove(); S.act = null; render(); } }
  if (t.dataset.act === "selfband") { const r = P().results[S.review]; r[t.dataset.k] = +t.value; finalize(r); render(); }
});
function persistRun() { if (DB.run) { DB.run.ans = S.ans; save(); } }

/* ---------- onboarding ---------- */
function askName(adding) {
  const m = document.createElement("div"); m.className = "modal"; m.id = "modal";
  m.innerHTML = `<div class="sheet"><h1>${adding ? "New profile" : "Welcome! Let's get you to Band 8.5"}</h1><p class="mute">Each day, finish all four modules (Listening, Reading, Writing, Speaking) to keep your streak alive. Take a mock test every few days to track your band.</p>
  <form id="nameForm"><div class="field"><label for="nm">Your name</label><input id="nm" required autocomplete="given-name" placeholder="e.g. Pari"></div><button class="btn" style="width:100%">Start preparing</button></form></div>`;
  document.body.appendChild(m);
  document.getElementById("nameForm").addEventListener("submit", ev => { ev.preventDefault(); const n = document.getElementById("nm").value.trim(); if (!n) return; newProfile(n); m.remove(); render(); if (!aiReady()) openKeySheet(true); });
}

/* ---------- render ---------- */
function render() {
  if (!P()) { drawTop.call(null); if (!document.getElementById("modal")) askName(false); return; }
  if (DB.run && DB.run.pid === DB.cur) { S.tab = "M"; if (DB.run.ans && !Object.keys(S.ans).some(k => k[0] === "m")) S.ans = DB.run.ans; if (DB.run.tEnd) S.timerEnd = DB.run.tEnd; }
  drawTop();
  const v = { L: viewL, R: viewR, W: viewW, S: viewS, M: viewM }[S.tab]();
  $("#view").innerHTML = v; tick();
}
if (A && A.onReady) A.onReady();
render();
}
