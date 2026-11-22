SPL.gun("1004", 14, {
  okuma: `
## Bugünün haritası
TMK Tebliğinin ikinci ve son günü. Teminat havuzunun her zaman yeterli kalmasını sağlayan **uyum ilkeleri**, bunları kontrol eden **teminat sorumlusu** ve işler kötüye giderse uygulanacak **tedbirler**:

1. Teminat varlıkların değiştirilmesi ve **dışarıdan hizmet alımı**
2. **Üç teminat uyum ilkesi**: nominal değer, nakit akımı, net bugünkü değer
3. **İTMK'ya özel** hükümler: %80, %50 ve %15
4. **Stres testi**: 300 / 150 baz puan, %30 kur
5. **İhlal** hâlinde 1 ay kuralı
6. **Teminat sorumlusu**
7. **Tedbirler**: ödeme yapılamaması ve **idareci** atanması
8. Kamuyu aydınlatma

---

## 1. Teminat varlıkların yönetimi
- Teminat varlıklardan yapılan tahsilatlar, uyum ilkeleri ihlal edilmedikçe ve ihraççı yükümlülüklerini yerine getirdikçe **serbestçe kullanılabilir**.
- Nitelikleri **sonradan kaybeden** veya hiç taşımayan varlıklar uygun olanlarla **değiştirilir**. Yeni varlık eklenmeden çıkarılmaları, ancak uyum ilkeleri ihlal edilmez ve ihraççı yükümlülüklerini yerine getirirse mümkündür. **İTMK**'da bu koşullar sağlanıyorsa bu varlıklar defterde **kalmaya devam edebilir**.
- Kredi kalitesini korumak veya artırmak için deftere **yeni varlık eklenebilir** veya mevcutlar değiştirilebilir.
- İhraççı, ihlal veya ödememe hâlinde tahsilatların **ayrı bir hesaba** aktarılmasını sağlayacak tedbirleri sözleşmelerle almak ve izahnamede açıklamak zorundadır.
- Ayrıca ipotekli ve taşıt kredilerindeki **sigortaların** düzenli yapıldığını izler.

### Dışarıdan hizmet alımı
İhraççının sorumluluğu **devam etmek** kaydıyla:
| Görev | Kime devredilebilir? |
|---|---|
| Teminat varlıkların **idaresi** | **Hizmet sağlayıcı** (banka veya İFK) |
| Teminat varlıklara ilişkin **nakdin yönetimi** | **Nakit yöneticisi** (banka veya İFK) |
| İdare görevlerinin **bir kısmı** | Kurulca uygun görülen **uzmanlaşmış kuruluşlar**; satıştan önce Kurula bildirilir ve izahnamede açıklanır |

İhraççı hizmet alınan kuruluşun teknik donanım, mali güç ve insan kaynağı yeterliliğini tespit eder, iş akışlarını ve **iç kontrol** mekanizmasını kurar. Kurul bu kuruluşları her yönüyle **denetleyebilir**.

---

## 2. Teminat uyum ilkeleri
> [!ezber] **Üç uyum ilkesi:**
> 1. **Nominal değer uyumu:** Teminat varlıkların nominal değeri ≥ TMK'nın nominal değeri.
> 2. **Nakit akımı uyumu:** Önümüzdeki **1 yıl** içinde teminat varlıklardan beklenen faiz ve getiri ≥ aynı dönemde yükümlülüklerden doğacak benzer ödemeler.
> 3. **Net bugünkü değer (NBD) uyumu:** Teminat varlıkların NBD'si, yükümlülüklerin NBD'sinden **belirli bir oranda fazla** olmalı (**teminat fazlası**).

**Nominal değer hesabında:** kredilerin **bakiye anaparası**, iskontolu borçlanma araçlarının **ihraç fiyatı**, primli olanların **nominal değeri** alınır. **Türevlerin sözleşme değeri dahil edilmez.**

### NBD uyumu: VTMK ve İTMK
| | VTMK | İTMK |
|---|---|---|
| Teminat fazlası | Varlık türüne göre **Tebliğ Ek 4'teki oranlardan** az olmamak üzere ihraççı belirler | İhraççı başlangıçta belirler; **en az %2** |
| Farklı varlıklar | Ek 4 oranlarının **ağırlıklı ortalaması** | — |
| Stres testi | Gerekiyorsa tüm senaryolarda Ek 4 oranları sağlanır | **Tüm senaryolarda** belirlenen fazla (≥ %2) sağlanır |

**Zorunlu teminat fazlası** ikame varlıklardan oluşur ve deftere kaydedilir. Bu ikame varlıklar **%15 ikame sınırının** hesabında dikkate alınmaz. NBD'ler **TMS** değerleme esaslarına göre belirlenir.

---

## 3. İTMK'ya özel hükümler
Uyum hesaplarında şunlar **dikkate alınmaz**:
- teminat varlık **niteliğini kaybeden** kredi ve alacaklar,
- **konut finansmanı** kredilerinde teminat değerinin **%80'ini aşan** kısım,
- **ipotekli ticari** kredilerde teminat değerinin **%50'sini aşan** kısım.

> [!bilgi] **Örnek:** Değeri 1.000.000 TL olan bir konut için verilen 900.000 TL'lik kredinin uyum hesabına yalnızca **800.000 TL**'si (değerin %80'i) girer. Aynı değerde ipotekli bir ticari kredide sınır **500.000 TL** (%50) olurdu.

- %80 ve %50 sınırları teminat değerindeki değişimlere göre **en az yılda bir** gözden geçirilir ve **en son** tespit edilen değer kullanılır.
- Konut fiyatları için **genel kabul görmüş bir endeks** varsa değer değişimi bu endeksle izlenir. Fiyatlar düşerse taşınmaz değeri ortalama değişim oranı kadar **düşmüş kabul edilir**. Bir taşınmazda piyasadan belirgin biçimde fazla düşüş emaresi varsa **yeni değerleme** zorunludur.
- İTMK varlıklarının NBD'si beklenen nakit akımları, tahmini **erken ödeme oranları** ve varsa erken ödeme ücretleri dikkate alınarak hesaplanır. Yöntemler teminat sorumlusuna ve Kurula bildirilir; Kurul belirli bir yöntem şart koşabilir.

> [!ezber] **İTMK'da iki %15 sınırı:**
> - **Deniz ve hava taşıtları dışındaki ipotekli ticari krediler**in NBD'si, teminat varlıkların toplam NBD'sinin **%15'ini** aşamaz.
> - **İkame varlıkların** NBD'si, toplam NBD'nin **%15'ini** aşamaz.

### Uyumun kontrolü
İhraççı uyumu teminat defterindeki **her değişiklikte** ve **en az ayda bir** kontrol eder. TMK sahiplerini korumak için **ilave uyum ilkeleri** ve yaptırımlar belirleyebilir; bunların teminat sorumlusunca nasıl kontrol edileceği sözleşmede düzenlenir.

---

## 4. Stres testi
NBD uyumunun **faiz ve kur** değişimlerine duyarlılığını ölçer.

| İhraç | Stres testi zorunlu mu? |
|---|---|
| **VTMK** | Yalnızca VTMK ile teminat varlıkların **para birimi** veya **faiz türü** (sabit/değişken) **farklıysa** |
| **İTMK** | **Her durumda** |

**Yöntem:**
- Nakit akımları, ilgili para biriminin **swap oranlarından** elde edilen getiri eğrisiyle iskonto edilir. Uygun vade yoksa faiz **türetilir**; en son vadeyi aşan vadelerde son vadenin faizi kullanılır.
- Beklenen nakit akımlarında erken ödeme oranları (faiz farkı ve geçmiş istatistiklerle) ve erken ödeme ücretleri dikkate alınır. **Değişken faizli** kredilerde bugünkü faizin vade boyunca **değişmeyeceği** varsayılır.
- İkame varlıklar ve türevler **TMS değerleriyle** alınır.

> [!ezber] **Şok büyüklükleri:**
> - Getiri eğrisi **paralel kaydırılır**: **TL** faizleri **±300 baz puan**, **yabancı para** faizleri **±150 baz puan**. Sonuç negatif çıkarsa faiz **sıfır** alınır.
> - **Kur:** TCMB gösterge **döviz alış kuru ±%30**.
> - Zorunlu ihraçlarda test **en az ayda bir** yapılır.

---

## 5. Uyum ilkelerinin ihlali
1. İhraççı ihlali tespit edince **ivedilikle teminat sorumlusuna** bildirir.
2. İhlalin tespitinden itibaren **1 ay** içinde varlıklar yeniden yapılandırılarak, TMK'lar **geri alınarak** veya benzeri tedbirlerle uyum yeniden sağlanır ve **teminat sorumlusu** bunu teyit eder.
3. İhlalden uyumun yeniden sağlanmasına kadar teminat varlıklardan yapılan tahsilatlar **ayrı bir hesapta** biriktirilir ve yalnızca bu sürede **muaccel** olan yükümlülükler için kullanılır.
4. İhlal süresince **yeni tertip TMK ihraç edilemez**.

Teminat sorumlusunun kontrolü sonunda uyum sağlanmışsa ayrı hesaptaki nakit **ihraççıya** aktarılır; sağlanmamışsa teminat sorumlusu ihraççıya **bildirimde** bulunur.

---

## 6. Teminat sorumlusu
**Kimdir?** Teminat defteri ve varlıkların kontrolünden sorumlu, sermaye piyasasında **bilgi sistemleri bağımsız denetimine yetkili** bir **bağımsız denetim kuruluşudur**.

**Atanma:**
- **TMK ihracından önce yazılı sözleşmeyle** belirlenir; ihraççının **yönetim kurulu** seçebilir.
- İhraççının finansal tablolarını **denetleyen kuruluş** ve onunla aynı uluslararası ağa bağlı Türkiye'deki kuruluşlar **seçilemez**.
- Sözleşme ancak **haklı gerekçeyle**, gerekçeler Kurula yazılı iletilip **Kurulun uygun görüşü** alınarak sona erdirilebilir. Bilgiler yeni sorumluya devredilmek üzere ihraççıya teslim edilir.
- Kurul, nitelikleri kaybeden veya ihmali ya da kusuru olan teminat sorumlusunun **değiştirilmesini isteyebilir** veya **resen değiştirebilir**.
- **ISRS 4400**'e uyar ve görev sorumluluğunu **başkasına devredemez**.

**Görevleri:**
- teminat defterinin uygun varlıklarla oluşturulduğunu ve başlangıçta uyum ilkelerinin sağlandığını incelemek,
- elektronik defterde bilgi sistemindeki **çapraz kontrolleri** ve yetkilendirmeleri incelemek; raporu ihraççıya sunmak ve **bir örneğini Kurula** göndermek,
- deftere ekleme, çıkarma ve değişiklik kayıtlarını belgeleriyle **teyit** etmek,
- uyum ilkelerine uygunluğu ve **stres testlerinin doğruluğunu** incelemek,
- ihlal ve ödememe hâllerinde **1 ay** içinde kontrolleri yapmak ve bildirimde bulunmak.

> [!ezber] **Uyum raporu dönemleri:** halka arzda **en az üçer aylık**, halka arz edilmeksizin veya yurt dışı ihraçta **en az altışar aylık** dönemler itibarıyla hazırlanır ve dönem sonunu izleyen **20 iş günü** içinde ihraççıya iletilir.

**Örnekleme:** Varlıkların kalan ortalama birim anaparası **20.000 TL'den düşük** veya sayıları **500'den fazlaysa** incelemeler **en az %95 güvenilirlik** düzeyinde örneklemle yapılır.

**Yetkileri:** İhraççıdan ve bağımsız denetim, değerleme ve derecelendirme kuruluşları ile sicillerden her türlü bilgi ve belgeyi isteyebilir. Bilgiye erişim engellenirse **derhal Kurula** bildirir. Aykırılık tespit ederse giderilmesini **ihraççıdan talep eder**. Kurul, varlıkların defterden çıkarılmasını **teminat sorumlusunun onayına** bağlayabilir.

---

## 7. Tedbirler
### İhraççının yükümlülüklerini yerine getirememesi
1. Durum ivedilikle **teminat sorumlusuna** bildirilir.
2. Ödenmeyen tarihten itibaren tahsilatlar **ayrı hesapta** biriktirilir ve yalnızca **muaccel** yükümlülükler için kullanılır.
3. **1 ay** içinde teminat sorumlusu; ayrı hesabı, kullanımı ve teminatların yükümlülükleri karşılayıp karşılamadığını tespit eder ve ihraççıya bildirir.
4. Şartlar sağlanmıyorsa varlıkların **esas borçlularına**, ödemeleri **ihraççıya ait olmayan bir hesaba** yapmaları için yazı gönderilir veya Kurulca uygun görülen muadil tedbir alınır.

> [!dikkat] **Çift güvence:** Ödeme yapılamazsa, alacağı teminatlarla karşılanmayan TMK sahipleri ve türev karşı tarafları, teminatların tahsilini **beklemeden** ihraççının **diğer malvarlığına** da başvurabilir.

### İdareci atanması
**Ne zaman?** İhraççının yönetiminin veya denetiminin **kamuya devri**, **faaliyet izninin kaldırılması** veya **iflası** hâllerinde.

**Kim?** İhraççı niteliğindeki başka bir **banka veya İFK**, **teminat sorumlusu**, başka bir **bağımsız denetim kuruluşu** veya Kurulca uygun görülen uzmanlaşmış bir kuruluş.

**Görevi ve yetkileri:**
- Teminat varlıkları **yükümlülükleri üstlenmeden** idare eder ve gelirleri yükümlülükler için kullanır. Gelir **önce TMK sahiplerine** ve türev karşı taraflarına ödenir.
- Varlıkları **aktif yönetebilir**: satabilir, yeni varlık alabilir, kredi kullanabilir, **repo** yapabilir.
- **Kurulun uygun görüşüyle** varlıkları ve yükümlülükleri başka bir banka veya İFK'ya **devredebilir**. Devralan mülkiyeti edinir ve ödemelerden sorumlu olur; yükümlülükler ödendikten sonra artan varlıklar **devralanındır**.
- Devir olmaz ve gelir yetmezse idareci ödemelerden **sorumlu değildir**.
- TMK sahiplerinin menfaati gerektirirse **erken itfayı Kurula önerebilir**; Kurul uygun görürse varlıkları nakde çevirip erken itfayı yürütür.
- SPKn 59/5 kapsamında **Yatırımcı Tazmin Merkezine** yapılacak ödeme idareciye yapılır.

---

## 8. Kamuyu aydınlatma
İhraççı tarafından **internet sitesinde ve KAP'ta** ilan edilir:
| Bilgi | Süre |
|---|---|
| Uyum raporu ve teminat sorumlusu bildirimleri | İhraççıya iletildiği **gün** |
| Tahsilat ve ödemeleri gösteren **üçer aylık yatırımcı raporu** (Ek 5) | Dönem sonunu izleyen **6 iş günü** |
| Ödeme yükümlülüğünün yerine getirilememesi | Durumun **ortaya çıktığı tarih** |

Halka arz edilmeksizin ihraçta ilanlar **MKK aracılığıyla** iletilir ve sitede yayımlanır; bilgi **6 iş günü** içinde Kurula verilir. Yurt dışı ihraçlarda yöntem ihraççıya bırakılmıştır.

---

## Bugünün özeti
- Varlık idaresi hizmet sağlayıcıya, nakit yönetimi nakit yöneticisine (banka veya İFK) devredilebilir; ihraççının sorumluluğu sürer.
- Üç uyum ilkesi nominal değer, 1 yıllık nakit akımı ve NBD'dir. İTMK'da teminat fazlası en az %2'dir. Türevlerin sözleşme değeri nominal hesaba girmez.
- İTMK hesabında konutta değerin %80'i, ipotekli ticari kredide %50'si dikkate alınır. Ticari krediler ve ikame varlıklar ayrı ayrı toplam NBD'nin %15'ini aşamaz.
- Stres testi İTMK'da her zaman, VTMK'da para birimi veya faiz türü farklıysa yapılır. TL ±300 bp, döviz ±150 bp, kur ±%30 ve en az ayda bir.
- İhlalde uyum 1 ay içinde yeniden sağlanır. Tahsilatlar ayrı hesapta biriktirilir ve yeni tertip çıkarılamaz.
- Teminat sorumlusu ihraçtan önce atanan, bilgi sistemleri denetimine yetkili bir bağımsız denetim kuruluşudur; ihraççının kendi denetçisi olamaz. Rapor halka arzda üç ayda, diğerlerinde altı ayda bir, 20 iş günü içinde verilir.
- Ödeme yapılamazsa TMK sahipleri ihraççının diğer malvarlığına da başvurabilir. İflas, izin iptali veya kamuya devirde Kurul idareci atar.
`,
  sorular: [
    {
      s: "Teminat uyum ilkelerinden **nominal değer uyumu** hesaplanırken aşağıdakilerden hangisi **dikkate alınmaz**?",
      c: ["Kredilerin bakiye anapara tutarları", "İskontolu borçlanma araçlarının ihraç fiyatı", "Primli borçlanma araçlarının nominal değeri", "Türev araçların sözleşme değeri", "İkame varlıkların nominal değerleri"],
      d: 3,
      a: "Nominal değer uyumunda bakiye anapara, iskontolu araçlarda ihraç fiyatı ve primli araçlarda nominal değer alınır. **Türev araçların sözleşme değeri** nominal değer hesabına **dahil edilmez**.",
      k: "1004 resmi not s. 67"
    },
    {
      s: "**Nakit akımı uyumu** hangi dönemi esas alır?",
      c: ["Hesaplama tarihini izleyen 3 ay", "Hesaplama tarihini izleyen 6 ay", "Hesaplama tarihini izleyen 1 yıl", "Hesaplama tarihini izleyen 3 yıl", "TMK'nın vade sonuna kadarki tüm dönem"],
      d: 2,
      a: "Nakit akımı uyumuna göre hesaplama tarihini izleyen **1 yıl** içinde teminat varlıklardan beklenen faiz ve getiriler, aynı dönemde yükümlülüklerden doğacak benzer ödemelerden **az olamaz**.",
      k: "1004 resmi not s. 67"
    },
    {
      s: "İTMK ihraçlarında net bugünkü değer uyumu için ihraççının belirleyeceği **teminat fazlası** oranı en az kaç olmalıdır?",
      c: ["%2", "%3", "%5", "%10", "%15"],
      d: 0,
      a: "İTMK'da teminat varlıkların NBD'si yükümlülüklerin NBD'sinden ihraççının belirleyeceği oranda fazla olmalıdır ve bu oran **%2'den az olamaz**. Stres testi senaryolarının tümünde de sağlanmalıdır.",
      k: "1004 resmi not s. 67"
    },
    {
      s: "Değeri **2.000.000 TL** olan bir konut için verilmiş **1.800.000 TL** bakiyeli konut kredisinin, İTMK teminat uyum hesaplamalarında dikkate alınabilecek azami tutarı nedir?",
      c: ["800.000 TL", "1.000.000 TL", "1.200.000 TL", "1.400.000 TL", "1.600.000 TL"],
      d: 4,
      a: "Konut finansmanı kredilerinde teminat değerinin **%80'ini aşan kısım** dikkate alınmaz: 2.000.000 × 0,80 = **1.600.000 TL**. İpotekli ticari kredilerde sınır %50 olurdu.",
      k: "1004 resmi not s. 67"
    },
    {
      s: "TMK ihraçlarında **stres testi** ile ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["VTMK ihraçlarında her durumda stres testi yapılması zorunludur", "TL faiz oranları ±150 baz puan, yabancı para faiz oranları ±300 baz puan kaydırılır", "Kurlar TCMB gösterge döviz alış kuru esas alınarak %30 artırılır ve azaltılır", "Stres testi zorunlu olan ihraçlarda test yılda bir kez yapılır", "Kaydırma sonucu negatif çıkan faiz oranları negatif değeriyle kullanılır"],
      d: 2,
      a: "Kur şoku TCMB gösterge **döviz alış kurunun ±%30**'udur. TL faizleri **±300**, yabancı para faizleri **±150** baz puan kaydırılır. Negatif sonuç **sıfır** alınır. Test **en az ayda bir** yapılır. VTMK'da test yalnızca para birimi veya faiz türü **farklıysa** zorunludur; İTMK'da her durumda zorunludur.",
      k: "1004 resmi not s. 68-69"
    },
    {
      s: "Teminat uyum ilkelerinin ihlal edildiği tespit edilen bir ihraççı için hangisi **yanlıştır**?",
      c: ["İhlal, ihraççı tarafından ivedilikle teminat sorumlusuna bildirilir", "Uyumun, ihlalin tespitinden itibaren 1 ay içinde yeniden sağlanması gerekir", "İhlal süresince teminat varlıklardan yapılan tahsilatlar ayrı bir hesapta biriktirilir", "Uyum yeniden sağlanıncaya kadar ihraççı yeni bir tertip TMK ihraç edemez", "İhlal süresindeki tahsilatlar ihraççının diğer borçlarında serbestçe kullanılır"],
      d: 4,
      a: "İhlal süresince tahsilatlar **ayrı hesapta** biriktirilir ve **yalnızca** bu sürede muaccel olan TMK yükümlülükleri için kullanılır; ihraççının diğer borçları için serbestçe kullanılamaz.",
      k: "1004 resmi not s. 69"
    },
    {
      s: "**Teminat sorumlusu** ile ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["İhraççının finansal tablolarını denetleyen bağımsız denetim kuruluşu teminat sorumlusu olarak seçilmelidir", "Teminat sorumlusu TMK ihracından sonra, ilk uyum raporundan önce belirlenir", "Teminat sorumlusu, görevlerinin yerine getirilmesi sorumluluğunu başka bir kuruluşa devredebilir", "Bilgi sistemleri bağımsız denetimine yetkili bir bağımsız denetim kuruluşudur ve ihraçtan önce sözleşmeyle belirlenir", "Teminat sorumlusu sözleşmesi ihraççı tarafından herhangi bir gerekçe gösterilmeksizin feshedilebilir"],
      d: 3,
      a: "Teminat sorumlusu, bilgi sistemleri bağımsız denetimine yetkili bir **bağımsız denetim kuruluşudur** ve **ihraçtan önce yazılı sözleşmeyle** belirlenir. İhraççının **kendi denetçisi seçilemez**, sorumluluğunu **devredemez** ve sözleşme yalnızca haklı gerekçe ve **Kurulun uygun görüşüyle** sona erdirilebilir.",
      k: "1004 resmi not s. 69-70"
    },
    {
      s: "Hangi durumda Kurul, teminat varlıkları idare etmek üzere bir **idareci** atayabilir?",
      c: ["İhraççının art arda iki çeyrekte zarar açıklaması ve özkaynaklarının azalması hâlinde", "Teminat uyum raporunun ihraççıya bir gün gecikmeli olarak iletilmesi hâlinde", "İhraççının iflası, faaliyet izninin kaldırılması veya yönetiminin kamuya devri hâlinde", "TMK'nın borsadaki işlem hacminin üç ay boyunca belirgin şekilde düşmesi hâlinde", "İhraççının yönetim kurulu başkanının veya genel müdürünün görevden ayrılması hâlinde"],
      d: 2,
      a: "Kurul; ihraççının **yönetim veya denetiminin kamuya devri**, **faaliyet izninin kaldırılması** veya **iflası** hâllerinde idareci atayabilir. İdareci başka bir banka veya İFK, teminat sorumlusu, başka bir bağımsız denetim kuruluşu ya da uzmanlaşmış bir kuruluş olabilir.",
      k: "1004 resmi not s. 71-72"
    }
  ]
});
