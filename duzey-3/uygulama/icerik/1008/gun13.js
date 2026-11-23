SPL.gun("1008", 13, {
  okuma: `
## Bugünün haritası
Monetaristlere göre maliye politikasının uzun dönem etkisi, **maliye politikası çarpanları** (kamu harcaması, vergi, transfer, denk bütçe), açık ekonomide çarpan, **daraltıcı ve genişletici maliye politikası** ve **IS eğrisi** (denklemi, eğimi, kaymaları).

1. Monetaristlere göre genişletici maliye politikası
2. Maliye politikası çarpanı
3. Açık ekonomide çarpanlar
4. Maliye politikası çeşitleri
5. IS denklemi, eğimi ve kaymaları

---

## 1. Monetaristlere göre genişletici maliye politikası
- Kısa dönemde toplam talep (AD) sağa kayar; fiyatlar ve hasıla **artar**, hasıla potansiyelin üstüne çıkar, işsizlik **doğal oranın altına** düşer.
- Uzun dönemde birimler rasyonel ve fiyat-ücretler **tam esnek** olduğu için nominal ücretler de artar, kısa dönem arz (AS) sola kayar; ekonomi **eski hasılaya (Y*)** ama **daha yüksek fiyat düzeyinde** döner.

> [!ezber] **Monetaristlere göre maliye politikası yalnız kısa dönemde etkilidir; uzun dönemde tek etkisi fiyatların yükselmesidir.**

## 2. Maliye politikası çarpanı
**Çarpan mekanizması:** harcama değişimlerinin gelir düzeyine etkisini açıklar. Kamu harcamaları ve vergilerdeki değişimler milli geliri **aynı düzeyde etkilemez**. Çarpanı, kamu harcamalarının gelir artırıcı etkisini göstermek için **Keynesyen** iktisatçılar kullanmıştır (Klasik ve Neoklasiklerin aksine).

Y = C + I + G ve tüketim fonksiyonu C = C₀ + cY ise **Y = [1 / (1 − c)] × (C₀ + I + G)**. **c: marjinal tüketim eğilimi**.

> [!ezber] | Çarpan | Formül | c = 0,9 için |
> |---|---|---|
> | **Kamu harcamaları** | 1 / (1 − c) | **10** (100 birim harcama → gelir +1.000) |
> | **Vergi** | −c / (1 − c) | **−9** (100 birim vergi → gelir −900) |
> | **Transfer harcamaları** | c / (1 − c) | **9** (100 birim transfer → gelir +900) |
> | **Denk bütçe** | 1 / (1 − c) − c / (1 − c) | **1** |

- Kamu harcamalarındaki bir birimlik artış geliri **bir birimden fazla** artırır (çarpan etkisi).
- **Denk bütçe çarpanı 1'dir:** 100 birim kamu harcaması artışı 100 birim vergi artışıyla karşılansa bile milli gelir **100 birim artar**.

## 3. Açık ekonomide çarpanlar
Vergilerin gelire bağlı olduğu açık ekonomide: Y = C + I + G + X − M; **M = m₀ + mY** (m: **marjinal ithalat eğilimi**, 0 ile 1 arası), **T = T₀ + tY**. İhracat (X) gelirden bağımsızdır.

> [!ezber] **Harcama çarpanı = 1 / [1 − c(1 − t) + m]**; vergi çarpanı −c / [1 − c(1 − t) + m]; transfer çarpanı c / [1 − c(1 − t) + m].

- Açık ekonomide ve vergiler gelire bağlıyken çarpan, kapalı ve otonom vergili ekonomiye göre **daha düşüktür**; çünkü **ithalat ve vergiler sistemden sızıntıdır**.
- **Vergi oranı (t)** ve **marjinal ithalat eğilimi (m) arttıkça çarpan küçülür**; **marjinal tüketim eğilimi (c) arttıkça çarpan büyür**.

## 4. Maliye politikası çeşitleri
| | **Daraltıcı** | **Genişletici** |
|---|---|---|
| Uygulama | Kamu harcamalarında **azalış** veya vergi oranlarında **artış** | Kamu harcamalarında **artış** veya vergi oranlarında **azalış** |
| Ne zaman? | **Enflasyon** | **Durgunluk ve işsizlik** |
| Milli gelir ve faiz | İkisi de **düşer** | İkisi de **yükselir** |

## 5. IS eğrisi
**IS (yatırım-tasarruf) eğrisi:** **mal piyasasının** dengede olduğu faiz-gelir bileşimleri; her noktada **tasarruf = yatırım**.
- Tüketim: C = C₀ + c(Y − T₀); yatırım: **I = I₀ − bi** (b: yatırımın faize duyarlılığı).
- Toplam talep AD = C + I + G₀ + NX₀ = A₀ + cY − bi; dengede Y = AD → **i = [A₀ − Y(1 − c)] / b**.

> [!ezber] Faiz düşünce yatırımlar, yatırımlar artınca gelir artar; bu yüzden **IS faiz ile gelir arasında ters (negatif) ilişki** gösterir.

- IS'nin **konumunu otonom harcama (A₀)** belirler; A₀ artınca IS **yukarı (sağa)** kayar.
- **Marjinal tüketim eğilimi** ve **yatırımın faiz duyarlılığı arttıkça** IS'nin eğimi **azalır** (yatıklaşır).
- Yatırımların faiz esnekliği **yüksekse IS yatık**, **düşükse diktir**.
- **IS yalnız maliye politikalarından etkilenir:** genişletici maliye politikası (kamu harcaması artışı, vergi indirimi) **sağa**, daraltıcı **sola** kaydırır.
- **Komşu veya yabancı ülkenin geliri artarsa** yerli ülkenin ihracatı ve net ihracatı (NX₀) artar, A₀ yükselir → IS **yukarı kayar**.

| IS'nin | Durum |
|---|---|
| **Solundaki** noktalar | Faiz dengeden düşük → yatırım > tasarruf → **mal talep fazlası** |
| **Sağındaki** noktalar | Faiz dengeden yüksek → yatırım < tasarruf → **mal arz fazlası** |
`,
  sorular: [
    {
      s: "Monetaristlere göre genişletici bir maliye politikasının **uzun dönemdeki tek etkisi** nedir?",
      c: ["Fiyatlar genel düzeyinin yükselmesi", "Hasılanın kalıcı olarak potansiyelin üzerine çıkması", "İşsizliğin kalıcı olarak doğal oranın altına inmesi", "Faizlerin sürekli düşmesi", "Bütçe açığının kendiliğinden kapanması"],
      d: 0,
      a: "Kısa dönemde hasıla artar; ancak uzun dönemde nominal ücretlerin artmasıyla arz eğrisi sola kayar ve ekonomi eski hasılaya (Y*) döner. Monetaristlere göre maliye politikasının uzun dönemde **tek etkisi fiyatların yükselmesidir**.",
      k: "1008 resmi not s. 93"
    },
    {
      s: "Marjinal tüketim eğilimi **0,9** olan kapalı bir ekonomide (vergiler otonom) **kamu harcamaları çarpanı** kaçtır?",
      c: ["0,9", "9", "1", "−9", "10"],
      d: 4,
      a: "Kamu harcamaları çarpanı 1 / (1 − c) = 1 / (1 − 0,9) = **10**'dur; 100 birimlik harcama artışı milli geliri 1.000 birim artırır. Aynı ekonomide vergi çarpanı −9, transfer çarpanı 9'dur.",
      k: "1008 resmi not s. 94"
    },
    {
      s: "Marjinal tüketim eğilimi 0,9 iken **100 birimlik vergi artışı** milli geliri nasıl etkiler?",
      c: ["1.000 birim azaltır", "900 birim azaltır", "100 birim azaltır", "900 birim artırır", "Etkilemez"],
      d: 1,
      a: "Vergi çarpanı −c / (1 − c) = −0,9 / 0,1 = **−9**'dur; 100 birimlik vergi artışı geliri **900 birim azaltır**.",
      k: "1008 resmi not s. 94"
    },
    {
      s: "Kamu harcamalarındaki 100 birimlik artışın aynı tutarda vergi artışıyla karşılandığı **denk bütçe** durumunda milli gelir nasıl değişir?",
      c: ["Değişmez, çünkü etkiler birbirini götürür", "900 birim azalır", "100 birim artar", "1.000 birim artar", "Yalnızca faizler değişir"],
      d: 2,
      a: "**Denk bütçe çarpanı 1'dir**: 1 / (1 − c) − c / (1 − c) = 1. Bütçe denk kalsa da 100 birimlik harcama artışı milli geliri **100 birim artırır**.",
      k: "1008 resmi not s. 94"
    },
    {
      s: "Açık ve vergilerin gelire bağlı olduğu bir ekonomide **harcama çarpanını küçülten** gelişme hangisidir?",
      c: ["Marjinal tüketim eğiliminin artması", "İhracatın artması", "Otonom tüketimin artması", "Marjinal ithalat eğiliminin artması", "Kamu harcamalarının artması"],
      d: 3,
      a: "İthalat ve vergiler sistemden **sızıntıdır**; **vergi oranı ve marjinal ithalat eğilimi arttıkça** harcama çarpanı 1 / [1 − c(1 − t) + m] **küçülür**. Marjinal tüketim eğilimi arttıkça ise çarpan büyür.",
      k: "1008 resmi not s. 95"
    },
    {
      s: "Genişletici maliye politikası milli gelir ve faiz oranlarını nasıl etkiler?",
      c: ["Milli gelir artar, faiz düşer", "İkisi de yükselir", "Milli gelir düşer, faiz artar", "İkisi de düşer", "Milli gelir değişmez, faiz artar"],
      d: 1,
      a: "Genişletici maliye politikasında (kamu harcaması artışı veya vergi indirimi) **milli gelir ve faiz oranları birlikte yükselir**. Daraltıcı maliye politikasında ikisi de düşer.",
      k: "1008 resmi not s. 95"
    },
    {
      s: "IS eğrisi için hangisi **doğrudur**?",
      c: ["Para piyasası dengesini gösterir ve pozitif eğimlidir", "Yalnızca para politikasından etkilenir", "Mal piyasası dengesini gösterir, negatif eğimlidir", "Konumunu reel para arzı belirler", "Solundaki noktalarda mal arz fazlası vardır"],
      d: 2,
      a: "IS eğrisi **mal piyasasının** dengesini gösterir; faiz düşünce yatırım ve gelir arttığı için faizle gelir arasında **ters** ilişki vardır. IS yalnız maliye politikasından etkilenir; konumunu otonom harcama belirler; solundaki noktalarda **mal talep fazlası** vardır.",
      k: "1008 resmi not s. 96-97"
    },
    {
      s: "**Komşu ve yabancı bir ülkenin gelirindeki artış** yerli ülkenin IS eğrisini nasıl etkiler?",
      c: ["Yerli ithalat arttığı için IS aşağı kayar", "IS'yi etkilemez, yalnız LM'yi kaydırır", "IS'nin eğimini dikleştirir, konumunu değiştirmez", "Faizleri düşürüp IS eğrisini sola kaydırır", "Net ihracat arttığı için IS yukarı kayar"],
      d: 4,
      a: "Yabancı ülkenin geliri artınca yerli ülkenin **ihracatı** ve **net ihracatı (NX₀)** artar; toplam talep ve otonom harcama (A₀) yükseldiği için IS eğrisi **yukarı (sağa) kayar**.",
      k: "1008 resmi not s. 97"
    }
  ]
});
