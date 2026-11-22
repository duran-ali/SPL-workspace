// 1004 Sermaye Piyasası Araçları 2: genel deneme soru havuzu (50 soru).
// Bu sorular yalnızca genel denemede çıkar; günlük testlerde ve ders sonunda sorulmayan bilgileri ölçer.
SPL.deneme("1004", {
  sorular: [
    // --- İzahname (1–4. günler) ---
    {
      s: "Birden fazla belgeden oluşan izahnamede **ihraççı bilgi dokümanı (İBD)** ile ilgili hangisi doğrudur?",
      c: ["İBD, aracın hak ve risklerini anlatan belgedir", "İBD'nin onaylanması için SPAN'ın da aynı anda sunulması zorunludur", "İBD yalnızca yurt dışı ihraçlarda hazırlanır", "İBD özetin yerine geçer ve ayrıca özet hazırlanmaz", "İBD, ihraç edilecek araç belli olmadan önceden onaylatılabilir"],
      d: 4,
      a: "Birden fazla belgeden oluşan izahname **İBD, SPAN ve özetten** oluşur. **İBD önceden onaylatılabilir**; aracın özelliklerini SPAN anlatır.",
      k: "1004 resmi not s. 1-6"
    },
    {
      s: "Finansal tablolarını KAP'ta düzenli olarak yayımlayan bir ihraççı, izahnamesinde finansal tablolarla ilgili nasıl bir kolaylıktan yararlanabilir?",
      c: ["KAP'taki tablolara atıf yapabilir", "Hiçbir finansal tablo hazırlamadan ve sunmadan izahname onayı alabilir", "Bağımsız denetimden geçmemiş tabloları denetlenmiş gibi kullanabilir", "Finansal tablolarını yalnızca İngilizce olarak sunabilir", "Bu ihraççılar için izahnamede herhangi bir kolaylık öngörülmemiştir"],
      d: 0,
      a: "KAP'ta düzenli yayım yapan ihraççı, tabloları izahnameye koymayıp bu bilgilere **atıf** yapabilir. Kurul veya Borsa sitesindeki bilgilere de atıf yapılabilir.",
      k: "1004 resmi not s. 6-12"
    },
    {
      s: "Kurula onay için sunulan **taslak izahname**, başvuru tarihinden itibaren kaç iş günü içinde ihraççının internet sitesinde ve KAP'ta yayımlanır?",
      c: ["2 iş günü", "5 iş günü", "7 iş günü", "10 iş günü", "15 iş günü"],
      d: 1,
      a: "Taslak izahname başvurudan itibaren **5 iş günü** içinde yayımlanır. Onaylı izahname ise teslimden itibaren **15 iş günü** içinde ilan edilir.",
      k: "1004 resmi not s. 12"
    },
    {
      s: "İhraççı, Kurulca onaylanmış izahnamenin internet sitesinde asgari ne kadar süre korunması için gerekli tedbirleri almalıdır?",
      c: ["1 yıl", "2 yıl", "3 yıl", "4 yıl", "5 yıl"],
      d: 4,
      a: "İzahname, Kurulca onaylandığı şekliyle internet sitesinde **asgari beş yıl** korunur.",
      k: "1004 resmi not s. 13"
    },
    {
      s: "Kamuyu aydınlatma belgelerinden doğan sorumlulukta **yalnızca özete** dayanılarak sorumluluk yüklenmesi ile ilgili hangisi doğrudur?",
      c: ["Özet, izahnamenin diğer kısımlarından bağımsız olarak her durumda tek başına sorumluluk doğurur", "Özet yalnızca ihraççı için, kusur aranmaksızın sorumluluk doğurur", "Kural olarak yalnızca özete dayanılarak sorumluluk yüklenemez", "Özetteki her hata kast veya ağır ihmal olarak kabul edilir", "Özetteki bilgilerden yalnızca yetkili kuruluş sorumlu tutulur"],
      d: 2,
      a: "Kural olarak **yalnızca özete dayanılarak** sorumluluk yüklenemez; özetin izahnamenin diğer kısımlarıyla birlikte okunduğunda yanıltıcı olması gibi hâller ayrıktır.",
      k: "1004 resmi not s. 16-19"
    },
    {
      s: "İzahname başvurusunda Kurulun bildirdiği eksiklikler için başvuru sahibine, talebi üzerine en fazla ne kadar **ek süre** verilebilir?",
      c: ["5 iş günü", "10 iş günü", "15 iş günü", "20 iş günü", "30 iş günü"],
      d: 3,
      a: "Eksiklikler **20 iş günü** içinde giderilir; talep üzerine **20 iş gününe kadar** ek süre verilebilir. Süre içinde tamamlanmayan başvurular işlemden kaldırılır.",
      k: "1004 resmi not s. 16-19"
    },
    // --- Satış Tebliği (5–8. günler) ---
    {
      s: "**Borsada satış** yöntemiyle yapılan halka arzlarda satış süresi ile ilgili hangisi doğrudur?",
      c: ["Talepsiz satışta 2, talep toplamalıda 2–3 iş günüdür", "Her durumda en az 10 iş günüdür ve Kurulca uzatılabilir", "Talep toplamalı satışta en az 5, en fazla 20 iş günüdür", "Satış süresi, yöntemden bağımsız olarak yalnızca 1 iş günüdür", "Satış süresini Borsa her halka arz için serbestçe ve sınırsız belirler"],
      d: 0,
      a: "Borsada satışta talep toplanmaksızın satış **2 iş günü**, talep toplamalı satış **2–3 iş günü** sürer. Diğer halka arzlarda süre 2–20 iş günüdür.",
      k: "1004 resmi not s. 26-30"
    },
    {
      s: "Halka arzda **çalışanlara** ayrılan tahsisat grubu ile ilgili hangisi doğrudur?",
      c: ["Çalışanlar kurumsal yatırımcı grubuna dahil edilir", "Çalışanlar grubunda dağıtım ihraççının yönetim kurulunca serbestçe yapılır", "Çalışanlara her zaman halka arz fiyatından %50 indirimli satış yapılır", "Çalışanlara yapılan dağıtım ayrıca Kurul onayına tabidir", "Çalışanlar grubu bireysel yatırımcılarla aynı dağıtım ilkelerine tabidir"],
      d: 4,
      a: "Çalışanlar grubu, dağıtımda **bireysel yatırımcılarla aynı ilkelere** tabidir. Konsorsiyumda talep konsolidasyonundan **konsorsiyum lideri** sorumludur.",
      k: "1004 resmi not s. 30-33"
    },
    {
      s: "İzahnamede halka arzda içsel bilgiye ulaşabilecek kişiler listesinde yer alanlar ve yakınları ilk halka arzda hangi gruptan talepte bulunabilir?",
      c: ["Yalnızca kurumsal yatırımcı grubundan", "Yalnızca yurt dışı kurumsal yatırımcı grubundan", "Hiçbir gruptan talepte bulunamazlar", "Her gruptan serbestçe", "Yalnızca yurt içi bireysel yatırımcı grubundan"],
      d: 4,
      a: "Bu kişiler ve yakınları yalnızca **yurt içi bireysel yatırımcı** grubundan talepte bulunabilir.",
      k: "1004 resmi not s. 34"
    },
    // --- Varlık finansmanı (9–12. günler) ---
    {
      s: "Menkul kıymetleştirmenin **ABD modelinde** kullanılan araçlar ve risklerin dağılımı ile ilgili hangisi doğrudur?",
      c: ["İTMK ve VTMK kullanılır; riskler ihraççıda kalır", "Bilanço içi bir modeldir; kredi riski ihraççının bilançosunda izlenir", "İDMK ve VDMK kullanılır; bilanço dışıdır ve riskler yatırımcıya geçer", "Yalnızca kamu bankaları ihraç yapabilir", "Varlıklar devredilmez, yalnızca teminat gösterilir"],
      d: 2,
      a: "ABD modeli **bilanço dışıdır**; **İDMK ve VDMK** kullanılır ve riskler yatırımcıya geçer. Avrupa modeli ise bilanço içidir (İTMK, VTMK).",
      k: "1004 resmi not s. 38-44"
    },
    {
      s: "VFF veya KFF malvarlığının haczedilemeyeceği ve teminat gösterilemeyeceği kuralının **istisnası** hangisidir?",
      c: ["Kurucunun vergi ve sosyal güvenlik borçlarının tahsili", "Kaynak kuruluşun iflası veya tasfiyesi hâlinde alacaklıları", "Hizmet sağlayıcının bankalardan kullandığı kredi borçları", "İçtüzükte hüküm varsa kredi ve türev işlemleri", "Fon kurulu üyelerinin şahsi borçları ve icra takipleri"],
      d: 3,
      a: "Fon malvarlığı ayrıdır; ancak **içtüzükte hüküm varsa** fonun **kredi ve türev işlemleri** için teminat gösterilebilir.",
      k: "1004 resmi not s. 44-49"
    },
    {
      s: "VDMK ihraç tavanının kaynak kuruluşun aktif toplamının **iki katı** ile sınırlandırılması kuralı hangi kaynak kuruluş için uygulanmaz?",
      c: ["Bankalar", "Finansman şirketleri", "Finansal kiralama şirketleri", "Varlık yönetim şirketleri", "İpotek finansmanı kuruluşları"],
      d: 4,
      a: "İhraç tavanı kaynak kuruluşun aktif toplamının **2 katı** ile sınırlıdır; **İFK**'lar için bu sınır uygulanmaz.",
      k: "1004 resmi not s. 44-49"
    },
    {
      s: "Türev araç işlemlerine taraf olan KFF'lerde risk yönetiminden sorumlu birimin personeli hangi lisanslara sahip olmalıdır?",
      c: ["Düzey 1 ve Kurumsal Yönetim", "Düzey 2 ve Değerleme Uzmanlığı", "Herhangi bir lisans aranmaz", "Yalnızca Türev Araçlar", "Düzey 3 ve Türev Araçlar"],
      d: 4,
      a: "Türev işlem yapan KFF'de risk yönetimi **Düzey 3 ve Türev Araçlar** lisanslı ayrı birimde yürütülür.",
      k: "1004 resmi not s. 49-54"
    },
    {
      s: "VFF ve KFF'nin fon varlıklarına ilişkin kayıtları ne kadar süre saklanmalıdır?",
      c: ["İhraç tarihinden itibaren 2 yıl", "En az 20 yıl", "Yalnızca fonun faaliyeti süresince", "Fon sona erdikten sonra 1 yıl", "En az 5 yıl ve itfaya kadar"],
      d: 4,
      a: "Fon varlıklarına ilişkin kayıtlar **en az 5 yıl ve itfaya kadar** saklanır.",
      k: "1004 resmi not s. 54-59"
    },
    // --- TMK (13–14. günler) ---
    {
      s: "TMK teminat defterine kaydedilen **türev araç** sözleşmelerinin karşı tarafı ile ilgili hangisi doğrudur?",
      c: ["İflas dahil hiçbir durumda tek taraflı fesih yapamaz", "İhraççı temerrüde düşerse sözleşmeyi bildirim yapmadan derhal feshedebilir", "Her takvim yılı sonunda sözleşmeyi Kurul onayıyla yenilemek zorundadır", "Aynı ihraçta teminat sorumlusu olarak da görev yapabilir", "Karşı tarafın kredi derecelendirme notuna sahip olması aranmaz"],
      d: 0,
      a: "Türevler faiz ve kur riskinden korunma içindir; karşı taraf **ihraççının iflası dahil** tek taraflı **fesih yapamaz**.",
      k: "1004 resmi not s. 59-65"
    },
    {
      s: "TMK ihraçlarında teminat varlıkların **nakit yönetimi** kimlere devredilebilir?",
      c: ["Yalnızca MKK'ya", "Nakit yönetimi devredilemez", "Yalnızca teminat sorumlusuna", "Portföy yönetim şirketlerine veya sigorta şirketlerine", "Bankalara veya ipotek finansmanı kuruluşlarına"],
      d: 4,
      a: "Nakit yönetimi **banka veya İFK** niteliğindeki nakit yöneticisine devredilebilir; devir ihraççının **sorumluluğunu kaldırmaz**.",
      k: "1004 resmi not s. 65-73"
    },
    {
      s: "TMK'da **teminat sorumlusunun** raporlarının hazırlanma sıklığı ile ilgili hangisi doğrudur?",
      c: ["Her durumda yılda bir kez, yıl sonunu izleyen 3 ay içinde", "Halka arzda 3 ayda, diğerlerinde 6 ayda bir; 20 iş günü içinde", "Her durumda ayda bir kez, ay sonunu izleyen 5 iş günü içinde", "Yalnızca teminat uyum ilkelerine aykırılık tespit edildiğinde", "Halka arzda altı ayda bir, diğer ihraçlarda yılda bir kez"],
      d: 1,
      a: "Teminat sorumlusu raporu **halka arzda üç ayda**, diğer ihraçlarda **altı ayda** bir, dönem sonundan itibaren **20 iş günü** içinde verilir.",
      k: "1004 resmi not s. 65-73"
    },
    {
      s: "TMK'ya ilişkin ödemeler teminat varlıklardan karşılanamazsa TMK sahiplerinin hakkı hangisidir?",
      c: ["İhraççının diğer malvarlığına da başvurabilirler", "Yalnızca teminat sorumlusuna başvurabilirler", "Kalan alacakları düşer", "Yalnızca Yatırımcı Tazmin Merkezine başvurabilirler", "Alacakları Hazine garantisiyle ödenir"],
      d: 0,
      a: "TMK ihraççının **genel yükümlülüğüdür**; teminat yetmezse TMK sahipleri ihraççının **diğer malvarlığına** da başvurabilir.",
      k: "1004 resmi not s. 65-73"
    },
    // --- Faizsiz finans ve kira sertifikaları (15–18. günler) ---
    {
      s: "Tarafların **sermayelerini birleştirdiği** ve zararın sermaye oranında paylaşıldığı ortaklık sözleşmesi hangisidir?",
      c: ["Mudaraba", "Murabaha", "İcara", "Selem", "Muşaraka"],
      d: 4,
      a: "**Muşarakada** sermayeler birleşir ve zarar **sermaye oranında** paylaşılır. Mudarabada ise sermaye ile emek birleşir ve zarar sermayedarındır.",
      k: "1004 resmi not s. 74-80"
    },
    {
      s: "Faizsiz finansta **istisna** sözleşmesi neyi ifade eder?",
      c: ["Sipariş üzerine imal ettirme", "Peşin bedelle vadeli teslim", "Bir malın kiralanması", "Malın peşin alınıp vadeli satılması", "Sermaye ile emeğin birleşmesi"],
      d: 0,
      a: "**İstisna**, sipariş üzerine imal ettirme sözleşmesidir. Selem peşin bedelli vadeli teslim, icara kiralama, murabaha peşin alıp vadeli satıştır.",
      k: "1004 resmi not s. 74-80"
    },
    {
      s: "Sahipliğe dayalı kira sertifikasında varlık **gayrimenkul** ise ve kaynak kuruluş talep ederse geri alım hakkı ile ilgili ne yapılır?",
      c: ["Hak yalnızca izahnamede belirtilir", "Gayrimenkullerde geri alım hakkı tanınamaz", "Hak MKK'ya bildirilir", "Hak tapu siciline şerh edilir", "Hak noter onaylı sözleşmeyle Kurula sunulur"],
      d: 3,
      a: "Kaynak kuruluşun talebi hâlinde gayrimenkulde **geri alım hakkı tapuya şerh** edilir.",
      k: "1004 resmi not s. 80-85"
    },
    {
      s: "**Eser sözleşmesine dayalı** kira sertifikası ihracında VKŞ'nin sözleşmedeki konumu nedir?",
      c: ["Yüklenici", "Kiracı", "Kefil", "İş sahibi", "Alt yüklenici"],
      d: 3,
      a: "Eser sözleşmesine dayalı ihraçta VKŞ **iş sahibidir**. İhraç tutarı gerçeğe uygun değerin %90'ıyla sınırlıdır; peşin ödemede yükleniciden rehin veya teminat alınır.",
      k: "1004 resmi not s. 85-89"
    },
    {
      s: "VKŞ'lerde Kurul iznine tabi olan eşikler dışında kalan **pay devirleri** ile ilgili hangisi doğrudur?",
      c: ["Hiçbir bildirime tabi değildir", "Devirden önce Kurul onayı gerekir", "15 gün içinde Kurula bildirilir", "Yalnızca genel kurulda açıklanır", "Devir 1 yıl süreyle yasaktır"],
      d: 2,
      a: "%10, %20, %33 ve %50 eşikleri ile imtiyazlı pay devirleri Kurul iznine tabidir; **diğer devirler 15 gün** içinde Kurula bildirilir.",
      k: "1004 resmi not s. 89-93"
    },
    // --- Gayrimenkul sertifikaları (19–22. günler) ---
    {
      s: "Gayrimenkul sertifikası ihraçlarında görev alan **yapı denetim kuruluşu** ile ilgili hangisi doğrudur?",
      c: ["Ortaklarının tamamı mimar ve mühendis olan tüzel kişidir", "Bağımsız denetim kuruluşudur ve projede edim sorumlusu olarak görev yapar", "Projenin değerleme raporunu hazırlayan lisanslı değerleme kuruluşudur", "Yetkili kuruluş olarak sertifikaların satışına ve itfasına aracılık eder", "İhraççının ilişkili tarafı olmak ve inşaatı bizzat yürütmek zorundadır"],
      d: 0,
      a: "Yapı denetim kuruluşu, **ortaklarının tamamı mimar ve mühendis** olan ve münhasıran yapı denetimi yapan tüzel kişidir; fizibilite ve inşaat ilerleme raporlarını hazırlar.",
      k: "1004 resmi not s. 100"
    },
    {
      s: "Gayrimenkul projesinin öngörülenden **erken tamamlanması** hâlinde hangisi geçerlidir?",
      c: ["Erken tamamlanma dikkate alınmaz, izahnamedeki tarih esas alınır", "Sertifikalar otomatik olarak itfa edilir", "Yeni tarih Kurul onayıyla 6 ay sonra yürürlüğe girer", "Yeni tarih en az 15 gün önce açıklanırsa esas alınır", "Yatırımcılara cezai şart ödenir"],
      d: 3,
      a: "Erken tamamlanma **en az 15 gün önce** açıklanırsa **yeni tarih** esas alınır.",
      k: "1004 resmi not s. 99-104"
    },
    {
      s: "**Halka arz** yoluyla ihraç edilen gayrimenkul sertifikaları Borsa İstanbul'da hangi pazarda işlem görür?",
      c: ["Pay Piyasası Yıldız Pazar", "Pay Piyasası Ana Pazar", "Girişim Sermayesi Pazarı", "Yapılandırılmış Ürünler ve Fon Pazarı", "Borçlanma Araçları Piyasası Kesin Alım Satım Pazarı"],
      d: 3,
      a: "Halka arz edilenler **Yapılandırılmış Ürünler ve Fon Pazarında**, nitelikli yatırımcılara ihraç edilenler ise Girişim Sermayesi Pazarında işlem görür.",
      k: "1004 resmi not s. 101"
    },
    {
      s: "Gayrimenkul sertifikasında **asli edim** talepleri ihraççıya nasıl iletilir?",
      c: ["Yatırımcı tarafından doğrudan ihraççıya noter aracılığıyla", "Yetkili kuruluşlar vasıtasıyla MKS üzerinden", "KAP üzerinden özel durum açıklamasıyla", "Tapu müdürlüğü aracılığıyla", "Edim sorumlusu aracılığıyla yazılı olarak"],
      d: 1,
      a: "Asli edim talepleri **yetkili kuruluşlar** vasıtasıyla **MKS** üzerinden ihraççıya bildirilir; kullanım süresi borsada işlem başlangıcından önce başlayamaz.",
      k: "1004 resmi not s. 105"
    },
    {
      s: "Tali edim ifa süresi sonunda **satılamayan** bağımsız bölümlere karşılık gelen sertifikalar için yatırımcılara ödeme en geç ne zaman yapılır?",
      c: ["2 iş günü içinde", "5 iş günü içinde", "10 iş günü içinde", "30 gün içinde", "180 gün içinde"],
      d: 2,
      a: "Satılamayan bölümlerde vadeden önceki 3 ayın borsa ortalaması veya değerleme esas alınır; ödeme **10 iş günü** içinde yapılır.",
      k: "1004 resmi not s. 104-108"
    },
    {
      s: "Kamu payı **%51 ve üzerinde** olan ihraççıların gayrimenkul sertifikası ihraçlarında Kurul ücretine ilişkin hangi uygulama yapılmıştır?",
      c: ["2017'den itibaren 2 yıl sıfır uygulandı", "Kamu ihraççıları için ücret iki katına çıkarılmıştır", "Ücret, kamu payına bakılmaksızın binde 5 olarak sabitlenmiştir", "Ücret yalnızca TOKİ için süresiz olarak kaldırılmıştır", "Kamu ihraççılarında ücret hiçbir zaman indirilmemiştir"],
      d: 0,
      a: "Gayrimenkul sertifikasında ücret binde 2'dir (%50 indirimle binde 1). Kamu payı %51 ve üzerindeki ihraççılar için **2017'den itibaren 2 yıl** süreyle **sıfır** uygulanmıştır.",
      k: "1004 resmi not s. 108-114"
    },
    {
      s: "**Kentsel dönüşüm** amaçlı gayrimenkul sertifikası ihraçlarında aşağıdakilerden hangisi **aranır**?",
      c: ["Edim sorumlusu atanması ve güvence raporu hazırlanması", "Yatırımcılar lehine zorunlu cezai şart öngörülmesi", "İhraççıda tecrübe, özkaynak ve derecelendirme şartları", "Hak sahiplerine sertifika, yatırımcılarla eşit hak", "Bağımsız bölümler üzerine tapuya şerh verilmesi"],
      d: 3,
      a: "Kentsel dönüşüm modelinde hak sahiplerine sertifika verilir ve yatırımcılar hak sahipleriyle **eşit haklara** sahiptir. Edim sorumlusu, zorunlu cezai şart, ihraççı şartları ve tapu şerhi **aranmaz**.",
      k: "1004 resmi not s. 108-114"
    },
    // --- Varantlar ve sertifikalar (23–27. günler) ---
    {
      s: "Aşağıdakilerden hangisi varantların **dezavantajlarından** biridir?",
      c: ["Asimetrik getiri yapısı", "Kaldıraç etkisi", "Düşük komisyon maliyeti", "Zaman değeri kaybı", "Teminatsız işlem yapılabilmesi"],
      d: 3,
      a: "**Zaman değeri kaybı** bir dezavantajdır; sınırlı vade, dayanaktan farklı hareket ve aşırı kaldıraç da dezavantajlar arasındadır. Diğerleri avantajdır.",
      k: "1004 resmi not s. 122-128"
    },
    {
      s: "Varant fiyatını etkileyen duyarlılık katsayıları ile ölçtükleri değişken arasındaki eşleştirmelerden hangisi **doğrudur**?",
      c: ["Delta – dayanağın volatilitesi", "Vega – piyasa faiz oranı", "Teta – vadeye kalan süre", "Ro – dayanak varlığın fiyatı", "Gama – dayanak payın temettüsü"],
      d: 2,
      a: "**Teta** vadeye kalan süreye duyarlılığı ölçer. Delta dayanak fiyatına, gama deltanın değişimine, vega volatiliteye, ro faize duyarlılıktır.",
      k: "1004 resmi not s. 125"
    },
    {
      s: "VII-128.3 sayılı Tebliğ, hangi düzenlemelerin yerini almıştır?",
      c: ["Seri III No 36 ve No 37 Tebliğleri", "Seri I No 40 ve Seri I No 31 sayılı borçlanma aracı Tebliğleri", "Seri VI No 11 sayılı yatırım fonları Tebliği ve ilgili ilke kararları", "Seri V No 46 sayılı aracı kurumların kuruluş ve faaliyet Tebliği", "Herhangi bir düzenlemenin yerini almamış, bu alanda ilk kez çıkarılmıştır"],
      d: 0,
      a: "2013'te yürürlüğe giren VII-128.3, **Seri III No 36** (ortaklık varantı, uygulanmadı) ve **No 37** (aracı kuruluş varantı) Tebliğlerinin yerini aldı ve **sertifikaları** ekledi.",
      k: "1004 resmi not s. 127"
    },
    {
      s: "Yatırım kuruluşu varantlarının ve sertifikalarının **nominal değeri** en az ne kadar olmalıdır?",
      c: ["1 kuruş", "10 kuruş", "1 TL", "10 TL", "100 TL"],
      d: 0,
      a: "Nominal değer **bir kuruştan** aşağı olamaz. Borsada fiyat adımı da 1 kuruştur.",
      k: "1004 resmi not s. 131"
    },
    {
      s: "Yatırım kuruluşu varantlarının halka arzında **her tertip** için Kurula başvuru satıştan en az ne kadar önce yapılır?",
      c: ["1 iş günü", "2 iş günü", "3 iş günü", "4 iş günü", "5 iş günü"],
      d: 4,
      a: "Halka arzda her tertip için satıştan **en az 5 iş günü önce** Kurula başvurulur. İzahname birden fazla belgeden oluşur.",
      k: "1004 resmi not s. 128-134"
    },
    {
      s: "Yatırım kuruluşu varantlarında **piyasa yapıcı** ile ilgili hangisi doğrudur?",
      c: ["İhraççının kendi ihracında piyasa yapıcı olması her durumda yasaktır", "Piyasa yapıcının portföy aracılığı dahil herhangi bir faaliyet izni olması gerekmez", "İhraççı kendi ihracında da piyasa yapıcı olabilir", "Piyasa yapıcı yalnızca yurt dışında yerleşik bir yatırım kuruluşu olabilir", "Piyasa yapıcı, borsada kotasyon verme yükümlülüğü taşımaz"],
      d: 2,
      a: "Piyasa yapıcı **portföy aracılığı** izinli aracı kurum olmalı ve **yıllık özel amaçlı denetim raporu** sunmalıdır; ihraççı **kendi ihracında da** piyasa yapıcı olabilir.",
      k: "1004 resmi not s. 134-138"
    },
    {
      s: "Ortaklık varantı ihracı için ihraççının esas sözleşmesinde ve genel kurulunda hangi şart aranır?",
      c: ["Esas sözleşmede yetki ve genel kurul kararı", "Yalnızca yönetim kurulu kararı yeterlidir, genel kurul kararı aranmaz", "Kurulun onayı yeterlidir, esas sözleşmedeki hükümlere bakılmaz", "Yalnızca imtiyazlı pay sahiplerinin ayrı toplantıda onayı gerekir", "Herhangi bir organ kararı aranmaz, ihraççı serbestçe ihraç eder"],
      d: 0,
      a: "Ortaklık varantı için **esas sözleşmede yetki** ve **genel kurul kararı** gerekir; varant kendi payına yazılacaksa **kayıtlı sermaye** sistemi şarttır.",
      k: "1004 resmi not s. 134-138"
    },
    {
      s: "**İhraççının kendi portföyünde** bulunan ortaklık varantları ile ilgili hangisi doğrudur?",
      c: ["Vadede öncelikli olarak kullanılır", "Kullanılamaz", "Yalnızca nakdi uzlaşıyla kullanılabilir", "Kurul izniyle kullanılabilir", "Yatırımcılara bedelsiz dağıtılır"],
      d: 1,
      a: "İhraççının portföyündeki ortaklık varantları **kullanılamaz**.",
      k: "1004 resmi not s. 138-144"
    },
    {
      s: "Ortaklık varantının vadesi içinde, fiyatı kullanım fiyatının altına itecek **tedavülü artırıcı** işlemler hangi durumda yapılabilir?",
      c: ["Hiçbir durumda yapılamaz", "Yalnızca bedelsiz sermaye artırımında", "Varant sahiplerine nakdi uzlaşı imkânı verilirse", "Yalnızca Kurul talep ederse", "Varant sahiplerinin oy birliğiyle"],
      d: 2,
      a: "Tedavülü artırıcı işlemler kural olarak yasaktır; ancak varant sahiplerine **nakdi uzlaşı imkânı** verilirse yapılabilir. Giderler ihraççıya aittir.",
      k: "1004 resmi not s. 138-144"
    },
    // --- Yabancı araçlar (28–30. günler) ---
    {
      s: "Aşağıdaki işlemlerden hangisi VII-128.4 sayılı Tebliğin **kapsamındadır**?",
      c: ["Çalışanlara yönelik pay planları", "Türkiye'de yerleşik kişinin kendi talebiyle yurt dışından araç alımı", "Yabancı borsa yatırım fonlarına ilişkin alım satım işlemleri", "Hazinenin yurt dışı ihraçları", "TCMB'nin döviz işlemleri"],
      d: 2,
      a: "Kurul Kararına göre **yabancı borsa yatırım fonlarına** ilişkin alım satım işlemleri Tebliğ **kapsamındadır**. Kendi talebiyle yurt dışından alım ve çalışan pay planları kapsam dışıdır.",
      k: "1004 resmi not s. 151"
    },
    {
      s: "Yabancı **devletlerin** ihraç ettiği sermaye piyasası araçlarının Türkiye'de satışında Kurul ücreti ne kadardır?",
      c: ["Binde bir", "On binde beş", "Binde iki", "Sıfır", "Yüzde bir"],
      d: 3,
      a: "Yabancı devlet araçlarında ve Türkiye'nin üye olduğu uluslararası kuruluşların ortaklık hakkı vermeyen araçlarında **Kurul ücreti sıfırdır**.",
      k: "1004 resmi not s. 145-152"
    },
    {
      s: "Yabancı sermaye piyasası araçlarında **temsilcilik sözleşmesinin** süresi ile ilgili hangisi doğrudur?",
      c: ["En fazla 1 yıl olabilir", "Varsa en az aracın vadesi kadar olmalıdır", "Her durumda süresiz yapılmalıdır", "En fazla 3 yıl olup her yıl yenilenir", "Süre Kurulca her ihraç için ayrıca belirlenir"],
      d: 1,
      a: "Temsilcilik sözleşmesinin süresi, varsa **en az aracın vadesi** kadar olmalıdır. Temsilcinin iflası gibi hâllerde yeni temsilci **derhal** atanır.",
      k: "1004 resmi not s. 152-159"
    },
    {
      s: "Yabancı yatırım fonlarının varlıklarının saklanmasıyla ilgili hangisi doğrudur?",
      c: ["Varlıklar Türkiye'de Takasbank nezdinde saklanmak zorundadır", "Varlıklar fonun Türkiye'deki temsilcisi olan bankada saklanır", "Yurt dışında yetkili en az bir saklama kuruluşunda saklanır", "Fon varlıklarının herhangi bir kuruluşta saklanması zorunlu değildir", "Varlıklar MKK nezdinde temsilcinin alt hesabında saklanır"],
      d: 2,
      a: "Fon saklama kuruluşu, **yurt dışında** ilgili otoritece yetkilendirilmiş kuruluştur; fon varlıkları **en az bir** fon saklama kuruluşunda saklanır.",
      k: "1004 resmi not s. 161"
    },
    // --- PDMK (31–32. günler) ---
    {
      s: "Proje finansman fonu kurucusunun taşıması gereken şartlardan hangisi doğrudur?",
      c: ["Son beş yılda Kuruldan hiçbir idari para cezası almamış olmak", "Son 3 yılda 1 ay+ durdurulmamış ve muaccel vergi borcu yok", "Son yıllık finansal tablolarına göre en az 1 milyar TL özkaynağa sahip olmak", "Yalnızca sermayesinin çoğunluğu kamuya ait bir kamu bankası olmak", "Paylarının Borsa İstanbul'da en az iki yıldır işlem görüyor olması"],
      d: 1,
      a: "Kurucu banka veya geniş yetkili aracı kurum olmalı; **son üç yıl** içinde faaliyeti **bir ay veya daha fazla** durdurulmamış veya sınırlandırılmamış ve **muaccel vergi borcu** bulunmamalıdır.",
      k: "1004 resmi not s. 166"
    },
    {
      s: "Mahalli idareler, KİT'ler veya YİD ve KÖİ modelleri kapsamındaki şirketlerin kaynak kuruluş olduğu ve gelirleri idarelerce **garanti edilen** projelerde PDMK ihraç tavanı en fazla ne olabilir?",
      c: ["Maliyetin %50'si", "Maliyetin %60'ı", "Maliyetin %75'i", "Maliyetin %80'i", "Maliyetin %100'ü"],
      d: 3,
      a: "Bu projelerde tavan fizibilite etüdündeki maliyetin **%80'ine** kadar belirlenebilir. Genel kural **%75**'tir.",
      k: "1004 resmi not s. 168"
    },
    {
      s: "**Süresiz** kurulan bir proje finansman fonu nasıl sona erer?",
      c: ["Kurucunun yönetim kurulu kararıyla, Kurula bilgi vermeden kendiliğinden", "İlk PDMK ihracının tamamen itfa edilmesiyle kendiliğinden", "Fon kurulunun başvurusu ve Kurulun kabulüyle", "Kurulun re'sen vereceği kararla, herhangi bir başvuru aranmaksızın", "Süresiz kurulan fon hiçbir şekilde ve hiçbir koşulda sona ermez"],
      d: 2,
      a: "Süresiz fon, PDMK sahiplerine tüm yükümlülükler ifa edildikten sonra **fon kurulunun** itfayı belgeleyerek başvurması ve **Kurulun kabulüyle** sona erer. Süreli fon sürenin dolmasıyla sona erer.",
      k: "1004 resmi not s. 180"
    },
    // --- Teminatlı ihraç (33–34. günler) ---
    {
      s: "Teminatlı ihraçta teminat varlıkların teminat yöneticisine **devredildiği** veya üzerinde sınırlı ayni hak kurulduğu bilgisi sicilde nereye kaydedilir?",
      c: ["Şerhler hanesine", "Beyanlar hanesine", "Rehinler hanesine", "Mülkiyet hanesine", "Herhangi bir sicil kaydı yapılmaz"],
      d: 1,
      a: "Devir veya sınırlı ayni hak tesisi ilgili sicilde **beyanlar hanesine** kaydedilir.",
      k: "1004 resmi not s. 185"
    },
    {
      s: "Teminat varlıkların sözleşmeye uygun saklanmadığını öğrenen ihraççının **fesih** sürecindeki sürelerin doğru sıralaması hangisidir?",
      c: ["Bildirim 5 iş günü, düzeltme 3 iş günü, fesih 5 iş günü", "Bildirim 3 iş günü, düzeltme 5 iş günü, fesih 3 iş günü", "Bildirim 1 iş günü, düzeltme 10 iş günü, fesih 1 iş günü", "Bildirim 10 iş günü, düzeltme 15 iş günü, fesih 30 gün", "Bildirim 3 iş günü, düzeltme 30 gün, fesih 5 iş günü"],
      d: 1,
      a: "İhraççı öğrendikten sonra **3 iş günü** içinde bildirir; teminat yöneticisi **5 iş günü** içinde uygunluğu sağlamazsa ihraççı **3 iş günü** içinde sözleşmeyi fesheder.",
      k: "1004 resmi not s. 187"
    },
    {
      s: "Temerrüt hâlinde teminat varlığı **konvertibl döviz** ise bu tutar yatırımcılara nasıl ödenir?",
      c: ["Döviz olarak, 5 iş günü içinde", "En geç izleyen iş günü TL'ye çevrilerek", "35 gün içinde değerleme yapılarak", "Vadesinde tahsil edildikçe", "Kurul onayından sonra 10 iş günü içinde"],
      d: 1,
      a: "Konvertibl döviz, en geç **izleyen iş günü** TL'ye çevrilerek yatırımcılara ödenir.",
      k: "1004 resmi not s. 188"
    },
    {
      s: "Teminat yöneticisinin tuttuğu **teminat defteri** ile ilgili hangisi doğrudur?",
      c: ["Teminat yöneticisinin tüm ihraçları için tek bir ortak defter tutulur", "Her ihraç için ayrı tutulur, elektronik olabilir", "Defter yalnızca kâğıt ortamında ve noter onaylı olarak tutulabilir", "Teminat defterini teminat yöneticisi değil ihraççı tutar", "Teminat defteri yalnızca temerrüt hâlinin ortaya çıkmasıyla açılır"],
      d: 1,
      a: "Teminat defterini **teminat yöneticisi** tutar; **her ihraç için ayrı** defter tutulur ve defter **elektronik** ortamda tutulabilir.",
      k: "1004 resmi not s. 193"
    }
  ]
});
