// Ortak yardımcı: bir dersin içerik klasöründeki dosyaları Node içinde yükler.
// Shared helper: loads a course's content files (gunXX.js, ders-sonu.js, deneme.js) in Node.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const KOK = path.resolve(__dirname, "..");

// Uygulamadaki kuralın aynısı (ortak/js/app.js, secenekKaristir): bu şıklar karıştırılmaz.
// Same rule as the app: these option sets keep their order on screen.
function sabitMi(q) {
  return !!q.sabit ||
    q.c.some(c => /^(Yalnız\s|I,|I ve|II|III|Hiçbiri)/.test(String(c).trim())) ||
    q.c.every(c => /^[\d%]/.test(String(c).trim()));
}

// Tüm ders klasörleri: [{ duzey, kod, klasor }]
function dersler() {
  const out = [];
  for (const d of fs.readdirSync(KOK).filter(x => /^duzey-\d+$/.test(x)).sort()) {
    const ic = path.join(KOK, d, "uygulama", "icerik");
    if (!fs.existsSync(ic)) continue;
    for (const kod of fs.readdirSync(ic).sort()) {
      const k = path.join(ic, kod);
      if (fs.statSync(k).isDirectory()) out.push({ duzey: d, kod, klasor: k });
    }
  }
  return out;
}

// Bir klasörü yükler: { gunler: {no: veri}, sonu, deneme, hatalar: [] }
function yukle(klasor) {
  const S = { gunler: {}, sonu: null, deneme: null, hatalar: [] };
  const SPL = {
    gun: (kod, no, v) => { S.gunler[no] = v; },
    dersSonu: (kod, v) => { S.sonu = v; },
    deneme: (kod, v) => { S.deneme = v; }
  };
  for (const f of fs.readdirSync(klasor).filter(f => f.endsWith(".js")).sort()) {
    try {
      vm.runInNewContext(fs.readFileSync(path.join(klasor, f), "utf8"), { SPL }, { filename: f });
    } catch (e) {
      S.hatalar.push(f + ": " + e.message);
    }
  }
  return S;
}

// Tüm soruları kimlikleriyle düz liste yapar: [{ id, tur: "gun"|"sonu"|"deneme", q }]
function sorular(S) {
  const out = [];
  Object.keys(S.gunler).map(Number).sort((a, b) => a - b).forEach(no =>
    (S.gunler[no].sorular || []).forEach((q, i) => out.push({ id: "g" + no + "." + (i + 1), tur: "gun", q })));
  if (S.sonu) S.sonu.sorular.forEach((q, i) => out.push({ id: "sonu." + (i + 1), tur: "sonu", q }));
  if (S.deneme) S.deneme.sorular.forEach((q, i) => out.push({ id: "deneme." + (i + 1), tur: "deneme", q }));
  return out;
}

// Komut satırındaki ders kodlarını klasörlere çevirir; kod verilmezse hepsi.
function secilenler(argv) {
  const hepsi = dersler();
  const kodlar = argv.filter(a => /^\d{4}$/.test(a));
  if (!kodlar.length) return hepsi;
  const bulunan = hepsi.filter(d => kodlar.includes(d.kod));
  const eksik = kodlar.filter(k => !bulunan.some(d => d.kod === k));
  if (eksik.length) { console.error("Ders bulunamadı: " + eksik.join(", ")); process.exit(2); }
  return bulunan;
}

module.exports = { KOK, sabitMi, dersler, yukle, sorular, secilenler };
