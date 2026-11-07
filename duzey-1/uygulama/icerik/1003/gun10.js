SPL.gun("1003", 10, {
  okuma: `
## Bugünün haritası
1. **İtfa yapısı:** vade sonu tek ödeme, parçalı itfa, anüite tahvilleri
2. **Temiz fiyat, kirli fiyat** ve **işlemiş faiz**
3. **Kuponsuz senet** fiyatlaması
4. **Basit faiz** ve **bileşik faiz**
5. Getiri ölçütleri: **nominal, cari, vadeye kadar getiri**
6. **Reel getiri** (Fisher) ve **mevduat eşleniği**

Bugün hesap ağırlıklı bir gün. Formülleri ezberlemek yerine örnekleri bir kez kendin çözmeye çalış.

---

## 1. İtfa yapısı
- **Vade sonu tek ödeme (balon ödeme):**
  - Vade boyunca yalnızca faiz ödenir; anapara sonda toplu ödenir.
  - Türkiye'de en yaygın yapıdır.
  - İhraççı için vade sonunda **yeniden borçlanma (rollover)** riski doğar.
- **Parçalı itfa:**
  - Anapara bir takvime göre **kademeli** ödenir.
  - **Dengeli borç servisi** türünde, konut kredisindeki gibi her dönemin **toplam taksiti sabittir**. Başta taksitin çoğu faizdir; zamanla anapara payı artar.

### Anüite tahvilleri
- **TÜFE'ye endeksli anüite devlet tahvilleri**, parçalı itfanın en gelişmiş örneğidir.
  - **Reel taksit tutarı sabittir**; nominal ödeme enflasyonla artar. Her taksitte anapara ve faiz vardır.
  - **Amaç:** sigorta ve emeklilik şirketlerinin **yıllık gelir sigortası** ödemelerini karşılamak.
  - Genelde **30 yıl** vadeli ve **3 ayda bir** ödemelidir. **Deflasyona karşı** getiri garantisi içerir.
  - Hazine bunları talep toplamayla **doğrudan satış** yöntemiyle ihraç eder. Çoğunlukla vadeye kadar elde tutulur.

---

## 2. Temiz fiyat, kirli fiyat, işlemiş faiz
İki kupon tarihi arasında el değiştiren bir tahvilde, satıcının elde tuttuğu sürenin faizi alıcıdan alınmalıdır.

| Kavram | Anlamı |
|---|---|
| **İşlemiş faiz** | Son kupon tarihinden **takas tarihine** kadar biriken faiz |
| **Temiz fiyat** | İşlemiş faizden **arındırılmış** fiyat. Ekranda görülen ve **analizde** kullanılan fiyattır. |
| **Kirli fiyat** | **Temiz fiyat + işlemiş faiz.** Fiilen ödenen ve **takasta** esas alınan fiyattır. |

- **Testere dişi modeli:** Piyasa değişmezse temiz fiyat yatay gider. Kirli fiyat her dönem doğrusal olarak yükselir, kupon ödenince birden temiz fiyata **düşer**.
- **Kuponsuz senetlerde** işlemiş faiz **sıfırdır**; temiz fiyat = kirli fiyat. Fiyat vadeye doğru 100 TL'ye yaklaşır.

### İşlemiş faiz hesabı
Türkiye'de **Gerçek/Gerçek (ACT/ACT)** gün sayımı kullanılır. Son kupon günü **dahil**, takas günü **hariç** sayılır.

*İşlemiş faiz = Nominal × Yıllık kupon oranı × Gün sayısı / 365*

**Örnek:** 100 TL nominal, %6 kupon, kuponlar 1 Haziran ve 1 Aralık'ta. Takas 19 Eylül.
- Gün sayısı: Haziran 30 + Temmuz 31 + Ağustos 31 + Eylül 18 = **110 gün**.
- İşlemiş faiz = 100 × 0,06 × 110 / 365 = **1,81 TL**.
- 1 Aralık'taki 3 TL kuponun 1,81 TL'si alıcının ödediği faizin geri dönüşüdür; **1,19 TL** alıcının asıl faiz geliridir.

---

## 3. Kuponsuz senet fiyatlaması
Hazine bonoları ve finansman bonoları çoğunlukla **kuponsuz** ihraç edilir. Türkiye'de **basit faiz** ve **Gerçek gün / 365** kullanılır.

*Fiyat = Nominal / [1 + (basit faiz × vadeye kalan gün / 365)]*

**Örnek:** 100 TL nominal, vadeye 180 gün, yıllık %20 basit faiz.
- Fiyat = 100 / (1 + 0,20 × 180/365) = 100 / 1,0986 ≈ **91,02 TL**.
- Vade sonunda 100 TL alınır; dönem getirisi **8,98 TL**'dir.

---

## 4. Basit faiz ve bileşik faiz
Fark **yeniden yatırım varsayımından** gelir:
- **Basit faiz:** kuponlar vade sonuna kadar **atıl bekler**.
- **Bileşik faiz:** her kupon **aynı oranla yeniden yatırılır**; faiz de faiz kazanır.

| | Formül | Örnek (3 ayda bir %5) |
|---|---|---|
| **Yıllık basit** (nominal) | Dönemsel getiri × yıllık kupon sayısı | %5 × 4 = **%20** |
| **Yıllık bileşik** (efektif) | (1 + dönemsel getiri)^kupon sayısı − 1 | 1,05⁴ − 1 ≈ **%21,55** |

### Basit faiz %20 iken ödeme sıklığının etkisi

| Ödeme sıklığı | Bileşik (efektif) getiri |
|---|---|
| Yılda 1 | %20,00 |
| 6 ayda bir | %21,00 |
| 3 ayda bir | %21,55 |
| Aylık | %21,94 |
| Günlük | %22,13 |

> [!ezber]
> Basit faiz aynı kalsa bile **ödeme sıklığı arttıkça bileşik getiri artar**. Karşılaştırmada **bileşik (efektif)** oran kullanılır.

---

## 5. Getiri ölçütleri

| Ölçüt | Formül | Neyi dikkate almaz? |
|---|---|---|
| **Nominal getiri** | Yıllık kupon / **nominal değer** | Alış fiyatını |
| **Cari getiri** | Yıllık kupon / **piyasa fiyatı** | Vade sonu sermaye kazancını ve yeniden yatırımı |
| **Vadeye kadar getiri (YTM)** | Tüm nakit akışlarının bugünkü değerini fiyata eşitleyen oran (iç verim oranı) | — en kapsamlı ölçüt |

- **Örnek:** %20 kuponlu, 100 TL nominal tahvilin fiyatı 80 TL.
  - Nominal getiri **%20**.
  - Cari getiri 20 / 80 = **%25**.
- **YTM'nin iki varsayımı:**
  1. Tahvil **vadeye kadar tutulur**.
  2. Kuponlar **aynı oranla (YTM'den) yeniden yatırılır**.
- **Yeniden yatırım riski:** faizler düşerse kuponlar daha düşük oranla yatırılır. Risk **yüksek kuponlu ve uzun vadeli** tahvillerde belirgindir. **Kuponsuz** tahvillerde bu risk **yoktur**.

### Getiri sıralaması

| Fiyat durumu | Sıralama |
|---|---|
| **İskontolu** (fiyat < 100) | **YTM > Cari > Nominal** |
| **Başabaş** (fiyat = 100) | YTM = Cari = Nominal |
| **Primli** (fiyat > 100) | **Nominal > Cari > YTM** |

İskontolu tahvilde vade sonunda **sermaye kazancı**, primli tahvilde **sermaye kaybı** oluşur. Sıralamayı bu mantıkla hatırla.

---

## 6. Reel getiri ve mevduat eşleniği

### Fisher denklemi
*Reel getiri = (1 + nominal getiri) / (1 + enflasyon) − 1*

- Pratikte "nominal − enflasyon" yaklaşımı kullanılır, ama **yüksek enflasyonda** bu yöntem reel getiriyi **olduğundan yüksek** gösterir.
- **Örnek:** nominal %50, enflasyon %40.
  - Basit fark %10.
  - Fisher: 1,50 / 1,40 − 1 = **%7,14**.
- **Beklenen reel getiri** beklenen enflasyonla, **gerçekleşen reel getiri** gerçekleşen enflasyonla hesaplanır.
- Gerçekleşen enflasyon beklenenden yüksek olursa sabit kuponlu tahvilin reel getirisi düşer. Buna **enflasyon riski** denir.

### Net getiri ve mevduat eşleniği
- Kotasyonlar **brüt** verilir; yatırımcı için asıl önemli olan **net (vergi sonrası)** getiridir.
- *Net getiri = Brüt faiz × (1 − stopaj oranı)*
- *Mevduat eşleniği = Net getiri / (1 − mevduat stopaj oranı)*
- **Örnek:** %0 stopajlı hazine bonosu %40, mevduat stopajı %20.
  - Bononun net getirisi %40'tır.
  - Mevduat eşleniği 0,40 / 0,80 = **%50**.
  - Yani bu bono, **%50 brüt faizli** mevduata denktir. %48 faizli mevduatın net getirisi ise %38,40'ta kalır.
`,
  sorular: [
    {
      s: "Temiz fiyat ve kirli fiyatla ilgili hangisi doğrudur?",
      c: ["Takas işlemlerinde temiz fiyat esas alınır.", "Kirli fiyat, temiz fiyata işlemiş faizin eklenmesiyle bulunur.", "Kuponsuz senetlerde kirli fiyat temiz fiyattan yüksektir.", "Finansal analizlerde kirli fiyat kullanılır.", "İşlemiş faiz hesabında takas günü de sayılır."],
      d: 1,
      a: "**Kirli fiyat = temiz fiyat + işlemiş faiz** ve takasta esas alınır. Analizde temiz fiyat kullanılır. Kuponsuz senetlerde işlemiş faiz sıfır olduğu için iki fiyat eşittir. Takas günü hesaba dahil edilmez.",
      k: "1003 resmi not s. 93–94"
    },
    {
      s: "Nominal değeri 100 TL, yıllık kupon oranı %6 olan bir tahvilde son kupon tarihi ile takas tarihi arasında 110 gün vardır. İşlemiş faiz yaklaşık ne kadardır? (Yıl 365 gün)",
      c: ["1,81 TL", "1,19 TL", "3,00 TL", "6,00 TL", "0,60 TL"],
      d: 0,
      a: "İşlemiş faiz = 100 × 0,06 × 110 / 365 ≈ **1,81 TL**.",
      k: "1003 resmi not s. 94"
    },
    {
      s: "Nominal değeri 100 TL olan, vadesine 180 gün kalan bir hazine bonosu yıllık %20 basit faizle işlem görmektedir. Bononun fiyatı yaklaşık ne kadardır?",
      c: ["80,00 TL", "85,00 TL", "88,00 TL", "90,00 TL", "91,02 TL"],
      d: 4,
      a: "Fiyat = 100 / (1 + 0,20 × 180/365) = 100 / 1,0986 ≈ **91,02 TL**.",
      k: "1003 resmi not s. 95"
    },
    {
      s: "Üç ayda bir %5 dönemsel getiri sağlayan bir bononun yıllık bileşik (efektif) getirisi yaklaşık yüzde kaçtır?",
      c: ["%20,00", "%20,50", "%21,00", "%21,25", "%21,55"],
      d: 4,
      a: "Bileşik getiri = (1,05)⁴ − 1 ≈ **%21,55**. Basit (nominal) getiri ise %5 × 4 = %20'dir.",
      k: "1003 resmi not s. 96"
    },
    {
      s: "Nominal değeri 100 TL, yıllık kupon oranı %20 olan bir tahvilin piyasa fiyatı 80 TL'dir. Cari getiri yüzde kaçtır?",
      c: ["%16", "%20", "%25", "%30", "%40"],
      d: 2,
      a: "Cari getiri = yıllık kupon / piyasa fiyatı = 20 / 80 = **%25**. Nominal getiri %20'dir.",
      k: "1003 resmi not s. 97"
    },
    {
      s: "Primli (fiyatı nominal değerin üzerinde olan) bir tahvilde getiri ölçütlerinin sıralaması nasıldır?",
      c: ["YTM > Cari getiri > Nominal getiri", "Nominal getiri > Cari getiri > YTM", "Cari getiri > YTM > Nominal getiri", "YTM = Cari getiri = Nominal getiri", "Nominal getiri > YTM > Cari getiri"],
      d: 1,
      a: "Primli tahvilde vade sonunda **sermaye kaybı** oluşur. Bu yüzden **Nominal > Cari > YTM**. İskontolu tahvilde sıralama tersidir.",
      k: "1003 resmi not s. 99"
    },
    {
      s: "Nominal getirinin %50, enflasyonun %40 olduğu bir durumda Fisher denklemine göre reel getiri yaklaşık yüzde kaçtır?",
      c: ["%10,00", "%7,14", "%12,50", "%3,57", "%90,00"],
      d: 1,
      a: "Reel getiri = 1,50 / 1,40 − 1 ≈ **%7,14**. Basit fark yöntemi (%10) yüksek enflasyonda reel getiriyi olduğundan yüksek gösterir.",
      k: "1003 resmi not s. 100"
    },
    {
      s: "Stopajı %0 olan ve yıllık %40 brüt faiz sağlayan bir hazine bonosunun, stopajı %20 olan mevduata göre mevduat eşleniği yüzde kaçtır?",
      c: ["%32", "%40", "%48", "%50", "%60"],
      d: 3,
      a: "Bononun net getirisi %40'tır. Mevduat eşleniği = 0,40 / (1 − 0,20) = **%50**.",
      k: "1003 resmi not s. 101"
    }
  ]
});
