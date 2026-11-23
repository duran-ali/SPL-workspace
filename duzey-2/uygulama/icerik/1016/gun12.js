SPL.gun("1016", 12, {
  okuma: `
## Bugünün haritası
Önce duran varlıkların son hesaplarını kapatıp **Kısa Vadeli Yabancı Kaynaklar** sınıfına geçiyoruz. Bugünün konusu **30 Mali Borçlar**: banka kredileri ve faiz tahakkuku, uzun vadeli kredilerin cari taksitleri, tahvil taksitleri, **finansman bonoları** ve **menkul kıymet ihraç farkları**.

1. **29** grubunun kalan hesapları
2. Kısa vadeli yabancı kaynaklar ve hesap grupları
3. **30 Mali Borçlar** hesapları
4. **300 Banka Kredileri**: işleyiş ve faiz tahakkuku
5. **303** ve **304**: uzun vadeli borçların cari kısmı
6. **305 Çıkarılmış Bonolar ve Senetler**, **306**
7. **308 Menkul Kıymetler İhraç Farkları (−)**

---

## 1. 29 grubunun kalan hesapları
| Hesap | İçerik |
|---|---|
| **294 Elden Çıkarılacak Stoklar ve Maddi Duran Varlıklar** | Kullanılma ve satış olanaklarını **yitiren** stok ve duran varlıklar |
| **295 Peşin Ödenen Vergiler ve Fonlar** | İzleyen yıldan **sonraki yıllarda** indirilebilecek peşin vergiler; süre bir yılın altına inince **193**'e aktarılır |
| **298 Stok Değer Düşüklüğü Karşılığı (−)** | Gelecek yıllar ihtiyacı ve elden çıkarılacak stoklar için |
| **299 Birikmiş Amortismanlar (−)** | Bu gruptaki amortismana tabi varlıklar için |

## 2. Kısa vadeli yabancı kaynaklar
> [!ezber] **Kısa vadeli yabancı kaynaklar:** işletmenin **bir yıla kadar** veya normal faaliyet dönemi sonuna kadar ödenecek yabancı kaynakları. Bu ayrım MSUGT'nin yanında **TMS 1** tarafından da kabul edilir.

**Gruplar:** **30** Mali Borçlar, **32** Ticari Borçlar, **33** Diğer Borçlar, **34** Alınan Avanslar, **35** Yıllara Yaygın İnşaat ve Onarım Hakedişleri, **36** Ödenecek Vergi ve Diğer Yükümlülükler, **37** Borç ve Gider Karşılıkları, **38** Gelecek Aylara Ait Gelirler ve Gider Tahakkukları, **39** Diğer Kısa Vadeli Yabancı Kaynaklar.

## 3. 30 Mali Borçlar
Kredi kurumlarından veya işletmenin ihraç ettiği finansal araçlardan sağlanan kaynaklar. Mali borçlar **hem kısa hem uzun vadeli** kaynaklarda yer alır.

| Hesap | İçerik |
|---|---|
| **300 Banka Kredileri** | Banka ve finansman kuruluşlarından **kısa vadeli nakdi** krediler |
| **301 Finansal Kiralama İşlemlerinden Borçlar** | Kiracının vadesi **1 yılı geçmeyen** kiralama borçları |
| **302 Ertelenmiş Finansal Kiralama Borçlanma Maliyetleri (−)** | Kiralama borcu ile kira ödemelerinin **bugünkü değeri** arasındaki fark |
| **303 Uzun Vadeli Kredilerin Anapara Taksitleri ve Faizleri** | Uzun vadeli kredilerin **bir yıl içinde** ödenecek taksit ve faizleri |
| **304 Tahvil Anapara Borç Taksit ve Faizleri** | Tahvillerin bir yıl içinde ödenecek taksit ve faizleri |
| **305 Çıkarılmış Bonolar ve Senetler** | **Finansman bonoları**, banka garantili bonolar gibi kısa vadeli araçlarla sağlanan fonlar |
| **306 Çıkarılmış Diğer Menkul Kıymetler** | Bono ve senet dışındakiler (ör. **kâr-zarar ortaklığı belgesi**) |
| **308 Menkul Kıymetler İhraç Farkları (−)** | **İskontolu** ihraçta nominal değer ile satış fiyatı farkının **gelecek döneme ait** kısmı |
| **309 Diğer Mali Borçlar** | Diğerlerine girmeyenler |

## 4. 300 Banka Kredileri
| **Alacaklanır** | **Borçlanır** |
|---|---|
| Kredinin nakden veya hesaben **çekilmesi** | Nakden veya hesaben **ödeme** |
| Faiz ve komisyonların **anaparaya eklenmesi** | Teminatın nakde çevrilmesiyle bankanın **tahsilatı** |
| Yabancı paralı kredide **kur artışı** (değerleme) | Avans ve cari hesap kredilerinin ödenmesi; kurda **azalma** |

- Teminata verilen senetler **121 (Teminattaki Senetler)** yardımcı hesabında ya da **nazım hesaplarda** izlenebilir.
- TL krediler **kayıtlı değerle**, yabancı paralı krediler **değerleme günü kuruyla** değerlenir. Kur farkı: **780 Finansman Giderleri** borç / **300** alacak.

> [!ezber] **Faiz tahakkuku (dönemsellik):** avans şeklindeki kredilerde, alış tarihi ile değerleme günü arasındaki faiz **780 Finansman Giderleri** borç / **381 Gider Tahakkukları** alacak kaydedilir. Formül: **Faiz = Anapara × Gün × Oran / 36.500**.

**Örnek:** 1 Kasım'da %40 faizli, 3 ay vadeli 200.000 TL kredi.
- 31 Aralık: 200.000 × 61 × 40 / 36.500 = **13.369,86** → 780 borç / 381 alacak
- 31 Ocak (ödeme): yalnız kalan **31 günün** faizi (6.794,52) gider yazılır; 381 kapatılır; 300 ve 381 ve 780 borç / Kasa 220.164,38 alacak.

## 5. Uzun vadeli borçların cari kısmı
- **303:** uzun vadeli kredilerin bilanço tarihinden itibaren **bir yıl içinde** ödenecek taksitleri, vadesi bir yılın altına düşen krediler ve tahakkuk etmiş faizler. Dönem sonu: **400 Banka Kredileri** borç / **303** alacak.
- **304:** tahvillerin bir yıl içinde ödenecek taksitleri: **405 Çıkarılmış Tahviller** borç / **304** alacak.
- Tahvil faizi tahakkukunda stopaj: örnek 2.500 TL faiz → 780 borç 2.500; 381 alacak 2.125 ve **360 Ödenecek Vergi ve Fonlar** 375 (%15).

## 6. 305 ve 306
- Kısa vadeli menkul kıymetler ihraç edilince **nominal bedelle** 305'e alacak; ödenince borç.
- **Örnek:** 1 Kasım'da 3 ay vadeli %60 faizli 100.000 TL finansman bonosu satıldı → 102 borç / 305 alacak. Dönem sonu faizi: 100.000 × 61 × 60 / 36.500 = **10.027** (780 / 381).
- **306 örneği:** 30.000 TL nominal kâr-zarar ortaklığı belgesi 32.000 TL'ye ihraç → 100 Kasa 32.000 borç / 306: 30.000 ve **529 Diğer Sermaye Yedekleri 2.000** alacak (başabaşın üstündeki fark).

## 7. 308 Menkul Kıymetler İhraç Farkları (−)
> [!dikkat] 308 **aktif karakterli** bir hesaptır ama pasifte **30 Mali Borçlar** grubunun altında **eksi değerle** yer alır; amaç mali borçların **net tutarını** göstermektir.

- İskontolu ihraçta fark 308'e **borç**; vadeye paralel itfa edilen kısım **780 Finansman Giderleri** borç / **308** alacak.

**Örnek:** 1 Kasım'da 3 ay vadeli 100.000 TL'lik bono **70.000 TL**'ye satıldı.
| Tarih | Borç | Alacak |
|---|---|---|
| Satış | 102 Bankalar 70.000; 308: 30.000 | 305: 100.000 |
| Dönem sonu (2 ay) | 780: 20.000 | 308: 20.000 |
| Bilanço | 305: 100.000; 308: (10.000) → **net mali borç 90.000** | |
`,
  sorular: [
    {
      s: "Kısa vadeli yabancı kaynaklar ile ilgili hangisi doğrudur?",
      c: ["Bir yıl veya normal faaliyet dönemi içinde ödenecek yabancı kaynaklardır", "İşletmenin bir yıldan sonra ödenecek borçlarıdır ve 4 numaralı sınıfta izlenir", "Yalnızca banka kredilerinden ve finansal kiralama borçlarından oluşan gruptur", "Özkaynakların bir alt grubudur ve ortaklara olan borçları kapsar", "Tekdüzen sistemde 4 numaralı sınıftır ve vadesi bir yılı aşan borçları içerir"],
      d: 0,
      a: "Kısa vadeli yabancı kaynaklar, işletmenin **bir yıla kadar** veya normal faaliyet dönemi sonuna kadar ödenecek yabancı kaynaklarıdır; MSUGT'nin bu ayrımı **TMS 1** tarafından da kabul edilir. Tekdüzen sistemde **3** numaralı sınıftır.",
      k: "1016 resmi not s. 92"
    },
    {
      s: "Aşağıdakilerden hangisi **300 Banka Kredileri** hesabının **alacaklandığı** durumlardan biridir?",
      c: ["Kredinin nakden ödenmesi", "Teminatın nakde çevrilerek bankanın alacağını tahsil etmesi", "Faiz ve komisyonların kredinin anaparasına eklenmesi", "Yabancı paralı kredide kurun düşmesi", "Avans şeklindeki kredinin vade sonunda ödenmesi"],
      d: 2,
      a: "Banka kredileri hesabı kredinin **çekilmesi**, faiz ve komisyonların **anaparaya eklenmesi** ve yabancı paralı kredide **kur artışı** durumlarında alacaklanır. Ödemeler, teminatla tahsilat ve kur azalışı hesabı **borçlandırır**.",
      k: "1016 resmi not s. 94"
    },
    {
      s: "1 Kasım'da alınan, %36 faizli 365.000 TL'lik avans kredisi için 31 Aralık'ta (61 gün) yapılacak **faiz tahakkuku** ne kadardır ve hangi hesaba alacak yazılır?",
      c: ["21.960 TL; 381 Gider Tahakkukları", "21.960 TL; 300 Banka Kredileri", "10.800 TL; 381 Gider Tahakkukları", "131.400 TL; 780 Finansman Giderleri", "36.000 TL; 381 Gider Tahakkukları"],
      d: 0,
      a: "Faiz = Anapara × Gün × Oran / 36.500 = 365.000 × 61 × 36 / 36.500 = **21.960 TL**. Dönemsellik gereği **780 Finansman Giderleri** borç, **381 Gider Tahakkukları** alacak kaydedilir.",
      k: "1016 resmi not s. 95-96"
    },
    {
      s: "Uzun vadeli bir banka kredisinin **bilanço tarihinden itibaren bir yıl içinde ödenecek taksiti** dönem sonunda nasıl kaydedilir?",
      c: ["303 Uzun Vadeli Kredilerin Anapara Taksitleri ve Faizleri borç / 400 Banka Kredileri alacak (geri aktarma)", "Kayıt yapılmaz; vadesi geldiğinde ödeme kaydı yeterlidir", "300 Banka Kredileri borç / 400 Banka Kredileri alacak", "780 Finansman Giderleri borç / 303 Uzun Vadeli Kredilerin Anapara Taksitleri alacak", "400 Banka Kredileri borç / 303 Uzun Vadeli Kredilerin Anapara Taksitleri ve Faizleri alacak"],
      d: 4,
      a: "Uzun vadeli kredinin bir yıl içinde ödenecek taksiti kısa vadeye aktarılır: **400 Banka Kredileri** borç / **303 Uzun Vadeli Kredilerin Anapara Taksitleri ve Faizleri** alacak.",
      k: "1016 resmi not s. 97-98"
    },
    {
      s: "İşletmenin ihraç ettiği **finansman bonoları** hangi hesapta izlenir?",
      c: ["305 Çıkarılmış Bonolar ve Senetler", "304 Tahvil Anapara Borç Taksit ve Faizleri", "321 Borç Senetleri", "405 Çıkarılmış Tahviller", "336 Diğer Çeşitli Borçlar"],
      d: 0,
      a: "**Finansman bonoları**, banka garantili bonolar ve varlığa dayalı menkul kıymetler gibi kısa vadeli para ve sermaye piyasası araçlarıyla sağlanan fonlar **305 Çıkarılmış Bonolar ve Senetler**'de izlenir.",
      k: "1016 resmi not s. 93, 99"
    },
    {
      s: "30.000 TL nominal bedelli kâr-zarar ortaklığı belgesi 32.000 TL'ye nakden ihraç edilmiştir. **2.000 TL'lik fark** hangi hesapta muhasebeleştirilir?",
      c: ["306 Çıkarılmış Diğer Menkul Kıymetler", "649 Diğer Olağan Gelir ve Kârlar", "529 Diğer Sermaye Yedekleri", "308 Menkul Kıymetler İhraç Farkları", "642 Faiz Gelirleri"],
      d: 2,
      a: "Belge **306**'ya nominal bedelle (30.000) alacak yazılır; başabaşın üzerindeki satıştan doğan **2.000 TL** pasifte **529 Diğer Sermaye Yedekleri** hesabında izlenir.",
      k: "1016 resmi not s. 100"
    },
    {
      s: "**308 Menkul Kıymetler İhraç Farkları** hesabının bilançoda gösterilişi ile ilgili hangisi doğrudur?",
      c: ["Aktifte dönen varlıklar arasında, peşin ödenmiş giderler ve gelir tahakkuklarıyla birlikte gösterilir", "Pasif karakterlidir ve özkaynaklarda geçmiş yıllar zararları içinde yer alır", "Aktif karakterli olmakla birlikte pasifte 30 Mali Borçlar grubunun altında eksi değerle yer alır", "Gelir tablosunda faiz geliri olarak, finansman gelirleri arasında gösterilir", "Nazım hesaplarda izlenir ve bilançoda hiçbir şekilde gösterilmez"],
      d: 2,
      a: "308 **aktif karakterli** bir hesaptır; ancak pasifte **30 Mali Borçlar** grubunun altında **eksi değerle** yer alır. Amaç, mali borçların **net tutarının** görünmesidir.",
      k: "1016 resmi not s. 101"
    },
    {
      s: "100.000 TL nominal değerli 3 ay vadeli bono 1 Kasım'da 70.000 TL'ye satılmıştır. Dönem sonunda 2 aylık itfa yapıldıktan sonra bilançoda görünecek **net mali borç** ne kadardır?",
      c: ["100.000 TL", "70.000 TL", "80.000 TL", "90.000 TL", "120.000 TL"],
      d: 3,
      a: "İhraç farkı 30.000 TL'dir; dönem sonunda 2 aylık kısmı (**20.000**) 780'e itfa edilir, 308'de **10.000** kalır. Bilançoda 305: 100.000 − 308: 10.000 = **90.000 TL** net mali borç görünür.",
      k: "1016 resmi not s. 101-102"
    }
  ]
});
