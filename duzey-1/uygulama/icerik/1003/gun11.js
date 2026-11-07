SPL.gun("1003", 11, {
  okuma: `
## Bugünün haritası
1. **Baz puan**
2. Tahvil fiyatı neden nominalden sapar? **İskontolu, primli, başabaş**
3. Beklenen getirinin üç bileşeni: **faiz, kredi ve likidite riski**
4. Piyasa faizleri **nasıl değişir?**
5. **Durasyon** ve faiz oranı duyarlılığı
6. **Risksiz faiz oranı**
7. **Kredi derecelendirmesi** ve **CDS**

---

## 1. Baz puan
- **1 baz puan = %0,01** (on binde bir). **100 baz puan = %1.**
- **Örnek:** %4,50 ile %4,90 getiri arasındaki fark **40 baz puandır**.
- Faiz %10'dan %11'e çıktığında "%10 arttı" demek karışıklık yaratır; "**100 baz puan arttı**" demek kesindir.
- Risk primleri (spread) de genelde baz puanla ifade edilir.

---

## 2. Kupon oranı ile piyasa faizi

| Durum | Fiyat | Sonuç |
|---|---|---|
| Kupon **<** piyasa faizi | **İskontolu** (fiyat < nominal) | Yatırımcı vade sonunda **sermaye kazancı** elde eder |
| Kupon **>** piyasa faizi | **Primli** (fiyat > nominal) | Yüksek kupon için fazladan ödenir |
| Kupon **=** piyasa faizi | **Başabaş** (≈ nominal) | Genelde ilk ihraç gününde görülür |

Tahvil fiyatı, gelecekteki nakit akışlarının **cari piyasa faiziyle** bugüne indirgenmiş değeridir.

---

## 3. Beklenen getirinin bileşenleri
*Beklenen getiri = Piyasa faiz oranı + Kredi risk primi + Likidite risk primi*

| Risk | Anlamı | Notlar |
|---|---|---|
| **Faiz oranı riski** | Piyasa faizinin değişmesi | **İhraççıdan bağımsızdır**; tüm sabit getirili araçları birlikte etkiler. |
| **Kredi riski** | İhraççının faiz ve anaparayı ödeyememesi | Risk primi artarsa fiyat **düşer**. Devlet tahvilleri (vergi ve para basma gücü) kredi riski açısından risksiz sayılır. |
| **Likidite riski** | Tahvili istendiğinde adil fiyattan **nakde çevirememe** | Alış-satış marjının **genişlemesiyle** görülür. Az işlem gören tahvil **daha yüksek getiri, daha düşük fiyatla** işlem görür. |

- **Gösterge tahvil (benchmark, on-the-run):** Hazinenin en son ihraç ettiği referans vadeli tahvillerdir (ör. 2 ve 10 yıl). En likit tahvillerdir ve marjları dardır.
- **Eski tahviller (off-the-run):** Aynı ihraççıdan olsalar bile **likiditeleri düşüktür**.
- **Örnek:** 2 yıllık DİBS getirisi %25. Aynı vadeli özel sektör tahvilinde kredi primi %4, likidite primi %1 istenirse beklenen getiri **%30** olur.

---

## 4. Piyasa faizleri nasıl değişir?
- **Kısa vadede:** belirleyici aktör **merkez bankasıdır**. Politika faizi ve likidite koşulları gecelik ve kısa vadeli faizlere hızla yansır.
  - **Sıkılaştırma** kısa faizi yukarı, **gevşeme** aşağı çeker.
- **Uzun vadede:** **beklentiler** baskındır. Bunlar enflasyon görünümü, büyüme ve gelecekteki para politikasıdır.
  - Merkez bankasının etkisi dolaylıdır; **ileriye dönük yönlendirme** önemlidir.
- **Ülke riski:** kamu maliyesi, dış borç, siyasi görünüm ve **kredi notu**. Not düşerse faiz **yükselir**. Etkisi uzun vadede daha belirgindir.
- **Küresel koşullar:** risk iştahı, gelişmiş ülke politikaları ve sermaye akımları. Belirsizlikte gelişmekte olan ülke faizleri **yükselebilir**.

---

## 5. Durasyon
- **Tanım:** tahvilin tüm nakit akışlarının **bugünkü değerleriyle ağırlıklandırılmış ortalama vadesidir**.
- Durasyon yükseldikçe faiz değişimine **duyarlılık artar**.

| Faktör (diğerleri sabitken) | Durasyona etkisi |
|---|---|
| **Vade** uzarsa | Durasyon **artar** (aynı yön) |
| **Kupon oranı** artarsa | Durasyon **azalır** (ters yön) |
| **YTM / piyasa faizi** artarsa | Durasyon **azalır** (ters yön) |

- **Kuponsuz** ve düşük kuponlu tahvillerde nakit akışı vadeye yığıldığı için durasyon **yüksektir**.
- **Düzeltilmiş durasyon:** faizdeki **%1'lik (100 baz puan)** değişimin fiyatı yaklaşık **yüzde kaç** değiştireceğini gösterir. İlişkinin **doğrusal** olduğunu varsayar.
- Büyük faiz hareketlerinde durasyon yetmez; fiyat eğrisinin eğimini hesaba katan **konveksite** de kullanılır.

---

## 6. Risksiz faiz oranı
- **Tanım:** **kredi riski üstlenmeden**, vadeye kadar tutarak elde edilebilecek getiridir. "Risksiz", mutlak güvenlik anlamına gelmez.
- Riskli tüm varlıklar için **fırsat maliyetidir**: *Beklenen getiri = Risksiz faiz + Risk primi*.
- **Pratikte risksiz varlık:**
  - Dünyada referans **ABD Hazine tahvilleridir**.
  - Türkiye'de referans **TL cinsi DİBS**'lerdir.
- **Vade uyumu** şarttır.
  - 3 aylık bir işlemde kısa vadeli hazine bonosu, 5 yıllık bir projede 5 yıllık tahvil getirisi kullanılır.
  - Tam vade yoksa **interpolasyon** yapılır.
- **Reel risksiz faiz** doğrudan gözlenemez. En iyi göstergesi **TÜFE'ye endeksli DİBS** getirileridir.

---

## 7. Kredi riskinin ölçülmesi

### Derecelendirme
- Yerel para cinsi devlet borcu en düşük kredi riskli araç sayılır ve **referans (benchmark)** işlevi görür. Yine de derecelendirilir.
  - Nominal temerrüt riski sıfıra yakındır. Ancak aşırı para basma **enflasyon riski** yaratır.
  - Bu yüzden devlet tahvilleri "risksiz" değil, **"varsayılan risksiz"** (default risk-free) varlıklardır.
- **Kuruluşlar:** küresel ölçekte Moody's, S&P, Fitch; Türkiye'de **SPK'nın yetkilendirdiği** yerel kuruluşlar.

| Kategori | Moody's | S&P / Fitch |
|---|---|---|
| **Yatırım yapılabilir** | Aaa, Aa, A, **Baa3**'e kadar | AAA, AA, A, **BBB−**'ye kadar |
| **Spekülatif** | **Ba1**'den başlar: Ba, B, Caa, Ca, C | **BB+**'dan başlar: BB, B, CCC, CC, C |
| **Temerrüt** | — | **D** |

- Risk kademeler boyunca **katlanarak** artar.
  - BBB'nin tarihsel temerrüt olasılığı **%0,45**, bir alt kademe BB'nin **%1,96**'dır (yaklaşık **4 kat**).
  - Bu yüzden yatırım yapılabilir seviyenin alt sınırı kritik bir eşiktir.
- Not düşerse risk primi artar, fiyat düşer. Ama not değişiklikleri çoğu zaman **önceden fiyatlanır**.
- **Ulusal ölçek** notları ("tr" ya da "(Trk)" ekli) ihraççıyı yalnızca Türkiye'deki diğer ihraççılarla kıyaslar. Bir banka ulusal ölçekte AAA (Trk) olup uluslararası ölçekte ülke riski nedeniyle düşük not alabilir.
- Derecelendirme kuruluşu, notun dayandığı bilgileri vade boyunca **yılda en az bir kez** gözden geçirmek zorundadır.

### Kredi temerrüt takası (CDS)
- **Niteliği:** ihraç edilmiş bir menkul kıymet değildir. **Tezgâhüstü (OTC), iki taraflı bir türev sözleşmedir**.
  - İşlevi sigortaya benzer, ama hukuken **sigorta sözleşmesi değildir**.
- **Taraflar:**
  - **Koruma alıcısı:** kredi riskinden korunmak isteyen taraftır; düzenli **prim** öder.
  - **Koruma satıcısı:** riski üstlenen taraftır (yatırım bankaları, hedge fonlar).
- Fiilen **kurumsal yatırımcılar** arasında işlem görür; bireysel yatırımcılara açık değildir.
- **Kredi olayı:** temerrüt, alacaklı aleyhine yeniden yapılandırma ya da ödemelerin askıya alınmasıdır. Olay olursa satıcı ya dayanak tahvili devralır ya da kaybı **nakden** öder.
- **Örnek:** 5 yıllık CDS'in **200 baz puan** olması, nominal üzerinden yıllık yaklaşık **%2** koruma maliyeti demektir.
- **"Türkiye CDS'i"**, Hazinenin **döviz cinsi Eurotahvillerini** referans alır. Bu yüzden ülkenin döviz kazanma ve dış borç çevirme kapasitesiyle ilişkilidir.
- **Ülke risk tavanı (sovereign ceiling):** bir ülkenin şirketleri genelde o ülke hazinesinden daha düşük riskli kabul edilmez.

> [!ezber]
> **1 bp = %0,01** · Vade↑ → durasyon↑ · Kupon↑ ya da faiz↑ → durasyon↓
> **Yatırım yapılabilir alt sınır:** BBB− / Baa3 · **CDS** OTC türevdir, sigorta değildir
`,
  sorular: [
    {
      s: "Bir tahvilin getirisi %4,50'den %4,90'a yükselmiştir. Bu değişim kaç baz puandır?",
      c: ["40 baz puan", "4 baz puan", "400 baz puan", "0,4 baz puan", "4.000 baz puan"],
      d: 0,
      a: "1 baz puan %0,01'dir. %0,40'lık fark **40 baz puan**dır.",
      k: "1003 resmi not s. 102"
    },
    {
      s: "Kupon oranı piyasa faiz oranının altında kalan bir tahvil için hangisi doğrudur?",
      c: ["Nominal değerinin üzerinde (primli) işlem görür.", "Nominal değerinin altında (iskontolu) işlem görür.", "Nominal değerine eşit (başabaş) işlem görür.", "Kredi riski olmadığı için fiyatı sabit kalır.", "Vade sonunda yatırımcı için sermaye kaybı oluşur."],
      d: 1,
      a: "Kupon piyasa faizinin altındaysa tahvil ancak **iskontolu** fiyattan alıcı bulur. Yatırımcı vade sonunda nominal değeri alarak **sermaye kazancı** elde eder.",
      k: "1003 resmi not s. 102–103"
    },
    {
      s: "Kredi notu ve vadesi aynı olan iki tahvilden piyasada daha az işlem göreni için hangisi beklenir?",
      c: ["Daha düşük getiri ve daha yüksek fiyat", "Daha yüksek getiri ve daha düşük fiyat", "Aynı getiri ve aynı fiyat", "Daha düşük kredi risk primi", "Daha dar alış-satış marjı"],
      d: 1,
      a: "Yatırımcı likidite dezavantajı için **likidite primi** ister. Az işlem gören tahvil **daha yüksek getiri** ve dolayısıyla **daha düşük fiyatla** işlem görür.",
      k: "1003 resmi not s. 103"
    },
    {
      s: "2 yıllık DİBS getirisi %25'tir. Aynı vadeli bir özel sektör tahvili için yatırımcılar %4 kredi risk primi ve %1 likidite primi talep etmektedir. Bu tahvilin beklenen getirisi yüzde kaçtır?",
      c: ["%21", "%25", "%29", "%30", "%26"],
      d: 3,
      a: "Beklenen getiri = piyasa faizi + kredi primi + likidite primi = 25 + 4 + 1 = **%30**.",
      k: "1003 resmi not s. 104"
    },
    {
      s: "Diğer koşullar sabitken aşağıdakilerden hangisi tahvilin durasyonunu **artırır?**",
      c: ["Kupon oranının yükselmesi", "Vadeye kadar getirinin yükselmesi", "Vadenin uzaması", "Kupon ödeme sıklığının artması", "Piyasa faizinin yükselmesi"],
      d: 2,
      a: "Vade uzadıkça durasyon **artar**. Kupon oranı ve YTM ile durasyon arasındaki ilişki ise **ters** yönlüdür.",
      k: "1003 resmi not s. 106–107"
    },
    {
      s: "Düzeltilmiş durasyon neyi gösterir?",
      c: ["Tahvilin vadesine kalan süreyi yıl cinsinden", "Vade boyunca ödenecek kuponların toplam tutarını", "Faizdeki %1'lik değişimin fiyatta yol açacağı yaklaşık yüzde değişimi", "Tahvilin uluslararası kredi derecelendirme notunu", "İhraççının vade içinde temerrüde düşme olasılığını ve bunun fiyata etkisini"],
      d: 2,
      a: "Düzeltilmiş durasyon, faizdeki **%1 (100 baz puan)** değişimin fiyatta yol açacağı yaklaşık **yüzde** değişimi gösterir. Büyük faiz hareketlerinde **konveksite** de gerekir.",
      k: "1003 resmi not s. 107"
    },
    {
      s: "Uluslararası derecelendirmede S&P / Fitch ölçeğine göre yatırım yapılabilir seviyenin **en alt** notu hangisidir?",
      c: ["A−", "BBB+", "BBB−", "BB+", "BB"],
      d: 2,
      a: "Yatırım yapılabilir seviye **BBB−**'de (Moody's'te Baa3) biter. **BB+** spekülatif seviyenin en üst notudur.",
      k: "1003 resmi not s. 110–111"
    },
    {
      s: "Kredi temerrüt takası (CDS) ile ilgili hangisi doğrudur?",
      c: ["Borsada işlem gören standart bir menkul kıymettir.", "Hukuken bir sigorta sözleşmesi olarak düzenlenmiştir.", "Koruma satıcısı, koruma alıcısına düzenli prim öder.", "Tezgâhüstü piyasada işlem gören iki taraflı bir türev sözleşmedir.", "Bireysel yatırımcıların erişimine, borsa üzerinden yaygın olarak açık bir yatırım aracıdır."],
      d: 3,
      a: "CDS, **OTC'de işlem gören iki taraflı bir türev sözleşmedir**. İşlevi sigortaya benzese de hukuken sigorta değildir. Primi **koruma alıcısı** öder; piyasa fiilen kurumsal yatırımcılara açıktır.",
      k: "1003 resmi not s. 111–112"
    }
  ]
});
