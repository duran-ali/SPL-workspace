SPL.gun("1003", 7, {
  okuma: `
## Bugünün haritası
1. Riskli pazarlarda (Alt Pazar, YİP, PÖİP) **risk bildirimi**
2. **Lot, baz fiyat, fiyat adımı** ve **fiyat marjı**
3. Pay Piyasası **seans saatleri**
4. **Tek fiyat** ve **sürekli işlem** yöntemleri
5. **Açılış fiyatı** nasıl belirlenir?
6. **Kapanış seansı** ve **kapanış fiyatından işlemler**

---

## 1. Riskli pazarlarda risk bildirimi
Alt Pazar, Yakın İzleme Pazarı (YİP) ve Pay Piyasası Öncesi İşlem Platformu (PÖİP) payları daha risklidir. Bu yüzden aracı kurumlar müşteriyi ayrıca uyarır:
- Müşterinin bu paylarda **ilk işleminden önce**, bu pazarlardaki riskleri anladığına dair bir **beyan** alınır. Beyan **yazılı, sözlü ya da elektronik** ortamda alınabilir (III-45.1 sayılı Tebliğ).
- İnternetten gelen **her alım emrinden önce** risk metni ekranda gösterilir. Telefonla verilen emirlerde müşteriye **hatırlatma** yapılır.
- Müşteriye **limit emir** kullanması tavsiye edilir.

> [!bilgi]
> Borsa İstanbul'un **2020/20 sayılı duyurusuyla** (3.3.2020'den itibaren, ikinci bir duyuruya kadar) **Yıldız ve Ana Pazar'da** fiyat marjı **±%10'a**, devre kesici tetikleme oranı **%5'e** düşürülmüştür (resmi not s. 63, 65). Aşağıdaki marj tablosu temel düzenlemeyi gösterir. SPL'nin 2026 çalışma soruları güncel marjı ±%10 olarak kullanır; soru "temel düzenleme" demiyorsa güncel değeri esas al.

---

## 2. Temel fiyat kavramları

### Lot ve küsurat
- **1 lot = 1 adet pay = 1 TL nominal** değer.
- Normal pazarlarda işlemler **tam lot** ile yapılır. Küsurat paylar yalnızca **.KE uzantılı** ayrı işlem sıralarında alınıp satılır.
- Fiyatlar **kuruşun üç ondalığına** kadar gösterilebilir.

### Baz fiyat
Baz fiyat, o günün **fiyat limitlerinin hesaplandığı** fiyattır.
- Normalde **bir önceki günün kapanış fiyatıdır**.
- Kapanış fiyatı yoksa:
  - tek fiyat yönteminde **ilk eşleşme** fiyatı,
  - sürekli işlemde **açılış fiyatı** ya da açılış yoksa **ilk işlem fiyatı** kullanılır.
- **Rüçhan hakkı kupon** işlem sıralarında ilk gün **baz fiyat yoktur**.
- Pay hiç işlem görmezse önceki baz fiyat **aynen devam eder**.
- Sermaye artırımı, temettü gibi işlemlerde baz fiyat, **teorik fiyatın** fiyat adımına yuvarlanmış hâlidir.

### Referans fiyat
Referans fiyat, özsermaye ile ilgili bazı durumlarda kullanılan **bilgi amaçlı** bir fiyattır. **Fiyat limitlerini belirlemez.**

### Fiyat adımları
Fiyat adımı, bir fiyattan bir sonrakine geçerken kullanılan **en küçük artış** miktarıdır.

| Fiyat aralığı (TL) | Fiyat adımı (TL) |
|---|---|
| 0,01 – 19,99 | 0,01 |
| 20,00 – 49,98 | 0,02 |
| 50,00 – 99,95 | 0,05 |
| 100,0 – 249,9 | 0,10 |
| 250,00 – 499,75 | 0,25 |
| 500,0 – 999,5 | 0,50 |
| 1000 – 2499 | 1,00 |
| 2500 ve üzeri | 2,50 |

> [!dikkat]
> Hangi adımın uygulanacağını **baz fiyat değil, emrin verildiği fiyat seviyesi** belirler. Örneğin baz fiyatı 48,90 olan bir payda fiyatlar 49,98'e kadar 0,02 adımla gider; 50 TL'yi geçince adım 0,05 olur (50,00 – 50,05 – 50,10…).

### Fiyat marjı (günlük fiyat limitleri)

| İşlem sırası | Marj (temel düzenleme) |
|---|---|
| **Yıldız Pazar** payları | ±%20 (2020/20 duyurusuyla **±%10**) |
| **Ana Pazar** payları | ±%15 (2020/20 duyurusuyla **±%10**) |
| **Alt Pazar, YİP, PÖİP** payları | **±%10** |
| **Rüçhan hakkı** kuponları | **±%50** |

- Marj baz fiyata uygulanır. Sonuç fiyat adımına uymazsa limitler **içeriye doğru** yuvarlanır. Taban yukarı, tavan aşağı yuvarlanır.
- **Örnek:** Alt Pazar'da baz fiyat 32,46 TL.
  - %10'luk taban 29,214, adıma yuvarlanınca **29,22**.
  - %10'luk tavan 35,706, adıma yuvarlanınca **35,70**.
- **Kapanış seansında** ayrıca **son işlem fiyatının ±%3**'ü sınırı vardır.

---

## 3. Seans saatleri (sürekli işlem gören paylar)

| Bölüm | Saat |
|---|---|
| **Açılış seansı** | 09:40 – 10:00 |
| – emir toplama | 09:40 – 09:55 |
| – fiyat belirleme ve eşleştirme | 09:55 – 10:00 |
| **Sürekli işlem** | 10:00 – 18:00 |
| **Kapanış seansı** | 18:00 – 18:07 |
| – marj belirleme | 18:00 – 18:01 |
| – emir toplama | 18:01 – 18:05 |
| – fiyat belirleme ve eşleştirme | 18:05 – 18:07 |
| **Kapanış fiyatından işlemler** | 18:07 – 18:10 |
| **Birincil piyasa** (halka arz vb.) | 10:30 – 13:00 |

- **Tek fiyat** yönteminde günde **5 kez** fiyat belirlenir: 09:40–10:00, 10:00–13:00, 13:00–14:00, 14:00–18:00 ve kapanışta 18:01–18:07. Ardından 18:08–18:10'da kapanış fiyatından işlemler yapılır.
- **Yarım günlerde** (arife vb.) sürekli işlem 10:00–12:30, kapanış seansı 12:30–12:37, kapanış fiyatından işlemler 12:37–12:40 arasındadır.

---

## 4. İşlem yöntemleri

| | **Tek fiyat** | **Sürekli işlem ("çok fiyat")** |
|---|---|---|
| Hangi paylar? | **PÖİP, YİP** ve Borsa'nın karar verdiği diğerleri | **Yıldız, Ana, Alt Pazar** ve **GSP** |
| Mantık | Emirler toplanır, sonra **tek bir fiyattan** eşleştirilir | Gün içinde emirler **anında** eşleşir |

### Tek fiyat (emir toplama) yönteminin kuralları
- Emir toplama süresince **işlem olmaz**. Emirler değiştirilebilir ya da iptal edilebilir.
- Fiyat, **en fazla miktarın eşleşeceği** seviyede belirlenir.
- Her üye yalnızca **kendi emirlerini** görür. Derinlik gösterilmez; yalnızca **teorik eşleşme fiyatı ve miktarı** yayınlanır.
- **Fiyat değiştirilirse** ya da **miktar artırılırsa** emir **zaman önceliğini kaybeder**.
- **Açılış seansının son 5 dakikasında:**
  - emir **iptal edilemez**,
  - fiyat **kötüleştirilemez**,
  - miktar **azaltılamaz**.
- Ayrıca emir toplama süresine **30 saniyeye kadar rastgele** ek süre eklenir.
- **Açığa satış** emirleri açılış seansı **dışında** verilebilir.
- Geçerli emir türleri:
  - limit,
  - piyasa,
  - piyasadan limite,
  - kalanı iptal et (KİE),
  - dengeleyici.
- **Piyasa** ve **piyasadan limite** emirler açılış seansında **yalnızca Yıldız ve Ana Pazar**'da girilebilir.
- Fiyat belirleme **en fazla 5 dakika** (genelde 1 dakika) sürer. Eşleştirme **30 saniye içinde rastgele** bir anda başlar. Devre kesici sonrası bu rastgelelik yoktur.

### Açılış fiyatı nasıl bulunur?
Aşağıdaki kriterler **sırayla** uygulanır; bir kriter tek fiyat verirse sonrakine bakılmaz.

1. **En yüksek işlem miktarı** sağlayan fiyat
2. Eşitlik varsa **en az kalan (eşleşmeyen) miktar**
3. Hâlâ eşitlik varsa **piyasa yönü**:
   - alış ağırlıklıysa **yüksek** fiyat,
   - satış ağırlıklıysa **düşük** fiyat.
4. Son olarak **referans fiyata en yakın** fiyat. Referans: son işlem, kapanış ya da Borsa'nın belirlediği fiyattan **en güncel** olanı.

- **Hesaba katılan emirler:**
  - limit, piyasa, piyasadan limite,
  - KİE,
  - rezerv,
  - kotasyon.
- **Hesaba katılmayan emirler:**
  - küsurat,
  - hepsi ya da hiçbiri,
  - gerçekleşmezse iptal et (GİE),
  - gösterge,
  - dengeleyici,
  - tetiklenmemiş şartlı (stop) emirler.
- Yalnızca **piyasa emirleri** varsa fiyat **belirlenmez**.
- Üzerinde hiç emir bulunmayan bir fiyat seviyesi de açılış fiyatı olabilir.

### Eşleştirme sırası
1. **Piyasa** emirleri. Piyasa ve piyasadan limite emirler arasında zaman önceliği geçerlidir.
2. **Piyasadan limite** emirler
3. **Limit** emirler (fiyat, sonra zaman önceliği)
4. **Dengeleyici** emirler. Yalnızca **kalan emirlerle**, belirlenen **denge fiyatından** ve zaman sırasıyla eşleşir. Eşleşmeyen dengeleyici emir **iptal edilir**.

---

## 5. Kapanış seansı
- **Kapanış fiyatı**, kapanış seansında oluşan fiyattır. Seansta fiyat oluşmazsa günün **son işlem fiyatı** kapanış fiyatı olur.
- Kapanış seansındaki emirler hem **günlük fiyat limitleri** içinde hem de **son işlem fiyatının ±%3**'ü içinde olmalıdır.
- **Örnek:** Baz fiyat 3,00 TL, günlük limitler 2,40–3,60 TL, son işlem fiyatı 3,58 TL.
  - ±%3 aralığı 3,4726–3,6874 olur; içeriye yuvarlanınca 3,48–3,68.
  - Günlük tavan 3,60 olduğu için geçerli emir aralığı **3,48–3,60** TL'dir.
- Kapanış seansında eşleşmeyen emirler **kapanış fiyatından işlemler** bölümüne aktarılır.

## 6. Kapanış fiyatından işlemler
- Bu bölümde yalnızca **kapanış fiyatından** emir girilebilir. Kapanış fiyatı yoksa **son işlem fiyatı** kullanılır.
- Eşleşme **zaman önceliğiyle** yapılır.

> [!ezber]
> **Marjlar:** temel düzenlemede Yıldız %20 · Ana %15 · Alt/YİP/PÖİP %10; 2020/20 duyurusuyla Yıldız ve Ana %10 · Rüçhan %50 · kapanış seansı son fiyatın ±%3'ü
> **Saatler:** açılış 09:40 · sürekli 10:00–18:00 · kapanış 18:00–18:07 · KFİ 18:07–18:10
> **Açılış fiyatı sırası:** max miktar → min kalan → piyasa yönü → referansa yakınlık
`,
  sorular: [
    {
      s: "Borsa İstanbul'un 2020/20 sayılı duyurusu dikkate alındığında, **Ana Pazar'da** işlem gören bir payın günlük fiyat marjı ne kadardır?",
      c: ["±%10", "±%15", "±%20", "±%25", "±%50"],
      d: 0,
      a: "Duyuruyla Yıldız ve Ana Pazar'da marj, ikinci bir duyuruya kadar **±%10**'a düşürülmüştür. Temel düzenlemede marj Yıldız ±%20, Ana ±%15, Alt Pazar, YİP ve PÖİP ±%10'dur. Rüçhan hakkı kuponlarında marj ±%50'dir.",
      k: "1003 resmi not s. 65"
    },
    {
      s: "Fiyat adımıyla ilgili hangisi doğrudur?",
      c: ["Fiyat adımı her zaman baz fiyata göre belirlenir.", "Uygulanacak fiyat adımını, emrin verildiği fiyat seviyesi belirler.", "Tüm paylarda fiyat adımı 0,01 TL'dir.", "Fiyat adımı sürekli işlemde değil, tek fiyat seanslarında uygulanır.", "Fiyat adımı payın işlem gördüğü pazara göre belirlenir; fiyat seviyesine göre değişmez."],
      d: 1,
      a: "Fiyat adımı **emrin fiyat seviyesine** göre belirlenir. Baz fiyatı 48,90 olan bir payda 50 TL'nin üstüne çıkıldığında adım 0,02'den 0,05'e geçer.",
      k: "1003 resmi not s. 64"
    },
    {
      s: "Alt Pazar'da işlem gören bir payın baz fiyatı 32,46 TL'dir. Bu payın günlük taban ve tavan fiyatları nedir?",
      c: ["29,22 – 35,70", "29,21 – 35,71", "29,20 – 35,70", "29,22 – 35,71", "29,21 – 35,70"],
      d: 0,
      a: "%10 marjla taban 29,214, tavan 35,706 bulunur. Limitler **içeriye doğru** yuvarlanır: taban **29,22**'ye çıkar, tavan **35,70**'e iner.",
      k: "1003 resmi not s. 65"
    },
    {
      s: "Sürekli işlem gören paylarda kapanış seansı hangi saatler arasında yapılır?",
      c: ["17:00 – 17:10", "17:30 – 17:40", "17:45 – 17:55", "17:55 – 18:00", "18:00 – 18:07"],
      d: 4,
      a: "Kapanış seansı **18:00–18:07** arasıdır (marj belirleme, emir toplama, fiyat belirleme). Ardından **18:07–18:10** kapanış fiyatından işlemler yapılır.",
      k: "1003 resmi not s. 66"
    },
    {
      s: "Tek fiyat yöntemiyle ilgili hangisi **yanlıştır?**",
      c: ["Emir toplama aşamasında işlem gerçekleşmez.", "Üyeler emir toplama sırasında tüm emir derinliğini görebilir.", "Fiyatı değiştirilen emir zaman önceliğini kaybeder.", "Açılış seansının son 5 dakikasında emir iptal edilemez.", "Fiyat, en fazla miktarın eşleşeceği seviyede belirlenir."],
      d: 1,
      a: "Emir toplama sırasında derinlik **gösterilmez**. Her üye yalnızca kendi emirlerini görür; piyasaya yalnızca teorik eşleşme fiyatı ve miktarı yayınlanır.",
      k: "1003 resmi not s. 68"
    },
    {
      s: "Açılış fiyatı belirlenirken en yüksek işlem miktarını sağlayan birden fazla fiyat varsa **ilk olarak** hangi kritere bakılır?",
      c: ["Referans fiyata en yakın fiyat", "Piyasa yönü", "En az kalan (eşleşmeyen) miktar", "En yüksek fiyat", "En eski emrin fiyatı"],
      d: 2,
      a: "Sıra: **en yüksek işlem miktarı → en az kalan miktar → piyasa yönü → referans fiyata yakınlık**. Miktar eşitse ikinci kriter kalan miktardır.",
      k: "1003 resmi not s. 69"
    },
    {
      s: "Aşağıdaki emirlerden hangisi açılış fiyatının hesaplanmasında **dikkate alınmaz?**",
      c: ["Limit emir", "Piyasa emri", "Kalanı iptal et emri", "Gerçekleşmezse iptal et", "Piyasadan limite emir"],
      d: 3,
      a: "Hesaba katılmayanlar: küsurat, hepsi ya da hiçbiri, **gerçekleşmezse iptal et**, gösterge, dengeleyici ve tetiklenmemiş şartlı emirler.",
      k: "1003 resmi not s. 69–70"
    },
    {
      s: "Baz fiyatı 3,00 TL olan ve günlük limitleri 2,40–3,60 TL olan bir payın son işlem fiyatı 3,58 TL'dir. Kapanış seansında girilebilecek emirlerin fiyat aralığı nedir?",
      c: ["3,47 – 3,69", "2,40 – 3,60", "3,50 – 3,66", "3,58 – 3,60", "3,48 – 3,60"],
      d: 4,
      a: "Kapanış seansında emirler hem son fiyatın **±%3**'ü (3,4726–3,6874, içeri yuvarlanınca 3,48–3,68) hem de **günlük limitler** (tavan 3,60) içinde olmalıdır. Kesişim **3,48–3,60**'tır.",
      k: "1003 resmi not s. 72"
    }
  ]
});
