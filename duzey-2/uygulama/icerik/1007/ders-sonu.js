// 1007 Finansal Yönetim ve Mali Analiz: ders sonu testi (25 soru).
// Dersin tamamından; günlük mini testlerde sorulmayan bilgileri ölçer.
SPL.dersSonu("1007", {
  sorular: [
    {
      s: "Finansal amaç olarak **gelir maksimizasyonunun** sakıncası notlarda nasıl açıklanır?",
      c: ["Fiyat kırıp vade uzatarak gelir artırmak sürdürülebilirliği tehdit edebilir", "Gelir maksimizasyonu riski gereğinden fazla dikkate alır ve büyümeyi engeller", "Gelir maksimizasyonu yalnızca nakit bazlı olduğu için kârı göz ardı eder", "Gelir maksimizasyonu rekabet mevzuatı nedeniyle yasal olarak yasaktır", "Gelir maksimizasyonu yalnızca halka açık şirketlerde uygulanabilir"],
      d: 0,
      a: "Geliri maksimize etmek de bir amaç olabilir; ancak **fiyat kırıp vade uzatarak** gelir artırmak şirketin faaliyetlerinin **sürdürülebilirliğini** tehdit edebilir. Bu yüzden genel kabul gören amaç **değer maksimizasyonudur**.",
      k: "1007 resmi not s. 2"
    },
    {
      s: "Bir ticaret işletmesinin dönem başı stoku 80.000 TL, dönem içi alışları 500.000 TL ve dönem sonu stoku 60.000 TL'dir. Proforma gelir tablosundaki **satılan malın maliyeti** ne kadardır?",
      c: ["640.000 TL", "520.000 TL", "480.000 TL", "580.000 TL", "440.000 TL"],
      d: 1,
      a: "Ticaret işletmesinde **SMM = Dönem başı stok + Dönem içi alışlar − Dönem sonu stok** = 80.000 + 500.000 − 60.000 = **520.000 TL**.",
      k: "1007 resmi not s. 12"
    },
    {
      s: "Proforma bilanço hazırlanırken şirketin **bağlı değerleri** nasıl tahmin edilir?",
      c: ["Her yıl satışların iki katı oranında artırılarak proforma bilançoya yazılır", "Kasa gibi dengeleyici hesap olarak başta boş bırakılır ve en son doldurulur", "Sabit kaldığı varsayılır veya satış artışı oranında artırılır", "Proforma bilançoda her zaman sıfır kabul edilir ve dikkate alınmaz", "Kısa vadeli banka borcuyla eşitlenerek bilanço dengelenir"],
      d: 2,
      a: "Yıldan yıla şirket politikasında çok önemli bir değişiklik olmadıkça bağlı değerler değişmez; proforma tablolarda **sabit kaldığı varsayılır** veya **satışlardaki artış oranında artırılır**.",
      k: "1007 resmi not s. 13"
    },
    {
      s: "Satış miktarı 10.000 birim, birim fiyatı 50 TL, birim değişken maliyeti 30 TL, sabit giderleri 100.000 TL ve faiz gideri 50.000 TL olan bir şirketin **toplam kaldıraç derecesi** kaçtır?",
      c: ["2", "1,33", "1,5", "4", "3"],
      d: 3,
      a: "Toplam katkı payı = 10.000 × 20 = **200.000**; FVÖK = 200.000 − 100.000 = **100.000**; VÖK = 100.000 − 50.000 = **50.000**. **TKD = Q(F − d) / [Q(F − d) − SG − I]** = 200.000 / 50.000 = **4** (FKD 2 × FiKD 2).",
      k: "1007 resmi not s. 25"
    },
    {
      s: "Notlardaki iki seçenek örneğinde, ekonomi **kötü** senaryoya geçtiğinde **sabit giderlerin payı yüksek** olan yapının faaliyet kârı ne olur?",
      c: ["Düşük sabit giderli yapının faaliyet kârından daha yüksek kalır", "Ekonomik koşullardan bağımsız olarak hiç değişmez", "İki maliyet yapısında da birbirine eşit olarak gerçekleşir", "Tam olarak sıfıra eşit olur; şirket başabaş noktasındadır", "Zarara döner; düşük sabit giderli yapı ise kâr eder"],
      d: 4,
      a: "Örnekte kötü senaryoda sabit gider payı **yüksek** yapının faaliyet kârı **−13 TL** (zarar), **düşük** yapınınki **70 TL**'dir. Sabit giderler satış düşüşünü kâra büyüterek yansıtır; yüksek faaliyet kaldıracı yüksek **faaliyet riski** demektir.",
      k: "1007 resmi not s. 21"
    },
    {
      s: "Nominal değerinden ihraç edilen bir tahvilin vadeye kadar getirisi (borç maliyeti) ile kupon faiz oranı arasındaki ilişki nedir?",
      c: ["Borç maliyeti kupon faiz oranına eşittir", "Borç maliyeti her zaman kuponun iki katıdır", "Borç maliyeti sıfırdır", "Borç maliyeti kupon faiz oranından yüksektir", "Borç maliyeti risksiz faiz oranına eşittir"],
      d: 0,
      a: "Tahvil **nominal değerinden** satılırsa vadeye kadar getiri **kupon oranına eşittir**. Primli satışta maliyet kuponun **altında**, iskontolu satışta **üstünde** olur.",
      k: "1007 resmi not s. 41"
    },
    {
      s: "Son olarak 0,75 TL kâr payı dağıtan ve kâr paylarının sonsuza kadar **aynı kalması** beklenen bir şirketin hisse fiyatı 3,75 TL'dir. Özsermaye maliyeti nedir?",
      c: ["%15", "%20", "%25", "%18,75", "%5"],
      d: 1,
      a: "Büyüme yoksa (g = 0) Gordon modeli **ks = D / P₀** hâline gelir: 0,75 / 3,75 = **%20**.",
      k: "1007 resmi not s. 47"
    },
    {
      s: "Vergisiz MM teoremine göre sermaye yapısının şirket üzerindeki **tek etkisi** nedir?",
      c: ["Şirket değerini, faizin vergi tasarrufu kadar artırmak", "Ucuz borç sayesinde AOSM'yi sürekli olarak düşürmek", "Değerin borç verenler ve ortaklar arasında dağılımını belirlemek", "Şirketin iş kolundan kaynaklanan faaliyet riskini değiştirmek", "Kurumlar vergisi karşısında şirkete vergi tasarrufu sağlamak"],
      d: 2,
      a: "Vergisiz MM'ye göre şirket varlıklarını nasıl finanse ederse etsin değeri aynı kalır; sermaye yapısı yalnızca nakit akışının **borç verenler ve özsermaye sahipleri arasında nasıl dağılacağını** etkiler.",
      k: "1007 resmi not s. 51"
    },
    {
      s: "Finansman hiyerarşisi teorisine göre şirketlerin **rezerv borçlanma kapasitesi** tutmak istemelerinin nedeni nedir?",
      c: ["Faizin vergi tasarrufunu her dönem en üst düzeye çıkarmak", "Ortaklara dağıtılan kâr payı tutarını sürekli artırabilmek", "Sabit giderleri azaltarak faaliyet riskini düşürmek", "Kârlı fırsatları hisse ihracına mecbur kalmadan finanse etmek", "Dengeleme teorisinin öngördüğü optimal kaldıraç oranına ulaşmak"],
      d: 3,
      a: "Borçlanma limitleri dolan şirket kârlı bir proje için **hisse ihraç etmek** zorunda kalır; bu, asimetrik bilgi nedeniyle **negatif sinyal** verip hisse fiyatını düşürür. Bu yüzden şirketler bir **rezerv borçlanma kapasitesi** tutar ve bugünkü yatırımları içsel kaynaklarla finanse eder.",
      k: "1007 resmi not s. 56"
    },
    {
      s: "Kaldıraç kullanımının **borca ilişkin** doğurduğu temsil maliyetleri arasında notlarda hangisi sayılır?",
      c: ["Yönetsel lüks harcamaların artması", "Aşırı nakit akışının kontrol edilememesi", "Negatif NBD'li yatırımların kabul edilmesi", "Bağımsız YK üyeliğinin zorunlu hâle gelmesi", "Pozitif NBD'li projelerin reddedilmesi"],
      d: 4,
      a: "Kaldıraç özsermaye temsil sorununu azaltabilir; ancak borca ilişkin **gözetim**, **denetim**, **faaliyet kısıtlaması** ve **pozitif NBD'li projelerin reddedilmesi (underinvestment)** gibi temsil maliyetlerini artırır.",
      k: "1007 resmi not s. 54"
    },
    {
      s: "Bir şirketin üretim miktarı arttıkça **işletme sermayesi** ihtiyacı nasıl değişir?",
      c: ["Genellikle azalan hızla artar", "Üretimle tam doğrusal olarak artar", "Değişmez", "Artan hızla artar", "Azalır"],
      d: 0,
      a: "Üretim arttıkça dönen varlıklara yatırım ihtiyacı da artar; ancak ilişki **doğrusal değildir**. İşletme sermayesi genellikle üretim arttıkça **azalan hızla** artar (eğimi gittikçe azalan bir eğri).",
      k: "1007 resmi not s. 61"
    },
    {
      s: "Alacak yönetiminde **vade uzatmanın** kâr üzerindeki etkileri hangisidir?",
      c: ["Satış artışı kârı azaltır; tahsil süresi ve kötü alacaklar kârı artırır", "Satış artışı kârı artırır; tahsil süresinin uzaması ve kötü alacak artışı kârı azaltır", "Tüm etkiler kârı artırır", "Tüm etkiler kârı azaltır", "Vade uzatmanın kâra etkisi yoktur"],
      d: 1,
      a: "Vade uzatmak **satışları artırır** (kâra +), ancak **tahsil süresini uzatır** ve **kötü alacakları artırır** (kâra −, −). Karar, marjinal fayda ile marjinal maliyetin karşılaştırılmasıyla verilir.",
      k: "1007 resmi not s. 66"
    },
    {
      s: "Bir şirketin **gevşek bir kredi politikası** izlemesinin kâr üzerindeki etkileri hangisidir?",
      c: ["Satış artışı kârı azaltır; diğer tüm etkiler ise kârı artırır", "Satış, tahsil süresi ve kötü alacaklar dahil tüm etkiler kârı artırır", "Satış artışı kârı artırır; diğer artışlar kârı azaltır", "Tahsil süresi kısalır ve kötü alacak giderleri belirgin biçimde azalır", "Kredi politikasının şirket kârına hiçbir etkisi bulunmaz"],
      d: 2,
      a: "Gevşek kredi politikasında satış, tahsil süresi, kötü alacak ve tahsilat giderleri **artar**. Kâra etkisi: satış artışı **+**, diğer üçü **−, −, −**. Karar marjinal analizle verilir.",
      k: "1007 resmi not s. 66"
    },
    {
      s: "Ekonomik sipariş miktarı 5.000 kutu olan bir şirkete, siparişlerini 10.000 kutuluk partiler hâlinde vermesi durumunda kutu başına 20 TL iskonto önerilmektedir. Yıllık talep 50.000 kutu, sipariş maliyeti 100.000 TL, elde tutma gideri kutu başına 400 TL'dir. Teklif için hangisi doğrudur?",
      c: ["Reddedilmelidir; ek elde bulundurma gideri 1.000.000 TL'dir ve iskontoyu aşar", "Reddedilmelidir; çünkü iskonto ekonomik sipariş miktarında bir kazanç sağlamaz", "Kayıtsız kalınır; çünkü maliyet artışı ile iskonto kazancı birbirine eşittir", "Kabul edilmelidir; net kazanç 500.000 TL'dir", "Kabul edilmelidir; çünkü sipariş sayısı artar ve sipariş giderleri yükselir"],
      d: 3,
      a: "Ek elde bulundurma = 400 × 5.000/2 = **1.000.000**; sipariş tasarrufu = (50.000/10.000) × 100.000 = **500.000** → net maliyet artışı **500.000**. İskonto = 20 × 50.000 = **1.000.000**. Net kazanç **500.000 TL** → **kabul**.",
      k: "1007 resmi not s. 77"
    },
    {
      s: "Notlara göre rasyonel bir yatırım kararı modelinde aşağıdaki tercihlerden hangisi **yer almaz**?",
      c: ["Az yerine çok nakit girişi", "Geç yerine erken nakit akışı", "Riskli yerine az riskli nakit girişi", "Riskten kaçınan birey varsayımı", "Erken yerine geç nakit akışı"],
      d: 4,
      a: "Yatırım kararı modelinde **az yerine çok**, **geç yerine erken** ve **riskli yerine az riskli** nakit girişleri tercih edilir; genel varsayım bireylerin **riskten kaçtığıdır**. Erken yerine geç nakit tercih edilmez.",
      k: "1007 resmi not s. 82"
    },
    {
      s: "Yıllık eşdeğer NBD hesabında kullanılan **1 / anüite faktörü** ifadesi finans literatüründe hangi adla bilinir?",
      c: ["Sermaye kurtarma faktörü", "Bugünkü değer faktörü", "Kârlılık endeksi", "İskonto edilmiş geri ödeme katsayısı", "Kaldıraç derecesi"],
      d: 0,
      a: "Ömürleri farklı projelerde NBD anüite faktörüne bölünerek yıllık eşdeğere çevrilir. Bu hesapta kullanılan **1/anüite faktörü** (ör. 1/2,4869 veya 1/3,7908) literatürde **sermaye kurtarma faktörü** olarak bilinir.",
      k: "1007 resmi not s. 90"
    },
    {
      s: "Notlardaki petrol pompası örneğinde ek yatırımın nakit akışı (−10, +45, −45) için iki iç verim oranı bulunmuştur. Bu oranlar hangileridir?",
      c: ["%20 ve %300", "%50 ve %200", "%10 ve %50", "%100 ve %150", "%0 ve %50"],
      d: 1,
      a: "Bu projede NBD **%50** ve **%200** iskonto oranlarında sıfırdır: %50'nin altında negatif, %50-%200 arasında pozitif, %200'ün üzerinde yeniden negatiftir. Nakit akışının **pozitiften negatife dönmesi** birden fazla İVO doğurur.",
      k: "1007 resmi not s. 89"
    },
    {
      s: "Bir satın alma işleminden beklenen ek net nakit akımlarının NBD'si **60.000.000 TL**'dir ve hedef şirketin dolaşımda **5.000.000** hissesi vardır. Satın alan şirketin hisse başına sunabileceği **en fazla ek fiyat** ne kadardır?",
      c: ["8 TL", "10 TL", "12 TL", "15 TL", "60 TL"],
      d: 2,
      a: "Hisse başına maksimum ek fiyat = Birleşmenin yaratacağı ek değerin NBD'si / Hisse sayısı = 60.000.000 / 5.000.000 = **12 TL**. Daha fazlası ödenirse sinerjinin tamamından fazlası hedefe aktarılmış olur.",
      k: "1007 resmi not s. 109"
    },
    {
      s: "Birleşme ve satın almalarda **fiyat/kazanç (F/K) oranı** ile ilgili hangisi doğrudur?",
      c: ["Yalnızca halka kapalı şirketlerde kullanılır", "F/K oranı düşük şirketler yüksek olanları satın alarak hisse fiyatını artırır", "Hisse senedi borsada işlem görmüyorsa F/K kolayca hesaplanır", "F/K oranı yüksek şirketler, düşük olanlarla birleşerek hedef şirketin hisse fiyatını artırabilir", "F/K oranı defter değerinin piyasa değerine oranıdır"],
      d: 3,
      a: "F/K özellikle **halka açık** şirketlerin değerlemesinde kullanılır; borsada işlem görmeyen şirkette fiyat oluşmadığından bilinemez, benzer şirketin F/K'sı kullanılabilir. **F/K'sı yüksek** şirketler **düşük** olanlarla birleşerek hedefin hisse fiyatını artırabilir.",
      k: "1007 resmi not s. 105"
    },
    {
      s: "**Asit-test oranının** hangi şirketlerde ölçülmesinin bir anlamı yoktur?",
      c: ["Çok fazla stok taşıyan imalat şirketlerinde", "Alacak tahsil süresi uzun şirketlerde", "Mevsimsel satış yapan şirketlerde", "Halka açık şirketlerde", "Stok taşımayan hizmet şirketlerinde"],
      d: 4,
      a: "Asit-test oranı dönen varlıklardan **stokları** düşer. **Stok taşımayan** şirketlerde, örneğin **hizmet şirketlerinde**, bu oranın bir anlamı yoktur ve ölçülmez.",
      k: "1007 resmi not s. 115"
    },
    {
      s: "Faiz karşılama oranının nakit ödeme gücünü daha iyi yansıtması için **FVÖK'e ne eklenmesi** önerilir?",
      c: ["Amortisman ve benzeri nakit dışı giderler", "Dönemin kurumlar vergisi ve diğer vergiler", "Ortaklara dağıtılan kâr payları ve avanslar", "Kısa vadeli borçlar ve uzun vadeli borç taksitleri", "Satılan malın maliyeti ve faaliyet giderleri"],
      d: 0,
      a: "Faiz nakitle ödenir; oysa FVÖK'e ulaşırken nakit çıkışı gerektirmeyen **amortisman** gibi giderler düşülmüştür. Bu giderler FVÖK'e **eklenirse** oran (FVÖK + amortisman) / faiz daha anlamlı olur.",
      k: "1007 resmi not s. 117"
    },
    {
      s: "Notlara göre **stok devir hızı 4** olan bir şirkette stoklar ortalama ne kadar süre kalır?",
      c: ["4 gün", "90 gün", "45 gün", "120 gün", "365 gün"],
      d: 1,
      a: "Stok elde kalış süresi = 365 (yaklaşık 360) / Stok devir hızı. Devir hızı **4** ise stoklar şirkette yaklaşık **90 gün** kalır.",
      k: "1007 resmi not s. 118"
    },
    {
      s: "**Özel leasing** ile ilgili hangisi doğrudur?",
      c: ["Varlık birden fazla kiracı tarafından ortaklaşa kiralanır ve maliyet paylaşılır", "Kiracıya, varlık seçiminde hata yapıp yapmadığını görmesi için deneme süresi tanınır", "Özel imal edilir; ikinci el değeri düşük, mülkiyet kiracıya geçer", "Kiracı ile kiralayan farklı ülkelerde yerleşiktir ve sınır ötesi kiralama yapılır", "Ödemeler mevsimsel nakit kısıtları nedeniyle yalnızca yılın belirli aylarında yapılır"],
      d: 2,
      a: "**Özel leasingde** varlık kiracının ihtiyacına göre **özel olarak imal** edilir; ikinci el değeri düşük olduğu için sözleşme sonunda **mülkiyetin kiracıya geçmesi** şartı bulunur.",
      k: "1007 resmi not s. 142"
    },
    {
      s: "**Uluslararası faktoringde** kaç taraf bulunur ve bunlar kimlerdir?",
      c: ["İki taraf: yalnızca satıcı ve alıcı", "Üç taraf: müşteri, borçlu ve faktoring şirketi", "Üç taraf: ihracatçı, ithalatçı ve garanti veren banka", "Dört taraf: ihracatçı, ithalatçı ve iki ülkenin faktörleri", "Beş taraf: ihracatçı, ithalatçı, iki faktör ve bir forfaiter"],
      d: 3,
      a: "Ulusal faktoring genelde üç taraflıdır. **Uluslararası faktoringde** sınır ötesi teslimlerden doğan alacaklar konu olur ve **dört taraf** vardır: **ihracatçı**, **ithalatçı**, **ihracatçının faktoring kuruluşu** ve **ithalatçının faktoring kuruluşu**.",
      k: "1007 resmi not s. 146"
    },
    {
      s: "**Credit bail** leasing yöntemi kiracıya hangi hakkı verir?",
      c: ["Kira süresi sonunda varlığı sembolik 1 TL bedelle satın alma hakkı", "Sözleşmeyi süre dolmadan her an tazminatsız iptal etme hakkı", "Kiralanan varlığı kira süresi içinde istediği zaman değiştirme hakkı", "Gelirden pay ödeyerek baz kira bedelini düşürme hakkı", "Süre sonunda varlığı normal piyasa değerinden alma hakkı"],
      d: 4,
      a: "**Credit bail**, kiracıya kira süresi sonunda varlığı **normal piyasa değerinden** satın alma hakkı verir. Koşullar: kiralayan varlığı kiralamak üzere almış olmalı, alım fiyatı ödenmiş kiraları dikkate almalı ve kiracı varlığı **sınai veya ticari** amaçla kullanmalıdır.",
      k: "1007 resmi not s. 144"
    }
  ]
});
