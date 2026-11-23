SPL.gun("1007", 3, {
  okuma: `
## Bugünün haritası
Finansal planlamanın ikinci aracı **proforma (tahmini) gelir tablosu ve bilançodur**. Bugün tabloların hangi sırayla hazırlandığını, **dengeleyici kalemleri** ve her bilanço kaleminin nasıl tahmin edildiğini göreceğiz. Yarın aynı işi kısa yoldan yapan **satışların yüzdesi yöntemine** geçeceğiz.

1. Proforma tabloların mantığı ve **hazırlama sırası**
2. **Dengeleyici hesaplar**: kasa ve kısa vadeli banka borcu
3. Proforma gelir tablosu: **SMM** ve giderlerin tahmini
4. Aktif kalemler: **kasa, alacaklar, stoklar, bağlı değerler, sabit varlıklar**
5. Pasif kalemler: **ticari borçlar**, diğer borçlar, **özsermaye**
6. Çözümlü örnek

---

## 1. Proforma tabloların mantığı
Proforma tablolar nakit bütçesine göre **daha geniş kapsamlıdır**; yalnızca para giriş ve çıkışlarını dikkate almaz.

> [!ezber] **Hazırlama sırası:** önce **satışlar** tahmin edilir → önce **gelir tablosu** düzenlenir → bulunan **vergi sonrası net kâr** (dağıtılmayan kısmı) dönem başı bilançosundaki **özvarlığa** eklenir → sonra bilanço kalemleri tahmin edilir.

## 2. Dengeleyici hesaplar
Bilanço kalemleri tahmin edilirken iki kalem **boş bırakılır**: aktifte **Kasa**, pasifte **Kısa Vadeli Banka Borçları**. Bu iki kalem, aktif ve pasif toplamlarını **dengelemek** için kullanılır.

| Sonuç | Anlamı | Denge nasıl sağlanır? |
|---|---|---|
| **Toplam Aktifler > Toplam Pasifler** | Öngörülen kaynaklar yatırımlara **yetmiyor** | Fark **kısa vadeli banka borcu** olarak pasife yazılır = **fon ihtiyacı** |
| **Toplam Aktifler < Toplam Pasifler** | Kaynaklar yatırımlardan **fazla** | Fark **kasa** hesabına eklenir |

- Normal koşullarda proforma bilançoda bulunan fon ihtiyacı, aynı dönem için **nakit bütçesiyle** bulunan nakit ihtiyacına **eşit** olmalıdır.

## 3. Proforma gelir tablosu
| Kalem | Nasıl tahmin edilir? |
|---|---|
| **Satışlar** | Veri |
| − **Satılan malın maliyeti (SMM)** | a) SMM/Satışlar oranı, b) SMM tablosu |
| = Brüt satış kârı | |
| − **Satış ve yönetim giderleri** | **Satışların yüzdesi** |
| = **FVÖK (faaliyet kârı)** | |
| − **Finansman giderleri** | **Satışların yüzdesi** |
| = Vergi öncesi kâr − Vergi = **Vergi sonrası kâr** | Vergi, bilançoda **cari borçlar** arasında görünür |
| − Kâr payı = **Dağıtılmayan kârlara ilave** | Veri |

**SMM'nin tahmini: iki yol**
- **a) SMM/Satışlar oranı:** şirket **istikrarlıysa** ve geçmişte (ör. son 5 yıl) bu oran **nispeten sabit** seyrettiyse, oran gelecek yıla uygulanır.
- **b) SMM tablosu hazırlamak:** faaliyetler **istikrarlı değilse**, büyük dalgalanmalar varsa ve SMM ile satışlar arasında belirli bir ilişki **yoksa**, SMM diğer bütçe rakamlarından ayrıntılı tahmin edilir.

**İmalat işletmesinde maliyetin üç unsuru:** **direkt hammadde**, **direkt işçilik**, **genel imalat giderleri** (enerji, malzeme vb.).

| İmalat işletmesinde SMM tablosu | Ticaret işletmesinde SMM tablosu |
|---|---|
| Hammadde + Direkt işçilik + Genel imalat giderleri | + Dönem başı stok |
| + Yarı mamul stoku (DB) − Yarı mamul stoku (DS) | + Dönem içi alışlar |
| = **İmal edilen mallar maliyeti** | − Dönem sonu stok |
| + Mamul stoku (DB) − Mamul stoku (DS) = **SMM** | = **SMM** |

## 4. Aktif kalemlerin tahmini
**Kasa:** dengeleyici hesaptır. Ancak şirketin **minimum kasa** şartı varsa kasaya **başlangıçta minimum kasa** yazılır; çünkü kasa hiçbir zaman minimum kasadan az olamaz.

**Alacaklar: iki yol**
- **a) Ortalama tahsil süresiyle:** faaliyetler **mevsimlik değilse** ve alacaklar yıldan yıla büyük dalgalanmıyorsa kullanılır.

> [!ezber] **A.O.T.S. = (Alacaklar × 360) / Kredili Satışlar (net)**. Örnek: A.O.T.S. 60 gün, satışlar 360 milyon TL → Alacaklar = 60 × 360.000.000 / 360 = **60.000.000 TL**.

- **b) Hareket tablosuyla:** Dönem başı alacaklar (**fiili bilançodan**) + Kredili satışlar − Dönem içi tahsilat (**nakit bütçesinden**) = **Dönem sonu alacaklar**.

**Stoklar: iki yol**
- **a) Stok dönme çabukluğuyla:** **S.D.Ç. = SMM / [(DB Stok + DS Stok) / 2]**. S.D.Ç. veri, SMM gelir tablosundan, DB stok bilançodan alınır; **DS stok bulunur**.
- **b) Hareket tablosuyla:** Dönem başı stok + Üretim − SMM = **Dönem sonu stok**.

**Bağlı değerler:** politikada önemli bir değişiklik yoksa **değişmez**; ya **sabit kaldığı** varsayılır ya da **satışlardaki artış oranında** artırılır.

**Sabit varlıklar**
| Eklenti varsa | | Eklenti yoksa | |
|---|---|---|---|
| SV (brüt) | 100 | Dönem başı SV (net) | 75 |
| + Yeni SV | 10 | − Amortisman gideri | −2 |
| = Dönem sonu SV (brüt) | 110 | = **Dönem sonu SV (net)** | **73** |
| Birikmiş amortisman | −25 | | |
| − Yıllık amortisman | −2 | | |
| = Dönem sonu birikmiş amortisman | −27 | | |
| = **Dönem sonu net SV** | **83** | | |

## 5. Pasif kalemlerin tahmini
- **Banka borcu:** dengeleyici hesap olarak **başta boş bırakılır**.
- **Ticari borçlar:** satışlarla paralel seyreder. Banka kredisi gibi **pazarlığa tabi** değil, **kendiliğinden oluşan** bir fon kaynağıdır. Satışların yüzdesi olarak ya da **borç ödeme süresi × günlük kredili alım** ile tahmin edilir.

> [!ezber] **Borç Ödeme Süresi = (Ticari Borç × 360) / Yıllık Kredili Satın Almalar**

- **Diğer kısa vadeli borçlar:** ya **sabit** varsayılır ya da dönem başı bakiyeye o döneme ait **ödenecek vergiler, temettüler** ve **uzun vadeli borcun cari yıl taksiti** eklenir.
- **Orta ve uzun vadeli borçlar:** yeni borç alınacaksa dönem başı bakiyeye eklenir; **izleyen yıl** yapılacak anapara taksitleri bu tutardan düşülüp **cari pasiflere** aktarılır.
- **Özsermaye:** Dönem başı özsermaye + **Dağıtılmayan kârlar** = **Dönem sonu özsermaye**. Yeni pay ihraç edilecekse **tahsil edilen kısım** ödenmiş sermayeye eklenir. Özsermaye hem **VSNK** hem de artırılan sermayenin **ödenmiş kısmı** kadar değişir.

## 6. Çözümlü örnek (bin TL)
ABC A.Ş.'nin satışları 8.000'den **%25 artışla 10.000**'e çıkacak. SMM satışların %60'ı, pazarlama-yönetim gideri ayda 100, amortisman ayda 140, faiz yıllık 120, vergi %40, kâr dağıtım oranı %50.

| Proforma gelir tablosu | |
|---|---|
| Satışlar | 10.000 |
| SMM (%60) | −6.000 |
| Brüt kâr | 4.000 |
| Yönetim giderleri (100 × 12) | −1.200 |
| Amortisman (140 × 12) | −1.680 |
| **FVÖK** | **1.120** |
| Faiz | −120 |
| Vergi öncesi kâr | 1.000 |
| Vergi (%40) | −400 |
| **Net kâr** | **600** |
| Temettü (%50) | −300 |
| **Dağıtılmayan kârlara ilave** | **300** |

Aktif kalemler satışlarla %25 artınca proforma aktif toplamı **6.250**; pasifler (dağıtılmayan kârlar 760 + 300 = 1.060 dâhil) **6.060** olur. Aradaki **190** bin TL **ek finansman ihtiyacıdır**.
`,
  sorular: [
    {
      s: "Proforma tabloların hazırlanma sırası ile ilgili hangisi doğrudur?",
      c: ["Önce bilanço düzenlenir, sonra gelir tablosu bilançodaki kalemlerden türetilir", "Önce satışlar tahmin edilir, gelir tablosu düzenlenir ve kâr özvarlığa eklenir", "Önce dengeleyici kalemler olan kasa ve banka borcu ayrıntılı olarak tahmin edilir", "Önce nakit bütçesi hazırlanır; proforma tablolara ayrıca gerek kalmaz", "Önce özsermaye, sonra borçlar, en son da satışlar tahmin edilir"],
      d: 1,
      a: "Proforma tabloların hazırlanmasına **satışlarla** başlanır ve **ilk önce gelir tablosu** düzenlenir. Bulunan **vergi sonrası net kâr** dönem başı özvarlığa eklenir; ardından bilanço kalemlerinin tahminine geçilir.",
      k: "1007 resmi not s. 10"
    },
    {
      s: "Proforma bilançonun hazırlanmasında **dengeleyici** olarak başta boş bırakılan iki kalem hangileridir?",
      c: ["Alacaklar ve ticari borçlar", "Stoklar ve uzun vadeli borçlar", "Kasa ve kısa vadeli banka borçları", "Sabit varlıklar ve ödenmiş sermaye", "Bağlı değerler ve yedek akçeler"],
      d: 2,
      a: "Aktifte **Kasa**, pasifte **Kısa Vadeli Banka Borçları** başta boş bırakılır; çünkü bu iki kalem proforma bilançoda aktif ve pasif toplamlarının **dengelenmesinde** kullanılır.",
      k: "1007 resmi not s. 10"
    },
    {
      s: "Proforma bilançoda tahminler yapıldıktan sonra **Toplam Aktifler > Toplam Pasifler** çıkarsa ne yapılır?",
      c: ["Fark kasa hesabına eklenir ve fon fazlası olarak gösterilir", "Fark özsermayeden düşülür ve ödenmiş sermaye azaltılır", "Fark stoklardan düşülerek aktif ve pasif dengelenir", "Fark ticari alacaklara eklenir ve tahsil süresi uzatılır", "Fark kısa vadeli banka borcu olarak yazılır; fon ihtiyacıdır"],
      d: 4,
      a: "Aktifler pasiflerden büyükse öngörülen kaynaklar yatırımlara **yetmiyor** demektir; fark **kısa vadeli banka borcu** olarak pasife yazılır ve **fon ihtiyacını** yansıtır. Aktifler pasiflerden küçükse fark **kasaya** eklenir.",
      k: "1007 resmi not s. 10-11"
    },
    {
      s: "Faaliyetleri **istikrarlı olmayan** ve SMM ile satışları arasında belirli bir ilişki bulunmayan bir şirkette proforma gelir tablosu için SMM nasıl tahmin edilir?",
      c: ["SMM tablosu hazırlanarak, diğer bütçe rakamlarından ayrıntılı tahminle", "Son beş yılın SMM/Satışlar oranlarının aritmetik ortalaması kullanılarak", "SMM'nin geçen yılki tutarla aynı kalacağı varsayılarak", "SMM satışların sabit %50'si kabul edilerek", "SMM, finansman giderlerinin belirli bir yüzdesi olarak"],
      d: 0,
      a: "SMM/Satışlar oranı ancak **istikrarlı** şirketlerde ve oran geçmişte **nispeten sabitse** kullanılır. Faaliyetlerde büyük dalgalanmalar varsa ve belirli bir ilişki yoksa **SMM tablosu** hazırlanır; maliyetler hammadde, işçilik ve genel imalat giderleri bütçelerinden derlenir.",
      k: "1007 resmi not s. 11"
    },
    {
      s: "Bir şirketin ağırlıklı ortalama tahsil süresi (A.O.T.S.) **45 gün** ve yıllık net kredili satışları **720.000.000 TL**'dir (1 yıl = 360 gün). Proforma bilançoda yer alacak **alacaklar** ne kadardır?",
      c: ["90.000.000 TL", "45.000.000 TL", "72.000.000 TL", "16.000.000 TL", "120.000.000 TL"],
      d: 0,
      a: "**A.O.T.S. = (Alacaklar × 360) / Kredili Satışlar** → 45 = (Alacaklar × 360) / 720.000.000 → Alacaklar = 45 × 720.000.000 / 360 = **90.000.000 TL**.",
      k: "1007 resmi not s. 13"
    },
    {
      s: "Bir şirketin dönem başı stoku 100.000 TL, proforma gelir tablosundaki SMM 1.320.000 TL ve öngörülen **stok dönme çabukluğu 12** kezdir. Proforma bilançoda yer alacak **dönem sonu stok** ne kadardır?",
      c: ["120.000 TL", "220.000 TL", "110.000 TL", "100.000 TL", "132.000 TL"],
      d: 0,
      a: "**S.D.Ç. = SMM / Ortalama stok** → 12 = 1.320.000 / Ortalama stok → Ortalama stok = **110.000**. (100.000 + DS stok) / 2 = 110.000 → **DS stok = 120.000 TL**.",
      k: "1007 resmi not s. 13, 33"
    },
    {
      s: "Bir şirketin brüt sabit varlıkları 500 bin TL, birikmiş amortismanı 150 bin TL'dir. Dönem içinde 60 bin TL'lik yeni sabit varlık alınacak ve dönemin amortisman gideri 40 bin TL olacaktır. Proforma bilançodaki **net sabit varlıklar** ne kadardır?",
      c: ["370 bin TL", "410 bin TL", "350 bin TL", "390 bin TL", "560 bin TL"],
      d: 0,
      a: "Dönem sonu brüt SV = 500 + 60 = **560**. Dönem sonu birikmiş amortisman = 150 + 40 = **190**. Net SV = 560 − 190 = **370 bin TL**.",
      k: "1007 resmi not s. 14"
    },
    {
      s: "Proforma bilançoda **ticari borçlar** ile ilgili hangisi doğrudur?",
      c: ["Banka kredileri gibi faiz ve vadesi pazarlığa tabi bir fon kaynağıdır", "Satışlarla hiçbir ilişkisi yoktur, her zaman sabit kaldığı varsayılır", "Kasa gibi dengeleyici hesap olarak başta boş bırakılır", "Satışlarla paralel seyreden, kendiliğinden oluşan bir kaynaktır", "Yalnızca orta ve uzun vadeli borçlar içinde gösterilir"],
      d: 3,
      a: "Ticari borçlar satışlarla paralellik gösterir; banka kredileri gibi **pazarlığa tabi değil**, **kendiliğinden oluşan** bir fon kaynağıdır. Satışların yüzdesi olarak veya **borç ödeme süresi = (Ticari borç × 360) / Yıllık kredili alımlar** ilişkisiyle tahmin edilir.",
      k: "1007 resmi not s. 14"
    }
  ]
});
