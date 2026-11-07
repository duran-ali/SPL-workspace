SPL.gun("1003", 15, {
  okuma: `
## Bugünün haritası
1. **Vadeli mevduat** ile **para piyasası fonu** karşılaştırması
2. **Borçlanma araçları fonları:** vade sınıfları ve alt türler, **yan hesap**
3. **Hisse senedi fonları:** hisse senedi yoğun fon, endeks fon, BYF, iştirak ve sektör fonları
4. İşlem sırası kapatılan payların **değerlemesi**
5. **Değişken** ve **karma** fonlar
6. **Fon sepeti** fonları ve **katılım** fonları

---

## 1. Vadeli mevduat mı, PPF mi?

| | **Vadeli mevduat** | **Para piyasası fonu** |
|---|---|---|
| Getiri | Vade başında **sabit ve kesin** | Taahhüt yok; günlük piyasa faizine göre oluşur |
| Erken çekme | Genelde **tüm faiz kaybedilir** | Vade beklemeden satılır, **o güne kadarki getiri kaybedilmez** |
| Maliyet | Doğrudan maliyet yok | Günlük **fon yönetim ücreti** kesilir; **net** getiriye bakılır |
| Faiz artışına uyum | Yavaş | **Daha hızlı**; günlük yeniden fiyatlanır |

- PPF ve KVBAF, izahnamede yazıyorsa **otomatik alım-satım** yapabilir. Örneğin hesaptan para çekilince fon payı ayrıca talimat almadan satılır. Bunun için dağıtıcı kurum kendi portföyünü geçici olarak kullanabilir.

---

## 2. Borçlanma araçları fonları
- Tebliğ md. 6-1.a: fon değerinin **en az %80**'i **devamlı olarak** borçlanma araçlarına (tahvil, bono, kira sertifikası) yatırılır.
- Getiri **faiz + sermaye kazancı veya kaybından** oluşur. Faiz düşerse fon değer kazanır.

| Fon unvanı | Ağırlıklı ortalama vade | Faiz riski |
|---|---|---|
| **Kısa vadeli** | **25 – 90 gün** | Düşük |
| **Orta vadeli** | **91 – 730 gün** | Orta |
| **Uzun vadeli** | **730 günden fazla** | Yüksek |

| Fon türü | Ana risk | İhraççı |
|---|---|---|
| **Kamu borçlanma araçları** | **Faiz riski**; kredi riski ihmal edilebilir | T.C. Hazinesi |
| **Özel sektör borçlanma araçları** | Faiz + **kredi (spread)** + **likidite** riski | Türk şirketleri |
| **Eurobond** | **Kur + Türkiye CDS + küresel faizler** | Hazine / Türk şirketleri |
| **Yabancı borçlanma araçları** | Kur + küresel faizler | Yabancı devlet ve şirketler |

- **Eurobond fonlarının** unvanında "(Döviz)" yazar ama **"Yabancı" yazmaz**, çünkü ihraççı yerlidir. FED faiz artırırsa CDS ve kur sabit kalsa bile fiyat **düşebilir**.
- **"Yabancı"** unvanı için fon değerinin **en az %80**'i yabancı ihraççı varlığı olmalıdır. Bu fonlar yabancı kamu borçlanma araçlarına **%35**'e kadar yatırım yapabilir. Türkiye CDS'inden **etkilenmezler**.

### Yan hesap (side pocket)
- **Şartlar (ikisi birlikte):**
  1. Bir özel sektör borçlanma aracı ya da kira sertifikası için temerrüt nedeniyle **%100 karşılık** ayrılmış olmalıdır.
  2. Bu varlığın değeri fon toplam değerinin **%5'ini aşmalıdır**.
- Sorunlu varlık **Takasbank**'ta açılan ayrı bir **yan hesaba** aktarılır.
- Varlık yalnızca karşılığın ayrıldığı **tarihte fonda olan** yatırımcılarla ilişkilendirilir. Sonra gelen yatırımcılar bu riski taşımaz. İleride tahsilat olursa para yan hesaptaki yatırımcılara gider.
- Bu işin maliyetlerini **kurucu** karşılar, fon değil.

---

## 3. Hisse senedi fonları
- Fon değerinin **en az %80**'i devamlı olarak yerli ya da yabancı **paylara** yatırılır.
- **Hisse senedi yoğun fon:**
  - Portföyün **en az %80**'i **BİAŞ'ta işlem gören paylardan** oluşur (**MKYO payları hariç**).
  - Paylara dayalı vadeli işlem, opsiyon primi ve aracı kuruluş varantları da hesaba katılabilir.
  - Unvanında **"(Hisse Senedi Yoğun Fon)"** yazar ve **vergi avantajı** sağlar.

### Endeks fon
- Bir endeksi birebir taklit eder (**pasif yönetim**).
- Endeks ve portföy **en az 6 farklı ihraççı** payından oluşur; tek bir hissenin ağırlığı **en fazla %30** olabilir.
- Fon birim pay değeri ile endeks arasındaki **korelasyon en az %90** olmalıdır.

### Endeks fon ve borsa yatırım fonu (BYF)

| | **Endeks fon** | **BYF (ETF)** |
|---|---|---|
| İşlem yeri | TEFAS, banka, aracı kurum | **Borsa İstanbul Pay Piyasası** |
| Fiyat | Günde **tek fiyat** | Seans boyunca **anlık** fiyat |
| Fiyat ve değer | Her zaman **net aktif değer** | Piyasa fiyatı; NAD'a göre **prim veya iskonto** olabilir |
| Yönetim ücreti | Görece **yüksek** | Görece **düşük** |
| İşlem maliyeti | Genelde komisyonsuz | **Aracı kurum komisyonu** ödenir |
| Takas | Fonun valörü | Hisse gibi **T+2** |

### İştirak ve sektör fonları

| | **İştirak fonu** | **Sektör fonu** |
|---|---|---|
| Ne yapar? | Belirli bir grubun **iştiraklerine** yatırım yapar | Bir **sektöre** odaklanır (unvandaki sektöre en az **%80**) |
| Muafiyet | **%20 grup limiti** ve **5/40** uygulanmaz | 5/40 ve grup sınırları uygulanmaz |
| Tek şirket limiti | **%10** (aynen geçerli) | **%20**'ye yükseltilmiştir |
| Risk | **Grup riski:** şirketler arası korelasyon yüksektir | **Sektörel yoğunlaşma**, yüksek oynaklık |

---

## 4. İşlem sırası kapatılan paylar (Rehber 5.1.1)
- **İlk 5 işlem günü:** kapanıştan önceki **son işlem fiyatı** kullanılmaya devam edilir.
- **6. iş gününden** itibaren kapalılık sürüyorsa **karşılık** ayrılır:

| Paydaki ağırlık | Karşılık |
|---|---|
| **%1'e kadar** | **1 gün** içinde değer sıfırlanır |
| **%1 – %5** | **30 gün** boyunca eşit tutarlarla sıfırlanır |
| **%5'ten fazla** | **90 gün** boyunca eşit tutarlarla sıfırlanır |

- Değer **artışları** da aynı ihtiyatla, ani değil **kademeli** olarak yansıtılır.

---

## 5. Değişken ve karma fonlar
- **Değişken fon:** hisse senedi, borçlanma aracı ya da para piyasası fonu tanımına **girmeyen** fondur.
  - **Asgari yoğunlaşma zorunluluğu yoktur.** Yönetici bir varlığı %0'a, diğerini %100'e çıkarabilir.
  - Başarı ölçümü için **karşılaştırma ölçütü** yerine **eşik değer** (hurdle rate) belirleyebilir. Eşik değer, örneğin repo endeksi, mevduat ya da TÜFE artı bir ek getiridir. **Getiri taahhüdü değildir**; bir alt sınırdır.
- **Karma fon:** portföyün tamamı paylar, borçlanma araçları, altın ve kıymetli madenler gibi varlıklardan oluşur.
  - Bu gruplardan **en az ikisinin** her biri **en az %20** olmalıdır.
  - Bu ikisinin **toplamı en az %80** olmalıdır.
- **Değişken şemsiye fon kotası:** bir PYŞ, risk değerli olanlar dahil **en fazla 4** değişken fon ihraç edebilir; her risk değeri grubundan en fazla **bir** fon olabilir.
- **Risk değerine göre unvanlar:**

| Risk değeri | Unvan |
|---|---|
| 1 – 2 | Muhafazakâr, Temkinli |
| 3 – 4 | Dengeli |
| 4 – 5 | Atak, Dinamik, Büyüme |
| 5 – 7 | Agresif |

---

## 6. Fon sepeti ve katılım fonları

### Fon sepeti fonu
- Portföyü ağırlıklı olarak **diğer fonların katılma paylarından** oluşur.
- Kurallar:
  - Tek bir fona ya da BYF'ye en fazla **%20** yatırılır.
  - Başka bir **fon sepeti fonuna yatırım yapılamaz**.
  - Bir fonun toplam payının en fazla **%25**'i alınabilir.
  - **Serbest fon** payları en fazla **%10** olabilir.
- Yatırım yapılan fonların ücretleri, fon sepeti fonunun **gideri** sayılır.

### Katılım fonları
- Portföyün **tamamı** devamlı olarak **faize dayalı olmayan** araçlardan oluşur:
  - kira sertifikası (sukuk),
  - katılma hesabı,
  - ortaklık payı,
  - altın ve kıymetli madenler.
- **Mevduat, devlet tahvili, hazine bonosu ve faizli repo alınamaz.** Bunların yerine katılma hesabı, kira sertifikası ve **vaad sözleşmesi** kullanılır.
- **Pay seçimi** iki yolla yapılır:
  1. Uygunluğu onaylanmış endekslerden seçim (ör. **Katılım 30, Katılım 50**).
  2. Endeks dışı varlıklarda **danışman ya da Danışma Kurulu onayı**.
- Danışman ya da Danışma Kurulu üyelerinin kimlikleri ve uzmanlıkları izahnamede veya KAP'ta açıklanır.
- **Mahzurlu gelirin arındırılması (purification):**
  - Tutar fon mal varlığından ya da yönetim ücretinden karşılanabilir; **Danışma Kurulu icazeti** gerekir.
  - Arındırmayı izleyen **5 iş günü** içinde tutar ve aktarılan kurum KAP'ta açıklanır.
  - Bu tutar **toplam gider oranına dahil edilmez**.
- **Para piyasası katılım fonu** ve **kısa vadeli kira sertifikaları katılım fonu** aynı vade sınırlarına tabidir. Ancak **%10 DİBS zorunluluğundan muaftır**.
`,
  sorular: [
    {
      s: "Ağırlıklı ortalama vadesi 400 gün olan bir borçlanma araçları fonu unvanında hangi vade ifadesini kullanır?",
      c: ["Kısa vadeli", "Orta vadeli", "Uzun vadeli", "Para piyasası", "Vade ifadesi kullanılamaz"],
      d: 1,
      a: "Kısa vadeli **25–90 gün**, orta vadeli **91–730 gün**, uzun vadeli **730 günden fazla**dır. 400 gün **orta vadeli** aralığa girer.",
      k: "1003 resmi not s. 141"
    },
    {
      s: "Bir yatırım fonunun unvanında \"Yabancı\" ibaresinin yer alabilmesi için fon toplam değerinin en az yüzde kaçı yabancı ihraççıların varlıklarından oluşmalıdır?",
      c: ["%35", "%50", "%60", "%80", "%100"],
      d: 3,
      a: "\"Yabancı\" unvanı için fon değerinin **en az %80**'i yabancı ihraççı varlıklarından oluşmalıdır. Eurobond fonlarında ihraççı yerli olduğu için \"Yabancı\" ibaresi kullanılmaz.",
      k: "1003 resmi not s. 143"
    },
    {
      s: "Yatırım fonlarında \"yan hesap\" uygulamasının devreye girmesi için hangi koşullar birlikte gerekir?",
      c: ["Varlığa %50 karşılık ayrılması ve değerinin fonun %1'ini aşması", "Varlığa %100 karşılık ayrılması ve değerinin fonun %5'ini aşması", "Varlığın işlem sırasının kapatılması ve 5 iş günü geçmesi", "Fonun tasfiye kararı alması", "Yatırımcıların %50'sinin talep etmesi"],
      d: 1,
      a: "Temerrüt nedeniyle varlığa **%100 karşılık** ayrılmış olmalı ve varlığın değeri fon değerinin **%5'ini aşmalıdır**. Sorunlu varlık Takasbank'taki ayrı bir yan hesaba aktarılır.",
      k: "1003 resmi not s. 143"
    },
    {
      s: "Bir fonun \"Endeks Fon\" unvanını taşıyabilmesi için hangisi gereklidir?",
      c: ["Portföyün en az 10 farklı ihraççının payından oluşması ve tek hissenin ağırlığının %10'u aşmaması", "Tek bir hissenin ağırlığının en fazla %10 olması", "En az 6 farklı ihraççı payı ve tek hissenin ağırlığının en fazla %30 olması", "Fonun katılma paylarının borsada işlem görmesi", "Endeksle korelasyon katsayısının en az %70 olması"],
      d: 2,
      a: "Endeks fonda endeks ve portföy **en az 6 farklı ihraççı** payından oluşmalı, tek hissenin ağırlığı **en fazla %30** olmalıdır. Endeksle korelasyon **en az %90** olmalıdır.",
      k: "1003 resmi not s. 144"
    },
    {
      s: "Borsa yatırım fonlarıyla (BYF) ilgili hangisi **yanlıştır?**",
      c: ["Borsa İstanbul'da seans boyunca anlık fiyatla işlem görür.", "Piyasa fiyatı ile net aktif değer arasında fark oluşabilir.", "Alım-satımda aracı kurum komisyonu ödenir.", "Günde tek fiyattan, kapanış değerlemesine göre işlem görür.", "Yönetim ücreti genellikle klasik endeks fonlardan düşüktür."],
      d: 3,
      a: "Günde **tek fiyattan** işlem gören, klasik **endeks fondur**. BYF ise borsada hisse senedi gibi **anlık fiyatla** işlem görür.",
      k: "1003 resmi not s. 144–145"
    },
    {
      s: "Sektör fonlarıyla ilgili hangisi doğrudur?",
      c: ["Tek bir şirkete yatırım limiti genel kuraldaki gibi %10'dur; sektör yoğunlaşması için ayrıca bir alt sınır yoktur.", "Genel 5/40 kuralı sektör fonlarında da aynen uygulanır.", "Unvandaki sektöre en az %80 yatırılır; tek şirket limiti %20'ye çıkarılmıştır.", "Portföy farklı sektörlere dengeli dağıtılmak zorundadır.", "Volatiliteleri çeşitlendirilmiş fonlara göre daha düşüktür."],
      d: 2,
      a: "Sektör fonunda fon değerinin **en az %80**'i ilgili sektöre yatırılır. Tek şirket limiti **%20**'ye çıkarılmış, 5/40 ve grup sınırları kaldırılmıştır.",
      k: "1003 resmi not s. 146"
    },
    {
      s: "Portföyünde %3 ağırlıkla bulunan bir payın işlem sırası kapatılmış ve kapalılık 6. iş gününde de sürmektedir. Fon bu pay için nasıl karşılık ayırır?",
      c: ["1 gün içinde değer sıfırlanır.", "30 gün boyunca eşit tutarlarla değer sıfırlanır.", "90 gün boyunca eşit tutarlarla değer sıfırlanır.", "Karşılık ayrılmaz; son fiyat kullanılmaya devam edilir.", "Pay hemen yan hesaba aktarılır."],
      d: 1,
      a: "Ağırlık **%1'e kadar** ise 1 gün, **%1–%5** arası ise **30 gün**, %5'ten fazla ise 90 gün içinde eşit tutarlarla karşılık ayrılır. %3 için süre **30 gündür**.",
      k: "1003 resmi not s. 147"
    },
    {
      s: "Karma fonlarla ilgili hangisi doğrudur?",
      c: ["Yönetici tek bir varlık sınıfına portföyün %100'ünü yatırabilir.", "Herhangi bir varlık sınıfında asgari yoğunlaşma zorunluluğu yoktur.", "En az iki varlık grubunun her biri en az %20, toplamları en az %80 olmalıdır.", "Yalnızca kamu ve özel sektör borçlanma araçlarına yatırım yapabilir.", "Portföyünü başka yatırım fonlarının katılma paylarına yatırır."],
      d: 2,
      a: "Karma fonda varlık gruplarından **en az ikisi** ayrı ayrı **en az %20**, bu ikisinin **toplamı en az %80** olmalıdır. Tek varlığa %100 yönelebilen fon **değişken fondur**.",
      k: "1003 resmi not s. 148"
    }
  ]
});
