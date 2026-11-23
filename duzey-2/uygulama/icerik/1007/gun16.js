SPL.gun("1007", 16, {
  okuma: `
## Bugünün haritası
İşletme sermayesi bölümünün son günü: **stok yönetimi**. Ne kadar sipariş verilmeli ve ne zaman? Bugün **ekonomik sipariş miktarı (ESM)** formülünü, **sipariş noktasını** ve **emniyet stokunu** öğreneceğiz. ESM, sınavın en kolay puan getiren formüllerinden biridir.

1. Stok türleri ve onları belirleyen etkenler
2. Stok tutmanın nedenleri
3. İki temel sorun: **ne kadar** ve **ne zaman**?
4. **Toplam stok maliyeti** ve **ekonomik sipariş miktarı**
5. Modelin varsayımları
6. **Sipariş noktası** ve **emniyet stoku**
7. Stok yatırımı hesapları

---

## 1. Stok türleri
| Stok | Belirleyen etkenler |
|---|---|
| **Hammadde stoku** | Üretim düzeyi, üretimin **mevsimlik** olup olmaması, **tedarik kaynaklarının** sağlamlığı, tedarik-üretim faaliyetlerinin **etkinliği** |
| **Yarı mamul stoku** | **Üretim teknolojisi** ve **üretim sürecinin uzunluğu**; süreç kısaltılarak azaltılabilir |
| **Mamul stoku** | **Üretim ve satışların** fonksiyonudur; üretim teknolojisi ve **satış politikası** etkiler |

Bu etkenlerin dışında stok yatırımını belirleyen önemli bir faktör de **iş kolunun özelliğidir**.

## 2. Stok tutmanın nedenleri
> [!ezber] **Hammadde stoku**, **satın alma** ile **üretim** fonksiyonlarını birbirinden **bağımsız** kılar; tedarikteki darboğazların üretimi aksatmasını önler. **Mamul stoku**, **üretim** ile **satış** fonksiyonlarını ayırır; şirket üretimden bağımsız olarak doğrudan stoktan satış yapabilir.

## 3. İki temel sorun
Stoklara yapılan yatırım bir şekilde finanse edilmelidir; finansal yönetim açısından önemli olan **optimum stok yatırımını** belirlemektir. İki temel sorun:
1. **Sipariş miktarı** ne olacak?
2. **Ne zaman** (hangi noktada) yeniden sipariş verilecek?

## 4. Ekonomik sipariş miktarı
**Sipariş miktarı sorunu:** tahmini talep, **elde bulundurma giderleri** ve **sipariş giderleri** dikkate alınarak optimum sipariş miktarının belirlenmesi. Optimum, **stoklarla ilgili toplam maliyetin minimum** olduğu noktadır.

- Her sipariş Q birim; stok Q'dan sıfıra iner, **ortalama stok = Q/2**.
- **Toplam elde bulundurma gideri (TEG) = (Q/2) × Ch**
- **Sipariş sayısı = S/Q**; **Toplam sipariş gideri (TSG) = (S/Q) × Cp**
- **Toplam maliyet (TM) = (Q/2) × Ch + (S/Q) × Cp**

> [!ezber] **Ekonomik Sipariş Miktarı: Q* = √(2 × S × Cp / Ch)**. S = dönemlik talep (kullanım), **Cp = sipariş başına sipariş maliyeti**, **Ch = birim başına elde tutma gideri**. ESM'de toplam elde bulundurma gideri toplam sipariş giderine eşittir.

- Sipariş büyüdükçe elde bulundurma gideri **artar**, sipariş sayısı ve sipariş gideri **azalır**.
- Sipariş maliyeti artarsa ESM **büyür**; elde tutma gideri artarsa ESM **küçülür**.

## 5. Modelin varsayımları
1. **Yıllık talep sabittir.**
2. **Sipariş ve elde bulundurma giderleri sabittir.**
3. Stok yenilemelerinde **gecikme yoktur**.
4. **Birim fiyat sabittir.**

## 6. Sipariş noktası ve emniyet stoku
En tartışmalı varsayımlar **talebin sabit olması** ve **stokların anında yenilenmesidir**:
- Stok kullanımında **beklenmeyen artış** olabilir (talep sabit değildir).
- Yenileme **anında olmaz**, belli bir süre içinde gerçekleşir.

Bu sorunlar **emniyet stoku** bulundurularak çözülür. Emniyet stoku modele girince **sipariş noktası** sorunu doğar: stoklar sıfıra inmeden, **yenileme süresini** ve **beklenmeyen kullanımları** dikkate alarak hangi noktada sipariş verilmelidir? İki husus:
1. **Yenileme süresi stokları** ne olmalı?
2. **Emniyet stoku** ne olmalı?

> [!ezber] **Sipariş noktası = Günlük kullanım × Yenileme süresi (+ emniyet stoku)**. Örnek: Q = 100 birim, yenileme süresi 5 gün, günlük kullanım 10 birim → stok **50 birime** düşünce sipariş verilir; 5 günde 50 birim kullanılır ve tam bittiğinde siparişler gelir.

- Sipariş-yenileme sistemi **rasyonel ve etkinse** yenileme süresi stokları azaltılabilir.
- Yenileme süresi ve talepteki **belirsizlikler** emniyet stokunun miktarını etkiler.
- Emniyet stoku yüksek tutulursa **elde bulundurma giderleri artar**.

> [!dikkat] Emniyet stokunun belirlenmesi de bir **risk-kârlılık** seçimidir: **risk**, stokların tükenip **müşteri kaybı**; **kârlılık** sorunu ise fazla emniyet stoku nedeniyle **maliyetlerin artmasıdır**.

## 7. Çözümlü örnekler
**Kitapçı:** yıllık satış S = 3.000 kopya, Cp = 1.000 TL, Ch = 10 TL
- Q* = √(2 × 3.000 × 1.000 / 10) = √600.000 ≈ **775 kopya**
- TM = (775/2) × 10 + (3.000/775) × 1.000 = 3.875 + 3.871 ≈ **7.746 TL** (iki gider neredeyse eşit)

**Damacana:** aylık talep 20.000, Ch = 100 TL, Cp = 40.000 TL → Q* = √(2 × 20.000 × 40.000 / 100) = √16.000.000 = **4.000**

**Miktar iskontosu:** MFA iki ayda 50.000 kutu satıyor; Cp = 100.000, Ch = 400 → ESM = **5.000**. 10.000'lik siparişte kutu başına 20 TL iskonto:
- Ek elde bulundurma = 400 × (5.000/2) = **1.000.000**; sipariş tasarrufu = (50.000/10.000) × 100.000 = **500.000** → maliyet artışı **500.000**
- İskonto kazancı = 20 × 50.000 = **1.000.000** → net kâr artışı **500.000** → **kabul**

**Stok yatırımı:**
- **Stok dönme çabukluğu = SMM / Ortalama stok.** Satışlar 600.000, brüt kâr marjı %10 → SMM 540.000; SDÇ 6 → ortalama stok = **90.000 TL**
- **Stok elde tutma süresi = Ortalama stok / (SMM / 360).** SMM 480.000, süre 40 gün → ortalama stok = 40 × 480.000 / 360 ≈ **53.333 TL**
`,
  sorular: [
    {
      s: "İmalat şirketlerinin **hammadde stoku** tutmalarının temel nedeni nedir?",
      c: ["Üretim ile satış fonksiyonlarını birbirinden ayırmak", "Satın alma ile üretimi birbirinden bağımsız kılmak", "Stok değerleme farkından vergi avantajı sağlamak", "Mamul fiyatlarını yükseltip piyasayı kontrol etmek", "Alacak tahsil süresini kısaltıp nakit girişini hızlandırmak"],
      d: 1,
      a: "Hammadde stoku **satın alma** ile **üretim** fonksiyonlarını bağımsız kılar; tedarikteki darboğazların üretimi aksatmasını önler. Üretim ile satışı ayıran ise **mamul stokudur**.",
      k: "1007 resmi not s. 68"
    },
    {
      s: "**Yarı mamul stoklarının** miktarı esas olarak neye bağlıdır?",
      c: ["Üretim teknolojisine ve üretim sürecinin uzunluğuna", "Yalnızca şirketin satış politikasına ve kampanyalarına", "Hammadde tedarikçilerinin sayısına ve konumuna", "Şirketin borç oranına ve faiz giderlerine", "Kâr dağıtım politikasına ve ortak sayısına"],
      d: 0,
      a: "Yarı mamul stokları **üretim teknolojisi** ve **üretim sürecinin uzunluğu** ile ilgilidir; üretim süreci kısaltılarak azaltılabilir. Mamul stokları ise üretim ve satışların fonksiyonudur.",
      k: "1007 resmi not s. 68"
    },
    {
      s: "Yıllık talebi **8.000** birim, sipariş başına maliyeti **400 TL** ve birim başına yıllık elde tutma gideri **16 TL** olan bir stok kalemi için **ekonomik sipariş miktarı** kaç birimdir?",
      c: ["400", "200", "632", "800", "1.000"],
      d: 2,
      a: "**Q* = √(2 × S × Cp / Ch)** = √(2 × 8.000 × 400 / 16) = √400.000 ≈ **632 birim**.",
      k: "1007 resmi not s. 69"
    },
    {
      s: "Ekonomik sipariş miktarı modelinde **toplam stok maliyeti** hangi iki kalemden oluşur?",
      c: ["Satın alma bedeli ile katma değer vergisi", "Direkt hammadde ile direkt işçilik maliyeti", "Amortisman gideri ile finansman (faiz) gideri", "Elde bulundurma giderleri ile sipariş giderleri", "Emniyet stoku ile yenileme süresi stoku tutarı"],
      d: 3,
      a: "**TM = Toplam elde bulundurma giderleri (Q/2 × Ch) + Toplam sipariş giderleri (S/Q × Cp)**. Optimum sipariş miktarı bu toplamın minimum olduğu noktadır.",
      k: "1007 resmi not s. 69"
    },
    {
      s: "Aşağıdakilerden hangisi ekonomik sipariş miktarı modelinin **varsayımlarından biri değildir**?",
      c: ["Yıllık talep sabittir", "Sipariş ve elde bulundurma giderleri sabittir", "Stok yenilemelerinde gecikme yoktur", "Birim fiyat sabittir", "Talep belirsizliği nedeniyle emniyet stoku tutulur"],
      d: 4,
      a: "Model **talebin sabit**, **giderlerin sabit**, yenilemenin **gecikmesiz** ve **birim fiyatın sabit** olduğunu varsayar. Emniyet stoku, bu varsayımlar gerçekleşmediği için modele sonradan eklenen bir çözümdür.",
      k: "1007 resmi not s. 69-70"
    },
    {
      s: "Bir şirketin günlük stok kullanımı **12 birim** ve sipariş verildikten sonra stokların yenilenme süresi **6 gündür**. Emniyet stoku dikkate alınmazsa şirket stok hangi düzeye düştüğünde sipariş vermelidir?",
      c: ["12 birim", "72 birim", "18 birim", "6 birim", "144 birim"],
      d: 1,
      a: "**Sipariş noktası = Günlük kullanım × Yenileme süresi** = 12 × 6 = **72 birim**. Stok 72 birime düşünce sipariş verilir; 6 günde 72 birim kullanılır ve tam bittiğinde yeni siparişler gelir.",
      k: "1007 resmi not s. 70"
    },
    {
      s: "**Emniyet stokunun** belirlenmesi ile ilgili hangisi doğrudur?",
      c: ["Emniyet stoku ne kadar yüksek tutulursa elde bulundurma maliyetleri o kadar düşer", "Yenileme süresindeki ve talepteki belirsizlik emniyet stokunu hiç etkilemez", "Risk-kârlılık seçimidir: az stok müşteri kaybı, fazlası maliyet artışı", "Emniyet stoku yalnızca hizmet şirketlerinde tutulur, imalatçılar tutmaz", "Emniyet stoku her durumda ekonomik sipariş miktarına eşit tutulmalıdır"],
      d: 2,
      a: "Emniyet stokunun belirlenmesi bir **risk-kârlılık** seçimidir: **risk**, stokların tükenip **müşteri kaybı**; kârlılık sorunu ise fazla emniyet stoku nedeniyle **elde bulundurma giderlerinin artmasıdır**. Belirsizlikler emniyet stokunu etkiler.",
      k: "1007 resmi not s. 70"
    },
    {
      s: "Satışları **900.000 TL**, brüt kâr marjı **%20** ve stok dönme çabukluğu **8** olan bir şirketin **ortalama stok yatırımı** ne kadardır?",
      c: ["112.500 TL", "22.500 TL", "180.000 TL", "90.000 TL", "72.000 TL"],
      d: 3,
      a: "SMM = 900.000 × (1 − 0,20) = **720.000**. **Stok dönme çabukluğu = SMM / Ortalama stok** → 8 = 720.000 / Ortalama stok → **90.000 TL**. Satışlar kullanılırsa yanlışlıkla 112.500 bulunur.",
      k: "1007 resmi not s. 77-78"
    }
  ]
});
