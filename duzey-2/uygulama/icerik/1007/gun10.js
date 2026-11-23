SPL.gun("1007", 10, {
  okuma: `
## Bugünün haritası
Yeni bölüm: **Sermaye Yapısı**. Borç ucuz bir kaynaktır; o hâlde şirket hep borçla mı finanse edilmeli? Bu bölüm bu soruya verilen cevapları inceler. Bugün temel kavramları ve **geleneksel görüşü**, sonraki iki günde **Modigliani-Miller**, **dengeleme** ve **finansman hiyerarşisi** teorilerini göreceğiz.

1. Sermaye yapısı ve doğru kaynak tercihinin önemi
2. Borç neden özsermayeden **ucuzdur**?
3. Ucuz borcun sınırı: **finansal risk**
4. **Optimal sermaye yapısı**
5. **Faaliyet riski** ve **finansal risk**
6. **Geleneksel görüş**

---

## 1. Sermaye yapısı
**Sermaye yapısı:** işletme kaynakları içinde **borç ve özsermayenin göreceli payı**.

| Kaynak tercihi | Sonuç |
|---|---|
| **Yanlış** | Sermaye maliyeti **yükselir**, projelerin **NBD'si azalır**, pek çok proje **reddedilir** |
| **Doğru** | Sermaye maliyeti **azalır**, NBD'ler **artar**, daha çok proje **kabul edilir**, şirket değeri artar |

## 2. Borç neden daha ucuzdur?
Borç verenler ortaklara göre **daha az risk** aldıkları için daha az getiri talep eder:
- Borç verenlerin şirketin **gelirleri ve varlıkları üzerinde öncelik hakları** vardır.
- Borç yatırımları **faiz ve anapara** şeklinde **önceden kesin olarak bilinen** nakit akışları yaratır.
- Yükümlülüğün yerine getirilmemesi **iflas istenmesi** gibi ciddi **yasal sonuçlar** doğurur.
- Ayrıca **faizin vergiden düşülebilmesi** borç maliyetini azaltır.

Ortak olmak ise daha risklidir: hisse getirisinin iki unsuru olan **temettü** ve **sermaye kazancı** önceden kesin bilinemez. Bu yüzden ortakların getiri talebi daha yüksektir ve özsermaye **daha pahalı** bir kaynaktır.

> [!ezber] **Borcun maliyeti < Özsermayenin maliyeti.** Nedenleri: öncelik hakkı, kesin nakit akışları, yasal güvence ve faizin vergi avantajı.

## 3. Ucuz borcun sınırı
Borç payı arttıkça şirketin **finansal riski** artar. Bu, özsermaye sağlayanların üstlendiği riski ve dolayısıyla **getiri taleplerini** artırır. Bu yüzden "borç payını artırmak sermaye maliyetini hep düşürür" sonucu kendiliğinden çıkmaz.

## 4. Optimal sermaye yapısı
> [!ezber] **Optimal sermaye yapısı:** sermaye maliyetinin **minimum** (ve dolayısıyla şirket değerinin **maksimum**) olduğu **borç-özsermaye bileşimidir**.

- **Sermaye yapısı teorisi**, finans yöneticisinin finansman alternatifleri arasında seçim yaparken hangi faktörleri dikkate alması gerektiğini ve optimal bileşimin ne olduğunu sorgular.
- Araştırmalar optimal bir yapı olduğunu gösterir; ancak çalışmalar henüz yöneticilere bu yapıyı **belirlemede kullanılacak bir yöntem sunmamaktadır**. Teori, sermaye yapısının değeri **nasıl etkilediğini anlamaya** yardım eder.

## 5. Faaliyet riski ve finansal risk
| | **Faaliyet riski** | **Finansal risk** |
|---|---|---|
| Tanım | İşletme faaliyetinin doğasından kaynaklanan **faaliyet kârındaki (FVÖK) değişkenlik** | Sermaye yapısındaki **borçların** neden olduğu risk |
| Kaynağı | Talep, ürün fiyatı, girdi maliyetleri belirsizliği, rekabet | **Faiz gideri**, net kârdaki değişkenliği büyütür |
| Neyin ürünü? | **Üretim maliyeti yapısının**; maliyetler içinde **sabit maliyetlerin payıyla** ilgili | **Kaynak bileşiminin**; sermaye içinde **borçların payıyla** ilgili |
| Yüksek olduğu şirketler | Maliyetlerinin önemli kısmı **sabit** olanlar | Kaynaklarının önemli kısmı **borç** olanlar |

> [!dikkat] Faaliyet riski şirketin **iş kolunun ve faaliyetinin ürünüdür**; aynı faaliyeti sürdürdüğü sürece şirketin bu riski **değiştirmesi mümkün değildir**. Finansal risk ise kaynak bileşimi değiştirilerek ayarlanabilir.

- Net kâra FVÖK'ten **faiz gideri** düşülerek ulaşılır. Sabit nitelikli faiz gideri ne kadar yüksekse **net kârdaki değişkenlik** de o kadar yüksek olur.

## 6. Geleneksel görüş
> [!ezber] **Geleneksel görüşe göre** makul düzeyde borç kullanılıp kaldıraçtan yararlanılarak şirket değerini maksimize eden **optimal bir sermaye yapısı vardır**; bu yapı **AOSM'yi minimize** eder.

**İşleyiş:**
1. **Belirli bir borç düzeyine kadar:** ucuz borcun payı artar. Finansal risk artınca özsermaye maliyeti de yükselir; ama bu artış borçtan gelen maliyet azalışını **tamamen gidermez**. **AOSM düşer, değer artar.**
2. **Bu düzeyden sonra:** borç maliyeti sabitken özsermaye maliyeti giderek artar. Özsermaye maliyetindeki artış ucuz borcun sağladığı azalışı **aşar**. **AOSM yükselir.**

Geleneksel yaklaşımın iki iddiası:
- Sermaye maliyeti ile sermaye yapısı arasında **bir ilişki vardır**.
- Sermaye maliyetini **minimum** kılan **optimal bir sermaye yapısı** vardır; bu yapı **borcun fayda ve maliyetinin dengelendiği noktadadır**.

Grafikte (Şekil 4.1) borç/özsermaye arttıkça kE yükselir, kD bir süre sabit kalır, **AOSM (k) U biçiminde** önce düşer sonra yükselir; dip noktası optimal yapıdır.
`,
  sorular: [
    {
      s: "Yanlış bir kaynak (finansman) tercihinin şirket üzerindeki etkisi hangisidir?",
      c: ["Sermaye maliyetinin düşmesi ve daha çok projenin kabul edilmesi", "Sermaye maliyetinin yükselmesi ve projelerin NBD'lerinin azalması", "Projelerin NBD'lerinin artması ve şirket değerinin yükselmesi", "Faaliyet riskinin ortadan kalkması ve kârın istikrar kazanması", "Şirket değerinin, sermaye yapısından bağımsız olarak kendiliğinden artması"],
      d: 1,
      a: "Yanlış kaynak tercihi **sermaye maliyetini yükseltir**, projelerin **NBD'lerini azaltır** ve pek çok projenin **reddedilmesine** yol açar. Doğru tercih ise tersini sağlar ve şirket değerini artırır.",
      k: "1007 resmi not s. 48"
    },
    {
      s: "Aşağıdakilerden hangisi borcun özsermayeden **daha ucuz** bir kaynak olmasının nedenlerinden biri **değildir**?",
      c: ["Borç verenlerin gelir ve varlıklar üzerinde öncelik hakkının olması", "Faiz ve anapara ödemelerinin önceden kesin olarak bilinmesi", "Faizin vergiden düşülebilir olması", "Yükümlülüğün yerine getirilmemesinin iflas gibi yasal sonuçlar doğurması", "Borç verenlerin şirketin kârından temettü payı alması"],
      d: 4,
      a: "Borç verenler **öncelik hakkı**, **kesin nakit akışları** ve **yasal güvence** nedeniyle daha az risk alır, daha az getiri ister; **faizin vergiden düşülmesi** de maliyeti azaltır. Temettü alan borç verenler değil **ortaklardır**.",
      k: "1007 resmi not s. 48"
    },
    {
      s: "**Optimal sermaye yapısı** nasıl tanımlanır?",
      c: ["Sermaye maliyetinin minimum, değerin maksimum olduğu bileşim", "Borcun hiç kullanılmadığı ve tamamen özsermayeli sermaye yapısı", "Borç ve özsermayenin tutar olarak tam eşit olduğu sermaye yapısı", "Faaliyet riskinin en düşük olduğu üretim ve maliyet yapısı", "Hisse başına kârın en düşük düzeyde gerçekleştiği yapı"],
      d: 0,
      a: "Optimal sermaye yapısı, **sermaye maliyetinin minimum** (ve dolayısıyla **şirket değerinin maksimum**) olduğu **borç-özsermaye bileşimidir**.",
      k: "1007 resmi not s. 48"
    },
    {
      s: "**Faaliyet riski** ile ilgili hangisi doğrudur?",
      c: ["Sermaye yapısındaki borçların neden olduğu risktir", "Şirket, aynı faaliyeti sürdürürken bu riski kaynak bileşimini değiştirerek kolayca azaltabilir", "Maliyetler içindeki sabit maliyetlerin payıyla ilişkilidir ve şirketin iş kolunun ürünüdür", "Faiz giderinin büyüklüğüne bağlıdır", "Kaynaklarının çoğu borç olan şirketlerde en yüksektir"],
      d: 2,
      a: "Faaliyet riski, faaliyetin doğasından kaynaklanan **FVÖK değişkenliğidir**; üretim maliyeti yapısının ürünüdür ve **sabit maliyetlerin payıyla** ilişkilidir. Aynı faaliyet sürdükçe **değiştirilemez**. Borç kaynaklı risk **finansal risktir**.",
      k: "1007 resmi not s. 48"
    },
    {
      s: "Kaynaklarının büyük kısmı **borçtan** oluşan bir şirket için hangisi söylenebilir?",
      c: ["Faaliyet riski kesinlikle yüksektir, çünkü sabit maliyetleri fazladır", "Finansal riski yüksektir; faiz net kâr değişkenliğini artırır", "Net kârı, faiz gideri nedeniyle faaliyet kârından daha az değişkendir", "Hiç finansal riski yoktur, çünkü borç verenler öncelikli haktır", "Sermaye maliyeti, borcun ucuzluğu nedeniyle her durumda sıfırdır"],
      d: 1,
      a: "Finansal risk kaynak bileşiminin ürünüdür ve **borçların payıyla** ilişkilidir. Borcu fazla olan şirketin **faiz gideri** de fazladır; sabit nitelikli faiz, FVÖK'teki değişimin **net kâra** daha büyük yansımasına neden olur.",
      k: "1007 resmi not s. 48"
    },
    {
      s: "**Geleneksel görüşe** göre sermaye yapısı ile ilgili hangisi doğrudur?",
      c: ["Sermaye maliyeti sermaye yapısından bağımsızdır", "Şirket değeri sermaye yapısı değiştirilerek değiştirilemez", "Optimal sermaye yapısı %100 borçtan oluşur", "Makul düzeyde borç kullanılarak AOSM'yi minimize eden optimal bir sermaye yapısı vardır", "Şirketler önce içsel kaynakları, sonra borcu, en son özsermayeyi kullanır"],
      d: 3,
      a: "Geleneksel görüşe göre sermaye maliyeti ile sermaye yapısı **ilişkilidir** ve makul düzeyde borçla **AOSM'yi minimize eden** optimal bir yapı vardır. Bağımsızlık iddiası **MM**'ye (vergisiz), %100 borç **vergili MM**'ye, finansman sırası **finansman hiyerarşisine** aittir.",
      k: "1007 resmi not s. 49"
    },
    {
      s: "Geleneksel görüşe göre borcun payı **belirli bir düzeyin ötesine** artırılmaya devam edilirse ne olur?",
      c: ["Özsermaye maliyetindeki artış borçtan gelen azalışı aşar, AOSM yükselir", "AOSM, ucuz borcun payı arttıkça hiç durmadan düşmeye devam eder", "Özsermaye maliyeti, finansal risk azaldığı için düşmeye başlar", "Borcun maliyeti sıfıra iner ve şirket değeri sınırsız artar", "Finansal risk azalır ve ortakların getiri talepleri düşer"],
      d: 0,
      a: "Belirli bir düzeye kadar ucuz borç AOSM'yi düşürür. Bu düzeyden sonra finansal risk nedeniyle **özsermaye maliyetindeki artış**, borçla sağlanan maliyet azalışını **aşar**; AOSM **yükselir**. AOSM eğrisi bu yüzden U biçimindedir.",
      k: "1007 resmi not s. 49"
    },
    {
      s: "Geleneksel görüşe göre optimal sermaye yapısı hangi noktadadır?",
      c: ["Borcun hiç kullanılmadığı noktada", "Borcun fayda ve maliyetinin dengelendiği noktada", "Özsermaye maliyetinin en yüksek olduğu noktada", "Borç maliyetinin özsermaye maliyetine eşit olduğu noktada", "Faaliyet kârının sıfır olduğu noktada"],
      d: 1,
      a: "Geleneksel görüşe göre optimal sermaye yapısı **borcun fayda ve maliyetinin dengelendiği** noktadadır; AOSM bu noktada minimum, şirket değeri maksimumdur.",
      k: "1007 resmi not s. 49"
    }
  ]
});
