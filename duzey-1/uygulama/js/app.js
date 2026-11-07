// SPL Düzey 1 çalışma uygulaması.
// İçerik dosyaları SPL.gun(...) ve SPL.dersSonu(...) ile kendini kaydeder.
// İlerleme tarayıcının localStorage alanında tutulur; Ayarlar'dan yedeklenebilir.
(function () {
  "use strict";

  var P = window.SPL_PROGRAM;
  var ICERIK = { gun: {}, sonu: {}, deneme: {} };
  window.SPL = {
    gun: function (kod, no, veri) { ICERIK.gun[kod + "-" + no] = veri; },
    dersSonu: function (kod, veri) { ICERIK.sonu[kod] = veri; },
    deneme: function (kod, veri) { ICERIK.deneme[kod] = veri; }
  };

  // ---------- Kayıt (ilerleme) ----------
  var ANAHTAR = "spl-ilerleme-v1";
  function bosKayit() { return { gunler: {}, sonu: {}, denemeler: [], yanlislar: {}, onizleme: false }; }
  var K = bosKayit();
  function yukle() {
    try { var ham = localStorage.getItem(ANAHTAR); if (ham) K = Object.assign(bosKayit(), JSON.parse(ham)); } catch (e) { }
  }
  function kaydet() { try { localStorage.setItem(ANAHTAR, JSON.stringify(K)); } catch (e) { } }

  // ---------- Yardımcılar ----------
  var $ = function (s, k) { return (k || document).querySelector(s); };
  var kac = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); };
  var HARF = ["A", "B", "C", "D", "E"];
  function bugun(d) { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function tarihYaz(ts) { return new Date(ts).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }); }
  function karistir(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  // Şıkları karıştırır; "Yalnız I / I ve II", "Hiçbiri" veya sayısal sıralı şıklar yerinde kalır.
  function secenekKaristir(q) {
    var sabit = q.sabit || q.c.some(function (c) { return /^(Yalnız\s|I,|I ve|II|III|Hiçbiri)/.test(c.trim()); }) ||
      q.c.every(function (c) { return /^[\d%]/.test(c.trim()); });
    if (sabit) return q;
    var sira = karistir(q.c.map(function (_, i) { return i; }));
    return Object.assign({}, q, { c: sira.map(function (i) { return q.c[i]; }), d: sira.indexOf(q.d) });
  }
  function ders(kod) { return P.dersler.filter(function (d) { return d.kod === kod; })[0]; }
  function gunKaydi(kod, no) { return K.gunler[kod + "-" + no]; }
  function gunTamam(kod, no) { var g = gunKaydi(kod, no); return !!(g && g.tamam); }
  function kelimeSayisi(t) { return (t.match(/\S+/g) || []).length; }
  function okumaSuresi(t) { var dk = Math.round(kelimeSayisi(t) / 130); return Math.max(1, dk); }
  // Yerelde (dosyadan veya localhost'tan) indirilen PDF kullanılır. İnternetteki bir
  // adresten (ör. GitHub Pages) açılınca PDF'ler orada olmadığı için SPL'nin resmi adresi kullanılır.
  var YEREL = location.protocol === "file:" || /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  function pdfAdresi(o) { return (!YEREL && o.pdfResmi) ? o.pdfResmi : o.pdf; }
  function pdfLink(d, sayfa) {
    if (!d.pdf) return null;
    return pdfAdresi(d) + (d.pdfOfset != null ? "#page=" + (sayfa + d.pdfOfset) : "");
  }
  function ilerleme(d) {
    var top = d.gunler.length, biten = d.gunler.filter(function (g) { return gunTamam(d.kod, g.no); }).length;
    return { top: top, biten: biten, oran: top ? biten / top : 0 };
  }
  function gunAcikMi(d, no) {
    if (K.onizleme) return true;
    return no === 1 || gunTamam(d.kod, no - 1);
  }
  function sonuAcikMi(d) {
    if (K.onizleme) return true;
    return d.gunler.length > 0 && d.gunler.every(function (g) { return gunTamam(d.kod, g.no); });
  }
  function denemeAcikMi() {
    if (K.onizleme) return true;
    return P.dersler.every(function (d) { return (K.sonu[d.kod] || []).length > 0; });
  }
  function seri() {
    var gunSet = {};
    Object.keys(K.gunler).forEach(function (k) { var g = K.gunler[k]; if (g.tamam) gunSet[bugun(new Date(g.tamam))] = 1; });
    var d = new Date(), say = 0;
    if (!gunSet[bugun(d)]) d.setDate(d.getDate() - 1);
    while (gunSet[bugun(d)]) { say++; d.setDate(d.getDate() - 1); }
    return { say: say, bugunYapildi: !!gunSet[bugun()] };
  }
  function siradaki() {
    for (var i = 0; i < P.dersler.length; i++) {
      var d = P.dersler[i];
      for (var j = 0; j < d.gunler.length; j++) {
        var g = d.gunler[j];
        if (!gunTamam(d.kod, g.no)) return { d: d, g: g };
      }
    }
    return null;
  }
  // Bir dersin tüm soruları (günlük + ders sonu), deneme havuzu için.
  function dersHavuzu(kod) {
    var h = [];
    var d = ders(kod);
    d.gunler.forEach(function (g) {
      var c = ICERIK.gun[kod + "-" + g.no];
      if (c) c.sorular.forEach(function (s, i) { h.push(Object.assign({ id: kod + "-g" + g.no + "-" + i, kod: kod }, s)); });
    });
    var s = ICERIK.sonu[kod];
    if (s) s.sorular.forEach(function (q, i) { h.push(Object.assign({ id: kod + "-s-" + i, kod: kod }, q)); });
    return h;
  }
  // Yalnızca genel denemede çıkan, günlerde ve ders sonunda görülmemiş sorular.
  function denemeHavuzu(kod) {
    var c = ICERIK.deneme[kod];
    return c ? c.sorular.map(function (q, i) { return Object.assign({ id: kod + "-d-" + i, kod: kod }, q); }) : [];
  }
  function soruBul(id) {
    var p = id.split("-"), kod = p[0];
    var havuz = dersHavuzu(kod).concat(denemeHavuzu(kod));
    return havuz.filter(function (q) { return q.id === id; })[0];
  }
  function cubuk(oran) { return "<div class=\"cubuk\"><span style=\"width:" + Math.round(oran * 100) + "%\"></span></div>"; }

  // ---------- Sayfalar ----------
  var kok;
  var zamanlayici = null;
  function goster(html) { if (zamanlayici) { clearInterval(zamanlayici); zamanlayici = null; } kok.innerHTML = html; window.scrollTo(0, 0); }

  function anaSayfa() {
    var sr = seri(), sira = siradaki();
    var toplamGun = 0, biten = 0;
    P.dersler.forEach(function (d) { var i = ilerleme(d); toplamGun += i.top; biten += i.biten; });
    var h = "<section class=\"karsilama\"><div><h1>Bugünün çalışması</h1>";
    h += "<p class=\"alt-yazi\">" + (sr.bugunYapildi ? "Bugünkü okumanı bitirdin. Yarın devam." : "Günde bir okuma ve kısa bir test: 15-20 dakika.") + "</p></div>";
    h += "<div class=\"seri\"><strong>" + sr.say + "</strong><span>günlük seri</span></div></section>";
    if (sira) {
      var c = ICERIK.gun[sira.d.kod + "-" + sira.g.no];
      h += "<a class=\"kart siradaki\" href=\"#/gun/" + sira.d.kod + "/" + sira.g.no + "\">";
      h += "<span class=\"etiket\">" + kac(sira.d.kisa) + " · " + sira.g.no + ". gün</span>";
      h += "<h2>" + kac(sira.g.baslik) + "</h2>";
      h += "<p>" + kac(sira.g.bolum) + " · resmi not s. " + sira.g.sayfa[0] + "–" + sira.g.sayfa[1] + (c ? " · ~" + okumaSuresi(c.okuma) + " dk okuma" : "") + "</p>";
      h += "<span class=\"dugme\">" + (c ? "Okumaya başla" : "Gün planını gör") + " →</span></a>";
    }
    h += "<h2 class=\"bolum-baslik\">Dersler</h2><div class=\"izgara\">";
    P.dersler.forEach(function (d) {
      var i = ilerleme(d);
      var sonuc = (K.sonu[d.kod] || []).slice(-1)[0];
      h += "<a class=\"kart ders-kart\" href=\"#/ders/" + d.kod + "\">";
      h += "<span class=\"etiket\">" + d.kod + "</span><h3>" + kac(d.ad) + "</h3>";
      if (i.top) { h += cubuk(i.oran) + "<p class=\"kucuk\">" + i.biten + " / " + i.top + " gün" + (sonuc ? " · ders sonu: " + sonuc.puan : "") + "</p>"; }
      else h += "<p class=\"kucuk soluk\">Günlük plan hazırlanacak</p>";
      h += "</a>";
    });
    h += "</div>";
    var dAcik = denemeAcikMi();
    h += "<h2 class=\"bolum-baslik\">Genel deneme</h2>";
    h += "<div class=\"kart\"><p>Dört dersten 25'er soru, toplam 100 soru. Gerçek sınavdaki gibi her dersten en az 50, ortalamada en az 60 gerekir.</p>";
    h += dAcik ? "<a class=\"dugme\" href=\"#/deneme\">Deneme başlat</a>" : "<p class=\"kucuk soluk\">Dört dersin ders sonu testlerini bitirince açılır.</p>";
    var tamlar = K.denemeler.filter(function (x) { return x.tur !== "tek"; });
    if (tamlar.length) {
      h += "<p class=\"kucuk\">Son tam deneme: " + tamlar.slice(-1)[0].ort + " ortalama · " + (tamlar.slice(-1)[0].basarili ? "başarılı" : "başarısız") + "</p>";
    }
    h += "</div>";
    var ys = Object.keys(K.yanlislar).length;
    h += "<p class=\"alt-not\">Genel ilerleme: " + biten + " / " + toplamGun + " gün · Yanlış defterinde " + ys + " soru · <a href=\"#/yanlislar\">tekrar et</a> · <a href=\"#/ayarlar\">eğitimi başa sar</a></p>";
    if (K.onizleme) h += "<p class=\"alt-not uyari-yazi\">Önizleme modu açık: tüm kilitler kaldırıldı (Ayarlar).</p>";
    goster(h);
  }

  function dersSayfasi(kod) {
    var d = ders(kod); if (!d) return anaSayfa();
    var i = ilerleme(d);
    var h = "<a class=\"geri\" href=\"#/\">← Ana sayfa</a><h1>" + kac(d.ad) + "</h1>";
    h += "<p class=\"alt-yazi\">" + d.kod + " · 25 soru · resmi not: <a href=\"" + kac(pdfAdresi(d)) + "\" target=\"_blank\">PDF'i aç</a></p>";
    if (!d.gunler.length) { goster(h + "<div class=\"kart\"><p>Bu dersin günlük planı henüz hazırlanmadı.</p></div>"); return; }
    h += cubuk(i.oran) + "<p class=\"kucuk\">" + i.biten + " / " + i.top + " gün tamamlandı</p>";
    h += "<ol class=\"gun-listesi\">";
    var sonBolum = "";
    d.gunler.forEach(function (g) {
      if (g.bolum !== sonBolum) { h += "<li class=\"bolum-ayrac\">" + kac(g.bolum) + "</li>"; sonBolum = g.bolum; }
      var kayit = gunKaydi(kod, g.no), acik = gunAcikMi(d, g.no), hazir = !!ICERIK.gun[kod + "-" + g.no];
      var durum = kayit && kayit.tamam ? "tamam" : (acik ? "acik" : "kilitli");
      h += "<li class=\"gun " + durum + "\">";
      var ic = "<span class=\"gun-no\">" + g.no + "</span><span class=\"gun-metin\"><strong>" + kac(g.baslik) + "</strong><small>s. " + g.sayfa[0] + "–" + g.sayfa[1] +
        (kayit && kayit.test ? " · test: " + kayit.test.dogru + "/" + kayit.test.toplam : "") + (!hazir ? " · içerik hazırlanacak" : "") + "</small></span>" +
        "<span class=\"gun-durum\">" + (durum === "tamam" ? "✓" : durum === "kilitli" ? "🔒" : "") + "</span>";
      h += (acik ? "<a href=\"#/gun/" + kod + "/" + g.no + "\">" + ic + "</a>" : "<div>" + ic + "</div>") + "</li>";
    });
    h += "</ol>";
    var sa = sonuAcikMi(d), sonuVar = !!ICERIK.sonu[kod];
    h += "<div class=\"kart\"><h3>Ders sonu testi</h3><p>Dersin tamamından 25 soru. Geçmek için en az " + P.dersSonuBaraj + " puan (resmi sınavda ders barajı " + P.basari.konuMin + ").</p>";
    var gecmis = K.sonu[kod] || [];
    if (gecmis.length) h += "<p class=\"kucuk\">Denemelerin: " + gecmis.map(function (x) { return x.puan; }).join(", ") + "</p>";
    if (!sonuVar) h += "<p class=\"kucuk soluk\">Sorular henüz hazırlanmadı.</p>";
    else if (sa) h += "<a class=\"dugme\" href=\"#/sonu/" + kod + "\">Testi başlat</a>";
    else h += "<p class=\"kucuk soluk\">Tüm günleri bitirince açılır.</p>";
    h += "</div>";
    if (i.biten || (K.sonu[kod] || []).length) {
      h += "<div class=\"kart\"><h3>Dersi başa sar</h3><p class=\"kucuk\">Bu dersin tüm günleri, ders sonu sonuçları ve yanlış defterindeki soruları silinir; ders 1. günden başlar. Diğer dersler etkilenmez.</p>" +
        "<button class=\"dugme tehlike\" id=\"basaSar\">Bu dersi başa sar</button></div>";
    }
    goster(h);
    if ($("#basaSar")) $("#basaSar").addEventListener("click", function () {
      if (!confirm(d.kisa + " dersindeki tüm ilerleme silinecek. Onaylıyor musun?")) return;
      dersiGeriSar(kod, 1);
      dersSayfasi(kod);
    });
  }

  // Önceki gün / tüm günler / sonraki gün bağlantıları.
  function gunGezinme(d, no) {
    var onceki = d.gunler.filter(function (x) { return x.no === no - 1; })[0];
    var sonraki = d.gunler.filter(function (x) { return x.no === no + 1; })[0];
    var h = "<nav class=\"gun-gezinme\">";
    h += onceki ? "<a href=\"#/gun/" + d.kod + "/" + onceki.no + "\">← " + onceki.no + ". gün</a>" : "<span></span>";
    h += "<a href=\"#/ders/" + d.kod + "\">Tüm günler</a>";
    if (!sonraki) h += "<span></span>";
    else if (gunAcikMi(d, sonraki.no)) h += "<a href=\"#/gun/" + d.kod + "/" + sonraki.no + "\">" + sonraki.no + ". gün →</a>";
    else h += "<span class=\"soluk\" title=\"Bu günün mini testini bitirince açılır\">" + sonraki.no + ". gün 🔒</span>";
    return h + "</nav>";
  }

  // Bir dersin ilerlemesini verilen günden itibaren siler. Gün 1 verilirse ders tamamen başa sarılır.
  function dersiGeriSar(kod, gundenItibaren) {
    var d = ders(kod);
    d.gunler.forEach(function (g) { if (g.no >= gundenItibaren) delete K.gunler[kod + "-" + g.no]; });
    if (gundenItibaren <= 1) {
      delete K.sonu[kod];
      Object.keys(K.yanlislar).forEach(function (id) { if (id.indexOf(kod + "-") === 0) delete K.yanlislar[id]; });
    }
    kaydet();
  }

  // SPL'nin resmi çalışma sorularından bu güne ait olanlara bağlantılar (açık uçlu; cevaplar PDF'te).
  function calismaSorulariKarti(kod, no) {
    var cs = (window.SPL_CALISMA || {})[kod];
    if (!cs) return "";
    var liste = cs.sorular.filter(function (q) { return q.gun === no; });
    if (!liste.length) return "";
    var h = "<div class=\"kart\"><h3>Resmi çalışma soruları</h3><p class=\"kucuk soluk\">SPL'nin açık uçlu, hesaplamalı soruları. Önce kendin çöz, sonra PDF'teki cevapla karşılaştır.</p><ul>";
    liste.forEach(function (q) {
      h += "<li><a target=\"_blank\" href=\"" + kac(pdfAdresi(cs) + "#page=" + q.sayfa) + "\">Soru " + kac(q.no) + ": " + kac(q.baslik) + "</a> <span class=\"kucuk soluk\">(s. " + q.sayfa + ")</span>" +
        (q.not ? "<br><span class=\"kucuk uyari-yazi\">Not: " + kac(q.not) + "</span>" : "") + "</li>";
    });
    return h + "</ul></div>";
  }

  function gunSayfasi(kod, no) {
    var d = ders(kod); no = +no;
    var g = d && d.gunler.filter(function (x) { return x.no === no; })[0];
    if (!g) return anaSayfa();
    if (!gunAcikMi(d, no)) { location.hash = "#/ders/" + kod; return; }
    var c = ICERIK.gun[kod + "-" + no];
    var link = pdfLink(d, g.sayfa[0]);
    var tamam = gunTamam(kod, no);
    var h = gunGezinme(d, no);
    h += "<span class=\"etiket\">" + kac(d.kisa) + " · " + no + ". gün · " + kac(g.bolum) + (tamam ? " · ✓ tamamlandı" : "") + "</span><h1>" + kac(g.baslik) + "</h1>";
    if (!c) {
      h += "<div class=\"kart\"><p>Bu günün konu anlatımı henüz hazırlanmadı. Şimdilik resmi notun ilgili sayfalarını okuyabilirsin.</p>";
      if (link) h += "<a class=\"dugme ikincil\" target=\"_blank\" href=\"" + kac(link) + "\">Resmi notta s. " + g.sayfa[0] + "–" + g.sayfa[1] + "</a>";
      goster(h + "</div>" + gunGezinme(d, no)); return;
    }
    h += "<p class=\"alt-yazi\">~" + okumaSuresi(c.okuma) + " dk okuma · " + c.sorular.length + " soruluk mini test" +
      (link ? " · <a target=\"_blank\" href=\"" + kac(link) + "\">resmi not s. " + g.sayfa[0] + "–" + g.sayfa[1] + "</a>" : "") + "</p>";
    h += "<article class=\"okuma\">" + window.mdHtml(c.okuma) + "</article>";
    h += calismaSorulariKarti(kod, no);
    h += "<div class=\"okuma-son\"><a class=\"dugme\" href=\"#/test/" + kod + "/" + no + "\">" + (tamam ? "Mini testi tekrar çöz →" : "Okumayı bitirdim, mini teste geç →") + "</a>";
    if (tamam) h += "<br><button class=\"dugme ikincil\" id=\"buradan\">Bu günden itibaren yeniden başla</button>";
    h += "</div>" + gunGezinme(d, no);
    goster(h);
    if (tamam) $("#buradan").addEventListener("click", function () {
      if (!confirm(no + ". gün ve sonrasındaki günlerin ilerlemesi silinecek; çalışmaya " + no + ". günden devam edeceksin. Onaylıyor musun?")) return;
      dersiGeriSar(kod, no);
      gunSayfasi(kod, no);
    });
    K.gunler[kod + "-" + no] = Object.assign({}, gunKaydi(kod, no), { okundu: Date.now() });
    kaydet();
  }

  // ---------- Öğrenme modu testi (anında geri bildirim) ----------
  function ogrenmeTesti(baslik, sorular, geriLink, bitince) {
    sorular = sorular.map(secenekKaristir);
    var i = 0, dogru = 0, yanlis = [];
    function ciz() {
      var q = sorular[i];
      var h = "<a class=\"geri\" href=\"" + geriLink + "\">← Vazgeç</a><span class=\"etiket\">" + kac(baslik) + "</span>";
      h += "<div class=\"test-ust\"><span>Soru " + (i + 1) + " / " + sorular.length + "</span>" + cubuk(i / sorular.length) + "</div>";
      h += "<div class=\"soru\"><div class=\"soru-metin\">" + window.mdHtml(q.s) + "</div><ol class=\"secenekler\">";
      q.c.forEach(function (c, j) { h += "<li><button data-j=\"" + j + "\"><b>" + HARF[j] + ")</b> " + window.mdSatir(c) + "</button></li>"; });
      h += "</ol><div class=\"aciklama\" hidden></div></div>";
      goster(h);
      kok.querySelectorAll(".secenekler button").forEach(function (b) { b.addEventListener("click", function () { cevapla(+b.dataset.j); }); });
    }
    function cevapla(j) {
      var q = sorular[i], ok = j === q.d;
      if (ok) { dogru++; if (q.id && K.yanlislar[q.id]) delete K.yanlislar[q.id]; }
      else { yanlis.push(q); if (q.id) K.yanlislar[q.id] = { tarih: Date.now() }; }
      kaydet();
      kok.querySelectorAll(".secenekler button").forEach(function (b, k) {
        b.disabled = true;
        if (k === q.d) b.classList.add("dogru");
        else if (k === j) b.classList.add("yanlis");
      });
      var a = $(".aciklama", kok);
      a.hidden = false;
      a.innerHTML = "<p class=\"" + (ok ? "ok" : "hata") + "\">" + (ok ? "Doğru!" : "Yanlış. Doğru cevap: " + HARF[q.d]) + "</p>" +
        (q.a ? window.mdHtml(q.a) : "") + (q.k ? "<p class=\"kucuk soluk\">Kaynak: " + kac(q.k) + "</p>" : "") +
        "<button class=\"dugme\" id=\"sonraki\">" + (i + 1 < sorular.length ? "Sonraki soru →" : "Sonucu gör") + "</button>";
      $("#sonraki").addEventListener("click", function () { i++; if (i < sorular.length) ciz(); else son(); });
      $("#sonraki").focus();
    }
    function son() {
      var h = "<span class=\"etiket\">" + kac(baslik) + "</span><h1>" + dogru + " / " + sorular.length + " doğru</h1>";
      h += cubuk(dogru / sorular.length);
      h += bitince(dogru, sorular.length) || "";
      if (yanlis.length) {
        h += "<h2 class=\"bolum-baslik\">Yanlış yaptıkların</h2><p class=\"kucuk\">Bunlar yanlış defterine eklendi.</p>";
        yanlis.forEach(function (q) {
          h += "<div class=\"kart\"><div class=\"soru-metin\">" + window.mdHtml(q.s) + "</div><p><b>Doğru cevap: " + HARF[q.d] + ")</b> " + window.mdSatir(q.c[q.d]) + "</p>" + (q.a ? window.mdHtml(q.a) : "") + "</div>";
        });
      }
      goster(h);
    }
    ciz();
  }

  function miniTest(kod, no) {
    var d = ders(kod); no = +no;
    var c = ICERIK.gun[kod + "-" + no];
    if (!c || !gunAcikMi(d, no)) { location.hash = "#/ders/" + kod; return; }
    var sorular = c.sorular.map(function (s, i) { return Object.assign({ id: kod + "-g" + no + "-" + i }, s); });
    ogrenmeTesti(d.kisa + " · " + no + ". gün mini testi", sorular, "#/gun/" + kod + "/" + no, function (dogru, top) {
      var onceki = gunKaydi(kod, no) || {};
      var enIyi = onceki.test && onceki.test.dogru > dogru ? onceki.test : { dogru: dogru, toplam: top, tarih: Date.now() };
      K.gunler[kod + "-" + no] = Object.assign({}, onceki, { test: enIyi, tamam: onceki.tamam || Date.now() });
      kaydet();
      var sonraki = d.gunler.filter(function (x) { return x.no === no + 1; })[0];
      var h = "<p>" + no + ". gün tamamlandı." + (dogru / top < 0.6 ? " Puanın düşük; okumaya bir kez daha göz atmanı öneririm." : "") + "</p><div class=\"dugmeler\">";
      if (sonraki) h += "<a class=\"dugme\" href=\"#/gun/" + kod + "/" + sonraki.no + "\">" + sonraki.no + ". güne geç →</a><a class=\"dugme ikincil\" href=\"#/ders/" + kod + "\">Ders planı</a>";
      else h += "<a class=\"dugme\" href=\"#/ders/" + kod + "\">Ders sonu testine hazır mısın?</a>";
      h += "<a class=\"dugme ikincil\" href=\"#/test/" + kod + "/" + no + "\">Testi tekrar çöz</a><a class=\"dugme ikincil\" href=\"#/\">Ana sayfa</a></div>";
      return h;
    });
  }

  function yanlislarSayfasi() {
    var ids = Object.keys(K.yanlislar);
    var sorular = ids.map(soruBul).filter(Boolean);
    var h = "<a class=\"geri\" href=\"#/\">← Ana sayfa</a><h1>Yanlış defteri</h1>";
    if (!sorular.length) { goster(h + "<div class=\"kart\"><p>Defterin boş. Yanlış yaptığın sorular buraya düşer, doğru cevaplayınca silinir.</p></div>"); return; }
    h += "<p class=\"alt-yazi\">" + sorular.length + " soru. Doğru cevapladığın soru defterden silinir.</p>";
    h += "<button class=\"dugme\" id=\"basla\">Tekrar etmeye başla</button>";
    goster(h);
    $("#basla").addEventListener("click", function () {
      ogrenmeTesti("Yanlış defteri tekrarı", karistir(sorular), "#/yanlislar", function () { return "<div class=\"dugmeler\"><a class=\"dugme\" href=\"#/yanlislar\">Deftere dön</a><a class=\"dugme ikincil\" href=\"#/\">Ana sayfa</a></div>"; });
    });
  }

  // ---------- Sınav modu (ders sonu ve genel deneme) ----------
  // limitSn verilirse süre geri sayar ve dolunca sınav kendiliğinden biter.
  function sinav(baslik, sorular, geriLink, bitince, limitSn) {
    sorular = sorular.map(secenekKaristir);
    var cevap = sorular.map(function () { return null; });
    var i = 0, baslangic = Date.now(), bitti = false, doldu = false;
    function gecenSn() { return Math.floor((Date.now() - baslangic) / 1000); }
    function bicim(s) { return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }
    function sure() { return bicim(limitSn ? Math.min(gecenSn(), limitSn) : gecenSn()); }
    function saatYazi() { return limitSn ? "kalan " + bicim(Math.max(0, limitSn - gecenSn())) : sure(); }
    function tik() {
      var e = $("#sure"); if (e) e.textContent = saatYazi();
      if (limitSn && !bitti && gecenSn() >= limitSn) { doldu = true; sonuc(); }
    }
    function ciz() {
      var q = sorular[i];
      var h = "<div class=\"sinav-ust\"><span class=\"etiket\">" + kac(baslik) + "</span><span class=\"sure\" id=\"sure\">" + saatYazi() + "</span></div>";
      h += "<div class=\"soru-izgara\">" + sorular.map(function (_, k) {
        return "<button data-k=\"" + k + "\" class=\"" + (k === i ? "aktif " : "") + (cevap[k] != null ? "dolu" : "") + "\">" + (k + 1) + "</button>";
      }).join("") + "</div>";
      h += "<div class=\"soru\"><p class=\"kucuk soluk\">Soru " + (i + 1) + " / " + sorular.length + (q.kod ? " · " + q.kod : "") + "</p><div class=\"soru-metin\">" + window.mdHtml(q.s) + "</div><ol class=\"secenekler\">";
      q.c.forEach(function (c, j) { h += "<li><button data-j=\"" + j + "\" class=\"" + (cevap[i] === j ? "secili" : "") + "\"><b>" + HARF[j] + ")</b> " + window.mdSatir(c) + "</button></li>"; });
      h += "</ol></div><div class=\"dugmeler\">";
      h += "<button class=\"dugme ikincil\" id=\"onceki\"" + (i === 0 ? " disabled" : "") + ">← Önceki</button>";
      h += i + 1 < sorular.length ? "<button class=\"dugme ikincil\" id=\"ileri\">Sonraki →</button>" : "";
      h += "<button class=\"dugme\" id=\"bitir\">Sınavı bitir</button></div>";
      var sakla = zamanlayici; zamanlayici = null;
      kok.innerHTML = h;
      zamanlayici = sakla || setInterval(tik, 1000);
      kok.querySelectorAll(".secenekler button").forEach(function (b) { b.addEventListener("click", function () { var j = +b.dataset.j; cevap[i] = cevap[i] === j ? null : j; ciz(); }); });
      kok.querySelectorAll(".soru-izgara button").forEach(function (b) { b.addEventListener("click", function () { i = +b.dataset.k; ciz(); }); });
      $("#onceki").addEventListener("click", function () { if (i > 0) { i--; ciz(); } });
      if ($("#ileri")) $("#ileri").addEventListener("click", function () { i++; ciz(); });
      $("#bitir").addEventListener("click", function () {
        var bos = cevap.filter(function (c) { return c == null; }).length;
        if (!confirm(bos ? bos + " soru boş. Yine de bitirilsin mi?" : "Sınav bitirilsin mi?")) return;
        sonuc();
      });
    }
    function sonuc() {
      if (bitti) return;
      bitti = true;
      var gecen = sure();
      sorular.forEach(function (q, k) {
        if (cevap[k] === q.d) { if (K.yanlislar[q.id]) delete K.yanlislar[q.id]; }
        else K.yanlislar[q.id] = { tarih: Date.now() };
      });
      kaydet();
      var h = (doldu ? "<p class=\"uyari-yazi\">Süre doldu; sınav kendiliğinden bitirildi. Boş kalan sorular yanlış sayıldı.</p>" : "") + bitince(cevap, gecen, sorular);
      h += "<h2 class=\"bolum-baslik\">Cevap anahtarı</h2>";
      sorular.forEach(function (q, k) {
        var ok = cevap[k] === q.d;
        h += "<details class=\"kart cevap " + (ok ? "ok" : "hata") + "\"><summary><b>" + (k + 1) + ".</b> " + (ok ? "Doğru" : cevap[k] == null ? "Boş" : "Yanlış (" + HARF[cevap[k]] + ")") + " · doğru: " + HARF[q.d] + "</summary>";
        h += "<div class=\"soru-metin\">" + window.mdHtml(q.s) + "</div><ol class=\"secenekler sabit\">" + q.c.map(function (c, j) {
          return "<li class=\"" + (j === q.d ? "dogru" : j === cevap[k] ? "yanlis" : "") + "\"><b>" + HARF[j] + ")</b> " + window.mdSatir(c) + "</li>";
        }).join("") + "</ol>" + (q.a ? window.mdHtml(q.a) : "") + (q.k ? "<p class=\"kucuk soluk\">Kaynak: " + kac(q.k) + "</p>" : "") + "</details>";
      });
      goster(h);
    }
    if (zamanlayici) { clearInterval(zamanlayici); zamanlayici = null; }
    ciz();
  }

  function puanla(sorular, cevap, kod) {
    var top = 0, d = 0;
    sorular.forEach(function (q, k) { if (!kod || q.kod === kod) { top++; if (cevap[k] === q.d) d++; } });
    return { dogru: d, toplam: top, puan: top ? Math.round(d / top * 100) : 0 };
  }

  function dersSonuTesti(kod) {
    var d = ders(kod), c = ICERIK.sonu[kod];
    if (!c || !sonuAcikMi(d)) { location.hash = "#/ders/" + kod; return; }
    var sorular = c.sorular.map(function (q, i) { return Object.assign({ id: kod + "-s-" + i, kod: kod }, q); });
    sinav(d.kisa + " · ders sonu testi", sorular, "#/ders/" + kod, function (cevap, gecen, cozulen) {
      var p = puanla(cozulen, cevap);
      K.sonu[kod] = (K.sonu[kod] || []).concat([{ puan: p.puan, dogru: p.dogru, toplam: p.toplam, tarih: Date.now() }]);
      kaydet();
      var gecti = p.puan >= P.dersSonuBaraj;
      return "<span class=\"etiket\">" + kac(d.kisa) + " · ders sonu testi</span><h1>" + p.puan + " puan</h1>" +
        "<p class=\"" + (gecti ? "ok" : "hata") + "\">" + p.dogru + " / " + p.toplam + " doğru · süre " + gecen + " · " +
        (gecti ? "Baraj geçildi (en az " + P.dersSonuBaraj + ")." : "Baraj " + P.dersSonuBaraj + "; bu dersi tekrar etmelisin.") + "</p>" +
        "<div class=\"dugmeler\"><a class=\"dugme\" href=\"#/ders/" + kod + "\">Derse dön</a><a class=\"dugme ikincil\" href=\"#/yanlislar\">Yanlış defteri</a></div>";
    });
  }

  // Önceki denemelerde çıkmış soru kimlikleri.
  function denemedeCikanlar() {
    var k = {};
    K.denemeler.forEach(function (x) { (x.ids || []).forEach(function (id) { k[id] = 1; }); });
    return k;
  }
  // Bir ders için deneme soruları: önce hiç çıkmamış deneme soruları, kalan yer
  // daha önce çıkmış deneme soruları ile günlük/ders sonu sorularından karışık doldurulur.
  function denemeSorulari(d, cikan) {
    var ozel = denemeHavuzu(d.kod);
    var yeni = karistir(ozel.filter(function (q) { return !cikan[q.id]; }));
    var kalan = karistir(ozel.filter(function (q) { return cikan[q.id]; }).concat(dersHavuzu(d.kod)));
    return yeni.concat(kalan).slice(0, P.dersSonuSoru);
  }
  function denemeSayfasi() {
    if (!denemeAcikMi()) { location.hash = "#/"; return; }
    var cikan = denemedeCikanlar();
    var hazir = P.dersler.filter(function (d) { return denemeHavuzu(d.kod).length || dersHavuzu(d.kod).length; });
    var h = "<a class=\"geri\" href=\"#/\">← Ana sayfa</a><h1>Genel deneme</h1>";
    if (!hazir.length) { goster(h + "<div class=\"kart\"><p>Henüz soru havuzu yok.</p></div>"); return; }
    var dk = P.denemeDakika;
    h += "<div class=\"kart\"><h3>Tam deneme</h3><p>" + hazir.length + " ders × " + P.dersSonuSoru + " soru · süre " + (dk * hazir.length) + " dakika (gerçek sınavda her ders " + dk + " dakikalık ayrı bir oturumdur).</p>";
    h += "<p class=\"kucuk\">Her ders ayrı puanlanır. Başarı için her dersten en az " + P.basari.konuMin + ", dört dersin ortalamasında en az " + P.basari.ortalamaMin + " gerekir; ortalama en yakın tam sayıya yuvarlanır. Yanlış cevap doğruyu götürmez, boş bırakma.</p>";
    if (hazir.length < P.dersler.length) h += "<p class=\"kucuk uyari-yazi\">Sorusu hazır olmayan dersler bu denemeye katılmaz.</p>";
    h += "<button class=\"dugme\" id=\"basla-tam\">Tam denemeyi başlat</button></div>";
    h += "<div class=\"kart\"><h3>Tek ders oturumu</h3><p class=\"kucuk\">Gerçek sınavdaki bir oturum gibi: " + P.dersSonuSoru + " soru, " + dk + " dakika. Düşük kalan dersi tekrar etmek için.</p><div class=\"dugmeler\">";
    hazir.forEach(function (d) { h += "<button class=\"dugme ikincil\" data-tek=\"" + d.kod + "\">" + d.kod + " · " + kac(d.kisa) + "</button>"; });
    h += "</div></div>";
    h += "<div class=\"kart\"><h3>Soru havuzu</h3><div class=\"tablo\"><table><thead><tr><th>Ders</th><th>Görmediğin deneme sorusu</th></tr></thead><tbody>";
    hazir.forEach(function (d) {
      var ozel = denemeHavuzu(d.kod), yeni = ozel.filter(function (q) { return !cikan[q.id]; }).length;
      h += "<tr><td>" + kac(d.kisa) + "</td><td>" + yeni + " / " + ozel.length + "</td></tr>";
    });
    h += "</tbody></table></div><p class=\"kucuk soluk\">Deneme soruları günlerde ve ders sonunda çıkmaz. Hepsi çıktıktan sonra denemeler, daha önce çözdüğün sorulardan karışık seçilir.</p></div>";
    var gecmis = K.denemeler.slice(-5).reverse();
    if (gecmis.length) {
      h += "<h2 class=\"bolum-baslik\">Son denemeler</h2><div class=\"tablo\"><table><thead><tr><th>Tarih</th><th>Tür</th><th>Puanlar</th><th>Sonuç</th></tr></thead><tbody>";
      gecmis.forEach(function (x) {
        var puanlar = Object.keys(x.sonuc || {}).map(function (k) { return k + ": " + x.sonuc[k]; }).join(" · ");
        h += "<tr><td>" + tarihYaz(x.tarih) + "</td><td>" + (x.tur === "tek" ? "tek ders" : "tam") + "</td><td>" + puanlar + "</td><td>" +
          (x.tur === "tek" ? "—" : "ort. " + x.ort + " · " + (x.basarili ? "başarılı" : "başarısız")) + "</td></tr>";
      });
      h += "</tbody></table></div>";
    }
    goster(h);
    $("#basla-tam").addEventListener("click", function () { denemeBaslat(hazir, "tam"); });
    kok.querySelectorAll("[data-tek]").forEach(function (b) {
      b.addEventListener("click", function () { denemeBaslat([ders(b.dataset.tek)], "tek"); });
    });
  }
  function denemeBaslat(dahil, tur) {
    var cikan = denemedeCikanlar(), secilen = [];
    dahil.forEach(function (d) { secilen = secilen.concat(denemeSorulari(d, cikan)); });
    var baslik = tur === "tek" ? dahil[0].kisa + " · deneme oturumu" : "Genel deneme";
    sinav(baslik, secilen, "#/deneme", function (cevap, gecen, cozulen) {
      var satirlar = "", topPuan = 0, hepsiBaraj = true, sonuc = {};
      dahil.forEach(function (d) {
        var p = puanla(cozulen, cevap, d.kod);
        sonuc[d.kod] = p.puan; topPuan += p.puan;
        var ok = p.puan >= P.basari.konuMin; if (!ok) hepsiBaraj = false;
        satirlar += "<tr><td>" + kac(d.kisa) + "</td><td>" + p.dogru + "/" + p.toplam + "</td><td class=\"" + (ok ? "ok" : "hata") + "\">" + p.puan + "</td></tr>";
      });
      var ort = Math.round(topPuan / dahil.length);
      var tam = tur !== "tek" && dahil.length === P.dersler.length;
      var basarili = tam && hepsiBaraj && ort >= P.basari.ortalamaMin;
      K.denemeler.push({ tarih: Date.now(), tur: tur, sonuc: sonuc, ort: ort, basarili: basarili, ids: cozulen.map(function (q) { return q.id; }) });
      kaydet();
      var mesaj;
      if (tur === "tek") mesaj = hepsiBaraj ? "Bu dersten " + P.basari.konuMin + " barajını geçtin. Genel başarı için dört dersin ortalaması en az " + P.basari.ortalamaMin + " olmalı." : "Bu ders için " + P.basari.konuMin + " barajı geçilemedi.";
      else if (!tam) mesaj = "Bu deneme tüm dersleri içermediği için başarı değerlendirmesi yapılmadı.";
      else mesaj = basarili ? "Gerçek sınav ölçütüne göre BAŞARILI." : "Ölçüt: her dersten en az " + P.basari.konuMin + " ve ortalama en az " + P.basari.ortalamaMin + ". Henüz sağlanmadı.";
      return "<span class=\"etiket\">" + kac(baslik) + " · süre " + gecen + "</span><h1>" + (tur === "tek" ? sonuc[dahil[0].kod] + " puan" : "Ortalama " + ort) + "</h1>" +
        "<p class=\"" + ((tur === "tek" ? hepsiBaraj : basarili) ? "ok" : "hata") + "\">" + mesaj + "</p>" +
        "<div class=\"tablo\"><table><thead><tr><th>Ders</th><th>Doğru</th><th>Puan</th></tr></thead><tbody>" + satirlar + "</tbody></table></div>" +
        "<div class=\"dugmeler\"><a class=\"dugme\" href=\"#/deneme\">Deneme sayfası</a><a class=\"dugme ikincil\" href=\"#/yanlislar\">Yanlış defteri</a></div>";
    }, P.denemeDakika * 60 * dahil.length);
  }

  function ayarlarSayfasi() {
    var h = "<a class=\"geri\" href=\"#/\">← Ana sayfa</a><h1>Ayarlar</h1>";
    h += "<div class=\"kart\"><label class=\"anahtar\"><input type=\"checkbox\" id=\"onizleme\"" + (K.onizleme ? " checked" : "") + "> Önizleme modu (tüm günleri, testleri ve denemeyi kilitsiz aç)</label></div>";
    h += "<div class=\"kart\"><h3>İlerleme yedeği</h3><p class=\"kucuk\">İlerlemen bu tarayıcıda saklanır. Tarayıcı verilerini silersen kaybolur; ara sıra yedek al.</p>";
    h += "<div class=\"dugmeler\"><button class=\"dugme\" id=\"disa\">Yedeği indir</button><label class=\"dugme ikincil\">Yedekten yükle<input type=\"file\" id=\"ice\" accept=\".json\" hidden></label>";
    h += "</div></div>";
    h += "<div class=\"kart\"><h3>Eğitimi başa sar</h3><p class=\"kucuk\">Tüm derslerin günleri, ders sonu testleri, genel denemeler ve yanlış defteri silinir; eğitim en baştan başlar. Önce yedek almanı öneririm.</p>";
    h += "<button class=\"dugme tehlike\" id=\"sifirla\">Eğitimi başa sar</button></div>";
    h += "<p class=\"alt-not\">Program sürümü " + P.surum + " · içerik: SPL resmi çalışma notları (30.06.2026) temel alınarak hazırlanmıştır.</p>";
    goster(h);
    $("#onizleme").addEventListener("change", function (e) { K.onizleme = e.target.checked; kaydet(); });
    $("#disa").addEventListener("click", function () {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(K, null, 2)], { type: "application/json" }));
      a.download = "spl-ilerleme-" + bugun() + ".json"; a.click();
    });
    $("#ice").addEventListener("change", function (e) {
      var f = e.target.files[0]; if (!f) return;
      f.text().then(function (t) { try { K = Object.assign(bosKayit(), JSON.parse(t)); kaydet(); alert("Yedek yüklendi."); location.hash = "#/"; } catch (err) { alert("Dosya okunamadı."); } });
    });
    $("#sifirla").addEventListener("click", function () {
      if (!confirm("Tüm ilerleme silinecek ve eğitim en baştan başlayacak. Bu geri alınamaz. Onaylıyor musun?")) return;
      var onizleme = K.onizleme;
      K = bosKayit(); K.onizleme = onizleme; kaydet(); location.hash = "#/";
    });
  }

  // ---------- Yönlendirme ----------
  function yonlendir() {
    var p = (location.hash.replace(/^#\/?/, "") || "").split("/");
    switch (p[0]) {
      case "ders": return dersSayfasi(p[1]);
      case "gun": return gunSayfasi(p[1], p[2]);
      case "test": return miniTest(p[1], p[2]);
      case "sonu": return dersSonuTesti(p[1]);
      case "deneme": return denemeSayfasi();
      case "yanlislar": return yanlislarSayfasi();
      case "ayarlar": return ayarlarSayfasi();
      default: return anaSayfa();
    }
  }

  // ---------- İçerik dosyalarını yükle ----------
  function basla() {
    kok = document.getElementById("uygulama");
    yukle();
    var dosyalar = [];
    P.dersler.forEach(function (d) {
      d.gunler.forEach(function (g) { if (g.hazir) dosyalar.push("icerik/" + d.kod + "/gun" + String(g.no).padStart(2, "0") + ".js"); });
      if (d.dersSonu) dosyalar.push("icerik/" + d.kod + "/ders-sonu.js");
      if (d.deneme) dosyalar.push("icerik/" + d.kod + "/deneme.js");
    });
    var kalan = dosyalar.length;
    function bitti() { if (--kalan <= 0) { window.addEventListener("hashchange", yonlendir); yonlendir(); } }
    // Bulunulan adrese giden bağlantı (ör. deneme sonucundaki "Deneme sayfası") hashchange üretmez; sayfayı yeniden çiz.
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href^='#']");
      if (a && a.getAttribute("href") === location.hash) { e.preventDefault(); yonlendir(); }
    });
    if (!kalan) { kalan = 1; bitti(); return; }
    dosyalar.forEach(function (f) {
      var s = document.createElement("script");
      s.src = f; s.onload = bitti; s.onerror = function () { console.warn("Yüklenemedi:", f); bitti(); };
      document.body.appendChild(s);
    });
  }
  basla();
})();
