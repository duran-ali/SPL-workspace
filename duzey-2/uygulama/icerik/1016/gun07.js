SPL.gun("1016", 7, {
  okuma: `
## Bugünün haritası
Önce şüpheli alacakların kalan senaryolarını bitiriyoruz; sonra **15 Stoklar** grubuna geçiyoruz. Stok hesaplarını, üretim hesaplarının (150-151-152) işleyişini, **7/A ve 7/B seçeneklerini** ve mal hareketlerinin ilk yöntemi olan **aralıklı sayım yöntemini** öğreneceğiz.

1. Şüpheli alacaklarda kalan senaryolar
2. **15 Stoklar** grubu ve hesapları
3. **150-151-152**: üretim akışı
4. **7/A** ve **7/B** seçenekleri
5. **Aralıklı sayım yöntemi**
6. **İskontolar** ve **iadeler**
7. Aralıklı sayımda dönem sonu: satılan malın maliyeti

---

## 1. Şüpheli alacaklarda kalan senaryolar
560.000 TL'lik şüpheli alacak, 160.000 TL karşılık:

| Senaryo | Kayıt |
|---|---|
| **310.000** tahsil (zarar 250.000 > karşılık) | 100 Kasa 310.000; 129: 160.000; **681 Önceki Dönem Gider ve Zararları 90.000** borç / 128: 560.000 alacak |
| Önceki yıllarda **silinen** 354.000 TL'lik alacak tahsil edildi | 100 Kasa borç / **671 Önceki Dönem Gelir ve Kârları** alacak |
| Envanterde hesaplanan karşılık (150.000), karşılık hesabının kalanından (270.000) **küçük** | 129 borç / **644 Konusu Kalmayan Karşılıklar** 120.000 alacak |

## 2. 15 Stoklar
> [!ezber] **Stoklar:** satmak, üretimde kullanmak veya tüketmek amacıyla edinilen ilk madde ve malzeme, yarı mamul, mamul, ticari mal, yan ürün, artık ve hurda gibi **bir yıldan kısa sürede** kullanılacak veya **bir yıl içinde** nakde çevrilecek varlıklar. **Faturası gelmemiş stoklar** ilgili kalemin içinde gösterilir.

| Hesap | İçerik |
|---|---|
| **150 İlk Madde ve Malzeme** | Hammadde, yardımcı madde, işletme malzemesi, ambalaj malzemesi |
| **151 Yarı Mamuller-Üretim** | Direkt ilk madde, direkt işçilik ve genel üretim giderlerinden pay almış, tamamlanmamış mamuller |
| **152 Mamuller** | Üretimi tamamlanmış, **satışa hazır** mamuller |
| **153 Ticari Mallar** | **Değişikliğe uğratılmadan** satmak için alınan mallar (emtia) |
| **157 Diğer Stoklar** | Yukarıdakilere girmeyen **yoldaki mallar**, değeri düşük stoklar, ürün, **artık ve hurda** |
| **158 Stok Değer Düşüklüğü Karşılığı (−)** | Afet, bozulma, teknolojik gelişme, **moda değişikliği** veya piyasa fiyatı düşüşü nedeniyle kayıplar için karşılık |
| **159 Verilen Sipariş Avansları** | Siparişe bağlanan **stoklar** için yapılan avans ödemeleri |

- Stoklar **maliyet bedeliyle** borç, kullanılınca, satılınca veya devredilince alacak kaydedilir.
- **150, 151, 152** üretim yapan işletmelerce kullanılır.

## 3. Üretim akışı
- Hammadde alımı: **150** borç; üretime verilince **710 Direkt İlk Madde ve Malzeme Giderleri** borç / **150** alacak.
- **151 Yarı Mamuller-Üretim** iki fonksiyon taşır: **üretim hesabı** olma ve **yarı mamul stokunu saptama**; kalanı bilançoda yarı mamul stoku olarak yer alır.
- Dönem sonunda direkt ilk madde (711), direkt işçilik (721) ve genel üretim giderleri (731) **yansıtma hesapları** aracılığıyla **151**'e yüklenir; tamamlanan mamuller **152 Mamuller** borç / **151** alacak.

## 4. 7/A ve 7/B seçenekleri
**7 Maliyet Hesapları** sınıfında iki seçenek vardır:

| Seçenek | Esas | Uygun olduğu işletmeler |
|---|---|---|
| **7/A** | Maliyetler **fonksiyon esasına** göre izlenir | **Büyük ve orta ölçekli** |
| **7/B** | Maliyetler **gider çeşitlerine** göre izlenir | **Küçük ölçekli** |

7'li hesaplardaki maliyet ve giderler **yansıtma hesapları** aracılığıyla **690 Dönem Kârı veya Zararı**'na devredilir (her iki seçenekte).

## 5. Aralıklı sayım yöntemi
Mal hareketleri **aralıklı sayım** veya **aralıksız sayım** yöntemiyle muhasebeleştirilir. Seçimde işletmenin **yapısı**, **iş hacmi**, **mal çeşidi sayısı** ve **fiziki sayımın kolaylığı** ile yönetimin bilgi ihtiyacı dikkate alınır.

> [!ezber] **Aralıklı sayımda** 153 Ticari Mallar hesabının iki fonksiyonu vardır: **değer fonksiyonu** (mal hareketlerini izleme) ve **sonuç fonksiyonu** (kâr/zararın saptanması). Hesabın borç ve alacağına kayıtlar **alış maliyetiyle** yapılır; satışlar **600 Yurtiçi Satışlar**'a **satış fiyatıyla** yazılır.

- Her satıştan sonra maliyet devri **yapılmaz**; **621 Satılan Ticari Mallar Maliyeti** **dönem sonunda** fiziki sayımla çalıştırılır.
- **Satın alma giderleri** (taşıma vb.) 153'e eklenir; **satış giderleri** ise 153'te izlenmez, **760 Pazarlama, Satış ve Dağıtım Giderleri**'ne yazılır (dönem gideri).

## 6. İskontolar ve iadeler
- İskonto **faturada gösterilmişse** ayrı kayıt gerekmez; kayıt **net fatura bedeliyle** yapılır. Sonradan yapılan iskontolar ayrıca kaydedilir.
- Peşin ödeme nedeniyle yapılan iskonto **kasa iskontosu**, çok miktarda alım nedeniyle yapılan **miktar iskontosu**dur.

| İşlem | Kayıt |
|---|---|
| **Satın alma iskontosu** | 320 Satıcılar borç / **153 Ticari Mallar** ve 391 (alış iskontoları KDV'si) alacak |
| **Satış iskontosu** | **611 Satış İskontoları** ve 191 borç / 120 Alıcılar alacak |
| **Satın alma iadesi** | 320 borç / **153** ve 391 alacak |
| **Satış iadesi** | **610 Satıştan İadeler** ve 191 borç / 120 alacak |

- **İade giderleri:** satıcı olarak ödenen iade giderleri **satış gideri**, alıcı olarak ödenenler **satın alma gideri** gibi işlem görür.

## 7. Dönem sonu
153'ün borç kalanı, aralıklı sayımda **satılan malın maliyeti + dönem sonu stoku**dur.

> [!ezber] **Satılan ticari mallar maliyeti = 153'ün borç kalanı − Fiziki sayımla bulunan dönem sonu stoku**. Örnek: 70.000 − 51.500 = **18.500** → **621** borç / **153** alacak.

Ardından 600 Yurtiçi Satışlar **690**'a; 610, 611 ve 621 **690**'ın borcuna aktarılır.
`,
  sorular: [
    {
      s: "560.000 TL'lik şüpheli alacak için 160.000 TL karşılık ayrılmışken alacak 310.000 TL olarak tahsil edilmiştir. Karşılığı aşan zarar hangi hesaba kaydedilir?",
      c: ["644 Konusu Kalmayan Karşılıklar'a 90.000 TL alacak", "129 Şüpheli Ticari Alacaklar Karşılığı'na 250.000 TL borç", "654 Karşılık Giderleri'ne 250.000 TL borç", "671 Önceki Dönem Gelir ve Kârları'na 90.000 TL alacak", "681 Önceki Dönem Gider ve Zararları'na 90.000 TL borç"],
      d: 4,
      a: "Gerçek zarar 560.000 − 310.000 = 250.000 TL'dir. Karşılık kadarı (160.000) **129**'a borç, aşan **90.000 TL** **681 Önceki Dönem Gider ve Zararları**'na borç yazılır; 128: 560.000 alacaklandırılır.",
      k: "1016 resmi not s. 44"
    },
    {
      s: "Önceki yıllarda tahsili imkânsız görülerek kayıtlardan silinen bir alacağın cari dönemde tahsil edilmesi hangi hesapta gelir olarak izlenir?",
      c: ["644 Konusu Kalmayan Karşılıklar", "642 Faiz Gelirleri", "671 Önceki Dönem Gelir ve Kârları", "649 Diğer Olağan Gelir ve Kârlar", "600 Yurtiçi Satışlar"],
      d: 2,
      a: "Daha önce alacaklardan düşülen alacakların tahsili **671 Önceki Dönem Gelir ve Kârları** hesabına alınır: 100 Kasa borç / 671 alacak.",
      k: "1016 resmi not s. 44"
    },
    {
      s: "Herhangi bir değişikliğe tabi tutulmadan satmak amacıyla işletmeye alınan mallar hangi hesapta izlenir?",
      c: ["150 İlk Madde ve Malzeme", "151 Yarı Mamuller-Üretim", "152 Mamuller", "153 Ticari Mallar", "157 Diğer Stoklar"],
      d: 3,
      a: "Değişikliğe uğratılmadan **satmak amacıyla** alınan mallar (emtia) **153 Ticari Mallar**'da izlenir. 150 üretimde kullanılacak malzemeleri, 152 üretimi tamamlanmış mamulleri kapsar.",
      k: "1016 resmi not s. 45"
    },
    {
      s: "Tekdüzen Muhasebe Sisteminde **7/A** seçeneği ile ilgili hangisi doğrudur?",
      c: ["Maliyetler fonksiyon esasına göre izlenir ve büyük ve orta ölçekli işletmelere uygundur", "Maliyetler gider çeşitlerine göre izlenir ve küçük işletmelere uygundur", "Yalnızca hizmet işletmelerinde ve kâr amacı gütmeyen kuruluşlarda kullanılan ve maliyet izlemeyen seçenektir", "Yansıtma hesapları kullanılmaz; giderler doğrudan gelir tablosuna aktarılır", "Maliyetler doğrudan bilançoya aktarılır ve dönem sonunda stoklara eklenir"],
      d: 0,
      a: "**7/A** seçeneğinde maliyetler **fonksiyon esasına** göre izlenir ve **büyük ve orta ölçekli** işletmelere uygundur. **7/B**'de **gider çeşitleri** esas alınır, **küçük** işletmelere uygundur. Her ikisinde de giderler **yansıtma hesaplarıyla** 690'a devredilir.",
      k: "1016 resmi not s. 49"
    },
    {
      s: "**Aralıklı sayım yönteminde** 153 Ticari Mallar hesabına yüklenen iki fonksiyon hangileridir?",
      c: ["Değer fonksiyonu ve sonuç fonksiyonu", "Kayıt fonksiyonu ve raporlama fonksiyonu", "Maliyet fonksiyonu ve karşılık fonksiyonu", "Tahsil fonksiyonu ve ödeme fonksiyonu", "Üretim fonksiyonu ve stok fonksiyonu"],
      d: 0,
      a: "Aralıklı sayımda ticari mallar hesabı **değer fonksiyonu** (mal hareketlerinin izlenmesi) ve **sonuç fonksiyonu** (mal hareketlerinden doğan kâr/zararın saptanması) taşır.",
      k: "1016 resmi not s. 47-48"
    },
    {
      s: "Aralıklı sayım yönteminde, satılan malla ilgili olarak ödenen **taşıma (satış) gideri** nasıl muhasebeleştirilir?",
      c: ["153 Ticari Mallar hesabına eklenerek stok maliyetine dahil edilir", "621 Satılan Ticari Mallar Maliyeti'ne eklenerek satış maliyetine yazılır", "760 Pazarlama, Satış ve Dağıtım Giderleri'ne borç yazılır", "600 Yurtiçi Satışlar'dan düşülerek net satışlar hesaplanır", "Aktifleştirilerek amortismana tabi tutulur ve yıllara dağıtılır"],
      d: 2,
      a: "**Satış giderleri** ticari mallar hesabında izlenmez; **dönem gideri** kabul edilerek **760 Pazarlama, Satış ve Dağıtım Giderleri**'ne yazılır. **Satın alma** giderleri ise 153'e eklenir.",
      k: "1016 resmi not s. 49"
    },
    {
      s: "Faturada gösterilmeden, satıştan bir süre sonra yapılan **satış iskontosu** nasıl kaydedilir?",
      c: ["600 Yurtiçi Satışlar borç / 120 Alıcılar alacak; KDV ayrıca düzeltilmez", "İskonto ayrıca kaydedilmez; tahsilat tutarı doğrudan kasaya alınır", "153 Ticari Mallar borç / 120 Alıcılar alacak; iskonto stok maliyetinden düşülür", "320 Satıcılar borç / 153 Ticari Mallar alacak; iskonto alış iskontosu sayılır", "611 Satış İskontoları ve 191 İndirilecek KDV borç / 120 Alıcılar alacak"],
      d: 4,
      a: "Sonradan yapılan satış iskontosu **611 Satış İskontoları** ve iskontonun KDV'si için **191 İndirilecek KDV** borç, **120 Alıcılar** alacak kaydedilir. Faturada gösterilen iskontolar için ayrı kayıt gerekmez.",
      k: "1016 resmi not s. 49-50"
    },
    {
      s: "Aralıklı sayım yöntemini uygulayan bir işletmede dönem sonunda 153 Ticari Mallar hesabının borç kalanı **90.000 TL**, fiziki sayımla bulunan dönem sonu stoku **35.000 TL**'dir. **Satılan ticari mallar maliyeti** ne kadardır?",
      c: ["35.000 TL", "90.000 TL", "125.000 TL", "55.000 TL", "45.000 TL"],
      d: 3,
      a: "Aralıklı sayımda 153'ün borç kalanı satılan malın maliyeti ile dönem sonu stokunu içerir. **SMM = 90.000 − 35.000 = 55.000 TL**; dönem sonunda **621** borç / **153** alacak kaydedilir.",
      k: "1016 resmi not s. 48, 51"
    }
  ]
});
