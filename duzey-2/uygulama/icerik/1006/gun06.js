SPL.gun("1006", 6, {
  okuma: `
## Bugünün haritası
Bugün Pay Piyasasının **birincil piyasa** işlemlerini, yani **borsada halka arzı** çalışıyoruz. Üç satış yöntemi var: **sürekli işlem**, **sabit fiyat (SFY)** ve **değişken fiyat (DFY)**. Dağıtım kuralları ve süreler sınavda çok sorulur.

1. Birincil piyasa işlemlerinin genel kuralları ve **KAP ilan süreleri**
2. **HE** ve **BE** özellik kodları; nominal değer kuralı
3. **Sürekli işlem yöntemi**
4. **Talep toplama yöntemleri**: iki aşama ve MKK sicil numarasıyla tekleştirme
5. **SFY** ve **DFY** dağıtım kuralları
6. Ekran sorguları, takas ve seans saatleri
7. Borsada işlem gören ortaklıkların birincil piyasası (**kalan paylar**)
8. Halka arz sonrası **fiyat istikrarını sağlayıcı işlemler**

---

## 1. Genel kurallar
- Payların ve yönetim kurulunun uygun gördüğü araçların **halka arzı**, birincil piyasada yapılır.
- **GSP**'de işlem görmek üzere sermaye artırımıyla çıkarılacak payların halka arz edilmeksizin **nitelikli yatırımcılara ilk satışı** da, izahnamede satışın borsada yapılacağı belirtilmişse ve borsaca uygun görülürse borsada yapılabilir.

| Duyuru | KAP'ta en geç ne zaman? |
|---|---|
| Borsada **halka arz** yoluyla satış | İşlem tarihinden **en az 2 iş günü önce** |
| YPAH kullanımından sonra **kalan payların** satışı | Satış başlangıcından **en az 1 işlem günü önce** |

### Özellik kodları
| Kod | Kullanım |
|---|---|
| **HE** | Borsada **talep toplama** yöntemleriyle (SFY, DFY) halka arz edilen paylar |
| **BE** | **Sürekli işlem** yöntemiyle halka arz edilen paylar ve YPAH sonrası **kalan paylar** |

> [!dikkat] SPKn **12/2** gereği Kurul izin vermedikçe birincil piyasada satılan paylar **nominal değerin (1 TL) altında** işlem göremez.

---

## 2. İlk kez işlem görecek ortaklıklarda yöntemler
Borsada ilk kez halka arz edilen şirketlerin birincil piyasa işlemleri **sürekli işlem**, **sabit fiyat** ve **değişken fiyat** yöntemleriyle yapılır. Sabit ve değişken fiyat yöntemleri, borsa dışı halka arzlardaki **talep toplama yönteminden** uyarlanmıştır.

---

## 3. Sürekli işlem yöntemi
- Halka arzın **2 günde** tamamlanması esastır; ancak üye **daha uzun** süreli satış da talep edebilir.
- **İlk gün baz fiyatı:** izahnamedeki halka arz fiyatının **en yakın fiyat adımına yuvarlanması**.
- **2 gün** talep edildiyse: fiyat sınırları ikincil piyasadaki oranlarla belirlenir.
- **2 günden uzun** talep edildiyse: her seans **ilk günün baz fiyatı** kullanılır; sınırlar ikincil piyasa oranlarıyla hesaplanır.

> [!ezber] Süre **2 gün** olarak talep edildiyse **uzatılamaz**. SPK (08.07.2010) ve BİAŞ YK (16.07.2010) kararlarıyla borsada satış yönteminin kullanıldığı halka arzların süresi **2 iş günü** ile sınırlandırılmıştır.

- Satış bitince, sonuçlar dikkate alınarak **yönetim kurulu kararıyla** paylar ilgili pazarda işlem görmeye başlar.
- Halka arz sürerken **ikincil piyasa işlemleri başlatılamaz**.
- İkincil piyasadaki **ilk seansın baz fiyatı:** birincil piyasadaki **son seansın kapanış fiyatı**.
- İlk kez işlem görecek ortaklıkların birincil piyasasında **özel işlem bildirimi yapılamaz**.

---

## 4. Talep toplama yöntemleri
BİAŞ YK'nın 2010'daki kararlarıyla sürekli işlem yöntemine ilave olarak iki yöntem geliştirildi. Bunlar, **II-5.2 SP Araçlarının Satışı Tebliği**'ndeki (RG 28.06.2013) talep toplama yönteminden uyarlanmıştır:
- **Sabit Fiyatla Talep Toplama ve Satış Yöntemi (SFY)**
- **Değişken Fiyatla Talep Toplama ve Satış Yöntemi (DFY)**

### İki aşama
| Aşama | Kurallar |
|---|---|
| **Talep toplama** | Yalnız **alım emirleri** toplanır. Süre **en az 1, en fazla 3 iş günü**; şirketin talebiyle **BİAŞ YK** belirler. SPK veya borsanın aksi kararı yoksa ve önceden duyurulduysa, süre sonu beklenmeden (ör. 1. veya 2. gün seans sonunda) dağıtım yapılabilir. |
| **Dağıtım** | Emirler **MKK sicil numarasıyla yatırımcı bazında tekleştirilir**. Dağıtılabilecek her emre fiyat ve zaman önceliğine göre **sırayla birer lot** verilir. İşlemler dağıtım **tamamen bittikten sonra** gerçekleşir. Dağıtım, talep toplamanın bittiği gün **18:15'ten sonra** başlar. |

> [!bilgi] 2020/62 sayılı Duyuru: Birden fazla hesabı olan yatırımcıların talepleri, yatırım kuruluşlarınca **yatırımcı bazında konsolide edilip tek hesaptan** iletilmelidir.

### Dağıtıma konu edilmeyen emirler
- Aynı MKK sicil numaralı yatırımcının **mükerrer** emirleri: yalnız fiyat ve zaman önceliğine sahip **ilk emre** dağıtım yapılır.
- Talep toplamanın sona erdiği an **MKK sicil numarası bulunmayan** hesaplardan gelen emirler. (Sorumluluk emri ileten **aracı kurumdadır**.)
- Birden fazla MKK sicil numarasına bağlı **müşterek hesaplardan** gelen emirler.
- GSP'de nitelikli yatırımcıya ihraçta, MKK'da **nitelikli yatırımcı olarak tanımlanmamış** hesaplardan gelen emirler.

### İki yöntemde ortak kurallar
- Emirler birincil piyasa seans saatlerinde girilir.
- Yalnız **iptale kadar geçerli, limit fiyatlı alış** emri girilebilir.
- Emirler iptal edilmedikçe talep toplama süresi sonuna kadar geçerlidir; dağıtımdan sonra işleme dönüşmeyenler borsaca iptal edilir.
- Emirler seans içinde istenildiği an **iptal edilebilir**.
- Emirlerde yalnız **fiyat ve miktar** değiştirilebilir; **hesap numarası düzeltmesi yapılamaz**.
- **Azami emir değerini** Pay Piyasası Direktörlüğü (PPD) belirler.

---

## 5. SFY ve DFY
### Sabit fiyat yöntemi (SFY)
- Emirler ortaklığın belirleyip duyurduğu **tek bir fiyatla** girilir (fiyat alanı boş geçilemez). Farklı fiyatlı emirler **reddedilir**; emir fiyatı **değiştirilemez**.
- Tek fiyat olduğu için **fiyat önceliği yoktur**; yalnız **zaman önceliği** geçerlidir.
- Dağıtım, birincil piyasa süresinin bitiminden sonra **otomatik** yapılır.

| Durum | SFY'de sonuç |
|---|---|
| **Denge** (talep = arz) | Her emir **tam** karşılanır |
| **Az talep** (talep < arz) | Her emir **tam** karşılanır |
| **Fazla talep** (talep > arz) | **Zaman önceliğine** göre sıralanan her emre **sırayla birer lot**; satılacak miktar bitene kadar |

### Değişken fiyat yöntemi (DFY)
- Emirler ortaklığın duyurduğu **fiyat aralığında** girilir; fiyat aralık içinde (sınırlar dâhil) **değiştirilebilir**.

| Durum | DFY'de halka arz fiyatı |
|---|---|
| **Denge** | **En düşük alış fiyat seviyesi**; tüm emirler bu fiyattan karşılanır |
| **Az talep** | **En düşük alış fiyat seviyesi**; tüm emirler bu fiyattan karşılanır |
| **Fazla talep** | Fiyat ve zaman önceliğine göre **arzın tamamının karşılandığı fiyat**; talebin tamamı bu fiyattan karşılanır |

- Fazla talepte dağıtım sırası fiyat ve zaman önceliğine göre belirlenir ama her emre **birer lot** verilir. Bu yüzden zaman olarak **ilk giren emir bile tamamen karşılanmayabilir**.
- Satış fiyatına **eşit ve daha yüksek** fiyatlı emirlerin tamamı dağıtıma katılır; satış fiyatının **altındaki** emirler dikkate alınmaz. Dağıtım **en iyi fiyatlı** emirden başlar.

> [!ezber] DFY'de denge ve az talep durumunda fiyat **en düşük alış fiyatı**dır. Fazla talepte ise arzın tamamını karşılayan fiyattır.

---

## 6. Ekran sorguları, takas ve seans saatleri
| Sorgu / yayın | Emir toplama aşaması | Dağıtım sonrası |
|---|---|---|
| Emir baz | **Kapalı** | Açık |
| Fiyat baz | **Kapalı** | Açık |
| Gerçekleşen işlemler | **Kapalı** | Açık |
| Emir defteri | **Açık** | Açık |
| Emir geçmişi | **Açık** | Açık |

Emir toplama birden fazla gün sürerse ekranlar bu süre boyunca durumunu korur.

- **Takas:** dağıtım günü (T) izleyen 2. iş günü, yani **T+2**.

| Uygulama | Saat |
|---|---|
| SFY ve DFY talep toplama | **10:30 – 13:00** |
| SFY ve DFY dağıtım | **18:15 (+)** |
| Sürekli işlem yöntemi | **10:30 – 13:00** |

---

## 7. Borsada işlem gören ortaklıkların birincil piyasası
- **Kullanılmayan YPAH sonrası kalan paylar** ile YPAH **kısıtlanarak** artırılan sermayeyi temsil eden paylar, SPK kaydına alınarak borsada halka arz edilebilir.
- Satış duyurusu, başlangıçtan **en az 1 işlem günü önce** KAP'ta.
- Bu satışlarda yöntem **sürekli işlem**dir.
- Birincil piyasada **yalnız halka arza aracılık eden üye** satış emri verebilir. Buradan alınan paylar birincil piyasada **yeniden satışa sunulamaz**.
- BISTECH ile özel emir uygulaması sona erdiği için özel emir kuralları kaldırıldı; bu sıralarda **özel işlem bildirimi yapılmaz**.
- Kalan payların birincil piyasada satışında **baz fiyat ve fiyat marjı uygulanmaz**.
- **GSP**'deki ortaklıkların nakit sermaye artırımında kalan paylar **yalnızca nitelikli yatırımcılara** satılabilir.

---

## 8. Fiyat istikrarını sağlayıcı işlemler
- Dayanak: **VII-128.1 Pay Tebliği** md. 11 ("Halka açılma sonrasında uyulacak esaslar").
- İşlemler Pay Piyasasının olağan emir ve işlem kurallarıyla yapılır.
- **Halka arz fiyatının üzerinde alım emri verilemez.**
- İşlem süresi içinde borsa fiyatı **halka arz fiyatının altına düşerse**, satışa aracılık eden üye **alım** yapabilir.
- Sorumlu yatırım kuruluşu bu işlemleri **ayrı bir hesapta** izler ve emirlerinde bu hesap numarasını kullanır.

---

## Bugünün özeti
- Halka arz duyurusu **2 iş günü**, kalan pay satışı duyurusu **1 işlem günü** önce KAP'ta.
- **HE:** talep toplama yöntemleri; **BE:** sürekli işlem ve kalan paylar.
- Borsada satış yöntemli halka arzlar en çok **2 iş günü**; 2 gün talep edildiyse uzatılamaz.
- İkincil piyasanın ilk baz fiyatı = birincil piyasanın **son kapanış fiyatı**.
- Talep toplama **1-3 iş günü**; dağıtım **18:15**'ten sonra; MKK sicil numarasıyla **tekleştirme**; her emre **birer lot**.
- **SFY:** tek fiyat, yalnız zaman önceliği. **DFY:** fiyat aralığı; denge ve az talepte en düşük alış fiyatı.
- Takas **T+2**; talep toplama **10:30-13:00**.
- Fiyat istikrarı: halka arz fiyatının **üzerinde alım emri verilemez**.
`,
  sorular: [
    {
      s: "Borsada halka arz yoluyla satış yapılacağı durumu, işlemin yapılacağı tarihten **en az ne kadar önce** KAP'ta ilan edilir?",
      c: ["1 işlem günü", "2 iş günü", "3 iş günü", "5 iş günü", "10 gün"],
      d: 1,
      a: "Borsaca uygun görülen halka arz başvurusu, işlem tarihinden **en az 2 iş günü önce** KAP'ta ilan edilir. YPAH sonrası **kalan payların** satış duyurusu ise **en az 1 işlem günü önce** yapılır.",
      k: "1006 resmi not s. 31"
    },
    {
      s: "Borsa birincil piyasada **sürekli işlem yöntemiyle** halka arz edilen paylar ve YPAH kullanımından sonra **kalan paylar** hangi özellik koduyla işlem görür?",
      c: ["BE", "HE", "S1", "F", "V"],
      d: 0,
      a: "Sürekli işlem yöntemiyle halka arz edilen paylar ve kalan paylar **BE**, talep toplama yöntemleriyle halka arz edilen paylar ise **HE** koduyla işlem görür.",
      k: "1006 resmi not s. 31"
    },
    {
      s: "Borsa birincil piyasada sürekli işlem yöntemiyle halka arz edilen payların **ikincil piyasadaki ilk seansında** uygulanacak baz fiyat nasıl belirlenir?",
      c: ["İzahnamedeki halka arz fiyatı en yakın fiyat adımına yuvarlanarak", "Birincil piyasanın ilk gününde uygulanan baz fiyat aynen kullanılarak", "Birincil piyasadaki tüm işlemlerin ağırlıklı ortalama fiyatı alınarak", "Halka arza aracılık eden üyenin bildirdiği fiyat alınarak", "Birincil piyasadaki son seansta oluşan kapanış fiyatı alınarak"],
      d: 4,
      a: "İkincil piyasadaki ilk seansın baz fiyatı, birincil piyasadaki **son seansta oluşan kapanış fiyatıdır**; fiyat sınırları bu baz fiyattan hesaplanır. İzahname fiyatının yuvarlanması ise **birincil piyasanın ilk günü** için geçerlidir.",
      k: "1006 resmi not s. 31-32"
    },
    {
      s: "Borsa birincil piyasada talep toplama yöntemlerinde **talep toplama süresi** ile ilgili hangisi doğrudur?",
      c: ["En az 2, en fazla 5 iş günüdür ve şirketin talebi üzerine SPK tarafından belirlenir", "En az 3, en fazla 7 iş günüdür ve aracı kurum tarafından belirlenir", "Her durumda 2 iş günüdür ve süre sonu beklenmeden dağıtım yapılamaz", "En az 1, en fazla 3 iş günüdür; şirketin talebiyle BİAŞ yönetim kurulu belirler", "En fazla 1 iş günüdür ve uzatılması için Kurul onayı gerekir"],
      d: 3,
      a: "Emir toplama süresi **en az 1, en fazla 3 iş günüdür**; şirketin talebiyle **BİAŞ yönetim kurulu** belirler. SPK veya borsanın aksi kararı yoksa ve önceden duyurulduysa süre sonu beklenmeden dağıtım yapılabilir.",
      k: "1006 resmi not s. 32"
    },
    {
      s: "Talep toplama yöntemlerinde aşağıdaki emirlerden hangisi **dağıtıma konu edilir**?",
      c: ["Birden fazla MKK sicil numarasına bağlı müşterek hesaptan iletilen emir", "Talep toplamanın sona erdiği an MKK sicil numarası bulunmayan hesaptan gelen emir", "Aynı MKK sicil numaralı yatırımcının fiyat ve zaman önceliğine sahip ilk emri", "Aynı MKK sicil numaralı yatırımcının farklı aracı kurumdan girdiği ikinci emri", "GSP ihracında MKK'da nitelikli yatırımcı olarak tanımlanmamış hesaptan gelen emir"],
      d: 2,
      a: "Aynı MKK sicil numaralı yatırımcının emirlerinden yalnız **fiyat ve zaman önceliğine sahip ilk emre** dağıtım yapılır. Mükerrer emirler, sicil numarası olmayan hesaplar, müşterek hesaplar ve GSP'de nitelikli tanımı olmayan hesaplar dağıtıma konu edilmez.",
      k: "1006 resmi not s. 32-33"
    },
    {
      s: "**Sabit fiyat yönteminde (SFY)** fazla talep oluşması hâlinde dağıtım nasıl yapılır?",
      c: ["Talepler oransal olarak karşılanır; her emre talebi oranında pay verilir", "Fiyat ve zaman önceliğine göre en yüksek fiyatlı emirden başlanarak tamamı karşılanır", "Miktarı en büyük emirden başlanarak her emir tamamen karşılanır", "Zaman önceliğine göre sıralanan her emre sırayla birer lot dağıtılır", "Dağıtım yapılmaz; halka arz iptal edilerek talep yeniden toplanır"],
      d: 3,
      a: "SFY'de tek fiyat olduğu için **fiyat önceliği yoktur**. Fazla talepte, **zaman önceliğine** göre sıralanan her emre **sırayla birer lot** dağıtılır; satılacak miktar bitene kadar bu sürer. Denge ve az talepte her emir tam karşılanır.",
      k: "1006 resmi not s. 33-34"
    },
    {
      s: "**Değişken fiyat yönteminde (DFY)** talep miktarı arz miktarından **az** ise halka arz fiyatı nasıl belirlenir?",
      c: ["Fiyat aralığının üst sınırı halka arz fiyatı olur", "Emirlerin ağırlıklı ortalama fiyatı halka arz fiyatı olur", "En yüksek alış fiyat seviyesi halka arz fiyatı olur", "Ortaklığın ilan ettiği fiyat aralığının orta noktası halka arz fiyatı olur", "En düşük alış fiyat seviyesi halka arz fiyatı olur"],
      d: 4,
      a: "DFY'de **denge** ve **az talep** durumlarında **en düşük alış fiyat seviyesi** halka arz fiyatı olarak belirlenir ve tüm alış emirleri bu fiyattan karşılanır.",
      k: "1006 resmi not s. 34"
    },
    {
      s: "Halka arz sonrası **fiyat istikrarını sağlayıcı işlemler** ile ilgili hangisi doğrudur?",
      c: ["Halka arz fiyatının üzerinde alım emri verilebilir", "İşlemler, aracı kurumun olağan portföy hesabından yapılmak zorundadır", "Borsa fiyatı halka arz fiyatının altına düştüğünde satışa aracılık eden üye alım yapabilir", "Bu işlemler yalnızca özel işlem bildirimi yoluyla yapılabilir", "Bu işlemler VII-128.3 sayılı Tebliğe göre yalnızca Kurul izniyle yapılır"],
      d: 2,
      a: "VII-128.1 Pay Tebliği md. 11'e göre halka arz fiyatının **üzerinde alım emri verilemez**. Fiyat halka arz fiyatının **altına düştüğünde** aracılık eden üye alım yapabilir. Sorumlu yatırım kuruluşu işlemleri **ayrı bir hesapta** izler.",
      k: "1006 resmi not s. 35"
    }
  ]
});
