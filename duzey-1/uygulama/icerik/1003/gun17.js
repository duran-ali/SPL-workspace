SPL.gun("1003", 17, {
  okuma: `
## Bugünün haritası
Bugün son bölüme, **Bölüm IV: Türev Araçlar**'a başlıyoruz.
1. Spot ve türev piyasa, **OTC** ve **organize** piyasa
2. **VİOP**'un yapısı ve **merkezi karşı taraf**
3. **Vadeli işlem sözleşmesi:** uzun ve kısa pozisyon, günlük uzlaşı, forward ile farkı
4. **Temel kavramlar:** sözleşme kodu, büyüklük, uzlaşma fiyatları, açık pozisyon, vade taşıma
5. **Başlangıç teminatı** ve **kaldıraç**
6. **Teminat tamamlama çağrısı**

---

## 1. Türev piyasalara giriş
- **Spot piyasada** ödeme ve teslim **hemen** yapılır. **Türev piyasada** ödeme ve teslim **ileri bir tarihte** yapılır.
- **Türev araç**, kendi başına bağımsız değeri olmayan, değerini bir **dayanak varlıktan** alan vadeli sözleşmedir.

| | **Tezgâhüstü (OTC)** | **Organize piyasa** |
|---|---|---|
| Kurallar | Borsa düzenlemesi yok; karşılıklı güvene dayanır | Borsa kuralları ve **standardizasyon** |
| Esneklik | Vade, miktar, fiyat **serbest** | Büyüklük, vade, teminat, fiyat adımı **önceden belirlenmiş** |
| Risk | **Karşı taraf riski**; merkezi garanti yok | Merkezi garanti; **likidite yüksek** |
| Örnek | Bankalar arası işlemler | CME, CBOT, CBOE; Türkiye'de **VİOP** |

- **Dört temel türev ürün:**
  1. **Forward**
  2. **Futures** (vadeli işlem)
  3. **Opsiyon**
  4. **Swap**
- Forward ile futures **aynı mantıkla** çalışır. Fark işlem yeridir: forward OTC'de, futures organize piyasada işlem görür.
- Swap daha çok kurumsal yatırımcılar içindir; bu notun kapsamı dışındadır.
- VİOP'ta en çok işlem **BIST 30 endeks vadeli** (XU030) sözleşmelerinde, ardından **döviz vadelilerinde** görülür.

---

## 2. VİOP'un yapısı
- **2005**'te İzmir'de **VOB** kuruldu. Sonra VOB, İMKB ve İstanbul Altın Borsası **Borsa İstanbul** çatısında birleşti.
- **Merkezi karşı taraf (Takasbank):**
  - İşlem anında Takasbank **alıcıya karşı satıcı, satıcıya karşı alıcı** olur.
  - Yatırımcılar birbirini tanımaz ve karşı tarafın mali durumunu incelemez.
  - Teminatlar Takasbank'ta saklanır. **Müşteri** ve **portföy** hesapları ayrıdır. Aracı kurum iflas etse bile müşteri teminatı korunur.
- **Piyasa yapıcılar** sürekli alış ve satış kotasyonu girerek likidite sağlar.
- Takasbank nakit teminatları **nemalandırır**.

---

## 3. Vadeli işlem sözleşmeleri (futures)
- **Tanım:** dayanak varlığın önceden belirlenen fiyattan, ileri bir tarihte **teslimini** ya da **nakdi uzlaşısını** öngören, **standart** sözleşmedir.
- Bir ihraççı tarafından **arz edilmez**. Bir uzun ve bir kısa pozisyon eşleşince oluşur.
- Spot sahipliğin getirdiği **temettü, oy, rüçhan** gibi haklar yoktur; yalnızca fiyat riski üstlenilir.

| Pozisyon | Beklenti / amaç | Yükümlülük |
|---|---|---|
| **Uzun (long)** | Fiyat **yükselecek** ya da gelecekteki maliyeti sabitlemek | Vadede **almak** ya da nakdi uzlaşı |
| **Kısa (short)** | Fiyat **düşecek** ya da eldeki varlığı korumak | Vadede **satmak** ya da nakdi uzlaşı |

- VİOP'ta kısa pozisyon açmak, spot açığa satıştan **çok daha kolaydır**. Ödünç pay ya da yukarı adım kuralı gerekmez; dayanak varlığa sahip olmak gerekmez.
- **Korunma (hedge) örneği:** elinde hisse olan yatırımcı, düşüş bekliyorsa vadelide **kısa** pozisyon açar ve spot zararını vadeli kazançla telafi eder.
- **Sıfır toplamlı oyun:** yeni değer üretilmez; bir tarafın kârı öbür tarafın zararına **eşittir**.
- Pozisyon **ters işlemle** kapatılır: uzun pozisyon aynı miktar ve vadede satışla, kısa pozisyon alışla kapanır.
- **Günlük uzlaşı (mark-to-market):** her gün sonunda kâr ve zarar **hesaplara yansıtılır**. Spotta ise satılmadıkça kâr veya zarar "kâğıt üzerinde" kalır.

### Forward ile farkı

| | **Futures** | **Forward** |
|---|---|---|
| Piyasa | Organize (borsa) | **OTC** |
| Şartlar | Standart | **Esnek** |
| Karşı taraf riski | Takasbank güvencesi | **Var** |
| Likidite | Yüksek | **Düşük** |
| Hesaplaşma | **Günlük uzlaşı** | Yalnızca **vade sonunda** |

---

## 4. Temel kavramlar
- **Sözleşme:** işlem birimi her zaman **1 adet** sözleşmedir. **Küsurat yoktur**.
- **Sözleşme kodu:** **F_** + dayanak kodu + **AAYY** (ay ve yıl).
  - Örnekler: **F_GARAN0426**, F_USDTRY0426, F_XU0300426, F_XAUUSD0426, F_XAUTRY0426.
- **Vade:** standart sözleşmelerde vade, ilgili ayın **son iş günüdür**. O gün yarım günse bir önceki **tam** iş günüdür.

| Sözleşme | Büyüklük |
|---|---|
| **Pay** vadeli | **100 adet** pay |
| **Endeks** vadeli | Endeks × **10 TL** |
| USD/TL, EUR/TL, EUR/USD | **1.000** birim döviz |
| GBP/USD | 1.000 sterlin |
| **Altın** (TL/gram) | **1 gram** |
| Dolar/ons altın | **1 ons** |
| Dolar/ons gümüş | **10 ons** |
| Dolar/ton bakır | **0,1 ton** |

- **Fiyat kotasyonu:** ekrandaki fiyat dayanağın **1 biriminin** fiyatıdır.
- **Sözleşme değeri = fiyat × sözleşme büyüklüğü.** Örnek: USD/TL 40,00 × 1.000 = **40.000 TL**.
- **Pozisyon büyüklüğü = sözleşme adedi × sözleşme değeri.** Örnek: 10 sözleşme = **400.000 TL**. Kâr ve zarar bu tutar üzerinden hesaplanır.
- **Gün sonu uzlaşma fiyatı:**
  - Kapanış fiyatından **farklıdır**. Genelde seansın **son dakikalarındaki işlemlerin ağırlıklı ortalamasıdır**; amaç manipülasyonu önlemektir.
  - **Teminat tamamlama çağrısı** bu fiyata göre belirlenir.
  - İstisnai durumlarda fiyatı **Uzlaşma Fiyatı Komitesi** belirler.
- **Vade sonu uzlaşma fiyatı:** vade sonunda tasfiyede kullanılan nihai fiyattır.
- **Gün içi uzlaşma fiyatı:**
  - Takasbank'ın gün içi risk hesaplarında kullanılır. Oluşan kâr nakden **çekilemez**, ama kullanılabilir teminatı etkiler.
  - Teminat **gün içi sürdürme seviyesinin** altına inerse hesap **riskli** olur: bekleyen emirler iptal edilir ve yalnızca pozisyon kapatıcı işleme izin verilir.
- **İşlem miktarı** sözleşme **adedi**dir. **İşlem hacmi** ise fiyat × adet × **sözleşme büyüklüğü**dür.

### Açık pozisyon
Açık pozisyon, henüz kapatılmamış sözleşme sayısıdır.

| Eşleşme | Açık pozisyon |
|---|---|
| **Yeni alıcı + yeni satıcı** | **Artar** (yeni para girişi) |
| **Kapatan alıcı + kapatan satıcı** | **Azalır** |
| **Kapatan + yeni giren** | **Değişmez** (risk el değiştirir) |

- Vade sonu yaklaştıkça yakın vadenin açık pozisyonu doğal olarak **azalır**.

### Uzlaşma şekli ve vade taşıma
- **Nakdi uzlaşı:** fark nakit olarak ödenir. **Fiziki teslimat:** dayanak varlık teslim edilir.
- **Vade taşıma (rollover):** yakın vadedeki pozisyon kapatılır ve ileri vadede **aynı yönde** yeni pozisyon açılır.
  - **Vadeler arası strateji emirleriyle** tek hamlede yapılabilir. Yatırımcı yalnızca iki vade arasındaki **fiyat farkını** girer.
  - Bu emirler yalnızca **BIST 30, Dolar/TL ve Dolar/Ons altın** sözleşmelerinde kullanılabilir.

---

## 5. Başlangıç teminatı ve kaldıraç
- Hem **uzun** hem **kısa** taraf teminat yatırır. Teminatı **Takasbank** belirler; işlem anında **bloke** edilir.
- Teminat **BİSTECH** portföy bazlı risk sistemiyle hesaplanır. Temel parametre **Fiyat Değişim Aralığı (PSR)**'dır. Takasbank parametreleri **tek taraflı** artırabilir.
- Teminat nakit ya da döviz, DİBS, hisse gibi varlıklarla verilebilir.
  - Belirli bir kısmın (ör. **%50**) **nakit TL** olması zorunludur.
  - Nakit dışı varlıklar **iskontolu** değerle sayılır.
- **Karşıt pozisyonlar** (ör. Şubat'ta uzun, Mart'ta kısa GARAN) netleştirilir ve **indirimli** teminat istenir.

### Örnek
- Hisse fiyatı 200 TL × 100 adet = 1 sözleşme **20.000 TL**. 5 sözleşmelik pozisyon **100.000 TL** eder.
- PSR %15 ise başlangıç teminatı 100.000 × %15 = **15.000 TL**.
- **Kaldıraç** = 100.000 / 15.000 = 1 / %15 ≈ **6,66**.
- Fiyat **%5** artarsa kâr 5.000 TL olur; bu teminata göre **%33,3** getiridir. Fiyat düşerse teminatın %33,3'ü kaybedilir.

- Aracı kurum Takasbank'ın oranından **daha yüksek** teminat isteyebilir. Bu durumda kaldıraç düşer (ör. 2 kat teminatla **3,33**).
- **Komisyon**, teminat üzerinden değil **pozisyonun toplam büyüklüğü** üzerinden alınır. Yüksek kaldıraçta maliyet yükü ağırdır.

---

## 6. Teminat tamamlama çağrısı (margin call)
- Gün sonu değerlemede teminat, **başlangıç teminatının altına** düşerse çağrı yapılır.
- Yatırımcı ya teminatı **güncel başlangıç teminatı** seviyesine tamamlar (nakit TL ile) ya da pozisyonu **azaltır**.
- **Süre:** ertesi iş günü en geç **15:00**. Aracı kurum daha erken saat belirleyebilir.
  - **Fiziki teslimatlı döviz** sözleşmelerinde ve **yarım günlerde** son saat **11:00**'dir.
- Çağrı karşılanmazsa pozisyon **re'sen kapatılabilir**.
- **Gün içinde** teminat sürdürme seviyesinin altına inerse:
  - pasif emirler **iptal edilir**,
  - **pozisyon artırıcı** emir engellenir.
  - Ama bu, gün sonunda margin call alınacağı anlamına **gelmez**.

> [!ezber]
> **Kod:** F_ + dayanak + AAYY · **Pay** 100 adet · **Endeks** ×10 TL · **Döviz** 1.000
> **Kaldıraç = 1 / teminat oranı** · **Margin call** ertesi gün 15:00 (fiziki döviz ve yarım gün 11:00)
`,
  sorular: [
    {
      s: "Tezgâhüstü (OTC) türev piyasalarla ilgili hangisi doğrudur?",
      c: ["İşlemler borsanın belirlediği standart sözleşmelerle yapılır.", "Merkezi bir takas kurumu her işlemde taraf olarak karşı taraf riskini tamamen üstlenir ve teminat ister.", "Vade, miktar ve fiyat taraflarca belirlenir; ancak karşı taraf riski vardır.", "Türkiye'deki en bilinen örneği VİOP'tur.", "Tüm sözleşmelerde günlük uzlaşı mekanizması zorunludur."],
      d: 2,
      a: "OTC piyasalar **esnektir**; şartlar taraflarca serbestçe belirlenir. Ancak merkezi garanti olmadığı için **karşı taraf riski** vardır. VİOP ise organize bir piyasadır.",
      k: "1003 resmi not s. 162"
    },
    {
      s: "VİOP'ta merkezi karşı taraf uygulamasıyla ilgili hangisi **yanlıştır?**",
      c: ["Takasbank alıcıya karşı satıcı, satıcıya karşı alıcı olur.", "Yatırımcılar karşı tarafın mali durumunu analiz etmek zorunda değildir.", "Müşteri teminatları aracı kurumun kendi borçları için kullanılabilir.", "Müşteri ve portföy hesapları birbirinden ayrıdır.", "Teminatlar Takasbank nezdinde saklanır."],
      d: 2,
      a: "Müşteri ve portföy hesapları kesin olarak ayrıdır. Aracı kurum iflas etse bile müşteri teminatı Takasbank güvencesindedir ve aracı kurumun borçları için **kullanılamaz**.",
      k: "1003 resmi not s. 163"
    },
    {
      s: "Vadeli işlem (futures) ile forward sözleşmeler arasındaki farklarla ilgili hangisi doğrudur?",
      c: ["Forward sözleşmeler organize borsada, standart koşullarla işlem görür.", "Futures sözleşmelerde şartlar taraflarca serbestçe belirlenir.", "Forward'da günlük uzlaşı yoktur; hesaplaşma vade sonunda tek seferde yapılır.", "Futures sözleşmelerde karşı taraf riski forward'a göre daha yüksektir.", "Forward sözleşmelerin likiditesi futures sözleşmelerinden daha yüksektir."],
      d: 2,
      a: "Forward OTC'de işlem gören esnek bir sözleşmedir. **Günlük uzlaşı yoktur**, hesaplaşma vade sonunda tek seferde yapılır. Karşı taraf riski taşır ve likiditesi düşüktür.",
      k: "1003 resmi not s. 165"
    },
    {
      s: "VİOP'ta F_XU0300426 kodlu sözleşme için hangisi doğrudur?",
      c: ["Garanti Bankası payı üzerine yazılmış, Nisan 2026 vadeli bir opsiyondur.", "BIST 30 endeksi üzerine yazılmış, Nisan 2026 vadeli bir vadeli işlem sözleşmesidir.", "Dolar/TL üzerine yazılmış, Nisan 2026 vadeli bir sözleşmedir.", "BIST 30 endeksi üzerine yazılmış, 4 Ocak 2026 vadeli bir sözleşmedir.", "Altın üzerine yazılmış bir varanttır."],
      d: 1,
      a: "**F_** vadeli işlemi, **XU030** BIST 30 endeksini, **0426** ise Nisan 2026 vadesini gösterir. Vade, ayın son iş günüdür.",
      k: "1003 resmi not s. 165–166"
    },
    {
      s: "VİOP'ta pay vadeli işlem sözleşmelerinin sözleşme büyüklüğü nedir?",
      c: ["1 adet pay", "10 adet pay", "100 adet pay", "1.000 adet pay", "Endeks × 10 TL"],
      d: 2,
      a: "Pay vadeli işlem sözleşmesi **100 adet** paydır. Endeks vadeli **endeks × 10 TL**, döviz vadeli **1.000** birim dövizdir.",
      k: "1003 resmi not s. 166"
    },
    {
      s: "Bir vadeli işlem sözleşmesinde mevcut pozisyonunu kapatmak isteyen bir yatırımcı, piyasaya yeni giren bir yatırımcıyla eşleşmiştir. Açık pozisyon sayısı nasıl etkilenir?",
      c: ["Artar", "Azalır", "Değişmez", "İkiye katlanır", "Sıfırlanır"],
      d: 2,
      a: "Kapatan bir taraf ile yeni giren bir taraf eşleşirse açık pozisyon **değişmez**; risk yalnızca el değiştirir. İki yeni taraf eşleşirse artar, iki kapatan taraf eşleşirse azalır.",
      k: "1003 resmi not s. 167–168"
    },
    {
      s: "Takasbank'ın bir pay vadeli işlem sözleşmesi için belirlediği fiyat değişim aralığı %20'dir. Yatırımcının hesabında başka pozisyon yoksa bu işlemdeki kaldıraç oranı nedir?",
      c: ["2", "4", "5", "6,66", "20"],
      d: 2,
      a: "Kaldıraç = 1 / teminat oranı = 1 / 0,20 = **5**. Örneğin %15 için kaldıraç yaklaşık 6,66 olur.",
      k: "1003 resmi not s. 169"
    },
    {
      s: "Gün sonu değerlemesinde teminatı başlangıç teminatının altına düşen yatırımcıya yapılan teminat tamamlama çağrısı, standart sözleşmelerde en geç ne zamana kadar karşılanmalıdır?",
      c: ["Aynı gün 18:00", "Ertesi iş günü 11:00", "Ertesi iş günü 15:00", "İki iş günü sonra 15:00", "Vade sonuna kadar"],
      d: 2,
      a: "Çağrı **ertesi iş günü en geç 15:00**'e kadar karşılanmalıdır. Fiziki teslimatlı döviz sözleşmelerinde ve yarım günlerde son saat **11:00**'dir. Karşılanmazsa pozisyon re'sen kapatılabilir.",
      k: "1003 resmi not s. 170"
    }
  ]
});
