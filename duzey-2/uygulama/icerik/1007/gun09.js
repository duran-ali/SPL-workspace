SPL.gun("1007", 9, {
  okuma: `
## Bugünün haritası
Dün borcun maliyetini bulduk. Bugün **özsermayenin maliyetini** iki modelle hesaplayacağız (**FVFM** ve **Gordon büyüme modeli**), **imtiyazlı payın** maliyetini göreceğiz ve hepsini **AOSM** formülünde birleştireceğiz. Bu üç formül sınavın gözdesidir.

1. Özsermaye maliyeti: tanım ve vergi farkı
2. **İçsel** ve **dışsal** özsermaye
3. **Finansal Varlıkları Fiyatlama Modeli (FVFM)**
4. **Kâr Payı Değerleme (Gordon Büyüme) Modeli**
5. **İmtiyazlı pay** maliyeti
6. **AOSM** hesabı
7. Çözümlü örnekler

---

## 1. Özsermaye maliyeti
**Özsermaye maliyeti**, işletmeye özsermaye sağlayanların **talep ettikleri getiri oranıdır** (**ks**).

> [!dikkat] Özsermaye sağlayanlara ödenen **kâr payı vergiden düşülemez**; borç faizindeki gibi bir **vergi avantajı sağlamaz**. Bu yüzden özsermaye maliyetine (1 − T) uygulanmaz.

## 2. İçsel ve dışsal özsermaye
| | **Dışsal özsermaye** | **İçsel özsermaye** |
|---|---|---|
| Nasıl temin edilir? | **Nakdi sermaye artışı** yoluyla yeni özsermaye | **Kârları dağıtmayıp** işletmede alıkoyarak |
| Teorik maliyet | Aynı | Aynı |
| Fark | Yeni hisse ihracı gerektirdiği için **ihraç maliyeti** vardır | İhraç maliyeti yoktur |

Bu nedenle uygulamada içsel ve dışsal özsermayenin maliyeti **farklılaşır**; dışsal özsermaye daha pahalıdır.

## 3. Finansal Varlıkları Fiyatlama Modeli (FVFM)
FVFM özsermaye maliyetinin belirlenmesinde **sıklıkla kullanılır**. Modele göre talep edilen getiri **özsermayenin riskinin** bir fonksiyonudur ve risk **beta** ile ölçülür.

> [!ezber] **E(Ri) = Rf + βi × [E(Rm) − Rf]**. Rf = risksiz faiz oranı, βi = özsermaye betası, E(Rm) = pazar portföyünün beklenen getirisi, **[E(Rm) − Rf] = piyasa risk primi**. Bulunan E(Ri), işletmenin **özsermaye maliyetidir (ks)**.

**Örnek:** ALFA A.Ş. betası 1,5, risksiz faiz %8, piyasa risk primi %6 → ks = 0,08 + 1,5 × 0,06 = **%17**.

> [!dikkat] Soruda **pazarın beklenen getirisi** verilirse risk primini önce siz bulmalısınız. TETA A.Ş.: Rf %10, E(Rm) %14, β 2,5 → ks = 0,10 + 2,5 × (0,14 − 0,10) = **%20**.

## 4. Kâr Payı Değerleme (Gordon Büyüme) Modeli
Bu modele göre hissenin değerini, gelecekte **sonsuza kadar** ödenecek kâr paylarının **bugünkü değeri** belirler. Model, kâr paylarının sonsuza kadar **sabit bir oranda büyüyeceği** varsayımına dayanır.

> [!ezber] **ks = D₀(1 + g) / P₀ + g**. D₀ = son dağıtılan kâr payı, g = kâr paylarının sonsuza kadar beklenen büyüme oranı, P₀ = hissenin cari pazar değeri. **D₀(1 + g) = D₁**, yani gelecek yıl beklenen kâr payıdır.

**Örnek:** ALFA'nın son kâr payı 0,50 TL, büyüme %2, hisse fiyatı 4 TL → ks = 0,50 × 1,02 / 4 + 0,02 = 0,1275 + 0,02 = **%14,75**.

- **Büyüme yoksa (g = 0):** ks = D / P₀. ZETA: kâr payı 0,75, fiyat 3,75 → ks = **%20**.

## 5. İmtiyazlı pay maliyeti
Şirketler imtiyazlı paylara genellikle **sabit kâr payı** ödemeyi taahhüt eder. Sabit temettü oranlı, **dönüştürülemez, geri çağrılamaz ve vadesi bulunmayan** imtiyazlı paylarda:

> [!ezber] **kp = Dp / Pp**. Dp = imtiyazlı pay başına her dönem ödenen **sabit temettü**, Pp = imtiyazlı payın **cari fiyatı**.

## 6. AOSM
Kaynakların ağırlıkları ve bireysel maliyetleri belirlendikten sonra:

> [!ezber] **k = wd × kd + ws × ks**. k = AOSM, kd = borcun (**vergi sonrası**) maliyeti, ks = özsermayenin maliyeti, wd ve ws = borç ve özsermayenin ağırlıkları (pazar değeriyle).

## 7. Çözümlü örnekler
**ALFA A.Ş.:** pazar değeriyle %40 borç, %60 özsermaye; yatırımı da aynı bileşimle finanse edecek. Borç maliyeti %12, özsermaye maliyeti %22, vergi %20.

| Bileşen | Ağırlık | Maliyet | Vergi sonrası maliyet | Ağırlıklı maliyet |
|---|---|---|---|---|
| Borç | 0,40 | 0,12 | 0,12 × 0,80 = **0,096** | **0,038** |
| Özsermaye | 0,60 | 0,22 | 0,22 | **0,132** |
| **AOSM** | | | | **≈ 0,17** |

**BETA A.Ş.:** %30 borç (maliyet %14), %70 özsermaye (maliyet %22,35), vergi %20 → k = 0,30 × 0,14 × 0,80 + 0,70 × 0,2235 = 0,0336 + 0,1565 ≈ **%19**.

**Gordon (bölüm sorusu):** son kâr payı 0,20 TL, büyüme %3, fiyat 2,06 TL → ks = 0,20 × 1,03 / 2,06 + 0,03 = 0,10 + 0,03 = **%13**.
`,
  sorular: [
    {
      s: "Özsermaye maliyeti ile ilgili hangisi doğrudur?",
      c: ["Kâr payları vergiden düşülebildiği için özsermayede de vergi sonrası maliyet kullanılır", "İçsel ve dışsal özsermayenin maliyeti ihraç maliyeti nedeniyle farklılaşır", "Özsermaye maliyeti, ortaklar daha az risk aldığı için borç maliyetinden her zaman düşüktür", "Dağıtılmayan kârlar şirketin kendi kaynağı olduğundan bunların hiçbir maliyeti yoktur", "Özsermaye maliyeti yalnızca tahvillerde kullanılan vadeye kadar getiri yöntemiyle hesaplanır"],
      d: 1,
      a: "İçsel (alıkonan kârlar) ve dışsal (nakdi sermaye artışı) özsermayenin maliyeti **teorik olarak aynıdır**; ancak dışsal özsermaye yeni hisse ihracı gerektirdiği için **ihraç maliyeti** doğar ve maliyetler farklılaşır. Kâr payı vergiden **düşülemez**.",
      k: "1007 resmi not s. 42"
    },
    {
      s: "FVFM'ye göre risksiz faiz oranı **%9**, piyasa risk primi **%5** ve özsermaye betası **1,2** olan bir şirketin özsermaye maliyeti nedir?",
      c: ["%14", "%15", "%16,8", "%10,8", "%6"],
      d: 1,
      a: "**ks = Rf + β × piyasa risk primi** = %9 + 1,2 × %5 = %9 + %6 = **%15**.",
      k: "1007 resmi not s. 42"
    },
    {
      s: "Risksiz faiz oranı **%8**, pazar portföyünün beklenen getirisi **%13** ve betası **2** olan bir şirketin FVFM'ye göre özsermaye maliyeti nedir?",
      c: ["%26", "%34", "%21", "%13", "%18"],
      d: 4,
      a: "Önce piyasa risk primi bulunur: %13 − %8 = **%5**. ks = %8 + 2 × %5 = **%18**. Pazar getirisini doğrudan betayla çarpmak (%8 + 2 × %13 = %34) yaygın bir hatadır.",
      k: "1007 resmi not s. 42, 45"
    },
    {
      s: "Son olarak 1,00 TL kâr payı dağıtan, kâr paylarının sonsuza kadar **%5** büyümesi beklenen ve hisse fiyatı **10,50 TL** olan bir şirketin Gordon modeline göre özsermaye maliyeti nedir?",
      c: ["%10", "%15", "%14,52", "%9,52", "%15,50"],
      d: 1,
      a: "**ks = D₀(1 + g) / P₀ + g** = 1,00 × 1,05 / 10,50 + 0,05 = 0,10 + 0,05 = **%15**.",
      k: "1007 resmi not s. 43"
    },
    {
      s: "Kâr Payı Değerleme (Gordon Büyüme) Modelinin temel varsayımı hangisidir?",
      c: ["Kâr paylarının sonsuza kadar sabit bir oranda büyüyeceği", "Hisse fiyatının yalnızca beta katsayısına göre belirleneceği", "Şirketin hiçbir dönemde kâr payı dağıtmayacağı", "Kâr paylarının her yıl rastgele ve öngörülemez biçimde değişeceği", "Hissenin piyasa değerinin defter değerine eşit olduğu"],
      d: 0,
      a: "Model, hissenin değerini sonsuza kadar ödenecek kâr paylarının **bugünkü değeri** olarak görür ve kâr paylarının **sonsuza kadar sabit bir oranda büyüyeceğini** varsayar.",
      k: "1007 resmi not s. 43"
    },
    {
      s: "Her dönem pay başına 3 TL sabit temettü ödenen, dönüştürülemez ve vadesiz imtiyazlı payların cari fiyatı **25 TL**'dir. İmtiyazlı pay maliyeti nedir?",
      c: ["%8,33", "%3", "%25", "%7,5", "%12"],
      d: 4,
      a: "**kp = Dp / Pp** = 3 / 25 = **%12**. İmtiyazlı pay maliyeti, sabit temettünün imtiyazlı payın **cari piyasa fiyatına** bölünmesiyle bulunur.",
      k: "1007 resmi not s. 43"
    },
    {
      s: "Kaynaklarının pazar değeriyle %50'si borç, %50'si özsermaye olan bir şirketin vergi öncesi borç maliyeti %10, özsermaye maliyeti %20 ve vergi oranı %20'dir. Şirketin **AOSM**'si nedir?",
      c: ["%15", "%16", "%12", "%14", "%18"],
      d: 3,
      a: "Vergi sonrası borç maliyeti = %10 × 0,80 = **%8**. AOSM = 0,50 × %8 + 0,50 × %20 = %4 + %10 = **%14**. Vergi etkisi unutulursa yanlışlıkla %15 bulunur.",
      k: "1007 resmi not s. 44"
    },
    {
      s: "AOSM formülünde (k = wd × kd + ws × ks) **vergi etkisi** ile ilgili hangisi doğrudur?",
      c: ["Vergi yalnızca özsermaye maliyetine uygulanır, borç maliyeti vergi öncesi alınır", "Vergi her iki kaynağın maliyetine de aynı oranda (1 − T) olarak uygulanır", "Borç maliyeti vergi sonrası alınır; özsermayeye düzeltme yapılmaz", "Vergi AOSM hesabında hiç dikkate alınmaz; yalnız nakit akışlarında kullanılır", "Vergi yalnızca borç ve özsermaye ağırlıklarının hesabında kullanılır"],
      d: 2,
      a: "Faiz vergiden düşülebildiği için **borç maliyeti (1 − T) ile çarpılarak** vergi sonrası alınır. Kâr payı vergiden düşülemediği için **özsermaye maliyetine** vergi düzeltmesi yapılmaz.",
      k: "1007 resmi not s. 42-44"
    }
  ]
});
