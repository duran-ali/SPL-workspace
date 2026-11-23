SPL.gun("1016", 19, {
  okuma: `
## Bugünün haritası
**6 Gelir Tablosu Hesapları** sınıfına giriyoruz: gelir ve gider hesaplarının işleyişi, gelir tablosunun ara sonuçları, **60 Brüt Satışlar**, **61 Satış İndirimleri**, **62 Satışların Maliyeti**, **63 Faaliyet Giderleri** ve **64 Diğer Faaliyetlerden Olağan Gelir ve Kârlar**.

1. Gelir tablosu hesaplarının yapısı ve ara sonuçlar
2. **60 Brüt Satışlar**
3. **61 Satış İndirimleri**
4. **62 Satışların Maliyeti**
5. **63 Faaliyet Giderleri** ve yansıtma hesapları
6. **64 Diğer Faaliyetlerden Olağan Gelir ve Kârlar**

---

## 1. Yapı
Gruplar: **60** Brüt Satışlar, **61** Satış İndirimleri (−), **62** Satışların Maliyeti (−), **63** Faaliyet Giderleri (−), **64** Diğer Faaliyetlerden Olağan Gelir ve Kârlar, **65** Diğer Faaliyetlerden Olağan Gider ve Zararlar (−), **66** Finansman Giderleri (−), **67** Olağandışı Gelir ve Kârlar, **68** Olağandışı Gider ve Zararlar (−), **69** Dönem Net Kârı veya Zararı.

- **Gelir hesapları** dönem içinde **alacaklı** çalışır (düzeltme kayıtları hariç borçlu çalışmaz); **gider hesapları** daima **borçlu** çalışır. Dönem sonunda tümü **690 Dönem Kârı veya Zararı**'na devredilerek kapatılır.
- Faaliyet giderleri önce **7 Maliyet Hesapları**'na, sonra 6'daki hesaba kaydedilir.
- Net zarar borç karakterli olsa da analize uygun bilançoda **özkaynaklar altında eksi** işaretle gösterilir.

> [!ezber] Ara sonuçlar: **60-61-62-63** → **faaliyet kârı/zararı**; **64-65-66** → **diğer faaliyetlerden kâr/zarar**; ikisi toplanınca **olağan kâr/zarar**; **67-68** eklenince **dönem kârı/zararı**.

## 2. 60 Brüt Satışlar
Ana faaliyet konusu mal ve hizmet satışları karşılığında alınan ya da tahakkuk ettirilen değerler. **Sübvansiyonlar**, satış tarihindeki **vade farkları**, ihracatla ilgili dönem içi **kur farkları** ve **vergi iadeleri** bu grupta gösterilir; **KDV dahil edilmez**. **Holding ana şirketinin** bağlı ortaklıklardan elde ettiği gelirler de esas faaliyet sayıldığından buradadır.

| Hesap | İçerik |
|---|---|
| **600 Yurt İçi Satışlar** | Yurt içindeki kişilere satışlar |
| **601 Yurt Dışı Satışlar** | Yurt dışına satışlar; para transferine kadar oluşan kur farkları (**satış dönemi içinde** olmak şartıyla) buraya alacak |
| **602 Diğer Gelirler** | Sübvansiyonlar, vergi iadeleri, **faturada ayrıca belirtilmiş** vade farkları, fiyat istikrar destekleme primi |

**Yurt dışı satış örneği:** 100.000 YP kredili satış, kur 1,40 → 120/601: 140.000. Tahsilatta kur 1,41 → 102: 141.000 / 120: 140.000, **601: 1.000**. Dönem sonuna kadar tahsil edilmezse dönem sonu kur farkı (1,45 → 5.000) **120 / 601** olarak kaydedilir.

**Vade farkı örneği:** peşin fiyatı 10.000 olan mal 3 ay vadeli 13.000'e satıldı → 120: 13.000 / 600: 10.000, **602: 3.000**. Vade farkı faturada ayrıca gösterilmeyip fiyata dahil edildiyse **600 veya 601**'e yazılır.

## 3. 61 Satış İndirimleri (−)
| Hesap | İçerik |
|---|---|
| **610 Satıştan İadeler** | İade edilen malların fatura tutarları |
| **611 Satış İskontoları** | Fatura düzenlenip satış gerçekleştikten **sonra** yapılan **kasa** ve **miktar** iskontoları |
| **612 Diğer İndirimler** | Alıcı hesabına ödenen sevk giderleri, hatalı/noksan veya hasarlı mal indirimleri, satış vergileri ve fonlar (**KDV hariç**) |

- **Kasa iskontosu:** kredili satışta alıcının **vadeden önce** ödemesi karşılığı indirim. **Miktar iskontosu:** belirlenen miktar veya tutarları aşan alışlarda yapılan indirim.
- İade örneği: 25.000 + KDV iade, çekle ödendi → **610** 25.000 ve **191** borç / **103 Verilen Çekler ve Ödeme Emirleri** alacak.

## 4. 62 Satışların Maliyeti (−)
| Hesap | İçerik |
|---|---|
| **620 Satılan Mamuller Maliyeti** | Üretilen mamullerin maliyeti; 152 alacak / 620 borç |
| **621 Satılan Ticari Mallar Maliyeti** | Değişikliğe uğramadan satılan ticari mallar |
| **622 Satılan Hizmet Maliyeti** | 7/A'da **741 Hizmet Üretim Maliyeti Yansıtma** alacağı ile 622 borç |
| **623 Diğer Satışların Maliyeti** | |

- **Aralıklı sayım:** dönem içinde 620 kullanılmaz; dönem sonunda 152'nin borç kalanı ile sayım sonucu farkı tek maddede 620'ye yazılır (320.000 − 225.000 = **95.000**).
- **Aralıksız sayım:** her satışta 620 maliyetle borçlandırılır; hem stok hem satış maliyeti sürekli izlenir.

## 5. 63 Faaliyet Giderleri (−)
Esas faaliyetle ilgili olup **üretim maliyetleriyle bağlantısı kurulmayan** giderler. 7/A seçeneğinde:

| 7 sınıfı (dönem içi) | Yansıtma | 6 sınıfı | Kapanış |
|---|---|---|---|
| 750 Araştırma ve Geliştirme Giderleri | 751 | **630** | 690 |
| 760 Pazarlama, Satış ve Dağıtım Giderleri | 761 | **631** | 690 |
| 770 Genel Yönetim Giderleri | 771 | **632** | 690 |

- **630:** aktifleştirilmeyen Ar-Ge giderleri ile aktifleştirilmiş olanların bu döneme düşen **itfa payları**.
- Örnek: 60.000 reklam gideri → **631** borç / **761** alacak.

## 6. 64 Diğer Faaliyetlerden Olağan Gelir ve Kârlar
| Hesap | İçerik |
|---|---|
| **640 İştiraklerden Temettü Gelirleri** | Sermayesinin **%10-%50**'sine sahip olunan işletmelerden temettü |
| **641 Bağlı Ortaklıklardan Temettü Gelirleri** | **%50'nin üzerinde** sermaye veya oy hakkı olunan işletmelerden temettü |
| **642 Faiz Gelirleri** | Mali yatırımların ve vadesinde ödenmeyen alacakların faizleri |
| **643 Komisyon Gelirleri** | |
| **644 Konusu Kalmayan Karşılıklar** | **Aktifle ilgili** karşılıklardan iptal edilenler |
| **645 Menkul Kıymet Satış Kârları** | Spekülatif veya yatırım amaçlı menkul kıymet satış kârları |
| **646 Kambiyo Kârları** | Yabancı paralı işlemlerden kârlar |
| **647 Reeskont Faiz Gelirleri** | |
| **648 Enflasyon Düzeltmesi Kârları** | 698 ve 358'den aktarılan olumlu farklar |
| **649 Diğer Olağan Gelir ve Kârlar** | Örneğin kira gelirleri |

- Hisse senedi ve tahvil **satış kârları** 640'a değil **642/645**'e alınır.
- **644 örneği:** 100.000 TL'lik mal için %70 değer düşüklüğü karşılığı (70.000) ayrılmıştı; mal 40.000'e satıldı. Beklenen satış 30.000 olduğundan **10.000** karşılık iptal edilerek **644**'e gelir yazılır.

> [!dikkat] İhracattan elde edilen dövizlerin **aynı dönem içinde** değer kazanması **646**'ya değil **601**'e yazılır; **ertesi dönemde** ortaya çıkan olumlu kur farkları ise 646'ya kaydedilir. Örnek: kasada döviz bürosundan alınmış 1.000 YP ve ihracattan 10.000 YP; kur 1,00 → 1,20 → **601**: 2.000, **646**: 200.

- **647:** borç senetleri reeskontu (322 borç / 647 alacak) ve izleyen dönem başında alacak senetleri reeskontunun iptali (122 borç / 647 alacak).
`,
  sorular: [
    {
      s: "Gelir tablosunda **olağan kâr veya zarar** tutarına nasıl ulaşılır?",
      c: ["Faaliyet kâr/zararına 64-65-66 gruplarının net sonucu eklenerek", "60-61-62-63 gruplarının sonucuna 67 ve 68 gruplarının sonucu eklenerek", "Yalnızca 64 ve 65 grupları netleştirilerek ve sonuç brüt satış kârına eklenerek", "Dönem kârından vergi ve diğer yasal yükümlülük karşılıkları düşülerek", "Brüt satışlardan satış indirimleri ve satışların maliyeti düşülerek"],
      d: 0,
      a: "60-61-62-63 → **faaliyet kârı/zararı**; 64-65-66 → **diğer faaliyetlerden kâr/zarar**. İkisinin toplamı **olağan kâr/zarar**dır; 67 ve 68 eklenince **dönem kârı/zararı** bulunur.",
      k: "1016 resmi not s. 156"
    },
    {
      s: "Brüt satışlar ile ilgili hangisi **yanlıştır**?",
      c: ["Satış tarihindeki vade farkları bu grupta gösterilebilir", "İhracatla ilgili dönem içi kur farkları bu grupta gösterilebilir", "Katma değer vergisi brüt satışlara dahil edilir", "Holding ana şirketinin bağlı ortaklıklardan elde ettiği gelirler bu grupta izlenir", "Sübvansiyonlar ve vergi iadeleri bu grupta gösterilir"],
      d: 2,
      a: "Brüt satışlara **KDV dahil edilmez**; KDV bilançodaki ilgili hesaplarda (391) yer alır. Diğer ifadeler doğrudur.",
      k: "1016 resmi not s. 156-157"
    },
    {
      s: "Yurt dışına 50.000 YP'lik kredili satış 1 YP = 2,00 TL kurundan yapılmıştır. Bedel aynı dönem içinde 1 YP = 2,04 TL kurundan tahsil edilmiştir. Oluşan kur farkı hangi hesaba ve ne tutarda yazılır?",
      c: ["646 Kambiyo Kârları; 2.000 TL", "642 Faiz Gelirleri; 2.000 TL", "602 Diğer Gelirler; 2.000 TL", "601 Yurt Dışı Satışlar; 2.000 TL", "601 Yurt Dışı Satışlar; 102.000 TL"],
      d: 3,
      a: "Para transferine kadar oluşan kur farkları, **satışın yapıldığı dönem içinde** olmak şartıyla **601**'e alacak yazılır: 50.000 × 0,04 = **2.000 TL**.",
      k: "1016 resmi not s. 157-158"
    },
    {
      s: "Peşin fiyatı 20.000 TL olan mal, vade farkı **faturada ayrıca gösterilerek** 4 ay vadeli 24.000 TL'ye satılmıştır. Kayıt hangisidir?",
      c: ["120: 24.000 borç / 600: 24.000 alacak", "120: 24.000 borç / 600: 20.000 ve 380: 4.000 alacak", "120: 24.000 borç / 600: 20.000 ve 642 Faiz Gelirleri: 4.000 alacak", "120: 20.000 borç / 600: 20.000 alacak", "120: 24.000 borç / 600: 20.000 ve 602 Diğer Gelirler: 4.000 alacak"],
      d: 4,
      a: "Faturada ayrıca belirtilen vade farkı **602 Diğer Gelirler**'e yazılır. Vade farkı fiyata dahil edilip ayrıca gösterilmeseydi 600 (veya 601) hesabına yazılırdı.",
      k: "1016 resmi not s. 158-159"
    },
    {
      s: "Kredili satışta alıcının borcunu **vadesinden önce** ödemesi karşılığında yapılan indirim nedir ve hangi hesapta izlenir?",
      c: ["Kasa iskontosu; 611 Satış İskontoları", "Miktar iskontosu; 612 Diğer İndirimler", "Ticari iskonto; 600 Yurt İçi Satışlar", "Kasa iskontosu; 610 Satıştan İadeler", "Vade farkı; 602 Diğer Gelirler"],
      d: 0,
      a: "**Kasa iskontosu**, alıcının vadeden önce ödemesi karşılığı yapılan indirimdir; **miktar iskontosu** ise belirlenen miktarı aşan alımlar için yapılır. İkisi de satıştan sonra yapılırsa **611 Satış İskontoları**'nda izlenir.",
      k: "1016 resmi not s. 159-160"
    },
    {
      s: "Aralıklı sayım yöntemi uygulayan işletmede 152 Mamuller hesabının borç kalanı 480.000 TL, dönem sonu sayımında bulunan mamul 310.000 TL'dir. **620 Satılan Mamuller Maliyeti**'ne kaydedilecek tutar nedir?",
      c: ["480.000 TL", "310.000 TL", "170.000 TL", "790.000 TL", "Dönem içinde her satışta ayrı ayrı kaydedilir"],
      d: 2,
      a: "Aralıklı sayımda dönem içinde 620 kullanılmaz; dönem sonunda 152'nin borç kalanı ile sayım sonucunun farkı tek maddede 620'ye yazılır: 480.000 − 310.000 = **170.000 TL**.",
      k: "1016 resmi not s. 160-161"
    },
    {
      s: "7/A seçeneğini uygulayan işletmede dönem içinde **760 Pazarlama, Satış ve Dağıtım Giderleri**'ne yazılan tutarlar dönem sonunda nasıl aktarılır?",
      c: ["631 borç / 761 Pazarlama, Satış ve Dağıtım Giderleri Yansıtma alacak", "760 Pazarlama, Satış ve Dağıtım Giderleri borç / 631 alacak", "690 Dönem Kârı veya Zararı borç / 760 alacak", "632 Genel Yönetim Giderleri borç / 771 Yansıtma alacak", "761 Yansıtma borç / 760 alacak; başka kayıt yapılmaz"],
      d: 0,
      a: "7/A'da 760'taki giderler maliyet dönemi sonunda **761 Yansıtma** alacağı ile **631**'in borcuna devredilir; 631 de dönem sonunda **690**'a aktarılarak kapatılır.",
      k: "1016 resmi not s. 163-164"
    },
    {
      s: "Sermayesinin **%60'ına** sahip olunan bir şirketten alınan temettü hangi hesaba alacak yazılır?",
      c: ["640 İştiraklerden Temettü Gelirleri", "642 Faiz Gelirleri", "645 Menkul Kıymet Satış Kârları", "641 Bağlı Ortaklıklardan Temettü Gelirleri", "600 Yurt İçi Satışlar"],
      d: 3,
      a: "**%50'nin üzerinde** sermaye veya oy hakkına sahip olunan işletmeler bağlı ortaklıktır; temettü **641**'e yazılır. %10-%50 arası payda (iştirak) **640** kullanılır.",
      k: "1016 resmi not s. 165-166"
    }
  ]
});
