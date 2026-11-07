SPL.gun("1012", 6, {
  okuma: `
## Bugünün haritası
Merkezi karşı taraf (MKT) uygulamasında **temerrüt yönetimini** ve Takasbank'ın **MKT olarak diğer yükümlülüklerini** tamamlıyoruz.
1. MKT'de **temerrüt** ve **mütemerrit üye**
2. **Temerrüt şelalesi:** kaynakların kullanım sırası
3. **Tahsis** ve **taahhüt** sermayesi
4. Pozisyonların **kapatılması, devri ve sonlandırılması**
5. **Bağlantılı çalışma**, stres testleri, risk komitesi, likidite ve konsantrasyon
6. **Olağanüstü durum** tedbirleri ve mali hükümler

---

## 1. MKT'de temerrüt
- MKT üyesi; teminat ya da garanti fonu **tamamlama**, **teslim** veya **ödeme** yükümlülüklerini zamanında ve tam yerine getirmezse, **bildirime gerek olmadan** temerrüde düşmüş sayılır.
- Temerrüt sürdükçe üyenin hesaplarından **teminat çekmesi kısıtlanabilir**.
- **Mütemerrit** (temerrüde düşen) üyeye yükümlülüklerini yerine getirmesi için yönergede belirlenen bir **süre** verilir.
- Süre sonunda yükümlülük yerine getirilmezse Takasbank:
  - üyenin hesapları üzerindeki **doğrudan tasarruf yetkisini askıya alabilir**,
  - pozisyonları **re'sen kapatabilir**,
  - her türlü alım-satım, devir ve diğer işlemi yapabilir.
- Mütemerrit üye **temerrüt faizi** öder.
- Takasbank, mütemerrit üyenin varlıkları üzerinde **takas, mahsup ve hapis hakkına** sahiptir.
- **Satıcı** teslimde temerrüde düşerse Takasbank, **alıcıya kıymeti teslim eder**. Teslim mümkün değilse yönergeye göre hesaplanan **nakit karşılık** ödenir.

---

## 2. Temerrüt şelalesi (MKT Yönetmeliği md. 36)
Temerrüt kayıpları karşılanırken kaynaklar **şu sırayla** kullanılır:

1. Temerrüde düşen üyenin kendi hesaplarındaki ve **teminat açığı oluşan** müşteri hesaplarındaki **teminatlar**
2. Temerrüde düşen üyenin **yatırılmış garanti fonu katkı payı**
3. Varsa **sigorta** poliçelerinden yapılacak tazminler
4. Takasbank'ın **karşılanmış riskler için tahsis ettiği sermaye**
5. **Diğer (temerrüde düşmemiş) üyelerin** yatırılmış garanti fonu katkı payları
6. Üyelerden istenebilecek **ilave garanti fonu katkı payları**
7. Takasbank'ın **kalan sermayesinden yapılan taahhüt**

> [!ezber]
> Sıra: **önce temerrüde düşenin kendi parası** (teminat → garanti fonu payı) → sigorta → **Takasbank'ın tahsis sermayesi** ("skin in the game") → **diğerlerinin** garanti fonu → ilave katkı → Takasbank'ın **kalan sermaye taahhüdü**.
> Takasbank'ın kendi sermayesi **diğer üyelerin parasından önce** devreye girer.

- Bu sıra, **kayıpların** karşılanması içindir. Takasbank **likidite** için yabancı kaynak ve borçlanma imkânlarını da kullanabilir.
- **Tahsis** ve **taahhüt** edilecek sermaye miktarları **yılda bir kez**, en geç yılın **dördüncü ayının ilk iş günü** güncellenir ve internet sitesinde duyurulur.
- Ayrı garanti fonları varsa 4. ve 7. adımdaki tutarlar fonların **büyüklüğü oranında** paylaştırılır.

### Kalan kaynakların kullanımı
- Mütemerrit üyenin kullanılmamış teminatları ve üyenin takibinden elde edilen kaynaklar **önce** tasfiye için alınan **borçların kapatılmasında** kullanılır.
- Sonra temerrüde düşmeyen üyelerin **ilave katkı paylarının**, ardından **yatırılmış katkı paylarının** iadesinde kullanılır. İade **oransal** yapılır.
- Tüm asli ve fer'i yükümlülükler tasfiye edilmeden **mütemerride hiçbir ödeme ya da iade yapılmaz**.

---

## 3. Tahsis ve taahhüt sermayesi
- **Karşılanmış risklere tahsis edilecek sermaye:**
  - Bankacılık mevzuatına göre asgari sermaye tutarı + MKT hizmetlerinin geçmiş **bir yıllık operasyonel giderlerinin %75**'i (iş riski ve yeniden yapılanma maliyeti için) hesaplanır.
  - Bu toplamın **%25**'i tahsis edilir.
  - Tutar **likiditesi yüksek** varlıklarda tutulur.
- **Kalan sermayeden taahhüt:** özkaynaktan tahsis edilen sermaye düşüldükten sonra kalan tutar ile **BDDK mevzuatına göre belirlenen sermaye** arasındaki farktır.

---

## 4. Pozisyonların kapatılması, devri, sonlandırılması
- Takasbank önce mütemerrit üyeye pozisyonlarını **kapatması talimatını** verir.
- Üye kapatmazsa ya da faaliyeti kısıtlanmışsa veya üyeliği sona ermişse Takasbank pozisyonları **re'sen kapatır**. Devir için **ihale** de düzenleyebilir.
- Kalan sermayenin **BDDK sermayesinin altına inmesine** yol açacak zarar ya da **karşı taraf bulunamaması** halinde Takasbank:
  - pozisyonları temerrüde düşmemiş üyelere **zorunlu devredebilir**,
  - pozisyonları **sonlandırabilir** ya da sonlandırılmasını piyasa yöneticisinden isteyebilir.
- Tasfiye sürerken **koruma amaçlı** işlemler yapabilir.

---

## 5. Takasbank'ın diğer MKT yükümlülükleri

### Bağlantılı çalışma (interoperability)
**SPK uygun görürse** Takasbank, yurt içi ya da yurt dışındaki MKT'lerle bağlantılı çalışabilir:

| Tür | Nasıl? |
|---|---|
| **Karşılıklı bağlantı** | MKT'ler riskle orantılı **teminat ve ilave kaynakları karşılıklı değiştirir** |
| **Katılımcı bağlantı** | Takasbank diğer MKT'nin **üyesi** olur ya da diğer MKT Takasbank'ın üyesi olur |

### Stres testleri ve raporlama
- Teminatlar, garanti fonu ve sermaye yeterliliği **stres testleriyle** teyit edilir. Sonuçlar **üç ayda bir** Yönetim Kuruluna raporlanır ve **Kurula** bildirilir.
- İç denetim, risk yönetimi ve bilgi işlem altyapısını **en az altı ayda bir** kontrol eder ve sonucu **Kurula** bildirir.

### Risk Komitesi
- MKT risklerini değerlendirmek için **kurulabilir**.
- **Organize piyasalar dışındaki türev (OTC) işlemlerde** MKT hizmeti verilebilmesi için Risk Komitesi kurulması **zorunludur**.

### Likidite, kredi ve konsantrasyon riski
- **Likidite:** yeterli likit varlık, teminatların hızlı ve ucuz nakde çevrilebilmesi, ticari bankalar ve **TCMB** likiditesine erişim.
- **Kredi riski:** karşı taraflar için limitler; üyelerin kredi değerliliği için **derecelendirme sistemleri**.
- **Konsantrasyon:** teminat çeşitliliği için limitler, hem **ihraççı veya garantör** bazında hem de **araç** bazında belirlenir.

### Değerleme katsayıları ve modeller
- Katsayılar şunlara göre belirlenir:
  - **kredi riski**,
  - **vade**,
  - **olağanüstü koşullardaki volatilite**,
  - **likidite**,
  - varsa **kur riski**.
- Risk modelleri düzenli **geriye dönük testlerle** sınanır.

### Sigorta
Takasbank gerekli görür ve **Kurul uygun görüş verirse**, MKT risklerini sigortalatabilir. Primin üyeler arasında paylaşım esasları prosedürde belirlenir.

---

## 6. Olağanüstü durum tedbirleri
Takasbank, piyasaların işlerliğini tehdit eden olağanüstü durumlarda şu tedbirleri alabilir (sınırlı sayıda değildir):
- işlem ve **pozisyon limitlerini** değiştirmek,
- risk **yöntem ve parametrelerini** değiştirmek,
- **ilave teminat** istemek,
- teslim, takas ve **opsiyon kullanım** süre ve şartlarını değiştirmek,
- piyasa yöneticisinden **emir kabulünün kısıtlanmasını** istemek,
- **değişim teminatı dağıtımlarını** durdurmak ya da kesintiye gitmek,
- **teminat çekilmesini** geçici olarak sınırlamak,
- pozisyonların başka bir üyeye **aktarılmasını** ya da **kapatılmasını** istemek.

### Mali hükümler

| Hizmet | Ücreti kim belirler? |
|---|---|
| MTK'nın **tek sunucu** olduğu temel hizmetler | Yönetim kurulunun önerisi + **SPK onayı** |
| Zorunlu olmayan, talep edene sunulan hizmetler | MTK belirler, **SPK'nın bilgisine** sunulur |
| Temel ve yan hizmetlerle ilgisi olmayan faaliyetler | Her hesap dönemi sonunda toplu ve ayrıntılı olarak **SPK'nın bilgisine** sunulur |

- MTK'lar üyelerinden **bilgi ve belge isteyebilir**, **inceleme** yapabilir ve kendi yetkisindeki aykırılıklara **yaptırım** uygulayabilir.
- Kurallarının **ağır ihmal ya da kasıtla** ihlal edildiğini tespit ederlerse **SPK'ya bildirir**.
`,
  sorular: [
    {
      s: "Takasbank MKT Yönetmeliği'ne göre bir MKT üyesinin temerrüdünde ilk başvurulacak kaynak hangisidir?",
      c: ["Diğer MKT üyelerinin yatırılmış garanti fonu katkı payları", "Takasbank'ın karşılanmış riskler için tahsis ettiği sermaye", "Temerrüde düşen üyenin ve açığı olan müşteri hesaplarının teminatları", "Varsa sigorta poliçelerinden yapılacak tazminler", "Üyelerden talep edilen ilave garanti fonu katkı payları"],
      d: 2,
      a: "Şelalenin ilk adımı, **temerrüde düşen üyenin** kendi hesaplarındaki ve teminat açığı oluşan müşteri hesaplarındaki **teminatlardır**. Ardından üyenin kendi garanti fonu katkı payı gelir.",
      k: "1012 resmi not s. 47"
    },
    {
      s: "MKT temerrüt yönetiminde \"Takasbank'ın karşılanmış riskler için tahsis ettiği sermaye\" ile \"diğer MKT üyelerinin yatırılmış garanti fonu katkı payları\" arasındaki kullanım sırası nasıldır?",
      c: ["Önce diğer üyelerin katkı payları, sonra tahsis edilen sermaye kullanılır.", "Önce Takasbank'ın tahsis ettiği sermaye, sonra diğer üyelerin katkı payları kullanılır.", "İkisi aynı anda ve eşit oranda kullanılır.", "Tahsis edilen sermaye hiç kullanılmaz.", "Sıra her temerrütte Takasbank Genel Müdürü tarafından belirlenir."],
      d: 1,
      a: "Sıra: kendi teminatı → kendi GF payı → sigorta → **Takasbank'ın tahsis sermayesi** → **diğer üyelerin** GF payları → ilave katkı payları → Takasbank'ın kalan sermaye taahhüdü.",
      k: "1012 resmi not s. 47"
    },
    {
      s: "Temerrüt şelalesinde en son başvurulan kaynak hangisidir?",
      c: ["İlave garanti fonu katkı payları", "Sigorta poliçeleri", "Diğer üyelerin yatırılmış garanti fonu katkı payları", "Takasbank'ın kalan sermayesinden yapılan taahhüt", "Temerrüde düşen üyenin garanti fonu katkı payı"],
      d: 3,
      a: "Şelalenin son adımı, **Takasbank'ın kalan sermayesinden yapılan taahhüttür**.",
      k: "1012 resmi not s. 47"
    },
    {
      s: "Takasbank, tahsis ve taahhüt edeceği sermaye miktarlarını ne zaman günceller?",
      c: ["Her ay sonunda, aylık mali tablolara göre", "Her çeyrek sonunda, ara dönem raporlarına göre", "Yılda bir kez, en geç yılın dördüncü ayının ilk iş günü", "Yılda iki kez, Ocak ve Temmuz aylarının ilk iş günü", "Her temerrüt olayından sonra, olayı izleyen iş günü"],
      d: 2,
      a: "Tahsis ve taahhüt sermaye miktarları **yılda bir kez**, en geç içinde bulunulan yılın **dördüncü ayının ilk iş günü** güncellenir ve internet sitesinde duyurulur.",
      k: "1012 resmi not s. 47"
    },
    {
      s: "Takasbank'ın karşılanmış risklere tahsis edeceği sermaye nasıl hesaplanır?",
      c: ["(Asgari sermaye + yıllık operasyonel giderlerin %75'i) × %25", "Takasbank özkaynağının %10'u", "Toplam garanti fonu büyüklüğünün %50'si", "Asgari sermaye tutarının tamamı ile yasal yedek akçelerin toplamı kadar", "Bir yıllık operasyonel giderlerin %25'i"],
      d: 0,
      a: "Bankacılık mevzuatına göre asgari sermaye tutarına, MKT hizmetlerinin geçmiş bir yıllık **operasyonel giderlerinin %75**'i eklenir ve bulunan tutarın **%25**'i karşılanmış risklere tahsis edilir.",
      k: "1012 resmi not s. 49"
    },
    {
      s: "Takasbank'ın organize piyasalar dışında gerçekleştirilen türev araç işlemlerinde MKT hizmeti verebilmesi için hangisi zorunludur?",
      c: ["SPK'nın ayrıca bağımsız denetim yaptırması", "Risk Komitesi kurulmuş olması", "TCMB'nin onay vermesi", "Garanti fonunun en az iki katına çıkarılması", "Bağlantılı çalışma anlaşması yapılması"],
      d: 1,
      a: "Organize piyasalar dışındaki (OTC) türev işlemlerinde MKT hizmeti verilebilmesi için **Risk Komitesinin kurulmuş** olması zorunludur.",
      k: "1012 resmi not s. 49"
    },
    {
      s: "Takasbank teminat, garanti fonu ve sermaye yeterliliğini doğrulayan stres testi sonuçlarını Yönetim Kuruluna hangi sıklıkla raporlar?",
      c: ["Aylık", "Üç aylık", "Altı aylık", "Yıllık", "Her temerrütte"],
      d: 1,
      a: "Stres testi sonuçları iç sistem birimleri aracılığıyla **üçer aylık** dönemlerle Yönetim Kuruluna raporlanır ve Kurula bildirilir. Altı aylık periyot ise iç denetim kontrolleri içindir.",
      k: "1012 resmi not s. 49"
    },
    {
      s: "Takasbank'ın başka bir MKT kuruluşunun üyesi olarak faaliyet göstermesini içeren bağlantılı çalışma türü hangisidir?",
      c: ["Karşılıklı bağlantı", "Katılımcı bağlantı", "Sözleşme yenileme", "Açık teklif", "Zorunlu devir"],
      d: 1,
      a: "**Katılımcı bağlantıda** Takasbank diğer MKT'nin üyesi olur ya da diğer MKT Takasbank'ın üyesi olur. **Karşılıklı bağlantıda** ise teminat ve ilave kaynaklar karşılıklı değiştirilir.",
      k: "1012 resmi not s. 49"
    }
  ]
});
