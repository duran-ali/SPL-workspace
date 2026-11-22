SPL.gun("1006", 16, {
  okuma: `
## Bugünün haritası
BAP'ın işleyiş kurallarına devam ediyoruz. Bugün **valör süreleri**, emirlerin **geçerliliği ve değiştirilmesi**, işlemlerin **iptali**, **piyasa yapıcılığı** ve menkul kıymetlerin **ISIN koduyla** nasıl tanımlandığı var. ISIN kodunu okumak sınavda pratik soru olarak çıkar.

1. **Gerçekleşmezse iptal et** emri
2. **Valör süreleri**
3. Emir büyüklükleri ve piyasa izleme ekranı
4. Emirlerin **geçerliliği**, **değiştirilmesi ve iptali**
5. Emirlerin gerçekleşmesi, işlemlerin bildirimi ve **fiyatların ilanı**
6. Gerçekleşen işlemlerin **iptali** ve repo karşılığı menkul kıymet bildirimi
7. BAP'ta **piyasa yapıcılığı**: DİBS ve ÖSBA sistemleri
8. **ISIN kodu** ve enstrüman yapısı
9. Yatırım fonları ve yatırım ortaklıklarının işlemleri

---

## 1. Gerçekleşmezse iptal et (FOK)
Emrin **tamamının** gerçekleşmesi koşuluyla verilen aktif emir. Girilir girilmez koşul sağlanmazsa **otomatik iptal** edilir. **Limitli emir** veya **piyasa emri** şeklinde verilebilir.

> [!bilgi] Pay Piyasasında FOK henüz devrede değildir; **BAP'ta kullanılır**.

---

## 2. Valör süreleri
**Valör:** işlemin takasının yapılacağı, menkul kıymet ve paranın el değiştireceği tarih.
- Kesin alım-satım emirleri **aynı gün valörlü** veya **ileri valörlü**;
- repo, ters repo ve taahhütlü işlem emirleri **aynı gün başlangıç valörlü** veya **ileri başlangıç valörlü** iletilebilir.

| Pazar / araç | Asgari valör | Azami valör | Gün türü |
|---|---|---|---|
| Kesin Alım Satım ve Gözaltı – **DİBS** | 0 | **90** | Takvim |
| Kesin Alım Satım – DİBS (**yabancı para**) | **1** | 90 | Takvim |
| Kesin Alım Satım – **altın tahvili / altına dayalı kira sertifikası** | 0 | **7** | Takvim |
| Kesin Alım Satım – **ÖSBA ve diğer** | 0 | **30** | Takvim |
| **Uluslararası Tahvil** | **1** | **15** | Takvim |
| **Nitelikli Yatırımcıya İhraç** | 0 | 7 | Takvim |
| **Repo-Ters Repo** | 0 | 7 | Takvim |
| **Pay Senedi Repo** | 0 | **2** | **İş günü** |
| **MK Tercihli Repo** | 0 | 7 | Takvim |
| **Taahhütlü İşlemler** | 0 | 7 | Takvim |

> [!dikkat] Repo pazarlarındaki süreler **başlangıç valörü** içindir. **Bitiş valörü** için azami süre **1 yıldır**.

> [!ezber] Asgari valörü **1** olanlar (aynı gün valör yok): **yabancı para DİBS** ve **Uluslararası Tahvil Pazarı**. Tek **iş günüyle** sayılan: **Pay Senedi Repo (0-2 iş günü)**.

---

## 3. Emir büyüklükleri ve piyasa izleme ekranı
- Emirler **asgari emir büyüklüğü ve katları** şeklinde iletilir; pazar ve araç bazında asgari ve azami büyüklükler belirlenmiştir. Kesin Alım Satım Pazarında **normal emirler**, **küçük emirler** ve **özel işlem emirleri** için ayrı sınırlar vardır.
- Kupür büyüklüğü farklı araçlarda esaslar farklı belirlenebilir.
- **Piyasa izleme ekranı:** her pazarda valör ve menkul kıymet/vade bazında **en iyi alım-satım emirleri** ve son işlemler görülür. **Üye kodları görünmez**; aynı fiyattaki miktarlar **birikimli** görünür. Kullanıcılar ekran tasarımını kendileri oluşturabilir.

---

## 4. Emirlerin geçerliliği, değiştirilmesi ve iptali
### Geçerlilik
| Emir | Geçerli olduğu saat |
|---|---|
| **Aynı gün valörlü** kesin alım-satım; repo ve taahhütlü işlemlerde **aynı gün başlangıç valörlü** | **14:00**'e kadar |
| **İleri valörlü** ve **ileri başlangıç valörlü** | Verildiği gün **17:30**'a kadar |
| **Nitelikli Yatırımcıya İhraç Pazarı** (tüm emirler) | **14:00**'e kadar |

- Gerçekleşmeyen tüm emirler **piyasa kapanışında otomatik iptal** edilir. BAP'ta **ertesi işlem gününe geçerli emir kalmaz**.

> [!bilgi] **Örnek:** 28.12.2022 saat 11:15'te girilen, valörü **aynı gün** olan limitli emir 14:00'e kadar bekler ve eşleşmezse **14:00'te** iptal olur. Valörü **30.12.2022** olsaydı **17:30'a** kadar beklerdi.

### Değiştirme ve iptal
- Karşılanmamış emirler ve kısmen karşılanmış emirlerin kalanları piyasa saatleri içinde **istenildiği an** değiştirilebilir veya iptal edilebilir.
- **Hesap tipi, hesap kodu ve hesap no değiştirilemez.**

| Pazar | Önceliği kaybettiren | Önceliği korutan |
|---|---|---|
| Kesin Alım Satım, Uluslararası Tahvil, Gözaltı, Nitelikli Yatırımcıya İhraç | **Fiyat/getiri** değişikliği, **nominal tutar artışı** | **Bilgi alanı** değişikliği, nominal tutar **azaltımı** |
| Repo-Ters Repo, Pay Senedi Repo | **Oran** değişikliği, **tutar artışı** | Bilgi alanı, tutar azaltımı |
| MK Tercihli Repo, Taahhütlü İşlemler | **Oran** ve **SP aracı fiyatı** değişikliği, tutar artışı | Bilgi alanı, tutar azaltımı |

---

## 5. Gerçekleşme, bildirim ve fiyat ilanı
- Bir alım veya satım emriyle **birden fazla karşıt emir** aynı anda karşılanabilir.
- Sistem **çok fiyat sürekli müzayede** yöntemiyle çalışır; bir menkul kıymette gün içinde birçok farklı fiyattan işlem olabilir.
- Üyeler kendi emirlerini karşılayarak **çapraz işlem** yapabilir.
- Emir aşamasında karşı taraf görülmez; işlem olunca taraflara **karşı üye bilgisi** verilir. İşleme taraf olmayanlar işlem bilgisini görür ama **tarafları öğrenemez**.
- İşlem defterleri günlük olarak **elektronik rapor dağıtım sistemi** ile üyelere gönderilir. Üyeler yalnız kendi işlemlerini görür.

### Fiyatların ilanı
- Kayda alınan fiyat ve oranlar **aynı gün Borsa bülteninde** ilan edilir; **her pazar için ayrı bülten** yayımlanır.
- Bültende en düşük, en yüksek ve ağırlıklı ortalama fiyat/getiri/oran, işlemiş faiz veya birikmiş kira, takas fiyatı, basit ve bileşik getiri, hacim ve sözleşme sayısı yer alır.

> [!dikkat] Üyenin kendi emirlerini karşılayarak yaptığı **tek üyenin taraf olduğu** işlemler **borsa kaydına alınmaz**; fiyat ve getirileri bültende yayımlanmaz. Ancak **hacim ve sözleşme sayısı** genel toplamlara eklenir.

---

## 6. Gerçekleşen işlemlerin iptali
**Kural:** Üye hatasından doğan işlemler **prensip olarak iptal edilmez**. Ancak alıcı ve satıcı üyelerin sistem üzerinden **elektronik** olarak istediği ve kabul edilebilir gerekçeye dayanan talepler değerlendirilir. Elektronik iletim mümkün değilse iki taraftan **yazılı** talep alınır.

**Kabul edilebilir gerekçeler:**
a) **Sehven** alış yerine satış (repo yerine ters repo vb.) veya tersi emir girmek,
b) Fiyat/getiri, oran, menkul kıymet tanımı, hesap tipi, hesap kodu, hesap no veya miktar girişinde **maddi hata**,
c) Portföyde veya müşteride **olmayan** nakdi veya aracı sehven satmak.

- İptal için **karşı tarafın da elektronik onayı** gerekir; iptal **KAP**'ta ilan edilir.
- Hatalı portföy/müşteri hesabı düzeltmeleri **Takasbank** prosedürüne göre yapılır.

### Repo karşılığı menkul kıymet bildirimi
Repo-Ters Repo Pazarındaki işlemlerin karşılığı olan menkul kıymetler **saat 15:00'e kadar** Takasbank ekranlarından üyelerce bildirilir. Bu saatten sonra, üyenin **yazılı talebi** ve Takasbank'ın uygun görmesiyle, takas tamamlanmamışsa ve temerrüt hükümleri saklı kalmak üzere yapılabilir.

---

## 7. BAP'ta piyasa yapıcılığı
Kesin Alım Satım Pazarında **iki ayrı** piyasa yapıcılığı sistemi vardır:

| | **DİBS piyasa yapıcılığı** | **ÖSBA piyasa yapıcılığı** |
|---|---|---|
| Esasları ve kuruluşları belirleyen | **Hazine** | **Borsa Genel Müdürlüğü** (başvuruları karara bağlar) |
| Kapsam | Çift taraflı kotasyon zorunlu **ölçüt ihraçlar** | Tüm **özel sektör borçlanma araçları** ve **kira sertifikaları** |
| Kimler olabilir? | Hazinenin belirlediği kuruluşlar | Kesin Alım Satım Pazarında yetkili **tüm yatırım kuruluşları** (ihraç öncesi veya sonrası **taahhütname** ile) |
| Takip | Borsa takip eder; ihlali **Hazineye** ve kuruluşa bildirir | Borsa |

- DİBS'te piyasa yapıcı kotasyonları **özel hesap tipiyle** iletilir; en iyi emirse izleme ekranına yansır ve veri dağıtım sayfalarında **piyasa yapıcının koduyla** ilan edilir.

### ÖSBA piyasa yapıcılığı ayrıntıları
- Değerlendirmede bakılanlar: geçmiş **Kesin Alım Satım Pazarı işlem hacmi**, geçmiş **temerrüt** durumu, geçmiş **piyasa yapıcılık performansı**.
- Karar ve menkul kıymet **KAP**'ta ilan edilir.
- Bir kuruluş birden fazla araçta, bir araçta birden fazla kuruluş olabilir; sayıları **Genel Müdürlük** sınırlayabilir.
- Piyasa yapıcılık **menkul kıymetin vadesi boyunca** sürer. Kuruluş **5 işlem günü** önceden **yazılı** bildirerek menkul kıymet bazında çekilebilir; KAP'ta ilan edilir.
- **Çift taraflı kotasyon** zorunludur. Emir tamamen veya kısmen gerçekleşir ya da iptal edilirse **10 dakika içinde** yeni emir girilmelidir.
- Bir menkul kıymette aynı anda **yalnız bir alış ve bir satış** piyasa yapıcı emri bulunabilir; yenisi girilince eskilerin kalanı **otomatik iptal** olur.
- Olağanüstü durumlarda faaliyet, kuruluşun talebiyle veya **resen** Genel Müdürlükçe geçici durdurulabilir; KAP'ta ilan edilir.

---

## 8. ISIN kodu ve enstrüman yapısı
- **Pay Senedi Repo Pazarı dışındaki** pazarlarda **Takasbank'ın ürettiği ISIN kodu** kullanılır. ISIN **12 hanedir**: ilk iki hane **ülke kodu (TR)**, son hane **kontrol hanesi**.
- **Pay Senedi Repo Pazarında** payların Pay Piyasasındaki **4-5 haneli pay kodları** kullanılır.

### Hazinenin yurt içi ihraçları
| Hane | Anlamı |
|---|---|
| 1-2 | **TR** |
| 3 | Tür: **T** devlet tahvili, **B** hazine bonosu, **H** halka arz, **G** GOS, **D** kira sertifikası |
| 4-9 | **İtfa tarihi** (GGAAYY), ör. 13 Mart 2023 = 130323 |
| 10 | TL: **T** tümü, **A** anapara, **K** kupon; yabancı para: **F** tümü, **P** anapara, **C** kupon |
| 11 | Aynı itfa tarihli benzer menkul kıymetlerin **sıra numarası** (1-9, sonra A-Z) |
| 12 | Kontrol hanesi |

### Diğer menkul kıymetler
| Hane | Anlamı |
|---|---|
| 1-2 | **TR** |
| 3 | Tür: **C** depo sertifikası, **D** kira sertifikası, **F** finansman bonosu, **N** gayrimenkul sertifikası, **S** özel sektör tahvili, **Z** diğer finansal enstrüman, **1** diğer özel sektör menkul kıymeti |
| 4-7 | **İhraççı kodu** |
| 8 | İtfa **ayı**: Ocak-Eylül **1-9**; Ekim **E**, Kasım **K**, Aralık **A** |
| 9-10 | İtfa **yılının** son iki hanesi |
| 11 | Sıra numarası |
| 12 | Kontrol hanesi |

> [!bilgi] **Örnekler:** **TRB131217T10** → 13 Aralık 2017 itfalı hazine bonosu. **TRT140126A12** → 14 Ocak 2026 itfalı devlet tahvilinin **anaparası**. **TRT140727K13** → 14 Temmuz 2027 itfalı devlet tahvilinin **kuponu**. **TRD080927T18** → 8 Eylül 2027 itfalı kira sertifikası. **TRT090824F19** → 9 Ağustos 2024 itfalı **yabancı para** devlet tahvilinin tümü. **TRSRSGY21818** → RSGY kodlu şirketin **Şubat 2018** itfalı özel sektör tahvili.

**Enstrüman yapısı:** BAP'taki enstrümanlar **menkul kıymet + pazar + valör** bilgisini içerir. Örnek: **TRT240724T15_KESN_T1** → Kesin Alım Satım Pazarında, işlem gününden **bir iş günü sonra** valörlü işlem.

---

## 9. Yatırım fonları ve yatırım ortaklıkları
- Fon ve ortaklık emirleri **yetkili kuruluşun yetkili elemanlarınca** iletilir; emrin hangi fon veya ortaklık için olduğu belirtilir ve **standart kodlar** kullanılır.
- Fon ve ortaklık emirleri, emri ileten kuruluşun **diğer emirleriyle eşleşebilir**.
- Repo-Ters Repo Pazarında fon adına yapılan **ters repolarda** menkul kıymetler bitiş valörüne kadar **fon adına saklanır**; üye bunları kendi hesabına kullanamaz.
- **Yatırım ortaklıkları** 14:00'ten sonra aynı gün valörlü emir **iletemez**. **Yatırım fonları** piyasa kapanışına kadar aynı gün valörlü işlem yapabilir.
- 14:00 – 17:30 arasındaki aynı gün valörlü fon işlemlerinde önce **fon emri** iletilir; kuruluş bu emri **kendisi karşılayabilir**. İşlemlerde, aynı gün valörlü işlemlerin bitişine kadar oluşan **ağırlıklı ortalama** fiyat ve oranlar referans alınır ve işlem **fon lehine** olmalıdır. Örneğin Kesin Alım Satım Pazarında fonun alımı AOF **veya altında**, satımı AOF **veya üzerinde** yapılır.

---

## Bugünün özeti
- **FOK** BAP'ta var: tamamı karşılanmazsa iptal.
- Valör: DİBS **0-90**, yabancı para DİBS **1-90**, altın **0-7**, ÖSBA **0-30**, Uluslararası Tahvil **1-15**, repo pazarları **0-7**, Pay Senedi Repo **0-2 iş günü**; repo bitiş valörü en çok **1 yıl**.
- Aynı gün valörlü emirler **14:00**'e, ileri valörlüler **17:30**'a kadar geçerli; ertesi güne emir kalmaz.
- Fiyat veya oran değişikliği ve tutar artışı **önceliği kaybettirir**; azaltma korur; hesap bilgileri değiştirilemez.
- Tek üyeli işlemler borsa kaydına girmez, fiyatı yayımlanmaz.
- İşlem iptali: kural olarak yok; **sehven yön**, **maddi hata**, **olmayan varlığı satma** gerekçeleri ve karşı taraf onayıyla; KAP'ta ilan.
- Repo karşılığı menkul kıymet bildirimi **15:00**'e kadar.
- DİBS piyasa yapıcılığı **Hazine**; ÖSBA piyasa yapıcılığı **Borsa**: çekilme **5 işlem günü** önce, yeni emir **10 dk** içinde.
- ISIN **12 hane**; Hazine kodunda 3. hane tür, 4-9 itfa tarihi, 10. hane T/A/K – F/P/C.
`,
  sorular: [
    {
      s: "Borçlanma Araçları Piyasası **Kesin Alım Satım Pazarında DİBS** işlemlerinde uygulanabilecek **azami valör süresi** nedir?",
      c: ["7 takvim günü", "15 takvim günü", "30 takvim günü", "90 takvim günü", "1 yıl"],
      d: 3,
      a: "Kesin Alım Satım ve Gözaltı Pazarında **DİBS** için valör **0-90 takvim günü**dür. ÖSBA için 0-30, altın tahvili için 0-7, Uluslararası Tahvil Pazarında 1-15 takvim günüdür. 1 yıl, repo işlemlerinde bitiş valörü sınırıdır.",
      k: "1006 resmi not s. 98"
    },
    {
      s: "Aşağıdaki pazarlardan hangisinde valör süresi **iş günü** olarak belirlenmiştir?",
      c: ["Repo-Ters Repo Pazarı", "Nitelikli Yatırımcıya İhraç Pazarı", "Menkul Kıymet Tercihli Repo Pazarı", "Taahhütlü İşlemler Pazarı", "Pay Senedi Repo Pazarı"],
      d: 4,
      a: "**Pay Senedi Repo Pazarında** başlangıç valörü **0-2 iş günü**dür. Diğer repo pazarları, Taahhütlü İşlemler ve Nitelikli Yatırımcıya İhraç Pazarında süre **0-7 takvim günü**dür.",
      k: "1006 resmi not s. 98"
    },
    {
      s: "Borçlanma Araçları Piyasasında **28 Aralık** saat 11:15'te girilen ve valörü **30 Aralık** olan bir kesin alım emri gerçekleşmezse ne zaman iptal olur?",
      c: ["28 Aralık saat 14:00'te", "28 Aralık saat 17:30'da", "29 Aralık saat 14:00'te", "30 Aralık saat 14:00'te", "30 Aralık saat 17:30'da"],
      d: 1,
      a: "**İleri valörlü** emirler verildikleri gün **17:30**'a kadar geçerlidir; gerçekleşmezse o gün 17:30'da iptal olur. Aynı gün valörlü olsaydı **14:00**'te iptal olurdu. BAP'ta ertesi güne geçerli emir kalmaz.",
      k: "1006 resmi not s. 99-100"
    },
    {
      s: "**Kesin Alım Satım Pazarında** bekleyen bir emir üzerinde yapılan aşağıdaki değişikliklerden hangisi emrin **önceliğini kaybettirir**?",
      c: ["Emrin bilgi alanının değiştirilmesi", "Emrin nominal tutarının azaltılması", "Emrin nominal tutarının artırılması", "Emrin hesap numarasının değiştirilmesi", "Emrin kısmen gerçekleşmesi"],
      d: 2,
      a: "Fiyat veya getiri değişikliği ve **nominal tutar artışı** önceliği kaybettirir. Bilgi alanı değişikliği ve tutar azaltımı önceliği korur. Hesap tipi, kodu ve numarası ise **hiç değiştirilemez**.",
      k: "1006 resmi not s. 100"
    },
    {
      s: "Bir üyenin kendi ilettiği emirleri karşılayarak gerçekleştirdiği **tek üyenin taraf olduğu** işlemler ile ilgili hangisi doğrudur?",
      c: ["Kayda alınmaz, fiyatı yayımlanmaz; hacim ve sözleşme sayısı toplamlara eklenir", "Borsa kaydına alınır ve fiyatları diğer işlemler gibi bültende yayımlanır", "Bu tür çapraz işlemler Borçlanma Araçları Piyasasında yapılamaz", "Yalnızca TCMB onayıyla ve özel işlem emri olarak gerçekleştirilebilir", "Hacim ve sözleşme sayısı dâhil hiçbir bilgisi bültene yansımaz"],
      d: 0,
      a: "Üyeler kendi emirlerini karşılayarak **çapraz işlem** yapabilir. Bu tek üyeli işlemler **borsa kaydına alınmaz** ve fiyat-getirileri bültende yayımlanmaz; ancak **işlem hacmi ve sözleşme sayısı** genel toplamlara eklenir.",
      k: "1006 resmi not s. 100-101"
    },
    {
      s: "Borçlanma Araçları Piyasasında gerçekleşen bir işlemin **iptali** ile ilgili hangisi **yanlıştır**?",
      c: ["Üye hatasından doğan işlemler prensip olarak iptal edilmez", "Sehven alış yerine satış emri girilmesi kabul edilebilir bir gerekçedir", "Emir girişinde fiyat veya miktarda maddi hata yapılması kabul edilebilir bir gerekçedir", "İptal için karşı tarafın onayı aranmaz; talep eden üyenin başvurusu yeterlidir", "İptal işlemi Kamuyu Aydınlatma Platformunda ilan edilir"],
      d: 3,
      a: "İptal, talep eden üyenin elektronik başvurusunun ardından **karşı tarafın da elektronik onayı** gönderilince Borsa tarafından yapılabilir ve **KAP**'ta ilan edilir.",
      k: "1006 resmi not s. 101"
    },
    {
      s: "Borçlanma Araçları Piyasasında **özel sektör borçlanma araçları piyasa yapıcılığı** ile ilgili hangisi doğrudur?",
      c: ["Esasları ve piyasa yapıcı kuruluşları Hazine belirler", "Piyasa yapıcı, bir menkul kıymette aynı anda birden fazla alış emri bulundurabilir", "Yalnızca bankalar piyasa yapıcı olarak başvurabilir", "Piyasa yapıcı, bildirimde bulunmadan istediği an faaliyetten çekilebilir", "Emirleri gerçekleşen piyasa yapıcı 10 dakika içinde yeni emir girmek zorundadır"],
      d: 4,
      a: "ÖSBA piyasa yapıcısı **çift taraflı kotasyon** vermek zorundadır; emirleri gerçekleşir veya iptal edilirse **10 dakika içinde** yeni emir girmelidir. Aynı anda yalnız bir alış ve bir satış emri bulunabilir; çekilmek için **5 işlem günü** önceden yazılı bildirim gerekir. Esasları Hazinenin belirlediği sistem **DİBS** piyasa yapıcılığıdır.",
      k: "1006 resmi not s. 102"
    },
    {
      s: "**TRT140126A12** ISIN kodlu menkul kıymet aşağıdakilerden hangisidir?",
      c: ["14 Ocak 2026 itfalı devlet tahvilinin anaparası", "14 Ocak 2026 itfalı hazine bonosunun tümü", "14 Ocak 2026 itfalı devlet tahvilinin kuponu", "14 Ocak 2026 itfalı kira sertifikası", "14 Ocak 2026 itfalı yabancı para devlet tahvilinin anaparası"],
      d: 0,
      a: "3. hane **T** devlet tahvili, 4-9. haneler **140126** itfa tarihi (14 Ocak 2026), 10. hane **A** TL ihraçta **anapara** demektir. Kupon için K, yabancı para anapara için P kullanılırdı.",
      k: "1006 resmi not s. 103-104"
    }
  ]
});
