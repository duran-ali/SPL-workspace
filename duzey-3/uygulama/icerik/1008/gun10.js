SPL.gun("1008", 10, {
  okuma: `
## Bugünün haritası
Para politikalarının son günü: **daraltıcı** ve **genişletici** para politikası, **LM eğrisi** (denklemi, eğimi, kaymaları, sağ ve sol bölgesi) ve politikalardaki **gecikme** türleri.

1. Daraltıcı (sıkı) para politikası
2. Genişletici (gevşek) para politikası
3. LM eğrisi ve denklemi
4. LM'nin eğimi, kayması ve dengesizlik bölgeleri
5. Politikalarda gecikme sorunu

---

## 1. Daraltıcı para politikası
> [!ezber] **Daraltıcı (sıkı) para politikası:** **para arzı azaltılır**. Özellikle **enflasyon** görülen ekonomilerde; "daha fazla paranın daha az malı kovaladığı" ortamda fiyat artışlarını önlemek için. Para arzının azalması **faizleri artırır**; bireyler tüketmek yerine **tasarrufa** yönelir, **talep baskısı azalır**.

## 2. Genişletici para politikası
> [!ezber] **Genişletici (gevşek) para politikası:** **para arzı artırılır**. Özellikle **daralma ve işsizlik** görülen ekonomilerde **milli geliri artırmak** için. Para arzının artması **faizleri düşürür**; faiz getirisi azaldığı için bireyler **tüketime** yönelir. Durgunluğu giderebilir ama **enflasyonist** etki de yapabilir.

## 3. LM eğrisi
- **LM eğrisi** para piyasasının dengesini, yani **para arzı = para talebi** eşitliğini sağlayan **faiz (i) - milli gelir (Y)** bileşimlerini gösterir.
- Para arzı merkez bankasınca belirlendiği için **dik bir doğru** olarak çizilir. Gelir artınca para talebi artar, para talebi eğrisi sağa kayar ve **faiz yükselir**.

> [!ezber] LM eğrisi faiz ile milli gelir arasında **pozitif** ilişki gösterir (**pozitif eğimli**).

**LM denklemi:** reel para arzı M/P; reel para talebi L = kY − hi (k, h > 0). Eşitlenince: **i = (1/h)(kY − M/P)**.
- **k:** reel para talebinin **gelire** duyarlılığı; **h:** **faiz oranına** duyarlılığı.
- LM'nin **konumunu reel para arzı** belirler: reel para arzı **artarsa LM aşağı (sağa) kayar**.
- **k azaldıkça ve h arttıkça** LM'nin eğimi **azalır** (eğri yatıklaşır).

## 4. LM'nin eğimi, kayması ve dengesizlik
| Para talebinin faiz esnekliği | LM eğrisi |
|---|---|
| **Yüksek** | Daha **yatık** |
| **Düşük** | Daha **dik** |

| LM'nin | Durum |
|---|---|
| **Solundaki** noktalar | Faiz olması gerekenden **yüksek** → para talebi arzdan düşük → **para arz fazlası** |
| **Sağındaki** noktalar | Faiz olması gerekenden **düşük** → para talebi arzdan yüksek → **para talep fazlası** |

**LM'yi kaydıran faktörler:**
- **Genişletici** para politikası LM'yi **sağa**, **daraltıcı** para politikası **sola** kaydırır.
- **Ödeme sistemlerindeki değişiklik** (kredi kartı kullanımının artması) para talebini azaltır → LM **sağa**.
- **Servet azalması** para talebini azaltır → LM **sağa**.
- **Alternatif finansal araçların** kullanımının artması para talebini azaltır → LM **sağa**.

## 5. Politikalarda gecikme sorunu
Para ve maliye politikalarındaki gecikmeler **içsel** ve **dışsal** olarak ikiye ayrılır.

| Gecikme | Kapsadığı süre |
|---|---|
| **Tanı gecikmesi** (içsel) | Sorunun ortaya çıkması ile politika yapıcıların bunu **fark edip** politika gerektiğine kanaat getirmesi arası |
| **Karar gecikmesi** (içsel) | Politika gereksinimi ile **kararın alınması** arası (analiz ve veri toplama) |
| **Uygulama gecikmesi** (içsel) | Kararın alınması ile **uygulanması** arası |
| **Dışsal gecikme (etki gecikmesi)** | Politikanın uygulanması ile **etkilerinin** ortaya çıkması arası |
`,
  sorular: [
    {
      s: "Daraltıcı para politikası hangi ekonomik koşulda uygulanır ve faiz oranlarını nasıl etkiler?",
      c: ["Enflasyon görülen ekonomilerde; faizleri artırır", "İşsizlik görülen ekonomilerde; faizleri düşürür", "Durgunluk görülen ekonomilerde; faizleri artırır", "Deflasyon görülen ekonomilerde; faizleri düşürür", "Dış ticaret fazlası olan ekonomilerde; faizi değiştirmez"],
      d: 0,
      a: "Daraltıcı (sıkı) para politikası **enflasyon** görülen ekonomilerde para arzını azaltır; bu **faizleri artırır**, bireyler tasarrufa yönelir ve talep baskısı azalır. Genişletici politika ise işsizlik ve daralmada faizleri düşürür.",
      k: "1008 resmi not s. 73"
    },
    {
      s: "Genişletici para politikasının diğer adı ve olası yan etkisi hangisidir?",
      c: ["Sıkı para politikası; işsizliği artırması", "Gevşek para politikası; enflasyonist etki yapabilmesi", "Sıkı para politikası; tasarrufları artırması", "Gevşek para politikası; faizleri yükseltmesi", "Nötr para politikası; büyümeyi durdurması"],
      d: 1,
      a: "Genişletici politikaya **gevşek para politikası** denir; para arzını artırıp faizleri düşürerek tüketimi ve milli geliri artırır. Durgunluğu giderebilir ancak **enflasyonist etkide** de bulunabilir.",
      k: "1008 resmi not s. 73"
    },
    {
      s: "LM eğrisi faiz oranı ile milli gelir arasındaki ilişkiyi nasıl gösterir?",
      c: ["Negatif eğimli; gelir arttıkça faiz düşer", "Yatay; faiz gelirden bağımsızdır", "Dikey; gelir faizden bağımsızdır", "Pozitif eğimli; gelir arttıkça para talebi ve faiz artar", "Dışbükey; azalan marjinal ikame oranını gösterir"],
      d: 3,
      a: "Gelir arttığında para talebi artar, para talebi eğrisi sağa kayar ve faiz yükselir. Bu yüzden LM eğrisi faiz ile milli gelir arasında **pozitif** bir ilişki gösterir.",
      k: "1008 resmi not s. 73-74"
    },
    {
      s: "LM denkleminde (L = kY − hi) **k azaldıkça ve h arttıkça** LM eğrisinde ne olur?",
      c: ["Eğri sola kayar", "Eğimi artar, eğri dikleşir", "Eğimi azalır, eğri yatıklaşır", "Eğri sağa kayar ama eğimi değişmez", "Eğri negatif eğimli hâle gelir"],
      d: 2,
      a: "k para talebinin gelire, h faize duyarlılığıdır. **k azaldıkça ve h arttıkça LM'nin eğimi azalır**, yani eğri yatıklaşır. LM'nin konumunu ise reel para arzı belirler.",
      k: "1008 resmi not s. 74"
    },
    {
      s: "LM eğrisinin **solundaki** noktalarda para piyasasında hangi durum vardır?",
      c: ["Para talep fazlası", "Mal piyasasında arz fazlası", "Para piyasası dengesi", "Para arz fazlası", "Likidite tuzağı"],
      d: 3,
      a: "LM'nin solunda veri gelirde faiz olması gerekenden yüksek olduğundan para talebi arzdan düşüktür, yani **para arz fazlası** vardır. Sağındaki noktalarda ise **para talep fazlası** söz konusudur.",
      k: "1008 resmi not s. 74"
    },
    {
      s: "**Kredi kartı kullanımının artması** LM eğrisini nasıl etkiler?",
      c: ["Para talebini artırıp LM'yi sola kaydırır", "LM'yi dikleştirir ama kaydırmaz", "Para arzını azaltıp LM'yi sola kaydırır", "LM'yi etkilemez, yalnız IS eğrisini kaydırır", "Para talebini azaltıp LM'yi sağa kaydırır"],
      d: 4,
      a: "Ödeme sistemlerindeki değişiklik (kredi kartı kullanımının artması) **para talebini azaltır** ve LM eğrisi **sağa kayar**. Servetin azalması ve alternatif finansal araçların yaygınlaşması da LM'yi sağa kaydırır.",
      k: "1008 resmi not s. 74"
    },
    {
      s: "Para talebinin **faiz esnekliği yüksek** olduğunda LM eğrisi nasıldır?",
      c: ["Daha yatıktır", "Daha diktir", "Tamamen dikeydir", "Negatif eğimlidir", "Sola kaymıştır"],
      d: 0,
      a: "Para talebinin faiz esnekliği **yüksekse LM daha yatık**, **düşükse daha diktir**. Uç durumlarda esneklik sıfırsa LM dikey (Klasik durum), sonsuzsa yatay (likidite tuzağı) olur.",
      k: "1008 resmi not s. 75"
    },
    {
      s: "Ekonomide bir sorunun ortaya çıkması ile politika yapıcıların bu sorunu **fark edip** politika gerektiğine kanaat getirmesi arasında geçen süre hangi gecikmedir?",
      c: ["Karar gecikmesi", "Uygulama gecikmesi", "Tanı gecikmesi", "Etki gecikmesi", "Dışsal gecikme"],
      d: 2,
      a: "Bu **tanı gecikmesidir** (içsel gecikme). **Karar gecikmesi** gereksinim ile kararın alınması, **uygulama gecikmesi** karar ile uygulama arasıdır. **Dışsal (etki) gecikme** ise uygulama ile etkilerin ortaya çıkması arasındaki süredir.",
      k: "1008 resmi not s. 75-76"
    }
  ]
});
