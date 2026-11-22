SPL.gun("1006", 35, {
  okuma: `
## Bugünün haritası
TPP bölümünü bitiriyoruz. Bugün **teminatlar** (kabul edilenler, değerleme, yatırma-çekme), **işlem teminatı oranları** (başlangıç, zorunlu, asgari), **nemalandırma**, **netleştirme ve takas**, **Takasbank komisyonu**, **garanti fonu** ve **temerrüt** var.

1. Teminat türleri ve **değerleme**
2. Teminat **yatırma ve çekme**; teminat türlerine özgü kurallar
3. **İşlem teminatları**: başlangıç %105, zorunlu, asgari %104
4. **Teminat tamamlama çağrısı** ve teminatlardan doğan haklar
5. **Nemalandırma**
6. **Netleştirme, takas, mahsup** ve **Takasbank komisyonu**
7. **Garanti fonu** ve sermaye tahsisatı
8. **Temerrüt** ve **mağduriyet ödemesi**

---

## 1. Teminat türleri ve değerleme
| Grup | Teminat | Değerleme katsayısı | Grup üst limiti |
|---|---|---|---|
| 1 | **Altın** | 0,88 | %25 |
| 2 | **Borsa İstanbul payları** | 1,00 | %100 |
| 3 | DİBS (TL, USD, EUR) | 0,94 / 0,81 / 0,78 (vadeye göre) | %100 |
| 4 | Eurotahvil (USD, EUR) | 0,89 – 0,66 (vadeye göre) | %100 |
| 5 | Kira sertifikası | 0,92 / 0,79 / 0,76 | %100 |
| 6 | **Pay** (BIST 30 / BIST 100) | 0,84 / 0,83 | %90 (kıymet bazında %50) |
| 7 | Nakit **TL / USD / EUR** | **1,00** / 0,90 / 0,89 | %100 |
| 8 | **Banka bonosu / tahvili** | **0,73** | %50 |
| 9 | **Teminat mektubu** | **1,00** | %50 |
| 10 | Varlığa dayalı menkul kıymet | 0,92 / 0,79 / 0,76 | %40 |
| 11 | Yatırım fonu (hisse / borçlanma / para piyasası şemsiye) | 0,88 / 0,93 / 0,97 | %20 |

- Takasbank teminatları **her gün sonunda** değerler ve her sabah **"Gün Başı Bilgileri"** raporuyla bildirir.
- **Paylar:** son seans **AOF**; işlem yoksa en iyi alış-satış ortalaması. **DİBS:** Takasbank **verim eğrisi**; yoksa TCMB gösterge. **Döviz:** ertesi gün için **TCMB alış kuru**. **Fonlar:** o gün ilan edilen fiyat. **Altın:** KMKTP son seans T+0 USD/ons fiyatı × TCMB alış kuru.
- **Döviz ödemeli DİBS** ve **vadeli teminat mektupları**, vadelerine **5 iş günü** kala değerlemeye alınmaz ve değiştirilmesi istenir.

---

## 2. Teminat yatırma ve çekme
- Üyeler **portföy** hesaplarından teminat verebilir; **müşteri hesaplarından veremez**. Aracı kurum ve banka dışındaki üyeler MKK'daki kendi yatırımcı hesaplarından verebilir.
- Giriş-çıkışlar üye ekranlarından **çift aşamalı** yapılır, **nihai onay Takasbank**'ındır. Yapılamazsa faks veya e-postayla **yazılı talimat**; asılları **en geç 5 iş günü** içinde teslim.
- **Son saat:** tam gün **17:00**, yarım gün **12:30**.

| Teminat | Özel kurallar |
|---|---|
| **Nakit** | TL, USD veya EUR |
| **Teminat mektubu** | Düzenleyen bankanın Takasbank'ta **limit boşluğu** teyit edilir; **yalnız e-teminat mektubu**; **kesin ve süresiz** ya da **kesin ve en az 1 yıl** vadeli; aynı grup/holding bankalarının mektupları **kabul edilmez**; **KKB**'nin **Elektronik Teminat Mektubu Platformu (ETMP)** üzerinden kontrol |
| **Paylar** | **BIST 100** payları; Takasbank'ın pay bazındaki **kotasını** aşamaz; adet ve katları; üyenin **iştiraki veya ortağı** olduğu şirket payları **kabul edilmez** |
| **DİBS, kira sertifikası** | **TL** kira sertifikaları kabul edilir; virman **501-Serbest Depo** hesaplarından |
| **Eurotahvil** | Yalnız **Hazine** ihraçları |
| **Banka bono ve tahvili** | **TL** cinsi, Takasbank limitleri içinde; ihraççı bazında üst sınır; üyenin **grup bankalarınınki kabul edilmez**; talimattan **bir iş günü sonra** teminata alınır |
| **Altın** | KMKTP'deki **standart** altın; bir KMKTP üyesi aracılığıyla **virmanla** |
| **Yatırım fonu** | Yalnız **hisse, borçlanma araçları ve para piyasası şemsiye** fonları; üyenin grubunun kurucusu veya yöneticisi olduğu fonlar **kabul edilmez** |
| **Borsa İstanbul payları** | Takasbank onayına ek olarak **Borsa İstanbul'un onayı** |

> [!dikkat] Pay Piyasası ÖPP'nin aksine TPP'de **teminat mektubu** teminat olarak **kabul edilir** (ama garanti fonu katkı payı olarak kabul edilmez). **Müşteri çeki** teminat değildir.

---

## 3. İşlem teminatları
**Kullanılabilir teminat** = piyasa değeri × değerleme katsayısı (değerlenmiş teminat), sonra grup ve kıymet bazında üst limitler uygulanır.

| Teminat | Hesaplama | Oran |
|---|---|---|
| **Başlangıç teminatı** | Alış emrinin **anapara + faizi** × başlangıç oranı | **%105** |
| **Zorunlu teminat** | Anapara + faiz × zorunlu oran; **teminat mektubu dışındaki** türlerden oluşmalı | **%2, %4 veya %6** (üyenin 3 aylık açık alış ortalamasının **özkaynağına** oranına göre dilim) |
| **Asgari teminat** | Kullanılabilir teminat / toplam borç alınmış tutar; **asgari sürdürme seviyesi** | **%104** |

- Başlangıç teminatı, temerrüt anından çözümüne kadar **faiz değişimlerini** karşılamak için alınır. Parametreler **genel mektupla** duyurulur.

> [!ezber] **TPP'de satış işlemlerinde teminat şartı aranmaz.** Teminat yalnız **para alan (alış)** taraftan istenir.

---

## 4. Teminat tamamlama çağrısı ve haklar
- Kullanılabilir teminat **asgari teminatın** ve/veya **zorunlu teminat** seviyesinin altına düşerse çağrı yapılır; teminatın **başlangıç seviyelerine** tamamlanması istenir.
- Çağrı üye ekranlarına mesaj, rapor ve/veya **e-posta** ile yapılır; sistemle gönderilince üyenin aldığı **kabul edilir**. Üye "Gün Başı Bilgileri Raporu"nu izlemekle yükümlüdür.
- Çağrıdaki üye, limit ve teminatının izin verdiği kadar **işlem yapabilir**; ek teminat **çağrının yapıldığı gün sonuna kadar** yatırılır.
- Üye **ek teminat yatırarak** ve/veya **alış işlemlerini azaltarak** çağrıdan çıkabilir. Takasbank **ek süre** verebilir.

### Teminatlardan doğan haklar
| Teminat | Hak |
|---|---|
| Pay / Borsa İstanbul payı | Sermaye artırımı ve temettüyü Takasbank **üye adına** kullanır; nakit teminat hesabına |
| TL DİBS, banka bono/tahvili, kira sertifikası | İtfa teminat hesabında; kuponlar **teminat hesabına** |
| Döviz ödemeli DİBS | Vadesine **5 iş günü** kala değerlemeden çıkar; kuponlar üyenin **YP serbest hesabına** |
| Eurotahvil | Vadesine 5 iş günü kala değerlemeden çıkar; kuponlar teminat hesabına |

---

## 5. Nemalandırma
- Nakit TL teminatlar ve garanti fonu katkı payları, varsa **zorunlu karşılık** düşüldükten sonra, en iyi koşullarla nemalandırılır: bankalara **depo/mevduat**, **repo** veya organize para piyasalarına plasman.
- **Olağan dışı** koşullarda nemalandırma yapılmayabilir; yapılamazsa **nema ödenmez**.
- Nemalandırma **15:40**'taki TL nakit bakiyesi üzerinden yapılır; bu saatten sonra yatırılanlar nemalandırılmaz. **Yarım günde 11:40**.
- Nemaya alınan tutarların **çıkışına izin verilmez**; muafiyet nemalandırma saatine kadar belirlenebilir.

> [!bilgi] Saatleri karıştırma: ÖPP'de nemalandırma **15:45**, TPP'de **15:40**.

---

## 6. Netleştirme, takas, mahsup ve komisyon
| Aşama | Kural |
|---|---|
| **Netleştirme** | **15:45** (yarım gün 11:45); valör ve vade bazında alacak-borçlar netleşir, **"Takas Raporu"** oluşur. Önceki günden devreden **temerrüt** alacak/borçları dâhil edilir; temerrüt dışında günler arası netleştirme yapılmaz |
| **Takas** | Nette **borçlu** üyeler en geç **16:00**'ya kadar **TPP Takas (TPPTK)** hesaplarıyla öder; nette **alacaklıların** tutarı **16:00**'da serbest hesaplara geçer |
| **Kısmi ödeme** | Alacak dağıtımı **oransal** yapılır |
| **Mahsup** | TPP'den net alacaklar, **Borsa İstanbul BAP ve Pay Piyasası** borçlarına; bu piyasalardaki aktarılmamış alacaklar da TPP borçlarına mahsup edilebilir |

### Takasbank komisyonu
- Vadesi **bir haftaya kadar (7 gün dâhil)** işlemlerde anaparanın **%0,003 (yüz binde 3)**.
- Diğer vadelerde anaparanın **%0,00035 × gün sayısı (milyonda 3,5 × gün)**.
- Komisyon ve BSMV **alıcı ve satıcıdan**, **işlem gününde** alınır.

---

## 7. Garanti fonu ve sermaye tahsisatı
- Temerrütte teminatlar yetmezse kullanılmak üzere üyelerin **katkı paylarıyla** oluşur; katılım **zorunludur**; Takasbank temsil ve idare eder.
- Temerrüde düşen üyenin teminatları, katkı payı ve **Takasbank'ın sermaye tahsisi** yetersiz kalmadıkça **diğer üyelerin** katkılarına başvurulmaz.
- Katkı payları üyelerin **kendi mülkiyetindeki** varlıklardan; tamamlanmazsa üye **işlem yapamaz**.

| Konu | Kural |
|---|---|
| **Fon büyüklüğü** | En fazla **alış borcu** olan üye ile 2. ve 3. en fazla borçlu üyenin **stres** altında birlikte temerrüdündeki kaynak ihtiyacının **büyük olanından** az olamaz |
| Yeterlilik testi | En geç **3 ayda bir** yenilenir; geçmiş **3 ayın** günlük alış verileri kullanılır |
| Katkı payı yapısı | **Sabit + değişken** (dilimli) |
| **Sabit katkı payı** | **100.000 TL**; yılda en az bir kez gözden geçirilir |
| Yükümlülük hesabı | Her ayın **son iş günü**; izleyen ayın **ilk iş günü** güncellenir |
| **Teminat mektubu** | Garanti fonu katkı payı olarak **kabul edilmez** |

- Katkı payları **tek bir portföy hesabından**, **teminat amacıyla temlik** niteliğinde verilir; **her gün sonunda** değerlenir.
- **Tamamlama çağrısı** ertesi iş günü gün sonuna kadar yerine getirilmezse üye **temerrüde düşmüş** sayılır.
- **Sermaye tahsisatı:** MKT hizmeti verilen piyasalardaki toplam sermaye tahsisatı garanti fonu oranı kullanılır; **Nisan başından ertesi yıl Mart sonuna** kadar tahsisat tutarı Takasbank internet sitesinde duyurulur.

---

## 8. Temerrüt ve mağduriyet ödemesi
- TPP'ye borçlu üye **takas saati (16:00)** itibarıyla yükümlülüğünü yerine getirmezse **temerrüde düşer**.

### Temerrüt faizi
Taban: borsa kamu MK repo-ters repo, **TCMB BPP** veya **TPP**'deki gecelik ağırlıklı ortalama faizlerin **en yükseği**.
| Kapama | Oran | Üst sınır |
|---|---|---|
| **16:30**'a kadar (yarım gün 12:30) | En yüksek oranın **%50'si** | **Var** (yeniden değerleme oranıyla güncellenir) |
| **16:30**'dan sonra | En yüksek oranın **iki katı** | **Yok** |

- Temerrüde düşen üye temerrüt sürdükçe **nakit kredi kullanamaz**; nakit kredi işlemlerinden temerrüde düşen üye de TPP'de **işlem yapamaz**.

### Mağduriyet ödemesi
- Temerrüt nedeniyle takas günü **eksik ödeme** alan üyeye yapılır; **aynı gün gecikmeli** ödenenler için yapılmaz.
- **Talep aranmaz**; istemeyen üye yazılı bildirir.
- Tutar: temerrüde düşen üyeden tahsil edilen **temerrüt faizinin 2/3'ü** (günlük hesap); faiz tahsil edilmezse mağduriyet ödemesi de yapılmaz.
- Şartlar: temerrüde düşenin itirazı varsa geçersiz sayılıp faizin tahsiline karar verilmesi; temerrüdün **Borsa, Takasbank, MKK, TCMB** sistem sorunlarından kaynaklanmaması; alacaklının yükümlülüklerini **zamanında** yerine getirmiş olması.

---

## Bugünün özeti
- Teminat **müşteri hesabından verilemez**; giriş-çıkış son saati **17:00** (yarım gün 12:30).
- **E-teminat mektubu** kabul (kesin, süresiz veya ≥ 1 yıl; ETMP kontrolü); grup bankalarınınki kabul edilmez; **garanti fonunda kabul edilmez**.
- Başlangıç teminatı **%105**, zorunlu **%2/4/6**, asgari **%104**; **satışta teminat yok**.
- Nemalandırma **15:40**; netleştirme **15:45**; takas **16:00**.
- Komisyon: ≤ 7 gün **yüz binde 3**; diğer **milyonda 3,5 × gün**; iki taraftan.
- Mahsup: **BAP ve Pay Piyasası** ile.
- Garanti fonu: en büyük 3 borçlu stres testi; sabit katkı **100.000 TL**.
- Temerrüt **16:00**; faiz 16:30'a kadar **%50**, sonra **iki kat**; mağduriyet ödemesi faizin **2/3'ü**.
`,
  sorular: [
    {
      s: "TPP'de teminat olarak verilecek **teminat mektupları** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["Yalnızca elektronik belge (e-teminat mektubu) olarak düzenlenebilir", "Kesin ve süresiz veya kesin ve asgari 1 yıl vadeli olmalıdır", "Aynı gruba bağlı bankaların birbirlerine verdikleri mektuplar kabul edilmez", "Garanti fonu katkı payı olarak da kabul edilir", "KKB'nin Elektronik Teminat Mektubu Platformu üzerinden kontrol edilir"],
      d: 3,
      a: "Teminat mektubu TPP'de **işlem teminatı** olarak kabul edilir; ancak **garanti fonu katkı payı olarak kabul edilmez**. Zorunlu teminat da teminat mektubu dışındaki türlerden oluşmalıdır.",
      k: "1006 resmi not s. 223, 227"
    },
    {
      s: "TPP'de üyelerin **teminat yatırma** işlemleri ile ilgili hangisi doğrudur?",
      c: ["Portföy hesabından verilebilir, müşteri hesabından verilemez", "Üyeler müşteri hesaplarından da serbestçe teminat verebilir", "Teminat giriş-çıkış son saati tam günlerde 15:30'dur", "Teminat girişleri tek aşamalı yapılır ve Takasbank onayı aranmaz", "Üyenin iştiraki olduğu şirketlerin payları öncelikli olarak teminata alınır"],
      d: 0,
      a: "Üyeler **portföy** hesaplarından teminat verebilir, **müşteri hesaplarından veremez**. Giriş-çıkışlar **çift aşamalı** yapılır, nihai onay **Takasbank**'ındır; son saat tam günlerde **17:00**'dir. Üyenin iştiraki veya ortağı olduğu şirket payları kabul edilmez.",
      k: "1006 resmi not s. 223"
    },
    {
      s: "TPP'de **başlangıç teminatı** nasıl hesaplanır?",
      c: ["Alış emrinin anaparasının %100'ü", "Alış emrinin anapara ve faiz toplamının %104'ü", "Satış emrinin anaparasının %110'u", "Alış emrinin faiz tutarının iki katı", "Alış emrinin anapara ve faiz toplamının %105'i"],
      d: 4,
      a: "Başlangıç teminatı, alış emrinin **anapara + faiz** toplamının başlangıç oranıyla çarpımıdır; oran **%105**'tir. **%104** ise **asgari teminat** (sürdürme) oranıdır.",
      k: "1006 resmi not s. 224-225"
    },
    {
      s: "TPP'de **zorunlu teminat oranı** neye göre belirlenir?",
      c: ["3 aylık açık alış ortalamasının özkaynağa oranına göre %2, %4 veya %6", "Üyenin ödenmiş sermayesinin büyüklüğüne göre sabit %10 olarak", "Üyenin son bir yıldaki temerrüt sayısına göre %1 ile %3 arasında", "Piyasadaki gecelik faiz oranının yarısı kadar olacak şekilde", "SPK'nın her ay belirlediği tek bir oran olarak"],
      d: 0,
      a: "Zorunlu teminat oranı, üyenin **3 aylık açık alış işlem ortalamasının özkaynağına oranına** göre belirlenen dilim değeridir; uygulanan oranlar **%2, %4 ve %6**'dır. Zorunlu teminat **teminat mektubu dışındaki** türlerden oluşmalıdır.",
      k: "1006 resmi not s. 224"
    },
    {
      s: "TPP'de **teminat şartı** ile ilgili hangisi doğrudur?",
      c: ["Hem alış hem satış işlemlerinde teminat istenir", "Teminat yalnızca vadesi 6 ayı aşan işlemlerde istenir", "Yalnızca satış işlemlerinde teminat istenir", "Satış işlemlerinde teminat şartı aranmaz", "TCMB dışındaki üyelerden teminat istenmez"],
      d: 3,
      a: "TPP'de **satış işlemlerinde teminat şartı aranmaz**; teminat para alan (**alış**) taraftan istenir.",
      k: "1006 resmi not s. 225"
    },
    {
      s: "TPP'de **netleştirme ve takas** saatleri hangisinde doğru verilmiştir?",
      c: ["Netleştirme 15:30, takas 16:30", "Netleştirme 15:45, borçluların son ödeme saati 16:00", "Netleştirme 16:00, takas işlemleri ise 17:00", "Netleştirme 14:00, takas işlemleri ise 15:00", "Netleştirme 15:40, takas işlemleri 15:45"],
      d: 1,
      a: "Netleştirme **15:45**'te (yarım gün 11:45) yapılır; nette borçlu üyeler en geç **16:00**'ya kadar TPPTK hesaplarıyla öder; alacaklıların tutarı **16:00**'da serbest hesaplara geçer. **15:40** nemalandırma saatidir.",
      k: "1006 resmi not s. 225-226"
    },
    {
      s: "TPP'de vadesi **bir haftaya kadar** olan işlemlerde **Takasbank komisyonu** nasıl alınır?",
      c: ["Yalnızca alıcıdan, anaparanın binde 1'i", "Komisyon alınmaz", "Yalnızca satıcıdan, vade sonunda faizin %5'i", "Alıcı ve satıcıdan, milyonda 3,5 × gün sayısı oranında, vade sonunda", "Alıcı ve satıcıdan, anaparanın yüz binde 3'ü oranında, işlem gününde"],
      d: 4,
      a: "Vadesi **bir haftaya kadar (7 gün dâhil)** işlemlerde anaparanın **%0,003 (yüz binde 3)**'ü, diğer vadelerde **milyonda 3,5 × gün sayısı** oranında komisyon ve BSMV, **alıcı ve satıcıdan** **işlem gününde** alınır.",
      k: "1006 resmi not s. 226"
    },
    {
      s: "TPP'de temerrüde düşen bir üyenin borcu **saat 16:30'dan sonra** kapatılırsa temerrüt faizi nasıl uygulanır?",
      c: ["Gecelik ağırlıklı ortalama faizlerin en yükseğinin %50'si, üst sınırlı", "Sabit %10 oranında", "Gecelik ağırlıklı ortalama faizlerin en yükseğinin iki katı; üst sınır yok", "Temerrüt faizi uygulanmaz, yalnızca uyarı verilir", "TCMB politika faizi kadar, üst sınırlı"],
      d: 2,
      a: "Borç **16:30'a kadar** kapatılırsa en yüksek gecelik oranın **%50'si** (üst sınırlı); **16:30'dan sonra** kapatılırsa **iki katı** uygulanır ve **üst sınır yoktur**. Mağdur üyeye tahsil edilen faizin **2/3'ü** mağduriyet ödemesi olarak verilir.",
      k: "1006 resmi not s. 229"
    }
  ]
});
