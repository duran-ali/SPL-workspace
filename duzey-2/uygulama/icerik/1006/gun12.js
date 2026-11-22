SPL.gun("1006", 12, {
  okuma: `
## Bugünün haritası
Bugün Pay Piyasasında girilebilen **emir tiplerini**, emirlerin **değiştirilmesi ve iptalini** ve **emir giriş kurallarını** çalışıyoruz. Orta nokta ve AOF emirlerinin sınırları, maksimum emir değeri grupları ve geçerlilik süreleri sınavda sık çıkar.

1. **Limit, piyasa** ve **piyasadan limite** emirler
2. **Dengeleyici**, **koşullu** ve **kotasyon** emirleri
3. **Orta nokta** ve **AOF** emirleri
4. **Küsurat** ve **açığa satış** emirleri
5. Emir **değiştirme ve iptal**; ücretlendirme ve **OTR**
6. **Hatalı işlem düzeltme**
7. **Fiyat değişme sınırları** ve **maksimum emir değeri**
8. **Geçerlilik süreleri**, hesap numarası ve **AFK**

---

## 1. Limit, piyasa ve piyasadan limite emirler
Aksi belirtilmedikçe her emir **girildiği gün** geçerlidir; ancak süre veya son tarih belirtilerek de verilebilir.

| Emir | Özelliği |
|---|---|
| **Limit fiyatlı (LFE)** | Fiyat ve miktar belirtilir. Gerçekleşmeyen kısım (KİE değilse) geçerlilik süresi sonuna kadar **pasif** bekler. |
| **Piyasa emri** | Fiyat yok, **yalnız miktar**. Karşı taraftaki **en iyi fiyatlı** emirlerle eşleşir. **Yalnız KİE** olarak girilebilir; karşıda emir yoksa **otomatik iptal**. |
| **Piyasadan limite** | Fiyatsız girilir; karşı taraftaki **yalnız en iyi fiyat kademesiyle** eşleşir. Kalan kısım **son işlem fiyatını alarak limit emre** dönüşür ve pasife yazılır (KİE ise yazılmaz). |

### Piyasa emri ayrıntıları
- Kapanış ve tek fiyat emir toplama aşamasında girilen piyasa emirleri eşleştirmeye kadar bekler. İşleme dönüşmezse sonraki bölüme **aktarılmaz, iptal edilir**.
- **Azami tutar**, sıradaki **maksimum emir değeri** kadardır. Hesap **son işlem fiyatıyla** yapılır; yoksa önceki kapanış, o da yoksa borsanın manuel girdiği fiyat esas alınır. Hiçbiri yoksa işlem olana kadar piyasa emri girilemez.
- **Serbest marjlı** ve ilk işlem fiyatının baz fiyat olduğu sıralarda, baz fiyatın oluştuğu seansın sonuna kadar **piyasa emri** ve **piyasadan limite emir** girilemez.

### Piyasadan limite emir ayrıntıları
- Kapanış veya tek fiyat aşamasında işleme dönüşmezse, sürekli işleme geçerken **son işlem fiyatını alarak** limit emre dönüşür.
- O bölümde **fiyat oluşmazsa** veya sürekli işlemde girildiği anda **hiç işlem görmezse** iptal edilir.

> [!ezber] **Piyasa emri** kalan kısmı **iptal eder**. **Piyasadan limite emir** kalan kısmı **son işlem fiyatından limit emre** çevirir.

---

## 2. Dengeleyici, koşullu ve kotasyon emirleri
**Dengeleyici emirler:** Tek fiyat uygulanan tüm bölümlerde fiyat belirlemede **hesaba katılmayan** ama eşleşme fiyatında karşılanmadan kalan emirlerle işlem yapmak için girilen emirler. Kalan emir bitince kendi aralarında eşleşebilirler; eşleşmeyenler **iptal edilir**.

### Koşullu emirler (dört tür)
| Tür | Açıklama | Durum |
|---|---|---|
| a) **Miktar koşullu** | Miktarın tamamı karşılanmazsa işlem görmez (AON, FOK) | **Henüz devrede değil** |
| b) **Fiyat koşullu** | Cari fiyat veya en iyi alış/satış belirtilen seviyeye ulaşınca aktifleşir | **Henüz devrede değil** |
| c) **Zaman koşullu** | Seansın belirli bölümünde aktifleşir (at open / at close) | **Henüz devrede değil** |
| ç) **Kısmi görünme koşullu** | Limit emrin bir kısmı görünür; görünen kısım bitince gizli kısımdan belirlenen miktar açığa çıkar | **Kullanılıyor** |

- Kısmi görünme koşullu emirde açığa çıkan kısım, **yeni girilmiş bir emir gibi** fiyat ve zaman önceliğine göre yerini alır.

**Kotasyon emirleri:** Limit fiyatlı alış ve satış emrinden oluşan, **yalnız piyasa yapıcı ve likidite sağlayıcıların** girebildiği emir tipi. **Bütün olarak** veya yalnız alış ya da satış tarafı iptal edilebilir.

---

## 3. Orta nokta ve AOF emirleri
| | **Orta nokta (mid-point) emri** | **AOF (TAR) emri** |
|---|---|---|
| Amaç | Büyük miktarlı emirlerin kendi aralarında, **düşük maliyetle** eşleşmesi | Gün sonunda oluşacak **AOF**'yi referans alarak işlem |
| Fiyat | Normal emir defterindeki **en iyi alış ve en iyi satışın aritmetik ortalaması** | **AOF** veya **AOF ± belirlenen sayıda fiyat adımı** |
| Defter | **Ayrı ve kapalı** emir defteri, sürekli otomatik eşleşme | **Ayrı sıra** (ör. GARAN.AOF) |
| Sınır | **Tutar:** asgari **100.000 TL**, azami **30 milyon TL** | **Miktar:** asgari **100.000 lot**, azami **10 milyon lot** |
| Bilgi | Miktar piyasaya gönderilir, hacme dâhil; **fiyat istatistikleri yayımlanmaz** | Piyasaya bilgi verilmez; **günlük bültende** yer alır |
| Kapsam | **Yalnız BIST 30** payları | **Yalnız BIST 30** payları |

> [!dikkat] Orta nokta emri kısmen işlem görür ve kalan kısım 100.000 TL'nin altına düşerse, kalan miktar değiştirilmediği sürece bu alt sınır **aranmaz**.

---

## 4. Küsurat ve açığa satış emirleri
**Küsurat emirler:** İşlem biriminden **daha az** miktarlı emirler. Yalnız miktar girilir, **fiyat yazılmaz**; işlem o anda **.E sırasındaki son işlem fiyatından** yapılır. Örnek: ABCDE.KE sırasında 0,3 adetlik işlem, ABCDE.E'deki son işlemin fiyatını alır. **Bu emir türü henüz devrede değildir.**

**Açığa satış emirleri:** SPK ve borsa düzenlemelerine göre yapılan açığa satışlara ilişkin emirler; belirlenen **fiyat sınırlamalarına** uyulur.

---

## 5. Emirlerde değiştirme ve iptal
Usul ve esaslar **yönetim kurulunca** belirlenir.

- **Miktar artırma** → emir yeni girilmiş sayılır, **zaman önceliğini kaybeder**.
- **Fiyat değiştirme** (yükseltme veya düşürme) → **zaman önceliğini kaybeder**.
- **Miktar azaltma** → önceliği **korur**.
- **İyileştirme:** alışta fiyatı **yükseltmek**, satışta **düşürmek**. **Kötüleştirme:** alışta **düşürmek**, satışta **yükseltmek**.
- Emirlerin işlem görmeyen kısmı **istenildiği an iptal** edilebilir.

### Ücretlendirme
- **Cari fiyat kademesindeki** emirlerde iptal, miktar azaltma ve fiyat kötüleştirmeye **süreye bağlı üç aşamalı** ücret uygulanır. Süre emrin kabulünden başlar ve **her değişiklikten sonra yeniden** başlar.
- Cari kademe dışındaki değişiklikler **farklı oranda** ücretlendirilir.

**Ücret alınmayanlar:**
- Varant ve sertifika pazarındaki emir/kotasyon iptalleri, azaltımları ve kötüleştirmeleri,
- **Özel işlem bildirimi** emir iptalleri,
- Piyasa yapıcıların **kotasyon** emirlerinde miktar azaltma ve fiyat kötüleştirme (kotasyon dışındakilerden alınır),
- Sistemin **otomatik** yaptığı veya borsanın yaptığı iptaller.

### Yüksek frekanslı işlem (YFİ) kullanıcıları ve OTR
- YFİ kullanıcıları bu ücret tarifesinden **muaftır**; bunun yerine **emir/işlem oranı (OTR)** uygulanır.
- Girilen, düzeltilen ve iptal edilen toplam emir sayısının işlem sayısına oranı **5:1'i aşarsa**, aşıma neden olan her işlemden **0,50 TL** maktu ücret alınır.
- Hesap **günlük**, tahakkuk **aylık** (borsa paylarıyla birlikte).

---

## 6. Hatalı işlem düzeltme
- Düzeltmeler **aynı gün (T+0)** ve **ertesi gün (T+1)** gün sonuna kadar **Takasbank** sisteminde, **Takas Terminali** ile yapılır.
- Düzeltme artık **emir bazında değil işlem bazında** yapıldığından adı "**hatalı işlem düzeltme**"dir.
- Yalnız **hesap** (işlem hesabı), **müşteri kategorisi** (M/P/F) ve **müşteri hesabı** (MKK müşteri numarası) düzeltilebilir.
- Aynı emirden doğan birden fazla işlem varsa **tamamı** aynı şekilde düzeltilmelidir.
- Düzeltme **ücrete tabidir** (Takasbank tarifesi).

---

## 7. Emir giriş kuralları ve sınırlamalar
**Öncelik:** Dengeleyici emirler hariç, önce **fiyat** sonra **zaman** önceliği.

### Fiyat değişme sınırları
- Baz fiyata fiyat marjı uygulanarak bulunur; alt sınır **yukarı**, üst sınır **aşağı** adıma yuvarlanır.
- **YPAH** ve **İş Bankası Kurucu** sıralarında **±%50**.
- Varant ve sertifikalarda **hareketli** fiyat değişme sınırları.

| Yetki | Kimde? |
|---|---|
| Sınırları **iki katına kadar** genişletmek | **PPD Direktörü** |
| Sınırları **kaldırmak veya değiştirmek** | **Borsa Genel Müdürü** |
| Sınırları pazar ve emir türü bazında **farklı belirlemek** | **Yönetim kurulu** |

- **Özsermaye hâllerinde** referans fiyat belirlenirse fiyat değişme sınırları **uygulanmaz**.

### Maksimum emir değeri (maksimum TL kuralı)
Limit, piyasa, piyasadan limite, dengeleyici, kısmi görünme koşullu emirler ve kotasyonlarda bir seferde girilen emrin TL değeri sınırı aşamaz. Paylar **günlük ortalama işlem hacmi** ve **piyasa değerine** göre **6 gruba** ayrılır:

| Grup | Maksimum emir değeri |
|---|---|
| 1. grup | **10 milyon TL** |
| 2. grup | 7,5 milyon TL |
| 3. grup | 5 milyon TL |
| 4. grup | 2,5 milyon TL |
| 5. grup | 1 milyon TL |
| 6. grup | **0,5 milyon TL** |

- Paylar **6 ayda bir** son 6 aylık verilerle yeniden değerlendirilir; sınırlar en az **iki gün önce** duyurularak **Ocak ve Temmuz**'da güncellenir.
- Yeni işlem görecek payın sınırını **PPD** resen belirler.
- Piyasa yapıcının bir kerede girebileceği **maksimum kotasyon** tutarı, payın grubundaki miktarla sınırlıdır.

| Diğer araçlar | Maksimum emir değeri |
|---|---|
| **Varant (.V)** | **250.000 TL** |
| **Sertifika (.C)** | 1 milyon TL |
| BYF, GMF, GSF, GMS | **5 milyon TL** |
| Temerrüt ve resmî müzayede | 2,5 milyon TL |
| Birincil piyasa (.BE) | 500.000 TL |
| YPAH kuponu (.R) | İlgili **pay sırasıyla aynı** |
| Emtia sertifikası | 1 milyon TL |

---

## 8. Geçerlilik süreleri, hesap numarası ve AFK
| Geçerlilik | Açıklama |
|---|---|
| **Günlük emir** | Aksi belirtilmedikçe gün boyu geçerli; işlem görmezse **gün sonunda iptal** |
| **Kalanı iptal et (KİE)** | Girildiği anda karşılanmayan kısmı **otomatik iptal** |
| **İptale kadar geçerli (İKG)** | Yalnız talep toplamalı halka arzlarda (**.HE**), halka arz süresi sonuna kadar |
| **Tarihli emir** | Son tarih belirtilerek girilir; **BISTECH başlangıcında devreye alınmamıştır** |

- Emrin **süresi uzatılırsa öncelik kaybedilir**, **kısaltılırsa korunur**.
- Süresi dolan emirler; fiyatı marj dışına çıkan veya fiyat adımına uymayan emirler **iptal edilir**. Baz fiyat sermaye artırımı gibi nedenlerle değişirse veya üye kodu değişirse **tüm tarihli ve süreli emirler** iptal edilir.

### Müşteri / portföy / fon ayrımı ve hesap numarası
- Emirler **portföy, müşteri, fon** ayrımıyla girilmelidir; FixAPI girişlerinde de sorumluluk **üyededir**.
- Kodu olmayan yeni fonlar için **fon kurucusu Takasbank'a** başvurur. Yatırım ortaklıkları için ise kurucu veya aracı üye **PPD'ye** dilekçe (ekinde SPK kuruluş izni) verir; kod **KAP**'ta duyurulur.
- Yatırım ortaklığı emirlerinde "**Fon**" belirteci ve AFK alanına **üç karakterli** kod girilir.
- Tüm emirlerde **müşteri hesap numarası zorunludur** ve **MKK**'daki hesap numarasıyla aynı olmalıdır.

### AFK (emir aracısı / fon kodu) alanı
| Kim? | AFK alanına ne yazılır? |
|---|---|
| İşlem aracısı kuruluş, emir iletimine aracılık eden kuruluş için | Emri iletilen kurumun **üye kodu** |
| Fon ve yatırım ortaklığı emirleri | Fonun **3 haneli kodu** |
| Piyasa yapıcı kotasyonu | Müşteri hesabıyla **PYM**, portföy hesabıyla **PYP** |
| Likidite sağlayıcı kotasyonu | Müşteri hesabıyla **LSM**, portföy hesabıyla **LSP** |

---

## Bugünün özeti
- **Piyasa emri** yalnız KİE; kalanı iptal. **Piyasadan limite** emrin kalanı son işlem fiyatından limit emre döner.
- Koşullu emirlerden yalnız **kısmi görünme koşullu** devrede; AON, FOK, fiyat ve zaman koşullu henüz yok.
- **Orta nokta:** 100.000 TL – 30 milyon TL, en iyi alış-satış ortalaması. **AOF:** 100.000 – 10 milyon lot. İkisi de yalnız **BIST 30**.
- Miktar artırma ve fiyat değiştirme **önceliği kaybettirir**; miktar azaltma ve süre kısaltma **korur**.
- YFİ: **OTR 5:1** aşılırsa işlem başına **0,50 TL**.
- Hatalı işlem düzeltme **T+0 ve T+1**, Takasbank'ta; yalnız hesap, kategori, müşteri hesabı.
- Sınır genişletme: **PPD Direktörü (2 kat)**; kaldırma: **Genel Müdür**.
- Maksimum emir değeri **10 / 7,5 / 5 / 2,5 / 1 / 0,5 milyon TL**; varant **250.000 TL**.
- İKG yalnız **.HE**; tarihli emir henüz devrede değil.
`,
  sorular: [
    {
      s: "**Piyasadan limite emir** ile ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["Karşı taraftaki en iyi fiyat kademesiyle eşleşir; kalan kısmı son işlem fiyatından limit emre dönüşür", "Karşı taraftaki tüm fiyat kademeleriyle eşleşir ve kalan kısmı iptal edilir", "Yalnızca kalanı iptal et (KİE) olarak girilebilir ve karşı tarafta hiç emir yoksa otomatik olarak iptal edilir", "Fiyat ve miktar belirtilerek girilir ve geçerlilik süresi sonuna kadar pasif bekler", "Yalnızca piyasa yapıcı ve likidite sağlayıcı üyeler tarafından girilebilir"],
      d: 0,
      a: "Piyasadan limite emir fiyatsız girilir, karşı taraftaki **yalnız en iyi fiyat kademesiyle** eşleşir; işleme dönüşmeyen kısım **son işlem fiyatını alarak limit emre** dönüşür ve pasife yazılır (KİE ise yazılmaz). Yalnız KİE olarak girilebilen emir **piyasa emridir**.",
      k: "1006 resmi not s. 70-71"
    },
    {
      s: "Aşağıdaki **koşullu emir** türlerinden hangisi Pay Piyasasında **kullanılmaktadır**?",
      c: ["Hepsi ya da hiçbiri (AON) emirleri", "Fiyat koşullu emirler", "Zaman koşullu (at open / at close) emirler", "Kısmi görünme koşullu emirler", "Gerçekleşmezse iptal et (FOK) emirleri"],
      d: 3,
      a: "Koşullu emirlerden yalnız **kısmi görünme koşullu** emirler kullanılır. **Miktar koşullu** (AON, FOK), **fiyat koşullu** ve **zaman koşullu** emirler henüz devreye alınmamıştır.",
      k: "1006 resmi not s. 71"
    },
    {
      s: "**Orta nokta (mid-point) emirleri** ile ilgili hangisi **yanlıştır**?",
      c: ["Değeri asgari 100.000 TL, azami 30 milyon TL olabilir", "En iyi alış ve en iyi satış emirlerinin fiyatlarının aritmetik ortalaması ile fiyatlanır", "Ayrı ve kapalı bir emir defterinde işlem görür", "Gerçekleşen işlemlerin fiyat istatistikleri piyasada anlık olarak yayımlanır", "Yalnızca BIST 30 Endeksi kapsamındaki paylarda kullanılır"],
      d: 3,
      a: "Orta nokta işlemlerinde miktar bilgisi piyasaya gönderilir ve hacme dâhil edilir; ancak **fiyat istatistikleri piyasada yayımlanmaz**.",
      k: "1006 resmi not s. 72"
    },
    {
      s: "**AOF (TAR) emirlerinin** içereceği miktar sınırları nedir?",
      c: ["Asgari 1.000 lot, azami 1 milyon lot", "Asgari 10.000 lot, azami 5 milyon lot", "Asgari 100.000 lot, azami 10 milyon lot", "Asgari 100.000 TL, azami 30 milyon TL", "Asgari 250 lot, azami 100.000 lot"],
      d: 2,
      a: "AOF emirlerinde TL sınırı yoktur; miktar **asgari 100.000 lot**, **azami 10 milyon lot**tur. 100.000 TL – 30 milyon TL sınırı **orta nokta** emirlerine aittir. Her ikisi de yalnız BIST 30 paylarında kullanılır.",
      k: "1006 resmi not s. 72, 75"
    },
    {
      s: "Sistemde bekleyen bir alış emri üzerinde yapılan aşağıdaki değişikliklerden hangisi emrin **zaman önceliğini kaybettirmez**?",
      c: ["Emrin miktarının artırılması", "Emrin fiyatının yükseltilmesi", "Emrin fiyatının düşürülmesi", "Emrin miktarının azaltılması", "Emrin geçerlilik süresinin uzatılması"],
      d: 3,
      a: "Miktar artırma ve fiyat değiştirme (yükseltme veya düşürme) emri yeni girilmiş sayar ve **önceliği kaybettirir**; süre uzatma da önceliği kaybettirir. **Miktar azaltma** ve süre kısaltma önceliği korur.",
      k: "1006 resmi not s. 73, 76"
    },
    {
      s: "**Yüksek frekanslı işlem (YFİ)** kullanıcılarına uygulanan **OTR bazlı fazla kullanım ücreti** ile ilgili hangisi doğrudur?",
      c: ["Emir/işlem oranı 10:1'i aşarsa her operasyondan 1 TL alınır", "Hesaplamalar aylık bazda yapılır ve ücretler yıllık olarak tahakkuk ettirilir", "Emir/işlem oranı 3:1'i aşarsa ilgili günkü toplam işlem hacminin binde 1'i oranında ücret alınır", "YFİ kullanıcıları hem OTR ücretine hem de standart iptal ücretine tabidir", "Emir/işlem oranı 5:1'i aşarsa aşıma neden olan her operasyondan 0,50 TL maktu ücret alınır"],
      d: 4,
      a: "YFİ kullanıcıları standart iptal ücretinden **muaftır**; emir/işlem oranı **5:1'i aşarsa** aşıma neden olan her operasyondan **0,50 TL** alınır. Hesap **günlük**, tahakkuk **aylık** yapılır.",
      k: "1006 resmi not s. 73"
    },
    {
      s: "**Hatalı işlem düzeltme** bildirimleri ile ilgili hangisi **yanlıştır**?",
      c: ["Düzeltmeler T+0 ve T+1 günü sonuna kadar Takasbank sisteminde yapılır", "Düzeltmeler emir bazında değil işlem bazında yapılır", "İşlemin fiyatı ve miktarı da düzeltilebilir", "Aynı emirden doğan tüm işlemlerde aynı değişiklik yapılmalıdır", "İşlem düzeltme uygulaması ücrete tabidir"],
      d: 2,
      a: "Düzeltmede yalnız **hesap**, **müşteri kategorisi** (M/P/F) ve **müşteri hesabı** (MKK numarası) alanları değiştirilebilir; **fiyat ve miktar düzeltilemez**.",
      k: "1006 resmi not s. 74"
    },
    {
      s: "Pay Piyasasında **maksimum emir değeri** sınırları ile ilgili hangisi doğrudur?",
      c: ["Paylar 6 gruba ayrılır; sınırlar 10 milyon TL ile 0,5 milyon TL arasındadır", "Tüm paylarda tek bir sınır olarak 10 milyon TL maksimum emir değeri uygulanır", "Varantlarda maksimum emir değeri 5 milyon TL'dir", "Gruplar her ay yeniden belirlenir ve duyurulduğu günü izleyen gün yürürlüğe girer", "Yeni işlem görecek payların sınırını SPK belirler"],
      d: 0,
      a: "Paylar işlem hacmi ve piyasa değerine göre **6 gruba** ayrılır: 10 / 7,5 / 5 / 2,5 / 1 / **0,5 milyon TL**. Gruplar **6 ayda bir** güncellenir (Ocak ve Temmuz). Varantta sınır **250.000 TL**'dir; yeni payların sınırını **PPD** belirler.",
      k: "1006 resmi not s. 75"
    }
  ]
});
