SPL.gun("1007", 7, {
  okuma: `
## Bugünün haritası
Dün sabit giderlerin yarattığı **faaliyet kaldıracını** gördük. Bugün borcun **faiz gideri** ile yarattığı **finansal kaldıracı**, iki finansman seçeneğini eşitleyen **finansal başabaş noktasını** ve ikisini birleştiren **toplam kaldıracı** öğreneceğiz. Finansal planlama bölümü bugün bitiyor.

1. Finansal kaldıraç nedir?
2. Borçsuz ve borçlu A Şirketi örneği
3. **Finansal başabaş noktası**
4. **Kaldıraç etkisi formülü**: özsermaye kârlılığı
5. **Finansal kaldıraç derecesi** (FiKD)
6. **Finansal risk**
7. **Toplam (bileşik) kaldıraç**

---

## 1. Finansal kaldıraç
Sermaye yapısında **borcun varlığı** finansal kaldıracın temel kaynağıdır.

> [!ezber] Şirket, **yatırımlarının kârlılığından daha düşük maliyetle** borçlanabiliyorsa borç **kaldıraç etkisi** yapar: **özsermaye getirisi aktif kârlılığından daha yüksek** oranda artar. Başka bir deyişle **VÖK'teki yüzdesel artış FVÖK'teki yüzdesel artıştan yüksek** olur.

## 2. A Şirketi örneği
Vergi yok, kârın tamamı dağıtılıyor. Şirketin değeri 10.000 TL (1.000 pay × 10 TL).

**Borçsuz:** pay başına kâr = FVÖK / 1.000; özsermaye getirisi = FVÖK / 10.000.

**Borçlu:** %10 faizle **5.000 TL** borç alınıp payların yarısı geri alınıyor → 500 pay, faiz 500 TL.

| FVÖK | Borçsuz özsermaye getirisi | Faiz | VÖK | **Borçlu özsermaye getirisi** |
|---|---|---|---|---|
| 500 | %5 | 500 | 0 | **%0** |
| 1.000 | %10 | 500 | 500 | **%10** |
| 1.500 | %15 | 500 | 1.000 | **%20** |
| 2.000 | %20 | 500 | 1.500 | **%30** |

## 3. Finansal başabaş noktası
> [!ezber] **Finansal başabaş noktası:** iki finansman seçeneğinde (%100 özsermaye ve borçlu) **pay başına kârı eşitleyen FVÖK** düzeyi. Hesap: **(FVÖK − Faiz₁) / Pay sayısı₁ = (FVÖK − Faiz₂) / Pay sayısı₂**

Örnek: (FVÖK − 500) / 500 = FVÖK / 1.000 → **FVÖK = 1.000 TL**.

- **FVÖK = 1.000:** şirket iki seçenek arasında **kayıtsızdır**.
- **FVÖK < 1.000:** ortaklar borçlanmadan **zarar görür**; borç arttıkça özsermaye kârlılığı borçsuz durumdakinin altına düşer.
- **FVÖK > 1.000:** ortaklar borçlanmadan **yararlanır**; özsermaye kârlılığı aktif kârlılığının üzerine çıkar.
- Finansal başabaşta **faiz oranı aktif kârlılığına eşittir** (1.000 / 10.000 = %10 = faiz). Bu nokta, ortakların kaldıraçtan yararlanmaya **başladığı** noktadır.

## 4. Kaldıraç etkisi formülü
> [!ezber] **Özsermaye kârlılığı = Aktif kârlılığı + (Borç / Özsermaye) × (Aktif kârlılığı − Borcun faiz oranı)**. Borçsuz durumda özsermaye kârlılığı aktif kârlılığına eşittir.

Örnekte Borç/Özsermaye = 5.000 / 5.000 = **1**:

| FVÖK | Aktif kârlılığı | Hesap | Özsermaye kârlılığı | Kaldıraç |
|---|---|---|---|---|
| 500 | %5 | %5 + 1 × (%5 − %10) | **%0** | **Olumsuz**: borç arttıkça kârlılık düşer |
| 1.000 | %10 | %10 + 1 × (%10 − %10) | **%10** | **Etkisiz**: borç ne kadar artsa da değişmez |
| 1.500 | %15 | %15 + 1 × (%15 − %10) | **%20** | **Olumlu**: borç arttıkça katlanarak artar |

## 5. Finansal kaldıraç derecesi (FiKD)
> [!ezber] **FiKD = Hisse başına kârdaki % değişim / FVÖK'teki % değişim = FVÖK / (FVÖK − I)**. I = faiz gideri. Açık hâli: **Q(F − d) − SG / [Q(F − d) − SG − I]**.

- Şirket **hiç borç kullanmazsa** FiKD her FVÖK düzeyinde **1**'dir.
- Kaldıraç etkisini **faizin varlığı** yaratır: faiz sabit bir çıkış olduğundan FVÖK'teki değişim VÖK'te daha büyük değişime yol açar.

| FVÖK değişimi | VÖK değişimi | **FiKD** |
|---|---|---|
| 600 → 1.000 | 100 → 500 (%400) | %400 / %66 = **6** |
| 1.000 → 1.500 | 500 → 1.000 (%100) | %100 / %50 = **2** |
| 1.500 → 2.000 | 1.000 → 1.500 (%50) | %50 / %33 = **1,5** |

> [!dikkat] Faaliyet kârı arttıkça kaldıraç etkisi **devam eder ama azalan bir trende** girer.

## 6. Finansal risk
Sermaye yapısına borç girmesi, faiz gideri nedeniyle **pay başına kârların volatilitesini artırır**. Bu volatilite artışı **finansal risk** olarak adlandırılır; **borç oranı arttıkça** volatilite de artar.

| | Faaliyet kaldıracı | Finansal kaldıraç |
|---|---|---|
| Kaynağı | **Sabit giderler** | **Faiz giderleri (borç)** |
| Ölçtüğü risk | **Faaliyet riski** | **Finansal risk** |
| Duyarlılık | FVÖK'ün satışlara | Pay başına kârın FVÖK'e |

## 7. Toplam (bileşik) kaldıraç
> [!ezber] **TKD = FKD × FiKD = Q(F − d) / [Q(F − d) − SG − I]**. Hisse başına kârın **satışlardaki değişmelere** duyarlılığını ölçer.

- Hem faaliyet hem finansal riski yüksek şirketlerde satışlar artınca net kâr çok hızlı artar, düşünce çok hızlı düşer; bu şirketler **talep daralmalarından son derece olumsuz** etkilenir.

**Örnek 2.2:** Q = 60.000, F = 30, d = 10, TSM = 50.000, I = 100.000
- Katkı payı toplamı = 60.000 × 20 = **1.200.000**; FVÖK = **1.150.000**; VÖK = **1.050.000**
- FKD = 1.200.000 / 1.150.000 = **1,04348**
- FiKD = 1.150.000 / 1.050.000 = **1,09524**
- TKD = 1.200.000 / 1.050.000 = **1,142857** (= 1,04348 × 1,09524)
- Yorum: satışlar %1 artarsa hisse başına net kâr **%1,1428** artar.

**Gelir tablosu örneği:** FKD 1,75 ve FVÖK 4.000.000, faiz 2.000.000 → FiKD = 4.000.000 / 2.000.000 = **2** → TKD = 1,75 × 2 = **3,5**.
`,
  sorular: [
    {
      s: "Finansal kaldıracın **olumlu** çalışması, yani özsermaye kârlılığının aktif kârlılığının üzerine çıkması için hangi koşul gerekir?",
      c: ["Şirketin hiç borç kullanmaması ve tamamen özsermayeyle finanse edilmesi", "Borcun faiz oranının aktif kârlılığından yüksek olması", "Sabit giderlerin sıfır olması", "Aktif kârlılığının faiz oranından yüksek olması", "Borç/özsermaye oranının sıfıra indirilmesi ve faizin ödenmesi"],
      d: 3,
      a: "Şirket yatırımlarının kârlılığından **daha düşük maliyetle** borçlanabiliyorsa borç kaldıraç etkisi yapar. Formülde (Aktif kârlılığı − Faiz oranı) pozitifse özsermaye kârlılığı aktif kârlılığının **üzerine** çıkar.",
      k: "1007 resmi not s. 22-23"
    },
    {
      s: "Bir şirket tamamen özsermayeyle finanse edilirse **2.000 pay**, borçlu seçenekte ise **1.000 pay** ve **400.000 TL faiz** ile çalışacaktır (vergi yok). İki seçeneğin pay başına kârını eşitleyen **finansal başabaş FVÖK** düzeyi nedir?",
      c: ["400.000 TL", "200.000 TL", "600.000 TL", "1.200.000 TL", "800.000 TL"],
      d: 4,
      a: "FVÖK / 2.000 = (FVÖK − 400.000) / 1.000 → FVÖK = 2 × (FVÖK − 400.000) → FVÖK = **800.000 TL**. Bu düzeyde şirket iki seçenek arasında **kayıtsızdır**.",
      k: "1007 resmi not s. 23"
    },
    {
      s: "FVÖK, **finansal başabaş noktasının altında** gerçekleşirse ne olur?",
      c: ["Ortaklar zarar görür; borç arttıkça özsermaye kârlılığı borçsuz durumun altına düşer", "Ortaklar borçlanmadan yararlanır ve özsermaye kârlılığı aktif kârlılığını aşar", "Borç oranındaki değişim özsermaye kârlılığını hiçbir şekilde etkilemez", "Özsermaye kârlılığı borç oranından bağımsız olarak aktif kârlılığına eşit kalır", "Faaliyet kaldıraç derecesi sıfıra iner ve faaliyet riski ortadan kalkar"],
      d: 0,
      a: "Finansal başabaşın altında **aktif kârlılığı faiz oranının altındadır**; kaldıraç olumsuz çalışır, ortaklar borçlanmadan **zarar görür** ve borç arttıkça özsermaye kârlılığı düşer. Başabaşın üzerinde ise ortaklar borçtan yararlanır.",
      k: "1007 resmi not s. 23"
    },
    {
      s: "Aktif kârlılığı **%18**, borcun faiz oranı **%12**, borç/özsermaye oranı **1,5** olan bir şirketin (vergi yok) **özsermaye kârlılığı** nedir?",
      c: ["%18", "%27", "%21", "%30", "%9"],
      d: 1,
      a: "Özsermaye kârlılığı = Aktif kârlılığı + (B/Ö) × (Aktif kârlılığı − Faiz) = %18 + 1,5 × (%18 − %12) = %18 + %9 = **%27**.",
      k: "1007 resmi not s. 23"
    },
    {
      s: "**Hiç borç kullanmayan** bir şirketin finansal kaldıraç derecesi kaçtır?",
      c: ["0", "Sonsuz", "1", "Faaliyet kaldıraç derecesine eşit", "Faaliyet kârına göre değişir"],
      d: 2,
      a: "FiKD = FVÖK / (FVÖK − I) formülünde faiz (I) sıfır olduğunda oran **1**'e eşittir. Şirket hiç borç kullanmazken FiKD **her faaliyet kârı düzeyinde 1** olur.",
      k: "1007 resmi not s. 24"
    },
    {
      s: "FVÖK'ü 900.000 TL, faiz gideri 300.000 TL olan bir şirketin **finansal kaldıraç derecesi** kaçtır?",
      c: ["3,00", "0,67", "1,33", "2,00", "1,50"],
      d: 4,
      a: "**FiKD = FVÖK / (FVÖK − I)** = 900.000 / (900.000 − 300.000) = 900.000 / 600.000 = **1,5**. FVÖK %1 artarsa hisse başına kâr %1,5 artar.",
      k: "1007 resmi not s. 24"
    },
    {
      s: "Faaliyet kaldıraç derecesi **2,5**, finansal kaldıraç derecesi **1,6** olan bir şirkette satışlar **%10 azalırsa** hisse başına kâr nasıl değişir?",
      c: ["%40 azalır", "%25 azalır", "%16 azalır", "%41 azalır", "%4,1 azalır"],
      d: 0,
      a: "**TKD = FKD × FiKD** = 2,5 × 1,6 = **4**. Hisse başına kârdaki değişim = 4 × (−%10) = **%40 azalış**. Toplam kaldıraç hisse başına kârın satışlara duyarlılığını ölçer.",
      k: "1007 resmi not s. 25"
    },
    {
      s: "Finansal kaldıraç ve **finansal risk** ile ilgili hangisi doğrudur?",
      c: ["Finansal kaldıracı faiz değil, sabit üretim giderleri ve amortisman yaratır", "Borç kullanımı pay başına kârların volatilitesini azaltır ve riski düşürür", "Faaliyet kârı arttıkça finansal kaldıraç derecesi sürekli ve hızla büyür", "Borç oranı arttıkça pay başına kâr dalgalanması ve finansal risk azalır", "Faiz gideri pay başına kârların volatilitesini artırır; buna finansal risk denir"],
      d: 4,
      a: "Finansal kaldıracı **faizin varlığı** yaratır. Borç, faiz gideri nedeniyle **pay başına kârların volatilitesini artırır**; buna **finansal risk** denir ve borç oranı arttıkça artar. Faaliyet kârı arttıkça FiKD **azalan** bir trende girer.",
      k: "1007 resmi not s. 24"
    }
  ]
});
