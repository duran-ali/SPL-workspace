SPL.gun("1016", 14, {
  okuma: `
## Bugünün haritası
Bugün kısa vadeli yabancı kaynakların ortasındayız: **ücret bordrosunun** muhasebeleştirilmesi, **34 Alınan Avanslar**, **35 Yıllara Yaygın İnşaat Hakedişleri**, **36 Ödenecek Vergi ve Diğer Yükümlülükler** ve **37 Borç ve Gider Karşılıkları** grubunun girişi (**370-371**).

1. **Ücret bordrosu** ve 335 Personele Borçlar
2. **34 Alınan Avanslar**
3. **35 Yıllara Yaygın İnşaat ve Onarım Hakedişleri**
4. **360 Ödenecek Vergi ve Fonlar**
5. **361 Ödenecek Sosyal Güvenlik Kesintileri**
6. **368** vadesi geçmiş ve taksitlendirilmiş yükümlülükler
7. **37 Borç ve Gider Karşılıkları**: 370 ve 371

---

## 1. Ücret bordrosu
**Örnek:** personel servisindeki çalışanların bordrosu: SGK işçi payı 26.600, işveren payı 37.000, gelir vergisi 48.300, damga vergisi 800, **net ücret 124.300**.

| Borç | Alacak |
|---|---|
| **770 Genel Yönetim Giderleri** 237.000 | **335 Personele Borçlar** 124.300 (net ücret) |
| | **360 Ödenecek Vergi ve Fonlar** 49.100 (gelir + damga vergisi) |
| | **361 Ödenecek Sosyal Güvenlik Kesintileri** 63.600 (işçi + işveren payı) |

> [!ezber] Gider hesabına yazılan tutar = **brüt ücret + işveren SGK payı** (237.000 = 124.300 + 49.100 + 26.600 + 37.000). Gider hesabı, personelin çalıştığı bölüme göre seçilir (yönetim → **770**, pazarlama → **760**).

- Net ücret ödenince: **335** borç / **100 Kasa** alacak.
- Seyahat dönüşü beyan edilen gider aldığı **avansı aşarsa** fark 335'e alınır: örnek 1.850 gider, 1.750 avans → 770 borç 1.850 / **196 Personel Avansları** 1.750 ve **335** 100 alacak.
- Dönem sonunda **işletmeden ayrılan** personelin alacağı artık personel borcu sayılmaz; **336 Diğer Çeşitli Borçlar**'a aktarılır.

## 2. 34 Alınan Avanslar
| Hesap | İçerik |
|---|---|
| **340 Alınan Sipariş Avansları** | Gelecekte yapılacak mal ve hizmet teslimleri için **peşin tahsil edilen** tutarlar; alınınca alacak, teslimde borç |
| **349 Alınan Diğer Avanslar** | 340 dışındaki her türlü kısa vadeli avans |

**Örnek:** maliyeti 50.000 olan mal 60.000'e satıldı; 20.000 avans önceden bankaya yatırıldı; teslimde kalan bedel ve KDV çekle alındı.
| Borç | Alacak |
|---|---|
| 102 Bankalar 20.000 | 340: 20.000 |
| 101 Alınan Çekler 50.800; 340: 20.000 | 600: 60.000; 391: 10.800 |
| 621: 50.000 | 153: 50.000 |

## 3. 35 Yıllara Yaygın İnşaat ve Onarım Hakedişleri
- **350 Yıllara Yaygın İnşaat ve Onarım Hakediş Bedelleri:** yıllara yaygın taahhüt işlerinde işin tamamlanan kısmı için düzenlenip **işverence onaylanan** hakedişler alacak yazılır. İşin **geçici kabulü** yapılınca ilgili **satış hesabına** aktarılır.
- **358 Yıllara Yaygın İnşaat Enflasyon Düzeltme Hesabı**.

## 4. 360 Ödenecek Vergi ve Fonlar
İşletmenin **mükellef veya sorumlu** sıfatıyla kendisine, personeline ve üçüncü kişilere ilişkin ödeyeceği vergi, resim, harç ve fonlar. Kalanı **vadesinde ödenecek** vergi ve fonları gösterir.

| **Alacaklanır** | **Borçlanır** |
|---|---|
| Yapılan ödemelerden **kesilen vergiler** (stopaj) | Vergi ve fonlar **ödendiğinde** |
| Gelirler üzerinden vergi tahakkuku | Vadesi geçmiş/taksitlendirilmiş borç **bir yıl içinde** ödenecekse **368**'e, **bir yıldan uzunsa 438 Kamuya Olan Ertelenmiş veya Taksitlendirilmiş Borçlar**'a aktarıldığında |
| Gider yazılan vergilerin ödenmek üzere alınması | |

**Örnek (kurumlar vergisi):** hesaplanan 125.000, peşin ödenen 25.000 → **370** borç / **360** alacak 125.000; **360** borç / **371** alacak 25.000.

## 5. 361 Ödenecek Sosyal Güvenlik Kesintileri
Personel hakedişlerinden kesilen **sosyal güvenlik primleri**, **işveren katılma payları** ve işverenin bu kuruluşlara ödeyeceği diğer yükümlülükler. Kesinti yapıldıkça alacak, ödendikçe borç. Ertelenen veya taksitlendirilen primler bir yıl içinde ödenecekse **368**'e aktarılır.

## 6. 368 Vadesi Geçmiş, Ertelenmiş veya Taksitlendirilmiş Vergi ve Diğer Yükümlülükler
- Kanuni sürede ödenemeyen vergi ve yükümlülükler ile erteleme/taksit süresi bilanço tarihinde **bir yıldan az** olanlar.
- Dönem sonunda **tecil faizi** veya **gecikme cezaları** tahakkuk yoluyla giderlere eklenir: **689 Diğer Olağandışı Gider ve Zararlar** borç / **381 Gider Tahakkukları** alacak.
- Süresi bir yılı aşanlar **438**'e; 438'de olup vadesi bir yılın altına düşenler **368**'e aktarılır.
- **369 Ödenecek Diğer Yükümlülükler:** grubun diğer hesaplarına girmeyenler.

## 7. 37 Borç ve Gider Karşılıkları
> [!ezber] Bilanço tarihinde **belirgin** olarak ortaya çıkan, ancak **tutarı kesin bilinemeyen** veya tutarı bilinse de **tahakkuk edeceği zaman bilinemeyen** kısa vadeli borç ve giderler için ayrılan karşılıklar. Bu hesaplar karşılık olmalarına rağmen **aktifi düzenleyici nitelikte değildir**.

| Hesap | İçerik |
|---|---|
| **370 Dönem Kârı Vergi ve Diğer Yasal Yükümlülük Karşılıkları** | Dönem kârı üzerinden, **ödeme aşamasına gelmeden** hesaplanan kurumlar vergisi ve diğer yükümlülükler; **dönem sonunda** çalışır |
| **371 Dönem Kârının Peşin Ödenen Vergi ve Diğer Yükümlülükleri (−)** | Peşin ödenen gelir ve kurumlar vergisi |
| **372 Kıdem Tazminatı Karşılığı** | **Bir yıl içinde** ödeneceği öngörülen kıdem tazminatları |
| **373 Maliyet Giderleri Karşılığı** | Aylık maliyetler için tahmini gider karşılıkları |
| **379 Diğer Borç ve Gider Karşılıkları** | |

- **370'in kaydı:** **691 Dönem Kârı Vergi ve Diğer Yasal Yükümlülük Karşılıkları** borç / **370** alacak. Böylece yükümlülük hem bilançoda borç olarak devreder hem gelir tablosunda **dönem kârından sonra** yer alarak **net kârın** görünmesini sağlar.
- Ertesi dönem beyanla kesinleşince: **370** borç; **371** (peşin ödenen) ve kalan **360 Ödenecek Vergi ve Fonlar** alacak. Örnek: 180.000 karşılık, 70.000 peşin → 360'a **110.000**.
`,
  sorular: [
    {
      s: "Yönetim bölümünde çalışanların bordrosunda net ücret 100.000 TL, gelir ve damga vergisi toplamı 30.000 TL, SGK işçi payı 20.000 TL, SGK işveren payı 25.000 TL'dir. **770 Genel Yönetim Giderleri** hesabına borç yazılacak tutar nedir?",
      c: ["100.000 TL", "150.000 TL", "175.000 TL", "125.000 TL", "130.000 TL"],
      d: 2,
      a: "Gider = brüt ücret + işveren SGK payı = (100.000 + 30.000 + 20.000) + 25.000 = **175.000 TL**. Alacak tarafında **335**: 100.000, **360**: 30.000, **361**: 45.000 (işçi + işveren payı) yer alır.",
      k: "1016 resmi not s. 112-113"
    },
    {
      s: "Bordroda personele ödenecek **net ücret** hangi hesaba alacak kaydedilir?",
      c: ["360 Ödenecek Vergi ve Fonlar", "361 Ödenecek Sosyal Güvenlik Kesintileri", "335 Personele Borçlar", "196 Personel Avansları", "381 Gider Tahakkukları"],
      d: 2,
      a: "Bordronun **net tutarı** personele ödenene kadar **335 Personele Borçlar**'a alacak kaydedilir; vergiler **360**, SGK işçi ve işveren payları **361** hesabına alacak yazılır.",
      k: "1016 resmi not s. 112-113"
    },
    {
      s: "Dönem sonunda **işletmeden ayrılmış** bir personelin işletmeden alacağı varsa bu borç hangi hesaba aktarılır?",
      c: ["335 Personele Borçlar'da kalır", "372 Kıdem Tazminatı Karşılığı", "320 Satıcılar", "331 Ortaklara Borçlar", "336 Diğer Çeşitli Borçlar"],
      d: 4,
      a: "İşletmeden ayrılan kişi artık personel sayılmadığından alacağı **335**'ten çıkarılarak **336 Diğer Çeşitli Borçlar** hesabına alınır.",
      k: "1016 resmi not s. 113"
    },
    {
      s: "Gelecekte yapılacak mal teslimi için müşteriden **peşin tahsil edilen** tutar hangi hesapta izlenir?",
      c: ["120 Alıcılar", "159 Verilen Sipariş Avansları", "340 Alınan Sipariş Avansları", "380 Gelecek Aylara Ait Gelirler", "600 Yurtiçi Satışlar"],
      d: 2,
      a: "Gelecekteki mal ve hizmet teslimleri için peşin tahsil edilen tutarlar **340 Alınan Sipariş Avansları**'na alacak yazılır; mal teslim edildiğinde borçlandırılarak kapatılır. **159** ise işletmenin **verdiği** avanslardır.",
      k: "1016 resmi not s. 114"
    },
    {
      s: "Yıllara yaygın inşaat işlerinde **işverence onaylanan hakediş bedelleri** hangi hesaba alacak kaydedilir ve ne zaman satış hesabına aktarılır?",
      c: ["350 Hakediş Bedelleri; işin geçici kabulü yapıldığında", "600 Yurtiçi Satışlar; hakediş işverence onaylandığında", "340 Alınan Sipariş Avansları; inşaat tamamen bittiğinde", "170 Yıllara Yaygın İnşaat Maliyetleri; hiçbir zaman aktarılmaz", "380 Gelecek Aylara Ait Gelirler; her yıl sonunda"],
      d: 0,
      a: "Onaylanan hakediş bedelleri **350**'ye alacak yazılır; işin **geçici kabulü** yapıldığında bu hesapta toplanan bedeller ilgili **satış hesabına** aktarılır.",
      k: "1016 resmi not s. 115"
    },
    {
      s: "Taksitlendirilen vergi borcunun ödeme süresi **bir yıldan uzunsa** borç hangi hesaba aktarılır?",
      c: ["368 Vadesi Geçmiş, Ertelenmiş veya Taksitlendirilmiş Vergi ve Diğer Yükümlülükler", "336 Diğer Çeşitli Borçlar", "360 Ödenecek Vergi ve Fonlar'da kalır", "370 Dönem Kârı Vergi Karşılıkları", "438 Kamuya Olan Ertelenmiş veya Taksitlendirilmiş Borçlar"],
      d: 4,
      a: "Ertelenmiş veya taksitlendirilmiş vergi borçları **bir yıl içinde** ödenecekse **368**'e, **bir yıldan uzun** sürede ödenecekse uzun vadeli **438 Kamuya Olan Ertelenmiş veya Taksitlendirilmiş Borçlar**'a aktarılır.",
      k: "1016 resmi not s. 117, 119"
    },
    {
      s: "**37 Borç ve Gider Karşılıkları** grubundaki hesaplar ile ilgili hangisi doğrudur?",
      c: ["Aktifi düzenleyici nitelikte hesaplardır ve ilgili varlıkların altında eksi değerle gösterilir", "Tutarı ve ödeme zamanı kesin olarak bilinen ve belgeye dayalı kısa vadeli borçları izler", "Tutarı veya zamanı belirsiz kısa vadeli borçlar için ayrılır; aktifi düzenlemez", "Yalnızca vadesi bir yılı aşan uzun vadeli borçları ve gider tahakkuklarını kapsar", "Özkaynakların bir alt grubudur ve kâr yedekleri arasında yer alır"],
      d: 2,
      a: "Bu grup, bilanço tarihinde belirgin olan ama **tutarı kesin bilinemeyen** veya **tahakkuk zamanı bilinemeyen** kısa vadeli borç ve giderler için ayrılan karşılıkları izler. Karşılık hesabı olmalarına rağmen **aktifi düzenleyici nitelikte değildir**.",
      k: "1016 resmi not s. 119"
    },
    {
      s: "Dönem kârı üzerinden 180.000 TL kurumlar vergisi karşılığı ayrılmış, dönem içinde 70.000 TL peşin ödenmiştir. Beyanname verildiğinde **360 Ödenecek Vergi ve Fonlar** hesabına alacak yazılacak tutar nedir?",
      c: ["180.000 TL", "70.000 TL", "250.000 TL", "110.000 TL", "0 TL"],
      d: 3,
      a: "Kesinleşmede **370** borç 180.000; peşin ödenen **371**'e 70.000 ve kalan **110.000 TL** **360 Ödenecek Vergi ve Fonlar**'a alacak yazılır. Karşılık dönem sonunda **691** borç / **370** alacak kaydıyla ayrılmıştı.",
      k: "1016 resmi not s. 120-121"
    }
  ]
});
