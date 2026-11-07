SPL.gun("1012", 9, {
  okuma: `
## Bugünün haritası
Pay piyasasının **teminat** tarafını bitirip **pay transferlerine** geçiyoruz.
1. **Değerleme katsayıları** ve **kompozisyon** limitleri
2. Teminatların **değerlenmesi**
3. Teminat **yatırma ve çekme** saatleri
4. **Nemalandırma**
5. Pay piyasası **garanti fonu**
6. Pay **transferleri:** serbest ve şartlı virman
7. Gün içi ve gün sonu **teminat tamamlama** çağrıları

---

## 1. Değerleme katsayıları ve kompozisyon
- Değerleme katsayıları **parametrik, parametrik olmayan ya da simülasyon** tabanlı yöntemlerle hesaplanır.
- Dikkate alınan unsurlar:
  - **kredi riski**,
  - **vade**,
  - olağanüstü koşullardaki **volatilite**,
  - **likidite**,
  - varsa **kur riski**.

| Parametre | Değer |
|---|---|
| Güven düzeyi | **%99,90** |
| Likidite etme süresi | **2 iş günü** |
| Tarihsel veri | **En az 1 yıl** |

- Verisi olmayan varlıklarda **benzer varlıkların** katsayısı esas alınır.
- **Kompozisyon:** başlangıç + değişim teminatı toplamının **en az %10'u Türk Lirası nakit** olmalıdır.
- **Grup limitleri** toplam yatırılmış teminat üzerinden hesaplanır.

> [!dikkat]
> Pay piyasasında **başlangıç teminatı** parametresi **%99,5** güven ve 2 gün elde tutma süresidir. **Değerleme katsayısı** ve **garanti fonu** hesabında ise güven düzeyi **%99,9**'dur.

---

## 2. Teminatların değerlenmesi
Teminatlar şu anlarda değerlenir:
- gün içindeki **risk hesaplama anlarında**,
- **yatırma ve çekme** işlemlerinde,
- **her gün sonunda**.

Teminat tamamlama çağrısının **kapatma son saatindeki** risk hesaplamasında **önceki gün sonu fiyatları** kullanılır.

| Varlık | Gün içi | Gün sonu |
|---|---|---|
| **Döviz** | Bankalararası piyasa kurları ortalaması (18:00 dahil) | TCMB'nin **15:30**'da ilan ettiği **döviz alış kuru** |
| **DİBS** ve Hazine VKŞ **kira sertifikaları** | BAP'ta oluşan fiyat; yoksa Takasbank teorik fiyatı | TCMB'nin **gösterge** günlük değerleri |
| **Eurobond**, İTMK, İDMK, VTMK, VDMK | Takasbank **verim eğrisiyle** teorik fiyat | Aynı |
| **BIST 100** payları | Hesaplama anından önceki **son işlem fiyatı** | **Seans sonu son işlem fiyatı** |
| **Yatırım fonları** | İhraççının açıkladığı fiyat, **izleyen iş günü** kullanılır | Aynı |
| **Standart altın** (BİAŞ KMTP) | KMTP'deki son işlem fiyatı | KMTP gün sonu **bülten fiyatı** |
| Borsada işlem gören **sertifikalar** | Son işlem fiyatı | Seans sonu son işlem fiyatı |

---

## 3. Yatırma ve çekme
- İşlemler **üye ekranlarından** ya da **yazılı talimatla** yapılır; teminat hesaplarına **doğrudan işlem yapılamaz**.
- Çekilen teminatlar için TL'de **EFT**, dövizde **SWIFT** saatleri bağlayıcıdır.

| Varlık | Yatırma (tam / yarım gün) | Çekme (tam / yarım gün) |
|---|---|---|
| **Nakit TL** | 19:00 / 12:45 | **15:40** / **11:40** |
| **Konvertibl döviz** (USD/EUR/GBP) | 19:00 / 12:45 | 19:00 / 12:45 |
| Nakit dışı diğer varlıklar | 19:00 / 12:45 | 19:00 / 12:45 |

- Bulunması **gereken** teminat çekilemez. **Teminat tamamlama yükümlülüğü olan** hesaptan teminat çekilemez.

---

## 4. Nemalandırma
- **Nakit TL** teminat ve garanti fonu katkı payları, zorunlu karşılık düşüldükten sonra **en iyi koşullarla** nemalandırılır.
  - Yöntemler: bankalara **depo/mevduat**, **repo**, organize **para piyasalarına** plasman.
- Esas alınan bakiye saat **15:40**'taki bakiyedir (yarım günde **11:40**). Sonra yatırılan TL nemalandırılmaz.
- Brüt nemadan **BSMV**, yasal maliyetler ve Kurulun uygun gördüğü **teminat takip ve nemalandırma ücreti** düşülür.
- **Olağandışı** koşullarda nemalandırma yapılmayabilir; o durumda **nema ödenmez**.
- Nema istemeyen üye bunu **yazılı** bildirir.

---

## 5. Pay piyasası garanti fonu
- **MKT üyeleri** için katılım **zorunludur**.
- Katkı payı = **yatırılmış** katkı payı + gerekirse **ilave** katkı payı.

### İlave katkı payı sınırları
- **1 Nisan – 31 Mart** dönemi içinde **en fazla dört kez** istenebilir.
- Bir seferde istenebilecek tutar, temerrüdün olduğu ay için hesaplanan **yatırılması gereken katkı payını** aşamaz.
- Toplamı **yatırılmış katkı payını geçemez**.

### Büyüklük
- Garanti fonu, **en büyük** açık pozisyonlu üyenin temerrüdü ile **ikinci ve üçüncü** büyük üyelerin **stres koşullarında birlikte** temerrüdünden doğacak kaynak ihtiyacının **büyük olanından az olamaz**.
- Stres hesabında güven düzeyi **%99,90**, elde tutma süresi **2 iş günüdür**.

### Katkı payının bileşenleri
| Bileşen | Hesaplama |
|---|---|
| **Sabit katkı payı** | Fon büyüklüğünün üye sayısına bölünmesiyle bulunan **ortalamayı geçmeyecek** düzeyde. Güncel tutar **200.000 TL**; **yılda en az bir kez** gözden geçirilir. |
| **Değişken katkı payı** | (Üyenin ortalama teminatı ÷ piyasanın ortalama teminatı) × asgari garanti fonu büyüklüğü |

- Üyenin yatırılmış katkı payı **sabit katkı payından az olamaz**.
- Yükümlülük **her ayın ilk iş günü** hesaplanır, **izleyen iş günü** güncellenir. Tutar, güncellemeyi izleyen iş günü **15:00**'e kadar (yarım günde **11:00**) yatırılır.

---

## 6. Pay transferleri

### Serbest virman
- **Kaydi serbest virman:**
  - Fon ve ortaklık hesapları, MKK'da **Takasbank üyesi altında müşteri hesabı** niteliğindedir.
  - Virmanı fon/ortaklık **Takas Ekranları**'ndan yapar.
  - Borç kayıtları **otomatik** oluşur ve **netleştirilmez** (toplam satış kadar).
  - **Kısmi** virman yapılabilir. Borç kaydı **dışında** virman ise **Takasbank onayıyla** yapılır.
- **Fiziki serbest virman:** **Borsada işlem görmeyen** menkul kıymetler Takasbank'ta saklanır ve kurumların müşteri hesapları arasında aktarılır.

### Şartlı virman
- Aracı kurumlara müşteri hesapları arasında **eşanlı kıymet ve nakit** transferi sağlar.
- **Normal** ya da **parçalı** yapılabilir.
- Farklı üyelerle alacak ve yükümlülükler birbirine bağlanarak **zincir** oluşturulabilir.
- **İleri valörlü** talimat girilebilir: girildiği tarihte **eşleşir**, valör tarihinde borçlar kapanınca **gerçekleşir**.

---

## 7. Teminat tamamlama çağrıları

| | **Gün içi** | **Gün sonu** |
|---|---|---|
| Ne zaman? | Teminat oranı ya da nakit açığı Takasbank kriterini **aşarsa** | Teminat gerekenin **altına düşerse** ya da **TL teminat açığı** varsa, **her iş günü sonunda** |
| Süre | **2 saat** | **Ertesi iş günü 15:00** |
| Karşılanmazsa | **Temerrüt** | **Temerrüt** |

- **TL konsantrasyon sınırı** aşımından doğan çağrılar **nakit** karşılanır.
- Çağrıdan çıkış yolları: takasın gerçekleşmesi, **teminat yatırmak** ya da **riski azaltan** işlem yapmak.
- Ertesi gün herhangi bir risk hesaplama anında **açığı olmayan** hesap yükümlülüğü sona erdirmiş sayılır.

### Formüller
- *Başlangıç teminatı = Tarama riski + Vadeler arası risk teminatı − Ürün grupları arası risk teminatı + Netleştirme etkisi*
- *Değişim teminatı = Pozisyon sayısı × (Cari fiyat − Takas fiyatı)*
- *Toplam teminat gereksinimi = Başlangıç teminatı + Değişim teminatı*

> [!ezber]
> **Nakit TL** en az **%10** · **Çekme** 15:40 · **Nema** 15:40 bakiyesi · **Gün içi çağrı** 2 saat · **Gün sonu çağrı** ertesi gün 15:00
> **Garanti fonu:** sabit pay 200.000 TL · ilave pay yılda en fazla 4 kez, toplamı yatırılmış payı aşamaz
`,
  sorular: [
    {
      s: "Pay piyasasında teminat değerleme katsayılarının hesaplanmasında kullanılan istatistiksel güven düzeyi ve likidite etme süresi nedir?",
      c: ["%99,90 ve 2 iş günü", "%99 ve 1 iş günü", "%99,50 ve 2 iş günü", "%95 ve 5 iş günü", "%99,90 ve 10 iş günü"],
      d: 0,
      a: "Değerleme katsayılarında güven düzeyi **%99,90**, likidite etme süresi **2 iş günüdür**; tarihsel veri en az 1 yıl olmalıdır.",
      k: "1012 resmi not s. 78"
    },
    {
      s: "Pay piyasasında başlangıç ve değişim teminatı toplamının en az yüzde kaçının Türk Lirası nakit teminattan oluşması gerekir?",
      c: ["%5", "%10", "%25", "%50", "%100"],
      d: 1,
      a: "Pay piyasasında başlangıç ve değişim teminatı toplamının **en az %10**'u Türk Lirası nakit olmalıdır.",
      k: "1012 resmi not s. 79"
    },
    {
      s: "Pay piyasasında teminat olarak verilen dövizin gün sonu risk hesaplamasında hangi kur kullanılır?",
      c: ["Bankalararası piyasa kurları ortalaması", "TCMB'nin 15:30'da ilan ettiği döviz alış kuru", "TCMB efektif satış kuru", "Serbest piyasa kuru", "Önceki günün kapanış kuru"],
      d: 1,
      a: "Gün içinde bankalararası piyasa kurları ortalaması, **gün sonu** risk hesaplamasında ise TCMB'nin **15:30**'da yayımladığı **döviz alış kuru** kullanılır.",
      k: "1012 resmi not s. 80"
    },
    {
      s: "Pay piyasasında nakit Türk Lirası işlem teminatının tam iş günündeki çekme son saati kaçtır?",
      c: ["15:40", "16:45", "17:30", "18:00", "19:00"],
      d: 0,
      a: "Nakit TL teminat tam günde **15:40**'a kadar (yarım günde 11:40) çekilebilir. Yatırma son saati ise 19:00'dur.",
      k: "1012 resmi not s. 81"
    },
    {
      s: "Pay piyasasında Takasbank'tan bir yıllık dönem içinde MKT üyelerinden en fazla kaç kez ilave garanti fonu katkı payı yatırması istenebilir?",
      c: ["1", "2", "3", "4", "Sınırsız"],
      d: 3,
      a: "1 Nisan – 31 Mart dönemi içinde üyelerden **en fazla dört kez** ilave katkı payı istenebilir; toplamı yatırılmış katkı payını aşamaz.",
      k: "1012 resmi not s. 82"
    },
    {
      s: "Pay piyasası garanti fonunda üyelerin yatırması gereken sabit katkı payı tutarı ne kadardır?",
      c: ["200.000 TL", "300.000 TL", "500.000 TL", "700.000 TL", "1.000.000 TL"],
      d: 0,
      a: "Sabit katkı payı tutarı **200.000 TL**'dir ve yılda en az bir kez gözden geçirilir. Üyenin yatırılmış katkı payı sabit katkı payından az olamaz.",
      k: "1012 resmi not s. 82"
    },
    {
      s: "Pay piyasasında yapılan gün içi teminat tamamlama çağrısına ilişkin yükümlülükler hangi süre içinde yerine getirilmelidir?",
      c: ["30 dakika", "1 saat", "2 saat", "Aynı gün 17:30'a kadar", "Ertesi iş günü 15:00'e kadar"],
      d: 2,
      a: "Gün içi teminat tamamlama çağrısı **iki saat** içinde karşılanmalıdır. Gün sonu çağrısı ise ertesi iş günü 15:00'e kadar karşılanır.",
      k: "1012 resmi not s. 77"
    },
    {
      s: "Şartlı virman sistemiyle ilgili hangisi **yanlıştır?**",
      c: ["Müşteri hesapları arasında eşanlı kıymet ve nakit transferi sağlar.", "Normal ve parçalı olarak gerçekleşebilir.", "Zincir oluşturulabilir.", "İleri valörlü talimat girilemez.", "İleri valörlü talimatlar girildikleri tarihte eşleşir."],
      d: 3,
      a: "Şartlı virmanda **ileri valörlü talimat girilebilir**; bu talimatlar girildikleri tarihte eşleşir, valör tarihinde borçlar kapanınca gerçekleşir.",
      k: "1012 resmi not s. 83"
    }
  ]
});
