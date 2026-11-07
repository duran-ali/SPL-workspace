SPL.gun("1012", 15, {
  okuma: `
## Bugünün haritası
1. **Kâr-zarar hesabı:** kesinleşmiş ve gün içi kâr-zarar
2. **Opsiyon** primleri ve kullanım kâr-zararı
3. Kâr-zararın hesaplara **yansıtılması**
4. VİOP **işlem teminatı**: kompozisyon, %25 yoğunlaşma sınırı, değerleme
5. Teminat **yatırma-çekme** ve **nemalandırma**
6. Gün içi ve gün sonu **teminat tamamlama** çağrıları
7. **Üyelik teminatı**

---

## 1. Kâr-zarar hesabı
- Kâr-zararı **Takasbank** hesaplar ve **BISTECH** üzerinden üyelere raporlar.
- Seans boyunca risk hesaplama anlarında **en son fiyatlarla gün içi** kâr-zarar hesaplanır.
  - Gün içi **zarar** risk tutarını **artırır**, geçici **kâr** azaltır.
  - İşlem yapan hesaplarda hesaplama **gerçek zamanlıdır**.
- Seanstan sonra kâr-zarar **gün sonu uzlaşma fiyatına** göre **kesinleşir**. İşlem maliyeti olarak **ağırlıklı ortalama** fiyat kullanılır.
- Uzlaşma fiyatı dayanağın fiyat hareketiyle açıklanamıyorsa Takasbank **teorik fiyat** kullanabilir.

### Kesinleşmiş kâr-zarar (vadeli işlemler)
Hepsinin ortak yapısı: *(Fiyat farkı) × İşlem miktarı × Sözleşme çarpanı*

| Pozisyon | Fiyat farkı |
|---|---|
| Gün içinde **açılıp kapatılan** | Kapanış fiyatı − **açılış** fiyatı |
| Gün içinde açılıp **ertesi güne taşınan** | **Gün sonu uzlaşma** − açılış fiyatı |
| **Önceki günden taşınan** ve devam eden | Gün sonu uzlaşma − **önceki gün sonu uzlaşma** |
| Önceki günden taşınıp **bugün kapatılan** | (Gün sonu uzlaşma − önceki uzlaşma) × taşınan miktar **+** (gün sonu uzlaşma − kapanış fiyatı) × kapatılan miktar |

### Örnek
- Bir yatırımcı BIST 30 vadeli sözleşmesinden (çarpan **10**) **2 adet uzun** pozisyonu **10.000** puandan açtı ve ertesi güne taşıdı.
- Gün sonu uzlaşma fiyatı **10.100**.
- Kâr = (10.100 − 10.000) × 2 × 10 = **2.000 TL**.

### Gün içi kâr-zarar
- **Gün içi açılan** pozisyonlarda: (gün içi uzlaşma − açılış fiyatı) × miktar × çarpan.
- **Önceki günden taşınan** pozisyonlarda: (gün içi uzlaşma − önceki gün sonu uzlaşma) × miktar × çarpan.
- **Döviz cinsinden** sözleşmelerde kâr-zarar önce döviz olarak hesaplanır, sonra **TCMB döviz alış kuruyla** TL'ye çevrilir.

---

## 2. Opsiyonlar

### Prim ve gün içi kâr-zarar
- *Net opsiyon primi = Tahsil edilen prim − Ödenen prim*
- *Prim = İşlem fiyatı × Miktar × Sözleşme çarpanı* (yalnızca **işlem günü** hesaplanır)
- Prim, işlem günü bulunması gereken **teminatı etkiler**. Net prim alacağı varsa bu tutar başka pozisyonlar için kullanılabilir.
- **Gün içi kâr-zarar:**
  - **Uzun** pozisyon: net opsiyon değeri − ödenen prim
  - **Kısa** pozisyon: alınan prim − net opsiyon değeri
- **Primi işlem anında ödenen** opsiyonlarda hesap güncellemesi yapılmaz ve **kesinleşmiş kâr-zarar hesaplanmaz**.

### Kullanım kâr-zararı
Kullanım kâr-zararı **yalnızca nakdi uzlaşmalı** opsiyonlarda hesaplanır. **Fiziki teslimatta hesaplanmaz.**

| Opsiyon | Kullanım kâr-zararı |
|---|---|
| **Alım (call)** | (Dayanak vade sonu fiyatı − **kullanım fiyatı**) × çarpan × miktar |
| **Satım (put)** | (**Kullanım fiyatı** − dayanak vade sonu fiyatı) × çarpan × miktar |

*Toplam kâr-zarar = Vadeli işlem kâr-zararı − Net opsiyon primi ± Kullanım kâr-zararı*

---

## 3. Kâr-zararın yansıtılması
- Seans kapandıktan sonra **gün sonu uzlaşma fiyatları** belirlenir.
- **Zararlar ve prim borçları** ile **kârlar ve prim alacakları**, **T günü sonunda** tüm hesaplara yansıtılır.
- Teminatı gerekenin altına düşen hesaplara **teminat tamamlama çağrısı** yapılır.
- **Kârlar**, T gününden başlayarak **T+1 günü eksi nakit kapama son saatine (11:00)** kadar dağıtılır.
- Kâr-zarar havuzunda bakiye yetmezse kârlar, **kâr alacağı en düşükten en yükseğe** doğru sıralanarak **kısmen** dağıtılır.

---

## 4. VİOP işlem teminatı

### Kompozisyon
- Toplam teminat gereksiniminin **en az %50'si TL** olmalıdır. Takasbank Yönetim Kurulu bu oranı değiştirebilir.
- Kompozisyon limitleri, yatırılmış TL ve diğer teminatların **toplamı** üzerinden uygulanır.
- Değerleme katsayıları **yılda bir** gözden geçirilir.

### %25 yoğunlaşma sınırı
- **Aynı ihraççı ya da banka** ve **aynı sermaye grubundaki** diğer ihraççıların menkul kıymetleri ile **garantilerinin** toplamı, piyasadaki teminatların **%25'ini geçemez**.
- **Hazine** kıymetleri ve sermayesinin çoğunluğu **Hazineye ait** bankaların garanti ve kıymetleri bu sınırın **dışındadır**.
- Sınır aşılırsa **son yatırılan teminatlardan** başlanarak değişiklik **e-postayla** istenir.

### Netleştirme teminatı
**Kısa** pay vadeli pozisyonları ve **kısa** pay alım opsiyonları için, netleştirmeye konu olmak üzere **ilgili pay** teminat olarak yatırılabilir. Bu bakiye değerlemede **dikkate alınmaz**.

### Değerleme (VİOP'a özgü olanlar)
| Teminat | Değerleme |
|---|---|
| Döviz | Gün içi bankalararası kotasyon ortalaması; gün sonu TCMB **15:30** alış kuru |
| DİBS ve sukuk | Takasbank verim eğrisi ya da TCMB fiyatları |
| Pay, **BYF**, sertifika | Gün içi son işlem fiyatı; gün sonu seans sonu son işlem fiyatı |
| **ELÜS** | Hesaplama anından önceki **son işlem fiyatı** |
| Yatırım fonu | İhraççının açıkladığı fiyat, **izleyen iş günü** kullanılır |

---

## 5. Yatırma, çekme ve nema
- İşlemler üye ekranlarından ve web servisle **elektronik** yapılır.
- **İki aşamalı** onay vardır: talimatı **giren** ile **onaylayan** farklı yetkililer olmalıdır.
- Teminat, bulunması gerekenin **üzerindeki kısım** kadar çekilebilir.
  - **Kompozisyonu bozacak** çekme talepleri **reddedilir**.
  - Seans sırasında çekilebilir tutar hesaplanırken geçici ve kesinleşmiş **zararlar düşülür**, ama **kâr dikkate alınmaz**.
- **Opsiyon primi:**
  - **Alan** hesabın nakit teminatından T günü seans sonrasında **düşülür**.
  - **Satan** hesabın nakit teminatına **eklenir**.
- **Döviz muhabirleri:** EUR için **Citigroup Global Markets Deutschland (Frankfurt)**, USD için **Citibank NA (New York)**.

### Nemalandırma
- **Nakit TL** üyelik ve işlem teminatları nemalandırılır.
- **15:40**'taki bakiye esas alınır; nema **izleyen iş günü** hesaba geçer.
- **15:40'tan sonra** yatırılan teminat ve **5.000 TL altı** bakiyeler **nemalandırılmaz**.
- Brüt nemadan vergi ve **Takasbank komisyonu** düşülür.

---

## 6. Teminat tamamlama çağrıları

| | **Gün içi** | **Gün sonu** |
|---|---|---|
| Süre | **2 saat** | Ertesi işlem günü **15:00** |
| Ek kural | Yükümlülük yerine getirilene kadar **pozisyon artırıcı emir** iletilemez | **Fiziki teslimatlı döviz** hesaplarında son saat **11:00** |

- Gün sonu çağrısı hesaplanırken **akşam seansı işlemleri dikkate alınmaz**; bunlar ertesi günün gün sonu döngüsüne dahil edilir.
- Çağrı **toplam teminat eksiği** ve **TL eksiği** için yapılabilir. **Her durumda TL** olarak yatırılır.
- Çağrıdan çıkış yolları: **nakit teminat yatırmak** ya da **riski azaltan işlem** yapmak.
- Kısmi pozisyon kapatma ve TL yatırmayla çıkış için yatırılan TL, **eksi nakit bakiyesini** ve **asgari TL gereksinimini** karşılamalıdır.
- **Akşam seansındaki** başlangıç teminatını azaltıcı işlemlerle de T gününün çağrısı karşılanabilir.

---

## 7. Üyelik teminatı
- **Genel** ve **doğrudan** MKT üyeleri, aidat, ücret ve komisyon gibi borçlar için **TL** üyelik teminatı yatırır.
- Takasbank alacağını bu teminattan tahsil ederse üye teminatı **3 iş günü** içinde tamamlar; tamamlamazsa tutar **re'sen** tahsil edilir.
- Üyelik sona erince, tüm yükümlülükler tasfiye edilmişse teminat **iade edilir**.

> [!ezber]
> **Kâr dağıtımı** T+1 **11:00**'e kadar · **TL en az %50** · **Aynı grup ihraççı/garanti ≤%25**
> **Nema:** 15:40 bakiyesi, 5.000 TL altı yok · **Gün sonu çağrı** 15:00 (fiziki döviz 11:00) · **Gün içi** 2 saat
`,
  sorular: [
    {
      s: "BIST 30 endeks vadeli işlem sözleşmesinde (sözleşme çarpanı 10) 10.000 puandan 2 adet uzun pozisyon açan ve pozisyonu ertesi güne taşıyan yatırımcının, gün sonu uzlaşma fiyatı 10.100 olduğunda kesinleşmiş kârı ne kadardır?",
      c: ["100 TL", "200 TL", "500 TL", "1.000 TL", "2.000 TL"],
      d: 4,
      a: "Gün içinde açılıp taşınan pozisyonda kâr = (gün sonu uzlaşma − açılış fiyatı) × miktar × çarpan = (10.100 − 10.000) × 2 × 10 = **2.000 TL**.",
      k: "1012 resmi not s. 139–140"
    },
    {
      s: "Önceki günden taşınan ve kapatılmayan bir vadeli işlem pozisyonunun kesinleşmiş kâr/zararı hesaplanırken hangi fiyat farkı kullanılır?",
      c: ["Pozisyonun kapatıldığı fiyat − açıldığı fiyat", "Gün sonu uzlaşma fiyatı − pozisyonun açıldığı fiyat", "Gün sonu uzlaşma fiyatı − önceki günün uzlaşma fiyatı", "Dayanak varlığın spot fiyatı − vadeli fiyat", "Kullanım fiyatı − dayanak varlığın piyasa fiyatı"],
      d: 2,
      a: "Önceki günden taşınan ve devam eden pozisyonlarda fark, **gün sonu uzlaşma fiyatı ile önceki gün sonu uzlaşma fiyatı** arasındadır; bu fark miktar ve çarpanla çarpılır.",
      k: "1012 resmi not s. 140"
    },
    {
      s: "VİOP'ta opsiyon sözleşmelerinin kullanım kâr/zararıyla ilgili hangisi doğrudur?",
      c: ["Hem nakdi uzlaşmalı hem fiziki teslimatlı opsiyonlarda hesaplanır.", "Yalnızca nakdi uzlaşmalı opsiyonlarda hesaplanır.", "Yalnızca fiziki teslimatlı opsiyonlarda hesaplanır.", "Opsiyonlarda kullanım kâr/zararı hesaplanmaz.", "Yalnızca Amerikan tipi opsiyonlarda hesaplanır."],
      d: 1,
      a: "Kullanım kâr/zararı **yalnızca nakdi uzlaşma** halinde hesaplanır; fiziki teslimatla sona eren opsiyonlarda hesaplanmaz.",
      k: "1012 resmi not s. 139"
    },
    {
      s: "Nakdi uzlaşmalı bir satım (put) opsiyonunun kullanım kâr/zararı nasıl hesaplanır?",
      c: ["(Dayanak varlık vade sonu fiyatı − Kullanım fiyatı) × Sözleşme çarpanı × Miktar", "(Kullanım fiyatı − Dayanak varlık vade sonu fiyatı) × Sözleşme çarpanı × Miktar", "Opsiyon primi × Miktar", "(Uzlaşma fiyatı − Prim) × Miktar", "Kullanım fiyatı × Sözleşme çarpanı"],
      d: 1,
      a: "Satım opsiyonunda kullanım kâr/zararı = **(Kullanım fiyatı − Dayanak vade sonu fiyatı)** × çarpan × miktar. Alım opsiyonunda fark tersidir.",
      k: "1012 resmi not s. 141"
    },
    {
      s: "VİOP'ta pozisyonlardan elde edilen kârlar hesaplara hangi zamana kadar dağıtılır?",
      c: ["T günü saat 15:00'e kadar, marjin kapama ile birlikte", "T günü saat 19:00'a kadar, uzlaşma fiyatı ilanıyla", "T günüyle başlayıp T+1 günü 11:00'e (eksi nakit kapama) kadar", "T+2 günü sonuna kadar, takasla birlikte", "Ay sonunda toplu olarak, ay sonu değerlemesiyle"],
      d: 2,
      a: "Kârlar **T gününden başlayarak T+1 günü eksi nakit kapama son saatine (11:00)** kadar dağıtılır. Havuz yetersizse kâr alacağı en düşükten en yükseğe doğru kısmen dağıtılır.",
      k: "1012 resmi not s. 141"
    },
    {
      s: "VİOP'ta hesaplanan toplam teminat gereksiniminin en az yüzde kaçının Türk Lirası teminattan oluşması gerekir?",
      c: ["%10", "%25", "%30", "%50", "%100"],
      d: 3,
      a: "VİOP'ta toplam teminat gereksiniminin **en az %50**'si TL olmalıdır; Takasbank Yönetim Kurulu bu oranı değiştirebilir.",
      k: "1012 resmi not s. 141"
    },
    {
      s: "VİOP'ta aynı ihraççı veya aynı sermaye grubundaki ihraççıların menkul kıymetleri ile garantilerinin toplamı, piyasadaki teminatların en fazla yüzde kaçı olabilir?",
      c: ["%5", "%10", "%15", "%20", "%25"],
      d: 4,
      a: "Bu toplam teminatların **%25**'ini geçemez. Hazine kıymetleri ve sermayesinin çoğunluğu Hazineye ait bankaların garanti ve kıymetleri bu sınırın dışındadır.",
      k: "1012 resmi not s. 142"
    },
    {
      s: "VİOP işlem teminatlarının nemalandırılmasıyla ilgili hangisi **yanlıştır?**",
      c: ["Nemalandırmada saat 15:40'taki bakiyeler esas alınır.", "Hesaplanan nema bir sonraki iş günü hesaplara aktarılır.", "5.000 TL'nin altındaki bakiyeler nemalandırılmaz.", "15:40'tan sonra yatırılan nakit de aynı gün nemalandırılır.", "Brüt nemadan Takasbank komisyonu düşülür."],
      d: 3,
      a: "**15:40'tan sonra** yatırılan nakit teminatlar ve 5.000 TL'nin altındaki bakiyeler **nemalandırılmaz**.",
      k: "1012 resmi not s. 144"
    }
  ]
});
