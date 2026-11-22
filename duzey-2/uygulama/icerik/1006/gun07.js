SPL.gun("1006", 7, {
  okuma: `
## Bugünün haritası
Bugün Pay Piyasasının **ikincil piyasa pazar yapısını** öğreniyoruz. Paylar büyüklük, derinlik ve likiditelerine göre **pazarlara** ayrılır; her pazarın **işlem esasları** farklıdır. Bu tablolar sınavın klasik konusudur.

1. Pazar yapısı: hangi pazarlar var?
2. **Pazarları belirleme kriterleri** ve istisnalar
3. Kriterlerin açıklamaları: PD, FDPD, FDO, likidite (Amihud), temettü getirisi
4. **Değerlendirme esasları**
5. **Pazarlarda uygulanan işlem esasları** tablosu
6. **YÜFP**, **Emtia Pazarı**, **Yakın İzleme Pazarı**
7. **Girişim Sermayesi Pazarı (GSP)**
8. **Piyasa Öncesi İşlem Platformu (PÖİP)**

---

## 1. Pazar yapısı
SPK (19.09.2019) ve BİAŞ YK (27.09.2019) kararlarıyla paylar, benzer **büyüklük, derinlik ve likiditeye** sahip olanlar bir arada işlem görecek şekilde **gruplandırıldı**. 2020'de de derinliği artırmak için pazar yapısında ve kota alma şartlarında değişiklik yapıldı.

**Pazarlar:**
- **Yıldız Pazar**
- **Ana Pazar**
- **Alt Pazar**
- **Yakın İzleme Pazarı (YİP)**
- **Piyasa Öncesi İşlem Platformu (PÖİP)**
- **Yapılandırılmış Ürünler ve Fon Pazarı (YÜFP)**
- **Girişim Sermayesi Pazarı (GSP)**
- **Emtia Pazarı**

Yıldız, Ana ve Alt Pazar arasındaki geçişler bu kriterlere göre yapılır. Başvuru, kabul ve pazardan çıkarılma gibi hususlar **Kotasyon Yönergesi**'ndedir.

---

## 2. Pazarları belirleme kriterleri
| Kriter | Yıldız Pazar | Ana Pazar |
|---|---|---|
| **Piyasa değeri (PD)** | > **6 milyar TL** | > **1 milyar TL** |
| **Fiili dolaşımdaki payların piyasa değeri (FDPD)** | > **1 milyar TL** | > **400 milyon TL** |
| **Fiili dolaşım oranı (FDO)** | > **%10** | > **%10** |
| **İmtiyaz** | İmtiyaz varsa FDO < %90 | İmtiyaz varsa FDO < %90 |
| **Yerli fon** | > **30 milyon TL** | – |
| **Likidite** | < **0,15** | < **0,5** |

Alt Pazar için ayrıca eşik değer yoktur; Yıldız ve Ana Pazar kriterlerini sağlamayan paylar buradadır.

**Kural:** Her pay, bulunduğu pazarın **tüm kriterlerini** sağlamak zorundadır. İstisnalar (FDO'su **%5'ten büyük** paylar için):

| İstisna | Sonuç |
|---|---|
| FDPD > **3 milyar TL** ve likidite < **0,1** | Diğer kriterlere bakılmaksızın **Yıldız Pazar** |
| Alt Pazardaki pay: FDPD > **450 milyon TL** ve temettü getirisi > **%10** | Diğer kriterlere bakılmaksızın **Ana Pazar** |
| Alt Pazardaki pay: FDPD > **750 milyon TL** ve likidite < **0,2** | Diğer kriterlere bakılmaksızın **Ana Pazar** |

> [!dikkat] Bir dönemde Yıldız Pazardan **doğrudan Alt Pazara** ya da Alt Pazardan **doğrudan Yıldız Pazara** geçme koşulunu sağlayan paylar, bir sonraki dönemde tekrar değerlendirilmek üzere **Ana Pazara** alınır. İki basamak birden atlanmaz.

- **Genel müdür**; payın diğer piyasa koşullarını, alınmış tedbirleri ve süren incelemeleri dikkate alarak payı **değerlendirme dışı bırakabilir** veya pazarında **değişiklik yapmayabilir**.

---

## 3. Kriterlerin açıklamaları
| Kriter | Anlamı |
|---|---|
| **PD** | Şirketin **tüm sermayesi** üzerinden toplam piyasa değeri |
| **FDPD** | Dönem sonu FD pay adedi × **bir yıllık düzeltilmiş kapanış fiyatlarının ortalaması** |
| **FDO** | Fiili dolaşımdaki payların şirket sermayesine oranı (Kurul kriterlerine göre) |
| **İmtiyaz** | YK üyesi seçme veya aday önerme, kâr payı, tasfiye payı, rüçhan, oy gibi haklarda bir paya farklı veya üstün hak tanınması. İmtiyaz sayılıp sayılmayacağına **Borsa Genel Müdürlüğü** karar verir. |
| **Yerli fon** | MKK verilerine göre payın SPK denetimindeki **yatırım fonları** ve **emeklilik yatırım fonları** portföyündeki kısmının **son bir yıllık ortalama piyasa değeri** |
| **Likidite** | **1 milyon TL** işlem hacmiyle payda oluşacak ortalama günlük fiyat değişim oranının mutlak değeri |
| **Temettü getirisi** (ek kriter) | (Son **3 yıllık** net nakit temettü toplamı) / (dönem sonu piyasa değeri) × 100 |

### Likidite kriteri: Amihud illikidite ölçümü
- Günlük fiyat değişiminin (yüzde) mutlak değeri ÷ o günkü işlem hacmi oranlarının **aritmetik ortalaması** × **1.000.000**.
- İşlem hacmine **özel işlem bildirimleri dâhil edilmez**.
- Değer ne kadar **küçükse** pay o kadar **likittir**. Bu yüzden kriterler "**<**" işaretiyle verilir.

> [!ezber] **FDO'su %5'in altında** olan şirketler **PÖİP**'e alınabilir.

> [!bilgi] SPK'nın 05.06.2026 tarihli ve 2026/35 sayılı Bülteni: FDO hesabına dâhil edilmeyen pay sahiplerinin serbest veya özel fonlardaki katılma payları oranında isabet eden ihraççı payları da FDO dışında tutulur. FD pay adedi ve oranı **15.06.2026**'dan itibaren **MKK** tarafından **günlük** hesaplanır.

---

## 4. Değerlendirme esasları
- Değerlendirme, **endeks dönemleriyle uyumlu** olarak **yılda en az iki kez**, her kriterin **son bir yıllık ortalamaları** kullanılarak yapılır.
- Yeni işlem görmeye başlayan şirketler, işlem görmeye başladıkları tarihten itibaren **3 ay** içindeki değerlendirmelere **dâhil edilmez**; mevcut pazarlarında kalır.
- İlk kez değerlendirilecek yeni şirketlerin **ilk 10 iş gününün** verisi likidite hesabına **dâhil edilmez**.
- Dönemdeki **birleşme ve bölünmelerde**, pay dağıtımının tamamlandığı tarihten sonraki veriler kullanılır.
- Dönemin tamamında işlem görmemiş paylar, işlem gördüğü **gün sayısı** dikkate alınarak değerlendirilir.
- Birden fazla pay grubu işlem görüyorsa FDPD **her pay grubu için ayrı ayrı** hesaplanır.

---

## 5. Pazarlarda uygulanan işlem esasları
| İşlem esası | Yıldız | Ana | Alt | YİP | PÖİP |
|---|---|---|---|---|---|
| **İşlem yöntemi** | Sürekli | Sürekli | Sürekli | **5 kez tek fiyat** | **5 kez tek fiyat** |
| **Açığa satış ve kredili işlem** | Var | Var | **Yok** | Yok | Yok |
| **Brüt takas** | Yok | Yok | **Var** | Var | Var |
| **Özkaynak oranı** | **%90** | **%75** | %0 | %0 | %0 |
| **Açık takas pozisyonu / özkaynak** | **%20** | **%50** | %100 | %100 | %100 |
| **Fiyat marjı** | **%20** | **%15** | **%10** | %10 | %10 |
| **Açığa satış yukarı adım kuralı** | **Yok** | **Var** | – | – | – |
| **Devre kesici tetikleme oranı** | **%10** | **%7,5** | **%5** | – | – |
| **Devre kesici sonrası emir toplama** | **5 dk** | 15 dk | 15 dk | – | – |
| **Devre kesici sonrası eşleştirme** | 2 dk | 2 dk | 2 dk | – | – |
| **Tek fiyat emir toplamada bilgi yayını kısıtlaması** | Yok | Yok | **Var** | Var | Var |
| **Açılışta son 5 dk iptal, kötüleştirme, miktar azaltımı** | Yok | Yok | Yok | Yok | Yok |
| **Açılışta piyasa ve piyasadan limite emir** | **Var** | **Var** | Yok | Yok | Yok |

- **Özkaynak oranı:** Payın kredili alım, açığa satış, ödünç işlemlerinde özkaynak hesabında hangi orana kadar **özkaynak olarak kabul edileceği**.
- **Açık takas pozisyonu / özkaynak:** Takas gerçekleşene kadar o pay için asgari ne oranda **özkaynak bulundurulması** gerektiği.
- Tek fiyat yöntemindeki "5 kez" sayısına **açılış ve kapanış seansı fiyat belirleme** dâhildir; **kapanış fiyatından işlemler** dâhil değildir.

> [!dikkat] **İş Bankası** payları (ISATR, ISBTR, ISKUR) **5 kez tek fiyatla** işlem görür. Kredili alım ve açığa satış yapılamaz; ATP/özkaynak **%100**, özkaynak oranı **%0**; açılışta piyasa ve piyasadan limite emir kullanılamaz. **ISKUR**'da fiyat marjı **%50**'dir.

- Kurulun kredili alım ve açığa satış düzenlemelerinde malvarlığı ve ödeme gücüne göre **teminatsız alım emri** kabul eden istisnalar **yalnız Yıldız Pazar** paylarında uygulanır.
- SPKn'ye tabi **kolektif yatırım kuruluşları** ve **emeklilik fonlarının** işlemlerinde bu istisnalar **Ana Pazar** paylarında da uygulanabilir.

---

## 6. YÜFP, Emtia Pazarı ve YİP
### YÜFP
- İşlem görebilenler: **BYF** katılma belgeleri, **varantlar**, **sertifikalar**, **sahipliğe dayalı kira sertifikaları**, **GMS**, **GMF** ve **GSF**.
- İşlem yöntemi **sürekli işlem**; piyasa yapıcılı sürekli işlem ve tek fiyat da piyasa yapıcılık esaslarıyla uygulanır.
- Yorumlama ve açıklık olmayan hususlarda karar yetkisi **genel müdürdedir**.

### Emtia Pazarı
Borsada işlem görmesi uygun görülen **emtia sertifikalarının** işlem gördüğü pazar.

### Yakın İzleme Pazarı (YİP)
**Amaç:** Olağan dışı durumlar, kamuyu aydınlatmaya gerekli özenin gösterilmemesi veya kottan çıkarılmaya yol açabilecek gelişmeler nedeniyle **izleme ve inceleme kapsamına** alınan şirketlerin paylarının, sürekli gözetim ortamında işlem görebileceği organize bir pazar oluşturmak ve yatırımcılarına **likidite** sağlamak.

- Paylar **yönetim kurulu kararıyla** YİP'e alınabilir.
- Yönetim kurulu, almadan önce şirketi **uyarabilir**, **süre verebilir** veya başka tedbirler alabilir.

---

## 7. Girişim Sermayesi Pazarı (GSP)
**Halka açık olmayan** ortaklıkların sermaye artırımıyla çıkarıp **halka arz edilmeksizin nitelikli yatırımcılara** sattığı paylar ile YK'nın uygun gördüğü diğer araçların **yalnızca nitelikli yatırımcılar arasında** işlem gördüğü pazar.

- YÜFP ve Emtia Pazarında işlem görebilecek araçlardan **nitelikli yatırımcıya ihraç edilenler** de burada işlem görür.
- Nitelikli yatırımcı tanımı: **III-39.1** Yatırım Kuruluşları Tebliği.
- Borsa üyesi, müşterisinin nitelikli yatırımcı olduğunu **bilmek ve gerektiğinde belgelemek** zorundadır; aksi hâlde hukuki ve maddi sorumluluk **üyeye** aittir.
- GSP'deki paylar **Ana Pazar** işlem esaslarına tabidir.
- İlk işlem günü baz fiyat için **ihraç fiyatı** esas alınır.

---

## 8. Piyasa Öncesi İşlem Platformu (PÖİP)
SPK'nın **03.06.2011** tarihli kararıyla, SPKn **16/2** kapsamında **halka açık** sayılan ama payları borsada **işlem görmeyen** ortaklıkların payları için, Kotasyon Yönergesi md. 4/1'e dayanılarak kuruldu.

**İşlem görme esasları:**
a) **Tek fiyat yöntemi**; günde **5 kez** fiyat belirlenir; Pay Piyasası seans saatleri içinde.
b) İlk gün paylar **serbest marjla** başlar ve ilk işlem gerçekleşene kadar serbest marj uygulanır. Sonraki emir toplama bölümünde **bir önceki işlem fiyatı** baz fiyat olur. FDO'su %5'in altında kaldığı için diğer pazarlardan PÖİP'e alınan paylar ise, varsa **son işlem fiyatına** göre oluşan baz fiyatla başlar.
c) **Brüt takasa** tabidir.
ç) **Açığa satış ve kredili işlem yapılamaz.**
d) Sermaye artırımı, YPAH, temettü ve genel kurul bilgilerini KAP'a **zamanında ve eksiksiz** gönderen şirketler için **YPAH sırası açılır**. YPAH, birincil piyasa, resmî müzayede ve temerrüt işlemlerinde **sürekli işlem** yöntemi uygulanır.
e) Toptan alış satışlarda BİAŞ'ın ilgili düzenlemeleri geçerlidir.
f) İşlem verileri **Borsa Bülteninde** gösterilir.

---

## Bugünün özeti
- Yıldız: PD > **6 milyar**, FDPD > **1 milyar**, yerli fon > **30 milyon**, likidite < **0,15**. Ana: PD > **1 milyar**, FDPD > **400 milyon**, likidite < **0,5**. İkisinde de FDO > **%10**.
- İstisnalar FDO > **%5** olanlarda: **3 milyar + 0,1** → Yıldız; **450 milyon + %10 temettü** veya **750 milyon + 0,2** → Ana.
- İki basamak atlanmaz; ara durak **Ana Pazar**.
- Likidite **Amihud** yöntemiyle; özel işlem bildirimleri dâhil edilmez. FDO < **%5** → **PÖİP**.
- Değerlendirme **yılda en az 2 kez**; yeni şirketler **3 ay** dâhil edilmez; ilk **10 iş günü** likiditeye girmez.
- Fiyat marjı Yıldız **%20**, Ana **%15**, Alt/YİP/PÖİP **%10**. Devre kesici **%10 / %7,5 / %5**.
- Alt, YİP, PÖİP: **brüt takas**, açığa satış ve kredi **yok**; YİP ve PÖİP **5 kez tek fiyat**.
- GSP yalnız **nitelikli yatırımcılar**; ilk gün baz fiyat **ihraç fiyatı**.
`,
  sorular: [
    {
      s: "Pazarları belirleme kriterlerine göre **Yıldız Pazar** için aranan **fiili dolaşımdaki payların piyasa değeri (FDPD)** eşiği nedir?",
      c: ["400 milyon TL'den büyük", "750 milyon TL'den büyük", "1 milyar TL'den büyük", "3 milyar TL'den büyük", "6 milyar TL'den büyük"],
      d: 2,
      a: "Yıldız Pazar için FDPD > **1 milyar TL**, PD > **6 milyar TL** aranır. Ana Pazar için FDPD > **400 milyon TL**, PD > **1 milyar TL**'dir. 3 milyar TL, likiditesi 0,1'den küçük paylar için Yıldız Pazar istisnasıdır.",
      k: "1006 resmi not s. 36"
    },
    {
      s: "Alt Pazarda işlem gören ve FDO'su %5'ten büyük olan bir pay, diğer kriterlere bakılmaksızın aşağıdaki durumlardan hangisinde **Ana Pazara** alınır?",
      c: ["FDPD'si 300 milyon TL'nin üstünde ve likiditesi 0,5'ten küçükse", "FDPD'si 450 milyon TL'nin üstünde ve temettü getirisi %10'dan büyükse", "Piyasa değeri 1 milyar TL'nin üstünde ve yerli fon değeri 30 milyon TL'yi aşıyorsa", "FDPD'si 750 milyon TL'nin üstünde ve likiditesi 0,5'ten büyükse", "FDPD'si 3 milyar TL'nin üstünde ve temettü getirisi %5'ten büyükse"],
      d: 1,
      a: "Alt Pazardaki paylardan FDPD'si **450 milyon TL**'nin üstünde ve temettü getirisi **%10**'dan büyük olanlar ya da FDPD'si **750 milyon TL**'nin üstünde ve likiditesi **0,2'den küçük** olanlar diğer kriterlere bakılmaksızın Ana Pazara alınır.",
      k: "1006 resmi not s. 36"
    },
    {
      s: "Bir değerlendirme döneminde **Yıldız Pazardan Alt Pazara** geçme koşullarını sağlayan bir pay için ne yapılır?",
      c: ["Bir sonraki dönemde tekrar değerlendirilmek üzere Ana Pazara alınır", "Yakın İzleme Pazarına alınarak gözetim altında tutulur", "Yıldız Pazarda bir dönem daha kalmaya devam eder", "Doğrudan Alt Pazara alınır ve bir yıl boyunca orada kalır", "Piyasa Öncesi İşlem Platformuna alınır ve brüt takasa tabi olur"],
      d: 0,
      a: "Yıldız Pazardan Alt Pazara veya Alt Pazardan Yıldız Pazara geçme koşulunu sağlayan paylar, bir sonraki dönemde tekrar değerlendirilmek üzere **Ana Pazara** alınır.",
      k: "1006 resmi not s. 36"
    },
    {
      s: "Pazar değerlendirmelerinde kullanılan **likidite kriteri** ile ilgili hangisi **yanlıştır**?",
      c: ["Amihud illikidite ölçümü yöntemi kullanılır", "1 milyon TL işlem hacmiyle oluşacak ortalama günlük fiyat değişim oranının mutlak değeridir", "Hesaplanan değer ne kadar küçükse pay o kadar likittir", "İşlem hacmine özel işlem bildirimleri de dâhil edilir", "Yeni şirketlerin ilk 10 iş gününe ait verisi hesaplamaya dâhil edilmez"],
      d: 3,
      a: "Likidite hesabında **işlem hacmine özel işlem bildirimleri dâhil edilmez**. Değer, günlük fiyat değişimi mutlak değerinin işlem hacmine oranlarının ortalamasının **1.000.000** ile çarpımıdır.",
      k: "1006 resmi not s. 37"
    },
    {
      s: "Payları Borsada **yeni işlem görmeye başlayan** şirketler pazar değerlendirmelerine ne zamandan itibaren dâhil edilir?",
      c: ["Başladıkları tarihten sonraki 3 ay içinde yapılan değerlendirmelere alınmazlar", "İşlem görmeye başladıkları tarihi takip eden 1 ay geçtikten sonraki ilk değerlendirmede", "İlk işlem gününden itibaren hemen", "İşlem görmeye başladıkları tarihi takip eden 6 ay sonra", "İlk yıl sonu bağımsız denetimli finansal tabloları açıklandıktan sonra"],
      d: 0,
      a: "Yeni şirketler, işlem görmeye başladıkları tarihi takip eden **3 ay** içindeki değerlendirmelere dâhil edilmez ve mevcut pazarlarında kalır. Değerlendirme **yılda en az iki kez** yapılır.",
      k: "1006 resmi not s. 37"
    },
    {
      s: "**Ana Pazarda** uygulanan işlem esasları ile ilgili hangisi doğrudur?",
      c: ["Fiyat marjı %20, devre kesici tetikleme oranı %10'dur; yukarı adım kuralı yoktur", "Fiyat marjı %15, devre kesici tetikleme oranı %7,5'tir; yukarı adım kuralı vardır", "Brüt takas uygulanır ve bu pazarda açığa satış ile kredili işlem yapılamaz", "Günde 5 kez tek fiyat yöntemiyle işlem görür", "Fiyat marjı %10, devre kesici sonrası emir toplama süresi 5 dakikadır"],
      d: 1,
      a: "Ana Pazarda fiyat marjı **%15**, devre kesici tetikleme oranı **%7,5**'tir ve **açığa satış yukarı adım kuralı** uygulanır. Yıldız Pazarda marj **%20**, tetikleme **%10** ve yukarı adım kuralı yoktur.",
      k: "1006 resmi not s. 38"
    },
    {
      s: "Aşağıdakilerden hangisi **Yapılandırılmış Ürünler ve Fon Pazarında (YÜFP)** işlem görebilecek araçlardan **değildir**?",
      c: ["Borsa yatırım fonu katılma belgeleri", "Yatırım kuruluşu varantları", "Gayrimenkul sertifikaları", "Girişim sermayesi yatırım fonları", "Emtia sertifikaları"],
      d: 4,
      a: "YÜFP'de BYF, varant, sertifika, sahipliğe dayalı kira sertifikası, GMS, GMF ve GSF işlem görür. **Emtia sertifikaları** ise **Emtia Pazarında** (nitelikli yatırımcıya ihraç edilenler GSP'de) işlem görür.",
      k: "1006 resmi not s. 39"
    },
    {
      s: "**Piyasa Öncesi İşlem Platformu (PÖİP)** ile ilgili hangisi **yanlıştır**?",
      c: ["Halka açık olup payları borsada işlem görmeyen ortaklıkların payları için kurulmuştur", "Tek fiyat yöntemi uygulanır ve günde 5 kez fiyat belirlenir", "Paylar brüt takas uygulamasına tabidir", "İşlemlere ait veriler Borsa Bülteninde gösterilir", "Paylarda açığa satış yapılabilir ancak kredili işlem yapılamaz"],
      d: 4,
      a: "PÖİP'teki paylar **açığa satışa ve kredili menkul kıymet işlemlerine konu edilemez**. Platform, SPKn 16/2 kapsamında halka açık sayılan ortaklıklar için kurulmuştur; tek fiyatla günde 5 kez işlem görür ve brüt takasa tabidir.",
      k: "1006 resmi not s. 40-41"
    }
  ]
});
