SPL.gun("1008", 4, {
  okuma: `
## Bugünün haritası
Önce arz ve talebin **farklı oranlı** değişimleri, sonra **esneklik** (talebin fiyat, çapraz ve gelir esnekliği; arz esnekliği) ve **üretim ve maliyetler**: toplam, ortalama ve marjinal ürün, eş ürün eğrileri, kısa ve uzun dönem maliyetleri, **başabaş** ve **kapanma** noktaları.

1. Arz ve talebin birlikte değişmesi
2. Talebin fiyat esnekliği ve türleri
3. Nokta, yay, çapraz ve gelir esnekliği
4. Arz esnekliği
5. Üretim: TP, AP, MP ve azalan verimler kanunu
6. Eş ürün eğrileri ve üretici dengesi
7. Kısa dönem maliyetler; başabaş ve kapanma noktası

---

## 1. Arz ve talep birlikte değişirse
| Arz | Talep | Denge fiyatı | Denge miktarı |
|---|---|---|---|
| Artar | **Aynı oranda** artar | Değişmez | Artar |
| Azalır | Aynı oranda azalır | Değişmez | Azalır |
| **Artar** | Aynı oranda **azalır** | **Düşer** | **Değişmez** |
| **Azalır** | Aynı oranda **artar** | **Artar** | **Değişmez** |
| Artış **talep artışından fazla** | Artar | Düşer | Artar |
| Artış **talep artışından az** | Artar | Artar | Artar |
| Azalış **talep artışından fazla** | Artar | Artar | Azalır |

## 2. Talebin fiyat esnekliği
**Esneklik:** ekonomik değişkenler arasındaki ilişkinin **hassasiyet ölçüsü**.

> [!ezber] **Talebin fiyat esnekliği** = talep edilen miktardaki **% değişim** / fiyattaki **% değişim**. **Ed = (ΔQ/Q₁) / (ΔP/P₁)**

> [!bilgi] **Örnek:** soda 10 TL iken 200, 15 TL iken 160 adet talep ediliyor. Miktar %−20, fiyat %+50 değişti: **Ed = −0,2 / 0,5 = −0,4**. Fiyat %1 artınca talep edilen miktar %0,4 azalır.

| Talep | Esneklik (mutlak değer) | Eğri |
|---|---|---|
| **Tam elastik** | **Sonsuz** | **Yatay** eksene paralel |
| Elastik (esnek) | **> 1** | Daha **yatık** |
| **Birim esnek** | **= 1** | Fiyat ve miktar aynı % değişir |
| İnelastik (esnek olmayan) | **0 ile 1 arası** | **Dike yakın** |
| **Tam inelastik** | **0** | **Dikey** eksene paralel; miktar fiyattan etkilenmez |

## 3. Esneklik türleri
- **Nokta esnekliği:** talep eğrisi üzerindeki **tek bir noktanın** esnekliği (ΔQ/Q) / (ΔP/P); sürekli fonksiyonlarda türevle bulunur.
- **Yay esnekliği:** iki nokta arasındaki yayın esnekliği; **orta nokta formülü** kullanılır: [ΔQ / ((Q₁+Q₂)/2)] / [ΔP / ((P₁+P₂)/2)].
- **Birim esnek talep eğrisi:** esnekliği **her noktada 1** olan eğri (Q = a·P⁻¹).

> [!ezber] **Çapraz esneklik** = A malının talep miktarındaki % değişim / **B malının fiyatındaki** % değişim.
> - **Negatif** → mallar **tamamlayıcı**
> - **Pozitif** → mallar **ikame**
> - **Sıfır** → mallar **bağımsız**

- **Gelir esnekliği** = talep edilen miktardaki % değişim / **gelirdeki (Y)** % değişim.

## 4. Arz esnekliği
**Arz esnekliği** = arz edilen miktardaki % değişim / fiyattaki % değişim; üreticilerin fiyata **duyarlılığı**. Türleri talepteki gibidir: tam elastik (yatay), elastik (**Es > 1**), **birim esnek (Es = 1)**, inelastik (**0 < Es < 1**), tam inelastik (dikey, **Es = 0**).

## 5. Üretim
Üretim fonksiyonu **Q = f(K, L)**. **Sabit girdi** kısa dönemde değiştirilemez, **değişken girdi** değiştirilebilir.

> [!ezber] **Kısa dönemde emek değişken, sermaye sabittir.** Uzun dönemde **her ikisi de değişkendir**.

- **Toplam ürün (TP):** değişken girdiyle elde edilen toplam çıktı.
- **Ortalama ürün (AP) = TP / L**
- **Marjinal ürün (MP):** eklenen her işçinin toplam çıktıya katkısı.

| İşçi | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| TP | 20 | 60 | 120 | 160 | 180 | 198 | 208 | 216 | **216** | 200 |
| AP | 20 | 30 | 40 | **40** | 36 | 33 | 29 | 27 | 24 | 20 |
| MP | 20 | 40 | **60** | **40** | 20 | 18 | 10 | 8 | **0** | −16 |

- 3. işçiye kadar **artan verim**, 4. işçiden itibaren **azalan verim** (**azalan verimler kanunu**: değişken faktör arttıkça verimliliği azalır).
- **MP = AP** olduğu düzeyde (4. işçi) **AP en yüksektir**; sonrasında MP, AP'nin altında kalır.
- **TP maksimumken MP = 0** (9. işçi); 10. işçide MP negatiftir.
- MP, AP'nin **üzerindeyken AP artar**, altına düşünce AP azalır.

## 6. Eş ürün eğrileri (uzun dönem)
Uzun dönem analizine **eş ürün analizi** de denir. **Eş ürün eğrisi**, aynı üretimi veren K ve L bileşimlerini gösterir.
- **Negatif eğimli**: eğim = **marjinal teknik ikame oranı, MRTS = −ΔK/ΔL**
- Üzerindeki her nokta **eşit üretim** verir; eğriler **birbirini kesmez**
- **Orijine göre dışbükeydir**: nedeni **azalan MRTS**
- Orijinden uzak eğri **daha yüksek üretim** gösterir

**Eş maliyet doğrusu:** C = P_K·K + P_L·L (P_K faiz r, P_L ücret w). Eğimi **−P_L / P_K**.

> [!ezber] **Üretici dengesi:** eş ürün eğrisinin eş maliyet doğrusuna **teğet** olduğu nokta: ΔK/ΔL = P_L / P_K = **MP_L / MP_K**.

## 7. Kısa dönem maliyetler
| Maliyet | Tanım | Ortalama |
|---|---|---|
| **Toplam sabit maliyet (TFC)** | Üretim miktarından **bağımsız** (kira, bakım) | AFC = TFC / Q |
| **Toplam değişken maliyet (TVC)** | Üretimle değişir (işçi ücretleri) | AVC = TVC / Q |
| **Toplam maliyet (TC)** | Tüm girdilerin maliyeti | ATC = TC / Q |
| **Marjinal maliyet (MC)** | Her ek ürünün toplam maliyete katkısı | MC = ΔTC / ΔQ |

- ATC ile AVC arasındaki fark **ortalama sabit maliyete** eşittir; üretim arttıkça AFC düştüğü için bu fark **daralır**.

> [!ezber] **MC eğrisi**, AVC ve ATC eğrilerini **minimum noktalarında** keser.
> - MC'nin **ATC**'yi kestiği minimum nokta → **başabaş noktası**
> - MC'nin **AVC**'yi kestiği minimum nokta → **kapanma noktası**
> - MC eğrisinin **kapanma noktasının üstündeki** kısmı → firmanın **kısa dönem arz eğrisi**

> [!dikkat] Fiyat başabaş ile kapanma noktası **arasındaysa firma üretime devam eder**: üretimi durdurursa katlanacağı zarar, toplam sabit maliyetten daha yüksek olur. Firma **kapanma noktasının üstündeki** her fiyatta üretir.

- **Uzun dönem:** tüm faktörler değişkendir, sabit maliyet yoktur. Kısa dönem ortalama maliyet eğrilerinden **uzun dönem ortalama maliyet eğrisi (zarf eğrisi)** oluşturulur.
`,
  sorular: [
    {
      s: "Arz artarken talep **aynı oranda azalırsa** piyasa dengesinde ne olur?",
      c: ["Denge fiyatı ve miktarı birlikte artar", "Denge fiyatı değişmez, denge miktarı azalır", "Denge fiyatı artar, denge miktarı değişmez", "Denge fiyatı düşer, denge miktarı değişmez", "Denge fiyatı ve miktarı birlikte düşer"],
      d: 3,
      a: "Arzın artıp talebin aynı oranda azaldığı durumda **denge fiyatı düşer**, **denge miktarı değişmez**. Arz azalıp talep aynı oranda artarsa fiyat artar, miktar yine değişmez.",
      k: "1008 resmi not s. 22"
    },
    {
      s: "Fiyatı 10 TL iken 200 adet, 15 TL iken 160 adet talep edilen bir malın talebinin fiyat esnekliği (ilk değerlere göre) kaçtır?",
      c: ["−0,4", "−2,5", "−0,8", "−1,25", "−0,2"],
      d: 0,
      a: "Miktardaki değişim (160 − 200) / 200 = **−0,2**, fiyattaki değişim (15 − 10) / 10 = **0,5**. Esneklik −0,2 / 0,5 = **−0,4**: fiyat %1 artınca talep edilen miktar %0,4 azalır.",
      k: "1008 resmi not s. 22-23"
    },
    {
      s: "Talep edilen miktarın fiyat değişimlerinden **hiç etkilenmediği** talep türü ve eğrisi hangisidir?",
      c: ["Tam elastik; yatay eksene paralel eğri", "Birim esnek; esnekliği her noktada 1 olan eğri", "Tam inelastik; dikey eksene paralel eğri", "Elastik; daha yatık bir eğri", "İnelastik; dike yakın bir eğri"],
      d: 2,
      a: "**Tam inelastik** talepte esneklik **sıfırdır** ve eğri **dikey eksene paraleldir**; miktar fiyattan etkilenmez. Tam elastik talepte ise miktar fiyata sonsuz duyarlıdır ve eğri yataydır.",
      k: "1008 resmi not s. 23"
    },
    {
      s: "İki mal arasındaki **çapraz esneklik negatif** çıkıyorsa bu mallar için ne söylenir?",
      c: ["Birbirinin ikame malıdır", "Birbirinin tamamlayıcısıdır", "Birbirinden bağımsız mallardır", "İkisi de Giffen malıdır", "İkisinin talebi de birim esnektir"],
      d: 1,
      a: "Çapraz esneklik **negatifse** mallar **tamamlayıcı**, **pozitifse ikame**, **sıfırsa bağımsızdır**. Tamamlayıcı mallarda A'nın fiyatı artınca B'nin talebi de azalır.",
      k: "1008 resmi not s. 24"
    },
    {
      s: "Notlardaki üretim tablosunda **ortalama ürünün en yüksek** olduğu düzey için hangisi doğrudur?",
      c: ["Toplam ürünün en yüksek değerine ulaştığı düzeydir", "Marjinal ürünün tam olarak sıfıra indiği düzeydir", "Marjinal ürünün negatife döndüğü düzeydir", "İlk işçinin üretime eklendiği başlangıç düzeyidir", "Marjinal ürünün ortalama ürüne eşit olduğu düzeydir"],
      d: 4,
      a: "**MP = AP** olduğu düzeyde (örnekte 4. işçi) **ortalama ürün en yüksektir**. Toplam ürünün maksimum olduğu düzeyde ise **marjinal ürün sıfırdır** (9. işçi).",
      k: "1008 resmi not s. 26"
    },
    {
      s: "Kısa dönem üretim analizinde girdiler için hangisi doğrudur?",
      c: ["Emek sabit, sermaye değişkendir", "Emek ve sermaye birlikte değişkendir", "Emek değişken, sermaye sabittir", "Emek ve sermaye birlikte sabittir", "Yalnızca teknoloji değişkendir"],
      d: 2,
      a: "**Kısa dönemde emek değişken, sermaye sabit** kabul edilir; kısa dönem analizlerinde yalnız emek faktörü kullanılır. **Uzun dönemde her iki girdi de değişkendir**.",
      k: "1008 resmi not s. 26"
    },
    {
      s: "Uzun dönem eş ürün analizinde **üretici dengesi** nerede gerçekleşir?",
      c: ["Eş ürün eğrisinin eş maliyet doğrusuna teğet olduğu nokta", "Farklı eş ürün eğrilerinin birbirini kestiği yerde", "Marjinal maliyetin sıfıra indiği üretim düzeyinde", "Toplam ürünün maksimum olduğu yerde", "Eş maliyet doğrusunun dikey ekseni kestiği noktada"],
      d: 0,
      a: "Üretici dengesi, eş ürün eğrisinin **eş maliyet doğrusuna teğet** olduğu noktadadır: ΔK/ΔL = P_L / P_K = MP_L / MP_K. Eş ürün eğrileri birbirini kesmez.",
      k: "1008 resmi not s. 28-29"
    },
    {
      s: "Fiyat, firmanın **başabaş noktası ile kapanma noktası arasında** oluşursa notlara göre firma ne yapar?",
      c: ["Hemen üretimi durdurur", "Üretime devam eder", "Yalnızca sabit maliyetlerini öder", "Uzun dönem arz eğrisine geçer", "Fiyatı başabaş noktasına yükseltir"],
      d: 1,
      a: "Bu bölgede firma **üretime devam eder**; üretimi durdurursa katlanacağı maliyet, toplam sabit maliyetten daha yüksek olur. Firma **kapanma noktasının üstündeki** her fiyatta üretir.",
      k: "1008 resmi not s. 30"
    }
  ]
});
