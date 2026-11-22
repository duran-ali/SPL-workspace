SPL.gun("1006", 33, {
  okuma: `
## Bugünün haritası
ÖPP bölümünü bitiriyoruz. Bugün **ödünç kapama**, **geri çağırma ve erken kapama**, **komisyonlar**, ödünce konu kıymetten doğan **haklar** (kâr payı, bedelsiz ve bedelli artırım), **muacceliyet**, **temerrüt** ve garanti fonunun kullanımı var.

1. **Ödünç kapama** ve **sözleşme temditi**
2. Vadesizlerde **geri çağırma** ve **erken kapama**
3. **İşlem komisyonu**
4. **Takasbank komisyonu**
5. Ödünce konu kıymetten doğan **haklar**
6. **Kâr payı**, **bedelsiz** ve **bedelli** sermaye artırımı
7. **Muacceliyet**
8. **Temerrüt** hükümleri, garanti fonunun kullanımı, olağanüstü durumlar

---

## 1. Ödünç kapama ve temdit
- Vadesi gelen ödünç borçlarının **son kapama saati 17:00**'dir.
- Borç kısmen veya tamamen Takasbank uygulamalarıyla kapatılır; hesapta kıymet bakiyesi varsa **Takasbank** da kapatabilir.
- Kapamadan sonra kıymetler ödünç verenin MKK'daki **Serbest Alt Hesabına** iade edilir.
- **Ödünç Kapama Blokaj Hesabında** bakiye varsa kapama serbest hesaptan yapılamaz; blokaj hesabından **otomatik** yapılır.
- **Sözleşme temditi:** Ödünç alan ve verenin **ikisi de kabul ederse** vadesi gelen sözleşme kapatılmadan **vadesi uzatılabilir**; **vade ve komisyon oranı** değiştirilebilir.

---

## 2. Geri çağırma ve erken kapama (vadesiz işlemler)
Bildirim üye veya Takasbank tarafından uygulamalarla yapılır; karşı üyeye **ÖPP Mail Sistemi**yle e-posta gider.

| Hak | Kural |
|---|---|
| **Ödünç verenin geri çağırması** | İşlemin valörü ile azami vadeden (1 yıl) **3 iş günü öncesine** kadar herhangi bir gün. Bildirim **12:00'ye kadar** yapılırsa ödünç alan **T+2**'de, **12:00'den sonra** yapılırsa **T+3**'te iade eder |
| **Ödünç alanın erken kapaması** | En erken **valörü izleyen 3. iş günü**. İade gününden **en az 2 iş günü önce** bildirim girilir |

---

## 3. İşlem komisyonu
- Vadesi **1 ay veya daha kısa** işlemlerde: **vade sonunda saat 17:00**'de ödünç alanın serbest hesabından alınır ve ödünç verene aktarılır.
- Vadesi **1 aydan uzun** veya **vadesiz** işlemlerde: **ay sonları** itibarıyla tahakkuk ettirilir ve 17:00'de tahsil edilir.
- Komisyon her gün kıymetin **piyasa değeri** üzerinden hesaplanır ve önceki günün tutarına eklenir.

**Formül:** İşlem komisyonu = Σ (günlük piyasa değeri × komisyon oranı) / **36.500**

- İleri valörlü işlemlerde gün sayısı **valör ile vade** arasıdır.
- İleri valörlü işlem takas olmadan **iptal** edilirse:
  - iptal **ödünç alandan** kaynaklanıyorsa, işlem günü ile valör arasındaki komisyonu ödünç alan öder (Takasbank ödünç verene aktarır),
  - iptal **ödünç verenden** kaynaklanıyorsa ödünç alandan komisyon **alınmaz**.

---

## 4. Takasbank komisyonu
- **Takasbank Yönetim Kurulu kararı** ve **SPK onayıyla** yürürlüğe girer.
- Emrin gerçekleşen kısmının piyasa değeri üzerinden **hem ödünç alandan hem ödünç verenden** alınır; **komisyon + BSMV** işlem günü **17:00**'de tahsil edilir.
- İleri valörlü işlemlerde işlem günü, vade türüne karşılık gelen oranla tahsil edilir.
- Ödenmezse üyenin **işlem yetkisi** komisyon ödenene kadar **kaldırılır**.
- **Vadesiz işlemlerde:** valörü izleyen ayın son iş günü **1 aylık** Takasbank komisyonu + BSMV tahakkuk eder; vadede kalan komisyon alınır. Gün sayısı iki vade türü arasındaysa **en yakın** vade türü baz alınır.

> [!ezber] **Özel emirlerle** oluşan sözleşmelerde Takasbank komisyonu, tarifenin **%50'si** oranında alınır.

---

## 5. Ödünce konu kıymetten doğan haklar
- **Mali haklar** (bedelli, bedelsiz sermaye artırımı ve kâr payı) **ödünç verene** aittir.
- Ödünç veren, ödünç paylara ilişkin **yönetsel haklarını (oy hakkı) kaybeder**.
- Valör ile vade arasında **sermaye azaltımı** olursa işlem adedi azaltım oranında **güncellenir**.
- Sermaye artırımında ihraççı **makbuz** verirse, ödünç alan artan borç adedinin vadesini makbuzun senede dönüşümünden **bir iş günü sonraya** kadar uzatabilir.
- Vade, bedelli artırım başlangıcıyla aynı günse ödünç alan, ödünç verenin artırımdan yararlanabilmesi için **bedelli artırım son saatine kadar işlemi kapatamaz**.
- Valör günü gelmemiş veya valör günü artırım olan kıymetlerde hakları **ödünç veren** kullanır.

---

## 6. Kâr payı, bedelsiz ve bedelli artırım
### Kâr payı
- Vadede kâr payı ödemesi varsa ödünç alan, **MKK**'nın ödünç verenin mükellefiyetine göre (net veya brüt) ilettiği tutarı, kâr dağıtım günü **17:00**'ye kadar Takasbank'a yatırır; Takasbank bunu aynı anda ödünç verene aktarır.
- Ödünç alan ödemezse Takasbank tutarı ödünç verene öder ve ödünç alana **temerrüt faizi** uygulanır.

> [!bilgi] **Kâr payı temerrüt faizi:** aynı gün borsadaki kamu menkul kıymeti repo-ters repo pazarları, TCMB Bankalararası Para Piyasası veya Takasbank Para Piyasasındaki gecelik ağırlıklı ortalama faizlerden **en yükseğinin %50 fazlası**.

### Bedelsiz sermaye artırımı
- Artırım günü ödünç alanın kıymet borcu, işlem adedi × bedelsiz oranı kadar **artırılır**; ödünç alan vadede artan adedi de getirir.

### Bedelli sermaye artırımı
- Başlangıç tarihinde işleme konu adet kadar **R (rüçhan) kodlu** işlem **otomatik** oluşturulur; ödünç verenin hakkı ödünç alan tarafından **rüçhan hakkı olarak iade** edilir.
- **R** kodlu işlemler, başlangıç tarihini izleyen **3. iş günü sonunda** iade edilmelidir.
- Ödünç veren, **katılacağını beyan** ederek hakkını **Takasbank üzerinden** de kullanabilir: son beyan tarihi **başlangıç tarihi**, beyan son saati **16:00**, artırım son saati **16:15**. Beyan edip 16:15'e kadar ödemezse R işlemleri **16:20**'de iptal olur, hak kaybedilir.
- **Beyan ve artırım kısmi yapılamaz.**
- Ödünç veren katılırsa Takasbank rüçhan bedelini ödünç alana aktarır; ödünç alanın pay borcu katılım oranında **artar**. Vade **artırım tarihi + 2 iş gününe** eşit veya uzunsa artan adet vadede getirilir; daha kısaysa artan payların vadesi **artırım tarihi + 2. iş günüdür**.
- Bedelli artırım başlangıcı ile kâr payı aynı günse **otomatik mahsup** yapılır (istemeyen üye bir gün önce bildirir).

---

## 7. Muacceliyet
- **Vadesiz** işlemler dışında, ödünç alanın vadeden önce kıymeti teslim ederek işlemi sona erdirme **hakkı yoktur**.

**Borçlar şu hâllerde muaccel olur:**
1) **Vadenin gelmesi**,
2) **Teminat tamamlama** veya **garanti fonu katkı payı** yükümlülüğünün yerine getirilmemesi,
3) Takasbank'ın üyenin yükümlülüklerinin **tasfiyesine** karar vermesi,
4) Kıymetin **kredili alım ve açığa satış listesinden** çıkarılması.

- Muaccel borç süresinde ödenmezse **ayrıca bildirim yapılmadan** temerrüt hükümleri uygulanır.
- Tasfiye kararı hâlinde yükümlülükler vadeyi geçmemek üzere **en geç 3 iş günü** içinde yerine getirilir.
- (2) ve (3) hâllerinde vadeden önce muacceliyette, ödünç verene **vade sonuna kadar** işleyecek komisyon ödenir; bunu ödünç alan karşılar.
- Son kapama saatinde kapanmayan muaccel borca **temerrüt faizi** işler.

---

## 8. Temerrüt hükümleri
### Takasbank'ın ödünç verene sorumluluğu
İşlem komisyonu, kıymeti vadede **teslim**; teslim edilemezse **piyasadan temin ederek iade**; o da olmazsa **nakit karşılığı** ve ödemeye kadar komisyon ile sınırlıdır (MKT Yönetmeliği md. 36 sınırları saklı). Bu komisyon oranı, ödünç alandan alınan **temerrüt faiz oranını geçemez**.

- Temerrütte teminatlar üzerinde tasarruf hakkı **Takasbank'a** aittir; yetmezse aşan tutar üyeden tahsil edilir.

### Süreç
- Esas, **menkul kıymetin iadesidir**. Kıymet vadeyi izleyen iş günü ödünç alandan, piyasadan veya temerrüt sırasından temin edilmeye çalışılır.
- Ödünç alana vadeyi izleyen iş günü **11:30**'a kadar süre verilebilir. Sona ermezse Takasbank Borsa İstanbul Pay Piyasasında **"Temerrüt Sırası"** açtırıp **T+0** işlem yapabilir (blokeli alacaklar, işlem teminatı ve garanti fonu katkı payı kullanılabilir).
- Temin edilen kıymet **en geç 2 iş günü** içinde ödünç verene iade edilir.
- Temin edilemezse, ödünç veren piyasa bedelini vade günü veya ertesi iş günü **16:00**'ya kadar **yazılı** isterse, vadeyi izleyen gün **16:30**'da **nakit** ödenir (vade günü sonu piyasa değeriyle).
- Nakit istenmezse Takasbank **3 iş günü** içinde temin etmeye çalışır; olmazsa bu sürede oluşan **en yüksek AOF** ile hesaplanan değer ödünç verene alacak kaydedilir.
- Nakit ödenince ödünç alanın borcu da **nakde dönüşür**; faiziyle öder.
- Temerrüt süresince üye, temerrüde neden olan hesaplar için **işlem yapamaz**; bu hesapların teminatları **bloke** edilir.

### Temerrüt faizi
| Kapama zamanı (temerrüt günü) | Temerrüt faizi |
|---|---|
| **17:00 – 17:30** arasında kapatılırsa | Aşağıdaki oranlardan **en yükseğinin %50'si**; **1 günlük** |
| **17:30'dan sonra** kapatılırsa | Repo-ters repo, TCMB BPP ve Takasbank PP gecelik oranlarının **iki katı**, sözleşme komisyonu ve ÖPP AOF komisyonundan **en yüksek olanı**; temerrüt süresince |

(Karşılaştırılan oranlar: borsa kamu MK repo-ters repo gecelik, TCMB BPP gecelik, Takasbank PP gecelik ağırlıklı ortalamaları; sözleşmenin komisyon oranı; o kıymetin ÖPP'deki ağırlıklı ortalama komisyon oranı.)

### Garanti fonunun kullanımı
- MKT Yönetmeliği md. 36/1-(d)'ye kadar kaynaklar ve **nakit** katkı payları yetmezse, temerrüde düşmeyen üyelerin **nakit dışı** katkı payları nakde çevrilmeye başlanır.
- Temerrütten **sonra** katılan üyelerin veya sonradan alınan riskler için yatırılan katkı payları **kullanılmaz**.
- Zarar kapatılana kadar fondan **katkı payı çekilemez**.
- Başvuruda **en likit** varlıktan başlanır; zarar temerrüde düşmeyen üyelere fondaki **payları oranında** dağıtılır.

### İşlem komisyonu temerrüdü
- Tahakkuk günü **17:00**'ye kadar ödenmezse Takasbank alacaklıya öder, **temerrüt faizi** işler; üye kendisi ve müşterileri için **işlem yapamaz**; ileri valörlü işlemlerin takası gerçekleşmez.
- **15:30**'a kadar kapanmazsa Takasbank kıymeti ödünç verene **vadeden önce iade** edebilir.

### Olağanüstü durumlar
Takasbank, işlem saatlerini değiştirmek, emir iletimini durdurmak, **işlemleri iptal etmek**, **vadeleri değiştirmek** gibi her türlü tedbiri alabilir.

---

## Bugünün özeti
- Son kapama **17:00**; temdit iki tarafın kabulüyle, vade ve komisyon değişebilir.
- Geri çağırma: **12:00** öncesi **T+2**, sonrası **T+3**. Erken kapama: en erken valör **+3. iş günü**, **2 iş günü** önce bildirim.
- İşlem komisyonu = Σ PD × oran / **36.500**; 1 aya kadar vade sonunda, uzunlarda **ay sonu**.
- Takasbank komisyonu **iki taraftan**, işlem günü 17:00; özel emirde **%50**.
- Mali haklar **ödünç verende**, oy hakkı **kaybedilir**. R kodlu işlemler **3. iş günü** sonunda iade; beyan **16:00**, artırım **16:15**, iptal **16:20**.
- Kâr payı temerrüt faizi: en yüksek gecelik oranın **%50 fazlası**.
- Muacceliyet: vade, teminat/GF yükümlülüğü, tasfiye kararı, **listeden çıkarılma**.
- Temerrüt: **11:30**'a kadar süre, **temerrüt sırası**, **2 iş günü** içinde iade; nakit **16:30**; faiz 17:30 öncesi **%50**, sonrası **iki kat**.
`,
  sorular: [
    {
      s: "ÖPP'de vadesiz bir işlemde **ödünç veren**, geri çağırma bildirimini saat **12:00'den sonra** yaparsa ödünç alan kıymeti ne zaman iade etmelidir?",
      c: ["Aynı gün (T+0)", "T+1", "T+2", "T+3", "T+5"],
      d: 3,
      a: "Geri çağırma bildirimi **12:00'ye kadar** yapılırsa ödünç alan **T+2**'de, **12:00'den sonra** yapılırsa **T+3**'te iade eder. Ödünç alanın erken kapaması ise en erken valörü izleyen **3. iş günü** olabilir.",
      k: "1006 resmi not s. 209"
    },
    {
      s: "ÖPP'de **sözleşme temditi** ile ilgili hangisi doğrudur?",
      c: ["İki tarafın kabulüyle yapılır; vade ve komisyon oranı değişebilir", "Yalnızca ödünç alanın tek taraflı talebiyle yapılabilir", "Temditte vade uzatılabilir ama komisyon oranı değiştirilemez", "Temdit yalnızca Takasbank Yönetim Kurulu kararıyla yapılır", "Temdit yalnızca vadesiz işlemlerde ve bir kez mümkündür"],
      d: 0,
      a: "Ödünç alan ve ödünç verenin **her ikisinin kabulüyle** vadesi gelen sözleşme kapatılmadan **temdit** (vade uzatımı) yapılabilir; **hem vade hem komisyon oranı** değiştirilebilir.",
      k: "1006 resmi not s. 209"
    },
    {
      s: "ÖPP'de **Takasbank komisyonu** ile ilgili hangisi **yanlıştır**?",
      c: ["Takasbank Yönetim Kurulu kararı ve SPK onayıyla yürürlüğe girer", "Hem ödünç alandan hem ödünç verenden tahsil edilir", "Komisyon ve BSMV işlem günü saat 17:00'de tahsil edilir", "Özel emirlerle oluşan sözleşmelerde tarifenin iki katı oranında tahsil edilir", "Ödenmezse üyenin işlem yetkisi komisyon ödenene kadar kaldırılır"],
      d: 3,
      a: "Özel emirlerle oluşan sözleşmelerde Takasbank komisyonu, vade türüne karşılık gelen tarifenin **%50'si** oranında alınır; iki katı değil.",
      k: "1006 resmi not s. 210"
    },
    {
      s: "ÖPP'de ödünce konu paylarla ilgili **haklar** konusunda hangisi doğrudur?",
      c: ["Mali haklar ve oy hakkı ödünç alana geçer", "Kâr payı ödünç alanda kalır, bedelsiz paylar ödünç verene geçer", "Mali haklar Takasbank'a aittir", "Mali haklar ödünç alana, oy hakkı ödünç verene aittir", "Mali haklar ödünç verene aittir; ancak ödünç veren oy hakkını kaybeder"],
      d: 4,
      a: "Bedelli, bedelsiz sermaye artırımı ve kâr payı gibi **mali haklar ödünç verene** aittir; ancak ödünç veren ödünç paylara ilişkin **yönetsel haklarını (oy hakkı) kaybeder**.",
      k: "1006 resmi not s. 210"
    },
    {
      s: "Ödünce konu payda vade içinde **bedelli sermaye artırımı** olması hâlinde oluşturulan **R kodlu** işlemler ödünç alan tarafından ne zaman iade edilmelidir?",
      c: ["Bedelli artırım başlangıç tarihini izleyen 3. iş günü sonunda", "Bedelli artırım başlangıç tarihini izleyen 1. iş günü sonunda", "Bedelli artırım başlangıç günü saat 12:00'ye kadar", "İşlemin vade sonunda", "Bedelli artırımın tamamlanmasından bir ay sonra"],
      d: 0,
      a: "Bedelli artırım başlangıç tarihinde işlem adedi kadar **R kodlu** işlem otomatik oluşur; bunlar başlangıç tarihini izleyen **üçüncü iş günü sonunda** iade edilmelidir. Ödünç veren Takasbank üzerinden katılmak isterse beyan son saati **16:00**, artırım son saati **16:15**'tir.",
      k: "1006 resmi not s. 211"
    },
    {
      s: "Aşağıdakilerden hangisi ÖPP'de ödünç işlemlerinden doğan borçların **muaccel** hâle gelme sebeplerinden **değildir**?",
      c: ["Vadenin gelmesi", "Üyenin teminat tamamlama yükümlülüğünü yerine getirmemesi", "Ödünce konu kıymetin kredili alım ve açığa satış listesinden çıkarılması", "Ödünce konu payın fiyatının günlük %5 artması", "Takasbank'ın üyenin yükümlülüklerinin tasfiyesine karar vermesi"],
      d: 3,
      a: "Muacceliyet sebepleri: **vadenin gelmesi**, **teminat tamamlama veya garanti fonu** yükümlülüğünün yerine getirilmemesi, Takasbank'ın **tasfiye kararı** ve kıymetin **kredili alım ve açığa satış listesinden çıkarılması**. Fiyat artışı bir muacceliyet sebebi değildir.",
      k: "1006 resmi not s. 211-212"
    },
    {
      s: "ÖPP'de kıymet temerrüdünde, temerrüde düşülen gün ödünç borcu **saat 17:30'a kadar** kapatılırsa temerrüt faizi nasıl hesaplanır?",
      c: ["Belirlenen faiz ve komisyon oranlarından en yükseğinin %50'si, 1 günlük", "Belirlenen faiz ve komisyon oranlarından en yükseğinin iki katı, temerrüt süresince", "Sözleşmenin komisyon oranının üç katı, 1 günlük", "Temerrüt faizi uygulanmaz, yalnızca uyarı yapılır", "TCMB politika faizinin iki katı, 1 haftalık"],
      d: 0,
      a: "Borç **17:00-17:30** arasında kapatılırsa faiz, karşılaştırılan oranlardan **en yükseğinin %50'si** olarak **1 günlük** hesaplanır. **17:30'dan sonra** kapatılırsa gecelik oranların **iki katı** dâhil en yüksek oran, temerrüt süresince uygulanır.",
      k: "1006 resmi not s. 213"
    },
    {
      s: "ÖPP'de temerrüt hâlinde kıymet temin edilemezse ve ödünç veren piyasa bedelini süresinde **yazılı olarak talep ederse**, ödeme ne zaman yapılır?",
      c: ["Vade günü saat 12:00'de", "Vade tarihinden bir ay sonra", "Vade tarihinden 10 iş günü sonra", "Ödünç alan ödeme yapana kadar hiçbir ödeme yapılmaz", "Vade tarihini izleyen gün saat 16:30'da"],
      d: 4,
      a: "Ödünç veren piyasa bedelini vade günü veya ertesi iş günü **16:00**'ya kadar yazılı isterse, vadeyi izleyen gün **16:30**'da teslim edilemeyen miktarın bedeli ödenir. Nakit istenmezse Takasbank **3 iş günü** içinde kıymeti temin etmeye çalışır.",
      k: "1006 resmi not s. 212-213"
    }
  ]
});
