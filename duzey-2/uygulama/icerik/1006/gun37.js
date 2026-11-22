SPL.gun("1006", 37, {
  okuma: `
## Bugünün haritası
TEFAS'ın ikinci günü. Dün platformu, saatleri, emir türlerini ve işlem limitini gördük. Bugün **talimat tutarının nasıl hesaplandığını** (güncel ve ileri valör), **valör günü netleştirme sonuçlarını**, **temerrüt** ve **temerrüt faizini**, **komisyonları** ve **olağanüstü durum** tedbirlerini öğreneceğiz.

1. Talimat tutarı ve adet hesabı: **güncel** ve **ileri valör**
2. Valör günü **netleştirme** sonuçları
3. **Temerrüt** ve **temerrüt faizi**
4. Mağduriyet ödemesi, teminata başvurma ve **itiraz**
5. **Aracılık komisyonu**
6. **Takasbank komisyonları**
7. Olağanüstü durumlar

---

## 1. Talimat tutarı ve adet hesabı
| | Güncel (aynı gün) valör | İleri valör |
|---|---|---|
| **Adet** üzerinden alım | Tutar = adet × fiyat | Tutar = **marjlı fiyat** × adet |
| **Tutar** üzerinden alım | Adet = tutar ÷ fon fiyatı | Adet = tutar ÷ (marj oranı kadar **düşürülmüş** fiyat) |
| **Satım** (yalnız adet) | Tutar = adet × fiyat | Tutar = marjlı fiyat × adet |

- **Güncel valörde** marj uygulanmaz: emirler geçerli fon fiyatından eşleşir ve gerçekleşir.
- **İleri valörde** talimat giriş günü **marjlı fiyattan eşleşir**; tutar **valör günü** geçerli fon fiyatından hesaplanıp gerçekleşir.
- Valör günü, **eşleşen adetten** ve **hesaplanan tutardan fazla** işlem yapılmaz; daha az olabilir.

> [!bilgi] **Örnek (ileri valör):** Giriş günü fiyat **19,50**, marj **%20**, valör günü fiyat **20**.
> - Adetle alım/satım marjlı fiyatı: 19,50 × 1,20 = **23,40**. 1.000 adetlik alım 23.400 TL ile eşleşir; valör günü **1.000 adet × 20 = 20.000 TL** gerçekleşir.
> - Tutarla alım marjlı fiyatı: 19,50 × 0,80 = **15,60**. 1.000 TL'lik talimat 1.000 ÷ 15,60 ≈ **64 adet** olarak eşleşir; valör günü 1.000 ÷ 20 = **50 adet**, 1.000 TL gerçekleşir.

> [!bilgi] **Örnek (güncel valör):** Fiyat **7**. 1.000 TL'lik tutar talimatı → 1.000 ÷ 7 = **142 adet**, gerçekleşen tutar **994 TL**.

---

## 2. Valör günü netleştirme sonuçları
Eşleşip bekleyen talimatların nakit tutarları valör günü netleştirilir: **TL 14:00**, **yabancı para 12:30**.

| Netleştirme sonucu | Fon payı aktarımı | Nakit |
|---|---|---|
| Üye nakit **alacaklı** | **Hemen** yapılır | Alacak, **TEFAS Havuz Hesabı'nda bakiye oluştukça** aktarılır |
| Üye nakit **borçlu** | Borçlu olduğu paylar **hemen**; alacaklı olduğu paylar **kapattığı borçla orantılı** | Borcu kapatması gerekir |

> [!dikkat] Fon payı aktarım talimatları **parçalı** olarak gerçekleştirilmez.

---

## 3. Temerrüt ve temerrüt faizi
- Valör tarihinde **TL için 15:00**, **yabancı para için 15:45** itibarıyla yükümlülüğünü yerine getirmeyen üye, **ihbara gerek olmadan** temerrüde düşer ve temerrüt faizi öder.
- Tespitte nakdin **"TEFAS Nakit Borç Kapatma Hesabı"**na (YP için **"TEFAS Yabancı Para Nakit Borç Kapatma Hesabı"**na) aktarım saati esas alınır.
- **Faiz oranı:** TCMB **geç likidite penceresi (LON)** borç verme faizi ile Borsa İstanbul repo-ters repo pazarı, TCMB Bankalararası Para Piyasası ve Takasbank Para Piyasası **gecelik ağırlıklı ortalama** faizlerinden **en yüksek olanı**. Her gün için o günün oranı kullanılır.
- Süre: valör tarihi ile yükümlülüğün yerine getirildiği tarih arasındaki **takvim günleri**.

| Yükümlülük | Saat aralığı (tam iş günü) | Katsayı |
|---|---|---|
| **Nakit TL** | 15:00-15:30 | **0,5** |
| | 15:30'dan sonra, aynı gün valörüyle | **1** |
| | Valör tarihinden sonra | **2** |
| **Nakit YP** | 15:45-16:30 | **0,5** |
| | 16:30'dan sonra, aynı gün valörüyle | **1** |
| | Valör tarihinden sonra | **2** |
| **Fon payı fiyat bildirimi** | Son saatten sonra yapılması veya hiç yapılmaması | **904 TL** maktu (her gün için) |

Yarım iş gününde nakit TL aralıkları **12:30-13:00** (0,5), **13:00'dan sonra** aynı gün (1), valör tarihinden sonra (2).

> [!ezber] **Temerrüt faizi = Temerrüt tutarı × Faiz oranı × Katsayı / 360**
> YP'de temerrüt tutarı = gecikmeli kapatılan YP tutarı × **borç kapama tarihindeki TCMB döviz alış kuru**.

- Faiz **aynı gün** ödenir; ödenmezse üyenin **serbest hesabından re'sen** tahsil edilir.
- Nakit yükümlülüğü Takasbank tarafından **fonlama limiti** kullanılarak karşılanan üye, fonlama tutarını ve **faizini** öder.

---

## 4. Mağduriyet, teminata başvurma ve itiraz
- Yükümlülüğünü yerine getirdiği halde karşı tarafın temerrüdü yüzünden alacağını valör günü alamayan kuruma, tahsil edilen temerrüt faizinin **2/3'ü** **mağduriyet ödemesi** olarak yapılır (günlük hesaplanır).
- Mağduriyet ödemesi istemeyen üye bunu **yazılı** bildirirse ödeme yapılmaz.
- Ödeme için gecikme **Takasbank, MKK veya TCMB** sistem sorunlarından kaynaklanmamalı ve temerrüt faizi (itiraz geçersiz sayılarak) **tahsil edilmiş** olmalıdır.

> [!dikkat] Temerrüt valör günü kapanmazsa üyeye en geç **valörü izleyen iş günü saat 11:00'e** kadar süre verilir. Kapatılmazsa Takasbank, **ihbar, ek süre, adli veya idari izin, açık artırma** gibi ön şart olmadan **teminatları** organize ve/veya tezgahüstü piyasalarda satarak tahsil eder. Hangi teminatın satılacağına **likidite ve piyasa etkisine** bakarak Takasbank karar verir.

- **İtiraz:** Temerrüt faizi tahakkuk eden üye, tahakkuk tarihinden itibaren en geç **3 iş günü** içinde yazıyla Takasbank'a başvurur. **Temerrüt Komitesi** itirazı haklı bulursa faiz uygulanmaz, tahsil edildiyse **iade** edilir.

---

## 5. Aracılık komisyonu
- **Fon dağıtım kuruluşlarına**, Takasbank nezdindeki **fon hesabından** ödenen komisyondur.
- Oran, kurucunun/operatör üyenin sisteme tanımladığı **fon yönetim ücretinin belirli bir oranıdır**; her fon için ayrı tanımlanır. Aracılık komisyon oranı ve fon yönetim ücreti oranının tanımlanması **zorunludur**.
- **Genel komisyon oranı:** Kurulun belirlediğinden farklı tanımlanamaz.
- **Özel komisyon oranı:** Kurucunun özel anlaşma yaptığı kurumlar için, üye bazında, Kurulun **asgari-azami** sınırları içinde.
- **Fon yönetim ücreti** istenildiği zaman değiştirilebilir; **aracılık komisyon oranı** ise **3'er aylık dönemler** itibarıyla değiştirilebilir (Ocak-Mart, Nisan-Haziran, Temmuz-Eylül, Ekim-Aralık).

> [!ezber] Oran değişikliği dönemin **son ayının 20'sine kadar** yapılırsa **bir sonraki** dönemde, sonra yapılırsa **takip eden ikinci** dönemde geçerli olur.

> [!ezber] **Aracılık komisyonu = Gün sonu fon payı adedi × Pay satış fiyatı × Fon yönetim ücreti oranı × Aracılık komisyon oranı**

- Hesap **günlük** yapılır; **her ayın ilk iş günü** önceki ayın toplamı belirlenir ve kurucu/operatör üyenin **onayıyla** fon hesabından dağıtıcının hesabına aktarılır.
- PYŞ'lerin dağıtıcı sıfatıyla yaptığı işlemlerde komisyon ilgili **PYŞ adına** hesaplanır.

---

## 6. Takasbank komisyonları
| Komisyon | Kimden | Ne zaman |
|---|---|---|
| **Üyelik giriş ücreti** | **Kurucudan**, **fon bazında bir kez** | Fon tanımlanırken; alınamazsa sonraki günlerde serbest cari hesaptan re'sen |
| **Üyelik aidatı** | **Tüm üyelerden** (kurucu, operatör üye, dağıtıcı) | **Aylık**, her ayın **ilk iş günü** |
| **İşlem komisyonu** | **Satışlarda kurucudan**, **geri alışlarda dağıtım kuruluşundan** | **Aylık** |

---

## 7. Olağanüstü durumlar
Takasbank, platformun işlerliğini ve güvenilirliğini olumsuz etkileyeceğini öngördüğü olağanüstü durumlarda tedbir almaya yetkilidir: **işlem saatlerini değiştirme**, **talimat iletimini durdurma** ve diğer her türlü tedbir.

---

## Bugünün özeti
- Güncel valörde **marj yok**; ileri valörde adetle alımda fiyat **marj kadar artırılır**, tutarla alımda **marj kadar düşürülür**.
- Valör günü eşleşen adet ve hesaplanan tutar **aşılamaz**.
- Netleştirme TL **14:00**, YP **12:30**; aktarımlar **parçalı yapılmaz**.
- Temerrüt TL **15:00**, YP **15:45**; katsayılar **0,5 / 1 / 2**; geç fiyat bildirimi **904 TL**.
- Faiz = tutar × oran × katsayı / **360**; oran = LON ve gecelik oranlardan **en yükseği**.
- Mağduriyet ödemesi **2/3**; kapatma süresi ertesi iş günü **11:00**; itiraz **3 iş günü**, **Temerrüt Komitesi**.
- Aracılık komisyon oranı **3 aylık** dönemlerle değişir (son ayın **20'si**); ödeme **ayın ilk iş günü**.
- Takasbank: giriş ücreti **kurucudan bir kez**, aidat **herkesten aylık**, işlem komisyonu satışta **kurucudan**, geri alışta **dağıtıcıdan**.
`,
  sorular: [
    {
      s: "TEFAS'ta bir fonun talimat giriş günü fiyatı **19,50 TL**, marj oranı **%20**'dir. **İleri valörlü** ve **adet üzerinden** verilen bir alım talimatında kullanılacak **marjlı fiyat** kaç TL'dir?",
      c: ["15,60", "19,50", "20,00", "23,40", "24,38"],
      d: 3,
      a: "Adet üzerinden ileri valörlü alım ve satımda fon fiyatı **marj oranı kadar artırılır**: 19,50 × 1,20 = **23,40 TL**. Tutar üzerinden alımda ise fiyat marj kadar düşürülür (15,60).",
      k: "1006 resmi not s. 237-238"
    },
    {
      s: "TEFAS'ta ileri valörlü, **1.000 TL tutarlı** bir alım talimatı, marjlı fiyat **15,60 TL**'den **64 adet** olarak eşleşmiştir. Valör günü fon fiyatı **20 TL** ise **gerçekleşen adet** kaçtır?",
      c: ["50", "56", "64", "72", "80"],
      d: 0,
      a: "Valör günü, eşleşen adetten ve hesaplanan tutardan **fazla işlem yapılmaz**. 1.000 TL ÷ 20 TL = **50 adet** gerçekleşir; tutar 1.000 TL'yi aşamaz.",
      k: "1006 resmi not s. 237-238"
    },
    {
      s: "TEFAS'ta tam iş gününde **nakit TL** yükümlülüğünü valör günü **15:30'dan sonra, aynı gün valörüyle** yerine getiren üyeye uygulanan **temerrüt faizi katsayısı** kaçtır?",
      c: ["0,25", "0,5", "1", "1,5", "2"],
      d: 2,
      a: "Nakit TL'de katsayılar: **15:00-15:30 → 0,5**, **15:30'dan sonra aynı gün → 1**, **valör tarihinden sonra → 2**. Yabancı parada aralıklar 15:45-16:30 ve 16:30 sonrasıdır.",
      k: "1006 resmi not s. 239"
    },
    {
      s: "TEFAS'ta **1.440.000 TL**'lik nakit TL borcunu valör günü **15:10**'da kapatan bir üye için geçerli faiz oranı **%45**'tir. Bu üyenin ödeyeceği **temerrüt faizi** kaç TL'dir?",
      c: ["450 TL", "900 TL", "1.350 TL", "1.800 TL", "3.600 TL"],
      d: 1,
      a: "15:00-15:30 aralığında katsayı **0,5**'tir. Temerrüt faizi = tutar × oran × katsayı / 360 = 1.440.000 × 0,45 × 0,5 / 360 = **900 TL**.",
      k: "1006 resmi not s. 239"
    },
    {
      s: "TEFAS'ta yükümlülüğünü yerine getirdiği halde karşı tarafın temerrüdü nedeniyle alacağını valör günü alamayan kuruma yapılan **mağduriyet ödemesi** ne kadardır?",
      c: ["Tahsil edilen temerrüt faizinin tamamı", "Tahsil edilen temerrüt faizinin yarısı", "Tahsil edilen temerrüt faizinin 1/3'ü", "Takasbank fonlama faizinin tamamı", "Tahsil edilen temerrüt faizinin 2/3'ü"],
      d: 4,
      a: "Mağduriyet ödemesi, temerrüde düşen kurumdan **tahsil edilen temerrüt faizinin 2/3'üdür** ve günlük hesaplanır. Ödemeyi istemeyen üye bunu yazılı bildirirse ödeme yapılmaz.",
      k: "1006 resmi not s. 239"
    },
    {
      s: "TEFAS'ta **temerrüt süreci** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["Temerrüt valör günü kapanmazsa üyeye ertesi iş günü 11:00'e kadar süre verilir", "Temerrüt faizi tahakkuk eden üye 3 iş günü içinde Takasbank'a itiraz edebilir", "İtirazı Takasbank bünyesindeki Temerrüt Komitesi değerlendirir", "Fon fiyatını geç bildiren kurucuya her gün için maktu bedel uygulanır", "Takasbank teminatları satmadan önce mahkemeden izin almak zorundadır"],
      d: 4,
      a: "Süre sonunda temerrüt kapanmazsa Takasbank **ihbar, ek süre, adli veya idari izin, açık artırma** gibi ön şartlar olmadan teminatları piyasada satarak tahsil eder. Diğer ifadeler doğrudur (11:00, 3 iş günü, Temerrüt Komitesi, 904 TL).",
      k: "1006 resmi not s. 239-240"
    },
    {
      s: "Bir kurucu TEFAS'taki bir fonun **aracılık komisyon oranını** **25 Mart**'ta değiştirmiştir. Yeni oran hangi dönemden itibaren geçerli olur?",
      c: ["Nisan-Haziran dönemi", "Temmuz-Eylül dönemi", "Ekim-Aralık dönemi", "Değişikliği izleyen iş günü", "Sonraki yılın Ocak-Mart dönemi"],
      d: 1,
      a: "Değişiklik dönemin son ayının **20'sine kadar** yapılırsa bir sonraki dönemde, **sonra** yapılırsa **takip eden ikinci** dönemde geçerli olur. 25 Mart, 20 Mart'tan sonra olduğu için oran **Temmuz-Eylül** döneminde uygulanır.",
      k: "1006 resmi not s. 240"
    },
    {
      s: "TEFAS'ta **Takasbank komisyonları** ile ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["İşlem komisyonu geri alışlarda dağıtım kuruluşunun hesabından tahsil edilir", "Üyelik giriş ücreti her yıl tüm üyelerden ayrı ayrı alınır", "Üyelik aidatı yalnızca fon kurucularından alınır", "İşlem komisyonu satışlarda dağıtım kuruluşundan alınır", "Üyelik aidatı her ayın son iş günü tahsil edilir"],
      d: 0,
      a: "**Giriş ücreti** fon bazında **bir kez kurucudan**; **aidat** tüm üyelerden **ayın ilk iş günü**; **işlem komisyonu** satışlarda **kurucudan**, geri alışlarda **dağıtım kuruluşundan** aylık alınır.",
      k: "1006 resmi not s. 240-241"
    }
  ]
});
