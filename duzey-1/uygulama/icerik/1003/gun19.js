SPL.gun("1003", 19, {
  okuma: `
## Bugünün haritası
1. Vadeli fiyatın teorik fiyattan sapması ve **arbitraj**
2. **Opsiyon sözleşmeleri:** taraflar, prim, fiyatı etkileyen faktörler
3. **Opsiyon türleri:** Amerikan/Avrupa, alım/satım, kârda/zararda/başabaş
4. **Varantlar** ve opsiyonlardan farkları
5. **Bölüm V:** GVK geçici 67. madde: kapsam, matrah, zarar mahsubu
6. Hisse senedi **kâr payı** ve **alım-satım kazancı** vergilendirmesi

---

## 1. Arbitraj
- Spotta açığa satış zor olduğu için düşüş bekleyenler VİOP'ta yoğun kısa pozisyon açabilir. Bu, vadeli fiyatı **teorik değerin altına** itebilir.
- **Arbitraj**, piyasalar arasındaki fiyat uyumsuzluğundan **risksiz kâr** elde etmektir.
- **Örnek:** vadeli fiyat teorik fiyatın çok üstündeyse arbitrajcı **spottan alır, vadelide satar**. Bu işlemler fiyatı kısa sürede teorik seviyeye çeker.

---

## 2. Opsiyon sözleşmeleri
- **Tanım:** opsiyon satıcısı (yazıcı, writer), aldığı **prim** karşılığında alıcıya belirli bir varlığı belirli bir fiyattan **alma (call)** ya da **satma (put)** **hakkı** verir.
  - **Hak yalnızca alıcıdadır.** Satıcı **koşullu bir yükümlülük** altındadır.
- **Kullanım fiyatı (strike):** hak kullanılırsa geçerli olacak fiyattır. Hakkın kullanılmasına **işleme koyma (exercise)** denir.

| | **Alım opsiyonu (call)** | **Satım opsiyonu (put)** |
|---|---|---|
| **Alıcı (long)** | **Alma** hakkı | **Satma** hakkı |
| **Satıcı (short)** | Kullanılırsa **satma** yükümlülüğü | Kullanılırsa **alma** yükümlülüğü |

- Opsiyon **sigortaya** benzer; prim sigorta primi gibidir. Hak kullanılsın ya da kullanılmasın **prim geri ödenmez**.
- Alıcının primden başka **yükümlülüğü yoktur**.

### Opsiyon fiyatını (primi) etkileyen faktörler

| Faktör artarsa | **Alım** primi | **Satım** primi |
|---|---|---|
| Dayanak varlık fiyatı | **+** | **−** |
| Kullanım fiyatı | **−** | **+** |
| Vadeye kalan gün | **+** | **+** |
| Volatilite | **+** | **+** |
| Piyasa faiz oranı | **+** | **−** |
| Temettü | **−** | **+** |

Opsiyonun **Amerikan ya da Avrupa tipi** olması da primi etkiler.

- **Organize piyasada** takas merkezi karşı taraf olur ve **satıcı teminat yatırır**. Taraflar yalnızca **prim** ve **kullanım fiyatı** üzerinde pazarlık eder; diğer her şey standarttır.
- **OTC opsiyonlar** forward'a benzer. Satıcının yükümlülüğünü yerine getireceği garanti değildir; alıcı **kredi riski** taşır.

---

## 3. Opsiyon türleri

### Kullanım zamanına göre
- **Amerikan tipi:** hak vade sonuna kadar **her an** kullanılabilir.
- **Avrupa tipi:** hak **yalnızca vade sonunda** kullanılabilir.

### Kâr ve zarar profili

| Pozisyon | Beklenti | Kâr | Zarar |
|---|---|---|---|
| **Call alıcısı** | Fiyat **yükselecek** | Teorik olarak **sınırsız** | **Primle sınırlı** |
| **Call satıcısı** | Fiyat düşecek ya da primden fazla artmayacak | **Primle sınırlı** | **Büyük** (fiyat arttıkça artar) |
| **Put alıcısı** | Fiyat **düşecek** | Fiyat düştükçe artar | **Primle sınırlı** |
| **Put satıcısı** | Fiyat yükselecek ya da düşmeyecek | **Primle sınırlı** | **Büyük** |

### Dayanak varlığa göre
- **Finansal:** pay, endeks, tahvil, faiz, döviz.
- **Vadeli işlem sözleşmeleri üzerine:** ABD'de SEC yasağı nedeniyle **CFTC** düzenlemesiyle doğmuştur.
- **Emtia:** petrol, altın, buğday.
- **Diğer:** reel opsiyonlar, hava durumu, iklim.

### Piyasaya göre
- **Borsa opsiyonları:** standarttır; şeffaf fiyat, takas merkezi, teminat sistemi ve likidite sağlar.
- **OTC opsiyonları:** esnektir; **egzotik opsiyonlar** genelde burada işlem görür.

### Kullanım fiyatı ile spot fiyat ilişkisine göre

| Durum | **Alım (call)** | **Satım (put)** |
|---|---|---|
| **Kârda (in the money)** | Kullanım fiyatı **<** spot | Kullanım fiyatı **>** spot |
| **Zararda (out of the money)** | Kullanım fiyatı **>** spot | Kullanım fiyatı **<** spot |
| **Başabaş (at the money)** | Kullanım fiyatı **=** spot | Kullanım fiyatı **=** spot |

Fark büyükse "**aşırı** kârda" ya da "**aşırı** zararda" denir. Fiyatlar çok yakınsa "**başabaşa yakın**" denir.

---

## 4. Varantlar
- **Tanım:** bir dayanak varlığı önceden belirlenen fiyattan, belirli bir tarihte ya da tarihe kadar **alma veya satma hakkı** veren sermaye piyasası aracıdır. Yani **menkul kıymetleştirilmiş opsiyondur**.

| | **Opsiyon** | **Varant** |
|---|---|---|
| İşlem yeri | Vadeli işlem piyasası (**VİOP**) | Spot piyasa: BİAŞ **Pay Piyasası** |
| Özellikleri kim belirler? | **Borsa** (standart) | **İhraççı** (esnek, standart vade yok) |
| Teminat | Satıcı teminat yatırır; **margin call** olabilir | Yatırımcıdan **teminat istenmez**; risk **primle sınırlıdır** |
| Yazan taraf | **Herkes** yazıcı olabilir | **Yalnızca ihraççı** (yatırım kuruluşu ya da halka açık ortaklık); yatırımcı yazıcı **olamaz** |

---

## 5. GVK geçici 67. madde (Bölüm V)

### Tevkifata tabi gelirler (başlıcaları)
- **BİAŞ'ta işlem gören hisse** alım-satım kazançları
- **DİBS ve özel sektör** tahvil ve bonolarının faiz gelirleri ve alım-satım kazançları
- **Mevduat** faizi, **repo** geliri
- Katılım bankası **kâr payları**
- **Vadeli işlem ve opsiyon** gelirleri
- **Aracı kuruluş varantı** gelirleri
- **Yatırım fonu katılma payı** gelirleri, yatırım ortaklığı hisse kazançları
- **Kira sertifikası** gelirleri, altına dayalı DİBS ve kira sertifikaları
- **Kaldıraçlı işlemler** (döviz, kıymetli maden), **ödünç işlemleri**, **Darphane sertifikaları**

### Tevkifata tabi olmayan gelirler
- **Hisse senedi kâr payları**
- **Hazine Eurobond**'ları ve yurt dışında ihraç edilen VKŞ kira sertifikalarının getirileri
- **Tam mükellef kurumların** BİAŞ'ta **1 yıldan fazla** tuttuğu hisselerin satış kazancı
- Portföyünün sürekli **en az %51**'i BİAŞ hisselerinden oluşan fonların **1 yıldan fazla** tutulan paylarının kazancı (TEFAS'ta işlem görmeyen **serbest fonlar hariç**)
- Tam mükellef kurumların **yurt dışında** ihraç ettiği tahvillerin faizi ve kira sertifikalarının geliri
- **1.1.2006'dan önce** ihraç ya da iktisap edilen menkul kıymetlerin gelirleri

### Kapsam ve kişiler
- Kapsam, Türkiye'de ihraç edilmiş ve SPK kaydında olan ya da Türkiye'deki borsalarda işlem gören araçlardır. Ayrıca **Hazine ve kamu tüzel kişilerinin** ihraç ettiği tüm menkul kıymetler (kayıtsız olsalar bile) kapsamdadır.
- Banka ve aracı kurumların taraf olduğu vadeli işlem, opsiyon ve **kaldıraçlı işlem** sözleşmeleri "diğer sermaye piyasası aracı" sayılır.
- **Tevkifat kişiye bakmaz:** gerçek/tüzel, tam/dar mükellef, vergiden muaf ya da istisna olması **fark etmez**.

### Matrah kuralları
- **Alım-satımda matrah:** satış bedeli − alış bedeli.
  - **Komisyon** ve **BSMV** dikkate alınır; **başka gider indirilemez**.
- **Farklı tarihli alımlarda** alış bedeli **FİFO** (ilk giren ilk çıkar) ile belirlenir.
  - Aynı gün işlemlerde ağırlıklı ortalama fiyat bilgisi kullanılabilir, ama matrah yine FİFO'ya göre belirlenir.
  - Alımdan **önce** satış yapılırsa (açığa satış) satıştan **sonraki ilk alım** esas alınır.
- **Dövize, altına endeksli** araçlarda alış ve satış bedellerinin **işlem tarihindeki TL karşılıkları** esas alınır.
- **Yabancı para cinsinden ihraç edilen** araçlarda **kur farkı dikkate alınmaz**.
- **İtfada matrah:** itfa bedeli − alış bedeli. **Dönemsel getiride:** getiri tutarı. **Ödünçte:** ödünç verenin aldığı bedel.

### Zarar mahsubu
- **Aynı türden** araçlarda, **üç aylık dönem** içindeki zararlar kârlardan düşülür.
- Dönem sonucu zararsa zarar **takvim yılını aşmamak** şartıyla izleyen üç aylık döneme devredilir.
- **Yılın son çeyreğindeki zarar devredilemez.**

| Grup | Aynı tür sayılanlar |
|---|---|
| **I** | Sabit getirili menkul kıymetler |
| **II** | Değişken getirili menkul kıymetler. Hisseye ya da hisse endeksine dayalı **vadeli işlem, opsiyon** ve **aracı kuruluş varantları** ile **hisse senedi yoğun fonlar** **hisselerle aynı grupta** sayılır. |
| **III** | Diğer menkul kıymetler ve sermaye piyasası araçları. Menkul kıymete bağlı **olmayan** türev işlemler ve hisse dışı dayanaklı varantlar buradadır. |
| **IV** | Yatırım fonu katılma payları ve yatırım ortaklığı hisseleri |

---

## 6. Hisse senedi gelirlerinin vergilendirilmesi (gerçek kişiler)

### Kâr payı
- Geçici 67 **kapsamı dışındadır**.
- Kâr payı dağıtılırken GVK md. 94'e göre **%15** stopaj yapılır (22.12.2024'ten itibaren).
- **Tam mükellef kurumlardan** alınan kâr payının **yarısı istisnadır**. Kalan tutar **beyan sınırını** aşarsa (2025 için **330.000 TL**) beyan edilir. Kesilen %15'in **tamamı** mahsup edilir.
- **Dar mükellef** AŞ ve limited şirketlerden alınan kâr payının yarısı şu iki şartla istisnadır:
  1. Sermayenin **en az %50**'sine sahip olunmalıdır.
  2. Kâr payı, beyanname tarihine kadar **Türkiye'ye transfer** edilmelidir.

> [!dikkat]
> Beyan sınırı (330.000 TL) **her yıl güncellenir**. Sınavda soruda verilen tutarı esas al.

### Alım-satım kazancı
- BİAŞ hisseleri (**MKYO hariç**), hisse ya da hisse endeksine dayalı vadeli işlem ve opsiyonlar, BİAŞ'taki aracı kuruluş varantları ve **hisse senedi yoğun fonlar** için tevkifat oranı **%0**'dır.
- 1.1.2006'dan itibaren edinilen hisselerde tüm tam ve dar mükellef gerçek kişiler için oran **%0**'dır (2008/14272 sayılı BKK). **Yıllık ya da münferit beyanname verilmez**.
`,
  sorular: [
    {
      s: "Opsiyon sözleşmeleriyle ilgili hangisi doğrudur?",
      c: ["Hem alıcıya hem satıcıya hak tanır.", "Opsiyon primi, hak kullanılmazsa alıcıya iade edilir.", "Hak yalnızca alıcıdadır; satıcı koşullu bir yükümlülük altındadır.", "Alım opsiyonu satıcısının zararı primle sınırlıdır.", "Satım opsiyonu, alıcısına dayanak varlığı önceden belirlenen fiyattan satın alma hakkı verir."],
      d: 2,
      a: "Opsiyonda **hak yalnızca alıcıdadır**; satıcı (yazıcı) alıcı hakkını kullanırsa yerine getireceği **koşullu bir yükümlülük** taşır. Prim, hak kullanılsın ya da kullanılmasın iade edilmez.",
      k: "1003 resmi not s. 179"
    },
    {
      s: "Diğer koşullar sabitken dayanak varlığın volatilitesi artarsa alım ve satım opsiyonlarının primleri nasıl etkilenir?",
      c: ["Alım primi artar, satım primi azalır.", "Alım primi azalır, satım primi artar.", "Her ikisi de artar.", "Her ikisi de azalır.", "Etkilenmez."],
      d: 2,
      a: "Volatilite ve vadeye kalan süre **hem alım hem satım** opsiyonunun primini **artırır**. Dayanak fiyatı ve faiz ise alım primini artırıp satım primini azaltır.",
      k: "1003 resmi not s. 180"
    },
    {
      s: "Sahibine hakkını yalnızca vade sonunda kullanma imkânı veren opsiyon türü hangisidir?",
      c: ["Amerikan tipi opsiyon", "Avrupa tipi opsiyon", "Egzotik opsiyon", "Kârda opsiyon", "Başabaş opsiyon"],
      d: 1,
      a: "**Avrupa tipi** opsiyonda hak **yalnızca vadede** kullanılır. Amerikan tipinde vadeye kadar her an kullanılabilir.",
      k: "1003 resmi not s. 181"
    },
    {
      s: "Spot fiyatı 50 TL olan bir payın üzerine yazılmış, kullanım fiyatı 45 TL olan bir satım (put) opsiyonu hangi durumdadır?",
      c: ["Kârda", "Zararda", "Başabaş", "Aşırı kârda", "Başabaşa yakın"],
      d: 1,
      a: "Satım opsiyonu, kullanım fiyatı spottan **yüksekse** kârda, **düşükse** **zararda**dır. 45 < 50 olduğu için bu put **zararda**dır; 45'ten satma hakkı, piyasada 50'ye satılabilen bir varlık için değersizdir.",
      k: "1003 resmi not s. 182"
    },
    {
      s: "Varantlarla ilgili hangisi **yanlıştır?**",
      c: ["Borsa İstanbul'da Pay Piyasası'nda işlem görür.", "Özellikleri ihraççı tarafından belirlenir.", "Yatırımcının maksimum riski ödediği primle sınırlıdır.", "Yatırımcılar varant yazarak ihraççı konumuna geçebilir.", "Yatırımcıdan teminat istenmez."],
      d: 3,
      a: "Her varantın **tek bir ihraççısı** vardır; yatırımcı varant **yazamaz**, bu yüzden risk yaratan taraf olamaz ve teminat istenmez.",
      k: "1003 resmi not s. 183"
    },
    {
      s: "Aşağıdaki gelirlerden hangisi GVK geçici 67. madde kapsamında **tevkifata tabi değildir?**",
      c: ["Mevduat faizi", "Repo geliri", "Hisse senedi kâr payı", "Yatırım fonu katılma payı geliri", "Vadeli işlem sözleşmesi geliri"],
      d: 2,
      a: "**Hisse senedi kâr payları** geçici 67 kapsamı dışındadır; GVK md. 94'e göre ayrıca stopaj yapılır.",
      k: "1003 resmi not s. 184"
    },
    {
      s: "Bir yatırımcı aynı hisseyi farklı tarihlerde ve fiyatlarda almış, sonra bir kısmını satmıştır. Geçici 67 kapsamında tevkifat matrahında hangi alış bedeli esas alınır?",
      c: ["Son alış fiyatı (LIFO)", "İlk alış fiyatı (FİFO)", "Tüm alışların basit ortalaması", "En yüksek alış fiyatı", "En düşük alış fiyatı"],
      d: 1,
      a: "Farklı tarihli alımlarda alış bedeli **ilk giren ilk çıkar (FİFO)** yöntemiyle belirlenir. Aynı gün işlemlerde ağırlıklı ortalama bilgisi kullanılabilir, ama matrah yine FİFO'ya göredir.",
      k: "1003 resmi not s. 186"
    },
    {
      s: "Geçici 67 kapsamında zarar mahsubuyla ilgili hangisi doğrudur?",
      c: ["Farklı türdeki araçların zararları birbirinin kârından mahsup edilebilir.", "Yılın son üç aylık döneminde oluşan zarar ertesi yıla devredilir.", "Aynı tür araçlarda dönem zararı kârdan mahsup edilir; kalan zarar yıl içinde sonraki döneme devreder.", "Geçici 67 kapsamında zararlar hiçbir şekilde mahsup edilemez.", "Aynı takvim yılı içinde, hisse senedi zararları sabit getirili menkul kıymetlerden elde edilen kârlardan mahsup edilir."],
      d: 2,
      a: "Mahsup yalnızca **aynı tür** araçlar arasında, **üç aylık dönem** içinde yapılır. Kalan zarar **takvim yılını aşmamak** üzere devredilir; **son çeyreğin zararı devredilemez**.",
      k: "1003 resmi not s. 186"
    }
  ]
});
