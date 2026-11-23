SPL.gun("1016", 15, {
  okuma: `
## Bugünün haritası
Kısa vadeli yabancı kaynakları bitiriyoruz: **371-193** ilişkisi, **kıdem tazminatı karşılığı**, **maliyet giderleri karşılığı**, dönemsellik kavramının iki önemli hesabı **380 Gelecek Aylara Ait Gelirler** ve **381 Gider Tahakkukları**, ve **39** grubunda **KDV hesaplarının mahsubu** ile **sayım fazlaları**.

1. **371** ve **193** ilişkisi
2. **372 Kıdem Tazminatı Karşılığı**
3. **373 Maliyet Giderleri Karşılığı**
4. **380 Gelecek Aylara Ait Gelirler**
5. **381 Gider Tahakkukları**
6. **391 Hesaplanan KDV** ve ay sonu mahsubu
7. **392, 393, 397**

---

## 1. 371 ve 193 ilişkisi
- Dönem içinde peşin ödenen vergiler **193 Peşin Ödenen Vergiler ve Fonlar**'da toplanır.
- Dönem sonunda 370 ile mahsup edilmek üzere **371** borç / **193** alacak kaydedilir.

> [!ezber] 193'ten 371'e aktarılacak tutar **en çok 370'teki tutar kadar** olabilir; fazlası **193'te bekletilir**. Örnek: 193'te 35.000, 370'te 28.000 → yalnız **28.000** aktarılır, 7.000 193'te kalır.

## 2. 372 Kıdem Tazminatı Karşılığı
- Uzun vadede **472 Kıdem Tazminatı Karşılığı**'nda izlenen tutardan **izleyen yıl içinde ödeneceği** öngörülen kısım (ör. emekli olacak personel) **472** borç / **372** alacak kaydıyla kısa vadeye aktarılır.
- Ödendiğinde **372** borç / **100 Kasa** alacak.
- Hesap, çalışanların tabi olduğu mevzuata (İş Kanunu, Emekli Sandığı Kanunu) göre bölümlenebilir.

## 3. 373 Maliyet Giderleri Karşılığı
Aylık maliyetleri belirlemek için, **gelecek aylarda kesin tahakkuku** yapılacak giderlerden (tamir-bakım, **ikramiyeler**, finansman giderleri) aylık maliyetlere pay verilmesinde kullanılır.

**Örnek:** yılda iki ikramiye; aylık tahmini pay 1.000 TL; Haziran'da fiili ödeme 7.200 TL.
- Ocak-Mayıs her ay: **770** borç / **373** alacak 1.000 (toplam 5.000)
- Haziran: 373: 5.000; 770: 1.200 (Haziran payı, doğrusu); **180 Gelecek Aylara Ait Giderler**: 1.000 borç / 100 Kasa 7.200 alacak.
- Gerçek aylık pay **1.200** olduğu için önceki beş aydaki eksik **1.000** gelecek aylara paylaştırılmak üzere 180'e alınır; Aralık sonunda fiili tutarla karşılaştırılır.

## 4. 380 Gelecek Aylara Ait Gelirler
**38** grubu, bilançoda **dönemsellik** gereği yer alan **dönem ayırıcı** hesaplardandır.

> [!ezber] **380 Gelecek Aylara Ait Gelirler:** gelecek dönemlere ait **peşin tahsil edilen** gelirlerin **bir yıldan kısa** süreye ait kısmı. Bir yılı aşan kısım **480 Gelecek Yıllara Ait Gelirler**'de izlenir.

- Yıllık tablo düzenleyenlerde izleyen yılın aylarına, ara dönem tablo düzenleyenlerde izleyen aylara ait gelirler bekletilir.
- Peşin tahsilde **alacak**; ait olduğu dönemde ilgili gelir hesabına aktarılırken **borç**.

**Örnek:** 1 Şubat'ta bina 3 yıllığına 72.000 TL'ye (ayda 2.000) kiraya verildi, peşin tahsil edildi.
| Borç | Alacak |
|---|---|
| 100 Kasa 72.000 | **649 (Kira Gelirleri) 22.000** (cari yılın 11 ayı) |
| | **380**: 24.000 (izleyen 12 ay) |
| | **480**: 26.000 (sonraki 13 ay) |

- Gelir tahsil anında hatayla tamamen gelir hesabına alındıysa dönem sonunda düzeltilir: örnek **600** borç / **380** alacak 46.000.

## 5. 381 Gider Tahakkukları
**Gelecek aylarda ödenecek**, kesinlikle **belgeye dayalı** ve **tutarı bilinen** gider tahakkukları. Tahakkukta gider borç / 381 alacak; ödemede 381 borç.

**Örnek:** 1 Kasım'da %20 faizli, 6 ay vadeli 150.000 TL tahvil ihraç edildi.
- Dönem sonu: 150.000 × 61 × 20 / 36.500 = **5.014** → **780** borç / **381** alacak
- Vadede: kalan 120 günün faizi **9.863** 780'e; 381 kapatılır; Kasa 14.877 alacak.

| | **Peşin** | **Sonradan** |
|---|---|---|
| **Gider** | 180 / 280 Gelecek Aylara/Yıllara Ait **Giderler** (aktif) | **381 Gider Tahakkukları** (pasif) |
| **Gelir** | **380 / 480** Gelecek Aylara/Yıllara Ait **Gelirler** (pasif) | 181 / 281 **Gelir Tahakkukları** (aktif) |

## 6. 391 Hesaplanan KDV
- Teslim edilen mal ve hizmetler üzerinden hesaplanan KDV ile **işlemi gerçekleşmeyen** veya **vazgeçilen** mal ve hizmetlere ilişkin KDV (örneğin **alış iadesinde** iade edilen malın KDV'si) alacak yazılır.

> [!ezber] **Ay sonu mahsubu:** 391'in bakiyesi **191 İndirilecek KDV** ve varsa **190 Devreden KDV** ile karşılaştırılır; 391 büyükse fark **360 Ödenecek Vergi ve Fonlar**'a aktarılır. Örnek: 391: 500.000; 191: 150.000; 190: 100.000 → 360'a **250.000**.

## 7. Diğer hesaplar
| Hesap | İçerik |
|---|---|
| **392 Diğer KDV** | **Teşvikli yatırım mallarının ithalinden** doğan ertelenen KDV ve **ihraç kaydıyla satış** nedeniyle ertelenen ve **terkin** edilecek KDV |
| **393 Merkez ve Şubeler Cari Hesabı** | Merkez-şube ve şubeler arası borç-alacak ilişkileri; **hem borçlu hem alacaklı** çalışır; dönem içinde kullanılır, **füzyon** çalışmalarında kapatılır |
| **397 Sayım ve Tesellüm Fazlaları** | Kasa, stok ve MDV sayım fazlaları ile üniteler arası sevk fazlaları; nedeni araştırılmak üzere **geçici** kaydedilir |
| **399 Diğer Çeşitli Yabancı Kaynaklar** | |

**397'nin kapatılması:**
- Neden bulunursa ilgili hesaba aktarılır (ör. kaydedilmemiş senet tahsili → 397 borç / 121 alacak).
- Neden bulunamaz ve **aynı dönemde** kâr yazılırsa **679 Diğer Olağandışı Gelir ve Kârlar**; **izleyen dönemde** kâr yazılırsa **671 Önceki Dönem Gelir ve Kârları**.
- Stok sayım fazlaları **emsal değer** üzerinden kaydedilir.
`,
  sorular: [
    {
      s: "Dönem içinde 193 Peşin Ödenen Vergiler ve Fonlar hesabında 50.000 TL birikmiş, dönem kârı üzerinden 370'e 40.000 TL karşılık ayrılmıştır. 193'ten **371**'e aktarılacak tutar ne kadardır?",
      c: ["40.000 TL", "50.000 TL", "10.000 TL", "90.000 TL", "0 TL"],
      d: 0,
      a: "193'ten 371'e aktarılacak tutar **en çok 370'teki tutar kadar** olabilir: **40.000 TL** aktarılır (371 borç / 193 alacak); kalan 10.000 TL 193'te bekletilir.",
      k: "1016 resmi not s. 121-122"
    },
    {
      s: "Uzun vadeli kıdem tazminatı karşılığından **izleyen yıl içinde ödeneceği öngörülen** kısım dönem sonunda nasıl kaydedilir?",
      c: ["372 Kıdem Tazminatı Karşılığı borç / 472 Kıdem Tazminatı Karşılığı alacak (ters aktarma)", "Kayıt yapılmaz; tazminat ödendiği gün gider yazılır", "770 Genel Yönetim Giderleri borç / 372 Kıdem Tazminatı Karşılığı alacak", "372 Kıdem Tazminatı Karşılığı borç / 100 Kasa alacak", "472 Kıdem Tazminatı Karşılığı borç / 372 Kıdem Tazminatı Karşılığı alacak"],
      d: 4,
      a: "Bir yıl içinde ödenecek kısım uzun vadeden kısa vadeye aktarılır: **472** borç / **372** alacak. Ödeme yapıldığında **372** borç / **100 Kasa** alacak kaydedilir.",
      k: "1016 resmi not s. 122"
    },
    {
      s: "Aylık maliyetlerin belirlenmesi için **ikramiye** gibi gelecek aylarda kesin tahakkuku yapılacak giderlerden aylık pay ayrılması hangi hesapla yapılır?",
      c: ["381 Gider Tahakkukları", "180 Gelecek Aylara Ait Giderler", "373 Maliyet Giderleri Karşılığı", "379 Diğer Borç ve Gider Karşılıkları", "372 Kıdem Tazminatı Karşılığı"],
      d: 2,
      a: "Tamir-bakım, **ikramiye**, finansman giderleri gibi gelecek aylarda kesin tahakkuku yapılacak giderlerden aylık maliyetlere pay verilmesinde **373 Maliyet Giderleri Karşılığı** kullanılır.",
      k: "1016 resmi not s. 122"
    },
    {
      s: "1 Mart'ta bir bina 2 yıllığına aylık 3.000 TL'den (toplam 72.000 TL) kiraya verilmiş, bedel peşin tahsil edilmiştir. Yıllık tablo düzenleyen işletme **380 Gelecek Aylara Ait Gelirler** hesabına ne kadar alacak yazar?",
      c: ["36.000 TL", "30.000 TL", "6.000 TL", "72.000 TL", "42.000 TL"],
      d: 0,
      a: "Cari yıl: Mart-Aralık **10 ay** = 30.000 (649 Kira Gelirleri). İzleyen yılın **12 ayı** = **36.000 TL** **380**'e. Kalan **2 ay** = 6.000 TL ise bir yıldan sonrasına ait olduğundan **480 Gelecek Yıllara Ait Gelirler**'e yazılır.",
      k: "1016 resmi not s. 124-125"
    },
    {
      s: "**381 Gider Tahakkukları** hesabı ile ilgili hangisi doğrudur?",
      c: ["Peşin ödenen ve gelecek aylara ait olan giderleri izleyen aktif hesaptır", "Aktif hesaptır ve dönem sonunda gelir tahakkuklarıyla mahsup edilir", "Tutarı ve zamanı kesin olmayan gider karşılıklarını izleyen, 37 grubundaki pasif hesaptır", "Peşin tahsil edilen ve gelecek aylara ait olan gelirleri izler", "Gelecek aylarda ödenecek, belgeye dayalı ve tutarı bilinen gider tahakkuklarını izler"],
      d: 4,
      a: "381, **gelecek aylarda ödenecek**, kesinlikle **belgeye dayalı** ve **tutarı bilinen** gider tahakkuklarını izleyen **pasif** hesaptır. Peşin ödenen giderler 180'de, tutarı belirsiz giderler 37 grubundaki karşılıklarda izlenir.",
      k: "1016 resmi not s. 124-125"
    },
    {
      s: "Ay sonunda 391 Hesaplanan KDV'nin alacak bakiyesi 300.000 TL, 191 İndirilecek KDV'nin borç bakiyesi 180.000 TL, 190 Devreden KDV'nin borç bakiyesi 50.000 TL'dir. **360 Ödenecek Vergi ve Fonlar** hesabına aktarılacak tutar nedir?",
      c: ["300.000 TL", "120.000 TL", "70.000 TL", "230.000 TL", "0 TL"],
      d: 2,
      a: "391'in bakiyesi 191 ve 190 ile karşılaştırılır: 300.000 − 180.000 − 50.000 = **70.000 TL** ödenecek KDV olarak **360**'a aktarılır.",
      k: "1016 resmi not s. 127"
    },
    {
      s: "Merkez ile şubeler arasındaki borç-alacak ilişkilerinin izlendiği **393 Merkez ve Şubeler Cari Hesabı** ile ilgili hangisi doğrudur?",
      c: ["Yalnızca alacak bakiyesi verir ve dönem sonunda pasifte gösterilir", "Uzun vadeli yabancı kaynaklarda yer alır ve bir yıldan uzun borçları izler", "Hem borçlu hem alacaklı çalışır; füzyonda kapatılır", "Nazım hesaplarda izlenir ve bilançoya hiç yansımaz", "Yalnız yurt dışındaki şubelerle olan ilişkiler için kullanılır"],
      d: 2,
      a: "393, merkezin şubelerle ve şubelerin birbirleriyle ilişkilerini izleyen, **hem borçlu hem alacaklı** çalışan bir hesaptır; dönem içinde kullanılır ve **füzyon** çalışmalarında kapatılır.",
      k: "1016 resmi not s. 126, 128"
    },
    {
      s: "Nedeni bulunamayan kasa sayım fazlasının **aynı dönemde** kâr olarak kaydedilmesine karar verilirse kayıt hangisidir?",
      c: ["397 Sayım ve Tesellüm Fazlaları borç / 679 Diğer Olağandışı Gelir ve Kârlar alacak", "397 Sayım ve Tesellüm Fazlaları borç / 671 Önceki Dönem Gelir ve Kârları alacak", "100 Kasa borç / 649 Diğer Olağan Gelir ve Kârlar alacak", "197 Sayım ve Tesellüm Noksanları borç / 397 alacak", "397 Sayım ve Tesellüm Fazlaları borç / 121 Alacak Senetleri alacak"],
      d: 0,
      a: "Nedeni bulunamayan fazla **aynı dönemde** kâr yazılırsa **679 Diğer Olağandışı Gelir ve Kârlar**'a, **izleyen dönemde** kâr yazılırsa **671 Önceki Dönem Gelir ve Kârları**'na alınır.",
      k: "1016 resmi not s. 128"
    }
  ]
});
