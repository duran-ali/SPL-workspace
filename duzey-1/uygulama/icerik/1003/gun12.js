SPL.gun("1003", 12, {
  okuma: `
## Bugünün haritası
1. **CDS** ile kredi notunun ilişkisi
2. **Erken itfa opsiyonları:** geri çağırma (call) ve geri satma (put)
3. **Eurotahviller**
4. **STRIP**
5. **Getiri eğrisi**
6. Değişken getirili araçlarda **referans oranlar:** IBOR'dan **TLREF** ve **TLREFK**'ya

---

## 1. CDS ve kredi notu
- CDS primi ile kredi notu yakından ilişkilidir, ama **aynı hızda tepki vermezler**.
  - **Kredi notu** kapsamlı ve görece **uzun vadeli** bir değerlendirmedir.
  - **CDS primi** piyasanın **anlık beklentisini** yansıtır ve **daha hızlı** hareket eder.
- Not değişiklikleri çoğu zaman CDS'teki kalıcı hareketlerden **sonra** gelir. Bu yüzden CDS **öncü gösterge** sayılır.
- Ülke CDS primi artarsa yalnızca Hazinenin değil, döviz cinsi borçlanan **tüm şirket ve bankaların** maliyeti yükselir.
- En likit CDS **5 yıl** vadelidir. 5 yıllık prim, beş yılın **ortalama** risk primidir. Vadesine 2 yıl kalmış bir Eurotahvil için doğrudan karşılık değildir; daha düşük bir seviyeye uyarlanır.

---

## 2. Erken itfa opsiyonları
Borçlanma Araçları Tebliği **md. 15**'e göre tahviller, ihraççının ya da yatırımcının talebiyle kısmen veya tamamen **erken itfa edilebilir** şekilde ihraç edilebilir. Şartlar izahname ya da ihraç belgesinde yazılmalıdır.

| | **Geri çağırma (call) opsiyonlu** | **Geri satma (put) opsiyonlu** |
|---|---|---|
| Hak kimde? | **İhraççıda** | **Yatırımcıda** |
| Ne zaman kullanılır? | Faizler **düştüğünde**; ihraççı borcu kapatıp ucuza yeniden borçlanır | Faizler **yükseldiğinde**; yatırımcı tahvili iade edip daha yüksek getiriye geçer |
| Kimin için risk? | Yatırımcı için **yeniden yatırım riski** | İhraççı için **yeniden finansman riski** |
| Kupon (opsiyonsuza göre) | **Daha yüksek** | **Daha düşük** |

> [!ezber]
> Hak kimdeyse **opsiyon primini dolaylı olarak o öder**. Call'da ihraççı yüksek kuponla, put'ta yatırımcı düşük kuponla öder.

---

## 3. Eurotahviller (Eurobonds)
- **Tanım:** ihraççının kendi ülkesinin iç piyasası **dışında**, genellikle **kendi para birimi dışındaki** bir dövizle (USD, EUR) ihraç ettiği borçlanma aracıdır.
  - "Euro" sözcüğü Avrupa'yı ya da euroyu anlatmaz. İhracın **tek bir ülkenin mevzuatına bağlı olmadan**, uluslararası teamüllere göre yapıldığını anlatır.
- Devletler ve özel sektör ihraç edebilir. Türkiye'de bankalar ve büyük şirketler vade uzatmak ve kaynak çeşitlendirmek için kullanır.
- **Yapı:** hukuken genellikle **hamiline yazılı küresel senettir**; fiziki dolaşım yoktur.
  - **Euroclear** ve **Clearstream** nezdinde elektronik olarak saklanır.
- **Vergi:** kupon çoğunlukla kaynakta kesinti yapılmadan **brüt** ödenir. Bu vergisiz demek değildir; Türkiye'de **beyan** yoluyla vergilenebilir.
- **Kupon sıklığı:** Hazinenin **USD** cinsi eurotahvillerinde genellikle **6 ayda bir**, **EUR** cinsinde çoğunlukla **yılda bir**.
- **İkincil piyasa:**
  - Ağırlıkla küresel **OTC** piyasada işlem görür.
  - Türkiye'de BİAŞ Borçlanma Araçları Piyasası'nda bir **Eurotahvil Pazarı** da vardır.
- **ICMA** kuralları uygulanır. Takas çoğunlukla **T+2**'dir.
- Hazinenin USD eurotahvillerinde gün sayımı genellikle **30/360**'tır (yıl 360, her ay 30 gün).
- **Fiyatlama:** aynı vadeli risksiz getiri + **ülke risk primi (spread)**. Örnek: **UST + 200 bp**. Bu farka **G-spread** denir.
- Kur riskine karşı koruma sağlar, ama faiz ve kredi riski nedeniyle fiyatı dalgalanır.

---

## 4. STRIP
- **Tanım:** devlet tahvilinin **anapara ve kupon ödemelerini birbirinden ayırarak** her birini ayrı bir menkul kıymet gibi işlem görür hâle getirmektir.
- Ayrılan her parça **kuponsuz (iskontolu)** bir araç gibi kendi vadesiyle fiyatlanır. Tek bir nakit akışını temsil ettiği için **yeniden yatırım riski taşımaz**.
- Borsa İstanbul kodları:

| Kod | Anlamı | Niteliği |
|---|---|---|
| **T** | Tahvilin **orijinali** (tümü) | Kuponlu |
| **K** | Ayrıştırılmış **kupon** | Kuponsuz (iskontolu) |
| **A** | Ayrıştırılmış **anapara** | Kuponsuz (iskontolu) |

- Ödemesi yaklaşan bir kuponun fiyatı kupon tutarına yaklaşır; uzak vadeli parçalar daha düşük fiyatla işlem görür.

---

## 5. Getiri eğrisi
- **Tanım:** kredi riski eşit sayılan (genellikle **devlet**) tahvillerin **vadeleri** ile **getirileri** arasındaki ilişkiyi belirli bir anda gösteren grafiktir.
  - Yatay eksen **vadedir**, dikey eksen **getiridir**.
- **Normal (pozitif eğimli) eğri:** vade uzadıkça getiri artar. Ekonomik büyüme ve ılımlı enflasyon beklentisini yansıtır.
- **Ters (negatif eğimli) eğri:** kısa vadeli faiz uzun vadeliden **yüksektir**.
  - Genellikle merkez bankasının kısa faizi **agresif artırdığı** sıkı para politikası dönemlerinde görülür.
  - Yaklaşan **resesyonun güçlü bir öncü göstergesidir**, ama tek başına kesin sonuç değildir.
- Türkiye'de eğri, BİAŞ'ta işlem gören **DİBS** verileriyle oluşturulur.
- **Kullanım alanları:**
  - **Özel sektör tahvillerinin fiyatlaması:** aynı vadeli devlet getirisine kredi ve likidite primi eklenir.
  - Bankaların **aktif-pasif yönetimi**.
  - Merkez bankası için **geri bildirim:** kısa faiz artarken uzun faiz düşüyorsa piyasa enflasyonun kontrol altına alınacağına **inanıyor** demektir.

---

## 6. Referans oranlar

### IBOR'dan risksiz referans oranlara
- **IBOR** (LIBOR, EURIBOR, TRLIBOR): seçilmiş banka panelinin birbirinden **teminatsız** borçlanabileceği **tahmini** oranları her gün **beyan etmesine** dayanıyordu.
- **2008 krizi** sonrası teminatsız piyasa küçüldü. **2012'deki manipülasyon** vakaları da sistemin riskini gösterdi.
- Bu yüzden **gerçekleşmiş, teminatlı, yüksek hacimli** işlemlere dayanan **risksiz referans oranlara** geçildi.

| | **Eski sistem (IBOR)** | **Yeni sistem** |
|---|---|---|
| Dayanak | Beyan ve tahmin | Gerçekleşmiş gecelik işlemler |
| Faiz ne zaman belli? | **Vade başında** (ileriye dönük) | **Dönem sonunda** (geriye dönük) |
| Örnekler | LIBOR, TRLIBOR | **TLREF, TLREFK**, SOFR (USD), güçlendirilmiş Euribor |

### TLREF ve TLREFK

| | **TLREF** | **TLREFK** |
|---|---|---|
| Kullanıcı | Konvansiyonel piyasa | **Katılım bankaları**, faizsiz ürünler |
| Veri kaynağı | BİAŞ **Repo–Ters Repo Pazarı**: aynı gün valörlü, **DİBS teminatlı gecelik** işlemler | BİAŞ **Taahhütlü İşlemler Pazarı** (ör. kira sertifikalarının geri alım vaadiyle satışı) |
| Uç değer temizliği | En düşük ve en yüksek **%15** atılır, kalan **%70** | En düşük ve en yüksek **%10** atılır, kalan **%80** |
| Veri yetersizse | **TCMB ortalama fonlama faizi** ve geçmiş farklarla ikame hesap | Hacme göre **TLREF ile ağırlıklandırılır** (çok düşük hacimde %100 TLREF) |

- İkisini de **Borsa İstanbul** hesaplar. TLREF hacim ağırlıklı ortalamadır ve repo (teminatlı) işlemlere dayandığı için bankaların **kredi riskinden arındırılmıştır**.
- **Özel sektör** TLREF'li tahvillerinde TLREF'e **ek getiri** eklenir. **Hazine** ihraçlarında, TL kredi riski olmadığı için ek getiri **olmayabilir**. Hazinede **ilk kupon önceden belirlenen sabit orandır**, sonrakiler TLREF'e endekslidir.
- Gecelik oranlarla uzun kupon dönemini hesaplamak zor olduğu için **BIST TLREF Endeksi** ve **BIST TLREFK Endeksi** kullanılır:
  - *Endeksₜ = Endeksₜ₋₁ × [1 + (Rₜ × g / 365)]*
  - g, iş günleri için **1**, hafta sonu için **3**'tür.
  - **Örnek:** endeks 2.500, TLREF %20 iken ertesi gün 2.500 × (1 + 0,20/365) ≈ **2.501,37** olur. Ertesi gün %19 ile 2.501,37 üzerinden ≈ **2.502,67** olur. Her gün faiz anaparaya eklenir, yani **bileşik** işler.
- Geriye dönük hesap olduğu için kupon ödeme gününe kadar kesin bilinmez. Uygulamada hesap ödemeden birkaç iş günü önce **dondurulur**.
`,
  sorular: [
    {
      s: "CDS primleri ile kredi derecelendirme notları arasındaki ilişkiyle ilgili hangisi doğrudur?",
      c: ["Kredi notları, CDS primlerine göre piyasa gelişmelerine daha hızlı tepki verir ve öncü gösterge sayılır.", "CDS primleri piyasanın anlık beklentisini yansıtır; daha hızlı hareket eden öncü göstergedir.", "CDS primleri ile kredi notları arasında herhangi bir ilişki yoktur.", "CDS primleri yılda bir kez, derecelendirmeyle birlikte güncellenir.", "Kredi notu değişiklikleri her zaman CDS hareketlerinden önce gelir."],
      d: 1,
      a: "Kredi notları daha uzun vadeli değerlendirmedir. **CDS primleri** anlık beklentiyi yansıtır, **daha hızlı** hareket eder ve not değişiklikleri çoğu zaman CDS hareketlerinin **ardından** gelir.",
      k: "1003 resmi not s. 113"
    },
    {
      s: "Diğer koşullar aynıyken, geri çağırma (call) opsiyonlu bir tahvil opsiyonsuz benzerine göre nasıl bir kupon sunar ve bu yapı yatırımcı için hangi riski doğurur?",
      c: ["Daha düşük kupon – yeniden finansman riski", "Daha yüksek kupon – yeniden yatırım riski", "Aynı kupon – likidite riski", "Daha düşük kupon – yeniden yatırım riski", "Daha yüksek kupon – yeniden finansman riski"],
      d: 1,
      a: "Call hakkı **ihraççıdadır**; faizler düşünce tahvili geri çağırır ve yatırımcı **yeniden yatırım riski** taşır. Bunu telafi etmek için **daha yüksek kupon** sunulur.",
      k: "1003 resmi not s. 114"
    },
    {
      s: "Eurotahvillerle ilgili hangisi **yanlıştır?**",
      c: ["Euroclear ve Clearstream nezdinde saklanır.", "Kupon ödemeleri çoğunlukla kaynakta kesinti yapılmadan brüt ödenir.", "\"Euro\" ifadesi ihracın Avrupa'da ve euro cinsinden yapılmasını anlatır.", "İkincil piyasa işlemleri ağırlıkla tezgâhüstü piyasada gerçekleşir.", "Takas çoğunlukla T+2 valörüyle yapılır."],
      d: 2,
      a: "\"Euro\" ifadesi yeri ya da para birimini değil, ihracın **tek bir ülkenin mevzuatına bağlı olmadan** uluslararası teamüllere göre yapılmasını anlatır.",
      k: "1003 resmi not s. 114–115"
    },
    {
      s: "Hazine'nin ABD doları cinsi eurotahvillerinde işlemiş faiz hesabında genellikle hangi gün sayım yöntemi kullanılır?",
      c: ["Gerçek/Gerçek (ACT/ACT)", "Gerçek/365", "Gerçek/360", "30/360", "30/365"],
      d: 3,
      a: "Hazinenin USD cinsi eurotahvillerinde gün sayımı genellikle **30/360**'tır: yıl 360 gün, her ay 30 gün kabul edilir.",
      k: "1003 resmi not s. 115"
    },
    {
      s: "STRIP işleminde Borsa İstanbul'da \"K\" koduyla gösterilen kıymet hangisidir?",
      c: ["Tahvilin orijinali", "Ayrıştırılmış anapara", "Ayrıştırılmış kupon", "Kira sertifikası", "Kuponlu özel sektör tahvili"],
      d: 2,
      a: "**T** tahvilin orijinali, **A** ayrıştırılmış anapara, **K** ayrıştırılmış kupondur. A ve K kuponsuz (iskontolu) araç gibi işlem görür.",
      k: "1003 resmi not s. 116"
    },
    {
      s: "Ters (negatif eğimli) getiri eğrisi ile ilgili hangisi doğrudur?",
      c: ["Uzun vadeli faizler kısa vadelilerden yüksektir.", "Genellikle gevşek para politikası ve düşük kısa vadeli faiz dönemlerinde görülür.", "Yaklaşan bir resesyon için güçlü bir öncü gösterge kabul edilir.", "Ekonominin hızla büyüyeceğini kesin olarak gösterir.", "Türkiye'de özel sektör tahvilleriyle oluşturulur."],
      d: 2,
      a: "Ters eğride **kısa vadeli faiz uzun vadeliden yüksektir**. Genellikle sıkı para politikası dönemlerinde görülür ve **resesyonun öncü göstergesi** sayılır, ama tek başına kesin değildir.",
      k: "1003 resmi not s. 117"
    },
    {
      s: "TLREF hesaplamasıyla ilgili hangisi doğrudur?",
      c: ["Bankaların her sabah beyan ettiği tahmini borç verme oranlarından en yüksek ve en düşükler atılarak bulunan ortalamadır.", "Taahhütlü İşlemler Pazarı'ndaki işlemlerin verilerine dayanır.", "En düşük ve en yüksek %15'lik dilimler çıkarılır; kalan %70'in hacim ağırlıklı ortalaması alınır.", "TCMB tarafından bankalararası piyasa verileriyle hesaplanır.", "Teminatsız işlemlere dayandığı için banka kredi riski primi içerir."],
      d: 2,
      a: "TLREF'i **Borsa İstanbul** hesaplar. Repo–Ters Repo Pazarı'ndaki DİBS teminatlı gecelik işlemlerden en düşük ve en yüksek **%15** atılır; kalan **%70**'in hacim ağırlıklı ortalaması alınır.",
      k: "1003 resmi not s. 119–120"
    },
    {
      s: "TLREFK ile ilgili hangisi **yanlıştır?**",
      c: ["Katılım bankacılığı ürünlerinde referans olarak kullanılır.", "Borsa İstanbul Taahhütlü İşlemler Pazarı verilerine dayanır.", "En düşük ve en yüksek %10'luk dilimler çıkarılır.", "Hacim yetersizse TLREF ile ağırlıklandırılır.", "Repo–Ters Repo Pazarı'ndaki faizli işlemlerden türetilir."],
      d: 4,
      a: "Katılım bankaları faiz içerdiği için repo piyasasını kullanamaz. TLREFK, faizsiz **Taahhütlü İşlemler Pazarı** verilerinden türetilir.",
      k: "1003 resmi not s. 120"
    }
  ]
});
