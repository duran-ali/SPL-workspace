SPL.gun("1016", 5, {
  okuma: `
## Bugünün haritası
Bugün dönen varlıkların en kalabalık grubuna giriyoruz: **12 Ticari Alacaklar**. Hesapların tanımlarını, **alıcılar** ve **alacak senetleri** kayıtlarını, senetlerin **tahsil, iskonto, ciro, protesto, yenileme ve iptal** işlemlerini ve **hatır senetlerini** göreceğiz.

1. Alacakların sınıflandırılması
2. **12 Ticari Alacaklar** grubundaki hesaplar
3. **120 Alıcılar**
4. **121 Alacak Senetleri**: senet türleri ve tahsil
5. **İskonto** ve **ciro**: nazım hesaplar
6. **Protesto, yenileme, iptal**
7. **Hatır senetleri**

---

## 1. Alacakların sınıflandırılması
- İşlemler **peşin** (para, çek, virman) veya **kredili** olur; kredili işlemler **alacak hesaplarında** (borçlu hesaplarda) izlenir.
- En önemli ayrım: **ticari alacaklar** ve **diğer alacaklar**; her ikisi de **kısa** ve **uzun vadeli** olabilir.

> [!ezber] **12 Ticari Alacaklar:** **bir yıl içinde** paraya dönüşmesi öngörülen ve işletmenin **ticari ilişkisinden** doğan **senetli ve senetsiz** alacaklar. Ana kuruluş, iştirak ve bağlı ortaklıklardan ticari alacaklar ilgili hesapların ayrıntılarında gösterilir.

## 2. Ticari alacaklar grubundaki hesaplar
| Hesap | İçerik | İşleyiş |
|---|---|---|
| **120 Alıcılar** | Faaliyet konusu mal ve hizmet satışlarından **senetsiz** alacaklar | Doğunca borç, tahsilde alacak |
| **121 Alacak Senetleri** | Aynı satışlardan **senede bağlanmış** alacaklar | Alınca borç, tahsilde alacak |
| **122 Alacak Senetleri Reeskontu (−)** | Senetli alacakların bilanço gününde **tasarruf (peşin) değeriyle** değerlenmesi | Reeskont alacak / **657** gider; izleyen dönemde **647 Reeskont Faiz Gelirleri**'ne aktarılarak kapatılır |
| **124 Kazanılmamış Finansal Kiralama Faiz Gelirleri (−)** | Kiralama alacağı ile kira ödemelerinin **bugünkü değeri** arasındaki fark | Gerçekleşen faiz 60 Brüt Satışlar'a; esas faaliyeti kiralama olmayanlarda **64** grubundaki faiz gelirine |
| **126 Verilen Depozito ve Teminatlar** | Geri alınmak üzere verilen depozito ve teminatlar | Verilince borç, geri alınınca alacak |
| **127 Diğer Ticari Alacaklar** | Yukarıdakilere girmeyen, **tahsili gecikmiş** (henüz şüpheli olmayan) ve diğer **senetsiz** ticari alacaklar | |
| **128 Şüpheli Ticari Alacaklar** | Vadesi geçmiş, protesto edilmiş, yazıyla birden fazla istenmiş, **dava veya icraya** aktarılmış alacaklar | Normal alacaklardan çıkarılıp borç yazılır |
| **129 Şüpheli Ticari Alacaklar Karşılığı (−)** | 128 için ayrılan karşılıklar | Karşılık alacak / **654** gider |

## 3. 120 Alıcılar
**Alıcılar (müşteriler):** kredili satış yapılan kişiler. İşletme **güvendiği** alıcılarına **senet istemeden** açık hesap satış yapar.

**Örnek:** 30.000 TL'lik mal kredili satıldı (KDV %18).
| Borç | Alacak |
|---|---|
| 120 Alıcılar 35.400 | 600 Yurtiçi Satışlar 30.000; 391 Hesaplanan KDV 5.400 |

## 4. 121 Alacak Senetleri
Yardımcı hesaplar: **cüzdandaki**, **tahsildeki**, **iskontodaki**, **cirodaki**, **teminattaki** senetler.

| Senet türü | Özelliği |
|---|---|
| **Adi senetler** | Borçlar Kanunu'na göre düzenlenen, **belli bir biçime bağlı olmayan** senetler; ticari önemi azdır |
| **Kıymetli evrak** niteliğindeki senetler | **TTK**'ya göre düzenlenen, **belli biçime bağlı**, hakkın **senede bağlı** olduğu senetler: **kambiyo (ticari) senetleri** ve **mal (emtia) senetleri** |

> [!ezber] **Kambiyo senetleri:** **poliçe**, **emre muharrer senet (bono)** ve **çek**.

**Banka aracılığıyla tahsil:** önce cüzdandan tahsildeki senetlere aktarılır; banka tahsil edince **102 Bankalar** ve komisyon için **653 Komisyon Giderleri** borç, **121 (Tahsildeki)** alacak.

## 5. İskonto ve ciro
- **İskonto:** alacak senedinin **vadesinden önce bankaya satılması**; bankaların nakit kredi yöntemlerinden biridir. Senet banka tarafından tahsil edilene kadar iskonto ettirenin **sorumluluğu sürer**.

**Örnek:** 98.000 TL'lik bono iskonto ettirildi, iskonto ve giderler 15.000 TL.
| Borç | Alacak |
|---|---|
| 102 Bankalar 83.000; **780 Finansman Giderleri** 15.000 | 121 Alacak Senetleri 98.000 |
| 910 Nazım Hesaplar, Cirolarımız 98.000 | 911 Nazım Hesaplar, Cirolarımızdan Borçlar 98.000 |

- **Ciro:** senedin mal/hizmet bedelinin ya da bir borcun ödenmesinde kullanılması. Muhatap ödemezse işletme ödeyeceği için bu **sorumluluk nazım hesaplarda** izlenir; vadede ödeme yapılınca nazım hesaplar **ters kayıtla** kapatılır.

> [!bilgi] İşletmeler ciro ve iskontodan doğan sorumluluklarını **muhasebe dışı** da izleyebilir; bu durumda nazım veya geçici hesaplara kayıt yapılmaz.

## 6. Protesto, yenileme, iptal
- **Ödenmeme:** senet belli süre içinde **protesto** edilir; yine ödenmezse **icra** yoluyla izlenir. Protestolu senet ve protesto gideri **127 Diğer Ticari Alacaklar**'a aktarılır; protesto gideri önce **770 Genel Yönetim Giderleri**'ne yazılır.
- **Yenileme:** borçlu yeni koşullarla yeni senet önerir; eski senet iptal edilir. Örnek: 420.000 TL'lik bono 30.000 TL gecikme faiziyle yenilendi → 121 (yeni) 450.000 borç; 121 (eski) 420.000 ve **642 Faiz Gelirleri** 30.000 alacak.
- **İptal:** alacak, **açık hesap** alacağına dönüşür: **120 Alıcılar** borç / **121** alacak.

## 7. Hatır senetleri
> [!ezber] **Hatır senedi (finansman senedi):** işletmenin **ticari işleme dayanan gerçek bir alacağı olmadığı hâlde** kredi ihtiyacı için aldığı (ileri tarihli) çek, poliçe ve bonolar. İskonto ettirilerek veya ciro edilerek kullanılır.

- Muhatabı **banka** olan ve bankanın **kabul** ettiği hatır senedine **kabul kredisi** denir; banka **komisyon** alır.
- Kayıtlarda "Hatır Senetleri" başlığıyla **gösterilmemesi tercih edilir**; senedin hatır senedi olduğu **muhasebe dışı** izlenir.
- Hatır senedinden yararlanan işletme düzenleme, ciro, iskonto ve ödeme **giderlerini karşılamak zorundadır**; bu giderler **Genel Yönetim Giderleri**'ne yazılır.
- **Alınması:** **121 Alacak Senetleri** borç / **336 Diğer Çeşitli Borçlar** alacak.
`,
  sorular: [
    {
      s: "İşletmenin faaliyet konusu mal ve hizmet satışlarından doğan **senetsiz** alacakları hangi hesapta izlenir?",
      c: ["120 Alıcılar", "121 Alacak Senetleri", "127 Diğer Ticari Alacaklar", "136 Diğer Çeşitli Alacaklar", "126 Verilen Depozito ve Teminatlar"],
      d: 0,
      a: "Faaliyet konusu satışlardan doğan **senetsiz** alacaklar **120 Alıcılar**, senede bağlanmış olanlar **121 Alacak Senetleri** hesabında izlenir. Mal ve hizmet satışı dışındaki senetsiz ticari alacaklar 127'de izlenir.",
      k: "1016 resmi not s. 30"
    },
    {
      s: "**122 Alacak Senetleri Reeskontu** hesabının işleyişi ile ilgili hangisi doğrudur?",
      c: ["Reeskont tutarı bu hesaba borç, 647 Reeskont Faiz Gelirleri'ne alacak yazılır; izleyen dönemde 657 hesabına aktarılarak kapatılır", "Reeskont tutarı 780 Finansman Giderleri'ne yazılır ve karşılığı 121 hesabına alacaklanır", "Hesap hiçbir zaman kapatılmaz ve senet tahsil edilene kadar bakiyesi aynen korunur", "Yalnızca yabancı paralı senetler için kullanılır; TL senetlerde reeskont uygulanmaz", "Reeskont tutarı bu hesaba alacak, 657 Reeskont Faiz Giderleri'ne borç yazılır; izleyen dönemde 647'ye aktarılarak kapatılır"],
      d: 4,
      a: "Senetli alacakların bilanço gününde **tasarruf (peşin) değeriyle** değerlenmesi için hesaplanan reeskont **122**'ye alacak, **657 Reeskont Faiz Giderleri**'ne borç yazılır. İzleyen dönemde hesap **647 Reeskont Faiz Gelirleri**'ne aktarılarak kapatılır.",
      k: "1016 resmi not s. 30"
    },
    {
      s: "Aşağıdakilerden hangisi bir alacağın **128 Şüpheli Ticari Alacaklar** hesabına alınmasını gerektiren durumlardan biri **değildir**?",
      c: ["Vadesinin birkaç defa uzatılmış olması", "Protesto edilmiş olması", "Yazıyla birden fazla istenmiş olması", "Dava veya icra safhasına aktarılmış olması", "Vadesinin henüz gelmemiş olması"],
      d: 4,
      a: "Şüpheli ticari alacaklar; ödeme süresi geçtiği için **vadesi birkaç kez uzatılmış**, **protesto edilmiş**, **yazıyla birden fazla istenmiş** veya **dava/icra** safhasına aktarılmış senetli ve senetsiz alacaklardır. Vadesi gelmemiş alacak şüpheli değildir.",
      k: "1016 resmi not s. 31"
    },
    {
      s: "Aşağıdakilerden hangisi **kambiyo senetlerinden (ticari senetlerden)** biri **değildir**?",
      c: ["Poliçe", "Bono (emre muharrer senet)", "Çek", "Mal (emtia) senedi", "Hepsi kambiyo senedidir"],
      d: 3,
      a: "Kıymetli evrak niteliğindeki senetler **kambiyo senetleri** ve **mal (emtia) senetleri** olarak ikiye ayrılır. Kambiyo senetleri **poliçe**, **bono (emre muharrer senet)** ve **çekten** oluşur; mal senedi ayrı bir türdür.",
      k: "1016 resmi not s. 33"
    },
    {
      s: "120.000 TL'lik bir bono bankaya iskonto ettirilmiş, iskonto tutarı ve giderler 10.000 TL olarak hesaplanmıştır. **Bankalar** hesabına borç kaydedilecek tutar ve iskonto tutarının kaydedileceği hesap hangisidir?",
      c: ["110.000 TL; 780 Finansman Giderleri", "120.000 TL; 653 Komisyon Giderleri", "110.000 TL; 642 Faiz Gelirleri", "130.000 TL; 780 Finansman Giderleri", "120.000 TL; 657 Reeskont Faiz Giderleri"],
      d: 0,
      a: "İskontoda senet bedelinden iskonto ve giderler düşülerek **110.000 TL** **102 Bankalar**'a, iskonto tutarı **780 Finansman Giderleri**'ne borç; **121 Alacak Senetleri** 120.000 alacak yazılır. Ayrıca sorumluluk için nazım hesaplar (910/911) çalıştırılır.",
      k: "1016 resmi not s. 34"
    },
    {
      s: "Alacak senetlerinin **ciro edilmesinden** doğan sorumluluk muhasebede nasıl izlenir?",
      c: ["Pasifte bir borç hesabında, senedin vadesine kadar", "Hiçbir şekilde izlenmez; senet kayıtlardan tamamen çıkar", "128 Şüpheli Ticari Alacaklar hesabında, karşılıkla birlikte", "Gelir tablosunda finansman gideri olarak, ciro tarihinde", "Nazım hesaplarda (Cirolarımız / Cirolarımızdan Borçlar)"],
      d: 4,
      a: "Muhatap vadede ödemezse işletme ödeyeceği için cirodan doğan **koşullu sorumluluk** **nazım hesaplarda** (910 Cirolarımız / 911 Cirolarımızdan Borçlar) izlenir; vadede ödeme yapılınca nazım hesaplar **ters kayıtla** kapatılır. Bu sorumluluk muhasebe dışı da izlenebilir.",
      k: "1016 resmi not s. 34-35"
    },
    {
      s: "Vadesi gelen 200.000 TL'lik bono tahsil edilemeyince borçlu 15.000 TL gecikme faizi karşılığında yeni bono vermiş ve öneri kabul edilmiştir. Kayıtta **alacaklandırılacak** hesaplar hangileridir?",
      c: ["121 Alacak Senetleri (eski) 200.000 ve 642 Faiz Gelirleri 15.000", "120 Alıcılar 215.000", "780 Finansman Giderleri 15.000 ve 121 (yeni) 200.000", "128 Şüpheli Ticari Alacaklar 215.000", "336 Diğer Çeşitli Borçlar 215.000"],
      d: 0,
      a: "Senet yenilemede eski senet iptal edilip yeni senet alınır: **121 (yeni) 215.000** borç; **121 (eski) 200.000** ve gecikme faizi **642 Faiz Gelirleri 15.000** alacak kaydedilir.",
      k: "1016 resmi not s. 36"
    },
    {
      s: "**Hatır senetleri** ile ilgili hangisi doğrudur?",
      c: ["Ticari işleme dayanan gerçek bir alacak karşılığında alınır ve kayıtlarda normal alacak senetleri gibi izlenir", "Kayıtlarda mutlaka \"Hatır Senetleri\" başlığıyla ve ayrı bir yardımcı hesapta gösterilir", "Gerçek bir alacak olmadan kredi ihtiyacı için alınan senetlerdir; giderlerini yararlanan işletme karşılar", "Bankalar hatır senetlerini her zaman ve hiçbir teminat istemeden iskonto etmek zorundadır", "Muhatabı banka olan ve banka tarafından kabul edilen hatır senedine reeskont denir"],
      d: 2,
      a: "Hatır senetleri, **gerçek bir ticari alacak olmadan** kredi ihtiyacı için alınan senetlerdir; giderlerini **yararlanan işletme** karşılar ve **genel yönetim giderlerine** yazar. Kayıtlarda bu başlıkla gösterilmemesi tercih edilir; muhatabı banka olup kabul edilene **kabul kredisi** denir.",
      k: "1016 resmi not s. 36-37"
    }
  ]
});
