SPL.gun("1003", 8, {
  okuma: `
## Bugünün haritası
1. Kapanış fiyatından işlemlerin **ayrıntıları**
2. **Devre kesiciler:** pay bazında ve endekse bağlı (EBDKS)
3. **Emir tipleri:** limit, piyasa, piyasadan limite, koşullu, orta nokta, AOF…
4. **Öncelik kuralları** ve emirlerin **geçerlilik süreleri**
5. **Kredili işlem** ve **açığa satış** listeleri, **yukarı adım kuralı**
6. **Brüt takas**

---

## 1. Kapanış fiyatından işlemler (devam)
- Bu bölüme yalnızca **gün içinde işlem görmüş** paylar için emir girilebilir. Hiç işlem görmemiş payda emir girilemez ve bekleyen emir değiştirilemez.
- Yeni emirler yalnızca **kapanış (ya da son işlem) fiyatından** girilir.
- Bu bölümde girilen emirlerin **fiyatı değiştirilemez**. **Miktar artırılabilir ya da azaltılabilir**, emir iptal edilebilir.
- Önceki bölümlerden **aktarılan** emirler için kural şöyledir:
  - Fiyatı kapanış fiyatına **eşit** olanların miktarı artırılabilir ya da azaltılabilir.
  - Fiyatı **farklı** olanların miktarı **yalnızca azaltılabilir**. Bu emirlerin fiyatı ancak kapanış fiyatına çekilebilir; emir iptal de edilebilir.

---

## 2. Devre kesiciler

### Pay bazında devre kesici
Sürekli işlem sırasında fiyat, bir **referans fiyata** göre belirlenen eşiğe ulaşırsa paydaki işlemler durur ve **tek fiyat** (emir toplama) aşamasına geçilir. Fiyat belirlenince pay yeniden sürekli işleme döner.

- Yalnızca **paylarda** ve yalnızca **sürekli işlem** bölümlerinde çalışır.
- **Referans fiyat:** en son tek fiyatla belirlenen fiyat (açılış, önceki devre kesici seansı vb.) ya da baz fiyat. Bu ikisinden **en son güncellenen** alınır.
- Eşiği aşacak bir emir işlem görmez. Emir kısmen gerçekleşmişse **kalanı iptal edilir**.
- Yıldız, Ana, Alt Pazar ve GSP'de devre kesici çalışınca **10 dakikalık emir toplama**, ardından **2 dakikalık eşleştirme** yapılır. Eşleştirme 30 saniyelik rastgele bir anda başlar.
- **17:45–18:00** arasında devre kesici çalışırsa emir toplama 15 dakikaya uzar ve eşleştirme yapılmadan **kapanış seansının emir toplama aşamasına** kadar sürer.
- Açığa satış yapılabilen bir payda devre kesici çalışırsa, seansın kalanında **yukarı adım kuralı** uygulanır.
- Devre kesici **bağlantılı sıraları etkilemez.** Örneğin GARAN.E durursa GARAN.R (rüçhan) ve varant sıraları sürekli işleme devam eder.

> [!dikkat]
> Resmi not bu konuda kendi içinde tutarsız. s. 62'deki temel pazar tablosunda tetikleme oranları %10 / %7,5 / %5, emir toplama süreleri 5 / 15 / 15 dakika olarak geçiyor. s. 63'te 2020/20 duyurusuyla Yıldız ve Ana Pazar'da tetikleme oranının **%5'e** düşürüldüğü ve emir toplamanın 30 dakika yapıldığı yazıyor. s. 73'te ise "pazar marjı uygulanır, emir toplama 10 dakika" deniyor. SPL'nin 2026 çalışma soruları Yıldız Pazar için **%5** tetikleme ve **10 dakika** emir toplama kullanıyor. Bu yüzden sınavda **eşleştirmenin 2 dakika** sürdüğünü ve **17:45 sonrası uzama** kuralını kesin bil; dakika ve oran ayrıntısında soruda verilen bilgiye göre hareket et.

### Endekse bağlı devre kesici (EBDKS)
- **BIST 100** endeksi önceki kapanışa göre **%6 veya daha fazla düşerse** Pay Piyasası'nda işlemler durur.
- **10 dakika** boyunca işlem yapılmaz. Bu sırada tek fiyat aşamasındaki sıralarda eşleştirme tamamlanır, sonra durdurma başlar; **emir iptali ya da değişikliği yapılamaz**.
- Durdurmanın ardından:
  - sürekli işlem gören sıralarda **5 dakika** tek fiyat emir toplama, sonra **5 dakika** içinde eşleştirme yapılır;
  - tek fiyatla işlem gören paylarda **en az 10 dakikalık** yeni bir emir toplama seansı açılır.
- **17:30–18:00** arasında tetiklenirse işlemler **18:00'e (kapanış seansına) kadar** durur.
- Gün içinde **ikinci kez** %6 aşılırsa tekrar çalışmaz. **18:00'den sonra** da devreye girmez.
- **Genel Müdür** oranları ve referans endeksi re'sen değiştirebilir ya da uygulamayı kaldırabilir.

---

## 3. Emir tipleri
Aksi belirtilmedikçe her emir **girildiği gün** geçerlidir.

| Emir | Özü |
|---|---|
| **Limit** | Fiyat ve miktar belirtilir. Gerçekleşmeyen kısım pasif olarak bekler. |
| **Piyasa** | Yalnızca **miktar** girilir. Karşı taraftaki en iyi fiyatlarla hemen eşleşir. **Yalnızca KİE** olarak gönderilebilir; eşleşmeyen kısım iptal edilir. |
| **Piyasadan limite** | Fiyatsız girilir, yalnızca **en iyi kademe** ile eşleşir. Kalan kısım, gerçekleştiği **son fiyattan limit emre** dönüşür (KİE değilse). |
| **Dengeleyici** | Tek fiyat bölümlerinde fiyat hesabına girmez. Eşleşme fiyatında **kalan emirlerle** işlem görür; eşleşmeyen kısım iptal edilir. |
| **Kotasyon** | Alış + satış limit emir çiftidir. Yalnızca **piyasa yapıcı / likidite sağlayıcı** girer. |
| **Küsurat** | 1 lotun altındaki miktar. Yalnızca miktar girilir; **.E sırasındaki son işlem fiyatından** gerçekleşir. |
| **Açığa satış** | SPK ve Borsa'nın fiyat sınırlarına uymak zorundadır. |

- **Piyasa** ve **piyasadan limite** emirlerde sabit bir azami tutar yoktur; sıranın **maksimum emir değeri** sınırı uygulanır. Bu değer son işlem fiyatına göre hesaplanır. Son işlem fiyatı yoksa önceki kapanış, o da yoksa Borsa'nın referans fiyatı kullanılır. Hiçbiri yoksa piyasa emri girilemez.
- Serbest marjlı sıralarda baz fiyat oluşana kadar **piyasadan limite** emir girilemez.

### Koşullu emirler (4 tür)
1. **Miktar koşullu:** Miktarın tamamı karşılanmazsa işlem olmaz. Örnek: **hepsi ya da hiçbiri** (AON), **gerçekleşmezse iptal et** (Fill or Kill).
2. **Fiyat koşullu:** Belirli bir fiyat seviyesine ulaşılınca aktifleşir.
3. **Zaman koşullu:** Seansın belirli bir bölümünde geçerlidir (ör. *at open*, *at close*).
4. **Kısmi görünme koşullu:** Limit emrin yalnızca bir kısmı görünür. O kısım bitince gizliden yeni kısım açılır ve **yeni emir gibi** sıraya girer.

### BIST 30'a özel iki emir

| | **Orta nokta emri** | **AOF (ağırlıklı ortalama fiyat) emri** |
|---|---|---|
| Fiyat | En iyi alış ve en iyi satışın **aritmetik ortalaması** | Gün sonu **AOF** ya da AOF ± belirli sayıda fiyat adımı |
| Sınır | **100.000 TL – 30 milyon TL** | **100.000 lot – 10 milyon lot** |
| Defter | Ayrı ve **kapalı** emir defteri | Ayrı sıra (ör. **GARAN.AOF**) |
| Bilgi | Miktar yayınlanır, **fiyat istatistiği yayınlanmaz** | Piyasaya bilgi verilmez, **Günlük Bülten**'de yer alır |
| Kapsam | Yalnızca **BIST 30** payları | Yalnızca **BIST 30** payları |

---

## 4. Değiştirme, öncelik ve geçerlilik süresi
- **Miktar artırma** ya da **fiyat değiştirme** emri yeni girilmiş sayar; emir **zaman önceliğini kaybeder**.
- **İyileştirme:** alışta fiyatı **yükseltmek**, satışta **düşürmek**. **Kötüleştirme** bunun tersidir.
- Cari kademedeki emirde iptal, miktar azaltma ya da kötüleştirmeye süreye bağlı **üç aşamalı ücret** uygulanır.
- **Öncelik sırası:**
  1. **Fiyat önceliği:** düşük fiyatlı satış ve yüksek fiyatlı alış önce karşılanır.
  2. **Zaman önceliği:** fiyat eşitse önce girilen emir karşılanır.

| Geçerlilik | Anlamı |
|---|---|
| **Günlük** | Gün sonunda gerçekleşmeyen kısım iptal edilir (varsayılan). |
| **Kalanı İptal Et (KİE)** | Girildiği anda karşılanmayan kısım hemen iptal edilir. |
| **İptale Kadar Geçerli (İKG)** | Birincil piyasada talep toplamada (**.HE** sıraları) halka arz süresince geçerlidir. |
| **Tarihli** | Son tarihe kadar geçerlidir. BISTECH'te **henüz devreye alınmamıştır**. |

- Emrin süresi **uzatılırsa** öncelik **kaybedilir**, **kısaltılırsa** öncelik **korunur**.
- Baz fiyat sermaye artırımı gibi bir nedenle değişirse ya da üye kodu değişirse tarihli ve süreli emirler iptal edilir.
- Her emirde **müşteri hesap numarası** girmek zorunludur. Bu numara, kurumun MKK'da açtığı hesap numarasıyla aynı olmalıdır.

---

## 5. Kredili işlem ve açığa satış
- **Kredili işlem ve açığa satış listesi:** Alt Pazar, **PÖİP** ve **YİP** dışındaki tüm paylar. Yani **Yıldız, Ana ve GSP** payları kredili alınabilir ve açığa satılabilir.
- **Listeden çıkarma:**
  - İşlem sırası **sürekli kapatılan** pay listeden **hemen** çıkar.
  - **Geçici durdurulan** pay, kapalılık **5 iş gününü** aşarsa çıkar.
- Çıkarılan paylar **3 ay** boyunca **Geçici Liste**'de kalır.
  - Bu sürede **yeni** kredili işlem ya da açığa satış yapılamaz.
  - Mevcut pozisyonlar, taraflar aksini istemezse korunabilir.
  - Dönem sonunda pay esas listeye dönmezse pozisyonlar **tasfiye** edilir.

### Yukarı adım kuralı
- Kural: açığa satış, **son işlem fiyatından yüksek** bir fiyattan yapılır. Son fiyat bir öncekinden yüksekse **son fiyattan** da yapılabilir. Kısaca **fiyat düşerken açığa satış yapılamaz**.
- **Yıldız Pazar**'da yukarı adım kuralı **yoktur**; limitler içindeki her fiyattan açığa satış emri girilebilir.
- **Ana Pazar** payları ve **borsa yatırım fonları**nda kural **uygulanır**.
- **Açılış seansında** açığa satış emri **girilemez**. İlk açığa satış, açılış fiyatının (oluşmazsa önceki kapanışın) **bir kademe üstünden** verilebilir.
- **BIST 100** gün içinde **%2 veya daha fazla düşerse**, açığa satış yapılabilen tüm sıralarda yukarı adım kuralı **seans sonuna kadar otomatik** uygulanır.

---

## 6. Brüt takas (BT)
- Normalde Takasbank **netleştirme** yapar: aynı gün bir payda hem alıp hem satan kurum yalnızca **net fark** için borçlanır ya da alacaklanır.
- **Brüt takas** uygulanan paylarda netleştirme **kaldırılır**:
  - Alıcının takas tarihinde hesabında alımı karşılayacak **nakit**, satıcının ise satılacak **pay** bulunmalıdır.
  - Takas alacakları takas süresinden **sonra** dağıtılır.
- **Amaç:** yanıltıcı ve piyasaya net katkı sağlamayan **gün içi al-sat** işlemlerini ve olağan dışı fiyat hareketlerini sınırlamak.
- BT yalnızca **takasla** ilgilidir; yatırımı engellemez, riskleri azaltır.

> [!ezber]
> **EBDKS:** BIST 100 −%6 → 10 dk durma → 5 dk emir toplama + 5 dk eşleştirme · ikinci kez çalışmaz
> **Yukarı adım:** Yıldız'da yok, Ana ve BYF'de var · BIST 100 −%2 → herkese otomatik
> **Orta nokta:** 100 bin – 30 milyon TL · **AOF:** 100 bin – 10 milyon lot · ikisi de BIST 30
`,
  sorular: [
    {
      s: "Endekse Bağlı Devre Kesici Sistemi (EBDKS) hangi durumda devreye girer?",
      c: ["BIST 30 endeksi önceki kapanışa göre %5 veya daha fazla düştüğünde", "BIST 100 endeksi önceki kapanışa göre %6 veya daha fazla düştüğünde", "BIST 100 endeksi önceki kapanışa göre %2 veya daha fazla düştüğünde", "BIST 100 endeksi gün içinde ulaştığı zirveden %10 düştüğünde", "Herhangi bir payda aynı gün iki kez devre kesici çalıştığında"],
      d: 1,
      a: "EBDKS, **BIST 100** endeksinin önceki günün kapanışına göre **%6 veya daha fazla** düşmesiyle devreye girer. %2'lik düşüş ise yukarı adım kuralının otomatik uygulanmasını tetikler.",
      k: "1003 resmi not s. 74"
    },
    {
      s: "EBDKS ile ilgili hangisi **yanlıştır?**",
      c: ["İşlemler 10 dakika süreyle durdurulur.", "Durdurma sırasında emir iptali ya da değişikliği yapılamaz.", "17:30–18:00 arasında tetiklenirse işlemler kapanış seansına kadar durur.", "Gün içinde %6'lık eşik ikinci kez aşılırsa sistem yeniden çalışır.", "18:00'den sonra devreye girmez."],
      d: 3,
      a: "%6'lık eşik gün içinde **ikinci kez** aşılırsa devre kesici **tekrar çalışmaz**.",
      k: "1003 resmi not s. 74"
    },
    {
      s: "Piyasa emirleriyle ilgili hangisi doğrudur?",
      c: ["Fiyat ve miktar belirtilerek girilir; fiyat limiti olarak çalışır.", "Gerçekleşmeyen kısmı son işlem fiyatından limit emre dönüşür.", "Yalnızca kalanı iptal et (KİE) olarak gönderilebilir.", "Her pay için Borsaca belirlenen sabit bir azami emir tutarı vardır.", "Yalnızca açılış seansında girilebilir; sürekli işlemde kabul edilmez."],
      d: 2,
      a: "Piyasa emrinde yalnızca **miktar** girilir ve emir **yalnızca KİE** olarak gönderilebilir; eşleşmeyen kısım iptal edilir. Kalanı limit emre dönüşen tür **piyasadan limite** emirdir.",
      k: "1003 resmi not s. 75"
    },
    {
      s: "Orta nokta emirlerinin fiyatı nasıl belirlenir?",
      c: ["Pay için günün ağırlıklı ortalama fiyatı esas alınarak", "Payın önceki işlem günündeki kapanış fiyatı esas alınarak", "Emir defterindeki en iyi alış ve en iyi satış fiyatlarının ortalaması ile", "Paydaki piyasa yapıcının o andaki alış ve satış kotasyonlarının en iyisi esas alınarak", "Baz fiyat ile son işlem fiyatının ortalaması alınarak"],
      d: 2,
      a: "Orta nokta emri, normal defterdeki **en iyi alış ve en iyi satış fiyatlarının aritmetik ortalamasıyla** fiyatlanır ve ayrı, kapalı bir defterde işlem görür. Yalnızca BIST 30 paylarında kullanılır.",
      k: "1003 resmi not s. 76"
    },
    {
      s: "Hangi pazardaki paylarda açığa satışta yukarı adım kuralı **uygulanmaz?**",
      c: ["Ana Pazar", "Yıldız Pazar", "Borsa yatırım fonları", "Alt Pazar", "Yakın İzleme Pazarı"],
      d: 1,
      a: "**Yıldız Pazar**'da yukarı adım kuralı yoktur. Ana Pazar ve BYF'lerde kural uygulanır. Alt Pazar ve YİP payları ise zaten açığa satış listesinde değildir.",
      k: "1003 resmi not s. 79"
    },
    {
      s: "Kredili işlem ve açığa satış listesinden çıkarılan paylarla ilgili hangisi doğrudur?",
      c: ["Listeden çıkarılan paylardaki kredili pozisyonlar hemen tasfiye edilir.", "3 aylık dönem boyunca Geçici Liste'de kalır; yeni kredili işleme konu olamaz.", "Listeden çıkarılan paylar 1 yıl boyunca borsada işlem göremez.", "Bu paylar açığa satış işlemlerine konu olmaya devam eder.", "İşlemleri geçici olarak durdurulan paylar ilk gün listeden çıkarılır."],
      d: 1,
      a: "Çıkarılan paylar takip eden **3 aylık dönemin sonuna kadar Geçici Liste**'de kalır. Bu sürede yeni kredili işlem ve açığa satış yapılamaz, mevcut pozisyonlar korunabilir. Geçici durdurmada çıkarma için kapalılığın **5 iş gününü** aşması gerekir.",
      k: "1003 resmi not s. 79"
    },
    {
      s: "Sisteme girilmiş bir emirde aşağıdaki değişikliklerden hangisi emrin zaman önceliğini **kaybettirmez?**",
      c: ["Miktarın artırılması", "Fiyatın yükseltilmesi", "Fiyatın düşürülmesi", "Geçerlilik süresinin uzatılması", "Geçerlilik süresinin kısaltılması"],
      d: 4,
      a: "Miktar artırma, fiyat değiştirme ve süre **uzatma** önceliği kaybettirir. Sürenin **kısaltılmasında** öncelik **korunur**.",
      k: "1003 resmi not s. 77–78"
    },
    {
      s: "Brüt takas uygulanan bir payla ilgili hangisi doğrudur?",
      c: ["Gün içinde alınan ve satılan paylar, diğer paylarda olduğu gibi takasta netleştirilerek tek tutar üzerinden takas edilir.", "Alıcının takas tarihinde hesabında alımı karşılayacak nakit bulunmalıdır.", "Bireysel yatırımcıların bu payları satın alması yasaktır.", "Bu paylarda kredili alım işlemi yapılabilir.", "Takas alacakları işlem anında hesaplara dağıtılır."],
      d: 1,
      a: "Brüt takasta **netleştirme kaldırılır**. Alıcının hesabında takas tarihinde **nakit**, satıcının hesabında **pay** bulunmalıdır; alacaklar takas süresinden sonra dağıtılır.",
      k: "1003 resmi not s. 80"
    }
  ]
});
