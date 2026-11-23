SPL.gun("1007", 20, {
  okuma: `
## Bugünün haritası
Yatırım projeleri bölümünün son günü. NBD ve İVO tek bir projeyi kabul ya da reddetmede anlaşır; ama **projeleri sıralarken** çelişebilirler. Bugün bu çelişkinin iki nedenini, İVO'nun **çoklu oran** sorununu, ömürleri farklı projeler için **yıllık eşdeğer NBD**'yi ve **risk altında** yatırım kararlarını göreceğiz.

1. Projeleri neden sıralarız?
2. NBD ve İVO sıralamada neden **farklı sonuç** verir?
3. **Çoklu iç verim oranı**
4. **Yıllık eşdeğer net bugünkü değer (YENBD)**
5. **Risk altında** yatırım kararları
6. Kapsamlı örnek: makine yenileme

---

## 1. Projeleri sıralama ihtiyacı
| Neden | Açıklama |
|---|---|
| **Birbirini engelleyen (çelişen) yatırımlar** | Projeler **aynı fonksiyonu** görür; birinin kabulü diğerinin reddini gerektirir. Ör. farklı teknolojideki tezgâh modellerinden yalnız biri seçilir |
| **Fon kısıtlaması** | Projeler birbirini engellemese ve hepsinin NBD'si pozitif olsa da şirketin **tümünü finanse edecek kaynağı** olmayabilir; projeler fon için **rakip** olur |

## 2. NBD ve İVO neden çelişir?
- **NBD** projeleri **para birimi** cinsinden sıralar; projenin şirket değerine katacağı **parasal artışı** gösterir.
- **İVO** bir **oran** verir; proje ile sınırlıdır ve şirket değerine katkıyı parasal olarak göstermekten uzaktır.

**a) Yeniden yatırım oranı varsayımı**

> [!ezber] **NBD** yöntemi, projeden sağlanan nakit akışlarının kalan yıllarda **sermaye maliyeti** üzerinden; **İVO** yöntemi ise **iç verim oranı** üzerinden yeniden yatırılacağını varsayar.

| Proje | 0 | 1 | 2 | 3 | 4 | NBD (%10) | İVO |
|---|---|---|---|---|---|---|---|
| X | −2.500 | 1.000 | 1.000 | 1.000 | 1.000 | **670** | **%22** |
| Y | −2.500 | 0 | 500 | 1.000 | 3.300 | **918** | **%20** |

İkisi de kabul edilebilir; yalnız biri seçilecekse **NBD'ye göre Y**, **İVO'ya göre X** seçilir. Nakit akışlarının **zamanlaması** farklı olduğundan varsayım farkı sonucu değiştirir.

**b) Yatırımların büyüklüğü**

| Proje | 0 | 1 | NBD (%10) | İVO |
|---|---|---|---|---|
| E | −100 | 150 | **36,4** | **%50** |
| F | −400 | 500 | **54,6** | **%25** |

**NBD'ye göre F**, **İVO'ya göre E** seçilir: biri parasal sonuç, diğeri oran verdiği için **ölçek farkını** farklı ele alırlar.

## 3. Çoklu iç verim oranı
Bazı projelerde nakit akışları yıllar içinde **pozitiften negatife** döner (bazı yıllarda çıkış girişten fazladır). Bu durumda proje **birden fazla İVO**'ya sahip olabilir.

**Örnek (petrol pompası):** mevcut pompa 2 yılda 100 + 100 TL petrol sağlıyor. 10 TL'lik ek yatırımla yeni pompa ilk yıl 145, ikinci yıl 55 sağlıyor. Ek yatırımın nakit akışı: **−10, +45, −45**.
- %20'de NBD = **−3,75**; %50'de **0**; %200'de **0**; %300'de **−1,56**
- NBD %50'nin altında negatif, %50-%200 arasında pozitif, %200'ün üzerinde yine negatif → **iki İVO: %50 ve %200**.

> [!dikkat] Projenin **tek bir NBD**'si varken birden fazla İVO'su olabilmesi, **İVO yönteminin eksik ve sakıncalı yönlerinden biridir**.

## 4. Yıllık eşdeğer NBD (YENBD)
**Ömürleri farklı** projelerin NBD'leri farklı uzunluktaki nakit akışlarından hesaplandığı için doğrudan **karşılaştırılamaz**. İki çözüm:
- Projeleri **ortak ömre** kadar tekrarlamak (ör. 3 ve 5 yıllık projeleri 15 yılda eşitlemek); ama çok projede **uzun ve zahmetlidir**.
- NBD'yi **yıllık eşdeğere** çevirmek: NBD, ömre karşılık gelen **anüite faktörüne** bölünür.

> [!ezber] **YENBD = NBD / Anüite faktörü (n yıl, k)**. **1 / anüite faktörü** ifadesi finans literatüründe **"sermaye kurtarma faktörü"** olarak bilinir. **YENBD'si yüksek** proje seçilir.

| Proje | Ömür | Yatırım | NBD (%10) | Anüite faktörü | **YENBD** |
|---|---|---|---|---|---|
| K | 3 yıl | 80 | 45,88 | 2,4869 | **18,45** |
| L | 5 yıl | 170 | 64,59 | 3,7908 | **17,04** |

NBD'si daha yüksek olan L'dir; ama yıllık eşdeğerle **K seçilir**.

## 5. Risk altında yatırım kararları
Gerçek hayatta proje bilgileri çoğu kez **belirli olmaktan uzaktır**; nakit akımları risk içerir. Riskli projeleri değerlendirmenin iki temel yaklaşımı:

| Yaklaşım | Açıklama |
|---|---|
| **Riskin iskonto oranına yansıtılması** | İskonto oranı projenin riskine göre **yeniden belirlenir** (riske göre ayarlanmış oran) |
| **Riskin nakit akımlarına yansıtılması** | **Daha çok kullanılan** yöntemdir. Nakit akımlarının **nokta tahmini** mi, yoksa **olasılık dağılımları** mı olduğuna göre farklı yöntemler uygulanır |

## 6. Kapsamlı örnek: KLM A.Ş.
Eski makine (2 yıl önce 480.000 TL'ye alındı, 12 yıl ömür, hurda 40.000 → doğrusal yıllık amortisman **40.000**) yerine 1.000.000 TL'lik, 10 yıl ömürlü, hurda değeri 120.000 TL olan yeni makine alınacak (notlarda yeni makinenin amortisman vergi kalkanı yıllık **100.000 × %20** olarak hesaplanır); vergi %20, sermaye maliyeti %12.
- Eski makinenin defter değeri = 480.000 − 2 × 40.000 = **400.000**; piyasa değeri **300.000** → **100.000 TL zararına satış**, zararın **vergi kalkanı** 100.000 × 0,20 = **20.000** nakit girişidir.
- **Ek stok** (hammadde 60.000, yedek parça 20.000) ilk yatırıma eklenir (**işletme sermayesi**).
- Kirada olan depo projeye tahsis edilirse vazgeçilen **kira geliri** (yıllık 24.000) bir **fırsat maliyetidir**.
- Eski makinenin artık ayrılmayacak amortismanının vergi kalkanı bir **fırsat maliyeti** olarak düşülür.
- Hesaplanan NBD yaklaşık **73.306 TL** → **pozitif**, proje yapılmalıdır.
`,
  sorular: [
    {
      s: "Aynı fonksiyonu gören ve birinin kabulü diğerinin reddini gerektiren projelere ne ad verilir?",
      c: ["Bağımsız yatırımlar", "Birbirini engelleyen yatırımlar", "Fon kısıtlı yatırımlar", "Tamamlayıcı (bağımlı) yatırımlar", "Batık maliyetli yatırımlar"],
      d: 1,
      a: "Bir şirket farklı teknolojideki tezgâh modellerinden yalnız birini seçecekse, bu projeler **birbirini engelleyen veya çelişen yatırımlardır**. Sıralama ihtiyacının diğer nedeni **fon kısıtlamasıdır**.",
      k: "1007 resmi not s. 87"
    },
    {
      s: "NBD ve İVO yöntemlerinin projelerin **ara nakit akışlarının yeniden yatırılmasına** ilişkin varsayımları hangisidir?",
      c: ["İkisi de sermaye maliyeti üzerinden yeniden yatırım varsayar", "İkisi de iç verim oranı üzerinden yeniden yatırım varsayar", "NBD iç verim oranı, İVO sermaye maliyeti üzerinden yeniden yatırım varsayar", "NBD sermaye maliyeti, İVO iç verim oranı üzerinden yeniden yatırım varsayar", "İki yöntem de yeniden yatırım varsayımı yapmaz"],
      d: 3,
      a: "**NBD** yöntemi nakit akışlarının kalan yıllarda **sermaye maliyeti** üzerinden, **İVO** yöntemi ise **iç verim oranı** üzerinden verim sağlayacağını varsayar. Bu fark, sıralamada çelişkiye yol açar.",
      k: "1007 resmi not s. 88"
    },
    {
      s: "E projesi (yatırım 100 TL, NBD 36,4 TL, İVO %50) ile F projesi (yatırım 400 TL, NBD 54,6 TL, İVO %25) arasında yalnız biri seçilecektir. Hangisi doğrudur?",
      c: ["İki yöntem de E'yi seçer; çünkü İVO'su daha yüksektir", "İki yöntem de F'yi seçer; çünkü NBD'si daha yüksektir", "NBD'ye göre F, İVO'ya göre E seçilir", "NBD'ye göre E, İVO'ya göre F seçilir; fark zamanlamadan doğar", "İki proje de reddedilir; çünkü yöntemler çelişmektedir"],
      d: 2,
      a: "NBD parasal sonuç verdiği için **F**'yi (54,6 TL), İVO oran verdiği için **E**'yi (%50) seçer. Çelişkinin nedeni projelerin **büyüklüğüdür**: biri parasal, diğeri oransal ölçer.",
      k: "1007 resmi not s. 89"
    },
    {
      s: "Bir projenin **birden fazla iç verim oranına** sahip olmasının nedeni nedir?",
      c: ["Projenin ekonomik ömrünün çok uzun olması", "Şirketin sermaye maliyetinin çok düşük olması", "Projenin ömür sonundaki hurda değerinin sıfır olması", "İlk yatırım tutarının yıllık nakit girişlerinden büyük olması", "Nakit akışının pozitiften negatife dönmesi"],
      d: 4,
      a: "Bazı yıllarda nakit çıkışının girişten fazla olması, yani nakit akışının **pozitiften negatife dönmesi**, projenin **birden fazla İVO**'ya sahip olmasına yol açar. Proje tek bir NBD'ye sahipken birden fazla İVO vermesi, İVO yönteminin sakıncalarındandır.",
      k: "1007 resmi not s. 89"
    },
    {
      s: "**Ömürleri farklı** iki projenin karşılaştırılmasında kullanılan **yıllık eşdeğer NBD** nasıl hesaplanır?",
      c: ["NBD, ömre karşılık gelen anüite faktörüne bölünerek", "NBD, projenin ilk yatırım tutarına bölünerek", "NBD, şirketin sermaye maliyetiyle çarpılarak", "NBD, projenin ömrü olan yıl sayısıyla çarpılarak", "İVO, projenin ömrü olan yıl sayısına bölünerek"],
      d: 0,
      a: "YENBD = **NBD / Anüite faktörü (n, k)**. Ör. 3 yıllık K projesi için 45,88 / 2,4869 = **18,45**; 5 yıllık L için 64,59 / 3,7908 = **17,04**. 1/anüite faktörü **sermaye kurtarma faktörü** olarak bilinir.",
      k: "1007 resmi not s. 89-90"
    },
    {
      s: "3 yıl ömürlü K projesinin NBD'si 45,88 TL, YENBD'si 18,45 TL; 5 yıl ömürlü L projesinin NBD'si 64,59 TL, YENBD'si 17,04 TL'dir. Yalnız biri seçilecekse hangisi seçilmelidir?",
      c: ["L, çünkü NBD'si daha yüksektir", "K, çünkü yıllık eşdeğer NBD'si daha yüksektir", "L, çünkü ömrü daha uzundur", "K, çünkü ilk yatırımı daha düşüktür", "İkisi arasında kayıtsız kalınır"],
      d: 1,
      a: "Ömürler farklı olduğundan NBD'ler doğrudan karşılaştırılamaz. Yıllık eşdeğer NBD'si daha yüksek olan **K** (18,45 > 17,04) seçilir.",
      k: "1007 resmi not s. 90"
    },
    {
      s: "Risk altında yatırım kararlarında **daha çok kullanılan** yaklaşım hangisidir?",
      c: ["Riskin iskonto oranına yansıtılması", "Riskin tamamen ihmal edilmesi", "Riskin nakit akımlarına yansıtılması", "Projenin geri ödeme süresinin kısaltılması", "Projenin yalnızca özsermayeyle finanse edilmesi"],
      d: 2,
      a: "Riskli projelerde iki yaklaşım vardır: riskin **iskonto oranına** yansıtılması (riske göre ayarlanmış oran) ve riskin **nakit akımlarına** yansıtılması. İkincisi **daha çok kullanılır**; nakit akımlarının nokta tahmini mi olasılık dağılımı mı olduğuna göre yöntem değişir.",
      k: "1007 resmi not s. 90"
    },
    {
      s: "Defter değeri 400.000 TL olan eski bir makine 300.000 TL'ye satılmaktadır. Vergi oranı %20 ise bu satışın proje başlangıcındaki **toplam nakit etkisi** ne kadardır?",
      c: ["300.000 TL giriş", "280.000 TL giriş", "400.000 TL giriş", "320.000 TL giriş", "100.000 TL çıkış"],
      d: 3,
      a: "Satış geliri **300.000 TL** girişdir. Makine 100.000 TL **zararına** satıldığından zararın vergi kalkanı 100.000 × 0,20 = **20.000 TL** ek nakit girişi sağlar. Toplam etki = 300.000 + 20.000 = **320.000 TL giriş**.",
      k: "1007 resmi not s. 91"
    }
  ]
});
