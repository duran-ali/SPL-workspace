SPL.gun("1005", 9, {
  okuma: `
## Bugünün haritası
**III-45.1 Yatırım Hizmet ve Faaliyetleri ile Yan Hizmetlere İlişkin Belge ve Kayıt Düzeni Hakkında Tebliğ**. Kısaca *Belge ve Kayıt Tebliği*; Resmi Gazete, 01.08.2015. Bu tebliğ işlemlerin **muhasebeleştirilmesini** düzenlemez; **hangi belgenin düzenleneceğini, nasıl kaydedileceğini ve ne kadar saklanacağını** düzenler.

1. Muhasebe kayıt süreleri ve çerçeve sözleşme
2. **İki bileşenli kimlik doğrulama**
3. Düzenlenecek **belgeler** ve **müşteri emirleri**
4. İşlem sonuç formu ve **hesap ekstresi**
5. Kaldıraçlı ve türev işlemlerde bildirimler
6. Belgelerin **saklanması** ve şikâyet kayıtları

---

## 1. Genel esaslar ve çerçeve sözleşme (md. 4–5)
### Muhasebe kayıt süreleri (md. 4)
| İşlem | Yasal deftere kayıt |
|---|---|
| Takası **merkezi takas kuruluşunda** yapılan işlemler | **Takas süresini takip eden ilk iş günü** içinde |
| **Diğer** işlemler | **İşlem gününü takip eden ilk iş günü** içinde |

Muhasebe kayıtları merkezde veya şubelerde tutulur. **Seri: XI, No: 7 Aracı Kurum Hesap Planı** esas alınır.

### Çerçeve sözleşme (md. 5)
- İşlemden önce sözleşme yapılır ve **müşteriyi tanıma** kuralı uygulanır.
- **Kâğıt sözleşme:** en az bir nüsha düzenlenir; müşteriye **imzalı ve kaşeli suret** verilir.
- **Elektronik sözleşme:** **III-42.1** uygulanır. Kaşeli ve imzalı suret gerekmez. Ancak suret müşteriye verilir, **e-postasına** gönderilir ya da elektronik ortamda **erişilebilir** kılınır.
- Kâğıtla imzalanmış sözleşme sonradan **elektronik ortamda değiştirilebilir**. Bunun için:
  - müşteri buna önceden **onay** vermiş olmalı,
  - **elektronik imza** kullanılmalı ya da müşteri kurumun verdiği **şifreyle** erişmeli,
  - müşteri değişiklikleri okuduğuna ve anladığına dair onayını elektronik ortamda vermeli.
- Her müşteriye **ayrı müşteri numarası** verilir; müşteri onayıyla bu numaraya bağlı **birden fazla hesap** açılabilir.
- **Halka arzda talepte bulunanlara hesap açılması zorunlu değildir.**
- Adres, isim veya unvan değişiklikleri **derhal** Takasbank ve/veya MKK'ya bildirilir.
- Müşteri ve hesap numarası, sözleşme bittikten sonra **10 yıl** geçmeden başkasına verilemez.

---

## 2. Kimlik doğrulama ve işlem güvenliği
Elektronik ortamdaki hizmetlerde **birbirinden bağımsız en az iki bileşenli** kimlik doğrulama uygulanır. Bileşenler şu üç sınıftan **farklı ikisine** ait olmalıdır:

| Sınıf | Örnek |
|---|---|
| Müşterinin **bildiği** | Parola, PIN |
| Müşterinin **sahip olduğu** | Telefon, donanım anahtarı. **Müşteriye özgü** ve **taklit edilemez** olmalıdır |
| Müşterinin **biyometrik** özelliği | Parmak izi, yüz |

- **Bağımsızlık:** Bir bileşenin ele geçirilmesi diğerini tehlikeye atmamalıdır.
- **Tek kullanımlık doğrulama kodu** üretilir:
  - müşteriye atanmış gizli anahtarla imzalanır,
  - koddan kimlik unsurları öğrenilemez,
  - bir koddan başka geçerli kod türetilemez,
  - kod taklit edilemez.

  Anahtarla imzalama mümkün değilse kod **SMS** ile gönderilebilir.
- **Mobil uygulama:** Uygulama **PIN'i** ya da **biyometrik** bileşen, müşteriye özgü bir şifreleme anahtarına erişmek için kullanılıyorsa ve bu anahtarla kurum nezdinde **çevrimiçi doğrulama** yapılıyorsa, iki bileşenli doğrulama yapılmış sayılır.

**Mekanizmanın sağlaması gereken fonksiyonlar:**

- **a)** Başarısız deneme sayısı belli bir sınırı aşarsa **erişimi engellemek**,
- **b)** Hatalı girişte **"böyle bir kullanıcı yok"** ya da **"parola hatalı"** gibi ipucu **vermemek**,
- **c)** **Hareketsiz oturumu** belli süre sonra sonlandırmak veya kilitlemek,
- **ç)** Aynı müşteri için **aynı anda birden fazla oturuma** izin vermemek ve müşteriyi uyarmak. Bilgi güvenliği sorumlusunun onayladığı durumlar istisnadır.

**Risk bildirimleri (md. 6):** Genel risk bildirim formu, ek açıklamalar, değişiklik bildirimleri, beyanlar ve müşteri sınıflandırması bilgilendirmesi **elektronik ortamda** yapılabilir.

---

## 3. Düzenlenecek belgeler (md. 7) ve müşteri emirleri (md. 8–14)
### Belgeler
Faaliyetin türüne göre şu belgeler düzenlenir:

- **a)** Nakit Alındı / Nakit Ödendi Belgesi
- **b)** Müşteri Emir Formu
- **c)** Türev Piyasalar Emir Takip Formu
- **ç)** Seans Takip Formu
- **d)** İşlem Sonuç Formu, Türev Araç İşlem Sonuç Formu, Kaldıraçlı Alım Satım İşlemleri İşlem Sonuç Formu
- **e)** İşlem Talimat Formu
- **f)** Türev Piyasalar Teminat Durum Raporu
- **g)** Türev Piyasalar Pozisyon Limit Aşımı Raporu
- **ğ)** Hesap Ekstresi (aylık bildirimler)

**Özel durumlar:**

- **Gişe hizmetinde** yalnızca **müşteri emir formu** ve işlemin niteliğine göre **nakit alındı veya ödendi belgesi** düzenlenir.
- **Tezgahüstü** işlemlerde müşteri emir formu yerine **işlem talimat formu** ve aylık **hesap ekstresi** düzenlenir.

### Emirlerin alınması ve ispatı
- Emirler **yazılı veya sözlü** alınabilir.
- Telefon, faks, **ATM**, internet gibi kanallardan **imzasız** alınan emirler **sözlü emir** niteliğindedir.
- **Kayıt yükümlülükleri:**
  - **telefon** emirlerinin **ses kaydı**,
  - **faks** talimatı ve faksların ulaştığı tarih ve saati gösteren **toplu döküm**,
  - **elektronik** emirlerde tarih, zaman ve müşteri bazında **IP numarası** ve **log kayıtları**.

  Bu kayıtları hem **emir iletimine aracılık eden** hem **lehine çalışılan** kurum tutar ve gerektiğinde yazılı hale getirilebilecek şekilde saklar.

> [!ezber] **İspat yükü:**
> - **Sözlü emirle** işlem yapılmışsa, emrin varlığını **kurum** ispat eder.
> - Müşteri **emir verdiği halde işlem yapılmadığını** iddia ediyorsa, emri verdiğini **müşteri** ispat eder.

- **Nakit alındı / ödendi belgesi (md. 14):**
  - **müteselsil sıra numaralıdır**, en az bir örnek düzenlenir,
  - müşteriye **imzalatılır**,
  - **imzalı bir örneği müşteriye verilir**.

### Emir formu, seans takip formu, türev emir takip formu (md. 9)
- Emir formu, emrin **borsaya iletildiği kanal bazında müteselsil sıra numarasıyla**, gerekli bilgileri taşımak şartıyla **serbestçe** düzenlenir.
- **Yazılı emirde** elektronik formun çıktısı müşteriye **imzalatılır**. İmzalı örnek **talep halinde** müşteriye verilir.
- **Sözlü emirde** form elektronik ortamda, **imza aranmadan** düzenlenir.
- Formda tarih ve **en az saniye** hassasiyetinde zaman damgası bulunur.
- Faks talimatında, faks cihazının otomatik yazdığı **gönderen numarası, tarih ve saat** bulunur.
- Müşteri isterse emrin alınması sırasında **emir alınış numarası** verilir.
- Seans öncesi alınan emirler kanal bazında **zaman önceliğine** göre otomatik olarak şu formlara aktarılır. Seans sırasında alınan emirler de aynı şekilde aktarılır.
  - **Seans Takip Formu** (Ek-1),
  - türevler için **Türev Piyasalar Emir Takip Formu** (Ek-2).
- **Piyasa yapıcılığı** kotasyon emirleri bu kurallara **tabi değildir**. Kurumun **kendi hesabına** verdiği emirler **tabidir**.
- Emrin borsaya hangi kanalla iletileceğini gösteren **iş akış prosedürü** kurumun **internet sitesinde** yayımlanır.

### Formlarda bulunması gereken bilgiler
| Form | Öne çıkan bilgiler |
|---|---|
| **Pay ve diğer borsa emirleri** (md. 10) | Müşteri ve hesap no, ad (ve vekil), sıra no, araç, **emir tipi**, **iletilme şekli**, alım/satım, fiyat veya nominal, miktar, **alınma ve iletilme zamanı**, seans ve geçerlilik, **emri alan görevli**, emrin iletildiği kurum, **borsa, pazar ve takas kurumu**, **para birimi** |
| **Borsadaki türev emirleri** (md. 11) | Benzer bilgiler + **sözleşme adı/kodu**, **sözleşme adedi**, **hesap tipi** (müşteri, global…) |
| **İşlem Talimat Formu**: TÜT işlemler, **kaldıraçlı hariç** (md. 12) | Araç tanımı, alım/satım, miktar ve tutar, fiyat veya gösterge, **vade günü**, varsa **prim** ve **kullanım fiyatı**, **teminat tutarı** |
| **Kaldıraçlı emirler** (md. 13) | Müşteri ve hesap no, ad, sıra no, varlık, emir tipi, iletilme şekli, alım/satım, fiyat ve miktar, alınma zamanı. **Kabul edilmeyen** emirler de kaydedilir |

**İşlem talimat formuyla ilgili ek kurallar:**

- Talimat ile işlemin **eş anlı** gerçekleştiği hallerde talimat formu ve sonuç formu **tek form** olarak düzenlenebilir.
- Kurum müşteriye **karşı taraf** oluyorsa çıkar çatışması konusunda bilgilendirme yapılır.
- TÜT'te **teminat tamamlama** yükümlülüğü varsa, uygulamanın nasıl işleyeceği müşteriye **yazılı** açıklanır. Çerçeve sözleşmede bu hüküm varsa ayrıca açıklama gerekmez.

---

## 4. İşlem sonuç formu ve hesap ekstresi (md. 15–17)
### İşlem sonuç formları (md. 15–16)
- Üç tür form vardır: **İşlem Sonuç Formu** (Ek-3), **Türev Araç İşlem Sonuç Formu** (Ek-4), **Kaldıraçlı İşlem Sonuç Formu** (Ek-5).
- Formlar müteselsil numaralıdır ve **elektronik ortamda** tutulur.
- Kaldıraçlı formda **kabul edilmeyen, iptal edilen ve değiştirilen** emirler de yer alır.
- **Gerçekleşen işlemler müşteriye en geç gün sonunda** bildirilir. Formda cins, miktar, fiyat veya prim ile **komisyon ve giderler** bulunur.
- Form e-posta ya da posta ile gönderilir veya elektronik erişim sağlanır. Müşterinin e-postası yoksa ya da elektronik erişimi tercih etmiyorsa **posta** kullanılır.
- Gönderimin veya erişimin **ispat yükü kurumdadır**.

### Hesap ekstresi (md. 17)
- **Aylık** düzenlenir ve **dönemi izleyen 5 iş günü** içinde müşterinin **adresine** gönderilir.
- Müşteri **yazılı**, **kayıtlı telefonla** ya da tevsik edilebilir elektronik yolla talep ederse, aynı süre içinde **e-postaya** gönderilebilir ya da **elektronik erişim** sağlanabilir.
- Ekstrede şunlar bulunur:
  - alınan ve satılan araçların adı, tarihi, saati, fiyatı ve miktarı,
  - nakit ve kıymetlerin **tüm hareketleri**,
  - tahakkuk eden **komisyon, ücret ve vergiler**.
- **Gönderilmeyebilecek durumlar:**
  - dönem içinde **hiç işlem yapmayan** müşteri,
  - münhasıran sözleşmeyle ya da çerçeve sözleşmedeki hükümle bunu kabul eden **profesyonel müşteri**.
- **İspat yükü kurumdadır.**

> [!dikkat] "Ekstre belli bir süre içinde itiraz edilmezse **kabul edilmiş sayılır**" gibi **sorumsuzluk kayıtları** çerçeve sözleşmeye ve diğer belgelere **konamaz**. Konursa **hükümsüzdür**.

- **Yurt dışı işlemler:** Aylık ekstreyi Türkiye'deki kurum gönderir ya da lehine çalışılan yabancı kuruluşun göndermesini sağlar ve gönderim belgelerini saklar. Hesap açılışı için yurt dışına gönderilen belgelerin örnekleri de **emri ileten kurumda** saklanır.

---

## 5. Kaldıraçlı ve türev işlemlerde bildirimler (md. 18–19)
| | **Kaldıraçlı** (md. 18) | **Türev** (md. 19; TÜT dahil) |
|---|---|---|
| Günlük | **İşlem sonuç formu**: en geç işlem gününü **izleyen iş günü**, önceki günün tüm pozisyonlarıyla | Aynı |
| Aylık ekstrenin içeriği | Tüm pozisyonlar (tarih, saat, fiyat, miktar); **kapanan** pozisyonların **kesin** kâr/zararı; **açık** pozisyonların **mevcut** kâr/zararı; nakit hareketleri; komisyon ve vergiler; **teminat durumu** | Aynı + **sözleşmenin tanımı**; açık pozisyonlarda **realize olmamış** kâr/zarar |
| İstisna | Ekstre istemediğini sözleşmeyle kabul eden profesyonel müşteri; **hareketsiz** hesap | Aynı |

### Türevde günlük raporlar
- **Türev Piyasalar Teminat Durumu Raporu** (Ek-6), açık pozisyonun taşındığı **her gün sonu** itibarıyla düzenlenir.
  - Müşterinin yatırması gereken teminat, takas kurumunun istediği nakit teminat dikkate alınarak hesaplanır.
  - **TL ve konvertibl döviz dışındaki** teminatlar, takas kurumunun belirlediği oran veya fiyatla nakde çevrilir. Takas kurumu oran belirlememişse sermaye yeterliliği değerleme hükümleri uygulanır.
  - Takas kurumunun **kabul etmediği** teminatlar hesaba katılmaz.
- **Pozisyon Limit Aşımı Raporu** (Ek-7) da her gün sonu itibarıyla düzenlenir.
  - **Global hesaplar hariç** her müşteri hesabı için ayrı hazırlanır.
  - Uzun ve kısa pozisyonlar ile piyasa değerleri, borsanın **pozisyon limitlerini** aşıp aşmadıklarına göre değerlendirilir.

---

## 6. Belgelerin saklanması (md. 20–28)
### Saklama süresi (md. 27)
Saklanacak belge ve kayıtlar:

- her türlü belge (elektronik olanlar dahil),
- **gerçekleşsin ya da gerçekleşmesin** tüm emir formları, elektronik emirler, **faks ve ses kayıtları**,
- **uzaktan kimlik tespiti** sırasında alınan belgeler ve **video görüntüleri**.

Bunlar TTK md. 82 uyarınca, düzenli ve tasnifli biçimde **10 yıl** saklanır.

- Elektronik kayıtlar süre boyunca **erişilebilir ve okunabilir** olmalıdır.
- Belgelerin kopyası (fotokopi, mikrofiş, bilgisayar kaydı…) TTK md. 64 uyarınca saklanır.
- **İhtilaflı** belge ve kayıtlar 10 yılla sınırlı olmaksızın **ihtilaf sonuçlanıncaya kadar** saklanır.
- Kayıtlar **silinemez, değiştirilemez, tahrif edilemez** yapıda tutulur. Yazılı kayıtlarda **silinti ve kazıntı yapılmaz**; düzeltme yanlış kaydı gizlemeyecek şekilde yapılır; **boş satır bırakılmaz**.
- Bilgi işlem altyapısındaki **tüm değişiklikler**, **kimin yaptığıyla** birlikte kaydedilir. Güvenlik ihlalleri, hatalar ve iyileştirmeler de kaydedilir.
- **Günlük zaman damgası:** Müşterilere yansıtılan **fiyatların** ve müşterilerin **teminat, borç-alacak, açık pozisyon, kâr-zarar** kayıtlarının **dosya bütünlük değerleri**, **günlük** periyotlarla **zaman damgasıyla** düzenlenir ve saklanır.

### Diğer saklama hükümleri
- **Danışmanlık ve portföy yöneticiliği (md. 20):** Yatırım kararlarının dayanağı olan her türlü bilgi, belge, **araştırma ve rapor** saklanır.
- **Saklama hizmeti (md. 21):** Türev teminatı olarak verilen varlıkların hareketleri izlenir ve tutulduğu kuruluşla **mutabakat** sağlanır.
- **Takas kurumuyla mutabakat (md. 22):** Kaldıraçlı dahil türev işlemlerde, açık pozisyon taşınan **her gün** takas kurumuyla mutabakat yapılır.
- **Kaldıraçlı hesap kayıtları (md. 23):** **Anlık** ve müşteri bazında tutulur. Kayıtlarda şunlar bulunur: işlemler, varlık giriş-çıkışları, kesin ve mevcut kâr/zarar, komisyon ve vergiler, teminat durumu. Kayıtların dosya bütünlük değerleri günlük zaman damgasıyla saklanır. Müşteri bu bilgilere **işlem platformundan** erişebilmelidir.
- **Genel yatırım tavsiyeleri (md. 24)** ve kaldıraçlı işlemlerde yatırımcılarla yapılan **reklam, tanıtım, pazarlama ve analiz** dahil tüm iletişimler **(md. 26)** de md. 27'ye göre saklanır.
- Kredili alım, açığa satış ve ödünç işlemlerinde de bu tebliğin belge-kayıt hükümleri uygulanır (md. 25).

### Müşteri şikâyetleri (md. 28)
- Kayıt yazılı ya da elektronik tutulur. Her şikâyet için şunlar kaydedilir:
  - şikâyetçinin **adı, adresi, hesap numarası**,
  - **tarih**,
  - **özet** ve aykırılık iddia edilen **mevzuat hükmü**,
  - varsa şikâyete konu **personel**,
  - kurumun yaptığı **işlemlerin özeti**.
- Şikâyet incelemesinde üretilen belgeler saklama süresi boyunca saklanır.
- Şikâyet birimlerinin iletişim bilgileri, müşteriye gönderilen **belgelerde** ve **internet sitesinde** yer alır.

### Diğer
- **Veri depolama kuruluşu (md. 30):** Kurul, işlem, teminat ve pozisyon kayıtlarının **SPKn md. 87**'deki veri depolama kuruluşlarınca **merkezi olarak izlenmesini** isteyebilir.
- **Bankalar (md. 31):** Yatırım hizmetleri ve yan hizmetlerle **sınırlı olarak** bu tebliğe uyar.

---

## Bugünün sayıları
| Konu | Süre |
|---|---|
| Takaslı işlemlerin muhasebe kaydı | **Takas süresini takip eden ilk iş günü** |
| Diğer işlemlerin muhasebe kaydı | **İşlem gününü takip eden ilk iş günü** |
| İşlem sonucunun müşteriye bildirimi | **En geç gün sonu** |
| Kaldıraçlı ve türevde işlem sonuç formu | İşlem gününü **izleyen iş günü** |
| Hesap ekstresi | **Aylık**; dönemi izleyen **5 iş günü** |
| Belge saklama | **10 yıl** (ihtilaflı belgeler ihtilaf bitene kadar) |
| Zaman damgası | **Günlük** |
| Emir formundaki zaman | En az **saniye** hassasiyetinde |
`,
  sorular: [
    {
      s: "Takası merkezi takas kuruluşunda yapılan sermaye piyasası aracı işlemlerine ilişkin muhasebe kayıtları yasal defterlere en geç ne zaman işlenmelidir?",
      c: ["İşlemin yapıldığı gün", "Takas süresini takip eden ilk iş günü içinde", "İşlem gününü takip eden 3 iş günü içinde", "Ay sonunda", "İşlemi izleyen 10 iş günü içinde"],
      d: 1,
      a: "Takası merkezi takas kuruluşunda yapılan işlemler **takas süresini takip eden ilk iş günü** içinde, diğer işlemler ise **işlemin gerçekleştiği günü takip eden ilk iş günü** içinde yasal defterlere işlenir.",
      k: "1005 resmi not s. 80"
    },
    {
      s: "Elektronik ortamda sunulan yatırım hizmetlerinde uygulanacak **iki bileşenli kimlik doğrulama** için aşağıdakilerden hangisi doğrudur?",
      c: ["İki bileşen aynı sınıftan seçilebilir; örneğin iki farklı parola yeterlidir.", "Bileşenler \"bilinen\", \"sahip olunan\" ve \"biyometrik\" sınıflarından farklı ikisine ait olmalıdır.", "SMS ile doğrulama kodu gönderilmesi hiçbir koşulda kullanılamaz.", "Başarısız girişte, kullanıcıya hangi bileşenin (örneğin parolanın) hatalı olduğu açıkça bildirilmelidir.", "Aynı müşteri için aynı anda sınırsız oturum açılabilmelidir."],
      d: 1,
      a: "Bileşenler bilinen, sahip olunan ve biyometrik sınıflarından **farklı ikisine** ait ve **bağımsız** olmalıdır. Anahtarla imzalama mümkün değilse SMS kullanılabilir. Başarısız girişte kullanıcı adı ya da parola hakkında ipucu **verilmez**. Aynı anda birden fazla oturuma kural olarak izin verilmez.",
      k: "1005 resmi not s. 81–82"
    },
    {
      s: "Bir müşteri, aracı kuruma telefonla alım emri verdiğini, ancak işlemin gerçekleştirilmediğini iddia etmektedir. Bu durumda ispat yükü kime aittir?",
      c: ["Aracı kuruma", "Müşteriye", "Borsa İstanbul'a", "Takasbank'a", "Sermaye Piyasası Kurulu'na"],
      d: 1,
      a: "Md. 8/4'e göre emir verdiği halde işlem yapılmadığını iddia eden **müşteri, emri verdiğini ispatla yükümlüdür**. Buna karşılık sözlü emre dayanarak **işlem yapılmışsa**, emrin varlığını ispat yükü **kuruma** aittir.",
      k: "1005 resmi not s. 83"
    },
    {
      s: "Emir iletimine aracılık kapsamında **gişe hizmeti** verilirken yatırım kuruluşları hangi belgeleri düzenlemekle yükümlüdür?",
      c: ["İşlem sonuç formu ve hesap ekstresi", "Müşteri emir formu ve niteliğine göre nakit alındı/ödendi belgesi", "Seans takip formu ve günlük hesap ekstresi", "İşlem talimat formu ve teminat durum raporu", "Hiçbir belge düzenlenmez; gişede verilen emir sözlü kabul edilir ve kayda alınmaz"],
      d: 1,
      a: "Gişe hizmetinde **müşteri emir formu** ve işlemin niteliğine göre **nakit alındı/ödendi belgesi** düzenlenir (md. 7/2). Tezgahüstü işlemlerde ise emir formu yerine işlem talimat formu düzenlenir.",
      k: "1005 resmi not s. 82"
    },
    {
      s: "Hesap ekstreleri ile ilgili aşağıdaki ifadelerden hangileri **doğrudur?**\n\nI. Aylık dönemler itibarıyla dönemi izleyen 5 iş günü içinde gönderilir.\nII. Dönem içinde hiç işlem yapmayan müşterilere gönderilmeyebilir.\nIII. Çerçeve sözleşmeye, ekstrenin 30 gün içinde itiraz edilmezse kabul edilmiş sayılacağı hükmü konulabilir.",
      c: ["I ve II", "Yalnız I", "Yalnız III", "II ve III", "I, II ve III"],
      d: 0,
      a: "I ve II doğru. III yanlış: ekstrenin belli bir süre sonra kabul edilmiş sayılacağına ilişkin **sorumsuzluk kayıtları** çerçeve sözleşmeye konamaz; konursa **hükümsüzdür**.",
      k: "1005 resmi not s. 87"
    },
    {
      s: "Kaldıraçlı alım satım işlemlerinde **aylık hesap ekstresinde** yer alması zorunlu olan bilgiler arasında aşağıdakilerden hangisi **yoktur?**",
      c: ["Kapatılan pozisyonlara ilişkin kesin kâr ve zarar tutarları", "Açık pozisyonlara ilişkin mevcut kâr ve zarar tutarları", "Teminat durumları", "Hesaba tahakkuk ettirilen komisyon, ücret ve vergiler", "Aracı kurumun diğer müşterilerinin toplam kâr/zarar oranı"],
      d: 4,
      a: "Kaldıraçlı ekstrede şunlar bulunur: tüm pozisyonlar, **kapanan pozisyonların kesin** ve **açık pozisyonların mevcut** kâr/zararı, nakit ve kıymet hareketleri, komisyon, ücret ve vergiler, **teminat durumu**. Diğer müşterilerin kâr/zarar oranı ekstrede yer almaz; bu bilgi internet sitesinde \"Zarar Olasılığınız\" başlığı altında yayımlanır.",
      k: "1005 resmi not s. 87–88"
    },
    {
      s: "Yatırım kuruluşlarının yatırım hizmetleri nedeniyle aldıkları ve ürettikleri belgeler, ses kayıtları ve uzaktan kimlik tespiti video görüntüleri **kaç yıl** saklanmalıdır?",
      c: ["3 yıl", "5 yıl", "8 yıl", "10 yıl", "20 yıl"],
      d: 3,
      a: "Tüm belgeler, gerçekleşsin ya da gerçekleşmesin emirler, faks ve ses kayıtları ile uzaktan kimlik tespiti belge ve video kayıtları TTK md. 82 uyarınca **10 yıl** saklanır. **İhtilaflı** olanlar ihtilaf sonuçlanıncaya kadar saklanır.",
      k: "1005 resmi not s. 89"
    },
    {
      s: "Türev araç işlemlerinde açık pozisyonun taşındığı her gün sonu itibarıyla düzenlenen ve borsanın pozisyon limitlerinin aşılıp aşılmadığını gösteren rapor hangisidir?",
      c: ["Seans Takip Formu", "Türev Piyasalar Teminat Durumu Raporu", "Pozisyon Limit Aşımı Raporu", "İşlem Talimat Formu", "Hesap Ekstresi"],
      d: 2,
      a: "**Pozisyon Limit Aşımı Raporu** (Ek-7) her gün sonu itibarıyla, global hesaplar hariç her müşteri hesabı için ayrı düzenlenir ve borsa pozisyon limitlerinin aşılıp aşılmadığını gösterir. **Teminat Durumu Raporu** ise yatırılması gereken teminatı hesaplar.",
      k: "1005 resmi not s. 88"
    }
  ]
});
