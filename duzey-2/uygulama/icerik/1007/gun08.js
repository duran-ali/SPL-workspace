SPL.gun("1007", 8, {
  okuma: `
## Bugünün haritası
Yeni bölüm: **Sermaye Maliyeti**. Bir şirketin kullandığı her kaynağın bir bedeli vardır; bu bedellerin ağırlıklı ortalaması, yatırımların aşması gereken **minimum getiri oranıdır**. Bugün kavramları ve **borcun maliyetini**, yarın özsermaye maliyetini ve **AOSM** hesabını göreceğiz.

1. Kaynakların neden bir maliyeti vardır? **Fırsat maliyeti**
2. **Sermaye yapısı** ve **sermaye maliyeti (AOSM)**
3. Sermaye maliyetinin kullanım alanları
4. **Cari** ve **marjinal** sermaye maliyeti
5. Ağırlıklar: **pazar değeri** ve **hedef sermaye yapısı**
6. **Borcun maliyeti**: kredi, tahvil ve **vadeye kadar getiri**
7. Borcun **vergi sonrası** maliyeti

---

## 1. Kaynağın maliyeti: fırsat maliyeti
Şirketler kaynaklarını **ortaklardan özsermaye**, **kreditörlerden borç** olarak temin eder. Hangi yoldan gelirse gelsin kaynağın bir maliyeti vardır.

- Fon sağlayanlar parayı şirkete tahsis ederek gelir getiren **alternatif yatırımlardan vazgeçer**. Vazgeçilen yatırımların beklenen getirisi onlar için **fırsat maliyetidir**.
- Şirket, fon sağlayanlara **aynı risk düzeyindeki** alternatiflerden bekledikleri getiriye eşit getiri sağlamalıdır.
- Borç verenlere ödenen **faiz** ve sermaye koyanlara ödenen **kâr payı**, kullanılan kaynağın maliyetini oluşturur.

> [!ezber] **Vergi ve ihraç maliyeti ihmal edildiğinde**, kaynak sağlayanların getirisi kaynağı kullananların **maliyetidir**.

## 2. Sermaye yapısı ve AOSM
- **Sermaye yapısı:** kaynak yapısı içinde **borç ve özsermayenin göreli dağılımı**.
- **Sermaye maliyeti:** sermaye yapısını oluşturan kaynakların **ağırlıklı ortalama maliyeti** (**AOSM**).

Bölüm 1'de amacın **değer maksimizasyonu** olduğunu görmüştük. **Risk sabitken:**
- Getirisi sermaye maliyetinin **üzerinde** olan projeler şirket değerini **artırır**.
- Getirisi sermaye maliyetinin **altında** olan projeler şirket değerini **azaltır**.

> [!ezber] Sermaye maliyeti, şirketin **finansman maliyetini** ve dolayısıyla projenin sağlaması gereken **minimum getiri oranını** temsil eder.

## 3. Sermaye maliyetinin kullanım alanları
| Alan | Neden önemli? |
|---|---|
| **Sermaye bütçelemesi** | Getirisi sermaye maliyetini aşan projeler değer katar |
| **Sermaye yapısı kararları** | Finansman bileşimiyle sermaye maliyeti **minimize** edilip değer artırılabilir |
| **Finansal performansın değerlendirilmesi** | Sermaye maliyeti şirket değerini etkileyen **en önemli faktördür** |
| **Diğer finansal kararlar** | Şirket değerinin belirlenmesi, yapılacak yatırımın kârlılığının belirlenmesi vb. |

> [!dikkat] Bölüm sorularına göre sermaye maliyeti **proforma finansal tabloların hazırlanmasında kullanılmaz**; bu bir çeldiricidir.

## 4. Cari ve marjinal sermaye maliyeti
- **Cari sermaye maliyeti:** mevcut varlıkları edinmek için kullanılmış kaynakların maliyeti; **tarihi maliyettir**.
- Yeni finansmanın maliyeti, **piyasa faizlerinin değişmesi** ve **ihraç giderlerindeki farklılaşma** gibi nedenlerle tarihi maliyetten farklı olabilir.

> [!ezber] Yeni yatırımların değerlendirilmesinde kullanılacak maliyet, finansmanın **son lirasının** getireceği ilave maliyet olan **marjinal sermaye maliyetidir**. Marjinal kaynağın AOSM'si hesaplanırken **marjinal kaynakların tartıları** kullanılır.

## 5. Ağırlıklar nasıl belirlenir?
- Ağırlıklar, borç ve özsermayenin sermaye yapısındaki **göreli paylarıdır**.
- Bu paylar belirlenirken **bilançodaki defter değerleri değil, pazar değerleri** kullanılır; çünkü defter değeri genellikle pazar değerinden, tarihi maliyet de güncel maliyetten farklıdır.
- Sermaye maliyeti kaynakların **tarihi değil güncel** maliyetini temsil etmelidir.
- Ağırlıklarda **optimal sermaye yapısı** kullanılmalıdır. Optimal yapıya dayalı ağırlıklar **hedef sermaye yapısı ağırlıklarıdır**: maliyeti minimize etmek için gelecekte kaynak bileşiminin ne olması gerektiğinin **en iyi tahmini**.
- Sermaye maliyeti **cari ağırlıklar yerine hedef ağırlıklara** dayanmalıdır; çünkü bugünkü yapı gelecekteki yapıyı temsil etmeyebilir.

## 6. Borcun maliyeti
Borcun maliyeti, **alınacak borca ödenecek faiz oranıdır**; mevcut borçların maliyetinden farklı olabilir.

| Yol | Maliyet |
|---|---|
| **Yatırım kredisi** (en yaygın) | Belirgindir; blokaj gibi özel koşullar dışında kredi için talep edilen **faiz oranına eşittir** |
| **Tahvil ihracı** (özellikle gelişmiş Batı ekonomilerinde) | Tahvilin **ihraç fiyatına** bağlıdır; **vadeye kadar getiri** hesabıyla bulunur |

> [!ezber] **Vadeye kadar getiri:** P₀ = C/(1+kd) + C/(1+kd)² + … + C/(1+kd)ⁿ + Nominal/(1+kd)ⁿ eşitliğini **kd** için çözmek. P₀ = tahvilin piyasa fiyatı, C = kupon faizi, kd = vadeye kadar getiri (borç maliyeti).

**Örnek:** 4 yıl vadeli, %12 kuponlu, 100 TL nominal tahvil **104 TL**'den ihraç ediliyor: 104 = 12/(1+kd) + 12/(1+kd)² + 12/(1+kd)³ + 112/(1+kd)⁴ → **kd = %10,72**.

> [!dikkat] Tahvil **nominalin üzerinde** (primli) satılırsa borç maliyeti kupon oranının **altında**, **nominalin altında** (iskontolu) satılırsa **üstünde** olur. Nominal değerinden satılırsa maliyet kupon oranına eşittir.

**Bölüm sorularından:**
- 25 yıl, %10 kupon, 100 TL nominal, piyasa değeri 109,82 TL → kd = **%9**
- 3 yıl, %12 kupon, 100 TL nominal, piyasa değeri 104,97 TL → kd = **%10**

## 7. Vergi sonrası borç maliyeti
Faiz **vergiden düşülebilir bir gider** olduğundan borcun gerçek (**efektif**) maliyeti **vergi sonrası** maliyettir.

> [!ezber] **kd = kd(vö) × (1 − T)**. T = vergi oranı.

**Örnek:** kd(vö) = %10,72, T = %20 → kd = 0,1072 × 0,80 = **%8,6**.
`,
  sorular: [
    {
      s: "Kaynak sağlayanlar açısından bir işletmeye tahsis edilen fonların **fırsat maliyeti** neyi ifade eder?",
      c: ["İşletmenin dönem içinde ödediği vergilerin ve harçların toplamını", "Vazgeçilen alternatif yatırımların beklenen getirisini", "Bankanın kredi kullandırırken talep ettiği blokaj tutarını", "İşletmenin gelir tablosunda raporlanan muhasebe kârını", "Yeni hisse senedi ihracında katlanılan ihraç giderlerini"],
      d: 1,
      a: "Fon sağlayanlar parayı işletmeye tahsis ederek gelir getiren **alternatif yatırımlardan vazgeçer**. Vazgeçilen bu yatırımların **beklenen getirisi** onlar için **fırsat maliyetidir**; işletme onlara aynı risk düzeyindeki alternatiflerin getirisini sağlamalıdır.",
      k: "1007 resmi not s. 40"
    },
    {
      s: "Risk sabit tutulduğunda, getirisi **sermaye maliyetinin altında** kalan bir proje şirket değerini nasıl etkiler?",
      c: ["Şirket değerini artırır", "Şirket değerini etkilemez", "Şirket değerini azaltır", "Yalnızca muhasebe kârını artırır", "Yalnızca borç maliyetini düşürür"],
      d: 2,
      a: "Risk sabitken sermaye maliyetinin **üzerinde** getirisi olan projeler değeri **artırır**, **altında** getirisi olan projeler değeri **azaltır**. Bu yüzden sermaye maliyeti, yatırımlardan beklenecek **minimum getiri oranıdır**.",
      k: "1007 resmi not s. 40"
    },
    {
      s: "Aşağıdakilerden hangisi sermaye maliyetinin **kullanım alanlarından biri değildir**?",
      c: ["Sermaye bütçelemesi kararları", "Sermaye yapısı kararları", "Finansal performansın değerlendirilmesi", "Proforma finansal tabloların hazırlanması", "Şirket değerinin belirlenmesi"],
      d: 3,
      a: "Sermaye maliyeti **sermaye bütçelemesi**, **sermaye yapısı kararları**, **finansal performansın değerlendirilmesi** ve **şirket değerinin belirlenmesi** gibi kararlarda kullanılır. Bölüm sorularına göre **proforma tabloların hazırlanması** bu alanlar arasında değildir.",
      k: "1007 resmi not s. 40, 46"
    },
    {
      s: "Yeni yatırım alternatiflerinin değerlendirilmesinde hangi sermaye maliyeti dikkate alınmalıdır?",
      c: ["Mevcut varlıkların edinilmesinde kullanılan kaynakların tarihi maliyeti", "Bilançodaki defter değerlerine göre hesaplanan cari sermaye maliyeti", "Yalnızca özsermayenin maliyeti; borç maliyeti dikkate alınmaz", "Son liranın ilave maliyeti olan marjinal sermaye maliyeti", "Geçmiş beş yılın ortalama faiz oranı ve enflasyon farkı"],
      d: 3,
      a: "**Cari sermaye maliyeti tarihi maliyettir.** Yeni finansmanın maliyeti piyasa faizleri ve ihraç giderleri nedeniyle farklılaşabileceğinden, yeni yatırımlarda finansmanın **son lirasının** maliyeti olan **marjinal sermaye maliyeti** kullanılır.",
      k: "1007 resmi not s. 40-41"
    },
    {
      s: "AOSM hesaplanırken kaynakların ağırlıkları nasıl belirlenmelidir?",
      c: ["Bilançodaki defter değerleri ve şirketin bugünkü (cari) sermaye yapısı kullanılarak", "Pazar değerleri ve hedef (optimal) sermaye yapısı ağırlıkları kullanılarak", "Borç ve özsermayeye, büyüklüklerinden bağımsız olarak her zaman eşit ağırlık verilerek", "Yalnızca uzun vadeli borçların ve ödenmiş sermayenin defter değeri kullanılarak", "Ortak sayısının kreditör sayısına oranı ağırlık olarak kullanılarak"],
      d: 1,
      a: "Ağırlıklarda **defter değeri değil pazar değeri** kullanılmalıdır. Ayrıca **cari ağırlıklar yerine** optimal sermaye yapısına dayalı **hedef ağırlıklar** kullanılmalıdır; çünkü bugünkü yapı gelecekteki yapıyı temsil etmeyebilir.",
      k: "1007 resmi not s. 41"
    },
    {
      s: "**Tahvil ihracı** yoluyla sağlanan borç finansmanının maliyeti hangi yöntemle belirlenir?",
      c: ["Finansal Varlıkları Fiyatlama Modeli", "Gordon büyüme modeli", "Durasyon modeli", "Fisher parite kuramı", "Vadeye kadar getiri hesaplaması"],
      d: 4,
      a: "Kredide maliyet talep edilen faiz oranına eşittir. Tahvilde ise maliyet **ihraç fiyatına** bağlıdır ve **vadeye kadar getiri** hesaplamasıyla, yani tahvil fiyatını kupon ve anapara akımlarının bugünkü değerine eşitleyen **kd** bulunarak belirlenir.",
      k: "1007 resmi not s. 41, 47"
    },
    {
      s: "Nominal değeri 100 TL, kupon faiz oranı %12 olan bir tahvil **104 TL**'den ihraç edilmiştir. Bu borç finansmanının maliyeti ile ilgili hangisi doğrudur?",
      c: ["Maliyet %12'nin altındadır; tahvil nominalin üzerinde satılmıştır", "Maliyet tam olarak %12'dir; çünkü kupon oranı her zaman borç maliyetine eşittir", "Maliyet %12'nin üzerindedir; çünkü tahvil primli satıldığı için ek faiz doğar", "Maliyet %16'dır; çünkü 4 TL'lik ihraç primi kupon faizine eklenir", "Maliyet hesaplanamaz; çünkü tahvil nominal değerinden satılmamıştır"],
      d: 0,
      a: "Tahvil nominal değerin **üzerinde** (104 TL) satıldığı için vadeye kadar getiri kupon oranının **altında** kalır. Notlardaki 4 yıl vadeli örnekte maliyet **%10,72** bulunmuştur.",
      k: "1007 resmi not s. 41"
    },
    {
      s: "Vergi öncesi borç maliyeti **%15** ve vergi oranı **%20** olan bir şirketin **vergi sonrası** borç maliyeti nedir?",
      c: ["%15", "%12", "%18", "%3", "%10"],
      d: 1,
      a: "Faiz vergiden düşülebildiği için efektif maliyet vergi sonrası maliyettir: **kd = kd(vö) × (1 − T)** = %15 × (1 − 0,20) = **%12**.",
      k: "1007 resmi not s. 42"
    }
  ]
});
