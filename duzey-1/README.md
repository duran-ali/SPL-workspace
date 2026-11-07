# SPL Level 1 study module (Düzey 1)

Study app, topic map and source list for the Capital Market Activities **Level 1** licensing exam (Sermaye Piyasası Faaliyetleri Düzey 1) run by SPL in Turkey. Sources were collected from official channels (SPL, SPK, mevzuat.gov.tr) on 2026-11-04. The study content and the app interface are in Turkish, like the exam.

## Study app
**Open `uygulama/index.html` in a browser** (double-click works). No internet connection or installation is needed. It also runs online: https://duran-ali.github.io/SPL-workspace/

> SPL's official study-note PDFs are not in this repository because of copyright. For the "resmi not" (official note) links to work offline, download the PDFs under the file names listed in [`kaynaklar/README.md`](kaynaklar/README.md). The online version links to the PDFs on SPL's website instead.

- **Daily reading:** a 15–20 minute lesson with links to the relevant pages of the official note.
- **Mini test:** a short test with instant feedback at the end of each day.
- **End-of-course test:** unlocks when all days of a course are done; 25 questions, pass mark 75 (the official course threshold is 50; this is a stricter personal target).
- **Mock exam:** unlocks when all four end-of-course tests are done. Scored by the official rule: at least 50 in each course and an average of at least 60. The average is rounded to the nearest integer; wrong answers carry no penalty.
  - **Full mock exam:** 4 × 25 questions with a 180-minute countdown. The exam ends automatically when time is up.
  - **Single-course session:** 25 questions in 45 minutes, like one session of the real exam. Useful for retaking a weak course.
  - **Question pool:** each course has 50 questions that only appear in mock exams (`deneme.js`, two sets of 25). The second set was written from note pages that no daily or end-of-course question covers. Unseen mock questions are asked first, so the first two mock exams consist entirely of new questions. After that, questions are drawn from a mix of previously solved ones.
- **Official practice questions (1003):** the 105 open-ended practice questions SPL published for course 1003 are listed at the end of the matching day, each linking to its page in the PDF (`veri/calisma-sorulari.js`). A few questions whose answers conflict with the main note carry a warning.
- **Mistake notebook (Yanlış defteri):** questions you answered wrongly are collected here and removed once you answer them correctly.
- **Preview mode (Settings):** removes the locks so every day, test and mock exam is open.
- Progress is stored in the browser. You can download a backup from Settings and restore it on another browser or device.

Content files live in `uygulama/icerik/<course code>/`: daily lessons and mini tests in `gunXX.js`, the end-of-course test in `ders-sonu.js`, mock exam questions in `deneme.js`. The daily plan is in `uygulama/veri/program.js`.

## Conflicts in the official sources
A few facts conflict between official sources. These points are not tested (one exception below); items marked with a day also have a "dikkat" (caution) box on that day:
- **1003:** rights attached to repurchased shares (p. 7 vs p. 56; day 6); asset and revenue criteria for an IPO (the note on p. 28 says "or", while the official practice questions require both; day 3). Price limit and circuit breaker: p. 62 gives the base regulation, p. 63 the values currently in force under Borsa İstanbul decision 2020/20 (±10% price limit and 5% circuit breaker on the Star and Main Markets). The practice questions use the current values, so days 6–7 test them and the base regulation is shown in a caution box (days 6–8).
- **1012:** time window for the debt securities market default coefficient (p. 100 vs p. 122; day 13); final time for physical delivery of FX futures and options (chapter question key says 15:00, the table on p. 132 says 16:00; day 14); the key of one chapter question on VİOP margin does not match the ANNEX-2 table; review frequency of collateral valuation haircuts (p. 107 says once a year for the debt securities market, p. 169 says twice a year in general).
- Decision quorum of the bondholders' board (BASK): the 1001 note (p. 21) gives the statutory minimum (at least half of the nominal amount), the 1003 note (p. 86) the stricter rule in the Communiqué (two thirds for tranche decisions). These do not conflict; the day 3 question in 1001 asks for the "minimum" requirement and the explanation covers both.
- Tax rates (1003, days 19–20) follow the February 2026 Revenue Administration (GİB) guide and change often.

## Folder structure
```
duzey-1/
├── README.md                 ← this file
├── 01_sinav_bilgileri.md     ← licensing rules, pass criteria, renewal (Communiqué VII-128.7)
├── 02_konu_haritasi.md       ← 4 courses, 20 topics, 11 subtopics (official SPL list)
├── 03_kaynaklar.md           ← all official links (notes and primary legislation)
├── konular.json              ← machine-readable topic tree
├── uygulama/                 ← the study app (index.html, content, questions)
└── kaynaklar/                ← download list (README.md); PDFs are not in the repository
    ├── calisma-notlari/      ← SPL's official study-note PDFs (1001, 1003, 1005, 1012)
    ├── metin/                ← plain-text extracts of the PDFs (local only)
    └── resmi-belgeler/       ← e-LS exam guide
```

## The four courses (25 exam questions each)
1. **1001** Dar Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları (Capital Market Legislation and Professional Rules, limited scope)
2. **1003** Sermaye Piyasası Araçları 1 (Capital Market Instruments 1)
3. **1005** Yatırım Kuruluşları (Investment Firms)
4. **1012** Takas, Saklama ve Operasyon İşlemleri (Clearing, Custody and Operations)

Pass rule: at least 50 in each course and an average of at least 60.

## Question review (November 2026)
All 860 questions (1001: 219, 1003: 235, 1005: 187, 1012: 219) were checked for answer patterns:
- Where options are shuffled, the correct option is the longest one in 33–35% of questions, and in no question is it clearly longer than the others (1.3× or more).
- Where option order is fixed (statement lists, numeric options), correct answers are spread evenly across A–E.
- Give-away absolute words in distractors ("only", "never", "always") were reduced.
- Mock exam questions were screened for similarity against the daily and end-of-course questions; near-duplicates were replaced.

## Keeping up to date
- The study notes were last updated on 2026-06-30. Before each exam period, check the "Güncelleme Tablosu" (update table) at https://spl.com.tr/sinav-calisma-notlari/
- Legislation cut-off date: https://spl.com.tr/mevzuat-kesim-tarihi/
