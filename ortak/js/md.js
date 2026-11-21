// Küçük bir Markdown dönüştürücü: başlık, paragraf, liste, tablo, alıntı (bilgi kutusu),
// kalın/italik ve yatay çizgi. Dış kütüphane gerektirmez, internetsiz çalışır.
(function () {
  function kacir(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function satirIci(s) {
    return kacir(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }
  function tabloHucreleri(satir) {
    return satir.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(function (h) { return h.trim(); });
  }
  function md(metin) {
    var satirlar = metin.replace(/\r/g, "").split("\n");
    var html = [], i = 0;
    while (i < satirlar.length) {
      var s = satirlar[i];
      if (!s.trim()) { i++; continue; }
      var b = s.match(/^(#{1,4})\s+(.*)$/);
      if (b) { var n = b[1].length + 1; html.push("<h" + n + ">" + satirIci(b[2]) + "</h" + n + ">"); i++; continue; }
      if (/^---+\s*$/.test(s)) { html.push("<hr>"); i++; continue; }
      if (/^\s*\|/.test(s)) {
        var tablo = [];
        while (i < satirlar.length && /^\s*\|/.test(satirlar[i])) { tablo.push(satirlar[i]); i++; }
        var bas = tabloHucreleri(tablo[0]);
        var govde = tablo.slice(1).filter(function (t) { return !/^\s*\|?\s*:?-{2,}/.test(t); });
        var t = "<div class=\"tablo\"><table><thead><tr>" + bas.map(function (h) { return "<th>" + satirIci(h) + "</th>"; }).join("") + "</tr></thead><tbody>";
        govde.forEach(function (g) { t += "<tr>" + tabloHucreleri(g).map(function (h) { return "<td>" + satirIci(h) + "</td>"; }).join("") + "</tr>"; });
        html.push(t + "</tbody></table></div>");
        continue;
      }
      if (/^>\s?/.test(s)) {
        var al = [];
        while (i < satirlar.length && /^>\s?/.test(satirlar[i])) { al.push(satirlar[i].replace(/^>\s?/, "")); i++; }
        var tur = "bilgi";
        var ilk = al[0] || "";
        var m = ilk.match(/^\[!(\w+)\]\s*(.*)$/);
        if (m) { tur = m[1].toLowerCase(); al[0] = m[2]; }
        html.push("<aside class=\"kutu kutu-" + tur + "\">" + md(al.join("\n")) + "</aside>");
        continue;
      }
      if (/^\s*([-*]|\d+[.)])\s+/.test(s)) {
        // Liste: boş satırla ayrılmış maddeler ve girintili devam satırları aynı listede kalır;
        // numaralı listeler ilk maddenin numarasından başlar.
        var sirali = /^\s*\d+[.)]\s+/.test(s);
        var baslangic = sirali ? parseInt(s.match(/\d+/)[0], 10) : 1;
        var ogeler = [];
        while (i < satirlar.length) {
          var sat = satirlar[i];
          var girinti = sat.match(/^\s*/)[0].length;
          var madde = sat.match(/^\s*([-*]|\d+[.)])\s+(.*)$/);
          if (!sat.trim()) {
            var j = i + 1;
            while (j < satirlar.length && !satirlar[j].trim()) j++;
            if (j >= satirlar.length) break;
            var sonraki = satirlar[j], sg = sonraki.match(/^\s*/)[0].length;
            var ayniTur = sirali ? /^\d+[.)]\s+/.test(sonraki) : /^[-*]\s+/.test(sonraki);
            if ((sg >= 2 && ogeler.length) || ayniTur) { i = j; continue; }
            break;
          }
          if (madde && girinti < 2) { ogeler.push({ m: madde[2], alt: [] }); i++; continue; }
          if (girinti >= 2 && ogeler.length) {
            var tip = madde ? (/\d/.test(madde[1]) ? "ol" : "ul") : "p";
            ogeler[ogeler.length - 1].alt.push({ tip: tip, t: madde ? madde[2] : sat.trim() });
            i++; continue;
          }
          break;
        }
        var etiket = sirali ? "ol" : "ul";
        html.push("<" + etiket + (sirali && baslangic !== 1 ? " start=\"" + baslangic + "\"" : "") + ">" + ogeler.map(function (o) {
          var alt = "", k = 0;
          while (k < o.alt.length) {
            var tp = o.alt[k].tip;
            if (tp === "p") { alt += "<p>" + satirIci(o.alt[k].t) + "</p>"; k++; continue; }
            var grup = [];
            while (k < o.alt.length && o.alt[k].tip === tp) { grup.push("<li>" + satirIci(o.alt[k].t) + "</li>"); k++; }
            alt += "<" + tp + ">" + grup.join("") + "</" + tp + ">";
          }
          return "<li>" + satirIci(o.m) + alt + "</li>";
        }).join("") + "</" + etiket + ">");
        continue;
      }
      var p = [];
      while (i < satirlar.length && satirlar[i].trim() && !/^(#{1,4}\s|>|\s*\||\s*([-*]|\d+[.)])\s+|---+\s*$)/.test(satirlar[i])) { p.push(satirlar[i]); i++; }
      html.push("<p>" + p.map(satirIci).join("<br>") + "</p>");
    }
    return html.join("\n");
  }
  window.mdHtml = md;
  window.mdSatir = satirIci;
})();
