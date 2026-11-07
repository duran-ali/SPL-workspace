SPL.gun("1012", 12, {
  okuma: `
## Bugünün haritası
Bugün iki piyasanın **risk ve teminat yönetimini** işliyoruz: **Borçlanma Araçları Piyasası (BAP)** ve **BİAŞ Para Piyasası**.
1. BAP **risk limitleri** ve **ilave işlem teminatı**
2. BAP teminat hesabı: **Nakit Akım Teminatlandırma (NAT)**
3. BAP **teminat tamamlama** çağrıları
4. BAP değerleme, yatırma-çekme ve **garanti fonu**
5. **BİAŞ Para Piyasası** risk yönetimi
6. Para Piyasası **garanti fonu**

---

## 1. BAP risk limitleri
- Pay piyasasıyla **aynı mantık** geçerlidir:
  - Limit aşılırsa aşan kısım katsayılarla çarpılır ve **ilave işlem teminatı** hesabına yansıtılır.
  - Çağrı **izleyen iş günü 15:00**'e kadar karşılanmazsa temerrüt olur.
  - **Risk/limit %200**'ü aşarsa **emir iletimi engellenebilir** ve pasif emirler iptal edilir.

### İlave işlem teminatına kabul edilen varlıklar

| Varlık | Grup limiti |
|---|---|
| **Nakit TL** | En fazla **%100** |
| Konvertibl döviz (USD/EUR/GBP) | En fazla **%70** |
| DİBS | En fazla %70 |
| Hazine **Eurobond** | En fazla %70 |
| Hazine VKŞ **kira sertifikaları** | En fazla %70 |
| İTMK, İDMK, VTMK, VDMK | En fazla %70 |

---

## 2. BAP teminat hesabı

### Parametreler
- Güven düzeyi **%99,50**, elde tutma süresi **2 gün**, veri **en az son 12 ay**.
- **Portföy bazlı net teminatlandırma** kullanılır. Ama **müşteri** pozisyonları ile **üye portföyü** pozisyonları arasında **netleştirme yapılmaz**.

### Nakit Akım Teminatlandırma (NAT) yöntemi
- Risk, **verim eğrilerine** uygulanan **stres senaryolarıyla** ölçülür.
- Aynı verim eğrisine bağlı kıymetler **gruplanır**. Nakit akımları portföy olarak ele alınır ve **net bugünkü değer (NBD) değişimi** ölçülür.
- **Ayrı verim eğrileri** kullanılır:
  - **DİBS**'ler için,
  - **Yabancı para** kıymetler için (para birimine göre),
  - **ÖSBA**'lar için (ihraççı **banka mı değil mi** ayrımıyla).
- Netleştirme **verim eğrisi bazında** yapılır. Eğriler arası **korelasyonlar** dikkate alınabilir.

### Temel bileşenler (verim eğrisi şokları)
1. **Paralel kayma:** eğrinin tamamı yukarı ya da aşağı kayar.
2. **Eğimin değişmesi**
3. **Eğrilik derecesinin (curvature) değişmesi**

- Temel bileşen değerleri **%99,50** güvenle belirlenir ve **ayda bir** gözden geçirilir.
- Sistem portföyün **en kötü senaryosunu** kullanır.

*Teminat gereksinimi = (Nakdin şoksuz NBD − şoklu NBD) + (Kıymetin şoksuz NBD − şoklu NBD)*

---

## 3. BAP teminat tamamlama çağrıları

| | **Gün içi** | **Gün sonu** |
|---|---|---|
| Ne zaman? | Teminat yetersizliği Takasbank kriterini aşarsa | Değerlenmiş teminat gerekenin altına düşerse, her iş günü sonunda |
| Bildirim | Sistem + **telefon / e-posta** | Takas terminalleri; sistemle gönderilince **alınmış sayılır** |
| Süre | **2 saat** | Ertesi iş günü **11:00** (yarım günde **10:00**) |

> [!dikkat]
> Gün sonu çağrısının son saati **BAP'ta ertesi gün 11:00**'dir. **Pay piyasasında** ve Para Piyasası'nda ise **ertesi gün 15:00**'tir.

- Çağrıdan çıkış: **teminat yatırmak** ya da **riski azaltan işlem** yapmak.
- Kriter aşılırsa Takasbank **pozisyon artırıcı emirleri engelleyebilir** ve **bekleyen emirleri iptal edebilir**.

---

## 4. BAP değerleme, yatırma-çekme, garanti fonu

### Değerleme katsayıları
- Güven düzeyi **%99,90**, likidite etme süresi **2 iş günü**, veri en az **12 ay**.
- Katsayılar **yılda bir** gözden geçirilir; gerekirse daha sık.

### Değerleme fiyatları (pay piyasasından farklar)
- **DİBS ve sukuk:** gün içinde ve gün sonunda **Takasbank verim eğrisiyle teorik fiyat**; ulaşılamazsa **TCMB gösterge** değerleri.
- Döviz, Eurobond, pay, fon, altın ve sertifikalarda pay piyasasıyla **aynı** esaslar geçerlidir.
- Yatırma ve çekme işlemleri üye ekranlarından, yazılı talimatla ve **web servisiyle** yapılır.
- Saatler pay piyasasıyla **aynıdır**: nakit TL çekme **15:40**, diğerleri **19:00**. Nemalandırma da aynıdır: **15:40** bakiyesi.

### BAP garanti fonu
| Parametre | Değer |
|---|---|
| Katılım | MKT üyeleri için **zorunlu** |
| Stres hesabı | Güven **%99,75**, elde tutma **2 iş günü** |
| **Sabit katkı payı** | **700.000 TL** |
| İlave katkı payı | 1 Nisan – 31 Mart döneminde en fazla **4 kez**, toplamı yatırılmış payı geçemez |
| Güncelleme | Her ayın ilk iş günü hesaplanır; ertesi iş günü **15:00**'e kadar yatırılır |

---

## 5. BİAŞ Para Piyasası risk yönetimi
- Takasbank **açık teklif** yöntemiyle **MKT**'dir.
  - Yükümlülüğü emirler **eşleştiği anda** başlar, **vade sonunda takasın tamamlanmasıyla** biter.
  - Borsa'nın iptal ettiği işlemlerde yükümlülük, iptal güncellemesi yapıldığı anda kalkar.
- Muhatap **üyelerdir**; üyelerin müşterilere olan yükümlülüklerinden Takasbank **sorumlu değildir**.
- İki hesap vardır: **Üye** ve **Müşteri**. Teminat yeterliliği **ayrı ayrı** kontrol edilir; farklı risk grupları arasında **netleştirme yapılmaz**.

### İşlem öncesi
- **İşlem limiti olmayan hesaptan emir iletilemez.**
- *İşlem limiti = Serbest teminat / İşlem öncesi risk parametresi*
- Parametre en az **1 yıllık** veri ve **%99,50** güvenle belirlenir ve **ayda bir** gözden geçirilir.
- Ters yönlü pozisyonlarda yalnızca **mutlak değerce büyük** olan taraf (borç alma ya da borç verme) dikkate alınır.
- Risk yaratma potansiyeli olan emirler, Takasbank'ın talebiyle **Borsa tarafından iptal edilebilir**.

### İşlem anı ve sonrası
- **Borç veren** üyenin yükümlülüğü, parayı nakit takas havuzuna aktarana kadar **yalnızca başlangıç teminatıdır**.
- **Borç alan** üye **başlangıç teminatı + anapara + faiz** tutarını teminatlandırır.
- Başlangıç teminatı emir **eşleştiği anda** hesaplanır (**%99,50**, 1 yıl veri, **ayda bir** gözden geçirilir).
- **Teminat dönüşüm parametresi:** piyasaya arz edilen fonlar belirli bir oranda aynı risk grubunun teminatı sayılabilir.
- Teminat yetersizse geri ödenen nakit alacağı **bloke** edilir, serbest hesaba aktarılmaz. Borç alan hesaba alacak **alacak dağıtım parametresiyle** iskonto edilerek dağıtılır.
- **Gün sonu** teminat tamamlama son saati **ertesi iş günü 15:00**'tir (dahil). **Gün içi** çağrı **2 saat**tir.
- Risk limitini aşan üyenin **emir iletmemesi** esastır; bekleyen emirler iptal edilebilir.

### Değerleme katsayıları
- Güven **%99,90**, elde tutma **2 iş günü**, veri en az **1 yıl**.
- Takasbank'ın katsayısı **TCMB'nin katsayısından yüksekse TCMB'nin katsayısı** kullanılır.

---

## 6. Para Piyasası garanti fonu
- MKT üyeleri için katılım **zorunludur**.
- **Büyüklük:** en yüksek teminat yükümlülüklü üye ile 2. ve 3. üyelerin **birlikte** temerrüdünden büyük olan ihtiyaçtan az olamaz.
  - Stres: **%99,9** güven, **2 iş günü**, **5 yıllık** veri.
  - Hesap **3 aydan uzun olmayan** aralıklarla yenilenir.
- **Sabit katkı payı:** **50.000 TL**. Değişken katkı payı **dilimlerden** oluşur.
- *Garanti fonu risk değeri = Üyenin önceki ay ortalama teminatı × risk katsayısı*. Güncel risk katsayısı **%0,5**'tir ve **üç ayda bir** hesaplanır.

| Risk değeri | Toplam katkı payı |
|---|---|
| 0 – 50 bin TL | 50 bin TL |
| 50 – 60 bin TL | 60 bin TL |
| 60 – 70 bin TL | 70 bin TL |
| n. aralık | 50 bin + (n−1) × 10 bin TL |

- Yükümlülük **her ayın son iş günü** hesaplanır ve izleyen ayın ilk iş günü güncellenir. Çağrı **3 iş günü** içinde karşılanır.

### Kullanım esasları
- MKT Yönetmeliği md. 36'daki (d) bendine kadarki kaynaklar ve nakit katkı payları yetmezse, temerrüde düşmeyen üyelerin **nakit dışı** katkı payları **nakde çevrilir**. Önce **en likit** varlıktan başlanır.
- Temerrütten **sonra** katılan üyelerin ya da sonradan alınan riskler için yatırılan katkı payları **kullanılmaz**.
- Zarar kapanana kadar katkı payı **çekilemez**.
- Zarar üyelere **fondaki payları oranında** dağıtılır. Kullanılan katkı payları **3 iş günü** içinde yeniden yatırılır.
- Zararın fonun **%50'sini aşması** muhtemelse **ilave katkı payı** istenir ve **5 iş günü** içinde yatırılır.
- Bir ayda istenebilecek ilave katkı payı, o ayın **yatırılması gereken katkı payını** aşamaz.

> [!ezber]
> **Sabit garanti fonu payları:** Pay **200 bin** · BAP **700 bin** · Para Piyasası **50 bin** TL
> **Gün sonu çağrı son saati:** Pay ve Para Piyasası **15:00** · BAP **11:00** · **Gün içi** her yerde **2 saat**
`,
  sorular: [
    {
      s: "BAP'ta ilave işlem teminatı hesabına kabul edilen varlıklardan nakit Türk Lirası için grup limiti nedir?",
      c: ["En fazla %50", "En fazla %70", "En fazla %90", "En fazla %100", "Kabul edilmez"],
      d: 3,
      a: "Nakit TL için grup limiti **%100**'dür. Döviz, DİBS, Eurobond, kira sertifikaları ve VDMK/İTMK gibi varlıklar için limit **%70**'tir.",
      k: "1012 resmi not s. 104"
    },
    {
      s: "Takasbank'ın Borçlanma Araçları Piyasası'nda kullandığı teminatlandırma yöntemi hangisidir?",
      c: ["BISTECH Marjin Yöntemi (portföy bazlı)", "Nakit Akım Teminatlandırma (NAT)", "Brüt (pozisyon bazlı) teminatlandırma", "SPAN tarama riski yöntemi", "Sabit oranlı (yüzdesel) teminatlandırma"],
      d: 1,
      a: "BAP'ta **Nakit Akım Teminatlandırma (NAT)** yöntemi kullanılır: verim eğrilerine uygulanan stres senaryolarıyla net bugünkü değer değişimi ölçülür.",
      k: "1012 resmi not s. 105"
    },
    {
      s: "NAT yönteminde verim eğrisindeki bağımsız değişiklikleri ifade eden temel bileşenler arasında hangisi **yer almaz?**",
      c: ["Paralel kayma", "Eğimin değişmesi", "Eğrilik derecesinin değişmesi", "Kur değişimi", "Hepsi temel bileşendir"],
      d: 3,
      a: "Üç temel bileşen: **paralel kayma**, **eğimin değişmesi** ve **eğrilik derecesinin değişmesi**. Kur değişimi bir temel bileşen değildir.",
      k: "1012 resmi not s. 105"
    },
    {
      s: "BAP'ta gün sonu teminat tamamlama çağrısı yükümlülüğü tam iş gününde en geç ne zamana kadar yerine getirilmelidir?",
      c: ["Aynı gün 17:00", "Ertesi iş günü 10:00", "Ertesi iş günü 11:00", "Ertesi iş günü 15:00", "İki iş günü sonra 15:00"],
      d: 2,
      a: "BAP'ta gün sonu çağrısı **ertesi iş günü 11:00**'e (yarım günde 10:00) kadar karşılanmalıdır. Pay ve Para piyasalarında bu saat 15:00'tir.",
      k: "1012 resmi not s. 106"
    },
    {
      s: "BAP garanti fonunda üyelerin yatırması gereken sabit katkı payı tutarı ne kadardır?",
      c: ["50.000 TL", "200.000 TL", "500.000 TL", "700.000 TL", "1.000.000 TL"],
      d: 3,
      a: "BAP garanti fonunda sabit katkı payı **700.000 TL**'dir. Pay piyasasında 200.000 TL, Para Piyasası'nda 50.000 TL'dir.",
      k: "1012 resmi not s. 109"
    },
    {
      s: "BİAŞ Para Piyasası'nda borç alan üyenin teminatlandırması gereken tutar için hangisi doğrudur?",
      c: ["Yalnızca başlangıç teminatı", "Yalnızca borç alınan anapara tutarı", "Başlangıç teminatı ile anapara ve faiz", "Borç alan için teminat gerekmez", "Yalnızca vade sonunda ödenecek faiz"],
      d: 2,
      a: "Borç veren üyenin yükümlülüğü nakdi aktarana kadar başlangıç teminatıyla sınırlıdır. **Borç alan** üye ise başlangıç teminatına ek olarak **anapara ve faiz** tutarını teminatlandırır.",
      k: "1012 resmi not s. 110"
    },
    {
      s: "BİAŞ Para Piyasası'nda Takasbank'ın belirlediği teminat değerleme katsayısı, TCMB'nin aynı varlık için belirlediği katsayıdan yüksekse hangisi kullanılır?",
      c: ["Takasbank'ın katsayısı", "TCMB'nin katsayısı", "İkisinin ortalaması", "Sabit %90", "Borsa'nın belirlediği katsayı"],
      d: 1,
      a: "Takasbank'ın katsayısı TCMB'nin katsayısından **yüksekse TCMB'nin belirlediği katsayı** kullanılır.",
      k: "1012 resmi not s. 111"
    },
    {
      s: "BİAŞ Para Piyasası garanti fonunda, fona maledilecek zararın fon büyüklüğünün yüzde kaçını aşması muhtemel görüldüğünde üyelerden ilave katkı payı istenebilir?",
      c: ["%20", "%30", "%40", "%45", "%50"],
      d: 4,
      a: "Zararın fon büyüklüğünün **%50**'sini aşması muhtemelse üyelerden ilave katkı payı istenir; üyeler bunu **5 iş günü** içinde yatırır.",
      k: "1012 resmi not s. 113"
    }
  ]
});
