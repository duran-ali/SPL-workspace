SPL.gun("1004", 24, {
  okuma: `
## Bugünün haritası
Varantın kavramsal tarafını bitiriyoruz ve **sertifikalara** geçiyoruz. Sonra VII-128.3 Tebliğine giriş yapacağız:

1. Varantın kalan avantajları ve **dezavantajları**
2. **Varant fiyatını etkileyen faktörler** (+/− tablosu)
3. **Yunan harfleri**: delta, teta, gama, vega, ro
4. **Sertifikalar**: iskontolu, turbo, endeks, prim ödeyen
5. **VII-128.3 Tebliği**: tarihçe, yenilikler, tanımlar

---

## 1. Varantın kalan avantajları ve dezavantajları
**Avantajlar (devam):**
- **Likidite:** Tezgâhüstü opsiyonlara göre **daha dar alım-satım makası** sunar. Sürekli fiyat veren bir **piyasa yapıcısı** likidite sağlar; bu yüzden günlük al-sat işlemlerine uygundur.
- **Teminatsız işlem:** Kaldıraç sunmasına rağmen teminat gerektirmez. Pozisyon zarar ederse **teminat tamamlama yükümlülüğü yoktur**; zarar yatırılan parayla **sınırlıdır**.

**Dezavantajlar:**
- **Klasik araçlardan farklı hareket** ederler; işlem öncesinde bilgi birikimi gerekir.
- **Vade sınırlıdır:** Vade sonunda kullanılmazsa hak biter. Beklenen hareket vade içinde gerçekleşmezse yeni varant almak gerekir.
- **Zaman değeri:** Asimetrik getirinin ve kaldıracın bedelidir. Diğer her şey sabit kalsa bile varant **her gün değer kaybeder**. Kayıp vadeye yaklaştıkça **hızlanır** ve vade sonunda zaman değeri **sıfırlanır**.
- **Aşırı kaldıraç** zararı büyütebilir.

---

## 2. Varant fiyatını etkileyen faktörler
Varant fiyatlamasında opsiyonlardaki **Black-Scholes** ve **Black-Scholes-Merton** modelleri de kullanılır. Varanta özgü modeller de vardır (Galai-Schneller, Binom vb.). Hangi model kullanılırsa kullanılsın temel fikir, varanttan elde edilecek **kâr olasılığının bugünkü değerini** bulmaktır: kâra geçme olasılığı arttıkça varantın değeri artar.

> [!ezber] **Faktörlerin etkisi:**
>
> | Faktör artarsa | Alım varantı | Satım varantı |
> |---|---|---|
> | **Dayanak varlığın fiyatı** | **+** | **−** |
> | **İşleme koyma (kullanım) fiyatı** | **−** | **+** |
> | **Vadeye kalan gün sayısı** | **+** | **+** |
> | **Volatilite** | **+** | **+** |
> | **Faiz oranı** | **+** | **−** |
> | **Temettü (kâr payı)** | **−** | **+** |

**Mantığı:**
- **Dayanak fiyatı:** Fiyat yükseldikçe alım varantının kullanılma ve kâr ihtimali artar; satım varantınınki azalır.
- **Kullanım fiyatı:** Dayanak fiyatının **tam tersi** çalışır.
- **Vade:** Kalan süre uzadıkça kullanım fiyatını aşma ihtimali ve risk artar; **her iki** varant da değerlenir.
- **Volatilite:** Oynaklık arttıkça büyük fiyat hareketi ve kâra geçme ihtimali artar; **her iki** varant da değerlenir.
- **Faiz:** Faiz, baştan ödenen primin zaman değerini artırır. Varant fiyatlamasında faiz, **dayanak fiyatıyla aynı yönde** etki yapar: alımda +, satımda −.
- **Temettü:** Kâr payı yükseldikçe alım varantı ucuzlar, satım varantı değerlenir.

> [!bilgi] Kolay hatırlama: **Vade ve volatilite her iki varant için de +**. Diğer dört faktörde alım ile satım **zıt** yönlüdür. Faiz, dayanak fiyatıyla; temettü, kullanım fiyatıyla aynı işareti taşır.

---

## 3. Yunan harfleri (duyarlılık katsayıları)
| Harf | Neye duyarlılık? |
|---|---|
| **Delta (Δ)** | Varant fiyatının **dayanak varlık fiyatına** duyarlılığı |
| **Teta (Θ)** | **Vadeye kalan süreye** duyarlılık |
| **Gama (Γ)** | Dayanak fiyatına duyarlılıktaki **hata** (deltanın değişimi) |
| **Vega (ν)** | Dayanak varlığın **volatilitesine** duyarlılık |
| **Ro (ρ)** | **Faiz oranına** duyarlılık |

---

## 4. Sertifikalar
**Tanım:** Yapılandırılmış **kaldıraçlı** finansal ürün kategorisindeki sertifikalar, dayanak varlık veya göstergenin fiyatına göre önceden belirlenmiş koşullar oluştuğunda yatırımcıya **ihraççıya karşı ileri sürülebilen** bir **alacak hakkı** verir. Vadede dayanak varlığın nihai değeri ile önceden açıklanmış kullanım fiyatı arasındaki fark üzerinden ödeme yapılır.
- Varantlara benzer, ancak **değer hesaplama yöntemi** ve **nakavt** özelliği gibi unsurlarda farklıdır.
- İhraççıyı **mali yükümlülük** altına sokar. Fonlar ihraççının **şahsi mali sorumluluğu** altındadır; bu yüzden ihraççının **kredibilitesi** önemlidir.

| Tür | Özelliği |
|---|---|
| **İskontolu (discount)** | Dayanak varlığa piyasa değerinin altında, **iskontolu** yatırım imkânı. Karşılığında getiri bir **üst limitle (cap)** sınırlanır. Vadede fiyat üst limitin **üzerindeyse** azami getiri, **altındaysa** dayanak fiyatı kadar ödeme veya dayanağın kendisi verilir. Yatırımcı sınırsız kazançtan vazgeçer |
| **Turbo (long/short)** | Dayanak fiyatı ile işleme koyma fiyatı farkı üzerinden getiri. **Bariyer** seviyesine ulaşılırsa **nakavt** olur, vadesi dolmadan **otomatik itfa** edilir, artık değer verilebilir ve işlem sırası **sürekli kapatılır**. Yükseliş bekleyen **long**, düşüş bekleyen **short** alır. Fiyatlamada zaman değeri yerine **finansman maliyeti** kullanılır; değeri büyük ölçüde **içsel değerdir** |
| **Endeks** | Bir göstergenin değeriyle **birebir** fiyatlanır; değer belirli bir **dönüşüm oranı** (ör. 1/100) ve/veya kurla çarpılarak bulunur. **Açık uçlu** vadeli olabilir |
| **Prim ödeyen (bonus)** | Dayanak fiyatı belirlenen **bariyerin altına düşmezse** vadede önceden belirlenen **primli tutarı** garanti eder. Düşerse yatırımcı dayanağın o andaki fiyatını alır. **Bariyer** dayanak fiyatının **altında**, **prim seviyesi** ise **üstünde** belirlenir |

> [!dikkat] **Nakavt** özelliği turbo sertifikalarda vardır: bariyer aşılınca sertifika **vadeden önce** sona erer. Varantlarda ise standart olarak böyle bir özellik yoktur.

---

## 5. VII-128.3 Varantlar ve Yatırım Kuruluşu Sertifikaları Tebliği
### Tarihçe
- **Seri III No 36** (2009): Ortaklık varantları. **Hiç uygulanmadı.**
- **Seri III No 37** (2009): Aracı kuruluş varantları. **Büyük rağbet gördü.**
- **VII-128.3** (**10.09.2013**): İkisini yürürlükten kaldırdı ve **yatırım kuruluşu sertifikalarını** da düzenledi.

### Tebliğin getirdiği yenilikler
- Varantlar **tek Tebliğde** birleştirildi; "aracı kuruluş varantı" adı "**yatırım kuruluşu varantı**" oldu.
- **Yatırım kuruluşu sertifikaları** kapsama alındı.
- Yatırım kuruluşu varant ve sertifikalarının **halka arz edilmeden nitelikli yatırımcılara** satışına imkân tanındı.
- **Devlet iç borçlanma senetleri** dayanak varlık olabildi.
- Banka veya aracı kurumun **grubundaki** başka bir kuruluş da ihraç yapabildi.
- **Amerikan tipi** ortaklık varantlarına imkân sağlandı.
- Ortaklık varantlarında **kaydi teslimat**, **pay ile uzlaşı** ve **nakdi uzlaşı** yöntemleri getirildi.
- İzahnamede bilgi verilmek kaydıyla bedelli ortaklık varantlarının toplam nominal değerinin **%25'i halka arz edilmeksizin** satılabildi.

İzahname, ilan, reklam ve kamuyu aydınlatma konularında Kurulun genel düzenlemeleri uygulanır. Yatırım kuruluşu varant ve sertifikası halka arzı için **İBD, SPAN ve özet** formatı ile kılavuzu yayımlanmıştır.

### Temel tanımlar
| Kavram | Tanım |
|---|---|
| **Ortaklık varantı** | Sahibine, payları borsada işlem gören veya görecek **kayıtlı sermaye sistemindeki ihraççı paylarına** (ya da borsadaki herhangi bir ortaklığın paylarına) ilişkin uzlaşı yöntemlerinden birini talep hakkı veren ve **ilgili sermaye piyasası aracının halka arzı sırasında** ihraç edilen araç |
| **Yatırım kuruluşu varantı** | Dayanak varlık veya göstergeyi önceden belirlenen fiyattan belirli tarihte veya tarihe kadar alma veya satma hakkı veren, kaydi teslimat veya nakdi uzlaşı ile kullanılan araç |
| **İskontolu YK sertifikası** | Dayanağa **iskontolu** yatırım imkânı verip karşılığında **azami değerin üzerindeki** performanstan feragat edilen araç |
| **Turbo YK sertifikası** | Dayanağın nihai değeri ile kullanım fiyatı farkı üzerinden geri ödeme hakkı veren araç |
| **Dayanak varlık** | **BIST 30** payları veya bunlardan oluşan **sepet**; Kurul uygun görürse borsadaki **DİBS**, konvertibl **döviz**, **kıymetli maden**, **emtia** |
| **Dayanak gösterge** | **Borsanın pay endeksleri**; Kurul uygun görürse uluslararası kabul görmüş endeksler |

---

## Bugünün özeti
- Varantın avantajları asimetrik getiri, kaldıraç, düşük komisyon, likidite ve teminatsız işlemdir. Dezavantajları farklı hareket, sınırlı vade, zaman değeri kaybı ve aşırı kaldıraçtır.
- Vade ve volatilite her iki varant için de artı etki yapar. Dayanak fiyatı ve faiz alımda artı, satımda eksi; kullanım fiyatı ve temettü alımda eksi, satımda artı etki yapar.
- Delta dayanak fiyatına, teta süreye, gama deltanın değişimine, vega volatiliteye, ro faize duyarlılıktır.
- Sertifikalar ihraççıya karşı alacak hakkı veren kaldıraçlı ürünlerdir. İskontolu sertifikada üst limit vardır; turbo sertifika bariyerde nakavt olur; endeks sertifika birebir fiyatlanır; prim ödeyen sertifika bariyer korunursa primli tutar öder.
- VII-128.3 2013'te yürürlüğe girdi. Seri III No 36 (ortaklık varantı, uygulanmadı) ve No 37'nin (aracı kuruluş varantı) yerini aldı ve sertifikaları ekledi.
- Dayanak varlık BIST 30 payları veya sepetidir; Kurul onayıyla DİBS, döviz, maden ve emtia da olabilir. Dayanak gösterge Borsa endeksleridir.
`,
  sorular: [
    {
      s: "Varantların **dezavantajlarından** biri olan **zaman değeri** kaybıyla ilgili hangisi doğrudur?",
      c: ["Zaman değeri vade başında en hızlı, vadeye yaklaştıkça ise en yavaş şekilde azalır", "Diğer değişkenler sabitken varant her gün değer kaybeder; kayıp vadeye yaklaştıkça hızlanır", "Zaman değeri kaybı yalnızca satım varantlarında görülür; alım varantlarını etkilemez", "Zaman değeri vade sonunda en yüksek seviyesine ulaşır ve varant en değerli hâline gelir", "Zaman değeri kaybı yalnızca dayanak varlığın fiyatı düştüğü günlerde ortaya çıkar"],
      d: 1,
      a: "Zaman değeri, asimetrik getirinin ve kaldıracın bedelidir. Diğer değişkenler sabit olsa bile varant **her gün değer kaybeder**; kayıp vadeye kalan gün azaldıkça **artarak büyür** ve vade sonunda zaman değeri **sıfırlanır**.",
      k: "1004 resmi not s. 123"
    },
    {
      s: "Diğer tüm değişkenler sabitken **dayanak varlığın volatilitesi artarsa** alım ve satım varantlarının fiyatları nasıl etkilenir?",
      c: ["Alım varantı artar, satım varantı azalır", "Alım varantı azalır, satım varantı artar", "Her ikisinin fiyatı da artar", "Her ikisinin fiyatı da azalır", "Volatilite varant fiyatını etkilemez"],
      d: 2,
      a: "Volatilite arttıkça büyük fiyat hareketi ve kâra geçme ihtimali artar; bu yüzden **hem alım hem satım** varantının fiyatı **artar**. Vadeye kalan gün sayısı da her ikisini artı yönde etkiler.",
      k: "1004 resmi not s. 124-125"
    },
    {
      s: "Diğer değişkenler sabitken **piyasa faiz oranı yükselirse** varant fiyatları nasıl etkilenir?",
      c: ["Alım varantının fiyatı artar, satım varantının fiyatı azalır", "Alım varantının fiyatı azalır, satım varantının fiyatı artar", "Her iki varant türünün de fiyatı aynı oranda artar", "Her iki varant türünün de fiyatı aynı oranda azalır", "Faiz yalnızca Avrupa tipi varantların fiyatını değiştirir"],
      d: 0,
      a: "Faiz oranı ile **alım varantı arasında pozitif**, **satım varantı arasında negatif** ilişki vardır. Varant fiyatlamasında faiz, dayanak varlık fiyatıyla aynı yönde etki yapar.",
      k: "1004 resmi not s. 124"
    },
    {
      s: "Dayanak payın şirketi **kâr payı (temettü)** dağıtımını artırırsa varant fiyatları nasıl etkilenir?",
      c: ["Alım varantının fiyatı artar, satım varantının fiyatı azalır", "Alım varantının fiyatı azalır, satım varantının fiyatı artar", "Her iki varant türünün de fiyatı aynı yönde artar", "Her iki varant türünün de fiyatı aynı yönde azalır", "Kâr payının varant fiyatları üzerinde hiçbir etkisi yoktur"],
      d: 1,
      a: "Kâr payı ile **alım varantı** arasında **negatif**, **satım varantı** arasında **pozitif** ilişki vardır. Temettü yükseldikçe alım varantı ucuzlar, satım varantı değerlenir.",
      k: "1004 resmi not s. 125"
    },
    {
      s: "Varant fiyatının **dayanak varlığın volatilitesine** olan duyarlılığını ölçen katsayı hangisidir?",
      c: ["Delta", "Teta", "Gama", "Vega", "Ro"],
      d: 3,
      a: "**Vega (ν)** volatiliteye duyarlılığı ölçer. Delta dayanak fiyatına, teta vadeye kalan süreye, gama deltanın değişimine, ro ise faiz oranına duyarlılıktır.",
      k: "1004 resmi not s. 125"
    },
    {
      s: "Dayanak varlığın fiyatı önceden belirlenen **bariyer** seviyesine ulaştığında **nakavt** olarak vadesi dolmadan sona eren sertifika türü hangisidir?",
      c: ["İskontolu sertifika", "Turbo sertifika", "Endeks sertifika", "Gayrimenkul sertifikası", "Kira sertifikası"],
      d: 1,
      a: "**Turbo sertifikalar** bariyer seviyesine ulaşılınca **nakavt** olur, otomatik itfa edilir ve borsada işlem sırası sürekli kapatılır. Fiyatlamada zaman değeri yerine finansman maliyeti kullanılır.",
      k: "1004 resmi not s. 126"
    },
    {
      s: "**İskontolu sertifikalar** ile ilgili hangisi doğrudur?",
      c: ["Yatırımcıya sınırsız kazanç imkânı sağlar ve getiriye herhangi bir üst limit getirilmez", "Dayanağa iskontolu yatırım sağlar; karşılığında getiri baştan belirlenen üst limitle sınırlanır", "Dayanak fiyatı bariyer seviyesine ulaşınca nakavt olur ve vadesinden önce otomatik itfa edilir", "Dayanak göstergenin değeriyle birebir fiyatlanır ve açık uçlu vadeye sahip olarak ihraç edilir", "Dayanak fiyatı bariyerin altına düşmediği sürece vadede önceden belirlenen primli tutarı garanti eder"],
      d: 1,
      a: "İskontolu sertifika dayanağa **iskontolu** yatırım imkânı verir. Karşılığında getiri vade başında belirlenen bir **üst limitle (cap)** sınırlanır ve yatırımcı sınırsız kazançtan vazgeçer. Nakavt turbo sertifikanın, birebir fiyatlanma endeks sertifikanın, bariyerle primli tutar ise prim ödeyen sertifikanın özelliğidir.",
      k: "1004 resmi not s. 125-126"
    },
    {
      s: "VII-128.3 Tebliğine göre aşağıdakilerden hangisi yatırım kuruluşu varantlarında **dayanak varlık** olarak **doğrudan** (Kurul onayı aranmadan) sayılmıştır?",
      c: ["BIST 30 Endeksinde yer alan paylar", "Konvertibl dövizler", "Kıymetli madenler", "Emtialar", "Uluslararası kabul görmüş yabancı endeksler"],
      d: 0,
      a: "Dayanak varlık **BIST 30** payları veya bunlardan oluşan **sepettir**. DİBS, konvertibl döviz, kıymetli maden ve emtia ancak **Kurulca uygun görülürse** dayanak olabilir. Uluslararası endeksler ise Kurul uygun görürse **dayanak gösterge** olabilir.",
      k: "1004 resmi not s. 128"
    }
  ]
});
