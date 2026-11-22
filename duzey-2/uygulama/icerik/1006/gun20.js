SPL.gun("1006", 20, {
  okuma: `
## Bugünün haritası
Borsa İstanbul'un iki küçük piyasasını bir günde bitiriyoruz: **Borsa İstanbul Para Piyasası** (teminatlı TL borç alma-verme) ve **Borsa İstanbul Swap Piyasası** (para ve kıymetli maden swapları). İki piyasada da **Takasbank** önemli rol oynar.

1. **Para Piyasası**: kimler, nasıl, hangi valörde
2. Para Piyasası saatleri, öncelik ve emir büyüklüğü
3. **Swap Piyasası**: amaç, kimler işlem yapabilir, temel kavramlar
4. Swap Piyasası saatleri, valör ve emir tipleri
5. İşlem iptali ve fiyat ilanı
6. **Para Swap Pazarı**
7. **Kıymetli Madenler Swap Pazarı**

---

## 1. Borsa İstanbul Para Piyasası
- **İşlem yapabilenler:** işlem yetkisi verilmiş **banka ve aracı kurumlar** ile **Takasbank**.
- **Ne yapılır?** TL fon arz ve talep eden banka ve aracı kurumların **teminatlı borç alma ve verme** işlemleri.
- Emirler **portföy**, **yatırım fonu/yatırım ortaklığı**, **kamu kaynağı** veya **müşteri** hesabına iletilebilir.

> [!ezber] Para Piyasasında **Takasbank merkezi karşı taraftır**: alıcıya karşı satıcı, satıcıya karşı alıcı olur ve takasın tamamlanmasını **taahhüt eder**.

- Taraflar işlem sırasında **birbirini bilmez**; işlem gerçekleşince karşı üye bilgisi verilir.
- **Valör:** **aynı gün** ve **bir iş günü ileri** başlangıç valörlü işlemler yapılabilir. **Bitiş valörü** taraflarca serbestçe, en fazla **2 yıl** olarak belirlenir.

---

## 2. Para Piyasası saatleri, öncelik ve emir büyüklüğü
| Konu | Kural |
|---|---|
| İşlem saatleri | Hafta içi **09:30 – 17:30** |
| Aynı gün başlangıç valörlü | **09:30 – 15:00** |
| İleri başlangıç valörlü | 09:30 – 17:30 |
| Öncelik | Alımda **en yüksek faiz**, satımda **en düşük faiz**; eşitse zaman |
| Faiz oranı adımı | **%0,01** |
| Emir büyüklüğü | **100.000 – 100.000.000** |
| Geçerlilik | Gün içinde; gerçekleşmezse **17:30**'da otomatik iptal |

- Emirler BISTECH terminalleri veya uzak erişim arayüzüyle; gerekirse **telefonla** borsa uzmanları aracılığıyla iletilir.
- Faiz eşit değilse **önce var olan emrin** faizi işlem faizidir.
- Üyeler kendi emirlerini karşılayarak işlem yapabilir.
- Takas, teminat ve temerrüt esaslarını **Takasbank** belirler.

> [!dikkat] Para Piyasasında **aynı gün valörlü** işlemler **15:00**'e kadar yapılabilir. BAP'ta bu saat **14:00**'tü.

---

## 3. Borsa İstanbul Swap Piyasası
**Amaç:** Para birimlerinin **birbirleriyle** veya **kıymetli madenlerle** belirlenen koşullarda değiştirilmesine imkân sağlamak.

### Kimler işlem yapabilir?
- Yetkili **aracı kurumlar**, **bankalar** ve **TCMB**.
- **Aracı kurumlar yalnızca Kıymetli Madenler Swap Pazarında** işlem yapabilir.
- SPK'nın yetki vermediği **kıymetli madenler aracı kuruluşları**, Kıymetli Madenler Swap Pazarında ancak yetkili banka ve aracı kurumların **müşterisi** olarak işlem yapabilir.

### Temel kavramlar
| Kavram | Anlamı |
|---|---|
| **Swap** | Tarafların farklı para birimlerini veya kıymetli madenlerle para birimlerini kararlaştırdıkları süre ve koşullarda **değiştirmesi** |
| **Döviz kuru** | Para swabının **başlangıç valöründe** TL yükümlülüğünün hesaplandığı, tarafların belirlediği kur |
| **Kıymetli maden** | **32 Sayılı Karar**'da (RG 11.08.1989) tanımlanan ve standartları belirlenen kıymetli madenler |
| **Kıymetli maden fiyatı** | Başlangıç valöründe para cinsinden takas yükümlülüğünün hesaplandığı fiyat |
| **Swap puanı** | Para swabında **vade sonu kurunun** hesaplanması için kur ve faiz farkları dikkate alınarak belirlenen değer; kıymetli maden swabında vade sonu maden fiyatının tespiti için belirlenen değer |
| **Valör** | Başlangıç ve bitiş **takas tarihleri** |

### İşleyiş
- **Para swapları:** TL ile **ABD doları** ve TL ile **avro**.
- **Kıymetli maden swapları:** kıymetli madenler ile **TL, ABD doları veya avro**.
- Taraflar işlem sırasında birbirini bilmez; işleme dönüşen emirlerde **hangi üyeyle eşleştiği bilgisi verilmez**.
- Başlangıç ile bitiş valörü arasında **Takasbank**, yeniden değerlemeyle **değişim teminatı** hesaplar.

---

## 4. Swap Piyasası saatleri, valör ve emirler
| Konu | Kural |
|---|---|
| Aynı gün başlangıç valörlü | **09:30 – 14:00** |
| İleri başlangıç valörlü | **09:30 – 17:30** |
| **09:00 – 09:30** | **Yalnız TCMB** emir iletebilir |
| Başlangıç valörü | **Aynı gün** veya **bir iş günü ileri** |
| Başlangıç ile bitiş arası | En fazla **365 gün** |
| Takas mümkün değilse | Başlangıç ve/veya bitiş valörü **bir sonraki iş günü** olur |
| Eşleşme yöntemi | **Çok fiyat** |

| Pazar | Emir iletilebilen hesaplar |
|---|---|
| **Para Swap Pazarı** | **Portföy** ve Genel Müdürlüğün uygun gördüğü **müşteriler** |
| **Kıymetli Madenler Swap Pazarı** | Portföy, müşteri, **yatırım ortaklığı** ve **yatırım fonu** |

### Emir tipleri
| Emir | Para swabı | Kıymetli maden swabı |
|---|---|---|
| **Limitli emir** | Döviz miktarı + **swap puanı** + **döviz kuru** | Maden miktarı + swap puanı + **maden fiyatı** |
| **Piyasa emri** | Yalnız **döviz miktarı** (kur ve puan yok) | Yalnız **maden miktarı** |

- Piyasa emrinin gerçekleşmeyen kısmı **otomatik iptal** edilir.
- Özel koşullar: **kalanı iptal et** ve **gerçekleşmezse iptal et** (tamamı gerçekleşmezse tümü iptal).
- Gerçekleşmeyen **aynı gün** başlangıç valörlü emirler aynı gün emir iletiminin son saatinde (14:00), **ileri** başlangıç valörlüler pazar kapanışında iptal edilir.

---

## 5. İşlem iptali ve fiyat ilanı
- Üye hatası kaynaklı işlemler prensip olarak **iptal edilmez**. Elektronik talep, kabul edilebilir gerekçe ve **karşı tarafın elektronik onayıyla** iptal edilebilir; iptal **KAP**'ta ilan edilir.
- **Kabul edilebilir gerekçeler:** döviz (veya maden) alım emri yerine **satım** emri girmek ya da tersi; başlangıç-bitiş valörü, swap puanı, döviz kuru, miktar, maden fiyatı gibi unsurlarda **maddi hata**.
- Hatalı emirlerden doğan işlemlerin düzeltilmesi esaslarını **Takasbank** belirler.
- Fiyatlar ve miktarlar **aynı gün Borsa Bülteninde**, **her pazar için ayrı** ilan edilir.
- **Tek üyenin taraf olduğu** işlemler kayda alınmaz, fiyatları yayımlanmaz; hacim ve sözleşme sayısı toplamlara eklenir.
- Takas ve temerrüt esaslarını **Takasbank** belirler.

---

## 6. Para Swap Pazarı
- **01.10.2018**'de kuruldu. TL ile **ABD doları** ve TL ile **avro** arasında swap yapılır.

| Valör | TL karşılığı döviz **satım** swabı yapan | TL karşılığı döviz **alım** swabı yapan |
|---|---|---|
| **Başlangıç** | **Döviz** yükümlülüğünü yerine getirir | **TL** yükümlülüğünü yerine getirir |
| **Bitiş** | Başlangıçta aldığı TL'yi geri verir | Başlangıçta aldığı dövizin **aynı miktarını** geri verir |

### Öncelik ve eşleşme
| Emir | Öncelik |
|---|---|
| TL karşılığı döviz **satım** swabı | Sırasıyla **en yüksek swap puanı**, **en düşük döviz kuru** |
| TL karşılığı döviz **alım** swabı | Sırasıyla **en düşük swap puanı**, **en yüksek döviz kuru** |

- Puan ve kur eşitse **zaman önceliği**. Eşit değilse **önce var olan emrin** puanı ve kuru geçerlidir.

| Konu | Kural |
|---|---|
| Emir büyüklüğü | **1 milyon** USD/EUR ve katları; azami **300 milyon** USD/EUR |
| Adım | Swap puanı **0,01**; döviz kuru **0,0001** |
| Kur sınırı | TCMB döviz alış ve satış kurlarının **aritmetik ortalamasının ±%15**'i (Genel Müdür gün içinde değiştirebilir) |

> [!bilgi] **Örnek:** Satım swap emirleri: (3) 32,65 puan – 23,7796 kur ve (4) 32,65 puan – 23,7790 kur. Puanlar eşit; satımda **düşük kur** öncelikli olduğu için **4**, 3'ün önüne geçer. Tam sıra: **4, 3, 1, 2, 5**. Aynı emirler alım swabı olsaydı: **5, 1, 2, 3, 4**.

---

## 7. Kıymetli Madenler Swap Pazarı
- **16.11.2020**'de kuruldu. Kıymetli madenler ile **TL, ABD doları veya avro** arasında swap yapılır.
- Başlangıçta maden **satım** swabı yapan **madeni**, **alım** swabı yapan **parayı** teslim eder; bitişte işlem tersine döner.

| Emir | Öncelik |
|---|---|
| Para karşılığı maden **satım** swabı | **En yüksek swap puanı**, **en düşük maden fiyatı** |
| Para karşılığı maden **alım** swabı | **En düşük swap puanı**, **en yüksek maden fiyatı** |

| Konu | Kural |
|---|---|
| Emir büyüklüğü | **1 kilobar altın** ve katları; azami **100 kilobar** |
| Adım | Swap puanı ve maden fiyatı için **0,01** |
| Fiyat sınırı | Borsa İstanbul **Kıymetli Madenler ve Taşlar Piyasasının** ilan ettiği **ağırlıklı ortalama fiyatın ±%15**'i |
| İşleme konu maden | **LBMA Good Delivery List**'teki rafinerilerce üretilmiş **995/1000 saflıkta 1 kilobar altın** |

---

## Bugünün özeti
- **Para Piyasası:** banka, aracı kurum ve **Takasbank**; **teminatlı TL** borç alma-verme; Takasbank **merkezi karşı taraf**; bitiş valörü en çok **2 yıl**; aynı gün valör **15:00**'e kadar; emir **100.000 – 100 milyon**.
- **Swap Piyasası:** aracı kurumlar **yalnız Kıymetli Madenler Swap Pazarında**; **09:00-09:30 yalnız TCMB**; vade en çok **365 gün**; Takasbank **değişim teminatı** hesaplar.
- **Para Swap Pazarı (2018):** TL-USD, TL-EUR; satım swabında **yüksek puan + düşük kur**; emir **1-300 milyon** USD/EUR; kur TCMB ortalamasının **±%15**'i.
- **Kıymetli Madenler Swap Pazarı (2020):** **1 kilobar** (azami 100) **995/1000** LBMA altın; fiyat KMTP ağırlıklı ortalamasının **±%15**'i.
`,
  sorular: [
    {
      s: "**Borsa İstanbul Para Piyasası** ile ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["Takasbank merkezi karşı taraf olarak takası taahhüt eder", "Yalnızca bankalar işlem yapabilir; aracı kurumlar işlem yapamaz", "İşlemlerin bitiş valörü taraflarca en fazla 1 yıl olarak belirlenebilir", "Taraflar emir aşamasında birbirlerinin kimliğini görür", "Teminatsız döviz borç alma ve verme işlemleri yapılır"],
      d: 0,
      a: "Para Piyasasında banka ve aracı kurumların **teminatlı TL** borç alma-verme işlemleri yapılır; **Takasbank merkezi karşı taraf** olur. Bitiş valörü en fazla **2 yıldır** ve taraflar işlem sırasında birbirini bilmez.",
      k: "1006 resmi not s. 120"
    },
    {
      s: "Borsa İstanbul Para Piyasasında **aynı gün başlangıç valörlü** emir iletimi ve işlemler hangi saatler arasında yapılır?",
      c: ["09:00 – 09:30", "09:30 – 12:30", "09:30 – 14:00", "09:30 – 15:00", "09:30 – 17:30"],
      d: 3,
      a: "Para Piyasasında aynı gün başlangıç valörlü işlemler **09:30 – 15:00**, ileri başlangıç valörlüler **09:30 – 17:30** arasında yapılır.",
      k: "1006 resmi not s. 120"
    },
    {
      s: "Borsa İstanbul Para Piyasasında geçerli **asgari ve azami emir büyüklükleri** nedir?",
      c: ["10.000 – 990.000", "50.000 – 100.000.000", "100.000 – 100.000.000", "1.000.000 – 400.000.000", "1.000.000 – 300.000.000"],
      d: 2,
      a: "Para Piyasasında emirler asgari **100.000**, azami **100.000.000** büyüklükte ve katları olarak iletilir; faiz oranı adımı **%0,01**'dir.",
      k: "1006 resmi not s. 120"
    },
    {
      s: "Borsa İstanbul **Swap Piyasasında** işlem yapabilecek kuruluşlarla ilgili hangisi doğrudur?",
      c: ["Aracı kurumlar her iki pazarda da sınırsız işlem yapabilir", "Yalnızca TCMB ile bankalar arasında işlem yapılabilir", "TCMB Swap Piyasasında işlem yapamaz", "Yetkisiz kıymetli madenler aracı kuruluşları doğrudan üye olarak işlem yapabilir", "Aracı kurumlar yalnızca Kıymetli Madenler Swap Pazarında işlem yapabilir"],
      d: 4,
      a: "Swap Piyasasında aracı kurumlar, bankalar ve TCMB işlem yapabilir; **aracı kurumlar yalnızca Kıymetli Madenler Swap Pazarında** işlem yapabilir. SPK yetkisi olmayan kıymetli madenler aracı kuruluşları ancak yetkili banka ve aracı kurumların **müşterisi** olarak işlem yapabilir.",
      k: "1006 resmi not s. 122"
    },
    {
      s: "Swap Piyasasında **swap puanı** neyi ifade eder?",
      c: ["Başlangıç valöründe TL yükümlülüğünün hesaplandığı ve taraflarca belirlenen döviz kurunu", "Takasbank'ın yeniden değerlemeyle hesapladığı değişim teminatı tutarını", "Vade sonu kurunu bulmak için kur ve faiz farkı dikkate alınarak belirlenen değeri", "İşlemin başlangıç ve bitiş takas tarihlerini", "TCMB'nin ilan ettiği döviz alış ve satış kurlarının ortalamasını"],
      d: 2,
      a: "**Swap puanı**, para swabında **vade sonu döviz kurunun** hesaplanması için kur ve para birimleri arasındaki **faiz farkları** dikkate alınarak taraflarca belirlenen değerdir. Başlangıçta kullanılan kur **döviz kuru**, takas tarihleri ise **valördür**.",
      k: "1006 resmi not s. 122"
    },
    {
      s: "Swap Piyasasında emirlerin **başlangıç ve bitiş valörü** arasındaki süre en fazla ne kadar olabilir?",
      c: ["7 gün", "30 gün", "90 gün", "365 gün", "2 yıl"],
      d: 3,
      a: "Swap Piyasasında **aynı gün** veya **bir iş günü ileri** başlangıç valörlü emir iletilebilir; başlangıç ile bitiş arası en fazla **365 gün** olabilir. 2 yıl, **Para Piyasasının** azami bitiş valörüdür.",
      k: "1006 resmi not s. 123"
    },
    {
      s: "**Para Swap Pazarında** TL karşılığı **döviz satım** swap emirlerinde öncelik sırası hangisidir?",
      c: ["En yüksek swap puanı ve en düşük döviz kuru", "En düşük swap puanı ve en yüksek döviz kuru", "En yüksek swap puanı ve en yüksek döviz kuru", "En büyük döviz miktarı ve en düşük swap puanı", "Yalnızca zaman önceliği"],
      d: 0,
      a: "TL karşılığı döviz **satım** swabında sırasıyla **en yüksek swap puanı** ve **en düşük döviz kuru**; **alım** swabında ise **en düşük swap puanı** ve **en yüksek döviz kuru** önceliklidir. Eşitlikte zaman önceliği uygulanır.",
      k: "1006 resmi not s. 125"
    },
    {
      s: "**Kıymetli Madenler Swap Pazarı** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["16 Kasım 2020 tarihinde kurulmuştur", "Emirler 1 kilobar altın ve katları olarak iletilir; azami emir 100 kilobardır", "İşleme LBMA Good Delivery List'teki rafinerilerin 995/1000 saflıktaki 1 kilobar altını konu olabilir", "Swap puanı ve kıymetli maden fiyatı için 0,01'lik adım uygulanır", "Kıymetli maden fiyatı TCMB döviz kurlarının ortalamasının ±%15'i içinde olmalıdır"],
      d: 4,
      a: "Kıymetli maden fiyatı, Borsa İstanbul **Kıymetli Madenler ve Taşlar Piyasasının** ilan ettiği **ağırlıklı ortalama fiyatın ±%15**'i içinde olmalıdır. TCMB kurlarına dayalı ±%15 sınırı **Para Swap Pazarındaki** döviz kuru içindir.",
      k: "1006 resmi not s. 125-126"
    }
  ]
});
