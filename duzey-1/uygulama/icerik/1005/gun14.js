SPL.gun("1005", 14, {
  okuma: `
## Bugünün haritası
Dersin son günü:

1. **Uzaktan Kimlik Tespiti Tebliği (III-42.1)**: görüntülü görüşmeyle müşteri edinimi
2. Kimlik tespitinden sonra **elektronik sözleşme** kurulması
3. Ek: **TSPB Promosyon Kampanyaları Yönergesi**

---

## 1. Uzaktan kimlik tespiti (III-42.1)
### Dayanak ve kapsam
- **7247 sayılı Kanun**, SPKn md. 42'yi değiştirdi. Yatırım kuruluşları ve PYŞ'lerin müşterileriyle ilişkisi artık:
  - **yazılı** olarak,
  - **uzaktan iletişim araçlarıyla mesafeli** olarak,
  - ya da Kurulun **yazılı şeklin yerine geçebileceğini** belirlediği, müşteri kimliğini doğrulayan elektronik yöntemlerle

  kurulabilir.
- Tebliğ **aracı kurumlara**, **portföy yönetim şirketlerine** ve sonradan eklenen **kripto varlık hizmet sağlayıcılara** uzaktan müşteri edinimi imkânı verir. Tebliğin adı da buna göre değiştirildi.
- **Yapay zekâ (28.02.2026):** Görüntülü görüşmede personelin yaptığı işlemler artık **yapay zekâ temelli** yöntemlerle de yapılabilir. Ancak en az **MASAK Genel Tebliği (Sıra No: 19)** md. 4/9'daki esaslara uyulur.

### Genel ilkeler
- Uzaktan kimlik tespiti, personel ile kişinin aynı ortamda bulunmadan, **çevrim içi görüntülü görüşmeyle** yapılır.
- Yöntem **yüz yüze tespite benzer** ve **asgari riskli** olmalıdır. Teknolojik ve operasyonel risklere karşı yeterli güvenlik önlemi alınır.
- Kimlik belgeleri, belgelerin doğrulanabilir özellikleri ve doğrulama kriterleri için **ayrıntılı dokümanlar** hazırlanır.
- Uzaktan kimlik tespiti **kritik işlemdir**. Sistem, işlemin yalnızca bilgi teknolojileri ya da yalnızca personel tarafından başlatılıp onaylanıp tamamlanmasına **izin vermeyecek** şekilde tasarlanır:

> [!ezber] **Kişi başlatır → bilgi teknolojileri kontrol eder → personel onaylar.** Personel işlemi riskli bulursa işlem **ikinci bir personelin onayına** gider ya da **sonlandırılır**.

- Sistemler, **III-39.1 md. 50** ve **VII-128.10 md. 19** (bilgi sistemleri yönetimi) esaslarına göre edinilir ve yönetilir.
- Uygulamadan önce **iş akış prosedürü** hazırlanır, etkinliği **test edilir** ve sonuçlar yazılı hale getirilir. Test başarısızsa süreç **uygulanmaz**.
- Prosedür **yılda en az 2 kez** gözden geçirilir. Güvenlik ihlali, mevzuat değişikliği, dolandırıcılık şüphesi veya yöntemde zayıflık ortaya çıkması gibi durumlarda **ayrıca** gözden geçirilir.

### Personel ve çalışma ortamı
- Görüntülü görüşmeyi **eğitimli personel** yapar.
- Personel; belgelerin özelliklerini, doğrulama yöntemlerini, dolandırıcılık türlerini ve mevzuatı bilir.
- **Eğitim:** **yılda en az 1 kez** ve **her güncellemeden sonra** yapılır; **kişisel verilerin korunması** mevzuatını da kapsar.
- Personel, kişinin müşteri olmayı **kendi iradesiyle** istediğinden şüphe duymayacak şekilde karar verebilmeyi öğrenir.
- Personel, **erişimi sınırlandırılmış ayrı alanlarda** çalışır.
- Personelin kurum adına çalıştığını gösteren uygun bir ortam oluşturulur.
- **Engelli kişilere** hizmet için gerekli önlemler alınır.

### Sürecin başlatılması
- Görüntülü görüşmeden önce kişi, kurumun uygulamasında bir **elektronik form** doldurur ve bu verilerle **risk değerlendirmesi** yapılır. Gerekirse süreç **görüşmeden önce sonlandırılır**.
  - Formda **MASAK Genel Tebliği (Sıra No: 19)** md. 6/1'deki bilgiler yer alır.
  - Ayrıca şunlar istenir: iş ilişkisinin amacı ve mahiyeti, **fonların kaynağı**, ortalama gelir, hesabın **aylık tahmini işlem hacmi ve işlem sayısı**.
- **Özel nitelikli kişisel verilerden yalnızca biyometrik veri** kullanılabilir. Kişinin **açık rızası** elektronik ortamda kaydedilir.
- İşlemler personele **önceden tahmin edilemeyecek** şekilde atanır. Belli bir kişinin belli bir personele düşmesi engellenir.
- Asgari sorular belirlenir; soruların **sırası ve türü değişkendir**.
- Görüşme **gerçek zamanlı**, **kesintisiz** ve **uçtan uca güvenli** yapılır.
- Görüntü ve ses kalitesi, belgenin **beyaz ışık altında** doğrulanmasına ve tahrifat kontrolüne yetecek düzeyde olmalıdır.
- **SMS OTP:** Merkezi olarak üretilen ve yalnızca o işlem için geçerli kod gönderilir. Kişi kodu uygulama üzerinden **çevrim içi geri gönderir**. Böylece **cep telefonu numarası doğrulanmış** olur.
- Sürekli iş ilişkisi kurulurken, suç gelirlerinin aklanması ve terörün finansmanının önlenmesine ilişkin yönetmeliğin md. 18 ve 20'sindeki tedbirler dikkate alınır. **Karmaşık ve olağandışı büyüklükteki** işlemlere özel dikkat gösterilir ve risk temelli **sıkılaştırılmış tedbirler** uygulanır.

### Kimlik belgesinin doğrulanması
- Kullanılan belgede **beyaz ışık altında görülebilen güvenlik ögeleri**, **fotoğraf ve imza** bulunmalıdır.
- **Birinci yol: NFC (yakın alan iletişimi).** Belgenin **yongasındaki** bilgiler okunur. Şunlar kontrol edilir:
  - belgenin yetkili makamca verildiği ve yongadaki bilgilerin **değiştirilmediği**,
  - yongadaki anahtarların **kopyalanmadığı**.
- **İkinci yol: görsel doğrulama** (NFC yapılamazsa).
  - Belgenin görsel güvenlik unsurlarından **en az dört adedi** şekil ve içerik bakımından doğrulanır.
  - Bu yolla tespit yapıldıysa, sürekli iş ilişkisinden önce **ilk finansal hareket**, müşteriyi tanıma esaslarını uygulayan **başka bir finansal kuruluş üzerinden** yapılmalıdır.
  - Kişiden belgeyi kameraya **yatay ve dikey eğmesi**, ayrıca sistemin **rastgele seçtiği** güvenlik bölgelerine **parmağını koyması** istenir.
  - Personel, kişinin ve belgenin **ön ve arka yüzünün** fotoğraflarını veya ekran görüntülerini alır. Tekil görsellerle tahrifat izi olmadığından emin olur.
- **Asgari kontroller:**
  - karakterlerin yazı tipi, düzeni, sayısı ve büyüklüğü,
  - belgenin **zarar görmediği, tahrif edilmediği, üzerine fotoğraf yapıştırılmadığı**,
  - geçerlilik süresinin standarda uygunluğu,
  - **MRZ** bilgilerinin belgeyle uyuşması,
  - bilgilerin **Kimlik Paylaşımı Sistemi** ve diğer kaynaklarla eşleşmesi,
  - **seri numarasının** görüşmede okutularak doğrulanması.

### Kişinin doğrulanması ve sonlandırma
- **Canlılık tespiti** yapılır. **Sahte yüz** (deepfake) risklerine karşı ilave tedbir alınır.
- Kişinin yüzü, **NFC ile yongadan alınan** fotoğrafla, alınamazsa **belge üzerindeki** fotoğrafla **biyometrik olarak karşılaştırılır**.
- Personel; kimlik avı, **sosyal mühendislik** ve **başkasının baskısı altında** hareket etme gibi riskleri gözeterek şunlardan emin olur:
  - fotoğraf ve bilgilerin kişiyle uyuştuğundan,
  - kişinin verdiği bilgiler ve belirttiği niyetin **inandırıcı** olduğundan.
- Görüşmenin sonunda, belirlenmişse sunulacak hizmetler söylenir. Kişiden müşteri olmayı kabul ettiğine dair **sözlü onay** alınır ve süreç tamamlanır.
- **Sonlandırma halleri:** zayıf ışık, düşük görüntü kalitesi, sözlü iletişim kurulamaması, **herhangi bir tutarsızlık veya belirsizlik**, belgenin geçerliliğinden ya da **dolandırıcılık veya sahtecilik** teşebbüsünden şüphe.

### Kayıt ve sorumluluk
- **Sürecin tamamı**, tüm adımlarıyla ve **denetlenebilir** şekilde kaydedilir ve saklanır. Belge ve Kayıt Tebliği'nin saklama hükümleri geçerlidir; hatırlayın, **video kayıtları dahil 10 yıl**.
- Yanlış tespit riskini en aza indirmek **kurumun sorumluluğundadır**.
- Uzaktan tespit edilen kişiler **farklı bir risk profilinde** izlenir. İşlemin türüne ve tutarına göre **ilave güvenlik kontrolleri** uygulanır.
- Kişiye ya da üçüncü kişiye yükümlülük doğuran işlemlerde **itiraz halinde ispat yükü kurumdadır**.
- Kurul; uyum durumu, şikâyetler ve sahtecilik değerlendirmesine göre uzaktan kimlik tespitinin kullanımını **kısıtlayabilir** veya **durdurabilir**.

---

## 2. Kimlik tespitinden sonra sözleşme kurulması
- Uzaktan ya da yüz yüze kimlik tespitinden sonra sözleşmenin **mesafeli** kurulabilmesi için, müşterinin irade beyanı **Belge ve Kayıt Tebliği md. 5/A/1**'e uygun bir **kimlik doğrulamasından** (iki bileşenli doğrulama) sonra alınmalıdır.
- İrade beyanı **uzaktan kimlik tespiti görüşmesi sırasında** ya da görüşme kapanmadan alınırsa bu şart **yerine getirilmiş sayılır**. Ayrıca kimlik doğrulama bilgisi **istenmez**.
- Bilişim cihazı üzerinden **yazılı şeklin yerine geçen** bir sözleşme için:
  - **a)** Sözleşmenin **tüm şartları** müşterinin okuyabileceği şekilde elektronik ortamda iletilir,
  - **b)** Sözleşme ve irade beyanı, **müşteriye özgü şifreleme gizli anahtarıyla imzalanarak** kuruma iletilir,
  - **c)** Müşteri yalnızca **kendisine gösterilen** bilgileri imzalar.
- Bu şekilde kurulan **teminat, kefalet, temlik** dahil her türlü sözleşme **yazılı şekilde kurulmuş sayılır**. Kural PYŞ ve kripto varlık hizmet sağlayıcıları için de geçerlidir.

---

## 3. Ek: TSPB Promosyon Kampanyaları Yönergesi
### Kapsam
- Aracı kurumlar ve bankalar, yatırımcıları sermaye piyasasına çekmek ya da ilgilerini sürdürmek için **promosyon kampanyası** düzenleyebilir.
- **Kaldıraçlı işlemler ve CFD'ler için promosyon yasağı saklıdır** (Kurul İlke Kararı, 15.07.2016).
- Gelir yaratmayan ve **finansal okuryazarlığı destekleyen eğitim yarışmaları** da promosyon sayılır.

**Promosyon sayılmayanlar:**

- **tarife esasına dayalı** komisyon pazarlaması,
- yılbaşı, bayram, doğum günü gibi özel günlerde verilen **sembolik hediyeler**,
- ajanda, kalem, takvim gibi **reklam ürünleri**.

### Yasaklar ve sınırlar
- Mevzuata ve meslek kurallarına aykırı, yatırımcı aleyhine, **abartılı ve yanıltıcı** kampanya yapılamaz.
- İşlem yapmayı ve bilgiye erişimi kolaylaştıran, **maliyeti azaltan** ürün ve hizmetlere öncelik verilir.
- **Komisyon iadesi hariç**, **nakit para** ya da anında nakde çevrilebilen varlık verilemez.
- Ancak uzun süre birikimle ya da **kredi kullanarak** alınabilecek kadar **değeri çok yüksek** ürünler verilemez. Yatırımcıyı **yalnızca ödül güdüsüyle** hareket ettirecek ödüller de verilemez.
- **Belirli bir kıymete** yatırıma yönlendiren kampanya yapılamaz.
- **Müşteri getirene** ve getirilen müşteriye menfaat sağlanamaz.
- **Maliyeti öngörülemeyen** kampanya yapılamaz.
- **Hediyenin değeri**, yatırımcının kampanya döneminde ödediği **komisyonu aşamaz**. Çekilişle ya da sınırlı sayıda müşteriye makul bütçeyle yapılan kampanyalarda bu şart aranmaz.
- İade sisteminde ödenen komisyondan **fazla iade** yapılamaz.
- Hediyenin **nakit karşılığı** hesaba yatırılamaz. **"Bonus" veya "hediye para"** ile işlem yaptırılamaz.
- Kampanya süresince yatırımcının komisyon oranı **aleyhine değiştirilemez**.
- Kampanya maliyeti **yatırımcıya yansıtılamaz**.
- Kampanya süresi **en fazla 1 yıldır**.

### Başvuru ve bildirim
- Birliğe kampanya başlamadan **en az 10 iş günü önce** **resmi yazıyla** başvurulur. Başvuruda yöntem, süre, hedef kitle, bütçe ve sorumlu kişi yer alır; maliyet net ve hesaplanabilir olmalıdır.
- **Uzatma:** Kampanya bitmeden en az **10 iş günü önce** başvurulur. **Yalnızca bir kez** ve **en fazla 1 yıl** uzatılabilir; sonrası için yeni başvuru gerekir.
- Birlik başvuruyu **en fazla 10 iş günü** içinde inceler. Kampanya, **onay yazısı tebliğ edildikten sonra** başlar.
- **Aylık** bilgiler **ÜYS** üzerinden bildirilir. Kampanya bitince yararlanan yatırımcı sayısı ve toplam maliyet **10 iş günü** içinde resmi yazıyla bildirilir.
- **Reklam:** Kampanya ancak **onaydan sonra** duyurulur ve ana koşulları reklamda yer alır. **Birlik onayı, Birliğin kampanyaya kefil olduğu anlamına gelmez** ve reklamda **kullanılamaz**.
- **Yaptırım:** Uymayan üyelere **Birlik Disiplin Yönetmeliği** uygulanır.

---

## Bugünün sayıları
| Konu | Sayı |
|---|---|
| Prosedürün gözden geçirilmesi | **Yılda en az 2** |
| Personel eğitimi | **Yılda en az 1** + her güncellemeden sonra |
| Görsel doğrulamada güvenlik unsuru | **En az 4** |
| Kullanılabilecek özel nitelikli veri | **Yalnızca biyometrik** (açık rızayla) |
| Kayıtların saklanması | **10 yıl** (Belge ve Kayıt Tebliği) |
| Promosyon başvurusu | Başlangıçtan **en az 10 iş günü önce** |
| Birlik incelemesi | **En fazla 10 iş günü** |
| Kampanya süresi | **En fazla 1 yıl**; bir kez, en fazla 1 yıl uzatma |
| Kampanya sonu bildirimi | **10 iş günü** |

> [!bilgi] **Tebrikler!** 1005 Yatırım Kuruluşları dersinin tüm konularını bitirdin. Mini testten sonra **ders sonu testi** açılacak. Baraj: **75**.
`,
  sorular: [
    {
      s: "Uzaktan kimlik tespiti sürecinin tasarımıyla ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["Süreç personel tarafından başlatılır, personel onayıyla ve yine personelce tamamlanır.", "Süreç tamamen bilgi teknolojileri tarafından, personel olmadan başlatılıp tamamlanabilir.", "Kişi başlatır, BT kontrolleriyle sürer, personelin onayı ve ek kontrolleriyle tamamlanır.", "Süreç, müşteri temsilcisinin onayı aranmadan otomatik olarak tamamlanabilir.", "Riskli bulunan işlem önce onaylanır, ardından personel tarafından incelenir."],
      d: 2,
      a: "Uzaktan kimlik tespiti **kritik işlemdir**. Süreç **kişi tarafından başlatılır**, **bilgi teknolojileri kontrolleriyle** devam eder ve **personel onayıyla** tamamlanır. Personel işlemi riskli bulursa işlem ikinci bir personelin onayına gider ya da sonlandırılır.",
      k: "1005 resmi not s. 128"
    },
    {
      s: "Uzaktan kimlik tespiti prosedürü en az hangi sıklıkla gözden geçirilmelidir?",
      c: ["Ayda en az bir defa", "Üç ayda en az bir defa", "Yılda en az iki defa", "Yılda en az bir defa", "İki yılda en az bir defa"],
      d: 2,
      a: "Prosedür **yılda en az iki defa** gözden geçirilir. Güvenlik ihlali, mevzuat değişikliği ya da dolandırıcılık şüphesi gibi durumlarda ayrıca gözden geçirilir. Personel ise **yılda en az bir defa** eğitim alır.",
      k: "1005 resmi not s. 128"
    },
    {
      s: "Uzaktan kimlik tespiti sürecinde kişinin hangi **özel nitelikli kişisel verisi** kullanılabilir?",
      c: ["Sağlık verisi; açık rıza alınmak kaydıyla", "Dini inanç bilgisi; kimlik belgesinde yer alıyorsa", "Yalnızca biyometrik verisi, açık rızası kaydedilerek", "Ceza mahkûmiyeti bilgisi; risk değerlendirmesi için", "Hiçbir özel nitelikli veri kullanılamaz"],
      d: 2,
      a: "Uzaktan kimlik tespitinde özel nitelikli kişisel verilerden **yalnızca biyometrik veri** kullanılabilir. Kişinin buna ilişkin **açık rızası** elektronik ortamda kayıt altına alınır.",
      k: "1005 resmi not s. 129"
    },
    {
      s: "Kimlik belgesinin yongası NFC ile okunamadığı için **yalnızca görsel güvenlik unsurlarıyla** kimlik tespiti yapılmıştır. Bu durumda aşağıdakilerden hangisi zorunludur?",
      c: ["En az iki görsel güvenlik unsurunun doğrulanması ve kimlik fotokopisinin alınması", "Kişinin bir hafta içinde şubeye gelerek ıslak imza vermesi", "En az dört görsel unsurun doğrulanması; ilk finansal hareketin başka bir kuruluştan yapılması", "Kimlik tespitinin bir hafta sonra yeniden görüntülü görüşmeyle tekrarlanması", "Kurul'dan özel izin alınması ve durumun KAP'ta açıklanması"],
      d: 2,
      a: "NFC doğrulaması yapılamazsa görsel güvenlik unsurlarından **en az dördü** doğrulanır. Bu yolla tespit yapıldıysa, sürekli iş ilişkisinden önce **ilk finansal hareket** müşteriyi tanıma esaslarını uygulayan **başka bir finansal kuruluş üzerinden** yapılmalıdır.",
      k: "1005 resmi not s. 130"
    },
    {
      s: "Uzaktan kimlik tespitinde kişinin cep telefonu numarası nasıl doğrulanır?",
      c: ["Kişinin telefon faturasının veya abonelik belgesinin fotoğrafı istenerek", "Merkezi üretilen, o işleme özel SMS OTP'nin uygulamadan çevrim içi geri gönderilmesiyle", "Personelin kişiyi beyan ettiği numaradan görüntülü görüşme sırasında geri araması ve sözlü teyit almasıyla", "Kişinin e-posta adresine doğrulama bağlantısı gönderilerek", "Numara doğrulanmaz; kişinin beyanı yeterli kabul edilir"],
      d: 1,
      a: "Kişiye **merkezi olarak üretilen**, yalnızca o kimlik tespiti işlemi için geçerli bir **SMS OTP** gönderilir. Kişi bu kodu uygulama üzerinden **çevrim içi geri gönderir** ve onaylanınca numara doğrulanmış olur.",
      k: "1005 resmi not s. 129"
    },
    {
      s: "Uzaktan kimlik tespitiyle müşteri edinilen kişilerle ilgili hangisi **yanlıştır?**",
      c: ["Farklı bir risk profilinde izlenirler.", "İşlem türü ve tutarına göre ilave güvenlik kontrolleri uygulanır.", "Yükümlülük doğuran işlemlerde itiraz halinde ispat yükü müşteriye aittir.", "Sürecin tamamı denetlenebilir şekilde kayıt altına alınır.", "Kurul uzaktan kimlik tespiti kullanımını kısıtlayabilir veya durdurabilir."],
      d: 2,
      a: "Kişilere ya da üçüncü kişilere yükümlülük doğuran işlemlerde itiraz halinde **ispat yükü kurumdadır**: aracı kurum, PYŞ ya da kripto varlık hizmet sağlayıcı.",
      k: "1005 resmi not s. 131"
    },
    {
      s: "TSPB Promosyon Kampanyaları Yönergesi'ne göre aşağıdakilerden hangisi **yapılabilir?**",
      c: ["Müşteri hesabına \"hediye para\" yatırarak bununla işlem yaptırmak", "Kaldıraçlı alım satım işlemleri için promosyon kampanyası düzenlemek", "Ödenen komisyonu aşmayan, komisyon iadesine dayalı bir kampanya düzenlemek", "Belirli bir hisseye yatırım yapan müşterilere özel ödül vermek", "Kampanyanın maliyetini yatırımcı hesaplarına gider olarak yansıtmak"],
      d: 2,
      a: "Nakit verilmesi yasaktır, ancak **komisyon iade sistemi** bunun istisnasıdır. İade, yatırımcının **ödediği komisyonu aşamaz**. Hediye para ile işlem yaptırmak, kaldıraçlı işlem promosyonu, belirli bir kıymete yönlendirme ve maliyeti yatırımcıya yansıtma yasaktır.",
      k: "1005 resmi not s. 133–134"
    },
    {
      s: "Bir aracı kurum promosyon kampanyası düzenlemek istiyor. Birliğe en geç ne zaman başvurmalıdır ve kampanya en fazla ne kadar sürebilir?",
      c: ["5 iş günü önce; 6 ay", "10 iş günü önce; 1 yıl", "15 iş günü önce; 2 yıl", "30 gün önce; 1 yıl", "Başvuru gerekmez; süre sınırı yoktur"],
      d: 1,
      a: "Kampanyadan **en az 10 iş günü önce** Birliğe resmi yazıyla başvurulur. Birlik başvuruyu en fazla 10 iş günü içinde inceler. Kampanya süresi **en fazla 1 yıldır** ve yalnızca bir kez, en fazla 1 yıl uzatılabilir.",
      k: "1005 resmi not s. 134"
    }
  ]
});
