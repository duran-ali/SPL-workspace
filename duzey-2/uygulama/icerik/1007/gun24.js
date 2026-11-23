SPL.gun("1007", 24, {
  okuma: `
## Bugünün haritası
Dün likidite oranlarını ve borç oranını gördük. Bugün diğer **finansal yapı oranlarını**, **faiz karşılama oranını** ve varlıkların ne kadar etkin kullanıldığını ölçen **devir hızlarını** öğreneceğiz: alacak, stok, ticari borç, **faaliyet döngüsü** ve **nakit dönüşüm süresi**.

1. Diğer finansal yapı oranları
2. **Faiz karşılama oranı**
3. **Alacak devir hızı** ve ortalama tahsil süresi
4. **Stok devir hızı** ve elde kalış süresi
5. **Ticari borç devir hızı** ve ödeme süresi
6. **Faaliyet döngüsü** ve **nakit dönüşüm süresi**
7. **Sabit varlık** ve **toplam varlık** devir hızı

---

## 1. Diğer finansal yapı oranları
| Oran | Formül | Yorum |
|---|---|---|
| **Toplam borç / Özsermaye** | Toplam borçlar / Özsermaye | Her **1 TL özsermayeye** karşılık kaç TL borç olduğunu gösterir; finansal yapının bileşimi hakkında bilgi verir. **Yüksekse iflas riski yüksektir** |
| **Özsermaye / Varlık toplamı** | Özsermaye / Toplam varlıklar | **Yüksekse iflas riski düşüktür**; artış trendi **olumludur** |
| **Kısa vadeli borç / Toplam borç** | KVB / Toplam borç | Kısa vadeli borç kısa vadede ödeme gerektirdiği için **uzun vadeliden daha risklidir**; payının artması **olumsuzdur** |
| **Toplam finansal borç / Toplam borç** | Finansal borç / Toplam borç | **Finansal borç en riskli borçtur**, çünkü **en yüksek maliyetlidir**; diğer borçlar ya düşük maliyetli ya maliyetsizdir |
| **Kısa vadeli finansal borç / Satışlar** | KV finansal borç / Satışlar | Finansal borçların giderek daha fazla satışı finanse etmesi **son derece riskli** ve olumsuzdur |

> [!dikkat] **Aynı borç/varlık oranına** sahip iki şirketten **finansal borç/toplam borç** oranı yüksek olan **daha risklidir**.

## 2. Faiz karşılama oranı
**Faizin kaç kez kazanıldığı oranı** da denir: FVÖK'ün finansman giderlerini ne derecede karşıladığını gösterir.

> [!ezber] **Faiz karşılama oranı = FVÖK / Finansman giderleri (faiz)**

- Payda **net kâr değil FVÖK'tür**: faiz **vergi öncesi** paralarla ödendiği için şirketin faiz ödeme yetisi **vergilerden etkilenmez**.
- **Sorun:** faiz **nakitle** ödenir; oysa FVÖK'e ulaşırken nakit çıkışı gerektirmeyen **amortisman** gibi giderler düşülmüştür. Bu giderler FVÖK'e **eklenirse** oran daha anlamlı olur: **(FVÖK + Amortisman ve benzeri) / Faiz**.
- Oranın zaman içinde **artması iyidir**. Faaliyet kârı **istikrarlıysa** oranın nispeten düşük olması o kadar sorun değildir.
- Faizin ödenememesi alacaklıların **yasal işlem** başlatmasına ve muhtemelen **iflasa** yol açar.

## 3. Devir hızları (faaliyet oranları)
Varlıkların ne kadar **etkin ve verimli** kullanıldığını ölçer. Etkinliğin ölçüsü, varlıkların satış yoluyla **ne sürede paraya döndüğüdür**.

**Alacak devir hızı ve ortalama tahsil süresi**

> [!ezber] **Alacak devir hızı = Kredili satışlar / Ortalama ticari alacaklar**. **Ortalama tahsil süresi (AOTS) = 365 / Alacak devir hızı** = Ortalama alacaklar × 365 / Kredili satışlar.

- Alacak devir hızının **artması olumludur**.
- Tahsil süresinin **uzaması** şunları yansıtabilir: **satış politikasında** değişiklik (30 günden 60 güne vade, riskli müşterilere satış) ya da **tahsilat politikasında** zayıflık. Para yavaş dönünce **kısa vadeli borçlanma** gerekir; bunun maliyeti kârı düşürür.
- **Mevsimsellik** dikkate alınmalıdır: bilanço tarihinde faaliyet zirvedeyse tahsil süresi **yüksek**, durgunsa **çok kısa** çıkabilir.

## 4. Stok devir hızı ve elde kalış süresi
> [!ezber] **Stok devir hızı = SMM / Ortalama stok**; Ortalama stok = (Dönem başı + Dönem sonu stok) / 2. **Stok elde kalış süresi = 365 / Stok devir hızı**. Örnek: devir hızı **4** ise stoklar şirkette yaklaşık **90 gün** kalır.

- Oran **yüksek** veya yükselmekteyse stoklar daha çabuk nakde döner; **daha az finansman** ihtiyacı olur.
- Stokların **kalitesi** (hammadde, yarı mamul, mamul dağılımı; modadan etkilenme) de dikkate alınmalıdır.

## 5. Ticari borç devir hızı ve ödeme süresi
> [!ezber] **Ticari borç devir hızı = SMM (veya kredili alımlar) / Ortalama ticari borçlar**. **Ticari borç geri ödeme süresi = 365 / Ticari borç devir hızı**.

- Kredili alımlar saptanamıyorsa veya açıklanmıyorsa **SMM** kullanmak zorunlu olur.
- Varlık devir hızlarının tersine, **borç devir hızının yavaşlaması olumlu** kabul edilir: **maliyetsiz veya düşük maliyetli** bir kaynağı daha uzun kullanmak demektir; faaliyet döngüsünü de kısaltır.
- Ancak sürenin **çok uzaması** ödeme güçlüğünün, vadesi gelen borçların yenilenmemesinin göstergesi de olabilir; analist **nedenini** araştırmalıdır.

## 6. Faaliyet döngüsü ve nakit dönüşüm süresi
> [!ezber] **Faaliyet döngüsü = Alacakların ortalama tahsil süresi + Stok elde tutma süresi**. **Nakit dönüşüm süresi = AOTS + Stok bekleme süresi − Ticari borç ödeme süresi**.

- Faaliyet döngüsü, hammaddenin alımından mamule dönüşüp **tahsil edilerek paraya çevrilmesine** kadar geçen süredir: üretim, satış, dağıtım ve tahsilat sürelerinin bileşimi.
- Hammadde **kredili** alınıyorsa borç ödeme süresi de dikkate alınıp **nakit döngüsü net** olarak hesaplanır.
- Nakit dönüşüm süresinin **uzaması olumsuzdur**: nakit ihtiyacını ve maliyetli kısa vadeli finansmanı artırır, kârlılığı düşürür.

## 7. Sabit ve toplam varlık devir hızı
| Oran | Formül | Yorum |
|---|---|---|
| **Sabit varlık devir hızı** | **Net satışlar / Net sabit varlıklar** | Her 1 TL sabit varlığa karşılık kaç TL satış yaratıldığı. **Çok düşükse** yatırımı karşılayacak satış yok (**atıl kapasite**); **çok yüksekse** yatırımlar yetersiz olabilir |
| **Toplam varlık devir hızı** | **Net satışlar / Toplam varlıklar** | Artması **olumludur**: aynı varlıkla daha çok satış ya da aynı satış için daha az varlık |

> [!dikkat] Varlık devir hızının yavaşlamasına **daha yüksek kâr marjı** eşlik etmezse verimlilik ve **varlık kârlılığı düşer**.

**Çözümlü örnek:** SMM 36.000 TL, stoklar 40 günde devrediyor, dönem sonu stok 2.000 TL (1 yıl = 360 gün).
- Stok devir hızı = 360 / 40 = **9** → Ortalama stok = 36.000 / 9 = **4.000** → (DB + 2.000) / 2 = 4.000 → **DB stok = 6.000 TL**
`,
  sorular: [
    {
      s: "Her **1 TL özsermayeye** karşılık şirketin kaç TL borcu olduğunu gösteren oran hangisidir?",
      c: ["Toplam borç / Aktif toplamı", "Özsermaye / Varlık toplamı", "Toplam borç / Özsermaye", "Kısa vadeli borç / Toplam borç", "Faiz karşılama oranı"],
      d: 2,
      a: "**Toplam borç / Özsermaye** oranı her 1 TL özsermayeye karşılık kaç TL toplam borç olduğunu gösterir ve finansal yapının bileşimi hakkında bilgi verir; yüksekse iflas riski yüksektir.",
      k: "1007 resmi not s. 116"
    },
    {
      s: "Borç türleri arasında **en riskli** olanın **finansal borç** olmasının nedeni nedir?",
      c: ["En kısa vadeli borç olması", "En yüksek maliyetli borç olması", "Vergiden düşülememesi", "Yalnızca yabancı para cinsinden olması", "Teminat gerektirmemesi"],
      d: 1,
      a: "Toplam borç içinde en riskli olan finansal borçtur; çünkü **en yüksek maliyetli borçtur**. Diğer borçlar finansal borca göre ya daha düşük maliyetli ya da tamamen maliyetsizdir.",
      k: "1007 resmi not s. 117"
    },
    {
      s: "FVÖK'ü 3.000.000 TL ve finansman giderleri 750.000 TL olan bir şirketin **faiz karşılama oranı** kaçtır?",
      c: ["0,25", "2,25", "3,75", "4,00", "5,00"],
      d: 3,
      a: "**Faiz karşılama oranı = FVÖK / Finansman giderleri** = 3.000.000 / 750.000 = **4**. Faiz, faaliyetlerle 4 kez kazanılmaktadır.",
      k: "1007 resmi not s. 117"
    },
    {
      s: "Faiz karşılama oranında payda olarak **net kâr yerine FVÖK** kullanılmasının nedeni nedir?",
      c: ["Faizin vergi öncesi ödenmesi; ödeme gücünün vergiden etkilenmemesi", "FVÖK'ün amortisman gibi nakit dışı giderleri de içine alması", "Net kârın her zaman FVÖK'ten daha büyük bir tutar olması", "Faizin vergiden düşülemeyen bir gider türü olması", "FVÖK'ün tahakkuk değil tamamen nakit bazlı bir kâr olması"],
      d: 0,
      a: "Faiz **vergi öncesi** paralarla ödendiği için şirketin cari faizini ödeyebilme yetisi **vergilerden etkilenmez**; bu yüzden net kâr değil **FVÖK** kullanılır. FVÖK nakit bazlı değildir; amortisman eklenirse oran daha anlamlı olur.",
      k: "1007 resmi not s. 117"
    },
    {
      s: "Alacak devir hızı **8** olan bir şirketin alacaklarının **ortalama tahsil süresi** yaklaşık kaç gündür? (1 yıl = 365 gün)",
      c: ["8 gün", "36,5 gün", "45,6 gün", "60 gün", "73 gün"],
      d: 2,
      a: "**AOTS = 365 / Alacak devir hızı** = 365 / 8 ≈ **45,6 gün**.",
      k: "1007 resmi not s. 118, 133"
    },
    {
      s: "Ticari borç devir hızının **yavaşlaması** genel olarak nasıl değerlendirilir?",
      c: ["Varlık devir hızlarında olduğu gibi her zaman olumsuz bir gelişme sayılır", "Olumlu sayılır; ucuz kaynak daha uzun kullanılır, ama aşırısı riskli olabilir", "Şirketin stoklarını daha hızlı sattığını ve nakde çevirdiğini gösterir", "Alacakların daha hızlı tahsil edildiğini ve likiditenin arttığını gösterir", "Hiçbir anlam taşımaz; çünkü borçlar faaliyet döngüsünü etkilemez"],
      d: 1,
      a: "Varlık kalemlerinin tersine, borç devir hızının yavaşlaması **olumlu** kabul edilir: **ticari borç** gibi maliyetsiz veya düşük maliyetli kaynak daha uzun kullanılır. Ancak süre **çok uzarsa** ödeme güçlüğünün göstergesi olabilir.",
      k: "1007 resmi not s. 119"
    },
    {
      s: "Alacakların ortalama tahsil süresi **50 gün**, stok elde tutma süresi **70 gün** ve ticari borç ödeme süresi **40 gün** olan bir şirketin **nakit dönüşüm süresi** kaç gündür?",
      c: ["120 gün", "160 gün", "60 gün", "80 gün", "20 gün"],
      d: 3,
      a: "**Nakit dönüşüm süresi = AOTS + Stok süresi − Borç ödeme süresi** = 50 + 70 − 40 = **80 gün**. **Faaliyet döngüsü** ise 50 + 70 = 120 gündür.",
      k: "1007 resmi not s. 119-120"
    },
    {
      s: "**Sabit varlık devir hızının** zaman içinde azalan bir eğilim göstermesi neye işaret edebilir?",
      c: ["Şirketin sabit varlık yatırımlarının ihtiyaca göre yetersiz kaldığına", "Şirketin borç ödeme gücünün arttığına ve likiditenin iyileştiğine", "Mevcut varlıklara göre daha az satış, yani atıl kapasiteye", "Stokların daha hızlı devrettiğine ve satışların hızlandığına", "Faiz giderlerinin azaldığına ve finansal riskin düştüğüne"],
      d: 2,
      a: "Sabit varlık devir hızı (Net satışlar / Net sabit varlıklar) azalıyorsa şirket mevcut sabit varlıklarına kıyasla **daha az satış** yaratmaktadır; bu bir **atıl kapasiteye** işaret edebilir. Oranın çok yüksek olması ise yatırımların yetersizliğini gösterebilir.",
      k: "1007 resmi not s. 120"
    }
  ]
});
