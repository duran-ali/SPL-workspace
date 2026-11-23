SPL.gun("1007", 14, {
  okuma: `
## Bugünün haritası
Bugün işletme sermayesinin en likit kalemini, **kasayı** yönetmeyi öğreniyoruz: şirket elinde neden nakit tutar, ne kadar tutmalıdır ve fazlasını nereye yatırmalıdır? Ardından **alacak yönetiminin** çerçevesine giriş yapacağız.

1. Kasa yönetiminin üç karar alanı
2. Elde nakit tutmanın **üç nedeni**
3. Tahsilat ve ödemelerin yönetimi
4. **Optimum nakit miktarı**: işlem maliyeti ve fırsat maliyeti
5. **Nakit fazlasının** değerlendirilmesi: üç ölçüt
6. Alacak yönetimine giriş

---

## 1. Kasa yönetiminin karar alanları
1. Şirketin **tahsilat ve ödeme** yöntemlerini geliştirmesi
2. **Optimum nakit miktarının** belirlenmesi
3. Minimum kasanın üstünde **nakit fazlası** varsa bunun **kısa süreli** olarak değerlendirilmesi

## 2. Elde nakit tutma nedenleri
| Neden | Açıklama | Örnek / ayrıntı |
|---|---|---|
| **İşlemler nedeniyle** | Faaliyetler sırasında **normal nakit çıkışlarını** karşılamak | Faaliyeti **istikrarlı** işkollarında (**gıda**, **monopolistik** şirketler) nakit akışları kolay tahmin edilir; bu nakit **minimumda** tutulur. Mevsimlik dalgalanma varsa yoğun dönemlerde daha fazla nakit gerekir |
| **İhtiyat nedeniyle** | **Beklenmeyen, tahmin edilemeyen** nakit çıkışları | Genel ekonomik faktörlerden etkilenir: **faizler yüksek** ve **para arzı kısıtlıysa** daha fazla nakit tutulur |
| **Spekülatif nedenlerle** | Kısa dönemde büyük kâr sağlayacak **fırsatları** değerlendirmek | Çok **düşük fiyattan hammadde** almak; peşin ödemede büyük **iskonto** fırsatı |

## 3. Tahsilat ve ödemelerin yönetimi
Notlardaki zaman çizelgesinde **A** satın alma siparişinin verildiği, **H** müşteriden tahsilatın yapıldığı andır. Aradaki adımlar: siparişin teslimi, ödeme için çek ya da bono verilmesi, satış, bononun alınması, tahsile verilmesi ve tahsil edilmesi.

> [!ezber] **A ile H arasındaki uzaklık**, nakit ihtiyacını belirleyen **en önemli faktördür**. Amaç, **ödeme tarafını (BD) uzatmak**, **tahsilat tarafını (FH) mümkün olduğunca kısaltmaktır**.

## 4. Optimum nakit miktarı
- Eldeki nakit miktarı **arttıkça işlem maliyetleri azalır**, ama **fırsat maliyetleri** (nakdin getiri sağlamaması) giderek **artar**.
- Nakit çok az tutulursa (grafikteki A noktası) günlük işlemlere yetmeyebilir; **risk yüksektir**.
- **Optimum nakit miktarı (OQ)**, bu iki maliyetin dengelendiği noktadır.

> [!dikkat] Bu teorik hesap pratikte geçerli olmayabilir: maliyetleri belirlemek çok güçtür ve **fırsat maliyetleri şirketten şirkete değişir**. Genellikle yöneticiler **tecrübelerine** göre belirler; örneğin **satışların belli bir yüzdesi** kasada tutulur.

## 5. Nakit fazlasının değerlendirilmesi
Elde fazla nakit tutmak çoğu zaman **anlamsızdır**; fazla nakit **kısa süreli menkul değerlere** yatırılır. Dikkat edilecek üç faktör:

| Faktör | İstenen | Bedeli |
|---|---|---|
| **Pazarlanabilirlik** (likidite derecesi) | İhtiyaç hâlinde çok kolay ve **alış fiyatına yakın** fiyattan paraya çevrilebilmeli | Likiditesi yüksek menkul değerler genellikle **düşük verim** sağlar |
| **Risk** | İhraççının faiz ve anaparayı zamanında ödeyememe olasılığı **çok düşük** olmalı | Risk düşükse kârlılık da genellikle **düşüktür** |
| **Vade** | **Kısa vadeli** olmalı; çünkü yatırım **geçici** niteliktedir | Vade uzadıkça faiz değişim riski artar; uzun vadeliler **daha yüksek verim** sağlar |

> [!ezber] Fazla nakdin geçici yatırımında seçilecek menkul değerler: **likiditesi yüksek, vadesi kısa, riski düşük**. Bu tür menkul değerlerin **verimi de düşük** olur.

## 6. Alacak yönetimine giriş
**Ticari alacak:** şirketin mal veya hizmet satışları nedeniyle müşterilerine **açtığı kredi tutarı**. Alacak yönetimi şirketin **para girişleri, kârlılığı ve finansman gereksinimi** üzerinde önemli etkiler yaratır.

> [!ezber] Alacak yönetiminin amacı, alacaklara bağlanacak **optimum fon miktarını** belirlemektir.

**Alacaklara yapılacak yatırımı belirleyen değişkenler:**
| **Kontrol edilemeyen** | **Kontrol edilebilen** (kredi ve tahsilat politikası) |
|---|---|
| **Satış miktarı** | **Satış koşulları** |
| **Kredili satışlar / Toplam satışlar** oranı (→ kredili satış miktarı) | **Müşterinin kalitesi** (kredi politikası) |
| | **Tahsilat işlemleri** (→ alacak tahsil süresi) |
`,
  sorular: [
    {
      s: "Aşağıdakilerden hangisi kasa yönetiminde karar verilecek **üç konudan biri değildir**?",
      c: ["Tahsilat ve ödeme yöntemlerinin geliştirilmesi", "Optimum nakit miktarının belirlenmesi", "Nakit fazlasının kısa süreli olarak değerlendirilmesi", "Uzun vadeli tahvil ihracı ile sermaye yapısının belirlenmesi", "Hepsi kasa yönetiminin konularıdır"],
      d: 3,
      a: "Kasa yönetiminin üç konusu: **tahsilat ve ödeme yöntemlerinin geliştirilmesi**, **optimum nakit miktarının belirlenmesi** ve minimum kasanın üstündeki **nakit fazlasının kısa süreli değerlendirilmesi**. Tahvil ihracı ve sermaye yapısı kasa yönetiminin konusu değildir.",
      k: "1007 resmi not s. 63"
    },
    {
      s: "Faaliyetleri istikrarlı olan **gıda sektöründeki** veya **monopolistik** özellikteki şirketler, **işlemler nedeniyle** tuttukları nakdi nasıl belirler?",
      c: ["Nakit akışlarını kolayca tahmin ettikleri için nakdi minimumda tutarlar", "Her zaman satışlarının yarısı kadar nakdi kasada hazır bulundururlar", "Spekülatif fırsatları kaçırmamak için çok yüksek nakit tutarlar", "Hiç nakit tutmazlar; tüm ödemelerini kredi kartıyla yaparlar", "Faiz oranları düştükçe ellerindeki nakit tutarını azaltırlar"],
      d: 0,
      a: "Faaliyetleri istikrarlı işkollarında nakit giriş ve çıkışları kolay tahmin edildiğinden işlemler nedeniyle gereken nakit **minimum düzeyde** tutulur. Faaliyetleri istikrarsız veya **mevsimlik** şirketler yoğun dönemlerde daha fazla nakit tutmak zorundadır.",
      k: "1007 resmi not s. 63"
    },
    {
      s: "**Faiz hadlerinin yüksek** ve **para arzının kısıtlı** olduğu bir ortamda şirketlerin daha fazla nakit tutma eğilimi, elde nakit bulundurmanın hangi nedeniyle ilgilidir?",
      c: ["İşlemler nedeniyle", "Spekülatif nedenlerle", "İhtiyat nedeniyle", "Vergi nedeniyle", "Kâr payı ödemesi nedeniyle"],
      d: 2,
      a: "**İhtiyat nedeniyle** nakit, beklenmeyen ve tahmin edilemeyen çıkışlar için tutulur ve genel ekonomik faktörlerden etkilenir. Faizler yüksek ve para arzı kısıtlıysa şirketler beklenmeyen ihtiyaçlar için **daha fazla nakit** tutmayı tercih edebilir.",
      k: "1007 resmi not s. 63"
    },
    {
      s: "Bir şirketin, peşin ödemede büyük iskonto sağlayan çok ucuz bir hammadde fırsatını değerlendirmek için nakit tutması, nakit bulundurmanın hangi nedenine örnektir?",
      c: ["İhtiyat nedeni", "Spekülatif neden", "İşlemler nedeni", "Minimum kasa zorunluluğu", "Yasal yedek akçe zorunluluğu"],
      d: 1,
      a: "**Spekülatif nedenle** nakit; çok düşük fiyattan hammadde almak veya peşin ödemede büyük iskonto gibi, kısa dönemde **büyük kâr** sağlayacak fırsatları değerlendirmek için tutulur.",
      k: "1007 resmi not s. 63"
    },
    {
      s: "Tahsilat ve ödemelerin yönetiminde nakit ihtiyacını azaltmak için genel amaç nedir?",
      c: ["Ödemeleri öne çekmek, tahsilatı ise mümkün olduğunca geciktirmek", "Hem ödemeleri hem tahsilatı aynı oranda geciktirmek", "Satın alma siparişlerini durdurup stokları eritmek", "Ödeme tarafını uzatmak, tahsilat tarafını kısaltmak", "Tüm satışları kredili yapıp vadeleri uzatmak"],
      d: 3,
      a: "Sipariş (A) ile tahsilat (H) arasındaki uzaklık nakit ihtiyacını belirleyen en önemli faktördür. Amaç **ödeme tarafını (BD) uzatmak**, **tahsilat tarafını (FH) mümkün olduğunca kısaltmaktır**.",
      k: "1007 resmi not s. 64"
    },
    {
      s: "Optimum nakit miktarı ile ilgili hangisi doğrudur?",
      c: ["Nakit arttıkça hem işlem maliyetleri hem fırsat maliyetleri azalır; optimum nakit sınırsızdır", "Nakit arttıkça işlem maliyeti azalır, fırsat maliyeti artar; pratikte tecrübe esastır", "Fırsat maliyetleri her şirkette aynıdır; bu yüzden tek bir oran tüm şirketlere uygulanır", "Optimum nakit miktarı teorik formülle her şirket için kesin olarak hesaplanabilir", "Eldeki nakit miktarı azaldıkça günlük işlemlerde yaşanan risk de azalır"],
      d: 1,
      a: "Nakit arttıkça **işlem maliyetleri azalır**, **fırsat maliyetleri artar**; optimum bu iki maliyetin dengesindedir. Ancak maliyetleri belirlemek güç ve fırsat maliyeti şirketten şirkete değiştiğinden, yöneticiler genellikle **tecrübeye** dayanır (ör. satışların belli bir yüzdesi).",
      k: "1007 resmi not s. 64"
    },
    {
      s: "Elde bulunan **nakit fazlasının geçici olarak** yatırılacağı menkul değerlerde aranan özellikler hangileridir?",
      c: ["Likiditesi düşük, vadesi uzun, riski yüksek", "Likiditesi yüksek, vadesi uzun, verimi yüksek", "Likiditesi yüksek, vadesi kısa, riski düşük", "Vadesi uzun, riski düşük, verimi yüksek", "Likiditesi düşük, vadesi kısa, riski yüksek"],
      d: 2,
      a: "Geçici yatırımda menkul değerlerin **likiditesi yüksek**, **vadesi kısa**, **riski düşük** olmalıdır. Bu özelliklerin bedeli olarak bu tür menkul değerlerin **verimi de düşük** olur.",
      k: "1007 resmi not s. 65"
    },
    {
      s: "Alacak yönetiminde alacaklara yapılacak yatırımı belirleyen değişkenlerden hangisi yönetimin **kontrolü dışındadır**?",
      c: ["Satış koşulları", "Müşterilerin kalitesi (kredi politikası)", "Tahsilat işlemleri", "Satış miktarı", "Kredi limitleri"],
      d: 3,
      a: "**Satış miktarı** ve **kredili satışların toplam satışlara oranı** kontrol edilemeyen değişkenlerdir. **Satış koşulları**, **müşterinin kalitesi** (kredi politikası) ve **tahsilat işlemleri** ise kontrol edilebilen kredi ve tahsilat politikası değişkenleridir.",
      k: "1007 resmi not s. 65"
    }
  ]
});
