SPL.gun("1016", 16, {
  okuma: `
## Bugünün haritası
**4 Uzun Vadeli Yabancı Kaynaklar** sınıfına geçiyoruz: grubun **3 ile paralel** yapısı, **40 Mali Borçlar** (banka kredileri, tahviller, ihraç farkı) ve **42 Ticari Borçlar**.

1. Uzun vadeli yabancı kaynakların yapısı
2. **400 Banka Kredileri** ve dönem sonu işlemleri
3. **405 Çıkarılmış Tahviller**
4. İskontolu ihraç: **408 Menkul Kıymetler İhraç Farkı**
5. **407 Çıkarılmış Diğer Menkul Kıymetler**
6. **42 Ticari Borçlar**

---

## 1. Yapı
Uzun vadeli yabancı kaynaklar işletmenin **bir yıldan uzun vadeli** borçlarıdır. Gruplar: **40** Mali Borçlar, **42** Ticari Borçlar, **43** Diğer Borçlar, **44** Alınan Avanslar, **47** Borç ve Gider Karşılıkları, **48** Gelecek Yıllara Ait Gelirler ve Gider Tahakkukları, **49** Diğer Uzun Vadeli Yabancı Kaynaklar.

> [!ezber] Hesaplar alacak kaydıyla açılır. Vadesine **bir yıl veya daha az** kalan tutarlar **3** sınıfındaki **paralel** hesaba aktarılır ve 4'teki hesap borçlanır (40 → 30, 42 → 32, 43 → 33 ...). 3'teki **35** ve **36** gruplarının 4'te karşılığı yoktur.

## 2. 400 Banka Kredileri
Banka ve diğer finans kuruluşlarından alınan **bir yıldan uzun** vadeli krediler; **kayıtlı değerle** değerlenir.

| **Alacaklanır** | **Borçlanır** |
|---|---|
| Kredinin nakden veya hesaben çekilmesi | Bir yıl içinde ödenecek anapara taksitlerinin **303 Uzun Vadeli Kredilerin Anapara Taksitleri ve Faizleri**'ne aktarılması |
| Faiz ve komisyonların anaparaya eklenmesi | Kredinin vadesinden önce ödenmesi |
| Yabancı paralı kredide değerleme ile TL karşılığının artması | Yabancı paralı kredide TL karşılığının azalması |

- Kredi bir kefalet karşılığı alınmışsa kefalet **nazım hesaplarda** izlenir.

**Dönem sonu faiz tahakkuku:** önceki yıl %20 faizle alınmış 200.000 TL kredi → 40.000 faiz.
- Faiz **dönem sonu** ödemeli: **780 Finansman Giderleri** / **381 Gider Tahakkukları**
- Faiz **vade sonu** ödemeli ve bir yıl içinde ödenmeyecek: **780** / **481 Gider Tahakkukları**
- İstenebilir duruma gelen faiz borçları **303**'e kaydedilir.
- **Dövize endeksli** kredide endeksli tutar ile kayıtlı tutar arasındaki fark **481** karşılığı gider yazılır.
- **Yabancı paralı** kredi bilanço günü kuruyla değerlenir: 15.000 YP, kur 1,50 → 1,55: 15.000 × 0,05 = **750** → 780 borç / 400 alacak.

## 3. 405 Çıkarılmış Tahviller
- Vadesi bir yılı aşan tahviller **nominal bedelle** alacak kaydedilir. **Hisse senedi ile değiştirilebilir** ve **erken paraya çevrilebilir** tahvillerin tutarı ve niteliği **dipnotlarda** belirtilir.
- Bir yıl içinde ödenecek anapara taksitleri **304 Tahvil Anapara Borç, Taksit ve Faizleri**'ne aktarılır.

**Örnek:** 1 Ocak'ta %20 faizli, 5 yıl vadeli 300.000 TL tahvil başabaş satıldı; anapara 5 eşit taksitle.
| İşlem | Borç | Alacak |
|---|---|---|
| İhraç | 102: 300.000 | 405: 300.000 |
| Dönem sonu, 1 yıllık taksit | 405: 60.000 | 304: 60.000 |
| Dönem sonu faiz tahakkuku | 780: 48.000 | 381: 48.000 |
| 1 Ocak ödeme | 381: 48.000; 304: 60.000 | 102: 108.000 |

> [!dikkat] Faiz tahakkuku, kısa vadeye aktarıldıktan sonra **405'te kalan 240.000** üzerinden hesaplanmıştır (240.000 × %20 = 48.000).

## 4. İskontolu ihraç ve 408
**408 Menkul Kıymetler İhraç Farkı (−):** **nominal değerinin altında** ihraç edilen tahvil, senet vb. uzun vadeli menkul kıymetlerin nominal değeri ile satış fiyatı arasındaki farkın **gelecek yıllara ait** kısmı.

**Örnek:** 150.000 TL nominal, 5 yıl vadeli tahvil 100.000 TL'ye satıldı (fark 50.000).
| Borç | Alacak |
|---|---|
| 102 Bankalar 100.000 | 405: 150.000 |
| 780: 10.000 (cari yılın payı) | |
| **308**: 10.000 (izleyen yılın payı) | |
| **408**: 30.000 (sonraki yılların payı) | |

- Her dönem sonunda izleyen yıla ait kısım **408 → 308**'e aktarılır.
- Dövize endeksli tahvillerde fark **481** karşılığı gider; yabancı paralı tahvillerde kur artışı **780** / **405** (20.000 YP, kur 2 → 2,1: **2.000**).

## 5. 407 Çıkarılmış Diğer Menkul Kıymetler
- **Katılma intifa senedi** ve özkaynak niteliğindeki menkul kıymetler **dışındaki**, vadesi bir yıldan uzun menkul değerler (ör. **varlığa dayalı menkul kıymet**, **kâr ve zarar ortaklığı belgesi**); kayıtlı değerle değerlenir; bir yıl içinde ödenecek kısmı **306**'ya alınır.
- İşletme **katılma intifa senedi** ihraç ederse bu sermaye **500 Sermaye**'de; **geri satın alınan** intifa senetleri ise **11 Menkul Kıymetler** grubunda gösterilir.
- **409 Diğer Mali Borçlar:** gruptaki hesapların hiçbirine girmeyenler.

## 6. 42 Ticari Borçlar
Vadesine **bir yıldan fazla** süre bulunan ticari borçlar. Ticari nitelikte olsa bile **iştiraklere ve bağlı ortaklıklara** olan borçlar **dipnotlarda** gösterilir.

| Hesap | İçerik |
|---|---|
| **420 Satıcılar** | Faaliyet konusu mal ve hizmet alımlarından uzun vadeli **senetsiz** borçlar; **mukayyet değerle** değerlenir |
| **421 Borç Senetleri** | Uzun vadeli **senetli** borçlar; işletmenin keşide ettiği vadesi bir yılı aşan **çekler** de burada |
| **422 Borç Senetleri Reeskontu (−)** | Senetli borçların **tasarruf değeriyle** değerlenmesi için ayrılan reeskont |
| **426 Alınan Depozito ve Teminatlar** | **Nakit** olarak alınan uzun vadeli depozito ve teminatlar |
| **429 Diğer Ticari Borçlar** | |

- **Ana faaliyet konusu dışındaki** alımlar için borçlanmalar 420/421'de değil **436 Diğer Çeşitli Borçlar**'da izlenir.
- SPK'ya tabi şirketlerde **3 aydan uzun vadeli** senetsiz borçlar reeskonta tabidir.
- Borç senedi reeskontu: **422** borç / **647 Reeskont Faiz Gelirleri** alacak; ertesi yıl **657 Reeskont Faiz Giderleri**'ne aktarılarak kapatılır.
- Yabancı paralı senette kur **azalırsa** fark **646 Kambiyo Kârları**, **artarsa** **656 Kambiyo Zararları**.
- Teminat olarak **menkul kıymet, senet, emtia** alınırsa bunlar 426'da değil **nazım hesaplarda** izlenir.
`,
  sorular: [
    {
      s: "Uzun vadeli yabancı kaynaklar sınıfındaki bir borcun vadesine **bir yıl veya daha az** süre kaldığında ne yapılır?",
      c: ["Kısa vadeli yabancı kaynaklardaki paralel hesaba aktarılır ve 4'teki hesap borçlanır", "Borç kayıtlardan çıkarılır ve fark gelir hesaplarına aktarılır", "Özkaynaklara aktarılır ve geçmiş yıllar kârları içinde izlenir", "Nazım hesaplara alınır ve vadesine kadar bilanço dışında tutulur", "Herhangi bir aktarma yapılmaz; borç vadesi gelene kadar aynı uzun vadeli hesapta bekletilir"],
      d: 0,
      a: "4 sınıfındaki hesaplar alacakla açılır; vadesine bir yıl veya daha az kalan tutarlar **3 Kısa Vadeli Yabancı Kaynaklar**'daki **paralel** hesaba aktarılırken 4'teki hesap borçlanır (ör. 400 → 303, 420 → 320).",
      k: "1016 resmi not s. 129"
    },
    {
      s: "Faizi **vade sonunda** ödenecek ve bilanço tarihinden itibaren bir yıl içinde ödenmeyecek uzun vadeli kredi faizi dönem sonunda nasıl kaydedilir?",
      c: ["780 Finansman Giderleri borç / 381 Gider Tahakkukları alacak (kısa vade)", "Faiz ödenene kadar kayıt yapılmaz", "780 borç / 400 Banka Kredileri alacak", "381 borç / 780 alacak", "780 Finansman Giderleri borç / 481 Gider Tahakkukları alacak"],
      d: 4,
      a: "Faiz dönem sonu ödemeli ise **381**, bir yıl içinde ödenmeyecek ise uzun vadeli **481 Gider Tahakkukları** karşılığında **780 Finansman Giderleri**'ne yazılır.",
      k: "1016 resmi not s. 131-132"
    },
    {
      s: "Dönem içinde 1 YP = 1,50 TL kurundan 20.000 YP uzun vadeli kredi alınmıştır. Dönem sonu kuru 1,60 TL ise yapılacak kayıt hangisidir?",
      c: ["100 Kasa borç / 646 Kambiyo Kârları alacak 2.000 TL", "780 Finansman Giderleri borç / 381 Gider Tahakkukları alacak 32.000 TL", "400 Banka Kredileri borç / 780 Finansman Giderleri alacak 2.000 TL", "780 Finansman Giderleri borç / 400 Banka Kredileri alacak 2.000 TL", "Kayıt yapılmaz; kur farkı kredi ödendiğinde dikkate alınır"],
      d: 3,
      a: "Yabancı paralı kredi bilanço günü kuruyla değerlenir: 20.000 × (1,60 − 1,50) = **2.000 TL** artış → **780** borç / **400** alacak.",
      k: "1016 resmi not s. 132"
    },
    {
      s: "1 Ocak'ta %20 faizli, 5 yıl vadeli, anaparası beş eşit taksitte ödenecek 500.000 TL tahvil başabaş ihraç edilmiştir. Dönem sonunda **304**'e aktarılacak taksit ve 405'te kalan tutar üzerinden tahakkuk eden faiz sırasıyla nedir?",
      c: ["100.000 TL ve 100.000 TL", "100.000 TL ve 20.000 TL", "500.000 TL ve 100.000 TL", "80.000 TL ve 100.000 TL", "100.000 TL ve 80.000 TL"],
      d: 4,
      a: "Yıllık taksit 500.000 / 5 = **100.000 TL** (405 borç / 304 alacak). Kitaptaki örnekte faiz, aktarmadan sonra 405'te kalan tutar üzerinden hesaplanır: 400.000 × %20 = **80.000 TL** (780 / 381).",
      k: "1016 resmi not s. 132-133"
    },
    {
      s: "Nominal değerinin altında ihraç edilen tahvillerde nominal değer ile satış fiyatı arasındaki farkın **gelecek yıllara ait** kısmı hangi hesapta izlenir?",
      c: ["780 Finansman Giderleri", "308 Menkul Kıymetler İhraç Farkı", "408 Menkul Kıymetler İhraç Farkı (−)", "405 Çıkarılmış Tahviller", "481 Gider Tahakkukları"],
      d: 2,
      a: "İskontolu ihraçta farkın gelecek yıllara ait kısmı **408**'de izlenir; izleyen yıla ait kısmı dönem sonunda **308**'e aktarılır, cari yıla ait kısım **780**'e gider yazılır.",
      k: "1016 resmi not s. 133-134"
    },
    {
      s: "İşletme **katılma intifa senedi** ihraç etmiştir. Katılma intifa senedi sermayesi ve geri satın alınan intifa senetleri nerede gösterilir?",
      c: ["500 Sermaye; 11 Menkul Kıymetler grubunda", "407 Çıkarılmış Diğer Menkul Kıymetler; 407'de", "405 Çıkarılmış Tahviller; 242'de", "529 Diğer Sermaye Yedekleri; 500'de", "Nazım hesaplarda; 11 grubunda"],
      d: 0,
      a: "Katılma intifa senedi sermayesi özkaynaklarda **500 Sermaye** hesabında; geri satın alınan intifa senetleri dönen varlıklarda **11 Menkul Kıymetler** grubunda gösterilir. 407 bu senetleri kapsamaz.",
      k: "1016 resmi not s. 134"
    },
    {
      s: "İşletmenin **ana faaliyet konusu dışındaki** bir alım için imzaladığı, vadesi bir yılı aşan senet hangi hesapta izlenir?",
      c: ["421 Borç Senetleri", "420 Satıcılar", "436 Diğer Çeşitli Borçlar", "426 Alınan Depozito ve Teminatlar", "321 Borç Senetleri"],
      d: 2,
      a: "420 ve 421'de yalnızca **ana faaliyet konusu** mal ve hizmet alımlarından doğan borçlar izlenir. Faaliyet konusu dışındaki alımlar için borçlanmalar **436 Diğer Çeşitli Borçlar**'da izlenir.",
      k: "1016 resmi not s. 136-137"
    },
    {
      s: "Uzun vadeli bir borcun teminatı olarak üçüncü kişiden **menkul kıymet veya emtia** alınmıştır. Bu teminat nerede izlenir?",
      c: ["426 Alınan Depozito ve Teminatlar", "110 Hisse Senetleri", "336 Diğer Çeşitli Borçlar", "Nazım hesaplarda", "153 Ticari Mallar"],
      d: 3,
      a: "426'da yalnızca **nakit** olarak alınan uzun vadeli depozito ve teminatlar izlenir; menkul kıymet, senet, emtia gibi değerler teminat olarak alınırsa **nazım hesaplarda** izlenir.",
      k: "1016 resmi not s. 137"
    }
  ]
});
