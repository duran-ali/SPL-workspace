# Working rules for AI agents

Read [README.md](README.md) first: it describes the app, the file formats and the question quality rules. This file adds the rules for working on the project.

## About the owner
- The owner is preparing for the SPL exams and uses this app to study. They are not a web developer, so explain technical points in plain Turkish, with a little more detail than usual.
- Talk to the owner in **Turkish**.

## Language
- Study content and app interface: **Turkish**.
- Documentation (README files, CLAUDE.md, LICENSE, landing page `index.html`), code comments in new tools, and commit messages: **English**. Existing Turkish code comments can stay.
- The description paragraph at the top of `README.md` was written by the owner: do not rewrite it.

## Workflow
- Work course by course. After each course (or another large piece), report in Turkish and **wait for approval** before the next one.
- **Ask before every commit and every push.** If the owner says only "commit", do not push.
- Commit messages: English, short summary line, ending with the attribution line your tool asks for.
- Pushing to `main` publishes the site (GitHub Pages) within minutes, so keep `main` working.
- Ask before large downloads when working on the owner's computer; their connection is metered.

## Copyright
- SPL's PDFs and any text extracted from them (`duzey-*/kaynaklar/**/*.pdf`, `duzey-*/kaynaklar/metin/`) must **never** be committed. Do not paste long passages from them into content: lessons are written in our own words and cite the page.

## Writing content
- Plan days in the level's `uygulama/veri/program.js` (`sayfa` = printed pages, `hazir: false` until written). Find `pdfOfset` (PDF page = printed page + offset) and record it.
- A day: a Markdown lesson (`okuma`), starting with "## Bugünün haritası", plus **8 questions**. End-of-course: 25. Mock pool: 50, testing facts that the daily questions do not ask.
- Each question: `{ s, c: [5 options], d: index 0–4, a: explanation, k: "<code> resmi not s. N" }`.
- An option that starts with "Yalnız " or "Hiçbiri" stops the app from shuffling that question (see `sabitMi` in `araclar/yukle.js`). Use it only for real statement lists ("Yalnız I", "I ve II"); otherwise write "Yalnızca".
- Only test what the official note says. Do not test facts on which official sources conflict; put them in a `> [!dikkat]` box and in the level README's conflict list.
- Courses shared between levels live in one place only, in the lowest level that has them (`duzey-1/` or `duzey-2/`); higher levels load them from there.
- New course entries in `program.js` need `dersSonu: true` and `deneme: true` once `ders-sonu.js` and `deneme.js` exist; otherwise the app does not load them.

## Checks before reporting a course
```sh
for f in duzey-*/uygulama/icerik/*/*.js; do node --check "$f" || echo "ERROR: $f"; done
node araclar/kontrol.js <code>      # must print "Hata yok"
node araclar/benzer.js <code>       # review every pair it lists
```
Then open the app in a browser (`python -m http.server 8766`, then `/duzey-N/uygulama/index.html`). Turn preview mode on in Ayarlar, check the first and last day, a mini test and the end-of-course test, look at the console for errors, and turn preview mode off again.

After a course is finished, update the level README (course table, "at a glance" paragraph, question review counts, folder line), the root `README.md`, the landing page `index.html` and the level's `kaynaklar/README.md` (PDF download row).
