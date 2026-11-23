SPL.gun("1016", 18, {
  okuma: `
## Bugünün haritası
Bilançonun son sınıfı **5 Özkaynaklar**: ödenmiş sermaye, sermaye yedekleri, kâr yedekleri (özellikle **yasal yedek akçe hesabı**), geçmiş yıllar kâr/zararları ve dönem net kârı (zararı).

1. Özkaynakların yapısı
2. **50 Ödenmiş Sermaye**: 500 ve 501
3. **52 Sermaye Yedekleri**
4. **54 Kâr Yedekleri** ve yasal yedek akçeler
5. **549 Özel Fonlar** (yenileme fonu)
6. **57-58** Geçmiş yıllar kâr ve zararları
7. **59 Dönem Net Kârı (Zararı)**

---

## 1. Yapı
Özkaynaklar: **ödenmiş sermaye**, **sermaye yedekleri**, **kâr yedekleri**, **geçmiş yıllar kârları**, **geçmiş yıllar zararları** ve **dönem net kârı/zararı**. Gruplar: **50, 52, 54, 57, 58, 59**. Hesaplar **alacak kalanı** veren pasif hesaplardır; artışlar alacağa, azalışlar borca yazılır.

## 2. 50 Ödenmiş Sermaye
Ödenmiş sermaye = ortakların **taahhüt ettiği sermaye − yerine getirilmemiş taahhütler**.

| Hesap | İçerik |
|---|---|
| **500 Sermaye** | Ana sözleşmede yer alan ve **Ticaret Siciline tescil** edilmiş sermaye; **kayıtlı sermaye sisteminde çıkarılmış sermaye** gösterilir, **kayıtlı sermaye tavanı dipnotta** açıklanır |
| **501 Ödenmemiş Sermaye (−)** | Taahhüt edilip henüz yerine getirilmeyen kısım |
| **502 / 503** | Sermaye düzeltmesi olumlu / olumsuz farkları |

- Taahhüt (kuruluş veya artırım): **501** borç / **500** alacak. Taahhüt yerine getirildikçe 501 alacaklanır.
- **Şahıs işletmelerinde** konulan değerler doğrudan 500'e alacak yazılır (örnek: 20.000 nakit + 50.000 demirbaş → 100 ve 255 borç / 500 alacak 70.000).
- Sermaye azaltılırsa 500 borçlanır.

**Örnek:** 3 ortak, her biri 100.000 taahhüt (toplam 300.000). A 100.000 nakit; B 70.000 mevduat + 30.000 malzeme; C yalnız 20.000 devlet tahvili getirdi → 501'in borcunda kalan **80.000**, C'nin yerine getirmediği taahhüttür.

## 3. 52 Sermaye Yedekleri
| Hesap | İçerik |
|---|---|
| **520 Hisse Senedi İhraç Primleri** | Hisse senedinin **nominal değerinden yüksek** fiyatla (**emisyon primli**) satışından doğan fark |
| **521 Hisse Senedi İptal Kârları** | Taahhüdünü yerine getirmeyen ortağın **iptal edilen** hisseleri için yapılmış ödemelerden, yerine çıkarılan hisselerin hasılat noksanı kapatıldıktan sonra **artan kısım** |
| **522 MDV Yeniden Değerleme Artışları** | Maddi duran varlıkların yeniden değerlenmesinden doğan artışlar |
| **523 İştirakler Yeniden Değerleme Artışları** | İştirak ve bağlı ortaklıkların yeniden değerleme yapıp **sermayeye eklemesiyle** işletmeye düşen pay; karşılığında **242 İştirakler** veya **245 Bağlı Ortaklıklar** borçlanır |
| **529 Diğer Sermaye Yedekleri** | |

**Primli taahhüt örneği:** 200.000 nominal hisse 220.000'den taahhüt edildi → **131 Ortaklardan Alacaklar** 20.000 ve **501** 200.000 borç / **500** 200.000 ve **520** 20.000 alacak. Primler sonradan sermayeye eklenirse 520 borç / 500 alacak.

**İptal kârı örneği:** 30.000 TL taahhüdünün **1/3'ünü** (10.000) yerine getirmeyen ortağın hissesi iptal edildi ve yeni ortağa **35.000**'e satıldı → 100 Kasa 35.000 borç / **501** 10.000 ve **521** **25.000** alacak.

## 4. 54 Kâr Yedekleri
Kanun, ana sözleşme veya yetkili organ kararlarıyla, muhtemel riskleri karşılamak üzere **işletmede bırakılan kârlar**. Ortak özellikleri **önceki dönem kârlarından** ayrılmalarıdır; bu yüzden genellikle **570 Geçmiş Yıllar Kârları** borçlandırılarak alacaklanırlar (duran varlık satışı veya sigorta tazmini kârlarının doğrudan alınması hariç).

| Hesap | İçerik |
|---|---|
| **540 Yasal Yedekler** | Kanun gereği ayrılan yedekler (I. ve II. tertip) |
| **541 Statü Yedekleri** | **Ana sözleşme** gereği ayrılan yedekler |
| **542 Olağanüstü Yedekler** | **Genel Kurul** kararıyla ayrılan yedekler ve **dağıtılmayıp işletmede bırakılan** kârlar |
| **548 Diğer Kâr Yedekleri** | |
| **549 Özel Fonlar** | Yasal fonlar ve diğer amaçlı fonlar |

> [!ezber] **I. tertip yedek akçe:** her yıl safi kârın **%5'i**, **ödenmiş sermayenin beşte birine** ulaşıncaya kadar. **II. tertip yedek akçe:** ortaklara ve kârdan pay alanlara **dağıtılmasına karar verilen kârın %10'u**. 6102 sayılı TTK'da ikisi birlikte **genel kanuni yedek akçe** olarak geçer.

**Örnek:** sermaye 550.000; şimdiye kadar I. tertip 50.000; net kâr 300.000; dağıtılacak kâr 200.000.
- Sınır: 550.000 / 5 = 110.000 → kalan kapasite 60.000
- I. tertip: 300.000 × %5 = **15.000** (sınır içinde)
- II. tertip: (200.000 − 15.000) × 1/10 = **18.500**
- Kayıt: **570** borç 33.500 / **540** alacak 33.500 (590 henüz 570'e aktarılmadıysa 590 borçlanır).

- Olağanüstü yedeklerle zarar kapatma: **542** borç / **580** alacak.

## 5. 549 Özel Fonlar
**Sabit kıymet yenileme fonu**, yatırım fonu, sermaye itfa fonu gibi fonlar.

**Örnek:** maliyeti 200.000, birikmiş amortismanı 120.000 olan taşıt **yenilenmek amacıyla** 180.000'e satıldı → 100: 180.000 ve 257: 120.000 borç / 254: 200.000 ve **549**: **100.000** alacak.
- Yasa gereği bu fon **üç yıl** boyunca 549'da tutulabilir; varlık yenilenirse fon tükeninceye kadar **amortisman ayrılmasında** kullanılır.
- Ertesi yıl 250.000'e alınan yeni taşıta %20 amortisman: **549** borç / **257** alacak 50.000 (gider yazılmaz). Fon bitince amortismanlar gider yazılır.

## 6. 57-58 Geçmiş Yıllar Kârları ve Zararları
- **570 Geçmiş Yıllar Kârları:** dağıtılmamış ve yedeklere alınmamış geçmiş kârlar. Yeni dönemde **590** borç / **570** alacak.
- **580 Geçmiş Yıllar Zararları (−):** aktif karakterli; **591** alacak / **580** borç; zarar yedeklerle veya kârdan kapatılınca alacaklanır.

## 7. 59 Dönem Net Kârı (Zararı)
- **590 Dönem Net Kârı:** dönemin **vergi sonrası** net kârı. **591 Dönem Net Zararı (−)**.

**Kâr örneği:** 690'da gelirler 700.000, giderler 500.000; 691'de 50.000 vergi karşılığı.
| Borç | Alacak |
|---|---|
| 690: 200.000 | 691: 50.000; 692: 150.000 |
| 692: 150.000 | **590**: 150.000 |

**Zarar örneği:** 690 borç 700.000, alacak 600.000 (zarar 100.000); 691'de 10.000 → 692 borç 110.000 → **591** borç 110.000 / 692 alacak. Yeni yılın açılışında 580'e (ya da 591'e) devredilir.
`,
  sorular: [
    {
      s: "Kayıtlı sermaye sistemine alınmış bir ortaklıkta **500 Sermaye** hesabında hangi tutar gösterilir ve kayıtlı sermaye tavanı nerede açıklanır?",
      c: ["Kayıtlı sermaye tavanı; 501 hesabında", "Ödenmiş sermaye; nazım hesaplarda", "Taahhüt edilen sermaye; 502 hesabında", "Çıkarılmış sermaye; dipnotlarda", "Esas sermaye; 529 hesabında"],
      d: 3,
      a: "Kayıtlı sermaye sistemindeki ortaklıklarda 500'de **çıkarılmış sermaye** gösterilir; **kayıtlı sermaye tavanı** ise **dipnotlarda** açıklanır.",
      k: "1016 resmi not s. 146"
    },
    {
      s: "Üç ortak her biri 150.000 TL olmak üzere 450.000 TL sermaye taahhüt etmiştir. A ve B taahhütlerini tamamen, C ise yalnız 40.000 TL'lik kısmını yerine getirmiştir. **501 Ödenmemiş Sermaye** hesabının bakiyesi nedir?",
      c: ["40.000 TL alacak", "150.000 TL borç", "110.000 TL borç", "340.000 TL alacak", "0 TL"],
      d: 2,
      a: "Taahhütte 501 borç 450.000; ödemelerde alacak 150.000 + 150.000 + 40.000 = 340.000. Kalan **110.000 TL borç** bakiyesi C'nin yerine getirmediği taahhüttür.",
      k: "1016 resmi not s. 147-148"
    },
    {
      s: "Kuruluşta 400.000 TL nominal değerli hisse senetleri 460.000 TL'den taahhüt edilmiştir. Taahhüt kaydında **520 Hisse Senedi İhraç Primleri** hesabına alacak yazılacak tutar ve prim kısmı için borçlandırılan hesap nedir?",
      c: ["460.000 TL; 501 Ödenmemiş Sermaye", "400.000 TL; 131 Ortaklardan Alacaklar", "60.000 TL; 500 Sermaye", "60.000 TL; 131 Ortaklardan Alacaklar", "60.000 TL; 102 Bankalar"],
      d: 3,
      a: "Kitaptaki örneğe göre nominal kısım 501 borç / 500 alacak, prim kısmı (**60.000 TL**) **131 Ortaklardan Alacaklar** borç / **520** alacak kaydedilir.",
      k: "1016 resmi not s. 148-149"
    },
    {
      s: "60.000 TL sermaye taahhüdünün yarısını yerine getirmeyen ortağın hissesi iptal edilmiş ve hisse yeni ortağa 70.000 TL'ye satılmıştır. **521 Hisse Senedi İptal Kârları** hesabına alacak yazılacak tutar nedir?",
      c: ["70.000 TL", "30.000 TL", "40.000 TL", "10.000 TL", "60.000 TL"],
      d: 2,
      a: "Kasa 70.000 borç; ödenmemiş taahhüt **501**'e 30.000 alacak; kalan **40.000 TL** **521**'e alacak yazılır.",
      k: "1016 resmi not s. 149"
    },
    {
      s: "Ödenmiş sermayesi 400.000 TL olan bir şirketin şimdiye kadar ayırdığı I. tertip yedek akçe 70.000 TL'dir. Dönem net kârı 200.000 TL ise bu yıl ayrılacak **I. tertip yedek akçe** ne kadardır?",
      c: ["10.000 TL", "20.000 TL", "80.000 TL", "0 TL", "40.000 TL"],
      d: 0,
      a: "Sınır: 400.000 × 1/5 = 80.000; kalan kapasite 80.000 − 70.000 = 10.000. Kâr üzerinden hesap 200.000 × %5 = 10.000; sınırı aşmadığından **10.000 TL** ayrılır.",
      k: "1016 resmi not s. 151"
    },
    {
      s: "I. tertip yedek akçesi 12.000 TL olarak hesaplanan bir şirkette ortaklara **dağıtılmasına karar verilen kâr** 132.000 TL'dir. Kitaptaki yönteme göre **II. tertip yedek akçe** ne kadardır?",
      c: ["13.200 TL", "120.000 TL", "14.400 TL", "6.000 TL", "12.000 TL"],
      d: 4,
      a: "Kitaptaki örnekte II. tertip, dağıtılacak kârdan I. tertip düşüldükten sonra %10 üzerinden hesaplanır: (132.000 − 12.000) × 1/10 = **12.000 TL**.",
      k: "1016 resmi not s. 151"
    },
    {
      s: "Maliyeti 300.000 TL, birikmiş amortismanı 200.000 TL olan bir makine **yenilenmek amacıyla** 160.000 TL'ye satılmıştır. Satış kârı hangi hesapta ve ne tutarda izlenir?",
      c: ["679 Diğer Olağandışı Gelir ve Kârlar; 60.000 TL", "522 MDV Yeniden Değerleme Artışları; 60.000 TL", "542 Olağanüstü Yedekler; 160.000 TL", "549 Özel Fonlar; 60.000 TL", "649 Diğer Olağan Gelir ve Kârlar; 100.000 TL"],
      d: 3,
      a: "Net değer 300.000 − 200.000 = 100.000; satış 160.000 → kâr **60.000 TL**. Yenileme amacıyla satışta kâr **549 Özel Fonlar**'a alınır; fon üç yıl tutulabilir ve yeni varlığın amortismanında kullanılır.",
      k: "1016 resmi not s. 152-153"
    },
    {
      s: "Dönem sonunda 690 Dönem Kârı veya Zararı hesabında gelirler 900.000 TL, giderler 650.000 TL'dir; 691'de 50.000 TL vergi karşılığı vardır. **590 Dönem Net Kârı** hesabına alacak yazılacak tutar nedir?",
      c: ["250.000 TL", "50.000 TL", "300.000 TL", "900.000 TL", "200.000 TL"],
      d: 4,
      a: "Dönem kârı 900.000 − 650.000 = 250.000 → 692'ye aktarılır; 691'deki 50.000 vergi karşılığı 692'nin borcuna yazılır. Net kâr **200.000 TL** 692 borç / **590** alacak kaydıyla bilançoya geçer.",
      k: "1016 resmi not s. 154-155"
    }
  ]
});
