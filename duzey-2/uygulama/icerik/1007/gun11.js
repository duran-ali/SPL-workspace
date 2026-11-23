SPL.gun("1007", 11, {
  okuma: `
## Bugünün haritası
Bugün sermaye yapısı tartışmasının köşe taşını öğreniyoruz: **Modigliani-Miller (MM) teoremi**. Önce **vergisiz** dünyada sermaye yapısının değeri neden etkilemediğini, sonra **kurumlar vergisi** eklenince tablonun nasıl değiştiğini göreceğiz. İki önerme ve iki formül çifti var; sınavda hem yorum hem hesap gelir.

1. Mükemmel işleyen piyasalar ve MM'nin varsayımları
2. **MM I (vergisiz):** VL = VU
3. **MM II (vergisiz):** özsermaye maliyeti borçla artar
4. **Vergili MM I:** VL = VU + TD
5. **Vergili MM II** ve AOSM
6. %100 borç neden uygulanmaz?
7. Çözümlü örnekler

---

## 1. Mükemmel işleyen piyasalar
**Mükemmel işleyen finansal piyasalar:** menkul kıymetlerin **gerçek değerleriyle** fiyatlandığı, **vergi ve işlem maliyetlerinin olmadığı** ve yatırımların nakit akışlarının **finansman şeklinden bağımsız** olduğu piyasalar.

> [!ezber] **Franco Modigliani ve Merton Miller**'a göre mükemmel işleyen bir piyasada ve **vergi yokken** geleneksel görüş geçerli değildir: **optimal sermaye yapısı yoktur**; sermaye maliyeti kaynak yapısından **bağımsızdır** ve kaynak bileşimi ne olursa olsun **aynı kalır**.

**Varsayımlar:**
- Şirketler yalnız **borç ve özsermaye** kullanabilir.
- Şirketlerin **başarısız olması söz konusu değildir**; **borçlar risksizdir**.
- Şirketler **eş risk sınıfındadır** (aynı kategoride faaliyet riskleri aynıdır).
- Şirketler ve yatırımcılar **aynı faiz oranıyla** borç alıp verebilir.
- Yöneticiler **paydaşların menfaatine** hareket eder.
- Nakit akışları **sonsuz vadeli**, aynı büyüklükte ve eş gerçekleşme olasılıklıdır.
- Kurumlar ve şahıslar **vergiye tabi değildir**.
- Piyasalarda **tam rekabet** vardır; yatırımcılar **homojen beklentili rasyonel** bireylerdir.
- **İşlem maliyeti yoktur**; **bilgiye erişim** herkes için eşittir.

## 2. MM'nin birinci önermesi (vergisiz)
Bu varsayımlar altında şirketin değeri **sermaye yapısından bağımsızdır**; sermaye yapısı değiştirilerek değer **değiştirilemez**.

> [!ezber] **MM I: VL = VU.** Kaldıraçtan yararlanan (borçlu) şirketin değeri, kaldıraçtan yararlanmayan (%100 özsermayeli) şirketin değerine eşittir.

- Değerin temel belirleyicisi, **varlıkların yarattığı nakit akışlarının büyüklüğü ve riskidir**. Yani değeri sermaye yapısı değil, **yatırımların kalitesi** belirler.
- Sermaye yapısı yalnızca nakit akışının (değerin) **borç verenler ve ortaklar arasında nasıl dağılacağını** etkiler.

## 3. MM'nin ikinci önermesi (vergisiz)
Soru: ucuz borcun payı artarken **AOSM nasıl değişmiyor?** Cevap: **özsermaye maliyeti** borçla birlikte artar.

> [!ezber] **MM II: kE = k + (D/E) × (k − kD)**. kE = özsermaye maliyeti, k = AOSM (kaldıraçsız şirketin sermaye maliyeti), kD = borç maliyeti, D ve E = borç ve özsermayenin **piyasa değerleri**.

- Borcun payı artınca finansal risk artar, ortaklar **daha fazla getiri** ister.
- Borçlu şirketin özsermaye maliyeti = **kaldıraçsız özsermaye maliyeti + finansal kaldıraca bağlı risk primi**.
- Ucuz borcun sağladığı maliyet azalışı, özsermaye maliyetindeki **eşdeğer bir artışla** dengelenir. Grafikte (Şekil 4.2) kE yükselir, kD ve **k yatay kalır**.

## 4. Vergili MM: birinci önerme
Faiz **vergiden indirilebilir**; bu, borçlu şirketin varlıklarının yarattığı net geliri **faizin vergi tasarrufu** kadar artırır.

> [!ezber] **Faizin vergi tasarrufu = T × kD × D.** Borç sonsuz vadeliyse vergi tasarruflarının bugünkü değeri = (T × kD × D) / kD = **T × D**. **Vergili MM I: VL = VU + TD** (TD = vergi tasarruflarının bugünkü değeri).

Buna göre şirket **kaldıraçtan yararlandıkça değeri artar**; artışın kaynağı faizin vergi tasarrufudur.

## 5. Vergili MM: ikinci önerme
> [!ezber] **kE = k + (D/E) × (k − kD) × (1 − T)**

- Kaldıraç arttıkça özsermaye maliyeti yine artar, ancak artış (1 − T) ile **yumuşar**.
- Ucuz borçtan sağlanan azalış, özsermaye maliyetindeki artıştan **daha fazladır**; şirket daha fazla borç kullandıkça **AOSM azalır**. Grafikte (Şekil 4.3) k, kD(1 − T)'ye doğru düşer.

| | **Vergisiz MM** | **Vergili MM** |
|---|---|---|
| Değer | VL = VU | VL = VU + TD |
| Borç arttıkça AOSM | **Değişmez** | **Azalır** |
| Borç arttıkça değer | Değişmez | **Artar** |
| Optimal yapı | **Yok** | **%100 borç** |

## 6. %100 borç neden uygulanmaz?
Vergili MM'ye göre optimum yapı **kaynakların %100 borçtan oluşmasıdır**; ancak uygulamada böyle bir durumla karşılaşılmaz. Başlıca nedenler:
- **Kişisel gelir vergileri**
- **Finansal sıkıntı maliyeti**
- **Temsil sorunu**

## 7. Çözümlü örnekler
**Vergili değer:** özdeş iki şirketten borçsuz olanın değeri **100.000.000 TL**. Borçlu şirket sonsuza kadar yılda **2.500.000 TL** faiz ödüyor; kD = %10, T = %20.
- Borç tutarı = 2.500.000 / 0,10 = **25.000.000**; TD = 0,20 × 25.000.000 = **5.000.000**
- **VL = 100.000.000 + 5.000.000 = 105.000.000 TL**

**Vergili özsermaye maliyeti:** borçsuz şirketin özsermaye maliyeti **%22**; borçlu şirket %40 borç, %60 özsermaye; kD = %14, T = %20.
- kE = 0,22 + (40/60) × (0,22 − 0,14) × (1 − 0,20) = 0,22 + 0,6667 × 0,08 × 0,80 = **%26,27**
`,
  sorular: [
    {
      s: "Modigliani-Miller'a göre mükemmel işleyen piyasalarda ve **verginin olmadığı** durumda hangisi doğrudur?",
      c: ["Makul düzeyde borçla AOSM'yi minimize eden optimal bir yapı vardır", "Şirket değeri sermaye yapısından bağımsızdır; optimal yapı yoktur", "Optimal sermaye yapısı, faiz vergiden düşüldüğü için %100 borçtur", "Borç arttıkça AOSM sürekli düşer ve şirket değeri sürekli artar", "Özsermaye maliyeti borç oranından bağımsız olarak hep sabit kalır"],
      d: 1,
      a: "MM'ye göre vergisiz mükemmel piyasada geleneksel görüş geçerli değildir: **optimal sermaye yapısı yoktur**, sermaye maliyeti ve şirket değeri kaynak yapısından **bağımsızdır**.",
      k: "1007 resmi not s. 50"
    },
    {
      s: "Aşağıdakilerden hangisi MM teoreminin (vergisiz) **varsayımlarından biri değildir**?",
      c: ["Borçlar risksizdir", "İşlem maliyeti yoktur", "Şirketler ve yatırımcılar aynı faiz oranıyla borç alıp verebilir", "Şirketler eş risk sınıfındadır", "Şirketler finansal sıkıntı maliyetine katlanır"],
      d: 4,
      a: "MM'ye göre şirketlerin **başarısız olması söz konusu değildir** ve borçlar risksizdir; dolayısıyla **finansal sıkıntı maliyeti** varsayım dışıdır. Bu maliyeti teoriye **dengeleme (trade-off) teorisi** ekler.",
      k: "1007 resmi not s. 50, 53"
    },
    {
      s: "MM'nin birinci önermesine (vergisiz) göre şirket değerinin **temel belirleyicisi** nedir?",
      c: ["Borç-özsermaye oranı ve kaldıraç derecesi", "Şirketin izlediği kâr dağıtım politikası", "Varlıkların nakit akışlarının büyüklüğü ve riski", "Yeni hisse senedi ihracının ihraç maliyeti", "Ortak sayısı ve pay sahipliği yapısı"],
      d: 2,
      a: "MM I'e göre **VL = VU**; şirketin değerini sermaye yapısı değil, **varlıklarının yarattığı nakit akışlarının büyüklüğü ve riski**, yani **yatırımlarının kalitesi** belirler. Sermaye yapısı yalnız bu değerin borç verenler ve ortaklar arasında dağılımını etkiler.",
      k: "1007 resmi not s. 50-51"
    },
    {
      s: "Vergisiz MM'ye göre, düşük maliyetli borcun payı arttığı hâlde **AOSM'nin değişmemesinin** nedeni nedir?",
      c: ["Borç maliyetinin, borç payıyla birlikte hızla ve sürekli artması", "Özsermaye maliyetinin artıp borçtan sağlanan azalışı dengelemesi", "Faizin vergi tasarrufunun AOSM'yi her borç düzeyinde sabitlemesi", "Borç payı arttıkça şirketin faaliyet riskinin azalması", "Şirket değerinin düşmesi ve hisse fiyatının gerilemesi"],
      d: 1,
      a: "MM II'ye göre borç payı arttıkça finansal risk artar ve ortaklar daha fazla getiri ister: **kE = k + (D/E)(k − kD)**. Ucuz borçtan sağlanan maliyet azalışı **özsermaye maliyetindeki eşdeğer artışla** dengelenir; AOSM sabit kalır.",
      k: "1007 resmi not s. 51"
    },
    {
      s: "Kurumlar vergisi dikkate alındığında MM'ye göre borçlu şirketin değeri nasıl ifade edilir?",
      c: ["VL = VU − TD", "VL = VU", "VL = VU × (1 − T)", "VL = VU + TD", "VL = TD"],
      d: 3,
      a: "Faiz vergiden indirilebildiği için borçlu şirketin değeri, kaldıraçsız değerine **borçtan kaynaklanan vergi tasarruflarının bugünkü değeri (TD)** eklenerek bulunur: **VL = VU + TD**.",
      k: "1007 resmi not s. 52"
    },
    {
      s: "Borçsuz şirketin değeri **50.000.000 TL**'dir. Özdeş borçlu şirketin sonsuz vadeli borcu **20.000.000 TL** ve vergi oranı **%25**'tir. Vergili MM'ye göre borçlu şirketin değeri ne kadardır?",
      c: ["55.000.000 TL", "50.000.000 TL", "70.000.000 TL", "45.000.000 TL", "62.500.000 TL"],
      d: 0,
      a: "Sonsuz vadeli borçta vergi tasarruflarının bugünkü değeri **TD = T × D** = 0,25 × 20.000.000 = **5.000.000**. VL = VU + TD = 50.000.000 + 5.000.000 = **55.000.000 TL**.",
      k: "1007 resmi not s. 52, 59"
    },
    {
      s: "Borçsuz özsermaye maliyeti (k) **%20**, borç maliyeti **%10**, borç/özsermaye oranı (D/E) **0,5** ve vergi oranı **%20** olan bir şirketin vergili MM'ye göre **özsermaye maliyeti** nedir?",
      c: ["%25", "%20", "%24", "%28", "%22"],
      d: 2,
      a: "**kE = k + (D/E)(k − kD)(1 − T)** = %20 + 0,5 × (%20 − %10) × 0,80 = %20 + %4 = **%24**. Vergi olmasaydı kE = %20 + 0,5 × %10 = %25 olurdu.",
      k: "1007 resmi not s. 52, 59"
    },
    {
      s: "Vergili MM'ye göre optimal sermaye yapısı %100 borç olduğu hâlde uygulamada bu yapının görülmemesinin nedenleri arasında hangisi **yer almaz**?",
      c: ["Kişisel gelir vergileri", "Finansal sıkıntı maliyeti", "Temsil sorunu", "Faizin vergiden indirilebilir olması", "Hiçbiri; hepsi nedenler arasındadır"],
      d: 3,
      a: "Uygulamada %100 borç görülmemesinin başlıca nedenleri **kişisel gelir vergileri**, **finansal sıkıntı maliyeti** ve **temsil sorunudur**. **Faizin vergiden indirilmesi** ise tam tersine borcu cazip kılan ve vergili MM'de %100 borç sonucunu doğuran unsurdur.",
      k: "1007 resmi not s. 53"
    }
  ]
});
