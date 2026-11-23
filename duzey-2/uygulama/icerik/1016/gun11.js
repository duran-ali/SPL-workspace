SPL.gun("1016", 11, {
  okuma: `
## Bugünün haritası
Duran varlıkları bitiriyoruz: **maddi olmayan duran varlıkların** kayıtları, duran varlıklarda **sonradan yapılan harcamalar**, amortismana tabi varlıkların **satışı** (kârlı, zararlı, defter değerinden), **MDV yenileme fonu**, **sigorta tazminatı**, özel tükenmeye tabi varlıklar ve **28-29** grupları.

1. Maddi olmayan duran varlıkların kayıtları
2. **Hasılat** ve **sermaye** harcamaları
3. Amortismana tabi MDV'nin **satışı**
4. **MDV yenileme fonu** (549 Özel Fonlar)
5. **Sigorta tazminatı**
6. Özel tükenmeye tabi varlıkların maliyeti
7. **28** ve **29** grupları

---

## 1. Maddi olmayan duran varlıklar
- **Haklar:** maliyet değeriyle; noter vb. giderleri maliyete katıp katmamakta işletme **serbesttir**. Örnek: 350.000 TL'lik patent + 50.000 noter vb. → birinci yolda **260 Haklar 400.000**; ikinci yolda 260: 350.000 ve **770 Genel Yönetim Giderleri** 50.000.
- **Şerefiye:** iyi kuruluş yeri, iyi ün ve güven sayesinde rakiplerden **daha fazla kâr** sağlayan değer; bazen **ticaret unvanı** da kapsamına girer. Muhasebeleştirilmesi için **bedelinin ödenmiş olması** gerekir.
- **Kuruluş ve örgütlenme giderleri:** kuruluş, şube açılışı veya genişleme sırasındaki noter, harç vb. giderler; kaydedilen tutar **fiili harcamalardan fazla olamaz**.
- **Özel maliyetler:** uzun vadeli kiralanan gayrimenkulde normal bakım-onarım dışındaki değişiklik ve ekler; kira sonunda **bedelsiz** mal sahibine kalır.

## 2. Sonradan yapılan harcamalar
| | **Hasılat harcamaları** (normal giderler) | **Sermaye harcamaları** (olağandışı giderler) |
|---|---|---|
| Amaç | Varlıktan tam yararlanmak için **normal bakım, tamir, temizlik** | Varlığı **genişletmek** veya ekonomik değerini **sürekli artırmak** |
| Muhasebe | **Genel giderler** | Varlığın **maliyetine eklenir**; yeni hizmet süresine göre amortisman **yeniden hesaplanır** |

## 3. Amortismana tabi MDV'nin satışı
**Defter değeri = Maliyet − Birikmiş amortisman.** Örnek: maliyet 400.000, birikmiş amortisman 180.000 → defter değeri **220.000**.

| Satış fiyatı | Endirekt yöntemle kayıt (KDV %18) |
|---|---|
| **220.000** (defter değerine eşit) | 100 Kasa 259.600; 257: 180.000 borç / 252: 400.000; 391: 39.600 alacak |
| **170.000** (zararlı) | 100 Kasa 200.600; 257: 180.000; **659 Diğer Olağan Gider ve Zararlar (MDV Satış Zararları) 50.000** borç / 252: 400.000; 391: 30.600 alacak |
| **300.000** (kârlı) | 100 Kasa 354.000; 257: 180.000 borç / 252: 400.000; **649 Diğer Olağan Gelir ve Kârlar (MDV Satış Kârları) 80.000**; 391: 54.000 alacak |

Direkt yöntemde birikmiş amortisman hesabı olmadığından varlık hesabı **defter değeriyle** alacaklandırılır.

## 4. MDV yenileme fonu
> [!ezber] **VUK:** satılan duran varlık yerine işin niteliğine ve yönetimin kararına göre **yenisi alınacaksa**, satış kârı pasifte geçici bir hesapta (**549 Özel Fonlar, MDV Yenileme Fonu**) **üç yıl** tutulabilir. Bu süre içinde kullanılmayan kârlar **üçüncü yılın vergi matrahına eklenir**.

- Kâr fona aktarılır: **649** borç / **549** alacak (veya satış kaydında doğrudan 549'a alacak).
- Yeni varlık alınınca, onun amortismanı önce **fondan mahsup** edilir; fon tükenince itfa edilmemiş kısma amortismana devam edilir. Örnek: yeni bina 500.000, 5 yıl → yıllık amortisman 100.000: **549** 80.000 ve **760** 20.000 borç / **257** 100.000 alacak.
- Üç yıl içinde yenileme yapılmazsa fon kâra aktarılır: **549** borç / **671 Önceki Dönem Gelir ve Kârları** alacak.
- Fon, bir **özsermaye unsuru** olarak tutulur.

## 5. Sigorta tazminatı
MDV'ler genellikle **defter değerinin altında olmamak** koşuluyla sigortalanır. Tazminat ile defter değeri arasındaki fark kâr veya zarara kaydedilir. Yenileme kararı varsa **tazminat fazlası** da yenileme giderleri için pasifte **en fazla üç yıl** tutulabilir; kullanılmazsa kâra eklenir.

**Örnek:** maliyeti 850.000, birikmiş amortismanı 500.000 (defter değeri **350.000**) olan bina yandı; tazminat **480.000**; yenileme kararı alındı.
| Borç | Alacak |
|---|---|
| 127 Diğer Ticari Alacaklar 480.000; 257 Birikmiş Amortismanlar 500.000 | 252 Binalar 850.000; 679 Diğer Olağandışı Gelir ve Kârlar (MDV Sigorta Tazminatları) 130.000 |
| 679: 130.000 | 549 Özel Fonlar (MDV Yenileme Fonu) 130.000 |

## 6. Özel tükenmeye tabi varlıklar
İşletildikçe içindeki cevher azaldığı için değer kaybeden **madenler, petrol kuyuları, taş ocakları**. Maliyet değeriyle kaydedilir; işletme, toprak kaldırma ve maden çıkarma giderleri maliyete eklenir (bu giderler orada yapılan **bina ve tesislerin** maliyetine girmeyen giderler olmalıdır).

## 7. 28 ve 29 grupları
| Hesap | İçerik |
|---|---|
| **280 Gelecek Yıllara Ait Giderler** | Peşin ödenen, **gelecek yıllara** ait giderler; ilgili dönem gelince **180**'e aktarılır |
| **281 Gelir Tahakkukları** | Döneme ait olup tahsili **bir yıl veya daha sonra** yapılacak gelirler |
| **291 Gelecek Yıllarda İndirilecek KDV** | Amortismana tabi kıymetlerle ilgili, **bir yıldan uzun sürede** indirilebilecek KDV; ilgili dönemde **191**'e aktarılır |
| **292 Diğer KDV** | Ertelenen, iadesi gereken vb. KDV'nin **bir yılı aşan** tutarları |
| **293 Gelecek Yıllar İhtiyacı Stoklar** | Tedbirli alım politikası veya düşük stok dönüş hızı nedeniyle **bir yıllık ihtiyaçtan fazla** stoklar; kullanım süresi bir yılın altına düşünce stok hesaplarına devredilir |
`,
  sorular: [
    {
      s: "Notlara göre şerefiyenin muhasebeleştirilebilmesi için hangi koşul gereklidir?",
      c: ["Bedelinin ödenmiş olması", "İşletmenin en az beş yıllık geçmişinin olması", "Bağımsız denetçinin onayı", "Ticaret siciline tescil edilmesi", "Şerefiyenin piyasa değerinin bilinmesi"],
      d: 0,
      a: "Muhasebe kuramına ve vergi mevzuatına göre şerefiyenin muhasebeleştirilmesi için **bedelinin ödenmiş olması** gereklidir. Bu nedenle işletmenin kendi yarattığı şerefiye kaydedilmez.",
      k: "1016 resmi not s. 80"
    },
    {
      s: "Bir maddi duran varlığı **genişletmek veya ekonomik değerini sürekli artırmak** amacıyla yapılan harcamalar nasıl muhasebeleştirilir?",
      c: ["Genel gider olarak dönem giderine yazılır ve amortisman planı değiştirilmez", "Olağandışı zarar olarak kaydedilir ve dipnotlarda ayrıca açıklanır", "Gelecek yıllara ait giderlere yazılır ve varlığın kalan hizmet yıllarına eşit olarak dağıtılır", "Özel fonlara aktarılır ve varlık yenilendiğinde amortismanda kullanılır", "Varlığın maliyetine eklenir ve amortisman yeni hizmet süresine göre yeniden hesaplanır"],
      d: 4,
      a: "Bu harcamalar **sermaye harcamalarıdır**; varlığın **maliyetine eklenir** ve yeni hizmet süresine göre amortisman **yeniden hesaplanır**. Normal bakım, tamir ve temizlik ise **hasılat harcaması** olarak genel giderlere yazılır.",
      k: "1016 resmi not s. 87"
    },
    {
      s: "Maliyeti 600.000 TL, birikmiş amortismanı 250.000 TL olan bir makine 300.000 TL'ye peşin satılmıştır. Satıştan doğan sonuç ve kaydedileceği hesap hangisidir?",
      c: ["50.000 TL kâr; 649 Diğer Olağan Gelir ve Kârlar (MDV satışı)", "Kâr veya zarar oluşmaz", "300.000 TL zarar; 659", "350.000 TL kâr; 649", "50.000 TL zarar; 659 Diğer Olağan Gider ve Zararlar"],
      d: 4,
      a: "Defter değeri = 600.000 − 250.000 = **350.000 TL**. Satış fiyatı (300.000) defter değerinden düşük olduğundan **50.000 TL zarar** oluşur ve **659 Diğer Olağan Gider ve Zararlar (MDV Satış Zararları)** hesabına borç kaydedilir.",
      k: "1016 resmi not s. 87-88"
    },
    {
      s: "VUK'a göre satılan duran varlık yerine yenisi alınacaksa satış kârı pasifte geçici bir hesapta en fazla ne kadar süre tutulabilir?",
      c: ["1 yıl", "2 yıl", "3 yıl", "5 yıl", "Süresiz"],
      d: 2,
      a: "Satış kârı **549 Özel Fonlar (MDV Yenileme Fonu)** hesabında **üç yıl** tutulabilir. Bu sürede kullanılmayan kârlar **üçüncü yılın vergi matrahına** eklenir.",
      k: "1016 resmi not s. 88"
    },
    {
      s: "Üç yıl içinde yenileme yapılmaması nedeniyle **MDV yenileme fonundaki** tutar nasıl kapatılır?",
      c: ["549 Özel Fonlar borç / 671 Önceki Dönem Gelir ve Kârları alacak", "671 Önceki Dönem Gelir ve Kârları borç / 549 Özel Fonlar alacak (fonun iadesi)", "549 Özel Fonlar borç / 257 Birikmiş Amortismanlar alacak", "549 Özel Fonlar borç / 500 Sermaye alacak (sermayeye ekleme)", "Fon süresiz bekletilir ve hiçbir kayıt yapılmaz"],
      d: 0,
      a: "Satılan varlık üç yıl içinde yenilenmezse fondaki tutar kâra devredilir: **549 Özel Fonlar** borç / **671 Önceki Dönem Gelir ve Kârları** alacak.",
      k: "1016 resmi not s. 89-90"
    },
    {
      s: "Yeni alınan binanın yıllık amortismanı 100.000 TL'dir ve MDV yenileme fonunda 80.000 TL bulunmaktadır. Birinci yıl amortisman kaydında gider hesabına ne kadar borç yazılır?",
      c: ["100.000 TL", "80.000 TL", "20.000 TL", "180.000 TL", "0 TL"],
      d: 2,
      a: "Yeni varlığın amortismanı önce **fondan mahsup** edilir: **549**'a 80.000, kalan **20.000 TL** ilgili gider hesabına (örnekte 760) borç; **257**'ye 100.000 alacak yazılır.",
      k: "1016 resmi not s. 89"
    },
    {
      s: "Maliyeti 1.000.000 TL, birikmiş amortismanı 700.000 TL olan sigortalı bir tesis yangında tamamen yok olmuş, sigorta şirketi 400.000 TL tazminat tahakkuk ettirmiştir. Tazminat fazlası ne kadardır?",
      c: ["400.000 TL", "300.000 TL", "100.000 TL", "600.000 TL", "Fazla yoktur"],
      d: 2,
      a: "Defter değeri = 1.000.000 − 700.000 = **300.000 TL**; tazminat 400.000 TL olduğundan **100.000 TL** fazla oluşur ve **679 Diğer Olağandışı Gelir ve Kârlar**'a yazılır. Yenileme kararı varsa bu tutar en fazla üç yıl **549 Özel Fonlar**'da tutulabilir.",
      k: "1016 resmi not s. 90"
    },
    {
      s: "Tedbirli satın alma politikası veya düşük stok dönüş hızı nedeniyle işletmenin **bir yıllık ihtiyacından fazla** olan stoklar hangi hesapta izlenir?",
      c: ["153 Ticari Mallar", "157 Diğer Stoklar", "293 Gelecek Yıllar İhtiyacı Stoklar", "280 Gelecek Yıllara Ait Giderler", "158 Stok Değer Düşüklüğü Karşılığı"],
      d: 2,
      a: "Bir yıllık dönemde kullanılabilecek miktardan fazla stoklar **293 Gelecek Yıllar İhtiyacı Stoklar**'da izlenir; kullanım süresi bir yılın altına düşünce ilgili **stok hesaplarına** devredilir.",
      k: "1016 resmi not s. 91"
    }
  ]
});
