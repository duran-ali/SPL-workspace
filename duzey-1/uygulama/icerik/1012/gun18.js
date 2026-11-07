SPL.gun("1012", 18, {
  okuma: `
## Bugünün haritası
Kursun son günü, tüm piyasaları birleştiren **Takasbank teminat yönetimi**.
1. Teminat **tipleri**: üyelik, işlem (başlangıç, değişim, fiziki teslimat), garanti fonu
2. Piyasalara göre **asgari garanti fonu katkı payları**
3. **Teminata kabul edilen varlıklar** ve genel kurallar
4. Piyasalara göre **TL zorunluluğu** ve kompozisyon
5. **Teminat değerleme katsayıları**
6. Teminatlara ilişkin **genel esaslar** ve **serbest teminat**

---

## 1. Teminat tipleri

| Tip | Ne için? |
|---|---|
| **Üyelik teminatı** | **Aidat, ücret, komisyon** gibi borçlar. VİOP, BAP ve Pay Piyasası'nda **TL** olarak yatırılır. **Ödünç Pay Piyasası'nda (ÖPP) yoktur.** |
| **İşlem teminatı** | **Başlangıç**, **değişim** ve **fiziki teslimat** teminatından oluşur |
| **Garanti fonu** | Temerrüt zararının **teminatları aşan** kısmı |

- Nakit dışı varlıklar, olumsuz piyasada oluşabilecek değer kaybını karşılayacak bir **iskontoyla** değerlenir ve **kompozisyon sınırlarına** tabidir.

### İşlem teminatının üç parçası
- **Başlangıç teminatı:** pozisyon **ilk açıldığında** istenir; temerrütten kapatmaya kadarki riski karşılar.
  - **VİOP, BAP, Pay** ve **OTC**'de **BISTECH Marjin Yöntemi** (portföy bazlı) kullanılır.
  - **ÖPP** ve **BİAŞ Para Piyasası**'nda **tarihsel benzetim esaslı RMD** kullanılır.
- **MKT Yönetmeliği**'nin asgari şartları:
  - **%99 tek taraflı güven**,
  - **2 iş günü** elde tutma (nakde dönüştürme) süresi,
  - **12 ay** tarihsel veri.
- **Değişim teminatı:** pozisyonların **piyasa fiyatıyla** değerlenmesinden doğan farktır; gün içinde ve **her durumda gün sonunda** hesaplanır.
- **Fiziki teslimat teminatı:** **yalnızca VİOP**'ta, fiziki teslimatlı sözleşmelerde alınır.
  - *Fiziki teslimat teminatı = Sözleşme sayısı × Dayanağın fiziki teslimat parametresi*

---

## 2. Asgari garanti fonu katkı payları

| Piyasa | Asgari katkı payı (TL) |
|---|---|
| **VİOP** | **3.575.000** |
| **Swap Piyasası** | **2.875.000** |
| **BAP** | **700.000** |
| **Tezgâhüstü türev** | **500.000** |
| **Pay Piyasası** | **200.000** |
| **Takasbank Ödünç Pay Piyasası** | **125.000** |
| **BİAŞ Para Piyasası** | **50.000** |

- Yatırılmış katkı payları, en riskli üye ile **2. ve 3.** en riskli üyelerin **birlikte** temerrüdünden doğacak kaynak ihtiyacının üyelere **riskleri oranında** bölüştürülmesiyle bulunur.
- Kaynak ihtiyacı, işlem teminatıyla **karşılanamayan risk (uncovered risk)** üzerinden hesaplanır.

---

## 3. Teminata kabul edilen varlıklar
- **Tüm MKT piyasalarında** kabul edilenler:
  - **nakit TL**, **USD, EUR, GBP**,
  - **DİBS**, Hazine **Eurobond**ları, Hazine VKŞ **kira sertifikaları**,
  - İTMK, İDMK, VTMK, VDMK.
- Pek çok piyasada kabul edilenler:
  - **BIST 100** payları, **Borsa İstanbul A.Ş. payları**,
  - hisse senedi, borçlanma araçları ve **para piyasası şemsiye fonu** payları,
  - **standart altın**, **Darphane altın sertifikaları**.
- **BYF payları** yalnızca birkaç piyasada kabul edilir. **ELÜS yalnızca VİOP**'ta kabul edilir.
- **G7 iç borçlanma senetleri ve Eurotahvilleri**, **Swap** ve **OTC**'de kabul edilir, ama **yalnızca ABD ve Almanya**'nınkiler.
- TL dışındaki tüm teminatlar **nakit dışı** sayılır.

### Genel kurallar
- **%25 sınırı:** aynı ihraççı ya da banka ve **aynı sermaye grubunun** kıymet ve garantilerinin toplamı teminatların **%25**'ini geçemez. Hazine kıymetleri ve çoğunluğu Hazinede olan bankalar bu sınırın dışındadır.
- Üye, **kendisinin ve kendi grubunun** kıymet ve garantilerini teminat olarak **veremez**.
- Sabit getirililer **anapara ve kuponlarıyla birlikte** verilir. **Ayrıştırılmış** kıymetler kabul edilmez. Bu kıymetler **itfadan önceki iş günü sonunda** teminat niteliğini kaybeder.
- **Özsermaye hallerinden** doğan nakit, üyenin TL teminat hesabına geçer. Pay teminatında değer değişimine karşı teminat seviyesini korumak **üyenin sorumluluğundadır**.
- **Altın**, BİAŞ'ta işlem gören **100 gram ve katları** standart külçe olmalıdır.
- VDMK ve benzerlerinden yalnızca **Türkiye Kalkınma ve Yatırım Bankası** varlık finansmanı fonlarının **TL** ihraçları kabul edilir; uzun vadeli ulusal notu en az **AA+** olmalıdır.
- **ELÜS**'lerden yalnızca **arpa, buğday ve mısır** kabul edilir.

---

## 4. TL zorunluluğu ve kompozisyon

| Piyasa | İşlem teminatında asgari TL | Garanti fonunda |
|---|---|---|
| **VİOP** | **%50** | En az **%30 nakit TL** |
| **Pay Piyasası** | **%10** | %100'ü nakit, döviz, DİBS ve Eurobond ile tesis edilebilir |
| **BAP** | **Yok** | Aynı |
| **BİAŞ Para Piyasası** | **Yok** (garanti fonunda da yok) | Aynı |
| **OTC türev** | **Yok** | Aynı |
| **ÖPP** | — | **TL zorunluluğu yok** |

- **ÖPP**'de teminata alınan **tek bir payın** değeri, azami değerlenmiş pay tutarının **%75**'ini geçemez. **Ödünç veren** taraftan teminat **istenmez**.

---

## 5. Teminat değerleme katsayıları
*Değerleme katsayısı = 1 − (Piyasa riski + Likidite riski + Kredi riski)*

- Katsayılar **riske maruz değer** yaklaşımıyla belirlenir. Endüstri standardı olan **tarihsel benzetim (simülasyon)** kullanılır.
  - **Avantajları:** dağılım varsayımı yoktur, **krizleri** yakalar, volatilite ve korelasyon tahmin hatası yoktur.
- Katsayılar **Haziran ve Aralık**'ta **yılda iki kez** gözden geçirilir. Kompozisyon limitleri **yılda bir** değerlendirilir.
- Tüm MKT piyasalarında **yeknesak** (aynı) katsayılar uygulanır.

| Teminat | Katsayı |
|---|---|
| **Nakit TL** | **%100** |
| **Borsa İstanbul A.Ş. payları** | **%100** |
| **Para piyasası** şemsiye fonu payları | %97 |
| DİBS **0–1 yıl** / 1–5 yıl / 5+ yıl | **%94** / %81 / %78 |
| Borçlanma araçları şemsiye fonu payları | %93 |
| **USD** | **%90** |
| EUR, GBP | %89 |
| Eurobond (USD), 5 yıla kadar | %89 |
| Hisse senedi şemsiye fonu payları, **standart altın** | %88 |
| **BIST 30** payları / **BIST 100** payları | **%84** / **%83** |
| ELÜS: **mısır / buğday / arpa** | %86 / %77 / **%68** |

*Teminat değeri = Piyasa değeri × Değerleme katsayısı*

- **Örnek:** 1 USD = 39 TL iken 10.000 USD teminat → 10.000 × 39 × 0,90 = **351.000 TL**.

---

## 6. Genel esaslar
- **SPKn'ye göre** MKT teminatları:
  - amaç dışında **kullanılamaz**, üçüncü kişilere **devredilemez**,
  - kamu alacakları için bile **haczedilemez**, **rehnedilemez**,
  - idari tasfiyeden **etkilenmez**, **iflas masasına girmez**, **ihtiyati tedbir** uygulanamaz.
- **Tekil pozisyon hesabındaki** müşteri teminatı **yalnızca o müşterinin** yükümlülükleri için kullanılır.
- Takasbank, SPK onaylı yönergelerdeki oranların **altında kalmamak** üzere piyasa, araç ya da üye bazında **farklı oranlar** belirleyebilir.
- Teminatlar Takasbank'ın varlıklarından **ayrı** izlenir. Müşteri teminatları **her müşteri için ayrı alt hesaplarda** tutulur. Fazla teminat da **hesap sahibine** aittir.
- Müşteri hesaplarındaki teminat açıklarını tamamlamaktan **MKT üyesi** sorumludur.
- Teminat tamamlama çağrısı **elektronik** yapılır ve üyeye ulaştığı anda **alınmış** sayılır.
- **İade:** esas olarak **aynen**; mümkün değilse **mislen**; o da olmazsa **eşdeğeri** üzerinden yapılır.
- Teminat varlıklarından doğan haklar **teminatı verene** aittir.

### Serbest teminat
*Serbest teminat = Değerlenmiş teminat − Bulunması gereken başlangıç teminatı ± Değişim teminatı*

**Örnek:**
1. Hesapta 2.000 TL teminat var; pozisyon yokken **tamamı çekilebilir**.
2. Başlangıç teminatı 1.000 TL olan BIST 30 vadeli sözleşmesi alınınca yalnızca **1.000 TL** çekilebilir.
3. Akşam **200 TL zarar** oluşursa kullanılabilir teminat azalır. 200 TL ertesi iş günü **kâr eden tarafa** aktarılır.

> [!ezber]
> **Asgari GF:** VİOP 3,575 mn · Swap 2,875 mn · BAP 700 bin · OTC 500 bin · Pay 200 bin · ÖPP 125 bin · Para Piyasası 50 bin TL
> **Asgari TL:** VİOP %50 · Pay %10 · BAP, Para Piyasası ve OTC yok · **Katsayılar:** TL %100 · USD %90 · BIST 30 %84
`,
  sorular: [
    {
      s: "Takasbank'ın MKT hizmeti verdiği piyasalardan hangisinde üyelik teminatı uygulaması **bulunmaz?**",
      c: ["VİOP", "Pay Piyasası", "Borçlanma Araçları Piyasası", "Ödünç Pay Piyasası", "Hepsinde uygulanır"],
      d: 3,
      a: "MKT hizmeti verilen **Ödünç Pay Piyasası'nda** üyelik teminatı uygulaması **yoktur**. VİOP, BAP ve Pay Piyasası'nda üyelik teminatı TL olarak yatırılır.",
      k: "1012 resmi not s. 163"
    },
    {
      s: "Ödünç Pay Piyasası ve BİAŞ Para Piyasası'nda başlangıç teminatı hesaplamalarında hangi yöntem kullanılır?",
      c: ["BISTECH Marjin Yöntemi (portföy bazlı)", "Nakit Akım Teminatlandırma (NAT) Yöntemi", "Tarihsel benzetim esaslı Riske Maruz Değer", "Sabit oranlı (yüzdesel) teminatlandırma", "SPAN tarama riski yöntemi"],
      d: 2,
      a: "VİOP, BAP, Pay ve OTC'de BISTECH Marjin Yöntemi; **ÖPP ve BİAŞ Para Piyasası**'nda ise **tarihsel benzetim esaslı RMD** yöntemi kullanılır.",
      k: "1012 resmi not s. 164"
    },
    {
      s: "Fiziki teslimat teminatı hangi piyasada uygulanır?",
      c: ["Pay Piyasası", "BAP", "VİOP", "BİAŞ Para Piyasası", "Ödünç Pay Piyasası"],
      d: 2,
      a: "Fiziki teslimat teminatı **VİOP**'ta, fiziki teslimata konu sözleşmelerde uygulanır: sözleşme sayısı × dayanağın fiziki teslimat parametresi.",
      k: "1012 resmi not s. 164"
    },
    {
      s: "Takasbank Ödünç Pay Piyasası'nda asgari garanti fonu katkı payı tutarı ne kadardır?",
      c: ["50.000 TL", "125.000 TL", "200.000 TL", "500.000 TL", "700.000 TL"],
      d: 1,
      a: "Asgari katkı payları: VİOP 3.575.000, Swap 2.875.000, BAP 700.000, OTC 500.000, Pay 200.000, **ÖPP 125.000**, BİAŞ Para Piyasası 50.000 TL.",
      k: "1012 resmi not s. 165"
    },
    {
      s: "Elektronik ürün senetlerinden (ELÜS) hangileri Takasbank tarafından teminat olarak kabul edilir?",
      c: ["Tüm tarım ürünlerinin ELÜS'leri", "Yalnızca buğday", "Arpa, buğday ve mısır", "Pamuk ve fındık", "ELÜS teminat olarak kabul edilmez."],
      d: 2,
      a: "ELÜS'lerden **arpa, buğday ve mısır** cinsinden olanlar teminat olarak kabul edilir; yalnızca VİOP'ta geçerlidir.",
      k: "1012 resmi not s. 166"
    },
    {
      s: "Takasbank'ın MKT hizmeti verdiği piyasalardan hangisinde işlem teminatı için asgari Türk Lirası gereksinimi **yoktur?**",
      c: ["VİOP", "Pay Piyasası", "BAP", "VİOP ve Pay Piyasası", "Hiçbiri; tüm piyasalarda asgari TL şartı vardır."],
      d: 2,
      a: "VİOP'ta en az **%50**, Pay Piyasası'nda en az **%10** TL gerekir. **BAP**, BİAŞ Para Piyasası ve OTC'de asgari TL gereksinimi **yoktur**.",
      k: "1012 resmi not s. 167–168"
    },
    {
      s: "1 USD'nin 39 TL olduğu bir günde üyenin teminat olarak yatırdığı 10.000 USD'nin teminat değeri ne kadardır? (USD değerleme katsayısı %90)",
      c: ["39.000 TL", "300.000 TL", "351.000 TL", "390.000 TL", "429.000 TL"],
      d: 2,
      a: "Teminat değeri = Piyasa değeri × Değerleme katsayısı = 10.000 × 39 × 0,90 = **351.000 TL**.",
      k: "1012 resmi not s. 170"
    },
    {
      s: "Teminatların iadesiyle ilgili Takasbank MKT Yönetmeliği'ndeki esas hangisidir?",
      c: ["Teminatlar türüne bakılmaksızın her zaman nakit olarak iade edilir.", "Aynen iade esastır; olmazsa mislen, o da olmazsa eşdeğeri iade edilir.", "Teminatlar iade edilmez; üyelik sona erince garanti fonuna aktarılır.", "Teminatlar yalnızca mislen, yani aynı tür ve miktarda iade edilir.", "Teminatlar üye talep ederse iade edilir; aksi halde nemalandırılır."],
      d: 1,
      a: "Teminatların **aynen** iadesi esastır; aynen iade mümkün değilse **mislen**, o da mümkün değilse **eşdeğerleri** üzerinden iade yapılır.",
      k: "1012 resmi not s. 171"
    }
  ]
});
