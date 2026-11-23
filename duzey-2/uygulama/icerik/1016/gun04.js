SPL.gun("1016", 4, {
  okuma: `
## Bugünün haritası
Tekdüzen hesap planının ilk sınıfı **Dönen Varlıklar**'a başlıyoruz. Bugün **10 Hazır Değerler** (kasa, çekler, bankalar) ve **11 Menkul Kıymetler** gruplarını, kayıt örnekleriyle göreceğiz. Kayıtları okurken her satırda "hangi hesap arttı, hangisi azaldı?" diye sorun.

1. Dönen varlıklar ve hesap grupları
2. **100 Kasa** ve kasa sayım farkları
3. **101 Alınan Çekler** ve çek hukuku
4. **102 Bankalar** ve faiz tahakkuku
5. **103 Verilen Çekler ve Ödeme Emirleri (−)** ve **108 Diğer Hazır Değerler**
6. **11 Menkul Kıymetler**: hisse senetleri ve tahviller
7. **119 Menkul Kıymetler Değer Düşüklüğü Karşılığı**

---

## 1. Dönen varlıklar
> [!ezber] **Dönen varlıklar:** normal koşullarda **bir yıl** (veya normal faaliyet dönemi) içinde **nakde dönüşmesi**, paraya çevrilmesi veya tüketilmesi beklenen varlıklar.

**Gruplar:** **10** Hazır Değerler, **11** Menkul Kıymetler, **12** Ticari Alacaklar, **13** Diğer Alacaklar, **15** Stoklar, **17** Yıllara Yaygın İnşaat ve Onarım Maliyetleri, **18** Gelecek Aylara Ait Giderler ve Gelir Tahakkukları, **19** Diğer Dönen Varlıklar.

**10 Hazır Değerler:** nakit olarak elde veya bankada bulunan ve istendiğinde **değer kaybına uğramadan** paraya çevrilebilen varlıklar (**menkul kıymetler hariç**).

## 2. 100 Kasa
- Elde bulunan **ulusal ve yabancı paraların TL karşılığı** izlenir; yabancı paralar yoğunsa para çeşitlerine göre **yardımcı hesaplar** açılır.
- Tahsilatlar **borç**, ödemeler ve bankaya yatırılanlar **alacak**.

> [!dikkat] Kasa hesabı **daima borç bakiyesi** verir veya **sıfır** olur; **hiçbir şekilde alacak bakiyesi vermez**.

**Kasa sayım farkları:** her akşam sayım yapılır.
- Fazla: **100 Kasa** borç / **397 Sayım ve Tesellüm Fazlaları** alacak
- Noksan: **197 Sayım ve Tesellüm Noksanları** borç / **100 Kasa** alacak
- Dönem sonunda noksanlar fazlalardan büyükse fark **olağandışı gider ve zarar**, fazlalar büyükse **olağandışı gelir ve kâr** olur. Nedeni bulunamazsa dönem kâr/zararına atılır; **normalin üstündeki noksanlar sorumlulara ödetilir**.

**Örnek:** 80.000 TL'lik kamyonet peşin satıldı (KDV %18), 20.000 TL'lik mal peşin alındı.
| Borç | Alacak |
|---|---|
| 100 Kasa 94.400 | 254 Taşıtlar 80.000; 391 Hesaplanan KDV 14.400 |
| 153 Ticari Mallar 20.000; 191 İndirilecek KDV 3.600 | 100 Kasa 23.600 |

## 3. 101 Alınan Çekler
**Çekin tarafları:** düzenleyen **keşideci**, tutarı almaya yetkili **lehtar**, ödeyen banka **muhatap**.

> [!ezber] **TTK ibraz süreleri:** keşide yerinde ödenecekse **10 gün**; başka yerde ödenecekse **1 ay**; başka ülkede keşide edilip aynı kıtada ödenecekse **1 ay**, ayrı kıtalarda **3 ay**. Çek **görüldüğünde ödenir**; ödenmeyen çeki lehtar **protesto** edebilir.

> [!dikkat] **İleri tarihli (vadeli) çekler** TTK'daki keşide tarihi hükmüne uymadığı ve **özün önceliği** kavramına aykırı olduğu için 101'de izlenemez: alınanlar **alacak senetleri**, verilenler **borç senetleri** hesabında izlenir ve dönem sonunda **reeskonta** tabi tutulur (**dönemsellik** gereği).

- Alınınca **borç**; bankadan tahsil veya **ciro** edilince **alacak**.
- Çek ciro edilerek satıcı borcu ödenirse: **320 Satıcılar** borç / **101 Alınan Çekler** alacak.

## 4. 102 Bankalar
- Yatırılanlar **borç**, çekilenler **alacak**; her ay sonunda **banka hesap özeti** ile karşılaştırılır.
- Mevduat **faizi menkul sermaye iradıdır**; banka vergiyi **vergi sorumlusu** sıfatıyla keser.

**Örnek:** cari hesaba 160.000 TL faiz tahakkuk etti, %15 vergi kesildi.
| Borç | Alacak |
|---|---|
| 102 Bankalar 160.000 | 642 Faiz Gelirleri 160.000 |
| 193 Peşin Ödenen Vergiler ve Fonlar 24.000 | 102 Bankalar 24.000 |

- **193** yılsonunda kurumlar vergisi mükelleflerinde **ödenecek vergiden mahsup** edilir; gelir vergisi mükelleflerinde ortaklardan alacaklarla karşılaştırılarak kapatılır.

## 5. 103 ve 108
- **103 Verilen Çekler ve Ödeme Emirleri (−):** hazır değerlerde **indirim kalemi**. Çek/ödeme emri verilince **alacak**; bankadan tahsil edildiği anlaşılınca **103 borç / 102 alacak**.
- **108 Diğer Hazır Değerler:** **pullar**, **vadesi gelmiş kuponlar**, tahsil edilecek banka ve posta havaleleri (**yoldaki paralar**).

## 6. 11 Menkul Kıymetler
İşletmenin **geçici yatırımlarıdır**: atıl fonları kısa vadede değerlendirmek. Hesaplar: **110** Hisse Senetleri, **111** Özel Kesim Tahvil, Senet ve Bonoları, **112** Kamu Kesimi Tahvil, Senet ve Bonoları, **118** Diğer Menkul Kıymetler, **119** Değer Düşüklüğü Karşılığı (−).

- Dönen varlıklarda yer almaları için **piyasada sürüm yeteneği** olmalı ve işletme **cari dönemde paraya çevirme** kararı vermiş olmalıdır.
- **Alış bedeliyle** borç, elden çıkarılınca **aynı bedelle** alacak.
- **Satın alma giderleri** (komisyon) **65** grubundaki gider hesabında; satış **zararları 65**, satış **kârları 64** grubunda izlenir.

**Örnek:** 6.000 adet hisse (alış 12 TL) adedi 17 TL'den satıldı, 2.000 TL komisyon.
| Borç | Alacak |
|---|---|
| 102 Bankalar 100.000; 653 Komisyon Giderleri 2.000 | 110 Hisse Senetleri 72.000; 645 Menkul Kıymet Satış Kârları 30.000 |

- **Temettü:** genel kurul kararıyla **136 Diğer Çeşitli Alacaklar** borç / **649 Faaliyetlerle İlgili Diğer Gelir ve Kârlar** alacak; tahsilde 136 kapatılır.
- **Tahviller:** şirket kâr etsin etmesin faiz ödemek zorundadır. Satın alınan tahvil **işlemiş faiz** içeriyorsa alış bedeli ile tahakkuk etmiş faiz **ayrı hesaplarda** (ör. 111 ve 136) kaydedilmelidir; aksi hâlde bilanço ve gelir tablosu yanlış olur.

## 7. 119 Menkul Kıymetler Değer Düşüklüğü Karşılığı (−)
Borsa veya piyasa değerinde **önemli ölçüde ya da sürekli** azalma olduğunda ayrılır (**dönemsellik** gereği).
- Ayrılırken: **654 Karşılık Giderleri** borç / **119** alacak.
- Menkul kıymet elden çıkarılırsa veya düşüklük gerçekleşmezse: **119** borç / **644 Konusu Kalmayan Karşılıklar** alacak.

**Örnek:** alış 3.500 TL olan 100 hissenin borsa değeri 280.000 TL'ye düştü → karşılık **70.000**. Sonra adedi 3.100 TL'den satıldı: 102 Bankalar 310.000 ve 119 70.000 borç; 110 Hisse Senetleri 350.000 ve 644 Konusu Kalmayan Karşılıklar 30.000 alacak.
`,
  sorular: [
    {
      s: "**100 Kasa** hesabının bakiyesi ile ilgili hangisi doğrudur?",
      c: ["Daima borç bakiyesi verir veya sıfır olur; hiçbir şekilde alacak bakiyesi vermez", "Her zaman alacak bakiyesi verir ve pasifte gösterilir", "Dönem sonunda mutlaka sıfırlanır ve bakiyesi sermayeye aktarılır", "Yalnızca yabancı paralar için alacak bakiyesi verebilir; Türk lirası kasada bakiye vermez", "Bakiyesi, kasa açığı oluştuğunda bilançonun pasifinde gösterilir"],
      d: 0,
      a: "Kasa hesabına tahsilatlar borç, ödemeler alacak kaydedilir; hesap **daima borç bakiyesi** verir veya **sıfır** olur, **hiçbir şekilde alacak bakiyesi vermez**.",
      k: "1016 resmi not s. 20"
    },
    {
      s: "Kasa sayımında fiili mevcudun kayıtlardan **fazla** çıkması durumunda yapılacak kayıt hangisidir?",
      c: ["100 Kasa borç / 397 Sayım ve Tesellüm Fazlaları alacak", "197 Sayım ve Tesellüm Noksanları borç / 100 Kasa alacak", "100 Kasa borç / 642 Faiz Gelirleri alacak", "397 Sayım ve Tesellüm Fazlaları borç / 100 Kasa alacak", "689 Diğer Olağandışı Gider borç / 100 Kasa alacak"],
      d: 0,
      a: "Kasa fazlasında **100 Kasa** borçlandırılır, **397 Sayım ve Tesellüm Fazlaları** alacaklandırılır. Noksanda ise **197 Sayım ve Tesellüm Noksanları** borç, **100 Kasa** alacak kaydedilir.",
      k: "1016 resmi not s. 22"
    },
    {
      s: "TTK'ya göre **keşide edildiği yerde ödenecek** bir çek muhataba ne kadar süre içinde ibraz edilmelidir?",
      c: ["1 gün", "6 ay", "1 ay", "3 ay", "10 gün"],
      d: 4,
      a: "Keşide yerinde ödenecek çek **10 gün**, başka yerde ödenecek çek **1 ay** içinde ibraz edilmelidir. Başka ülkede keşide edilen çek aynı kıtadaysa **1 ay**, ayrı kıtalardaysa **3 ay** içinde ibraz edilir.",
      k: "1016 resmi not s. 22"
    },
    {
      s: "İşletmenin aldığı **ileri tarihli (vadeli) çekler** Tekdüzen Muhasebe Sisteminde nasıl izlenir?",
      c: ["101 Alınan Çekler hesabında, tahsil tarihine kadar", "102 Bankalar hesabında, vadesiz mevduatla birlikte", "Alacak senetleri hesabında; dönem sonunda reeskonta tabi tutulur", "108 Diğer Hazır Değerler hesabında; dönem sonunda tasarruf değeriyle değerlenir", "Nazım hesaplarda; tahsil edilinceye kadar bilanço dışında"],
      d: 2,
      a: "İleri tarihli çekler TTK'daki keşide tarihi hükmüne uymadığı ve **özün önceliği** kavramına aykırı olduğu için 101'de izlenemez; alınanlar **alacak senetleri**, verilenler **borç senetleri** hesabında izlenir ve dönem sonunda **reeskonta** tabi tutulur.",
      k: "1016 resmi not s. 22"
    },
    {
      s: "Bankanın işletmenin cari hesabına 200.000 TL faiz tahakkuk ettirdiği ve %15 vergi kestiği durumda **193 Peşin Ödenen Vergiler ve Fonlar** hesabına borç kaydedilecek tutar nedir?",
      c: ["15.000 TL", "185.000 TL", "170.000 TL", "200.000 TL", "30.000 TL"],
      d: 4,
      a: "Faizin tamamı (200.000) **102 Bankalar** borç / **642 Faiz Gelirleri** alacak kaydedilir; kesilen vergi 200.000 × %15 = **30.000 TL** **193 Peşin Ödenen Vergiler ve Fonlar** borç / **102 Bankalar** alacak kaydedilir.",
      k: "1016 resmi not s. 24"
    },
    {
      s: "Aşağıdakilerden hangisi **108 Diğer Hazır Değerler** hesabında izlenir?",
      c: ["Vadesi gelmiş kuponlar ve pullar", "Geçici olarak elde tutulan hisse senetleri", "İleri tarihli alınan çekler", "Satıcılara verilen avanslar", "Kamu kesimi tahvilleri"],
      d: 0,
      a: "**108 Diğer Hazır Değerler**, nitelikleri itibarıyla hazır değer sayılan **pullar**, **vadesi gelmiş kuponlar** ve tahsil edilecek banka ve posta havaleleri (**yoldaki paralar**) gibi değerleri kapsar.",
      k: "1016 resmi not s. 20"
    },
    {
      s: "Alış fiyatı 12 TL olan 5.000 adet hisse senedi adedi 15 TL'den satılmıştır. Kaydedilecek **645 Menkul Kıymet Satış Kârları** tutarı ne kadardır? (Komisyon ayrıca gider yazılmaktadır.)",
      c: ["60.000 TL", "75.000 TL", "15.000 TL", "3.000 TL", "135.000 TL"],
      d: 2,
      a: "110 Hisse Senetleri **alış bedeliyle** (5.000 × 12 = 60.000) alacaklandırılır; satış bedeli 5.000 × 15 = 75.000'dir. Aradaki **15.000 TL** **645 Menkul Kıymet Satış Kârları** hesabına alacak yazılır; komisyon **653 Komisyon Giderleri**'ne borç kaydedilir.",
      k: "1016 resmi not s. 26"
    },
    {
      s: "Menkul kıymetlerin borsa değerinde sürekli bir düşüş saptandığında yapılacak dönem sonu kaydı hangisidir?",
      c: ["119 Menkul Kıymetler Değer Düşüklüğü Karşılığı borç / 654 Karşılık Giderleri alacak (iptal kaydı)", "Kayıt yapılmaz; değer düşüklüğü yalnız dipnotta açıklanır", "110 Hisse Senetleri borç / 644 Konusu Kalmayan Karşılıklar alacak", "645 Menkul Kıymet Satış Kârları borç / 110 Hisse Senetleri alacak", "654 Karşılık Giderleri borç / 119 Menkul Kıymetler Değer Düşüklüğü Karşılığı alacak"],
      d: 4,
      a: "Değer düşüklüğü için **654 Karşılık Giderleri** borç, **119 Menkul Kıymetler Değer Düşüklüğü Karşılığı** alacak kaydedilir. Menkul kıymet elden çıkarılınca veya düşüklük gerçekleşmezse karşılık **644 Konusu Kalmayan Karşılıklar**'a aktarılır.",
      k: "1016 resmi not s. 25, 29"
    }
  ]
});
