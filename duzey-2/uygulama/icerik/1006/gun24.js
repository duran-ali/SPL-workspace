SPL.gun("1006", 24, {
  okuma: `
## Bugünün haritası
VİOP bölümünü bitiriyoruz. Bugün piyasa yapıcılık yetkisinin iptali, **özsermaye hâli uyarlamaları**, **olağanüstü durumlar**, borsanın yetkileri, **sözleşme kodları**, **esnek sözleşmeler** ve **akşam seansına dâhil sözleşmeler** var.

1. Piyasa yapıcılık yetkisinin **iptali**
2. **Özsermaye hâllerine ilişkin esaslar**
3. **Olağanüstü durumlar**: açılış, normal ve akşam seansı
4. Olağanüstü tedbirler ve günlük limitlerin değiştirilmesi
5. Bekleyen emirlerin **telefon veya e-postayla** iptali
6. Borsanın yetkileri, takas merkezi, borsa payı ve veri yayını
7. **Sözleşme kodları**
8. **Esnek sözleşmeler** ve **akşam seansındaki sözleşmeler**

---

## 1. Piyasa yapıcılık yetkisinin iptali
- **Genel müdür** tarafından resen veya piyasa yapıcının başvurusuyla, belirlenen sürede **geçici veya sürekli** iptal edilebilir.
- Ayrılma talebi borsaya **yazılı** bildirilir.
- **Geçici ayrılma** en fazla **1 yıl** için istenebilir; süre bitince piyasa yapıcı **ayrıca bildirime gerek olmadan** göreve döner (genel müdürün dönmeden önce resen iptal yetkisi saklı).
- **Sürekli ayrılanlar** başvururlarsa yeniden piyasa yapıcı olabilir; karar **genel müdürde**.

> [!dikkat] Piyasa yapıcılık yetkisinin iptali, piyasada **işlem yapma yetkisini etkilemez**.

---

## 2. Özsermaye hâllerine ilişkin esaslar
**Amaç:** Dayanak payın spot piyasadaki fiyat ve miktar değişiminin sözleşmeye **makul ve adil** yansıtılması ve açık pozisyonların özsermaye hâli **öncesi ve sonrası toplam değerinin denkliğinin** korunması.

- Sözleşmelerin **fiyatı**, **kullanım fiyatı**, **sözleşme büyüklüğü** ve **kodları** uyarlanır.
- **Açık pozisyon sayısında düzeltme yapılmaz**. Yuvarlamadan doğan küçük TL farkları için işlem yapılmaz.
- Uyarlama yapılınca mevcut **standart** sözleşmeler işleme **kapatılır**; aynı vadelerin **standart olmayan** sözleşmeleri açılır ve açık pozisyonlar bunlara **aktarılır**.
- Bu sözleşmelerde bekleyen **İKG ve tarihli emirler iptal** edilir.
- Dayanağın **teorik fiyatı** baz alınarak yeni **standart opsiyon** sözleşmeleri açılır.
- Daha önce uyarlanmış paya yeni bir özsermaye hâli gelirse, standart ve standart olmayan sözleşmelerin hepsi kapatılır, **yeni standart olmayan** sözleşmeler açılır.

### Yuvarlama
| Değer | Yuvarlama |
|---|---|
| Baz / kullanım fiyatı | Virgülden sonra **2 basamak**, en yakın fiyat adımına |
| Sözleşme büyüklüğü | En yakın **tam sayıya** |
| **Düzeltme katsayısı** | Virgülden sonra **7 basamak** |

- Spot piyasada payın fiyat limitleri **serbest bırakılırsa**, pay vadeli sözleşmelerin fiyat limitlerine **Özsermaye Halleri Komitesi** karar verir.

### Temettü
| Durum | Uyarlama |
|---|---|
| **Nakit temettü** | **Uyarlama yapılmaz** |
| **Pay olarak** temettü | **Bedelsiz sermaye artırımı** formülüyle uyarlama |
| Kısmen nakit, kısmen pay | **Yalnız pay kısmı** için uyarlama |

- **Esnek sözleşmeler** de uyarlamaya tabidir.
- Prosedürde öngörülmeyen yeni durumlarda uyarlamaları **Özsermaye Halleri Komitesi** belirler, borsa ilan eder.

---

## 3. Olağanüstü durumlar
**Tanım:** Piyasa, pazar, platform, sistem veya altyapıdan kaynaklanan ve işlemlerin **dürüst ve güvenilir** yapılmasını engelleyen veya engelleyebilecek gelişmeler ile beklenmedik olaylar.

### Açılış seansı
**Genel müdür**, şu hâllerde açılışı başlatmayabilir veya durdurabilir:
- sistemin **tamamını** etkileyecek teknik sorunlar (sistem, şebeke, veri yayını, veritabanı),
- **elektrik veya UPS** arızasıyla enerji kesintisi,
- deprem, radyasyon, yangın, sel, doğal afet, terör gibi olaylar.

### Normal seans
Yukarıdakilere ek olarak:
- Faal üyelerin (son 3 ayda işlem yapanlar) **1/4'ünden fazlasının** teknik nedenle sisteme girememesi ve/veya giremeyen üyelerin (**en az 5 üye**) son 3 aylık işlem hacminin toplamın **%50'sini** oluşturması,
- olağan dışı iklim nedeniyle İstanbul'da ulaşımın aksaması sonucu aynı ölçüde üyenin sisteme girememesi,
- **Takasbank** veya **PTRM** sorununun aynı ölçüde üyeyi etkilemesi ve kısa sürede giderilememesi.

| Kural | Normal seans | Akşam seansı |
|---|---|---|
| Geç başlatma sınırı | Bitişten **15 dakika** öncesine kadar başlatılabilir | Bitişten **1 saat** öncesine kadar başlatılabilir |
| Kesilip yeniden başlatılamazsa | **Veri kaybı yoksa** işlem ve emirler **geçerli** | Aynı |
| Kesilip yeniden başlarsa | Bitiş saatini **Genel Müdürlük** değiştirebilir | Aynı |

- Borsa merkezinde seans başlatılamazsa işlemler **Olağanüstü Durum Merkezinde (ODM)** yapılabilir; ODM'de tüm bağlantılar **uzaktan erişimle** sağlanır.
- **Akşam seansını** engelleyen ek bir hâl: **normal seansın uzatılması** veya normal seans gün sonu süreçlerinde **gecikme**.

---

## 4. Olağanüstü tedbirler ve günlük limitler
Genel müdür, durumun niteliğine göre şu tedbirlerden birini veya birkaçını alabilir:
- üyelerin **mali yükümlülük** şartlarını değiştirmek,
- işlemlerin **yalnız mevcut pozisyonları kapatmaya** yönelik yapılmasını istemek,
- sözleşmelerin **vade tarihini** değiştirmek,
- **uzlaşma yöntemi ve şartlarını** değiştirmek,
- **günlük fiyat değişim limitlerini** değiştirmek,
- **açık pozisyonların kapatılmasını** istemek ve uzlaşma fiyatını belirlemek,
- seans saatlerini değiştirmek, işlemleri durdurmak veya kısıtlamak.

İstenen işlemler süresinde yapılmazsa borsa veya **Takas Merkezi** bunları **resen** yerine getirir.

### Günlük fiyat değişim limitlerinin değiştirilmesi
- **Genel müdür** geçici olarak, seans ve/veya sözleşme bazında değiştirebilir; seans içinde, öncesinde veya sonrasında; piyasaya duyurulur.
- Piyasa koşulları gerektirirse sözleşme bazında **genel müdür yardımcısı** veya **piyasa müdürü** limitleri **iki katına kadar** yükseltebilir.

---

## 5. Bekleyen emirlerin telefon veya e-postayla iptali
Üye teknik nedenle sisteme giremezse, risk görülmezse **en iyi gayret** prensibiyle:
1. Talepler yalnız borsanın belirlediği **ses kaydına imkân veren telefonlardan** ve **üye e-posta adreslerinden** kabul edilir.
2. Piyasa personeli gerekli kontrollerden sonra emirleri **kendi kullanıcısıyla üye adına** iptal eder.
3. Emir numarası, sözleşme, hesap, yöntem, yön, fiyat ve miktar bildirilir (tüm emirlerin iptalinde ayrımı sağlayan bilgi yeterlidir).
4. İptal edilene kadar emirler **eşleşebilir**; üye bu işlemlerin iptalini (hatalı işlem kuralları saklı) **talep edemez**.
5. Telefon kayıtları ve borsa kayıtları **kesin delil** sayılır.

---

## 6. Borsanın yetkileri ve diğer hususlar
**Genel müdür**, piyasanın etkin ve güvenilir çalışması için **önceden bildirimde bulunmaksızın**:
a) tek fiyat dâhil **farklı işlem yöntemleri** belirleyebilir,
b) seansa **ara verebilir**,
c) **özel işlem bildirimi** kabul edip etmemeye karar verebilir,
ç) emir yöntem, tür ve sürelerine **kısıtlama** getirebilir,
d) bekleyen emirleri **iptal** edebilir,
e) üyenin **erişim protokollerini** kısıtlayabilir veya durdurabilir,
f) yayımlanacak verilerin kapsamını değiştirebilir,
g) günlük iş akışı saatlerini değiştirebilir.

| Konu | Kural |
|---|---|
| **Takas merkezi** | **Takasbank** |
| **Borsa payı** | İşlemin **her iki tarafından ayrı ayrı** alınır; vade sonundaki pozisyon kapatmalardan da alınır |
| Veri yayını | Emir, fiyat ve derinlik bilgileri veri yayın kuruluşlarıyla anlık veya gecikmeli |
| Bülten | Elektronik ortamda; içeriği **Genel Müdürlük** belirler |

- Sözleşmelerin hükümleri **VİOP Yönergesi md. 6** çerçevesinde ayrıca bildirime gerek olmadan işlem yapan **tüm tarafları bağlar**.

---

## 7. Sözleşme kodları
### Vadeli işlem sözleşmesi: **F_P_XAUTRYM0317** gibi
| Kod | Anlamı |
|---|---|
| **F_** | Sözleşme grubu: **vadeli işlem** |
| **P_** | Uzlaşma şekli: **fiziki teslimat** |
| XAUTRY | Dayanak varlık |
| **M** | **Mini** sözleşme |
| 0317 | Vade (Mart 2017) |

### Opsiyon sözleşmesi: **O_XU030E0417C1240.00** gibi
| Kod | Anlamı |
|---|---|
| **O_** | Sözleşme grubu: **opsiyon** |
| XU030 | Dayanak varlık |
| **E / A** | Opsiyon tipi: **E = Avrupa** (yalnız vade sonunda), **A = Amerikan** (vade sonu dâhil her an) |
| 0417 | Vade (Nisan 2017) |
| **C / P** | **C = alım (call)**, **P = satım (put)** |
| 1240.00 | Kullanım fiyatı |

- Özsermaye uyarlamasına uğrayan **standart olmayan** sözleşmelerin kodlarının sonuna **N1, N2, N3** eklenir.
- **Strateji emri kodu:** ör. **F_XU030M2-M1** (M1 en yakın vade, M2 sonraki vade).
- **Esnek opsiyon:** **TM_O_** ile başlar (ör. TM_O_XU030E250419C1235.00). **Esnek vadeli:** **TM_F_** ile başlar (ör. TM_F_USDTRY261020).

---

## 8. Esnek sözleşmeler ve akşam seansındaki sözleşmeler
### Esnek sözleşmeler
- Temsilciler, baş temsilciler ve yetkili FixAPI kullanıcıları **normal seans boyunca** mevcut bir sözleşme üzerinden esnek vadeli işlem veya opsiyon sözleşmesi oluşturabilir.
- **Vade tarihi** ve/veya **kullanım fiyatı**, sözleşme unsurlarındaki limitler içinde kullanıcılarca belirlenir. Esnek opsiyonun kullanım fiyatı, ondalık hanesine uymak kaydıyla **standart adımlar dışında** da belirlenebilir.
- İşleme açık sözleşmelerle **aynı kullanım fiyatı ve vadeye** sahip esnek opsiyon, aynı vadeli esnek vadeli işlem **oluşturulamaz**.
- Esnek fiyat ve vade sonradan standart hâle gelebilir; bu durumda esnek bilgisi kaldırılır ama **kod ve ISIN aynı kalır**.

### Akşam seansına dâhil sözleşmeler
**BIST 30 Endeks**, **BIST Likit Banka**, **BIST Banka Dışı Likit 10**, **BIST Sürdürülebilirlik 25** endeks vadeli; **dolar/ons altın**, **gümüş**, **platin**, **paladyum** ve **dolar/ton bakır** vadeli işlem sözleşmeleri.

> [!dikkat] **Pay vadeli** ve **pay opsiyon** sözleşmeleri akşam seansında **işlem görmez**; bunlar 09:20-18:10 arasında işlem görür. Kaynağın çalışma sorusuna göre **pay vadeli işlem sözleşmeleri fiziki teslimatlıdır**.

---

## Bugünün özeti
- Piyasa yapıcılıktan geçici ayrılma en çok **1 yıl**; iptal işlem yetkisini **etkilemez**.
- Özsermaye uyarlamasında **pozisyon sayısı değişmez**; standart sözleşmeler kapanır, **standart olmayan (N1, N2…)** açılır; İKG ve tarihli emirler iptal.
- **Nakit temettüde uyarlama yok**; pay temettüsünde bedelsiz formülü.
- Düzeltme katsayısı **7 basamak**; fiyatlar 2 basamak.
- Normal seans bitişten **15 dk** öncesine, akşam seansı **1 saat** öncesine kadar başlatılabilir; **1/4 üye** ve **%50 hacim** ölçütleri; **ODM**.
- Günlük limitleri genel müdür değiştirir; GMY veya piyasa müdürü **iki katına** kadar yükseltebilir.
- Takas merkezi **Takasbank**; borsa payı **her iki taraftan**.
- Kodlar: **F_** vadeli, **O_** opsiyon, **P_** fiziki, **M** mini, **E/A** Avrupa/Amerikan, **C/P** alım/satım, **TM_** esnek.
- Akşam seansı: **endeks** (BIST 30 vb.) ve **metal** vadelileri.
`,
  sorular: [
    {
      s: "VİOP'ta **piyasa yapıcılık yetkisinin iptali** ile ilgili hangisi doğrudur?",
      c: ["Geçici ayrılma en fazla 3 yıl için talep edilebilir", "Piyasa yapıcılık yetkisinin iptali, piyasada işlem yapma yetkisini de ortadan kaldırır", "Ayrılma talebi sözlü olarak bildirilebilir", "Sürekli ayrılan piyasa yapıcı bir daha hiçbir koşulda piyasa yapıcı olamaz", "Geçici süresi biten piyasa yapıcı, ayrıca bildirime gerek olmadan görevine devam eder"],
      d: 4,
      a: "Geçici ayrılma en fazla **1 yıl** istenebilir; süre bitince piyasa yapıcı **ayrıca bildirime gerek olmadan** göreve döner. Sürekli ayrılanlar başvurursa yeniden olabilir. İptal, **işlem yapma yetkisini etkilemez**; talep **yazılı** yapılır.",
      k: "1006 resmi not s. 150"
    },
    {
      s: "Dayanak payda özsermaye hâli uyarlaması yapıldığında VİOP'taki sözleşmeler için aşağıdakilerden hangisi **yanlıştır**?",
      c: ["Mevcut standart sözleşmeler işleme kapatılır", "Aynı vadelere ait standart olmayan sözleşmeler işleme açılır", "Açık pozisyonların sayısı özsermaye hâlinin oranında düzeltilir", "Bekleyen iptale kadar geçerli ve tarihli emirler iptal edilir", "Teorik fiyat baz alınarak standart opsiyon sözleşmeleri açılır"],
      d: 2,
      a: "Özsermaye uyarlamasında sözleşmenin fiyatı, kullanım fiyatı ve büyüklüğü uyarlanır; ancak **açık pozisyon sayısında herhangi bir düzeltme yapılmaz**. Pozisyonlar standart olmayan yeni sözleşmelere aktarılır.",
      k: "1006 resmi not s. 150"
    },
    {
      s: "Dayanak payı olan şirketin **nakit temettü** dağıtması hâlinde VİOP sözleşmelerinde ne yapılır?",
      c: ["Özsermaye hâli uyarlaması yapılmaz", "Bedelli sermaye artırımı formülüyle uyarlama yapılır", "Bedelsiz sermaye artırımı formülüyle uyarlama yapılır", "Sözleşmeler nakdi uzlaşmayla sonlandırılır", "Açık pozisyonlar temettü oranında artırılır"],
      d: 0,
      a: "**Nakit temettüde** uyarlama **yapılmaz**. Temettü **pay olarak** dağıtılırsa **bedelsiz sermaye artırımı** formülü uygulanır; kısmen paysa yalnız pay kısmı uyarlanır. Komite farklı yöntem kararı verebilir.",
      k: "1006 resmi not s. 151"
    },
    {
      s: "VİOP'ta olağanüstü durum nedeniyle zamanında başlatılamayan **normal seans** en geç ne zamana kadar başlatılabilir?",
      c: ["Seans bitiş saatinden 5 dakika öncesine kadar", "Seans bitiş saatinden 15 dakika öncesine kadar", "Seans bitiş saatinden 30 dakika öncesine kadar", "Seans bitiş saatinden 1 saat öncesine kadar", "Seans bitiş saatinden 2 saat öncesine kadar"],
      d: 1,
      a: "Normal seans, bitiş saatinden **15 dakika** öncesine kadar başlatılabilir; bitişe kadar başlatılamayacağı anlaşılırsa yeniden başlatılmaz. **Akşam seansında** bu süre **1 saattir**.",
      k: "1006 resmi not s. 152-153"
    },
    {
      s: "VİOP'ta **normal seansın başlatılmamasını** gerektirebilecek üye erişim sorunuyla ilgili ölçüt hangisidir?",
      c: ["Faal üyelerin 1/4'ünden fazlasının girememesi veya bunların hacmin %50'sini oluşturması", "Üyelerin 1/10'undan fazlasının sisteme girememesi ve bunun en az bir saat sürmesi", "Herhangi bir üyenin teknik nedenle sisteme hiç girememesi", "Üyelerin yarısından fazlasının girememesi ve son 3 aylık hacmin %75'ini oluşturması", "Takasbank'ın tek bir üyeye teminat tamamlama çağrısı yapması"],
      d: 0,
      a: "Ölçüt: son 3 ayda işlem yapan faal üyelerin **1/4'ünden fazlasının** teknik nedenle sisteme girememesi ve/veya giremeyen üyelerin (**en az 5**) son 3 aylık toplam işlem hacminin **%50**'sini oluşturmasıdır.",
      k: "1006 resmi not s. 151-152"
    },
    {
      s: "VİOP'ta piyasa koşulları gerektirdiğinde sözleşme bazında **günlük fiyat değişim limitlerini iki katına kadar** kim yükseltebilir?",
      c: ["Yalnızca Sermaye Piyasası Kurulu", "Yalnızca borsa yönetim kurulu", "Uzlaşma Fiyatı Komitesi başkanı", "Takasbank genel müdürü", "Genel müdür yardımcısı veya piyasa müdürü"],
      d: 4,
      a: "Günlük limitleri olağanüstü durumlarda **genel müdür** değiştirebilir. Piyasa koşulları gerektirirse sözleşme bazında limitler **genel müdür yardımcısı** veya **piyasa müdürü** tarafından **iki katına kadar** yükseltilebilir.",
      k: "1006 resmi not s. 153"
    },
    {
      s: "VİOP'ta **O_XU030E0417C1240.00** kodlu sözleşme hangisidir?",
      c: ["BIST 30 endeksine dayalı, Amerikan tipi, Nisan 2017 vadeli satım opsiyonu", "BIST 30 endeksine dayalı, Avrupa tipi, Nisan 2017 vadeli esnek satım opsiyonu", "BIST 30 endeksine dayalı, Nisan 2017 vadeli, fiziki teslimatlı vadeli işlem sözleşmesi", "BIST 30 endeksine dayalı, Avrupa tipi, Nisan 2017 vadeli alım opsiyonu", "BIST 30 endeksine dayalı mini vadeli işlem sözleşmesi"],
      d: 3,
      a: "**O_** opsiyon, **XU030** BIST 30, **E** Avrupa tipi, **0417** Nisan 2017, **C** alım opsiyonu, **1240.00** kullanım fiyatıdır. Satım opsiyonu P, Amerikan tipi A, esnek sözleşme TM_ ile gösterilir.",
      k: "1006 resmi not s. 155-156"
    },
    {
      s: "Aşağıdaki VİOP sözleşmelerinden hangisi **akşam seansında işlem görmez**?",
      c: ["BIST 30 Endeks vadeli işlem sözleşmeleri", "Dolar/ons altın vadeli işlem sözleşmeleri", "Dolar/ton bakır vadeli işlem sözleşmeleri", "Pay vadeli işlem sözleşmeleri", "BIST Sürdürülebilirlik 25 Endeks vadeli işlem sözleşmeleri"],
      d: 3,
      a: "Akşam seansında BIST 30, BIST Likit Banka, BIST Banka Dışı Likit 10, BIST Sürdürülebilirlik 25 endeks vadelileri ile dolar/ons altın, gümüş, platin, paladyum ve dolar/ton bakır vadelileri işlem görür. **Pay vadeli** sözleşmeler akşam seansına dâhil değildir.",
      k: "1006 resmi not s. 157"
    }
  ]
});
