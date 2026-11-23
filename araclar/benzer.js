// Benzer soru taraması / similarity screen (read-only).
// Ders sonu ve deneme sorularını o dersin günlük sorularıyla ve birbirleriyle karşılaştırır.
// Compares end-of-course and mock questions with the course's daily questions and with each other,
// using word overlap (Jaccard) of the question text plus its correct option.
// Kullanım / usage:
//   node araclar/benzer.js 1016          eşik 0.40 / threshold 0.40
//   node araclar/benzer.js 1016 0.35     daha hassas / more sensitive
// Listelenen her çift elle incelenmelidir; aynı bilgiyi soruyorsa biri değiştirilir.
// Every listed pair needs a human look; replace one if both test the same fact.
"use strict";
const { yukle, sorular, secilenler } = require("./yukle");

const argv = process.argv.slice(2);
const esik = Number(argv.find(a => /^0?\.\d+$/.test(a)) || 0.4);
const durak = new Set(("ve ile bir bu için hangisi aşağıdakilerden ilgili doğrudur yanlıştır olarak en ne da de ki " +
  "veya kadar olan gibi göre içinde hâlinde halinde").split(" "));

function kelimeler(q) {
  return new Set((q.s + " " + q.c[q.d]).toLocaleLowerCase("tr").replace(/\*\*/g, "")
    .split(/[^a-zçğıöşüâîû0-9%]+/).filter(w => w.length > 2 && !durak.has(w)));
}

let toplam = 0;
for (const d of secilenler(argv)) {
  const V = sorular(yukle(d.klasor)).map(x => ({ id: x.id, tur: x.tur, w: kelimeler(x.q) }));
  const out = [];
  for (let i = 0; i < V.length; i++) {
    if (V[i].tur === "gun") continue;
    for (let j = 0; j < V.length; j++) {
      if (i === j || (V[j].tur !== "gun" && j < i)) continue;
      let ortak = 0;
      V[i].w.forEach(w => { if (V[j].w.has(w)) ortak++; });
      const s = ortak / (V[i].w.size + V[j].w.size - ortak);
      if (s >= esik) out.push([s, V[i].id, V[j].id]);
    }
  }
  out.sort((a, b) => b[0] - a[0]);
  console.log("== " + d.kod + " (eşik " + esik + "): " + out.length + " çift");
  out.forEach(o => console.log("  " + o[0].toFixed(2) + "  " + o[1] + "  ~  " + o[2]));
  toplam += out.length;
}
process.exit(0);
