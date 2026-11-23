"""PDF'ten sayfa işaretli düz metin / page-marked plain text from an official note PDF.

The result goes to duzey-N/kaynaklar/metin/ (gitignored: SPL's text is copyrighted).

Kullanım / usage:
  python araclar/metin.py cikar <pdf> <metin.txt>
      Needs `pdftotext` (poppler-utils; Git for Windows ships it).
      Writes "===== SAYFA n =====" before each PDF page n.
  python araclar/metin.py sayfa <metin.txt> <ofset> <ilk> <son>
      Prints printed pages ilk..son (PDF page = printed page + ofset, `pdfOfset` in program.js).
  python araclar/metin.py bul <metin.txt> <ofset> <desen> [desen ...]
      Searches regex patterns and prints the printed page numbers where they occur.
"""
import io
import re
import subprocess
import sys

ISARET = re.compile(r"\n?===== SAYFA (\d+) =====\n")


def cikar(pdf, cikti):
    ham = subprocess.run(["pdftotext", "-enc", "UTF-8", pdf, "-"], check=True, capture_output=True).stdout
    sayfalar = ham.decode("utf-8", "replace").split("\f")
    if sayfalar and not sayfalar[-1].strip():
        sayfalar.pop()
    with io.open(cikti, "w", encoding="utf-8") as f:
        for n, s in enumerate(sayfalar, 1):
            f.write("\n===== SAYFA %d =====\n%s" % (n, s))
    print("%d sayfa -> %s" % (len(sayfalar), cikti))


def oku(metin, ofset):
    parca = ISARET.split(io.open(metin, encoding="utf-8").read())
    return {int(parca[i]) - ofset: parca[i + 1] for i in range(1, len(parca), 2)}


def main(a):
    if len(a) >= 3 and a[0] == "cikar":
        cikar(a[1], a[2])
    elif len(a) == 5 and a[0] == "sayfa":
        d = oku(a[1], int(a[2]))
        for k in range(int(a[3]), int(a[4]) + 1):
            if k in d:
                print("\n## s.%d\n%s" % (k, re.sub(r"\n{2,}", "\n", d[k]).strip()))
    elif len(a) >= 4 and a[0] == "bul":
        d = oku(a[1], int(a[2]))
        for desen in a[3:]:
            bulunan = []
            for k in sorted(d):
                duz = re.sub(r"\s+", " ", d[k])
                m = re.search(desen, duz, re.I)
                if m:
                    bulunan.append((k, duz[max(0, m.start() - 60):m.end() + 60]))
            print("## %s -> s. %s" % (desen, ", ".join(str(k) for k, _ in bulunan[:15]) or "yok"))
            for k, parca in bulunan[:3]:
                print("   s.%d: ...%s..." % (k, parca))
    else:
        print(__doc__)
        sys.exit(2)


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    main(sys.argv[1:])
