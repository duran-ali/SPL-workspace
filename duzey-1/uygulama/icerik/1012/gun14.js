SPL.gun("1012", 14, {
  okuma: `
## Bugünün haritası
Bugün **türev araçlarda (VİOP) takas** bölümüne başlıyoruz.
1. Takasbank'ın **sorumluluğu** ve takasın genel esasları
2. VİOP **takas saatleri**
3. **Vade sonu uzlaşma** ve **fiziki teslimat**
4. **Üç katmanlı risk yönetimi** ve **sürdürme seviyesi**
5. **Pozisyon limitleri**
6. **Risk limitleri** ve ilave işlem teminatı

---

## 1. Sorumluluk ve genel esaslar
- Takasbank VİOP'ta **açık teklif** yöntemiyle **MKT**'dir.
- Muhatabı **üyelerdir**. Üyelerin **müşterilerine** ve genel MKT üyelerinin **işlemci kuruluşlara** karşı yükümlülüklerinden **sorumlu değildir**.
- Takasbank, müşteri işlemlerinde de **yalnızca üyeyi** muhatap alır. Üye, müşterileri adına **teminat tamamlama çağrısı dahil her bildirimi almaya tam yetkili** sayılır.
- Çağrı karşılanmazsa Takasbank, **müşteriye bildirim yapmadan** müşteri hesaplarında pozisyonları **re'sen kapatabilir** ve teminatları **nakde çevirebilir**.
- Takasbank ile üye arasında **teslim karşılığı ödeme** uygulanır. Teminat işlemleri **hesap bazında** yapılır.

### Fiziki teslimat yükümlülükleri
| | **Kıymet yükümlülüğü** | **Nakit yükümlülüğü** |
|---|---|---|
| **Vadeli işlem** | **Son işlem günü** açık pozisyonlar üzerinden | Son işlem günü **uzlaşma fiyatı** üzerinden |
| **Opsiyon** | **Kullanım talimatları** üzerinden | Sözleşmenin **kullanım fiyatı** üzerinden |

- Kıymet yükümlülükleri sözleşme bazında netleştirilip **üye bazında** belirlenir; takası **MKK** hesapları üzerinden yapılır.

---

## 2. VİOP takas saatleri (tam gün)

| Süreç | Saat |
|---|---|
| Nema dağıtımı | **07:30** |
| Teminat yatırma-çekme başlangıcı | 08:00 |
| **Eksi nakit** kapama son saati | **11:00** |
| **Marjin kapama** son saati (temerrüt başlangıcı) | **15:00** |
| TL teminat çekme, **nemalandırma** ve **nemalandırmama talimatı** son saati | **15:40** |
| **Döviz** vadeli ve opsiyon fiziki teslimat son saati | **16:00** |
| **ELÜS** vadeli fiziki teslimat son saati | **17:00** |
| TL dışı teminat çekme ve **teminat yatırma** son saati | **19:00** |
| **Uzlaşma fiyatı** ilanı | **19:00** |
| **Opsiyon kullanım talimatı** ve otomatik kullanımı reddetme son saati | **19:20** |
| Akşam döngüsü başlangıcı | 19:30 |
| Hesap güncellemesi ve **teminat tamamlama çağrısı** | 19:30+ |

- **Yarım gün:** marjin kapama **11:00**, TL teminat çekme **11:40**, uzlaşma fiyatı **13:30**, opsiyon kullanım talimatı **13:50**.

---

## 3. Vade sonu uzlaşma ve fiziki teslimat
- **Opsiyonlarda**, vade sonunda **kârda olan** pozisyonlar **bildirim gerekmeden otomatik olarak kullanılır**.
- Kârda olmayan **nakdi uzlaşmalı** vadeli sözleşmeler son işlem günü kapatılmazsa, Takasbank **vade sonu uzlaşma fiyatından ters işlemle** kapatır.

| Dayanak | Fiziki teslimat nasıl yapılır? |
|---|---|
| **Pay** vadeli | Açık pozisyonlar **Borsa Pay Piyasası**'nda müşteri ya da portföy hesabı üzerinden netleştirilip **MKK**'da tasfiye edilir |
| **ELÜS** | Kıymet borcu **MKK**'da kapatılır; nakit Takasbank serbest hesabından ödenir. **Hesap bazında** netleştirme ve **şartlı virman** kullanılır. |
| **Döviz** | Döviz borcu Takasbank'ın **muhabir bankalarındaki** hesaplara gönderilir; döviz alacağı serbest döviz hesabına geçer |
| **DİBS** vadeli | **Borçlanma Araçları Piyasası**'nda netleştirilip takas edilir |

- Dövize dayalı fiziki teslimatlı sözleşmelerde **yarım günlerde** ve teslim edilecek **dövizin tatil olduğu günlerde** takas yapılmaz.
- Kısmen yerine getirilen döviz teslimatında TL alacakları da **kısmen** ödenebilir.

---

## 4. Üç katmanlı risk yönetimi

| Katman | Özellik |
|---|---|
| **İşlem öncesi** | Emirlerin işleme dönüşme ihtimaline göre teminat kontrolü (**PTRM**). Parametreler en az **1 yıl** veri ve **%99,50** güvenle belirlenir, **ayda bir** gözden geçirilir. Teminat açığı olan hesaptan **pozisyon artırıcı emir** iletilemez. |
| **İşlem anı** | Emir işleme dönüştüğünde kontrol. Teminat yatırma-çekme ve **give-up / take-up** (pozisyon aktarımı) sonrasında da hesaplama yapılır. |
| **İşlem sonrası** | Belirlenen zamanlarda **portföy bazlı** "bulunması gereken teminat" hesaplanır. Risk limiti ve teminat çağrıları bu katmana dayanır. |

- İşlem öncesinde toplam marjin gereksinimi **1'den küçük** bir parametreyle ölçeklendirilebilir (gün içi **sürdürme seviyesi**).

### Sürdürme seviyesi
- **Gün sonunda sürdürme seviyesi uygulanmaz.** Gün içinde bulunması gereken teminatın belirli bir oranı sürdürme seviyesidir. Uygulanan oran **%80**'dir.
- Teminatı sürdürme seviyesinin altına düşen hesapta:
  - **tüm pasif emirler otomatik iptal edilir**,
  - **pozisyon artırıcı emir engellenir**.
  - Ama her durumda gün içi teminat çağrısı **yapılmaz**.
- Sürdürme seviyesinin içinde kalan hesaplarda risk kontrolü **üyenin sorumluluğundadır**.
- **Akşam seansında** değişim teminatı son işlem fiyatıyla hesaplanır. İlk işlemde gün içi seansının son fiyatı kullanılır. Akşam seansında periyodik risk hesabı yoktur; her şey **işlem anı** modülünde yapılır.
- Gün sonunda kesinleşen **zarar** teminat değerinden düşülür, **kâr** eklenir. Gün içi işlemlerde risk fiyatı **uzlaşma fiyatıdır**.

---

## 5. Pozisyon limitleri
Üç tür limit vardır: **sicil bazında**, **piyasa bazında** ve **üye bazında**.

### Sicil bazında
- Bir sicile bağlı tüm hesaplarda, aynı dayanağa bağlı **aynı yönlü** pozisyonların karşılık geldiği azami dayanak varlık sayısıdır.
- **Aynı yönlü pozisyonlar:**
  - *Uzun alım opsiyonu + kısa satım opsiyonu + uzun vadeli*, ya da
  - *Kısa alım opsiyonu + uzun satım opsiyonu + kısa vadeli*.
  - Hangisi **büyükse** o dikkate alınır.

| Sözleşme | Sicil bazında limit | Aşılırsa uygulanacak limit |
|---|---|---|
| **Pay** vadeli ve opsiyon | Fiili dolaşımdaki pay miktarının **%3**'ü | — |
| **Tüm** vadeli ve opsiyon sözleşmeleri | Genel mektupla duyurulan **maktu** değerler | Aynı yönlü toplam açık pozisyonun **%10**'u |

- **Müşterek hesaplar** tek sicil üzerinden izlenir.
- Maktu limitler üye talebiyle **10 katına kadar** artırılabilir. **2 kattan fazlası** için **Borsanın olumlu görüşü** gerekir.
- Fiili dolaşımdaki pay adetleri **haftanın son iş günü** güncellenir. Maktu limitler **üç ayda bir** gözden geçirilir.

### Piyasa bazında
- **Pay** vadeli ve opsiyonlarda fiili dolaşımdaki payın **%25**'i. Limit **aylık** güncellenir; vade sonu işlemleri için **%35**'e kadar artırılabilir.
- **ELÜS** vadelilerinde, MKK'nın üç ayda bir bildirdiği **lisanslı depo kapasitesinin %100**'ü.
- **Fiziki teslimatlı olmayan** sözleşmelerde piyasa bazında limit **uygulanmaz**.

### Üye bazında
Piyasadaki gelişmeler ve Borsa'nın görüşüyle **Takasbank** belirler.

### Limit aşımı
- **Piyasa** bazında aşımda **tüm hesapların**, **sicil** bazında aşımda o sicilin hesaplarının **pozisyon artırıcı işlemleri engellenir** ve pasif emirler iptal edilir.
- **Sicil** bazında kontrol **anlık** yapılır. **Piyasa** bazında kontrol **günde bir kez, gün başında** yapılır.
- Üye kapatmazsa Takasbank pozisyonları **re'sen kapatabilir**; sorumluluk üyeye aittir.
- **Pasif aşım:** sicilin pozisyonu artmadığı halde toplam açık pozisyon **azaldığı** için oluşan aşımdır. Kapatma zorunluluğu ancak aynı yönlü toplam açık pozisyonun **%12**'sini aşınca uygulanır.

---

## 6. Risk limitleri
- Risk limiti, üyenin **mali yeterliliği** oranında tanımlanır. VİOP'ta kontrol **gün sonu** risk hesaplama anında yapılır.
- Aşan kısım katsayılarla çarpılır ve **ilave işlem teminatı** olur. **İzleyen iş günü 15:00**'e kadar yatırılmazsa temerrüt olur.
- **Hem risk/limit oranı hem de VİOP limitindeki aşım %200'ü geçerse** üyenin **tüm VİOP hesaplarında** pozisyon artırıcı emir engellenir.
- İlave işlem teminatının **en az %30**'u **TL** olmalıdır.
- Aşım **iki işlem günü** içinde kapatılmazsa Takasbank ilave teminatı **%100'e kadar artırabilir**.

### Teminatlandırma yöntemi
- **BISTECH Marjin Yöntemi** (portföy bazlı) kullanılır.
- Parametreler: güven düzeyi **%99 ile %99,75** arası, elde tutma süresi **2 ile 10 iş günü** arası, en az **1 yıllık** veri. **Üç ayda bir** gözden geçirilir.

> [!ezber]
> **VİOP saatleri:** eksi nakit 11:00 · marjin 15:00 · TL çekme ve nema 15:40 · döviz teslimat 16:00 · ELÜS 17:00 · uzlaşma fiyatı 19:00 · opsiyon talimatı 19:20
> **Sürdürme seviyesi %80** · **Sicil limiti:** payda fiili dolaşımın %3'ü · **Piyasa limiti:** %25 (en fazla %35) · **Pasif aşım** %12

> [!dikkat]
> Döviz vadeli işlem ve opsiyon sözleşmelerinde fiziki teslimat son saati, notun saat tablosunda (s. 132) **16:00**'dır. Kitabın bölüm sonu sorusunun cevap anahtarı (s. 161, 176) ise 15:00'ı gösteriyor. Bu modülde tablodaki 16:00 esas alındı; sınavda bu saat sorulursa seçeneklere dikkat et.
`,
  sorular: [
    {
      s: "VİOP'ta müşteri işlemleri için yapılan teminat tamamlama çağrısı karşılanmazsa Takasbank'ın yetkisiyle ilgili hangisi doğrudur?",
      c: ["Pozisyonları kapatmadan önce müşteriye yazılı bildirim yapmak zorundadır.", "Müşterilere bildirim yapmadan pozisyonları re'sen kapatıp teminatları nakde çevirebilir.", "Yalnızca üyenin kendi portföy hesaplarındaki pozisyonlara müdahale edebilir.", "Müşteri hesaplarına SPK'nın onayı olmadan müdahale edemez.", "Müşteri hesaplarına hiçbir koşulda doğrudan müdahale edemez."],
      d: 1,
      a: "Takasbank yalnızca üyeyi muhatap alır. Çağrı karşılanmazsa **müşterilere bildirim yapılmadan** müşteri hesaplarında pozisyonları **re'sen kapatabilir** ve teminatları **nakde çevirebilir**.",
      k: "1012 resmi not s. 131"
    },
    {
      s: "VİOP'ta fiziki teslimatlı opsiyon sözleşmelerinde nakit takas yükümlülükleri hangi fiyat esas alınarak hesaplanır?",
      c: ["Son işlem günü uzlaşma fiyatı", "Sözleşmenin kullanım fiyatı", "Spot piyasa kapanış fiyatı", "Ağırlıklı ortalama fiyat", "Opsiyon primi"],
      d: 1,
      a: "Fiziki teslimatta nakit yükümlülük, **vadeli işlemlerde** son işlem günü uzlaşma fiyatı, **opsiyonlarda** ise sözleşmenin **kullanım fiyatı** üzerinden hesaplanır.",
      k: "1012 resmi not s. 131"
    },
    {
      s: "VİOP'ta tam iş gününde marjin kapama son saati (temerrüt başlangıç saati) kaçtır?",
      c: ["11:00", "15:00", "15:40", "16:00", "19:00"],
      d: 1,
      a: "VİOP'ta **marjin kapama son saati 15:00**'tir. Eksi nakit kapama 11:00, TL teminat çekme 15:40, döviz fiziki teslimat 16:00'dır.",
      k: "1012 resmi not s. 132"
    },
    {
      s: "VİOP'ta vade sonunda kârda olan opsiyon pozisyonlarıyla ilgili hangisi doğrudur?",
      c: ["Üyenin vade sonunda kullanım bildirimi yapması zorunludur.", "Kullanım bildirimi gerekmeden otomatik olarak kullanılır.", "Kullanılmadığı için değersiz olarak sona erer.", "Pozisyon otomatik olarak bir sonraki vadeye taşınır.", "Yalnızca fiziki teslimatlı opsiyonlar kullanılabilir."],
      d: 1,
      a: "Vade sonunda **kârda olan** opsiyon pozisyonları, nakdi uzlaşmalı da olsa fiziki teslimatlı da olsa **bildirim gerekmeden otomatik olarak** kullanılır.",
      k: "1012 resmi not s. 133"
    },
    {
      s: "VİOP'ta gün içi sürdürme seviyesinin altına düşen bir hesap için hangisi uygulanır?",
      c: ["Hesaptaki tüm pozisyonlar derhal re'sen kapatılır.", "Pasif emirler otomatik iptal edilir; pozisyon artırıcı emir iletimi engellenir.", "Her durumda gün içi teminat tamamlama çağrısı yapılır.", "Hesaba gün sonuna kadar ek süre verilir; bu süre içinde herhangi bir işlem kısıtlaması yapılmaz.", "Hesap bilgileri MKK'ya ve Kurula bildirilir."],
      d: 1,
      a: "Sürdürme seviyesini aşan hesabın **pasif emirleri otomatik iptal edilir** ve **pozisyon artırıcı emir engellenir**. Ancak her durumda gün içi teminat çağrısı yapılmaz. Gün sonunda sürdürme seviyesi uygulanmaz.",
      k: "1012 resmi not s. 135"
    },
    {
      s: "VİOP'ta pay vadeli işlem ve opsiyon sözleşmelerinde sicil bazında pozisyon limiti nedir?",
      c: ["Fiili dolaşımdaki pay miktarının %1'i", "Fiili dolaşımdaki pay miktarının %3'ü", "Fiili dolaşımdaki pay miktarının %10'u", "Fiili dolaşımdaki pay miktarının %25'i", "Sınır yoktur."],
      d: 1,
      a: "Pay vadeli ve opsiyonlarda sicil bazında limit, MKK'nın açıkladığı **fiili dolaşımdaki pay miktarının %3'ü**dür. Piyasa bazında limit ise %25'tir.",
      k: "1012 resmi not s. 136"
    },
    {
      s: "VİOP'ta sicil bazında maktu pozisyon limitlerinin üye talebiyle artırılmasıyla ilgili hangisi doğrudur?",
      c: ["Maktu limitler üye talebiyle hiçbir şekilde artırılamaz.", "Üye talebiyle en fazla 2 katına kadar artırılabilir.", "10 katına kadar artırılabilir; 2 kattan fazlası için Borsanın olumlu görüşü gerekir.", "Üyenin talebi ve teminatının yeterli olması halinde herhangi bir kat sınırı olmaksızın artırılabilir.", "SPK kararıyla ve tüm üyeler için birlikte artırılabilir."],
      d: 2,
      a: "Sicil bazında maktu limitler üye talebiyle **10 katına kadar** artırılabilir; **2 kattan fazla** talepler için **Borsanın olumlu görüşü** alınır.",
      k: "1012 resmi not s. 136"
    },
    {
      s: "VİOP'ta risk limiti aşımından doğan ilave işlem teminatı gereksiniminin en az yüzde kaçı Türk Lirası olmalıdır?",
      c: ["%30", "%40", "%50", "%60", "%70"],
      d: 0,
      a: "VİOP'ta ilave işlem teminatının **en az %30**'u TL olmalıdır. Aşım iki işlem günü içinde kapatılmazsa Takasbank ilave teminatı %100'e kadar artırabilir.",
      k: "1012 resmi not s. 138"
    }
  ]
});
