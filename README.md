# SPL Workspace

I have decided to create my SPL study module (Sermaye piyasaları lisansı, CFA in America) thanks to absurd prices of other education sources. It is a completely vibe-coded project because I do not want to spend my time on this and I have Claude. If you find any bugs or have suggestions for improvements, let me know.

**Open the app:** https://duran-ali.github.io/SPL-workspace/ (nothing to install)

## Contents
- [What this is](#what-this-is)
- [Levels and courses](#levels-and-courses)
- [Using the app](#using-the-app)
- [How the project is built](#how-the-project-is-built)
- [Content format](#content-format)
- [Question quality rules](#question-quality-rules)
- [Reviewing the project (people and AI agents)](#reviewing-the-project-people-and-ai-agents)
- [Working on the project](#working-on-the-project)
- [Keeping up to date](#keeping-up-to-date)
- [License](#license)

## What this is
A free study app for the licensing exams that SPL (Sermaye Piyasası Lisanslama Sicil ve Eğitim Kuruluşu) runs for capital market professionals in Turkey. Each course of the official exam is broken into short **daily lessons** written from SPL's official study notes, followed by a **mini test**. Each course ends with an **end-of-course test**, and the level ends with **mock exams** scored by the official pass rule.

- The study content and the app interface are in **Turkish**, the language of the exam. Documentation (this file, the level READMEs, the landing page) is in English.
- Every lesson and question points to the page of the official note it comes from ("resmi not s. X").
- The app is a static web page: no server, account, build step or internet connection is needed.

## Levels and courses

| Level | Status | Courses | Folder |
|---|---|---|---|
| Level 1 (Düzey 1) | **Ready** | 1001, 1003, 1005, 1012 | [`duzey-1/`](duzey-1/) |
| Level 2 (Düzey 2) | **Ready** | 1002, 1004, 1006, 1007, 1010, 1016 + 1003, 1005, 1012 shared with Level 1 | [`duzey-2/`](duzey-2/) |
| Level 3 (Düzey 3) | Planned | – | – |

Level 1 has about 860 questions; Level 2 adds about 2,100 in its own six courses. Course lists, topic summaries and question counts are in each level's README: [`duzey-1/README.md`](duzey-1/README.md) · [`duzey-2/README.md`](duzey-2/README.md)

## Using the app

**Online:** https://duran-ali.github.io/SPL-workspace/. The official note links open the PDFs on SPL's website.

**Offline:**
1. Download the repository (Code → Download ZIP) or clone it.
2. Open `duzey-1/uygulama/index.html` (Level 1) or `duzey-2/uygulama/index.html` (Level 2) in a browser.
3. Optional: for the official note links to work offline, download SPL's PDFs under the file names listed in [`duzey-1/kaynaklar/README.md`](duzey-1/kaynaklar/README.md) and [`duzey-2/kaynaklar/README.md`](duzey-2/kaynaklar/README.md).

**What the app offers:**

| Feature | What it does |
|---|---|
| Daily reading (Günlük okuma) | A short lesson (about 5–20 minutes) with tables and boxes to memorise, linked to the note pages it covers |
| Mini test | 8 questions at the end of each day, with instant feedback and an explanation |
| End-of-course test (Ders sonu testi) | 25 questions; unlocks when every day of the course is done; personal pass mark 75 |
| Mock exam (Deneme) | Unlocks when all end-of-course tests of the level are done; official scoring: at least 50 in each course and an average of at least 60. Single-course sessions (25 questions in 45 minutes) are also available |
| Mistake notebook (Yanlışlarım) | Collects wrongly answered questions until you answer them correctly |
| Preview mode (Ayarlar) | Removes all locks |
| Backup and restore (Ayarlar) | Moves progress between browsers and devices |

Progress is stored only in the browser you use (`localStorage`). The online and offline versions, different browsers and different devices each keep a separate record; use backup and restore to move it. Level 1 and Level 2 also keep separate records.

## How the project is built

```
SPL-workspace/
├── index.html                 ← landing page (GitHub Pages root)
├── ortak/                     ← code and styles shared by all levels
│   ├── js/app.js              ← the whole app: routing, tests, scoring, progress
│   ├── js/md.js               ← small Markdown renderer for lessons
│   └── stil.css
├── duzey-1/                   ← Level 1
│   ├── README.md              ← features, courses, known conflicts in the sources
│   ├── 01_sinav_bilgileri.md  ← licensing rules and pass criteria
│   ├── 02_konu_haritasi.md    ← official topic map
│   ├── 03_kaynaklar.md        ← official links
│   ├── uygulama/
│   │   ├── index.html
│   │   ├── veri/program.js    ← course list and day-by-day plan
│   │   └── icerik/<code>/     ← gun01.js … gunNN.js, ders-sonu.js, deneme.js
│   └── kaynaklar/             ← PDF download list (PDFs are not in the repo)
├── duzey-2/                   ← Level 2, same layout; shared courses load from duzey-1/
├── araclar/                   ← command-line check tools (Node.js, Python); see araclar/README.md
├── CLAUDE.md                  ← working rules for AI agents
├── LICENSE.md, LICENSES/
└── .nojekyll                  ← GitHub Pages serves files as they are
```

- **No build step.** Plain HTML, CSS and JavaScript (ES5 style, no libraries). What is in the repository is what the browser runs.
- **Loading.** Each level's `index.html` loads `program.js` and `app.js`. `app.js` then adds a `<script>` tag for every content file whose day is marked `hazir: true`. Content files register themselves with `SPL.gun(...)`, `SPL.dersSonu(...)` and `SPL.deneme(...)`. Script tags (instead of `fetch`) keep the app working when opened straight from disk (`file://`).
- **Shared courses.** Courses 1003, 1005 and 1012 are on both levels. Level 2's `program.js` takes their plan from Level 1's `program.js` and loads their files from `duzey-1/`, so a fix there appears in both levels.
- **Official note links.** Opened from disk or localhost, a link goes to the local PDF (`pdf`); online it goes to SPL's website (`pdfResmi`). `pdfOfset` converts printed page numbers to PDF page numbers.
- **Hosting.** GitHub Pages publishes the `main` branch as it is. A push to `main` updates the site within a few minutes.

## Content format

**Plan** (`uygulama/veri/program.js`): one entry per course with `kod`, `ad`, `pdf`, `pdfResmi`, `pdfOfset` and `gunler`. Each day is `{ no, bolum, baslik, sayfa: [from, to], hazir }`. Page numbers are the printed page numbers of the official note.

**Day file** (`icerik/<code>/gunXX.js`):
```js
SPL.gun("1016", 1, {
  okuma: `## Bugünün haritası
...lesson in Markdown...
> [!ezber] A box to memorise`,
  sorular: [
    {
      s: "Question text (Markdown allowed)",
      c: ["Option A", "Option B", "Option C", "Option D", "Option E"],
      d: 4,                       // index of the correct option, 0 = A
      a: "Explanation shown after answering",
      k: "1016 resmi not s. 1"     // source page
    }
    // 8 questions per day
  ]
});
```
- `ders-sonu.js`: `SPL.dersSonu("<code>", { sorular: [25 questions] })`
- `deneme.js`: `SPL.deneme("<code>", { sorular: [50 questions] })`, a pool used only in mock exams.
- Lesson boxes: `> [!bilgi]` (information), `> [!dikkat]` (caution), `> [!ezber]` (memorise). A plain `>` quote is a `bilgi` box.
- **Option shuffling.** The app shuffles options at display time, except for fixed-order sets: options starting with "Yalnız", "I,", "I ve", "II", "III" or "Hiçbiri", all-numeric options, or a question marked `sabit: true`. In fixed-order questions the position in `c` is the position the user sees.

## Question quality rules
Every course is checked against these rules before it is published:
1. **Source-bound.** Every fact comes from SPL's official note (or the primary legislation it cites), and `k` gives the page. Facts on which official sources conflict are not tested (see "Conflicts in the official sources" in [`duzey-1/README.md`](duzey-1/README.md)).
2. **No length give-away.** In shuffled questions the correct option is the longest in no more than about 30–35% of questions, and never clearly longer than the rest (1.3× the next longest or more).
3. **Spread answers.** Correct positions are spread evenly across A–E; this matters most for fixed-order questions.
4. **Plausible distractors.** Wrong options come from the same topic. Give-away absolute words ("yalnız", "hiçbir zaman", "her zaman") are avoided unless the source uses them.
5. **No repeats.** End-of-course and mock questions test facts that the daily questions of that course do not ask; near-duplicates are replaced.
6. **Five options, one correct answer**, and the explanation (`a`) says why it is correct.

## Reviewing the project (people and AI agents)
Reviews and bug reports are welcome. Open an issue on GitHub. This section explains where to look and what counts as a problem.

**What to check**
- **Factual accuracy:** does the question, answer and explanation match the cited page of the official note? This matters most. The PDFs are not in the repository; download them from the links in each level's `kaynaklar/README.md`. The printed page number plus `pdfOfset` in `program.js` gives the PDF page.
- **Answer key:** is `d` the right index (0 = A)? Is exactly one option correct?
- **The rules above:** length give-away, answer spread, repeats between the daily, end-of-course and mock questions.
- **Lessons:** does each day cover its page range (`sayfa` in `program.js`) without leaving out exam-relevant points?
- **App:** broken links, wrong page links, locks, scoring, behaviour on a phone screen.

**Quick checks you can run** (Node.js, from the repository root; details in [`araclar/README.md`](araclar/README.md)):
```sh
# Syntax check of every content file
for f in duzey-*/uygulama/icerik/*/*.js; do node --check "$f" || echo "ERROR: $f"; done
# Format, counts, length give-away and answer spread for every course
node araclar/kontrol.js
# Similarity of end-of-course and mock questions to the daily ones (one or more course codes)
node araclar/benzer.js 1016
```
To test the app in a browser, serve the folder (`python -m http.server 8766`) and open `http://localhost:8766/duzey-2/uygulama/index.html`. Turn on preview mode in Ayarlar to open every day and test without completing the earlier ones.

AI agents: the working rules are in [`CLAUDE.md`](CLAUDE.md).

**Ground rules for changes**
- Do not commit SPL's PDFs or text extracts of them. They are copyrighted; `.gitignore` excludes `duzey-*/kaynaklar/**/*.pdf` and `duzey-*/kaynaklar/metin/`.
- Keep the language split: content and interface in Turkish, documentation in English.
- Keep files loadable from `file://`: no `fetch`, no modules, no external libraries or CDNs.
- Do not change a question's meaning without checking the cited page.
- Commit messages are in English.

## Working on the project
How a new course is added:
1. Download the course's official note PDF into `duzey-N/kaynaklar/calisma-notlari/` and add it to that folder's README.
2. Plan the days in `program.js`: page ranges of about 5–10 pages, `hazir: false`.
3. Write the days (`gunXX.js`) and set `hazir: true` as each one is finished.
4. Write `ders-sonu.js` (25 questions) and `deneme.js` (50 questions) from facts the days do not test.
5. Run `node araclar/kontrol.js <code>` and `node araclar/benzer.js <code>`, check the app in a browser, then update the level README and this file.

Local copy: `git clone https://github.com/duran-ali/SPL-workspace.git`, then `git pull` to update.

## Keeping up to date
- The official study notes used here are the **2026-06-30** update. Before each exam period, check the "Güncelleme Tablosu" (update table) at https://spl.com.tr/sinav-calisma-notlari/
- Legislation cut-off date: https://spl.com.tr/mevzuat-kesim-tarihi/
- Tax rates and market parameters change often; check them against the current note.

## License
Free for personal and educational use; **commercial use is not permitted**. Code is licensed under PolyForm Noncommercial 1.0.0 and content under CC BY-NC-SA 4.0. Details and disclaimer: [LICENSE.md](LICENSE.md)

This project is not affiliated with SPL, SPK or Borsa İstanbul.
