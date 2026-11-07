SPL.gun("1012", 17, {
  okuma: `
## Bugünün haritası
1. VİOP temerrüt cezasının **son ayrıntıları**
2. **Tezgâhüstü (OTC) türev** işlemler: TL **IRS** ve **OIS**
3. OTC **takas işlemleri**: dönemsel ödeme, değişim teminatı, finansman maliyeti
4. OTC **takas saatleri**
5. OTC **risk yönetimi**: takasa kabul ve NAT
6. OTC **teminatlar**, **garanti fonu** ve **temerrüt**

---

## 1. VİOP temerrüt cezası: kalan ayrıntılar
- Üyeye süre verilmiş olsa bile ceza hesabında **temerrüde düşme anı** esas alınır.
- Ceza, yükümlülüğün **temerrütlü olarak yerine getirildiği gün** elektronik ortamda bildirilir.
- **Döviz** yükümlülüklerde ceza **TL** üzerinden hesaplanır; **TCMB döviz alış kuru** kullanılır.
- Hesaplanan ceza **asgari cezanın altındaysa asgari ceza** uygulanır. Asgari tutar, Hazinenin **yeniden değerleme oranı** dikkate alınarak belirlenir.
- Ceza **takas ücretleriyle birlikte** yansıtılır. Ödenmezse Takasbank üyenin varlıkları üzerinde **takas, mahsup ve hapis hakkına** sahiptir.

---

## 2. Tezgâhüstü türev işlemler
- Takasbank, **19.12.2019**'dan itibaren **TL IRS** (faiz oranı swabı) ve **TL OIS** (gecelik endeksli swap) kontratlarına **MKT güvencesiyle** takas ve risk yönetimi hizmeti veriyor.
- OIS kontratları **TLREF** faizine dayanır, **IOSCO** standartlarına uygundur ve **her iki bacağı da TL**'dir.
- **Amaç:** orta ve uzun vadeli **TL faiz riskinin**, **döviz likiditesi kullanılmadan** yönetilmesi.
- **Teminatların kabulü, muhafazası, değerlemesi ve nemalandırılması** Takasbank tarafından yapılır.
- İşlemler BISTECH'e **sözleşme yenileme yöntemiyle** kabul edilir.

---

## 3. OTC takas işlemleri
- VİOP'taki gibi Takasbank **yalnızca üyeyi** muhatap alır. Çağrı karşılanmazsa müşteriye bildirim yapmadan **re'sen** işlem yapabilir.
- **Dönemsel ödeme, değişim teminatı ve finansman maliyeti** gün sonu döngüsünde hesaplanır.

### Dönemsel ödemeler
| Kontrat | Borçludan tahsil | Alacaklıya dağıtım |
|---|---|---|
| **IRS** | Dönem sonundan **bir önceki iş günü** gün sonundan itibaren | **Dönem sonu tarihinde** eksi nakit kapama son saatine (**11:00**) kadar |
| **OIS** | **Dönem sonu tarihindeki** gün sonundan itibaren | Dönem sonunu **izleyen iş günü** 11:00'e kadar |

- TL teminat borcu karşılamazsa kalan tutar **11:00**'e kadar **TL olarak** ödenir; ödenmezse **temerrüt** olur.
- Dağıtım havuzu yetersizse alacaklar, **en düşükten en yükseğe** sıralanarak kısmen dağıtılır.

### Değişim teminatı ve finansman maliyeti
- **Net pozitif değişim teminatlı** taraf, tutarı T gün sonundan **T+1 11:00**'e kadar **alır**. **Net negatif** taraf aynı sürede **öder**.
- **Net pozitif sözleşme değerli** taraf, finansman maliyetini **öder**; **net negatif** taraf **alır**. Süre T+1 gün sonundan ertesi gün 11:00'e kadardır.

*Finansman maliyeti = Sözleşme değeri × TLREF × Gün sayısı / 365*

- TLREF **negatifse** pozitif sözleşme değerli taraf finansman maliyetini **alır**.
- Hak ve yükümlülükler **işlem ve bağlı saklama hesabı** bazında belirlenir.

---

## 4. OTC takas saatleri

| Süreç | Tam gün | Yarım gün |
|---|---|---|
| Nema dağıtımı | 07:30 | 07:30 |
| **Eksi nakit kapama** | **11:00** | 11:00 |
| **Marjin kapama** (temerrüt başlangıcı) | **15:00** | **11:00** |
| TL teminat çekme ve nemalandırma | **15:40** | 11:40 |
| **Son işlem saati** | **17:45** | **13:00** |
| TL dışı teminat çekme ve teminat yatırma | 19:00 | 12:45 |
| Akşam döngüsü ve **teminat tamamlama çağrısı** | **19:30+** | 14:00+ |

- Takas süresini sistem sorunlarında **Genel Müdür** geçici olarak değiştirebilir.

---

## 5. OTC risk yönetimi
- Risk yönetimi **Nakit Akım Teminatlandırma (NAT)** yöntemiyle yapılır.
- Üyenin kendi işlemleri **Üye** hesabında, müşteri işlemleri **işlem ve bağlı saklama hesabı** şeklindeki müşteri hesaplarında izlenir. Risk **hesap bazında** yönetilir.
- **Takasa kabul öncesi ve sonrası** risk yönetimi vardır. **Teminatı yetersiz hesapların işlemleri merkezi takasa kabul edilmez.**

### Başlangıç teminatı parametreleri
| Parametre | Değer |
|---|---|
| Güven düzeyi | **%99,50'den az olamaz** |
| Elde tutma süresi | **5 günden az olamaz** |
| Tarihsel veri | En az son **12 ay** |

> [!dikkat]
> OTC'de elde tutma süresi **en az 5 gündür**. BAP ve pay piyasasında bu süre **2 gündür**. Bunun nedeni OTC işlemlerin daha az likit olması ve kapatılmasının daha uzun sürmesidir.

### NAT yönteminde
- Verim eğrileri **benzer nitelikteki** OTC işlemleri için ayrı ayrı oluşturulur. Netleştirme **verim eğrisi bazında** yapılır.
- Temel bileşenler aynıdır: **paralel kayma, eğim, eğrilik**. Bunlar %99,50 güvenle belirlenir ve **ayda bir** gözden geçirilir.
- *Teminat gereksinimi = (Şoksuz NBD − şoklu NBD) + değişim teminatı tutarı*

---

## 6. OTC teminatlar, garanti fonu ve temerrüt

### Teminatlar
- Kabul edilen varlıklar: **döviz**, **DİBS ve sukuk**, **Eurobond**, İTMK, İDMK, VTMK, VDMK, borsada işlem gören sertifikalar.
- OTC'ye özgü olarak **ABD ve Almanya iç borçlanma senetleri** de kabul edilir. Bunlar **işlem gören fiyatlarla** değerlenir.
- Takasbank **Yönetim Kurulu** yeni varlık kabul edebilir ve limitleri değiştirebilir.

### Garanti fonu
- MKT üyeleri için katılım **zorunludur**.
- İlave katkı payı yılda en fazla **4 kez** istenebilir ve toplamı yatırılmış payı geçemez.
- **Sabit katkı payı: 500.000 TL.**
- Fon büyüklüğü **3 aydan uzun olmayan** aralıklarla sınanır.
- **Üyelikten ayrılan** üyenin azami yükümlülüğü Swap Piyasası'yla aynıdır:
  - yükümlülükler yerine getirildikten sonra **2 kat** (temerrüt varsa **3 kat**),
  - yerine getirilmeden **3 kat** (temerrüt varsa **4 kat**).

### Temerrüt
Borç şu hallerde **muaccel** olur:
- gün içi ya da gün sonu **teminat tamamlama** yükümlülüğünün yerine getirilmemesi,
- **garanti fonu** tamamlama yükümlülüğünün yerine getirilmemesi,
- **dönemsel ödeme, değişim teminatı** ya da **finansman maliyeti** yükümlülüğünün yerine getirilmemesi,
- Takasbank'ın yükümlülükleri **tasfiye etmeye** karar vermesi.

Bir borçtan temerrüde düşen üyenin **o günkü tüm borçları** muaccel olur.
- Temerrütte üye **teminat çekemez**. En fazla **izleyen iş günü** belirlenen saate kadar süre verilir. Sonra Takasbank organize ya da OTC piyasalarda işlem yapar.
- Takasbank'ın zararı temerrüt faizini aşarsa, aşan kısmı temerrüde düşen üye **tazmin eder**.

> [!ezber]
> **OTC:** TL **IRS** ve **OIS** (TLREF) · 19.12.2019 · **sözleşme yenileme** · **NAT** · güven ≥%99,5 ve **elde tutma ≥5 gün**
> **Sabit GF payları:** OTC **500 bin** · Pay 200 bin · BAP 700 bin · Para Piyasası 50 bin · Swap 2.875.000 · VİOP 3.575.000 TL
`,
  sorular: [
    {
      s: "Takasbank'ın 19.12.2019 tarihinden itibaren MKT güvencesiyle takas hizmeti verdiği tezgâhüstü türev ürünler hangileridir?",
      c: ["Döviz forward ve döviz swap işlemleri", "TL IRS ve TL OIS işlemleri", "CDS ve toplam getiri swabı (TRS)", "Altın forward ve emtia swap işlemleri", "Pay ve pay endeksi opsiyonları"],
      d: 1,
      a: "Takasbank, **TL IRS** ve **TL OIS** kontratlarına 19.12.2019'dan itibaren MKT güvencesiyle takas hizmeti vermektedir. OIS kontratları TLREF'e dayanır ve her iki bacağı da TL'dir.",
      k: "1012 resmi not s. 153"
    },
    {
      s: "Tezgâhüstü türev işlemler Takasbank'ın BISTECH sistemine hangi yöntemle kabul edilir?",
      c: ["Açık teklif yöntemi", "Sözleşme yenileme yöntemi", "Brüt takas yöntemi", "İhale yöntemi", "Şartlı virman yöntemi"],
      d: 1,
      a: "OTC işlemler BISTECH sistemine **sözleşme yenileme yöntemiyle** kabul edilir. VİOP gibi organize piyasalarda ise açık teklif yöntemi kullanılır.",
      k: "1012 resmi not s. 153"
    },
    {
      s: "Tezgâhüstü türev işlemlerde sözleşme değerine ilişkin finansman maliyeti hangi faiz oranı kullanılarak hesaplanır?",
      c: ["TCMB politika faizi", "TLREF", "BIST repo oranı", "FED Funds rate", "Libor"],
      d: 1,
      a: "Finansman maliyeti = Sözleşme değeri × **TLREF** × Gün sayısı / 365 formülüyle hesaplanır.",
      k: "1012 resmi not s. 154"
    },
    {
      s: "Tezgâhüstü türev işlemlerde net pozitif sözleşme değerine sahip taraf için hangisi doğrudur (TLREF pozitifken)?",
      c: ["Finansman maliyetini alır.", "Finansman maliyetini öder.", "Değişim teminatını öder.", "Hiçbir ödeme yapmaz veya almaz.", "Dönemsel ödemeyi iki katı öder."],
      d: 1,
      a: "Net **pozitif** sözleşme değerine sahip taraf finansman maliyetini **öder**, net negatif taraf alır. TLREF negatifse pozitif değerli taraf finansman maliyetini alır.",
      k: "1012 resmi not s. 154"
    },
    {
      s: "Tezgâhüstü türev işlemlerde tam iş gününde son işlem saati kaçtır?",
      c: ["16:00", "16:30", "17:00", "17:30", "17:45"],
      d: 4,
      a: "OTC'de tam iş gününde son işlem saati **17:45**, yarım iş gününde 13:00'tür.",
      k: "1012 resmi not s. 154"
    },
    {
      s: "Tezgâhüstü türev işlemlerde teminatı yetersiz hesapların işlemleri için ne olur?",
      c: ["İşlemler takasa kabul edilir, teminat sonradan istenir.", "İşlemler merkezi takasa dahil edilmez.", "İşlemler başka üyeye devredilir.", "İşlemler brüt takasa alınır.", "Hesap otomatik olarak kapatılır ve ceza kesilir."],
      d: 1,
      a: "OTC'de takasa kabul öncesi risk yönetimi uygulanır; **teminatı yetersiz hesapların işlemleri merkezi takasa dahil edilmez**.",
      k: "1012 resmi not s. 155"
    },
    {
      s: "Tezgâhüstü türev işlemlerde başlangıç teminatı parametrelerinde kullanılacak elde tutma süresi için hangisi doğrudur?",
      c: ["1 gün", "En fazla 2 gün", "En az 5 gün", "Tam olarak 10 gün", "Belirlenmez"],
      d: 2,
      a: "OTC'de başlangıç teminatı için güven düzeyi **%99,50'den**, elde tutma süresi **5 günden** az olamaz; veri en az son 12 aydır.",
      k: "1012 resmi not s. 156"
    },
    {
      s: "Tezgâhüstü türev işlemler garanti fonunda üyelerin yatırması gereken sabit katkı payı ne kadardır?",
      c: ["50.000 TL", "200.000 TL", "500.000 TL", "700.000 TL", "3.575.000 TL"],
      d: 2,
      a: "OTC garanti fonunda sabit katkı payı **500.000 TL**'dir.",
      k: "1012 resmi not s. 158"
    }
  ]
});
