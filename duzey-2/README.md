# SPL Level 2 study module (Düzey 2)

Study app for the Capital Market Activities **Level 2** licensing exam (Sermaye Piyasası Faaliyetleri Düzey 2) run by SPL in Turkey. The study content and the app interface are in Turkish, like the exam. Level 2 is being built **one course at a time**.

## Study app
**Open `uygulama/index.html` in a browser** (double-click works). No internet connection or installation is needed. It also runs online: https://duran-ali.github.io/SPL-workspace/

The app works the same way as Level 1 (daily reading, mini tests, end-of-course test, mock exam, mistake notebook, preview mode, backup and restore); see [`../duzey-1/README.md`](../duzey-1/README.md) for the details. Level 2 keeps its progress in a **separate record**, so your Level 1 progress is not affected.

> SPL's official study-note PDFs are not in this repository because of copyright. For the "resmi not" (official note) links to work offline, download the PDFs under the file names listed in [`kaynaklar/README.md`](kaynaklar/README.md). The online version links to the PDFs on SPL's website instead.

## Courses

| Code | Course | Status |
|---|---|---|
| 1002 | Geniş Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları (Capital Market Legislation and Professional Rules, broad scope) | **Ready:** 37 days, 296 mini-test questions, 25-question end-of-course test, 50 mock exam questions |
| 1004 | Sermaye Piyasası Araçları 2 (Capital Market Instruments 2) | **Ready:** 34 days, 272 mini-test questions, 25-question end-of-course test, 50 mock exam questions |
| 1003 | Sermaye Piyasası Araçları 1 (Capital Market Instruments 1) | Shared with Level 1 |
| 1005 | Yatırım Kuruluşları (Investment Firms) | Shared with Level 1 |
| 1012 | Takas, Saklama ve Operasyon İşlemleri (Clearing, Custody and Operations) | Shared with Level 1 |
| 1006 | Finansal Piyasalar (Financial Markets) | Coming |
| 1007 | Finansal Yönetim ve Mali Analiz (Financial Management and Analysis) | Coming |
| 1010 | Ticaret Hukuku (Commercial Law) | Coming |
| 1011 | Muhasebe ve Finansal Raporlama (Accounting and Financial Reporting) | Coming |

Shared courses are not copied: the Level 2 app loads their plan and content from the `duzey-1/` folder, so any fix made there appears in both levels. The full mock exam opens once the end-of-course tests of all nine courses are done, so it becomes available after the remaining courses are added.

**1002 at a glance:** Capital Markets Law 6362 (days 1–8), material events (9), corporate governance (10–13), real estate investment trusts (14–16), securities investment companies, fixed and variable capital (17–20), portfolio management companies (21–24), investment funds (25–27), exchange-traded funds (28), real estate investment funds (29–30), venture capital investment funds (31–32), venture capital investment trusts (33–34), TSPB professional rules, ethics and disciplinary regulation (35–37).

**1004 at a glance:** prospectus and issue document communiqué II-5.1 (days 1–4), sale of capital market instruments II-5.2 (5–8), asset finance and asset- or mortgage-backed securities III-58.1 (9–12), covered bonds III-59.1 (13–14), interest-free finance and lease certificates III-61.1 (15–18), real estate certificates VII-128.2 (19–22), warrants and investment firm certificates VII-128.3 (23–27), foreign capital market instruments, depositary receipts and foreign investment funds VII-128.4 (28–30), project-backed securities III-61/B.1 (31–32), secured issuance of capital market instruments II-31/B.1 (33–34).

## Question review (November 2026)
The 371 questions of course 1002 and the 347 questions of course 1004 were checked the same way as Level 1:
- Where options are shuffled, the correct option is the longest one in about 30–35% of questions, and in no question is it clearly longer than the others (1.3× or more).
- Where option order is fixed (numeric options), correct answers are spread across A–E.
- End-of-course and mock exam questions were screened for similarity against the daily questions.

## Folder structure
```
duzey-2/
├── README.md                 ← this file
├── uygulama/                 ← the study app
│   ├── index.html
│   ├── veri/program.js       ← daily plan; shared courses come from duzey-1
│   └── icerik/1002/, 1004/   ← gunXX.js, ders-sonu.js, deneme.js
└── kaynaklar/                ← download list (README.md); PDFs are not in the repository
```

The app code and styles are shared by both levels and live in [`../ortak/`](../ortak/).

## Keeping up to date
- The study notes were last updated on 2026-06-30. Before each exam period, check the "Güncelleme Tablosu" (update table) at https://spl.com.tr/sinav-calisma-notlari/
- Legislation cut-off date: https://spl.com.tr/mevzuat-kesim-tarihi/
