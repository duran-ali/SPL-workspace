SPL.gun("1006", 13, {
  okuma: `
## Bugünün haritası
Pay Piyasası işleyişinin son teknik konularındayız: sisteme **nasıl erişildiği**, **kredili işlem ve açığa satış** kuralları, **takas ve temerrüt**, **brüt takas** ve **Volatilite Bazlı Tedbir Sistemi (VBTS)**. Açığa satıştaki yukarı adım kuralı ve VBTS'nin beş seviyesi mutlaka ezberlenmeli.

1. Pay Piyasasına **erişim protokolleri**: TW, FixAPI, OUCH, ITCH
2. **Kredili işlem ve açığa satış** listesi
3. **Açığa satışta fiyat sınırı** ve yukarı adım kuralı
4. Açığa satış emri girişi ve bülten
5. İşlem terminali sertifikası
6. **Takas-saklama ve temerrüt**
7. **Brüt takas (BT)** ve piyasa yapıcı muafiyeti
8. **Volatilite Bazlı Tedbir Sistemi (VBTS)**

---

## 1. Erişim protokolleri
| Protokol | Özellik |
|---|---|
| **İşlem terminalleri (TW, Omnet API)** | Borsa salonunda ve üye ofislerinde; emir iletim kapasitesi (değişiklik ve iptal dâhil) **saniyede 10**. Temsilci yardımcısı, temsilci ve **baş temsilci (şef broker)** uygulamaları var; tüm terminaller tek tip. |
| **FixAPI** | Üç amaçla: **Order Entry** (emir, kotasyon, özel işlem bildirimi; eşyerleşim ve uzak erişimden), **Reference Data** (araç bazında referans bilgi), **Drop Copy** (üyenin emir, kotasyon, işlem ve özel işlem bildirimi akışı; kullanıcı bazında filtreleme) |
| **OUCH** | En **hızlı emir iletim** protokolü; **yüksek frekanslı işlemler** için. Yalnız **limit emirler** ve **kotasyon emirleri** kullanılabilir. |
| **ITCH** | En hızlı **veri yayın** protokolü; çok düşük gecikmeyle emir defteri verisine erişim |

> [!ezber] **OUCH = emir iletimi** (hızlı, yalnız limit ve kotasyon). **ITCH = veri yayını** (hızlı piyasa verisi).

- BISTECH işlem terminallerini yalnız **BISTECH üye temsilcisi eğitimlerine katılmış ve başarılı olmuş** temsilciler kullanabilir.

---

## 2. Kredili işlem ve açığa satış listesi
- Açığa satış yapmak için **SPK'dan faaliyet izni** alan kurumlar, izin belgesiyle borsaya başvurarak sistemde yetki alır.
- "**Kredili Menkul Kıymet ve Açığa Satış İşlemlerine Konu Olan Menkul Kıymet Listesi**", **Alt Pazar, PÖİP ve YİP hariç** tüm pazarlardaki payları ve **BYF**'leri kapsar.

| Araç | Kredili alım | Açığa satış |
|---|---|---|
| **Yıldız Pazar, Ana Pazar, GSP** payları | **Var** | **Var** |
| **BYF** | **Var** | **Var** |
| **Gayrimenkul sertifikası (GMS)** | **Var** | **Yok** |
| Varant, sertifika, SDKS, GMF, GSF, emtia sertifikası | Yok | Yok |
| Alt Pazar, PÖİP, YİP payları | Yok | Yok |

### Listeden çıkarma (Seri: V, No: 65 Tebliği)
- İşlem sırası **sürekli kapatılan** paylar **hemen** çıkarılır.
- Sırası **geçici durdurulan** paylar, kapalılık **5 iş gününden fazla** sürerse çıkarılır.
- Çıkarılan paylar **izleyen üç aylık dönemin sonuna kadar** **Geçici Liste**'de kalır: bu dönemde **yeni** kredili işlem ve açığa satışa konu edilemez; ama mevcut pozisyonlar (kredi verenin veya müşterinin aksi talebi yoksa) dönem sonuna kadar **korunabilir**.
- Dönem sonunda yeniden esas listeye alınmazsa pozisyonların **doğrudan tasfiyesi** gerekir.

---

## 3. Açığa satışta fiyat sınırı (yukarı adım kuralı)
**Seri: V, No: 65 Tebliği md. 29:** Açığa satış, aracın **en son gerçekleşen işlem fiyatından daha yüksek** bir fiyattan yapılır. Ancak son fiyat **bir önceki fiyattan yüksekse**, açığa satış **son fiyattan** da yapılabilir.

| Pazar | Yukarı adım kuralı |
|---|---|
| **Yıldız Pazar** | **Uygulanmaz**; fiyat sınırları içindeki her fiyattan açığa satış emri girilebilir |
| **Ana Pazar** ve **BYF** | **Uygulanır** |

- Seans açılışında "en son fiyat", **önceki seansın kapanışıdır**; açığa satış bunun **bir adım üzerinden** verilebilir.
- Baz fiyat **serbestse**, açığa satış **ilk işlem gerçekleştikten sonra** verilebilir.
- Baz fiyat seans içinde değiştiyse, değişimden sonra işlem olmasa bile açığa satış emri girilebilir.

> [!dikkat] Açığa satış emri seansın tüm bölümlerinde ve **devre kesici emir toplamasında** girilebilir; **yalnız açılış seanslarında girilemez**. İlk açığa satış emri açılıştan sonra verilir: açılış fiyatı oluştuysa onun **bir kademe üstünden**, oluşmadıysa önceki günün kapanışının bir kademe üstünden.

> [!ezber] **BIST 100** endeksi gün içinde önceki kapanışa göre **%2 veya daha fazla düşerse**, açığa satışa izinli tüm sıralarda **yukarı adım kuralı** seans sonuna kadar otomatik uygulanır. (EBDKS eşiği ise **%6**.)

---

## 4. Açığa satış emri girişi ve bülten
- Üye emir penceresinde **açığa satış** seçeneğini işaretler; FixAPI'de ayırt edici kodlar kullanılır.
- **Özel işlem bildirimi, kotasyon, orta nokta ve AOF (TAR)** emirleriyle **açığa satış yapılamaz**.
- Bültende pay bazında ilan edilenler: en düşük ve en yüksek açığa satış fiyatı, açığa satış AOF'si, işlem hacmi, işlem adedi ve sözleşme sayısı.

---

## 5. İşlem terminali sertifikası
Pay Piyasası üyeleri işlem terminalleriyle (TW) emir iletir ve işlem yapar. Bu terminalleri yalnız **BISTECH üye temsilci eğitimini başarıyla tamamlamış** temsilciler kullanabilir.

---

## 6. Takas-saklama ve temerrüt
- Yükümlülüklerin yerine getirilmesinde **takas kuruluşunun (Takasbank) düzenlemeleri** geçerlidir. Takas yöntemi, süreleri, mahsup, temerrüt cezaları, asgari temerrüt matrahı, temerrüt komisyonu ve mağdur üyelere iade Takasbank düzenlemelerindedir.
- Takasbank, temerrütten doğan pozisyon açığını kapatmak ve **aynı gün valörlü (T+0)** işlem yapmak için Pay Piyasasında temerrüt işlemi isterse, payın sırası **açık veya kapalı olsun**, **ayrı bir temerrüt sırası** açılır.
- Temerrüt sırası Takasbank'ın talebine göre **cari baz fiyat ve marjlarla** veya **serbest marjla** açılır. Baz fiyatla açılan sıra, Takasbank'ın talebiyle seans içinde **serbest marja** dönüştürülebilir.

> [!bilgi] Pay Piyasasında olağan takas **T+2**'dir; **temerrüt işlemleri** ise **T+0** valörlüdür.

---

## 7. Brüt takas (BT)
**Normal durum: netleştirme.** Takasbank pay bazında ve toplam TL olarak netleştirme yapar. Aynı gün bir payda hem alım hem satım yapan kuruluş, **net bakiye** kadar borçlanır veya alacaklanır. Yatırımcı da yalnız net fark kadar teslim yükümlülüğü taşır.

**Brüt takas:** Netleştirmenin **kaldırıldığı** paylarda uygulanır.
- Alım yapacak yatırımcının takas tarihinde **alımını karşılayacak nakdi**, satım yapacak yatırımcının **satımını karşılayacak payı** hesabında bulundurması gerekir.
- Takas alacakları, takas süresinden sonra dağıtılır.
- **Amaç:** Üçüncü kişilerde yanlış izlenim uyandıran, piyasaya net katkı sağlamayan işlemlerin ve **olağan dışı fiyat-miktar hareketlerinin** önüne geçmek.
- Yalnız **takasla ilgilidir**; yatırım kararını etkileyen veya yatırımı engelleyen bir yönü yoktur; riskleri **azaltabilir**.

### Piyasa yapıcı ve likidite sağlayıcı muafiyeti
BT'ye alınan paylarda piyasa yapıcı veya likidite sağlayıcı varsa, bunların faaliyetleri kapsamındaki işlemlerin takasında **netleştirme sürer**. Kotasyon emirlerinde veya likidite sağlayıcılık emirlerinde borsaya **bildirilmiş hesap numaralarıyla** yapılan işlemler BT dışında tutulur.

---

## 8. Volatilite Bazlı Tedbir Sistemi (VBTS)
**SPK kararlarıyla**, işlemlerin adil ve dürüst yapılmasını sağlamak ve yatırımcıları **aşırı volatilitenin** risklerinden korumak için devreye alındı.

Koşullar oluşursa tedbirler **kademeli** uygulanır; bir sonraki seviyeye geçilirken **önceki seviyedeki tedbirler de sürer**. Her seviye **1 ay** sürer:

| Seviye | Tedbir |
|---|---|
| **1** | **Açığa satış ve kredili işlem yasağı** |
| **2** | **Brüt takas** |
| **3** | **Emir paketi**: piyasa ve piyasadan limite emir kısıtı; emir iptali, miktar azaltma ve fiyat kötüleştirme yasağı; emir toplama bilgi yayını kısıtı |
| **4** | **Tek fiyat yöntemiyle işlem görme** |
| **5** | **Emir iletim kanallarının kısıtlanması** (**internet emir yasağı**) |

- Tedbir uygulanacak paylar, başlangıç tarihi ve süresi, ilgili tarihte **piyasa kapandıktan sonra KAP**'ta duyurulur.

> [!ezber] VBTS sırası: **Açığa satış/kredi yasağı → Brüt takas → Emir paketi → Tek fiyat → İnternet emir yasağı.** Her biri **1 ay**, birikerek.

---

## Bugünün özeti
- TW kapasitesi **saniyede 10** emir; **OUCH** hızlı emir iletimi (yalnız limit ve kotasyon); **ITCH** hızlı veri yayını.
- Kredili ve açığa satış listesi: **Alt Pazar, PÖİP, YİP hariç** paylar ve **BYF**. GMS'de kredili alım var, açığa satış yok.
- Listeden çıkma: sürekli kapalı **hemen**; geçici kapalı **5 iş gününden** fazla. **Geçici Liste** 3 ay.
- Yukarı adım kuralı: **Yıldız'da yok**, **Ana ve BYF'de var**; BIST 100 **%2** düşerse herkeste.
- Açığa satış **açılış seansında girilemez**; özel işlem bildirimi, kotasyon, orta nokta ve AOF ile yapılamaz.
- Temerrüt sırası **T+0**, ayrı sıra; baz fiyatlı veya serbest marjlı.
- BT'de nakit ve pay **önceden hesapta**; piyasa yapıcı ve likidite sağlayıcı işlemleri **muaf**.
- VBTS **5 seviye**, her biri **1 ay**, kademeli ve birikimli.
`,
  sorular: [
    {
      s: "BISTECH sisteminde **yüksek frekanslı işlemler** için daha hızlı **emir iletimine** imkân veren ve yalnızca limit ve kotasyon emirlerinin kullanılabildiği protokol hangisidir?",
      c: ["ITCH", "OUCH", "FixAPI Drop Copy", "FixAPI Reference Data", "Omnet API"],
      d: 1,
      a: "**OUCH**, en hızlı emir iletim protokolüdür ve yalnız **limit** ve **kotasyon** emirleri kullanılır. **ITCH** ise hızlı **veri yayın** protokolüdür.",
      k: "1006 resmi not s. 78"
    },
    {
      s: "Aşağıdaki araçlardan hangisinde **kredili alım yapılabilir ancak açığa satış yapılamaz**?",
      c: ["Yıldız Pazardaki paylar", "Borsa yatırım fonları", "Yatırım kuruluşu varantları", "Emtia sertifikaları", "Gayrimenkul sertifikaları"],
      d: 4,
      a: "**Gayrimenkul sertifikalarında** kredili alım yapılabilir ama açığa satış yapılamaz. Yıldız, Ana Pazar, GSP payları ve BYF'lerde ikisi de yapılabilir; varant, sertifika, SDKS, GMF, GSF ve emtia sertifikalarında ikisi de yapılamaz.",
      k: "1006 resmi not s. 78"
    },
    {
      s: "İşlem sırası **geçici olarak durdurulan** bir pay, kredili işlem ve açığa satış listesinden ne zaman çıkarılır?",
      c: ["Kapalılık 5 iş gününden fazla sürerse", "Kapalılık 2 iş gününden fazla sürerse", "Durdurulduğu gün hemen", "Kapalılık 1 ayı aşarsa", "Kapalılık 3 ayı aşarsa"],
      d: 0,
      a: "Sırası **sürekli kapatılan** paylar hemen; **geçici durdurulan** paylar ise kapalılık **5 iş gününden fazla** sürerse listeden çıkarılır. Çıkarılan paylar 3 aylık dönemin sonuna kadar **Geçici Liste**'de kalır.",
      k: "1006 resmi not s. 78"
    },
    {
      s: "Açığa satış işlemlerinde **yukarı adım kuralı** ile ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["Yıldız Pazardaki paylarda uygulanır, Ana Pazarda uygulanmaz", "Yıldız Pazarda uygulanmaz; Ana Pazardaki paylar ve BYF'lerde uygulanır", "Yalnızca BIST 100 Endeksi %6 düştüğünde devreye girer", "Tüm pazarlarda yalnızca açılış seansında uygulanır", "Yalnızca GSP ve Alt Pazardaki paylarda uygulanır"],
      d: 1,
      a: "Yukarı adım kuralı **Yıldız Pazarda uygulanmaz**; **Ana Pazar** payları ve **BYF**'lerde uygulanır. BIST 100 gün içinde **%2 veya daha fazla** düşerse açığa satışa izinli tüm sıralarda seans sonuna kadar otomatik uygulanır.",
      k: "1006 resmi not s. 78-79"
    },
    {
      s: "Ana Pazarda işlem gören bir payda, son işlem fiyatı bir önceki işlem fiyatından **yüksektir**. Bu payda açığa satış hangi fiyattan yapılabilir?",
      c: ["Son işlem fiyatından veya daha yüksek bir fiyattan", "Yalnızca önceki günün kapanış fiyatından", "Yalnızca son işlem fiyatının en az iki adım üzerinden", "Yalnızca son işlem fiyatının altındaki fiyatlardan", "Yalnızca günün taban fiyatından"],
      d: 0,
      a: "Kural olarak açığa satış son işlem fiyatından **daha yüksek** bir fiyattan yapılır. Ancak son fiyat **bir önceki fiyattan yüksekse**, açığa satış **son işlem fiyatından da** yapılabilir.",
      k: "1006 resmi not s. 78"
    },
    {
      s: "Açığa satış emri girişi ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["Devre kesici emir toplama aşamasında açığa satış emri girilebilir", "Açılış seanslarında açığa satış emri girilemez", "Baz fiyatı serbest olan payda açığa satış ilk işlemden sonra verilebilir", "Özel işlem bildirimiyle açığa satış yapılamaz", "Orta nokta ve AOF emirleriyle açığa satış yapılabilir"],
      d: 4,
      a: "**Özel işlem bildirimi, kotasyon, orta nokta ve AOF (TAR)** emirleriyle **açığa satış yapılamaz**. Açığa satış emri açılış seansı hariç tüm bölümlerde, devre kesici emir toplaması dâhil, girilebilir.",
      k: "1006 resmi not s. 79"
    },
    {
      s: "**Brüt takas (BT)** uygulaması ile ilgili hangisi doğrudur?",
      c: ["BT'ye alınan payda aynı gün yapılan alım ve satımlar netleştirilerek takas edilir", "BT, yatırımcıların bu paylarda işlem yapmasını yasaklayan bir tedbirdir", "BT'ye alınan paylarda piyasa yapıcıların kotasyon işlemleri de brüt takasa tabidir", "Alım yapacak yatırımcının takas tarihinde hesabında alımını karşılayacak nakit bulunmalıdır", "BT, takas süresini T+2'den T+0'a indiren bir uygulamadır"],
      d: 3,
      a: "BT'de netleştirme kaldırılır; alıcı takas tarihinde **nakdi**, satıcı **payı** hesabında bulundurmalıdır. BT yalnız takasla ilgilidir, yatırımı engellemez. Piyasa yapıcı ve likidite sağlayıcıların bildirilmiş hesaplarla yaptığı işlemler **muaftır**.",
      k: "1006 resmi not s. 80"
    },
    {
      s: "**Volatilite Bazlı Tedbir Sistemi (VBTS)**'nde **üçüncü seviye** tedbir hangisidir?",
      c: ["Açığa satış ve kredili işlem yasağı", "Brüt takas", "Emir paketi", "Tek fiyat yöntemiyle işlem görme", "İnternet emir yasağı"],
      d: 2,
      a: "Seviyeler: 1) açığa satış ve kredili işlem yasağı, 2) brüt takas, 3) **emir paketi** (piyasa ve piyasadan limite emir kısıtı, iptal, miktar azaltma ve fiyat kötüleştirme yasağı, bilgi yayını kısıtı), 4) tek fiyat, 5) internet emir yasağı. Her biri **1 ay** sürer ve öncekiler devam eder.",
      k: "1006 resmi not s. 80-81"
    }
  ]
});
