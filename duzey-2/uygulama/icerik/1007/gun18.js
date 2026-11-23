SPL.gun("1007", 18, {
  okuma: `
## Bugünün haritası
Bugün proje değerlendirme yöntemlerine başlıyoruz. Altı yöntemin ilk üçünü göreceğiz: **ortalama kârlılık oranı**, **geri ödeme süresi** ve **iskonto edilmiş geri ödeme süresi**. Hepsi basit hesaplardır; ama her birinin **eksiklikleri** sınavda en az hesap kadar sorulur.

1. Altı değerlendirme yöntemi ve aralarındaki fark
2. **Ortalama kârlılık oranı**
3. **Geri ödeme süresi**
4. Geri ödeme süresinin **eksiklikleri**
5. **İskonto edilmiş geri ödeme süresi**

---

## 1. Değerlendirme yöntemleri
1. **Ortalama kârlılık oranı**
2. **Geri ödeme süresi**
3. **İskonto edilmiş geri ödeme süresi**
4. **Net bugünkü değer**
5. **İç verim oranı**
6. **Kârlılık endeksi**

> [!ezber] İlk iki yöntem (**ortalama kârlılık** ve **geri ödeme süresi**) **paranın zaman değerini dikkate almaz**. Ayrıca **ortalama kârlılık oranı**, değerlemede **nakit akışı yerine kâr** kullanarak diğerlerinden ayrılır.

## 2. Ortalama kârlılık oranı
**Amortisman ve vergi sonrası yıllık ortalama net kâr**, **ilk yatırım tutarına** veya **ortalama yatırım tutarına** bölünür. Daha çok kullanılan **ortalama yatırım tutarıdır** (yatırımın ortalama defter değeri).

> [!ezber] **Ortalama kârlılık oranı = Yıllık ortalama net kâr / Ortalama yatırım**. **Ortalama yatırım = (İlk duran varlık yatırımı + Hurda değeri) / 2 + İşletme sermayesi**

**Örnek:** 100.000 TL duran varlık, 30.000 TL işletme sermayesi, 5 yıl, hurda değeri 0, işletme sermayesi 5. yılda geri kazanılıyor.
- Ortalama yatırım = (100.000 + 0) / 2 + 30.000 = **80.000 TL**
- Beş yıllık net kârlar: 3.200; 8.000; 12.800; 12.000; 24.000 → yıllık ortalama **12.000 TL**
- Ortalama kârlılık = 12.000 / 80.000 = **%15**
- Projeler bu orana göre sıralanır; **oranı yüksek** proje öncelik kazanır.

## 3. Geri ödeme süresi
**Geri ödeme süresi:** projenin yıllık net nakit girişlerinin **ilk yatırım tutarını karşılaması için gereken yıl sayısı**. Yıllık nakit girişleri, yatırım tutarından sırayla düşülerek sıfıra ulaşana kadar sayılır.

| Proje | Yatırım | 1. yıl | 2. yıl | 3. yıl | 4. yıl | 5. yıl | Geri ödeme |
|---|---|---|---|---|---|---|---|
| A | 1.000 | 500 | 500 | - | - | - | 2 yıl |
| B | 1.000 | 500 | 500 | 400 | - | - | 2 yıl |
| D | 1.000 | 300 | 700 | 400 | 400 | 400 | 2 yıl |
| E | 1.000 | 700 | 300 | 400 | 400 | 400 | 2 yıl |
| F | 1.000 | 400 | 500 | 600 | 1.200 | 1.800 | **2 1/6 yıl** |

**F projesi:** ilk iki yılda 900 TL geri döner; kalan 100 TL üçüncü yılın 600 TL'sinin **1/6**'sıdır → **2 1/6 yıl (2 yıl 2 ay)**.

## 4. Geri ödeme süresinin eksiklikleri
| Eksiklik | Örnek |
|---|---|
| **Az yerine çok nakit** kriterini karşılamaz; geri ödemeden **sonraki** nakit akışlarını ihmal eder | A ve B'nin süresi aynı (2 yıl) ama B daha fazla nakit sağlar |
| Geri ödeme süresi **içindeki nakit akışlarının zamanlamasını** göz ardı eder | D ve E'nin süresi aynı ama E **daha erken** nakit sağlar |
| **Paranın zaman değerini** dikkate almaz | En uzun süreye sahip **F**, ömrü boyunca **en fazla nakdi** sağlasa da cezalandırılır |

> [!bilgi] Yöntemin üstünlüğü: **çok kullanışlı ve basittir**, hesaplamada büyük kolaylık sağlar.

## 5. İskonto edilmiş geri ödeme süresi
Paranın zaman değerini ihmal etme sorununu gidermek için geliştirilmiştir: nakit akışları **uygun iskonto oranı (sermaye maliyeti)** ile iskonto edilip **bugünkü değerleriyle** ilk yatırımın ne zaman karşılandığı hesaplanır.

**Örnek:** iki proje, 4 yıl ömürlü, yatırım 1.000 TL, sermaye maliyeti %10.

| Yıl | A nakit akışı | A'nın BD'si | B nakit akışı | B'nin BD'si |
|---|---|---|---|---|
| 1 | 400 | 363,64 | 100 | 90,91 |
| 2 | 400 | 330,58 | 300 | 247,92 |
| 3 | 300 | 225,39 | 400 | 300,52 |
| 4 | 200 | 136,60 | 600 | 409,80 |

- **Basit geri ödeme:** A = **2 2/3 yıl** (800 + 300'ün 200'ü); B = **3 1/3 yıl** (800 + 600'ün 200'ü)
- **İskonto edilmiş geri ödeme:** A'nın ilk üç yıl BD toplamı 919,61; eksik 80,39 TL dördüncü yılın 136,60'ının 0,59'u → **3,59 yıl**. B için: 3 + 360 / 409,80 ≈ **3,88 yıl**

> [!dikkat] İskonto edilmiş geri ödeme süresi her zaman basit geri ödeme süresinden **uzundur** (aynı nakit bugüne indirgenince küçülür). Paranın zaman değerini dikkate aldığı için basit yönteme **üstündür**; ama o da geri ödemeden sonraki nakit akışlarını ihmal eder.
`,
  sorular: [
    {
      s: "Aşağıdaki yatırım değerlendirme yöntemlerinden hangi ikisi **paranın zaman değerini dikkate almaz**?",
      c: ["Net bugünkü değer ve iç verim oranı", "Ortalama kârlılık oranı ve geri ödeme süresi", "Kârlılık endeksi ve iskonto edilmiş geri ödeme süresi", "İç verim oranı ve kârlılık endeksi", "İskonto edilmiş geri ödeme süresi ve net bugünkü değer"],
      d: 1,
      a: "Altı yöntemden ilk ikisi olan **ortalama kârlılık oranı** ve **geri ödeme süresi** paranın zaman değerini dikkate almaz. Ortalama kârlılık oranı ayrıca **nakit akışı yerine kâr** kullanır.",
      k: "1007 resmi not s. 82"
    },
    {
      s: "Değerlemede **nakit akışı yerine kârı** kullanan yatırım değerlendirme yöntemi hangisidir?",
      c: ["Geri ödeme süresi yöntemi", "Net bugünkü değer yöntemi", "Ortalama kârlılık oranı", "İç verim oranı yöntemi", "Kârlılık endeksi yöntemi"],
      d: 2,
      a: "**Ortalama kârlılık oranı**, amortisman ve vergi sonrası yıllık ortalama **net kârı** ilk ya da ortalama yatırıma böler; bu yönüyle nakit akışı kullanan diğer yöntemlerden ayrılır.",
      k: "1007 resmi not s. 82-83"
    },
    {
      s: "Bir proje 200.000 TL duran varlık ve 40.000 TL işletme sermayesi gerektirmektedir. Duran varlığın hurda değeri sıfırdır ve işletme sermayesi ömür sonunda geri kazanılacaktır. Projenin yıllık ortalama net kârı **21.000 TL** ise **ortalama kârlılık oranı** nedir?",
      c: ["%10,5", "%8,75", "%7,5", "%15", "%52,5"],
      d: 3,
      a: "Ortalama yatırım = (200.000 + 0) / 2 + 40.000 = **140.000 TL**. Ortalama kârlılık = 21.000 / 140.000 = **%15**.",
      k: "1007 resmi not s. 83"
    },
    {
      s: "İlk yatırımı **1.200 TL** olan bir projenin yıllık nakit girişleri sırasıyla 500, 400, 600 ve 800 TL'dir. Projenin **geri ödeme süresi** nedir?",
      c: ["2 yıl", "2,5 yıl", "3 yıl", "2 1/3 yıl", "2 2/3 yıl"],
      d: 1,
      a: "İlk iki yılda 500 + 400 = **900 TL** geri döner; kalan **300 TL**, üçüncü yılın 600 TL'sinin **yarısıdır**. Geri ödeme süresi = 2 + 300/600 = **2,5 yıl**.",
      k: "1007 resmi not s. 83"
    },
    {
      s: "Yatırımları 1.000 TL olan A projesi 2 yılda 500 + 500 TL, B projesi ise 2 yılda 500 + 500 TL ve üçüncü yılda ayrıca 400 TL sağlamaktadır. Geri ödeme süresi yönteminin bu iki projeye bakışı hangi eksikliğini gösterir?",
      c: ["Geri ödeme sonrasındaki nakit akışlarını ihmal etmesini", "Paranın zaman değerini fazla dikkate almasını", "Nakit yerine kâr kullanmasını", "Hesaplamasının çok karmaşık olmasını", "Projeleri büyüklüklerine göre sıralamasını"],
      d: 0,
      a: "A ve B'nin geri ödeme süresi aynıdır (**2 yıl**); ancak B daha fazla nakit sağlar. Yöntem **az yerine çok nakit** kriterini karşılamaz ve **geri ödemeden sonraki** nakit akışlarını ihmal eder.",
      k: "1007 resmi not s. 84"
    },
    {
      s: "Geri ödeme süreleri aynı olan iki projeden birinin nakit akışlarını **daha erken** sağlaması, geri ödeme süresi yönteminin hangi eksikliğini ortaya koyar?",
      c: ["Geçmişte yapılmış batık maliyetleri yatırım tutarına eklemesini", "Süre içindeki nakit akışlarının zamanlamasını göz ardı etmesini", "Vergi etkisini nakit akışlarında iki kez saymasını", "Sermaye maliyetini iskonto oranı olarak yanlış seçmesini", "Projelerin ekonomik ömrünü olduğundan uzun kabul etmesini"],
      d: 1,
      a: "D ve E projelerinin geri ödeme süresi aynıdır, ancak E daha erken nakit sağlar. Yöntem, geri ödeme süresi **içindeki nakit akışlarının zaman içindeki dağılımını** göz ardı eder.",
      k: "1007 resmi not s. 84"
    },
    {
      s: "**İskonto edilmiş geri ödeme süresi** yöntemi ile ilgili hangisi doğrudur?",
      c: ["Paranın zaman değerini dikkate almaz; nakit akışlarını iskontosuz toplar", "Nakit akışlarının bugünkü değerleriyle yatırımın karşılanma süresini bulur", "Her zaman basit geri ödeme süresinden daha kısa bir sonuç verir", "Nakit akışı yerine amortisman ve vergi sonrası muhasebe kârını kullanır", "Geri ödemeden sonraki tüm nakit akışlarını da hesaba katar"],
      d: 1,
      a: "Yöntem, nakit akışlarını **sermaye maliyetiyle iskonto edip** bugünkü değerlerle ilk yatırımın ne zaman karşılandığını hesaplar. Paranın zaman değerini dikkate aldığı için basit yönteme üstündür; sonucu basit geri ödeme süresinden **uzundur**.",
      k: "1007 resmi not s. 84"
    },
    {
      s: "1.000 TL yatırımlı bir projenin nakit akışlarının %10 ile iskonto edilmiş bugünkü değerleri sırasıyla 363,64; 330,58; 225,39 ve 136,60 TL'dir. Projenin **iskonto edilmiş geri ödeme süresi** yaklaşık kaç yıldır?",
      c: ["2,67", "3,00", "3,59", "3,88", "4,00"],
      d: 2,
      a: "İlk üç yılın BD toplamı 363,64 + 330,58 + 225,39 = **919,61**; eksik kalan **80,39 TL**, dördüncü yılın 136,60 TL'sinin 0,59'udur. Süre = 3 + 80,39/136,60 ≈ **3,59 yıl**. Basit geri ödeme süresi ise 2 2/3 yıldır.",
      k: "1007 resmi not s. 84"
    }
  ]
});
