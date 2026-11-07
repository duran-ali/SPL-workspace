// 1005 Yatırım Kuruluşları: genel deneme soru havuzu (25 soru).
// Bu sorular yalnızca genel denemede çıkar; günlük testlerde ve ders sonunda sorulmayan bilgileri ölçer.
SPL.deneme("1005", {
  sorular: [
    // --- Yatırım hizmetleri ---
    {
      s: "Aracı kurumların yetki sınıflandırmasıyla ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Yalnızca emir iletimine aracılık ve yatırım danışmanlığı faaliyetlerini yürütecek aracı kurum dar yetkili aracı kurumdur.\nII. Sınırlı saklama hizmeti yürütecek aracı kurum geniş yetkili aracı kurumdur.\nIII. 2026 yılı için dar yetkili aracı kurumların sahip olması gereken asgari özsermaye 45.000.000 TL'dir.",
      c: ["Yalnız I", "I ve III", "I ve II", "II ve III", "I, II ve III"],
      d: 1,
      a: "I ve III doğrudur. Emir iletimine aracılık ve yatırım danışmanlığı **dar yetki**; işlem aracılığı, en iyi gayret aracılığı, **sınırlı saklama** ve portföy yöneticiliği **kısmi yetki**; portföy aracılığı, genel saklama ve aracılık yüklenimi **geniş yetki** gerektirir. II yanlıştır. 2026 asgari özsermayeleri: dar yetkili **45 milyon**, kısmi yetkili 190 milyon, geniş yetkili 380 milyon TL.",
      k: "1005 resmi not s. 2"
    },
    {
      s: "Tezgahüstü türev araç işlemlerinde aracı kurumun **teminatlandırma politikasıyla** ilgili hangisi doğrudur?",
      c: ["Teminat durumları genel müdüre en az haftalık raporlanır; politika değişikliklerine yönetim kurulu karar verir.", "Teminatlandırma politikası genel müdürün onayıyla değiştirilir; yönetim kuruluna bilgi verilmesi yeterlidir.", "Müşterilerin teminat durumları yılda bir kez, yıl sonu itibarıyla yönetim kuruluna raporlanır.", "Teminatlandırma politikası Kurul tarafından her aracı kurum için ayrı ayrı belirlenir.", "Teminatlandırma süreci, bağımsızlığı korunması için iç kontrol prosedürlerinin dışında tutulur."],
      d: 0,
      a: "Müşterilerin teminat durumları **genel müdüre en az haftalık** olarak raporlanır. Teminatlandırma politikasının oluşturulması ve yürütülmesi aracı kurumun **iç kontrol prosedürlerinde** yer alır; politikadaki değişiklik önerilerini **yönetim kurulu** karara bağlar.",
      k: "1005 resmi not s. 12"
    },
    {
      s: "Yatırım kuruluşlarının yaptığı **uygunluk ve yerindelik testleriyle** ilgili hangisi doğrudur?",
      c: ["Testler ve bunlara ilişkin uyarılar, şubelerden veya çağrı merkezinin kayıtlı telefonlarından yapılamaz.", "Testler çağrı merkezi üzerinden, görüşmenin ses kaydı alınarak yapılabilir.", "Test sonuçları müşteriye bildirilmez; sonuçlar kurumun kayıtlarında saklanır.", "Yerindelik testi alım satıma aracılık faaliyetinde, işlem öncesinde yapılır.", "Testler şubede, ıslak imzalı kâğıt formla yapılmalıdır; elektronik ortam kullanılamaz."],
      d: 0,
      a: "Testlerin yazılı veya elektronik ortamda yapılabileceğine karar verilmiştir. Ancak Rehber'e göre testler ile bunlara ilişkin uyarı ve bildirimler **şubeler veya çağrı merkezi üzerinden kayıt tutulan telefonlarla yapılamaz**. Yerindelik testi yatırım danışmanlığı ve portföy yöneticiliğinde yapılır.",
      k: "1005 resmi not s. 24"
    },
    {
      s: "Bireysel portföy yöneticiliği çerçeve sözleşmesinde adı geçen **portföy yöneticisi** yetkili kuruluştan ayrılmış veya değiştirilmiştir. Hangisi doğrudur?",
      c: ["Müşteriye derhal bildirilir; müşteri yeni yöneticiyi uygun görmezse sözleşmeyi tek taraflı feshedebilir.", "Müşteriye bildirim yapılması gerekmez; sözleşme yeni yöneticiyle kendiliğinden devam eder.", "Değişiklik bir sonraki aylık hesap ekstresiyle müşteriye bildirilir.", "Müşteri, yönetici değişikliği nedeniyle sözleşmeyi ancak Kurul onayıyla feshedebilir.", "Yeni yönetici atanana kadar müşteri portföyü Takasbank tarafından yönetilir."],
      d: 0,
      a: "Çerçeve sözleşmede belirtilen portföy yöneticisi ayrılır veya değişirse durum müşteriye **en seri haberleşme aracıyla derhal** bildirilir. Müşteri değişen yöneticiyi uygun görmezse sözleşmeyi **tek taraflı feshedebilir**.",
      k: "1005 resmi not s. 23"
    },
    {
      s: "Bireysel portföy yöneticiliği ve yatırım danışmanlığı faaliyetlerinin örgütlenmesiyle ilgili hangisi doğrudur?",
      c: ["Yöneticiler ve danışmanlar müşteri temsilcisi olarak da çalışabilir; araştırma birimi ayrı kurulur.", "Yatırım danışmanlarının müşteri temsilcisi olarak çalışması çıkar çatışması nedeniyle yasaktır.", "Araştırma birimi ile portföy yönetimi birimi tek bir birim olarak örgütlenmek zorundadır.", "Bireysel portföy yöneticileri yalnızca kurumsal ve profesyonel müşterilere hizmet verebilir.", "Yatırım danışmanları aynı zamanda araştırma biriminin yöneticisi olmak zorundadır."],
      d: 0,
      a: "Rehber'e göre **araştırma birimi**, portföy yöneticiliği ve yatırım danışmanlığını yürüten birimden **ayrı** kurulur. Buna karşılık bireysel portföy yöneticileri ve yatırım danışmanları, çıkar çatışması yaratmayacağı ve nitelikli hizmeti destekleyeceği için **müşteri temsilcisi olarak da görev yapabilir**.",
      k: "1005 resmi not s. 25–26"
    },
    {
      s: "Saklama hizmeti veren kuruluşun müşterilerini bilgilendirme yükümlülüğüyle ilgili hangisi doğrudur?",
      c: ["Müşterileri asgari ayda bir bilgilendirir ve internet şubesinden hesaplara anlık erişim sağlar.", "Müşterileri yılda bir defa, hesap dönemi sonunda bilgilendirmesi yeterlidir.", "Bilgilendirme, müşterinin yazılı talebi üzerine yapılır.", "Güvenlik nedeniyle hesap bilgilerine internet üzerinden erişim sağlanması yasaktır.", "Bilgilendirme yükümlülüğü yalnızca profesyonel müşteriler için geçerlidir."],
      d: 0,
      a: "Saklama hizmeti veren kuruluş, belge-kayıt düzenlemelerine göre müşterilerini **asgari ayda bir** bilgilendirir ve **internet şubesi üzerinden hesap bilgilerine anlık erişim** sağlar.",
      k: "1005 resmi not s. 37"
    },
    {
      s: "Saklama hizmetinde yapılan mutabakatta çıkan uyumsuzluk, yatırım kuruluşunun **mali durumu üzerinde önemli etkiye** yol açacak niteliktedir. Bu durumda ne yapılır?",
      c: ["3 iş günü beklenmeden, tespitin ardından yönetim kurulu ve Kurul derhal bilgilendirilir.", "Uyumsuzluğun giderilmesi için 3 iş günü beklenir; giderilemezse yönetim kurulu bilgilendirilir.", "Uyumsuzluk bir sonraki yıllık müşteri mutabakatında raporlanır.", "İlgili müşteriye bildirim yapılır; Kurula bilgi verilmesi gerekmez.", "Uyumsuzluk 30 gün içinde giderilmezse durum Takasbank'a bildirilir."],
      d: 0,
      a: "Normalde uyumsuzluk tüm önlemlere rağmen **3 iş günü** içinde giderilemezse en üst düzey iç denetim/müfettiş personeli yönetim kurulunu (bankada iç denetim komitesini) ve Kurulu yazılı olarak bilgilendirir. Uyumsuzluk mali durumu **önemli ölçüde etkileyecekse** 3 iş günü **beklenmeden derhal** yönetim kurulu ve Kurul bilgilendirilir.",
      k: "1005 resmi not s. 35"
    },
    // --- Kuruluş, personel, örgütlenme ---
    {
      s: "Yatırım Kuruluşları Tebliği'ne göre, bir aracı kurum kurucu ortağı hakkındaki **iflas kararı kaldırılmıştır**. Bu iflas nedeniyle aranan şart, ilgili kararın kesinleşmesinden itibaren ne kadar süre geçince dikkate alınmaz?",
      c: ["2 yıl", "3 yıl", "5 yıl", "7 yıl", "10 yıl"],
      d: 4,
      a: "Kurucuların müflis olmaması, konkordato ilan etmemiş olması ve faaliyet izni iptal edilen kuruluşlarda sorumluluğu bulunmaması aranır. İflasın kaldırılmasına, kapatılmasına veya konkordatonun tasdikine ilişkin kararın ve sorumluluk kararının kesinleşmesinden itibaren **10 yıl** geçtikten sonra bu şartlar dikkate alınmaz.",
      k: "1005 resmi not s. 44"
    },
    {
      s: "i-SPK.39.4 sayılı İlke Kararı'na göre kurulacak aracı kurumlar, kuruluş izni kararını takip eden **ne kadar süre** boyunca asgari kuruluş özsermayesinin altına düşecek şekilde sermaye çıkışına yol açan işlem yapamaz?",
      c: ["6 ay", "1 yıl", "2 yıl", "3 yıl", "5 yıl"],
      d: 2,
      a: "Bu aracı kurumlar, kuruluş izni kararından itibaren **2 yıl** süreyle, mevzuattan doğan mücbir haller dışında, asgari kuruluş özsermayesinin altına düşecek şekilde sermaye çıkışı yapamaz. Asgari kuruluş özsermayesi 2026 başvuruları için 440.000.000 TL'dir.",
      k: "1005 resmi not s. 44"
    },
    {
      s: "Yatırım Kuruluşları Tebliği'ne göre aracı kurumun organizasyon yapısının içermesi gereken **iç denetim sistemi** hangi unsurlardan oluşur?",
      c: ["İç kontrol, teftiş ve risk yönetim sistemleri", "Bağımsız dış denetim kuruluşunun yıllık denetimi", "Muhasebe, hazine ve satış birimleri", "Uyum birimi ile hukuk müşavirliği", "Yönetim kurulu ve genel kurul"],
      d: 0,
      a: "Faaliyet izni için organizasyon yapısının, Kurulun iç denetim düzenlemelerine uygun **iç kontrol, teftiş ve risk yönetim** sistemlerinden oluşan iç denetim sistemini içermesi gerekir. Organizasyon yapısı ayrıca çıkar çatışmalarını önleyecek şekilde kurulmalıdır.",
      k: "1005 resmi not s. 47"
    },
    {
      s: "Yatırım Kuruluşları Tebliği'ne göre aşağıdakilerden hangisi **yönetici** kapsamında sayılır?",
      c: ["İrtibat bürosu sorumlusu", "Müşteri temsilcisi", "Takas ve operasyon personeli", "Muhasebe personeli", "Çağrı merkezi personeli"],
      d: 0,
      a: "Yönetici; ihtisas personelinin bağlı olduğu tüm kademelerdeki yöneticiler, yönetici ile ihtisas personeli arasındaki kademelerde görev yapan personel (müdür yardımcısı, yönetmen vb.), **şube müdürü ve irtibat bürosu sorumlusundan** oluşur. Diğer şıklar ihtisas veya destek personelidir.",
      k: "1005 resmi not s. 51"
    },
    {
      s: "Bir aracı kurumda **müfettiş/teftiş birimi yöneticisi** olarak (bankalar hariç) görev yapacak kişide hangi lisans aranır?",
      c: ["Sermaye Piyasası Faaliyetleri Düzey 3 Lisansı", "Sermaye Piyasası Faaliyetleri Düzey 1 Lisansı", "Türev Araçlar Lisansı", "Kurumsal Yönetim Derecelendirme Uzmanlığı Lisansı", "Gayrimenkul Değerleme Uzmanlığı Lisansı"],
      d: 0,
      a: "Personel tablosuna göre müfettiş/teftiş birimi yöneticisi için (bankalar hariç) **Sermaye Piyasası Faaliyetleri Düzey 3 Lisansı** aranır; ayrıca sermaye piyasaları, muhasebe, vergi, denetim gibi alanlarda deneyim istenir. Yatırım danışmanında da Düzey 3 lisansı ve en az 3 yıl deneyim aranır.",
      k: "1005 resmi not s. 52–53"
    },
    // --- Müşteri ilişkileri ---
    {
      s: "Profesyonel müşteri sayılma şartlarını taşıyan bir müşteri, yatırım kuruluşuna **profesyonel müşteri olarak dikkate alınmak istemediğini** yazılı olarak bildirmiştir. Hangisi doğrudur?",
      c: ["Yatırım kuruluşu bu talebi dikkate almak zorundadır.", "Şartları taşıyan müşteri her durumda profesyonel müşteri sayılır.", "Talep ancak Kurul onayıyla dikkate alınabilir.", "Talep yalnızca kaldıraçlı işlemler için dikkate alınır.", "Müşteri bu talebi ancak bir yıl sonra yapabilir."],
      d: 0,
      a: "Şartları taşısa bile profesyonel müşteri sayılmak istemediğini **yazılı olarak** bildiren müşterinin talebini yatırım kuruluşu **dikkate almak zorundadır**. Kuruluş ayrıca hizmet sunmadan önce profesyonel müşterilerini, yararlanamayacakları mevzuat hükümleri hakkında **yazılı olarak bilgilendirir**.",
      k: "1005 resmi not s. 59"
    },
    {
      s: "Talebe dayalı olarak profesyonel müşteri olmak isteyen bir genel müşterinin sağlayabileceği şartlardan biri olan **işlem sıklığı** kriteri hangisidir?",
      c: ["Son 1 yılda her 3 aylık dönemde en az 500.000 TL hacimli ve en az 10 adet işlem", "Son 1 yılda toplam en az 10 adet işlem; işlem hacmi ve dönemsel dağılım şartı aranmaksızın", "Son 3 yılda her ay en az 100.000 TL hacimli en az 5 işlem", "Son 6 ayda tek seferde en az 1 milyon TL hacimli bir işlem", "Son 2 yılda her 3 aylık dönemde en az 50 adet işlem"],
      d: 0,
      a: "Talebe dayalı profesyonel müşteri için sayılan şartlardan **en az ikisinin** sağlanması gerekir. İşlem sıklığı şartı: **son 1 yıl içinde, her 3 aylık dönemde en az 500.000 TL hacminde ve en az 10 adet işlem**. Diğer şartlar finansal varlık büyüklüğü ve mesleki deneyim/lisans ile ilgilidir.",
      k: "1005 resmi not s. 60"
    },
    {
      s: "Kaldıraçlı işlemlere ilişkin yayın, ilan ve reklamlarla ilgili olarak aşağıdakilerden hangisinin kullanılması **yasaktır?**",
      c: ["Belirli bir kur veya parite hedefi", "Kaldıraçlı işlemlerin yüksek risk taşıdığına ilişkin uyarı", "Aracı kurumun ticaret unvanı", "Kurul'dan alınan faaliyet izninin bilgisi", "Kârda ve zararda olan müşteri hesaplarının oransal dağılımı"],
      d: 0,
      a: "Kaldıraçlı işlem reklamlarında **belirli kur veya parite hedeflerine** yer verilemez. Ayrıca her durumda kazanç sağlanacağı, işlemlerin garantili olduğu, risksiz olduğu veya kısa bir eğitimle öğrenilebileceği, belirli meslek gruplarına ek gelir vaat edildiği ifadeler de yasaktır. Kârda/zararda olan hesapların oransal dağılımına yer verilmesi ise **zorunludur**.",
      k: "1005 resmi not s. 67–68"
    },
    // --- Merkez dışı örgütler ---
    {
      s: "Aracı kurumların şube ve irtibat bürolarının yaptığı iş ve işlemlerden doğan **hukuki ve cezai sorumluluk** kime aittir?",
      c: ["Aracı kuruma", "Şube müdürü veya irtibat bürosu sorumlusuna", "Türkiye Sermaye Piyasaları Birliği'ne", "Yatırımcı Tazmin Merkezi'ne", "Şubenin bulunduğu yerin ticaret siciline"],
      d: 0,
      a: "Yatırım Kuruluşları Tebliği md.42'ye göre şube ve irtibat bürolarının iş ve işlemlerinden kaynaklanan her türlü **hukuki ve cezai sorumluluk aracı kuruma** aittir. Şubeler aracı kurumun yetkili olduğu tüm faaliyetleri yürütebilir; irtibat büroları ise yalnızca tanıtım yapar ve müşteri emirlerini iletir.",
      k: "1005 resmi not s. 68–69"
    },
    {
      s: "Aracı kurumların **şube veya irtibat bürosu açma** izniyle ilgili hangisi doğrudur?",
      c: ["Noter onaylı YK kararı ve fizibilite etüdüyle Kurula başvurulur; Kurul 30 iş günü içinde karar verir.", "Şube açmak için Kurul izni gerekmez; Türkiye Sermaye Piyasaları Birliği'ne bildirim yeterlidir.", "Başvuru Borsa İstanbul'a yapılır ve borsa başvuruyu 10 iş günü içinde sonuçlandırır.", "İrtibat bürosu sorumlusunun en az lisans mezunu ve 5 yıl deneyimli olması gerekir.", "Şube nakli için izin şartları aranmaz; yeni adresin Kurula bildirilmesi yeterlidir."],
      d: 0,
      a: "Aracı kurum **noter onaylı yönetim kurulu kararı, fizibilite etüdü** ve şartları sağladığını gösteren belgelerle Kurula başvurur; Kurul başvuruyu **30 iş günü** içinde sonuçlandırır. İrtibat bürosu sorumlusunun en az **2 yıllık ön lisans** mezunu olması yeterlidir. Nakilde de açılış şartları aranır.",
      k: "1005 resmi not s. 69"
    },
    {
      s: "Yurt dışında faaliyet gösteren bir aracı kuruma veya personeline, ilgili ülkenin yetkili otoritesince **idari, hukuki ya da cezai yaptırım** uygulanmıştır. Aracı kurum ne yapmalıdır?",
      c: ["Durumu öğrenir öğrenmez Kurula yazılı olarak bilgi vermelidir.", "Durumu yıllık faaliyet raporunda açıklaması yeterlidir.", "Durumu ilgili ülke otoritesine bildirmesi yeterlidir.", "30 gün içinde Birliğe bildirmelidir.", "Bildirim yapması gerekmez; yaptırım yurt dışında uygulandığı için Kurulu ilgilendirmez."],
      d: 0,
      a: "Yatırım Kuruluşları Tebliği md.46/3'e göre yurt dışındaki faaliyetler sırasında aracı kuruma veya personeline yaptırım uygulanırsa durum **öğrenilir öğrenilmez Kurula yazılı olarak** bildirilir. Yurt dışında merkez dışı örgüt açmak da Kurul iznine tabidir.",
      k: "1005 resmi not s. 69"
    },
    {
      s: "Emir iletimine aracılık eden **yurt dışında yerleşik bir yetkili kuruluş** ile Türkiye'deki aracı kurumun müşteriye karşı sorumluluğuyla ilgili hangisi doğrudur?",
      c: ["Her biri yerine getirdiği işlemlerden dolayı müşteriye karşı sorumludur.", "Müşteriye karşı yalnızca yurt dışındaki kuruluş sorumludur.", "Müşteriye karşı yalnızca Türkiye'deki aracı kurum sorumludur.", "Kuruluşların sorumluluğu yoktur; risk tamamen müşteriye aittir.", "Sorumluluk Yatırımcı Tazmin Merkezi'ne devredilir."],
      d: 0,
      a: "Emir iletimine aracılık eden yurt dışı yetkili kuruluş ile aracı kurumun **her biri, yerine getirdikleri işlemlerden dolayı müşteriye karşı sorumludur**. Sorumluluğun sınırları mevzuat ve sözleşmelerle belirlenir.",
      k: "1005 resmi not s. 70"
    },
    // --- Belge ve kayıt düzeni ---
    {
      s: "Borsada işlem gören sermaye piyasası araçlarına ilişkin (türev ve kaldıraçlı işlemler hariç) **müşteri emir formunda** asgari olarak bulunması gereken bilgiler arasında aşağıdakilerden hangisi **yoktur?**",
      c: ["Müşterinin yıllık geliri", "Emrin iletilme şekli (telefon, faks, internet vb.)", "Emrin alındığı ve iletildiği tarih ve zaman", "Emrin verildiği seans ve geçerlilik süresi", "İşlem yapılacak borsa, pazar ve takas kurumu"],
      d: 0,
      a: "Emir formunda müşteri ve hesap numarası, müşteri adı, sıra numarası, araç, emir tipi, **iletilme şekli**, alım/satım, fiyat, miktar, **alınma ve iletilme zamanı**, **seans ve geçerlilik süresi**, emri alan görevli, emrin iletildiği kuruluş, **borsa/pazar/takas kurumu** ve para birimi bulunur. Müşterinin geliri emir formunun unsuru değildir.",
      k: "1005 resmi not s. 84"
    },
    {
      s: "Tezgahüstü piyasalarda (kaldıraçlı işlemler hariç) müşterilerle yapılacak işlemler için düzenlenen **İşlem Talimat Formuyla** ilgili hangisi doğrudur?",
      c: ["Sözlü emirlerde form, emrin alındığı anda müşteri imzası aranmadan elektronik olarak düzenlenir.", "Sözlü emirlerde de form müşteriye imzalatılmadan işlem yapılamaz.", "İşlem talimat formu borsada işlem gören paylardaki emirler için düzenlenir.", "İşlem talimat formu ile işlem sonuç formu hiçbir koşulda tek form olarak düzenlenemez.", "Kaldıraçlı alım satım işlemlerinde de aynı işlem talimat formu kullanılır."],
      d: 0,
      a: "Sözlü emirlerde form, **alındığı anda müşteri imzası aranmadan elektronik ortamda** düzenlenir. Yazılı emirlerde ise formun yazılı örneğine müşterinin imzası alınır. Talimat ile sonuçlanmanın eşanlı olduğu hallerde talimat ve sonuç formu **tek form** olarak düzenlenebilir. Kaldıraçlı işlemler kapsam dışıdır.",
      k: "1005 resmi not s. 85"
    },
    {
      s: "Gerçekleşen işlemlerin müşteriye bildirilmesi ve **İşlem Sonuç Formu** ile ilgili hangisi doğrudur?",
      c: ["En geç gün sonunda bildirilir; formun gönderildiğini ispat yükü yatırım kuruluşundadır.", "İşlemler en geç hafta sonunda bildirilir; formun ulaştığını ispat yükü müşteriye aittir.", "İşlem sonuç formu, müşteri yazılı olarak talep ettiğinde düzenlenir.", "Form müteselsil numara taşımaz; işlem numarası yeterli kabul edilir.", "Form posta ile gönderilir; elektronik ortamda erişim sağlanamaz."],
      d: 0,
      a: "Gerçekleşen işlemler müşteriye **en geç gün sonunda**, çerçeve sözleşmede belirtilen şekilde bildirilir. Aynı gün **müteselsil numaralı** işlem sonuç formu elektronik ortamda düzenlenip gönderilir veya erişime açılır. Gönderildiğine ya da erişim sağlandığına ilişkin **ispat yükü yatırım kuruluşundadır**.",
      k: "1005 resmi not s. 86"
    },
    {
      s: "Kaldıraçlı alım satım işlemlerinde müşteri hesaplarına ilişkin kayıtların (teminat, açık pozisyon, kâr/zarar) bütünlüğü nasıl güvence altına alınır?",
      c: ["Dosya bütünlük değerleri günlük periyotlarda zaman damgasıyla düzenlenir ve saklanır.", "Kayıtlar ayda bir notere onaylatılır.", "Kayıtlar kâğıt ortamda, ıslak imzalı olarak tutulur.", "Kayıtların bir kopyası her gün Kurula gönderilir.", "Kayıtlar yıl sonunda bağımsız denetçi tarafından kontrol edilip mühürlenerek saklanır."],
      d: 0,
      a: "Kaldıraçlı işlemlerde müşterilerin teminat, alacak-borç, açık pozisyon ve kâr/zarar kayıtlarının doğruluğu ve bütünlüğü için **dosya bütünlük değerleri günlük periyotlarda zaman damgasıyla** düzenlenir ve saklanır. Aracı kurumlar müşterilerin bu bilgilere elektronik işlem platformundan erişimini sağlar.",
      k: "1005 resmi not s. 89–90"
    },
    // --- Kitle fonlaması ve uzaktan kimlik tespiti ---
    {
      s: "Kitle fonlama platformlarının faaliyet izni alabilmesi için kurması gereken **bilgi sistemleri altyapısı**, Kurulun bilgi sistemleri düzenlemelerinde hangi kuruluşlar için öngörülen altyapıdır?",
      c: ["Dar yetkili aracı kurumlar", "Geniş yetkili aracı kurumlar", "Bankalar", "Merkezi takas kuruluşları", "Portföy yönetim şirketleri"],
      d: 0,
      a: "Faaliyet izni için platformun kuruluş şartlarını korumuş olması, en az bir **yatırım komitesi** oluşturması, iç kontrol ve risk yönetim sistemi ile muhasebe-operasyon birimini kurması ve **dar yetkili aracı kurumlar için öngörülen bilgi sistemleri altyapısını** faaliyete geçirmiş olması gerekir.",
      k: "1005 resmi not s. 110"
    },
    {
      s: "Uzaktan kimlik tespitinin **görüntülü görüşme** aşamasıyla ilgili hangisi doğrudur?",
      c: ["Gerçek zamanlı ve kesintisiz yapılır; uçtan uca güvenlidir, soruların sırası ve türü değişkendir.", "Görüşme canlı yapılabildiği gibi, kişinin önceden kaydedip gönderdiği bir video üzerinden de yapılabilir.", "Personel her görüşmede aynı soruları aynı sırayla sormak zorundadır.", "Bağlantı kesilirse görüşme kesintinin olduğu yerden sürdürülebilir.", "Görüşme kurum ağında yapıldığından ayrıca şifrelenmesi gerekmez."],
      d: 0,
      a: "Görüntülü görüşme aşaması **gerçek zamanlı ve kesintisiz** yapılır; görsel-işitsel iletişimin bütünlüğü ve gizliliği için **uçtan uca güvenli iletişim** kullanılır. Personelin soracağı asgari sorular belirlenir ve **soruların sırası ve/veya türü değişkenlik gösterir**. Görüşmeyi eğitim almış personel yürütür.",
      k: "1005 resmi not s. 128–129"
    },
    // --- İkinci deneme seti ---
    {
      s: "Emir iletimine aracılık faaliyetinin **yurt dışında yerleşik kuruluşlarla** yürütülmesinde Kurula bildirim yapıldıktan sonra Kurul kaç iş günü içinde olumsuz cevap vermezse faaliyete başlanabilir?",
      c: ["5 iş günü", "10 iş günü", "15 iş günü", "20 iş günü", "30 iş günü"],
      d: 3,
      a: "İşlemlere başlamadan önce Kurula bildirim zorunludur ve her yeni sözleşme ayrıca bildirilir. Kurul, yeterli bilgi akışı ve mevzuat uyumunu değerlendirir; **20 iş günü** içinde olumsuz cevap vermezse faaliyete başlanabilir.",
      k: "1005 resmi not s. 5"
    },
    {
      s: "Kurul Karar Organı'nın 17.06.2026 tarihli kararına göre **mevduat ve katılım bankalarının** yurt dışındaki paylara ilişkin işlemlerdeki rolü hangisidir?",
      c: ["Emir iletimine aracılık yapamaz; yetkili aracı kurumlara yönlendirebilir.", "Emir iletimine aracılığı herhangi bir sınırlama olmadan sürdürebilir.", "Emir iletimi yerine bu paylarda portföy aracılığı yapmak zorundadır.", "Müşterilerini yurt dışı pay işlemleri için başka kuruma yönlendiremez.", "Yurt dışı pay işlemlerini kendi adına ve kendi hesabına yapmak zorundadır."],
      d: 0,
      a: "Karara göre mevduat ve katılım bankaları yurt dışında **paylar ile paya ve pay endekslerine dayalı türevlerde emir iletimine aracılık yapamaz**. Ancak müşterilerin, Kurulca yetkilendirilmiş ve yurt dışında işlem aracılığına yetkili **aracı kurumlarda hesap açmasına aracılık** edebilir veya bu kurumlara emir iletebilir.",
      k: "1005 resmi not s. 5"
    },
    {
      s: "Yatırım Hizmetleri Tebliği'ne göre yurt dışında yerleşik kuruluşlarla **hangi işlemler** için emir iletimine aracılık veya işlem aracılığı faaliyeti yürütülemez?",
      c: ["Kaldıraçlı alım satım işlemleri", "Pay alım satım işlemleri", "Borçlanma aracı işlemleri", "Yatırım fonu katılma payı işlemleri", "Borsada işlem gören vadeli işlem sözleşmeleri"],
      d: 0,
      a: "**Kaldıraçlı alım satım işlemlerine** yönelik olarak yurt dışında yerleşik kuruluşlarla ne emir iletimine aracılık ne de yurt dışı piyasalarda işlem aracılığı faaliyeti yürütülebilir. Diğer araçlarda bildirim ve sözleşme şartlarıyla faaliyet mümkündür.",
      k: "1005 resmi not s. 5, 8"
    },
    {
      s: "Yurt dışında bir borsaya **üye olarak** işlem aracılığı yapan yatırım kuruluşu, ilgili otoritenin kendisine uyguladığı yaptırımları Kurula ne zaman bildirmelidir?",
      c: ["Durumun ortaya çıktığı tarihten itibaren 3 iş günü içinde", "Durumun ortaya çıktığı tarihten itibaren 10 iş günü içinde", "Durumun ortaya çıktığı ayı izleyen ayın sonuna kadar", "Durumun ortaya çıktığı yılın yıllık faaliyet raporunda", "Durumun ortaya çıkmasından sonra Kurul talep ettiğinde"],
      d: 0,
      a: "Yurt dışı borsaya üye olarak çalışan yatırım kuruluşu, ilgili otoriteye yapılan raporlamalardaki mali veya hukuki durumu etkileyebilecek hususları ve **uygulanan yaptırımları**, durumun ortaya çıktığı tarihten itibaren **3 iş günü** içinde Kurula bildirir.",
      k: "1005 resmi not s. 8"
    },
    {
      s: "Alım satım aracılığı faaliyetlerinden hangisinde müşteri ile yatırım kuruluşu arasındaki **çıkar çatışması** en yüksektir?",
      c: ["Portföy aracılığı", "Emir iletimine aracılık", "İşlem aracılığı", "Yatırım danışmanlığı", "Saklama hizmeti"],
      d: 0,
      a: "Portföy aracılığında yatırım kuruluşu müşterinin emrini borsaya veya başka kuruluşa iletmeden **işlemin karşı tarafı** olur. Bu nedenle çıkar çatışması emir iletimine aracılık ve işlem aracılığına göre **daha yüksektir**; çıkar çatışması politikası ve en iyi gerçekleştirme yükümlülüğü özellikle önemlidir.",
      k: "1005 resmi not s. 8"
    },
    {
      s: "Kaldıraçlı işlemlerde müşterinin **yatırdığı teminattan daha fazla zarara** uğraması halinde hangisi doğrudur?",
      c: ["Talep edilemez; talebe dayalı profesyonel müşteri yazılı talep ederse bu koruma kalkabilir.", "Zararın tamamı, müşterinin türüne bakılmaksızın her müşteriden ayrıca talep edilebilir.", "Zarar genel müşterilerden talep edilebilir; profesyonel müşterilerden ise talep edilemez.", "Teminatı aşan zarar, Yatırımcı Tazmin Merkezi tarafından müşteri adına karşılanır.", "Profesyonel müşteriler dahil hiçbir müşteri türü için bu koruma yazılı talep ile kalkmaz."],
      d: 0,
      a: "Genel müşteri ve talebe dayalı profesyonel müşteriler için teminatı aşan kayba yol açacak işlem yaptırılamaz ve teminatı aşan zarar **müşteriden talep edilemez**. Ancak **talebe dayalı profesyonel müşteri yazılı olarak talep ederse** bu hüküm onun için uygulanmayabilir.",
      k: "1005 resmi not s. 8, 11"
    },
    {
      s: "Yatırım Hizmetleri Tebliği md. 25/A'ya göre aşağıdakilerden hangileri, Kurulun diğer düzenlemelerindeki tanımlarından bağımsız olarak **türev araç** kabul edilir?",
      c: ["Fark kontratları, yatırım kuruluşu varantları ve sertifikaları ile ortaklık varantları", "Borsada işlem gören vadeli işlem ve opsiyon sözleşmeleri ile bunların tüm türevleri", "Repo ve ters repo işlemleri ile sermaye piyasası araçlarının ödünç işlemleri", "Kira sertifikaları, varlığa dayalı menkul kıymetler ve ipotek teminatlı menkul kıymetler", "Yatırım fonu katılma payları, yatırım ortaklığı payları ve borsa yatırım fonları"],
      d: 0,
      a: "Md. 25/A'ya göre **fark kontratları**, **yatırım kuruluşu varantları ve sertifikaları** ile **ortaklık varantları** türev araç kabul edilir. Tezgahüstü fark kontratları kaldıraçlı işlem hükümlerine tabidir. Tezgahüstü türev listesindeki değişiklikler ilanı izleyen 5 iş günü içinde Birliğe bildirilir.",
      k: "1005 resmi not s. 11"
    },
    {
      s: "Müşterinin, emrin **belirli bir kuruluşa veya piyasaya iletilmesi** yönünde açık talimatı varsa, en iyi gerçekleştirme yükümlülüğü açısından hangisi doğrudur?",
      c: ["Yatırım kuruluşu bu yükümlülüğü yerine getirmiş sayılır.", "Yatırım kuruluşu talimatı dikkate almadan en iyi fiyatı aramak zorundadır.", "Talimat yalnızca Kurul onayıyla uygulanabilir.", "Yatırım kuruluşu emri reddetmek zorundadır.", "Yükümlülük devam eder; kuruluş sonraki fiyat farkını müşteriye öder."],
      d: 0,
      a: "Yatırım kuruluşu fiyat, maliyet, hız, takas ve benzeri tercihleri dikkate alarak müşteri için en iyi sonucu sağlamakla yükümlüdür. Ancak müşterinin emrin **belirli bir kuruluş veya piyasaya** iletilmesine ilişkin **açık talimatı** varsa yükümlülük **yerine getirilmiş sayılır**.",
      k: "1005 resmi not s. 18"
    },
    {
      s: "Kaldıraçlı işlemlerde **fiyat yenilemesi** ile ilgili hangisi doğrudur?",
      c: ["Müşteri aleyhine uygulanıyorsa, müşteri lehine olan her durumda da uygulanmalıdır.", "Fiyat yenilemesi sadece müşteri aleyhine uygulanabilir.", "Fiyat yenilemesi kaldıraçlı işlemlerde tamamen yasaktır.", "Müşteri lehine değişiklikler için her durumda müşteri onayı alınır.", "Fiyat yenilemesi, müşteri onayı alınarak pozisyon kapatma emirlerinde uygulanır ve açılışta uygulanmaz."],
      d: 0,
      a: "Kaldıraçlı işlemlerde emir fiyatının gerçekleşmeden önce değiştirilmesi **fiyat yenilemesidir**. Müşteri aleyhine uygulanıyorsa **lehe olan her durumda da** uygulanması zorunludur. Aleyhe değişikliklerde müşteri onayı gerekir; lehe değişikliklerde ve belirlenmiş fiyat aralığındaki değişimlerde onay aranmaz.",
      k: "1005 resmi not s. 18"
    },
    {
      s: "Kaldıraçlı işlemlerde aracı kurumların açıkladığı fiyat ve alım satım fiyat farkı verileriyle ilgili olarak **Birlik** ne yapar?",
      c: ["Verileri bir yıl saklar; belirli düzeyi aşan sapmaları haftalık kamuya duyurur.", "Verileri beş yıl saklar; tespit ettiği sapmaları Kurula gizli olarak bildirir.", "Her aracı kurumun fiyatlarını yayımlanmadan önce inceleyerek onaylar.", "Sapma tespit edilen kurumların faaliyet iznini doğrudan iptal eder.", "Verileri tutmaz; müşteri şikâyeti geldiğinde ilgili kurumdan ister."],
      d: 0,
      a: "Kaldıraçlı işlemlerde açıklanan fiyatlar ve farklar Birliğe aktarılır. Birlik her kurum için geçmişe dönük fiyat ve fark serisi oluşturur, **bir yıl saklar** ve istatistiki yöntemlerle belirli düzeyi aşan **sapmaları kurum bazında haftalık olarak** kamuya duyurur.",
      k: "1005 resmi not s. 19"
    },
    {
      s: "Yatırım Hizmetleri Tebliği'ne göre aşağıdakilerden hangisi yatırım kuruluşlarınca **teminat olarak kabul edilebilecek** kıymetler arasında sayılmamıştır?",
      c: ["Borsada işlem görmeyen özel sektör borçlanma araçları", "Türk Lirası ve TCMB'nin kur ilan ettiği yabancı paralar", "Kamu borçlanma araçları", "Fon katılma payları", "Kredili işlemlere konu olabilecek sermaye piyasası araçları"],
      d: 0,
      a: "Teminat olarak nakit (TL ve TCMB'nin kur ilan ettiği dövizler), kamu borçlanma araçları, kredili işleme konu olabilen araçlar, fon katılma payları ve standart altın kabul edilebilir. Özel sektör borçlanma araçları, VDMK ve kira sertifikaları ise ancak **borsada işlem görmek kaydıyla** kabul edilir.",
      k: "1005 resmi not s. 19"
    },
    {
      s: "Bireysel portföy yöneticiliği yapan yetkili kuruluş aşağıdakilerden hangisini **yapabilir?**",
      c: ["Çıkar çatışması doğurmamak koşuluyla kendi nakdini portföy yönetimine konu araçlarla değerlendirmek", "Portföyün önceden belirlenmiş bir getiriyi sağlayacağını yazılı olarak garanti etmek", "Belirli bir dönem için önceden toplanan paralarla ortak bir portföy oluşturmak", "Araştırma sonuçlarını müşterilere duyurmadan önce kendi lehine kullanmak", "Müşterinin yazılı talimatı olmadan borsada işlem görmeyen varlıkları rayiç değerin üstünde portföye almak"],
      d: 0,
      a: "Yetkili kuruluş **basiretli tacir** gibi davranmak ve çıkar çatışmasına yol açmamak koşuluyla **kendi nakdini** portföy yönetimine konu araçlarla değerlendirebilir. Getiri garantisi veremez, ortak portföy oluşturamaz, araştırma sonuçlarını önceden kullanamaz ve yazılı talimat olmadan borsada işlem görmeyen varlıkları portföye alamaz.",
      k: "1005 resmi not s. 22"
    },
    {
      s: "Yatırım danışmanlığı çerçeve sözleşmesinde belirtilen **yatırım danışmanı değiştirilirse** müşterinin hakkı nedir?",
      c: ["Yeni danışmanı uygun görmezse sözleşmeyi tek taraflı feshedebilir.", "Sözleşme kendiliğinden sona erer ve yeniden imzalanır.", "Müşterinin itiraz hakkı yoktur; değişiklik yalnızca bildirilir.", "Müşteri, eski danışmanla çalışmaya devam edilmesini şart koşabilir.", "Müşteri, Kurula başvurarak değişikliğin iptalini talep eder."],
      d: 0,
      a: "Danışman ayrılırsa veya değiştirilirse yetkili kuruluş bunu müşteriye **en seri haberleşme aracıyla** bildirir. Müşteri yeni görevlendirilen danışmanı **uygun görmezse sözleşmeyi tek taraflı feshedebilir**.",
      k: "1005 resmi not s. 28"
    },
    {
      s: "Saklamaya yetkili yatırım kuruluşunun kendi kayıtları ile merkezi saklama kuruluşu nezdindeki kayıtlar arasında yapacağı **mutabakat** için hangisi doğrudur?",
      c: ["Günlük; araçlarda müşteri bazında, nakitte toplu veya müşteri bazında", "Aylık; araçlarda ve nakitte toplu bazda yapılması yeterlidir", "Haftalık; nakitte her durumda müşteri bazında yapılır", "Müşterinin talep ettiği tarihlerde, araçlar ve nakit için", "Yılda bir kez, bağımsız denetimle birlikte yapılır"],
      d: 0,
      a: "Md. 65'e göre mutabakat **günlük** sağlanır: sermaye piyasası araçları için **müşteri bazında**, nakit için **toplu veya müşteri bazında**. Uyumsuzluk çıkarsa derhal önlem alınır. Yurt dışında yerleşik müşterilerin kayıtları nakit hariç hak sahibi bazında izlenir.",
      k: "1005 resmi not s. 34"
    },
    {
      s: "Yatırım Hizmetleri Tebliği'ndeki **yan hizmetler** için hangisi doğrudur?",
      c: ["Kurul iznine gerek olmadan serbestçe yürütülebilir; yatırım kuruluşları ise Kurul esaslarına uyar.", "Yan hizmetleri ancak geniş yetkili aracı kurumlar Kurul izniyle yürütebilir.", "Yan hizmetleri gerçek kişiler yürütemez, tüzel kişiler izinle yürütür.", "Yan hizmetler için her yıl Kuruldan izin yenilenmesi gerekir.", "Yan hizmetler yatırım hizmeti sayıldığından her biri için Kuruldan ayrı faaliyet izni alınmasını gerektirir."],
      d: 0,
      a: "Yan hizmetler, **Kurul iznine gerek kalmaksızın** tüzel veya gerçek kişilerce serbestçe yürütülebilir. Ancak yatırım kuruluşları yürütürse Kurulun belirlediği esaslara uymak zorundadır; yatırım tavsiyeleri ve kredili işlemlerde Kurulun ilke belirleme yetkisi saklıdır.",
      k: "1005 resmi not s. 38"
    },
    {
      s: "Aşağıdakilerden hangisi **genel yatırım tavsiyesi** faaliyetine örnektir?",
      c: ["Bir aracı kurumun araştırma biriminin tüm müşterilere gönderdiği hisse senedi raporu", "Müşterinin risk tercihine göre ona özel hazırlanan portföy önerisi", "Müşteri adına alım satım kararı verilerek portföyün yönetilmesi", "Müşterinin emrinin borsaya iletilerek gerçekleştirilmesi", "Bir şirketin birleşme ve bölünme sürecinde yönetimine özel olarak sunulan yazılı danışmanlık hizmeti"],
      d: 0,
      a: "Genel yatırım tavsiyesi, **belli bir kişiye veya benzer nitelikli bir gruba yönelik olmadan** sunulan yönlendirici araştırma ve bilgidir; örneğin araştırma biriminin **tüm müşterilerine** gönderdiği makroekonomik veya hisse raporları. Kişinin mali durumu ve risk tercihi dikkate alınarak yapılan öneri ise **yatırım danışmanlığıdır**.",
      k: "1005 resmi not s. 40"
    },
    {
      s: "Yatırım Hizmetleri Tebliği kapsamında **finansal bilgi** nasıl tanımlanır?",
      c: ["Araçlar, ihraççılar ve piyasa eğilimleri hakkında yönlendirici olmayan yazılı veya sözlü bilgi", "Belirli bir aracın alınmasını veya satılmasını, kişinin risk tercihlerine göre öneren kişiye özel tavsiye", "İhraççının KAP'ta yayımladığı yıllık finansal tablolar", "Müşterinin portföyüne ilişkin aylık hesap ekstresi", "Kurulun haftalık bülteninde yayımlanan kararlar"],
      d: 0,
      a: "Finansal bilgi; sermaye piyasası araçları, bunları ihraç eden ortaklıklar ve piyasa eğilimleri hakkında **yönlendirici nitelikte olmayan** yazılı veya sözlü bilgidir. Yönlendirici nitelik taşıyan sunumlar yatırım danışmanlığı veya genel yatırım tavsiyesi kapsamına girer.",
      k: "1005 resmi not s. 40"
    },
    {
      s: "Yatırım Kuruluşları Tebliği'ne göre **bankaların** yatırım hizmet ve faaliyetlerinde bulunabilmek için sağlaması gereken genel şartlar arasında hangisi **yoktur?**",
      c: ["Asgari kuruluş sermayesinin nakden ve tamamen ödenmiş olması", "Aranan organizasyon yapısının oluşturulmuş olması", "Çalışacak personele ilişkin şartların sağlanması", "Varlıklara ilişkin sigorta dahil güvenlik önlemlerinin alınmış olması", "Gerekli bilgi işlem altyapısının oluşturulmuş olması"],
      d: 0,
      a: "Bankalar için genel şartlardan **organizasyon yapısı (ç), personel şartları (d)** ve **güvenlik önlemleri (g)** aranır; Rehber ile bunlara **bilgi işlem altyapısı (f)** eklenmiştir. Asgari kuruluş sermayesinin ödenmesi şartı aracı kurumlar için aranır.",
      k: "1005 resmi not s. 46"
    },
    {
      s: "Yatırım kuruluşlarında yazılı **çıkar çatışması politikası** nasıl yürürlüğe girer?",
      c: ["Yönetim kurulu kararıyla", "Genel kurul kararıyla", "Kurul onayıyla", "Birlik onayıyla", "Genel müdür onayıyla"],
      d: 0,
      a: "Yatırım kuruluşu yazılı bir çıkar çatışması politikası oluşturur ve politika **yönetim kurulu kararıyla** yürürlüğe girer. Politika her hizmet için olası çıkar çatışmalarını, önleme tedbirlerini (ör. birimler arası bilgi akışının engellenmesi) ve önlenemezse izlenecek prosedürleri içerir.",
      k: "1005 resmi not s. 48"
    },
    {
      s: "Kaldıraçlı işlem yapan yatırım kuruluşları internet sitelerinde, likidite sağlayıcı olarak işlem gerçekleştirilen kuruluşlardan bu işlemlerin **yüzde kaçından fazlasının** yapıldığı kuruluşları açıklar?",
      c: ["%5", "%10", "%12", "%15", "%20"],
      d: 4,
      a: "İnternet sitesinde fiyat sağlayıcı kuruluşlar, yerleşik oldukları yer ve pay sahipliği ilişkisi açıklanır; likidite sağlayıcı kuruluşlardan işlemlerin **%20'sinden fazlasının** yapıldığı kuruluşlar gösterilir. Ayrıca reddedilen emirlerin tüm emirlere oranı da yer alır.",
      k: "1005 resmi not s. 57"
    },
    {
      s: "Aracı kurumların **dışarıdan hizmet alımı** ile ilgili hangisi doğrudur?",
      c: ["Hizmetle ilgili müşteri ilişkilerinden doğan hukuki sorumluluk aracı kurumda kalır.", "Hizmet alınan konularda sorumluluk tamamen hizmet sağlayıcıya geçer.", "Hizmet alınan konulardaki kayıtların aracı kurumda tutulması gerekmez.", "Bilgi sistemlerinde karar alma yetkisi hizmet sağlayıcıya devredilir.", "Temizlik ve kargo gibi destek hizmetleri de Tebliğ kapsamındadır."],
      d: 0,
      a: "Dışarıdan hizmet alımı aracı kurumun mevzuattan doğan sorumluluklarını **kaldırmaz**; müşteri ilişkilerinden doğan **hukuki sorumluluk aracı kurumdadır**, kayıtlar kendi bünyesinde tutulur. Bilgi sistemlerinde karar gücü aracı kurumda kalır ve yılda en az bir kez sızma testi yaptırılır.",
      k: "1005 resmi not s. 71"
    },
    {
      s: "Kitle fonlaması platformunda **yatırım komitesi üyelerinden biri**, bir projenin kampanyasının yayımlanma kararına şerh koyarsa ne olur?",
      c: ["Şerh ve gerekçesi, bilgi formuyla birlikte kampanya sayfasında yayımlanır.", "Kampanya yayımlanamaz ve başvuru kendiliğinden reddedilmiş sayılır.", "Şerh gizli tutulur ve yalnızca Kurula bildirilir.", "Karar, Kurulun onayına kadar askıya alınır.", "Şerh koyan üye komiteden çıkarılır ve karar yeniden alınır."],
      d: 0,
      a: "Kampanyanın yayımlanması **yatırım komitesinin onayına** bağlıdır ve onay, her ölçüt için değerlendirmeleri içeren bir rapora bağlanır. Bir üye şerh koyarsa **şerh ve gerekçesi** bilgi formu ile birlikte kampanya sayfasında **yayımlanır**. Platform, karara dayanak belgeleri kampanya bitiminden itibaren 5 yıl saklar.",
      k: "1005 resmi not s. 115"
    },
    {
      s: "Kitle fonlamasıyla fonlanan şirket, fesih, iflas davası veya yönetim kontrolünün el değiştirmesi gibi hususları **ne zaman** kamuya açıklamalıdır?",
      c: ["Ortaya çıktığı veya öğrenildiği tarihten itibaren iki iş günü içinde", "Ortaya çıktığı ayı izleyen ayın on beşinci gününe kadar", "Ortaya çıktığı yılın sonunda yayımlanan yıllık faaliyet raporunda", "Ortaya çıktığı veya öğrenildiği tarihten itibaren otuz gün içinde", "Yatırımcıların platforma yazılı talepte bulunması üzerine"],
      d: 0,
      a: "Fonlanan şirkete ilişkin fesih, konkordato, iflas davası, tasfiye, **yönetim kontrolünün el değiştirmesi** ve borçlanmaya dayalı kampanyalarda temerrüt bilgileri; ortaya çıktığı veya öğrenildiği tarihten itibaren **iki iş günü** içinde açıklanır.",
      k: "1005 resmi not s. 126"
    },
    {
      s: "Uzaktan Kimlik Tespiti Tebliği'nde **28.02.2026** tarihinde yapılan değişiklikle ne getirilmiştir?",
      c: ["Kimlik tespitinde yapay zeka temelli yöntemlerin kullanılabilmesi", "Uzaktan kimlik tespitinin tüm kuruluşlar için yasaklanması", "Uzaktan kimlik tespitinin bankalarla sınırlandırılması", "Görüntülü görüşme yerine e-posta ile kimlik doğrulama yapılması", "Kimlik tespitinin noter huzurunda yapılması zorunluluğu"],
      d: 0,
      a: "28.02.2026 değişikliğiyle uzaktan kimlik tespiti aşamasında personelce yürütülmesi gereken işlemlerin **yapay zeka temelli yöntemlerle** yapılabilmesine imkân tanınmıştır; MASAK Genel Tebliği'ndeki esaslara uyulur. Tebliğ ayrıca kripto varlık hizmet sağlayıcıları da kapsayacak şekilde genişletilmiştir.",
      k: "1005 resmi not s. 127"
    },
    {
      s: "TSPB Promosyon Kampanyaları Yönergesi'ne göre promosyon kampanyasının **Birlikçe onaylanması** ile ilgili hangisi doğrudur?",
      c: ["Onay, Birliğin kampanya içeriğine kefil olduğu anlamına gelmez ve reklamda kullanılamaz.", "Onay, Birliğin kampanyanın içeriğine ve yatırımcıya sağlayacağı getiriye kefil olduğu anlamına gelir.", "Üye, onay almadan da kampanyayı ilan edebilir.", "Onay, reklam metinlerinde \"Birlik onaylıdır\" ifadesiyle kullanılmalıdır.", "Kampanya sonrası herhangi bir veri bildirimine gerek yoktur."],
      d: 0,
      a: "Üyeler kampanyayı ancak **Birlik onayından sonra** ilan edebilir. Onay, Birliğin kampanya içeriğine **kefil olduğu anlamına gelmez** ve **reklam amacıyla kullanılamaz**. Kampanya bitince yararlanan yatırımcı sayısı ve maliyet en geç 10 iş günü içinde Birliğe bildirilir.",
      k: "1005 resmi not s. 135"
    }
  ]
});
