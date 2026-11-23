# SPL Level 3 study module (Düzey 3)

Study app for the Capital Market Activities **Level 3** licensing exam (Sermaye Piyasası Faaliyetleri Düzey 3) run by SPL in Turkey. The study content and the app interface are in Turkish, like the exam. Level 3 is being built **one course at a time**.

## Study app
**Open `uygulama/index.html` in a browser** (double-click works). No internet connection or installation is needed. It also runs online: https://duran-ali.github.io/SPL-workspace/

The app works the same way as Levels 1 and 2 (daily reading, mini tests, end-of-course test, mock exam, mistake notebook, preview mode, backup and restore); see [`../duzey-1/README.md`](../duzey-1/README.md) for the details. Level 3 keeps its progress in a **separate record**, so your Level 1 and Level 2 progress is not affected.

> SPL's official study-note PDFs are not in this repository because of copyright. For the "resmi not" (official note) links to work offline, download the PDFs under the file names listed in [`kaynaklar/README.md`](kaynaklar/README.md). The online version links to the PDFs on SPL's website instead.

## Courses
Level 3 has 12 courses (e-LS exam guide, section 3). Nine of them are the Level 2 courses.

| Code | Course | Status |
|---|---|---|
| 1008 | Genel Ekonomi (General Economics) | **Ready:** 26 days, 208 mini-test questions, 25-question end-of-course test, 50 mock exam questions |
| 1009 | Temel Finans Matematiği ve Değerleme Yöntemleri (Basic Financial Mathematics and Valuation Methods) | Coming |
| – | Kurumlarda ve Sermaye Piyasasında Vergilendirme (Taxation of Companies and Capital Markets) | Coming (course code not confirmed yet) |
| 1002, 1004, 1006, 1007, 1010, 1016 | Level 2 courses | Shared with Level 2 |
| 1003, 1005, 1012 | Level 1 courses | Shared with Levels 1 and 2 |

Shared courses are not copied: the Level 3 app loads their plan and content from the `duzey-2/` and `duzey-1/` folders, so any fix made there appears in every level. The full mock exam opens once the end-of-course tests of all courses are done.

**1008 at a glance:** basic concepts: economic systems, utility, goods, factors of production, the production possibilities curve, supply, demand and market equilibrium, elasticity, production and costs, market structures and oligopoly models (days 1–5), monetary policy: money and money supply, money demand theories, the central bank and the CBRT, policy instruments and goals, the LM curve (6–10), fiscal policy: public spending and revenue, taxes, the budget, multipliers, the IS curve, IS-LM, crowding out and schools of thought (11–14), macroeconomic indicators: national income, unemployment, inflation, Turkish data, business cycles, economic growth, Cobb-Douglas, the Solow model and the middle-income trap (15–21), international economics: trade theories, the balance of payments, trade policy, the foreign exchange market, forward rates, parity conditions, exchange rate regimes, carry trade and the Mundell-Fleming model (22–26).

## Conflicts in the official sources
A few points conflict within the 1008 note. They are not tested, and the day shown has a "dikkat" (caution) box:
- **Repo and reverse repo direction:** p. 54 says the CBRT injects liquidity with a reverse repo; p. 69 names the same operation a repo (day 7).
- **CBRT goal independence:** p. 62 says the CBRT has no goal independence; p. 70 says it "in a sense" gained it in 2001 (day 8).
- **Central bank money:** p. 64 and the table on p. 128 define it as the monetary base plus public deposits; the text on p. 129 says reserve money plus public deposits (day 18).

## Question review (November 2026)
The 283 questions of course 1008 were checked the same way as Levels 1 and 2 (`node ../araclar/kontrol.js 1008`, `node ../araclar/benzer.js 1008`):
- Where options are shuffled, the correct option is the longest one in about 26% of questions, and in no question is it clearly longer than the others (1.3× or more).
- Correct answers are spread across A–E (57/57/57/55/57).
- End-of-course and mock exam questions were screened for similarity against the daily questions.

## Folder structure
```
duzey-3/
├── README.md                 ← this file
├── uygulama/                 ← the study app
│   ├── index.html
│   ├── veri/program.js       ← daily plan; shared courses come from duzey-2 and duzey-1
│   └── icerik/1008/          ← gunXX.js, ders-sonu.js, deneme.js
└── kaynaklar/                ← download list (README.md); PDFs are not in the repository
```

The app code and styles are shared by all levels and live in [`../ortak/`](../ortak/).

## Keeping up to date
- The study notes were last updated on 2026-06-30. Before each exam period, check the "Güncelleme Tablosu" (update table) at https://spl.com.tr/sinav-calisma-notlari/
- Legislation cut-off date: https://spl.com.tr/mevzuat-kesim-tarihi/
