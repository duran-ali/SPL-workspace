SPL.gun("1007", 5, {
  okuma: `
## Bugünün haritası
Bugün **başabaş analizini** öğreniyoruz: şirket kaç birim satarsa **ne kâr ne zarar** eder? Sınavda en sık çıkan hesaplardan biridir; formül tek, ama soru birçok kılıkta gelir (adet, TL, hedef kâr, fiyat değişimi).

1. Belirsizlik, senaryo ve duyarlılık analizi
2. **Sabit** ve **değişken** maliyetler
3. Başabaş miktarı formülü ve **katkı payı**
4. **TL cinsinden** başabaş
5. **Hedef kâr** için gerekli satış ve fiyat
6. Sermaye yoğun / emek yoğun şirketler
7. Çözümlü örnekler

---

## 1. Neden başabaş analizi?
Yatırım kararları satış, değişken gider ve sabit gider **tahminlerine** dayanır; bu yüzden belirsizlik riski taşır. Tahminlerdeki değişkenliği incelemenin yolları:
- **Senaryo analizi:** farklı koşullarda, değişik talep düzeylerinde analizi tekrarlamak.
- **Duyarlılık analizi:** hangi değişkenin projenin **kabul sınırını** nasıl değiştirdiğini incelemek.

Bu analizlerin sorduğu soru: "Satışlar ve maliyetler tahminden **ne kadar kötü** olabilir?" ya da "**Zarar etmeye başlayacağımız satış miktarı** nedir?" Bu miktarın aranmasına **başabaş analizi** denir.

> [!ezber] Başabaş analizi, **faaliyet giderlerini karşılayacak satış miktarını** saptar. **Faaliyet başabaş noktasında faaliyet kârı sıfırdır**; satış gelirleri toplam maliyetlere eşittir.

## 2. Sabit ve değişken maliyetler
| | **Sabit maliyetler** | **Değişken maliyetler** |
|---|---|---|
| Üretim hacmiyle ilişki | **Bağımsız**; üretim değişse de toplamı değişmez | Üretim hacminin **fonksiyonu**; toplamı üretimle artar/azalır |
| Birim başına | Üretim arttıkça birim sabit maliyet **azalır** | Birim değişken maliyet **sabit kalır** |
| Örnekler | **Amortisman** (en önemli sabit gider), kiralar, yönetici ve idari personel maaşları | **Direkt işçilik**, **direkt hammadde** (en tipik örnekler) |

- Sabitlik **belli bir zaman dilimi ve kapasite aralığı** için geçerlidir. Yeni bir genişleme yatırımı yapılınca amortisman artar ve yeni düzeyinde sabit kalır.
- Örnek: 1 birim için 40 gram hammadde gerekiyorsa 50 birim için 2.000 gram gerekir.

## 3. Başabaş miktarı
Satış geliri = F × Q; Toplam maliyet = TSM + d × Q. Başabaşta ikisi eşittir:

F × Q = TSM + d × Q → Q × (F − d) = TSM

> [!ezber] **Başabaş miktarı: Q = TSM / (F − d)**. F = birim satış fiyatı, d (DM) = birim değişken maliyet, TSM = toplam sabit maliyet. **(F − d) = katkı payı (marjı).**

- **Katkı payı**, satılan her birimin sabit giderlere **katkısıdır**. Başabaşa kadar her birim sabit gideri karşılar; başabaştan sonra her birim **faaliyet kârına** katkı yapar.
- **Örnek:** TSM = 3.000.000 TL, F = 100 TL, d = 70 TL → katkı payı **30 TL** → Q = 3.000.000 / 30 = **100.000 birim**. **100.001'inci** birim satıldığında faaliyet kârı **30 TL** olur.
- SM, F ve DM değiştikçe başabaş noktası grafikte **sağa veya sola kayar**: sabit maliyet ya da birim değişken maliyet artarsa başabaş **yükselir**; fiyat artarsa **düşer**.

## 4. TL cinsinden başabaş
> [!ezber] **Başabaş satış tutarı (TL) = TSM / (1 − d/F)**. Buradaki (1 − d/F) **katkı payı oranıdır**: her 1 TL satışın sabit giderleri karşılamaya ayrılan payı.

- Kısa yol: Başabaş tutarı = Başabaş miktarı × F.

## 5. Hedef kâr
Faaliyet kârı = Q × (F − d) − TSM. Bu eşitlik dört bilinmeyenin her biri için çözülebilir:
- **Hedef kâr için gerekli miktar:** Q = (TSM + Hedef kâr) / (F − d)
- **Hedef kâr için gerekli fiyat:** F = d + (TSM + Hedef kâr) / Q

## 6. Sermaye yoğun ve emek yoğun şirketler
- Sabit maliyetleri yüksek **sermaye yoğun** şirketlerin başabaş noktası **yüksektir**: başabaşa ulaşmak için emek yoğun şirketlere göre **daha çok** satmaları gerekir.
- Ancak başabaştan sonra **katkı marjları daha yüksek** olduğundan her birimde daha fazla faaliyet kârı elde eder, **rekabette üstünlük** sağlarlar.

## 7. Çözümlü örnekler
**Tiyatro:** 1.000 koltuklu salon, yıllık sabit maliyet 1.520.000 TL, bilet 10 TL, kişi başı değişken maliyet 5 TL.
- Başabaş = 1.520.000 / (10 − 5) = **304.000 kişi**; hasılat = 304.000 × 10 = **3.040.000 TL**
- 360 gün tek gösteriyle günlük başabaş seyirci: 304.000 / 360 ≈ **844 kişi**

**Oto Boya A.Ş.:** fiyat 1.000 TL, birim değişken maliyet 600 TL, sabit maliyet 1.500.000 TL, vergi öncesi kâr 500.000 TL.
- Boyanan araba: 500.000 = Q(1.000 − 600) − 1.500.000 → **Q = 5.000**
- Başabaş: 1.500.000 / 400 = **3.750 araba**; 3.750.000 TL
- Değişken maliyet 1/3 artarsa (800 TL): başabaş = 1.500.000 / 200 = **7.500 araba**
- Aynı kârı aynı adetle korumak için fiyat: 500.000 = 5.000(F − 800) − 1.500.000 → **F = 1.200 TL**
- Fiyat değişmezse gerekli adet: 500.000 = Q(1.000 − 800) − 1.500.000 → **Q = 10.000**

**Z Şirketi:** F = 75, d = 50, TSM = 2.500.000 → Q = 2.500.000 / 25 = **100.000 birim**; TL = 2.500.000 / (1 − 50/75) = **7.500.000 TL**.

> [!bilgi] **Çok ürünlü şirkette** TL cinsinden başabaş, ürünlerin değişken gider oranlarının **satış paylarıyla tartılı ortalaması** kullanılarak bulunur: Başabaş = TSM / (1 − tartılı ortalama değişken gider oranı). Notlardaki örnekte üretimi artırıldığında başabaşa **daha erken** ulaşılan ürün (B) tercih edilmiştir.
`,
  sorular: [
    {
      s: "Faaliyet başabaş noktası ile ilgili hangisi doğrudur?",
      c: ["Vergi sonrası net kârın sıfır olduğu ve kâr payı dağıtılamayan noktadır", "Faaliyet kârının sıfır, satışların toplam maliyete eşit olduğu noktadır", "Hisse başına kârın en yüksek düzeye ulaştığı üretim noktasıdır", "Değişken maliyetlerin sıfır olduğu ve yalnız sabit maliyetin kaldığı noktadır", "Faiz giderlerinin faaliyet kârıyla tam olarak karşılandığı noktadır"],
      d: 1,
      a: "Başabaş analizi faaliyet giderlerini karşılayacak satış miktarını saptar. **Faaliyet başabaş noktasında faaliyet kârı sıfırdır**; satış gelirleri toplam (sabit + değişken) maliyetlere eşittir.",
      k: "1007 resmi not s. 18"
    },
    {
      s: "Maliyetlerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?",
      c: ["Üretim arttıkça birim başına düşen sabit maliyet azalır", "Amortisman bir üretim şirketinin en önemli sabit gideridir", "Üretim hacmi arttıkça birim değişken maliyet de artar", "Direkt işçilik ve direkt hammadde en tipik değişken maliyetlerdir", "Giderlerin sabit nitelikli olması belli bir zaman dilimi için geçerlidir"],
      d: 2,
      a: "Üretim arttıkça **toplam** değişken maliyet yükselir, ancak **birim değişken maliyet sabit kalır**. Birim sabit maliyet ise üretim arttıkça azalır. Diğer ifadeler doğrudur.",
      k: "1007 resmi not s. 18"
    },
    {
      s: "Sabit maliyetleri 1.800.000 TL olan bir şirketin ürününün birim satış fiyatı 50 TL, birim değişken maliyeti 35 TL'dir. Şirketin **başabaş satış miktarı** kaç birimdir?",
      c: ["120.000", "51.429", "180.000", "36.000", "90.000"],
      d: 0,
      a: "Katkı payı = 50 − 35 = **15 TL**. Başabaş miktarı = TSM / (F − d) = 1.800.000 / 15 = **120.000 birim**.",
      k: "1007 resmi not s. 19"
    },
    {
      s: "Başabaş formülünün paydasında yer alan **(F − d)** farkı neyi ifade eder?",
      c: ["Birim başına düşen sabit maliyeti", "Faaliyet kaldıraç derecesini ve faaliyet riskini", "Birim başına vergi sonrası net kârı", "Toplam değişken maliyetin satışlara oranını", "Katkı payını (birimin sabit gidere katkısı)"],
      d: 4,
      a: "Satış fiyatı ile birim değişken gider arasındaki fark **katkı payı (marjı)** olarak tanımlanır. Başabaşa kadar her birim sabit giderleri karşılamaya, başabaştan sonra **faaliyet kârına** katkı yapar.",
      k: "1007 resmi not s. 19"
    },
    {
      s: "Sabit maliyetleri 2.400.000 TL olan bir şirketin birim değişken maliyetinin birim satış fiyatına oranı **%60**'tır. Şirketin **TL cinsinden** başabaş satış tutarı ne kadardır?",
      c: ["6.000.000 TL", "4.000.000 TL", "1.440.000 TL", "3.840.000 TL", "2.400.000 TL"],
      d: 0,
      a: "Başabaş (TL) = TSM / (1 − d/F) = 2.400.000 / (1 − 0,60) = 2.400.000 / 0,40 = **6.000.000 TL**. (1 − d/F) her 1 TL satışın sabit giderleri karşılamaya ayrılan payıdır.",
      k: "1007 resmi not s. 20"
    },
    {
      s: "Birim satış fiyatı 1.000 TL, birim değişken maliyeti 600 TL ve sabit maliyetleri 1.500.000 TL olan bir şirket, **500.000 TL** faaliyet kârı elde etmek için kaç birim satmalıdır?",
      c: ["3.750", "4.000", "5.000", "6.250", "2.500"],
      d: 2,
      a: "Kâr = Q × (F − d) − TSM → 500.000 = Q × 400 − 1.500.000 → Q = 2.000.000 / 400 = **5.000 birim**. Başabaş miktarı ise 1.500.000 / 400 = 3.750 birimdir.",
      k: "1007 resmi not s. 26"
    },
    {
      s: "Bir şirketin sabit maliyetleri ve satış fiyatı değişmeden **birim değişken maliyeti artarsa** başabaş noktası nasıl etkilenir?",
      c: ["Katkı payı küçüldüğü için başabaş miktarı yükselir", "Katkı payı büyüdüğü için başabaş miktarı düşer", "Başabaş miktarı değişmez", "Başabaş miktarı sıfıra iner", "Yalnızca TL cinsinden başabaş değişir, miktar değişmez"],
      d: 0,
      a: "Q = TSM / (F − d) olduğundan d artınca **katkı payı küçülür** ve **başabaş miktarı yükselir**. Örnekte değişken maliyet 600'den 800 TL'ye çıkınca başabaş **3.750'den 7.500** arabaya yükselmiştir.",
      k: "1007 resmi not s. 19, 27"
    },
    {
      s: "Sermaye yoğun şirketlerin emek yoğun şirketlere göre başabaş özellikleri ile ilgili hangisi doğrudur?",
      c: ["Sabit maliyetleri düşük olduğu için başabaş noktaları daha düşüktür ve daha az riske sahiptirler", "Başabaşa daha az satışla ulaşırlar ama başabaştan sonra birim başına daha az kâr ederler", "Başabaşları yüksektir; sonrasında yüksek katkı marjıyla birim başına daha çok kâr ederler", "Değişken maliyetleri yüksek olduğu için katkı payları negatiftir ve başabaşa hiç ulaşamazlar", "Başabaş analizi, sabit maliyetleri yüksek olduğu için bu şirketlere uygulanamaz"],
      d: 2,
      a: "Sabit maliyetleri yüksek **sermaye yoğun** şirketlerin başabaş noktası **yüksektir**; başabaşa ulaşmak için daha çok satmaları gerekir. Ancak başabaştan sonra **katkı marjları daha yüksek** olduğundan her birimde daha fazla faaliyet kârı elde eder ve rekabette üstünlük sağlarlar.",
      k: "1007 resmi not s. 19"
    }
  ]
});
