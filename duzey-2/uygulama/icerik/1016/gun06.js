SPL.gun("1016", 6, {
  okuma: `
## Bugünün haritası
Alacaklar konusunu bitiriyoruz: **127 Diğer Ticari Alacaklar** ve **126 Verilen Depozito ve Teminatlar** örnekleri, **13 Diğer Alacaklar** grubu, dönem sonunda senetlerin **reeskontu** ve en önemlisi **şüpheli alacaklar ve karşılıkları**. Şüpheli alacak kayıtlarının senaryoları sınavda sık sorulur.

1. **127 Diğer Ticari Alacaklar**
2. **126 Verilen Depozito ve Teminatlar**
3. **13 Diğer Alacaklar** grubu
4. **Alacak senetleri reeskontu**
5. **Şüpheli alacaklar** ve karşılık
6. Şüpheli alacakların tahsil senaryoları

---

## 1. 127 Diğer Ticari Alacaklar
Mal ve hizmet satışı **dışındaki** ticari işlemlerden doğan **senetsiz** ticari alacaklar: örneğin **duran varlıkların ve menkul kıymetlerin kredili satışı**.

**Örnek:** maliyeti 400.000, birikmiş amortismanı 140.000 (defter değeri 260.000) olan bina 300.000 TL'ye kredili satıldı (KDV %18).
| Borç | Alacak |
|---|---|
| 127 Diğer Ticari Alacaklar 354.000; 257 Birikmiş Amortismanlar 140.000 | 252 Binalar 400.000; 391 Hesaplanan KDV 54.000; 649 (Bina Satış Kârları) 40.000 |

## 2. 126 Verilen Depozito ve Teminatlar
Üçüncü kişilere bir işin üstlenilmesi, geri verilecek bir değerin karşılığı veya gerçekleşecek bir borç için ödenen paralar (veya devlet tahvili gibi para yerine geçen değerler).

> [!ezber] Vadesi **bir yıldan az** olan depozito ve teminatlar **dönen varlıklarda**, **bir yılı aşanlar duran varlıklarda** izlenir.

- Sözleşmeye uyulmadığı veya ihale kazanılıp işten vazgeçildiği için geri alınamazsa **zarar** kaydedilir: önce **689 Diğer Olağandışı Gider ve Zararlar**, dönem sonunda kâr ve zarar hesabı.

**Örnek:** iade edilemeyen ambalaj depozitosu 18.000 TL → **689** borç / **126** alacak.

## 3. 13 Diğer Alacaklar
**Ticari bir nedene dayanmadan** doğan ve en çok **bir yıl** içinde tahsili düşünülen senetli ve senetsiz alacaklar.

| Hesap | İçerik |
|---|---|
| **131 Ortaklardan Alacaklar** | Esas faaliyet dışındaki işlemlerden (ödünç verme vb.) ortaklardan alacaklar |
| **132 İştiraklerden Alacaklar** | Aynı nitelikte iştiraklerden alacaklar |
| **133 Bağlı Ortaklıklardan Alacaklar** | Aynı nitelikte bağlı ortaklıklardan alacaklar |
| **135 Personelden Alacaklar** | Personel ve işçinin işletmeye çeşitli borçları |
| **136 Diğer Çeşitli Alacaklar** | Ticari olmayıp yukarıdakilere girmeyen alacaklar |
| **137 Diğer Alacak Senetleri Reeskontu (−)** | Bu gruptaki senetli alacakların reeskontu |
| **138 Şüpheli Diğer Alacaklar** | Diğer alacakların şüpheli hâle gelenleri |
| **139 Şüpheli Diğer Alacaklar Karşılığı (−)** | 138 için karşılıklar |

**Örnek:** muhasebe müdürü 366.000 TL borç aldı → **135 Personelden Alacaklar** borç / **100 Kasa** alacak.

## 4. Alacak senetleri reeskontu
Reeskont **hem ticari (122)** hem **ticari olmayan (137)** alacak senetlerine uygulanır; alacakların bilançoda **net (peşin) değerleriyle** gösterilmesini sağlar.

- Hazine ve Maliye Bakanlığının öngördüğü **oran ve formül** esas alınır; **yabancı paralı** senetler de reeskonta tabidir (**29.7.1998**'den itibaren).
- **VUK m. 280:** senetteki faiz oranı, yoksa **LIBOR** uygulanır. (LIBOR'un belirlenmesi **30 Eylül 2024**'te durduruldu; VUK'ta değişiklik yapılmadı.)
- Ara dönem tablolar (aylık, 3 aylık, 6 aylık) düzenleniyorsa reeskont **her ara dönem sonunda** kaydedilir ve izleyen dönemin **ilk günü ters kayıtla** kapatılır.

**Örnek:** ticari senet reeskontu 137.000, diğer senet reeskontu 77.000.
| Tarih | Borç | Alacak |
|---|---|---|
| Dönem sonu | **657 Reeskont Faiz Giderleri** 214.000 | 122: 137.000; 137: 77.000 |
| İzleyen yılın ilk günü | 122: 137.000; 137: 77.000 | **647 Reeskont Faiz Gelirleri** 214.000 |

## 5. Şüpheli alacaklar
Tekdüzen sistem şüpheli alacak tanımında **VUK'taki tanımı aynen** benimsemiştir.

> [!dikkat] Tekdüzen sistemde **uzun vadeli** ticari alacaklar ve uzun vadeli diğer alacaklar gruplarında **"şüpheli alacaklar" hesabı yoktur**; nitelikleri taşıyan **kısa vadeli** alacaklar şüpheli alacak hesaplarına devredilir. Şüpheli alacaklar için **ihtiyatlılık** gereği karşılık ayrılır.

**Karşılık hesabının kapsamı (129):** 128 için ayrılan karşılıklar ile **perakende satış yöntemiyle**: bilanço gününden önceki **iki hesap döneminde** vadesinde tahsil edilemeyen alacakların toplam vadeli satışlara **oranlarının ortalaması**, değerleme dönemindeki vadeli satışlara uygulanır.

> [!ezber] **Teminatlı alacaklarda** karşılık, **teminatı aşan kısım** için ayrılır.

| Durum | Kayıt |
|---|---|
| Karşılık ayrılması | **654 Karşılık Giderleri** borç / **129** alacak |
| Tahmin edilen zarar (kısmen/tamamen) gerçekleşmezse | **129** borç / **644 Konusu Kalmayan Karşılıklar** alacak |
| Tahsilin imkânsızlığı kesinleşirse | **129** borç / ilgili alacak hesabı alacak |
| Gerçek zarar karşılıktan fazlaysa | Karşılık kadar **129** borç; zarar fazlası **681 Önceki Dönem Gider ve Zararları** borç |
| Daha önce silinmiş alacak sonradan tahsil edilirse | **671 Önceki Dönem Gelir ve Kârları** |

## 6. Tahsil senaryoları
560.000 TL'lik senet şüpheli hâle geldi; **160.000** karşılık ayrıldı:
| Borç | Alacak |
|---|---|
| 128 Şüpheli Ticari Alacaklar 560.000 | 121 Alacak Senetleri 560.000 |
| 654 Karşılık Giderleri 160.000 | 129 Şüpheli Ticari Alacaklar Karşılığı 160.000 |

- **400.000 tahsil** (zarar tam karşılık kadar): 100 Kasa 400.000 ve 129: 160.000 borç / 128: 560.000 alacak.
- **450.000 tahsil** (zarar 110.000, karşılıktan **küçük**): 100 Kasa 450.000 ve 129: 160.000 borç; 128: 560.000 ve fark **50.000** **644 Konusu Kalmayan Karşılıklar** alacak.
`,
  sorular: [
    {
      s: "Bir işletmenin **duran varlığını kredili satması** sonucu doğan senetsiz alacak hangi hesapta izlenir?",
      c: ["120 Alıcılar", "121 Alacak Senetleri", "127 Diğer Ticari Alacaklar", "136 Diğer Çeşitli Alacaklar", "131 Ortaklardan Alacaklar"],
      d: 2,
      a: "Mal ve hizmet satışı **dışındaki** ticari işlemlerden doğan senetsiz ticari alacaklar (örneğin **duran varlıkların ve menkul kıymetlerin kredili satışı**) **127 Diğer Ticari Alacaklar** hesabında izlenir.",
      k: "1016 resmi not s. 38"
    },
    {
      s: "Vadesi **bir yılı aşan** verilen depozito ve teminatlar bilançoda nerede izlenir?",
      c: ["Duran varlıkların alacaklar veya ticari alacaklar grubunda", "Dönen varlıkların ticari alacaklar grubunda, vadesine bakılmaksızın", "Kısa vadeli yabancı kaynaklarda, borç senetleriyle birlikte", "Nazım hesaplarda, tahsil edilene kadar bilanço dışında", "Özkaynaklarda, geçmiş yıllar kârları içinde"],
      d: 0,
      a: "Verilen depozito ve teminatların vadesi **bir yıldan az** olanları **dönen varlıklarda**, **bir yılı aşanları duran varlıklarda** (alacaklar veya ticari alacaklar grubunda) izlenir.",
      k: "1016 resmi not s. 39"
    },
    {
      s: "Ambalaj için ödenen depozitonun, ambalaj hasara uğradığı için geri alınamaması durumunda yapılacak kayıt hangisidir?",
      c: ["126 Verilen Depozito ve Teminatlar borç / 100 Kasa alacak", "770 Genel Yönetim Giderleri borç / 120 Alıcılar alacak", "654 Karşılık Giderleri borç / 129 Şüpheli Ticari Alacaklar Karşılığı alacak", "128 Şüpheli Ticari Alacaklar borç / 126 alacak", "689 Diğer Olağandışı Gider ve Zararlar borç / 126 Verilen Depozito ve Teminatlar alacak"],
      d: 4,
      a: "Geri alınamayan depozito ve teminatlar **zarar** kaydedilir: önce **689 Diğer Olağandışı Gider ve Zararlar** borç, **126** alacak; dönem sonunda kâr ve zarar hesabına devredilir.",
      k: "1016 resmi not s. 39"
    },
    {
      s: "Bir işletmenin muhasebe müdürüne verdiği borç hangi hesapta izlenir?",
      c: ["131 Ortaklardan Alacaklar", "120 Alıcılar", "135 Personelden Alacaklar", "127 Diğer Ticari Alacaklar", "126 Verilen Depozito ve Teminatlar"],
      d: 2,
      a: "İşletmeye dahil personel ve işçinin işletmeye olan çeşitli borçları **135 Personelden Alacaklar** hesabında izlenir; bu alacaklar ticari olmayan **13 Diğer Alacaklar** grubundadır.",
      k: "1016 resmi not s. 40-41"
    },
    {
      s: "Ara dönem finansal tablolar düzenleyen işletmelerde **alacak senetleri reeskontu** nasıl uygulanır?",
      c: ["Her ara dönem sonunda kaydedilir ve izleyen dönemin ilk günü ters kayıtla kapatılır", "Yalnızca yılsonunda bir kez hesaplanır, izleyen dönem başında hiçbir ters kayıt yapılmaz", "Hiç uygulanmaz", "Yalnız yabancı paralı senetlere uygulanır", "Senetlerin vadesi geldiğinde tek seferde kaydedilir"],
      d: 0,
      a: "Aylık, üç aylık veya altı aylık tablo düzenleyen işletmeler reeskont tutarını **her ara dönem sonunda** muhasebeleştirir ve **izleyen dönemin ilk günü ters bir kayıtla** kapatır (657 gider / 647 gelir).",
      k: "1016 resmi not s. 41-42"
    },
    {
      s: "VUK m. 280'e göre reeskont işleminde senette faiz oranı **bulunmuyorsa** hangi oran uygulanır?",
      c: ["TCMB'nin politika faizi oranı", "Kanuni faiz oranı", "Londra Bankalar Arası Faiz Oranı (LIBOR)", "Yıllık TÜFE enflasyon oranı", "Bu tür alacaklarda reeskont hiçbir durumda uygulanmaz"],
      d: 2,
      a: "Reeskontta **senetteki faiz oranı**, bu oran yoksa **LIBOR** uygulanır (VUK m. 280). LIBOR'un belirlenmesi 30 Eylül 2024'te durdurulmuş, ancak VUK'ta değişiklik yapılmamıştır.",
      k: "1016 resmi not s. 41"
    },
    {
      s: "**Teminatlı** bir alacak şüpheli hâle geldiğinde karşılık nasıl ayrılır?",
      c: ["Alacağın tamamı için karşılık ayrılır", "Teminatlı alacaklar için hiç karşılık ayrılmaz", "Karşılık, teminatı aşan kısım için ayrılır", "Karşılık, teminatın iki katı kadar ayrılır", "Karşılık yalnızca dava açılmışsa ayrılır"],
      d: 2,
      a: "Tekdüzen sisteme göre **teminatlı alacaklarda karşılık, teminatı aşan kısım** için ayrılır. Karşılık **654 Karşılık Giderleri** borç, **129 Şüpheli Ticari Alacaklar Karşılığı** alacak kaydedilir.",
      k: "1016 resmi not s. 31, 42"
    },
    {
      s: "300.000 TL'lik şüpheli alacak için 100.000 TL karşılık ayrılmıştır. İzleyen dönemde alacak **240.000 TL** olarak tahsil edilmiştir. **644 Konusu Kalmayan Karşılıklar** hesabına alacak kaydedilecek tutar ne kadardır?",
      c: ["60.000 TL", "100.000 TL", "40.000 TL", "240.000 TL", "0 TL"],
      d: 2,
      a: "Gerçek zarar 300.000 − 240.000 = **60.000** TL'dir; ayrılan karşılık 100.000 TL olduğundan **40.000 TL** gerçekleşmemiştir. Kayıt: 100 Kasa 240.000 ve 129: 100.000 borç; 128: 300.000 ve **644: 40.000** alacak.",
      k: "1016 resmi not s. 43"
    }
  ]
});
