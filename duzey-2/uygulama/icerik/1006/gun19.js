SPL.gun("1006", 19, {
  okuma: `
## Bugünün haritası
Borçlanma Araçları Piyasasının kalan pazarlarıyla bölümü bitiriyoruz. Önce dünkü repo pazarlarını **karşılaştırıyor**, sonra **Uluslararası Tahvil**, **Nitelikli Yatırımcıya İhraç**, **Gözaltı** ve **Taahhütlü İşlemler** pazarlarını öğreniyoruz.

1. **Repo pazarlarının karşılaştırılması**
2. **Uluslararası Tahvil Pazarı** ve bağlayıcı olmayan emir
3. **Nitelikli Yatırımcıya İhraç Pazarı**: BAP'ın tek birincil piyasası
4. **Gözaltı Pazarı**
5. **Taahhütlü İşlemler Pazarı** ve Takasbank'ın vazgeçme hakkı
6. BAP pazarları **tek tabloda**

---

## 1. Repo pazarlarının karşılaştırılması
**MK Tercihli Repo** ile **Pay Senedi Repo** işleyiş olarak birbirine benzer; **Repo-Ters Repo** ise farklıdır.

| Karşılaştırma | **Repo-Ters Repo** | **MK Tercihli Repo** | **Pay Senedi Repo** |
|---|---|---|---|
| Menkul kıymet emirde belirtilir mi? | **Hayır**; ters repocu yalnız TL/döviz grup kodunu bilir | **Evet** | **Evet** |
| Emirde belirtilenler | Valör, miktar ve **yalnız oran** | Valör, miktar, oran, **araç ve fiyatı** | Valör, miktar, oran ve **pay** |
| Eşleşme için | Oran | **Oran + araç + fiyat** | **Oran + araç** (fiyat = Pay Piyasasındaki son işlem fiyatı) |
| Repocu ne verebilir? | Yalnız **kamu** araçları (DİBS, likidite senedi) | Kamu araçları **ve özel sektör borçlanma araçları** | **Paylar** |

---

## 2. Uluslararası Tahvil Pazarı
- **Hazinenin dış borçlanma araçları** (eurotahvil) ve **döviz cinsi** SP araçları kotasyon düzenlemelerine göre işlem görür.
- İletilebilen emirler: **kesin alım**, **kesin satım**, **özel işlem emri** ve **bağlayıcı olmayan emir**.

> [!bilgi] **Bağlayıcı olmayan emir:** Fiyat/getiri veya miktar (ya da ikisi) ile araç ve valör girilerek iletilir. Sistemde **ilan tahtası** işlevi görür; kuruluşun işlem talebini duyurur ama **işleme dönüşemez**.

| Konu | Kural |
|---|---|
| Emir para birimi | Aracın **ihraç edildiği döviz** |
| Emir büyüklüğü | Asgari **10.000** nominal (Hazinenin asgari kupürüne göre); azami **5.000.000** nominal |
| Valör | En az **1 iş günü**, en fazla **15 gün** |
| Fiyat tabanı | **100 birim** |
| Fiyat adımı | **0,0001** |
| Yöntem | Çok fiyat sürekli müzayede; alımda en yüksek, satımda en düşük fiyat öncelikli |

---

## 3. Nitelikli Yatırımcıya İhraç Pazarı
- **Amaç:** SPK düzenlemelerine göre **nitelikli yatırımcılara** ihraç edilecek araçların satışının borsada yapılması. **17.05.2010**'da faaliyete geçti.
- BAP bünyesinde **birinci el ihraç işlemlerinin yapılabildiği tek pazardır**. Burada yalnız nitelikli yatırımcılara satılacak **özel sektör** ihraçları yapılabilir.
- İhraç edilebilenler (SPK'ca kayda alınmış): özel sektör tahvilleri, finansman bonoları, VDMK, VTMK, özel sektör kira sertifikaları.

### İhraç sonrası
- İhracı tamamlanan araçlar, ihracın tamamlanmasını veya satış süresinin bitişini **izleyen iş günü**, herhangi bir şart aranmaksızın **Kesin Alım Satım Pazarında nitelikli yatırımcılar arasında** işlem görmeye başlar.
- İşlemlerin nitelikli yatırımcılar arasında yapılmasından emirlere aracılık eden **yatırım kuruluşları sorumludur**.
- Araçlar **borsa dışında** da işlem görebilir.

### Satış kuralları
| Konu | Kural |
|---|---|
| **Satış süresi** | En fazla **10 iş günü** |
| **Pazarda satış zorunluluğu** | Satış bildirilen tutarın **tümü** pazarda satılmalıdır |
| Satılamayan kısım | Ek süre alınarak yeniden satılabilir; **ikinci kez de satılamazsa iptal** edilir |
| İhraç fiyatı | İhraççı satış süresince **serbestçe** belirler; karşılanmamış emrin fiyatını değiştirebilir |
| Satış emri | **Yalnız ihraca aracılık eden kurum** girebilir; ikinci el işlem olmadığı için başka satış emri olamaz |
| Öncelik | Satış emrinin karşılanmasında **en yüksek fiyatlı alım** emirleri önce; eşitse zaman |
| Valör | Aynı gün ve **7 güne kadar** ileri valör |
| Emir büyüklüğü | **50.000 – 100.000.000 TL** |
| Adım | Fiyatta **0,001**, getiride **%0,01** |

### Resen işlem iptali
Aşağıdaki hâllerde işlemler, BAP iptal prosedürüne bağlı olmadan **resen iptal** edilir:
a) İşlemin belirlenen **valör dışında** gerçekleşmesi,
b) Satıcının **ihraca aracılık eden kuruluş olmaması** veya kuruluşun ihraççı hesabına olmayan satış emri girmesi,
c) **SPK'nın tahsis ettiği limitin üzerinde** satış yapılması (limiti aşan işlemler gerçekleşme zamanına göre iptal edilir).

---

## 4. Gözaltı Pazarı
- **Amaç:** Önceden Kesin Alım Satım Pazarında işlem görürken **Kotasyon Yönergesi** hükümlerine göre Gözaltı Pazarına alınmasına karar verilen araçların işlem görmesi. **01.12.2017**'de faaliyete geçti.
- **Aynı gün veya ileri valörlü** kesin alım-satım işlemleri yapılır. Valör, fiyat tipi, emir giriş yöntemi ve adımlar **Kesin Alım Satım Pazarıyla aynıdır**.
- Emir büyüklüğü **10.000 – 100.000.000**.
- Temiz fiyatlı bir aracın **bir sonraki kupon oranı**, kupon ödeme gününden **bir işlem günü önce saat 17:30**'a kadar borsaya bildirilmezse, aracın işlemleri **Genel Müdür** tarafından durdurulabilir.

### Gözaltı Pazarına alınma
- İhraççı **anapara ödemesinin yapılamayacağını** KAP'ta açıklarsa ve toplam nominalin **en az üçte ikisi** oranındaki yatırımcıdan muvafakatname alınarak borçlanma aracının **yeniden yapılandırıldığını** itfa tarihine kadar KAP'ta açıklarsa, aracın **tamamı** Gözaltı Pazarına alınabilir.

> [!dikkat] Gözaltı Pazarına alınan borçlanma araçları **tekrar Kesin Alım Satım Pazarına alınmaz**.

---

## 5. Taahhütlü İşlemler Pazarı
- **02.07.2018**'de faaliyete geçti.
- İşleme konu aracın **önceden belli olduğu**, aynı gün veya ileri başlangıç valörlü **geri alma taahhüdüyle satım** ve **geri satma taahhüdüyle alım** işlemleri yapılır.
- İşlem görenler: **Hazinenin kurduğu VKŞ'ler** ve Hazinenin görevlendirdiği **kamu sermayeli kurumların VKŞ'lerinin** ihraç ettiği **TL ödemeli kira sertifikaları** ile yönetim kurulunun belirlediği diğer araçlar.
- Emirler: **oran, tutar, V1, V2, araç ve aracın fiyatı**.

| Konu | Kural |
|---|---|
| Emir büyüklüğü | **10.000 – 100.000.000** |
| İleri başlangıç valörü | En fazla **7 gün** |
| Bitiş valörü | En fazla **1 yıl** |
| Adım | Oranda **%0,01**, araç fiyatında **0,001 TL** |
| Fiyat tipi | Kesin Alım Satım Pazarındaki tipi; getiriyle işlem görenlerde **takas fiyatı** |

### İşlemin akışı
| Valör | Geri alma taahhüdüyle **satan** üye | Geri satma taahhüdüyle **alan** üye |
|---|---|---|
| **V1** | **Menkul kıymeti** teslim eder | **Nakdi** öder |
| **V2** | Menkul kıymeti **Takasbank'tan satın alır**, nakdi Takasbank'a öder | Menkul kıymeti **Takasbank'a satar**, nakdi alır |

> [!ezber] Taahhütlü işlemlerde **V2'de karşı taraf Takasbank'tır**. Takasbank V2'deki işlemlerden **birinden veya ikisinden**, **sebep göstermeksizin vazgeçebilir** ve bundan hukuki sorumluluğu doğmaz.

- Takasbank **ikisinden de** vazgeçerse: V1'de üyeler arasında takası yapılan işlem geçerli olur; V2'de takas alacağı/borcu doğmaz.
- **Birinden** vazgeçerse: vazgeçilen işlemde alacak/borç doğmaz; diğeri için Takasbank ile üye arasında taahhüt edilen işlem gerçekleşir.
- V1 ile V2 arasına **dönemsel getiri ödemesi** denk gelen araçlar işleme konu **edilemez**.
- Kesin Alım Satım veya diğer pazarlarda işlemleri durdurulan araçlar burada da **durdurulur**.

---

## 6. BAP pazarları tek tabloda
| Pazar | Kuruluş | Ne işlem görür? | Valör | Emir büyüklüğü |
|---|---|---|---|---|
| **Kesin Alım Satım** | 1991 | Kamu ve özel borçlanma araçları, GMS | DİBS 0-90, altın 0-7, diğer 0-30 gün | Küçük / normal emirler |
| **Repo-Ters Repo** | 1993 | DİBS ve likidite senedi (grup) | 0-7 gün; bitiş ≤ 1 yıl | 10.000-990.000 / 1 mn-400 mn |
| **Uluslararası Tahvil** | 2007 (BAP'ta 2013) | Eurotahvil, döviz cinsi araçlar | 1 iş günü-15 gün | 10.000-5 mn nominal |
| **Nitelikli Yatırımcıya İhraç** | 2010 | Nitelikli yatırımcıya özel sektör ihraçları (birincil) | 0-7 gün | 50.000-100 mn TL |
| **MK Tercihli Repo** | 2010 | Tercih edilen TL araçlar | 0-7 gün; bitiş ≤ 1 yıl | 10.000-100 mn |
| **Pay Senedi Repo** | 2012 | BIST 50 payları | 0-2 iş günü; bitiş ≤ 1 yıl | 10.000-100 mn |
| **Gözaltı** | 2017 | Gözaltına alınan borçlanma araçları | Kesin Alım Satım gibi | 10.000-100 mn |
| **Taahhütlü İşlemler** | 2018 | Hazine VKŞ'lerinin TL kira sertifikaları | 0-7 gün; bitiş ≤ 1 yıl | 10.000-100 mn |

---

## Bugünün özeti
- Repo-Ters Repoda menkul kıymet emirde **belirtilmez**; MK Tercihli ve Pay Senedi Repoda **belirtilir**. MK Tercihli Repoda **özel sektör** araçları da verilebilir.
- Uluslararası Tahvil: **bağlayıcı olmayan emir** (ilan tahtası, işleme dönüşmez); valör **1 iş günü-15 gün**; adım **0,0001**.
- Nitelikli Yatırımcıya İhraç (**2010**): BAP'ın **tek birincil** pazarı; satış süresi **≤ 10 iş günü**; tutarın **tümü** pazarda satılmalı; satış emrini **yalnız aracı kurum** girer; ihraçtan sonraki iş günü Kesin Alım Satımda **nitelikli yatırımcılar arasında**.
- Gözaltı (**2017**): yeniden yapılandırmada **üçte iki** muvafakat; geri dönüş **yok**.
- Taahhütlü İşlemler (**2018**): Hazine VKŞ kira sertifikaları; V2'de karşı taraf **Takasbank**, sebep göstermeden **vazgeçebilir**.
`,
  sorular: [
    {
      s: "Repo pazarlarının karşılaştırılmasıyla ilgili aşağıdakilerden hangisi doğrudur?",
      c: ["Repo-Ters Repo Pazarında repocu, kamu araçlarının yanında özel sektör borçlanma araçlarını da verebilir", "Repo-Ters Repo Pazarında emir girişinde menkul kıymetin ISIN kodu belirtilir", "Pay Senedi Repo Pazarında işlemin gerçekleşmesi için payın fiyatının da emirde eşleşmesi gerekir", "MK Tercihli Repo Pazarında repocu özel sektör borçlanma araçlarını da verebilir", "Üç pazarda da işlem karşılığı yalnızca devlet iç borçlanma senetleri kullanılır"],
      d: 3,
      a: "MK Tercihli Repoda kamu araçlarına ek olarak **özel sektör borçlanma araçları** da verilebilir. Repo-Ters Repoda yalnız **kamu** araçları verilir ve menkul kıymet emirde belirtilmez. Pay Senedi Repoda fiyat emirde yer almaz; Pay Piyasasındaki **son işlem fiyatı** kullanılır.",
      k: "1006 resmi not s. 114-115"
    },
    {
      s: "Uluslararası Tahvil Pazarında kullanılan **bağlayıcı olmayan emir** ile ilgili hangisi doğrudur?",
      c: ["İlan tahtası işlevi görür; talebi duyurur ama işleme dönüşmez", "Belirli bir karşı kuruluşa iletilir ve yalnızca o kuruluş tarafından görülür", "Fiyat belirtilmeden yalnızca miktarla iletilen ve kalanı iptal edilen emirdir", "Yalnızca Hazine tarafından ihraç sırasında kullanılır", "Tek fiyat seansında denge fiyatı hesabına katılmayan emirdir"],
      d: 0,
      a: "Bağlayıcı olmayan emir, sistemde **ilan tahtası** kullanılarak kuruluşun işlem talebini duyurur ve **işleme dönüşemez**. Karşı kuruluşa iletilen emir **özel işlem emri**, yalnız miktarla girilen emir **piyasa emri**, tek fiyatta kalan emirlerle eşleşen emir **dengeleyici emirdir**.",
      k: "1006 resmi not s. 115"
    },
    {
      s: "**Uluslararası Tahvil Pazarında** emirlerin valör süresi nedir?",
      c: ["Aynı gün ile en fazla 7 gün", "En az 1 iş günü, en fazla 15 gün", "Aynı gün ile en fazla 30 gün", "En az 2 iş günü, en fazla 90 gün", "En az 1 iş günü, en fazla 1 yıl"],
      d: 1,
      a: "Uluslararası Tahvil Pazarında emirler **en az bir iş günü, en fazla on beş gün** valörlü olabilir; aynı gün valörlü emir girilemez. Fiyat adımı 0,0001'dir.",
      k: "1006 resmi not s. 116"
    },
    {
      s: "**Nitelikli Yatırımcıya İhraç Pazarı** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["BAP bünyesinde birinci el ihraç işlemlerinin yapılabildiği tek pazardır", "Pazarda yapılacak ihraçta satış süresi 10 iş gününden fazla olamaz", "Satış emrini yalnızca ihraca aracılık eden kurum girebilir", "Satılamayan kısım ek süre alınmadan ertesi gün borsa dışında satılabilir", "İhracı tamamlanan araçlar izleyen iş günü Kesin Alım Satım Pazarında nitelikli yatırımcılar arasında işlem görür"],
      d: 3,
      a: "Borsada satış bildirilen tutarın **tümünün pazarda satılması zorunludur**. Satılamayan kısım **ek süre alınarak** pazarda yeniden satılabilir; ikinci kez de satılamazsa **iptal** edilir.",
      k: "1006 resmi not s. 116"
    },
    {
      s: "Nitelikli Yatırımcıya İhraç Pazarında aşağıdaki durumlardan hangisi işlemin **resen iptal** edilmesine yol açmaz?",
      c: ["İşlemin belirlenen valör dışında bir valörde gerçekleşmesi", "Satıcının ihraca aracılık eden yatırım kuruluşu olmaması", "SPK'nın tahsis ettiği limitin üzerinde satış yapılması", "İhraççının satış süresi içinde satış fiyatını değiştirmesi", "Aracı kuruluşun ihraççı hesabına olmayan satış emri girmesi"],
      d: 3,
      a: "İhraççı satış fiyatını satış süresi boyunca **serbestçe belirleyebilir** ve değiştirebilir; bu bir iptal sebebi değildir. Valör dışı işlem, satıcının aracı kurum olmaması veya ihraççı hesabına olmayan satış ve **SPK limitinin aşılması** resen iptal sebepleridir.",
      k: "1006 resmi not s. 117"
    },
    {
      s: "Bir borçlanma aracının **Gözaltı Pazarına** alınmasıyla ilgili hangisi doğrudur?",
      c: ["Gözaltı Pazarına alınan araç, kupon ödemesini zamanında yaptığında Kesin Alım Satım Pazarına geri döner", "Gözaltı Pazarı 1991'de Kesin Alım Satım Pazarıyla birlikte kurulmuştur", "Gözaltı Pazarında emirler yalnızca tek fiyat yöntemiyle ve günde bir kez eşleşir", "Gözaltı Pazarında valör süreleri Kesin Alım Satım Pazarından farklıdır ve en fazla 2 iş günüdür", "Anaparanın ödenemeyeceği açıklanıp üçte iki muvafakatle yeniden yapılandırılan araç bu pazara alınabilir"],
      d: 4,
      a: "Anapara ödemesinin yapılamayacağı KAP'ta açıklanır ve nominalin **en az üçte ikisi** oranındaki yatırımcının muvafakatiyle yeniden yapılandırma itfaya kadar KAP'ta açıklanırsa aracın tamamı Gözaltı Pazarına alınabilir. Gözaltı Pazarına alınan araç **Kesin Alım Satım Pazarına geri dönmez**; pazar 2017'de kuruldu ve Kesin Alım Satım kurallarıyla çalışır.",
      k: "1006 resmi not s. 117-118"
    },
    {
      s: "**Taahhütlü İşlemler Pazarında** bitiş valöründe (V2) ne olur?",
      c: ["Alan üye menkul kıymeti Takasbank'a satar, satan üye Takasbank'tan geri satın alır", "Geri satma taahhüdüyle alım yapan üye menkul kıymeti doğrudan karşı üyeye iade eder", "İşlem otomatik olarak bir yıl daha uzatılır ve oran yeniden belirlenir", "Menkul kıymet TCMB'ye teslim edilir ve nakit TCMB tarafından ödenir", "Geri alma taahhüdüyle satım yapan üye menkul kıymeti ihraççı VKŞ'ye iade eder"],
      d: 0,
      a: "V2'de geri satma taahhüdüyle alan üye aracı **Takasbank'a satar** ve nakdi alır; geri alma taahhüdüyle satan üye aracı **Takasbank'tan satın alır** ve nakdi öder. Takasbank bu işlemlerden birinden veya ikisinden **sebep göstermeksizin vazgeçebilir**.",
      k: "1006 resmi not s. 118"
    },
    {
      s: "Taahhütlü İşlemler Pazarında **Takasbank'ın bitiş valöründeki iki işlemden de vazgeçmesi** hâlinde ne olur?",
      c: ["İşlem iptal edilir ve başlangıç valöründe yapılan takas da geri alınır", "Takasbank, vazgeçtiği işlemler nedeniyle üyelere tazminat ödemekle yükümlü olur", "Başlangıç valöründeki işlem geçerli olur; bitişte alacak veya borç doğmaz", "İşlem, Takasbank yerine karşı üyeyle yapılmak üzere bir sonraki iş gününe ertelenir", "SPK işlemi incelemeye alır ve kararını KAP'ta açıklar"],
      d: 2,
      a: "Takasbank **iki işlemden de** vazgeçerse V1'de üyeler arasında takası yapılan işlem **geçerli olur** ve V2'de başka takas alacağı/borcu doğmaz. Takasbank üzerinde **hukuki sorumluluk doğmaz**.",
      k: "1006 resmi not s. 118"
    }
  ]
});
