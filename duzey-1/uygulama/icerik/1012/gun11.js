SPL.gun("1012", 11, {
  okuma: `
## Bugünün haritası
Borçlanma araçları takasına devam ediyoruz.
1. **Nakit alacakların** dağıtımı
2. **Kıymet borçlarının** kapatılması ve **kıymet alacaklarının** dağıtımı
3. **EMKT mesajları** ve transfer saatleri
4. **BİAŞ Para Piyasası** takası
5. **Takas kesinliği**
6. BAP ve Para Piyasası'nda **temerrüt** ve temerrüt faizi
7. BAP **risk yönetiminin** üç katmanı

---

## 1. Nakit alacaklar
- Nakit alacak için önce **menkul kıymet yükümlülüğü** yerine getirilmiş olmalıdır.
- Kapanan nakitler alacaklı üyenin **XXXX-11** (TL) ve **11YP** (döviz) **serbest cari** hesaplarına aktarılır.
- **Bankaların** nakit alacakları, **talimat gerekmeden** TCMB'deki **TIC** hesaplarına aktarılır.
- Talimat durumları Takasbank ekranlarında (**XCSD**) ve üye ekranlarında (**CO/CW2**) güncellenir.

---

## 2. Kıymet takası

### Kıymet borçlarının kapatılması
- **Netleştirme sırasında** sistem borcu **otomatik** kapatır. Depo bakiyesi yetmezse **mevcut kısım** kadar kapatılır.
- Kalan borç için bakiye oluşturma yolları:
  - **EMKT** mesajıyla **TCMB**'deki hesaptan devir,
  - EMKT ile **MKK**'daki hesaptan devir (müşterilere ait DİBS'ler),
  - **Başka bir üyenin** Takasbank hesabından virman,
  - Üyenin kendi **başka depo** hesabından virman (tek aşamalı, erişim numarası gerekmez),
  - **ÖSBA**'lar için MKK'daki alt hesaptan, Takasbank'ın **Özel Sektör Tahvili Takas Havuz (OTH)** hesabına **otomatik** aktarım.
- Kalan kıymet borçları BISTECH Entegrasyon menüsünden **16:45**'e kadar kapatılır.

### Virman türleri
| Tür | Anlamı |
|---|---|
| **Serbest virman** | Çıkış yetkisi olan bir depo hesabından başka bir kurumun hesabına kıymet aktarımı |
| **Şartlı virman** | Üyelerin **borsa dışında kendi aralarında** yaptıkları alım-satımlarda kıymet ve nakdin **teslim karşılığı ödeme** ile **eşanlı** transferi. Kıymette **501** (Takasbank) ve **501K** (MKK, kaydi) serbest depo, nakitte **serbest cari** hesap kullanılır. |
| **BES / yatırım fonu virmanı** | Borç kayıtları **otomatik** oluşur; **kısmi** virman yapılabilir. Borç kaydı dışında virman **Takasbank onayıyla** yapılır. |

- BAP'ta saat **14:00'ten sonra** yapılan aynı gün valörlü işlemler organize piyasa takasına **dahil edilmez**; bunlar için **ayrı borç kaydı** oluşturulur.
- Fon adına repo işleminde otomatik virman kaydı için **repocu üyenin** kıymet bildirimini yapması gerekir.

### Kıymet alacaklarının dağıtımı
- Önce diğer yükümlülüklerin yerine getirilmiş olması gerekir (**teslim karşılığı ödeme**).
- Üye, aldığı kıymetleri:
  - bir bankanın **TCMB** hesabına gönderebilir,
  - kendi depoları arasında aktarabilir (**21:30**'a kadar),
  - başka bir üyeye virmanlayabilir.
- **ÖSBA** alacakları otomatik olarak üyenin **MKK'daki müşteri alt hesabına** ya da KYK'nın Takasbank (**TVS**) altındaki hesabına aktarılır.

---

## 3. EMKT mesajları ve saatler

| Mesaj | Ne için? |
|---|---|
| **D06** (AKTR-ISTE) | **Ödemesiz** kıymet aktarımı (nakit karşılığı yok) |
| **D01** (SATS / REPO / REDN-ISTE) | **Ödeme karşılığı teslim** (B84, ÖKT) |

- Bir banka D06 ile TCMB'deki hesabından gönderir. Kıymet Takasbank'ın TCMB'deki **007** nolu Müşteri İşlemleri Depo hesabına gelir ve üyenin **501** Serbest Depo hesabı artar.
- Aracı kurumlar EMKT mesajlarını **TETS** üzerinden gönderir.
- **TCMB'ye devir** için talimatı veren üyenin hesabında **en geç 17:15**'te yeterli bakiye olmalıdır. 17:15'ten sonra devir mesajı gönderilemez (geç takas hali hariç).
- **Bankalar** kıymetlerini 17:15'e kadar **kendi** TCMB ya da MKK hesaplarına aktarabilir; **başka bir bankanın** TCMB hesabına **aktaramaz**.

---

## 4. BİAŞ Para Piyasası takası
- Takasbank **MKT**'dir.
- Risk ve teminat iki katmanda yönetilir:
  - **U** (portföy),
  - **D** (kamu fonları, KYK'lar, müşteriler).
- Teminat olarak **DİBS ve döviz** kabul edilir. **İşlem öncesi ve sonrası** risk yönetimi yapılır.
- Tüm işlemler **T+0** takas edilir. **Teminat eksiği** takas günü **15:00**'e kadar tamamlanır.
- **Netleştirme** iki risk grubunda yapılır:
  - **Üye** grubu (portföy işlemleri),
  - **Müşteri** grubu (müşteri, KYK ve kamu fonları).
  - Borçlanılan, borç verilen ve geri dönüş tutarları dikkate alınır.
- Ödemeler bu piyasaya özel **TLBBK** borç kapatma hesabına yapılır.
- Havuz yetersizse alacaklar **oransal** dağıtılır.
- İki grupta da borç varsa kısmi ödeme **önce Müşteri** grubunun borcuna gider.
- Alacaklar **11** nolu serbest cari hesaba dağıtılır.

---

## 5. Takas kesinliği
1. Takas talimat ve işlemleri ile ödemeler, üyenin durdurulması ya da **tasfiyesi** dahil **geri alınamaz ve iptal edilemez**.
2. Teminat gösterilen varlıklar üzerinde üçüncü kişilerin **istihkak ya da sınırlı ayni hak** iddiaları merkezi takas kuruluşuna karşı **ileri sürülemez**.
3. Merkezi takas kuruluşunun teminatlar üzerindeki hak ve yetkileri **hiçbir şekilde sınırlandırılamaz**.

---

## 6. Temerrüt

### BAP'ta temerrüt anı
- **EFT** ile ödemede paranın Takasbank'ın **TIC** hesabına geçiş saati esas alınır.
- **Virmanda** işlemin yapıldığı saat esas alınır.
- **Kıymette** borç kapatma programının çalıştırıldığı saat esas alınır.

### BAP temerrüt faizi katsayıları

| Yükümlülük | Saat | Katsayı |
|---|---|---|
| Nakit/kıymet (TL, USD, EUR) | **16:46–17:00** | **0,25** |
| | **17:01–18:45** | **0,50** |
| | **18:46'dan sonra** (aynı gün) | **3** |
| | **Valör tarihinden sonra** | **3** |
| Repo kıymet bildirimi | **15:00 ve sonrası** | **0,05** |
| Teminat ve garanti fonu yatırma | **11:00–19:00** | **0,25** |
| | İzleyen günlerde | **3** |

*Ön temerrüt faizi = Matrah × (Faiz/100 × Katsayı) × (Gün/365)*
- Kıymette **matrah = nominal × fiyat/100**.

### Örnek
5.000.000 TL nominal DİBS borcu **16:48**'de kapatıldı. Ağırlıklı ortalama fiyat 90,788, baz faiz %44.
- Matrah = 5.000.000 × 0,90788 = **4.539.400 TL**
- Faiz = 4.539.400 × (0,44 × **0,25**) × 1/365 ≈ **1.368,04 TL**

### Diğer kurallar
- **T+1** günü borcunu kapatamayan üye adına Borsa'da **temerrüt pazarı (buy-in market)** açılarak **re'sen** alım ya da satım yapılır.
- **Ertesi gün valörüyle** yerine getirilen yükümlülüklerde **alt ve üst sınır uygulanmaz**.
- Cezalar **3 iş günü** içinde ödenir. İtirazları Takasbank'taki **temerrüt komitesi** karara bağlar.
- **Mağduriyet ödemesi:** alacaklıya repo, Takasbank Para Piyasası ya da TCMB interbank gecelik oranlarının en yükseği üzerinden ödeme yapılır. Şartlar pay piyasasıyla aynıdır: sistem kaynaklı olmamalı, ceza tahsil edilmiş olmalı, alacaklı kendi yükümlülüğünü yerine getirmiş olmalı.

### BİAŞ Para Piyasası temerrüdü
- **Teminat temerrüdünde** fon arz eden üyenin işlemi **gerçekleştirilir**.
  - Teminat tamamen gelirse işlem aynı gün gerçekleşmiş sayılır; kısmi gelirse o kadarı gerçekleşir.
  - Süre sonunda çözülmezse eksik kısım **başlangıç teminatı ve garanti fonundan** karşılanır. Gerekirse Takasbank **ters işlem** yapar ya da işlem **iptal** sayılır.
- **Nakit temerrüdünde** Takasbank en iyi gayretle fon temin eder. Temin edilemeyen tutar için işlem **iptal** sayılır. Alacaklıya, gecikilen süre için tahsil edilen faizin **2/3**'ü kadar mağduriyet ödemesi yapılır.
- **Temerrüt faizi katsayıları:**

| Yükümlülük | Saat | Katsayı |
|---|---|---|
| Nakit takas | **16:45 ve sonrası** (aynı gün) | **0,50** |
| | Valör tarihinden sonra | **2** |
| Teminat / garanti fonu | **15:00'ten sonra** (aynı gün) | **0,50** |
| | Valör tarihinden sonra | **2** |

- Faiz **takvim günleriyle** hesaplanır. Aynı gün yerine getirilen yükümlülükte **1 gün** sayılır.
- **Alt ve üst sınır** uygulanır ve Hazinenin **yeniden değerleme oranı** dikkate alınarak belirlenir. **Aynı gün** yerine getirilmeyen yükümlülüklerde **üst sınır uygulanmaz**.
- Faiz **1 iş günü** içinde ödenir; ödenmezse ertesi gün serbest cari hesaptan **re'sen** alınır.

---

## 7. BAP risk yönetimi: üç katman

| Katman | Ne yapılır? |
|---|---|
| **İşlem öncesi** | Emirlerin işleme dönüşme ihtimaline göre **teminat yeterliliği** kontrolü (**PTRM** ara yüzü). Açığı olan hesaptan **pozisyon artırıcı emir** engellenebilir. |
| **İşlem anı** | Emir işleme dönüştüğü anda teminat kontrolü. Hesaplama yalnızca **pozisyonu değişen** hesaplar için yapılır. |
| **İşlem sonrası** | **Her saat başında**, her hesap için **portföy bazlı** "bulunması gereken teminat" hesaplanır. Risk limiti ve teminat çağrıları bu katmana göre yapılır. |

- İşlem öncesi ve anı parametreleri **en az 1 yıllık** veri ve **%99,50** güven düzeyiyle belirlenir ve **üç ayda bir** gözden geçirilir.
- Geçici hesaplama nedeniyle oluşan blokaj ya da emir iptallerinden **Takasbank sorumlu tutulamaz**.
- MKT olunmayan pazarlarda da **aynı yöntem ve parametreler** kullanılır.

> [!ezber]
> **BAP katsayıları:** 16:46–17:00 **0,25** · 17:01–18:45 **0,50** · sonrası **3** · **T+1**'de buy-in
> **Para Piyasası:** T+0 · teminat eksiği **15:00** · faiz 1 iş günü içinde ödenir · kısmi ödeme önce **Müşteri** grubuna
`,
  sorular: [
    {
      s: "Fon aktarımı gerektirmeyen (ödemesiz) menkul kıymet devri için kullanılan EMKT mesajı hangisidir?",
      c: ["D01", "D06", "B84", "TIC", "SWIFT MT103"],
      d: 1,
      a: "**D06 (AKTR-ISTE)** ödemesiz kıymet aktarımı içindir. Ödeme karşılığı teslim (B84) işlemlerinde **D01** mesajı kullanılır.",
      k: "1012 resmi not s. 96, 98"
    },
    {
      s: "Üyelerin Borsa İstanbul Borçlanma Araçları Piyasası dışında kendi aralarında yaptıkları alım-satımlarda nakit ve kıymetin teslim karşılığı ödeme prensibiyle eşanlı transferini sağlayan işlem hangisidir?",
      c: ["Serbest virman", "Şartlı virman", "Depolararası virman", "Zincirleme repo", "Mahsup"],
      d: 1,
      a: "**Şartlı virman**, borsa dışındaki işlemlerde nakit ve kıymetin **eşanlı** ve **teslim karşılığı ödeme** ile transferini sağlar; karşı taraf riski üstlenilmez.",
      k: "1012 resmi not s. 97"
    },
    {
      s: "Takasbank'tan TCMB nezdindeki bir hesaba menkul kıymet devri talimatlarının işleme konulabilmesi için, talimatı gönderen üyenin hesabında en geç saat kaçta yeterli bakiye bulunmalıdır?",
      c: ["14:00", "15:40", "16:45", "17:15", "21:30"],
      d: 3,
      a: "TCMB'ye devir talimatları için en geç **17:15**'te yeterli bakiye bulunmalıdır; bu saatten sonra (geç takas hali dışında) devir mesajı gönderilemez.",
      k: "1012 resmi not s. 98"
    },
    {
      s: "Borsa İstanbul Para Piyasası'nda bir üyenin hem Üye hem Müşteri risk grubunda borcu varsa, kısmi olarak ödenen tutarlar öncelikle hangi borcu kapatmak için kullanılır?",
      c: ["Üye (portföy) risk grubu borcu", "Müşteri risk grubu borcu", "İki grup arasında eşit olarak", "En eski tarihli borç", "Takasbank'ın belirleyeceği oranda"],
      d: 1,
      a: "Kısmi ödemeler öncelikle kolektif yatırım kuruluşları ve kamu fonlarını da içeren **Müşteri** risk grubunun borcunu kapatmak için kullanılır.",
      k: "1012 resmi not s. 99"
    },
    {
      s: "Takas kesinliği ilkesiyle ilgili hangisi **yanlıştır?**",
      c: ["Takas talimat ve işlemleri tasfiye halinde bile geri alınamaz.", "Teminat varlıkları üzerinde üçüncü kişilerin istihkak iddiaları merkezi takas kuruluşuna karşı ileri sürülemez.", "Merkezi takas kuruluşunun teminatlar üzerindeki hakları sınırlandırılamaz.", "Üyenin faaliyetleri durdurulursa takas işlemleri iptal edilebilir.", "Ödeme işlemleri iptal edilemez."],
      d: 3,
      a: "Takas kesinliği gereği takas talimat ve işlemleri, üyenin faaliyetlerinin **durdurulması** ya da tasfiyeye başlanması dahil **geri alınamaz ve iptal edilemez**.",
      k: "1012 resmi not s. 99"
    },
    {
      s: "Borçlanma Araçları Piyasası'nda nakit takas yükümlülüğünü aynı gün saat 16:50'de yerine getiren üyeye uygulanacak temerrüt faizi katsayısı nedir?",
      c: ["0,05", "0,25", "0,50", "2", "3"],
      d: 1,
      a: "BAP'ta katsayılar: **16:46–17:00 arası 0,25**, 17:01–18:45 arası 0,50, 18:46'dan sonra ve valör tarihinden sonra 3.",
      k: "1012 resmi not s. 100"
    },
    {
      s: "Borçlanma Araçları Piyasası'nda kıymet veya nakit borcunu T+1 günü de kapatamayan üye için ne yapılır?",
      c: ["Üyenin piyasa üyeliği derhal iptal edilir ve işlemleri durdurulur.", "Temerrüde konu işlem karşı tarafın onayıyla iptal edilir.", "Temerrüt pazarında aynı gün valörlü alım veya satımla re'sen borç kapatılır.", "Borç bir sonraki aya devredilir ve faiziyle tahsil edilir.", "Garanti fonundan doğrudan ödeme yapılır ve üye takip edilmez."],
      d: 2,
      a: "T+1 günü borcunu kapatamayan üye adına Borsa İstanbul'da **temerrüt pazarı (buy-in market)** açılarak aynı gün valörlü alım ya da satımla **re'sen** borç kapatılır.",
      k: "1012 resmi not s. 100"
    },
    {
      s: "Borçlanma Araçları Piyasası'nda işlem sonrası risk yönetimi katmanında \"bulunması gereken teminat\" ne sıklıkla hesaplanır?",
      c: ["Günde bir kez, gün sonunda", "Her saat başında", "Her işlem anında", "Haftada bir", "Teminat çağrısı yapıldığında"],
      d: 1,
      a: "İşlem sonrası risk yönetiminde **her saat başında**, her hesap için portföy bazlı yöntemle bulunması gereken teminat hesaplanır.",
      k: "1012 resmi not s. 103"
    }
  ]
});
