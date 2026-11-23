SPL.gun("1007", 19, {
  okuma: `
## Bugünün haritası
Bugün paranın zaman değerini tam olarak kullanan üç yöntemi öğreniyoruz: **net bugünkü değer (NBD)**, **iç verim oranı (İVO)** ve **kârlılık endeksi (KE)**. Üçünün de kabul kuralını, İVO'nun **interpolasyonla** nasıl bulunduğunu ve NBD ile İVO arasındaki ilişkiyi göreceğiz.

1. **Net bugünkü değer** ve kabul kuralı
2. **İç verim oranı** ve interpolasyon
3. **Kârlılık endeksi**
4. NBD ile İVO arasındaki ilişki
5. Çözümlü örnek

---

## 1. Net bugünkü değer (NBD)
**NBD:** yatırımın sağlayacağı nakit girişlerinin belli bir iskonto oranı (**şirketin sermaye maliyeti**) üzerinden bugüne indirgenmiş değerleri toplamı ile **ilk yatırım tutarı** arasındaki fark.

> [!ezber] **NBD = Σ Aₜ / (1 + k)ᵗ − I**. A = dönemsel (yıllık) nakit akışları, I = ilk yatırım tutarı, k = sermaye maliyeti (yatırımdan elde edilmek istenen getiri). **Kabul kuralı: NBD > 0.** Birden fazla proje varsa projeler **NBD'lerine göre sıralanır**.

- NBD, projenin kabulü hâlinde **şirket değerinde ortaya çıkacak artışı para cinsinden** ifade eder.
- Bugünkü değer faktörü (BDF): 1 / (1 + k)ᵗ. %10 için: 0,9091; 0,8264; 0,7513; 0,6830.

## 2. İç verim oranı (İVO)
**İVO** (iç kârlılık oranı, hakiki verim): projenin gerektirdiği yatırım tutarı ile sağlayacağı nakit girişlerini **birbirine eşitleyen iskonto oranıdır**; yani **NBD'yi sıfıra eşitleyen orandır**.

> [!ezber] **Σ Aₜ / (1 + r)ᵗ − I = 0** → r = İVO. **Kabul kuralı: İVO > sermaye maliyeti** (veya elde edilmesi arzu edilen verim oranı).

- NBD tek işlemle hesaplanırken İVO **deneme-yanılma** yoluyla, birden fazla işlemle bulunur.
- Biri **pozitif**, diğeri **negatif** NBD veren iki iskonto oranı bulunur; İVO bu iki oran arasında **interpolasyonla** hesaplanır.

> [!ezber] **İnterpolasyon:** İVO ≈ Düşük oran + [Düşük orandaki NBD / (Düşük orandaki NBD − Yüksek orandaki NBD)] × (Oran farkı)

## 3. Kârlılık endeksi (KE)
**KE**, NBD yöntemine benzer: projenin sağlayacağı nakit akışlarının **bugünkü değerinin ilk yatırım tutarına bölünmesidir**.

> [!ezber] **KE = [Σ Aₜ / (1 + k)ᵗ] / I**. **Kabul kuralı: KE > 1.** (KE > 1 ⇔ NBD > 0)

## 4. NBD ile İVO ilişkisi
- İki yöntem bir projenin **kabul veya reddi** konusunda **aynı sonucu** verir:
  - NBD **pozitifse**, İVO sermaye maliyetinden **yüksektir**.
  - NBD **negatifse**, İVO sermaye maliyetinden **düşüktür**.
- NBD-iskonto oranı grafiğinde (Şekil 6.1) ilişki **doğrusal değildir**: iskonto oranı arttıkça NBD **azalır**. Eğrinin yatay ekseni kestiği nokta **İVO**'dur; o orandan düşük iskonto oranlarında NBD **pozitif**, yüksek oranlarda **negatiftir**.

> [!dikkat] Kabul-red kararında NBD ve İVO aynı sonucu verir; ama birden fazla projeyi **sıralarken** farklı sonuçlar verebilir. Bunu yarın göreceğiz.

## 5. Çözümlü örnek
İki proje, yatırım 1.000 TL, sermaye maliyeti **%10**:

| Yıl | A | A'nın BD'si (%10) | B | B'nin BD'si (%10) |
|---|---|---|---|---|
| 0 | −1.000 | −1.000 | −1.000 | −1.000 |
| 1 | 400 | 363,64 | 100 | 90,91 |
| 2 | 400 | 330,58 | 300 | 247,92 |
| 3 | 300 | 225,39 | 400 | 300,52 |
| 4 | 200 | 136,60 | 600 | 409,80 |
| **NBD** | | **56** | | **49** |

**İVO hesabı**
- %12'de: A'nın NBD'si **16,66** (hâlâ pozitif → İVO %12'nin üzerinde); B'nin NBD'si **−5,53** (İVO %12'nin altında).
- %13'te A'nın NBD'si **−2,18**. A için: İVO = %12 + 16,66 / (16,66 + 2,18) × %1 = %12 + 0,88 × %1 = **%12,88**
- %11'de B'nin NBD'si **21,29**. B için: İVO = %11 + 21,29 / (21,29 + 5,53) × %1 = **%11,79**
- Her iki projenin İVO'su sermaye maliyeti %10'dan yüksek → **ikisi de kabul edilebilir**.

**Kârlılık endeksi:** A için KE = 1.056 / 1.000 = **1,056** > 1 → kabul.
`,
  sorular: [
    {
      s: "Bir yatırım projesinin **net bugünkü değeri** nasıl tanımlanır?",
      c: ["Nakit girişlerinin iskontosuz toplamı ile ilk yatırım tutarı arasındaki fark", "İskonto edilmiş nakit girişleri toplamı ile ilk yatırım arasındaki fark", "Yıllık ortalama net kârın ortalama yatırım tutarına oranı", "İlk yatırımın nakit girişleriyle geri dönmesi için geçen süre", "Nakit girişlerinin bugünkü değerinin ilk yatırım tutarına oranı"],
      d: 1,
      a: "NBD, nakit girişlerinin **sermaye maliyeti üzerinden bugüne indirgenmiş değerleri toplamı** ile **ilk yatırım tutarı** arasındaki farktır. Bugünkü değerin ilk yatırıma **oranı** ise kârlılık endeksidir.",
      k: "1007 resmi not s. 85"
    },
    {
      s: "Sermaye maliyeti %10 olan bir şirketin 1.000 TL'lik projesi bir yıl sonra **1.210 TL**, iki yıl sonra ise hiçbir nakit sağlamamaktadır. Projenin **NBD**'si nedir?",
      c: ["210 TL", "121 TL", "100 TL", "0 TL", "110 TL"],
      d: 2,
      a: "Bir yıl sonraki 1.210 TL'nin bugünkü değeri = 1.210 / 1,10 = **1.100 TL**. NBD = 1.100 − 1.000 = **100 TL**. İskonto edilmeden bulunan 210 TL yanlıştır.",
      k: "1007 resmi not s. 85"
    },
    {
      s: "**İç verim oranı** nasıl tanımlanır?",
      c: ["Şirketin ağırlıklı ortalama sermaye maliyetidir", "Projenin muhasebe kârının ortalama yatırıma oranıdır", "Projenin geri ödeme süresinin tersine eşit olan orandır", "NBD'yi sıfıra eşitleyen iskonto oranıdır", "Devlet tahvillerinin sağladığı risksiz faiz oranıdır"],
      d: 3,
      a: "İVO, projenin yatırım tutarı ile nakit girişlerini **birbirine eşitleyen**, yani **NBD'yi sıfıra eşitleyen** iskonto oranıdır. Proje, İVO **sermaye maliyetinden büyükse** kabul edilir.",
      k: "1007 resmi not s. 85"
    },
    {
      s: "Bir projenin NBD'si %14 iskonto oranında **+30 TL**, %15 iskonto oranında **−10 TL**'dir. İnterpolasyonla projenin **iç verim oranı** yaklaşık kaçtır?",
      c: ["%14,25", "%14,75", "%14,50", "%14,33", "%15,25"],
      d: 1,
      a: "İVO = %14 + [30 / (30 − (−10))] × %1 = %14 + (30/40) × %1 = %14 + %0,75 = **%14,75**.",
      k: "1007 resmi not s. 86"
    },
    {
      s: "Nakit girişlerinin bugünkü değeri **1.150 TL** ve ilk yatırım tutarı **1.000 TL** olan bir projenin **kârlılık endeksi** ve kabul kararı nedir?",
      c: ["0,87; reddedilir", "150; kabul edilir", "1,15; reddedilir", "0,15; kabul edilir", "1,15; kabul edilir"],
      d: 4,
      a: "**KE = Nakit girişlerinin BD'si / İlk yatırım** = 1.150 / 1.000 = **1,15**. Kabul kuralı **KE > 1** olduğundan proje **kabul edilir**. NBD (150 TL) de pozitiftir.",
      k: "1007 resmi not s. 86-87"
    },
    {
      s: "Net bugünkü değer ile iç verim oranı arasındaki ilişki için hangisi doğrudur?",
      c: ["NBD pozitifse İVO sermaye maliyetinden düşüktür ve proje reddedilir", "İki yöntem kabul-red kararında her zaman birbirinden farklı sonuç verir", "NBD pozitifse İVO sermaye maliyetinden yüksektir; karar aynıdır", "İskonto oranı arttıkça projenin NBD'si de doğrusal olarak artar", "NBD ile iskonto oranı arasında doğrusal ve pozitif bir ilişki vardır"],
      d: 2,
      a: "İki yöntem kabul veya red konusunda **aynı sonucu** verir: NBD **pozitifse** İVO sermaye maliyetinden **yüksek**, **negatifse** düşüktür. İskonto oranı arttıkça NBD **azalır** ve ilişki **doğrusal değildir**.",
      k: "1007 resmi not s. 87"
    },
    {
      s: "Bir projenin iç verim oranı **%12,88**, şirketin sermaye maliyeti ise **%10**'dur. Bu proje için hangisi söylenebilir?",
      c: ["%10 iskonto oranıyla hesaplanan NBD'si pozitiftir ve proje kabul edilir", "NBD'si negatiftir ve proje reddedilir", "Kârlılık endeksi 1'in altındadır", "NBD'si tam olarak sıfırdır", "Proje hakkında karar vermek için geri ödeme süresi gerekir"],
      d: 0,
      a: "İVO (**%12,88**) sermaye maliyetinden (%10) yüksek olduğu için proje **kabul edilir**; bu durumda %10'la hesaplanan **NBD pozitiftir** (notlardaki A projesinde 56 TL) ve KE 1'in üzerindedir.",
      k: "1007 resmi not s. 85-87"
    },
    {
      s: "İç verim oranının interpolasyonla hesaplanabilmesi için neye ihtiyaç vardır?",
      c: ["Yalnızca şirketin ağırlıklı ortalama sermaye maliyetine", "Projenin basit ve iskonto edilmiş geri ödeme süresine", "Biri pozitif, biri negatif NBD veren iki orana", "Projenin amortisman sonrası muhasebe kârına", "Risksiz faiz oranı ile beta katsayısına"],
      d: 2,
      a: "İVO deneme-yanılmayla bulunur: **biri pozitif, diğeri negatif NBD veren iki iskonto oranı** belirlenir ve İVO bu iki oran arasında **interpolasyonla** hesaplanır.",
      k: "1007 resmi not s. 86"
    }
  ]
});
