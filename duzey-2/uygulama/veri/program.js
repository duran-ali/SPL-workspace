// SPL Düzey 2 çalışma programı: dersler, günlük okuma planı ve içerik dosyaları.
// "hazir: true" olan günlerin içeriği icerik/<kod>/gunXX.js dosyasındadır.
// Sayfa numaraları resmi çalışma notunun basılı sayfa numaralarıdır.
// Düzey 1 ile ortak dersler (1003, 1005, 1012) Düzey 1'in programından alınır;
// içerikleri ve PDF'leri Düzey 1 klasöründedir ("kok").
(function () {
  var D1 = window.SPL_PROGRAM;
  var ORTAK_KOK = "../../duzey-1/uygulama/";
  function ortak(kod) {
    var d = D1.dersler.filter(function (x) { return x.kod === kod; })[0];
    return Object.assign({}, d, { kok: ORTAK_KOK, ortak: "Düzey 1 ile ortak" });
  }
  function yakinda(kod, ad, kisa) { return { kod: kod, ad: ad, kisa: kisa, gunler: [] }; }

  window.SPL_PROGRAM = {
    surum: "2026-11-21",
    duzey: 2,
    anahtar: "spl-ilerleme-duzey2-v1", // Düzey 1'den ayrı ilerleme kaydı
    basari: { konuMin: 50, ortalamaMin: 60 },
    dersSonuBaraj: 75,
    dersSonuSoru: 25,
    denemeDakika: 45,
    dersler: [
      {
        kod: "1002",
        ad: "Geniş Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları",
        kisa: "Geniş Kapsamlı Mevzuat",
        pdf: "../kaynaklar/calisma-notlari/1002_Genis_Kapsamli_SP_Mevzuati_ve_Meslek_Kurallari.pdf",
        pdfResmi: "https://spl.com.tr/wp-content/uploads/2026/07/1002_MKT_30062026_202607141027.pdf", // internetten açılınca
        pdfOfset: 12, // PDF sayfası = basılı sayfa + 12
        gunler: [
          { no: 1,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Sermaye piyasası, düzenlemeler, SPKn'nin amacı ve uygulama alanı", sayfa: [1, 8], hazir: true },
          { no: 2,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Sermaye piyasası araçları, kaydi sistem ve teminatlar", sayfa: [8, 13], hazir: true },
          { no: 3,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "İhraç ve halka arz: izahname, ihraç belgesi, satış", sayfa: [14, 21], hazir: true },
          { no: 4,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "İhraççılar ve halka açık ortaklıklar", sayfa: [22, 31], hazir: true },
          { no: 5,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Sermaye piyasası faaliyetleri ve kurumlarına giriş", sayfa: [31, 40], hazir: true },
          { no: 6,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Sermaye piyasası kurumları ve Yatırımcı Tazmin Merkezi", sayfa: [40, 50], hazir: true },
          { no: 7,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Denetim ve tedbirler", sayfa: [51, 57], hazir: true },
          { no: 8,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Yaptırımlar: idari para cezaları ve suçlar", sayfa: [57, 64], hazir: true },
          { no: 9,  bolum: "II-15.1 Özel Durumlar Tebliği", baslik: "İçsel bilgiler, sürekli bilgiler ve açıklama esasları", sayfa: [65, 77], hazir: true },
          { no: 10, bolum: "II-17.1 Kurumsal Yönetim Tebliği", baslik: "Kurumsal yönetim esasları ve TTK: pay sahipleri, şeffaflık", sayfa: [78, 86], hazir: true },
          { no: 11, bolum: "II-17.1 Kurumsal Yönetim Tebliği", baslik: "TTK: menfaat sahipleri ve yönetim kurulu; tebliğe giriş", sayfa: [87, 96], hazir: true },
          { no: 12, bolum: "II-17.1 Kurumsal Yönetim Tebliği", baslik: "Kurumsal Yönetim Tebliği: gruplar, bağımsız üyeler, ilişkili taraf işlemleri", sayfa: [96, 104], hazir: true },
          { no: 13, bolum: "II-17.1 Kurumsal Yönetim Tebliği", baslik: "Kurumsal Yönetim İlkeleri", sayfa: [103, 114], hazir: true },
          { no: 14, bolum: "III-48.1 GYO Tebliği", baslik: "GYO: tanım, kuruluş ve dönüşüm, kurucular, pay satışı", sayfa: [115, 121], hazir: true },
          { no: 15, bolum: "III-48.1 GYO Tebliği", baslik: "GYO: paylar, yönetim, yatırım faaliyetleri ve portföy sınırlamaları", sayfa: [122, 129], hazir: true },
          { no: 16, bolum: "III-48.1 GYO Tebliği", baslik: "GYO: portföy yönetimi, değerleme, kamuyu aydınlatma, statüden çıkma", sayfa: [130, 139], hazir: true },
          { no: 17, bolum: "III-48.5 Menkul Kıymet Yatırım Ortaklıkları Tebliği", baslik: "Sabit sermayeli MKYO: tanım, kuruluş, paylar, yönetim", sayfa: [140, 146], hazir: true },
          { no: 18, bolum: "III-48.5 Menkul Kıymet Yatırım Ortaklıkları Tebliği", baslik: "Sabit sermayeli MKYO: iç kontrol, risk ve portföy sınırlamaları", sayfa: [146, 155], hazir: true },
          { no: 19, bolum: "III-48.5 Menkul Kıymet Yatırım Ortaklıkları Tebliği", baslik: "Değişken sermayeli yatırım ortaklığı: tanım, kuruluş, paylar", sayfa: [155, 162], hazir: true },
          { no: 20, bolum: "III-48.5 Menkul Kıymet Yatırım Ortaklıkları Tebliği", baslik: "Değişken sermayeli yatırım ortaklığı: sınırlamalar ve sona erme", sayfa: [162, 169], hazir: true },
          { no: 21, bolum: "III-55.1 Portföy Yönetim Şirketleri Tebliği", baslik: "PYŞ: tanım, kuruluş, faaliyet izni, faaliyetleri sınırlı PYŞ", sayfa: [170, 177], hazir: true },
          { no: 22, bolum: "III-55.1 Portföy Yönetim Şirketleri Tebliği", baslik: "PYŞ: iç kontrol, risk yönetimi, örgütlenme ve dışarıdan hizmet", sayfa: [177, 185], hazir: true },
          { no: 23, bolum: "III-55.1 Portföy Yönetim Şirketleri Tebliği", baslik: "PYŞ: personel, ilkeler, bildirimler ve sermaye yeterliliği", sayfa: [185, 191], hazir: true },
          { no: 24, bolum: "III-55.1 Portföy Yönetim Şirketleri Tebliği", baslik: "PYŞ: faaliyet esasları ve teminatlar", sayfa: [191, 197], hazir: true },
          { no: 25, bolum: "III-52.1 Yatırım Fonları Tebliği", baslik: "Yatırım fonu, şemsiye fon, unvan, içtüzük ve katılma payı ihracı", sayfa: [198, 207], hazir: true },
          { no: 26, bolum: "III-52.1 Yatırım Fonları Tebliği", baslik: "Katılma payları ve fon portföyü sınırlamaları", sayfa: [207, 213], hazir: true },
          { no: 27, bolum: "III-52.1 Yatırım Fonları Tebliği", baslik: "Özel fon türleri, sona erme, bilgi verme ve TEFAS", sayfa: [213, 222], hazir: true },
          { no: 28, bolum: "III-52.2 Borsa Yatırım Fonları Tebliği", baslik: "Borsa yatırım fonları", sayfa: [223, 237], hazir: true },
          { no: 29, bolum: "III-52.3 Gayrimenkul Yatırım Fonları Tebliği", baslik: "GYF: tanım, organizasyon, kuruluş ve katılma payları", sayfa: [238, 246], hazir: true },
          { no: 30, bolum: "III-52.3 Gayrimenkul Yatırım Fonları Tebliği", baslik: "GYF: yatırımlar, proje fonları, değerleme ve diğer esaslar", sayfa: [246, 254], hazir: true },
          { no: 31, bolum: "III-52.4 Girişim Sermayesi Yatırım Fonları Tebliği", baslik: "GSYF: genel esaslar, kuruluş ve katılma payları", sayfa: [255, 263], hazir: true },
          { no: 32, bolum: "III-52.4 Girişim Sermayesi Yatırım Fonları Tebliği", baslik: "GSYF: girişim sermayesi yatırımları ve diğer esaslar", sayfa: [263, 270], hazir: true },
          { no: 33, bolum: "III-48.3 Girişim Sermayesi Yatırım Ortaklıkları Tebliği", baslik: "GSYO: kuruluş, lider sermayedar, paylar ve yönetim", sayfa: [271, 280], hazir: true },
          { no: 34, bolum: "III-48.3 Girişim Sermayesi Yatırım Ortaklıkları Tebliği", baslik: "GSYO: faaliyetler, portföy sınırlamaları ve yükümlülükler", sayfa: [280, 286], hazir: true },
          { no: 35, bolum: "TSPB Meslek Kuralları ve Etik İlkeler", baslik: "TSPB meslek kuralları ve etik ilkeler", sayfa: [287, 298], hazir: true },
          { no: 36, bolum: "Sermaye Piyasası Çalışanları Davranış Kuralları", baslik: "Davranış kuralları: dürüst işleyiş, müşteriye ve işverene karşı görevler", sayfa: [299, 312], hazir: true },
          { no: 37, bolum: "Davranış Kuralları ve TSPB Disiplin Yönetmeliği", baslik: "Sunum, çıkar çatışması, mesleğe karşı sorumluluk ve disiplin", sayfa: [313, 326], hazir: true }
        ],
        dersSonu: true,
        deneme: true
      },
      yakinda("1004", "Sermaye Piyasası Araçları 2", "SP Araçları 2"),
      yakinda("1006", "Finansal Piyasalar", "Finansal Piyasalar"),
      yakinda("1007", "Finansal Yönetim ve Mali Analiz", "Finansal Yönetim"),
      yakinda("1010", "Ticaret Hukuku", "Ticaret Hukuku"),
      yakinda("1011", "Muhasebe ve Finansal Raporlama", "Muhasebe"),
      ortak("1003"),
      ortak("1005"),
      ortak("1012")
    ]
  };
})();
