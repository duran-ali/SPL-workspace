SPL.gun("1016", 8, {
  okuma: `
## Bugünün haritası
Stokları bitiriyoruz: **aralıksız sayım yöntemi**, **stok değer düşüklüğü karşılığının** dört senaryosu, **verilen sipariş avansları**, sigorta tazminatı ve ambalajlar. Ardından dönen varlıkların son iki grubu: **18 Gelecek Aylara Ait Giderler ve Gelir Tahakkukları** ve **19 Diğer Dönen Varlıklar** (KDV hesapları dahil).

1. **Aralıksız sayım yöntemi**
2. İki yöntemin farkı
3. **158 Stok Değer Düşüklüğü Karşılığı**
4. **159 Verilen Sipariş Avansları**
5. Sigorta tazminatı ve ambalajlar
6. **18** grubu: 180 ve 181
7. **19** grubu: KDV, peşin vergiler, avanslar, sayım noksanları

---

## 1. Aralıksız sayım yöntemi
- **Satın alma** kayıtları aralıklı sayımdaki gibidir.
- **Satış** ve **satış iadesi** işlemleri **iki maddeyle** kaydedilir; ikinci madde **maliyet devridir**.

**Örnek:** alış maliyeti 40.000 TL olan mal 64.000 TL'ye satıldı.
| Madde | Borç | Alacak |
|---|---|---|
| 1 | 100 Kasa / 120 Alıcılar 75.520 | 600 Yurtiçi Satışlar 64.000; 391 Hesaplanan KDV 11.520 |
| 2 | **621 Satılan Ticari Mallar Maliyeti 40.000** | **153 Ticari Mallar 40.000** |

**Satış iadesi** (satış fiyatı 4.800, maliyeti 3.000): 610 ve 191 borç / 120 alacak; ayrıca **153 borç / 621 alacak 3.000**.

## 2. İki yöntemin farkı
| | **Aralıklı sayım** | **Aralıksız sayım** |
|---|---|---|
| Maliyet devri (621) | **Dönem sonunda**, fiziki sayımla | **Her satış ve satış iadesinden sonra** |
| 153'ün borç kalanı | **SMM + dönem sonu stoku** | Yalnız **dönem sonu stoku** |
| **Sayım farkları** | Saptanamaz ve muhasebeleştirilemez | Fiziki sayımla **saptanabilir**; fazlalar **397 Sayım ve Tesellüm Fazlaları**'na |

## 3. 158 Stok Değer Düşüklüğü Karşılığı (−)
- Değer düşüklüğü saptanınca: **654 Karşılık Giderleri** borç / **158** alacak.
- Tekdüzen sistem bu gider ve zararları **diğer olağan faaliyetlerden gider ve zararlar** sayar; **mal hareketlerinden doğan** bir gider/zarar kabul etmez.
- Değeri düşük stok satılınca satış tutarı elde edilme maliyetini aşmadıkça, satış tutarının **alış maliyetine eşit** olduğu varsayılır.
- Fonksiyonu kalmayan karşılık **644 Konusu Kalmayan Karşılıklar**'a; **önceki dönemlerde** ayrılıp gereksiz kalan karşılıklar **671 Önceki Dönem Gelir ve Kârları**'na aktarılır.

**Dört senaryo** (44.000 TL karşılık ayrılmış değeri düşük mallar, aralıklı sayım):

| Senaryo | Kayıt özeti |
|---|---|
| **1. Karşılığa gerek kalmaması** (44.000'e satış) | 100/600/391 satış kaydı; **158 borç / 644 alacak 44.000** |
| **2. Karşılıktan kısmen yararlanma** (30.000'e satış) | Satış kaydı; **158 borç / 644 alacak 30.000** (kalan 14.000 yılsonu değerlemesinde ele alınır) |
| **3. Gerek kalmaması ve maliyetin üstünde satış** (50.000'e) | Satış kaydı; **158 borç / 644 alacak 44.000** |
| **4. Karşılıktan tam yararlanma** (satılamadı, silindi) | **158 borç / 153 (Değeri Düşük Stoklar) alacak 44.000** |

> [!bilgi] Aralıklı sayımda maliyet devri **yılsonunda** toplu yapıldığı için kullanılmayan karşılıkla ilgili düzeltme yılsonu değerlemesinde yapılır. Aralıksız sayımda her satışta **621 / 153** maliyet kaydı da yapılır.

## 4. 159 Verilen Sipariş Avansları
- **Mal** siparişleri için ödenen avanslar **159**'da; maddi ve maddi olmayan duran varlıklar ile özel tükenmeye tabi varlıklar için ödenenler **verilen avanslar** hesabında izlenir.

> [!dikkat] Verilen avansların karşılığı işletmeye **para olarak dönmez**, mal veya hizmet olarak döner; işletmenin avans karşılığında **para isteme hakkı yoktur**. Bu yüzden verilen avanslar **alacaklar grubunda yer almaz**.

- Verilen avanslar **damga vergisine** tabidir (örnekte **binde 7,5**); vergi avanstan mahsup edilir (**360 Ödenecek Vergi ve Fonlar**).
- Sipariş ve alınan **banka teminat mektubu** nazım hesaplarda izlenir; mal teslim alınınca avans mal bedelinden **mahsup edilir** ve nazım hesaplar kapatılır.

## 5. Sigorta tazminatı ve ambalajlar
- **Sigorta tazminatı:** tazminat ile mal değeri arasındaki fark kâr/zarara geçer. Örnek: değer kaybı 45.000, tazminat 70.000 → **127** borç 70.000 / **153** 45.000 ve **679 Diğer Olağandışı Gelir ve Kârlar** 25.000 alacak.
- **Dayanıksız ambalaj:** ticaret işletmelerinde **satış gideri**; sanayi işletmelerinde belli durumlarda **maliyet unsuru**.
- **Dayanıklı ambalaj** (iade edilecek): ambalaj bedeli faturaya dahilse iadesi **mal iadesi** gibi kaydedilir; ayrıca depozito alındıysa **Alınan Depozito ve Teminatlar** (borç hesabı) kullanılır.

## 6. 18 Gelecek Aylara Ait Giderler ve Gelir Tahakkukları
| Hesap | İçerik |
|---|---|
| **180 Gelecek Aylara Ait Giderler** | **Peşin ödenen** ve **gelecek döneme ait** giderler; gelecek aylarda ilgili gider hesabına aktarılır |
| **181 Gelir Tahakkukları** | **Döneme ait** olup tahsili veya kesin borç kaydı **sonraki dönemde** yapılacak gelirler |

## 7. 19 Diğer Dönen Varlıklar
| Hesap | İçerik |
|---|---|
| **190 Devreden KDV** | Bir dönemde **indirilemeyip** izleyen döneme devreden KDV (191 ile 391 karşılaştırıldıktan sonraki bakiye) |
| **191 İndirilecek KDV** | Mal ve hizmet **alımlarında** ödenen KDV |
| **192 Diğer KDV** | **Teşvikli yatırım mallarının ithalinde** ertelenen KDV (erteleme bir yıl içindeyse) |
| **193 Peşin Ödenen Vergiler ve Fonlar** | Peşin ödenen ve bir yıl içinde indirilebilecek vergiler; dönem sonunda **371**'e aktarılır (en fazla **370** tutarı kadar) |
| **195 İş Avansları** | İşletme adına harcama yapacak **personel ve personel dışı** kişilere verilen avanslar |
| **196 Personel Avansları** | Personele hizmet/gider için veya **maaş, ücret ve yolluklara mahsuben** önceden verilen avanslar |
| **197 Sayım ve Tesellüm Noksanları** | Kasa, stok ve MDV sayım noksanları ile tesellüm noksanlarının **geçici** izlendiği hesap |
| **198 Diğer Çeşitli Dönen Varlıklar** | Diğerlerine girmeyenler |
| **199 Diğer Dönen Varlıklar Karşılığı (−)** | Yılsonunda kesin hesaba aktarılamayan sayım **noksanlarının fazlaları aşan** kısmı için karşılık |
`,
  sorular: [
    {
      s: "**Aralıksız sayım yönteminde** satış işlemi nasıl kaydedilir?",
      c: ["İki maddeyle: satış kaydı ve satılan malın maliyetinin 153'ten 621'e devri", "Tek maddeyle, yalnızca satış fiyatı üzerinden", "Satış kaydı yapılmaz, dönem sonunda toplu kaydedilir", "Yalnızca 621 Satılan Ticari Mallar Maliyeti hesabı çalıştırılır; satış hesabı kullanılmaz", "Satış 153 Ticari Mallar hesabına satış fiyatıyla alacak yazılır"],
      d: 0,
      a: "Aralıksız sayımda satış ve satış iadesi **iki maddeyle** kaydedilir: birinci madde satış (600/391), ikinci madde **maliyet devri**dir (**621** borç / **153** alacak). Aralıklı sayımda maliyet devri dönem sonunda yapılır.",
      k: "1016 resmi not s. 53"
    },
    {
      s: "Aralıklı ve aralıksız sayım yöntemleri arasındaki farklardan hangisi doğrudur?",
      c: ["Aralıklı sayımda sayım farkları her satıştan sonra saptanıp muhasebeleştirilebilir", "Aralıksız sayımda 153'ün borç kalanı hem satılan malın maliyetini hem dönem sonu stokunu birlikte içerir", "Aralıksız sayımda 153'ün borç kalanı yalnız dönem sonu stokunu gösterir ve sayım farkları saptanabilir", "Aralıklı sayımda her satıştan sonra maliyet devri yapılır ve 621 sürekli güncellenir", "İki yöntemde satın alma kayıtları tamamen farklıdır; aralıklıda 153 hiç kullanılmaz"],
      d: 2,
      a: "Aralıksız sayımda 153'ün borç kalanı **yalnız dönem sonu stokunu** gösterir ve fiziki sayımla **sayım farkları saptanabilir**. Aralıklı sayımda borç kalanı SMM + stoku içerir ve sayım farkları saptanamaz. Satın alma kayıtları iki yöntemde aynıdır.",
      k: "1016 resmi not s. 55"
    },
    {
      s: "Tekdüzen Muhasebe Sistemi stok değer düşüklüğünden doğan gider ve zararları nasıl nitelendirir?",
      c: ["Mal hareketlerinden doğan gider olarak 621 Satılan Ticari Mallar Maliyeti'ne yazar", "Olağandışı gider olarak 689 Diğer Olağandışı Gider ve Zararlar hesabına yazar", "Diğer olağan faaliyetlerden gider ve zarar olarak 654 Karşılık Giderleri'ne yazar", "Satış gideri olarak 760 Pazarlama, Satış ve Dağıtım Giderleri hesabına yazar", "Doğrudan özkaynaklardan düşer ve geçmiş yıllar zararlarına eklenir"],
      d: 2,
      a: "Tekdüzen sistem stok değer düşüklüğünü **diğer olağan faaliyetlerden gider ve zararlar** olarak kabul eder: **654 Karşılık Giderleri** borç / **158** alacak. Bunu mal hareketlerinden doğan bir gider veya zarar saymaz.",
      k: "1016 resmi not s. 57-58"
    },
    {
      s: "Karşılık ayrılmış değeri düşük stoklar **satılamayıp kayıttan silinirse** (karşılıktan tam yararlanma) yapılacak kayıt hangisidir?",
      c: ["654 Karşılık Giderleri borç / 158 Stok Değer Düşüklüğü Karşılığı alacak", "621 Satılan Ticari Mallar Maliyeti borç / 158 alacak", "158 Stok Değer Düşüklüğü Karşılığı borç / 644 Konusu Kalmayan Karşılıklar alacak", "153 Ticari Mallar borç / 158 Stok Değer Düşüklüğü Karşılığı alacak", "158 Stok Değer Düşüklüğü Karşılığı borç / 153 Ticari Mallar alacak"],
      d: 4,
      a: "Karşılıktan tam yararlanma durumunda değeri düşük stok kayıttan silinir: **158 Stok Değer Düşüklüğü Karşılığı** borç / **153 Ticari Mallar (Değeri Düşük Stoklar)** alacak.",
      k: "1016 resmi not s. 59"
    },
    {
      s: "Verilen sipariş avansları neden **alacaklar grubunda yer almaz**?",
      c: ["Vadesi bir yıldan uzun olduğu ve duran varlık niteliği taşıdığı için", "Damga vergisine tabi olduğu ve ayrıca harç ödenmesi gerektiği için", "Karşılığı para değil mal veya hizmet olarak döndüğü için", "Nazım hesaplarda izlendiği ve bilançoda hiç gösterilmediği için", "Satıcıdan banka teminat mektubu alındığı ve risk taşımadığı için"],
      d: 2,
      a: "Verilen avansların karşılığı işletmeye **para olarak dönmez**; mal, hizmet ve benzeri şekilde döner. İşletmenin avans karşılığında **para isteme hakkı olmadığından** verilen avanslar alacaklar grubunda yer almaz.",
      k: "1016 resmi not s. 61"
    },
    {
      s: "Hasara uğrayan malın değer kaybı 45.000 TL, sigorta şirketinin tahakkuk ettirdiği tazminat 70.000 TL'dir. Aradaki fark hangi hesapta izlenir?",
      c: ["679 Diğer Olağandışı Gelir ve Kârlar", "644 Konusu Kalmayan Karşılıklar", "600 Yurtiçi Satışlar", "642 Faiz Gelirleri", "153 Ticari Mallar"],
      d: 0,
      a: "Tazminat ile mal değeri arasındaki fark kâr ve zarara geçer: **127** borç 70.000; **153** alacak 45.000 ve **679 Diğer Olağandışı Gelir ve Kârlar (Mal Sigorta Tazminat Gelirleri)** alacak **25.000**.",
      k: "1016 resmi not s. 62"
    },
    {
      s: "**Peşin ödenen** ve gelecek döneme ait olan giderler hangi hesapta izlenir?",
      c: ["181 Gelir Tahakkukları", "159 Verilen Sipariş Avansları", "193 Peşin Ödenen Vergiler ve Fonlar", "195 İş Avansları", "180 Gelecek Aylara Ait Giderler"],
      d: 4,
      a: "Peşin ödenen ve cari dönemin gider hesaplarına kaydedilmemesi gereken, gelecek döneme ait giderler **180 Gelecek Aylara Ait Giderler**'de izlenir ve gelecek aylarda ilgili gider hesabına aktarılır. **181** ise döneme ait olup sonradan tahsil edilecek gelirleri izler.",
      k: "1016 resmi not s. 63"
    },
    {
      s: "Bir dönemde **indirilemeyip izleyen döneme devreden** katma değer vergisi hangi hesapta izlenir?",
      c: ["191 İndirilecek KDV", "391 Hesaplanan KDV", "190 Devreden KDV", "192 Diğer KDV", "360 Ödenecek Vergi ve Fonlar"],
      d: 2,
      a: "**190 Devreden KDV**, 191 İndirilecek KDV'nin 391 Hesaplanan KDV ile karşılaştırılmasından sonra kalan ve izleyen döneme devreden bakiyeyi izler. **192** teşvikli yatırım mallarının ithalinde ertelenen KDV içindir.",
      k: "1016 resmi not s. 64"
    }
  ]
});
