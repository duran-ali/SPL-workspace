SPL.gun("1004", 7, {
  okuma: `
## Bugünün haritası
Talepler toplandı; şimdi araçlar yatırımcılara **dağıtılıyor**. Bugün dağıtımın matematiği ve sonrası var:

1. **Dağıtım ilkeleri** ve sorumluluk
2. Sabit fiyat / fiyat aralığında **eşit dağıtım** ve **oransal dağıtım**
3. **Fiyat teklifi** yönteminde dağıtım
4. **Mükerrer talep**
5. Dağıtım listesi, **bedel iadesi** ve **teslim**
6. Satış sonuçlarının **saklanması** ve **açıklanması** (%5 kuralı)

---

## 1. Dağıtım ilkeleri
- Her yatırımcıya **kendi grubu içinde eşit ve adil** davranılır. Talepler hangi yetkili kuruluşça toplanırsa toplansın **aynı şekilde** değerlendirilir.
- **Nitelikli** ve/veya **kurumsal** yatırımcı gruplarında, izahnamede ayrıntılı yazılmak şartıyla **farklı ilkeler** belirlenebilir.
- İhraççının veya grubunun **çalışanları** ayrı bir grup yapılırsa, bu gruba dağıtım **bireysel yatırımcılarla aynı** ilkelere tabidir.

**Sorumluluk:** Dağıtım Tebliğe ve izahnameye uygun yapılmazsa **ihraççı ve/veya halka arz eden** ile **yetkili kuruluş** veya varsa **konsorsiyum lideri ve eş liderler** kusurlarına göre sorumludur. Dağıtım kayıtlarının düzenli tutulması ve **konsolide edilmesi** konsorsiyum liderinin (veya eş liderin) sorumluluğudur; diğer konsorsiyum üyeleri lidere gerekli kolaylığı sağlar.

> [!bilgi] **Sabit fiyat** ve **fiyat aralığı** yöntemlerinde dağıtım ilkeleri **aynıdır**. **Fiyat teklifi** yönteminde ise farklıdır.

---

## 2. Sabit fiyat veya fiyat aralığı ile talep toplamada dağıtım
Talep formlarını toplayan yetkili kuruluş, süre bittikten sonra dağıtımı yapar. Konsorsiyumda her üye kendi yatırımcı listesini **konsorsiyum liderine** iletir; lider listeleri **konsolide ederek** dağıtımı gerçekleştirir.

**Talep ≤ arz:** Bütün talepler karşılanır.

**Talep > arz: eşit dağıtım adımları**
1. Varsa belirli bir gruba ayrılan kısım hariç, satışa sunulan toplam tutar **talep eden yatırımcı sayısına** bölünür. Bulunan tutar ve altındaki talepler **tamamen karşılanır**.
2. Kalan tutar, talebi tam karşılanamayan yatırımcı sayısına bölünerek aynı şekilde dağıtılır. Araçların tamamı dağıtılana kadar devam edilir.
3. Sonuçlar, miktar için **alt sınır** koyan yatırımcılar açısından gözden geçirilir. Dağıtılan miktar alt sınırın altındaysa yatırımcı **listeden çıkarılır** ve bu miktar yeniden dağıtılır.
4. **Küsurat** tama iblağ edilerek talebi tam karşılanamayanlar arasında ihraççının veya halka arz edenin uygun gördüğü şekilde dağıtılır.

> [!ezber] **Eşit dağıtım örneği:** 1.000 lot arz, 4 yatırımcı: 100, 200, 400, 800 lot talep. 1.000/4 = 250 → 100 ve 200 lotluk talepler tam karşılanır (300 lot). Kalan 700 lot, 2 yatırımcıya: 700/2 = 350 → ikisi de 350 lot alır.

### Oransal dağıtım
İstenirse **oransal dağıtım** kullanılabilir:
- **Karşılama oranı** = gruba tahsis edilen toplam miktar / gruba gelen toplam talep,
- her yatırımcıya **talebi × karşılama oranı** kadar dağıtılır.

> Aynı örnekte toplam talep 1.500 lot, oran 1.000/1.500 = 2/3 → 100 lot talep eden 66,7, 800 lot talep eden 533,3 lot alır.

### Bireysel yatırımcılara asgari dağıtım
Sabit fiyat veya fiyat aralığında, halka arz tutarıyla sınırlı olmak üzere **tüm bireysel yatırımcılara asgari olarak dağıtılacak tutar** satıştan önce belirlenebilir. Halka arz tutarı bu asgari tutarları karşılamazsa izlenecek yöntem **izahnamede** yazılır.

> [!bilgi] Örnekte bireysel gruba **oransal dağıtım** uygulanmış, kurumsal gruplara dağıtımı ise halka arz eden ortakların onayıyla **konsorsiyum lideri** belirlemiştir. Bireysel yatırımcı sayısı pay adedinden fazla olursa kime birer pay verileceğini, liderin önerisiyle halka arz eden ortaklar belirleyecektir.

---

## 3. Fiyat teklifi alma yönteminde dağıtım
1. Teklifler **en yüksek fiyattan en düşüğe** sıralanır; her fiyat düzeyindeki ve **birikimli** miktarları gösteren tablo hazırlanır. **Birikimli olarak en çok aracın satılabildiği fiyat**, satış fiyatı olur.
2. Bu fiyatı karşılayan teklifler dikkate alınır. Bu fiyatta talep arzdan fazlaysa dağıtım **en yüksek fiyatlı talepten** başlar.
3. Satış fiyatı düzeyinde karşılanamayan birden fazla talep varsa dağıtım **talep miktarıyla orantılı** yapılır.
4. Alt sınırın altında kalan yatırımcılar listeden çıkarılır; miktar yeniden **orantılı** dağıtılır.
5. Küsurat tama iblağ edilerek ihraççının veya halka arz edenin uygun gördüğü şekilde dağıtılır.

> [!dikkat] Fiyat teklifi yönteminde öncelik **fiyata** göredir: yüksek fiyat veren önce karşılanır. Sabit fiyat ve fiyat aralığında ise **kişi başı eşit** dağıtım esastır.

---

## 4. Mükerrer talep
- Birden fazla talepte bulunan yatırımcının yalnızca **en yüksek miktarlı** talebi hesaplamaya alınır.
- **Oransal dağıtımda bu kural uygulanmaz.**
- Kontrol sonunda talepler arzdan **az** kalırsa ve izahnamede yazılıysa, yatırımcıların **en yüksek miktarlı ikinci** talepleri de hesaba katılabilir. Arzın tamamını karşılayacak talep bulunana kadar böyle devam edilir.
- Bu işlemlerin sorumluluğu **yetkili kuruluşa**, konsorsiyumda **konsorsiyum liderine** aittir.

---

## 5. Dağıtım listesi, bedel iadesi ve teslim
| Adım | Süre | Kim? |
|---|---|---|
| Dağıtım listesinin hazırlanıp ihraççıya ve/veya halka arz edene verilmesi | Talep toplamanın bitimini izleyen **2 iş günü** | Yetkili kuruluş / konsorsiyum lideri |
| Listenin onaylanıp geri teslimi | Teslimi izleyen **2 iş günü** | İhraççı ve/veya halka arz eden |
| Karşılanamayan taleplerin **bedel iadesi** | Onaylı listenin teslim alınmasını izleyen **iş günü** | Yetkili kuruluş |
| Konsorsiyumda üyelere bildirim | **Aynı gün** | Konsorsiyum lideri |
| Konsorsiyum üyelerinin iadesi | Bildirimi izleyen **iş günü** | Konsorsiyum üyeleri |

**Listenin içeriği:** Yatırımcının adı/soyadı veya unvanı, varsa TC kimlik ve vergi kimlik numarası, talep edilen miktar, teklif edilen fiyat, asgari miktar, talebin sisteme **giriş tarihi ve saati** ve dağıtım. **Yurt dışından** alınan taleplerde giriş tarihi ve saati gerekmez.

### Teslim
- Yetkili kuruluş, onaylı listeye göre araçları izahnamedeki esaslara uygun teslim eder. Konsorsiyumda teslim yükümlülüğü **konsorsiyum liderine** aittir.
- Borsada işlem gören veya görmek için başvuran ortaklıkların payları ile yurt içi diğer araçlar **MKK'da hak sahibi adına açılmış hesaplarda** izlenerek teslim edilir. Kurul, aracın türüne ve ihraççının veya MKK üyesinin niteliğine göre hesapların **toplu** tutulmasına karar verebilir.
- Kayden izlenen araçlarda satış, araçların MKK'daki **yatırımcı hesabına aktarılmasıyla** tamamlanır.

---

## 6. Satış sonuçları
### Saklama ve bildirim
- Talepte bulunan **tüm yatırımcıların listesi** ve satış sonuçları, satış süresinin bitiminden itibaren **5 yıl** süreyle **basılı ve elektronik** olarak saklanır. Bu yükümlülük ihraççı ve/veya halka arz eden ile varsa yetkili kuruluş veya konsorsiyum liderine aittir.
- İhraççıyla **sermaye ve/veya yönetim bakımından ilişkili** alıcıları ve aldıkları miktarları gösteren **tablo** da ayrıca tutulur.
- Kurul veya Borsa isterse liste, sonuçlar ve tablo gönderilir. **Payların ilk halka arzında** bunlar (tüm yatırımcı listesi hariç) **istenmeden** Kurula gönderilir.
- Satış süresinin bitiminden itibaren **10 iş günü** içinde, ilan ve reklamların yayımlandığı **basın sayfaları ve görsel yayın kayıtları** Kurula gönderilir. Bunu yetkili kuruluş da yapabilir.

### Kamuya açıklama
Açıklama, dağıtım listesinin (veya satışın) kesinleştiği günü izleyen **2 iş günü** içinde, özel durum düzenlemelerine göre **yetkili kuruluşça** yapılır.

| Halka arz | Açıklanacaklar |
|---|---|
| **Payların ilk halka arzı** ve **pay dışındaki araçların** halka arzı | İhracın nihai tutarı; grup bazında dağıtılan tutar, oran ve **yatırımcı sayısı**; **ek satış** ve **tahsisat kaydırma** sonuçları; nominal değerin **%5'inden fazlasını** alanlar |
| **Halka açık ortaklıkların sermaye artırımı** | Nihai tutar; **%5'ten fazla** alanlar; orana bakılmaksızın ortaklığın **ilişkili taraflarından** pay alanlar |

> [!ezber] **İdari sorumluluğu bulunan kişilerin** pay alımları, payların ilk halka arzında ve halka açık ortaklıkların sermaye artırımlarında **%5 oranına bakılmaksızın** açıklanır.

---

## Bugünün özeti
- Dağıtımda grup içinde eşit ve adil davranılır. Çalışan grubu bireysel yatırımcılarla aynı ilkelere tabidir. Konsolidasyondan konsorsiyum lideri sorumludur.
- Sabit fiyat ve fiyat aralığında eşit dağıtım yapılır: arz kişi sayısına bölünür, altındakiler karşılanır, kalan tekrar bölünür. İstenirse oransal dağıtım da kullanılabilir.
- Fiyat teklifi yönteminde birikimli olarak en çok satışın olduğu fiyat satış fiyatıdır; dağıtım en yüksek fiyattan başlar.
- Mükerrer talepte en yüksek talep dikkate alınır; oransal dağıtımda bu kural uygulanmaz.
- Liste talep toplama bitiminden sonra 2 iş günü içinde verilir ve 2 iş günü içinde onaylanır. Bedel iadesi onaylı listenin tesliminden sonraki iş günü yapılır.
- Satış sonuçları 5 yıl saklanır. Sonuçlar 2 iş günü içinde açıklanır. %5'ten fazla alanlar, ilişkili taraflar (sermaye artırımında) ve idari sorumlular (orana bakılmaksızın) açıklanır.
`,
  sorular: [
    {
      s: "Sabit fiyatla talep toplama yöntemiyle 1.200 lot halka arz edilmiş; dört yatırımcı sırasıyla 100, 300, 600 ve 900 lot talep etmiştir. Eşit dağıtım ilkesine göre **900 lot** talep eden yatırımcıya kaç lot düşer?",
      c: ["400 lot", "450 lot", "500 lot", "550 lot", "600 lot"],
      d: 0,
      a: "1.200 / 4 = 300 → 100 ve 300 lotluk talepler tam karşılanır (400 lot). Kalan 800 lot iki yatırımcıya bölünür: 800 / 2 = **400 lot**. 600 ve 900 lot talep edenlerin ikisi de 400 lot alır.",
      k: "1004 resmi not s. 31"
    },
    {
      s: "Oransal dağıtım yönteminde bir yatırımcı grubuna 2.000 lot tahsis edilmiş ve gruba toplam 8.000 lot talep gelmiştir. **600 lot** talep eden bir yatırımcıya kaç lot dağıtılır?",
      c: ["50 lot", "75 lot", "100 lot", "120 lot", "150 lot"],
      d: 4,
      a: "Karşılama oranı = 2.000 / 8.000 = **0,25**. Yatırımcıya 600 × 0,25 = **150 lot** dağıtılır.",
      k: "1004 resmi not s. 31"
    },
    {
      s: "**Fiyat teklifi alma** yoluyla talep toplama yönteminde satış fiyatı nasıl belirlenir?",
      c: ["Gelen tekliflerin basit aritmetik ortalaması hesaplanır ve satış fiyatı olarak kabul edilir", "İzahnamede belirtilen asgari fiyat, gelen tekliflerden bağımsız olarak doğrudan satış fiyatı olur", "Birikimli olarak en çok aracın satılabildiği fiyat satış fiyatı olarak belirlenir", "En yüksek fiyat teklifi, o fiyattan talep edilen miktara bakılmaksızın satış fiyatı sayılır", "Satış fiyatı, talepler incelendikten sonra Kurulca ayrıca belirlenir ve KAP'ta duyurulur"],
      d: 2,
      a: "Teklifler en yüksekten en düşüğe sıralanıp birikimli tablo hazırlanır. **Birikimli olarak en çok aracın satılabildiği fiyat** satış fiyatıdır ve dağıtım en yüksek fiyatlı talepten başlar.",
      k: "1004 resmi not s. 31"
    },
    {
      s: "Talep toplama sonucunda bir yatırımcının birden fazla talebi olduğu tespit edilmiştir. **Oransal dağıtım yöntemi uygulanmıyorsa** hangisi doğrudur?",
      c: ["Yatırımcının bütün talepleri toplanarak tek bir talep olarak hesaplanır", "Yatırımcının yalnızca ilk sırada girilen talebi dikkate alınır", "Yatırımcının yalnızca en yüksek miktarlı talebi hesaplamada dikkate alınır", "Yatırımcının tüm talepleri geçersiz sayılır ve dağıtım listesinden çıkarılır", "Yatırımcının yalnızca en düşük miktarlı talebi dikkate alınır ve diğerleri iade edilir"],
      d: 2,
      a: "Mükerrer talepte yalnızca **en yüksek miktarlı** talep dikkate alınır. Talep arzdan az kalırsa ve izahnamede yazılıysa en yüksek **ikinci** talep de hesaba katılabilir. **Oransal dağıtımda** bu kural uygulanmaz.",
      k: "1004 resmi not s. 32"
    },
    {
      s: "Talep toplama süresi Çarşamba sona ermiştir. Yetkili kuruluşun dağıtım listesini ihraççıya en geç ne zamana kadar vermesi gerekir?",
      c: ["Aynı gün, yani Çarşamba", "İzleyen Perşembe günü", "İzleyen Cuma günü", "İzleyen Pazartesi günü", "İzleyen Salı günü"],
      d: 2,
      a: "Liste, talep toplama süresinin bitimini izleyen **2 iş günü** içinde verilir: Perşembe ve **Cuma**. İhraççı da listeyi teslimden sonraki 2 iş günü içinde onaylar.",
      k: "1004 resmi not s. 32"
    },
    {
      s: "Konsorsiyum oluşturulan bir halka arzda karşılanamayan taleplerin **bedel iadesi** süreciyle ilgili hangisi doğrudur?",
      c: ["Konsorsiyum lideri aynı gün üyelere bildirir; üyeler bildirimi izleyen iş günü iadeyi yapar", "İadeler satış süresinin bitiminden itibaren 10 iş günü içinde toplu olarak MKK tarafından yapılır", "İadeyi yalnızca ihraççı yapar ve bunun için listenin onayından itibaren 5 iş günü süre tanınmıştır", "Konsorsiyum üyeleri iadeyi, satış sonuçlarının KAP'ta açıklanmasını bekleyerek bundan sonra yapar", "İadeler dağıtım listesinin onayından itibaren bir ay içinde tek seferde ve faiziyle birlikte yapılır"],
      d: 0,
      a: "Onaylı listeyi alan konsorsiyum lideri **aynı gün** üyelere bildirir. Üyeler bildirimi izleyen **iş günü** içinde iadeyi yapar. Konsorsiyum yoksa yetkili kuruluş, onaylı listenin teslimini izleyen iş günü iade eder.",
      k: "1004 resmi not s. 32"
    },
    {
      s: "Satış sonuçları ve talepte bulunan tüm yatırımcıların listesi, satış süresinin bitiminden itibaren ne kadar süreyle ve nasıl saklanmalıdır?",
      c: ["5 yıl, basılı ve elektronik olarak", "5 yıl, yalnızca MKK nezdinde elektronik olarak", "8 yıl, yalnızca basılı olarak", "10 yıl, basılı ve elektronik olarak", "10 yıl, yalnızca ihraççı merkezinde"],
      d: 0,
      a: "Liste ve satış sonuçları **5 yıl** süreyle **basılı ve elektronik** ortamda saklanır. Sorumluluk ihraççı ve/veya halka arz eden ile varsa yetkili kuruluş veya konsorsiyum liderine aittir.",
      k: "1004 resmi not s. 33"
    },
    {
      s: "**Payların ilk halka arzında** satış sonuçlarının kamuya açıklanmasıyla ilgili hangisi **yanlıştır**?",
      c: ["Açıklama, dağıtım listesinin kesinleştiği günü izleyen 2 iş günü içinde yapılır", "Halka arz edilen payların nominal değerinin %5'inden fazlasını alanlar açıklanır", "İdari sorumluluğu bulunan kişilerin pay alımları %5 oranına bakılmaksızın açıklanır", "Yatırımcı grupları bazında dağıtılan tutar, oran ve yatırımcı sayısı açıklanır", "Yalnızca nominal değerin %10'undan fazlasını alan yatırımcılar ayrıca açıklanır"],
      d: 4,
      a: "Açıklanacak eşik **%10 değil, %5'tir**. İdari sorumluluğu bulunan kişilerin alımları orana bakılmaksızın açıklanır. Açıklama **2 iş günü** içinde yapılır.",
      k: "1004 resmi not s. 33"
    }
  ]
});
