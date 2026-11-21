SPL.gun("1002", 28, {
  okuma: `
## Bugünün haritası
Yeni tebliğ: **III-52.2 Borsa Yatırım Fonlarına İlişkin Esaslar Tebliği**. BYF; hukuken bir yatırım fonu, ama payları borsada işlem gördüğü için MKYO'ya da benzer. Bugün:

1. Tebliğin getirdikleri ve **asgari tutarlar** (70 milyon / 35 milyon TL)
2. BYF tanımı; **yatırım fonu – BYF – MKYO** karşılaştırması ve **arbitraj**
3. **Takip farkı** ve **takip hatası**; endeks takip yolları
4. Unvan ve içtüzük
5. **Kuruluş ve izahname** süreci
6. Portföyün oluşturulması: **avans** ve **halka arz**
7. **Birincil / ikincil** piyasa, **yetkilendirilmiş katılımcı**, asgari işlem birimi
8. **Portföy sınırlamaları** ve **endeks yoğunlaşma** kuralları
9. Kamuya açıklama ve ortak hükümler

---

## 1. Tebliğin getirdikleri
- Fonun kurucusu, yöneticisi ve saklayıcısının fona ilişkin tüm işlemleri **Kurul denetimine** tabidir.
- İçtüzüğün **notere onaylatılması** uygulaması kaldırıldı; **yalnızca PYŞ'ler** kurucu olabilir; varlıklar **portföy saklayıcısında** saklanır.
- Likiditenin çok düşük kalmaması için halka arzda **avans** veya **halka arz tutarı en az 70.000.000 TL** olmalıdır.
- Faaliyet süresince, **her ayın son iş günü** yapılan değerlendirmeye göre **son 3 aylık ortalama** fon toplam değeri **35.000.000 TL'nin** altına düşemez.
- Yatırım fonlarından farklı olarak **TCMB'nin günlük kur ilan ettiği yabancı paralar** portföye alınabilir.
- **Swap** sözleşmeleri portföye dâhil edilebilir. **Swap'a dayalı** BYF'lerde **karşı taraf riski en fazla %10**; unvanda **dolaylı endeks takibini** gösteren ibare zorunlu.
- Eski **%90 korelasyon** şartı kaldırıldı; yerine **takip farkı** ve **takip hatası** getirildi.
- **Yalnızca nakit karşılığı** birincil piyasa işlemlerine de imkân tanındı.

> [!ezber] BYF asgari tutarları: Kuruluşta (avans veya ilk halka arz) **70 milyon TL**; faaliyet süresince son 3 aylık ortalama **35 milyon TL**. Altına düşerse Kurul **bir defaya mahsus 1 ay** ek süre verir; yine sağlanamazsa **tasfiye** veya başka fon türüne **dönüşüm** istenir.

---

## 2. BYF nedir?
**BYF:** Payları **BİAŞ'ta işlem gören**; portföy kompozisyonunu yansıtan **varlıkların veya yalnızca nakdin** teslimiyle pay oluşturabilen veya payların iadesiyle bu varlıkların ya da nakdin alınmasına imkân veren, **PYŞ'lerce içtüzükle** kurulan, **tüzel kişiliği olmayan** malvarlığı.

- BYF'ler Kurulca uygun görülen **bir endeksi takip etmek** üzere kurulur.
- BYF'ler **şemsiye fon şeklinde kurulamaz** (yatırım fonlarından farkı).

| | Yatırım fonu | BYF | MKYO |
|---|---|---|---|
| **Tüzel kişilik** | Yok | **Yok** | **Var** |
| **Yönetim** | Aktif | **Pasif** | Aktif |
| **Birincil piyasa** | Herkese açık, nakit, her iş günü | Büyük ölçüde **nitelikli yatırımcılar**, ayni ve/veya nakdi, her iş günü | Yalnızca **sermaye artırımlarında** |
| **İkincil piyasa** | Yok | Herkese açık, borsada | Herkese açık, borsada |
| **Fiyat** | Kurucunun hesapladığı fiyat | Borsa fiyatı + kurucunun hesapladığı birim pay değeri | Borsa fiyatı |
| **İskonto/prim** | Söz konusu değil | Birincil piyasa sayesinde **çok küçük** | Arz-talebe göre **mümkün** |

### Arbitraj
BYF'yi MKYO'dan ayıran en önemli özellik, belirli büyüklükte **birincil piyasa işlemi** yapılabilmesidir. Birim pay değeri çok kısa aralıklarla (**genellikle 1 dakikanın altında**) hesaplanıp yayımlanır.
- **Birim pay değeri > borsa fiyatı:** Yatırımcı borsadan BYF payı alır, payı **iade eder** (**redemption**) ve karşılığındaki menkul kıymetleri borsada satar.
- **Borsa fiyatı > birim pay değeri:** Yatırımcı menkul kıymetleri teslim ederek **yeni pay oluşturur** (**creation**) ve bu payları borsada satar.
- Böylece BYF'ler MKYO'larda görülen **iskontolu işlem** sorununu yaşamaz.
- Birincil piyasa işlemleri belirli pay miktarı (ör. **50.000 pay**) ve katları üzerinden yapıldığı için genellikle **nitelikli yatırımcılar** tercih eder.

**Avantajları:** Her aracı kurumdan alınabilir, **yönetim ücretleri endeks fonlarından önemli ölçüde düşüktür**.

**Portföye alınabilecekler:** Türk ihraççıların payları ve borçlanma araçları (özelleştirme dâhil); 32 Sayılı Karara uygun yabancı araçlar; altın ve kıymetli madenler; **aynı endeksi takip eden yabancı BYF'ler**; kira ve gayrimenkul sertifikaları; varant ve sertifikalar; türev teminat ve primleri; repo, ters repo; **12 aya kadar** mevduat ve katılma hesabı; Takasbank para piyasası; **TCMB'nin kur ilan ettiği yabancı paralar**; **swap**; Kurulun uygun gördükleri.

---

## 3. Takip stratejisi
- **Takip farkı (TD) = R(P) − R(B):** Fonun **yıllık** getirisi ile endeksin **yıllık** getirisi arasındaki **fark**.
- **Takip hatası (TE):** Fon ve endeks getirileri arasındaki farkın **değişkenliği** (standart sapma: farkların karelerinin toplamı ÷ (N−1), karekökü).
- Hesaplamada endeksin **para birimi** esas alınabilir.

**Kurucunun KAP'ta açıklaması:**
| Ne zaman | Ne |
|---|---|
| **Takip eden ayın ilk iş günü** | Ay sonu itibarıyla **son 1 yıllık** takip farkı ve hatası (önemli artışta gerekçe) |
| **Her yılın son iş günü** | **Bir sonraki yıl** için tahmini takip hatası |
| **Ocak ayının en geç son iş günü** | Önceki yıl için tahmini ve gerçekleşen takip hatası, takip farkı ve sapma gerekçeleri |

**Endeks takip yolları:**
- a) Toplam değerin **en az %80'ini** devamlı olarak **yalnızca endeks kapsamındaki varlıklara** yatırarak,
- b) **En az %80'ini** aynı endeksi takip eden **yabancı BYF'lere** yatırarak,
- c) Endeks kapsamında yatırım zorunlu **olmayan** varlıklara yatırarak (**swap'a dayalı**, dolaylı takip).

(a) yolunda portföy **tam kopyalama** (tüm bileşenler, endeksteki ağırlıkla) veya **örnekleme** (endeksle **en yüksek korelasyonlu** bileşenler; **optimizasyon yöntemi**) ile oluşturulur.

---

## 4. Unvan ve içtüzük
- Unvan stratejiye uygun olmalı; yanıltıcı, subjektif ifade içeremez. Takip edilen **endeks veya endeks yapıcı** unvanda yer alabilir.
- Yabancı para, altın ve kıymetli maden içermeyen BYF: "**(TL)**".
- Devamlı olarak **en az %80** yabancı araç: "**Yabancı**" ibaresi **zorunlu**.
- Tamamı faizsiz araçlardan oluşan: "**katılım fonu**" ibaresi **kullanılabilir**.
- Endeks kapsamı dışı varlıklarla takip yapan: **takip stratejisini** belirten ibare **zorunlu**.

**İçtüzük:** Pay sahipleri ile kurucu, saklayıcı ve yönetici arasında **inançlı mülkiyet** ve **vekâlet akdi** esaslı **iltihaki sözleşme**. Asgari unsurlar arasında yatırım fonlarından farklı olarak **yetkilendirilmiş katılımcı**, **asgari işlem birimi**, **endeks ve endeks yapıcısı**, **birincil ve ikincil piyasa** işlemleri ve **gösterge niteliğindeki** birim pay değerinin açıklanması da vardır.

---

## 5. Kuruluş izni ve izahname onayı
- Kuruluş izni ve izahname onayı başvuruları **birlikte** değerlendirilir. **Kurucunun ilk fonuysa ayrı ayrı** değerlendirilir.

**Birlikte değerlendirmede:**
- Başvurular belgelerin eksiksiz sunulmasından itibaren **2 ay** içinde karara bağlanır (eksik belge varsa süre tamamlandığı tarihten **yeniden** işler).
- Onaylanan içtüzük, kararın tebellüğünü izleyen **6 iş günü** içinde **ticaret siciline tescil** ve **TTSG ile KAP'ta ilan** edilir.
- Onaylı izahname; tescil belgeleri ve faaliyet sözleşmeleri Kurula gönderildikten sonra verilir. Bu belgeler tescilden itibaren **10 iş günü** içinde gönderilmelidir.

**Ayrı değerlendirmede:**
- Kuruluş başvurusu **2 ayda** karara bağlanır; içtüzük **6 iş günü** içinde tescil ve ilan edilir.
- İzahname onay başvurusu tescilden itibaren **en geç 3 ay** içinde yapılır; yapılmazsa içtüzük **terkin** ettirilir (belgeler **6 iş günü** içinde Kurula). Süre **bir defa 3 ay** uzatılabilir.
- İzahname **20 iş günü** içinde incelenir.

**Ortak esaslar:**
- İzahname ve yatırımcı bilgi formu, izin yazısının tebellüğünü izleyen **10 iş günü** içinde **KAP'ta** ve kurucunun sitesinde yayımlanır; kendileri tescil ve ilan edilmez, **nerede yayımlandıkları** tescil ve ilan edilir.
- Onaylanan izahname karar tarihinden itibaren **20 iş günü** içinde teslim alınmaz veya süresinde ilan edilmezse **yeniden onay** gerekir.
- Belgelerin dili **Türkçe** olmalıdır. Onay, **tekeffül** veya **tavsiye** değildir.
- Portföy yalnızca **avansla** oluşturulacaksa izahnamenin onayı için **avans tahsisinin tamamlanmış** olması gerekir.
- İzahnameyi **kurucu** ve varsa **yetkili kuruluş** (konsorsiyumda **lider ve eş liderler**) imzalar.

**Satış öncesi/sırasında değişiklik:**
- Kurucu durumu **derhal yazılı** olarak Kurula bildirir; satış kurucu veya yetkili kuruluşlarca **durdurulabilir** (durdurulmazsa Kurul durdurabilir).
- Değişen kısımlar bildirimden itibaren **7 iş günü** içinde onaylanır ve derhal ilan edilir; **karşılaştırma tablosu** ve **tek metin** yayımlanır.
- Önceden talepte bulunan yatırımcılar, yayımdan itibaren **2 iş günü** içinde **talebini geri alabilir** (kurucu bu süreyi uzatabilir).

**Sorumluluk:** İzahnamedeki yanlış bilgiden **kurucu** sorumludur; tazmin edilemezse **lider yetkili kuruluşlar** ve kurucunun **YK üyeleri** kusurlarına göre sorumludur. Rapor hazırlayan **bağımsız denetim ve derecelendirme** kuruluşları kendi raporlarından sorumludur.

- **Yatırımcı bilgi formu** değişikliği için **Kurul onayı aranmaz**; **6 iş günü önce** bildirim ve izleyen iş günü KAP'ta ilan.

---

## 6. Portföyün oluşturulması
BYF portföyü:
- a) Kurucunun **avans** koyması ve/veya
- b) Payların **nakit karşılığı** BİAŞ'ta veya BİAŞ dışında **halka arzı**

yoluyla oluşturulur. **Avans veya ilk halka arz tutarı en az 70.000.000 TL**'dir (ikisi birlikte kullanılırsa toplama uygulanır; Kurul her yıl yeniden belirleyebilir).

| Süre | Kural |
|---|---|
| Avans tahsisi | İçtüzük tescilini izleyen **10 iş günü** içinde (ayrı değerlendirmede izahname izninin tebellüğünden itibaren **10 iş günü**) |
| Halka arzın başlaması | İzahnamenin ilanından itibaren **azami 5 iş günü** içinde |
| Halka arz süresi | **En az 2, en fazla 30 iş günü** (Kurul uygun görürse uzatılabilir) |
| BİAŞ'a işlem başvurusu | Halka arzın bitiminden itibaren **10 iş günü**; avansla oluşturulduysa izahname izninin tebellüğünden itibaren **15 iş günü** |

- Paylar BİAŞ'ın **Yapılandırılmış Ürünler ve Fon Pazarı**'nda işlem görür.
- İlk halka arzda, asgari fon tutarına ulaşmak için gereken payların tamamının satın alınmasını taahhüt eden **aracılık yüklenimi sözleşmesi** imzalanması **zorunludur** (konsorsiyumla da yapılabilir).

---

## 7. Birincil ve ikincil piyasa
- **Birincil piyasa:** **Yetkilendirilmiş katılımcı** ile **portföy saklayıcısı** arasında yeni pay **oluşturulması** ve mevcut payların **geri alınması**.
- **İkincil piyasa:** Payların **BİAŞ'ta** alım satımı.
- **Yetkilendirilmiş katılımcı:** Pay oluşturma ve geri alım işlemlerine aracılık eden, **kurucuyla sözleşme imzalamış**, **işlem aracılığı veya portföy aracılığı** izni olan **aracı kurum**.
- Borsada işlem yapması yasaklananlar, bu süre boyunca **birincil piyasa işlemlerine de taraf olamaz**.
- Pay oluşturma ve geri alım, **asgari işlem birimi** veya katları üzerinden yapılır; asgari işlem birimini **kurucu** belirler ve bilgilendirme dokümanlarında yer verir.

### Pay değeri
- Her BYF payının iki değeri vardır: **birim pay değeri** (fon toplam değeri ÷ dolaşımdaki pay sayısı) ve **işlem fiyatı** (BİAŞ'ta oluşan fiyat).
- Birim pay değerinin hesaplanması **kurucunun** sorumluluğundadır.
- Payların **itibari değeri yoktur**; **MKK**'da hak sahibi bazında kaydi izlenir.
- Olağanüstü durumlarda ve Kurul uygun görürse birim pay değeri hesaplanmayabilir, birincil ve/veya ikincil işlemler durdurulabilir.
- BYF **temettü dağıtabilir**.

---

## 8. Portföy sınırlamaları
- Paylar, borçlanma araçları, kıymetli madenler, yabancı BYF'ler, kira ve gayrimenkul sertifikaları, varant ve sertifikalar **yalnızca borsada işlem görüyorsa** portföye alınabilir (ilk ihraçlarda borsada işlem görmesi uygun görülenler alınabilir).
- Aynı endeksi takip eden **yabancı BYF'ler** için ihracın Kurulca uygun görülmesi şartı **aranmaz**.

| Varlık / işlem | Sınır |
|---|---|
| **Varant ve sertifikalar** | Toplam **%10**, tek ihraççı **%5** |
| **Mevduat ve katılma hesabı** (≤ 12 ay) | Toplam **%10**, tek banka **%3** (katılım fonu: **%20** ve **%10**) |
| **Ters repo + Takasbank para piyasası** | Toplam **%20** |
| **Borsa dışı ters repo** | En fazla **%10** |
| **Repo** | Repoya konu olabilecek varlıkların rayiç değerinin **%10'u** |
| **Kredi** ve borçlanma amaçlı Takasbank işlemleri | **%10** (tutar, faiz, tarih Kurula bildirilir) |
| **Yabancı BYF'lerle** takip yapan BYF | **En az 4** yabancı BYF; her biri en fazla **%30** |
| **Swap'a dayalı** BYF'de karşı taraf riski | **Hiçbir surette %10'u** aşamaz; swap her işlem günü değerlenir |

> [!dikkat] Karşılaştırma: Mevduat sınırı yatırım fonlarında olduğu gibi **10/3**; ama **katılım** ibareli BYF'de **20/10** (katılım yatırım fonunda **25/10** idi).

- Borsa dışı repo/ters repoda faiz oranının belirlenmesi kurucu ve yöneticinin sorumluluğundadır; sözleşmenin vadesi, faizi, karşı tarafı ve notu en geç **izleyen iş günü** KAP'ta açıklanır, belgeler **5 yıl** saklanır.
- **En az %80** yabancı araçlara yatıran BYF'ler, **yurt dışında borsa dışı repo** yapabilir.
- Banka dışı **özel sektör borçlanma araçlarında** ihraççının **yatırım yapılabilir** notu olmalıdır.
- **Türev:** Tüm portföy yöneticileri **İleri Düzey + Türev Araçlar** lisanslı; açık pozisyon fon toplam değerini **aşamaz**.
- **Açığa satış** ve **kredili menkul kıymet** işlemi **yapılamaz**.
- Borsada işlem gören **kamu dış borçlanma araçları** borsa dışı işlemle portföye alınıp çıkarılabilir.
- **Borsa dışı sözleşmeler:** stratejiye uygun; karşı taraf **yatırım yapılabilir notlu**; objektif koşullarda ve **adil fiyatla**; **gerçeğe uygun değerden** nakde dönüştürülebilir.
- Pasif sınır aşımında uyum **30 gün** içinde (Kurul uzatabilir).

### Takip edilen endekse ilişkin sınırlamalar
(En az %80'i endeks varlıklarına yatıran BYF'ler için)
| Endeks türü | Asgari sayı | Tek varlık azami ağırlık |
|---|---|---|
| **Pay** endeksi | **En az 6** ihraççı payı | **%30** |
| **Kamu borçlanma araçları** endeksi | — | **%35** |
| **Özel sektör borçlanma araçları** endeksi | **En az 6** araç | **%35** |
| **Gayrimenkul sertifikası / özel sektör kira sertifikası** endeksi | **En az 4** | **%35** |

> [!ezber] Pay: **6 / %30**. Borçlanma: **%35** (özelde **6** araç). Gayrimenkul ve özel sektör kira sertifikası: **4 / %35**. Yabancı BYF'lerle takip: **4 / %30**.

---

## 9. Değerleme, açıklama, ortak hükümler
- Endeks kapsamındaki varlıklar, **endeksin hesaplanma yöntemiyle uyumlu** olarak değerlenir; diğerleri yatırım fonlarının finansal raporlama esaslarına göre.
- Olağanüstü durumlarda değerleme esaslarını kurucunun **YK'sı** belirleyebilir; gerekçeli karar **Kurula ve saklayıcıya** bildirilir.
- Endeks ve portföyün açıklanma periyotları **izahnamede** belirtilir.
- **Özel durum** olarak açıklananlar arasında: endeksin veya bileşenlerinin değişmesi; kurucu, yönetici, saklayıcı veya **yetkilendirilmiş katılımcının** değişmesi; **asgari işlem biriminin** değişmesi; ortalama fon değerinin **35 milyon TL'nin altına** düşmesi; **endeks lisanslama ücretleri**; kredi alınması vardır.

**Ortak hükümler:**
- Tebliğde hüküm olmayan konularda **yatırım fonları** ve **portföy saklama** düzenlemeleri uygulanır.
- **Toplam gider üst sınırında** unvanında **"endeks"** ibaresi olan fonların sınırı uygulanır (yıllık **%2,19**).
- BYF'lerin **performans sunuş raporu** hazırlaması **zorunlu değildir**.

---

## Bugünün özeti
- BYF: tüzel kişiliği yok, **pasif** yönetim, BİAŞ'ta işlem görür, **şemsiye fon olamaz**, bir **endeksi** takip eder.
- Asgari tutar: kuruluşta **70 milyon TL**, faaliyette son 3 ay ortalaması **35 milyon TL** (+1 ay ek süre).
- Takip farkı = yıllık getiri farkı; takip hatası = farkın değişkenliği. Aylık açıklama **ayın ilk iş günü**.
- Kurucunun ilk fonunda kuruluş ve izahname **ayrı**; aksi hâlde **birlikte** değerlendirilir.
- Halka arz: ilandan sonra **5 iş günü** içinde başlar, **2–30 iş günü** sürer; BİAŞ başvurusu **10 iş günü** (avansta **15**).
- Birincil piyasa: **yetkilendirilmiş katılımcı** (aracı kurum) ↔ saklayıcı; asgari işlem birimini **kurucu** belirler.
- Sınırlar: varant **10/5**, mevduat **10/3** (katılım **20/10**), ters repo + Takasbank **%20**, borsa dışı ters repo **%10**, kredi **%10**, swap karşı taraf **%10**.
- Endeks yoğunlaşması: pay **6/%30**, borçlanma **%35**, gayrimenkul/kira sertifikası **4/%35**.
- Gider sınırı endeks fonları gibi; performans sunuş raporu zorunlu değil.
`,
  sorular: [
    {
      s: "BYF portföyünün oluşturulmasında kurucunun koyacağı **avans** ya da yapılacak **ilk halka arz** tutarının en az ne kadar olması gerekir?",
      c: ["10.000.000 TL", "35.000.000 TL", "50.000.000 TL", "70.000.000 TL", "100.000.000 TL"],
      d: 3,
      a: "Avans veya ilk halka arz tutarı **en az 70.000.000 TL** olmalıdır (ikisi birlikte kullanılırsa toplama uygulanır). Faaliyet süresince ise son üç aylık ortalama fon toplam değeri **35.000.000 TL**'nin altına düşemez.",
      k: "1002 resmi not s. 223, 230"
    },
    {
      s: "Bir BYF'nin son üç aylık ortalama fon toplam değeri asgari tutarın altına düşerse ne olur?",
      c: ["Fon derhal tasfiye edilir", "Kurul bir defaya mahsus 1 aylık ek süre verebilir; sağlanamazsa tasfiye veya dönüşüm istenir", "Kurucu, eksik kısmı 10 iş günü içinde avans olarak tamamlamak zorundadır", "Fon payları otomatik olarak BİAŞ kotundan çıkarılır", "Kurul her seferinde 6 aylık ek süre tanır"],
      d: 1,
      a: "Son üç aylık ortalama değer **35 milyon TL**'nin altına düşerse Kurul **bir defaya mahsus bir aylık** ek süre verebilir. Süre sonunda da sağlanamazsa fonun **tasfiyesi** veya III-52.1 kapsamında başka bir fon türüne **dönüşümü** talep edilir.",
      k: "1002 resmi not s. 230"
    },
    {
      s: "Yatırım fonu, BYF ve MKYO karşılaştırmasına göre aşağıdakilerden hangisi **yanlıştır?**",
      c: ["MKYO'nun tüzel kişiliği vardır, BYF'nin yoktur", "BYF'ler genellikle pasif olarak yönetilir", "MKYO'larda birincil piyasa işlemi yalnızca sermaye artırımlarında olur", "BYF'lerde birincil piyasa sayesinde iskonto ve prim çok küçüktür", "Yatırım fonu paylarının ikincil piyasası borsadadır"],
      d: 4,
      a: "Yatırım fonlarında **ikincil piyasa işlemi yoktur**; paylar kurucunun hesapladığı fiyattan fona iade edilir. BYF ve MKYO payları ise borsada işlem görür. Diğer ifadeler doğrudur.",
      k: "1002 resmi not s. 224"
    },
    {
      s: "Bir BYF'nin borsadaki işlem fiyatı, birim pay değerinin **önemli ölçüde üzerinde** ise arbitrajcı nasıl kâr elde eder?",
      c: ["Borsadan BYF payı alıp fona iade eder, karşılığındaki kıymetleri satar", "Menkul kıymetleri teslim ederek yeni pay oluşturur ve bu payları borsada satar", "Kurucudan pay değerini düzeltmesini talep eder ve farkı tazminat olarak alır", "Fonun payları üzerinde açığa satış yaparak takasta fona iade eder", "Hiçbir işlem yapamaz; fark ancak endeks değiştiğinde kapanır"],
      d: 1,
      a: "İşlem fiyatı birim pay değerinden **yüksekse**, yatırımcı paylara karşılık gelen menkul kıymetleri teslim ederek **yeni pay oluşturur (creation)** ve bunları borsada satar. Birim pay değeri yüksekse bunun tersi (**redemption**) yapılır.",
      k: "1002 resmi not s. 224–225"
    },
    {
      s: "BYF Tebliği'ndeki **takip hatası (tracking error)** kavramı neyi ifade eder?",
      c: ["Fonun yıllık getirisi ile endeksin yıllık getirisi arasındaki farkı", "Fon ile endeks getirileri arasındaki farkın değişkenliğini", "Fonun borsa fiyatı ile birim pay değeri arasındaki farkı", "Fon portföyündeki varlık sayısının endeksteki sayıya oranını", "Fon ile endeks arasındaki korelasyon katsayısının %90'dan sapmasını"],
      d: 1,
      a: "**Takip farkı (TD)** fonun yıllık getirisi ile endeksin yıllık getirisi arasındaki **farktır**; **takip hatası (TE)** ise bu getiriler arasındaki farkın **değişkenliğidir**. Bu kavramlar eski %90 korelasyon şartının yerini almıştır.",
      k: "1002 resmi not s. 225–226"
    },
    {
      s: "BYF katılma paylarının halka arzına ilişkin süreler hangi seçenekte doğru verilmiştir?",
      c: ["Halka arz izahnamenin ilanından itibaren 5 iş günü içinde başlar; süresi 2–30 iş günüdür", "Halka arz izahnamenin ilanından itibaren 10 iş günü içinde başlar; süresi 3–15 iş günüdür", "Halka arz izahnamenin ilanından itibaren 3 iş günü içinde başlar; süresi 1–10 iş günüdür", "Halka arz izahnamenin ilanından itibaren 15 iş günü içinde başlar; süresi 5–20 iş günüdür", "Halka arz izahnamenin ilanından itibaren 1 ay içinde başlar; süresi 2–60 iş günüdür"],
      d: 0,
      a: "Halka arz, izahnamenin ilanından itibaren **azami 5 iş günü** içinde başlatılmalıdır; süresi **2 iş gününden az, 30 iş gününden fazla** olamaz (Kurul uygun görürse uzatılabilir).",
      k: "1002 resmi not s. 230"
    },
    {
      s: "BYF'lerin **birincil piyasa** işlemlerine aracılık eden **yetkilendirilmiş katılımcıya** ilişkin hangisi doğrudur?",
      c: ["Kurucunun kendisidir; ayrıca bir sözleşme imzalanması gerekmez", "Kurucuyla sözleşmeli, işlem/portföy aracılığı izinli aracı kurum", "Fon varlıklarını saklayan ve portföy saklayıcısı olan bankadır", "BİAŞ bünyesinde görev yapan ve fiyat kotasyonu veren piyasa yapıcı", "Payları ilk halka arzda satın almış olan nitelikli yatırımcıdır"],
      d: 1,
      a: "Yetkilendirilmiş katılımcı; pay oluşturma ve geri alım işlemlerine aracılık eden, **kurucuyla sözleşme imzalamış** ve **işlem aracılığı veya portföy aracılığı** izni olan **aracı kurumdur**. Birincil piyasa işlemleri yetkilendirilmiş katılımcı ile **portföy saklayıcısı** arasında yapılır.",
      k: "1002 resmi not s. 231"
    },
    {
      s: "Yalnızca endeks kapsamındaki varlıklara yatırım yapan bir BYF'nin takip ettiği **pay endeksi** ile ilgili kural hangisidir?",
      c: ["En az 4 ihraççı payı; her birinin ağırlığı en fazla %35", "En az 6 ihraççı payı; her birinin ağırlığı en fazla %30", "En az 10 ihraççı payı; her birinin ağırlığı en fazla %20", "En az 6 ihraççı payı; her birinin ağırlığı en fazla %35", "En az 30 ihraççı payı; her birinin ağırlığı en fazla %10"],
      d: 1,
      a: "Pay endeksi ve fon portföyü **en az altı** ihraççı payından oluşmalı ve her birinin ağırlığı **%30'u** geçmemelidir. Özel sektör borçlanma araçları endeksinde en az 6 araç ve %35; gayrimenkul/kira sertifikası endeksinde en az 4 ve %35 aranır.",
      k: "1002 resmi not s. 234"
    }
  ]
});
