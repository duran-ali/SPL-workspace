SPL.gun("1003", 13, {
  okuma: `
## Bugünün haritası
1. Küresel referans oranlar: **SOFR** ve **Euribor**
2. **TLREF'e endeksli** tahvilde kupon hesabı
3. **TÜFE'ye endeksli** devlet tahvili
4. **DİBS ihraç yöntemleri:** ihale, TAP, doğrudan satış, halka arz
5. DİBS'lerde **piyasa yapıcılığı**

Bugünle **Borçlanma Araçları** bölümü bitiyor.

---

## 1. SOFR ve Euribor

| | **SOFR** (USD) | **Euribor** (EUR) |
|---|---|---|
| Kaynak | **ABD Hazine reposu** piyasası | Panel bankaların **gerçek işlemleri** |
| Yapı | **Gecelik**, **teminatlı** ("Secured") | Kendinden **vadeli** (1 hafta, 3 ay, 6 ay…) |
| Yönetici | — | **EMMI** |
| Özellik | "Saf risksiz faize" en yakın oran | **Hibrit metodoloji** |

- **LIBOR ile farkı:** LIBOR teminatsız borçlanmaya dayandığı için **banka kredi riski primi** içerir. SOFR hazine teminatlı olduğu için içermez. Kriz dönemlerinde SOFR "güvenli liman" etkisiyle daha **yatay ya da düşük** kalabilir.
- **Term SOFR:** ticari kredilerde faizi **vade başında** bilmek için vadeli işlem fiyatlarından türetilir ve **ARRC** tarafından onaylanmıştır.
- **Euribor'un hibrit metodolojisi** üç katmanlıdır:
  1. Önce **gerçek işlemler**.
  2. Yeterli işlem yoksa **interpolasyon** ve piyasa verisi.
  3. **Uzman görüşü** yalnızca son çare.
- **Fark:** TLREF ve standart SOFR **gecelik** oranlardır. Euribor doğrudan **vadeli** oranlar olarak yayımlanır.

---

## 2. TLREF'e endeksli tahvil: kupon hesabı
- Kupon = **TLREF endeks getirisi + dönemsel ek getiri (spread)**. Spread, ihraççının **kredi riskine** göre ihraçta belirlenir.
- Piyasada kupon genellikle **3 ayda bir** ödenir.
- **T−1 kuralı:** hesapta kupon tarihlerinden **bir iş günü önceki** endeks değerleri kullanılır.
- Gün sayımı **Gerçek/Gerçek** esasına göre yapılır.

### Örnek
- 100 TL nominal, yıllık spread **%4**, kupon dönemi **91 gün**.
- Endeks: başlangıç **5.200**, bitiş **5.500** (T−1 değerleri).

1. Endeks getirisi = 5.500 / 5.200 − 1 = **%5,7692**
2. Dönemsel spread = %4 × 91/365 = **%0,9973** (basit faizle indirgenir)
3. Toplam kupon oranı = **%6,7665**
4. Kupon = 100 × 0,067665 ≈ **6,77 TL**

Vade sonunda son kupon ile **100 TL anapara** birlikte ödenir.

---

## 3. TÜFE'ye endeksli devlet tahvili
- Enflasyonun üzerinde **sabit bir reel getiri** taahhüt eder. **Hem kupon hem anapara** TÜFE'ye göre güncellenir.
- **Deflasyon koruması:** TÜFE gerilese bile reel faiz ödenmeye devam eder ve anapara **100 TL'nin altında ödenmez**.
- *Kupon = Nominal × Endeks katsayısı × Dönemsel reel faiz*
- *Anapara = Nominal × Endeks katsayısı*
- Endeks katsayısı = 1 + ihraçtan bu yana TÜFE artışı.
- TÜFE **2 ay gecikmeli** kullanılır.

### Örnek
1.3.2026'da ihraç edilmiş, 5 yıl vadeli, 6 ayda bir ödemeli, dönemsel reel faizi **%2** olan bir tahvil.

| Ödeme | Esas alınan TÜFE dönemi | Katsayı | Tutar |
|---|---|---|---|
| 1. kupon (1.9.2026) | 1.1.2026 – 30.6.2026 | 1,10 | 100 × 1,10 × 0,02 = **2,20 TL** |
| 2. kupon (1.3.2027) | 1.1.2026 – 31.12.2026 | 1,18 | 100 × 1,18 × 0,02 = **2,36 TL** |
| Son kupon (1.3.2031) | 1.1.2026 – 31.12.2030 | 1,95 | 100 × 1,95 × 0,02 = **3,90 TL** |
| **Anapara** | aynı | 1,95 | 100 × 1,95 = **195 TL** |

> [!dikkat]
> Gecikmeli endeksleme, enflasyon **düşerken** yatırımcının **lehine** işler: ödemeler hâlâ geçmişteki yüksek enflasyonu yansıtır. Enflasyon **yükselirken** ise yatırımcının **aleyhine** işler.

---

## 4. DİBS ihraç yöntemleri

### a) İhale
- Fiyat bilgisinin eksik olduğu dönemlerde fiyatın **rekabetle** oluşmasını sağlar.
- Teklifler **TCMB**'ye verilir. Bankalar, aracı kurumlar, özel finans kurumları ve **bireysel yatırımcılar** katılabilir.
- Teklifler **yüksek fiyattan düşüğe** (düşük faizden yükseğe) sıralanır. Liste TCMB'den Hazineye gönderilir.
- Hazine "çizgiyi" ya **nakit ihtiyacına** ya da **faiz oranına** göre çeker.
- İhaleyle satılan DİBS'ler **iskontolu ya da kuponlu** olabilir.

| | **Çoklu fiyat** | **Tek fiyat** |
|---|---|---|
| Kazanan hangi fiyattan alır? | **Kendi teklif ettiği** fiyattan | Hazinenin belirlediği tek fiyattan: kazanan **en düşük** fiyat teklifi |
| Getiriler | Her kazanan için **farklı** | Tüm kazananlar için **aynı** |

- **Rekabetçi olmayan teklif (ROT):** ihalede oluşan ya da ortalama fiyattan teklif vermektir. Yalnızca **kamu kurumları ve piyasa yapıcılar** verebilir.

### b) TAP yöntemi
- İlk kez **Ekim 1988**'de kullanılmıştır.
- Hazine, türünü, faizini ve vadesini belirlediği tahvilleri **Merkez Bankasında depolar**. Yatırımcılar bunları **istedikleri zaman**, o gün için belirlenmiş fiyattan alır.
- Satılana kadar mülkiyet **Hazinededir**. Merkez Bankası yalnızca **aracı ve depolayıcıdır**.
- Bugün **yalnızca piyasa yapıcı bankalar** katılır.

### c) Doğrudan satış
- **1996**'dan beri kullanılır.
- Senedin **kime ve ne kadar satılacağı başta bellidir**. Alıcılar kamu kurumları, bankalar ve diğer finansal kuruluşlardır.
- Faiz piyasa koşullarına göre belirlenir ve karşı tarafla mutabakat sağlanır.
- Daha önce ihraç edilmiş bir senet de bu yolla satılabilir; o zaman fiyata **işlemiş faiz** eklenir.

### ç) Halka arz
- **1994 krizinden** sonra önem kazanmıştır.
- Senedin şartlarını Hazine belirler; banka ve aracı kurumlar aracılığıyla satılır.
- Piyasa yapıcılık sözleşmesi gereği bu ihraçlara **yalnızca piyasa yapıcı bankalar** aracılık eder ve Hazinenin belirlediği **komisyonu** alır.

---

## 5. DİBS'lerde piyasa yapıcılığı
- **4749 sayılı Kanun**'a göre piyasa yapıcı, DİBS ihalelerinde ve ikincil piyasada etkinliği artırmak için **önceden belirlenen kriterlere göre seçilmiş bankadır**.
- Hazine ile her yıl yapılan **sözleşmelerle** yürütülür.

| **Yükümlülükler** | **Ayrıcalıklar** |
|---|---|
| İhalelere katılıp **belirli miktarda alım** yapmak; böylece Hazinenin **borç çevirme riski** azalır | İhalelere **teminatsız** katılmak |
| BAP'ta belirli senetler için **alım-satım kotasyonu** vererek ikincil piyasada **likidite** sağlamak | **Rekabetçi olmayan teklif** ve **ihale sonrası teklif** vermek |
| Bakanlığın istediği **araştırma, rapor ve verileri** hazırlamak | Hazinenin **para piyasası** nakit işlemlerinin karşı tarafı olmak |
| | **TAP** satışlarına ve **geri alım / değişim** ihalelerine katılmak |
| | **Halka arz** DİBS ihraçlarına aracılık etmek |

- Piyasa yapıcılar ayrıca TCMB bünyesindeki **DİBS Ödünç İşlemleri Piyasası**'nda işlem yapabilir.

> [!ezber]
> **Çoklu fiyat:** herkes kendi fiyatından · **Tek fiyat:** herkes en düşük kazanan fiyattan
> **TAP 1988** · **Doğrudan satış 1996** · **Halka arz** 1994 krizi sonrası
`,
  sorular: [
    {
      s: "SOFR ile LIBOR arasındaki temel ekonomik fark nedir?",
      c: ["SOFR teminatsız, LIBOR ise hazine tahvili teminatlı işlemlere dayanır.", "SOFR hazine teminatlı olduğundan banka kredi riski primi içermez; LIBOR içerir.", "SOFR Avrupa'da, LIBOR ise ABD'de referans olarak kullanılır.", "SOFR uzman görüşüne, LIBOR ise gerçekleşmiş işlemlere dayanır.", "İkisi arasında ekonomik bir fark yoktur; yalnızca adları farklıdır."],
      d: 1,
      a: "LIBOR teminatsız bankalararası borçlanmaya dayandığı için **banka kredi riski primi** içerir. SOFR ise **ABD Hazine tahvili teminatlı** repo işlemlerinden üretildiği için \"saf risksiz faize\" en yakın orandır.",
      k: "1003 resmi not s. 122"
    },
    {
      s: "TLREF'e endeksli bir tahvilde kupon dönemi başında endeks 5.200, sonunda 5.500'dür. Yıllık spread %4, kupon dönemi 91 gündür. 100 TL nominal için kupon ödemesi yaklaşık ne kadardır?",
      c: ["6,77 TL", "5,77 TL", "1,00 TL", "4,00 TL", "9,77 TL"],
      d: 0,
      a: "Endeks getirisi 5.500/5.200 − 1 = %5,7692. Dönemsel spread %4 × 91/365 = %0,9973. Toplam %6,7665 olur ve kupon ≈ **6,77 TL**'dir.",
      k: "1003 resmi not s. 123"
    },
    {
      s: "TLREF'e endeksli özel sektör tahvillerinde kupon hesabında uygulanan \"T−1 kuralı\" neyi ifade eder?",
      c: ["Kuponun ödeme tarihinden bir gün önce yatırımcıya ödenmesini", "Kupon tarihlerinden bir iş günü önceki endeks değerlerinin kullanılmasını", "Spread'in her kupon döneminden bir iş günü önce piyasa koşullarına göre yeniden belirlenmesini", "Takasın işlem gününden bir gün önce yapılmasını", "TÜFE verisinin bir ay gecikmeli kullanılmasını"],
      d: 1,
      a: "Operasyonel süreçler için hesapta kupon tarihlerindeki değil, bu tarihlerden **bir iş günü önceki (T−1)** TLREF endeks değerleri kullanılır.",
      k: "1003 resmi not s. 123"
    },
    {
      s: "Nominal değeri 100 TL, dönemsel reel faizi %2 olan TÜFE'ye endeksli bir devlet tahvilinde endeks katsayısı 1,18'dir. Kupon ödemesi ne kadardır?",
      c: ["2,00 TL", "2,20 TL", "2,36 TL", "3,60 TL", "18,00 TL"],
      d: 2,
      a: "Kupon = Nominal × Endeks katsayısı × Dönemsel reel faiz = 100 × 1,18 × 0,02 = **2,36 TL**.",
      k: "1003 resmi not s. 125"
    },
    {
      s: "TÜFE'ye endeksli devlet tahvilleriyle ilgili hangisi **yanlıştır?**",
      c: ["Hem kupon hem anapara TÜFE'ye göre güncellenir.", "TÜFE 2 ay gecikmeli olarak dikkate alınır.", "Deflasyon durumunda anapara nominal değerin altında ödenebilir.", "Reel getiri ihraç anında sabitlenir.", "Gecikmeli endeksleme, enflasyonun düştüğü dönemlerde yatırımcının lehine işleyebilir."],
      d: 2,
      a: "**Deflasyon koruması** vardır: TÜFE gerilese bile Hazine anaparayı **nominal değerin (100 TL) altında ödemez**.",
      k: "1003 resmi not s. 124"
    },
    {
      s: "DİBS ihalelerinde tek fiyat yöntemiyle ilgili hangisi doğrudur?",
      c: ["Her kazanan kendi teklif ettiği fiyattan alır; getiriler tekliflere göre değişir.", "Kazananlar ihaleyi kazanan en düşük fiyattan alır; getirileri aynıdır.", "İhaleye yalnızca piyasa yapıcı bankalar katılabilir.", "Teklifler aracı kuruluş olmadan doğrudan Hazineye verilir.", "Kazanan yatırımcıların getirileri birbirinden farklıdır."],
      d: 1,
      a: "Tek fiyat yönteminde kazananlar **ihaleyi kazanan en düşük fiyattan** alır, bu yüzden getirileri **aynıdır**. Çoklu fiyatta herkes kendi teklif fiyatından alır. Teklifler **TCMB**'ye verilir.",
      k: "1003 resmi not s. 127"
    },
    {
      s: "Hazinenin tahvilleri Merkez Bankasında depoladığı ve yatırımcıların bu tahvilleri istedikleri zaman belirlenen günlük fiyatlardan aldığı ihraç yöntemi hangisidir?",
      c: ["İhale", "Doğrudan satış", "TAP", "Halka arz", "Tahsisli satış"],
      d: 2,
      a: "**TAP** yönteminde Hazine tahvilleri TCMB'de depolar; satılana kadar mülkiyet Hazinededir. İlk kez 1988'de kullanılmıştır ve bugün yalnızca piyasa yapıcılar katılır.",
      k: "1003 resmi not s. 128"
    },
    {
      s: "Aşağıdakilerden hangisi DİBS piyasa yapıcılarının **ayrıcalıklarından biri değildir?**",
      c: ["İhalelere teminatsız katılabilmek", "Rekabetçi olmayan teklif verebilmek", "TAP satışlarına katılabilmek", "Belirli senetler için BAP'ta alım-satım kotasyonu vermek", "Hazine'nin düzenlediği geri alım ve değişim ihalelerine katılabilmek"],
      d: 3,
      a: "BAP'ta **alım-satım kotasyonu vermek** bir **yükümlülüktür**; ikincil piyasada likidite sağlamak içindir. Diğerleri ayrıcalıktır.",
      k: "1003 resmi not s. 129"
    }
  ]
});
