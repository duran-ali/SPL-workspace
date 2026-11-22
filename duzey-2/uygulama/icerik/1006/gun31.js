SPL.gun("1006", 31, {
  okuma: `
## Bugünün haritası
Yeni bölüm: **Takasbank Ödünç Pay Piyasası (ÖPP)**. Burada aracı kurum ve bankalar teminat göstererek **pay ve BYF ödünç** alıp verir. Bugün Takasbank'ın konumunu, üyeliği, işleme konu kıymetleri, limitleri, seans, valör ve vadeleri, emirleri ve eşleşmeyi öğreneceğiz.

1. ÖPP tanımı ve **Takasbank'ın konumu**
2. **Üyelik**, üye yükümlülükleri ve faaliyetlerin kısıtlanması
3. **İşleme konu kıymetler** ve piyasa değeri
4. Temsilciler, **limitler** ve işlem sınırları
5. **Seans**, **valör** ve **vadeler**
6. **Emir unsurları** ve emirlerin iletilmesi
7. **Emir türleri**, değiştirme ve iptal
8. **Eşleşme** ve emirlerin yayımlanması

---

## 1. ÖPP ve Takasbank'ın konumu
**ÖPP:** Takasbank'ın belirlediği tür, miktar ve dönemlerde **teminat göstererek** ödünce konu kıymeti ödünç almak veya vermek isteyen **aracı kurum ve bankalar** ile müşterilerinin talep ve tekliflerini karşılaştıran, **Takasbank'ın kurduğu ve işlettiği** piyasa.

Takasbank:
a) ÖPP'yi **işleten** kurumdur,
b) **açık teklif yöntemiyle merkezi karşı taraftır**: ödünç verene karşı ödünç alan, ödünç alana karşı ödünç veren.

- **Açık teklif yöntemi:** Takasbank, ödünçler **eşleştiği anda** katılımcıların arasına girer. Yükümlülüğü eşleşmeyle başlar, tasfiyeyle biter.
- Müşteri işlemlerinden doğan yükümlülüklerde Takasbank'ın **muhatabı üyedir**.

| Taraf | Vadedeki yükümlülük |
|---|---|
| **Takasbank → ödünç verene** | Kıymeti **iade etmek** ve iade tarihine kadar **işlem komisyonu** ödemek; iade mümkün değilse **nakit karşılığı** öder |
| **Ödünç alan üye → Takasbank** | Kıymeti **geri vermek** ve vade tarihine kadar **işlem komisyonunu** ödemek |

Ödünç alan yükümlülüğünü yerine getirirse teminatları talebiyle **iade edilir**.

---

## 2. Üyelik, yükümlülükler ve kısıtlamalar
- **Üyelik:** Ödünç işlemine imkân veren SP faaliyet izni almış, ÖPP Prosedüründeki şartları sağlayan ve **Takasbank'ın yetkilendirdiği** kuruluşlar.
- Üye, **Ödünç Pay Piyasası Sözleşmesi**'ni imzalamalıdır.

**Üyelerin yükümlülükleri** (MKT Yönetmeliği md. 12'ye ek olarak):
a) Prosedürdeki ilke ve kurallara uymak,
b) kıymeti **teslim etmek**, **ÖPP işlem komisyonu** ve **ÖPP Takasbank komisyonunu** ödemek,
c) temsilcileri ve güncellemeleri bildirmek, istenen bilgi ve belgeleri süresinde vermek.

### Faaliyetlerin kısıtlanması
Takasbank, şu hâllerde üyenin ÖPP faaliyetlerini kısıtlayabilir:
- MKT Yönetmeliği md. 13 veya 14'e göre faaliyetlerin durdurulması, üyelikten çıkarılma veya kısıtlanma,
- yönerge, prosedür veya sözleşmedeki yükümlülüklere aykırılık,
- **protesto, haciz, ihtiyati tedbir**, faaliyetin durdurulması, yetki belgesinin iptali, işlem yasağı, **tedrici tasfiye veya iflas** ya da olumsuz istihbarat,
- istihbarat, mali tahlil veya derecelendirmeyle **kredi değerliliğinin** olmadığı veya azaldığının tespiti.

- Portföy veya müşterileri ÖPP'de **kıymet temerrüdündeyse** veya **işlem yasağı** varsa bu hesaplar adına işlem yapılamaz. Teminat tamamlama çağrısı durumunda işlem yapılıp yapılmayacağı prosedüre göre belirlenir.
- Takasbank, mevcut yükümlülüklerin kısmen veya tamamen **tasfiyesine** karar verirse yükümlülükler **muaccel** hâle gelir.
- Üyelik, MKT Yönetmeliği md. 15 ve Merkezi Takas Yönetmeliği md. 13'e göre sona erdirilebilir.

---

## 3. İşleme konu kıymetler ve piyasa değeri
**İşleme konu kıymetler:** Kredili alım ve açığa satışa konu olan **Yıldız Pazar** ve **Ana Pazar** payları ile **borsa yatırım fonu** katılma belgeleri.

**Piyasa değeri** = işlem anından önceki **son seansın ağırlıklı ortalama fiyatı** × kıymet adedi.
- Gün içi değerlemede borsada **saat 12:00**'de oluşan ağırlıklı ortalama fiyat kullanılır.
- Borsada işlem olmamışsa son seansın **en iyi alış ve en iyi satış emirlerinin aritmetik ortalaması**; biri yoksa **işlem gördüğü son seansın** ağırlıklı ortalama fiyatı.

- Kredili işlem ve açığa satış listesinden çıkarılan kıymetler, bu işlemlere konu oldukları son tarihin takas süresi sonundan itibaren **ödünce konu kıymetlerden çıkarılır**.

---

## 4. Temsilciler, limitler ve işlem sınırları
- İşlemler **ÖPP web servis** uygulamasıyla erişen yetkili kurumsal kullanıcı ve/veya üye **temsilcileri** aracılığıyla yapılır. Temsilciler emir verir, iyileştirir, değiştirir, iptal eder ve vadesi gelen işlemleri kapatır.
- Temsilcilere Takasbank **gizli şifre ve temsilci numarası** verir; iletilen emirlerin sorumluluğu **üyededir**.

### Limitler
- Takasbank üyelere **"ÖPP limiti"** tahsis eder. Bu limit **Takasbank'ın taahhüdü değildir**; Takasbank değiştirebilir.
- Ödünç alan; değerlenmiş teminatları ve limitleri içinde ödünç alabilir. Üyenin tüm ödünç alma işlemlerinin piyasa değeri toplamı **ÖPP limitini aşamaz**.
- **Ödünç verenler için limit şartı yoktur.**
- Her emrin azami piyasa değeri, **borsa spot piyasadaki azami işlem değeridir**.

### Kıymet bazında sınırlamalar
| Sınır | Halka açık tutarın en fazla |
|---|---|
| ÖPP'deki toplam açık işlemler | **%20** |
| **Üye** bazında açık işlemler | **%5** |
| **Tek bir sicil** bazında açık işlemler | **%3** |

> [!ezber] ÖPP kıymet sınırları: **%20 (toplam) / %5 (üye) / %3 (sicil)**.

---

## 5. Seans, valör ve vadeler
| Konu | Kural |
|---|---|
| **Seans** | **09:30 – 16:45**, tek seans |
| **Valör** | **Aynı gün**, **1 iş günü** veya **2 iş günü** |
| **Vadeler** | **Vadesiz**; 1 haftaya kadar **her gün**; **1, 2, 3 hafta**; **1, 2, 3, 6, 9, 12 ay** |

- Takasbank teknik nedenler, doğal afet, yoğun hatalı işlem gibi hâllerde saatleri **değiştirebilir**; sistemle duyurur.

### Vadesiz işlemler
- Ödünç alana **erken kapama**, ödünç verene **geri çağırma** hakkı verir.
- Vadesiz emirler **yalnız vadesiz emirlerle** eşleşir; günlük, KİE ve BEİE olarak verilebilir.
- Kapama talebi gelmedikçe işlem **en fazla bir yıl** sürer; sistemde gün sayısı **365**, vade **bir yıl** olarak tutulur.
- Geri çağırma / erken kapama gün içinde **18:00**'e kadar yapılabilir.

---

## 6. Emir unsurları ve iletilmesi
**Zorunlu alanlar:**
- **Emir tipi:** **talep** (ödünç alma) veya **teklif** (ödünç verme),
- **Emir türü:** günlük, kalanı iptal et, blok eşleşmezse iptal et,
- **Müşteri tipi:** portföy, müşteri veya **Fon/YO** (fon kodu; müşteri ve portföyde **MKK hesap numarası**),
- **Kıymet grubu:** **E** (pay) veya **BF** (BYF),
- kıymet kodu, **adet**, **valör**, **vade türü**,
- **Komisyon oranı:** taraflarca **serbestçe** belirlenir; adımlar **%0,05 (onbinde beş)** ve katları; hesaplamada **1 yıl = 365 gün**.

### İletim
- Emirler Takasbank uygulamalarıyla portföy, müşteri, fon ve YO bazında iletilir; tek tek veya **toplu** girilebilir.
- İlk kez işlem yapacak hesabın **MKK sicil numarası** bir defaya mahsus sisteme tanımlanır; emirler **sicil bazında halka açıklık oranı** kontrol edilerek girilir.
- Her emre **emir numarası** verilir.
- Talep veya teklif için üyenin **garanti fonu katkı payı** yükümlülüğünü yerine getirmiş olması gerekir (tamamlama süresinde işlem sürebilir).
- **Ödünç talebi** için üyenin yeterli **limiti**, üye veya müşterinin yeterli **teminatı** olmalıdır.
- Sisteme bağlanılamazsa emirler **e-postayla** Takasbank'a gönderilebilir; emir zamanı Takasbank'ın sisteme girdiği saattir; yazılı talimatın aslı **en geç 5 iş günü** içinde iletilir.

---

## 7. Emir türleri, değiştirme ve iptal
| Emir türü | Özellik |
|---|---|
| **Günlük emir** | Seans sonunda gerçekleşmeyen kısmı otomatik **iptal**; girildiği anda gerçekleşmeyen kısım **pasif** bekler |
| **Kalanı iptal et (KİE)** | Gerçekleşmeyen kısım **pasife yazılmaz**, iptal edilir |
| **Blok eşleşmezse iptal et (BEİE)** | Girildiği anda **tamamen** gerçekleşmezse iptal |
| **Özel emir** | Taraflar **önceden anlaşır**, işlemi ÖPP'nin teminat ve limit sınırları içinde ÖPP'den geçirir; karşı üyenin kodu girilir, karşı üye **onaylarsa** işlem olur. Üye **kendisini karşı üye** olarak da girebilir |

### Değiştirme
- Değiştirilen emirler **yeni emir numarası ve zaman** alır; ancak **emir türü değişikliğinde** öncelik ve numara **değişmez**.
- **Özel emirlerde değişiklik yapılamaz.**
- **Komisyon oranı** iki yönde de değiştirilebilir (eşleşebilecek kısım veya tamamı için).
- **Valör ve vade türü**, eşleşme sağlanırsa değiştirilebilir; kısmi eşleşmede değişiklik yalnız **eşleşen kısma** yansır.

### İptal
- Pasifte bekleyen kısımlar seans içinde iptal edilebilir; **özel emirler** hem giren hem muhatap tarafından iptal edilebilir.
- Seans sonunda gerçekleşmeyen emirler **sistemce iptal** edilir.
- Borsada sırası **kapatılan** kıymette yeni emir girilemez, pasif emirler iptal edilebilir.
- **İşlem yasağı** olan müşterilerin ve faaliyeti durdurulan üyelerin pasif emirleri **Takasbank** tarafından iptal edilir.

---

## 8. Eşleşme ve yayın
- Öncelik: **talepte en yüksek**, **teklifte en düşük** komisyon oranı; eşitse **zaman**.
- Mevcut talepten düşük oranlı teklif gelirse **talebin oranı**; mevcut tekliften yüksek oranlı talep gelirse **teklifin oranı** üzerinden işlem olur (yani **önce var olan emrin oranı**).
- Müşteri hesapları farklıysa iki taraf **aynı üye** olabilir.
- **İşlemlerin iptali mümkün değildir.** Ancak ileri valörlü işlemlerde işlem günü ile valör arasında özel durumlar çıkarsa Takasbank, takas gerçekleşmeden **iptal edebilir**.

> [!bilgi] **Talep = ödünç alma**, **teklif = ödünç verme**. Ödünç alan daha yüksek komisyon önerdikçe, ödünç veren daha düşük komisyon istedikçe öne geçer.

### MKK hesapları
- İleri valörlü işlemde ödünç verenin **ÖPP Alt Hesabında** işlem günü bloke edilen kıymet, valör günü ödünç alanın **Serbest Alt Hesabına** ve/veya **Ödünç Kapama Blokaj Hesabına** aktarılır.
- Açık işleminin vadesine eşit valörle aynı kıymetten tekrar ödünç alınırsa yeni kıymetler **Ödünç Kapama Blokaj Hesabına** alınır; bunlar için **ilave teminat gerekmez**.

### Emirlerin yayımlanması
- Veri yayın kuruluşları ve Takasbank **Piyasa Takip Ekranı** ("En İyi Talepler/Teklifler", "Veri Yayın Derinlik", "İşlem Ortalamaları" raporları).
- Taleplerde en yüksek, tekliflerde en düşük oranlılar duyurulur; aynı oranlılar **toplam** görünür; derinlik **beş kademe**.
- Vadesiz emirlerde veri yayınında gün sayısı ve vade **boş**, Takasbank ekranında **365 gün / 1 yıl** görünür.
- **Özel emirler ve bunlarla oluşan işlemler veri ekranlarına yansıtılmaz.**

---

## Bugünün özeti
- Takasbank ÖPP'yi **işletir** ve **açık teklif yöntemiyle merkezi karşı taraftır**; muhatabı **üyedir**.
- İşleme konu: **Yıldız ve Ana Pazar** payları (kredili/açığa satış listesindeki) ve **BYF**.
- Piyasa değeri: önceki seans **AOF**; gün içi değerlemede **12:00** AOF.
- ÖPP limiti **taahhüt değildir**; ödünç verene **limit yok**. Sınırlar **%20 / %5 / %3**.
- Seans **09:30-16:45**; valör **T+0, T+1, T+2**; vade vadesizden **12 aya** kadar.
- Vadesiz işlem: **erken kapama / geri çağırma**, en çok **1 yıl**, işlem **18:00**'e kadar.
- Komisyon adımı **%0,05**; 1 yıl **365 gün**.
- Emir türleri: günlük, KİE, **BEİE**, **özel emir** (değiştirilemez, yayına yansımaz).
- Eşleşme: talepte **yüksek**, teklifte **düşük** komisyon; işlemler **iptal edilemez**.
`,
  sorular: [
    {
      s: "Takasbank'ın **Ödünç Pay Piyasası (ÖPP)**'ndaki konumu ile ilgili hangisi doğrudur?",
      c: ["ÖPP'yi işletir ve açık teklif yöntemiyle merkezi karşı taraftır", "Yalnızca aracılık eder; işlemlerde taraf olmaz", "Yalnızca ödünç verenlerin karşısında yer alır", "Müşteri işlemlerinde doğrudan müşteriyi muhatap alır", "İşlemlerde merkezi karşı taraf olarak yalnızca vade sonunda devreye girer"],
      d: 0,
      a: "Takasbank ÖPP'yi **işletir** ve **açık teklif yöntemiyle merkezi karşı taraftır**: ödünçler eşleştiği anda araya girer. Müşteri işlemlerinde Takasbank'ın **muhatabı üyedir**.",
      k: "1006 resmi not s. 196"
    },
    {
      s: "Ödünç Pay Piyasasında **işleme konu olabilecek kıymetler** hangileridir?",
      c: ["Borsada işlem gören tüm paylar, tahviller ve kira sertifikaları", "Devlet iç borçlanma senetleri ve özel sektör tahvilleri", "Yalnızca BIST 30 Endeksindeki paylar ve varantlar", "Alt Pazar, PÖİP ve Yakın İzleme Pazarı payları", "Yıldız ve Ana Pazarın listedeki payları ile BYF'ler"],
      d: 4,
      a: "ÖPP'de işleme konu kıymetler, kredili alım ve açığa satışa konu olan **Yıldız Pazar** ve **Ana Pazar** payları ile **borsa yatırım fonu** katılma belgeleridir.",
      k: "1006 resmi not s. 197"
    },
    {
      s: "ÖPP'de **limitler** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["Takasbank üyelere ÖPP limiti tahsis eder", "ÖPP limiti Takasbank'ın taahhüdü değildir", "Ödünç alma işlemlerinin piyasa değeri toplamı ÖPP limitini aşamaz", "Ödünç verenler için de ödünç alanlar gibi limit şartı vardır", "Her emrin azami piyasa değeri borsa spot piyasadaki azami işlem değeridir"],
      d: 3,
      a: "**Ödünç verenler için limit şartı yoktur**. Limit, ödünç alma işlemleri için uygulanır ve Takasbank'ın taahhüdü değildir.",
      k: "1006 resmi not s. 198"
    },
    {
      s: "ÖPP'de ödünce konu bir payda **tek bir sicil bazında** açık işlemlerin toplamı, halka açık tutar toplamının en fazla yüzde kaçı olabilir?",
      c: ["%1", "%3", "%5", "%10", "%20"],
      d: 1,
      a: "Kıymet bazında sınırlar: ÖPP'deki toplam açık işlemler **%20**, **üye** bazında **%5**, **tek bir sicil** bazında **%3**.",
      k: "1006 resmi not s. 198"
    },
    {
      s: "ÖPP'de **vadesiz işlemler** ile ilgili hangisi doğrudur?",
      c: ["Vadesiz emirler, vadeli emirler dâhil her vade türündeki emirle eşleşebilir", "Geri çağırma ve erken kapama işlemleri yalnızca seans açılışında yapılabilir", "Vadesiz işlemler kapama talebi olmadıkça süresiz devam eder", "Erken kapama ve geri çağırma hakkı verir; en fazla bir yıl sürer", "Vadesiz işlemlerde komisyon hesaplanmaz ve teminat istenmez"],
      d: 3,
      a: "Vadesiz işlemler ödünç alana **erken kapama**, ödünç verene **geri çağırma** hakkı verir; **yalnız vadesiz emirlerle** eşleşir; kapama talebi gelmezse **en fazla bir yıl** sürer. Geri çağırma/erken kapama gün içinde **18:00**'e kadar yapılabilir.",
      k: "1006 resmi not s. 198-199"
    },
    {
      s: "ÖPP emirlerinde **komisyon oranı** ile ilgili hangisi doğrudur?",
      c: ["Taraflarca serbestçe belirlenir; adım %0,05, 1 yıl 365 gündür", "Takasbank tarafından her kıymet için sabit olarak belirlenir", "Adımlar %0,01 ve katlarıdır, hesaplamada 1 yıl 360 gün alınır", "Yalnızca ödünç veren tarafça belirlenir ve değiştirilemez", "SPK tarafından her ay ilan edilir"],
      d: 0,
      a: "Komisyon oranı taraflarca **serbestçe** belirlenir; emir komisyon adımları **%0,05 (onbinde beş)** ve katlarıdır; hesaplamada **1 yıl = 365 gün** alınır.",
      k: "1006 resmi not s. 199"
    },
    {
      s: "ÖPP'deki **özel emir** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["Taraflar önce kendi aralarında anlaşır", "Emir girilirken karşı üyenin kodu da girilir", "Karşı üye onaylarsa işlem gerçekleşir", "Özel emirler seans içinde serbestçe değiştirilebilir", "Özel emirler ve bunlarla oluşan işlemler veri ekranlarına yansıtılmaz"],
      d: 3,
      a: "**Özel emirlerde değişiklik yapılamaz**; ancak hem giren hem muhatap tarafından **iptal** edilebilirler. Özel emirler veri yayın ekranlarına yansıtılmaz.",
      k: "1006 resmi not s. 200-201"
    },
    {
      s: "ÖPP'de emirlerin **eşleşmesinde** öncelik kuralı hangisidir?",
      c: ["Talepte en düşük, teklifte en yüksek komisyon oranı öncelikli", "Vadesi en kısa olan emir öncelikli", "Yalnızca zaman önceliği uygulanır", "Adedi en büyük olan emir öncelikli", "Talepte en yüksek, teklifte en düşük oran"],
      d: 4,
      a: "Emirler **talepte en yüksek**, **teklifte en düşük** komisyon oranlı emirlere öncelik verilerek eşleşir; oran aynıysa **zaman önceliği** uygulanır. İşlemler kural olarak **iptal edilemez**.",
      k: "1006 resmi not s. 201"
    }
  ]
});
