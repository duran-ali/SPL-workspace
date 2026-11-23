# Tools (araclar)

Command-line helpers for checking content. They need Node.js (any recent version) and, for `metin.py`, Python 3. Run them from the repository root. `kontrol.js` and `benzer.js` only read files; they never change content.

| Tool | What it does |
|---|---|
| `node araclar/kontrol.js [codes] [--liste]` | Audits question format and counts: 8 per day, 25 end-of-course, 50 mock, five unique options, `d` in 0–4, `a` and `k` present. It also checks the correct-option length rate (limit 35%), clearly longest correct options (1.3× the next longest) and answer spread. Exits with code 1 if anything fails. `--liste` also lists questions whose correct option is the longest. |
| `node araclar/benzer.js <codes> [threshold]` | Similarity screen: compares end-of-course and mock questions with the daily questions and with each other (word overlap, default threshold 0.40). Every listed pair needs a human look. |
| `python araclar/metin.py cikar <pdf> <out.txt>` | Extracts a page-marked text from an official note PDF (needs `pdftotext`). Save the output in `duzey-N/kaynaklar/metin/`, which is gitignored because the text is copyrighted. |
| `python araclar/metin.py sayfa <txt> <offset> <from> <to>` | Prints the printed pages from–to. Offset is `pdfOfset` in `program.js`. |
| `python araclar/metin.py bul <txt> <offset> <pattern>...` | Finds the printed pages where a regex pattern occurs, which helps check a question's `k` page. |

`yukle.js` is the shared loader that the Node tools use. Its `sabitMi` function mirrors the app's rule for options that are not shuffled (`ortak/js/app.js`, `secenekKaristir`); if one changes, change the other.

Examples:
```sh
node araclar/kontrol.js              # all courses
node araclar/kontrol.js 1016 --liste
node araclar/benzer.js 1016 0.35
python araclar/metin.py bul duzey-2/kaynaklar/metin/1016_Muhasebe_ve_Finansal_Raporlama.txt 7 "Luca Pacioli"
```
