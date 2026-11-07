SPL.gun("1012", 13, {
  okuma: `
## Bugünün haritası
Borçlanma araçları bölümünü bitiriyoruz.
1. **BİAŞ Swap Piyasası:** genel esaslar ve takas saatleri
2. Swap **risk yönetimi**, değişim teminatı ve **fonlama maliyeti**
3. Swap **garanti fonu** ve **temerrüt**
4. **Kupon ödemesi ve itfa**
5. Takasbank'a yapılacak **bildirimler**
6. **Pay ve borçlanma araçları takası** karşılaştırması

---

## 1. Swap Piyasası
- **01.10.2018**'de Borsa İstanbul'da açıldı. Döviz alımına alternatif bir **korunma** aracıdır. Takasbank **MKT**'dir.
- Takas, **anapara** ve **değişim teminatı** takasını içerir.
- **Ödeme karşılığı ödeme** ve **teslim karşılığı ödeme** prensipleri uygulanır.
- Para birimi ve kıymetli maden bazında, müşteri/portföy ayrımıyla **çok taraflı netleştirme** yapılır. Kısmi ödemede alacaklar **orantılı** ödenir.
- Alacak almak için **teminat yükümlülüğünün** yerine getirilmiş olması gerekir.
- **TL alacakları** bankaların TCMB'deki **TIC** hesaplarına otomatik EFT ile gider. EFT kapandıktan sonra **19:15**'e kadar olan dağıtımda TCMB'deki **ZK** hesabına aktarılır.
- **Döviz alacakları**, yazılı bildirilen **muhabir banka** hesabına otomatik **SWIFT** ile gider.
- Sözleşme düzeltme ve iptallerini **Borsa** yapar.
- Takas **T+0**'dır; ileri valörlü işlemler valör tarihinde takas edilir. **Temerrüt** işlemlerinde valör kısıtı aranmaz.
- **Yarım günlerde ve resmi tatillerde takas yapılmaz.**

### Takas saatleri
| İşlem | Saat |
|---|---|
| Takas başlangıcı | **14:00** |
| Borç kapatma: **TL** | **17:15** |
| Borç kapatma: **kıymetli maden** | **17:00** |
| Borç kapatma: **USD, EUR** | **21:00** |
| TL alacak → **TIC** | 14:00 – 17:15 |
| TL alacak → TCMB **ZK** | 17:16 – 19:30 |
| TL alacak → **11 serbest** hesap | 19:31 – 21:00 |
| **Değişim teminatı** (K/Z) borç kapatma | **13:00** (yarım gün 12:30) |
| **Teminat tamamlama** | **13:00** (yarım gün 12:30) |

---

## 2. Swap risk yönetimi
- **Üye** ve **Müşteri** hesapları ayrı izlenir; işlem öncesi, anı ve sonrası risk yönetimi yapılır.
- **İşlem limiti** olmayan hesaptan emir iletilemez. Limiti Takasbank, üyenin **derecelendirme notu ve özkaynağına** göre belirler.
- İşlem valöründe **ilk risk hesabı gün sonunda** yapılır.
- **Başlangıç teminatı:**
  - En az **1 yıllık** veri ve en az **%99,00** güvenle hesaplanır; **ayda bir** gözden geçirilir.
  - Vade, taraf, döviz ya da maden bazında farklılaştırılabilir.
- Risk ve teminat tutarları **11:00, 13:00 ve 15:00**'te güncellenir. Kur olarak bankalararası spot alış/satış ortalamasının **son 10 dakikalık ortalaması** kullanılır.
- Gün içi teminat çağrısı **2 saat** içinde karşılanır.

### Değişim teminatı ve fonlama maliyeti
- Gün içinde açılan pozisyonda **işlem kuru** ile **gün sonu kuru**, eski pozisyonlarda **önceki gün sonu kuru** ile **bugünkü gün sonu kuru** karşılaştırılır.
- Değişim teminatı döviz/maden bazında **netleştirilir**.
- **Fonlama maliyeti:**
  - *F = (Kümülatif net değişim teminatı bakiyesi × Gecelik faiz) / 360*
  - Gecelik faiz, BAP Repo–Ters Repo **Normal Emirler Pazarı**'nın ağırlıklı ortalamasıdır.
  - Kümülatif net **pozitif** bakiyesi olan taraf borçlanır.

### Değerleme katsayıları
**%99,90** güven, **2 iş günü**, en az **1 yıl** veri.

---

## 3. Swap garanti fonu ve temerrüt

### Garanti fonu
- MKT üyeleri için katılım **zorunludur**.
- **İlave katkı payı** 1 Nisan – 31 Mart döneminde **en fazla iki kez** istenebilir. (Pay ve BAP'ta **dört kez**.)
- Stres hesabı: en az **%99,5** güven, **2 iş günü**, **5 yıllık** veri. Hesap **3 aydan uzun olmayan** aralıklarla yenilenir.
- **Sabit katkı payı: 2.875.000 TL.**
- **Üyelikten ayrılmak** isteyen üyenin azami garanti fonu yükümlülüğü:

| Ayrılma talebi | Devam eden temerrüt yok | Devam eden temerrüt var |
|---|---|---|
| Yükümlülükler **yerine getirildikten sonra** | Fonun **2 katı** | **3 katı** |
| Yükümlülükler **yerine getirilmeden** | **3 katı** | **4 katı** |

- Garanti fonundan kaçmak için ayrıldığı düşünülen kuruluş MKT üyeliğine **tekrar kabul edilmeyebilir**.

### Temerrüt
Borç şu hallerde **muaccel** olur:
- takas, **teminat**, **garanti fonu** ya da **değişim teminatı** yükümlülüklerinin süresinde yerine getirilmemesi,
- Takasbank'ın üyenin yükümlülüklerini **tasfiye etmeye** karar vermesi.

Bir borçtan temerrüde düşen üyenin **tüm borçları muaccel olur**.

| Yükümlülük | Bu saatten sonra temerrüt |
|---|---|
| TL | **17:15** |
| Kıymetli maden | **17:00** |
| USD / EUR | **21:00** |
| Değişim teminatı / teminat | **13:00** |

- Temerrütte üye **teminat çekemez**. Takasbank Borsa'dan **emir iletiminin engellenmesini** isteyebilir.
- Üyeye en fazla temerrüdü **izleyen iş günü sonuna** kadar süre verilir. Sonra Takasbank organize ya da tezgâhüstü piyasalarda işlem yapar.
- Temerrüt **Borsa, Kurul ve üyeye** bildirilir; üyenin hesaplardaki işlem yetkisi **durdurulur**.
- **Temerrüt yönetim araçları:**
  - müşteri pozisyonlarının başka üyeye **taşınması**,
  - üyenin nakit dışı teminat ve garanti fonu katkı paylarının **nakde çevrilmesi**,
  - üyenin **diğer piyasalardaki teminat fazlası** ve (risk yoksa) **garanti fonu katkı payları**,
  - pozisyonların **re'sen kapatılması** ve **netleştirme**.
- Karşılanamayan açık, MKT Yönetmeliği **md. 36** sırasıyla üstlenilir.
- Kullanılan **tahsis sermayesi bir ay içinde tamamlanır**. Yıllık tamamlama, dönem başındaki tutarı aşamaz. Sermayenin tamamlanması, kullanılan garanti fonu paylarının **iadesini gerektirmez**.

---

## 4. Kupon ödemesi ve itfa
- Takasbank'ta saklanan TL ve döviz ödemeli ÖSBA, finansman bonosu, DİBS gibi kıymetlerin kupon ve itfa ödemeleri, ödeme günü **talimat gerekmeden** üyelerin **Serbest Cari TL ve YP** hesaplarına **otomatik** geçer.
- Kıymet **teminat deposundaysa** ödeme ilgili **teminat hesabına** aktarılır.
- Kupon ödeme günü **V2 tarihine eşit** olan kuponlu kıymetler de repoya konu edilebilir. **Repo** kıymetlerinin kuponu, ters repocudaki bloke bakiyeye göre **repo yapan üyeye** ödenir.

---

## 5. Bildirimler
1. BAP'tan **ters repoyla** alınan kıymetler müşterilerle yapılan **repoya** konu edilirse bu Takasbank'a **bildirilir**.
   - Kıymetler otomatik olarak **1103** nolu depoya aktarılır.
   - Zamanında bloke edilmezse toplanan fonlar **mevduat niteliğinde** sayılır ve TCMB işlem yapar.
2. **Borsa dışı** repo ve ters repo işlemleri **işlem bazında**, **işlem günü sonuna kadar** bildirilir.
3. BAP'ta yapılan ama takası **Takasbank dışında** yapılan repo işlemlerinin kıymet bildirimi, işlemin **başlangıç valöründe** yapılır.
4. Repo işlemleri **vadesinden önce bozulursa** Takasbank'a bildirilir.

---

## 6. Pay ve borçlanma araçları takası karşılaştırması

| Kriter | **Pay takası** | **Borçlanma araçları takası** |
|---|---|---|
| Kıymet takası nerede? | **MKK** (pay, rüçhan, makbuz, BYF, varant) | **Takasbank / TCMB** (DİBS); **MKK** (ÖSBA, pay senedi repo) |
| Nakit takası | Takasbank | Takasbank |
| Valör | **T+2** (temerrüt işlemlerinde T) | **T+0** (döviz kıymetlerde T+1) |
| Takasa taraf kurumlar | Aracı kurumlar ve yatırım bankaları | Bankalar ve aracı kurumlar |
| Netleştirme bazı | **Üye–sicil (müşteri)** bazında; T günü, düzeltme varsa T+1; brüt takas da var | **Üye** bazında; T günü |
| Ödeme prensibi | Teslim karşılığı ödeme (DvP) | Teslim karşılığı ödeme (DvP) |
| Takasbank garantisi | Var | Var |
| Yarım gün | Önceki günle **birleştirilir** | **Aynı gün** takas edilir |
| Borç kapatma son saati | **16:45** | **16:45** |
| **Ön temerrüt** uygulaması | **Yok** | **Var** |
| Faiz gün sayısı | **/360** | **/365** |
| Temerrüt faizi ödeme süresi | **3 iş günü** | **3 iş günü** |

> [!dikkat]
> Resmi not BAP temerrüt katsayılarında **kendi içinde tutarsız**. s.100'deki tabloda 17:01–**18:45** için **0,50**, sonrası için **3** yazıyor. s.122'deki karşılaştırma kutusunda ise 17:01–**17:30** için **0,50**, 17:31 sonrası için **3** yazıyor. Kesin olanlar şunlar: **16:46–17:00 → 0,25**, valör tarihinden sonra → **3**. **Pay** piyasasında katsayılar **17:30'a kadar 1**, sonrası **3**'tür.
`,
  sorular: [
    {
      s: "Borsa İstanbul Swap Piyasası'nda TL yükümlülükleri için borç kapatma son saati kaçtır?",
      c: ["13:00", "16:45", "17:00", "17:15", "21:00"],
      d: 3,
      a: "Swap Piyasası'nda borç kapatma son saatleri: **TL 17:15**, kıymetli maden 17:00, USD ve EUR 21:00. Değişim teminatı ve teminat tamamlama ise 13:00'tür.",
      k: "1012 resmi not s. 115"
    },
    {
      s: "Borsa İstanbul Swap Piyasası'nda işlem limiti nasıl belirlenir?",
      c: ["Serbest teminat tutarının işlem öncesi risk parametresine bölünmesiyle", "Takasbank tarafından üyenin derecelendirme notu ve özkaynağı dikkate alınarak", "Borsa İstanbul tarafından tüm üyeler için sabit ve eşit tutarda", "SPK tarafından her üye için ayrı ayrı belirlenerek", "Üyenin kendisi tarafından iç limitleri esas alınarak"],
      d: 1,
      a: "Swap Piyasası'nda işlem limitini Takasbank, üyenin **derecelendirme notu ve özkaynak düzeyine** göre belirler. Serbest teminatın risk parametresine bölünmesi ise Para Piyasası'ndaki yöntemdir.",
      k: "1012 resmi not s. 116"
    },
    {
      s: "Swap Piyasası'nda değişim teminatına ilişkin fonlama maliyeti hangi formülle hesaplanır?",
      c: ["(Kümülatif net değişim teminatı bakiyesi × Gecelik faiz) / 360", "(Başlangıç teminatı × Gecelik faiz) / 365", "Değişim teminatı × %99", "(Anapara × Kur farkı) / 360", "(Kümülatif net değişim teminatı × Politika faizi) / 365"],
      d: 0,
      a: "Fonlama maliyeti **F = (Kümülatif net değişim teminatı bakiyesi × Gecelik faiz) / 360** formülüyle hesaplanır; faiz BAP Repo–Ters Repo Normal Emirler Pazarı'nın gecelik ağırlıklı ortalamasıdır.",
      k: "1012 resmi not s. 116"
    },
    {
      s: "Swap Piyasası garanti fonunda bir yıllık dönemde üyelerden en fazla kaç kez ilave garanti fonu katkı payı istenebilir?",
      c: ["1", "2", "3", "4", "Sınırsız"],
      d: 1,
      a: "Swap Piyasası'nda ilave katkı payı 1 Nisan – 31 Mart döneminde **en fazla iki kez** istenebilir. Pay ve BAP garanti fonlarında bu sayı dörttür.",
      k: "1012 resmi not s. 117"
    },
    {
      s: "Swap Piyasası'nda yükümlülüklerini yerine getirdikten sonra üyelikten ayrılma talebinde bulunan ve talep tarihinde çözümlenmemiş temerrüt bulunmayan bir MKT üyesinin azami garanti fonu yükümlülüğü ne kadardır?",
      c: ["Güncel garanti fonu tutarının 1 katı", "2 katı", "3 katı", "4 katı", "Hiçbir yükümlülüğü yoktur."],
      d: 1,
      a: "Yükümlülükler yerine getirildikten sonra yapılan taleplerde azami yükümlülük temerrüt yoksa fonun **2 katı**, varsa 3 katıdır. Yükümlülükler yerine getirilmeden yapılan taleplerde 3 ve 4 kattır.",
      k: "1012 resmi not s. 117"
    },
    {
      s: "Takasbank'ta saklanan DİBS ve özel sektör borçlanma araçlarının kupon ve itfa ödemeleriyle ilgili hangisi doğrudur?",
      c: ["Üyenin ödeme günü vereceği yazılı talimat üzerine ödenir.", "Ödeme günü talimat gerekmeden serbest cari TL ve YP hesaplarına alacak kaydedilir.", "MKK aracılığıyla yatırımcı hesaplarına ödenir.", "Ödemeler, ödeme gününü izleyen iş günü topluca yapılır.", "Teminat deposundaki kıymetler için kupon ve itfa ödemesi yapılmaz; ödeme teminat çözülünce yapılır."],
      d: 1,
      a: "Kupon ve itfa ödemeleri ödeme günü **talimat gerekmeden** üyelerin Serbest Cari TL ve YP hesaplarına **otomatik** geçer. Kıymet teminat deposundaysa ödeme ilgili teminat hesabına aktarılır.",
      k: "1012 resmi not s. 120"
    },
    {
      s: "Banka ve aracı kurumların borsa dışında yaptıkları repo ve ters repo işlemlerini Takasbank'a ne zamana kadar bildirmeleri gerekir?",
      c: ["İşlemden önce", "İşlem günü sonuna kadar", "Ertesi iş günü 11:00'e kadar", "Hafta sonuna kadar", "Ay sonuna kadar"],
      d: 1,
      a: "Borsa dışı repo ve ters repo işlem detayları işlem bazında, **işlemin gerçekleştirildiği gün sonuna kadar** Takasbank'a bildirilir.",
      k: "1012 resmi not s. 120"
    },
    {
      s: "Pay takası ile borçlanma araçları takası karşılaştırıldığında hangisi doğrudur?",
      c: ["Her iki piyasada da takas valörü işlemden sonraki ikinci iş günüdür (T+2).", "Pay takasında ön temerrüt uygulaması vardır; borçlanma araçlarında yoktur.", "Yarım günlerde pay işlemleri önceki günle birleştirilir; BAP'ta aynı gün takas edilir.", "Borçlanma araçlarında TL işlemlerin takası, pay piyasasındaki gibi T+2 valörüyle yapılır.", "Borçlanma araçlarında netleştirme üye-sicil bazında yapılır."],
      d: 2,
      a: "Yarım günlerde pay işlemleri **önceki iş günüyle birleştirilir**, borçlanma araçları ise **aynı gün** takas edilir. Pay T+2, BAP T+0'dır; ön temerrüt BAP'ta vardır; pay faizi /360, BAP faizi /365'tir.",
      k: "1012 resmi not s. 121–122"
    }
  ]
});
