SPL.gun("1006", 32, {
  okuma: `
## Bugünün haritası
ÖPP'nin **teminat** sistemini ve **garanti fonunu** çalışıyoruz. Bu gün oran ağırlıklı: TL teminat şartı, sürdürme seviyesi, değerleme katsayıları, nemalandırma saatleri ve garanti fonunun büyüklüğü.

1. **Teminat türleri**
2. **İşlem teminatı kompozisyonu**
3. Teminat **yatırma ve çekme**
4. Teminatların **nemalandırılması**
5. **Değerleme katsayıları** ve değerleme yöntemi
6. **Teminat oranları** ve **teminat tamamlama çağrısı**
7. **Teminatlardan doğan haklar**
8. **Garanti fonu**

---

## 1. Teminat türleri
**Teminat:** ÖPP merkezi karşı taraf üyelerinin **işlem teminatı** ve **garanti fonu katkı payı** olarak Takasbank'a verdiği varlıklar.

**Kabul edilen varlıklar:**
1) Nakit **Türk lirası**
2) Konvertibl döviz (**USD, EUR, GBP**)
3) **DİBS**
4) Hazinenin ihraç ettiği **eurobond**
5) **Hazine VKŞ** kira sertifikaları
6) **BIST 100** endeksindeki **paylar**
7) **Hisse senedi şemsiye fonu** payları
8) **Borçlanma araçları şemsiye fonu** payları (ve para piyasası şemsiye fonu payları)
9) Borsada işlem gören **standart altın**
10) İTMK, İDMK, VTMK ve VDMK
11) **Borsa İstanbul A.Ş. payları**
12) Darphanenin ihraç ettiği **altına dayalı emtia sertifikaları**

---

## 2. İşlem teminatı kompozisyonu
> [!ezber] Toplam teminat gereksiniminin **en az %30'u Türk lirası** teminattan oluşmalıdır.

| Varlık | Grup limiti | Alt grup limiti |
|---|---|---|
| Nakit TL | **%100** | – |
| Konvertibl döviz | %70 | – |
| DİBS | %70 | %50 (ISIN bazında) |
| Eurobond | %70 | %50 (ISIN bazında) |
| Hazine VKŞ kira sertifikası | %70 | %25 (ISIN bazında) |
| BIST 100 payları | %70 | %20 |
| Hisse / borçlanma araçları / para piyasası şemsiye fonu | %50 | %20 |
| Standart altın | %50 | – |
| İTMK, İDMK, VTMK, VDMK | **%25** | %40 |
| Borsa İstanbul payları | %50 | – |

Kompozisyon limitleri yatırılmış nakit ve nakit dışı teminatların toplamı üzerinden uygulanır.

---

## 3. Teminat yatırma ve çekme
- Risk ve teminat kontrolü **portföy ve müşteri bazında** yapılır.
- Üyeler teminat giriş-çıkışlarını Takasbank uygulamalarıyla **17:15**'e kadar kendileri yapar.
- Kıymet borcu kapandıktan sonra veya kıymet borcu komisyondan küçükse, **kapanmayan komisyon borcu kadar** teminat çekilemez.

| Teminat | Kural |
|---|---|
| **Nakit** | TL, USD, EUR veya GBP. Nemalandırılacak tutara girmeyen nakit TL **17:05**'e kadar çekilebilir |
| **DİBS ve kira sertifikası** | Müşteri adınaysa **MKK** hesaplarından; portföy ve fon adınaysa Takasbank'taki **501 numaralı serbest depo** hesabından |
| **Paylar** | Yalnız **BIST 100** payları; adet ve katları. Borsada **sırası kapatılan** paylar teminat özelliğini **kaybeder** |
| **Altın** | KMKTP'de işlem gören külçe altınlardan **100 gram ve katları**; önce bir KMKTP üyesi üzerinden Takasbank'ın saklama hesabına **virman**, sonra hangi hesap için tanımlanacağını belirten **talimat** |
| **Borsa İstanbul payları** | **Yalnız portföy** adına |
| İTMK, İDMK, VTMK, VDMK | Müşteri, fon ve portföy için **MKK** hesaplarından |
| Eurobond | Eurobond teminat deposundan ÖPP uygulamasıyla teminat hesabına |

---

## 4. Teminatların nemalandırılması
- **TL nakit teminatlar**, Takasbank Hazine Ekibince **en iyi gayretle** ve limitleri içinde nemalandırılır.
- Nemalandırma **15:45**'teki bakiye üzerinden yapılır; üyeler bu saate kadar **nema muafiyet kaydı** yaratabilir.
- 15:45'te nemaya alınan TL nakit **bu saatten sonra çekilemez**; 15:45'ten sonra yatırılan nakit nemaya **eklenmez**.
- **Zorunlu karşılık** düşüldükten sonra kalan tutarın brüt nemasından **BSMV** gibi yasal maliyetler ve brüt nemanın **%5**'i kadar **"Takasbank Teminat Takip ve Nemalandırma Ücreti"** düşülür; nema **ertesi iş günü** hesaplara eklenir.

---

## 5. Değerleme katsayıları ve yöntem
| Teminat | Katsayı |
|---|---|
| **Türk lirası** | **%100** |
| USD | %90 |
| EUR, GBP | %89 |
| DİBS (0-1 yıl / 1-5 yıl / 5 yıl+) | %94 / %81 / %78 |
| **BIST 30** payları | **%84** |
| **BIST 100** payları | **%83** |
| Borsa İstanbul payları | %100 |

(Eurobond, kira sertifikaları, şemsiye fonlar ve altın için vade ve türe göre ayrı katsayılar vardır.)

### Değerleme yöntemi
Takasbank **her gün sonunda** teminat ve riskleri değerler; **pay ve BYF**'ler **gün içinde de** değerlenir.
| Varlık | Değerleme fiyatı |
|---|---|
| **Pay ve BYF** | Gün sonu: seans sonu **AOF**; gün içi: **12:00** AOF. İşlem yoksa en iyi alış-satış ortalaması, o da yoksa son AOF |
| **Devlet tahvili ve hazine bonosu** | Takasbank **verim eğrisi** ile teorik fiyat; yoksa TCMB gösterge değerleri |
| **YP nakit** | Ertesi gün için belirlenen **TCMB döviz alış kuru** |
| **Altın** | KMKTP son seansındaki T+0 USD/ons AOF × TCMB alış kuru |
| **Yatırım fonları** | İhraççının o gün ilan ettiği fiyat |
| **Eurobond**, İTMK, VDMK vb. | Takasbank'ın belirlediği (teorik) fiyat |
| **Kira sertifikaları** | Takasbank verim eğrisi teorik fiyatı; yoksa TCMB gösterge |
| **Borsa İstanbul payı** | Borsa ile Takasbank arasındaki **protokol** fiyatı |

---

## 6. Teminat oranları ve tamamlama çağrısı
- Pozisyon risklerini karşılamak için üyelerden **başlangıç teminatı** istenir: temerrüt anından çözümüne kadar fiyat değişimlerini karşılamak için.
- **Ödünç veren üyeden teminat istenmez.**
- **Sürdürme seviyesi** = değerlenmiş teminat / toplam ödünç borcu; **%110** uygulanır.

### Teminat tamamlama çağrısı
- Değerlenmiş teminat **%110**'un altına düşerse **veya** TL teminat gerekli teminatın **%30**'unun altına düşerse çağrı yapılır; teminatın **başlangıç oranına** tamamlanması istenir.
- Çağrı, üye ekranlarına **mesaj ve raporla** yapılır.
- Sürdürme seviyesinin altına düşen hesaplar **yeni işlem yapamaz**; ek teminat **çağrının yapıldığı gün sonuna kadar** yatırılmalıdır.
- **Zorunlu %30 TL** teminat şartı gün sonunda aranır; altına düşen hesaplar **ertesi iş günü gün içi değerlemeye kadar** işlem yapabilir.
- Pay ve BYF'lerin gün içi değerlemesiyle oluşan riskler **12:30**'a kadar güncellenir.

> [!dikkat] Çağrıya uyulmazsa hesabın teminatları **nakde çevrilir**, kıymet alınarak **vadesi en yakın** ödünç borcundan başlanarak teminat başlangıç oranına ulaşana kadar borçlar **tasfiye** edilir. Vade kırılarak kapatılan ödünçlerde vade sonuna kadar işleyecek **komisyon ödünç verene ödenir**; bunu **ödünç alan** öder.

### İleri valörlü işlemlerde
- İşlem günü ile valör arasında çağrı yapılırsa teminat o gün sonuna kadar tamamlanmalıdır; uyulmazsa **valör günü takas yapılmaz** ve teminat **15:30**'a kadar tamamlanmalıdır.
- Teminat 15:30'a kadar tamamlanmazsa Takasbank kıymeti **ödünç verene iade** eder ve vadeye kadar komisyonları öder; temerrüde düşen üyeye kıymet **teslim edilmez**; üye komisyon ve **temerrüt faizini** öder.

---

## 7. Teminatlardan doğan haklar
- Teminattaki kıymetlerden doğan haklar **teminatı verene** aittir.
- **Bedelsiz** paylar ve **temettüler** Takasbank tarafından kullanılıp teminat hesabına aktarılır.
- **Bedelli** artırımda üye, rüçhan kuponunu serbest alt hesaba virmanlayıp (teminat çıkışı yapıp) bedelini yatırarak kullanır.
- Teminattaki DİBS (döviz ödemeliler hariç), kira sertifikaları, İTMK, VDMK ve eurobondların **itfa ve kupon** ödemeleri teminat hesabına aktarılır.

---

## 8. Garanti fonu
- Üyelerin temerrüdünde zararların **teminatları aşan kısmı** için kullanılmak üzere üyelerin **katkı paylarıyla** oluşur.
- MKT üyelerinin garanti fonuna katılımı **zorunludur**; katkı payları üyelerin **kendi mülkiyetindeki** varlıklardan karşılanır.
- Katkı payı yükümlülüğünü süresinde tamamlamayan üyeler **işlem yapamaz**. Fonu **Takasbank** temsil ve idare eder.

### Nemalandırma
- Nakit TL katkı payları limitler içinde **en iyi koşullarla** nemalandırılır; zorunlu karşılık sonrası brüt nemadan vergi ve **%5 Takasbank komisyonu** düşülür.
- **15:45**'te hesapta bulunan TL katkı payları nemaya girer; muafiyet kaydı bu saate kadar; nemalandırılan tutarların **çıkışına izin verilmez**.

### Büyüklük ve katkı payları
- Garanti fonunun büyüklüğü; **en fazla ödünç borcu olan üye** ile **ikinci ve üçüncü en fazla** borcu olan üyenin stres koşullarında **birlikte temerrüdü** hâlinde doğacak kaynak ihtiyacının **büyük olanından** az olamaz.
- Katkı payları **sabit** ve **değişken** katkı paylarından oluşur.
- Her üyenin katkısı, toplam ödünç borçlarının bir **risk katsayısıyla** çarpılmasıyla bulunan **garanti fonu risk değerine** göre hesaplanır.
- Yükümlülükler **her ayın son iş günü** hesaplanır, **izleyen ayın ilk iş günü** güncellenir.

### Kabul edilen varlıklar
İşlem teminatıyla aynı varlıklar; ancak grup limitleri farklıdır: **nakit TL, döviz, DİBS, eurobond, kira sertifikası %100**; BIST 100 payları **%70**; şemsiye fonlar ve altın **%50**; İTMK-VDMK **%25**; Borsa İstanbul payları %50.

- Katkı payı kıymetleri üyenin talebiyle **günlük değiştirilebilir**, katkı payı fazlaları **günlük çekilebilir**.
- Değerleme **her gün sonunda** yapılır.

### Garanti fonu tamamlama çağrısı ve iade
- Yükümlülük **ertesi iş günü gün sonuna kadar** yerine getirilmezse üye **temerrüde düşmüş** sayılır.
- Üyeliği sona erenlerin **sabit katkı payı dışındaki** payları yükümlülükler ve olası temerrütler gözetilerek, vergi ve yasal yükümlülükler düşülüp **iade** edilir. **Sabit katkı payı**, açık pozisyonların vadesi gözetilerek **Takasbank Yönetim Kurulunun** belirleyeceği süre sonunda iade edilir.

### Ödünce konu kıymetin takası
- **Aynı gün valörlü** işlemlerde işlemin gerçekleştiği **anda**, **ileri valörlü** işlemlerde **valör günü** yapılır.
- Kıymet, ödünç verenin MKK'daki **ÖPP Alt Hesabından** alınır; ödünç alanın o kıymetten borcu varsa borcu kadarı **Ödünç Kapama Blokaj Hesabına**, kalanı **Serbest Alt Hesabına** aktarılır.

---

## Bugünün özeti
- Teminatın en az **%30**'u **TL** olmalı; nakit TL grup limiti **%100**, İTMK-VDMK **%25**.
- Teminat giriş-çıkış **17:15**'e kadar; nema dışı nakit TL çıkışı **17:05**'e kadar; nemalandırma **15:45** bakiyesiyle, ücret brüt nemanın **%5**'i.
- Paylarda yalnız **BIST 100**; altın **100 gram** ve katları; Borsa İstanbul payı **yalnız portföy**.
- Katsayılar: TL **%100**, USD **%90**, BIST 30 **%84**, BIST 100 **%83**.
- **Ödünç verenden teminat yok**; sürdürme seviyesi **%110**.
- Çağrı: **%110** altı veya TL **%30** altı; gün sonuna kadar tamamlama; uyulmazsa **vadesi en yakından** başlayarak tasfiye.
- İleri valörde teminat **15:30**'a kadar tamamlanmazsa kıymet ödünç verene iade.
- Garanti fonu: en büyük borçlu ile 2. ve 3. büyük borçlunun stres altında temerrüdü; katkılar **sabit + değişken**; yükümlülük **ay sonu** hesap; tamamlanmazsa **ertesi iş günü** sonunda temerrüt.
`,
  sorular: [
    {
      s: "ÖPP'de hesaplanan toplam teminat gereksiniminin **en az ne kadarı** Türk lirası teminattan oluşmalıdır?",
      c: ["%10", "%20", "%30", "%50", "%70"],
      d: 2,
      a: "Toplam teminat gereksiniminin **en az %30**'u **Türk lirası** teminattan oluşmalıdır. TL teminat bu oranın altına düşerse **teminat tamamlama çağrısı** yapılır.",
      k: "1006 resmi not s. 202, 205"
    },
    {
      s: "ÖPP'de teminata verilecek **pay senetleri** ile ilgili hangisi doğrudur?",
      c: ["BIST 100 payları alınır; sırası kapatılan pay teminat sayılmaz", "Borsada işlem gören tüm paylar ve BYF'ler teminata alınabilir", "Yalnızca BIST 30 Endeksindeki paylar teminata alınabilir", "Paylar teminata alınamaz; yalnızca nakit ve DİBS kabul edilir", "Sırası kapatılan paylar da tam değerinden teminat sayılmaya devam eder"],
      d: 0,
      a: "Teminata alınabilecek paylar **BIST 100 Endeksindeki** paylarla sınırlıdır ve **adet ve katları** şeklindedir. Borsada **sırası kapatılan** paylar teminat özelliğini **kaybeder**.",
      k: "1006 resmi not s. 203"
    },
    {
      s: "ÖPP'de **TL nakit teminatların nemalandırılması** ile ilgili hangisi **yanlıştır**?",
      c: ["Nemalandırma 15:45'teki teminat bakiyesi üzerinden yapılır", "Üyeler 15:45'e kadar nema muafiyet kaydı yaratabilir", "15:45'te nemaya alınan TL nakit 17:15'e kadar çekilebilir", "Brüt nemadan BSMV ve brüt nemanın %5'i kadar ücret düşülür", "Nema geliri hesaplara bir sonraki iş günü eklenir"],
      d: 2,
      a: "Saat **15:45**'te nemalandırılacak tutar içine alınan TL nakit teminatın **bu saatten sonra çıkışına izin verilmez**. Nemaya girmeyen nakit TL ise **17:05**'e kadar çekilebilir.",
      k: "1006 resmi not s. 203"
    },
    {
      s: "ÖPP teminat değerlemesinde **BIST 30 Endeksindeki paylar** için kullanılan değerleme katsayısı nedir?",
      c: ["%100", "%90", "%84", "%83", "%70"],
      d: 2,
      a: "Değerleme katsayıları: TL **%100**, USD **%90**, EUR ve GBP **%89**, **BIST 30** payları **%84**, **BIST 100** payları **%83**.",
      k: "1006 resmi not s. 203-204"
    },
    {
      s: "ÖPP'de **teminat oranları** ile ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["Ödünç veren ve ödünç alan üyelerden eşit oranda teminat istenir", "Sürdürme seviyesi, toplam ödünç borcunun teminata bölünmesiyle hesaplanır", "Sürdürme seviyesi %150 olarak uygulanır", "Başlangıç teminatı yalnızca vade sonunda istenir", "Ödünç veren üyeden teminat talep edilmez; sürdürme seviyesi %110 olarak uygulanır"],
      d: 4,
      a: "**Ödünç veren üyeden teminat istenmez**. Sürdürme seviyesi, **değerlenmiş teminatın toplam ödünç borcuna** bölünmesiyle hesaplanır ve **%110** olarak uygulanır.",
      k: "1006 resmi not s. 205"
    },
    {
      s: "ÖPP'de **teminat tamamlama çağrısına uyulmaması** hâlinde ne olur?",
      c: ["Teminatlar nakde çevrilir; vadesi en yakın borçtan başlanarak tasfiye edilir", "Üyenin tüm işlemleri iptal edilir ve kıymetler ödünç verene iade edilmez", "Takasbank ek teminatı kendi kaynağından tamamlar ve üyeden talep etmez", "Çağrı süresi bir ay uzatılır ve üye bu sürede işlem yapmaya devam eder", "Üyeye yalnızca yazılı uyarı verilir ve başka işlem yapılmaz"],
      d: 0,
      a: "Çağrıya uyulmazsa teminatlar **nakde dönüştürülüp** kıymet alınır ve **vadesi en yakın** ödünç borcundan başlanarak teminat başlangıç oranına ulaşana kadar borçlar **tasfiye** edilir. Vadesi kırılan ödünçlerin vade sonuna kadarki komisyonu ödünç verene ödenir ve bunu ödünç alan karşılar.",
      k: "1006 resmi not s. 205"
    },
    {
      s: "ÖPP **garanti fonunun büyüklüğü** nasıl belirlenir?",
      c: ["Tüm üyelerin ödünç borçlarının %10'u kadar sabit bir tutarda tutulur", "Her üyenin eşit tutarda yatırdığı katkı paylarıyla oluşur", "Takasbank'ın özkaynaklarının iki katı olarak belirlenir", "En büyük borçlu ile 2. ve 3. büyük borçlunun stres altındaki temerrüdünü karşılar", "SPK tarafından her yıl sabit bir tutar olarak ilan edilir"],
      d: 3,
      a: "Garanti fonu; **en fazla ödünç borcu olan üye** ile **ikinci ve üçüncü en fazla** borcu olan üyenin stres koşullarında birlikte temerrüdü hâlinde doğacak kaynak ihtiyacının **büyük olanından** az olamaz. Katkı payları **sabit ve değişken** paylardan oluşur.",
      k: "1006 resmi not s. 207"
    },
    {
      s: "ÖPP'de **garanti fonu katkı payı** ile ilgili hangisi **yanlıştır**?",
      c: ["Merkezi karşı taraf üyelerinin garanti fonuna katılımı zorunludur", "Katkı payları üyelerin kendi mülkiyetindeki varlıklardan karşılanmalıdır", "Yükümlülükler ayın son iş günü hesaplanır, izleyen ayın ilk günü güncellenir", "Yükümlülüğü yerine getirmeyen üye bir ay daha işlem yapabilir", "Garanti fonu Takasbank tarafından temsil ve idare edilir"],
      d: 3,
      a: "Garanti fonu katkı payı yükümlülüğünü süresinde tamamlamayan üyeler **piyasada işlem yapamaz**; tamamlama çağrısına ertesi iş günü gün sonuna kadar uyulmazsa üye **temerrüde düşmüş** sayılır.",
      k: "1006 resmi not s. 206-208"
    }
  ]
});
