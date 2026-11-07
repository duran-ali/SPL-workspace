SPL.gun("1012", 5, {
  okuma: `
## Bugünün haritası
Merkezi takas düzenlemelerine devam ediyoruz. Bugün **teminatlar**, **garanti fonu** ve **temerrüt** var.
1. **İşlem öncesi depo şartı**, takas süresi, **mahsup** ve **transfer**
2. **Üyelik teminatı** ve **işlem teminatı**
3. Teminatların **değerlenmesi, kullanımı, ayrıştırılması ve taşınması**
4. **Garanti fonu** ve katkı payları
5. **Temerrüt**, **temerrüt faizi** ve **mağduriyet ödemesi**

---

## 1. Depo şartı, süre, mahsup, transfer

### İşlem öncesi (önceden) depo şartı
- **SPK ve Borsa**, **bilgi suistimali ve piyasa dolandırıcılığını** önlemek için yatırımcı ya da araç bazında bu şartı getirebilir.
- Alım emrinde **nakit**, satım emrinde **sermaye piyasası aracı**, emir anında yatırım kuruluşundaki hesapta bulunmalı ya da peşin yatırılmalıdır. Takas tamamlanana kadar orada tutulur.
- Takasbank'ta müşteri bazında nakit hesap tutulmadığı için kontrolü **emrin verildiği yatırım kuruluşu** yapar. Kontrol yapılmamasından doğan yükümlülüklerden **Takasbank sorumlu tutulamaz**.

### Takas süresi ve para birimi
- Takas süresi, borsa ya da piyasa işleticisinin **görüşü alınarak** piyasa bazında belirlenir. Sistem sorunlarında Takasbank **geçici olarak** değiştirebilir.
- Nakit yükümlülükler kural olarak **işlemin para birimiyle** ödenir. Takasbank farklı para birimine izin verebilir.

### Mahsup
- Bir piyasadaki **nakit alacak**, aynı üyenin **başka bir piyasadaki nakit borcuna** mahsup edilebilir.
- Üye, belirlenen usul ve sürede **mahsup talimatı** verir. Alacak aynı gün alınamazsa üye borcunu **aynı gün kendisi ödemek** zorundadır.

### Transfer (virman)
| Tür | Anlamı |
|---|---|
| **Serbest virman** | Varlığın **hiçbir şarta bağlı olmadan** başka hesaba devri |
| **Şartlı virman** | Transferin, **başka bir varlığın hesaba gelmesi şartına** bağlanması |

- Hesaplar arası transfer **eşanlı** yapılır.
- Takasbank dışına yapılan transferlerde karşı kurumun **Takasbank üyesi olması aranmaz**.

---

## 2. Teminatlar

### Üyelik teminatı
- **Amaç:** üyenin **aidat, ücret, komisyon** gibi Takasbank'a olan borçlarını ödememesi halinde zararı karşılamak.
- **Maktu** tutardadır ve **nakit** yatırılır. Tutarı, hizmet alınan piyasalara göre Takasbank belirler.
- Takasbank'ın malvarlığından **ayrı** izlenir.

### İşlem teminatı
- **Amaç:** **takas yükümlülüklerinin** yerine getirilmesi.
- Tutar piyasa, üye ya da araç bazında; **maktu, oransal** ya da **portföy bazlı** belirlenebilir.
- Üyeler, müşterilerinden **en az** Takasbank'ın belirlediği oran veya tutarda teminat ister.
- Üyelerin ve Takasbank'ın malvarlığından **ayrı** izlenir.
- MKT'de teminat **başlangıç + değişim** teminatından oluşur. **Tekil pozisyon hesabındaki** müşteri teminatları **yalnızca o müşterinin** yükümlülükleri için kullanılabilir.

### Hesaplama parametreleri (asgari)

| Parametre | Asgari değer |
|---|---|
| Güven aralığı | **%99, tek taraflı** |
| Nakde dönüştürme süresi | **2 iş günü** |
| Volatilite için tarihsel veri | **12 ay** |

### Teminat tamamlama çağrısı
- İşlem teminatı belirlenen tutarın **altına düşerse** yapılır.
- Çağrı **elektronik ortamda** yapılır. Gönderildiğinde üye, **başka bir ihbara gerek olmadan** çağrıyı almış sayılır.
- Süresinde karşılanmazsa üye **temerrüde düşmüş** kabul edilir.

---

## 3. Değerleme, kullanım, ayrıştırma, taşıma

### Değerleme
- Teminatlar, likidite ve piyasa riskine göre belirlenen bir **katsayıyla indirgenerek** kabul edilir.
- **Borsada işlem gören** varlık, son işlem günündeki **ağırlıklı ortalama fiyattan** değerlenir.
- Fiyat sağlıklı oluşmadıysa ya da varlık **5 iş gününden fazla** işlem görmediyse Takasbank **farklı esas** belirleyebilir.
- Borçlanma araçlarında **kupon ödemeleri** fiyatta dikkate alınır.
- **Konvertibl döviz**, TCMB'nin ilan ettiği **en son döviz alış kuru** ile değerlenir.

### Kullanım ve koruma
- İşlem teminatları üyelerin takas yükümlülükleri için kullanılır.
- **Amaç dışında kullanılamaz**, kamu alacakları için bile **haczedilemez**, **rehnedilemez**, idari tasfiye kararlarından **etkilenmez**, **iflas masasına girmez**, **ihtiyati tedbir** uygulanamaz.

### Nemalandırma
- **Nakit TL** teminatların **zorunlu karşılık** düşüldükten sonraki kısmı nemalandırılır. Brüt nemadan **vergi** ve **Takasbank komisyonu** düşülür.

### Teminat sözleşmeleri
- MKK'da kayden izlenen araçlara ilişkin teminat sözleşmeleri **yazılı** yapılır.
- Mülkiyet **Takasbank'a devredilebilir** ya da **teminat verende kalabilir**.
  - **Devredilirse** Takasbank, sözleşme **kurulduğu anda** mülkiyete sahip olur.
  - **Üyede kalırsa** aracın nasıl kullanılabileceği (satış dahil) sözleşmede yazılır.
- Teminat varlıklarından doğan haklar, aksi kararlaştırılmadıkça **teminat verene** aittir.

### Ayrıştırma
- MKT piyasalarında **müşteri** pozisyon ve teminatları, üyenin **kendi portföyünden ayrı** hesaplarda izlenir.
- Çoklu pozisyon hesabı kullanılan yerlerde, MKT üyesi **talep ederse** müşteri için **tekil pozisyon hesabı** açılır.
- Takasbank, **türev piyasaları hariç** diğer piyasalarda tekil hesap kullanımını **kısıtlayabilir**.
- Tekil hesaptaki müşteri teminatı, üyenin ya da **başka müşterilerin** teminat açıklarını kapatmak için **kullanılamaz**.
- **İşlemci kuruluşların** pozisyon ve teminatları, genel MKT üyesine bağlı **ayrı alt hesaplarda** izlenir.

### Taşınabilirlik
- Pozisyon ve teminatlar, Takasbank uygun görürse **devreden ve devralan üyelerin talimatıyla** taşınabilir. Devreden üye müşterinin **yazılı onayını** alır.
- Faaliyeti kısıtlanan ya da üyeliği sona eren üyenin **tekil** hesaplarındaki pozisyon ve teminatlar başka bir üyeye taşınır.
  - Taşınabilecek teminat, temerrüt sonrası **değişim teminatları yansıtıldıktan sonra kalanla** sınırlıdır.
- Devralacak üye yoksa Takasbank hesapları **re'sen** takip edebilir ya da **kapatabilir**.
- Müşteri **kendisi** devralacak bir üye bulursa onun hesaplarına taşınabilir.

---

## 4. Garanti fonu

### Kuruluş
- **Merkezi takasta:** Takasbank gecikmeleri önlemek ve temerrüde karşı garanti fonu **oluşturabilir**. **SPK zorunlu tutabilir.**
- **MKT uygulamasında:** temerrüt zararlarının **teminatları aşan kısmı** için garanti fonu kurulması **gerekir**.
- Her piyasa için **ayrı** ya da birkaç piyasa için **ortak** fon kurulabilir. Fonu **Takasbank** idare ve temsil eder.
- MKT üyelerinin katkı payları **kendi mülkiyetlerindeki** varlıklardan karşılanır.

### Büyüklük kuralı
Garanti fonu, şu iki tutardan **büyük olanından az olamaz**:
1. **En büyük** açık pozisyona sahip **tek** üyenin temerrüdünde doğacak kaynak ihtiyacı,
2. **İkinci ve üçüncü** büyük açık pozisyona sahip üyelerin **birlikte** temerrüdünde doğacak kaynak ihtiyacı.

### Katkı payları

| | **Merkezi takas (MTK)** | **Merkezi karşı taraf (MKT)** |
|---|---|---|
| Bileşenler | **Normal** katkı payı + gerekirse **ilave** katkı payı | **Yatırılmış** (**sabit + değişken**) + gerekirse **ilave** katkı payı |
| Eksilirse | **Tamamlama çağrısı** | **Tamamlama çağrısı** |
| İlave katkı payı sınırı | **Normal katkı payını aşamaz** | **Yatırılmış katkı payını aşamaz** |

- Normal katkı payı için Takasbank **asgari bir sınır** belirler. Katkı payları üyelerin **riskiyle orantılıdır**.
- Katkı payları da **haczedilemez, rehnedilemez**, iflas masasına girmez.
- **Kural:** üyenin kendi işlem teminatı ve garanti fonu katkı payı **yetersiz kalmadıkça** diğer üyelerin katkı paylarına **başvurulmaz**.
- **İade:** kendi isteğiyle ayrılan üyenin **tüm yükümlülüklerini yerine getirmiş** olması gerekir.
  - Takasbank, riskleri gözeterek iadeyi **geçici olarak reddedebilir**.
  - İade **aynen** ya da **mislen** yapılabilir; vergi ve yasal yükümlülükler mahsup edilir.

---

## 5. Temerrüt

### Merkezi takasta temerrüt
- Üye yükümlülüğünü usulünde ve zamanında yerine getirmezse **bildirime gerek olmadan** temerrüde düşmüş sayılır.
- **Borç kapama sırası:**
  1. Üyenin **blokeli takas alacağı**
  2. Üyenin **işlem teminatı**
  3. Garanti fonu varsa üyenin **garanti fonu katkı payı**
- Temerrüdü kapatmak için yapılan alım-satımlar üye aleyhine fiyattan gerçekleşirse **fark üyeden** alınır. Lehine gerçekleşirse kalan tutar **üyeye** ödenir.

### Temerrüt faizi
- Temerrüt tarihinden yükümlülüğün yerine getirildiği tarihe kadar, yerine getirilmeyen tutar üzerinden alınır.
- **Oran:** şu üç piyasadaki **gecelik ağırlıklı ortalama** faizlerin **en yükseği** × piyasaya özgü katsayı:
  - BİAŞ **repo–ters repo** pazarları,
  - **TCMB Bankalararası Para Piyasası**,
  - **Takasbank Para Piyasası**.
- Takasbank faiz için **alt ve üst sınır** koyabilir. Bu sınırlar Hazinenin **yeniden değerleme oranını geçemez**. **Aynı gün** kapatılan yükümlülüklerde **üst sınır uygulanmaz**.
- Yabancı para yükümlülüklerde TL karşılığı, TCMB'nin ilgili valördeki **döviz alış kuru** ile bulunur.
- Süresinde ödenmeyen faiz, **izleyen iş günü** üyenin serbest hesabından **re'sen** tahsil edilir.

### Mağduriyet ödemesi
- Temerrüt nedeniyle teslimat ya da ödeme alamayan üyeye, tahsil edilen temerrüt faizinin belirli bir oranı **mağduriyet ödemesi** olarak yapılır.
- **Talep aranmaz.** İstemeyen üye bunu **yazılı** bildirir.
- Alacaklı üyeye **aynı gün** ödeme yapılırsa mağduriyet ödemesi **yapılmaz**.

### İtiraz
- **Gerekçe:** temerrüdün takas, saklama ya da ödeme sistemi kaynaklı olup **üyenin kusuru olmaması**, ya da hesaplamada **maddi hata**.
- **Süre:** tahakkuktan itibaren **en geç bir hafta** içinde.
- **İtiraz ödemeyi durdurmaz.** Takasbank'taki **komite** karar verir. Olumlu karar çıkarsa faiz **iade** edilir.

### MKT piyasalarında
- Takasbank'ın mali sorumluluğu, her iki tarafın yerine geçip **işlemlere garanti vermesinden kaynaklanan tutar** kadardır.
- Esas yöntem **açık tekliftir**. Yönergede belirtilirse **sözleşme yenileme** ya da hukuken bağlayıcı başka bir yöntem kullanılabilir.

> [!ezber]
> **Teminat hesabı:** %99 tek taraflı güven · 2 iş günü nakde dönüşüm · 12 ay veri
> **Garanti fonu ≥ max(en büyük 1 üye, 2.+3. üye birlikte)** · İlave katkı payı ≤ normal (ya da yatırılmış) katkı payı
> **Temerrüt faizi:** 3 gecelik orandan en yükseği × katsayı · **İtiraz** 1 hafta, ödemeyi durdurmaz
`,
  sorular: [
    {
      s: "İşlem öncesi depo şartı uygulanmasında kontrol yükümlülüğü kime aittir?",
      c: ["Takasbank'a (merkezi takas kuruluşu)", "Merkezi Kayıt Kuruluşu'na", "Emrin verildiği yatırım kuruluşuna", "Borsa İstanbul'a (piyasa işleticisi)", "Sermaye Piyasası Kurulu'na"],
      d: 2,
      a: "Takasbank'ta müşteri bazında nakit hesap tutulmadığı için depo şartı kontrolünü **emrin verildiği yatırım kuruluşu** yapar. Kontrol yapılmamasından Takasbank **sorumlu tutulamaz**.",
      k: "1012 resmi not s. 36–37"
    },
    {
      s: "Üyenin hesabındaki bir varlığın transferini, başka bir varlığın hesabına gelmesi şartına bağlaması hangi işlemle ifade edilir?",
      c: ["Serbest virman", "Şartlı virman", "Mahsup", "Netleştirme", "Brüt takas"],
      d: 1,
      a: "**Şartlı virmanda** transfer, başka bir varlığın hesaba gelmesine bağlanır. **Serbest virmanda** ise hiçbir şart yoktur.",
      k: "1012 resmi not s. 37"
    },
    {
      s: "Takasbank'ın üyelerin aidat, ücret ve komisyon borçlarını ödememesi halinde zararını karşılamak için talep ettiği teminat hangisidir?",
      c: ["İşlem teminatı", "Başlangıç teminatı", "Üyelik teminatı", "Garanti fonu katkı payı", "Değişim teminatı"],
      d: 2,
      a: "**Üyelik teminatı**, aidat, ücret, komisyon gibi borçlar için **maktu** tutarda ve **nakit** olarak alınır. İşlem teminatı ise takas yükümlülükleri içindir.",
      k: "1012 resmi not s. 37–38"
    },
    {
      s: "Takasbank MTK Yönetmeliği'ne göre piyasalar bazında teminatlar hesaplanırken kullanılacak asgari değerlerle ilgili hangisi doğrudur?",
      c: ["%95 güven aralığı, 1 iş günü, 6 ay veri", "%99 tek taraflı güven aralığı, 2 iş günü nakde dönüştürme, 12 ay veri", "%99 çift taraflı güven aralığı, 5 iş günü, 24 ay veri", "%97,5 güven aralığı, 3 iş günü, 12 ay veri", "%90 güven aralığı, 2 iş günü, 36 ay veri"],
      d: 1,
      a: "Asgari değerler: **%99 tek taraflı** güven aralığı, **2 iş günü** nakde dönüştürme süresi ve volatilite için **12 aylık** tarihsel veri.",
      k: "1012 resmi not s. 38"
    },
    {
      s: "Takasbank'a verilen işlem teminatlarıyla ilgili hangisi **yanlıştır?**",
      c: ["Tevdi amaçları dışında kullanılamaz.", "Kamu alacakları için haczedilebilir.", "İflas masasına dahil edilemez.", "Rehnedilemez.", "Üzerlerine ihtiyati tedbir uygulanamaz."],
      d: 1,
      a: "İşlem teminatları **kamu alacakları için olsa dahi haczedilemez**; ayrıca rehnedilemez, iflas masasına girmez ve ihtiyati tedbir uygulanamaz.",
      k: "1012 resmi not s. 39"
    },
    {
      s: "MKT uygulamasında garanti fonunun büyüklüğü en az ne kadar olmalıdır?",
      c: ["Tüm üyelerin yatırdığı toplam başlangıç teminatı kadar", "En büyük üyenin ya da ikinci ve üçüncü büyüklerin birlikte temerrüdündeki ihtiyaçtan büyüğü", "Takasbank'ın ödenmiş sermayesinin %10'u kadar", "En küçük açık pozisyona sahip üyenin temerrüdü halinde ortaya çıkacak kaynak ihtiyacı kadar", "Piyasanın önceki yıl toplam işlem hacminin %1'i kadar"],
      d: 1,
      a: "Garanti fonu, **en büyük açık pozisyonlu üyenin** temerrüdündeki ihtiyaç ile **ikinci ve üçüncü büyük** üyelerin birlikte temerrüdündeki ihtiyaçtan **büyük olanından az olamaz**.",
      k: "1012 resmi not s. 41"
    },
    {
      s: "Merkezi takas uygulamasında Takasbank'ın bir üyeden talep edebileceği ilave garanti fonu katkı payı için hangisi doğrudur?",
      c: ["Sınırı yoktur.", "Normal katkı payını aşamaz.", "Normal katkı payının iki katını aşamaz.", "Üyenin özsermayesinin %10'unu aşamaz.", "SPK onayıyla istenebilir."],
      d: 1,
      a: "Garanti fonu yetersiz kalırsa ilave katkı payı istenebilir, ancak ilave katkı payı **normal katkı payını aşamaz**. MKT'de sınır, yatırılmış katkı payıdır.",
      k: "1012 resmi not s. 41"
    },
    {
      s: "Temerrüt faizine itirazla ilgili hangisi doğrudur?",
      c: ["İtiraz, sonuçlanıncaya kadar temerrüt faizinin ödenmesini durdurur.", "İtiraz süresi, tahakkuk tarihinden itibaren bir aydır.", "Tahakkuktan itibaren en geç bir hafta içinde yapılır; ödemeyi durdurmaz.", "İtirazları Sermaye Piyasası Kurulu inceleyip karara bağlar.", "İtiraz sözlü olarak, telefonla yapılır."],
      d: 2,
      a: "İtiraz, tahakkuk tarihinden itibaren **en geç bir hafta** içinde yazıyla yapılır; **ödemeyi durdurmaz**. Takasbank'taki komite karar verir; olumlu sonuçta faiz iade edilir.",
      k: "1012 resmi not s. 44"
    }
  ]
});
