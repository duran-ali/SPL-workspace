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
      {
        kod: "1004",
        ad: "Sermaye Piyasası Araçları 2",
        kisa: "SP Araçları 2",
        pdf: "../kaynaklar/calisma-notlari/1004_Sermaye_Piyasasi_Araclari_2.pdf",
        pdfResmi: "https://spl.com.tr/wp-content/uploads/2026/07/1004_MKT_30062026_202607141543.pdf", // internetten açılınca
        pdfOfset: 14, // PDF sayfası = basılı sayfa + 14
        gunler: [
          { no: 1,  bolum: "II-5.1 İzahname ve İhraç Belgesi Tebliği", baslik: "Kapsam, izahname, muafiyetler ve izahname türleri", sayfa: [1, 6], hazir: true },
          { no: 2,  bolum: "II-5.1 İzahname ve İhraç Belgesi Tebliği", baslik: "İzahname hazırlama esasları ve izahnamenin içeriği", sayfa: [6, 12], hazir: true },
          { no: 3,  bolum: "II-5.1 İzahname ve İhraç Belgesi Tebliği", baslik: "Değişiklikler, geçerlilik, tescil ve ilan, ihraç belgesi", sayfa: [12, 16], hazir: true },
          { no: 4,  bolum: "II-5.1 İzahname ve İhraç Belgesi Tebliği", baslik: "Onay süreci, kamuyu aydınlatma belgelerinden sorumluluk, reklamlar", sayfa: [16, 19], hazir: true },
          { no: 5,  bolum: "II-5.2 Sermaye Piyasası Araçlarının Satışı Tebliği", baslik: "Kapsam, satış şekilleri ve satış yöntemleri", sayfa: [19, 25], hazir: true },
          { no: 6,  bolum: "II-5.2 Sermaye Piyasası Araçlarının Satışı Tebliği", baslik: "Satış fiyatı, satış süreleri ve tahsisat esasları", sayfa: [26, 30], hazir: true },
          { no: 7,  bolum: "II-5.2 Sermaye Piyasası Araçlarının Satışı Tebliği", baslik: "Dağıtım ilkeleri, teslim ve satış sonuçları", sayfa: [30, 33], hazir: true },
          { no: 8,  bolum: "II-5.2 Sermaye Piyasası Araçlarının Satışı Tebliği", baslik: "İlk halka arz ilke kararı, yetkili kuruluşlar ve teşvikler", sayfa: [33, 37], hazir: true },
          { no: 9,  bolum: "Varlık Finansmanı: Kavramsal Çerçeve", baslik: "Konut finansmanı, ipotek ve menkul kıymetleştirme", sayfa: [38, 44], hazir: true },
          { no: 10, bolum: "III-58.1 Varlığa veya İpoteğe Dayalı Menkul Kıymetler Tebliği", baslik: "Fon, içtüzük, kurucular ve VDMK ihracı", sayfa: [44, 49], hazir: true },
          { no: 11, bolum: "III-58.1 Varlığa veya İpoteğe Dayalı Menkul Kıymetler Tebliği", baslik: "Fonun işleyişi: fon kurulu, iç kontrol, hizmet sağlayıcı, risk tutma", sayfa: [49, 54], hazir: true },
          { no: 12, bolum: "III-58.1 Varlığa veya İpoteğe Dayalı Menkul Kıymetler Tebliği", baslik: "Fon portföyü, varlıkların nitelikleri ve fonun sona ermesi", sayfa: [54, 59], hazir: true },
          { no: 13, bolum: "III-59.1 Teminatlı Menkul Kıymetler Tebliği", baslik: "TMK ihracı, tedavül limiti ve teminat varlıklar", sayfa: [59, 65], hazir: true },
          { no: 14, bolum: "III-59.1 Teminatlı Menkul Kıymetler Tebliği", baslik: "Teminat uyum ilkeleri, stres testi, teminat sorumlusu ve tedbirler", sayfa: [65, 73], hazir: true },
          { no: 15, bolum: "Faizsiz Finans Araçları: Kavramsal Çerçeve", baslik: "Faizsiz finans ilkeleri ve sukuk", sayfa: [74, 80], hazir: true },
          { no: 16, bolum: "III-61.1 Kira Sertifikaları Tebliği", baslik: "Tanımlar, sahipliğe, yönetime ve alım-satıma dayalı kira sertifikaları", sayfa: [80, 85], hazir: true },
          { no: 17, bolum: "III-61.1 Kira Sertifikaları Tebliği", baslik: "Ortaklığa ve eser sözleşmesine dayalı kira sertifikaları, genel esaslar", sayfa: [85, 89], hazir: true },
          { no: 18, bolum: "III-61.1 Kira Sertifikaları Tebliği", baslik: "Başvuru, ihraç, değer tespiti ve varlık kiralama şirketleri", sayfa: [89, 93], hazir: true },
          { no: 19, bolum: "Gayrimenkul Sertifikaları: Kavramsal Çerçeve", baslik: "Gayrimenkule dayalı araçlar ve gayrimenkul sertifikalarının faydaları", sayfa: [94, 99], hazir: true },
          { no: 20, bolum: "VII-128.2 Gayrimenkul Sertifikaları Tebliği", baslik: "Tanımlar, ihraç esasları, arsa sahibi ve ihraççı", sayfa: [99, 104], hazir: true },
          { no: 21, bolum: "VII-128.2 Gayrimenkul Sertifikaları Tebliği", baslik: "Raporlar, edimlerin kullanılması, projenin gecikmesi ve gerçekleşmemesi", sayfa: [104, 108], hazir: true },
          { no: 22, bolum: "VII-128.2 Gayrimenkul Sertifikaları Tebliği", baslik: "Fonların kullanımı, kentsel dönüşüm projeleri ve kamuyu aydınlatma", sayfa: [108, 114], hazir: true },
          { no: 23, bolum: "Varantlar ve Sertifikalar: Kavramsal Çerçeve", baslik: "Varant kavramı ve temel tanımlar", sayfa: [115, 122], hazir: true },
          { no: 24, bolum: "Varantlar ve Sertifikalar: Kavramsal Çerçeve", baslik: "Varant ve opsiyon, varant fiyatını etkileyen faktörler, sertifikalar", sayfa: [122, 128], hazir: true },
          { no: 25, bolum: "VII-128.3 Varantlar ve Yatırım Kuruluşu Sertifikaları Tebliği", baslik: "Yatırım kuruluşu varant ve sertifikalarının ihracı", sayfa: [128, 134], hazir: true },
          { no: 26, bolum: "VII-128.3 Varantlar ve Yatırım Kuruluşu Sertifikaları Tebliği", baslik: "Piyasa yapıcılık, nakavt ve ortaklık varantı ihracı", sayfa: [134, 138], hazir: true },
          { no: 27, bolum: "VII-128.3 Varantlar ve Yatırım Kuruluşu Sertifikaları Tebliği", baslik: "Ortaklık varantında uzlaşı yöntemleri, kullanım hakkı ve kamuyu aydınlatma", sayfa: [138, 144], hazir: true },
          { no: 28, bolum: "VII-128.4 Yabancı Sermaye Piyasası Araçları ve Depo Sertifikaları", baslik: "Depo sertifikaları ve tebliğin kapsamı", sayfa: [145, 152], hazir: true },
          { no: 29, bolum: "VII-128.4 Yabancı Sermaye Piyasası Araçları ve Depo Sertifikaları", baslik: "Yabancı sermaye piyasası araçları: halka arz, temsilci ve kamuyu aydınlatma", sayfa: [152, 159], hazir: true },
          { no: 30, bolum: "VII-128.4 Yabancı Sermaye Piyasası Araçları ve Depo Sertifikaları", baslik: "Yabancı yatırım fonları", sayfa: [159, 164], hazir: true },
          { no: 31, bolum: "III-61/B.1 Projeye Dayalı Menkul Kıymetler Tebliği", baslik: "PDMK: fon, ihraç ve fonun işleyişi", sayfa: [165, 173], hazir: true },
          { no: 32, bolum: "III-61/B.1 Projeye Dayalı Menkul Kıymetler Tebliği", baslik: "PDMK: fon portföyü, projenin gecikmesi ve fonun sona ermesi", sayfa: [174, 181], hazir: true },
          { no: 33, bolum: "II-31/B.1 Sermaye Piyasası Araçlarının Teminatlı İhracı", baslik: "Teminatlı ihraç, teminata konu varlıklar ve teminat yönetim sözleşmesi", sayfa: [182, 188], hazir: true },
          { no: 34, bolum: "II-31/B.1 Sermaye Piyasası Araçlarının Teminatlı İhracı", baslik: "Temerrüt, tarafların yükümlülükleri, teminat yöneticisi ve kamunun aydınlatılması", sayfa: [188, 194], hazir: true }
        ],
        dersSonu: true,
        deneme: true
      },
      {
        kod: "1006",
        ad: "Finansal Piyasalar",
        kisa: "Finansal Piyasalar",
        pdf: "../kaynaklar/calisma-notlari/1006_Finansal_Piyasalar.pdf",
        pdfResmi: "https://spl.com.tr/wp-content/uploads/2026/07/1006_MKT_30062026_202607081123.pdf", // internetten açılınca
        pdfOfset: 11, // PDF sayfası = basılı sayfa + 11
        gunler: [
          { no: 1,  bolum: "Finansal Piyasalar ve Borsa İstanbul'un Yapısı", baslik: "Finansal piyasalar, borsanın tanımı, hukuki çerçeve ve ortaklık yapısı", sayfa: [1, 7], hazir: true },
          { no: 2,  bolum: "Finansal Piyasalar ve Borsa İstanbul'un Yapısı", baslik: "Borsa organları: genel kurul, yönetim kurulu ve komiteler", sayfa: [7, 13], hazir: true },
          { no: 3,  bolum: "Finansal Piyasalar ve Borsa İstanbul'un Yapısı", baslik: "Borsa üyeleri, denetim, kotasyon, işlem görme ve emirler", sayfa: [13, 18], hazir: true },
          { no: 4,  bolum: "Finansal Piyasalar ve Borsa İstanbul'un Yapısı", baslik: "Borsa tarafından oluşturulan finansal göstergeler", sayfa: [18, 25], hazir: true },
          { no: 5,  bolum: "Pay Piyasası", baslik: "İşlem gören sermaye piyasası araçları", sayfa: [26, 31], hazir: true },
          { no: 6,  bolum: "Pay Piyasası", baslik: "Pazarlar, borsa dışı işlemler ve birincil piyasa", sayfa: [31, 35], hazir: true },
          { no: 7,  bolum: "Pay Piyasası", baslik: "İkincil piyasa işlemleri ve seans saatleri", sayfa: [35, 41], hazir: true },
          { no: 8,  bolum: "Pay Piyasası", baslik: "Seans yapısı, işlemlerde esas alınan kavram ve kurallar", sayfa: [41, 48], hazir: true },
          { no: 9,  bolum: "Pay Piyasası", baslik: "İşlem yöntemleri", sayfa: [48, 55], hazir: true },
          { no: 10, bolum: "Pay Piyasası", baslik: "Özel uygulamalar (1)", sayfa: [55, 62], hazir: true },
          { no: 11, bolum: "Pay Piyasası", baslik: "Özel uygulamalar (2)", sayfa: [62, 70], hazir: true },
          { no: 12, bolum: "Pay Piyasası", baslik: "Emir tipleri, emir değiştirme-iptal ve emir giriş kuralları", sayfa: [70, 77], hazir: true },
          { no: 13, bolum: "Pay Piyasası", baslik: "Erişim protokolleri, kredili işlem ve açığa satış, takas, brüt takas ve VBTS", sayfa: [77, 81], hazir: true },
          { no: 14, bolum: "Pay Piyasası", baslik: "Pay Piyasasının tarihsel gelişimi ve bölüm tekrarı", sayfa: [81, 89], hazir: true },
          { no: 15, bolum: "Borçlanma Araçları Piyasası", baslik: "Temel kavramlar, kuruluşlar ve emir-işlem esasları", sayfa: [90, 97], hazir: true },
          { no: 16, bolum: "Borçlanma Araçları Piyasası", baslik: "Emir-işlem esasları, piyasa yapıcılığı, ISIN ve fon işlemleri", sayfa: [97, 104], hazir: true },
          { no: 17, bolum: "Borçlanma Araçları Piyasası", baslik: "Risk yönetimi, takas ve Kesin Alım Satım Pazarı", sayfa: [104, 109], hazir: true },
          { no: 18, bolum: "Borçlanma Araçları Piyasası", baslik: "Repo-ters repo, menkul kıymet tercihli repo ve pay senedi repo pazarları", sayfa: [109, 114], hazir: true },
          { no: 19, bolum: "Borçlanma Araçları Piyasası", baslik: "Repo karşılaştırması, uluslararası tahvil, nitelikli yatırımcı, gözaltı ve taahhütlü işlemler pazarları", sayfa: [114, 119], hazir: true },
          { no: 20, bolum: "Para Piyasası ve Swap Piyasası", baslik: "Borsa İstanbul Para Piyasası ve Swap Piyasası", sayfa: [120, 129], hazir: true },
          { no: 21, bolum: "Vadeli İşlem ve Opsiyon Piyasası", baslik: "Tanımlar, pazarlar, iş akışı, işlem saatleri ve işlem esasları", sayfa: [130, 136], hazir: true },
          { no: 22, bolum: "Vadeli İşlem ve Opsiyon Piyasası", baslik: "Emirlere ilişkin esaslar", sayfa: [136, 143], hazir: true },
          { no: 23, bolum: "Vadeli İşlem ve Opsiyon Piyasası", baslik: "Komiteler ve piyasa yapıcılığı", sayfa: [143, 149], hazir: true },
          { no: 24, bolum: "Vadeli İşlem ve Opsiyon Piyasası", baslik: "Özsermaye halleri, olağanüstü durumlar ve sözleşme esasları", sayfa: [149, 158], hazir: true },
          { no: 25, bolum: "Kıymetli Madenler ve Kıymetli Taşlar Piyasası", baslik: "Kıymetli Madenler Piyasası: işlem yöntemi, seanslar ve emirler", sayfa: [159, 164], hazir: true },
          { no: 26, bolum: "Kıymetli Madenler ve Kıymetli Taşlar Piyasası", baslik: "İthalat, teminat, takas ve Kıymetli Madenler Ödünç Piyasası", sayfa: [164, 169], hazir: true },
          { no: 27, bolum: "Tezgahüstü Piyasalar", baslik: "Tezgahüstü piyasaların özellikleri ve dünyadaki örnekler", sayfa: [170, 175], hazir: true },
          { no: 28, bolum: "Tezgahüstü Piyasalar", baslik: "Uluslararası düzenlemeler ve Türkiye'de tezgahüstü piyasalar", sayfa: [175, 179], hazir: true },
          { no: 29, bolum: "T.C. Merkez Bankası ve Bankalararası Piyasalar", baslik: "Para politikası uygulamaları ve açık piyasa işlemleri", sayfa: [180, 187], hazir: true },
          { no: 30, bolum: "T.C. Merkez Bankası ve Bankalararası Piyasalar", baslik: "TCMB para piyasaları ve bankalararası piyasalar", sayfa: [187, 195], hazir: true },
          { no: 31, bolum: "Takasbank Ödünç Pay Piyasası", baslik: "ÖPP: üyelik, çalışma esasları, seanslar, emirler", sayfa: [196, 201], hazir: true },
          { no: 32, bolum: "Takasbank Ödünç Pay Piyasası", baslik: "ÖPP teminatları ve garanti fonu", sayfa: [201, 208], hazir: true },
          { no: 33, bolum: "Takasbank Ödünç Pay Piyasası", baslik: "ÖPP takas, komisyon, haklar, temerrüt ve olağanüstü durumlar", sayfa: [208, 215], hazir: true },
          { no: 34, bolum: "Takasbank Para Piyasası", baslik: "TPP: çalışma esasları, limitler, emirler ve eşleşme", sayfa: [216, 221], hazir: true },
          { no: 35, bolum: "Takasbank Para Piyasası", baslik: "TPP teminatları, garanti fonu ve temerrüt", sayfa: [221, 230], hazir: true },
          { no: 36, bolum: "TEFAS", baslik: "TEFAS: hukuki çerçeve, üyelik, çalışma esasları ve emirler", sayfa: [231, 236], hazir: true },
          { no: 37, bolum: "TEFAS", baslik: "TEFAS: alım-satım süreci, temerrüt, komisyonlar ve olağanüstü durumlar", sayfa: [236, 243], hazir: true },
          { no: 38, bolum: "BEFAS", baslik: "BEFAS: işleyiş, limitler, alım-satım süreci, temerrüt ve komisyonlar", sayfa: [244, 253], hazir: true }
        ],
        dersSonu: true,
        deneme: true
      },
      {
        kod: "1007",
        ad: "Finansal Yönetim ve Mali Analiz",
        kisa: "Finansal Yönetim",
        pdf: "../kaynaklar/calisma-notlari/1007_Finansal_Yonetim_ve_Mali_Analiz.pdf",
        pdfResmi: "https://spl.com.tr/wp-content/uploads/2026/07/1007_MKT_30062026_202617041415.pdf", // internetten açılınca
        pdfOfset: 6, // PDF sayfası = basılı sayfa + 6
        gunler: [
          { no: 1,  bolum: "Finansal Yönetimin Genel Esasları", baslik: "Finansal yönetim, finansal amaç, sosyal sorumluluk, temsil sorunu ve kurumsal yönetim", sayfa: [1, 4], hazir: true },
          { no: 2,  bolum: "Finansal Planlama", baslik: "Nakit bütçesi", sayfa: [8, 10], hazir: true },
          { no: 3,  bolum: "Finansal Planlama", baslik: "Proforma gelir tablosu ve bilanço kalemleri", sayfa: [10, 14], hazir: true },
          { no: 4,  bolum: "Finansal Planlama", baslik: "Satışların yüzdesi yöntemiyle proforma tablolar", sayfa: [15, 17], hazir: true },
          { no: 5,  bolum: "Finansal Planlama", baslik: "Başabaş analizi", sayfa: [18, 20], hazir: true },
          { no: 6,  bolum: "Finansal Planlama", baslik: "Faaliyet kaldıracı", sayfa: [20, 22], hazir: true },
          { no: 7,  bolum: "Finansal Planlama", baslik: "Finansal kaldıraç, finansal başabaş ve toplam kaldıraç", sayfa: [22, 25], hazir: true },
          { no: 8,  bolum: "Sermaye Maliyeti", baslik: "Sermaye maliyeti, AOSM ve borcun maliyeti", sayfa: [40, 42], hazir: true },
          { no: 9,  bolum: "Sermaye Maliyeti", baslik: "Özsermaye maliyeti ve AOSM hesabı", sayfa: [42, 44], hazir: true },
          { no: 10, bolum: "Sermaye Yapısı", baslik: "Faaliyet riski, finansal risk ve sermaye yapısı teorisi", sayfa: [48, 50], hazir: true },
          { no: 11, bolum: "Sermaye Yapısı", baslik: "Mükemmel işleyen piyasalarda sermaye yapısı (Modigliani-Miller)", sayfa: [50, 53], hazir: true },
          { no: 12, bolum: "Sermaye Yapısı", baslik: "Dengeleme teorisi, asimetrik bilgi ve finansman hiyerarşisi", sayfa: [53, 56], hazir: true },
          { no: 13, bolum: "İşletme Sermayesi Yönetimi", baslik: "İşletme sermayesi ve kârlılık ilişkisi", sayfa: [60, 62], hazir: true },
          { no: 14, bolum: "İşletme Sermayesi Yönetimi", baslik: "Kasanın yönetimi", sayfa: [63, 65], hazir: true },
          { no: 15, bolum: "İşletme Sermayesi Yönetimi", baslik: "Alacak yönetimi", sayfa: [65, 68], hazir: true },
          { no: 16, bolum: "İşletme Sermayesi Yönetimi", baslik: "Stok yönetimi", sayfa: [68, 70], hazir: true },
          { no: 17, bolum: "Yatırım Projelerinin Değerlemesi", baslik: "Yatırım harcamalarının önemi, yatırım türleri ve kararları etkileyen unsurlar", sayfa: [80, 82], hazir: true },
          { no: 18, bolum: "Yatırım Projelerinin Değerlemesi", baslik: "Ortalama kârlılık oranı, geri ödeme süresi ve iskonto edilmiş geri ödeme süresi", sayfa: [82, 85], hazir: true },
          { no: 19, bolum: "Yatırım Projelerinin Değerlemesi", baslik: "Net bugünkü değer, iç verim oranı ve kârlılık endeksi", sayfa: [85, 88], hazir: true },
          { no: 20, bolum: "Yatırım Projelerinin Değerlemesi", baslik: "Yöntemlerin uygulanması ve karşılaştırılması", sayfa: [88, 92], hazir: true },
          { no: 21, bolum: "Birleşme ve Devir", baslik: "Birleşme ve devir kavramları ve türleri", sayfa: [102, 104], hazir: true },
          { no: 22, bolum: "Birleşme ve Devir", baslik: "Birleşme ve satın alma süreci, pay değişim oranı, avantaj ve dezavantajlar", sayfa: [105, 108], hazir: true },
          { no: 23, bolum: "Finansal Analiz", baslik: "Finansal tablolar, oran analizi ve likidite oranları", sayfa: [112, 116], hazir: true },
          { no: 24, bolum: "Finansal Analiz", baslik: "Finansal yapı oranları, faiz karşılama ve devir hızları", sayfa: [116, 120], hazir: true },
          { no: 25, bolum: "Finansal Analiz", baslik: "Kârlılık, büyüme ve piyasa değeri oranları", sayfa: [120, 125], hazir: true },
          { no: 26, bolum: "Finansal Analiz", baslik: "Dikey, yatay ve nakit akım analizi, finansal tablo makyajları", sayfa: [125, 128], hazir: true },
          { no: 27, bolum: "Leasing, Faktoring ve Forfaiting", baslik: "Leasing: tanım, süreç, taraflar, finansal ve faaliyet kiralaması", sayfa: [137, 141], hazir: true },
          { no: 28, bolum: "Leasing, Faktoring ve Forfaiting", baslik: "Diğer leasing türleri ve leasingin yararları", sayfa: [142, 145], hazir: true },
          { no: 29, bolum: "Leasing, Faktoring ve Forfaiting", baslik: "Faktoring ve forfaiting", sayfa: [145, 147], hazir: true }
        ],
        dersSonu: true,
        deneme: true
      },
      {
        kod: "1010",
        ad: "Ticaret Hukuku",
        kisa: "Ticaret Hukuku",
        pdf: "../kaynaklar/calisma-notlari/1010_Ticaret_Hukuku.pdf",
        pdfResmi: "https://spl.com.tr/wp-content/uploads/2026/07/1010_MKT_30062026_202607270945.pdf", // internetten açılınca
        pdfOfset: 7, // PDF sayfası = basılı sayfa + 7
        gunler: [
          { no: 1,  bolum: "Ticaret Şirketlerine İlişkin Genel Hükümler", baslik: "Ticaret şirketleri, ortak özellikleri, asgari sermaye ve sermaye olarak getirilebilecek değerler", sayfa: [1, 5], hazir: true },
          { no: 2,  bolum: "Ticaret Şirketlerine İlişkin Genel Hükümler", baslik: "Sermaye koyma borcunun ifası ve yaptırımları", sayfa: [5, 10], hazir: true },
          { no: 3,  bolum: "Ticaret Şirketlerine İlişkin Genel Hükümler", baslik: "Birleşme (1)", sayfa: [10, 15], hazir: true },
          { no: 4,  bolum: "Ticaret Şirketlerine İlişkin Genel Hükümler", baslik: "Kolaylaştırılmış birleşme, birleşmenin sonuçları ve bölünme süreci", sayfa: [15, 20], hazir: true },
          { no: 5,  bolum: "Ticaret Şirketlerine İlişkin Genel Hükümler", baslik: "Bölünmenin sonuçları ve tür değiştirme süreci", sayfa: [20, 24], hazir: true },
          { no: 6,  bolum: "Ticaret Şirketlerine İlişkin Genel Hükümler", baslik: "Tür değiştirme kararı ve yapısal değişikliklere ilişkin davalar", sayfa: [24, 27], hazir: true },
          { no: 7,  bolum: "Ticaret Şirketlerine İlişkin Genel Hükümler", baslik: "Şirketler topluluğu", sayfa: [27, 33], hazir: true },
          { no: 8,  bolum: "Anonim Şirketin Tanımı, İlkeleri ve Sürdürülebilir Finans", baslik: "Tanım, unsurlar, perdenin aralanması ve ilk ilkeler", sayfa: [34, 40], hazir: true },
          { no: 9,  bolum: "Anonim Şirketin Tanımı, İlkeleri ve Sürdürülebilir Finans", baslik: "Şeffaflık, kurumsal yönetim, eşit işlem, borçlanma yasağı ve oransallık", sayfa: [40, 44], hazir: true },
          { no: 10, bolum: "Anonim Şirketin Tanımı, İlkeleri ve Sürdürülebilir Finans", baslik: "Sürdürülebilir finans ve anonim şirketler", sayfa: [44, 50], hazir: true },
          { no: 11, bolum: "Anonim Şirketin Kuruluşu", baslik: "Kurucular, kuruluş türleri, izin, belgeler, tescil ve kuruluşun sonuçları", sayfa: [51, 58], hazir: true },
          { no: 12, bolum: "Yönetim Kurulu", baslik: "Organlar, YK yapısı, üyelerin seçimi ve devredilemez görevler", sayfa: [59, 65], hazir: true },
          { no: 13, bolum: "Yönetim Kurulu", baslik: "Sermaye kaybı, borca batıklık, YK toplantıları, yönetim ve temsil", sayfa: [65, 71], hazir: true },
          { no: 14, bolum: "Yönetim Kurulu", baslik: "Haksız fiil sorumluluğu, YK kararlarının sakatlığı ve üyelerin hakları", sayfa: [71, 77], hazir: true },
          { no: 15, bolum: "Yönetim Kurulu", baslik: "YK üyelerinin yükümlülükleri ve hukuki sorumluluğun esasları", sayfa: [77, 83], hazir: true },
          { no: 16, bolum: "Yönetim Kurulu", baslik: "Farklılaştırılmış teselsül, ibra, özel sorumluluk ve cezai sorumluluk", sayfa: [83, 90], hazir: true },
          { no: 17, bolum: "Genel Kurul", baslik: "Genel kurulun yetkileri, toplantı türleri, özel kurul, çağrı ve gündem", sayfa: [91, 96], hazir: true },
          { no: 18, bolum: "Genel Kurul", baslik: "Katılım, Bakanlık temsilcisi, oy hakkı, temsil ve toplantı nisabı", sayfa: [96, 102], hazir: true },
          { no: 19, bolum: "Genel Kurul", baslik: "Nitelikli nisaplar, kararların etkisi, yokluk, butlan ve iptal", sayfa: [102, 108], hazir: true },
          { no: 20, bolum: "Anonim Şirketlerin Denetimi", baslik: "Denetimin düzenlenişi, amacı ve denetime tabi şirketler", sayfa: [109, 114], hazir: true },
          { no: 21, bolum: "Anonim Şirketlerin Denetimi", baslik: "Denetçiler, denetim raporu, görüş yazıları ve sorumluluk", sayfa: [114, 119], hazir: true },
          { no: 22, bolum: "Esas Sözleşme Değişiklikleri", baslik: "Esas sözleşme değişikliği ve sermaye artırımı", sayfa: [120, 124], hazir: true },
          { no: 23, bolum: "Esas Sözleşme Değişiklikleri", baslik: "Sermaye azaltımı ve anonim şirketlerde menkul kıymetler", sayfa: [124, 131], hazir: true },
          { no: 24, bolum: "Menkul Kıymetler, Pay ve Pay Sahipliği Hakları", baslik: "Pay, pay senetleri, payın devri ve şirketin kendi payları", sayfa: [132, 137], hazir: true },
          { no: 25, bolum: "Menkul Kıymetler, Pay ve Pay Sahipliği Hakları", baslik: "Bilgi alma, özel denetim, kâr payı ve rüçhan hakkı", sayfa: [137, 141], hazir: true },
          { no: 26, bolum: "Menkul Kıymetler, Pay ve Pay Sahipliği Hakları", baslik: "Önerilmeye muhatap olma, tasfiye bakiyesi, azlık hakları ve pay sahibinin borçları", sayfa: [141, 145], hazir: true },
          { no: 27, bolum: "Sona Erme ve Tasfiye", baslik: "Sona erme ve tasfiye", sayfa: [146, 154], hazir: true }
        ],
        dersSonu: true,
        deneme: true
      },
      yakinda("1011", "Muhasebe ve Finansal Raporlama", "Muhasebe"),
      ortak("1003"),
      ortak("1005"),
      ortak("1012")
    ]
  };
})();
