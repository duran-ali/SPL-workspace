SPL.gun("1012", 10, {
  okuma: `
## Bugünün haritası
Bugün **Borçlanma Araçları Piyasası (BAP)** takasına başlıyoruz.
1. **ISIN kodları:** DİBS ve özel sektör borçlanma araçları
2. Takasbank'taki **depo hesapları**
3. BAP **pazarları**
4. BAP **takas prensipleri** ve **netleştirme örneği**
5. **Takas süresi** ve **nakit takası**

---

## 1. ISIN kodları
ISIN (International Securities Identification Number) **12 hanelidir**.

### DİBS ve kamu borçlanma araçları
| Hane | Anlamı |
|---|---|
| **1–2** | Ülke kodu (TR) |
| **3** | Menkul kıymet türü |
| **4–9** | **İtfa tarihi** (GGAAYY) |
| **10** | Tüm / anapara / kupon (para birimine göre) |
| **11** | İhraç numarası |
| **12** | Kontrol hanesi |

**3. hane (tür):**

| Kod | Tür |
|---|---|
| **T** | Devlet tahvili |
| **B** | Hazine bonosu |
| **H** | Halka arz |
| **G** | Gelir ortaklığı senedi, KOI |
| **S** | Özel sektör tahvili |
| **M** | Likidite senetleri |
| **Q** | Banka bonosu |
| **F** | Finansman bonosu |
| **D** | Kira sertifikası |
| **P** | Varlık teminatlı / varlığa dayalı menkul kıymet |

**10. hane:**

| | **TL** | **Döviz** |
|---|---|---|
| Tüm kıymet | **T** | **F** |
| Anapara | **A** | **P** |
| Kupon | **K** | **C** |

- **Örnek:** **TRB280815T16**: 28/08/2015 itfalı **hazine bonosu**, kıymetin tamamı.
- **Örnek:** **TRT150515K13**: 15/05/2015 itfalı ayrıştırılabilir devlet tahvilinin **kuponu**.

### Özel sektör borçlanma araçları
| Hane | Anlamı |
|---|---|
| **4–7** | **İhraççı şirket kodu** |
| **8** | İtfa **ayı**: 1–9 (Ocak–Eylül), **E** (Ekim), **K** (Kasım), **A** (Aralık) |
| **9–10** | İtfa **yılı** |
| **11** | İhraç numarası (1–9, sonra A–Z) |
| **12** | Kontrol hanesi |

- **Örnek:** **TRSALTNE1511**: Altınyıldız (ALTN), **Ekim** 2015 itfalı özel sektör tahvili.

> [!bilgi]
> 2017'deki Tebliğ değişikliğiyle "banka bonosu" tanımı kaldırıldı. **1 Haziran 2017**'den itibaren tüm kısa vadeli borçlanma araçları **finansman bonosu (TRF...)** olarak üretiliyor. Eski banka bonolarının **TRQ...** kodları değişmedi.

---

## 2. Depo hesapları
DİBS ve ÖSBA'lar Takasbank'ta **depo bazında** izlenir. Depo hesapları şu amaçlarla açılır:
- **BAP kıymet takası**,
- **Hazine ve TCMB**'nin iç ve dış borçlanma araçlarının **saklanması**,
- BİAŞ piyasalarının, Takasbank piyasalarının ve tezgâhüstü piyasaların **DİBS/ÖSBA teminatlarının** saklanması,
- **SPK, BDDK** gibi kurumlar adına alınan teminatların saklanması,
- Takasbank'ın saklama hizmeti verdiği diğer kuruluşlar.

---

## 3. BAP pazarları

| Pazar | Ne işlem görür / özellik | Valör |
|---|---|---|
| **Kesin Alım Satım** | TL ve döviz ödemeli borçlanma araçları, kira sertifikaları, **TCMB likidite senetleri** | DİBS'te **90 güne**, diğerlerinde **30 güne** kadar ileri valör |
| **Nitelikli Yatırımcıya İhraç** | Nitelikli yatırımcılara **ihraç (satış)**. İhraç bitince **izleyen iş günü** Kesin Alım Satım Pazarı'nda nitelikliler arasında **kot dışı** işlem görür. | — |
| **Repo–Ters Repo** | SPK'dan **repo yetki belgesi** almış üyeler | **7 güne** kadar ileri başlangıç; bitiş en fazla **1 yıl** |
| **Menkul Kıymet Tercihli Repo** | **Belirli bir kıymet** üzerinde repo; oranın yanında **fiyat** da belirtilir | En fazla 7 gün ileri başlangıç; bitiş en fazla 1 yıl |
| **Taahhütlü İşlemler** | Hazinenin ve kamu sermayeli kurumların VKŞ'lerinin **TL kira sertifikaları** | 7 güne kadar ileri başlangıç; bitiş en fazla 1 yıl |
| **Pay Senedi Repo** | **BIST 50** paylarından uygun görülenler | **2 iş gününe** kadar ileri başlangıç; bitiş en fazla 1 yıl |
| **Uluslararası Tahvil** | Hazinenin **Eurotahvilleri**; çoklu fiyat–sürekli müzayede, aynı döviz ve **100 birim** üzerinden fiyat | **T+1 – T+15** |
| **Gözaltı** | Kotasyon düzenlemeleri nedeniyle Kesin Alım Satım'dan alınan araçlar | Kesin Alım Satım kuralları |

### Kesin Alım Satım'da borç ve alacak
- **Satan** üye **piyasa değeri kadar nakit alacaklı**, **nominal değer kadar kıymet borçlu** olur.
- **Alan** üye piyasa değeri kadar **nakit borçlu**, nominal kadar **kıymet alacaklı** olur.
- **Örnek:** X, Y'den 10 TL nominal tahvili 8,50 TL'ye aldı. X **8,50 TL borçlu, 10 nominal alacaklı**; Y **10 nominal borçlu, 8,50 TL alacaklı** olur.

### Repo ayrıntıları
- **Repo:** geri **alma** taahhüdüyle **satış**. **Ters repo:** geri **satma** taahhüdüyle **alış**.
- Teslim edilecek kıymetin **itfa ve kupon tarihleri**, işlemin **bitiş valöründen sonra** olmalıdır.
- Yükümlülük **en çok beş farklı** kıymetle yerine getirilebilir.
- **Zincirleme repo:**
  - Ters repoyla alınıp **1101** nolu hesapta bloke tutulan kıymet, başka bir repo işleminde kullanılabilir.
  - İkinci reponun vadesi, birincinin vadesinden **en az bir gün önce** olmalıdır.

### Para ve swap piyasaları
- **BİAŞ Para Piyasası:**
  - Yetkili **banka ve aracı kurumlar** ile **Takasbank**, TL'de **teminatlı** borç alıp verir.
  - **Aynı gün** ya da **1 iş günü** ileri başlangıç valörlü işlem yapılır; bitiş valörü **serbesttir**.
  - Takasbank **MKT**'dir.
- **BİAŞ Swap Piyasası:**
  - **Para Swap Pazarı:** TL ile USD/EUR değişimi.
  - **Kıymetli Madenler Swap Pazarı:** kıymetli maden ile TL/USD/EUR değişimi.
  - Aracı kurumlar, bankalar ve **TCMB** işlem yapar. **Aracı kurumlar yalnızca Kıymetli Madenler Swap Pazarı**'nda işlem yapabilir.
  - Aynı gün ya da 1 iş günü ileri başlangıç; başlangıç ile bitiş arası **en fazla 365 gün**.
  - Takasbank **MKT**'dir.

---

## 4. BAP takas prensipleri
Prensipler üçtür: **netleştirme, teslim karşılığı ödeme, kaydi takas**.

### Netleştirme
- Müşteri/portföy ayrımıyla **çok taraflı netleştirme** yapılır; **valör günü** esas alınır. Temerrüt dışında **günler arası netleştirme yapılmaz**.
- **Taahhütlü İşlemler** ve **Uluslararası Tahvil** pazarlarında netleştirme **yapılmaz**; takas **işlem bazındadır**.
- Ters repoyla alınan kıymetler (zincirleme hariç) **1101** nolu **Borsa İçi Ters Repo Teminat Deposu**'nda **Valör 2**'ye kadar **bloke** tutulur ve **netleştirmeye dahil edilmez**.
- **MKT olunan** pazarlar ile **MKT olunmayan (NCCP)** pazarlar **ayrı ayrı** netleştirilir.

### Netleştirme örneği
X üyesinin iki işlemi var:
- **Kesin Alım Satım:** 10 nominal kıymet **alacaklı**, 8,50 TL **borçlu**.
- **Repo:** 75 nominal kıymet **borçlu**, 60 TL **alacaklı**.

Netleştirme sonrası X:
- **Nakit:** 60 − 8,50 = **51,50 TL alacaklı**
- **Kıymet:** 75 − 10 = **65 nominal borçlu**

Karşı taraf Y'nin ters repoyla aldığı 75 nominal kıymet ise **1101 deposunda** bloke kalır ve netleşmez.

### Fon ve ortaklık işlemleri
- **Yatırım fonları ve ortaklıkları** Borsa'da işlem yapmaya yetkili değildir. Takas işlemlerinden **işlemi gerçekleştiren üye sorumludur**.
- Ters repoyla alınıp 1101'de bloke tutulan kıymetler ise **otomatik** olarak fonun hesabına aktarılır.

### Teslim karşılığı ödeme ve kaydi takas
- Yükümlülüğünü yerine getirmeyen üye **alacağını alamaz**; **kısmi mutabakat** mümkündür.
- Borçlar **hesaben** ödenir.

---

## 5. Takas süresi ve nakit takası

| İşlem | Takas |
|---|---|
| BAP'taki **TL** işlemler | **Aynı gün (T+0)** |
| **Yabancı para** ödemeli kıymetler | **T+1** |
| İleri valörlü işlemler | **Valör günü** |

- Temerrütsüz **son borç kapatma saati 16:45**'tir.
- **Nakit borç hesapları:** XXXX-33-1, 33NTL-1, 33YP, 33NYP, **90-1**, **SKKR-1**.

### Nakit borcu ödeme yolları
- **EFT:**
  - **Banka** üye, TCMB'deki **TIC** hesabından Takasbank'ın TIC hesabına aktarır.
  - **Aracı kurum**, EFT üyesi bir banka aracılığıyla öder.
- Takasbank'taki başka bir hesaptan **virman** (kendi hesabından ya da başka üyeden),
- **Pay Piyasası** veya **Takasbank Para Piyasası** alacaklarının **mahsubu**.

### Kıymet borcu ödeme yolları
- **EMKT** mesajıyla TCMB/MKK'daki hesaptan devir,
- Başka üyenin ya da kendi başka **depo** hesabından virman,
- **ÖSBA**'lar için **MKK**'daki hesaptan virman.

- Borçlar kapandıkça çalışan **gerçekleme prosesi (batch)** ile takas tamamlanır.

> [!ezber]
> **BAP takası T+0** (döviz T+1) · **son saat 16:45** · **1101 deposu** = ters repo kıymetleri, netleşmez
> **Taahhütlü İşlemler** ve **Uluslararası Tahvil**: netleştirme yok · ISIN **3. hane** türü, **10. hane** tüm/anapara/kupon
`,
  sorular: [
    {
      s: "Devlet iç borçlanma senetlerine ait ISIN kodunda 3. hanede yer alan \"B\" harfi neyi ifade eder?",
      c: ["Banka bonosu", "Hazine bonosu", "Borçlanma aracı", "Borsa yatırım fonu", "Bono türü kira sertifikası"],
      d: 1,
      a: "ISIN kodunda 3. hane türü gösterir: **T** devlet tahvili, **B hazine bonosu**, H halka arz, S özel sektör tahvili, **Q banka bonosu**, F finansman bonosu, D kira sertifikası.",
      k: "1012 resmi not s. 88"
    },
    {
      s: "DİBS ISIN kodunun 10. hanesinde yer alan \"K\" harfi neyi gösterir?",
      c: ["Kıymetin tamamını (TL)", "Anaparayı (TL)", "Kuponu (TL)", "Kuponu (döviz)", "Kira sertifikasını"],
      d: 2,
      a: "10. hane: TL'de **T** tüm kıymet, **A** anapara, **K kupon**; dövizde F tüm kıymet, P anapara, C kupon.",
      k: "1012 resmi not s. 88"
    },
    {
      s: "Özel sektör borçlanma araçlarının ISIN kodunda itfa ayı Kasım ise 8. hanede hangi karakter yer alır?",
      c: ["11", "B", "K", "N", "X"],
      d: 2,
      a: "8. hane itfa ayını gösterir: Ocak–Eylül için 1–9; son üç ay için ayın ilk harfi kullanılır: **Ekim E, Kasım K, Aralık A**.",
      k: "1012 resmi not s. 89"
    },
    {
      s: "BAP Kesin Alım Satım Pazarı'nda devlet iç borçlanma senetlerinde en fazla kaç güne kadar ileri valörlü işlem yapılabilir?",
      c: ["7 gün", "15 gün", "30 gün", "90 gün", "365 gün"],
      d: 3,
      a: "Kesin Alım Satım Pazarı'nda **DİBS'te 90 güne**, diğer sermaye piyasası araçlarında **30 güne** kadar ileri valörlü işlem yapılabilir.",
      k: "1012 resmi not s. 91"
    },
    {
      s: "BAP Repo–Ters Repo Pazarı'nda zincirleme repo işlemiyle ilgili hangisi doğrudur?",
      c: ["İkinci repo işleminin vadesi birinci işlemin vadesinden en az bir gün önce olmalıdır.", "İkinci repo işleminin vadesi birinci işlemin vadesiyle aynı gün olmalıdır.", "Ters repo ile alınan kıymetler hiçbir şekilde yeniden repo işlemine konu edilemez.", "Zincirleme repo Pay Senedi Repo Pazarı'nda yapılır.", "İkinci işlemin vadesi birinci işlemin vadesinden sonra olmalıdır."],
      d: 0,
      a: "Ters repoyla alınıp 1101 nolu hesapta bloke tutulan kıymetler başka bir repo işleminde kullanılabilir; ancak **ikinci işlemin vadesi birincinin vadesinden en az bir gün önce** olmalıdır.",
      k: "1012 resmi not s. 91"
    },
    {
      s: "Borsa İstanbul Swap Piyasası'nda aracı kurumlar hangi pazarda işlem yapabilir?",
      c: ["Yalnızca Para Swap Pazarı'nda", "Yalnızca Kıymetli Madenler Swap Pazarı'nda", "Her iki pazarda da", "Hiçbir pazarda işlem yapamaz", "Yalnızca TCMB'nin izniyle Para Swap Pazarı'nda"],
      d: 1,
      a: "Swap Piyasası'nda aracı kurumlar, bankalar ve TCMB işlem yapar; ancak **aracı kurumlar yalnızca Kıymetli Madenler Swap Pazarı**'nda işlem yapabilir.",
      k: "1012 resmi not s. 93"
    },
    {
      s: "BAP'ta hangi pazarlarda gerçekleşen işlemler netleştirmeye tabi tutulmaz ve işlem bazında takas edilir?",
      c: ["Kesin Alım Satım ve Repo–Ters Repo Pazarları", "Taahhütlü İşlemler ve Uluslararası Tahvil Pazarları", "Gözaltı ve Kesin Alım Satım Pazarları", "Pay Senedi Repo ve Menkul Kıymet Tercihli Repo Pazarları", "Tüm pazarlarda netleştirme yapılır."],
      d: 1,
      a: "**Taahhütlü İşlemler** ve **Uluslararası Tahvil** pazarlarındaki işlemlerde netleştirme yapılmaz; takas işlem bazında gerçekleştirilir.",
      k: "1012 resmi not s. 93"
    },
    {
      s: "Borsa İstanbul Borçlanma Araçları Piyasası'nda Türk Lirası işlemlerin takası ne zaman yapılır?",
      c: ["Aynı gün (T+0)", "T+1", "T+2", "T+3", "Haftanın son iş günü"],
      d: 0,
      a: "BAP'taki işlemlerin takası **aynı gün (T+0)**, yabancı para ödemeli kıymetlerin takası **T+1** yapılır. Son borç kapatma saati 16:45'tir.",
      k: "1012 resmi not s. 94"
    }
  ]
});
