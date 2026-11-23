SPL.gun("1016", 9, {
  okuma: `
## Bugünün haritası
**Duran Varlıklar** sınıfına geçiyoruz. Bugün duran varlık kavramını, uzun vadeli alacakları, **24 Mali Duran Varlıklar** grubunu (bağlı menkul kıymetler, iştirakler, bağlı ortaklıklar ve **%10-%50** sınırları) ve **maddi ve maddi olmayan duran varlık** hesaplarının tanımlarını göreceğiz.

1. Duran varlık kavramı
2. Duran varlık hesap grupları ve uzun vadeli alacaklar
3. **24 Mali Duran Varlıklar**
4. **%10** ve **%50** sınırları ve devir kayıtları
5. **25 Maddi Duran Varlıklar** hesapları
6. **26 Maddi Olmayan Duran Varlıklar** ve itfa süreleri
7. **27 Özel Tükenmeye Tabi Varlıklar**

---

## 1. Duran varlık kavramı
> [!ezber] **Duran varlıklar:** bir yıldan veya bir normal faaliyet döneminden **daha uzun süre** işletme faaliyetlerinde **kullanılmak** amacıyla edinilen ve ilke olarak bir yılda paraya çevrilmesi veya tüketilmesi öngörülmeyen varlıklar. **Satmak amacıyla** edinilmezler; zamanla yıpranır, eskir, değerden düşerler.

- Fiziki yapısı olan: **maddi** duran varlık (bina, makine). Fiziki yapısı olmayıp işletmeye hak sağlayan: **maddi olmayan** duran varlık (imtiyazlar, telif hakları).
- Sürekli kullanım yeterli olduğu için taşınır **büro eşyaları** da duran varlıktır. **Muhasebe** taşınır ve taşınmaz sürekli kullanılan değerlere duran varlık derken, **hukuk** yalnız **taşınmazlara** sabit değer (sabit sermaye) der.
- Satılması söz konusu olmayan bir duran varlığın kullanımına son verildiği anda, ömrü uzun olsa da **duran varlık niteliğini kaybeder**.

## 2. Hesap grupları ve uzun vadeli alacaklar
**Gruplar:** **22** Ticari Alacaklar, **23** Diğer Alacaklar, **24** Mali Duran Varlıklar, **25** Maddi Duran Varlıklar, **26** Maddi Olmayan Duran Varlıklar, **27** Özel Tükenmeye Tabi Varlıklar, **28** Gelecek Yıllara Ait Giderler ve Gelir Tahakkukları, **29** Diğer Duran Varlıklar.

- **22/23** grupları vadesi **bir yıldan uzun** alacakları izler; vadesi bir yılın altına düşenler **dönen varlıklardaki** ilgili hesaplara aktarılır.
- Hesapların tanım ve işleyişi dönen varlıklardaki karşılıklarıyla aynıdır (220 Alıcılar, 221 Alacak Senetleri, 226 Verilen Depozito ve Teminatlar, 229 Şüpheli Ticari Alacaklar Karşılığı...).
- **235 Personelden Alacaklar** uzun vadeli borçları kapsar; **verilen avanslar** bu hesapta izlenmez.

## 3. 24 Mali Duran Varlıklar
Uzun vadeli amaçlarla veya **yasal zorunluluklar** nedeniyle elde tutulan menkul kıymetler, **paraya dönüşme niteliğini kaybetmiş** menkul kıymetler ve başka işletmelere **ortak olmak** amacıyla edinilen sermaye payları.

| Hesap | İçerik |
|---|---|
| **240 Bağlı Menkul Kıymetler** | İştirak için aranan asgari yüzdeyi taşımayan, uzun vadede tutulacak hisse senetleri ve diğer uzun vadeli menkul kıymetler |
| **241 Bağlı Menkul Kıymetler Değer Düşüklüğü Karşılığı (−)** | 119 gibi işler |
| **242 İştirakler** | Diğer şirketlerin **yönetimine ve politikalarına katılmak** için edinilen paylar |
| **243 İştiraklere Sermaye Taahhütleri (−)** | Taahhüt edilen ama ödenmemiş kısım |
| **244 İştirakler Sermaye Payları Değer Düşüklüğü Karşılığı (−)** | 654 karşılığında alacak; gerek kalmazsa 644'e |
| **245 Bağlı Ortaklıklar** | %50'den fazla sermaye/oy hakkı veya yönetim çoğunluğunu seçme hakkı olan iştirakler |
| **246 Bağlı Ortaklıklara Sermaye Taahhütleri (−)** | |
| **247 Bağlı Ortaklıklar Sermaye Payları Değer Düşüklüğü Karşılığı (−)** | |
| **248 Diğer Mali Duran Varlıklar** / **249 Karşılığı (−)** | Diğerlerine girmeyenler |

## 4. %10 ve %50 sınırları
> [!ezber] Oy hakkı veya yönetime katılma hakkı **%10'un altında** → **240 Bağlı Menkul Kıymetler**; **en az %10, en fazla %50** → **242 İştirakler**; **%50'den fazla** → **245 Bağlı Ortaklıklar**. Bağlı ortaklık sahipliğinde kıstaslardan **yönetim çoğunluğunu seçme hakkı** esas alınır.

- İştirak ilişkisi için sermaye payına bakılmaksızın oy veya yönetime katılma hakkının **en az %10** olması gerekir.
- Payı **%10'un altına düşen** iştirak **240**'a (Diğer Ortaklıklar yardımcı hesabı), **%50'nin altına düşen** bağlı ortaklık **242**'ye devredilir.

**Örnek:** 600.000 TL iştirak payı taahhüdü, 200.000 TL'si ödendi.
| Borç | Alacak |
|---|---|
| 242 İştirakler 600.000 | 243 İştiraklere Sermaye Taahhütleri 600.000 |
| 243: 200.000 | 100 Kasa 200.000 |

- Değer düşüklüğü 85.000 → **654** borç / **244** alacak. Sonradan karşılığın 40.000 yeterli olduğu anlaşıldı → **244** borç / **644** alacak **45.000**.
- Rüçhan hakkı kullanılmadığı için payı %10'un altına düşen iştirak: **240** borç / **242** alacak. Sermaye azaltımıyla payı %50'nin altına düşen bağlı ortaklık: **242** borç / **245** alacak.

## 5. 25 Maddi Duran Varlıklar
İşletme faaliyetlerinde kullanılmak üzere edinilen, **tahmini yararlanma süresi bir yıldan fazla** fiziki varlıklar ve birikmiş amortismanları.

| Hesap | İçerik |
|---|---|
| **250 Arazi ve Arsalar** | Her türlü arazi ve arsa |
| **251 Yeraltı ve Yerüstü Düzenleri** | Yol, hark, köprü, tünel, bölme, sarnıç, iskele vb. |
| **252 Binalar** | Binalar ve ayrılmaz parçaları |
| **253 Tesis, Makine ve Cihazlar** | Üretimdeki makine, tesis ve cihazlar ile bu amaçla kullanılan **taşıma gereçleri (konveyör, forklift)** |
| **254 Taşıtlar** | Faaliyetlerde kullanılan tüm taşıtlar (ulaştırma sektöründe ana üretimdekilerin toplamı dipnotta) |
| **255 Demirbaşlar** | Büro makine ve cihazları, döşeme, masa, koltuk, dolap, mobilya |
| **256 Diğer Maddi Duran Varlıklar** | Diğerlerine girmeyenler |
| **257 Birikmiş Amortismanlar (−)** | Ayrılan amortismanlar alacak |
| **258 Yapılmakta Olan Yatırımlar** | Yapımı süren yatırımların harcamaları; tamamlanınca ilgili MDV hesabına aktarılır |
| **259 Verilen Avanslar** | Sipariş edilen **maddi duran varlıklar** için avanslar |

## 6. 26 Maddi Olmayan Duran Varlıklar
| Hesap | İçerik | İtfa |
|---|---|---|
| **260 Haklar** | İmtiyaz, **patent**, lisans, **ticari marka**, unvan ve kamu otoritelerinin tanıdığı yetkiler | Yararlanma süresinde; süre belli değilse **5 yılda** eşit taksit |
| **261 Şerefiye** | İşletme devralınırken ödenen bedel ile **net varlıkların rayiç değeri** arasındaki **olumlu fark** (rayiç bedel yoksa net defter değeri) | **5 yılda** eşit taksit |
| **262 Kuruluş ve Örgütlenme Giderleri** | Kuruluş, şube açılışı, sürekli genişleme için yapılan ve maddi değer elde edilmeyen, **aktifleştirilen** giderler | Genelde **5 yılda** |
| **263 Araştırma ve Geliştirme Giderleri** | Yeni ürün ve teknolojiler için harcamaların **aktifleştirilen** kısmı | **5 yılda** |
| **264 Özel Maliyetler** | **Kiralanan** gayrimenkulü geliştirmek için yapılan ve kira sonunda mal sahibine kalacak harcamalar (normal bakım, onarım, temizlik **hariç**) | **Kira süresinde**; kira süresi 5 yıldan fazlaysa **5 yılda** |
| **268 Birikmiş Amortismanlar (−)** / **269 Verilen Avanslar** | | |

## 7. 27 Özel Tükenmeye Tabi Varlıklar
Belirli bir maddi varlıkla çok yakından ilgili veya tamamen tüketime tabi varlıklar için yapılan, üretimin zaman ve yoğunluğuyla **sınırlı ömre** sahip giderler.

| Hesap | İçerik |
|---|---|
| **271 Arama Giderleri** | Maden yatağının işletmeye elverişli olup olmadığını belirlemek ve petrol araştırması için yapılan giderler. **Rezerv saptanamazsa zarar** kaydedilir |
| **272 Hazırlık ve Geliştirme Giderleri** | Maden örtüsünü kaldırma, yol ve mecra açma, kuyu açma ve hazırlık giderleri |
| **277 Diğer Özel Tükenmeye Tabi Varlıklar** | |
| **278 Birikmiş Tükenme Payları (−)** | Varlıklar **tükenme payı** ayrılarak itfa edilir |
| **279 Verilen Avanslar** | |
`,
  sorular: [
    {
      s: "Notlara göre duran varlık kavramı ile ilgili hangisi doğrudur?",
      c: ["Duran varlıklar satmak amacıyla edinilir ve stoklarla birlikte izlenir", "Hukuk terminolojisinde taşınır büro eşyaları da sabit değer sayılır; muhasebede ise bunlar hiçbir durumda duran varlık değildir", "Satılması söz konusu olmayan bir duran varlığın kullanımına son verildiği anda duran varlık niteliği kaybolur", "Duran varlıklar bir yıl içinde tüketilmesi veya paraya çevrilmesi öngörülen varlıklardır", "Yalnızca fiziki yapısı olan varlıklar duran varlık olabilir; haklar bu kapsama girmez"],
      d: 2,
      a: "Duran varlıklar satmak için değil **kullanmak** için edinilir; taşınır büro eşyaları **muhasebede** duran varlıktır (hukuk yalnız taşınmazları sabit değer sayar). Satılması söz konusu olmayan bir duran varlığın kullanımına son verildiği anda **duran varlık niteliği kaybolur**.",
      k: "1016 resmi not s. 66"
    },
    {
      s: "Bir işletmenin başka bir şirkette sahip olduğu oy hakkı **%25** ise bu pay hangi hesapta izlenir?",
      c: ["242 İştirakler", "240 Bağlı Menkul Kıymetler", "245 Bağlı Ortaklıklar", "110 Hisse Senetleri", "248 Diğer Mali Duran Varlıklar"],
      d: 0,
      a: "Oy veya yönetime katılma hakkı **en az %10, en fazla %50** olan paylar **242 İştirakler**'de izlenir. %10'un altı **240 Bağlı Menkul Kıymetler**, %50'nin üstü **245 Bağlı Ortaklıklar**'dır.",
      k: "1016 resmi not s. 69-70"
    },
    {
      s: "Bir iştirakteki pay, sermaye artırımında rüçhan hakkı kullanılmadığı için **%10'un altına** düşmüştür. Yapılacak kayıt hangisidir?",
      c: ["242 İştirakler borç / 240 Bağlı Menkul Kıymetler alacak (sınıf değişikliği)", "Kayıt gerekmez", "245 Bağlı Ortaklıklar borç / 242 İştirakler alacak", "654 Karşılık Giderleri borç / 244 alacak", "240 Bağlı Menkul Kıymetler borç / 242 İştirakler alacak"],
      d: 4,
      a: "Payı **%10'un altına düşen** iştirak **240 Bağlı Menkul Kıymetler**'e (Diğer Ortaklıklar yardımcı hesabı) devredilir: **240** borç / **242** alacak. Payı %50'nin altına düşen bağlı ortaklık ise 245'ten 242'ye aktarılır.",
      k: "1016 resmi not s. 70-71"
    },
    {
      s: "Bir işletme, iştirak edeceği şirketin 500.000 TL'lik sermaye payını almayı **taahhüt etmiş**, henüz ödeme yapmamıştır. Kayıt hangisidir?",
      c: ["242 İştirakler borç / 243 İştiraklere Sermaye Taahhütleri alacak", "242 İştirakler borç / 100 Kasa alacak", "243 borç / 242 alacak", "240 Bağlı Menkul Kıymetler borç / 500 Sermaye alacak (taahhüt kaydı)", "Nazım hesaplarda izlenir"],
      d: 0,
      a: "İştirak için sermaye taahhüdünde bulunulduğunda **242 İştirakler** borç, **243 İştiraklere Sermaye Taahhütleri** alacak kaydedilir; taahhüt ödendikçe **243** borçlandırılır.",
      k: "1016 resmi not s. 69-70"
    },
    {
      s: "Üretimde kullanılan **forklift ve konveyör** gibi taşıma gereçleri hangi hesapta izlenir?",
      c: ["254 Taşıtlar", "255 Demirbaşlar", "253 Tesis, Makine ve Cihazlar", "251 Yeraltı ve Yerüstü Düzenleri", "150 İlk Madde ve Malzeme"],
      d: 2,
      a: "**253 Tesis, Makine ve Cihazlar**, üretimde kullanılan makine, tesis ve cihazlar ile bu amaçla kullanılan **taşıma gereçlerini (konveyör, forklift vb.)** kapsar.",
      k: "1016 resmi not s. 72"
    },
    {
      s: "**Şerefiye** ile ilgili hangisi doğrudur?",
      c: ["İşletmenin kendi faaliyetleriyle ürettiği itibar değeri olarak aktifleştirilir", "Bedeli ödenmeden de kaydedilebilir; değeri yönetim kurulu kararıyla belirlenir", "Hiçbir zaman itfa edilmez; her yıl yalnızca değer düşüklüğü testine tabi tutulur", "Maddi duran varlıklar grubunda izlenir ve binalarla aynı oranda amortismana tabidir", "Ödenen bedelin net varlıkların rayiç değerini aşan kısmıdır; 5 yılda itfa edilir"],
      d: 4,
      a: "**261 Şerefiye**, bir işletme devralınırken katlanılan maliyet ile **net varlıkların rayiç değeri** arasındaki **olumlu farktır** (rayiç bedel yoksa net defter değeri). Muhasebeleştirilmesi için **bedelinin ödenmiş** olması gerekir; **5 yılda** eşit taksitlerle itfa edilir.",
      k: "1016 resmi not s. 73, 80"
    },
    {
      s: "Kiralanan bir gayrimenkulün ekonomik değerini sürekli artırmak için yapılan ve kira sonunda mal sahibine kalacak harcamalar hangi hesapta izlenir ve nasıl itfa edilir?",
      c: ["264 Özel Maliyetler; kira süresince (5 yılı aşarsa 5 yılda)", "252 Binalar; 50 yılda eşit taksitlerle", "262 Kuruluş ve Örgütlenme Giderleri; hiç itfa edilmez", "770 Genel Yönetim Giderleri; yapıldığı yılda bir defada", "280 Gelecek Yıllara Ait Giderler; kira sözleşmesi bitince"],
      d: 0,
      a: "Bu harcamalar **264 Özel Maliyetler**'de izlenir (normal bakım, onarım ve temizlik hariç). **Kira süresi içinde**, kira süresi **beş yıldan fazlaysa beş yılda** eşit tutarlarla itfa edilir.",
      k: "1016 resmi not s. 73"
    },
    {
      s: "Özel tükenmeye tabi varlıklarda **arama faaliyetleri sonucunda üretilebilir cevher rezervi saptanamazsa** yapılan giderler nasıl işlem görür?",
      c: ["Aktifte bekletilir", "Özkaynaklara eklenir", "Bir sonraki arama giderine eklenir", "Birikmiş tükenme paylarına aktarılır", "Zarar kaydedilir"],
      d: 4,
      a: "**271 Arama Giderleri**'nde izlenen harcamalar, arama sonucunda **üretilebilir cevher rezervi saptanamamışsa zarar** kaydedilir. Rezerv varsa varlıklar **tükenme payı** ayrılarak itfa edilir.",
      k: "1016 resmi not s. 74"
    }
  ]
});
