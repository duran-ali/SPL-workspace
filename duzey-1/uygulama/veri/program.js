// SPL Düzey 1 çalışma programı: dersler, günlük okuma planı ve içerik dosyaları.
// "hazir: true" olan günlerin içeriği icerik/<kod>/gunXX.js dosyasındadır.
// Sayfa numaraları resmi çalışma notunun basılı sayfa numaralarıdır.
window.SPL_PROGRAM = {
  surum: "2026-11-04",
  basari: { konuMin: 50, ortalamaMin: 60 }, // resmi sınav ölçütü (genel denemede kullanılır)
  dersSonuBaraj: 75, // kendi belirlediğimiz, resmi barajdan yüksek ders sonu barajı
  dersSonuSoru: 25,
  denemeDakika: 45, // resmi sınavda her ders (konu) için süre
  dersler: [
    {
      kod: "1001",
      ad: "Dar Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları",
      kisa: "Mevzuat ve Meslek Kuralları",
      pdf: "../kaynaklar/calisma-notlari/1001_Dar_Kapsamli_SP_Mevzuati_ve_Meslek_Kurallari.pdf",
      pdfOfset: 10, // PDF sayfası = basılı sayfa + 10
      gunler: [
        { no: 1,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Sermaye piyasası, SPKn'nin amacı, kapsamı ve sermaye piyasası araçları", sayfa: [1, 10], hazir: true },
        { no: 2,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Kaydi sistem, teminat yönetimi ve ihraca ilişkin ortak esaslar", sayfa: [11, 20], hazir: true },
        { no: 3,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Pay ve borçlanma aracı ihracı, halka açık ortaklıklar", sayfa: [21, 30], hazir: true },
        { no: 4,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Sermaye piyasası faaliyetleri ve kurumları", sayfa: [31, 40], hazir: true },
        { no: 5,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Portföy saklama, altyapı kurumları, borsalar, öz düzenleyiciler ve YTM", sayfa: [41, 50], hazir: true },
        { no: 6,  bolum: "6362 sayılı Sermaye Piyasası Kanunu", baslik: "Denetim, tedbirler ve yaptırımların genel düzeni", sayfa: [51, 57], hazir: true },
        { no: 7,  bolum: "6362 sayılı SPKn ve Özel Durumlar Tebliği", baslik: "Sermaye piyasası suçları, idari para cezaları ve özel durumlara giriş", sayfa: [58, 67], hazir: true },
        { no: 8,  bolum: "II-15.1 Özel Durumlar Tebliği", baslik: "İçsel bilgi, erteleme, sürekli bilgiler ve açıklama esasları", sayfa: [68, 76], hazir: true },
        { no: 9,  bolum: "II-17.1 Kurumsal Yönetim Tebliği", baslik: "Kurumsal yönetim kavramı, yaklaşımlar ve TTK hükümleri", sayfa: [77, 86], hazir: true },
        { no: 10, bolum: "II-17.1 Kurumsal Yönetim Tebliği", baslik: "TTK hükümleri (devam) ve Kurumsal Yönetim Tebliği", sayfa: [87, 96], hazir: true },
        { no: 11, bolum: "II-17.1 Kurumsal Yönetim Tebliği", baslik: "Tebliğin esasları ve Kurumsal Yönetim İlkeleri", sayfa: [97, 106], hazir: true },
        { no: 12, bolum: "II-17.1 ve III-52.1", baslik: "Kurumsal Yönetim İlkeleri (devam) ve yatırım fonlarına giriş", sayfa: [107, 116], hazir: true },
        { no: 13, bolum: "III-52.1 Yatırım Fonlarına İlişkin Esaslar Tebliği", baslik: "Katılma payları, portföy sınırlamaları", sayfa: [117, 126], hazir: true },
        { no: 14, bolum: "III-52.1 Yatırım Fonlarına İlişkin Esaslar Tebliği", baslik: "Fon türleri, garantili fonlar, sona erme ve TEFAS", sayfa: [127, 137], hazir: true },
        { no: 15, bolum: "TSPB Meslek Kuralları ve Etik İlkeler", baslik: "Meslek kuralları ve etik ilkelere giriş", sayfa: [138, 146], hazir: true },
        { no: 16, bolum: "Sermaye Piyasası Çalışanları Etik İlkeleri", baslik: "Davranış kuralları: bağımsızlık, içsel bilgi, piyasa dolandırıcılığı", sayfa: [147, 156], hazir: true },
        { no: 17, bolum: "Sermaye Piyasası Çalışanları Etik İlkeleri", baslik: "Davranış kuralları: müşteriye ve işverene karşı yükümlülükler", sayfa: [157, 166], hazir: true },
        { no: 18, bolum: "Etik İlkeler ve TSPB Disiplin Yönetmeliği", baslik: "Çıkar çatışmaları ve TSPB disiplin yönetmeliği", sayfa: [167, 177], hazir: true }
      ],
      dersSonu: true,
      deneme: true
    },
    {
      kod: "1003",
      ad: "Sermaye Piyasası Araçları 1",
      kisa: "Sermaye Piyasası Araçları 1",
      pdf: "../kaynaklar/calisma-notlari/1003_Sermaye_Piyasasi_Araclari_1.pdf",
      pdfOfset: 7, // PDF sayfası = basılı sayfa + 7
      gunler: [
        { no: 1,  bolum: "Bölüm I: Pay", baslik: "Anonim şirket, pay kavramı, pay türleri ve değer kavramları", sayfa: [1, 10], hazir: true },
        { no: 2,  bolum: "Bölüm I: Pay", baslik: "Pay sahipliği hakları, getiri ve riskler, endeksler, algoritmik işlemler", sayfa: [11, 21], hazir: true },
        { no: 3,  bolum: "Bölüm I: Pay", baslik: "İzahname ve İhraç Belgesi Tebliği, Pay Tebliği", sayfa: [22, 33], hazir: true },
        { no: 4,  bolum: "Bölüm I: Pay", baslik: "Sermaye Piyasası Araçlarının Satışı Tebliği", sayfa: [34, 42], hazir: true },
        { no: 5,  bolum: "Bölüm I: Pay", baslik: "Temettü, bedelli ve bedelsiz sermaye artırımı", sayfa: [43, 52], hazir: true },
        { no: 6,  bolum: "Bölüm I: Pay", baslik: "Sermaye azaltımı, geri alım, pay alım teklifi, pazarlar", sayfa: [53, 62], hazir: true },
        { no: 7,  bolum: "Bölüm I: Pay", baslik: "Emir-işlem esasları, seans saatleri, işlem yöntemleri", sayfa: [63, 72], hazir: true },
        { no: 8,  bolum: "Bölüm I: Pay", baslik: "Devre kesiciler, emir tipleri, kredili işlem, brüt takas", sayfa: [73, 81], hazir: true },
        { no: 9,  bolum: "Bölüm II: Borçlanma Araçları", baslik: "Borçlanma araçlarına ilişkin düzenlemeler ve yapısal unsurlar", sayfa: [82, 91], hazir: true },
        { no: 10, bolum: "Bölüm II: Borçlanma Araçları", baslik: "Temiz-kirli fiyat, kuponsuz senet, faiz ve getiri ölçüleri", sayfa: [92, 101], hazir: true },
        { no: 11, bolum: "Bölüm II: Borçlanma Araçları", baslik: "Risk-getiri ilişkisi, durasyon, risksiz faiz, kredi riski", sayfa: [102, 112], hazir: true },
        { no: 12, bolum: "Bölüm II: Borçlanma Araçları", baslik: "Erken itfa, eurotahvil, strip, getiri eğrisi, referans oranlar", sayfa: [113, 121], hazir: true },
        { no: 13, bolum: "Bölüm II: Borçlanma Araçları", baslik: "TLREF ve TÜFE'ye endeksli araçlar, DİBS ihracı ve piyasa yapıcılığı", sayfa: [122, 129], hazir: true },
        { no: 14, bolum: "Bölüm III: Yatırım Fonu Katılma Payları", baslik: "Kolektif yatırım, temel ilkeler ve para piyasası fonları", sayfa: [130, 139], hazir: true },
        { no: 15, bolum: "Bölüm III: Yatırım Fonu Katılma Payları", baslik: "Borçlanma araçları, hisse senedi, değişken ve katılım fonları", sayfa: [140, 149], hazir: true },
        { no: 16, bolum: "Bölüm III: Yatırım Fonu Katılma Payları", baslik: "Serbest fonlar, fiyatlama, ücretler, performans ve risk değeri", sayfa: [150, 160], hazir: true },
        { no: 17, bolum: "Bölüm IV: Türev Araçlar", baslik: "Türev piyasalar, VİOP ve vadeli işlem sözleşmeleri", sayfa: [161, 170], hazir: true },
        { no: 18, bolum: "Bölüm IV: Türev Araçlar", baslik: "Teminat mekanizması, sözleşme türleri ve fiyat dinamikleri", sayfa: [171, 178], hazir: true },
        { no: 19, bolum: "Bölüm IV–V", baslik: "Opsiyonlar, varantlar ve GVK geçici 67. madde", sayfa: [179, 188], hazir: true },
        { no: 20, bolum: "Bölüm V: GVK Geçici 67. Madde", baslik: "Vergilendirme: istisnalar, oranlar ve özel durumlar", sayfa: [189, 201], hazir: true }
      ],
      dersSonu: true,
      deneme: true
    },
    {
      kod: "1005",
      ad: "Yatırım Kuruluşları",
      kisa: "Yatırım Kuruluşları",
      pdf: "../kaynaklar/calisma-notlari/1005_Yatirim_Kuruluslari.pdf",
      pdfOfset: 11, // PDF sayfası = basılı sayfa + 11
      gunler: [
        { no: 1,  bolum: "III-37.1 Yatırım Hizmetleri Tebliği", baslik: "Yatırım hizmetleri, aracı kurum grupları ve alım satıma aracılık", sayfa: [1, 10], hazir: true },
        { no: 2,  bolum: "III-37.1 Yatırım Hizmetleri Tebliği", baslik: "Türev araçlar, kaldıraçlı işlemler ve emir gerçekleştirme", sayfa: [11, 20], hazir: true },
        { no: 3,  bolum: "III-37.1 Yatırım Hizmetleri Tebliği", baslik: "Bireysel portföy yöneticiliği, yatırım danışmanlığı, halka arza aracılık", sayfa: [21, 31], hazir: true },
        { no: 4,  bolum: "III-37.1 Yatırım Hizmetleri Tebliği", baslik: "Saklama hizmeti ve yan hizmetler", sayfa: [31, 42], hazir: true },
        { no: 5,  bolum: "III-39.1 Yatırım Kuruluşları Tebliği", baslik: "Aracı kurumların kuruluşu, faaliyet izni ve personel", sayfa: [43, 53], hazir: true },
        { no: 6,  bolum: "III-39.1 Yatırım Kuruluşları Tebliği", baslik: "Faaliyet ilkeleri, müşteri sınıflandırması ve uygunluk testi", sayfa: [53, 62], hazir: true },
        { no: 7,  bolum: "III-39.1 Yatırım Kuruluşları Tebliği", baslik: "Yükümlülükler, merkez dışı örgütler, dışarıdan hizmet alımı", sayfa: [63, 72], hazir: true },
        { no: 8,  bolum: "III-39.1 Yatırım Kuruluşları Tebliği", baslik: "Yapılamayacak işler, izin iptali, tedbirler ve teminatlar", sayfa: [72, 79], hazir: true },
        { no: 9,  bolum: "III-45.1 Belge ve Kayıt Düzeni Tebliği", baslik: "Çerçeve sözleşme, müşteri emirleri, bildirimler ve saklama", sayfa: [80, 91], hazir: true },
        { no: 10, bolum: "V-65 Kredili Alım, Açığa Satış, Ödünç", baslik: "Kredili alım işlemleri ve özkaynak", sayfa: [92, 100], hazir: true },
        { no: 11, bolum: "V-65 Kredili Alım, Açığa Satış, Ödünç", baslik: "Kredinin muacceliyeti, açığa satış ve ödünç işlemleri", sayfa: [101, 109], hazir: true },
        { no: 12, bolum: "III-35/A.2 Kitle Fonlaması Tebliği", baslik: "Platformlar ve paya dayalı kitle fonlaması", sayfa: [110, 118], hazir: true },
        { no: 13, bolum: "III-35/A.2 Kitle Fonlaması Tebliği", baslik: "Borçlanmaya dayalı kitle fonlaması ve ortak esaslar", sayfa: [119, 126], hazir: true },
        { no: 14, bolum: "III-42.1 Uzaktan Kimlik Tespiti Tebliği", baslik: "Uzaktan kimlik tespiti ve elektronik sözleşme", sayfa: [127, 135], hazir: true }
      ],
      dersSonu: true,
      deneme: true
    },
    {
      kod: "1012",
      ad: "Takas, Saklama ve Operasyon İşlemleri",
      kisa: "Takas, Saklama ve Operasyon",
      pdf: "../kaynaklar/calisma-notlari/1012_Takas_Saklama_ve_Operasyon_Islemleri.pdf",
      pdfOfset: 11,
      gunler: [
        { no: 1,  bolum: "1. Temel Kavramlar", baslik: "Takas ve saklamaya ilişkin temel kavramlar", sayfa: [1, 6], hazir: true },
        { no: 2,  bolum: "2. Takas, Saklama ve Kaydileştirme Düzenlemeleri", baslik: "MKK: kuruluş, faaliyet, üyelik ve denetim", sayfa: [7, 11], hazir: true },
        { no: 3,  bolum: "2. Takas, Saklama ve Kaydileştirme Düzenlemeleri", baslik: "Kaydi kayıtların tutulması (II-13.1)", sayfa: [15, 23], hazir: true },
        { no: 4,  bolum: "2. Takas, Saklama ve Kaydileştirme Düzenlemeleri", baslik: "Merkezi takas ve merkezi karşı taraf: düzenlemeler ve üyelik", sayfa: [28, 36], hazir: true },
        { no: 5,  bolum: "2. Takas, Saklama ve Kaydileştirme Düzenlemeleri", baslik: "Teminatlar, garanti fonu ve temerrüt", sayfa: [37, 44], hazir: true },
        { no: 6,  bolum: "2. Takas, Saklama ve Kaydileştirme Düzenlemeleri", baslik: "MKT uygulaması, temerrüt yönetimi ve sermaye", sayfa: [45, 51], hazir: true },
        { no: 7,  bolum: "2. Takas, Saklama ve Kaydileştirme Düzenlemeleri", baslik: "Portföy saklama hizmeti (III-56.1)", sayfa: [59, 66], hazir: true },
        { no: 8,  bolum: "3. Pay Piyasası Takas İşlemleri", baslik: "Pay piyasası takası ve temerrüt", sayfa: [71, 77], hazir: true },
        { no: 9,  bolum: "3. Pay Piyasası Takas İşlemleri", baslik: "Pay piyasası teminatları ve pay transferleri", sayfa: [78, 83], hazir: true },
        { no: 10, bolum: "4. Borçlanma Araçlarının Takası", baslik: "Kotasyon, depo hesapları, BAP pazarları ve takas prensipleri", sayfa: [88, 95], hazir: true },
        { no: 11, bolum: "4. Borçlanma Araçlarının Takası", baslik: "Takas işlemleri, takas kesinliği ve temerrüt", sayfa: [96, 103], hazir: true },
        { no: 12, bolum: "4. Borçlanma Araçlarının Takası", baslik: "BAP ve para piyasası risk ve teminat yönetimi", sayfa: [104, 113], hazir: true },
        { no: 13, bolum: "4. Borçlanma Araçlarının Takası", baslik: "Swap piyasası, kupon ve itfa, bildirimler", sayfa: [114, 122], hazir: true },
        { no: 14, bolum: "5. Türev Araçlarda Takas", baslik: "VİOP takas işlemleri ve risk yönetimi", sayfa: [131, 138], hazir: true },
        { no: 15, bolum: "5. Türev Araçlarda Takas", baslik: "Kâr-zarar hesabı ve VİOP teminatları", sayfa: [139, 145], hazir: true },
        { no: 16, bolum: "5. Türev Araçlarda Takas", baslik: "Garanti fonu ve temerrüt süreci", sayfa: [146, 152], hazir: true },
        { no: 17, bolum: "5. Türev Araçlarda Takas", baslik: "Tezgâhüstü türev işlemler", sayfa: [153, 159], hazir: true },
        { no: 18, bolum: "6. Takasbank Teminat Yönetimi", baslik: "Teminat tipleri, kabul edilen varlıklar ve değerleme", sayfa: [163, 171], hazir: true }
      ],
      dersSonu: true,
      deneme: true
    }
  ]
};
