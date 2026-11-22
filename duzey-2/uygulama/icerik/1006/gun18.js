SPL.gun("1006", 18, {
  okuma: `
## Bugünün haritası
Bugün BAP'ın üç **repo pazarını** öğreniyoruz: **Repo-Ters Repo**, **Menkul Kıymet Tercihli Repo** ve **Pay Senedi Repo**. Hepsinde mantık aynıdır (para karşılığı menkul kıymeti geçici devretmek), ama hangi menkul kıymetin kullanıldığı ve öncelik kuralları farklıdır.

1. Repo ve ters repo: **V1 ve V2**'de ne olur?
2. **Repo-Ters Repo Pazarı**: işleyiş, menkul kıymet grupları, zincirleme repo
3. Repo-Ters Repo'da **eşleşme** ve emir büyüklükleri
4. **Menkul Kıymet Tercihli Repo Pazarı**
5. MK Tercihli Repoda **eşleşme**: oran + fiyat önceliği
6. **Pay Senedi Repo Pazarı**

---

## 1. Repo ve ters repo
**Repo:** Menkul kıymetin, **başlangıç valöründe (V1)** geri alım vaadiyle satılıp karşılığında **para alınması**, **bitiş valöründe (V2)** geri alınması.
**Ters repo:** Menkul kıymetin V1'de geri satım vaadiyle alınıp karşılığında **para verilmesi**, V2'de geri satılması. Esas işlem **para satışı** gibi düşünülebilir.

| | **V1 (başlangıç)** | **V2 (bitiş)** |
|---|---|---|
| **Repo yapan** | Menkul kıymeti verir, **parayı alır** | **Anapara + faiz − stopaj** öder, menkul kıymeti geri alır |
| **Ters repo yapan** | **Parayı verir**, menkul kıymeti alır | Anapara + faiz − stopaj olarak parayı geri alır, menkul kıymeti iade eder |

> [!ezber] **Repo = borç para alan** (menkul kıymeti teminat gibi verir). **Ters repo = borç para veren.** Bu yüzden repocu **yüksek oranla** öne geçer (daha çok faiz önerir), ters repocu **düşük oranla** öne geçer.

---

## 2. Repo-Ters Repo Pazarı
- **Amaç:** Sabit getirili menkul kıymetlerin geri alım vaadiyle satım ve geri satım vaadiyle alım işlemlerinin organize ve güvenli ortamda yapılması. **17.02.1993**'te faaliyete geçti.
- İşleme konu araçlar: TL veya döviz ödemeli **devlet tahvilleri**, **hazine bonoları** ve **TCMB likidite senetleri**.
- İletilebilen emirler: **repo**, **ters repo** ve **özel işlem** emirleri. Repo ve ters repo emirleri **tutar, repo oranı, başlangıç ve bitiş valörü ve menkul kıymet grubu** ile iletilir.

> [!dikkat] Emir girişinde **ters repocu**, karşılık olarak **hangi ISIN kodlu** menkul kıymeti alacağını **bilmez**. Yalnız grubunu bilir; menkul kıymeti işlem gerçekleşip **repocu bildirimini yaptıktan sonra** öğrenir.

### Menkul kıymet grupları
| Grup | İçerik |
|---|---|
| **S** | **TL ödemeli DİBS** ve **TCMB likidite senetleri** |
| **K** | **Döviz ödemeli DİBS** |

- Kuponlu araçlarda kupon ödeme günü **V1'e, V2'ye eşit veya V2'den sonra** olmalıdır. **V1 ile V2 arasına kupon ödemesi denk gelen** araçlar repoya konu **edilemez**.

### Kurallar
| Konu | Kural |
|---|---|
| İleri başlangıç valörü | En fazla **7 gün** |
| Bitiş valörü | En fazla **1 yıl** |
| Oran adımı | **%0,01** |
| Menkul kıymet bildirimi | Repocu, işlemden sonra grubuna ait araçları **en fazla 5 farklı** araçla takas ekranından bildirir (15:00'e kadar) |
| Saklama | Araçlar V1'de Takasbank'a teslim edilir; V2'ye kadar ters repocu adına **bloke hesapta** tutulur, **serbest kullanıma sunulmaz** |
| Emir büyüklüğü | Küçük Emirler: **10.000 – 990.000**; Normal Emirler: **1.000.000 – 400.000.000** |

- **Zincirleme repo:** Ters repoyla alınan araçlar, **ilk işlemin vadesinden kısa** olmak kaydıyla, ters repocu tarafından başka bir repo işleminde kullanılabilir.
- **Bankaların** bu pazarda repoyla sağladığı fonlar **zorunlu karşılığa tabi değildir**.

---

## 3. Repo-Ters Repo'da eşleşme
- **Çok fiyat sürekli müzayede** yöntemi; gün içinde farklı oranlardan işlem olabilir ve bilgiler bültende ilan edilir.
- Repo emirleri **aynı veya daha düşük** oranlı ters repolarla; ters repo emirleri **aynı veya daha yüksek** oranlı repolarla eşleşir.
- Öncelik: repoda **en yüksek oran**, ters repoda **en düşük oran**; eşitse zaman.
- Oran eşit değilse **sistemde önce var olan emrin oranı** işlem oranıdır.

> [!bilgi] **Örnek:** Repo emirleri sırasıyla (1) 3,5 milyon %38, (2) 2 milyon %38, (3) 1 milyon %39, (4) 3 milyon %39, (5) 2,5 milyon %37. **Repo** önceliği: **3, 4, 1, 2, 5** (önce yüksek oran, sonra zaman). Aynı emirler **ters repo** olsaydı: **5, 1, 2, 3, 4** (önce düşük oran).

---

## 4. Menkul Kıymet Tercihli Repo Pazarı
- **Amaç:** **Tercih edilen** menkul kıymetler üzerinde repo yapılması ve bunların alıcıya teslimi. **17.12.2010**'da faaliyete geçti.
- Repo-Ters Repo'dan farkı: emir girişinde taraflar teslim edilecek aracın **ISIN kodunu** ve **fiyatını** belirtir.
- Emirler: **repo oranı, repo tutarı, V1, V2, araç ve aracın fiyatı**.

| Konu | Kural |
|---|---|
| İleri başlangıç valörü | En fazla **7 gün** |
| Bitiş valörü | En fazla **1 yıl** |
| Adım | Repo oranı **%0,01**; araç fiyatı **0,001 TL** |
| Emir büyüklüğü | **10.000 – 100.000.000** |
| Saklama | V2'ye kadar ters repocu adına **bloke hesapta** |

### İşlem görebilen araçlar ve kısıtlar
- Kesin Alım Satım Pazarında işlem gören **TL cinsinden** ihraç edilmiş araçlar.
- Yatırım kuruluşlarının **kendi ihraç ettiği** araçlar, aynı kuruluşlarca **portföyleri hesabına repo yoluyla satılamaz**.
- V1 ile V2 arasında **kupon ödemesi** olan araçlar konu edilemez.
- Aracın **itfa tarihi, bitiş valörüne eşit veya ondan önce olamaz**.
- Kesin Alım Satım Pazarında işlemleri durdurulan araçlar bu pazarda da **durdurulur**.

### Emir giriş yöntemi
- Repo oranının yanında **aracın fiyatı** da girilir; fiyat tipi aracın **Kesin Alım Satım Pazarındaki** tipidir (temiz veya kirli).
- Kesin Alım Satım Pazarında **getiriyle** işlem gören araçlar için **takas fiyatı** üzerinden emir iletilir.
- Her araç için fiyat alanının yanında **takas fiyatı** ve varsa **işlemiş faiz veya birikmiş kira** ilan edilir.

---

## 5. MK Tercihli Repoda eşleşme
Öncelik sırasıyla **repo oranı**, **araç fiyatı** ve **zaman**:
- **Repo** emirlerinde: **en yüksek oran** ve **en düşük fiyat** öncelikli.
- **Ters repo** emirlerinde: **en düşük oran** ve **en yüksek fiyat** öncelikli.
- Repo, aynı veya daha düşük oranlı **ve** aynı veya daha yüksek fiyatlı ters repolarla eşleşir (tersi de geçerli).
- Eşit değilse **önce var olan emrin** oranı ve fiyatı geçerlidir.

> [!bilgi] **Örnek:** Repo emirleri (3) %39 – 102,500 ve (4) %39 – 102,000. Oranlar eşit olduğu için **fiyata** bakılır; repoda **düşük fiyat** öncelikli olduğundan **4 numaralı** emir, 3 numaralıdan önce gelir. Öncelik: **4, 3, 1, 2, 5**.

---

## 6. Pay Senedi Repo Pazarı
- **Amaç:** **Paylar** üzerinde repo yapılması ve payların alıcıya teslimi. **07.12.2012**'de faaliyete geçti.
- İşleme konu: Pay Piyasasında işlem gören **BIST 50 Endeksi**'ne dâhil paylardan **Borsa Genel Müdürlüğünün uygun gördükleri**. Diğer repo pazarlarından farkı, karşılık olarak **borçlanma aracı değil pay** kullanılmasıdır.
- Emirler: repo oranı, repo tutarı, V1, V2, **hesap tipi, hesap kodu, hesap no** ve pay bilgisi.
- Öncelik: repoda **en yüksek oran**, ters repoda **en düşük oran**; eşitse zaman.

| Konu | Kural |
|---|---|
| İleri başlangıç valörü | En fazla **2 iş günü** |
| Bitiş valörü | En fazla **1 yıl** |
| Oran adımı | **%0,01** |
| Emir büyüklüğü | **10.000 – 100.000.000** |
| Payın fiyatı | İşlem anında **Pay Piyasasındaki son işlem fiyatı** |
| Vade kırma | **Mümkün**; esaslarını **Takasbank** belirler |

- Repoya konu payda Pay Piyasasında **henüz işlem olmamışsa** emir **reddedilir**.
- Pay Piyasasında işlemler durursa veya payın sırası kapatılırsa bu pazarda da işlemler **durdurulur**.
- BIST 50'den çıkarılan payların işlem görmeye devamı **Genel Müdürlük kararına** bağlıdır. Repoya kapatılan paylardaki açık işlemler **bitiş valörüne kadar** sürer.
- **Özsermaye hâllerinde** (kâr payı, bedelli/bedelsiz artırım, azaltım, birleşme, bölünme) paylar, fiyatın değiştiği tarih ile MKK'da fiilen gerçekleştiği **iki gün boyunca** işleme konu edilemez. **Tahsisli sermaye artırımı** gibi fiyat değiştirmeyen hâllerde seriler **durdurulmaz**.
- Yatırım kuruluşlarının **kendi ihraç ettiği paylar**, aynı kuruluşlarca portföy hesabına repo yoluyla **satılamaz**.

---

## Üç repo pazarı karşılaştırması
| | **Repo-Ters Repo** | **MK Tercihli Repo** | **Pay Senedi Repo** |
|---|---|---|---|
| Kuruluş | 1993 | 2010 | 2012 |
| Karşılık | DİBS ve likidite senedi (**grup** S/K) | Tercih edilen TL araç (**ISIN + fiyat**) | **BIST 50** payları |
| Ters repocu menkul kıymeti bilir mi? | **Hayır**, işlemden sonra öğrenir | Evet | Evet |
| Öncelik | Oran + zaman | **Oran + fiyat** + zaman | Oran + zaman |
| İleri başlangıç valörü | 7 gün | 7 gün | **2 iş günü** |
| Emir büyüklüğü | Küçük 10.000-990.000; normal 1 milyon-400 milyon | 10.000-100 milyon | 10.000-100 milyon |

> [!ezber] İşleyiş olarak **MK Tercihli Repo ile Pay Senedi Repo birbirine benzer**; **Repo-Ters Repo Pazarı** farklıdır, çünkü orada menkul kıymet emir aşamasında belirtilmez.

---

## Bugünün özeti
- **Repo** V1'de para alır, V2'de anapara + faiz − stopaj öder; **ters repo** tersi.
- Repo-Ters Repo (**1993**): gruplar **S** (TL DİBS + likidite senedi) ve **K** (döviz DİBS); en çok **5 farklı** araç bildirimi; **zincirleme repo** ilk vadeden kısa olmalı; bankaların fonları **zorunlu karşılığa tabi değil**.
- V1-V2 arasında kupon ödemesi olan araç repoya konu olamaz.
- MK Tercihli Repo (**2010**): ISIN ve fiyat belirtilir; repoda **yüksek oran + düşük fiyat** öncelikli; itfa tarihi V2'den sonra olmalı.
- Pay Senedi Repo (**2012**): **BIST 50**, ileri valör **2 iş günü**, fiyat Pay Piyasasındaki **son işlem fiyatı**, vade kırma mümkün, özsermaye hâllerinde **2 gün** işlem yok.
- Bitiş valörü tüm repo pazarlarında en fazla **1 yıl**.
`,
  sorular: [
    {
      s: "Borçlanma Araçları Piyasası repo pazarlarında **repo yapan taraf** işlemin **başlangıç valöründe (V1)** ne yapar?",
      c: ["Menkul kıymeti geri alma koşuluyla satar ve karşılığında para alır", "Para verir, menkul kıymet alır", "Anapara + faiz − stopaj öder ve menkul kıymeti geri alır", "Menkul kıymeti iade eder ve parayı geri alır", "Yalnızca teminat yatırır; menkul kıymet el değiştirmez"],
      d: 0,
      a: "Repo yapan taraf V1'de menkul kıymeti **V2'de geri almak koşuluyla satar** ve **para alır**; V2'de anapara + faiz − stopaj öder ve menkul kıymeti geri alır. Para veren taraf **ters repocudur**.",
      k: "1006 resmi not s. 109"
    },
    {
      s: "**Repo-Ters Repo Pazarında** emir girişi sırasında ters repo yapan taraf ile ilgili hangisi doğrudur?",
      c: ["Teslim alacağı menkul kıymetin ISIN kodunu ve fiyatını emir girişinde kendisi belirtir", "İşlemden önce repocu tarafın kimliğini ve üye kodunu öğrenir", "Teslim alacağı payı BIST 50 Endeksi paylarından seçer", "Teslim alacağı menkul kıymeti kendisi Takasbank'a bildirir", "Yalnız grubunu bilir; menkul kıymeti işlem gerçekleştikten sonra öğrenir"],
      d: 4,
      a: "Repo-Ters Repo Pazarında ters repocu yalnız **grup kodunu** (S: TL DİBS ve likidite senedi, K: döviz DİBS) bilir; menkul kıymeti işlem gerçekleşip **repocu bildirimi tamamladıktan sonra** öğrenir. ISIN ve fiyatın belirtildiği pazar **MK Tercihli Repo**'dur.",
      k: "1006 resmi not s. 109-110"
    },
    {
      s: "Repo-Ters Repo Pazarında **S grubu** hangi menkul kıymetleri kapsar?",
      c: ["Döviz ödemeli DİBS", "BIST 50 Endeksine dahil paylar", "Özel sektör tahvilleri ve finansman bonoları", "TL ödemeli DİBS ve TCMB likidite senetleri", "Kira sertifikaları ve VDMK"],
      d: 3,
      a: "**S grubu** TL ödemeli DİBS ve TCMB likidite senetlerini, **K grubu** döviz ödemeli DİBS'leri kapsar.",
      k: "1006 resmi not s. 110"
    },
    {
      s: "Repo-Ters Repo Pazarı ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["Ters repoyla alınan menkul kıymetler ilk işlemin vadesinden kısa olmak kaydıyla zincirleme repoda kullanılabilir", "Bankaların bu pazarda repoyla sağladığı fonlar zorunlu karşılığa tabi değildir", "Başlangıç ve bitiş valörleri arasına kupon ödemesi denk gelen menkul kıymetler repoya konu edilemez", "Ters repocu, aldığı menkul kıymetleri bitiş valörüne kadar serbestçe satabilir", "Repo bitiş valörü en fazla 1 yıl olabilir"],
      d: 3,
      a: "Repo karşılığı menkul kıymetler bitiş valörüne kadar ters repocu adına **bloke hesapta** tutulur ve **serbest kullanımına sunulmaz**. Yalnız ilk vadeden kısa **zincirleme repoda** kullanılabilir.",
      k: "1006 resmi not s. 110"
    },
    {
      s: "Repo-Ters Repo Pazarına sırasıyla şu **repo** emirleri girilmiştir: (1) %38, (2) %38, (3) %39, (4) %39, (5) %37. Öncelik sıralaması hangisidir?",
      c: ["1, 2, 3, 4, 5", "5, 1, 2, 3, 4", "3, 4, 1, 2, 5", "4, 3, 2, 1, 5", "3, 4, 5, 1, 2"],
      d: 2,
      a: "Repoda **en yüksek oran** önceliklidir; eşit oranlarda **zaman önceliği** uygulanır. Sıra **3, 4 (%39), 1, 2 (%38), 5 (%37)** olur. Aynı emirler ters repo olsaydı sıra 5, 1, 2, 3, 4 olurdu.",
      k: "1006 resmi not s. 111"
    },
    {
      s: "**Menkul Kıymet Tercihli Repo Pazarında** aynı orandaki iki **repo** emrinden hangisi önceliklidir?",
      c: ["Menkul kıymet fiyatı daha düşük olan", "Menkul kıymet fiyatı daha yüksek olan", "Tutarı daha büyük olan", "Bitiş valörü daha uzak olan", "Her zaman sisteme sonra giren"],
      d: 0,
      a: "MK Tercihli Repoda öncelik sırasıyla oran, fiyat ve zamandır. **Repo** emirlerinde en yüksek oran ve **en düşük fiyat**, ters repo emirlerinde en düşük oran ve en yüksek fiyat önceliklidir.",
      k: "1006 resmi not s. 111-113"
    },
    {
      s: "Menkul Kıymet Tercihli Repo Pazarında işleme konu edilecek menkul kıymetlerle ilgili hangisi doğrudur?",
      c: ["Döviz cinsinden ihraç edilen araçlar da işlem görebilir", "Yatırım kuruluşları kendi ihraç ettikleri araçları portföyleri hesabına repo yoluyla satabilir", "Getiri üzerinden işlem gören araçlarda emirler temiz fiyatla iletilir", "Kesin Alım Satım Pazarında işlemleri durdurulan araçlar bu pazarda işlem görmeye devam eder", "Aracın itfa tarihi işlemin bitiş valörüne eşit veya ondan önce olamaz"],
      d: 4,
      a: "İşleme konu aracın **itfa tarihi bitiş valörüne eşit veya daha erken olamaz**. Pazarda yalnız **TL cinsi** araçlar işlem görür; kuruluşlar kendi ihraçlarını portföyleri için repo yoluyla **satamaz**; Kesin Alım Satımda durdurulan araç burada da **durdurulur**; getiriyle işlem görenlerde **takas fiyatı** kullanılır.",
      k: "1006 resmi not s. 112"
    },
    {
      s: "**Pay Senedi Repo Pazarı** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["BIST 50 Endeksine dahil paylardan Genel Müdürlüğün uygun gördükleri işlem görür", "En fazla 2 iş günü ileri başlangıç valörlü emir iletilebilir", "İşleme konu payın fiyatı, Pay Piyasasında o anda gerçekleşen son işlem fiyatıdır", "Gerçekleşen işlemlerin vadesi hiçbir durumda kırılamaz", "Pay Piyasasında işlemler durursa bu pazarda da işlemler durdurulur"],
      d: 3,
      a: "Pay Senedi Repo Pazarında gerçekleşmiş işlemlerin **vadesi kırılabilir**; esaslarını **Takasbank** belirler. Pazar BIST 50 paylarıyla, en fazla 2 iş günü ileri başlangıç valörüyle çalışır.",
      k: "1006 resmi not s. 113-114"
    }
  ]
});
