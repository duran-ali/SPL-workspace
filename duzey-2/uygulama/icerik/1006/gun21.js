SPL.gun("1006", 21, {
  okuma: `
## Bugünün haritası
Yeni bölüm: **Borsa İstanbul Vadeli İşlem ve Opsiyon Piyasası (VİOP)**. Bu piyasada vadeli işlem ve opsiyon sözleşmeleri işlem görür. Bugün temel kavramları, pazarları, günlük iş akışını, seans saatlerini, özel işlem bildirimini ve hatalı işlem iptali kurallarını öğreneceğiz.

1. VİOP'un **temel kavramları**
2. VİOP **pazarları**
3. **Günlük iş akışı**: işlem yapılmayan dönem, açılış, normal seans, akşam seansı
4. **İşlem saatleri**
5. İşlem yöntemi ve **özel işlem bildirimi**
6. Piyasanın kapatılması, sözleşmelerde **işlemlerin durdurulması** ve **sonlandırılması**
7. **Hatalı işlem iptali**

---

## 1. Temel kavramlar
| Kavram | Anlamı |
|---|---|
| **Vadeli işlem sözleşmesi** | Belirli vadede, önceden belirlenen fiyat, miktar ve nitelikte dayanak varlığı **alma veya satma yükümlülüğü** veren sözleşme |
| **Opsiyon sözleşmesi** | Alana, ödediği **prim** karşılığında dayanak varlığı alma veya satma **hakkı**; satanı ise kazandığı prim karşılığında **yükümlü** kılan sözleşme |
| **Opsiyon primi** | Opsiyonu alanın satana haklar karşılığında ödediği tutar |
| **Dayanak varlık** | Sözleşmede alma-satma hakkı veya yükümlülüğüne konu SP aracı, mal, kıymet, gösterge, emtia vb. |
| **Uzun pozisyon** | Vadeli işlemde vadede **alma** yükümlülüğü; alım opsiyonunda **alma hakkı**; satım opsiyonunda **satma hakkı** |
| **Kısa pozisyon** | Vadeli işlemde vadede **satma** yükümlülüğü; alım opsiyonunda **satma yükümlülüğü**; satım opsiyonunda **alma yükümlülüğü** |
| **Açık pozisyon** | Ters işlem, nakdi uzlaşma veya fiziki teslimatla henüz **kapatılmamış** pozisyon |
| **Uzlaşma fiyatı** | Hesapların güncellenmesinde ve nakdi uzlaşma veya fiziki teslimatta kullanılan fiyat |
| **Özsermaye hâlleri** | Temettü, bedelli/bedelsiz artırım, azaltım, birleşme, bölünme gibi pay değerini veya miktarını etkileyen durumlar |
| **Algoritmik emir iletim sistemleri** | Önceden belirlenmiş kurallara göre **insan müdahalesi olmadan** emir üreten sistemler |
| **Yüksek frekanslı işlem kullanıcıları** | Algoritmik sistemlerle **yüksek hızda ve çok sayıda** emir iletebilen kullanıcılar |
| **Eşyerleşim** | Sistem ve sunucuların borsa sistemine **en yakın** konuşlandırıldığı veri merkezi hizmeti |

> [!ezber] **Vadeli işlemde** iki taraf da **yükümlüdür**. **Opsiyonda** alan tarafın **hakkı**, satan tarafın **yükümlülüğü** vardır; alan bu hak için **prim** öder.

---

## 2. VİOP pazarları
Sözleşmelerin türüne ve işlem esaslarına göre oluşturulan pazarlar:
- **Döviz** Türev Pazarı
- **Elektrik** Türev Pazarı
- **Emtia** Türev Pazarı
- **Endeks** Türev Pazarı
- **Kıymetli Madenler** Türev Pazarı
- **BYF** Türev Pazarı
- **Pay** Türev Pazarı
- **Yabancı Endeksler** Türev Pazarı
- **Metal** Türev Pazarı
- **Faiz** Türev Pazarı
- **DİBS** Türev Pazarı

Emirler ve özel işlem bildirimleri ilgili pazar altında gerçekleşir. İstatistiklerin toplu yayımı için **pazar segmentleri** tanımlanmıştır.

---

## 3. Günlük iş akışı
**Bölümler:** işlem yapılmayan dönemler → açılış seansı → normal seans → uzlaşma fiyatının ilanı → akşam seansı → gün sonu işlemleri.

### İşlem yapılmayan dönemler
Sistem açıktır ama **emir girişi, özel işlem bildirimi ve işlem yapılamaz**. Yapılabilenler:
- sisteme bağlanmak ve sorgulama yapmak,
- önceki günlerden kalan **iptale kadar geçerli** veya **tarihli** emirleri iptal etmek veya inaktif yapmak,
- bu emirlerin miktarını **azaltmak** veya fiyatını **kötüleştirmek**,
- sonra gönderilmek üzere **inaktif emir** hazırlamak.

### Açılış seansı
- Emirler eşleşme yapılmadan toplanır, sonra **tek fiyat** yöntemiyle eşleştirilir. Bulunan **denge fiyatı**, açılış seansı fiyatı olarak ilan edilir.
- **Denge fiyatı:** en çok işlem miktarı → işlem görmeden kalan en az miktar → alış fazlaysa **yüksek**, satış fazlaysa **düşük**, eşitse **aritmetik ortalama**.
- İki aşama: **emir toplama** (bitiş saatinden sonraki **30 saniye** içinde rastgele sona erer) ve **eşleştirme**.
- Emir toplamada: açılış, normal ve akşam seansında geçerli emir girilebilir; miktar, fiyat ve süre değiştirilebilir; iptal veya inaktif yapılabilir.

### Normal seans
- **Fiyat ve zaman önceliğine dayalı çok fiyat** yöntemiyle işlemlerin yapıldığı **ana seanstır**.
- Emir girişi, **özel işlem bildirimi**, emir değişikliği, iptal ve **esnek sözleşme** oluşturma yapılabilir.

### Uzlaşma fiyatlarının ilanı
Her işlem günü sonunda **günlük uzlaşma fiyatları**, vade sonlarında **vade sonu uzlaşma fiyatları** ilan edilir.

### Akşam seansı
- Normal seanstan sonra **çok fiyat** yöntemiyle yapılan seanstır.
- Akşam seansındaki işlemler **bir sonraki normal seansın işlemi** olarak değerlendirilir.
- Akşam seansında geçerli **günlük** emirler girilebilir ve değiştirilebilir.

---

## 4. İşlem saatleri
| Bölüm | Akşam seansına **dâhil olmayan** sözleşmeler | Akşam seansına **dâhil olan** sözleşmeler |
|---|---|---|
| Seans saatleri (tam gün) | **09:20 – 18:10** | **09:20 – 18:10 ve 19:00 – 23:00** |
| Sistem açılışı / seans öncesi | 07:30 | 07:30 |
| Açılış emir toplama | **09:20** | 09:20 |
| Açılış eşleştirme | **09:25** (30 sn içinde rastgele) | 09:25 |
| Sürekli müzayede | **09:30** | 09:30 |
| Seans sonu | **18:10** (yarım gün 12:40) | 18:10 |
| Uzlaşma fiyatı ilanı | 18:55+ | **18:45+** |
| Akşam seansı öncesi | – | 18:50 |
| **Akşam seansı** | – | **19:00 – 23:00** |
| Akşam gün sonu | – | 23:15 |

> [!dikkat] **Takvim yılının son işlem gününde akşam seansı yapılmaz.** Yarım iş günlerinde seans **09:20 – 12:40**'tır ve akşam seansı yoktur.

- İşlem günü bölümleri **pazar veya sözleşme bazında farklılaştırılabilir**.

---

## 5. İşlem yöntemi ve özel işlem bildirimi
- Esas yöntem **çok fiyat** (fiyat ve zaman önceliği); **açılış seansında tek fiyat**.
- **Genel müdür**, seansın bazı bölümlerinde veya tamamında farklı yöntem uygulanmasına karar verebilir.

### Özel işlem bildirimi
- Üyeler, sözleşmeler için belirlenen **asgari emir miktarının üzerindeki** emirleri emir defterine iletmeden işleme dönüştürmek için bildirebilir. Koşulları sağlayan bildirimler **otomatik eşleşir**.
- Fiyat istatistikleri diğer işlemlerden **ayrı** yayımlanır; ama sözleşmenin ve piyasanın **hacim ve miktar** istatistiklerine dâhildir.
- **Yalnız normal seansta**, temsilci/baş temsilciler tarafından işlem terminalleri ve FIX ile yapılabilir.

| Tür | Kullanım |
|---|---|
| **Tek taraflı** | Taraflar **farklı üyelerse**; biri kendi tarafının bilgisini ve karşı tarafı girer, karşı taraf kendi hesap bilgisiyle eşler |
| **Çift taraflı** | Üye **hem alıcı hem satıcıysa**; iki tarafın bilgileri birlikte girilir |

### Gruplandırma
Sistem, kapasiteden en iyi yararlanmak için **gruplardan** oluşur ve tüm sözleşmeler bu gruplara dağıtılmıştır. Bazı protokollerde her gruba ayrı bağlantı gerekir.

---

## 6. Kapatma, durdurma ve sonlandırma
### Piyasa ve pazarların kapatılması
- **Genel müdür** kararıyla bir işlem günü veya **5 işlem gününe kadar** sürekli veya geçici kapatılabilir; yeniden başlatma da genel müdür kararıyla olur.
- **5 işlem gününü aşan** durumlarda Borsa Yönetmeliği **md. 39** uygulanır. Kapatma nedenleriyle **KAP**'ta duyurulur.

### Sözleşmelerde işlemlerin durdurulması
- Dayanak varlık durdurulursa ilgili sözleşmeler **genel müdür** kararıyla durdurulabilir. Genel müdür, sözleşmenin açık/kapalı olma hâlini dayanaktan **farklı** belirleyebilir.
- Genel müdür bir aracın işlemlerini **en fazla 1 ay** durdurabilir; **1 ayı aşan** süreler için **yönetim kurulu** kararı gerekir. Durdurma ve yeniden açılış **KAP**'ta duyurulur. Genel müdür yetkisini **genel müdür yardımcılarına devredebilir**.

> [!ezber] **EBDKS** tetiklenirse pay ve pay endeksi vadeli işlem ve opsiyon sözleşmelerinde işlemler **20 dakika** durdurulur; emirler iptal edilebilir veya inaktif yapılabilir ama **değiştirilemez**. EBDKS **17:30'dan sonra** devreye girerse işlemler durdurulur ve **18:08**'de sürekli işlemle yeniden başlar.

### Sözleşmelerin işlem görmesinin sonlandırılması (genel müdür)
a) Dayanak varlığın **spot piyasada işlem görmemesi** veya işlemlerinin belirli süre sonlandırılması,
b) Dayanağa ilişkin **lisans anlaşmalarının sona ermesi**,
c) Sözleşmede **en az üç ay işlem olmaması veya açık pozisyon bulunmaması**,
ç) İşlem görme kabiliyetini engelleyen diğer durumlar.

Sonlandırılan sözleşme, asgari unsurları değişmemek kaydıyla genel müdür kararıyla **yeniden açılabilir**.

### İşlem bildirimi
İşlem raporları elektronik ortamda üyelere sunulur; uyuşmazlıkta **borsa kayıtları esastır**.

---

## 7. Hatalı işlem iptali
**Esas:** İşlemin, üyelerden **en az birinin hatalı emri** sonucu gerçekleşmiş olması. Ayrıca şu kriterlerin **hepsi** sağlanmalıdır:

### i. Başvuru süresi
- İşlemden itibaren **30 dakika** içinde.
- Son başvuru saati: tam gün normal seans **18:30**, yarım gün **13:00**.

### ii. Gerekli bilgiler
Süre içinde **sözleşme** ve **hesap numarası** bildirilir; emir numarası, işlem numaraları, fiyat ve miktar başvurudan sonra iletilir.

### iii. Fiyat seviyeleri (referans fiyattan sapma)
| Sözleşme sınıfı | Fiyat aralığı |
|---|---|
| **BIST 30 endeks ve pay vadeli** | **±%5** |
| **Döviz vadeli** | **±%3** |
| **Diğer vadeli** | **±%4** |
| **Tüm opsiyonlar** | Referans primin **±%50**'si veya piyasa yapıcı azami spread'inden büyük olan |

Bu aralıkların **dışında** kalan fiyatlardan gerçekleşen işlemler iptal talebine konu olabilir.

### iv. Asgari zarar tutarı
| Başvuru zamanı | Asgari zarar |
|---|---|
| Tam gün **17:30'dan önce** (yarım gün 12:00'den önce) | **200.000 TL** |
| Tam gün **17:30 ve sonrası** (yarım gün 12:00 ve sonrası) | **800.000 TL** |
| **Akşam seansı** işlemleri | **200.000 TL** |

### v. Referans fiyat
Hatalı işlemden önceki veya sonraki fiyatlar, **önceki gün uzlaşma fiyatı**, hatalı emirle oluşan ilk işlem fiyatı, spot veya diğer vadelere göre **teorik fiyat**, **piyasa yapıcı** fiyatı; bunlar adil değilse **Genel Müdürlüğün** belirlediği fiyat.

### Diğer kurallar
- Talepler **işlem terminalleri** veya **e-posta** ile iletilir; **akşam seansı** talepleri **yalnız e-posta** ile. Telefonla bilgi verilse de bilgilerin e-postayla gönderilmesi gerekir.
- **Piyasa eğiliminin** talep edilen fiyat yönünde olup olmadığı dikkate alınabilir.
- Şartlar sağlansa da borsanın talebi kısmen veya tamamen **yerine getirmeme hakkı** saklıdır.
- Hatalı **özel işlem bildirimleri**, şartlar sağlanmasa bile **tarafların onayıyla** iptal edilebilir.
- Akşam seansı talepleri **ertesi normal seansta** değerlendirilir.
- **Açılış seansındaki** işlemler iptal edilirse **denge fiyatı değişmez**.

---

## Bugünün özeti
- Vadeli işlemde iki taraf **yükümlü**; opsiyonda alıcı **hak** (prim öder), satıcı **yükümlü**.
- VİOP'ta **11 pazar** var (döviz, elektrik, emtia, endeks, kıymetli maden, BYF, pay, yabancı endeks, metal, faiz, DİBS).
- İş akışı: işlem yapılmayan dönem → açılış (**tek fiyat**) → normal seans (**çok fiyat**) → uzlaşma fiyatı → akşam seansı → gün sonu.
- Saatler: açılış **09:20-09:30**, normal seans **09:30-18:10**, akşam seansı **19:00-23:00**; yılın son işlem gününde akşam seansı **yok**.
- Akşam seansı işlemleri **ertesi normal seansın** işlemi sayılır.
- Özel işlem bildirimi **yalnız normal seansta**; tek ve çift taraflı.
- Kapatma **5 işlem gününe** kadar genel müdür; durdurma **1 ay**'a kadar genel müdür; EBDKS'de **20 dk**.
- Sonlandırma: en az **3 ay** işlem veya açık pozisyon yoksa.
- Hatalı işlem iptali: **30 dk** içinde; BIST 30 **±%5**, döviz **±%3**, diğer **±%4**, opsiyon **±%50**; zarar **200.000 / 800.000 TL**.
`,
  sorular: [
    {
      s: "Vadeli İşlem ve Opsiyon Piyasası tanımlarına göre, **satım opsiyonunda uzun pozisyon** sahibine ne verir?",
      c: ["Dayanak varlığı belirli fiyattan satın alma yükümlülüğü", "Dayanak varlığı belirli fiyattan satın alma hakkı", "Dayanak varlığı belirli fiyattan satma hakkı", "Dayanak varlığı belirli fiyattan satma yükümlülüğü", "Opsiyon primini alma hakkı"],
      d: 2,
      a: "Uzun pozisyon; vadeli işlemde **alma yükümlülüğü**, alım opsiyonunda **alma hakkı**, **satım opsiyonunda satma hakkı** verir. Satım opsiyonunda **kısa pozisyon** ise alma yükümlülüğü doğurur.",
      k: "1006 resmi not s. 130"
    },
    {
      s: "VİOP'ta **işlem yapılmayan dönemlerde** kullanıcılar aşağıdakilerden hangisini **yapabilir**?",
      c: ["Yeni emir girişi yapabilir", "Özel işlem bildirimi yapabilir", "Önceki günlerden kalan iptale kadar geçerli emirlerin fiyatını iyileştirebilir", "Önceki günlerden kalan tarihli emirlerin miktarını azaltabilir", "Esnek sözleşme oluşturabilir"],
      d: 3,
      a: "İşlem yapılmayan dönemlerde emir girişi, özel işlem bildirimi ve işlem yapılamaz. Önceki günlerden kalan İKG veya tarihli emirler iptal edilebilir, inaktif yapılabilir, **miktarı azaltılabilir** veya fiyatı **kötüleştirilebilir**; inaktif emir hazırlanabilir.",
      k: "1006 resmi not s. 131"
    },
    {
      s: "VİOP **akşam seansı** ile ilgili hangisi doğrudur?",
      c: ["Tek fiyat yöntemiyle çalışır ve seans sonunda günde bir kez denge fiyatı belirlenir", "Tüm sözleşmeler akşam seansında işlem görür", "Takvim yılının son işlem gününde de akşam seansı yapılır", "Akşam seansında özel işlem bildirimi yapılabilir", "Akşam seansındaki işlemler ertesi normal seansın işlemi sayılır"],
      d: 4,
      a: "Akşam seansı **çok fiyat** yöntemiyle çalışır ve buradaki işlemler **bir sonraki normal seans işlemi** olarak değerlendirilir. Yılın son işlem gününde akşam seansı **yapılmaz**; özel işlem bildirimi **yalnız normal seansta** yapılabilir; yalnız akşam seansına dâhil sözleşmeler işlem görür.",
      k: "1006 resmi not s. 132-133"
    },
    {
      s: "Akşam seansına dâhil olan VİOP sözleşmelerinde **akşam seansı** hangi saatler arasındadır?",
      c: ["18:10 – 21:00", "18:50 – 22:00", "19:00 – 23:00", "19:30 – 23:30", "20:00 – 24:00"],
      d: 2,
      a: "Akşam seansına dâhil sözleşmelerde seans **09:20-18:10** ve **19:00-23:00** arasındadır. Açılış emir toplama 09:20'de, sürekli müzayede 09:30'da başlar.",
      k: "1006 resmi not s. 133"
    },
    {
      s: "VİOP'ta **özel işlem bildirimi** ile ilgili hangisi **yanlıştır**?",
      c: ["Sözleşmeler için belirlenen asgari emir miktarının üzerindeki emirler için yapılabilir", "Fiyat istatistikleri diğer işlemlerden ayrı yayımlanır", "Hacim ve miktar istatistiklerine dâhil olur", "Normal seansın yanında akşam seansında da yapılabilir", "Taraflar farklı üyelerse tek taraflı özel işlem bildirimi kullanılır"],
      d: 3,
      a: "VİOP'ta özel işlem bildirimi **yalnızca normal seansta** yapılabilir. Fiyat istatistikleri ayrı yayımlanır ama hacim ve miktar istatistiklerine dâhildir.",
      k: "1006 resmi not s. 133"
    },
    {
      s: "VİOP'ta **piyasa veya pazarların kapatılması** ile ilgili hangisi doğrudur?",
      c: ["Genel müdür kararıyla bir işlem günü veya 5 işlem gününe kadar kapatılabilir", "Yalnızca SPK kararıyla kapatılabilir", "Genel müdür en fazla 1 ay süreyle kapatabilir; bu durumun KAP'ta duyurulması gerekmez", "Yönetim kurulu kararıyla en az 10 işlem günü kapatılabilir", "Takasbank'ın talebiyle her durumda kapatılabilir"],
      d: 0,
      a: "Piyasa ya da pazarlar **genel müdür** kararıyla bir işlem günü veya **5 işlem gününe kadar** kapatılabilir; 5 işlem gününü aşan durumlarda Borsa Yönetmeliği md. 39 uygulanır ve durum nedenleriyle **KAP**'ta duyurulur. 1 aylık sınır, sözleşmelerde **işlemlerin durdurulması** içindir.",
      k: "1006 resmi not s. 134"
    },
    {
      s: "Bir VİOP sözleşmesinin işlem görmesi aşağıdaki durumlardan hangisinde genel müdür tarafından **sonlandırılabilir**?",
      c: ["Sözleşmede bir hafta boyunca hiç işlem olmaması ve açık pozisyonun azalması", "Sözleşmenin uzlaşma fiyatının bir önceki güne göre %10 değişmesi", "Sözleşmenin fiyatının günlük limite ulaşması", "Sözleşmede piyasa yapıcının bir gün kotasyon vermemesi", "Sözleşmede en az üç ay işlem olmaması veya açık pozisyon bulunmaması"],
      d: 4,
      a: "Sonlandırma sebepleri: dayanağın spot piyasada işlem görmemesi, lisans anlaşmasının sona ermesi, **en az üç ay işlem olmaması veya açık pozisyon bulunmaması** ve işlem görme kabiliyetini engelleyen diğer durumlar.",
      k: "1006 resmi not s. 134"
    },
    {
      s: "VİOP'ta **döviz vadeli işlem sözleşmelerinde** hatalı işlem iptali talebine konu olabilmek için işlemin referans fiyattan en az ne kadar sapmış olması gerekir?",
      c: ["±%3", "±%4", "±%5", "±%10", "±%50"],
      d: 0,
      a: "Fiyat aralıkları: BIST 30 endeks ve pay vadeli **±%5**, **döviz vadeli ±%3**, diğer vadeli **±%4**, opsiyonlarda referans primin **±%50**'si. Bu aralıkların **dışındaki** işlemler iptal talebine konu olabilir; başvuru **30 dakika** içinde yapılmalıdır.",
      k: "1006 resmi not s. 135"
    }
  ]
});
