SPL.gun("1003", 5, {
  okuma: `
## Bugünün haritası
**Kurumsal eylemler** şirketin sermaye yapısını, pay sayısını ve yatırımcı haklarını doğrudan etkileyen işlemlerdir. Bugün ilk üçünü çalışıyoruz:

1. **Nakit kâr payı (temettü)** dağıtımı
2. **Bedelli sermaye artırımı** ve **rüçhan hakkı**
3. **Bedelsiz sermaye artırımı**

Her birinde **takvim**, **teorik fiyat formülü** ve **vergi** sınavda önemlidir.

---

## 1. Nakit kâr payı dağıtımı
- **Tanım:** Dönem kârının ya da **serbest yedek akçelerin** genel kurul kararıyla ortaklara dağıtılan kısmıdır. Nakit ya da **pay** olarak dağıtılabilir.
- **Düzenleme:** **Kâr Payı Tebliği (II-19.1)**.
  - Halka açık ortaklık bir **kâr dağıtım politikası** belirler, **genel kurul onayına** sunar ve kamuya açıklar.
  - **Dağıtım kararını yalnızca genel kurul** alır.
  - **İstisna:** Esas sözleşmede hüküm varsa ve genel kurul yetki verdiyse, YK yalnızca o hesap dönemiyle sınırlı **kâr payı avansı** dağıtabilir.
- **Zamanlama:** Dağıtım kararı alınırsa dağıtıma **en geç ilgili hesap dönemi sonuna kadar** başlanır.
- **Taksit:** Kâr payı **bir defada** ya da **taksitle** ödenebilir. **Payları borsada işlem görmeyen** ortaklıklar **taksitle dağıtım yapamaz**. Her taksit için **ayrı hak kullanım tarihi** belirlenir ve fiyat düzeltmesi o gün o taksitin **brüt** tutarı kadar yapılır.

> [!ezber] **Temettü takvimi**
>
> 1. **Hak kullanım tarihi:** Hisse **temettüsüz** işlem görmeye başlar; **fiyat düzeltmesi** bu gün yapılır.
> 2. **Kayıt tarihi:** **MKK** hak sahiplerini kesinleştirir. Hak kullanım tarihini **izleyen ilk iş günüdür**.
> 3. **Ödeme tarihi:** Net tutar yatırımcı hesabına geçer.
>
> **Kim temettü alır?** Hak kullanım tarihinden **bir önceki iş günü kapanışında** hisseyi portföyünde tutan yatırımcı.
>
> **Para akışı:** Şirket nakdi **Takasbank'a** aktarır. Takasbank, **MKK'nın** hak sahipleri listesine göre aracı kurumlara dağıtır. Aracı kurumlar net tutarı yatırımcı hesabına yatırır.

- **Zamanaşımı:** Tahsil edilmeyen kâr payı, dağıtım tarihinden itibaren **5 yıl** sonra zamanaşımına uğrar ve **Hazineye** geçer.

### Fiyat düzeltmesi ve vergi
- **Teorik fiyat** = **Önceki kapanış fiyatı − Brüt temettü** (Ft = Fk − T).
- **Stopaj:** Tam mükellef gerçek kişilerde vergi önce **stopajla** alınır. Şirket brüt tutar üzerinden keser ve yatırımcıya **net** tutarı öder.

**Örnek:** Kapanış fiyatı 120 TL, brüt temettü 5 TL, stopaj %15.

- Teorik fiyat: 120 − 5 = **115 TL**.
- Stopaj: 5 × %15 = **0,75 TL**.
- Yatırımcının hesabına geçen net temettü: **4,25 TL**.

> [!bilgi] **Gelir vergisi istisnası:** Kâr payının **%50'si** gelir vergisinden **istisnadır**.
>
> - Kalan %50 **beyan haddini aşarsa**: beyanname verilir ve kesilen %15 stopaj hesaplanan vergiden **mahsup** edilir.
> - Haddi **aşmazsa**: beyanname verilmez; stopaj **nihai vergi** olur.

---

## 2. Bedelli sermaye artırımı ve rüçhan hakkı
- **Ne sağlar?** Geri ödemesi olmayan, **uzun vadeli** bir finansman kaynağı.
- **Ödeme:** Halka açık ortaklıklarda sermaye borcu **nakden** ödenir.
- **Seyrelme sorunu:** Yeni paylar mevcut ortakların payını **seyreltir**. Bu nedenle TTK ve SPKn ortaklara **rüçhan hakkı** tanır.
- **Rüçhan hakkı:** Yeni payları mevcut payları oranında ve **öncelikli** olarak alma hakkıdır. Böylece ortak, sahiplik oranını **korur**.
- **Kim karar verir?**
  - **Kayıtlı sermaye sisteminde** artırım kararını **YK** alabilir.
  - **Esas sermaye sisteminde** kararı genel kurul alır.
- **Rüçhan hakkının kısıtlanması:** Kural olarak hak tüm ortaklara tanınır. **Haklı gerekçeyle** sınırlanabilir ya da kaldırılabilir. Kısıtlama, artırım kararında **açıkça** belirtilir.

> [!ezber] **Bedelli artırım süreleri**
>
> - Rüçhan hakkı kullanımı, izahnamenin ilanından itibaren **10 gün** içinde **başlatılır**.
> - Borsada işlem gören ortaklıklarda kullanım süresi **15 günden az, 60 günden fazla olamaz**. Uygulamada genellikle **15 gün** seçilir.
> - **Rüçhan Hakkı Pazarı:** Hakların alınıp satıldığı pazardır; genellikle kullanım süresinin **ilk 5–7 iş günü** açıktır. Son işlem günü, kullanım süresinin bitiminden önceki **5. iş günüdür**.
> - Pazar kapanınca hak **satılamaz**, ama süre bitene kadar bedel ödenerek **kullanılabilir**.

### Uygulama örneği
ABC A.Ş. sermayesini **%200** bedelli artırıyor (100 milyon TL'den 300 milyon TL'ye). Kullanım fiyatı pay başına **1 TL**.

- **Hak oranı:** Her 1 pay için **2 yeni pay** alma hakkı. 1.000 payı olan yatırımcı **2.000 TL** ödeyerek 2.000 yeni pay alır.
- **Takvim:**
  - Kayıt tarihinde hak sahibi olmak için, T+2 nedeniyle hisseyi **iki iş günü önce** portföyde tutmak gerekir.
  - Hak kullanımının başladığı gün MKK hesaplara **".R" uzantılı** rüçhan kuponlarını (ABC.R) tanımlar.

### Teorik fiyat formülleri
> [!ezber] **Ft = (Fk + n × R) ÷ (1 + n)** ve **Fr = (Ft − R) × n**
>
> - Fk: artırım öncesi kapanış fiyatı,
> - n: bedelli artırım oranı (%200 → 2),
> - R: rüçhan kullanım fiyatı,
> - Ft: ana hissenin teorik fiyatı,
> - Fr: rüçhan hakkının teorik fiyatı.
>
> **Örnek:** Fk = 9 TL, n = 2, R = 1 TL.
>
> - Ft = (9 + 2) ÷ 3 = **3,67 TL**.
> - Fr = (3,67 − 1) × 2 = **5,33 TL**.

**Değer korunur:** 100 pay × 9 TL = 900 TL. Artırımdan sonra 100 × 3,67 + 100 hak × 5,33 ≈ **900 TL**. Fiyatın düşmesi değer kaybı değil, **pay sayısının artmasıdır**.

### Yatırımcının üç seçeneği
1. **Kullanmak:** Bedeli öder; kuponlar silinir, yerine yeni paylar gelir; sahiplik oranı **korunur**.
2. **Satmak:** Hakkı Rüçhan Hakkı Pazarı'nda **satar** ve nakde çevirir.
3. **Hiçbir şey yapmamak:** Hak süre sonunda **iptal edilir ve değersizleşir**. Yatırımcı hak değeri kadar **zarara** uğrar ve sahiplik oranı **düşer**.

### Kalan payların satışı
- **Yöntem:** Kullanılmayan haklara karşılık gelen paylar **tasarruf sahiplerine satış duyurusu** ilan edildikten sonra satılır. Bu satışta **borsada satış yöntemi** **zorunludur**.
- **Zamanlama:** Satış, rüçhan kullanımının bitiminden itibaren **10 iş günü** içinde başlar ve **2 iş günü** sürer.
- **Fiyat:** Paylar **nominal değerin altında satılamaz**. Satılamayan paylar **iptal edilir** ve sermaye buna göre tescil edilir.
- **Kod:** Bu aşamada pay geçici olarak **".BE"** koduyla işlem görür.
- **Emisyon primi:** Piyasa fiyatı nominalin üzerindeyse fark, **emisyon primi** olarak şirket kasasına girer. Örnek: 30 milyon pay 3,67 TL'den satılırsa (3,67 − 1) × 30 milyon = **80,1 milyon TL** prim.

### Vergilendirme
- **Rüçhan hakkını kullanmak** vergi doğurmaz.
- **Rüçhan hakkını borsada satmak** menkul kıymet satış kazancıdır ve **GVK geçici 67. madde** kapsamındadır.
  - **Gerçek kişilerde** stopaj oranı **%0**'dır; stopaj **nihai vergidir**, beyanname gerekmez. Bu oran, **1.1.2006'dan sonra** edinilen paylar ve haklar için geçerlidir.
  - **İstisna:** **Menkul kıymetler yatırım ortaklığı (MKYO)** paylarının satışında stopaj **%10**'dur.
  - **Tüzel kişilerde** kazanç **kurum kazancına** dahil edilir.

---

## 3. Bedelsiz sermaye artırımı
- **Tanım:** Sermayenin **iç kaynaklarla** artırılması ve karşılığında ortaklara **bedelsiz** pay verilmesidir.
- **Niteliği:** Şirkete **nakit girmez**; tamamen **muhasebesel** bir işlemdir.
- **Amaçları:**
  - sermayeyi güçlendirmek,
  - bilançoyu **enflasyona** karşı dengelemek,
  - hisse fiyatını düşürerek **likiditeyi** artırmak.
- **Etkisi:** Mülkiyet oranı ve oy gücü **değişmez**. Pay sayısı artar; hisse başına kâr ve fiyat **aynı oranda azalır**.
- **Kaynakları:**
  - **İç kaynaklar:** geçmiş yıl kârları, **olağanüstü yedekler**, **emisyon primi**.
  - **Kâr payının pay olarak** dağıtılması (Kâr Payı Tebliği).

### Kurallar
- İç kaynakların **kanuni defter ve kayıtlarda da karşılığı** bulunmalıdır. SPK tablolarıyla kanuni kayıtlar arasında fark varsa **düşük olan** esas alınır.
- **2 TL kuralı:** Payları borsada işlem gören ortaklıklarda, dönem kârı hariç iç kaynaklardan yapılan artırım payın **düzeltilmiş borsa fiyatını 2 TL'nin altına** düşürecekse başvuru **işleme alınmaz**. Hesap, kararın açıklanmasından önceki **30 günün** ağırlıklı ortalama fiyatlarının ortalamasıyla yapılır.
- **Sermayeye eklenemeyen kalemler:**
  - **gerçeğe uygun değer** artış fonları,
  - **ara dönem** kârları,
  - mevzuatın izin vermediği fon ve yedekler.
- **Geçmiş yıl zararları:** Artırımdan önce iç kaynaklardan **kapatılır** ya da genel kurulda kapatılacağına dair **YK kararı** Kurula sunulur.

### Takvim
| Tarih | Anlamı |
|---|---|
| **Bölünme günü** | Fiyat teorik olarak **bölünür**; hisse yeni fiyatla işlem görür. Bu gün alan yatırımcı bedelsiz hakkı **alamaz**. |
| **Kayıt tarihi** (T+1) | MKK'da hak sahipleri tespit edilir |
| **Ödeme tarihi** (T+2) | Yeni paylar hesaplara geçer |

Hak sahibi olmak için hisseyi **bölünme gününden önceki iş günü** kapanışında, yani kayıt tarihinden **iki iş günü önce** portföyde tutmak gerekir.

> [!ezber] **Bedelsiz teorik fiyat: Ft = Fk ÷ (1 + n)**
>
> Örnek: Kapanış fiyatı 50 TL, artırım oranı %400 (n = 4).
>
> - Ft = 50 ÷ 5 = **10 TL**.
> - 100 payı olan yatırımcı **400** yeni pay alır; toplam **500** pay olur. Değer: 500 × 10 = 5.000 TL, yani artırım öncesiyle **aynı**.
`,
  sorular: [
    {
      s: "Kâr Payı Tebliği'ne göre halka açık ortaklıklarda nakit kâr payı dağıtımıyla ilgili hangisi **yanlıştır?**",
      c: ["Kâr dağıtım politikası genel kurul onayına sunulur ve kamuya açıklanır.", "Kâr payı dağıtım kararını genel kurul alır.", "Kâr payı taksitle ödenebilir.", "Payları borsada işlem görmeyen ortaklıklar da taksitle kâr dağıtımı yapabilir.", "Dağıtıma en geç ilgili hesap dönemi sonuna kadar başlanmalıdır."],
      d: 3,
      a: "**Payları borsada işlem görmeyen ortaklıklar taksitle kâr dağıtımı uygulamasından yararlanamaz.** Diğer ifadeler doğrudur.",
      k: "1003 resmi not s. 43"
    },
    {
      s: "Bir yatırımcının nakit temettü hakkına sahip olabilmesi için hisseyi en geç ne zaman portföyünde bulundurması gerekir?",
      c: ["Temettünün hesaplara aktarıldığı ödeme tarihinde", "Hak sahipliğinin kesinleştiği kayıt tarihinde, seans kapanışında", "Hak kullanım tarihinden bir önceki iş günü kapanışında", "Kâr dağıtımına karar veren genel kurul tarihinde", "Hak kullanım tarihinden en az bir hafta önce"],
      d: 2,
      a: "Temettü hakkı için hisse **hak kullanım tarihinden bir önceki iş günü kapanışında** portföyde olmalıdır. Hak kullanım tarihinde hisse temettüsüz işlem görür; kayıt tarihi bunu izleyen ilk iş günüdür.",
      k: "1003 resmi not s. 43"
    },
    {
      s: "Önceki kapanış fiyatı 80 TL olan bir hisse için hisse başına brüt 4 TL nakit temettü dağıtılacaktır. Stopaj oranı %15'tir. Hak kullanım günü teorik fiyat ve yatırımcıya ödenecek net temettü sırasıyla nedir?",
      c: ["76 TL ve 4,00 TL", "76 TL ve 3,40 TL", "80 TL ve 3,40 TL", "76,60 TL ve 3,40 TL", "77 TL ve 3,60 TL"],
      d: 1,
      a: "Teorik fiyat = Fk − T = 80 − 4 = **76 TL**. Stopaj = 4 × %15 = 0,60 TL; net temettü = 4 − 0,60 = **3,40 TL**.",
      k: "1003 resmi not s. 44"
    },
    {
      s: "Tahsil edilmeyen nakit kâr payı bedelleri ne zaman zamanaşımına uğrar?",
      c: ["Dağıtım tarihinden itibaren 1 yıl sonra", "Dağıtım tarihinden itibaren 2 yıl sonra", "Dağıtım tarihinden itibaren 5 yıl sonra", "Dağıtım tarihinden itibaren 10 yıl sonra", "Zamanaşımına uğramaz"],
      d: 2,
      a: "Tahsil edilmeyen kâr payı bedelleri dağıtım tarihinden itibaren **5 yıl** sonra zamanaşımına uğrar ve **Hazineye** intikal eder.",
      k: "1003 resmi not s. 44"
    },
    {
      s: "Payları borsada işlem gören ortaklıklarda yeni pay alma (rüçhan) hakkı kullanım süresi için hangisi doğrudur?",
      c: ["En az 7, en fazla 30 gün", "En az 15, en fazla 60 gün", "En az 30, en fazla 90 gün", "Tam olarak 10 gün", "Süre sınırı yoktur"],
      d: 1,
      a: "Rüçhan hakkı kullanım süresi **15 günden az, 60 günden fazla olamaz**; uygulamada genellikle 15 gündür. Kullanım, izahnamenin ilanından itibaren 10 gün içinde başlatılır.",
      k: "1003 resmi not s. 45"
    },
    {
      s: "Artırım öncesi kapanış fiyatı 12 TL olan bir hissede %100 bedelli sermaye artırımı yapılacak, rüçhan hakkı kullanım fiyatı 2 TL'dir. Ana hissenin teorik fiyatı (Ft) ve rüçhan hakkının teorik fiyatı (Fr) nedir?",
      c: ["Ft = 6 TL, Fr = 4 TL", "Ft = 7 TL, Fr = 5 TL", "Ft = 7 TL, Fr = 10 TL", "Ft = 10 TL, Fr = 8 TL", "Ft = 14 TL, Fr = 12 TL"],
      d: 1,
      a: "Ft = (Fk + n × R) ÷ (1 + n) = (12 + 1 × 2) ÷ 2 = **7 TL**. Fr = (Ft − R) × n = (7 − 2) × 1 = **5 TL**.",
      k: "1003 resmi not s. 47"
    },
    {
      s: "Bedelli sermaye artırımında rüçhan hakları kullanıldıktan sonra kalan paylarla ilgili hangisi doğrudur?",
      c: ["Kalan paylar yönetim kurulu üyelerine bedelsiz olarak dağıtılır.", "Borsada satış yöntemiyle, nominal değerin altında olmamak üzere satılır; satılamayanlar iptal edilir.", "Kalan paylar nominal değerin altında da satılabilir; satılamayanlar ise ortaklıkta hazine payı olarak kalır.", "Kalan paylar mutlaka borsa dışında tahsisli satış yöntemiyle satılır.", "Kalan paylar otomatik olarak hâkim ortağa nominal değerden devredilir."],
      d: 1,
      a: "Kalan paylar tasarruf sahiplerine satış duyurusundan sonra **borsada satış yöntemiyle**, **nominal değerin altında olmamak** üzere satılır; satış rüçhan süresinin bitiminden itibaren **10 iş günü** içinde başlar. Satılamayan paylar **iptal edilir**.",
      k: "1003 resmi not s. 48"
    },
    {
      s: "Artırım öncesi kapanış fiyatı 60 TL olan bir hissede %200 bedelsiz sermaye artırımı yapılacaktır. Bölünme günü hissenin teorik fiyatı nedir?",
      c: ["12 TL", "15 TL", "20 TL", "30 TL", "40 TL"],
      d: 2,
      a: "Bedelsiz artırımda Ft = Fk ÷ (1 + n) = 60 ÷ (1 + 2) = **20 TL**. Şirketin toplam piyasa değeri değişmez, yalnızca pay sayısı artar.",
      k: "1003 resmi not s. 52"
    }
  ]
});
