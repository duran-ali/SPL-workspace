// 1006 Finansal Piyasalar: ders sonu testi (25 soru).
// Dersin tamamını kapsar (resmi not s. 1–253). Günlük mini testlerde sorulmayan bilgileri ölçer.
SPL.dersSonu("1006", {
  sorular: [
    // --- Borsa İstanbul ve mevzuat (1–4. günler) ---
    {
      s: "Borsa İstanbul'un **olağan genel kurulu** ne zaman toplanır?",
      c: ["Faaliyet dönemi sonundan itibaren 3 ay içinde", "Faaliyet dönemi sonundan itibaren 6 ay içinde", "Faaliyet dönemi sonundan itibaren 1 ay içinde", "Her yıl Ocak ayının ilk iş haftasında", "SPK'nın belirlediği tarihlerde, her faaliyet yılında iki kez"],
      d: 0,
      a: "Olağan genel kurul, **faaliyet dönemi sonundan itibaren 3 ay içinde** toplanır.",
      k: "1006 resmi not s. 7"
    },
    {
      s: "Sermaye piyasası araçlarının Borsa İstanbul **kotuna alınmasına** karar verme yetkisi kime aittir?",
      c: ["SPK'ya aittir; borsaya devredilemez", "Yönetim kuruluna aittir; genel müdüre devredilebilir", "Genel müdüre aittir; başkasına devredilemez", "Genel kurula aittir; yönetim kuruluna devredilebilir", "Kotasyon komitesine aittir; her kararda ayrıca SPK onayı aranır"],
      d: 1,
      a: "Kota alma yetkisi **yönetim kurulundadır**; bu yetki **genel müdüre devredilebilir**. Kottan çıkarılan araçların ödediği ücretler iade edilmez.",
      k: "1006 resmi not s. 16"
    },
    // --- Pay Piyasası (5–14. günler) ---
    {
      s: "Borsa birincil piyasada **borsada satış** yöntemiyle yapılan halka arzlarda satış süresi ile ilgili hangisi doğrudur?",
      c: ["En az 3, en çok 5 iş günü sürer", "En çok 1 iş günü sürer ve hiçbir şekilde uzatılamaz", "En çok 2 iş günüdür; 2 gün talep edilmişse uzatılamaz", "En çok 10 iş günüdür; SPK onayıyla uzatılabilir", "Süre sınırı yoktur; satış, paylar tamamen satılana kadar sürer"],
      d: 2,
      a: "Borsada satış yöntemli halka arzlar **en çok 2 iş günü** sürer; başlangıçta 2 gün talep edilmişse süre **uzatılamaz**.",
      k: "1006 resmi not s. 32"
    },
    {
      s: "Pazarları belirleme kriterlerine göre bir payın **Yıldız Pazara** alınabilmesi için (istisnalar dışında) aranan **piyasa değeri** eşiği nedir?",
      c: ["1 milyar TL'den büyük", "3 milyar TL'den büyük", "4 milyar TL'den büyük", "6 milyar TL'den büyük", "10 milyar TL'den büyük"],
      d: 3,
      a: "Yıldız Pazar için piyasa değeri **6 milyar TL**'den, FDPD **1 milyar TL**'den büyük olmalı; yerli fon tutarı 30 milyon TL'yi aşmalı ve likidite 0,15'in altında olmalıdır. 3 milyar TL, FDO'su %5'ten büyük paylar için istisna eşiğidir.",
      k: "1006 resmi not s. 36"
    },
    {
      s: "Pay Piyasasında tam iş günlerinde **açılış seansı** hangi saatler arasındadır?",
      c: ["09:30 – 09:40", "09:40 – 10:00", "09:55 – 10:00", "10:00 – 10:20", "10:00 – 18:00"],
      d: 1,
      a: "Tam gün seans akışı: açılış **09:40-10:00**, sürekli işlem 10:00-18:00, kapanış 18:00-18:07, kapanış fiyatından işlemler 18:07-18:10.",
      k: "1006 resmi not s. 50"
    },
    {
      s: "Pay Piyasasında **endekse bağlı devre kesici sistemi (EBDKS)** ile ilgili hangisi doğrudur?",
      c: ["BIST 30 %5 düşerse tüm sıralarda 15 dakikalık emir toplama başlar", "BIST 100 %10 düşerse paylarda 30, diğer araçlarda 60 dakika ara verilir", "BIST 100 %4 düşerse tüm araçlarda işlemler gün sonuna kadar durur", "BIST 30 %6 düşerse paylarda 20, diğer araçlarda 10 dakika ara verilir", "BIST 100 %6 düşerse paylarda 10, varant, sertifika, BYF ve YPAH'ta 20 dakika"],
      d: 4,
      a: "BIST 100 endeksi **%6** düşünce EBDKS çalışır: paylarda **10 dk**, V/C/F/R kodlu sıralarda (varant, sertifika, BYF, YPAH) **20 dk**. Günde **bir kez** çalışır; 17:30'dan sonra tetiklenirse kapanışa kadar sürer.",
      k: "1006 resmi not s. 69"
    },
    {
      s: "Pay Piyasasındaki **Volatilite Bazlı Tedbir Sistemi (VBTS)** ile ilgili hangisi doğrudur?",
      c: ["5 seviyelidir; her seviye 1 ay sürer, tedbirler kademeli ve birikimlidir", "3 seviyelidir; her seviye 1 hafta sürer ve tedbirler birbirinden bağımsızdır", "5 seviyelidir; ancak tedbirler birikimli değildir, yalnızca son seviye uygulanır", "Yalnızca Yıldız Pazar paylarına uygulanır; Ana Pazarda uygulanmaz", "Tedbirler SPK kararıyla tek seferde 6 ay süreyle uygulanır"],
      d: 0,
      a: "VBTS **5 seviyeden** oluşur; her seviye **1 ay** sürer ve tedbirler **kademeli ve birikimli** uygulanır (örneğin üçüncü seviyede emir paketi).",
      k: "1006 resmi not s. 80"
    },
    {
      s: "Pay Piyasası işlemlerinin **BISTECH** işlem platformuna taşındığı tarih hangisidir?",
      c: ["03.01.1986", "05.04.2013", "20.01.2014", "30.11.2015", "10.08.2020"],
      d: 3,
      a: "BISTECH **30.11.2015**'te devreye girdi (tek seans, devre kesici, özel işlem bildirimi, yeni pazar yapısı). 03.01.1986 ilk seans, 05.04.2013 Borsa İstanbul'a dönüşüm, 20.01.2014 NASDAQ işbirliği, 10.08.2020 EBDKS'dir.",
      k: "1006 resmi not s. 73, 84"
    },
    // --- Borçlanma Araçları Piyasası (15–19. günler) ---
    {
      s: "Borçlanma araçlarının vadeleriyle ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?",
      c: ["Hazine bonosu: vadesi 1 yıldan kısa", "Devlet tahvili: vadesi 1 yıl veya daha uzun", "Likidite senedi: vadesi 91 günü aşmaz", "Finansman bonosu: vadesi en az 365 gün", "Özel sektör tahvili: vadesi en az 365 gün"],
      d: 3,
      a: "**Finansman bonosunun** vadesi **en çok 364 gündür**; en az 365 gün vadeli olan **özel sektör tahvilidir**. Diğer eşleştirmeler doğrudur.",
      k: "1006 resmi not s. 92-93"
    },
    {
      s: "Borçlanma Araçları Piyasasında **DİBS piyasa yapıcılığı** sistemini kim yürütür?",
      c: ["Borsa İstanbul Genel Müdürlüğü", "Takasbank", "Türkiye Cumhuriyet Merkez Bankası", "Sermaye Piyasası Kurulu", "Hazine ve Maliye Bakanlığı"],
      d: 4,
      a: "DİBS piyasa yapıcılığı **Hazine** tarafından yürütülür; özel sektör borçlanma araçlarında piyasa yapıcılığı ise **Borsa** tarafından düzenlenir.",
      k: "1006 resmi not s. 102"
    },
    {
      s: "**Pay Senedi Repo Pazarında** işleme konu olabilecek paylar hangi endekste yer alanlardır?",
      c: ["BIST 30", "BIST 50", "BIST 100", "BIST Tüm", "BIST Temettü 25"],
      d: 1,
      a: "Pay Senedi Repo Pazarında (2012) **BIST 50** payları işlem görür; fiyat Pay Piyasasındaki **son işlem fiyatıdır** ve ileri valör en çok **2 iş günüdür**.",
      k: "1006 resmi not s. 113"
    },
    // --- Para, Swap ve VİOP (20–24. günler) ---
    {
      s: "Borsa İstanbul **Para Piyasasında** işlemlerin bitiş valörü en çok ne kadar olabilir?",
      c: ["3 ay", "6 ay", "1 yıl", "2 yıl", "5 yıl"],
      d: 3,
      a: "Para Piyasasında bitiş valörü en çok **2 yıl** olabilir. Bu piyasada banka, aracı kurum ve Takasbank teminatlı TL borç alıp verir.",
      k: "1006 resmi not s. 120"
    },
    {
      s: "VİOP'ta **normal seans** hangi saatler arasındadır?",
      c: ["09:20 – 18:00", "09:30 – 17:30", "09:30 – 18:10", "10:00 – 18:00", "10:00 – 18:10"],
      d: 2,
      a: "VİOP'ta açılış seansı **09:20-09:30**, normal seans **09:30-18:10**, akşam seansı **19:00-23:00** arasındadır.",
      k: "1006 resmi not s. 132-133"
    },
    {
      s: "VİOP'ta **fiziki teslimatlı döviz** sözleşmeleri ile ilgili hangisi doğrudur?",
      c: ["Sözleşmeler vade sonunda nakdi uzlaşmayla kapatılır", "Yalnızca akşam seansında işlem görür", "Sözleşme kodları O_ önekiyle başlar", "İptal/hacim oranı %50'yi aşınca iradi iptal ücreti alınır", "Bu sözleşmelerde gerçek kişiler adına emir iletilemez"],
      d: 4,
      a: "Fiziki teslimatlı döviz sözleşmelerinde **gerçek kişi** emri kabul edilmez. Bu sözleşmeler fiziki teslimatlıdır (kod **P_**), döviz ve metaller **iradi iptal ücretinden muaftır**.",
      k: "1006 resmi not s. 141"
    },
    {
      s: "VİOP sözleşme kodlarında **\"P_\"** öneki neyi ifade eder?",
      c: ["Fiziki teslimatlı sözleşme", "Mini sözleşme", "Esnek sözleşme", "Opsiyon sözleşmesi", "Özsermaye uyarlamasıyla açılan sözleşme"],
      d: 0,
      a: "Kodlar: **F_** vadeli, **O_** opsiyon, **P_** fiziki teslimat, **M** mini, **TM_** esnek; özsermaye uyarlamasında açılan standart olmayan sözleşmeler N1, N2… ile gösterilir.",
      k: "1006 resmi not s. 155-156"
    },
    // --- Kıymetli madenler (25–26. günler) ---
    {
      s: "Kıymetli Madenler Piyasasında **1 kilogram** altın kaç **ons**'a eşittir?",
      c: ["26,4555", "28,3495", "29,1667", "31,1035", "32,1507"],
      d: 4,
      a: "**1 kg = 32,1507465 ons**. (31,1035 gram, bir troy onsun gram karşılığıdır.)",
      k: "1006 resmi not s. 161"
    },
    {
      s: "**Kıymetli Madenler Ödünç Piyasası (KMÖP)** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["İşlemlerde alt limit 5 kg, artış adımı 1 kg'dır", "Seans 10:00 – 16:00 arasındadır", "İşlemler T+0 valörlüdür", "Ödünç vermede en düşük oranlı emir önceliklidir", "İşlemlerin vadesi en fazla 2 yıl olabilir"],
      d: 4,
      a: "KMÖP'te vade **365 güne** kadardır. Diğer ifadeler doğrudur: alt limit 5 kg, adım 1 kg, seans 10:00-16:00, T+0 valör; ödünç almada yüksek, vermede düşük oran önceliklidir.",
      k: "1006 resmi not s. 167-169"
    },
    // --- Tezgahüstü ve TCMB (27–30. günler) ---
    {
      s: "Tezgahüstü piyasa örnekleri arasında sayılan **KOSDAQ** hangi ülkenin piyasasıdır?",
      c: ["Japonya", "Güney Kore", "Çin", "Singapur", "Birleşik Arap Emirlikleri"],
      d: 1,
      a: "**KOSDAQ** Güney Kore'nin piyasasıdır. ABD'de OTCBB ve Pink Sheets örnek verilir; Nasdaq ise sonradan organize borsaya dönüşmüştür.",
      k: "1006 resmi not s. 174"
    },
    {
      s: "2008 krizinden sonra **Avrupa Birliği**'nde tezgahüstü türev işlemlere raporlama, merkezi takas ve teminat şartları getiren düzenleme hangisidir?",
      c: ["UCITS", "Solvency II", "MiFID I", "EMIR", "Basel I"],
      d: 3,
      a: "AB'de tezgahüstü türevleri düzenleyen çerçeve **EMIR**'dir. ABD'deki karşılığı **Dodd-Frank**'tir; Basel III, G-20 ve IOSCO da reform sürecinin parçalarıdır.",
      k: "1006 resmi not s. 175"
    },
    {
      s: "TCMB **açık enflasyon hedeflemesine** hangi yıl geçmiştir?",
      c: ["2001", "2002", "2006", "2008", "2010"],
      d: 2,
      a: "TCMB **2002-2005** arasında **örtük**, **2006**'dan itibaren **açık** enflasyon hedeflemesi uygulamıştır.",
      k: "1006 resmi not s. 182"
    },
    {
      s: "**Kapalıçarşı** altın ve döviz piyasası ile ilgili hangisi doğrudur?",
      c: ["Teminatsız ve sözlü işlemlerle çalışır; işlem saati sınırı yoktur", "Takasbank merkezi karşı taraf olarak işlemleri garanti eder", "İşlemler yalnızca Borsa İstanbul seans saatlerinde yapılabilir", "SPK tarafından düzenlenen organize bir piyasadır", "İşlemler teminatlı ve yazılı sözleşmeyle yapılmak zorundadır; işlem saati sınırı vardır"],
      d: 0,
      a: "Kapalıçarşı piyasası **teminatsız** ve **sözlü** işlemlerle çalışır, **işlem saati sınırı yoktur**. Serbest altın piyasası da düzenlemesizdir.",
      k: "1006 resmi not s. 195"
    },
    // --- Takasbank piyasaları ve platformlar (31–38. günler) ---
    {
      s: "Takasbank **Ödünç Pay Piyasasında** teminatlarla ilgili hangisi doğrudur?",
      c: ["Altın 100 gram ve katları hâlinde teminat olarak verilebilir", "Teminatın en az %50'si Türk lirası olmak zorundadır", "Ödünç veren üyeden de %110 oranında teminat alınır", "BIST 30 dışındaki paylar hiçbir şekilde teminat alınmaz", "Borsa İstanbul payları müşteri hesabından da teminat verilebilir"],
      d: 0,
      a: "ÖPP'de altın **100 gram ve katları** hâlinde alınır. Teminatın en az **%30**'u TL olmalıdır; **ödünç verenden teminat alınmaz**; paylarda **BIST 100** payları kabul edilir; Borsa İstanbul payı **yalnız portföyden** verilebilir.",
      k: "1006 resmi not s. 203"
    },
    {
      s: "ÖPP'de **3.650.000 TL** piyasa değerli bir ödünç işlemi **10 gün** boyunca **yıllık %5** komisyon oranıyla açık kalmıştır. Piyasa değeri sabit kaldıysa **işlem komisyonu** kaç TL'dir?",
      c: ["500 TL", "2.500 TL", "5.000 TL", "10.000 TL", "50.000 TL"],
      d: 2,
      a: "İşlem komisyonu = Σ (günlük piyasa değeri × oran) / **36.500** = 10 × 3.650.000 × 5 / 36.500 = **5.000 TL**.",
      k: "1006 resmi not s. 210"
    },
    {
      s: "Takasbank Para Piyasasında **10 gün vadeli**, **1.000.000 TL** anaparalı bir işlemde **her bir taraftan** alınacak Takasbank komisyonu kaç TL'dir?",
      c: ["3,5 TL", "30 TL", "35 TL", "70 TL", "350 TL"],
      d: 2,
      a: "Vadesi 7 günü aşan işlemlerde komisyon **milyonda 3,5 × gün sayısı**dır: 1.000.000 × 3,5 / 1.000.000 × 10 = **35 TL**; alıcı ve satıcının **her ikisinden** alınır.",
      k: "1006 resmi not s. 226"
    },
    {
      s: "TEFAS ve BEFAS'ta **aracılık komisyon oranı** hangi ücretin belirli bir oranı olarak tanımlanır?",
      c: ["TEFAS'ta fon işletim gider kesintisinin; BEFAS'ta fon yönetim ücretinin", "TEFAS'ta fon yönetim ücretinin; BEFAS'ta fon işletim gider kesintisinin", "İkisinde de fonun toplam değerinin", "İkisinde de Takasbank işlem komisyonunun", "TEFAS'ta giriş aidatının; BEFAS'ta yıllık aidatın"],
      d: 1,
      a: "TEFAS'ta aracılık komisyon oranı **fon yönetim ücretinin**, BEFAS'ta **fon işletim gider kesintisinin** belirli bir oranıdır. Ayrıca TEFAS'ta oran 3 aylık dönemlerle, BEFAS'ta istenildiği zaman değiştirilebilir.",
      k: "1006 resmi not s. 240, 251"
    }
  ]
});
