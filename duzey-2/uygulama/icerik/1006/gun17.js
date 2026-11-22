SPL.gun("1006", 17, {
  okuma: `
## Bugünün haritası
Bugün BAP'ın genel kurallarını tamamlayıp ilk pazarı, **Kesin Alım Satım Pazarını** ayrıntılı çalışıyoruz. Hangi aracın **temiz fiyat**, hangisinin **kirli fiyat** ya da **getiri** üzerinden işlem gördüğü ve fiyat adımları sınavda çok sorulur.

1. Fon işlemlerinde **fon lehine** fiyat kuralları
2. **İşlem öncesi risk yönetimi**
3. **Takas ve temerrüt**; Temerrüt Pazarı
4. Kesin Alım Satım Pazarının **amacı ve işleyişi**
5. **Fiyat tipleri** ve takas fiyatı
6. **Emir giriş yöntemleri**: basit getiri, temiz fiyat, kirli fiyat
7. **Fiyat adımları** ve eşleşme örneği
8. Pazarda **tek fiyat yöntemi** ve **döviz ödemeli** araçlar

---

## 1. Fon işlemlerinde fon lehine fiyat
14:00 – 17:30 arasında yapılan **aynı gün valörlü** yatırım fonu işlemlerinde, o pazarda 14:00'e kadar oluşan **ağırlıklı ortalama** oran ve fiyat referans alınır ve işlem **fon lehine** olmalıdır:

| Pazar | Fonun lehine kural |
|---|---|
| **Kesin Alım Satım** | Alım: AOF **veya altında**; satım: AOF **veya üzerinde** |
| **Repo-Ters Repo** | Ters repo: ağırlıklı ortalama oran **veya üzerinde**; repo: **veya altında** |
| **MK Tercihli Repo** | Ters repo: ortalama oran veya **üzeri** + ortalama SPA fiyatı veya **altı**; repo: ortalama oran veya **altı** + ortalama SPA fiyatı veya **üzeri** |
| **Pay Senedi Repo** | Ters repo: ortalama oran veya üzeri; repo: ortalama oran veya altı |

- **Her iki tarafı da fon** olan işlemler ağırlıklı ortalama oran ve fiyatlar **üzerinden** yapılabilir.
- 14:00'ten sonraki aynı gün valörlü fon işlemlerinin takasını yatırım kuruluşları **kendi aralarında** yapmayı peşinen kabul etmiş sayılır.
- Bu işlemler borsanın pazar bazında yayımladığı **üye sıralamasında yer almaz**.

> [!bilgi] Mantığı basit: Fon parayı veriyorsa (ters repo) **yüksek faiz**, menkul kıymet alıyorsa **düşük fiyat** almalıdır. Bu, geç saatte yapılan işlemlerde fon yatırımcısını korur.

---

## 2. İşlem öncesi risk yönetimi
- İşlem sonrası riskleri kontrol için araçlara, emirlere ve işlemlere **kapasite, miktar ve/veya tutar** sınırları getirilebilir.
- **Emir/işlem bazında teminat** gerekliliği getirilebilir.
- Risk ölçütlerini ve sınırları **Genel Müdürlük** belirler; olağan dışı durumlarda veya **yazılı gerekçeyle** üye, kullanıcı veya araç bazında değiştirebilir.

---

## 3. Takas ve temerrüt
- Takas ve teminat yükümlülükleri **Takasbank** düzenlemelerine göre yerine getirilir.
- Takas açıklarını kapatmak için Takasbank, yatırım kuruluşu **nam ve hesabına** temerrüt alım ve temerrüt satım işlemleri yapabilir.
- Temerrüt işlemlerinde taraflardan birinin, adına işlem yapılan **temerrüde düşen kuruluş** olması **zorunludur**; aksi hâlde işlem **iptal edilir**.

### Temerrüt Pazarı
- Bir üyenin temerrüdü hâlinde Takasbank'ın onun adına işlem yapması için kurulmuştur.
- **Temerrüt yoksa** bu pazarda tanımlı enstrüman **yoktur**; temerrüt olunca ilgili seri açılıp duyurulur.
- Bu enstrümana yalnız Takasbank'ın emrinin **karşı yönlü** emri girilebilir; **aynı yönlü** emir girilemez.

---

## 4. Kesin Alım Satım Pazarı
**Amaç:** SP araçlarının şeffaf ve rekabetçi ortamda işlem görmesi, likiditenin artması ve bilgi akışının hızlanması. **17.06.1991**'de faaliyete geçti.

**Kesin alım-satım:** Bir menkul kıymetin alınması veya satılması. Satıcı valör günü **menkul kıymeti teslim eder**, parayı alır; alıcı **parayı öder**, menkul kıymeti alır. Takasla **mülkiyet el değiştirir**.

### İşleyiş
- **Aynı gün** veya **ileri valörlü** kesin alım-satım işlemleri yapılır.
- İletilebilen emirler: **kesin alım**, **kesin satım** ve **özel işlem emri**.
- **Özel işlem emri:** karşı yatırım kuruluşu **seçilerek** nominal tutar, fiyat/getiri, valör ve araç tanımıyla iletilir; **yalnız seçilen karşı kuruluş** görür.

| Valör sınırı | Süre |
|---|---|
| **DİBS** | En fazla **90 gün** |
| **Altın tahvili ve altına dayalı kira sertifikası** | En fazla **7 gün** |
| **Diğer menkul kıymetler** | En fazla **30 gün** |

- İşlemiş faizi hesaplanamayan valörler ile **TÜFE'ye endeksli** tahvillerde referans endeksin ilan edilmediği valörler için **emir iletilemez**.
- Emirler, ihraç para birimiyle **100 birim fiyat tabanı** üzerinden verilir. **Altın tahvili ve altına dayalı kira sertifikasında** ise **TL cinsinden 1 birim** fiyat tabanı kullanılır.
- Emir büyüklüğüne göre **Küçük Emirler** veya **Normal Emirler** pazarında işlem yapılır.

**İşlem görebilen araçlar:** TL ve döviz ödemeli devlet ve özel sektör tahvilleri, hazine bonoları, finansman bonoları, TCMB likidite senetleri, GOS, GES, VDMK, VTMK, yapılandırılmış menkul kıymetler, kamu ve özel sektör kira sertifikaları, **gayrimenkul sertifikaları**.

---

## 5. Fiyat tipleri
- **Temiz fiyat:** işlemiş faiz veya birikmiş kirayı içermez.
- **Kirli fiyat:** işlemiş faiz veya birikmiş kirayı içerir.
- **Takas fiyatı:** takas tutarının hesaplandığı fiyat. **Enflasyona endeksli devlet tahvillerinde enflasyon katkısı** dikkate alınarak hesaplanır; diğer menkul kıymetlerde **kirli fiyata eşittir**.

---

## 6. Emir giriş yöntemleri
Her menkul kıymet için borsa **tek bir fiyat tipi veya getiri** belirler:

| Emir giriş yöntemi | Menkul kıymetler |
|---|---|
| **Basit getiri** | **İskontolu** ihraç edilen TL/döviz ödemeli araçlar; kuponlu tahvillerin (TÜFE'ye endeksli hariç) **ayrıştırılmış anaparaları** |
| **Temiz fiyat** | TL/döviz ödemeli **sabit faizli** tahviller; **sabit kira getirili** kira sertifikaları; ilk kuponu sabitlenmiş değişken faizli TL tahviller; Hazinenin **TLREF, TLREFK** ve bunların endekslerine dayalı kupon ödeyen araçları; **TÜFE'ye endeksli** devlet tahvilleri (enflasyon katkısı hariç temiz fiyat) |
| **Kirli fiyat** | TÜFE'ye endeksli **anüite** devlet tahvilleri; kuponlu tahvillerin **ayrıştırılmış kuponları**; ilk kuponu da sabit olmayan değişken faizli tahviller; döviz cinsi ilk kuponu belli olmayan değişken faizliler; **altın tahvili** ve **altına dayalı kira sertifikaları**; **gayrimenkul sertifikaları** |

> [!ezber] **İskontolu = getiri.** **Sabit kuponlu = temiz fiyat.** **Kuponu belirsiz, altın, ayrıştırılmış kupon, GMS = kirli fiyat.**

---

## 7. Fiyat adımları ve eşleşme
| Emir türü | Adım |
|---|---|
| Temiz veya kirli **fiyat** üzerinden | **0,001 TL** |
| **Getiri** üzerinden | **%0,01** |
| TLREF/TLREFK'ye dayalı, temiz fiyattan işlem gören araçların kupon oranı **belli olmayan** dönemleri | **0,0001 TL** |
| **Altın tahvili** ve **altına dayalı kira sertifikası** | **0,00001 TL** |

### Eşleşme kuralları
- Emirler **çok fiyat-sürekli müzayede** ile, belirlenen aralıkta **tek fiyat** yöntemiyle eşleşir.
- Alımda **en yüksek**, satımda **en düşük** fiyatlı emir önce; eşitse zaman.
- Fiyat eşit değilse **sistemde önce var olan emrin fiyatı** işlem fiyatıdır.

> [!bilgi] **Örnek:** Alım emirleri sırasıyla (1) 5.000.000 @ 87,956, (2) 2.000.000 @ 87,956, (3) 1.000.000 @ 87,950. Gelen satım (4) 6.000.000 @ 87,956. Önce **1 numaralı emrin tamamı** (5 milyon), sonra **2 numaralı emrin 1 milyonu** 87,956'dan gerçekleşir. Sonra (6) 2.000.000 @ **87,950** satım gelirse, bekleyen 2 numaralı emrin kalan 1 milyonu **pasif emrin fiyatı olan 87,956**'dan, 3 numaralı emir ise 87,950'den eşleşir.

---

## 8. Tek fiyat yöntemi ve döviz ödemeli araçlar
### Tek fiyat yöntemi
- Genel Müdürlüğün belirleyip ilan ettiği kıymetlerde **12:10 – 12:30** arasında uygulanır.
- **12:10 – 12:25** emir toplama, **12:25 – 12:30** eşleştirme.
- Bu sürede o kıymetlerde **çok fiyatla işlem yapılamaz**.
- Girilebilen emirler: **limitli** ve **dengeleyici** emir. Dengeleyici emir fiyat/getiri belirtilmeden, yalnız nominal miktarla girilir.

**Denge fiyatı:**
1. En çok işlem miktarını sağlayan fiyat,
2. Birden fazla varsa işlem görmeden kalan miktarın **en az** olduğu fiyat,
3. Hâlâ birden fazlaysa: alış miktarı fazlaysa **yüksek**, satış fazlaysa **düşük** fiyat; **eşitse fiyatların aritmetik ortalaması**.

- Karşılanmayan limit emirler pasife döner; aynı gün valörlüler aynı gün valör son saatinde, ileri valörlüler kapanışta iptal edilir. Karşılanmayan **dengeleyici emirler** eşleşme aşaması biter bitmez **iptal** edilir.

### Döviz ödemeli araçlar
- Alım satım **en az 1 iş günü valörle** yapılır.
- İleri valörde en fazla: **kamu** ihraçlarında **90**, **diğerlerinde 30** takvim günü.
- Emirler ihraç döviz cinsinden verilir: **100 ABD doları** veya **100 avro** üzerinden fiyatlanır.

---

## Bugünün özeti
- Geç saatteki fon işlemleri **fon lehine**: alımda AOF veya altı, satımda AOF veya üstü; ters repoda ortalama oran veya üstü.
- Temerrüt işleminde taraflardan biri **temerrüde düşen kuruluş** olmalı; Temerrüt Pazarında yalnız Takasbank emrinin **karşı yönü** girilebilir.
- Kesin Alım Satım Pazarı **1991**; valör DİBS **90**, altın **7**, diğer **30** gün.
- Fiyat tabanı **100 birim**; altında **1 TL**.
- Takas fiyatı: enflasyona endeksliler hariç **kirli fiyata eşit**.
- İskontolu **getiri**, sabit kuponlu **temiz**, altın ve GMS **kirli fiyat**.
- Adımlar: fiyat **0,001 TL**, getiri **%0,01**, altın **0,00001 TL**.
- Tek fiyat **12:10-12:30**; döviz ödemeli araçlarda valör **en az 1 iş günü**.
`,
  sorular: [
    {
      s: "Saat 14:00'ten sonra yapılan **aynı gün valörlü yatırım fonu** işlemlerinde **Kesin Alım Satım Pazarında** fonun **alım** emri hangi fiyattan gerçekleştirilebilir?",
      c: ["14:00'e kadar oluşan ağırlıklı ortalama fiyat veya altında", "14:00'e kadar oluşan ağırlıklı ortalama fiyat veya üzerinde", "Yalnızca günün en yüksek fiyatından", "Yalnızca bir önceki günün kapanış fiyatından", "Fiyat sınırlaması olmaksızın serbestçe belirlenen fiyattan"],
      d: 0,
      a: "İşlemler **fon lehine** olmalıdır: Kesin Alım Satım Pazarında fonun **alım** emri ağırlıklı ortalama fiyat **veya altında**, **satım** emri ağırlıklı ortalama fiyat **veya üzerinde** gerçekleştirilebilir.",
      k: "1006 resmi not s. 104"
    },
    {
      s: "Borçlanma Araçları Piyasasında **Temerrüt Pazarı** ile ilgili hangisi doğrudur?",
      c: ["Piyasada temerrüt olmasa da her gün tüm enstrümanlar işleme açık tutulur", "Temerrüt enstrümanına Takasbank'ın emriyle aynı yönlü emir girilebilir", "Temerrüt işlemlerinde taraflardan birinin temerrüde düşen yatırım kuruluşu olması zorunludur", "Temerrüt işlemleri yalnızca TCMB tarafından yapılabilir", "Temerrüt işlemleri yatırım kuruluşu adına SPK tarafından yürütülür"],
      d: 2,
      a: "Temerrüt işlemlerinde taraflardan birinin, adına işlem yapılan **temerrüde düşen kuruluş** olması zorunludur; aksi hâlde işlem iptal edilir. Temerrüt yoksa pazarda enstrüman tanımlı değildir ve yalnız Takasbank emrinin **karşı yönlü** emri girilebilir.",
      k: "1006 resmi not s. 105"
    },
    {
      s: "Kesin Alım Satım Pazarında iletilen **özel işlem emri** ile ilgili hangisi doğrudur?",
      c: ["Tüm üyelerin piyasa izleme ekranında diğer emirler gibi görünür", "Fiyat belirtilmeden yalnızca nominal tutarla iletilir", "Yalnızca TCMB tarafından ve telefonla iletilebilir", "Karşı kuruluş seçilerek iletilir; yalnızca o kuruluş görür", "Yalnızca tek fiyat yöntemi uygulanan saatlerde iletilebilir"],
      d: 3,
      a: "Özel işlem emri, işlem yapılmak istenen **karşı yatırım kuruluşu seçilerek** nominal tutar, fiyat/getiri, valör ve araç tanımıyla iletilir; **yalnız seçilen karşı kuruluş** görür.",
      k: "1006 resmi not s. 106"
    },
    {
      s: "Kesin Alım Satım Pazarında **Hazinenin ihraç ettiği altın tahvilleri** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["En fazla 7 gün valörle işlem görür", "Emirler TL cinsinden 1 birim fiyat tabanı esas alınarak iletilir", "Emirler kirli fiyat üzerinden iletilir", "Fiyat adımı 0,00001 TL'dir", "Emirler 100 birim nominal üzerinden basit getiriyle iletilir"],
      d: 4,
      a: "Altın tahvilleri ve altına dayalı kira sertifikalarında emirler **TL cinsinden 1 birim** fiyat tabanıyla ve **kirli fiyat** üzerinden iletilir; valör en fazla **7 gün**, fiyat adımı **0,00001 TL**'dir. Basit getiriyle emir **iskontolu** ihraçlarda iletilir.",
      k: "1006 resmi not s. 106-107"
    },
    {
      s: "Kesin Alım Satım Pazarında **iskontolu olarak ihraç edilen** bir hazine bonosu için emirler hangi yöntemle iletilir?",
      c: ["Temiz fiyat üzerinden", "Kirli fiyat üzerinden", "Basit getiri üzerinden", "Takas fiyatı üzerinden", "Bileşik getiri üzerinden"],
      d: 2,
      a: "**İskontolu** ihraç edilen araçlar ve kuponlu tahvillerin ayrıştırılmış anaparaları **basit getiri** üzerinden işlem görür. Sabit faizli tahviller **temiz**, altın tahvili ve GMS gibi araçlar **kirli fiyat** üzerinden işlem görür.",
      k: "1006 resmi not s. 106"
    },
    {
      s: "Kesin Alım Satım Pazarında enflasyona endeksli devlet tahvilleri dışındaki menkul kıymetler için **takas fiyatı** neye eşittir?",
      c: ["Temiz fiyata", "Ağırlıklı ortalama fiyata", "Nominal değere", "İhraç değerine", "Kirli fiyata"],
      d: 4,
      a: "Takas fiyatı, enflasyona endeksli devlet tahvillerinde **enflasyon katkısı** dikkate alınarak hesaplanır; diğer menkul kıymetlerde **kirli fiyata eşittir**.",
      k: "1006 resmi not s. 106"
    },
    {
      s: "Kesin Alım Satım Pazarında 87,956 fiyatla pasif bekleyen bir alım emri varken **87,950** fiyatlı bir satım emri gelirse işlem hangi fiyattan gerçekleşir?",
      c: ["87,950", "87,953", "87,956", "87,958", "İşlem gerçekleşmez"],
      d: 2,
      a: "Fiyat eşitliği yoksa **sistemde önce var olan emrin fiyatı** işlem fiyatıdır. Bu yüzden işlem pasif alım emrinin fiyatı olan **87,956**'dan gerçekleşir.",
      k: "1006 resmi not s. 107-108"
    },
    {
      s: "Kesin Alım Satım Pazarında **tek fiyat yöntemi** ile ilgili hangisi doğrudur?",
      c: ["Tüm menkul kıymetlerde her gün 09:30–10:00 arasında açılış seansı olarak uygulanır", "Bu sürede piyasa emri girilebilir, dengeleyici emir girilemez", "Emir toplama 12:25–12:30, eşleştirme 12:10–12:25 arasındadır", "İlan edilen kıymetlerde 12:10–12:30 arasında uygulanır; bu sürede çok fiyatla işlem olmaz", "Karşılanmayan dengeleyici emirler gün sonuna kadar geçerli kalır"],
      d: 3,
      a: "Tek fiyat, Genel Müdürlüğün ilan ettiği kıymetlerde **12:10-12:30** arasında uygulanır: **12:10-12:25** emir toplama, **12:25-12:30** eşleştirme. Bu sürede çok fiyatla işlem yapılamaz; **limitli ve dengeleyici** emir girilebilir; karşılanmayan dengeleyici emirler eşleşme bitince iptal edilir.",
      k: "1006 resmi not s. 108-109"
    }
  ]
});
