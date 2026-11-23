// SPL Düzey 3 çalışma programı: dersler, günlük okuma planı ve içerik dosyaları.
// "hazir: true" olan günlerin içeriği icerik/<kod>/gunXX.js dosyasındadır.
// Sayfa numaraları resmi çalışma notunun basılı sayfa numaralarıdır.
// Düzey 3'ün 12 dersinden 9'u Düzey 2 ile ortaktır. Bunlar Düzey 2'nin programından alınır
// (Düzey 2 de 1003, 1005, 1012'yi Düzey 1'den alır); içerikleri ve PDF'leri o düzeylerin
// klasöründedir ("kok"). Bu dosyadan önce Düzey 1 ve Düzey 2 program.js yüklenmelidir.
(function () {
  var D2 = window.SPL_PROGRAM;
  var D2_KOK = "../../duzey-2/uygulama/";
  function ortak(kod) {
    var d = D2.dersler.filter(function (x) { return x.kod === kod; })[0];
    return Object.assign({}, d, {
      kok: d.kok || D2_KOK,
      ortak: d.kok ? "Düzey 1 ve 2 ile ortak" : "Düzey 2 ile ortak"
    });
  }
  function yakinda(kod, ad, kisa) { return { kod: kod, ad: ad, kisa: kisa, gunler: [] }; }

  window.SPL_PROGRAM = {
    surum: "2026-11-23",
    duzey: 3,
    anahtar: "spl-ilerleme-duzey3-v1", // Düzey 1 ve 2'den ayrı ilerleme kaydı
    basari: { konuMin: 50, ortalamaMin: 60 },
    dersSonuBaraj: 75,
    dersSonuSoru: 25,
    denemeDakika: 45,
    dersler: [
      {
        kod: "1008",
        ad: "Genel Ekonomi",
        kisa: "Genel Ekonomi",
        pdf: "../kaynaklar/calisma-notlari/1008_Genel_Ekonomi.pdf",
        pdfResmi: "https://spl.com.tr/wp-content/uploads/2026/08/1008_MKT_30062026_202608101106.pdf", // internetten açılınca
        pdfOfset: 7, // PDF sayfası = basılı sayfa + 7
        gunler: [
          { no: 1,  bolum: "Temel Kavramlar", baslik: "Ekonominin temelleri (1): kıtlık, ekonomik sistemler ve fayda", sayfa: [1, 6], hazir: true },
          { no: 2,  bolum: "Temel Kavramlar", baslik: "Ekonominin temelleri (2): mal türleri, değer, üretim faktörleri ve üretim olanakları", sayfa: [7, 12], hazir: true },
          { no: 3,  bolum: "Temel Kavramlar", baslik: "Fiyat mekanizması: talep, arz ve piyasa dengesi", sayfa: [13, 21], hazir: true },
          { no: 4,  bolum: "Temel Kavramlar", baslik: "Esneklik, üretim ve maliyetler", sayfa: [22, 30], hazir: true },
          { no: 5,  bolum: "Temel Kavramlar", baslik: "Piyasalar: ölçek ekonomileri, tam rekabet, monopol ve oligopol", sayfa: [31, 39], hazir: true },
          { no: 6,  bolum: "Para Politikaları", baslik: "Paranın tanımı ve çeşitleri; para arzı yaklaşımları", sayfa: [47, 52], hazir: true },
          { no: 7,  bolum: "Para Politikaları", baslik: "Para piyasası (2) ve finansal piyasalar", sayfa: [53, 60], hazir: true },
          { no: 8,  bolum: "Para Politikaları", baslik: "Merkez bankaları", sayfa: [61, 67], hazir: true },
          { no: 9,  bolum: "Para Politikaları", baslik: "Para politikası araçları ve amaçları", sayfa: [68, 72], hazir: true },
          { no: 10, bolum: "Para Politikaları", baslik: "Para politikası çeşitleri: daraltıcı ve genişletici", sayfa: [73, 76], hazir: true },
          { no: 11, bolum: "Maliye Politikaları", baslik: "Maliye politikasının kapsamı: kamu giderleri ve gelirleri", sayfa: [81, 86], hazir: true },
          { no: 12, bolum: "Maliye Politikaları", baslik: "Bütçe ve maliye politikasının araçları ve amaçları", sayfa: [87, 92], hazir: true },
          { no: 13, bolum: "Maliye Politikaları", baslik: "Maliye politikası çarpanı ve çeşitleri", sayfa: [93, 97], hazir: true },
          { no: 14, bolum: "Maliye Politikaları", baslik: "Mal ve para piyasalarında denge; ekonomik görüşler", sayfa: [98, 104], hazir: true },
          { no: 15, bolum: "Makroekonomik Göstergeler", baslik: "GSYH, milli gelir ve büyüme göstergeleri", sayfa: [108, 114], hazir: true },
          { no: 16, bolum: "Makroekonomik Göstergeler", baslik: "İstihdam ve işsizlik göstergeleri", sayfa: [115, 118], hazir: true },
          { no: 17, bolum: "Makroekonomik Göstergeler", baslik: "Fiyat istikrarı, enflasyon ve enflasyon göstergeleri", sayfa: [119, 123], hazir: true },
          { no: 18, bolum: "Makroekonomik Göstergeler", baslik: "Fiyat ve finans göstergeleri, TCMB verileri, güven endeksleri", sayfa: [124, 131], hazir: true },
          { no: 19, bolum: "Makroekonomik Göstergeler", baslik: "Konjonktürel dalgalanmalar ve nedenleri", sayfa: [132, 136], hazir: true },
          { no: 20, bolum: "Makroekonomik Göstergeler", baslik: "Ekonomik büyüme ve potansiyel büyümenin ölçümü", sayfa: [137, 141], hazir: true },
          { no: 21, bolum: "Makroekonomik Göstergeler", baslik: "Büyümenin belirleyicileri, Solow modeli, orta gelir tuzağı", sayfa: [141, 149], hazir: true },
          { no: 22, bolum: "Dış Ticaret ve Uluslararası Ekonomi", baslik: "Dış ticaret teorileri ve ödemeler dengesi", sayfa: [154, 159], hazir: true },
          { no: 23, bolum: "Dış Ticaret ve Uluslararası Ekonomi", baslik: "Dış ticaret uygulamaları, döviz piyasası ve çapraz kur", sayfa: [159, 166], hazir: true },
          { no: 24, bolum: "Dış Ticaret ve Uluslararası Ekonomi", baslik: "Vadeli döviz piyasası ve uluslararası parite koşulları", sayfa: [167, 173], hazir: true },
          { no: 25, bolum: "Dış Ticaret ve Uluslararası Ekonomi", baslik: "Döviz kuru rejimleri, kur modelleri ve carry trade", sayfa: [174, 180], hazir: true },
          { no: 26, bolum: "Dış Ticaret ve Uluslararası Ekonomi", baslik: "Mundell-Fleming modeli", sayfa: [181, 187], hazir: true }
        ],
        dersSonu: true,
        deneme: true
      },
      yakinda("1009", "Temel Finans Matematiği ve Değerleme Yöntemleri", "Finans Matematiği"),
      ortak("1002"),
      ortak("1004"),
      ortak("1006"),
      ortak("1007"),
      ortak("1010"),
      ortak("1016"),
      ortak("1003"),
      ortak("1005"),
      ortak("1012")
      // Kurumlarda ve Sermaye Piyasasında Vergilendirme: ders kodu belirlenince eklenecek.
    ]
  };
})();
