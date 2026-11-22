SPL.gun("1006", 15, {
  okuma: `
## Bugünün haritası
Yeni bölüm: **Borsa İstanbul Borçlanma Araçları Piyasası (BAP)**. Bu piyasada tahviller, bonolar, kira sertifikaları ve repo işlemleri yapılır. Bugün piyasanın tarihçesini, temel kavramlarını, işlem gören araçları, işlem saatlerini ve öncelik kurallarını öğreneceğiz.

1. BAP'ın **amacı ve tarihçesi**
2. **Temel kavramlar**: fiyat, işlemiş faiz, temiz ve kirli fiyat, valör
3. BAP'ta **işlem yapabilecek kuruluşlar**
4. **İşlem görebilecek araçlar** ve işlem görmeye başlama
5. Kamu ve özel sektör borçlanma araçlarının **tanımları**
6. **İşlem saatleri**
7. **Emirlerin iletilmesi** ve piyasa izleme ekranı
8. **Öncelik kuralları** ve ilk emir tipleri

---

## 1. Amaç ve tarihçe
BAP, **sabit getirili menkul kıymetlerin** şeffaf ve rekabetçi ortamda işlem görmesini, likiditelerinin artmasını ve bilgi akışının hızlanmasını sağlamak için kuruldu.

| Tarih | Pazar |
|---|---|
| **17.06.1991** | **Kesin Alım Satım Pazarı** (BAP'ın başlangıcı) |
| **17.02.1993** | **Repo-Ters Repo Pazarı** |
| 16.04.2007 | **Uluslararası Tahvil Pazarı** kuruldu (13.09.2013'te BAP'a dâhil edildi) |
| 17.05.2010 | **Nitelikli Yatırımcıya İhraç Pazarı** |
| 17.12.2010 | **Menkul Kıymet Tercihli Repo Pazarı** |
| 07.12.2012 | **Pay Senedi Repo Pazarı** |
| 01.12.2017 | **Gözaltı Pazarı** |
| 02.07.2018 | **Taahhütlü İşlemler Pazarı** |

**Diğer piyasalar:** BAP bünyesindeki **Borsa İstanbul Para Piyasası** 14.10.2016'da; Swap Piyasasındaki **Para Swap Pazarı** 01.10.2018'de, **Kıymetli Madenler Swap Pazarı** 16.11.2020'de faaliyete geçti.

> [!bilgi] **Uluslararası Tahvil Pazarı**, Hazinenin yurt dışında ihraç ettiği dış borçlanma araçlarının (**eurotahvil**) işlem gördüğü pazardır.

---

## 2. Temel kavramlar
| Kavram | Anlamı |
|---|---|
| **Fiyat** | **100 birim nominal** üzerinden verilen değer. Hazinenin **altın tahvili** ve **altına dayalı kira sertifikasında** 1000/1000 saflıkta **1 gram altını** temsil eden 1 nominal için değer. Emir giriş yöntemine göre temiz, kirli veya takas fiyatı olabilir. |
| **İşlemiş faiz / birikmiş kira** | Dönemsel kupon faizinin (kira getirisinin), son kupon ödeme tarihinden (ilk dönemde ihraç tarihinden) **valör tarihine kadar** geçen gün sayısına (GGS) düşen kısmı |
| **Temiz fiyat** | İşlemiş faizi **içermeyen** fiyat |
| **Kirli fiyat** | İşlemiş faizi **içeren** fiyat |
| **Repo menkul kıymet fiyatı** | Menkul kıymet tercihli repoda belirtilen temiz veya kirli fiyat |
| **Valör2 fiyatı** | Menkul kıymet tercihli repoda repo oranı üzerinden hesaplanan V2 fiyatı |
| **Takas fiyatı** | İşlemin takas tutarının hesaplandığı fiyat |
| **İhraç değeri** | İlk ihraçtaki fiyat |
| **İtfa** | Vade sonunda anapara ve (varsa) kupon faizinin ödenmesi |
| **Kupon faizi** | Menkul kıymet üzerinde yazılı, belirli dönemlerde (6 ayda, yılda bir) ödenen faiz |
| **Nominal değer** | Üzerinde yazılı olan ve **vade sonunda** ödenecek anapara |

**İşlemiş faiz formülü:** İşlemiş faiz = Dönemsel kupon × (GGS / kupon dönemindeki gün sayısı). Sonuç 100 nominal başına ifade edilir.

> [!bilgi] **Örnek:** Dönemsel kuponu %20 olan, 182 günlük kupon döneminin 91. günündeki tahvilde işlemiş faiz = 20 × 91/182 = **10 TL** (100 nominal başına). Temiz fiyat 95 TL ise kirli fiyat **105 TL** olur.

| Satış türü | İhraç değeri |
|---|---|
| **İskontolu** satış | Nominal değerin **altında** |
| **Başabaş** satış | Nominal değere **eşit** |
| **Primli** satış | Nominal değerin **üstünde** |

### Diğer tanımlar
- **Repo:** SP araçlarının **geri alma taahhüdüyle satımı**. **Ters repo:** **geri satma taahhüdüyle alımı**.
- **Takas:** Borsadaki işlemlerden doğan borç ve alacakların karşılıklı ödenmesi.
- **TLREF:** Türk Lirası Gecelik Referans Faiz Oranı. **TLREFK:** Türk Lirası Gecelik **Katılım** Referans Getiri Oranı. BIST TLREF ve BIST TLREFK endeksleri bunların getirisini izler.
- **Valör tarihi:** Menkul kıymet ve nakit takasının gerçekleşeceği tarih.
- **Valör 1 (V1):** Repo-ters repo pazarları ve taahhütlü işlemler pazarında işlemin **başlangıç** valörü. **Valör 2 (V2):** **bitiş** valörü.

---

## 3. İşlem yapabilecek kuruluşlar
- Borsa düzenlemelerine göre **işlem yapma yetkisi verilmiş yatırım kuruluşları** ve **TCMB**.
- Şartları sağlayanlar **temsilci** olarak işlem yapabilir.
- Tüm üyeler **taahhütname** imzalamalı, **Takasbank**'ta hesap açtırmalı, Takasbank'ın belirlediği **teminatları** yatırmalı ve borsanın diğer yükümlülüklerini yerine getirmelidir.

---

## 4. İşlem görebilecek araçlar
- Araçları **pazar bazında yönetim kurulu** belirler; işlem görmeme kararı da alabilir.

| İhraççı | İşlem görmeye başlama |
|---|---|
| TCMB, Hazine, Hazinenin VKŞ'leri ve Hazinenin görevlendirdiği kamu sermayeli kurumların VKŞ'leri (yurt içi) | **İhraç günü**; ihale veya doğrudan satışla ihraçta **satış sonuçlarının ilanı anından** itibaren |
| Hazinenin **yurt dışı** ihraçları | **İhraç tarihinde** |
| Diğerleri | İşlem göreceği tarih **KAP**'ta ilan edilir |

> [!dikkat] Borsada veya borsa dışında **halka arz edilmeksizin** ihraç edilen araçlar BAP'ta **yalnızca nitelikli yatırımcılar arasında** alınıp satılabilir. Bu koşulu **yatırım kuruluşları** sağlar.

| Kamu menkul kıymetleri | Özel sektör menkul kıymetleri |
|---|---|
| Devlet tahvili, hazine bonosu, TCMB likidite senedi, gelir ortaklığı senedi, gelire endeksli senet, kamu kira sertifikası | Özel sektör tahvili, finansman bonosu, VDMK, VTMK, özel sektör kira sertifikası, yapılandırılmış borçlanma araçları |

Araçlar **TL veya döviz ödemeli** olabilir.

---

## 5. Borçlanma araçlarının tanımları
| Araç | Tanım ve vade |
|---|---|
| **DİBS** | Hazinenin **yurt içinde** ihraç ettiği borçlanma senetleri |
| **Devlet tahvili** | Vadesi **1 yıl (364 gün) ve daha uzun** DİBS |
| **Hazine bonosu** | Vadesi **1 yıldan kısa (364 güne kadar)** DİBS |
| **Gelire endeksli senet (GES)** | Getirisi **KİT**'lerden bütçeye aktarılan **hasılat paylarına** endeksli |
| **Gelir ortaklığı senedi (GOS)** | Köprü, baraj, santral, otoyol gibi kamu altyapı tesislerinin **gelirlerine ortak olma** hakkı; **mülkiyet ve işletmeyle ilişkisi yoktur** |
| **Likidite senedi** | **TCMB**'nin açık piyasa işlemleri çerçevesinde kendi nam ve hesabına çıkardığı para politikası aracı; **iskontolu**, **91 günü aşmayan** vadeli, tek toplu senet, ikincil piyasada alınıp satılabilir |
| **Özel sektör tahvili** | Vadesi **365 gün veya daha uzun** ÖSBA |
| **Finansman bonosu** | Vadesi **30 günden az, 364 günden fazla olmayan** borçlanma aracı |
| **VDMK** | **Varlık finansman fonunun (VFF)** veya **İFK**'nın devralacağı varlıklar karşılığında |
| **İDMK** | **Konut finansmanı fonunun (KFF)** veya İFK'nın devralacağı varlıklar karşılığında |
| **VTMK** | Bankalar, İFK, finansal kiralama, finansman, faktoring şirketleri, GYO'lar ve yetkili kamu kurumlarınca **teminat varlıklar** karşılığında |
| **İTMK** | **Yalnız KFK ve İFK**'ların ihraç ettiği, ihraççının **genel yükümlülüğü** olan, teminat havuzu karşılığında |
| **Kira sertifikası** | **VKŞ**'nin her türlü varlık ve hakkın finansmanı için ihraç ettiği; sahiplerine gelirden payları oranında hak veren menkul kıymet |
| **Altın tahvili / altına dayalı kira sertifikası** | **Hazine** veya **Hazine ve Maliye Bakanlığı Varlık Kiralama A.Ş.**'nin ihraç ettiği altına dayalı araçlar |

> [!dikkat] Kaynak, finansman bonosunu "vadesi **30 günden az**, 364 günden fazla olmayan" diye tanımlar. Akılda tutulacak üst sınır: **364 gün**. Özel sektör tahvili ise **365 gün ve üzeri**.

---

## 6. İşlem saatleri
- Saatleri **Borsa yönetim kurulu** belirler. İşlemler hafta içi **09:30 – 17:30** arasındadır; **Pay Senedi Repo Pazarı 10:00**'da başlar.
- **Aynı gün valörlü** işlemlerin bitiş saati tüm pazarlarda **14:00**'tür. **İstisna:** **yatırım fonlarının** aynı gün valörlü (veya aynı gün başlangıç valörlü) işlemleri **17:30**'a kadar yapılabilir.
- **Uluslararası Tahvil Pazarı**'nda **aynı gün valörlü emir girilemez**.

| Pazar | Aynı gün valörlü | İleri valörlü |
|---|---|---|
| Kesin Alım Satım, Repo-Ters Repo, MK Tercihli Repo, Taahhütlü İşlemler, Gözaltı | 09:30 – 14:00 | 09:30 – 17:30 |
| **Nitelikli Yatırımcıya İhraç** | 09:30 – 14:00 | **09:30 – 14:00** |
| **Pay Senedi Repo** | **10:00** – 14:00 | **10:00** – 17:30 |
| **Uluslararası Tahvil** | **Yok** | 09:30 – 17:30 |

> [!ezber] **09:00 – 09:30** arası, açık piyasa işlemleri kapsamında **Repo-Ters Repo** ve **Taahhütlü İşlemler** pazarlarına **yalnız TCMB** emir iletebilir.

---

## 7. Emirlerin iletilmesi
- Temsilciler emirleri BISTECH'e **uzaktan erişimle** işlem terminallerinden ve/veya **FIX** protokolüyle iletir.
- Sisteme erişim sorunu varsa emir **telefonla** iletilebilir: temsilci **kullanıcı kodunu** ve **tek kullanımlık SMS şifresini** söyler; emri **piyasa uzmanları** girer ve emir numarasını bildirir. Değişikliklerde bu numara söylenir.
- Üyeler **yalnız kendi emirlerini** görür; diğer üyelerin emirlerini göremez.
- **Piyasa izleme ekranı:** Tüm üyelerin aynı bilgiyi gördüğü ortak ekran; en iyi alım, satım, repo, ters repo ve taahhütlü işlem emirleri, son işlem bilgileri ve **derinlik** gösterilir.
- Emri giren üyenin kodu ekranlarda **gösterilmez**; karşı taraf bilgisi ancak **işlem gerçekleşince** öğrenilir.

---

## 8. Öncelik kuralları
- Emirlerde **fiyat/oran önceliği** ve **zaman önceliği** uygulanır.
- Pazarlarda kural olarak **çok fiyat yöntemi** uygulanır; tek fiyat ancak mevzuatta özel olarak belirtilen durumlarda.

| Pazar | Öncelik |
|---|---|
| **Kesin Alım Satım, Uluslararası Tahvil, Gözaltı, Nitelikli Yatırımcıya İhraç** | Alımda **en yüksek fiyat**, satımda **en düşük fiyat**; eşitse zaman |
| **Repo-Ters Repo, Pay Senedi Repo** | Repoda **en yüksek oran**, ters repoda **en düşük oran**; eşitse zaman |
| **MK Tercihli Repo, Taahhütlü İşlemler** | Repo ve geri alma taahhüdüyle satımda **en yüksek oran ve en düşük fiyat**; ters repo ve geri satma taahhüdüyle alımda **en düşük oran ve en yüksek fiyat** |

- Fiyat (oran) eşit olmayan eşleşmelerde **sistemde önce var olan emrin** fiyatı (oranı) işlem fiyatıdır.
- Aynı fiyatlı emirlerin miktarı ekranda **birikimli** gösterilir. Örnek: 93,750'de 1, 2 ve 3 milyonluk üç emir varsa ekranda **6.000.000** görünür.

> [!bilgi] **Repo** = parayı alan taraf (menkul kıymeti geri alma taahhüdüyle satar); yüksek oran öder, bu yüzden **en yüksek oranlı repo** öne geçer. **Ters repo** = parayı veren taraf; **en düşük oranı** isteyen öne geçer.

### Emir ve işlem türleri
Pazarlara **kesin alım, kesin satım, repo, ters repo, taahhütlü işlem** emirleri ile **özel işlem emri** ve **bağlayıcı olmayan** emirler iletilebilir.

| Emir | Özelliği |
|---|---|
| **Limitli emir** | Kesin alım-satımda **fiyat veya getiri + nominal tutar**; repoda **oran + işlem tutarı** (pazara göre menkul kıymet tanımı ve fiyatıyla). Koşul yoksa kalan kısım bekler. |
| **Piyasa emri** | **Yalnız miktar/tutar**; kalan kısım **otomatik iptal**. **Tek fiyat seansında girilemez**, yalnız sürekli müzayedede. |
| **Dengeleyici emir** | Tek fiyatta denge fiyatı hesabına katılmaz, kalan emirlerle eşleşir; kalan kısmı iptal edilir |
| **Kalanı iptal et** | Özel koşul; girildiği anda eşleşmeyen kısım iptal. Limitli, dengeleyici veya piyasa emriyle verilebilir. |

---

## Bugünün özeti
- BAP **17.06.1991**'de Kesin Alım Satım Pazarıyla başladı; Repo-Ters Repo **1993**, Taahhütlü İşlemler **2018**.
- Fiyat **100 nominal** üzerinden; altın tahvilinde **1 gram altın** başına.
- **Temiz fiyat** işlemiş faizsiz, **kirli fiyat** işlemiş faizli. İhraç değeri nominalin altındaysa **iskontolu**, üstündeyse **primli**.
- **V1** başlangıç, **V2** bitiş valörü.
- Hazine bonosu **< 1 yıl**, devlet tahvili **≥ 1 yıl**; likidite senedi **≤ 91 gün**, iskontolu; özel sektör tahvili **≥ 365 gün**; finansman bonosu **≤ 364 gün**.
- Halka arz edilmeyen araçlar yalnız **nitelikli yatırımcılar** arasında.
- İşlem saatleri **09:30-17:30**; aynı gün valör **14:00**'e kadar (fonlar 17:30); Pay Senedi Repo **10:00**'da başlar; **09:00-09:30 yalnız TCMB**.
- Kesin alımda **yüksek fiyat**, repoda **yüksek oran**, ters repoda **düşük oran** öncelikli.
`,
  sorular: [
    {
      s: "Borsa İstanbul Borçlanma Araçları Piyasası ilk olarak hangi pazarın açılmasıyla faaliyete geçmiştir?",
      c: ["Repo-Ters Repo Pazarı", "Kesin Alım Satım Pazarı", "Uluslararası Tahvil Pazarı", "Nitelikli Yatırımcıya İhraç Pazarı", "Menkul Kıymet Tercihli Repo Pazarı"],
      d: 1,
      a: "BAP **17.06.1991**'de **Kesin Alım Satım Pazarının** açılmasıyla faaliyete geçti. Repo-Ters Repo Pazarı 1993'te, Nitelikli Yatırımcıya İhraç ve MK Tercihli Repo pazarları 2010'da açıldı.",
      k: "1006 resmi not s. 90"
    },
    {
      s: "Borçlanma Araçları Piyasasında **kirli fiyat** ile ilgili hangisi doğrudur?",
      c: ["İşlemiş faizi içermeyen fiyattır", "Menkul kıymetin ilk ihraç sırasında yatırımcıya satıldığı fiyattır", "Menkul kıymetin vade sonunda ödenecek anapara tutarıdır", "İşlemiş faizi veya birikmiş kirayı da içeren fiyattır", "Repo oranı üzerinden hesaplanan Valör2 fiyatıdır"],
      d: 3,
      a: "**Kirli fiyat**, işlemiş faizi veya birikmiş kirayı **içeren** fiyattır. İşlemiş faizi içermeyen fiyat **temiz fiyat**, vade sonunda ödenen anapara **nominal değer**, ilk ihraç fiyatı **ihraç değeridir**.",
      k: "1006 resmi not s. 91"
    },
    {
      s: "İhraç değeri **nominal değerin üstünde** olan bir menkul kıymetin satışı nasıl adlandırılır?",
      c: ["İskontolu satış", "Başabaş satış", "Primli satış", "Kirli satış", "Temiz satış"],
      d: 2,
      a: "İhraç değeri nominal değerin **üstündeyse primli**, **altındaysa iskontolu**, **eşitse başabaş** satış yapılmış olur.",
      k: "1006 resmi not s. 91"
    },
    {
      s: "Borsada veya borsa dışında **halka arz edilmeksizin** ihraç edilen sermaye piyasası araçları Borçlanma Araçları Piyasasında kimler arasında alım satıma konu olabilir?",
      c: ["Tüm yatırımcılar arasında", "Yalnızca bankalar arasında", "Yalnızca yurt dışı yerleşik yatırımcılar arasında", "Yalnızca TCMB ile yatırım kuruluşları arasında", "Yalnızca nitelikli yatırımcılar arasında"],
      d: 4,
      a: "Halka arz edilmeksizin ihraç edilen araçlar BAP'ta **yalnızca SPK düzenlemelerinde tanımlanan nitelikli yatırımcılar** arasında alınıp satılabilir; bu koşulu işlem yapan yatırım kuruluşları sağlar.",
      k: "1006 resmi not s. 92"
    },
    {
      s: "TCMB'nin açık piyasa işlemleri çerçevesinde çıkardığı **likidite senetleri** ile ilgili hangisi doğrudur?",
      c: ["İskontolu olarak 91 günü aşmayan vadelerde ihraç edilir", "Kuponlu olarak 1 yıldan uzun vadelerle ihraç edilir", "Hazine nam ve hesabına ihraç edilir", "İkincil piyasada alınıp satılamaz", "Vadesi 365 gün veya daha uzun olan borçlanma aracıdır"],
      d: 0,
      a: "Likidite senetleri **TCMB** nam ve hesabına, **iskontolu** olarak **91 günü aşmayan** vadelerde, tek toplu senet şeklinde çıkarılır ve **ikincil piyasada** alınıp satılabilir.",
      k: "1006 resmi not s. 93"
    },
    {
      s: "**Gelir ortaklığı senetleri (GOS)** ile ilgili hangisi doğrudur?",
      c: ["Getirisi, KİT'lerden elde edilerek bütçeye aktarılan hasılat paylarına endekslenmiştir", "TCMB tarafından para politikası aracı olarak ihraç edilir", "Yatırımcısına altyapı tesisinin mülkiyetinden pay verir", "Altyapı tesislerinin gelirlerine ortaklık hakkı verir; mülkiyetle ilişkisi yoktur", "Yalnızca konut finansmanı kuruluşlarınca ihraç edilebilir"],
      d: 3,
      a: "GOS, köprü, baraj, santral gibi kamu altyapı tesislerinin **gelirlerine ortak olma** hakkı verir; yatırımcının tesisin **mülkiyeti ve işletmesiyle ilişkisi yoktur**. Getirisi KİT hasılat paylarına endeksli olan **GES**'tir.",
      k: "1006 resmi not s. 93"
    },
    {
      s: "Borçlanma Araçları Piyasasında **aynı gün valörlü** işlemler için seans bitiş saati ve bunun istisnası hangisinde doğru verilmiştir?",
      c: ["17:30; istisnası Pay Senedi Repo Pazarıdır", "16:00; istisnası Nitelikli Yatırımcıya İhraç Pazarıdır", "12:30; istisnası TCMB işlemleridir", "14:00; istisnası Uluslararası Tahvil Pazarıdır", "14:00; istisnası yatırım fonlarının işlemleridir"],
      d: 4,
      a: "Aynı gün valörlü işlemlerde bitiş saati tüm pazarlarda **14:00**'tür; **yatırım fonlarının** aynı gün valörlü işlemleri **17:30**'a kadar yapılabilir. Uluslararası Tahvil Pazarında ise aynı gün valörlü emir hiç girilemez.",
      k: "1006 resmi not s. 93-94"
    },
    {
      s: "**Repo-Ters Repo Pazarında** emirlerin önceliği ile ilgili hangisi doğrudur?",
      c: ["Repo emirlerinde en yüksek oranlı, ters repo emirlerinde en düşük oranlı emirler önceliklidir", "Repo emirlerinde en düşük oranlı, ters repo emirlerinde en yüksek oranlı emirler önceliklidir", "Yalnızca zaman önceliği uygulanır; oran dikkate alınmaz", "Tutarı en büyük olan emir, oranına bakılmaksızın önceliklidir", "Oran eşitliği olmayan eşleşmelerde sisteme sonradan gelen emrin oranı her zaman işlem oranı olur"],
      d: 0,
      a: "Repo emirlerinde **en yüksek oranlı**, ters repo emirlerinde **en düşük oranlı** emirler önceliklidir; oran eşitse zaman önceliği uygulanır. Oran eşit değilse **sistemde önce var olan** emrin oranı işlem oranıdır.",
      k: "1006 resmi not s. 95"
    }
  ]
});
