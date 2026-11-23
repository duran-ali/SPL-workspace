SPL.gun("1007", 25, {
  okuma: `
## Bugünün haritası
Oran analizinin son günü. Bugün faaliyetlerin net sonucunu ölçen **kârlılık oranlarını**, **Dupont analizini**, reel **büyüme oranlarını** ve şirketin piyasa tarafından nasıl algılandığını gösteren **piyasa değeri oranlarını** öğreneceğiz.

1. **Kâr marjları**: brüt, faaliyet, FVÖK, vergi öncesi, net
2. **Varlık kârlılığı** ve **Dupont analizinin** ilk aşaması
3. **Özsermaye kârlılığı** ve Dupont'un ikinci aşaması
4. **Büyüme oranları**
5. Piyasa değeri oranları: **F/K**, **temettü verimi**, **PD/DD**
6. Çözümlü örnekler

---

## 1. Kâr marjları
Kârlılık oranları şirket faaliyetlerinin **ne derece kârlı** olduğunu ölçer: **kâr marjları**, **varlık kârlılığı** ve **özsermaye kârlılığı**. Kâr rakamlarının **satışlara** bölünmesiyle kâr marjları bulunur; **bütün marjların artış trendi olumludur**.

| Marj | Formül | Yorum |
|---|---|---|
| **Brüt kâr marjı** | (Satışlar − SMM) / Satışlar | Faaliyet ve finansman giderleri dahil diğer giderleri karşılayacak ve sahiplere yeterli kâr bırakacak kadar yüksek olmalı. Artışı, maliyetlerin satıştaki payının azaldığını ya da fiyatların maliyetlerden **hızlı** arttığını gösterir |
| **Faaliyet kâr marjı** | Faaliyet kârı / Satışlar | Satılan her 1 TL'nin faaliyet kârı; faaliyet giderlerinin satıştaki payı azalınca iyileşir |
| **FVÖK marjı** | FVÖK / Satışlar | Normalde faaliyet kâr marjından **büyük farklılık göstermemelidir** |
| **Vergi öncesi kâr marjı** | VÖK / Satışlar | Finansman giderlerinin satıştaki payı azalınca iyileşir |
| **Net kâr marjı** | Net kâr / Satışlar | Finansman giderleri ve kurumlar vergisi de düşülür |

> [!dikkat] FVÖK marjı faaliyet kâr marjından **çok daha iyiyse**, şirket **ana faaliyeti dışındaki** bir alanda gelir yaratıyordur; bu dikkat edilmesi gereken bir durumdur. **Azalan vergi öncesi kâr marjı**, finansmanda giderek daha fazla **borç** kullanıldığını ve/veya **borç maliyetinin arttığını** gösterir; iflas riskini artırır.

- Brüt kâr marjı yükselirken net kâr marjı düşebilir: aradaki **giderlerin aşırı artışı** nedeniyle marjlar farklı eğilimler gösterir. Analist **giderler** üzerinde yoğunlaşmalıdır.

## 2. Varlık kârlılığı ve Dupont (ilk aşama)
> [!ezber] **Varlık kârlılığı = FVÖK / Toplam varlıklar**. Dupont'un ilk aşaması: **Varlık kârlılığı = (FVÖK / Satışlar) × (Satışlar / Toplam varlıklar) = FVÖK marjı × Varlık devir hızı**.

- Ölçümde **FVÖK** kullanılır; çünkü varlıkların gerçek getirisi, onları finanse eden **tüm kaynaklara** (borç + özsermaye) yarattığı kârdır.
- Formülün ilk kısmı **fiyatlama, mamul karması, iskonto ve iade** gibi faktörlerden etkilenen kâr marjını, ikinci kısmı **aktif devir hızını** gösterir.
- Varlık kârlılığını artırmanın yolu: **maliyet kontrolüyle** kâr marjını artırmak ve/veya dönen-duran varlık dengesini koruyup **atıl varlıklardan** kaçınmak.
- **Dupont Mali Analiz Yöntemi**, faaliyet oranları ile kârlılık oranlarının yatırımların kârlılığını nasıl etkilediğini gösterir; kârlılığın **maliyet, gider ve yatırımların kontrolüyle** ilgili olduğunu açıklar.

## 3. Özsermaye kârlılığı ve Dupont (ikinci aşama)
Hissedarlar açısından **asıl önem taşıyan** kârlılık oranıdır.

> [!ezber] **Özsermaye kârlılığı = Net kâr / Özsermaye**. Dupont'un ikinci aşaması: **Özsermaye kârlılığı = Kâr marjı × (Satışlar / Toplam varlıklar) × (Toplam varlıklar / Özsermaye)**. İlk iki çarpan **aktif kârlılığını**, son çarpan **finansal kaldıracı** temsil eder.

- Şirket kaldıraçtan **olumlu** yararlanıyorsa özsermaye kârlılığı **varlık kârlılığından yüksek** olmalıdır.
- **Vergi öncesi:** ÖK = Varlık kârlılığı + (Borç / Özsermaye) × (Varlık kârlılığı − Borç maliyeti)
- **Vergi sonrası:** ÖK = Varlık kârlılığı × (1 − t) + (Borç / Özsermaye) × (Varlık kârlılığı − Borç maliyeti) × (1 − t)
- Borç maliyeti varlık kârlılığının **altındaysa** borçtan olumlu yararlanılır. Fark **negatifse** özsermaye kârlılığı varlık kârlılığından **düşüktür**: şirket borcunun maliyetini karşılayacak kadar varlık kârlılığı yaratamıyordur; borç oranı arttıkça risk **katlanarak** büyür.

## 4. Büyüme oranları
- **Satışlarda büyüme:** faaliyetlerin değerlendirilmesinde **en önemli gösterge** satışları artırma becerisidir. **Yüksek enflasyonlu** ülkelerde nominal artış anlam ifade etmez; büyüme **reel** ölçülmelidir.

> [!ezber] **Reel satış büyümesi = (1 + Nominal satış büyümesi) / (1 + Enflasyon) − 1**

- **Brüt kâr, FVÖK, VÖK ve net kârdaki reel büyüme**, bu kârların bir sonraki yılın **satın alma gücüne göre korunduğunu** gösterir. En iyi durum: kârlar **reel olarak büyürken kâr marjlarının da büyümesidir**. Kâr reel büyürken marj küçülebilir ya da tersi olabilir; bu yüzden reel büyüme **marj trendiyle birlikte** değerlendirilmelidir.

## 5. Piyasa değeri oranları
Şirketin **piyasa tarafından nasıl algılandığını** gösterir; bu bilgi muhasebe tablolarından elde edilemez.

| Oran | Formül | Yorum |
|---|---|---|
| **Hisse senedinin piyasa fiyatı** | Borsada oluşan fiyat | Fiyat × hisse sayısı = **özsermayenin pazar değeri** |
| **Fiyat / Kazanç (F/K)** | Hisse fiyatı / Hisse başına kâr = Piyasa değeri / Net kâr | **1 birim kâr için kaç birim ödendiğini** gösterir; analistlerin ilk baktığı popüler çarpan |
| **Temettü verimi** | Son yıllık temettü / Cari pazar fiyatı | **Yüksek** verim düşük büyüme potansiyeli; **düşük** verim büyüme fırsatlarının varlığı olarak algılanabilir |
| **Piyasa değeri / Defter değeri** | Hisse fiyatı / Hisse başına özsermaye | Şirketin piyasadaki değerinin **özsermayesinin kaç katı** olduğunu gösterir |

- **Hisse başına kâr** = En son yılın toplam net kârı / Hisse sayısı. **Defter değeri** = hisse başına özsermaye.
- **F/K ve risk ters ilişkilidir:** şirketten beklenen getiri yükseldikçe F/K **düşer**. **Yüksek F/K**, gelecekteki **büyüme fırsatlarının** büyüklüğünün göstergesidir.
- F/K sektörden sektöre değişir ve piyasa koşullarına çok hassastır (coşkulu dönemlerde yüksek, krizde düşük); bu yüzden **tek başına yeterli bir yatırım kriteri değildir**.

## 6. Çözümlü örnekler
**F/K:** hisse fiyatı 3,00 TL, yıllık hisse başına net kâr 1,00 TL → F/K = **3**: yatırımcı yılda 1 TL kâra ortak olmak için bir defaya mahsus 3 TL öder.

**Özsermaye kârlılığı:** %100 özsermayeli E A.Ş.; vergi öncesi kâr 2.000.000, vergi %20, satışlar 10.000.000, toplam varlık devir hızı 2.
- Net kâr = 2.000.000 × 0,80 = **1.600.000**; Toplam varlık = 10.000.000 / 2 = **5.000.000** = özsermaye
- ÖK = 1.600.000 / 5.000.000 = **%32**
`,
  sorular: [
    {
      s: "Normal koşullarda **FVÖK marjının faaliyet kâr marjından çok daha iyi** çıkması neye işaret eder?",
      c: ["Şirketin finansman giderlerinin satışlara oranla arttığına", "Şirketin ana faaliyeti dışında gelir yarattığına", "Brüt kâr marjının önceki döneme göre düştüğüne", "Kurumlar vergisi oranının yükseldiğine ve net kârın azaldığına", "Stok devir hızının yavaşladığına ve stokların biriktiğine"],
      d: 1,
      a: "İki marj arasındaki fark **diğer gelir ve giderlerden** oluşur. FVÖK marjı faaliyet kâr marjından çok daha iyiyse şirket **ana faaliyetinin dışında** gelir yaratıyordur; bu dikkat edilmesi gereken bir durumdur.",
      k: "1007 resmi not s. 121"
    },
    {
      s: "**Azalan vergi öncesi kâr marjı** trendi genellikle neyi gösterir?",
      c: ["Finansmanda daha fazla borç kullanıldığını ve/veya borç maliyetinin arttığını", "Satış fiyatlarının maliyetlerden daha hızlı arttığını ve marjın genişlediğini", "Faaliyet giderlerinin satışlar içindeki payının azaldığını", "Şirketin hiç borcu olmadığını ve tamamen özsermayeyle çalıştığını", "Stokların daha hızlı devrettiğini ve nakit döngüsünün kısaldığını"],
      d: 0,
      a: "Vergi öncesi kâr marjı **finansman giderlerinin** satışlardaki payı azalınca iyileşir. Azalan trend, finansmanda giderek **daha fazla borç** kullanıldığını ve/veya **borç maliyetinin arttığını** gösterir; iflas riskini artırır.",
      k: "1007 resmi not s. 121"
    },
    {
      s: "Dupont analizinin ilk aşamasına göre **varlık kârlılığı** hangi iki unsurun çarpımıdır?",
      c: ["Net kâr marjı ve finansal kaldıraç", "Cari oran ve asit-test oranı", "Stok devir hızı ve alacak devir hızı", "FVÖK marjı ve varlık devir hızı", "Temettü verimi ve F/K oranı"],
      d: 3,
      a: "**Varlık kârlılığı = (FVÖK / Satışlar) × (Satışlar / Toplam varlıklar)**, yani **FVÖK marjı × varlık devir hızıdır**. Dupont'un ikinci aşamasında buna **finansal kaldıraç** (Toplam varlık / Özsermaye) eklenerek özsermaye kârlılığına ulaşılır.",
      k: "1007 resmi not s. 122"
    },
    {
      s: "FVÖK marjı **%8** ve toplam varlık devir hızı **2,5** olan bir şirketin **varlık kârlılığı** nedir?",
      c: ["%3,2", "%10,5", "%5,5", "%20", "%31,25"],
      d: 3,
      a: "Dupont: **Varlık kârlılığı = FVÖK marjı × Varlık devir hızı** = %8 × 2,5 = **%20**.",
      k: "1007 resmi not s. 122"
    },
    {
      s: "Net kâr marjı **%5**, toplam varlık devir hızı **2** ve toplam varlıkların özsermayeye oranı **1,5** olan bir şirketin Dupont analizine göre **özsermaye kârlılığı** nedir?",
      c: ["%10", "%7,5", "%15", "%3,3", "%8,5"],
      d: 2,
      a: "**ÖK = Kâr marjı × Varlık devir hızı × (Toplam varlık / Özsermaye)** = %5 × 2 × 1,5 = **%15**. İlk iki çarpanın sonucu (%10) aktif kârlılığıdır; 1,5 finansal kaldıraçtır.",
      k: "1007 resmi not s. 122"
    },
    {
      s: "Bir şirketin satışları nominal olarak **%26** artmış, aynı dönemde enflasyon **%20** olmuştur. **Reel satış büyümesi** nedir?",
      c: ["%6", "%46", "%5", "%1,26", "%3"],
      d: 2,
      a: "**Reel büyüme = (1 + Nominal büyüme) / (1 + Enflasyon) − 1** = 1,26 / 1,20 − 1 = 1,05 − 1 = **%5**. Basit çıkarma (%26 − %20 = %6) yaklaşık sonuçtur.",
      k: "1007 resmi not s. 123"
    },
    {
      s: "Fiyat/Kazanç (F/K) oranı ile ilgili hangisi doğrudur?",
      c: ["Şirketin riski ile F/K oranı arasında doğru orantı vardır; risk arttıkça F/K yükselir", "Yüksek F/K, büyüme fırsatlarının büyüklüğünün göstergesidir", "F/K, sektör farkından etkilenmediği için tek başına yeterli bir yatırım kriteridir", "F/K, son yıllık temettünün hisse senedi fiyatına bölünmesiyle bulunur", "F/K piyasa koşullarından etkilenmez; kriz ve coşku dönemlerinde aynıdır"],
      d: 1,
      a: "F/K, 1 birim kâr için kaç birim fiyat ödendiğini gösterir. **Risk ile F/K ters ilişkilidir**; **yüksek F/K büyüme fırsatlarının** göstergesidir. Sektöre ve piyasa koşullarına hassas olduğu için **tek başına yeterli değildir**.",
      k: "1007 resmi not s. 124"
    },
    {
      s: "Hisse fiyatı **24 TL**, son yıllık temettüsü **1,20 TL** olan bir şirketin **temettü verimi** nedir?",
      c: ["%20", "%2", "%12", "%5", "%1,2"],
      d: 3,
      a: "**Temettü verimi = Son yıllık temettü / Cari pazar fiyatı** = 1,20 / 24 = **%5**. Yüksek temettü verimi düşük büyüme potansiyeli, düşük verim ise büyüme fırsatlarının varlığı olarak algılanabilir.",
      k: "1007 resmi not s. 124"
    }
  ]
});
