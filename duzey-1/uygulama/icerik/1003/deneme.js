// 1003 Sermaye Piyasası Araçları 1: genel deneme soru havuzu (25 soru).
// Bu sorular yalnızca genel denemede çıkar; günlük testlerde ve ders sonunda sorulmayan bilgileri ölçer.
SPL.deneme("1003", {
  sorular: [
    // --- Pay: temel kavramlar, endeksler, davranışsal finans ---
    {
      s: "Bir ortaklığın sermayesini temsil eden 200.000.000 adet payı vardır ve ortaklık bunların 10.000.000 adedini geri almıştır. Yıllık net kâr 380.000.000 TL'dir. **Tedavüldeki paylar** üzerinden hesaplanan hisse başına kâr (HBK) ne kadardır?",
      c: ["1,80 TL", "1,90 TL", "2,00 TL", "2,10 TL", "2,20 TL"],
      d: 2,
      a: "Tedavüldeki paylar = toplam sermaye − geri alınan paylar = 200 − 10 = **190 milyon** adet. HBK = 380.000.000 / 190.000.000 = **2,00 TL**. Toplam pay üzerinden hesaplansaydı 1,90 TL çıkardı. Geri alınan payların oy hakları donduğundan, genel kurul nisaplarında ve finansal analizlerde genellikle tedavüldeki paylar esas alınır.",
      k: "1003 resmi not s. 7"
    },
    {
      s: "Endeks hesaplamasında kullanılan **bölen değerinin (divisor)** amacı nedir?",
      c: ["Pay ekleme/çıkarma, bedelli artırım, temettü veya birleşme gibi işlemlerin endeksi yapay olarak değiştirmesini önlemek", "Endeksteki tek bir payın ağırlığını %10 ile sınırlayarak büyük şirketlerin endeksi domine etmesini engellemek", "Endeksi enflasyondan arındırarak payların reel değer değişimini göstermek", "Endeks değerini her işlem gününün başında yeniden 100'e eşitlemek", "Fiili dolaşımdaki payları, hâkim ortak ve kurucu paylarından ayırarak sınıflandırmak"],
      d: 0,
      a: "Bölen değeri, endeks bileşimindeki **teknik değişikliklerin** (pay ekleme/çıkarma, bedelli artırım, temettü, birleşme/bölünme) endeksi yapay olarak oynatmasını engeller. Böylece endeks yalnızca **fiyat hareketlerinden** etkilenir. Endeks değeri = fiili dolaşımdaki payların toplam piyasa değeri / bölen değeri.",
      k: "1003 resmi not s. 19"
    },
    {
      s: "Bir yatırımcı yıllardır 150 TL zirvesinden izlediği bir hissenin kötü bilanço sonrasında 90 TL'ye düştüğünü görür. Şirketteki bozulmayı incelemeden \"150 TL'den 90 TL'ye düştü, çok ucuzladı, yine 150 TL'ye döner\" diyerek alım yapar. Bu davranış hangi yanılgıya örnektir?",
      c: ["Çapalama (anchoring)", "Kayıptan kaçınma (loss aversion)", "Doğrulama yanlılığı (confirmation bias)", "Aşırı güven (overconfidence)", "Sürü psikolojisi (herding)"],
      d: 0,
      a: "Yatırımcı karar verirken ilk edindiği bilgiye, burada geçmiş zirve fiyatına, takılıp kalmış ve koşullar değişmesine rağmen bu **referans noktasını (çapayı)** değiştirmemiştir. Bu **çapalamadır**. Kayıptan kaçınma ise zarardaki pozisyonu kapatmaktan kaçınma eğilimidir.",
      k: "1003 resmi not s. 16–17"
    },
    {
      s: "BIST 100 **Ağırlık Sınırlamalı** endekslerinin (örneğin %10 veya %25 sınırlamalı) temel amacı nedir?",
      c: ["Tek bir hissenin endeksteki payına üst sınır getirerek bir şirketin endeksi domine etmesini engellemek", "Endeksi piyasa değeri yerine pay fiyatlarıyla ağırlıklandırarak, Dow Jones benzeri fiyat ağırlıklı bir yöntemle hesaplamak", "Fiili dolaşım oranı %25'in altındaki payları endeksten çıkarmak", "Endeksin bir gün içinde yükselip düşebileceği oranı %10 ile sınırlamak", "Temettüleri yeniden yatırılmış kabul ederek bir getiri endeksi oluşturmak"],
      d: 0,
      a: "Türkiye'deki temel endeksler fiili dolaşım piyasa değeri ağırlıklıdır; bu yüzden büyük şirketlerin ağırlığı çok artabilir. Ağırlık sınırlamalı endekslerde **tek bir hissenin payına tavan** konur ve bir şirketin endeksi domine etmesi engellenir. Fiyat ağırlıklı yönteme örnek ise Dow Jones Industrial Average'dır.",
      k: "1003 resmi not s. 19"
    },
    // --- Halka arz ve satış ---
    {
      s: "Payları ilk kez halka arz edilecek bir ortaklığın halka arz büyüklüğü 2026 yılı için belirlenen eşiğin (950.000.000 TL) altındadır. Ek satış hariç halka arz edilecek payların nominal değerinin **yüzde kaçına** karşılık gelen paylar \"satışa hazır\" bekletilir?",
      c: ["%10", "%15", "%20", "%25", "%30"],
      d: 3,
      a: "Halka arz büyüklüğü eşiğin altındaysa ek satış hariç halka arz edilecek payların nominal değerinin **%25'i** kadar pay, ortakların yeni pay alma hakları tamamen kısıtlanarak **satışa hazır bekletilir**. Amaç, fiyatı yükselten talebi ek hacimle karşılamak ve ortaklığa piyasa değerinden sermaye girişi sağlamaktır.",
      k: "1003 resmi not s. 30"
    },
    {
      s: "İlk halka arzda fiyat tespit raporunu hazırlayan, satışa aracılık eden kuruluşun hazırlaması gereken **değerlendirme raporlarıyla** ilgili hangisi doğrudur?",
      c: ["İşlem görmeye başladıktan sonraki bir yıl içinde en az iki rapor; ilki altı ay sonra, aralarında en az dört ay", "Halka arzdan önce tek bir rapor hazırlanır ve izahnameyle birlikte KAP'ta yayımlanır", "Raporlar Kurula gönderilir; kamuya ve yatırımcılara açıklanmaz", "İşlem görmeye başladıktan sonra beş yıl boyunca her ay düzenli olarak rapor hazırlanır", "Raporlarda şirketin finansal durumu değerlendirilir; halka arz fiyatı ile borsa fiyatı arasındaki farka yer verilmez"],
      d: 0,
      a: "Kuruluş, payların işlem görmeye başlamasından sonraki **bir yıl** içinde **en az iki** değerlendirme raporu hazırlar. İlki **altı ay** sonra yapılır, ikisi arasında **en az dört ay** olur. Raporlarda halka arz fiyatı ile borsa fiyatı arasındaki farkın nedenleri değerlendirilir; raporlar KAP'ta ve kuruluşun internet sitesinde yayımlanır.",
      k: "1003 resmi not s. 32"
    },
    {
      s: "Borsa dışında talep toplama yöntemiyle yapılan bir halka arzda yurt içi bireysel yatırımcılara 3.000 lot tahsis edilmiştir. Bu gruptan beş yatırımcı talepte bulunmuştur: A 200, B 500, C 700, D 900 ve E 1.200 lot. **Eşit dağıtım** yöntemine göre D yatırımcısı kaç lot alır?",
      c: ["600", "650", "700", "766", "800"],
      d: 4,
      a: "1. tur: 3.000 / 5 = 600. Talebi 600 ve altında olan A (200) ve B (500) tamamen karşılanır; kalan 3.000 − 700 = 2.300 lot.\n2. tur: 2.300 / 3 ≈ 766,7. C'nin talebi (700) bunun altında olduğundan tamamen karşılanır; kalan 1.600 lot.\n3. tur: 1.600 / 2 = **800**. D (900) ve E (1.200) 800'er lot alır. Toplam: 200 + 500 + 700 + 800 + 800 = 3.000 lot.",
      k: "1003 resmi not s. 37"
    },
    {
      s: "Halka arzda **eşit dağıtım** yöntemi uygulanırken bir yatırımcının birden fazla talepte bulunduğu (mükerrer talep) anlaşılırsa hangisi uygulanır?",
      c: ["Yatırımcının yalnızca en yüksek miktarlı talebi dikkate alınır.", "Yatırımcının tüm talepleri toplanarak dikkate alınır.", "Yatırımcının tüm talepleri iptal edilir.", "Yalnızca zaman olarak ilk verilen talep dikkate alınır.", "Talepler, oransal dağıtım yöntemine geçilerek karşılanır."],
      d: 0,
      a: "Tebliğ'in 22. maddesine göre eşit dağıtımda birden fazla talepte bulunan yatırımcının **yalnızca en yüksek miktarlı talebi** hesaplamaya alınır. Oransal dağıtımda veya talep yetersizse bu kural uygulanmaz.",
      k: "1003 resmi not s. 37"
    },
    {
      s: "Bedelli sermaye artırımında rüçhan hakları kullanıldıktan sonra kalan 20.000.000 TL nominal değerli paylar (pay başına nominal 1 TL), Borsa İstanbul Birincil Piyasası'nda 4,25 TL'den satılmıştır. Şirkete girecek **emisyon primi** ne kadardır?",
      c: ["32.500.000 TL", "65.000.000 TL", "80.000.000 TL", "85.000.000 TL", "105.000.000 TL"],
      d: 1,
      a: "Emisyon primi, ihraç fiyatı ile nominal değer arasındaki **olumlu farktır**: (4,25 − 1) × 20.000.000 = **65.000.000 TL**. 85.000.000 TL ise toplam satış hasılatıdır (4,25 × 20 milyon); bunun 20 milyon TL'si sermayeye, 65 milyon TL'si özkaynaklarda \"pay ihraç primi\"ne yazılır.",
      k: "1003 resmi not s. 6, 49"
    },
    {
      s: "Bir yatırımcı, payları borsada işlem gören bir ortaklığın yönetim kontrolünü ele geçirmiştir. Kontrolden önceki altı ayda paylara ödediği **en yüksek bedel 18,40 TL**, kontrolün duyurulmasından önceki altı aylık günlük düzeltilmiş ağırlıklı ortalama fiyatların **aritmetik ortalaması 19,10 TL**'dir. Zorunlu pay alım teklifi fiyatı en az ne olmalıdır?",
      c: ["17,00 TL", "18,40 TL", "18,75 TL", "19,10 TL", "37,50 TL"],
      d: 3,
      a: "Teklif fiyatı, altı ay içinde ödenen en yüksek bedel ve altı aylık ağırlıklı ortalama fiyatların aritmetik ortalaması esas alınarak hesaplanır ve **bu tutarların altına inemez**. İkisinden yüksek olan **19,10 TL** alt sınırdır. 18,75 TL iki tutarın ortalamasıdır; böyle bir kural yoktur.",
      k: "1003 resmi not s. 57"
    },
    // --- Borsa işleyişi ---
    {
      s: "Bir şirketin toplam piyasa değeri 7 milyar TL, fiili dolaşımdaki paylarının piyasa değeri 800 milyon TL, fiili dolaşım oranı %11'dir. Diğer kriterlerin sağlandığı varsayılırsa payları hangi pazarda işlem görür?",
      c: ["Ana Pazar", "Yıldız Pazar", "Alt Pazar", "Yakın İzleme Pazarı", "Girişim Sermayesi Pazarı"],
      d: 0,
      a: "Yıldız Pazar için piyasa değeri **> 6 milyar TL** ve fiili dolaşımdaki payların piyasa değeri **> 1 milyar TL** gerekir. Şirket ilkini sağlıyor ama FDPD 800 milyon TL olduğu için Yıldız'a giremez. Ana Pazar kriterlerini (PD > 1 milyar, FDPD > 400 milyon, FDO > %10) sağladığından **Ana Pazar**'da işlem görür. Her pay sınıflandırıldığı pazarın tüm kriterlerini sağlamalıdır.",
      k: "1003 resmi not s. 60"
    },
    {
      s: "Açılış seansında **piyasa** ve **piyasadan limite** emir girilebilmesiyle ilgili hangisi doğrudur?",
      c: ["Yalnızca Yıldız ve Ana Pazar paylarında (ve açılışa dâhil pay dışı araçlarda) girilebilir.", "Pazar ayrımı yapılmaksızın, açılış seansına katılan tüm pazarlardaki paylarda serbestçe girilebilir.", "Fiyat oluşumunu bozduğu için hiçbir pazarda açılış seansında girilemez.", "Yalnızca Alt Pazar ve Yakın İzleme Pazarı paylarında girilebilir.", "Kapanış seansında girilebilir; açılış seansında kabul edilmez."],
      d: 0,
      a: "25.09.2023'ten itibaren açılış seansında piyasa ve piyasadan limite emirler **Yıldız Pazar, Ana Pazar** ve açılış seansına dâhil pay dışındaki araçlarda girilebilir. **Yıldız ve Ana Pazar dışındaki paylarda** bu emir türlerine açılışta izin verilmez.",
      k: "1003 resmi not s. 62, 68"
    },
    {
      s: "Borsa İstanbul'daki **orta nokta (mid-point) emirlerinin** tutar sınırlarıyla ilgili hangisi doğrudur?",
      c: ["Asgari 100.000 TL, azami 30 milyon TL; kısmi gerçekleşmede kalan miktar değiştirilmedikçe alt sınır aranmaz.", "Asgari 10.000 TL olabilir; emir tutarı için herhangi bir üst sınır yoktur.", "Asgari 1 milyon TL, azami 100 milyon TL olabilir; kalan miktar için kısıt yoktur.", "Tutar sınırı yoktur; ancak BIST 30 endeksi dışındaki paylarda kullanılamaz.", "Asgari 100.000 TL'dir; kısmi gerçekleşmede kalan kısım bu tutarın altına düşerse emir kendiliğinden iptal edilir."],
      d: 0,
      a: "Orta nokta emirleri büyük işlemlerin piyasa derinliğini etkilemeden yapılmasını sağlar. Değeri **asgari 100.000 TL, azami 30 milyon TL** olabilir. Kısmi gerçekleşmede kalan kısım asgari sınırın altına düşse de, emrin kalan miktarı değiştirilmedikçe kısıt aranmaz.",
      k: "1003 resmi not s. 76"
    },
    // --- Borçlanma araçları ---
    {
      s: "Kuponu TLREF'e endeksli olarak her dönem yeniden hesaplanan **değişken faizli** bir tahvil, getiri sınıflandırmasında nereye konur ve neden?",
      c: ["Sabit getirili menkul kıymetlere; çünkü kuponun hesaplanma formülü ihraç anında sabitlenmiştir.", "Değişken getirili menkul kıymetlere; çünkü kupon tutarı her dönem değiştiği için getiri belirsizdir.", "Türev araçlara; çünkü getirisi bir referans orandan türetilir ve vadelidir.", "Hiçbir sınıfa girmez; mevzuatta ayrı bir \"karma araçlar\" sınıfı oluşturur.", "Pay benzeri araçlara; çünkü getirisi ihraççı şirketin kârlılığına bağlıdır."],
      d: 0,
      a: "Sabit getirili ifadesindeki \"sabitlik\" getirinin rakamsal kesinliğinden değil, nakit akışını belirleyen **formülün ve ödeme takviminin sözleşmeyle önceden sabitlenmesinden** gelir. Değişken faizli tahvilde kupon değişse de referans oran (ör. TLREF) ihraçta belirlendiği için araç **sabit getirili** sınıfta yer alır. Paylarda ise getiri şirketin kârlılığına bağlıdır.",
      k: "1003 resmi not s. 88"
    },
    {
      s: "Piyasa faiz oranları sert biçimde yükseldiğinde, **sabit kuponlu** ve **değişken kuponlu** tahvillerin fiyatları için hangisi beklenir?",
      c: ["Sabit kuponlunun fiyatı düşer; değişken kuponlunun kuponu güncellendiğinden fiyatı çok daha az etkilenir.", "Her iki tahvilin fiyatı da yükselir; çünkü yeni kuponlar daha yüksek olacaktır.", "Sabit kuponlunun fiyatı yükselir, çünkü sabit nakit akışı daha değerli hale gelir; değişken kuponlunun fiyatı sert düşer.", "Değişken kuponlu tahvil faiz riskini tamamen taşıdığından fiyatı en çok o düşer.", "Kupon nominal değer üzerinden hesaplandığından iki tahvilin fiyatı da değişmez."],
      d: 0,
      a: "Sabit kuponlu araçta kupon ihraçta belirlenir ve değişmez; faizler yükselince piyasaya göre düşük kuponlu kalan tahvilin **fiyatı düşer** (faiz oranı riski, vade uzadıkça artar). Değişken kuponlu araçta kupon bir **formüldür**; her dönem referans orana göre yeniden hesaplanır, bu yüzden fiyat faiz şokundan çok daha az etkilenir.",
      k: "1003 resmi not s. 90"
    },
    // --- Yatırım fonları ---
    {
      s: "Para piyasası fonlarıyla ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Fon toplam değerinin %50'sine kadar vadeli mevduat veya katılma hesabı taşıyabilir.\nII. Konvansiyonel bir para piyasası fonunda tek bir bankada değerlendirilebilecek tutar fon toplam değerinin %6'sını geçemez.\nIII. Unvanında \"katılım\" ibaresi bulunmayan para piyasası fonları portföylerinin asgari %10'unu DİBS'te değerlendirmek zorundadır.",
      c: ["Yalnız I", "I ve II", "I ve III", "II ve III", "I, II ve III"],
      d: 4,
      a: "Üç ifade de doğrudur. Para piyasası fonları **%50'ye kadar** mevduat/katılma hesabı taşıyabilir; tek bankada sınır konvansiyonel fonlarda **%6**, para piyasası katılım fonlarında **%20**'dir. Katılım fonları hariç para piyasası fonları portföyün **asgari %10'unu DİBS**'te tutar. Kısa vadeli borçlanma araçları fonları ise genel kurala tabidir: mevduatta en fazla %10, tek bankada en fazla %3.",
      k: "1003 resmi not s. 138, 150"
    },
    {
      s: "Yatırım fonlarında **risk değerinin güncellenmesiyle** ilgili hangisi doğrudur?",
      c: ["Son dört ayda birden fazla kategori görülmüşse, en sık yer alınan kategori esas alınır.", "Risk değeri yılda bir kez, hesap dönemi sonunda güncellenir.", "Haftalık hesaplamada farklı bir kategori çıktığı anda risk değeri aynı gün değiştirilir.", "Yatırım stratejisi değişse bile risk değeri en az dört ay boyunca değiştirilemez.", "Risk değeri izahnamede bir kez belirlenir ve fonun ömrü boyunca sabit kalır."],
      d: 0,
      a: "Fonlar son **dört ay** içinde haftalık hesaplanan volatilite sonuçlarını değerlendirir. Bu dönemdeki risk değerleri mevcut kategoriden farklıysa güncelleme zorunludur. Birden fazla kategori arasında değişim varsa **en sık yer alınan kategori** esas alınır. Değişiklik **yatırım stratejisinden** kaynaklanıyorsa kurucu risk değerini bu stratejiye göre yeniden belirler.",
      k: "1003 resmi not s. 160"
    },
    {
      s: "**Serbest fonların** kaldıraç ve işlem esnekliğiyle ilgili hangisi doğrudur?",
      c: ["KAP'ta ilan ettikleri limitler içinde genel sınırlara tabi olmadan kaldıraç kullanabilir; açığa satış ve kredili işlem yapabilirler.", "Kaldıraç kullanmaları yasaktır; risk alma kapasiteleri açığa satış ve türev araçlarla, Kurulca belirlenen sınırlar içinde artırılabilir.", "Standart yatırım fonlarıyla aynı kaldıraç ve borçlanma sınırlarına tabidirler.", "Açığa satış yapabilirler, ancak kredili menkul kıymet işlemi yapamazlar.", "Kaldıraç kullanabilmek için her işlemde Kurulun ayrı onayını almaları gerekir."],
      d: 0,
      a: "Rehber'in 7.9. maddesiyle serbest fonlar standart fonların kaldıraç sınırlamalarından **muaf** tutulmuştur. Yönetici, risk yönetim prosedürlerinde belirleyip **KAP'ta ilan ettiği limitler** içinde kaldıraç kullanabilir. Standart fonlara kapalı olan **açığa satış ve kredili işlemler** de serbest fonların stratejisinde yer alabilir.",
      k: "1003 resmi not s. 150"
    },
    // --- Türev araçlar ---
    {
      s: "Bir pay vadeli işlem sözleşmesi, taşıma maliyetiyle hesaplanan **teorik fiyatının belirgin biçimde üzerinde** işlem görmektedir. Arbitrajcı risksiz kâr için ne yapar?",
      c: ["Spot piyasada payı alır, eşzamanlı olarak vadeli piyasada kısa pozisyon açar.", "Spot piyasada payı açığa satar, vadeli piyasada uzun pozisyon açar.", "Hem spot hem vadeli piyasada uzun pozisyon açar.", "Vadeli piyasada uzun pozisyon açar, spot piyasada işlem yapmaz.", "Vade sonunu bekler ve fiziki teslimat ister."],
      d: 0,
      a: "Kural \"pahalıyı sat, ucuzu al\"dır. Vadeli fiyat teorik fiyatın üzerindeyse arbitrajcı **spot piyasadan varlığı alır** ve **vadeli piyasada satar (kısa pozisyon)**. Vade sonunda spot ve vadeli fiyat birbirine yaklaştığından aradaki fark risksiz kâr olur. Bu işlemler sapmayı da ortadan kaldırır.",
      k: "1003 resmi not s. 179"
    },
    {
      s: "VİOP'ta gün içi fiyat dalgalanmaları nedeniyle bir hesabın teminatı **gün içi sürdürme seviyesinin altına** inmiştir. Bu durumda hangisi olur?",
      c: ["Bekleyen pasif emirler otomatik iptal edilir ve pozisyon artırıcı emir iletimi engellenir.", "Hesaptaki tüm pozisyonlar Takasbank tarafından derhal ve tamamen re'sen kapatılır.", "Hesaba hemen teminat tamamlama çağrısı yapılır ve ertesi gün 15:00'e kadar süre verilir.", "Gün içinde hiçbir işlem yapılmaz; teminat kontrolü gün sonunda yapılır.", "Hesap pozisyon artırıcı emir verebilir; mevcut pozisyonlarını kapatamaz."],
      d: 0,
      a: "Teminat gün içi sürdürme seviyesinin altına inerse hesap **riskli** sayılır: **bekleyen pasif emirler anında iptal edilir** ve yalnızca pozisyon azaltıcı işlemlere izin verilir. Yatırımcı teminat yatırarak veya ters işlemle pozisyonunu azaltarak seviyeyi aşarsa engel kalkar. Teminat tamamlama çağrısı gün içi kontrolle değil, **gün sonu** değerlemesiyle ilgilidir.",
      k: "1003 resmi not s. 167, 170"
    },
    {
      s: "Bir yatırımcı kullanım fiyatı 60 TL olan bir **satım (put) opsiyonunu** 3 TL prim ödeyerek almıştır. Vade sonunda dayanak varlığın spot fiyatı 50 TL'dir. Yatırımcının pay başına **net** kârı ne kadardır?",
      c: ["3 TL", "7 TL", "10 TL", "13 TL", "50 TL"],
      d: 1,
      a: "Kullanım fiyatı (60) spot fiyattan (50) yüksek olduğundan satım opsiyonu **kârdadır** ve kullanılır. Brüt kazanç = 60 − 50 = 10 TL; net kâr = 10 − 3 (prim) = **7 TL**. Spot fiyat 60 TL'nin üzerinde kalsaydı yatırımcı opsiyonu kullanmaz, zararı ödediği primle (3 TL) sınırlı kalırdı.",
      k: "1003 resmi not s. 181–182"
    },
    // --- Vergilendirme ---
    {
      s: "Tam mükellef gerçek kişi bir yatırımcı, 2025 yılında tam mükellef kurumlardan **brüt 700.000 TL** kâr payı elde etmiştir (2025 beyan haddi 330.000 TL). Hangisi doğrudur?",
      c: ["Yarısı (350.000 TL) istisnadır; kalan tutar beyan haddini aştığından beyan edilir, tevkifat mahsup edilir.", "Kâr payının tamamı gelir vergisinden istisnadır; bu nedenle beyanname verilmez.", "Kâr payı geçici 67. madde kapsamında %0 tevkifata tabidir; bu nedenle tutarı ne olursa olsun ayrıca beyan gerekmez.", "Kâr payının tamamı beyan edilir ve kaynakta kesilen tevkifat mahsup edilemez.", "Kâr payının yarısı istisnadır; kalan tutar beyan haddini aşsa da beyan edilmez."],
      d: 0,
      a: "Tam mükellef kurumlardan elde edilen kâr paylarının **yarısı** gelir vergisinden istisnadır. İstisna sonrası kalan 350.000 TL, 2025 beyan haddi olan **330.000 TL'yi aştığından** yıllık beyanname verilir ve kaynakta kesilen tevkifat hesaplanan vergiden **mahsup edilir**. Hisse senedi kâr payları geçici 67. maddenin kapsamı dışındadır.",
      k: "1003 resmi not s. 188"
    },
    {
      s: "Geçici 67. madde uygulamasında zarar mahsubu için kullanılan **\"aynı tür\" sınıflandırmasına** göre, BIST 30 endeksine dayalı bir vadeli işlem sözleşmesinden doğan zarar hangi gruptaki kazançlardan mahsup edilebilir?",
      c: ["Hisse senetlerinin bulunduğu II. grup (değişken getirili menkul kıymetler)", "Devlet tahvillerinin bulunduğu I. grup (sabit getirili menkul kıymetler)", "Diğer türev araçların bulunduğu ayrı bir türev grubu", "IV. grup (yatırım fonu katılma belgeleri ve yatırım ortaklığı payları)", "Hiçbir gruptan mahsup edilemez."],
      d: 0,
      a: "Sınıflandırma dört gruptan oluşur: I sabit getirili, II değişken getirili, III diğer, IV fon katılma belgeleri ve yatırım ortaklığı payları. Hisse senedine veya **hisse senedi endeksine dayalı** vadeli işlem ve opsiyonlar, bunlara dayalı aracı kuruluş varantları ve hisse senedi yoğun fonlar **hisse senetleriyle aynı grupta** değerlendirilir. Menkul kıymete bağlı olmayan türevler ise III. gruptadır.",
      k: "1003 resmi not s. 187"
    },
    {
      s: "Geçici 67. maddeye göre aşağıdaki gelirlerden hangisi **tevkifat kapsamında değildir?**",
      c: ["Portföyünün sürekli en az %51'i BIST hisselerinden oluşan bir fonun, bir yıldan uzun tutulan paylarının satış kazancı", "Altı ay elde tutulan bir borçlanma araçları fonunun katılma payı satış kazancı", "Tam mükellef bir şirketin yurt içinde ihraç ettiği, bir yıldan uzun süre elde tutulan tahvilin faiz geliri", "Borsada veya borsa dışında yapılan repo işlemlerinden elde edilen gelir", "Döviz üzerine yazılmış bir vadeli işlem sözleşmesinden elde edilen kazanç"],
      d: 0,
      a: "Portföyünün sürekli olarak **en az %51'i BIST hisse senetlerinden** oluşan fonların **bir yıldan fazla** elde tutulan katılma paylarının satış kazançları tevkifat kapsamında değildir; TEFAS'ta işlem görmeyen serbest fonlar bu istisnanın dışındadır. Aynı istisna, BIST'te işlem gören tam mükellef kurum hisselerinin bir yıldan fazla elde tutulup satılmasında da geçerlidir. Vergi düzenlemeleri sık değiştiğinden sınav öncesinde güncel GİB rehberine bakılmalıdır.",
      k: "1003 resmi not s. 185, 197"
    },
    {
      s: "Hazine ve Maliye Bakanlığınca ihraç edilen **altına dayalı devlet iç borçlanma senetlerinden** gerçek kişilerin elde ettiği kazançlara geçici 67. madde kapsamında uygulanan tevkifat oranı nedir?",
      c: ["%0", "%5", "%10", "%15", "%17,5"],
      d: 0,
      a: "Altına dayalı DİBS'ler 2017/10840 sayılı Bakanlar Kurulu Kararı gereği **%0** tevkifata tabidir. 4749 sayılı Kanuna göre kurulan varlık kiralama şirketlerinin altına dayalı kira sertifikalarında da oran %0'dır. Vergi oranları sık değiştiğinden sınav öncesinde güncel GİB rehberine bakılmalıdır.",
      k: "1003 resmi not s. 189, 191"
    },
    // --- İkinci deneme seti ---
    {
      s: "6102 sayılı Türk Ticaret Kanunu ile anonim şirketlerde **kaldırılan** organ hangisidir?",
      c: ["Murakıplık (denetim kurulu)", "Genel kurul", "Yönetim kurulu", "Bağımsız denetim", "Denetimden sorumlu komite"],
      d: 0,
      a: "Eski Ticaret Kanunu'ndaki **murakıplık (denetim kurulu)** organı 6102 sayılı TTK ile kaldırılmıştır. Denetim bugün dışsal güvence olan **bağımsız denetim** ve yönetim kurulu bünyesindeki komitelerle yürütülür; komiteler birer organ değildir.",
      k: "1003 resmi not s. 3"
    },
    {
      s: "Bir anonim şirketin tasfiyesi halinde **borçlanma aracı sahipleri** ile **pay sahiplerinin** ödeme sırası için hangisi doğrudur?",
      c: ["Borçlanma aracı sahipleri, pay sahiplerinden önce ödeme alır.", "Pay sahipleri, borçlanma aracı sahiplerinden önce ödeme alır.", "İki grup aynı anda ve alacakları oranında ödeme alır.", "Ödeme sırasını tasfiye memurunun takdiri belirler.", "Pay sahipleri, devlet borçlarından da önce ödeme alır."],
      d: 0,
      a: "Borçlanma ile özkaynak finansmanı arasındaki kritik fark tasfiye veya iflastaki **kıdem sırasıdır**: devlet borçları, çalışan hakları ve **borçlanma aracı sahipleri (alacaklılar)**, pay sahiplerinden **önce** ödeme alır. Pay sahibi en son sıradadır.",
      k: "1003 resmi not s. 3"
    },
    {
      s: "Payların MKK nezdinde **kayden izlenmesi zorunluluğundan** Kurulca kapsam dışı bırakılan ortaklıklar hangisinde doğru verilmiştir?",
      c: ["Borsada işlem görmeyip ortak sayısı nedeniyle halka açık sayılanlar ve kooperatif kontrolündekiler", "Payları borsada işlem gören ve çıkarılmış sermayesi 1 milyar TL'nin altında kalan halka açık ortaklıklar", "Payları Yıldız Pazar dışındaki pazarlarda işlem gören tüm halka açık ortaklıklar ve bağlı ortaklıkları", "Bankacılık Kanunu'na tabi olan ve payları borsada işlem gören ortaklıklar ile bunların iştirakleri", "Payları nitelikli yatırımcıya satılan ve Girişim Sermayesi Pazarı'nda işlem gören ortaklıklar"],
      d: 0,
      a: "Kanun bazı halka açık ortaklıkları kaydileştirmeden muaf tutmuştur: payları **borsada işlem görmeyen ve sadece ortak sayısı nedeniyle** halka açık sayılan ortaklıklar ile **kooperatiflerin yönetim kontrolüne sahip olduğu** halka açık ortaklıklar.",
      k: "1003 resmi not s. 10"
    },
    {
      s: "İzahnamedeki yanlış, yanıltıcı ve eksik bilgilerden doğan zararlardan **birincil olarak** kim sorumludur?",
      c: ["İhraççı", "Halka arza aracılık eden lider yetkili kuruluş", "Sermaye Piyasası Kurulu", "İhraççının bağımsız denetim kuruluşu", "Garantör"],
      d: 0,
      a: "Birincil sorumlu **ihraççıdır**. Zarar ihraççıdan tazmin edilemez veya edilemeyeceği açıkça belli olursa halka arz edenler, lider yetkili kuruluş, varsa garantör ve yönetim kurulu üyeleri kusurlarına göre sorumlu tutulabilir. Rapor hazırlayan kuruluşlar kendi raporlarından sorumludur.",
      k: "1003 resmi not s. 26"
    },
    {
      s: "Halka arza ilişkin tanıtım ve reklamlarda **halka arz fiyatına** yer veriliyorsa hangi husus açıkça vurgulanmalıdır?",
      c: ["Fiyatın belirlenmesinde Kurulun takdir yetkisinin veya onayının bulunmadığı", "Fiyatın Kurul tarafından adil bulunarak onaylandığı", "Fiyatın halka arzdan sonra en az bir yıl korunacağı", "Fiyatın borsa tarafından garanti altına alındığı", "Fiyatın, değerleme raporunda ulaşılan değerlerin en düşüğünü yansıttığı ve iskonto içerdiği"],
      d: 0,
      a: "Reklamlarda halka arz fiyatı yer alıyorsa, fiyatın belirlenmesinde **Kurulun herhangi bir takdir yetkisinin ya da onayının bulunmadığı** açıkça vurgulanır. Ayrıca yatırım kararının izahnamenin incelenmesiyle verilmesi gerektiği uyarısı zorunludur.",
      k: "1003 resmi not s. 26"
    },
    {
      s: "İlk halka arzda **sermaye artırımı yoluyla** ve **mevcut payların satışı yoluyla** yapılan halka arzlarda toplanan fon nereye gider?",
      c: ["Sermaye artırımında ortaklığın kasasına, pay satışında satan ortaklara", "Her iki yöntemde de ortaklığın kasasına", "Her iki yöntemde de payları satan ortaklara", "Sermaye artırımında ortaklara, pay satışında ortaklığın kasasına", "Her iki yöntemde de halka arza aracılık eden yetkili kuruluşa"],
      d: 0,
      a: "**Sermaye artırımı** yoluyla halka arzda yeni paylar ihraç edildiğinden fon **ortaklığın kasasına** girer. **Mevcut payların satışında** ise paylarını satan **ortaklar** fonu alır. İki yöntem birlikte de kullanılabilir.",
      k: "1003 resmi not s. 28"
    },
    {
      s: "Pay Tebliği'ne göre **şarta bağlı sermaye artırımı** ile ilgili hangisi doğrudur?",
      c: ["Yapılabilmesi için yeni pay alma haklarının tamamen kısıtlanması gerekir.", "Kayıtlı sermaye sisteminde bulunmayan ortaklıklar da bu artırımı yapabilir.", "Yeni pay alma hakları kısmen kısıtlanarak da gerçekleştirilebilir.", "Halka açık olmayan ortaklıklar çalışan programları için de Kurula başvurur.", "Ortak sayısı beş yüzü aşsa da Pay Tebliği'nin ilgili hükümleri uygulanmaz."],
      d: 0,
      a: "Şarta bağlı sermaye artırımı **kayıtlı sermaye sistemindeki halka açık ortaklıklarca** yapılır ve **yeni pay alma haklarının tamamen kısıtlanması** gerekir. Halka açık olmayanların çalışanlara pay edindirme programları için Kurula başvuru gerekmez. Ortak sayısı 500'ü aşarsa \"ortak sayısı nedeniyle halka açık sayılan\" ortaklık hükümleri uygulanır.",
      k: "1003 resmi not s. 31"
    },
    {
      s: "Payların halka arzında **ön talep toplama** ile ilgili hangisi doğrudur?",
      c: ["En fazla on iş günü sürer ve sonuçları kamuya açıklanamaz.", "İzahname onaylandıktan sonra yapılır ve toplanan talepler kesindir.", "En fazla beş iş günü sürer; sonuçları reklamda kullanılabilir.", "Payların ikincil halka arzında ön talep toplanması yasaktır.", "Toplanan talepler yatırımcı açısından bağlayıcı bir yükümlülük doğurur."],
      d: 0,
      a: "Ön talep toplama, izahnamenin **onaylanmasından önce** ve hiçbir yükümlülük doğurmadan yapılan bir **ankettir**. Süresi **on iş gününden** fazla olamaz; sonuçları **kamuya açıklanamaz** ve reklam amacıyla kullanılamaz. İlk ve ikincil halka arzlarda uygulanabilir.",
      k: "1003 resmi not s. 31"
    },
    {
      s: "Payları borsada işlem gören bir ortaklığın borsada işlem görmeyen nitelikteki payları, Kurul aksini bildirmedikçe MKK duyurusundan itibaren ne kadar süre sonra **satılabilir?**",
      c: ["2 iş günü", "3 iş günü", "5 iş günü", "7 iş günü", "10 iş günü"],
      d: 0,
      a: "Dönüşüm talebi MKK üyesi yetkili kuruluşlar aracılığıyla MKK'ya yapılır; MKK başvuruları günlük olarak toplu halde KAP'ta duyurur. Kurul aksini bildirmedikçe paylar MKK duyurusundan itibaren **iki iş gününden sonra** satılabilir.",
      k: "1003 resmi not s. 33"
    },
    {
      s: "Halka arzda **dağıtımdan pay alan yatırımcıların** payları borsa dışında satamayacağı süre ile **mevcut ortakların** paylarına uygulanan satış kısıtının süresi sırasıyla hangisidir?",
      c: ["60 gün / 90 gün", "90 gün / 180 gün", "90 gün / 360 gün", "180 gün / 180 gün", "180 gün / 360 gün"],
      d: 1,
      a: "Dağıtımdan pay alan yatırımcılar, paylar hesaplarına geçtikten itibaren **90 gün** boyunca payları borsa dışında satamaz, virmanlayamaz. Mevcut ortaklar için kısıtlama izahname onay tarihinden itibaren **180 gün** sürer ve **borsada satışı da** kapsar.",
      k: "1003 resmi not s. 41"
    },
    {
      s: "TSPB Halka Arz İlkeleri'ne göre üyeler, bir halka arza yurt içinde ve yurt dışında **yeterli talep oluşmazsa** neyi tercih eder?",
      c: ["Halka arz tutarını küçültmek yerine halka arzı iptal etmeyi ya da ertelemeyi", "Fiyat aralığını genişleterek talep toplamayı sürdürmeyi", "Satılamayan kalan payları kendi portföylerine alarak halka arzı planlanan tutarda tamamlamayı", "Tahsisat oranlarını kurumsal yatırımcılar lehine değiştirmeyi", "Talep toplama süresini Kurul onayı olmadan uzatmayı"],
      d: 0,
      a: "İlkelere göre üyeler yeterli talep oluşmazsa **halka arz tutarını küçültmek yerine** halka arzı **iptal etmeyi veya ertelemeyi** tercih eder. Ayrıca fiyat aralığını dar tutar ve yeterli talep varken tahsisat kaydırması yapmazlar.",
      k: "1003 resmi not s. 41"
    },
    {
      s: "Bedelli sermaye artırımında **Rüçhan Hakkı Pazarı** kapandıktan sonra hak kullanım süresi devam ediyorsa yatırımcı ne yapabilir?",
      c: ["Borsada hak satamaz ama bedeli yatırarak artırıma katılabilir.", "Hakları borsa dışında başka yatırımcılara satmaya devam edebilir.", "Hakkı kendiliğinden düşer ve artırıma katılamaz.", "Haklarını şirkete nominal değer üzerinden geri satabilir.", "Artırıma katılmak için Kurul'dan ayrıca izin almalıdır."],
      d: 0,
      a: "Rüçhan Hakkı Pazarı genellikle hak kullanım süresinin **ilk 5-7 iş günü** açıktır (kapanış günü süre sonundan önceki 5. iş günüdür). Pazar kapanınca yatırımcı **borsada satış yapamaz**, ama süre bitene kadar bedeli yatırarak **artırıma katılabilir**. Rüçhan hakkı kullanımı izahnamenin ilanını izleyen 10 gün içinde başlatılmalıdır.",
      k: "1003 resmi not s. 46"
    },
    {
      s: "Payları borsada işlem gören ortaklıklarda aşağıdakilerden hangisi iç kaynaklardan sermaye artırımında **sermayeye ilave edilemez?**",
      c: ["Ara dönemde oluşan dönem kârları", "Geçmiş yıl kârları", "Olağanüstü yedek akçeler", "Emisyon primi (paylara ilişkin primler)", "Kâr yedekleri"],
      d: 0,
      a: "Sermayeye ilave edilemeyen kalemler: gerçeğe uygun değere taşınmadan doğan **değer artış fonları**, **ara dönemde oluşan dönem kârları** ve mevzuatın izin vermediği fon ve yedekler. Ayrıca düzeltilmiş borsa fiyatını **2 TL'nin altına** düşürecek başvurular işleme alınmaz.",
      k: "1003 resmi not s. 51"
    },
    {
      s: "Borsa İstanbul'da paylar **Yakın İzleme Pazarı'na (YİP)** nasıl alınır veya bu pazardan nasıl çıkarılır?",
      c: ["Borsa İstanbul Yönetim Kurulu kararıyla", "Sermaye Piyasası Kurulu kararıyla", "Şirket yönetim kurulunun başvurusuyla", "MKK'nın bildirimiyle", "Pay sahiplerinin çoğunluğunun talebiyle"],
      d: 0,
      a: "YİP, olağandışı durumları tespit edilen şirketlerin paylarının yatırımcıyı korumak için işlem gördüğü pazardır. Kotasyon Yönergesi md. 35'teki haller (ör. olumsuz denetim görüşü, 5 yıl üst üste zarar) oluşursa paylar alınabilir. Alınma ve çıkarılma **Borsa İstanbul Yönetim Kurulu kararıyla** olur.",
      k: "1003 resmi not s. 61"
    },
    {
      s: "**Girişim Sermayesi Pazarı (GSP)** ile ilgili hangisi doğrudur?",
      c: ["Bu pazarda işlemler nitelikli yatırımcılar arasında yapılır.", "Halka arz edilen payların ilk işlem gördüğü pazardır.", "Bireysel yatırımcılar risk bildirim formu imzalayarak işlem yapabilir.", "Paylar bu pazarda tek fiyat yöntemiyle işlem görür.", "Payları borsada işlem görmeyen halka açık ortaklıklar için kurulmuştur."],
      d: 0,
      a: "GSP'de halka arz edilmeksizin **nitelikli yatırımcılara** satılmak üzere ihraç edilen paylar işlem görür ve işlemler yalnızca nitelikli yatırımcılar arasında yapılır. Üye, müşterisinin nitelikli yatırımcı olduğunu bilmek ve belgelemek zorundadır. GSP'de sürekli işlem yöntemi uygulanır; borsada işlem görmeyen halka açık ortaklıklar için kurulan platform PÖİP'tir.",
      k: "1003 resmi not s. 61, 67"
    },
    {
      s: "Tek fiyat işlem yönteminin uygulandığı sermaye piyasası araçlarında, açılış ve kapanış seansları dahil günde **kaç kez** fiyat belirlenir?",
      c: ["1 kez", "2 kez", "3 kez", "4 kez", "5 kez"],
      d: 4,
      a: "Tek fiyat yönteminde, açılış ve kapanış seansları dahil olmak üzere günde **5 kez** fiyat belirlenir ve işlemler bu fiyatlardan gerçekleşir. PÖİP ve YİP'teki paylar bu yöntemle işlem görür; Yıldız, Ana, Alt Pazar ve GSP'de sürekli işlem (çok fiyat) yöntemi uygulanır.",
      k: "1003 resmi not s. 67"
    },
    {
      s: "Tek fiyat yönteminde **dengeleyici emirler** ile ilgili hangisi doğrudur?",
      c: ["Fiyat belirlemede hesaba katılmaz, kalan emirlerle eşleşmek için girilir.", "Fiyat belirleme sürecinde piyasa emirlerinden önce dikkate alınır.", "Eşleşmeyen dengeleyici emirler bir sonraki seansa aktarılır.", "Aralarındaki öncelik, emir fiyatına göre belirlenir.", "Sadece kapanış seansında girilebilir."],
      d: 0,
      a: "Dengeleyici emirler, **fiyat belirlemede hesaba katılmayan** ama belirlenen eşleşme fiyatında karşılanmadan kalan emirlerle işlem yapmak üzere girilen emirlerdir. İşlem görme sırasında en sondadırlar; aralarındaki öncelik **giriş zamanına** göredir ve eşleşmeyenler **iptal edilir**.",
      k: "1003 resmi not s. 71"
    },
    {
      s: "Şirket finansmanında borçlanma aracı ihracının **banka kredisine** göre özellikleri için hangisi doğrudur?",
      c: ["Çoğunlukla teminatsızdır; ancak Kurul ücreti gibi ek maliyetler doğurur.", "Her zaman ipotek veya rehin gibi maddi teminat verilmesini gerektirir.", "Banka kredisine göre daha kısa süren ve daha az prosedürlü bir süreçtir.", "Kupon faizi dışında ihraççıya herhangi bir ek maliyet doğurmaz.", "Vadeleri, banka kredilerine göre daha kısa ve kalıplara sıkışmıştır."],
      d: 0,
      a: "Borçlanma araçları (teminatlı menkul kıymetler gibi istisnalar hariç) çoğunlukla **teminatsız** ihraç edilir ve daha **uzun vadelere** erişim sağlar. Ancak aracılık komisyonu, derecelendirme ücreti, **Kurul ücreti**, MKK, KAP ve borsa kotasyon ücretleri gibi ek maliyetleri vardır; süreç daha uzun ve prosedürlüdür.",
      k: "1003 resmi not s. 89"
    },
    {
      s: "**TÜFE'ye Endeksli Anüite Devlet Tahvilleri** ile ilgili hangisi doğrudur?",
      c: ["Doğrudan satışla ihraç edilir ve reel taksit tutarı vade boyunca sabittir.", "İhale yöntemiyle ve kuponsuz olarak ihraç edilir.", "Anaparanın tamamı vade sonunda tek seferde ödenir.", "Genellikle 2 yıl vadeli ve yılda bir kupon ödemelidir.", "Temel amacı bireysel yatırımcıların kısa vadeli likidite ihtiyacıdır."],
      d: 0,
      a: "Anüite tahvilleri **parçalı itfanın** (dengeli borç servisi) örneğidir: **reel taksit tutarı sabit** olup her taksit anapara ve faiz içerir. Genellikle **30 yıl vadeli, 3 ayda bir** ödemeli olup **doğrudan satış** yöntemiyle ihraç edilir. Amaç, sigorta ve emeklilik şirketlerinin yıllık gelir sigortası yükümlülükleridir.",
      k: "1003 resmi not s. 92"
    },
    {
      s: "Aşağıdaki tahvillerin hangisinde **kupon faizi yeniden yatırım riski** bulunmaz?",
      c: ["Kuponsuz (iskontolu) tahvil", "Yüksek kuponlu, uzun vadeli tahvil", "Değişken faizli tahvil", "Üç ayda bir kupon ödeyen devlet tahvili", "Yılda iki kez kupon ödeyen özel sektör tahvili"],
      d: 0,
      a: "Yeniden yatırım riski, tahsil edilen kuponların daha düşük oranlardan değerlendirilmek zorunda kalınmasıdır; **yüksek kuponlu ve uzun vadeli** tahvillerde belirgindir. **Kuponsuz (iskontolu)** tahvillerde ara nakit akışı olmadığından bu risk **yoktur**.",
      k: "1003 resmi not s. 98"
    },
    {
      s: "Merkez Bankası **kısa vadeli faizleri artırırken** uzun vadeli tahvil faizleri **düşüyorsa**, bu durum getiri eğrisi açısından genellikle neyi gösterir?",
      c: ["Piyasanın, enflasyonun orta-uzun vadede kontrol altına alınacağına inandığını", "Para politikasının piyasa tarafından inandırıcı bulunmadığını", "Ülke kredi notunun yakın dönemde düşürüleceğinin ve risk priminin artacağının beklendiğini", "Uzun vadeli faizlerin merkez bankasınca doğrudan belirlendiğini", "Enflasyon beklentilerinin hızla yükseldiğini"],
      d: 0,
      a: "Getiri eğrisi, Merkez Bankası için bir geri bildirim aracıdır. Kısa faizler artarken uzun vadeli faizlerin düşmesi, piyasa aktörlerinin **enflasyonun orta-uzun vadede kontrol altına alınacağına inandığını** gösterir. Uzun vadeli faizlerde MB etkisi dolaylıdır, beklentiler baskındır.",
      k: "1003 resmi not s. 105, 118"
    },
    {
      s: "SPKn md. 3-1/m'deki **kolektif yatırım kuruluşu** tanımına hangileri girer?",
      c: ["Yatırım fonları ve yatırım ortaklıkları", "Portföy yönetim şirketleri ve yatırım fonları", "Portföy saklama kuruluşları ve yatırım ortaklıkları", "Aracı kurumlar ve portföy yönetim şirketleri", "Yatırım fonları, portföy yönetim şirketleri ve saklayıcılar"],
      d: 0,
      a: "SPKn md. 3-1/m'ye göre kolektif yatırım kuruluşları **yatırım fonları** ve (değişken sermayeliler dahil) **yatırım ortaklıklarıdır**. Portföy yönetim şirketleri ve portföy saklama kuruluşları sürecin parçasıdır ama bu tanıma dahil değildir.",
      k: "1003 resmi not s. 132"
    },
    {
      s: "**Eurobond fonlarının** unvanı ve riskleriyle ilgili hangisi doğrudur?",
      c: ["Unvanlarında \"(Döviz)\" ibaresi olur ama ihraççı yerli olduğundan \"Yabancı\" ibaresi bulunmaz.", "İhraççıları yabancı olduğu için unvanlarında \"Yabancı\" ibaresi bulunur.", "Getirileri döviz kurundan etkilenmez, ülke risk primine bağlıdır.", "Kredi riski ihmal edilebilir düzeyde olduğundan fonun fiyatını belirleyen ana risk likidite riskidir.", "Fiyatlama dinamikleri en basit borçlanma aracı fonu grubudur."],
      d: 0,
      a: "Eurobond fonları T.C. Hazinesi veya Türk şirketlerinin döviz cinsi tahvillerine yatırım yapar. Unvanlarında **\"(Döviz)\"** ibaresi bulunur; ihraççı yerli olduğundan **\"Yabancı\"** ibaresi yoktur. Fiyatlamaları en karmaşıktır: **döviz kuru, ülke risk primi (CDS) ve küresel faizler**.",
      k: "1003 resmi not s. 142"
    },
    {
      s: "Serbest yatırım fonları, gayrimenkul yatırım fonları ve girişim sermayesi yatırım fonlarına fon toplam değerinin **en fazla yüzde kaçı** oranında yatırım yapabilir?",
      c: ["%25", "%30", "%40", "%50", "%75"],
      d: 0,
      a: "Serbest fonlar, gayrimenkul ve girişim sermayesi yatırım fonlarına fon toplam değerinin **en fazla %25'i** oranında yatırım yapabilir. Katılma payları sadece **nitelikli yatırımcılara** satılabilir; portföyünün en az %80'ini sürekli BİAŞ paylarında tutan serbest fon \"hisse senedi yoğun fon\" sayılır.",
      k: "1003 resmi not s. 151"
    },
    {
      s: "VII-128.5 sayılı Tebliğ'e göre yatırım fonlarının **karşılaştırma ölçütü** belirlenmesiyle ilgili hangisi doğrudur?",
      c: ["Portföy dağılımından bağımsız olarak döviz veya enflasyon endeksleri ölçüt olarak kullanılamaz.", "Her fon için karşılaştırma ölçütü BIST-100 Getiri Endeksi olmak zorundadır.", "Karma stratejili fonlar karşılaştırma ölçütü belirleyemez.", "Yalnızca yurt içi endeksler karşılaştırma ölçütü olabilir.", "Karşılaştırma ölçütü belirlemek zorunlu değildir; fon yöneticisinin isteğine bırakılmış bir tercihtir."],
      d: 0,
      a: "Her fon, stratejisine uygun bir **karşılaştırma ölçütü** belirlemek zorundadır. Yurt içi veya yurt dışı genel kabul görmüş endeksler ya da Kurulca uygun görülen endeksler kullanılabilir; karma stratejilerde ağırlıklı ortalama alınır. Portföy dağılımından bağımsız olarak **döviz, enflasyon** gibi endeksler **kullanılamaz**.",
      k: "1003 resmi not s. 157"
    }
  ]
});
