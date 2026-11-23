SPL.gun("1016", 17, {
  okuma: `
## Bugünün haritası
Uzun vadeli yabancı kaynakları bitiriyoruz: **43 Diğer Borçlar**, **44 Alınan Avanslar**, **47 Borç ve Gider Karşılıkları** (kıdem tazminatı ve dava karşılığı örnekleri), **48 Gelecek Yıllara Ait Gelirler ve Gider Tahakkukları** ve **49** grubu (özellikle **493 Tesise Katılma Payları**).

1. **43 Diğer Borçlar**
2. **44 Alınan Avanslar**
3. **47 Borç ve Gider Karşılıkları**
4. **472 Kıdem Tazminatı Karşılığı**
5. **479** ve dava karşılığı örneği
6. **48** grubu
7. **49** grubu ve **493 Tesise Katılma Payları**

---

## 1. 43 Diğer Borçlar
Ana faaliyet konusu **dışındaki** nedenlerle doğan, vadesi bir yıldan uzun borçlar.

| 43 | 33'teki paraleli |
|---|---|
| 431 Ortaklara Borçlar | 331 |
| 432 İştiraklere Borçlar | 332 |
| 433 Bağlı Ortaklıklara Borçlar | 333 |
| 436 Diğer Çeşitli Borçlar (kira, komisyon, faiz borçları gibi) | 336 |
| 437 Diğer Borç Senetleri Reeskontu (−) | 337 |
| **438 Kamuya Olan Ertelenmiş veya Taksitlendirilmiş Borçlar** | **368** |

> [!dikkat] Paralelliği bozan tek hesap **438**'dir: kısa vadedeki karşılığı 33 grubunda değil, **368 Vadesi Geçmiş, Ertelenmiş veya Taksitlendirilmiş Vergi ve Diğer Yükümlülükler** hesabıdır.

- 431-433-436: borç doğunca alacak; vade bir yılın altına düşünce veya **erken ödemede** borç.
- **438'deki tecil faizleri:** ödemesi tahakkuktan itibaren **bir yılı aşıyorsa 438**'e, aksi hâlde kısa vadeli ilgili hesaba alacak yazılır.

## 2. 44 Alınan Avanslar
- **440 Alınan Sipariş Avansları:** gelecekteki mal-hizmet teslimleri için peşin tahsil edilen, vadesi **bir yılı aşan** tutarlar; vade bir yılın altına düşünce **340**'a aktarılır.
- **449 Alınan Diğer Avanslar:** sipariş avansı dışındakiler; kısa vadeye geçince **349**'a.
- Yabancı paralı avanslar dönem sonunda **bilanço günü kuruyla** değerlenir.

## 3. 47 Borç ve Gider Karşılıkları
- 37 grubunun uzun vadeli karşılığıdır; **pasif karakterli** hesaplardır, aktifi düzenlemez.
- Bu grupta **doğmuş ama izleyen yıldan sonra ödeme aşamasına gelecek** borçlar yer alır.

> [!ezber] Karşılık ayrılırken alacaklı ile irtibat sağlanmadığı, yani tutar onun için nakden veya hesaben **elde edilmiş** sayılmadığı için **vergi ve fon kesintisi yapılmaz**. Vergi kesintisi **nakden ödeme** veya **alacaklının hesabına alacak kaydetme** aşamasında yapılır.

## 4. 472 Kıdem Tazminatı Karşılığı
- İş Kanunu'na göre kıdem tazminatlarının yanında **emeklilik ikramiyeleri** ve çalışanların işletmeden **ayrılmasına bağlı** diğer ödemelerin karşılıkları da burada.

**Örnek:** yıl sonu karşılık 18.000; izleyen yıl emekli olacak muhasebeci için tahmini tazminat 8.500; Nisan'da fiilen 8.700 ödendi.
| İşlem | Borç | Alacak |
|---|---|---|
| Karşılık ayrılması | 770: 18.000 | 472: 18.000 |
| Kısa vadeye aktarma | 472: 8.500 | 372: 8.500 |
| Ödeme | 372: 8.500; **472: 200** | 100 Kasa: 8.700 |

> [!ezber] Ödeme 372'ye aktarılan tutarı aşarsa fazlası **yeni aktarma yapılmadan doğrudan 472'nin borcuna** yazılır. Daha önce gider yazılan tutarlar ödemede **tekrar gider yazılmaz**.

## 5. 479 Diğer Borç ve Gider Karşılıkları
Kıdem tazminatı dışında kalan ve **önemlilik** gereği ayrı hesapta izlenmesi mümkün olmayan karşılıklar.

**Örnek:** 100.000 TL tazminat davası; hukukçulara göre **2 yıl içinde** ve **%70 olasılıkla** aleyhe sonuçlanacak.
- **689 Diğer Olağandışı Gider ve Zararlar** borç / **479** alacak **70.000** (ihtiyatlılık: olay cari dönemde).
- İzleyen dönemde sonuçlanması beklenince: **479** borç / **379** alacak 70.000.
- Dava sonucunda:
  - Aynen ödenirse **379** borçlanarak kapanır.
  - **Fazla** ödenirse fark **681 Önceki Dönem Gider ve Zararları**.
  - **Az** ödenirse fark **671 Önceki Dönem Gelir ve Kârları**.

> [!dikkat] Bu karşılıklar aktifi düzenleyici olmadığından, iptal edilen tutar **644 Konusu Kalmayan Karşılıklar**'a **gelir yazılmaz**.

## 6. 48 Gelecek Yıllara Ait Gelirler ve Gider Tahakkukları
Dönem ayırıcı gruplardan **dördüncüsüdür** (180-181, 280-281, 380-381, 480-481).
- **480 Gelecek Yıllara Ait Gelirler:** peşin tahsil edilen gelirlerin **bir yıldan uzun** süreye ait kısmı; kısa vadeli nitelik kazanınca **380**'e aktarılır (örnek 24.000: 480 borç / 380 alacak; izleyen dönemde 380 kapatılarak gelir **649**'a yazılır).
- **481 Gider Tahakkukları:** cari döneme ait olup ödemesi **gelecek yıllarda** yapılacak, **belgeye dayalı** giderler; bir yıl içinde istenebilir duruma gelenler **381**'e aktarılır.
- Örnek: vadesi izleyen yılda dolacak 200.000 TL kredi ve 481'de tahakkuk etmiş 30.000 faiz → **400** borç / **303** alacak 200.000; **481** borç / **381** alacak 30.000. Ödemede faiz **yeniden gider yazılmaz**, yalnız 381 kapatılır.

## 7. 49 Diğer Uzun Vadeli Yabancı Kaynaklar
| Hesap | İçerik |
|---|---|
| **492 Gelecek Yıllara Ertelenen veya Terkin Edilecek KDV** | Teşvikli yatırım malı ithalinde ertelenen KDV ve ihraç kaydıyla teslimlerde tecil olunan KDV; kısa vadeli olunca **392 Diğer KDV**'ye aktarılır |
| **493 Tesise Katılma Payları** | Üçüncü kişilerin işletme tesislerinden yararlanmak için **tesis bedellerine katılma** payları |
| **499 Diğer Çeşitli Uzun Vadeli Yabancı Kaynaklar** | Kısa vadeye geçince **399**'a |

> [!ezber] **493**, 3 sınıfında karşılığı bulunmayan ve paralelliği bozan hesaptır. Tahsil edilen pay **dönemsellik** gereği tahsil yılında gelir yazılmaz; tesisin ömrüne göre her yıl itfa edilerek **649 Diğer Olağan Gelir ve Kârlar**'a aktarılır. Örnek: 50.000 TL, ömür 20 yıl → her yıl **493** borç / **649** alacak **2.500**.
`,
  sorular: [
    {
      s: "Uzun vadeli **43 Diğer Borçlar** grubunda, kısa vadedeki karşılığı 33 grubunda yer almayan ve paralelliği bozan hesap hangisidir?",
      c: ["431 Ortaklara Borçlar", "436 Diğer Çeşitli Borçlar (kira, komisyon, faiz)", "438 Kamuya Olan Ertelenmiş Borçlar", "432 İştiraklere ve 433 Bağlı Ortaklıklara Borçlar", "437 Diğer Borç Senetleri Reeskontu (−)"],
      d: 2,
      a: "**438**'in kısa vadedeki karşılığı 33 grubunda değil, **368 Vadesi Geçmiş, Ertelenmiş veya Taksitlendirilmiş Vergi ve Diğer Yükümlülükler** hesabıdır; bu nedenle paralelliği bozar.",
      k: "1016 resmi not s. 138"
    },
    {
      s: "Gelecekteki mal teslimleri için peşin tahsil edilen ve vadesi **bir yılı aşan** avans hangi hesaba alacak yazılır?",
      c: ["340 Alınan Sipariş Avansları", "449 Alınan Diğer Avanslar", "480 Gelecek Yıllara Ait Gelirler", "259 Verilen Avanslar", "440 Alınan Sipariş Avansları"],
      d: 4,
      a: "Vadesi bir yılı aşan sipariş avansları **440**'ta izlenir; vadesi bir yılın altına düşünce **340**'a aktarılır. 449 ise sipariş avansı dışındaki uzun vadeli avanslar içindir.",
      k: "1016 resmi not s. 140"
    },
    {
      s: "Uzun vadeli borç ve gider karşılıkları ayrılırken **vergi ve fon kesintisi yapılmamasının** nedeni nedir?",
      c: ["Tutar alacaklı için henüz elde edilmiş sayılmadığı için; kesinti ödemede yapılır", "Karşılıklar aktifi düzenleyici hesaplar olduğu ve varlıklardan indirildiği için", "Karşılıklar her durumda gelir ve kurumlar vergisinden istisna tutulduğu için", "Kesinti yalnız kısa vadeli karşılıklarda yapılıp uzun vadelilerde yapılmadığı için", "Karşılıklar gider sayılmadığı ve dönem kârını hiç etkilemediği için"],
      d: 0,
      a: "Karşılık ayrılırken alacaklı ile irtibat yoktur, tutar onun için elde edilmiş sayılmaz. Vergi kesintisi **nakden ödeme** veya **alacaklının hesabına alacak kaydetme** aşamasında yapılır.",
      k: "1016 resmi not s. 140"
    },
    {
      s: "İzleyen yıl emekli olacak personel için 372'ye 10.000 TL aktarılmış, ödeme günü personele 10.600 TL ödenmiştir. Ödeme kaydı hangisidir?",
      c: ["372: 10.000 ve 770: 600 borç / 100 Kasa: 10.600 alacak", "372: 10.600 borç / 100 Kasa: 10.600 alacak", "472: 10.600 borç / 100 Kasa: 10.600 alacak", "372: 10.000 ve 472: 600 borç / 100 Kasa: 10.600 alacak", "770: 10.600 borç / 100 Kasa: 10.600 alacak"],
      d: 3,
      a: "Ödeme 372'ye aktarılan tutarı aşarsa fazlası **yeni bir aktarma yapılmadan** doğrudan **472**'nin borcuna yazılır: 372: 10.000, 472: 600 / Kasa: 10.600. Daha önce gider yazılan tutar tekrar gider yazılmaz.",
      k: "1016 resmi not s. 141"
    },
    {
      s: "İşletme aleyhine 200.000 TL tazminat davası açılmıştır; davanın 2 yıl içinde ve **%60 olasılıkla** aleyhe sonuçlanacağı tahmin edilmektedir. Cari dönemde yapılacak kayıt hangisidir?",
      c: ["689 Diğer Olağandışı Gider ve Zararlar borç / 479 Diğer Borç ve Gider Karşılıkları alacak (tamamı) 200.000 TL", "Dava sonuçlanana kadar kayıt yapılmaz; yalnız dipnotta açıklanır", "689 Diğer Olağandışı Gider ve Zararlar borç / 379 Diğer Borç ve Gider Karşılıkları alacak 120.000 TL", "654 Karşılık Giderleri borç / 479 Diğer Borç ve Gider Karşılıkları alacak 120.000 TL", "689 Diğer Olağandışı Gider ve Zararlar borç / 479 Diğer Borç ve Gider Karşılıkları alacak 120.000 TL"],
      d: 4,
      a: "Kitaptaki örneğe göre beklenen tutar (200.000 × %60 = **120.000 TL**) ihtiyatlılık gereği cari dönemde **689** borç / **479** alacak kaydedilir. İzleyen dönemde sonuçlanması beklenince 479'dan **379**'a aktarılır.",
      k: "1016 resmi not s. 142"
    },
    {
      s: "Daha önce 479/379'da karşılık ayrılan dava, beklenenden **az** tazminatla sonuçlanmıştır. Aradaki fark hangi hesaba alınır?",
      c: ["671 Önceki Dönem Gelir ve Kârları", "644 Konusu Kalmayan Karşılıklar", "679 Diğer Olağandışı Gelir ve Kârlar", "681 Önceki Dönem Gider ve Zararları", "649 Diğer Olağan Gelir ve Kârlar"],
      d: 0,
      a: "Önceki dönemde gider yazılmış fark **671 Önceki Dönem Gelir ve Kârları**'na alınır. Bu karşılıklar aktifi düzenleyici olmadığından fark **644**'e gelir yazılmaz. Fazla ödenirse fark **681**'e alınır.",
      k: "1016 resmi not s. 142"
    },
    {
      s: "Daha önce 481'de tahakkuk ettirilmiş kredi faizinin **izleyen yıl** ödeneceği dönem sonunda anlaşılmıştır. Yapılacak kayıt hangisidir?",
      c: ["780 Finansman Giderleri borç / 381 Gider Tahakkukları alacak", "480 Gelecek Yıllara Ait Gelirler borç / 380 alacak", "381 Gider Tahakkukları borç / 481 Gider Tahakkukları alacak", "481 Gider Tahakkukları borç / 102 Bankalar alacak", "481 Gider Tahakkukları borç / 381 Gider Tahakkukları alacak"],
      d: 4,
      a: "Bir yıl içinde istenebilir duruma gelen tutar uzun vadeden kısa vadeye aktarılır: **481** borç / **381** alacak. Ödemede faiz yeniden gider yazılmaz, yalnız **381** kapatılır.",
      k: "1016 resmi not s. 143-144"
    },
    {
      s: "İşletme, tesisinden yararlandıracağı başka bir işletmeden 80.000 TL **tesise katılma payı** tahsil etmiştir; tesisin ekonomik ömrü 20 yıldır. Her yıl yapılacak kayıt hangisidir?",
      c: ["493 borç / 649 Diğer Olağan Gelir ve Kârlar alacak 4.000 TL", "100 Kasa borç / 649 Diğer Olağan Gelir ve Kârlar alacak 80.000 TL", "770 Genel Yönetim Giderleri borç / 257 alacak 4.000 TL", "493 Tesise Katılma Payları borç / 393 alacak 4.000 TL", "649 Diğer Olağan Gelir ve Kârlar borç / 493 alacak 4.000 TL"],
      d: 0,
      a: "Tahsil edilen pay **493**'e alacak yazılır ve dönemsellik gereği tesisin ömrüne yayılır: 80.000 / 20 = **4.000 TL** her yıl **493** borç / **649** alacak. 493'ün kısa vadede paraleli yoktur.",
      k: "1016 resmi not s. 144-145"
    }
  ]
});
