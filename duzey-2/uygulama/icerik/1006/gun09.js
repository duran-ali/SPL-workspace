SPL.gun("1006", 9, {
  okuma: `
## Bugünün haritası
Dün işlemlerin temel kavramlarını gördük. Bugün **işlem yöntemlerinin** nasıl işlediğine bakıyoruz: **sürekli işlem**, **tek fiyat**, **açılış seansı**, **kapanış seansı** ve **kapanış fiyatından işlemler**. Açılış fiyatı algoritması ve kapanış seansındaki ±%3 kuralı sınavın klasiğidir.

1. **Sürekli işlem yöntemi** ve geçici sıralar
2. **Tek fiyat yöntemi**: kimlere uygulanır, günde 5 kez fiyat
3. Tek fiyatta **emir toplama** ve **fiyat belirleme** aşamaları
4. **Açılış fiyatı algoritması** ve **ARF**
5. Emirlerin işlem görme sırası ve **dengeleyici emirler**
6. Veri yayını
7. **Kapanış seansı** ve ±%3 kuralı
8. **Kapanış fiyatından işlemler**

---

## 1. Sürekli işlem yöntemi
Emirlerin işlem süresi boyunca **sürekli**, öncelik kurallarına göre **farklı fiyat seviyelerinden** eşleştirildiği yöntem. Diğer adı **"çok fiyat yöntemi"**.

a) Emirler belirlenmiş kurallarla sisteme iletilir.
b) Yönetim kurulunun getirdiği **azami miktar veya tutar** sınırlarına uyulur.
c) Emirler iletildikleri andan itibaren öncelik kurallarına göre işlem görebilir.
ç) Üyeler, başka üyelerin girdiği emirler üzerinde **tamamen veya kısmen** işlem yapabilir.

- Ana sıraya bağlı, geçici olarak **belirli bir süre için açılan** sıralarda **tek fiyat yöntemi uygulanmaz**.

| Geçici ve süreli işlemler | İşlem yöntemi |
|---|---|
| Resmî müzayede (ME, MR, MF …) | Sürekli işlem |
| Birincil piyasa: YPAH'tan kalan payların satışı | Sürekli işlem |
| Temerrüt işlemleri | Sürekli işlem |
| Yeni pay alma hakkı işlemleri | Sürekli işlem |
| **Toptan alış satış** | **Özel işlem bildirimi** yoluyla, **Pay Piyasası uzmanlarınca** |

---

## 2. Tek fiyat yöntemi
Emirler belirlenen zaman dilimlerinde **eşleştirme yapılmadan** toplanır; süre sonunda **en çok işlem miktarını** sağlayan **tek fiyat** hesaplanır ve tüm işlemler bu fiyattan yapılır.

a) Emirler kurallara göre iletilir; b) azami sınırlara uyulur;
c) emir toplama süresince **işlem gerçekleşmez**;
ç) bu sürede emirler **iptal edilebilir ve değiştirilebilir**;
d) süre bitince tek fiyat belirlenip ilan edilir, işlemler bu fiyattan öncelik kurallarına göre yapılır.

### Tek fiyat yöntemi kimlere uygulanır?
- Sürekli işlem görmesi için **piyasa yapıcı** atanması zorunlu olup piyasa yapıcısı **bulunmayan** araçlar (varant ve sertifika hariç; **mevcut durumda yalnızca BYF'ler**).
- **PÖİP** ve **YİP**'teki paylar.
- Borsa Genel Müdürlüğünce geçici veya sürekli olarak tek fiyat kararı verilen araçlar.

> [!bilgi] BYF'de piyasa yapıcı yoksa, faaliyeti sona ermişse veya yedek piyasa yapıcı başlayamıyorsa, araç duyurudaki tarihten itibaren **aynı pazarda tek fiyatla** işlem görür. Yeni piyasa yapıcı başlayınca yeniden **piyasa yapıcılı sürekli işleme** döner.

### Günde 5 kez fiyat
| Süreç | Bölüm | Emir toplama | Fiyat belirleme |
|---|---|---|---|
| **1. tek fiyat (açılış)** | 09:40 – 10:00 | 09:40 – 09:55 (+) | 09:55 (+) |
| **2. tek fiyat** | 10:00 – 13:00 | 10:00 – 12:55 | 12:55 (+) |
| **3. tek fiyat (gün ortası)** | 13:00 – 14:00 | 13:00 – 13:55 | 13:55 (+) |
| **4. tek fiyat** | 14:00 – 18:00 | 14:00 – 17:55 | 17:55 (+) |
| **5. tek fiyat (kapanış)** | 18:01 – 18:07 | 18:01 – 18:05 | 18:05 (+) |
| Kapanış fiyatından / tek fiyattan işlemler | 18:08 – 18:10 | | |

- Açılışa katılamayan ve gün içinde açılan sıra, o saatte devrede olan tek fiyat sürecine katılır.
- İşlem görmeyip geçerliliği süren emirler **sonraki tek fiyat sürecine aktarılır**.

---

## 3. Emir toplama ve fiyat belirleme aşamaları
### Emir toplama aşaması
- Emirler fiyat-zaman önceliğine göre sıralanır; **eşleştirme yapılmaz**.
- Fiyat iyileştirilebilir veya kötüleştirilebilir, miktar artırılabilir veya azaltılabilir. **Fiyat değişirse veya miktar artarsa öncelik değişir.**
- Emirler iptal edilebilir.
- Derinlik bilgisi gösterilmez; ama **teorik eşleşme fiyatı**, bu fiyattan olası işlem miktarı ve kalan miktar sürekli gösterilir.
- Açığa satışa izinli sıralarda, **açılış seansı hariç**, açığa satış emri girilebilir.
- Açılış ve kapanış bölümleri hariç **özel işlem bildirimi** yapılabilir.
- Girilebilen emirler: **limit, piyasa, piyasadan limite, kalanı iptal et, dengeleyici**. Yıldız ve Ana Pazar dışındaki paylarda açılışta **piyasa** ve **piyasadan limite** emir girilemez.

> [!dikkat] Paylarda **açılış seansı emir toplamasının son 5 dakikasında** emirler **iptal edilemez**, fiyatı **kötüleştirilemez**, miktarı **azaltılamaz**. Rastlantısal kesilmenin en fazla **30 saniyesi** bu 5 dakikaya eklenir.

- Emir toplama, **30 saniyelik** bir aralıkta **rastlantısal** bir anda kesilir; eşleştirme başlayana kadar emir girişi sürer.

### Fiyat belirleme aşaması
- Azami süre **5 dakika**; fiilen yaklaşık **1 dakika** sürer.
- Bu aşamada emir **girilemez**, **değiştirilemez**, **iptal edilemez**; **özel işlem bildirimi yapılamaz**.
- Eşleştirme, tanımlı zamanın ilk **30 saniyesi** içinde rastlantısal başlar. **Devre kesiciden sonraki** eşleştirme ise rastlantısal değil, **belirlenen saatte** başlar.
- Eşleştirme sonrası işlem fiyatları ve kalan emirler derinlik ekranında **1'er kademe** yayımlanır.

---

## 4. Açılış seansı ve açılış fiyatı algoritması
Açılış seansı, tek fiyat yöntemiyle çalışan özel bir seanstır. **Baz fiyat** önceki günün **kapanış fiyatıdır**; baz fiyat ve marjlar hem açılışta hem sonraki tek fiyat aşamasında geçerlidir.

**Algoritma (sırayla):**
i. **En çok işlem miktarını** sağlayan fiyat açılış fiyatıdır.
ii. Birden fazla varsa, **arta kalan miktarın en az** olduğu fiyat (**minimum surplus**).
iii. Hâlâ birden fazla varsa **piyasanın yönüne** bakılır: alış ağırlıklıysa **yüksek** olan, satış ağırlıklıysa **düşük** olan fiyat (**market pressure**).
iv. Hâlâ birden fazla varsa **referans fiyata en yakın** fiyat.
v. Referans fiyat yoksa olası en yüksek ve en düşük fiyatın **aritmetik ortalaması**, en yakın adıma yuvarlanarak.

**Diğer kurallar:**
- En yüksek limit alışa bir adım eklenip en düşük limit satıştan bir adım çıkarılarak bulunan aralıktaki **tüm geçerli fiyatlar**, emir olmayan kademeler dâhil, hesaplamaya girer.
- Açılış fiyatı **fiyat limitlerini aşamaz**; gerekirse **taban veya tavan** olur.
- **Hesaplamaya dâhil:** limit, piyasa, piyasadan limite, kalanı iptal et, kısmi görünme koşullu (rezerv) emirler ve kotasyonlar.
- **Hesaplamaya dâhil değil:** küsurat, **hepsi ya da hiçbiri (AON)**, **gerçekleşmezse iptal et (FOK)**, **dengeleyici** emirler, **tetiklenmemiş stop** emirler.
- Bu algoritma **kapanış seansı** dâhil tüm tek fiyat uygulamalarında geçerlidir.

> [!ezber] **Açılış Referans Fiyatı (ARF):** Yalnız açılış algoritmasında kullanılır. Kapanış fiyatı, baz fiyat, son işlem fiyatı ve borsanın belirlediği referans fiyattan **en son güncellenen** ARF olur.

---

## 5. Emirlerin işlem görme sırası
1. **Piyasa emirleri**
2. **Piyasadan limite emirler** (1 ve 2 arasında zaman önceliğine bakılır)
3. **Limit fiyatlı emirler**
4. **Dengeleyici emirler**

- Piyasa emirlerinin limit emirlere göre fiyat önceliği vardır; kendi aralarında **zaman önceliği** uygulanır.
- Açılış fiyatından **daha iyi** (alışta yüksek, satışta düşük) ve açılış fiyatındaki limit emirler, önce fiyat sonra zaman önceliğiyle açılış fiyatından işlem görür.

### Dengeleyici emirler
- Tek fiyat uygulanan tüm bölümlerde (açılış ve kapanış dâhil) **fiyat belirlemede hesaba katılmayan**, ama eşleşme fiyatında **karşılanmadan kalan** emirlerle işlem yapmak için girilen emirler.
- Kendi aralarındaki öncelik **giriş zamanına** göredir.
- İki taraftaki limit emirler bitince alış ve satış dengeleyici emirleri birbiriyle **açılış fiyatından** eşleşir.
- Hiç eşleşmeyen dengeleyici emirler **iptal edilir**.

---

## 6. Veri yayını
- **Referans (temel) veriler:** gün içinde değişmeyen tanımlayıcı bilgiler (aracın tipi, önceki günün özet fiyatları, sektör, endeks).
- **Eşanlı veriler:** seans boyunca değişen bilgiler (emirler, işlemler, hacim, değer, değişim).
- Emir toplama sırasında **denge fiyatı ve denge miktarı** yayımlanır; eşleştirme başlayınca açılış fiyatları, işlemler ve kalan emirler gönderilir.

---

## 7. Kapanış seansı
- Seans **kapanış fiyatı**, o seansta borsa kaydına alınan **en son fiyattır**.
- Kapanış seansı yalnız **E (pay)** ve **F (BYF)** kodlu araçlarda, seansın son bölümünde uygulanır. **Varant, sertifika, temerrüt ve YPAH** sıraları kapanış seansına **dâhil değildir**.
- Normal seanstan kalan emirler aktarılır; yeni emirler eşleşmeden toplanır; en çok işlemi sağlayan tek fiyat bulunur.

### ±%3 kuralı
- Kapanış seansına girilen emirlerin fiyatı, **son normal emir işlem fiyatının ±%3'ünden** fazla farklı olamaz. Üst sınır **aşağı**, alt sınır **yukarı** adıma yuvarlanır. **Serbest marjlı** paylarda da ±%3 uygulanır.
- Ancak günlük **fiyat değişim sınırları** (baz fiyata göre) aşılamaz.

> [!bilgi] **Örnek:** Marj ±%20, baz fiyat 3,00 TL, günlük sınırlar 2,40 – 3,60 TL, son işlem 3,58 TL. ±%3 ile hesap 3,47 – 3,68 TL çıkar ama tavan 3,60 olduğundan kapanış seansında girilebilecek fiyatlar **3,48 – 3,60 TL** olur.

- Gün içinde açılışta da sürekli işlemde de **hiç işlem olmamışsa**, emirler **baz fiyata göre** marj sınırları içinde girilebilir; serbest marjlı payda sınır yoktur.
- Kapanışa aktarılan emirler arasında ±%3 sınırının **dışında** (üstünde alış veya altında satış) emir varsa, ±%3 değil **günlük fiyat değişim sınırları** uygulanır.
- Açılışta durdurulup kapanışta açılan araçta kapanış seansı kuralları geçerlidir (açığa satış emri girilebilir).

### Kapanış fiyatının belirlenmesi
- Algoritma **açılışla aynıdır**.
- Kapanışta fiyat belirlenemezse, önceki bölümlerdeki **son işlem fiyatı** kapanış fiyatı olarak tescil edilir.
- Yalnız açılışta işlem varsa bültende kapanış dâhil tüm fiyat alanlarında **açılış fiyatı** yer alır; açılış fiyatı da yoksa tüm alanlar **sıfır** gösterilir.
- Kapanış seansındaki işlemler günlük **AOF** hesabına dâhildir.

---

## 8. Kapanış fiyatından işlemler
- Süresi **2 dakika** (18:08 – 18:10).
- Yeni emirler **yalnız kapanış fiyatından** (kapanışta işlem yoksa **son işlem fiyatından**) girilebilir.
- Yalnız **o ana kadar işlem görmüş** araçlara emir girilebilir. Hiç işlem görmemiş araçlarda emir girilemez, bekleyen emir değiştirilemez.
- Bu aşamada girilen emirlerin **fiyatı değiştirilemez**; miktarı artırılıp azaltılabilir veya emir iptal edilebilir.

| Önceden girilip aktarılan emir | Yapılabilenler |
|---|---|
| Fiyatı kapanış/son işlem fiyatına **eşit** | Fiyat değişmez; miktar artırılıp azaltılabilir; iptal edilebilir |
| Fiyatı **farklı** | Miktar **azaltılabilir ama artırılamaz**; iptal edilebilir; fiyat **yalnız kapanış fiyatına** çekilebilir |

- **KİE** ve **açığa satış** limit emirleri girilebilir ve **özel işlem bildirimi** yapılabilir; fiyat yine son işlem fiyatı olmalıdır.
- İşlemler günlük **AOF** hesabına dâhildir; derinlik bilgisi yayımlanmaya devam eder.

---

## Bugünün özeti
- Geçici ve süreli sıralarda (müzayede, temerrüt, YPAH, kalan pay satışı) **sürekli işlem**; TAS **özel işlem bildirimiyle**.
- Tek fiyat: **BYF** (piyasa yapıcı yoksa), **PÖİP**, **YİP**; günde **5 kez** fiyat.
- Açılış emir toplamanın **son 5 dakikasında** iptal, fiyat kötüleştirme ve miktar azaltma yok; kesilme **30 sn** içinde rastlantısal.
- Fiyat belirleme en çok **5 dk**; bu aşamada emir girilemez, değiştirilemez, iptal edilemez.
- Algoritma: **azami işlem → minimum surplus → market pressure → referans fiyata yakınlık → ortalama**.
- AON, FOK, dengeleyici, küsurat ve tetiklenmemiş stop emirler hesaba **girmez**.
- Kapanış seansı yalnız **E ve F** kodlularda; fiyat ±**%3** (günlük sınırı aşmadan).
- Kapanış fiyatından işlemler **2 dk**; yalnız kapanış/son işlem fiyatından emir.
`,
  sorular: [
    {
      s: "Aşağıdaki geçici ve süreli işlemlerden hangisi Pay Piyasasında **özel işlem bildirimi** yoluyla Pay Piyasası uzmanlarınca gerçekleştirilir?",
      c: ["Resmî müzayede işlemleri", "Temerrüt işlemleri", "Yeni pay alma hakkı işlemleri", "YPAH kullanımından kalan payların birincil piyasada satışı", "Toptan alış satış işlemleri"],
      d: 4,
      a: "Resmî müzayede, temerrüt, YPAH ve kalan payların satışı **sürekli işlem** yöntemiyle yapılır. **Toptan alış satış** işlemleri ise **özel işlem bildirimi** yoluyla Pay Piyasası uzmanlarınca gerçekleştirilir.",
      k: "1006 resmi not s. 49"
    },
    {
      s: "Aşağıdakilerden hangisi **tek fiyat yöntemiyle** işlem görür?",
      c: ["Yakın İzleme Pazarındaki paylar", "Piyasa yapıcısı bulunan varantlar", "Yıldız Pazardaki paylar", "Ana Pazardaki paylar", "Yeni pay alma hakları"],
      d: 0,
      a: "Tek fiyat yöntemi; piyasa yapıcısı bulunmayan **BYF'ler**, **PÖİP** ve **YİP**'teki paylar ile Genel Müdürlükçe tek fiyat kararı verilen araçlara uygulanır. Yıldız ve Ana Pazar sürekli işlemlidir; YPAH sıraları da sürekli işlemle işlem görür.",
      k: "1006 resmi not s. 49-50"
    },
    {
      s: "Paylarda **açılış seansı emir toplama aşamasının son 5 dakikasında** aşağıdakilerden hangisi **yapılabilir**?",
      c: ["Emrin iptal edilmesi", "Emrin fiyatının kötüleştirilmesi", "Emrin miktarının azaltılması", "Emrin fiyatının iyileştirilmesi", "Emrin tamamen geri çekilmesi"],
      d: 3,
      a: "Son 5 dakikada emirler **iptal edilemez**, fiyatı **kötüleştirilemez** ve miktarı **azaltılamaz**. Fiyatın **iyileştirilmesi** (ve miktar artırımı) ise mümkündür. Rastlantısal kesilmenin en fazla 30 saniyesi bu süreye eklenir.",
      k: "1006 resmi not s. 51"
    },
    {
      s: "Tek fiyat yönteminde **fiyat belirleme aşaması** ile ilgili hangisi **yanlıştır**?",
      c: ["Bu aşama için ayrılan azami süre 5 dakikadır", "Bu aşamada emir girilemez ve emirler iptal edilemez", "Bu aşamada özel işlem bildirimi yapılabilir", "Devre kesiciyi takip eden eşleştirme belirlenen saatinde başlar", "Eşleştirme sonrası kalan emirler derinlik ekranında 1'er kademe yayınlanır"],
      d: 2,
      a: "Fiyat belirleme aşamasında emir girilemez, değiştirilemez, iptal edilemez ve **özel işlem bildirimi yapılamaz**. Azami süre 5 dakika olup fiilen yaklaşık 1 dakika sürer.",
      k: "1006 resmi not s. 51"
    },
    {
      s: "Açılış fiyatı belirleme algoritmasında, en çok işlem miktarını sağlayan **birden fazla fiyat** varsa ilk olarak hangi kurala bakılır?",
      c: ["Referans fiyata en yakın fiyat seçilir", "Arta kalan (işlem görmeyen) miktarın en az olduğu fiyat seçilir", "Piyasa alış ağırlıklıysa yüksek olan fiyat seçilir", "Olası fiyatların aritmetik ortalaması alınır", "Bir önceki günün kapanış fiyatı seçilir"],
      d: 1,
      a: "Sıra şöyledir: en çok işlem miktarı → **arta kalan miktarın en az olması (minimum surplus)** → piyasanın yönü (market pressure) → referans fiyata yakınlık → aritmetik ortalama.",
      k: "1006 resmi not s. 52"
    },
    {
      s: "Aşağıdaki emir türlerinden hangisi **açılış fiyatının hesaplanmasında dikkate alınır**?",
      c: ["Hepsi ya da hiçbiri (AON) emirleri", "Gerçekleşmezse iptal et (FOK) emirleri", "Dengeleyici emirler", "Kısmi görünme koşullu (rezerv) emirler", "Tetiklenmemiş stop emirler"],
      d: 3,
      a: "Limit, piyasa, piyasadan limite, kalanı iptal et ve **rezerv emirler** (gizli miktarlarıyla) ile kotasyonlar hesaba dâhildir. **AON, FOK, dengeleyici, küsurat** ve **tetiklenmemiş stop** emirler dikkate alınmaz.",
      k: "1006 resmi not s. 52"
    },
    {
      s: "Ana Pazardaki bir payda marj ±%15, baz fiyat **10,00 TL**, günlük fiyat sınırları **8,50 – 11,50 TL** ve kapanış seansı öncesi son işlem fiyatı **11,40 TL**'dir. Kapanış seansında bu paya girilebilecek **en yüksek emir fiyatı** kaçtır?",
      c: ["11,40 TL", "11,42 TL", "11,44 TL", "11,46 TL", "11,50 TL"],
      d: 4,
      a: "±%3 kuralına göre üst sınır 11,40 × 1,03 = 11,742 TL olur; ancak kapanış seansında **günlük fiyat değişim sınırları aşılamaz**. Tavan 11,50 TL olduğu için girilebilecek en yüksek fiyat **11,50 TL**'dir.",
      k: "1006 resmi not s. 54"
    },
    {
      s: "**Kapanış fiyatından işlemler** aşaması ile ilgili hangisi doğrudur?",
      c: ["2 dakika sürer ve yeni emirler yalnız kapanış veya son işlem fiyatından girilebilir", "5 dakika sürer ve seans içinde hiç işlem görmemiş araçlara da emir girilebilir", "Bu aşamada girilen emirlerin fiyatı serbestçe değiştirilebilir ancak miktarı değiştirilemez", "Bu aşamada açığa satış emri girilemez ve özel işlem bildirimi yapılamaz", "Bu aşamadaki işlemler günlük ağırlıklı ortalama fiyat hesabına dâhil edilmez"],
      d: 0,
      a: "Bu aşama **2 dakika** sürer; yeni emirler **yalnız kapanış/son işlem fiyatından** girilir ve yalnız işlem görmüş araçlara emir verilebilir. Girilen emirlerin fiyatı değiştirilemez, miktarı değiştirilebilir. KİE, açığa satış ve özel işlem bildirimi yapılabilir; işlemler AOF'a dâhildir.",
      k: "1006 resmi not s. 55"
    }
  ]
});
