SPL.gun("1003", 18, {
  okuma: `
## Bugünün haritası
1. **Teminat tamamlama çağrısı** hesap örneği
2. **Fiyat boşluğu** riski ve **eksi bakiye**
3. VİOP'ta **nemalandırma**
4. Sözleşme türleri: **endeks, pay, döviz, kıymetli maden**
5. **Fiyat dinamikleri:** taşıma maliyeti ve temettü etkisi

---

## 1. Teminat tamamlama çağrısı: örnek
- **Gün içi teminat tamamlama çağrısı:** olağanüstü dalgalanmada teminat açığı kritik sınırı aşarsa Takasbank gün içinde çağrı yapabilir. Açık **2 saat** içinde kapatılmalıdır.

### Başlangıç durumu
- Uzlaşma fiyatı 200 TL, **5 sözleşme** (her biri 100 pay). Pozisyon **100.000 TL**.
- Başlangıç teminatı (%15) **15.000 TL**. Yatırımcı **20.000 TL** yatırmış; **5.000 TL serbest teminat** var.

### Senaryo A: fiyat %10 düşüp 180 TL oluyor

| Kalem | Tutar |
|---|---|
| Günlük zarar | 20 × 100 × 5 = **10.000 TL** |
| Kalan teminat | 20.000 − 10.000 = **10.000 TL** |
| Yeni pozisyon | 180 × 100 × 5 = 90.000 TL |
| Yeni başlangıç teminatı | 90.000 × %15 = **13.500 TL** |
| **Teminat tamamlama çağrısı** | 13.500 − 10.000 = **3.500 TL** |

- Yatırımcı ertesi gün **15:00**'e kadar **3.500 TL nakit** yatırır ya da pozisyonunu küçültür.
- Yalnızca 15.000 TL yatırmış olsaydı çağrı 13.500 − 5.000 = **8.500 TL** olurdu. **Serbest teminat çağrıyı küçültür.**

### Senaryo B: fiyat %10 artıp 220 TL oluyor

| Kalem | Tutar |
|---|---|
| Günlük kâr | **10.000 TL** |
| Güncel bakiye | **30.000 TL** |
| Yeni başlangıç teminatı | 110.000 × %15 = **16.500 TL** |
| **Yeni serbest teminat** | 30.000 − 16.500 = **13.500 TL** |

Yatırımcı bu serbest tutarı **çekebilir** ya da yeni pozisyon için kullanabilir.

> [!dikkat]
> Çağrıda teminat **başlangıç teminatına** tamamlanır, sürdürme seviyesine değil. Yeni başlangıç teminatı **yeni fiyat** üzerinden hesaplanır.

---

## 2. Fiyat boşluğu ve eksi bakiye
- VİOP'taki risk, **yatırılan teminatla sınırlı değildir**.
- Piyasa kapalıyken (gece, hafta sonu, tatil) yaşanan olaylarla piyasa çok farklı bir fiyattan, hatta tavan ya da tabandan açılabilir. Buna **fiyat boşluğu** denir.
  - Bu durumda **zarar kes (stop-loss)** emirleri çalışmayabilir ya da çok kötü fiyattan gerçekleşebilir.
- Kaldıraç etkisiyle hesap **eksi bakiyeye** düşebilir.
  - Takasbank'ın muhatabı **aracı kurumdur**. Zararı Takasbank'a aracı kurum öder.
  - Eksi bakiye, yatırımcının aracı kuruma olan **yasal borcuna** dönüşür.
- **Fark:** spot kaldıraçlı işlemlerde (**forex**) SPK düzenlemesi gereği aracı kurum eksi bakiye için yatırımcıdan **alacaklı olamaz**.

---

## 3. Nemalandırma
- Takasbank, **nakit TL teminatları** zorunlu karşılık düşüldükten sonra **gecelik** değerlendirir. Bu "en iyi gayret" esasına dayanır.
- **Döviz, altın, hisse** gibi nakit dışı teminatlar **nemalandırılmaz**.
- Brüt nemadan vergi ve **Takasbank komisyonu** düşülür.
- Nakit teminat saat **15:40** itibarıyla hesapta olmalıdır; sonra yatırılan para o gün nemalandırılmaz.
- **Serbest teminat** dahil hesaptaki tüm nakit TL nemalandırılır.
- Takasbank asgari bir tutar belirleyebilir. Muhatabı **aracı kurumdur**; yatırımcıya yansıtma aracı kurumla yatırımcı arasındadır.
- Faiz hassasiyeti olan yatırımcı isterse **nemalandırma yapılmaz**.

---

## 4. Sözleşme türleri

| | **BIST 30 endeks** | **Pay** | **Döviz (USD/TL)** | **Kıymetli maden** |
|---|---|---|---|---|
| Büyüklük | Endeks × **10 TL** | **100 pay** | **1.000 USD** | Ons altın 1 ons, gümüş 10 ons, gram altın 1 gram |
| Vadeler | **Çift aylar**, en yakın **3 vade**; Aralık yoksa ayrıca açılır | İçinde bulunulan ay + en yakın **2 ay** (toplam 3) | **16 aya** kadar | **Çift aylar**, en yakın **3 vade** |
| Uzlaşma | **Nakdi** | **Fiziki teslimat** (T+2) | Standart: **nakdi**; ayrıca **fiziki teslimatlı** sözleşme var | **Nakdi** |
| Akşam seansı | **Var** | — | — | Dolar/ons sözleşmeleri **var**; **TL/gram altın yok** |

### Endeks
- En **likit** VİOP ürünüdür.
- Endeks 10.000 puansa 1 sözleşme **100.000 TL** eder.

### Pay
- Yaklaşık **50** likit hisse üzerine yazılır.
- Vade sonunda **fiziki teslimat** yapılır:
  - uzun taraf bedeli ödeyip payı alır,
  - kısa taraf payı teslim edip bedeli alır.
  - Takas **T+2**'dir.
- **Sermaye artırımı, azaltımı, birleşme ve bölünmede:**
  - mevcut sözleşmeler kapatılır ve pozisyonlar **N1, N2** uzantılı **standart olmayan** sözleşmelere aktarılır (ör. 180 pay);
  - yeni vadeler yine 100 payla açılır.
- **Nakit temettüde düzeltme yapılmaz**; beklenti zaten fiyata yansır.

### Döviz
- Diğer döviz sözleşmeleri:
  - EUR/TL **1.000 €**,
  - RUB/TL **100.000 ruble**,
  - CNH/TL **10.000 yuan**,
  - EUR/USD 1.000 €,
  - GBP/USD 1.000 £.
- **Fiziki teslimatlı Dolar/TL** ithalatçı ve ihracatçılar içindir. **Gerçek kişiler** bu sözleşmenin **tarafı olamaz**.
- **Esnek vade tarihli** döviz sözleşmeleri, en fazla **364 gün** içinde istenen bir tarihle oluşturulabilir.

### Kıymetli maden
- **Dolar/ton bakır** (0,1 ton) da işlem görür, ama bu bir **metaldir**, kıymetli maden değildir.

---

## 5. Fiyat dinamikleri
- **Teorik vadeli fiyat**, dayanağı spottan alıp vadeye kadar taşımanın maliyetini yansıtır:

*Vadeli fiyat = Spot fiyat + Faiz maliyeti − Varlık getirisi (temettü, yabancı para faizi)*

- Kullanılan faiz, politika faizi değil **piyasadaki fonlama maliyetidir**.
- **Normal koşullarda vadeli fiyat spottan yüksektir** ve vade uzadıkça fark açılır. Bu durum şu varlıklarda beklenir:
  - **getirisi olmayan** varlıklar (altın),
  - vadede **temettü ödemeyen** hisseler,
  - **TL faizinin dolar faizinden yüksek** olduğu durumda USD/TL.
- **Temettü faiz maliyetinden büyükse** vadeli fiyat spotun **altında** olabilir. Bu bir piyasa hatası değildir.

### Örnek: taşıma maliyeti
- Spot fiyat 100 TL, aylık faiz %2. Ay sonu vadeli fiyat **102 TL** olur.
- Spot sabit kalırsa vadeli fiyat doğrusal olarak spota yaklaşır.
  - Ay ortasında **101 TL** olur; 15 günlük taşıma maliyeti **1 TL**'dir.
  - Vade sonunda **100 TL** olur; aylık maliyet **2 TL**'dir.
- Vade sonunda faiz bileşeni sıfırlanır ve **vadeli fiyat spot fiyata eşitlenir**.

### Temettü etkisi
- Vadeli alıcı **temettü alamaz**. Bu yüzden beklenen temettü vadeli fiyattan **düşülür**.
- Beklenmedik ya da yüksek temettü vadeli fiyatı **aşağı**, iptal edilen ya da düşük temettü **yukarı** iter.

> [!ezber]
> Vadeli fiyat, dayanağın vadede ulaşacağı fiyatın **tahmini değildir**; fiyatlama **mekaniktir** (taşıma maliyeti).
`,
  sorular: [
    {
      s: "Bir yatırımcı 200 TL'den 5 adet pay vadeli sözleşmesi (her biri 100 pay) almış ve hesabına 20.000 TL teminat yatırmıştır. Başlangıç teminat oranı %15'tir. Gün sonu uzlaşma fiyatı 180 TL olursa teminat tamamlama çağrısı tutarı ne olur?",
      c: ["3.500 TL", "5.000 TL", "8.500 TL", "10.000 TL", "13.500 TL"],
      d: 0,
      a: "Zarar 20 × 100 × 5 = 10.000 TL, kalan teminat 10.000 TL olur. Yeni başlangıç teminatı 90.000 × %15 = 13.500 TL'dir. Çağrı 13.500 − 10.000 = **3.500 TL**'dir.",
      k: "1003 resmi not s. 171"
    },
    {
      s: "VİOP'ta fiyat boşluğu nedeniyle hesabı eksi bakiyeye düşen bir yatırımcıyla ilgili hangisi doğrudur?",
      c: ["Zarar yatırılan teminatla sınırlıdır.", "Eksi bakiyeyi Takasbank karşılar ve yatırımcıdan talep edilemez.", "Aracı kurum zararı Takasbank'a öder ve eksi bakiye yatırımcının aracı kuruma borcu olur.", "Pozisyon otomatik olarak sıfır zararla kapatılır.", "Forex işlemlerindeki negatif bakiye koruması uygulanır; aracı kurum yatırımcıdan alacaklı olamaz."],
      d: 2,
      a: "VİOP'ta risk teminatla sınırlı değildir. Takasbank'ın muhatabı **aracı kurumdur**; eksi bakiye yatırımcının aracı kuruma **yasal borcuna** dönüşür. Aracı kurumun alacaklı olamaması kuralı yalnızca **forex** içindir.",
      k: "1003 resmi not s. 172"
    },
    {
      s: "VİOP teminatlarının nemalandırılmasıyla ilgili hangisi **yanlıştır?**",
      c: ["Yalnızca nakit TL teminatlar nemalandırılır.", "Serbest teminat bakiyesi de nemalandırılır.", "Nakit teminatın saat 15:40 itibarıyla hesapta bulunması gerekir.", "Hisse senedi ve altın teminatlar da nema geliri elde eder.", "Yatırımcı isterse nemalandırma yapılmaz."],
      d: 3,
      a: "Döviz, altın ve hisse senedi gibi **nakit dışı teminatlar nemalandırılmaz**; yalnızca nakit TL bakiyeler nema geliri elde eder.",
      k: "1003 resmi not s. 172"
    },
    {
      s: "BIST 30 endeks vadeli işlem sözleşmeleriyle ilgili hangisi doğrudur?",
      c: ["Vade sonunda nakdi uzlaşma yapılmaz; endeksteki paylar ağırlıkları oranında fiziki olarak teslim edilir.", "Sözleşme büyüklüğü endeks değerinin 100 TL ile çarpımıdır.", "Vade ayları çift aylardır; en yakın üç vade işlem görür, Aralık yoksa ayrıca açılır.", "Bu sözleşmeler akşam seansında işlem görmez.", "Sözleşmelerin vadesi 16 aya kadar uzayabilir."],
      d: 2,
      a: "Endeks sözleşmelerinde vade ayları **çift aylardır**; en yakın 3 vade açıktır ve Aralık aralarında değilse ayrıca açılır. Uzlaşma **nakdidir**, büyüklük **endeks × 10 TL**'dir ve akşam seansına dahildir.",
      k: "1003 resmi not s. 173"
    },
    {
      s: "Pay vadeli işlem sözleşmelerinde vade sonunda nasıl uzlaşma yapılır?",
      c: ["Nakdi uzlaşma; kâr veya zarar TL olarak yansıtılır.", "Fiziki teslimat; takas vade sonunu izleyen ikinci iş günü yapılır.", "Uzlaşma yapılmaz, sözleşmeler otomatik olarak bir sonraki vadeye taşınır.", "Fiziki teslimat; takas aynı gün yapılır.", "Yatırımcı nakdi uzlaşma ile fiziki teslimat arasında seçim yapar."],
      d: 1,
      a: "Pay sözleşmelerini diğer ürünlerden ayıran özellik **fiziki teslimattır**. Uzun taraf payları alıp bedeli öder, kısa taraf payları teslim eder; takas **T+2**'dir.",
      k: "1003 resmi not s. 173"
    },
    {
      s: "Pay vadeli işlem sözleşmesine konu payda bedelsiz sermaye artırımı yapıldığında hangisi olur?",
      c: ["Mevcut sözleşmeler iptal edilir, teminatlar iade edilir ve yeni büyüklükte sözleşmeler ertesi gün işleme açılır.", "Sözleşme büyüklüğü değişmez; uzlaşma fiyatı düzeltilir.", "Pozisyonlar N1, N2 gibi standart olmayan sözleşmelere aktarılır; büyüklük katsayıyla değişir.", "Açık pozisyonların tamamı nakdi uzlaşmayla kapatılır.", "Nakit temettüde olduğu gibi herhangi bir düzeltme yapılmaz."],
      d: 2,
      a: "Sermaye artırımı, azaltımı, birleşme ve bölünmede mevcut pozisyonlar **N1/N2 uzantılı standart olmayan** sözleşmelere aktarılır; büyüklük katsayıya göre değişir (ör. 180 pay). **Nakit temettüde** ise düzeltme yapılmaz.",
      k: "1003 resmi not s. 173–174"
    },
    {
      s: "VİOP'taki döviz vadeli işlem sözleşmeleriyle ilgili hangisi **yanlıştır?**",
      c: ["Standart Dolar/TL sözleşmesi 1.000 USD büyüklüğündedir.", "Standart Dolar/TL sözleşmeleri nakdi uzlaşılıdır.", "Gerçek kişiler fiziki teslimatlı döviz sözleşmelerinin tarafı olabilir.", "En fazla 364 güne kadar esnek vade tarihli sözleşme oluşturulabilir.", "Dolar/TL'de 16 aya kadar vadelerde işlem yapılabilir."],
      d: 2,
      a: "**Gerçek kişiler** fiziki teslimatlı döviz vadeli işlem sözleşmesinin **tarafı olamaz**; bu sözleşmeler daha çok ithalatçı ve ihracatçı firmalar içindir.",
      k: "1003 resmi not s. 174"
    },
    {
      s: "Spot fiyatı 100 TL olan ve vade içinde temettü ödemeyen bir hisse için aylık faiz %2'dir. Ay başında ay sonu vadeli sözleşmenin teorik fiyatı nedir ve spot fiyat sabit kalırsa vade sonunda vadeli fiyat ne olur?",
      c: ["102 TL; 102 TL", "102 TL; 100 TL", "100 TL; 102 TL", "98 TL; 100 TL", "104 TL; 102 TL"],
      d: 1,
      a: "Vadeli fiyat = spot + faiz maliyeti = 100 + 2 = **102 TL**. Vadeye yaklaştıkça faiz bileşeni küçülür ve vade sonunda vadeli fiyat **spot fiyata (100 TL) eşitlenir**.",
      k: "1003 resmi not s. 176–177"
    }
  ]
});
