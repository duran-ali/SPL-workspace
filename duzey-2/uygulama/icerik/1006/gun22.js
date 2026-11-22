SPL.gun("1006", 22, {
  okuma: `
## Bugünün haritası
VİOP'ta **emirlere ilişkin esasları** çalışıyoruz: erişim protokolleri, algoritmik emir iletimi, emir yöntemleri ve geçerlilik süreleri, vadeler arası strateji emirleri, şarta bağlı emirler, emir büyüklükleri, emir düzeltme ve iptal ücreti.

1. **Erişim protokolleri** ve **algoritmik emir iletimi**
2. **Öncelik kuralları**, **emir yöntemleri** ve **geçerlilik süreleri**
3. **Vadeler arası strateji emirleri**
4. **Şarta bağlı emirler**
5. **Akşam** ve **açılış** seansında geçerli emirler
6. Fiziki teslimatlı döviz sözleşmeleri, kotasyon isteği ve **emir büyüklükleri**
7. **Emir düzeltme** ve zaman önceliği
8. Emirlerin **askıya alınması**, **iptal** ve **iradi emir iptal ücreti**

---

## 1. Erişim protokolleri ve algoritmik emir iletimi
| Protokol | Kullanım |
|---|---|
| **İşlem terminalleri (TW, Omnet API)** | Üyelere tahsis edilir |
| **FixAPI Order Entry** | Eşyerleşim ve uzak erişimden emir, **kotasyon**, **kotasyon isteği**, özel işlem bildirimi ve **esnek sözleşme** oluşturma |
| **FixAPI Reference Data** | Sözleşme bazında referans bilgi |
| **FixAPI Drop-Copy** | Üyenin emir, kotasyon, işlem ve özel işlem bildirimi akışı; **kullanıcı bazında filtreleme** |
| **OUCH** | Hızlı emir iletimi (yüksek frekanslı işlemler); **limit** ve **kotasyon** emirleri ile giriş, düzeltme ve iptal |
| **ITCH** | Hızlı, düşük gecikmeli **veri yayını** |

### Algoritmik emir iletim sistemleri
- Bu sistemleri kullanacak üye, yazılım hakkında **bilgi formuyla** borsaya **yazılı** bilgi vermek zorundadır.
- Başlamadan önce sistemlerin **test edildiğini**, sonuçlarının **öngörülebilir** olduğunu ve piyasayı bozmayacağını **taahhütnameyle** yazılı taahhüt eder.
- Devreye aldıktan sonra riskleri **gerçek zamanlı izlemek**, sınırlamak ve gerekirse yazılımı **hemen durdurmak** üyenin sorumluluğundadır.
- Üye, algoritmik sistemlerden borsaya karşı **doğrudan** ve **devredilemez** biçimde sorumludur. Sorunları **en hızlı iletişim kanalıyla** bildirir.
- PTRM risk limitlerinin hangi yöntemle belirlendiğini **yazılı** hâle getirir; borsa isterse **aynı gün** bildirir.

### Yüksek frekanslı işlem (YFİ) kullanıcıları
- YFİ'ler için başvuruyla **ayrı kullanıcılar** tahsis edilir; **her farklı algoritma için ayrı kullanıcı** tanımlanması zorunludur.
- Bu kullanıcılar **PTRM risk grubu kontrollerini** (kullanıcı limitleri) kullanmak zorundadır.
- **OUCH** kullanan kullanıcılar da YFİ sayılır.
- YFİ sayılmak için sunucuların borsanın **eşyerleşim merkezinde** konuşlanması ve borsanın **ayırt edici kullanıcı kodu** vermesi gerekir.
- Piyasa bozucu durumlarda borsa bu kullanıcıların işlemlerine **ara verebilir** veya hizmetleri durdurabilir; üye **kâr mahrumiyeti veya tazminat talep edemez**.

---

## 2. Öncelik, emir yöntemleri ve geçerlilik süreleri
**Öncelik:** önce **fiyat** (düşük satım, yüksek alım), sonra **zaman**.

### Emir yöntemleri
| Yöntem | Açıklama |
|---|---|
| **Limit** | Belirlenen limit fiyata kadar işlem; **fiyat ve miktar zorunlu** |
| **Piyasa** | En iyi fiyattan başlayarak karşılanır; GİE veya KİE ile. **01.03.2021'den itibaren kullanılmasına izin verilmiyor** |
| **Piyasadan limite** | Fiyatsız, yalnız miktar; karşı taraftaki **en iyi kademeyle** eşleşir; kalanı **son işlem fiyatından** limit emre döner. Karşıda emir yoksa **hemen iptal** |

### Geçerlilik süreleri
| Süre | Açıklama |
|---|---|
| **Gün** | Girildiği gün geçerli; eşleşmezse gün sonunda iptal |
| **İptale kadar geçerli** | İptal edilene kadar; en geç **sözleşmenin vade sonunda** iptal |
| **Tarihli** | Belirtilen tarihe kadar; **vade sonundan ileri tarih girilemez** |
| **Gerçekleşmezse iptal et (GİE)** | Tamamı gerçekleşmezse **tamamı** iptal |
| **Kalanı iptal et (KİE)** | Gerçekleşmeyen kısım iptal |

> [!bilgi] Günlük fiyat limitlerinin dışında (alt limitten düşük alış, üst limitten yüksek satış) emir gönderilebilir. Bu emirler **"Durdurulmuş"** statüyle kabul edilir; fiyat limitleri içine girince **aktif** olur.

---

## 3. Vadeler arası strateji emirleri
Farklı vade aylarına, **spread fiyatıyla girilen tek bir emirle** aynı anda **ters yönlü iki emir** gönderilmesini sağlar. Yakın vade **M1**, uzak vade **M2** ("bacaklar").

| Emir | İçerik |
|---|---|
| **Strateji alış** | **M2 alış + M1 satış**; spread = uzak vade alış − yakın vade satış |
| **Strateji satış** | **M2 satış + M1 alış**; spread = uzak vade satış − yakın vade alış |

- Fiyat limitleri içinde olmak şartıyla **negatif fiyatla** da girilebilir.
- Azami miktar, stratejiyi oluşturan sözleşmelerin azami miktarına eşittir.
- Yalnız **limit** yöntemi ve **gün** süresiyle girilebilir; şarta bağlanamaz; strateji kodlarında **özel işlem bildirimi yapılamaz**.
- **Eşleşme:** önce vadelerde bekleyen emirlerle; olmazsa ters yönlü bir strateji emriyle.
- Oluşan otomatik işlemler **uzlaşma fiyatı hesabına** ve son, en düşük, en yüksek gibi **fiyat istatistiklerine dâhil edilmez**; son işlem fiyatı koşullu şarta bağlı emirleri **tetiklemez**.
- **Fiyat limitleri:** Alt limit = (M2 baz − M1 baz) − k; Üst limit = (M2 baz − M1 baz) + k.
- Bacaklardan birinde işlemler durursa strateji emri girilemez.

---

## 4. Şarta bağlı emirler
Belirtilen **koşul sağlandığında aktif** olan emirler. Koşul olarak emrin girildiği veya **aynı gruptaki** başka bir sözleşmenin **son fiyatı, en iyi alışı veya en iyi satışı** kullanılabilir.

- Koşul gerçekleşince emir **tetiklenir**. Girildiği anda koşul zaten sağlanıyorsa **hemen aktif** olur.
- Aktif olana kadar **emir defterinde yer almaz**.
- FixAPI ile BISTECH'teki diğer enstrümanlar da koşul olabilir. Sistemde tanımlı ama **işlem görmeyen** enstrümanları (ör. D_XU030D, D_USDTRY) koşul alan emirler **aktif olmaz**.
- Günlük limit dışı emirler aktif olunca "Durdurulmuş" statüyle kabul edilir. Kurallar **aktif olduğu anda**, azami büyüklük ve fiyat adımı kontrolleri ise **giriş sırasında** yapılır.

---

## 5. Akşam ve açılış seansında geçerli emirler
### Akşam seansı
- Emrin akşam seansında geçerli olacağı **belirtilmelidir**.
- Akşam seansında **piyasa** ve **piyasadan limite** emir türleri ile **iptale kadar geçerli** ve **tarihli** süreler **kullanılamaz**.
- Akşam seansı belirtilmemiş İKG ve tarihli emirler akşama geçerken **"Durdurulmuş"** olur; normal seansa geçerken **zaman öncelikleri korunarak** aktif olur.
- Normal seansta akşam için geçerli olmayan günlük emirler **normal seans sonunda**; akşam için geçerli günlük emirler **akşam seansı sonunda** iptal edilir.
- Normal ve akşam seansında farklı fiyat limitleri olabileceği için emirler akşama geçerken durdurulabilir.
- Şartları **akşam seansında** gerçekleşen şarta bağlı emirler aktif olduktan sonra **iptal olur**.
- Akşam seansında **vadeler arası strateji emirleri kullanılmaz**.

### Açılış seansı
- Emir toplamada yalnız **limit fiyatlı** ve **GİE dışındaki** sürelerle emir girilebilir. Önceki günlerden kalan **tarihli** ve **İKG** emirler açılışa dâhil edilir.
- **Strateji** emri, **şarta bağlı** emir, **esnek sözleşme** ve **özel işlem bildirimi** yapılamaz.
- **Eşleştirme aşamasında** emir girişi, iptali ve düzeltmesi yapılamaz.
- Eşleşmeyen emirler **normal seansa aktarılır**. Koşulu açılışta sağlanan şarta bağlı emirler **normal seansın başlamasıyla** tetiklenir.

---

## 6. Fiziki teslimatlı döviz, kotasyon isteği ve emir büyüklükleri
- **Fiziki teslimatlı** döviz vadeli işlem ve opsiyon sözleşmelerinde **gerçek kişilere ait hesaplardan emir kabul edilmez**.
- **Kotasyon isteği:** Üyeler **FixAPI** emir iletim kanalı üzerinden bir üyeye veya tüm üyelere belirli bir sözleşme için **tek veya çift taraflı** kotasyon isteği gönderebilir.

### Azami emir büyüklükleri (asgari: tümünde 1 sözleşme)
| Sözleşme | Azami |
|---|---|
| **Pay** sözleşmeleri | Dayanağın fiyatına göre: **0-2,49 TL → 40.000** … **1.000 TL ve üzeri → 50** |
| **Endeks** | **2.000** |
| **Döviz** | **5.000** |
| Dolar/ons **altın** | 1.250 |
| Dolar/ons **gümüş** | 5.000 |
| Platin, paladyum, bakır | 500 |
| **TL/gram altın** | **25.000** |
| **Baz yük elektrik** | 50 |
| **TLREF** | 100 |
| Fiziki teslimatlı **DİBS** | 200 |
| Diğer | 2.000 |

> [!bilgi] Pay sözleşmelerinde dayanak payın fiyatı **yükseldikçe** azami emir miktarı **azalır**: 40.000 → 20.000 → 10.000 → 5.000 → 2.500 → 1.250 → 750 → 350 → 200 → 125 → … → 50.

---

## 7. Emir düzeltme ve zaman önceliği
- "Durdurulmuş" emirler hariç, bekleyen emirlerde izin verilen değişiklikler yapılabilir. **Temsilciler kendi emirlerini**, **baş temsilciler** yetkili oldukları üyenin **tüm emirlerini** değiştirebilir.

| Alan | Değiştirilebilir mi? | Zaman önceliği korunur mu? |
|---|---|---|
| **Hesap numarası** | **Hayır** (emir defterindeki emirlerde) | – |
| **Pozisyon** | Evet | **Evet** |
| **Fiyat** | Evet | **Hayır** |
| **Miktar** | Artırılabilir / azaltılabilir | Artırmada **hayır**, azaltmada **evet** |
| **Emir geçerliliği** | Evet | **Hayır** |
| **Geçerlilik süresi** | Uzatılabilir / kısaltılabilir | Uzatmada **hayır**, kısaltmada **evet** |
| **Off-hours** | Hayır (terminalde yeni emir oluşur) | – |
| **Açıklamalar** | Evet | **Evet** |

- Akşam seansında girilen günlük emirlerde de bu kurallar geçerlidir; ama akşam seansında **geçerlilik süresi değiştirilemez**.
- Koşulu gerçekleşmemiş **şarta bağlı emirlerde**: koşul sözleşmesi, koşul fiyatı, koşul, sözleşme ve tip **değiştirilemez**; hesap no, pozisyon, fiyat, miktar, geçerlilik ve açıklamalar değiştirilebilir ve **öncelik korunur**.

---

## 8. Askıya alma, iptal ve iradi emir iptal ücreti
### Askıya alma
- Temsilciler emirlerini **askıya alıp** gün içinde yeniden aktif edebilir. Üye isterse bağlantı kopması gibi durumlarda emirler **otomatik askıya** alınabilir.
- Askıya alma sistem açısından **iptalle eşdeğerdir**; emir yalnız temsilcinin bilgisayarında tutulur. Yeniden aktif edilen emir **zaman önceliğini kaybeder** ve **yeni emir numarası** alır.
- Emirler **yalnız işlem terminali** kullanıcılarınca askıya alınabilir.

### İptal
- Temsilciler kendi emirlerini, baş temsilciler üyenin tüm emirlerini, **yetkili borsa personeli** sistemdeki tüm emirleri iptal edebilir veya askıya alabilir.
- PTRM kapsamında sistem emirleri iptal edebilir. İşlem yetkisi kaldırılan veya kapatılanların **İKG ve tarihli** emirleri **uyarısız silinir**.

### İradi emir iptal ücreti
- İptal edilen veya askıya alınan emirlerin parasal büyüklüğünün, üyenin **aylık işlem hacmine oranı %50'yi aşarsa**, **aşan kısım** ücrete konu olur.
- Orana **vade sonu pozisyon kapamaları** ve **özel işlem bildirimleri** dâhil edilmez.
- **Muaf olanlar:** piyasa yapıcı hesaplarının piyasa yapıcı oldukları sınıflardaki iptalleri; **vadeler arası strateji emirleri**; **döviz, altın, gümüş, platin, paladyum ve bakıra** dayalı sözleşmelerdeki iptaller; sistemin yaptığı iptaller.

### İşlem öncesi risk yönetimi (PTRM)
Sisteme entegre risk uygulaması; terminal, FixAPI ve OUCH'tan gelen emir ve işlemleri **emir öncesi**, **emir sonrası** ve **işlem anında** kontrol eder.

---

## Bugünün özeti
- Algoritmik sistemler: **bilgi formu** + **taahhütname**; sorumluluk üyede ve **devredilemez**.
- YFİ: her algoritmaya **ayrı kullanıcı**; **eşyerleşim** ve ayırt edici kod; OUCH kullanan da YFİ.
- **Piyasa emri 01.03.2021'den beri kullanılamıyor**; piyasadan limite emir var.
- İKG en geç **vade sonuna** kadar; tarihli emirde vade sonundan ileri tarih yok.
- Strateji emri: **M2 − M1 spread**; yalnız limit ve gün; akşam seansında yok; uzlaşma fiyatına girmez.
- Şarta bağlı emir aktif olana kadar emir defterinde yok.
- Akşam seansında piyasa, piyasadan limite, İKG ve tarihli **yok**.
- Fiziki teslimatlı dövizde **gerçek kişi** emri yok.
- Fiyat değişikliği ve miktar artışı önceliği kaybettirir; pozisyon, açıklama değişikliği ve miktar azaltma korur; **hesap no değişmez**.
- İradi emir iptal ücreti: iptal/hacim oranı **%50**'yi aşan kısım; döviz ve metaller muaf.
`,
  sorular: [
    {
      s: "VİOP'ta **algoritmik emir iletim sistemleri** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["Kullanılacak yazılım hakkında bilgi formuyla borsaya yazılı bilgi verilmesi zorunludur", "Sistemlerin test edildiği ve piyasayı bozmayacağı taahhütnameyle taahhüt edilir", "Üyenin bu sistemlerden doğan sorumluluğu yazılım sağlayıcısına devredilebilir", "Sorunlar gerçekleştiği andan itibaren en hızlı iletişim kanalıyla borsaya bildirilir", "Piyasa bozucu durumlarda borsa hizmeti durdurursa üye tazminat talep edemez"],
      d: 2,
      a: "Üye, algoritmik emir iletim sistemlerinden borsaya karşı **doğrudan** sorumludur ve bu sorumluluk **devredilemez**.",
      k: "1006 resmi not s. 137-138"
    },
    {
      s: "VİOP'ta bir kullanıcının **yüksek frekanslı işlem kullanıcısı** sayılabilmesi için aşağıdakilerden hangisi gereklidir?",
      c: ["Günde en az 1.000 emir göndermesi ve bunu borsaya her ay yazılı olarak bildirmesi", "Piyasa yapıcı olarak atanmış ve kotasyon yükümlülüğünü yerine getiriyor olması", "Yalnızca işlem terminali (TW) üzerinden ve şef broker yetkisiyle emir iletmesi", "Sunucularının eşyerleşim merkezinde olması ve ayırt edici kullanıcı kodu alması", "SPK'dan ayrı bir algoritmik işlem lisansı almış olması"],
      d: 3,
      a: "YFİ kullanıcısı sayılmak için emir üretecek sunucuların borsanın **eşyerleşim merkezinde** konuşlanması ve borsanın **ayırt edici kullanıcı kodu** vermesi gerekir. **OUCH** kullananlar da YFİ kapsamındadır ve her algoritma için ayrı kullanıcı tanımlanır.",
      k: "1006 resmi not s. 137"
    },
    {
      s: "VİOP'ta **emir yöntemleri** ve **geçerlilik süreleri** ile ilgili hangisi doğrudur?",
      c: ["Piyasa emir yöntemi 1 Mart 2021'den beri kullanılamamaktadır", "İptale kadar geçerli emirler vade sonundan sonra da geçerliliğini korur", "Tarihli emirlerde sözleşmenin vade sonundan ileri bir tarih girilebilir", "Piyasadan limite emrin kalan kısmı otomatik olarak iptal edilir", "Günlük fiyat limitleri dışında hiçbir emir sisteme gönderilemez"],
      d: 0,
      a: "**01.03.2021**'den itibaren **piyasa** emir yöntemine izin verilmemektedir. İKG emirler en geç vade sonunda iptal edilir; tarihli emirde vade sonundan ileri tarih girilemez; piyasadan limite emrin kalanı limit emre döner; limit dışı emirler **Durdurulmuş** statüyle kabul edilir.",
      k: "1006 resmi not s. 138-139"
    },
    {
      s: "VİOP'ta **vadeler arası strateji alış emri** ile ilgili hangisi doğrudur?",
      c: ["Uzak vadede (M2) alış, yakın vadede (M1) satış işlemini birleştirir", "Yakın vadede (M1) alış, uzak vadede (M2) satış işlemini birleştirir", "Aynı vadede hem alış hem satış emri gönderir", "Yalnızca akşam seansında kullanılabilir", "Negatif fiyatla hiçbir durumda girilemez"],
      d: 0,
      a: "**Strateji alış** emri **M2 alış + M1 satış** işlemini birleştirir; spread = uzak vade alış − yakın vade satış fiyatıdır. Fiyat limitleri içinde **negatif fiyatla** da girilebilir; akşam seansında strateji emri **kullanılmaz**.",
      k: "1006 resmi not s. 139-140"
    },
    {
      s: "Vadeler arası strateji emirleri sonucunda oluşan **otomatik işlemler** ile ilgili hangisi doğrudur?",
      c: ["Uzlaşma fiyatı hesaplamalarına bacaklardaki diğer işlemler gibi dâhil edilir", "Son, en düşük ve en yüksek fiyat istatistiklerine dâhil edilir", "Son işlem fiyatı koşullu şarta bağlı emirleri tetikler", "Uzlaşma fiyatı hesabına ve fiyat istatistiklerine girmez", "Yalnızca özel işlem bildirimi yoluyla gerçekleşir"],
      d: 3,
      a: "Strateji emirlerinden oluşan otomatik işlemler **uzlaşma fiyatı hesaplamalarına** ve son, en düşük, en yüksek gibi **fiyat istatistiklerine dâhil edilmez**; ayrıca son işlem fiyatı koşullu şarta bağlı emirleri **tetiklemez**.",
      k: "1006 resmi not s. 139"
    },
    {
      s: "VİOP **akşam seansında** aşağıdakilerden hangisi **kullanılabilir**?",
      c: ["Piyasadan limite emir türü", "İptale kadar geçerli emir süresi", "Tarihli emir süresiyle girilen limit emir", "Vadeler arası strateji emri", "Akşam için geçerli günlük limit emir"],
      d: 4,
      a: "Akşam seansında **piyasa** ve **piyasadan limite** emirler, **İKG** ve **tarihli** süreler ile **vadeler arası strateji emirleri** kullanılamaz. Akşam seansında geçerli olacağı belirtilen **günlük** emirler kullanılabilir.",
      k: "1006 resmi not s. 140"
    },
    {
      s: "VİOP'ta emir defterinde bekleyen bir emirde yapılan aşağıdaki değişikliklerden hangisi **zaman önceliğini korur**?",
      c: ["Fiyatın değiştirilmesi", "Miktarın artırılması", "Emir geçerliliğinin değiştirilmesi", "Geçerlilik süresinin uzatılması", "Pozisyon alanının değiştirilmesi"],
      d: 4,
      a: "**Pozisyon** ve **açıklama** değişikliği, **miktar azaltma** ve **geçerlilik süresini kısaltma** önceliği korur. Fiyat değişikliği, miktar artırma, geçerlilik değişikliği ve süre uzatma önceliği kaybettirir; hesap numarası ise değiştirilemez.",
      k: "1006 resmi not s. 142"
    },
    {
      s: "VİOP'ta **iradi emir iptal ücreti** ile ilgili hangisi doğrudur?",
      c: ["Tüm iptal edilen emirlerin parasal büyüklüğü üzerinden oran gözetmeksizin ücret alınır", "Döviz ve altına dayalı sözleşmelerdeki iptaller ücret hesaplamasına özellikle dâhil edilir", "İptallerin aylık işlem hacmine oranı %50'yi aşarsa aşan kısım ücrete konu olur", "Vadeler arası strateji emirlerinin iptalleri ücrete tabidir", "Sistem tarafından yapılan iptaller de ücrete konu olur"],
      d: 2,
      a: "İptal edilen veya askıya alınan emirlerin parasal büyüklüğünün aylık işlem hacmine oranı **%50'yi aşarsa**, **aşan kısım** ücrete konu olur. Piyasa yapıcı hesapları, strateji emirleri, **döviz, altın, gümüş, platin, paladyum ve bakır** sözleşmeleri ve sistem iptalleri hesaplamaya dâhil edilmez.",
      k: "1006 resmi not s. 143"
    }
  ]
});
