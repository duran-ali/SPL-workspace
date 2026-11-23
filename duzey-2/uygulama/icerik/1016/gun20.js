SPL.gun("1016", 20, {
  okuma: `
## Bugünün haritası
Gelir tablosu hesaplarını bitiriyoruz: **65 Diğer Faaliyetlerden Olağan Gider ve Zararlar**, **66 Finansman Giderleri**, **67-68 Olağandışı** gelir ve giderler ve dönem sonucunu belirleyen **69** grubu (690-691-692).

1. **65 Diğer Faaliyetlerden Olağan Gider ve Zararlar**
2. **66 Finansman Giderleri**
3. **67 Olağandışı Gelir ve Kârlar**
4. **68 Olağandışı Gider ve Zararlar**
5. **69 Dönem Net Kârı (Zararı)**: 690, 691, 692, 697, 698

---

## 1. 65 Diğer Faaliyetlerden Olağan Gider ve Zararlar (−)
| Hesap | İçerik |
|---|---|
| **653 Komisyon Giderleri** | Diğer olağan faaliyetlerle ilgili acente, temsilci vb. ödenen komisyonlar (ör. duran varlık satışını yapan komisyoncuya ödenen) |
| **654 Karşılık Giderleri** | **Aktifle ilgili** karşılıklar: menkul kıymet değer düşüklüğü, şüpheli alacaklar, stok değer düşüklüğü, sayım ve tesellüm noksanlığı |
| **655 Menkul Kıymet Satış Zararları** | Satış değeri ile maliyet arasındaki olumsuz fark |
| **656 Kambiyo Zararları** | Yabancı paralı işlemlerden zararlar |
| **657 Reeskont Faiz Giderleri** | Alacak senetleri reeskontu ve borç senetleri reeskontunun izleyen dönem başında iptali |
| **658 Enflasyon Düzeltmesi Zararları** | 698 ve **178**'den aktarılan olumsuz farklar |
| **659 Diğer Olağan Gider ve Zararlar** | |

> [!dikkat] **Borçlanma ile ilgili** olumsuz kur farkları **656**'ya alınmaz; **finansman gideri** olarak muhasebeleştirilir.

- 654 örneği: 100.000 TL stokta %8 değer düşüklüğü → **654** borç / **158 Stok Değer Düşüklüğü Karşılığı** alacak 8.000.
- 655 örneği: 110.000'e alınan hisse senedi 105.000'e satıldı → 100: 105.000 ve **655**: 5.000 borç / 110: 110.000 alacak.
- 656 örneği: kasada defter değeri 22.000 TL olan 11.000 YP; dönem sonu kur 1,80 → (2,00 − 1,80) × 11.000 = **2.200** → 656 borç / 100 alacak.
- 657 örneği: alacak senetleri reeskontu → **657** borç / **122 Alacak Senetleri Reeskontu** alacak.

## 2. 66 Finansman Giderleri (−)
Borçlanmalarla ilgili katlanılan ve **varlıkların maliyetine eklenmemiş** faiz, kur farkı, kredi komisyonu vb. giderler.
- **660 Kısa Vadeli Borçlanma Giderleri:** bir yıla kadar vadeli borçlanmalar.
- **661 Uzun Vadeli Borçlanma Giderleri:** bir yıldan uzun vadeli borçlanmalar.

7/A'da dönem içinde **780 Finansman Giderleri**'ne yazılır, maliyet dönemi sonunda **781 Finansman Giderleri Yansıtma** alacağı ile **660** veya **661**'e aktarılır, dönem sonunda **690**'a devredilir.

## 3. 67 Olağandışı Gelir ve Kârlar
Olağan faaliyetler içinde yer almayan, **arızi** nitelikteki gelir ve kârlar.
| Hesap | İçerik |
|---|---|
| **671 Önceki Dönem Gelir ve Kârları** | Önceki dönemlere ait olup **hata veya unutma** nedeniyle o dönemin tablolarına yansıtılmamış gelirler |
| **679 Diğer Olağandışı Gelir ve Kârlar** | **Hasar fazlası tazminat** gelirleri, şartname bedeli gelirleri, alınan ceza ve teminatlar, **mali ve maddi duran varlık satış kârları**, gelir kaydedilen depozito ve teminatlar, **sayım fazlası** gelirler |

## 4. 68 Olağandışı Gider ve Zararlar (−)
| Hesap | İçerik |
|---|---|
| **680 Çalışmayan Kısım Gider ve Zararları** | Üretimle ilgili **direkt işçilik** ve **genel üretim giderlerinden** çalışılmayan süre ve kısımlara ait olanlar; **721** ve **731** yansıtma hesapları alacağı ile 680 borç |
| **681 Önceki Dönem Gider ve Zararları** | Önceki dönemlere ait olup o dönemde yansıtılmamış veya **sonradan ortaya çıkan** giderler |
| **689 Diğer Olağandışı Gider ve Zararlar** | Tazminatla karşılanamayan hasarlar, ödenen ceza ve tazminatlar, elden çıkarılacak stok satış zararları, **sayım noksanı** giderleri, mali ve maddi duran varlık satış zararları, irat kaydedilen depozito ve teminatlar, **bağış ve yardımlar** |

- 680 örneği: Temmuz direkt işçilik 200.000, çalışılmayan süreye düşen 80.000 → **151 Yarı Mamuller** 120.000 ve **680** 80.000 borç / **721** 200.000 alacak.
- Nedeni bulunamayan 1.000 TL kasa noksanının zarar yazılması: **689** borç / **197 Sayım ve Tesellüm Noksanları** alacak.

## 5. 69 Dönem Net Kârı (Zararı)
Yalnızca **dönem sonunda** ve dönem sonucunu belirlemek için kullanılır.

| Hesap | İçerik |
|---|---|
| **690 Dönem Kârı veya Zararı** | Tüm gelir hesapları alacağına, gider hesapları borcuna aktarılır; kalanı **vergiden önceki** kâr veya zarardır |
| **691 Dönem Kârı Vergi ve Diğer Yasal Yükümlülük Karşılıkları (−)** | 691 borç / **370** alacak; vergi hem gelir tablosunda indirim hem bilançoda borç olarak görünür |
| **692 Dönem Net Kârı veya Zararı** | 690 ve 691'in kapatılmasıyla bulunan **vergi sonrası** sonuç; **590** veya **591**'e devredilir |
| **697 Yıllara Yaygın İnşaat Enflasyon Düzeltme Hesabı** | |
| **698 Enflasyon Düzeltme Hesabı** | Parasal olmayan kıymetlerin düzeltilmesinden doğan farklar; ilk uygulamayı izleyen yıllarda **648** veya **658**'e devredilerek kapatılır |

> [!ezber] Akış: gelir ve gider hesapları → **690** (vergi öncesi sonuç) → 690 ve **691** → **692** (net sonuç) → **590 / 591** (bilanço). 690'ın **alacak** kalanı vergi öncesi kâr, **borç** kalanı vergi öncesi zarardır.

**Örnek:** 690'ın alacağı 3.000 fazla; vergi 1.400 → 691 borç / 370 alacak 1.400; ardından 690: 3.000 borç / 691: 1.400 ve **692: 1.600** alacak; 692 borç / **590** alacak 1.600.
`,
  sorular: [
    {
      s: "Aşağıdakilerden hangisi **654 Karşılık Giderleri** hesabında izlenmez?",
      c: ["Şüpheli alacaklar karşılığı", "Stok değer düşüklüğü karşılığı", "Menkul kıymet değer düşüklüğü karşılığı", "Kıdem tazminatı karşılığı", "Sayım ve tesellüm noksanlığı karşılığı"],
      d: 3,
      a: "654'te **aktifle ilgili** karşılık giderleri (menkul kıymet değer düşüklüğü, şüpheli alacaklar, stok değer düşüklüğü, sayım ve tesellüm noksanlığı) izlenir. **Kıdem tazminatı karşılığı** bir borç karşılığıdır ve ilgili gider hesabı ile 372/472 karşılığında kaydedilir.",
      k: "1016 resmi not s. 169-170"
    },
    {
      s: "Kasada defter değeri 36.000 TL olan 12.000 YP bulunmaktadır. Dönem sonunda 1 YP = 2,80 TL ise yapılacak kayıt hangisidir?",
      c: ["100 Kasa borç / 646 Kambiyo Kârları alacak 2.400 TL", "Kayıt yapılmaz", "780 Finansman Giderleri borç / 100 Kasa alacak 2.400 TL", "656 borç / 100 alacak 33.600 TL", "656 Kambiyo Zararları borç / 100 Kasa alacak 2.400 TL"],
      d: 4,
      a: "Defter kuru 36.000 / 12.000 = 3,00 TL. Değerleme: (3,00 − 2,80) × 12.000 = **2.400 TL** azalış → **656 Kambiyo Zararları** borç / **100 Kasa** alacak. Borçlanma ile ilgili olmadığından finansman gideri değildir.",
      k: "1016 resmi not s. 170"
    },
    {
      s: "Kredi borçlarından doğan **olumsuz kur farkları** nasıl muhasebeleştirilir?",
      c: ["656 Kambiyo Zararları hesabında", "Özkaynaklarda", "689 Diğer Olağandışı Gider ve Zararlar hesabında", "659 Diğer Olağan Gider ve Zararlar hesabında", "Finansman gideri olarak"],
      d: 4,
      a: "Borçlanma ile ilgili olumsuz kur farkları 656'ya alınmaz; **finansman gideri** olarak (780 → 660/661) muhasebeleştirilir.",
      k: "1016 resmi not s. 169-170"
    },
    {
      s: "7/A seçeneğini uygulayan işletmede **uzun vadeli** kredilerin faizi dönem içinde 780'e yazılmıştır. Maliyet dönemi sonunda yapılacak kayıt hangisidir?",
      c: ["661 Uzun Vadeli Borçlanma Giderleri borç / 781 Yansıtma alacak", "660 Kısa Vadeli Borçlanma Giderleri borç / 781 Yansıtma alacak", "690 Dönem Kârı veya Zararı borç / 780 alacak", "781 Finansman Giderleri Yansıtma borç / 661 alacak", "661 Uzun Vadeli Borçlanma Giderleri borç / 780 alacak"],
      d: 0,
      a: "780'deki tutarlar **781 Yansıtma** alacağı ile ilgili 66 hesabına aktarılır: bir yıldan uzun vadeli borçlanmalar için **661**, bir yıla kadar olanlar için **660**. Dönem sonunda 690'a devredilir.",
      k: "1016 resmi not s. 171-172"
    },
    {
      s: "Aşağıdakilerden hangisi **679 Diğer Olağandışı Gelir ve Kârlar** hesabında izlenir?",
      c: ["İştiraklerden alınan temettü", "Önceki dönemde unutulan bir hizmet geliri", "Menkul kıymet satış kârı", "Maddi duran varlık satış kârı", "Kambiyo kârı"],
      d: 3,
      a: "679'da hasar fazlası tazminat, şartname bedeli, alınan ceza ve teminatlar, **mali ve maddi duran varlık satış kârları**, sayım fazlası gibi arızi gelirler izlenir. Temettü 640, menkul kıymet satış kârı 645, kambiyo kârı 646, önceki dönemde unutulan gelir 671'dedir.",
      k: "1016 resmi not s. 173"
    },
    {
      s: "Üretim işletmesinde ayın direkt işçilik giderleri 300.000 TL, bunun çalışılmayan süreye isabet eden kısmı 60.000 TL'dir. Çalışılmayan kısım hangi hesaba borç yazılır?",
      c: ["689 Diğer Olağandışı Gider ve Zararlar", "151 Yarı Mamuller-Üretim", "680 Çalışmayan Kısım Gider ve Zararları", "632 Genel Yönetim Giderleri", "681 Önceki Dönem Gider ve Zararları"],
      d: 2,
      a: "Çalışılmayan süreye ait direkt işçilik ve genel üretim giderleri **721** / **731** yansıtma hesapları alacağı ile **680**'e borç yazılır: 151'e 240.000, 680'e 60.000.",
      k: "1016 resmi not s. 174"
    },
    {
      s: "**690 Dönem Kârı veya Zararı** hesabının kalanı neyi gösterir?",
      c: ["Vergi sonrası dönem net kârını veya zararını", "Brüt satış kârını", "Faaliyet kârını", "Vergiden önceki dönem kârı veya zararı", "Olağan kârı"],
      d: 3,
      a: "Tüm gelir ve gider hesapları 690'a aktarıldığından kalanı **vergiden önceki** dönem kârı (alacak kalanı) veya zararıdır (borç kalanı). Vergi sonrası net sonuç **692**'de görülür.",
      k: "1016 resmi not s. 175"
    },
    {
      s: "Vergi öncesi dönem kârı 80.000 TL olan işletmede 16.000 TL vergi karşılığı hesaplanmıştır. Aşağıdaki kayıtlardan hangisi **yanlıştır**?",
      c: ["691 borç / 370 alacak 16.000 TL", "690: 80.000 borç / 691: 16.000 ve 692: 64.000 alacak", "692 borç / 590 alacak 64.000 TL", "692 borç / 590 alacak 80.000 TL", "Vergi karşılığı bilançoda borç olarak görünür"],
      d: 3,
      a: "Net kâr = 80.000 − 16.000 = **64.000 TL**; 692'den 590'a aktarılacak tutar 64.000'dir, 80.000 değil. 691 / 370 kaydı ile vergi hem gelir tablosunda indirim hem bilançoda borç olarak görünür.",
      k: "1016 resmi not s. 175-176"
    }
  ]
});
