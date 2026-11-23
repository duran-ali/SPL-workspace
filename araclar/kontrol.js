// Soru denetimi / question audit (read-only).
// Kullanım / usage:
//   node araclar/kontrol.js                 tüm dersler, özet / all courses, summary
//   node araclar/kontrol.js 1016            tek ders / one course
//   node araclar/kontrol.js 1016 --liste    doğru şıkkın en uzun olduğu soruları da listeler
//                                           also lists questions whose correct option is the longest
// Hata (biçim hatası, soru sayısı, belirgin uzun doğru şık) varsa çıkış kodu 1'dir.
// Exit code 1 if any error (format, question count, clearly longest correct option).
"use strict";
const { sabitMi, yukle, sorular, secilenler } = require("./yukle");

const argv = process.argv.slice(2);
const liste = argv.includes("--liste");
const GUN_SORU = 8, SONU_SORU = 25, DENEME_SORU = 50, GUCLU = 1.3;

let toplamHata = 0;
const satirlar = [];

for (const d of secilenler(argv)) {
  const S = yukle(d.klasor);
  const hatalar = S.hatalar.slice();
  const uyari = [];

  for (const [no, v] of Object.entries(S.gunler)) {
    if (!v.okuma) hatalar.push("gün " + no + ": okuma yok / no reading");
    if ((v.sorular || []).length !== GUN_SORU) hatalar.push("gün " + no + ": " + (v.sorular || []).length + " soru (beklenen " + GUN_SORU + ")");
  }
  if (S.sonu && S.sonu.sorular.length !== SONU_SORU) hatalar.push("ders sonu: " + S.sonu.sorular.length + " soru (beklenen " + SONU_SORU + ")");
  if (S.deneme && S.deneme.sorular.length !== DENEME_SORU) hatalar.push("deneme: " + S.deneme.sorular.length + " soru (beklenen " + DENEME_SORU + ")");

  const Q = sorular(S);
  let karisik = 0, enUzun = 0;
  const dag = [0, 0, 0, 0, 0], sabitDag = [0, 0, 0, 0, 0];

  for (const { id, q } of Q) {
    if (!q.s || !Array.isArray(q.c) || q.c.length !== 5 || !Number.isInteger(q.d) || q.d < 0 || q.d > 4 || !q.a || !q.k) {
      hatalar.push(id + ": biçim hatası / bad format (s, c[5], d 0-4, a, k)");
      continue;
    }
    if (new Set(q.c.map(c => String(c).trim())).size !== 5) hatalar.push(id + ": tekrarlı şık / duplicate option");
    if (!new RegExp("^" + d.kod + " ").test(q.k)) uyari.push(id + ": kaynak '" + q.k + "' ders koduyla başlamıyor");
    dag[q.d]++;
    if (sabitMi(q)) { sabitDag[q.d]++; continue; }
    karisik++;
    const L = q.c.map(c => String(c).length);
    const mx = Math.max(...L);
    if (L[q.d] !== mx) continue;
    enUzun++;
    const ikinci = [...L].sort((a, b) => b - a)[1];
    if (mx >= GUCLU * ikinci) hatalar.push(id + ": doğru şık belirgin uzun / correct option clearly longest (" + mx + " vs " + ikinci + ")");
    else if (liste) uyari.push(id + ": doğru şık en uzun (" + mx + " vs " + ikinci + ")");
  }

  const oran = karisik ? Math.round(100 * enUzun / karisik) : 0;
  if (oran > 35) hatalar.push("doğru=en uzun oranı %" + oran + " (sınır %35)");
  toplamHata += hatalar.length;

  satirlar.push([
    d.kod, Object.keys(S.gunler).length, Q.length,
    "%" + oran, dag.join("/"), sabitDag.join("/"), hatalar.length
  ]);
  if (hatalar.length || uyari.length) {
    console.log("\n== " + d.duzey + "/" + d.kod);
    hatalar.forEach(h => console.log("  HATA  " + h));
    uyari.forEach(u => console.log("  not   " + u));
  }
}

console.log("\nders  gün  soru  doğru=en uzun  A/B/C/D/E (tümü)  A/B/C/D/E (sabit sıralı)  hata");
for (const s of satirlar) {
  console.log(String(s[0]).padEnd(6) + String(s[1]).padEnd(5) + String(s[2]).padEnd(6) +
    String(s[3]).padEnd(15) + String(s[4]).padEnd(19) + String(s[5]).padEnd(25) + s[6]);
}
console.log(toplamHata ? "\n" + toplamHata + " hata" : "\nHata yok / no errors");
process.exit(toplamHata ? 1 : 0);
