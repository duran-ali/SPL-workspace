// 1012 Takas, Saklama ve Operasyon İşlemleri: genel deneme soru havuzu (25 soru).
// Bu sorular yalnızca genel denemede çıkar; günlük testlerde ve ders sonunda sorulmayan bilgileri ölçer.
// Bir kısmı resmi notun bölüm sorularından (cevap anahtarı EK-1, s. 175–176) kendi cümlelerimle uyarlanmıştır.
SPL.deneme("1012", {
  sorular: [
    // --- MKK ve kaydi sistem ---
    {
      s: "MKK Yönetmeliği'ne göre aşağıdakilerden hangisi **MKK'ya üye olması gereken** kuruluşlardan biri değildir?",
      c: ["Türkiye Sermaye Piyasaları Birliği (TSPB)", "İhraççılar", "Merkezi takas kuruluşları", "Türkiye Cumhuriyet Merkez Bankası (özel üyelik statüsüyle)", "Yatırım kuruluşları"],
      d: 0,
      a: "MKK üyeleri: **ihraççılar, yatırım kuruluşları, merkezi takas kuruluşları, TCMB, yabancı merkezi saklama kuruluşları (YMSK)** ve MKK'nın önerip Kurulun kabul ettiği diğer kuruluşlardır. TSPB bir öz düzenleyici meslek birliğidir; MKK üyesi değildir.",
      k: "1012 resmi not s. 9, 13"
    },
    {
      s: "MKK'nın iş kurallarıyla ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. MKK üyelerinin üyelik statüsündeki her türlü değişiklik MKK tarafından derhal merkezi takas kuruluşuna bildirilir.\nII. Yatırım fonlarında, kaydi paylara ilişkin ihraççı sorumluluklarını fon kurucusu üstlenir.\nIII. Yabancı yatırım fonlarında bu sorumlulukları fon temsilcisi üstlenir.",
      c: ["I, II ve III", "Yalnız I", "I ve II", "I ve III", "II ve III"],
      d: 0,
      a: "Üç ifade de doğrudur. Üyelik statüsündeki değişiklikler takasın sağlıklı yürümesi için **derhal** merkezi takas kuruluşuna bildirilir. Fonların tüzel kişiliği olmadığından ihraççı sorumluluklarını yerli fonlarda **fon kurucusu**, yabancı fonlarda **fon temsilcisi** üstlenir.",
      k: "1012 resmi not s. 13 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "MKK ile ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. SPK, MKK'nın gözetim ve denetim merciidir.\nII. Üyelerin kayıtları yanlış tutmasından hak sahiplerinin uğradığı zararlardan tamamen ve yalnızca MKK sorumludur.\nIII. MKK, kayıtların yanlış tutulmasından doğacak zararların tazmini için üyelerin sorumluluk sigortası yaptırmasına karar verebilir.",
      c: ["Yalnız I", "I ve II", "I ve III", "II ve III", "I, II ve III"],
      d: 2,
      a: "I ve III doğrudur. II yanlıştır: **MKK ve üyeleri**, kayıtların yanlış tutulmasından doğan zararlardan **kusurları oranında** sorumludur ve bu sorumluluk aralarındaki sözleşmelerle hafifletilemez. Üyelerin sorumluluk sigortası yaptırmasına **MKK yönetim kurulu** karar verebilir.",
      k: "1012 resmi not s. 11, 13"
    },
    {
      s: "Aşağıdakilerden hangisi **kaydileştirilmesine SPK tarafından karar verilmiş** sermaye piyasası araçlarından biri değildir?",
      c: ["Katılım hesapları", "Pay senetleri", "Rüçhan hakkı senetleri", "Özel sektör kira sertifikaları", "Yatırım fonu katılma payları"],
      d: 0,
      a: "Pay senetleri, rüçhan hakları, borçlanma araçları, kira sertifikaları ve fon katılma payları gibi **sermaye piyasası araçları** kaydileştirilmiştir. **Katılım hesapları** ise katılım bankalarında açılan bankacılık ürünleridir; sermaye piyasası aracı değildir ve kaydileştirme kapsamında yer almaz.",
      k: "1012 resmi not s. 15, 24 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "Takas yükümlülüğünün yerine getirilmesi için **takas günü satılan** kaydi sermaye piyasası araçları, aracı kuruluşlar tarafından yatırımcı hesaplarından **ilk aşamada** hangi hesaba aktarılır?",
      c: ["Üye havuz hesabı", "İhraççı havuz hesabı", "Ortak hesabı", "TCMB hesabı", "Bilinmeyen ortak hesabı"],
      d: 0,
      a: "Satılan kaydi araçlar takas günü önce yatırımcı hesabından aracı kuruluşun **üye havuz hesabına** aktarılır, oradan takas sürecine girer. İhraççı havuz hesabı ise ihraç sürecindeki geçici kayıtlar için kullanılır.",
      k: "1012 resmi not s. 25 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "MKK kayıtlarına yansıtılan **rehin ve teminat** işlemleriyle ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Kaydi sermaye piyasası araçlarının teminat verenin alt hesabında izlenmesi mümkün değildir.\nII. Teminata konu araç teminat alana ait alt hesaba kaydedilirse teminat verenin kimlik bilgileri de bu hesapla bağlantılı olarak izlenir.\nIII. Mülkiyetin teminat alana devredildiği durumda araçlar teminat alanın hesabına teminat açıklamasıyla kayden aktarılır.",
      c: ["Yalnız I", "II ve III", "I ve II", "I ve III", "I, II ve III"],
      d: 1,
      a: "II ve III doğrudur. I yanlıştır: rehin gibi sınırlı ayni haklarda araçlar, teminat verenin mevcut hesabına bağlı bir **alt hesap** açılarak izlenebilir. Teminat alanın alt hesabına kayıtta teminat verenin kimlik bilgileri de bağlantılı tutulur; mülkiyet devredilen teminatta araçlar teminat alanın hesabına **teminat açıklamasıyla** aktarılır.",
      k: "1012 resmi not s. 21, 26"
    },
    // --- Merkezi takas ve MKT ---
    {
      s: "Merkezi takas kuruluşları (MTK) aşağıdaki pazar ve piyasalardan hangilerine takas hizmeti sunabilir?\n\nI. Kanun kapsamındaki teşkilatlanmış pazar yerleri\nII. Borsalar\nIII. TCMB nezdinde işletilen piyasalar\nIV. Yurt dışında faaliyet gösteren borsa ve teşkilatlanmış pazar yerleri",
      c: ["I ve II", "I, II ve III", "I, II ve IV", "I, II, III ve IV", "Yalnız II"],
      d: 2,
      a: "MTK'lar Kanun kapsamındaki **teşkilatlanmış pazar yerlerine, borsalara** ve **yurt dışındaki borsa ve teşkilatlanmış pazar yerlerine** takas hizmeti sunabilir. TCMB nezdinde işletilen piyasalar bu kapsamda sayılmaz.",
      k: "1012 resmi not s. 52 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "Merkezi takas kuruluşlarının üyeleriyle ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. TCMB ve SPKn uyarınca faaliyet gösteren yatırım kuruluşları MTK'ya üye olabilir.\nII. MTK'lar üyelerinden \"mesleki sorumluluk sigortası\" yaptırmalarını isteyebilir.\nIII. MTK'lar üyelerinden üyelik teminatı talep edebilir.",
      c: ["Yalnız I", "I ve II", "II ve III", "I ve III", "I, II ve III"],
      d: 3,
      a: "I ve III doğrudur. TCMB ve yatırım kuruluşları MTK üyesi olabilir; MTK'lar aidat, ücret ve komisyon gibi borçların ödenmemesine karşı **üyelik teminatı** isteyebilir. Mesleki sorumluluk sigortası ise MTK'ların üyelerinden isteyebileceği şartlar arasında sayılmaz.",
      k: "1012 resmi not s. 52 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "Takasbank Merkezi Takas Yönetmeliği'ndeki **teslim karşılığı ödeme** ilkesiyle ilgili aşağıdakilerden hangisi **yanlıştır?**",
      c: ["Takasbank'ın takas hizmeti sunduğu piyasalar itibarıyla bu ilkeye hiçbir istisna getirilemez.", "Yükümlülüğünü yerine getirmeyen üyeye alacağı ödenmez.", "Yükümlülük kısmen yerine getirilirse alacaklar kapatılan borçla orantılı olarak ödenir.", "Alacakların blokelendirilmesi en likit alacaktan başlayarak en az likit alacağa doğru yapılır.", "Bloke çözme işlemleri en az likit alacaktan başlayarak en likit alacağa doğru yapılır."],
      d: 0,
      a: "Takasbank, piyasaların özelliklerine göre teslim karşılığı ödeme ilkesine **istisnalar getirebilir**; bu yüzden ilk ifade yanlıştır. Diğerleri ilkenin unsurlarıdır: borcunu kapatmayana alacak ödenmez, kısmi kapamada orantılı ödeme yapılır, blokelendirme en likitten, bloke çözme en az likitten başlar.",
      k: "1012 resmi not s. 36, 54"
    },
    {
      s: "Takasbank'ın verdiği **merkezi karşı taraf (MKT) hizmetiyle** ilgili aşağıdakilerden hangisi **yanlıştır?**",
      c: ["Takasbank'ın verdiği taahhüt yalnızca aldığı teminatlar ve garanti fonuyla sınırlıdır.", "MKT hizmeti verilen piyasalarda işlem teminatı ve garanti fonu uygulanır.", "Takasbank alıcıya karşı satıcı, satıcıya karşı alıcı konumuna geçerek takasın tamamlanmasını taahhüt eder.", "Türk lirası, döviz ve DİBS garanti fonuna kabul edilebilecek varlıklar arasındadır.", "MKT hizmetinde Takasbank'ın muhatabı yalnızca üyelerdir; üyelerin müşterileriyle muhatap olmaz."],
      d: 0,
      a: "Takasbank'ın taahhüdü teminat ve garanti fonuyla **sınırlı değildir**. Temerrüt şelalesinde temerrüde düşen üyenin kaynakları ve garanti fonunun yanında **Takasbank'ın tahsis ettiği sermaye**, ilave garanti fonu katkı payları ve kalan sermayesinden yapılan taahhüt de kullanılır.",
      k: "1012 resmi not s. 47, 55"
    },
    {
      s: "MKT Yönetmeliği'ne göre bir MKT üyesine bağlı **müşteri hesaplarında oluşan teminat açıklarının** tamamlanmasından Takasbank'a karşı kim sorumludur?",
      c: ["İlgili MKT üyesi", "İlgili müşterinin kendisi", "Takasbank", "Garanti fonuna katkı veren tüm üyeler", "Merkezi Kayıt Kuruluşu"],
      d: 0,
      a: "Müşteri hesaplarındaki teminat açıklarının tamamlanmasından **ilgili MKT üyesi** Takasbank'a karşı sorumludur. Müşteri teminatları ise ayrıştırılmış alt hesaplarda izlenir ve üyenin kendi hesaplarındaki ya da diğer müşterilerin hesaplarındaki açıkları kapatmak için kullanılamaz. Yükümlülüğü aşan fazla teminat da hesap sahibine aittir.",
      k: "1012 resmi not s. 40, 171"
    },
    {
      s: "Takasbank MKT uygulamasında bir **doğrudan MKT üyesi** aşağıdakilerden hangilerinin takas işlemlerini gerçekleştirmeye yetkilidir?\n\nI. Kendi portföyü\nII. Müşterileri\nIII. İşlemci kuruluşlar",
      c: ["Yalnız I", "I ve II", "I ve III", "II ve III", "I, II ve III"],
      d: 1,
      a: "Doğrudan MKT üyeleri yalnızca **kendilerinin (portföy) ve müşterilerinin** takas işlemlerini yapabilir. İşlemci kuruluşların takasını yalnızca **genel MKT üyeleri** gerçekleştirebilir. Üyelik türü, şartlar gözetilerek her iki yönde değiştirilebilir.",
      k: "1012 resmi not s. 32"
    },
    // --- Portföy saklama ---
    {
      s: "Portföy Saklama Tebliği'ne göre aşağıdakilerden hangileri **portföy saklayıcısı** olarak hizmet verebilir?\n\nI. Takasbank\nII. SPK tarafından yetkilendirilen bankalar\nIII. SPK tarafından yetkilendirilen aracı kurumlar",
      c: ["Yalnız I", "I ve II", "I ve III", "II ve III", "I, II ve III"],
      d: 4,
      a: "Takasbank ile SPK'nın yetkilendirdiği **bankalar ve aracı kurumlar**, Tebliğ'deki şartları sağlamak koşuluyla portföy saklama hizmeti verebilir. Banka ve aracı kurumların ayrıca **genel saklama** yetkisine sahip olması gerekir; bankalar için SPK, BDDK'nın uygun görüşünü alır.",
      k: "1012 resmi not s. 62–63"
    },
    {
      s: "Portföy Saklama Tebliği kapsamında **gayrimenkul yatırım fonlarıyla (GYF)** ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Katılma payları Borsa İstanbul'da işlem gören GYF'lerin portföyündeki varlıklar için saklama zorunluluğu yoktur.\nII. Portföy saklayıcısı GYF ile ilgili önemli bir aykırılık tespit ederse SPK'yı bilgilendirmek zorunda değildir.\nIII. Portföy saklayıcısı, portföy yönetiminden veya piyasadaki fiyat hareketlerinden kaynaklanan zararlardan sorumlu değildir.\nIV. Takasbank, saklama hizmeti vermediği kolektif yatırım kuruluşlarının birim pay değerinin değerleme esaslarına göre hesaplanıp hesaplanmadığını da kontrol eder.",
      c: ["Yalnız I", "I ve II", "Yalnız III", "I, III ve IV", "III ve IV"],
      d: 4,
      a: "III ve IV doğrudur. GYF'ler Tebliğ kapsamındadır; varlıkları **saklanmak zorundadır** (I yanlış). Saklayıcı önemli aykırılıkları **SPK'ya bildirir** (II yanlış). Saklayıcı yükümlülüklerini yerine getirmemesinden doğan zararlardan sorumludur, ancak **yönetimden ve fiyat hareketlerinden** doğan zararlardan sorumlu değildir.",
      k: "1012 resmi not s. 59, 64, 69 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    // --- Pay piyasası takası ---
    {
      s: "Borsa İstanbul Pay Piyasası'nda Yıldız Pazar, Ana Pazar, Alt Pazar ve Yakın İzleme Pazarı'ndan pay alacakları olan bir üyenin kapattığı takas borçlarına karşılık **öncelikle** hangi pazara ait alacakları ödenir?",
      c: ["Yakın İzleme Pazarı", "Yıldız Pazar", "Ana Pazar", "Alt Pazar", "Pazar bazında bir öncelik yoktur."],
      d: 0,
      a: "Teslim karşılığı ödemede alacaklar **likidite sırasına** göre bloke edilir: blokelendirme en likit alacaktan başlar, **bloke çözme ve ödeme en az likit alacaktan** başlar. Bu yüzden borcunu kapatan üyeye önce en az likit pazar olan **Yakın İzleme Pazarı** alacakları ödenir.",
      k: "1012 resmi not s. 36, 84 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "Aracı kuruluşlar Pay Piyasası'na olan **nakit takas borçlarını** aşağıdaki yöntemlerden hangisiyle kapatamaz?",
      c: ["Bir sonraki takas gününe ait alacaklarından mahsup ederek", "Başka bir bankadan EFT ile", "Takasbank nezdindeki başka bir hesaptan virmanla", "Diğer piyasalardaki alacaklarının mahsubuyla", "Takasbank nezdindeki serbest nakit bakiyelerinden aktarımla"],
      d: 0,
      a: "Nakit takas borcu EFT, Takasbank'taki başka hesaptan virman veya diğer piyasalardaki alacakların mahsubu gibi **o gün kullanılabilir** kaynaklarla kapatılır. Henüz doğmamış olan **bir sonraki takas gününün alacaklarından** mahsup yapılamaz.",
      k: "1012 resmi not s. 84 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "Borsa İstanbul Pay Piyasası'nda hangi pazardaki işlemlerin takası, alıcı ile satıcının isteği ve Borsanın uygun görmesi halinde **Takasbank dışında**, üyelerin kendi aralarında yapılabilir?",
      c: ["Toptan Satışlar Pazarı", "Birincil Piyasa", "Rüçhan Hakkı Kupon Pazarı", "Yıldız Pazar", "Resmi Müzayede Pazarı"],
      d: 0,
      a: "Merkezi takas prensibine göre Pay Piyasası işlemlerinin takasını kural olarak Takasbank yapar. İstisna: **Toptan Satışlar Pazarı** işlemlerinin takası, alıcı ve satıcının isteği ve BİAŞ'ın uygun görmesiyle üyeler arasında Takasbank dışında yapılabilir.",
      k: "1012 resmi not s. 72"
    },
    {
      s: "Pay Piyasası'nda **gün sonu teminat tamamlama çağrısıyla** ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Teminatı bulunması gereken seviyenin altına düşen veya Türk lirası teminat açığı olan hesaplara her iş günü sonunda çağrı yapılır.\nII. Üyeler çağrı yükümlülüklerini bir sonraki iş günü en geç saat 15:00'e kadar yerine getirmelidir.\nIII. Belirlenen saate kadar yerine getirilmeyen yükümlülükler için temerrüt hükümleri uygulanır.",
      c: ["I, II ve III", "Yalnız I", "I ve II", "II ve III", "I ve III"],
      d: 0,
      a: "Üç ifade de doğrudur. Gün sonu çağrısı, teminat yetersizliği veya TL teminat açığı olan hesaplara yapılır. Yükümlülük **ertesi iş günü 15:00'e** kadar yerine getirilmezse **temerrüt hükümleri** işler. Gün içi teminat tamamlama çağrısında ise süre 2 saattir.",
      k: "1012 resmi not s. 77, 87"
    },
    // --- Borçlanma araçları ve para piyasası ---
    {
      s: "Bir üyenin aynı gün Borsa İstanbul BAP Kesin Alım Satım Pazarı'nda yaptığı işlemler şunlardır:\n\n- A tahvilinden 60 milyon TL nominal **alış** (tutar 48 milyon TL)\n- A tahvilinden 20 milyon TL nominal **satış** (tutar 16,4 milyon TL)\n- B tahvilinden 100 milyon TL nominal **alış** (tutar 90 milyon TL)\n\nNetleştirme sonrasında üyenin takas pozisyonu nedir?",
      c: ["A: +40 milyon nominal alacak; B: +100 milyon nominal alacak; nakit: 121,6 milyon TL borç", "A: +80 milyon nominal alacak; B: +100 milyon nominal alacak; nakit: 154,4 milyon TL borç", "A: −40 milyon nominal borç; B: +100 milyon nominal alacak; nakit: 121,6 milyon TL alacak", "A: +40 milyon nominal alacak; B: +100 milyon nominal alacak; nakit: 138 milyon TL borç", "A: +60 milyon nominal alacak; B: +100 milyon nominal alacak; nakit: 105,2 milyon TL borç"],
      d: 0,
      a: "Kıymetler **ISIN bazında**, nakit ise **toplam** olarak netleştirilir.\n- A: 60 alış − 20 satış = **+40 milyon** nominal alacak.\n- B: **+100 milyon** nominal alacak.\n- Nakit: −48 + 16,4 − 90 = **−121,6 milyon TL** (borç).",
      k: "1012 resmi not s. 125 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "Aşağıdakilerden hangileri Borsa İstanbul Borçlanma Araçları Piyasası'nda **kendi adlarına** işlem yapabilir?\n\nI. Türkiye Cumhuriyet Merkez Bankası\nII. Yatırım fonları\nIII. Piyasa üyesi bankalar\nIV. Borsa üyesi aracı kurumlar",
      c: ["Yalnız I", "I ve II", "III ve IV", "I, III ve IV", "I, II, III ve IV"],
      d: 3,
      a: "BAP'ta kendi adlarına **TCMB**, piyasa üyesi **bankalar** ve borsa üyesi **aracı kurumlar** işlem yapar. Yatırım fonları ve portföy yönetim şirketleri bu piyasada kendi adlarına işlem yapabilen kuruluşlar arasında sayılmaz.",
      k: "1012 resmi not s. 126 (bölüm sorusu; cevap anahtarı s. 175)"
    },
    {
      s: "Borsa İstanbul Para Piyasası'nda Takasbank'ın kurduğu **garanti fonuyla** ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Üyelerin temerrüdünde zararların teminatları aşan kısmı için kullanılmak üzere üyelerin katkı paylarıyla oluşturulur.\nII. Yalnızca son 3 ayda en fazla risk taşıyan ilk 10 üyenin fona katılımı zorunludur.\nIII. Fonun büyüklüğü; en fazla teminat yükümlülüğü olan üyenin temerrüdü ile ikinci ve üçüncü en fazla yükümlülüğü olan üyelerin birlikte temerrüdü halindeki kaynak ihtiyacından büyük olanından az olamaz.\nIV. Katkı payı yükümlülükleri her ayın son iş günü hesaplanır ve izleyen ayın ilk iş günü itibarıyla güncellenir.",
      c: ["I ve II", "II ve III", "I, III ve IV", "I, II ve III", "II, III ve IV"],
      d: 2,
      a: "I, III ve IV doğrudur. II yanlıştır: piyasadaki **tüm MKT üyelerinin** garanti fonuna katılımı zorunludur. Fon büyüklüğü \"en büyük tek üye\" ile \"ikinci ve üçüncünün birlikte\" temerrüdünden büyük olana göre belirlenir; katkı payları **aylık** güncellenir.",
      k: "1012 resmi not s. 112, 128"
    },
    // --- Türev araçlar ve teminat yönetimi ---
    {
      s: "Aşağıdakilerden hangisi **VİOP garanti fonuna** katkı payı olarak kabul edilen varlıklar arasında yer almaz?",
      c: ["Gümüş", "Türk lirası", "Konvertibl döviz", "Devlet iç borçlanma senetleri", "Borçlanma araçları şemsiye fonu payları"],
      d: 0,
      a: "VİOP'ta teminat ve garanti fonu katkı payı olarak nakit TL, konvertibl döviz, DİBS, Hazine eurobondları, fon payları, standart altın gibi varlıklar kabul edilir (EK-2). **Gümüş** kabul edilen varlıklar listesinde yoktur.",
      k: "1012 resmi not s. 160, 178 (bölüm sorusu; cevap anahtarı s. 176)"
    },
    {
      s: "Aşağıdakilerden hangisi **VİOP hesap türleri** arasında yer almaz?",
      c: ["Fon hesabı", "Portföy hesabı", "Müşteri hesabı", "Çoklu (global) hesap", "Piyasa yapıcı hesabı"],
      d: 0,
      a: "VİOP'ta hesaplar **portföy, müşteri, çoklu (global)** ve **piyasa yapıcı** hesabı türlerinde açılır. \"Fon hesabı\" adıyla ayrı bir hesap türü tanımlanmamıştır.",
      k: "1012 resmi not s. 160 (bölüm sorusu; cevap anahtarı s. 176)"
    },
    {
      s: "Aşağıdakilerden hangisi **tezgâhüstü türev işlemlerde** teminat ve garanti fonu katkı payı olarak kabul edilmez?",
      c: ["Teminat mektubu", "Nakit Türk lirası", "Konvertibl döviz (USD, EUR, GBP)", "Devlet iç borçlanma senetleri", "Hazine ve Maliye Bakanlığının ihraç ettiği eurobondlar"],
      d: 0,
      a: "Tezgâhüstü türev işlemlerde nakit TL, konvertibl döviz, DİBS ve Hazine eurobondları teminat ve garanti fonu katkı payı olarak kabul edilir (EK-2). **Teminat mektubu** kabul edilen varlıklar arasında değildir.",
      k: "1012 resmi not s. 162, 178 (bölüm sorusu; cevap anahtarı s. 176)"
    },
    {
      s: "MKT hizmeti verilen piyasalarda olası bir temerrüt halinde aşağıdakilerden hangisi **kullanılacak kaynaklar arasında yer almaz?**",
      c: ["Temerrüde düşmeyen üyelerin müşterilerine ait fazla teminatlar", "Temerrüde düşen üyenin teminatları", "Temerrüde düşmeyen üyelerin yatırılmış garanti fonu katkı payları", "Varsa sigorta poliçelerinden yapılacak tazminler", "Takasbank'ın kalan sermayesinden yapılan taahhüt"],
      d: 0,
      a: "Temerrüt şelalesinde temerrüde düşen üyenin teminat ve katkı payları, Takasbank'ın tahsis ettiği sermaye, diğer üyelerin garanti fonu katkı payları, ilave katkı payları, varsa sigorta ve Takasbank'ın kalan sermayesi kullanılabilir. **Müşteri teminatları** ayrıştırılmıştır; yükümlülüğü aşan fazla teminat da **hesap sahibine aittir** ve başkalarının temerrüdünde kullanılamaz.",
      k: "1012 resmi not s. 171–172"
    },
    // --- İkinci deneme seti ---
    {
      s: "Takas ve saklama terminolojisinde **TIC** hesabı neyi ifade eder?",
      c: ["Bankaların TCMB nezdindeki nakit hesaplarını", "Üyelerin Takasbank nezdindeki teminat hesaplarını", "Yatırımcıların MKK nezdindeki kıymet hesaplarını", "Takasbank Elektronik Transfer Sistemini", "Yabancı merkezi saklama kuruluşlarındaki hesapları"],
      d: 0,
      a: "**TIC**, bankaların **TCMB nezdindeki nakit hesaplarıdır**. Nakit borçlu üye banka borcunu kendi TIC hesabından Takasbank'ın TIC hesabına aktararak kapatır. TETS ise Takasbank Elektronik Transfer Sistemi'dir.",
      k: "1012 resmi not s. 6, 95"
    },
    {
      s: "Borsa İstanbul SWAP Piyasası'nda aşağıdaki yükümlülüklerden hangisinin temerrüde düşülmeden yerine getirilebileceği **son saat en geçtir?**",
      c: ["USD ve EUR yükümlülükleri", "TL yükümlülükleri", "Kıymetli maden yükümlülükleri", "Teminat yükümlülükleri", "Değişim teminatı yükümlülükleri"],
      d: 0,
      a: "SWAP Piyasası'nda **teminat ve değişim teminatı** yükümlülükleri 13:00'ten, **kıymetli maden** 17:00'den, **TL** 17:15'ten, **USD ve EUR** yükümlülükleri ise **21:00'dan** sonra yerine getirilirse üye bildirim gerekmeksizin temerrüde düşer.",
      k: "1012 resmi not s. 119"
    },
    {
      s: "Mevzuattaki **teşkilatlanmış diğer pazar yerleri** kavramı neyi kapsar?",
      c: ["Borsa dışındaki alternatif işlem sistemleri ve çok taraflı işlem platformlarını", "Borsa İstanbul bünyesinde kurulan pay, borçlanma aracı ve türev araç pazarlarının tamamını", "Bankaların kendi şubelerinde yaptığı mevduat ve kredi işlemlerini", "Takasbank'ın merkezi karşı taraf olarak hizmet verdiği tüm piyasaları", "Yurt dışında yerleşik ve düzenlenmiş borsalarla bunların alt pazarlarını"],
      d: 0,
      a: "Teşkilatlanmış diğer pazar yerleri; **borsalar dışında** sermaye piyasası araçlarının alıcı ve satıcılarını bir araya getiren, sistemler ve platformlar kuran ve işleten **alternatif işlem sistemleri, çok taraflı işlem platformları** ve teşkilatlanmış diğer piyasalardır.",
      k: "1012 resmi not s. 6"
    },
    {
      s: "MKT uygulamasında Takasbank nezdinde açılan **teminat hesapları üzerindeki tasarruf yetkisi** ile ilgili müşterilere hangi bilgi verilmelidir?",
      c: ["Yetki MKT üyesindedir; Takasbank onu bulunması gereken teminatla sınırlı kısıtlar.", "Yetki tamamen Takasbank'tadır; üye teminatlar üzerinde işlem yapamaz.", "Yetki doğrudan müşteridedir; ne MKT üyesi ne de Takasbank bu yetkiyi herhangi bir şekilde kısıtlayamaz.", "Yetki MKK'dadır; teminatlar MKK'nın talimatıyla hareket ettirilir.", "Yetki Kuruldadır; teminat çekme işlemleri Kurulun onayına bağlıdır."],
      d: 0,
      a: "MKT üyesi; hesap yapısı, Takasbank'ın sağladığı ayrıştırmanın kapsamı ve teminat hesapları üzerindeki **tasarruf yetkisinin MKT üyesine ait olduğu**, Takasbank'ın bu yetkiyi **sadece bulunması gereken teminatla sınırlı** olarak kısıtladığı konusunda müşterilerini tam ve doğru bilgilendirmelidir.",
      k: "1012 resmi not s. 33"
    },
    {
      s: "Merkezi takas uygulamasında **garanti fonu katkı payları** ile ilgili hangisi doğrudur?",
      c: ["Kamu alacakları için dahi haczedilemez, rehnedilemez ve iflas masasına dahil edilemez.", "Kamu alacakları için haczedilebilir, ancak rehnedilemez.", "Üyenin iflası halinde iflas masasına dahil edilir.", "Üyenin kendi teminatı yeterli olsa bile temerrütte önce diğer üyelerin katkı paylarına başvurulur.", "Takasbank bu payları kendi ticari işlemlerinde kullanabilir."],
      d: 0,
      a: "Katkı payları üyelerin takas yükümlülüklerinde kullanılır; **tevdi amacı dışında kullanılamaz**, kamu alacakları için dahi **haczedilemez, rehnedilemez**, idari tasfiye kararlarından etkilenmez, **iflas masasına dahil edilemez**. Üyenin teminatı ve kendi katkısı yetersiz kalmadıkça diğer üyelerin katkılarına başvurulamaz.",
      k: "1012 resmi not s. 42"
    },
    {
      s: "Üyelikten kendi isteğiyle ayrılan kuruluşun **garanti fonu katkı paylarının iadesi** için hangisi doğrudur?",
      c: ["Tüm yükümlülükler yerine getirilmiş olmalı; Takasbank talebi geçici olarak reddedebilir.", "Ayrılma talebi üzerine katkı payı, vergi ve yasal kesinti yapılmadan aynı gün tamamen iade edilir.", "Katkı payları iade edilmez, garanti fonunda kalır.", "İade her durumda sadece nakit olarak ve mislen yapılır.", "İade için diğer üyelerin oybirliğiyle onay vermesi gerekir."],
      d: 0,
      a: "İade için üyenin ilgili piyasalardaki **tüm yükümlülüklerini yerine getirmiş** olması şarttır. Takasbank piyasa risklerini ve fonun ödeme gücünü gözeterek talebi **geçici bir süre reddedebilir**. İadede vergi ve yasal yükümlülükler mahsup edilir; iade **aynen veya mislen** olabilir.",
      k: "1012 resmi not s. 42–43"
    },
    {
      s: "Merkezi takas (MTK) uygulamasında takas borcunu kapatamayan temerrütteki üyenin borcu hangi sırayla karşılanır?",
      c: ["Blokeli takas alacağı → işlem teminatı → garanti fonu katkı payı", "İşlem teminatı → garanti fonu katkı payı → blokeli takas alacağı", "Garanti fonu katkı payı → işlem teminatı → blokeli takas alacağı", "Takasbank sermayesi → işlem teminatı → garanti fonu katkı payı", "Diğer üyelerin katkı payları → işlem teminatı → blokeli takas alacağı"],
      d: 0,
      a: "Temerrütte önce üyenin **blokeli takas alacağı** borç kapamada kullanılır; yetmezse **işlem teminatlarına**, o da yetmezse ve garanti fonu varsa üyenin **garanti fonu katkı payına** başvurulur. Daha olumsuz fiyatlardan işlem yapılırsa fark üyeden tahsil edilir.",
      k: "1012 resmi not s. 43"
    },
    {
      s: "MKT uygulamasında **temerrüde düşen** üye için hangisi doğrudur?",
      c: ["Temerrüt sona erene kadar hesaplarından teminat çekmesi kısıtlanabilir.", "Temerrüt için Takasbank'ın yazılı ihbarda bulunması şarttır.", "Üyeye yükümlülüklerini yerine getirmesi için süre verilmez.", "Süre sonunda da Takasbank pozisyonları re'sen kapatamaz.", "Temerrüt faizi ödeme yükümlülüğü doğmaz."],
      d: 0,
      a: "Yükümlülüklerini zamanında yerine getirmeyen MKT üyesi **bildirim gerekmeksizin** temerrüde düşer ve temerrüt sona erene kadar **teminat çekmesi kısıtlanabilir**. Üyeye piyasa yönergesindeki süre verilir; süre sonunda Takasbank hesaplar üzerindeki tasarruf yetkisini askıya alıp pozisyonları **re'sen kapatabilir**. Üye temerrüt faizi öder.",
      k: "1012 resmi not s. 46"
    },
    {
      s: "MKT uygulamasında temerrüde düşen üyenin takibinden sağlanan kaynaklar, borçların tasfiyesinden sonra kalırsa **ilk olarak** neye kullanılır?",
      c: ["Temerrüde düşmeyen üyelerden alınan ilave katkı paylarının iadesine", "Temerrüde düşen üyeye kalan tutarın geri ödenmesine", "Takasbank'ın sermayesine eklenerek kâr payı dağıtımına", "Temerrüde düşmeyen üyelerin yatırılmış katkı paylarının iadesine", "Yatırımcı Tazmin Merkezi'ne aktarılarak yatırımcılara ödenmesine"],
      d: 0,
      a: "Kalan kaynaklar önce temerrüde düşmemiş üyelerden alınan **ilave garanti fonu katkı paylarının**, sonra yatırılmış katkı paylarının **oransal** iadesinde kullanılır. Tüm asli ve fer'i yükümlülükler tasfiye edilmeden **mütemerride hiçbir ödeme veya iade yapılamaz**.",
      k: "1012 resmi not s. 48"
    },
    {
      s: "Takasbank, temerrüde düşen MKT üyesinin pozisyonlarını hangi durumda temerrüde düşmemiş üyelere **zorunlu olarak devredebilir** veya sonlandırabilir?",
      c: ["Karşı taraf bulunamaması ya da sermayeyi mevzuat sınırı altına düşürecek zarar riski", "Mütemerrit üyenin pozisyonlarını kapatmak için Takasbank'tan ek süre istemesi", "Temerrüt tutarının üyenin yatırdığı işlem teminatından düşük kalması", "Temerrüde düşen üyenin yurt dışında yerleşik, yabancı sermayeli ve borsa üyesi olmayan bir kuruluş olması", "Kurulun temerrüde düşen üyenin faaliyet iznini geçici olarak askıya alması"],
      d: 0,
      a: "Takasbank önce üyeye pozisyonları kapatma talimatı verir, kapatmazsa re'sen kapatır veya devir ihalesi düzenler. **Kalan sermayesinin BDDK mevzuatına göre gereken tutarın altına inmesine** yol açabilecek zarar veya **karşı pozisyon almaya istekli taraf bulunamaması** halinde zorunlu devir veya sonlandırma yapabilir.",
      k: "1012 resmi not s. 48"
    },
    {
      s: "Merkezi takas kuruluşları, yaptıkları incelemelerde kendi kurallarının **ağır ihmal veya kasıtlı ihlal** edildiğini tespit ederse ne yapmalıdır?",
      c: ["SPK'ya bildirimde bulunmalıdır.", "Üyenin faaliyet iznini doğrudan iptal etmelidir.", "Konuyu kendi iç denetim raporuna yazıp dosyayı kapatmalıdır.", "İhlali yapan üyeye hapis cezası vermelidir.", "Durumu Borsa İstanbul'a devretmeli ve işlem yapmamalıdır."],
      d: 0,
      a: "MTK'lar SPKn ve mevzuatla verilen yetkiler çerçevesinde düzenleme yapar ve üyelerin uyumunu izler. Kendi kurallarının **ağır ihmali ve kasıtlı ihlali** halinde **SPK'ya bildirimde** bulunmaları gerekir.",
      k: "1012 resmi not s. 51"
    },
    {
      s: "Portföy saklayıcısının kolektif yatırım kuruluşlarına (KYK) ilişkin yükümlülükleri arasında hangisi **yer alır?**",
      c: ["KYK talimatlarının strateji, sınırlama ve kaldıraç limitlerine uygunluğunu kontrol etmek", "KYK'nın yatırım kararlarını portföy yönetim şirketi yerine kendisi vermek", "KYK portföyünü kendi aktifleriyle birlikte tek bir hesapta izleyip bu hesabı Kurula düzenli olarak raporlamak", "KYK'ya ve katılma payı sahiplerine asgari getiri garantisi sağlamak", "KYK'nın katılma paylarını kendi hesabına alıp satarak likidite sağlamak"],
      d: 0,
      a: "Portföy saklayıcı; pay ihraç ve itfalarının mevzuata uygunluğunu, birim pay değerinin doğru hesaplanmasını ve PYŞ/yatırım ortaklığı **talimatlarının** içtüzük ve izahnamedeki **yatırım strateji, sınırlamalar ve kaldıraçlı işlem limitlerine** uygunluğunu kontrol eder. Yatırım kararı vermez.",
      k: "1012 resmi not s. 60"
    },
    {
      s: "Takasbank, portföy saklama hizmeti **vermediği** bir KYK'nın birim pay değeri hesaplamasında aykırılık tespit ederse ne yapar?",
      c: ["Saklayıcıyı ve SPK'yı bilgilendirir; tedbir alınmazsa ertesi iş günü SPK'ya bildirir.", "Konuyla ilgilenmez; kontrol tamamen saklayıcının sorumluluğundadır.", "KYK'nın portföyünü saklayıcıdan alarak doğrudan kendi saklamasına alır.", "Fonun tüm işlemlerini Kurula sormadan derhal ve süresiz olarak durdurur.", "Aykırılığı, yıl sonunda hazırlanan faaliyet raporunda kamuya açıklar."],
      d: 0,
      a: "Takasbank, saklama hizmeti vermediği KYK'larda da birim değer hesaplamasını ve portföy işlemlerinin uygunluğunu kontrol eder. Aykırılıkta **portföy saklayıcısını bilgilendirir ve SPK'ya bilgi verir**; saklayıcı tedbir almazsa tespitler **izleyen iş günü** SPK'ya bildirilir.",
      k: "1012 resmi not s. 66"
    },
    {
      s: "Pay Piyasası'nda MKT hizmeti kapsamında **başlangıç teminatı** parametreleri belirlenirken hangisi kullanılır?",
      c: ["%99,50 güven düzeyi; yeni işlemler için 2 gün elde tutma süresi", "%95 güven düzeyi; yeni işlemler için 10 gün elde tutma süresi", "%99,90 güven düzeyi; tüm işlemler için 5 gün elde tutma süresi", "%90 güven düzeyi; elde tutma süresi uygulanmaz", "%99 güven düzeyi; yeni işlemler için 1 ay elde tutma süresi"],
      d: 0,
      a: "Başlangıç teminatı parametrelerinde **%99,50 güven düzeyi** ve yeni işlemler için **2 gün** elde tutma süresi kullanılır; takası aynı gün gerçekleşecek pozisyonlarda 1 gün alınır. Parametreler **ayda bir** gözden geçirilir; portföy bazında **BISTECH Marjin Yöntemi** kullanılır.",
      k: "1012 resmi not s. 76"
    },
    {
      s: "Borçlanma Araçları Piyasası'nda üyelerin **nakit takas borçlarını** ödeme yöntemleri arasında hangisi **yoktur?**",
      c: ["Takasbank'ın üyeye otomatik kredi açması", "EFT kanalıyla ödeme", "Takasbank nezdindeki başka bir hesaptan virman", "Pay Piyasası veya Takasbank Para Piyasası alacaklarının mahsubu", "Başka bir üyenin hesabından gelen virman"],
      d: 0,
      a: "Nakit takas borçları **16:45'e** kadar; **EFT**, Takasbank nezdindeki kendi veya başka bir üyenin hesabından **virman** ya da Pay Piyasası/Takasbank Para Piyasası **alacaklarının mahsubu** yoluyla kapatılabilir. Otomatik kredi bir ödeme yöntemi değildir.",
      k: "1012 resmi not s. 95"
    },
    {
      s: "BİAŞ Para Piyasası'nda nakit temerrüdünde nakit alacaklısına, teslim edilemeyen kısım için tahsil edilen temerrüt faizinin **ne kadarı** mağduriyet ödemesi olarak yapılır?",
      c: ["1/3", "1/2", "2/3", "3/4", "4/5"],
      d: 2,
      a: "Nakit temerrüdünde temerrüt faizi uygulanır ve alacaklıya, teslim edilemeyen kısım için tahsil edilen **temerrüt faizinin 2/3'ü** kadar mağduriyet ödemesi yapılır. Faiz asgari temerrüt cezasının altında kalırsa hesaplanan tutar üzerinden ödeme yapılır.",
      k: "1012 resmi not s. 102"
    },
    {
      s: "BİAŞ Para Piyasası'nda **temerrüt faizinin** baz oranı nasıl belirlenir?",
      c: ["Üç piyasada oluşan gecelik ağırlıklı ortalama faizlerden en yükseği esas alınır.", "TCMB politika faizi doğrudan baz oran olarak alınır.", "Üç piyasadaki gecelik faizlerin en düşüğü esas alınır.", "Hazine'nin son ihalesindeki bileşik faiz esas alınır.", "Takasbank'ın her gün serbestçe belirlediği sabit oran uygulanır."],
      d: 0,
      a: "Baz oran; BİAŞ Repo-Ters Repo Pazarı, TCMB Bankalararası Para Piyasası ve Takasbank Para Piyasası'nda oluşan **gecelik ağırlıklı ortalama faizlerden en yüksek** olanıdır. Katsayı aynı gün valörlü gecikmede 0,50, valör sonrasında 2'dir; formül: matrah × (baz faiz/100 × katsayı) × gün/365.",
      k: "1012 resmi not s. 102"
    },
    {
      s: "Para Piyasası'nda takas tarihinde belirlenen son saatten **sonra ancak aynı gün** yerine getirilen yükümlülük için temerrüt faizi nasıl hesaplanır?",
      c: ["1 gün üzerinden hesaplanır ve üst sınır uygulanmaz.", "Faiz uygulanmaz; sadece uyarı yapılır.", "2 gün üzerinden hesaplanır ve üst sınır uygulanır.", "Bir sonraki iş gününe kadar geçen iş günü sayısıyla hesaplanır.", "Yükümlülük tutarının sabit %1'i olarak tahsil edilir."],
      d: 0,
      a: "Temerrüt faizinde takvim günleri dikkate alınır; takas tarihinde son saatten sonra ancak **aynı gün** yerine getirilen yükümlülüklerde faiz **1 gün** üzerinden hesaplanır ve **aynı gün yerine getirilen yükümlülüklerde üst sınır uygulanmaz**. Faiz tahakkuktan itibaren 1 iş günü içinde ödenir.",
      k: "1012 resmi not s. 102"
    },
    {
      s: "Takasbank'ta nakit Türk Lirası teminat ve garanti fonu katkı paylarının **nemalandırılmasında** tam iş günlerinde esas alınan bakiye saati hangisidir?",
      c: ["12:45", "14:00", "15:00", "15:30", "15:40"],
      d: 4,
      a: "Nemalandırma **15:40'taki** TL nakit teminat bakiyeleri üzerinden yapılır; bu saatten sonra yatırılan TL teminatlar nemalandırılmaz (yarım günlerde 11:40). Olağandışı piyasa koşullarında nemalandırma yapılmayabilir ve bu durumda nema ödenmez.",
      k: "1012 resmi not s. 108"
    },
    {
      s: "Borsa İstanbul **SWAP Piyasası** ile ilgili hangisi doğrudur?",
      c: ["2018'de faaliyete başlamış olup Takasbank MKT hizmeti verir; çok taraflı netleştirme uygulanır.", "Takasbank bu piyasada merkezi karşı taraf değildir; işlemler taraflar arasında ikili takas yöntemiyle yapılır.", "Alacak dağıtımı, üyenin teminat yükümlülüğünden bağımsız olarak yapılır.", "Kısmi yerine getirilen yükümlülüklerde alacaklar hiç ödenmez.", "Takas, ödeme karşılığı teslim prensibiyle ve brüt esasla yapılır."],
      d: 0,
      a: "SWAP Piyasası **01.10.2018'de** faaliyete başlamıştır; Takasbank **MKT** olarak hizmet verir. Takas, ödeme karşılığı ödeme ve teslim karşılığı ödeme prensibiyle ve **çok taraflı netleştirme** ile yapılır. Kısmi ifada alacaklar oransal ödenir; alacak dağıtımı için **teminat yükümlülüğünün yerine getirilmiş** olması gerekir.",
      k: "1012 resmi not s. 114"
    },
    {
      s: "SWAP Piyasası'nda **garanti fonunun büyüklüğü** hangi kaynak ihtiyacından az olamaz?",
      c: ["En büyük üye ile ikinci ve üçüncü büyük üyelerin birlikte temerrüdü ihtiyacının büyüğünden", "Piyasadaki tüm üyelerin yatırdığı toplam işlem teminatının yarısından", "En büyük açık pozisyonlu üyenin tek başına temerrüdündeki ihtiyacın yarısından", "Takasbank'ın BDDK mevzuatına göre hesaplanan özkaynağının %25'inden", "Bir önceki yıl piyasada gerçekleşen en büyük tekil temerrüt tutarından"],
      d: 0,
      a: "Garanti fonu, **en büyük açık pozisyonlu üye** ile **ikinci ve üçüncü en büyük** üyenin birlikte temerrüdünde doğacak kaynak ihtiyacının büyük olanından az olamaz. Hesapta asgari %99,5 güven düzeyi, 2 iş günü elde tutma ve 5 yıllık veri kullanılır; yeterlilik en geç 3 ayda bir sınanır.",
      k: "1012 resmi not s. 118"
    },
    {
      s: "VİOP'ta **işlem öncesi risk yönetimi** katmanında teminat eksiği olan hesaplar için hangisi geçerlidir?",
      c: ["Bu hesaplar üzerinden pozisyon artırıcı emir iletimine izin verilmez.", "Bu hesaplar üzerinden her türlü emir iletimi serbesttir.", "Hesaplardaki tüm açık pozisyonlar anında re'sen kapatılır.", "Bu hesaplara Takasbank otomatik olarak teminat kredisi tanımlar.", "Hesaplar ancak Kurul onayıyla yeniden işleme açılır."],
      d: 0,
      a: "VİOP'ta işlem öncesi, işlem anı ve işlem sonrası olmak üzere **üç katmanlı** risk yönetimi uygulanır. İşlem öncesi parametreler asgari 1 yıllık veri ve %99,50 güven düzeyiyle belirlenir. Bu katmana esas **teminat eksiği olan hesaplardan pozisyon artırıcı emir iletilemez**; denge PTRM ara yüzünden izlenir.",
      k: "1012 resmi not s. 134"
    },
    {
      s: "VİOP'ta **pasif aşımda** olan sicillerde limiti aşan pozisyonların kapatılmasına ilişkin hükümler, aynı yönlü toplam açık pozisyon hangi seviyeyi aşarsa uygulanır?",
      c: ["%12", "%15", "%20", "%25", "%35"],
      d: 0,
      a: "Sicilin pozisyonu artmadığı halde toplam açık pozisyonun azalması nedeniyle oluşan aşım **pasif aşımdır**. Pasif aşımda pozisyon artırıcı işlem engeli sürer; kapatma bildirimine ilişkin hükümler ise aynı yönlü toplam açık pozisyonun **%12'yi** aşması durumunda uygulanır.",
      k: "1012 resmi not s. 137"
    },
    {
      s: "VİOP'ta garanti fonunun kullanılması halinde, 1 Nisan–31 Mart dönemi içinde üyelerden **en fazla kaç kez** ilave garanti fonu katkı payı istenebilir?",
      c: ["4", "5", "6", "8", "12"],
      d: 0,
      a: "Garanti fonu kullanılırsa üyelerden, yatırılmış katkı payını geçmemek üzere ilave katkı payı istenebilir; 1 Nisan–31 Mart arasındaki bir yıllık dönemde **en fazla dört kez** talep edilebilir. MKT üyelerinin garanti fonuna katılımı zorunludur. Dikkat: SWAP Piyasası'nda bu sınır **iki** seferdir.",
      k: "1012 resmi not s. 145"
    },
    {
      s: "Takasbank teminat değerleme katsayılarının belirlenmesinde kullanılan ve bankacılıkta endüstri standardı haline gelen **tarihsel benzetim (simülasyon)** yönteminin özelliği hangisidir?",
      c: ["Olasılık dağılımına ilişkin bir varsayım kullanmaz ve geçmiş oynaklıklardan senaryo üretir.", "Getirilerin normal dağıldığını varsayan parametrik bir yöntemdir.", "Volatilite ve korelasyonların ayrıca tahmin edilmesini gerektirir.", "Gelecekteki fiyatları rastgele sayı üretimiyle tahmin eder.", "Kriz dönemlerindeki etkileri yansıtamadığı için stres testinde kullanılmaz."],
      d: 0,
      a: "Tarihsel benzetim yöntemi \"tarihin tekerrür edeceği\" varsayımıyla geçmiş oynaklıklardan senaryo üretir; **olasılık dağılımı varsayımı kullanmaz**, gözlem süresi içindeki kriz etkilerini yakalayabilir ve parametre tahmini gerektirmediği için volatilite/korelasyon tahmin hatalarını elimine eder.",
      k: "1012 resmi not s. 169"
    }
  ]
});
