SPL.gun("1007", 4, {
  okuma: `
## Bugünün haritası
Dün proforma bilançoyu kalem kalem kurduk. Bugün aynı soruya kısa yoldan cevap veren **satışların yüzdesi yöntemini** öğreneceğiz: "Satışlar şu kadar artarsa ne kadar **ek finansmana** ihtiyaç olur?" Sınavda bu yöntem sık sorulan bir hesaptır.

1. Yöntemin varsayımı ve kullanım amacı
2. Satışlarla **birlikte değişen** ve **değişmeyen** bilanço kalemleri
3. Yedek akçeler (dağıtılmamış kârlar) neden ayrı ele alınır?
4. Adım adım çözüm: **SANTE A.Ş.**
5. Kısa yol formülü

---

## 1. Yöntemin varsayımı
Satışların yüzdesi yöntemi, **varlıklar ve bazı pasif kalemlerle satışlar arasında yüzdesel bir ilişki** bulunduğunu varsayar.

- Bu varsayım **pek gerçekle bağdaşmaz**; ancak yıllık bütçeleme sürecine başlamadan önce, veri satış rakamlarının şirketi nereye götüreceği ve **finansman ihtiyacının** ne kadar olacağı konusunda yöneticinin **süratle** sonuca ulaşmasını sağlar.
- **Birinci adım:** satışlarla doğrudan ilişkili değişen bilanço kalemlerini belirlemek.
- **İkinci adım:** geçmiş yıl bilançolarından bu kalemlerin **satışlara oranını** hesaplamak. **Yeni kurulan** bir şirkette aynı endüstrideki **benzer şirketlerin** oranlarından yararlanılır.

## 2. Hangi kalemler satışlarla değişir?
Yüksek satış hacmi daha fazla nakit, alacak ve stok gerektirir; kapasite genişlemesi için **duran varlıklara** yatırım yapmayı da gerekli kılar. Pasifte ise satıcı kredileri, tahakkuk etmiş giderler ve vergi borçları satışlarla birlikte artar.

| | **Satışlara bağlı olarak değişen** | **Satışlara bağlı olarak değişmeyen** |
|---|---|---|
| **Aktif** | Kasa-Banka, **Alacaklar**, **Stoklar**, **Maddi duran varlıklar** | **İştirakler** |
| **Pasif** | **Ticari borçlar**, Ödenecek giderler, Tahakkuk etmiş vergi, Prim borçları | **Banka kredileri**, **Uzun süreli borçlar**, **Tahviller**, İpotekli borç senetleri, **Ödenmiş sermaye** |

> [!ezber] Pasifte satışlarla kendiliğinden artan kalemler (ticari borçlar, ödenecek giderler, vergi ve prim borçları) **kendiliğinden oluşan kaynaklardır**. Banka kredisi, tahvil ve ödenmiş sermaye ise satışla **kendiliğinden değişmez**; bunlar ancak bir **finansman kararıyla** değişir.

## 3. Yedek akçeler
Şirket kârlıysa ve kârın tamamını dağıtmıyorsa **yedek akçelerin (dağıtılmamış kârların)** artması normaldir. Ancak:
- Yedek akçelerdeki artış yüzdesi ile satışlardaki artış arasındaki ilişki **sabit değildir**.
- Yedek akçelerdeki değişim şirketin **kâr dağıtım politikasına** bağlıdır.

Bu nedenle yedek akçeler satışların yüzdesiyle değil, **net kâr marjı** ve **kâr dağıtım oranıyla** hesaplanır:

> [!ezber] Dağıtılmayan kârlara ilave = Satışlar × **Net kâr marjı** × (1 − **Kâr dağıtım oranı**)

## 4. Çözümlü örnek: SANTE A.Ş.
Satışlar **450 milyon TL'den 600 milyon TL'ye** çıkacak. Geçmiş yıllarda satışların yüzdesi olarak kalemler ve diğer veriler:

| Kalem | Satışların % | 600 milyon TL satışta |
|---|---|---|
| Kasa-Bankalar | %3 | 18.000.000 |
| Alacaklar | %12,5 | 75.000.000 |
| Stoklar | %25 | 150.000.000 |
| Maddi duran varlıklar (net) | %30 | 180.000.000 |
| **Aktif toplamı** | **%70,5** | **423.000.000** |
| Ticari borçlar | %10 | 60.000.000 |
| Ödenecek giderler | %2 | 12.000.000 |
| Tahakkuk etmiş vergi, resim ve prim borçları | %6 | 36.000.000 |
| **Kendiliğinden oluşan kaynaklar** | **%18** | **108.000.000** |

Satışlarla ilişkisi olmayan kalemler aynen kalır: kısa süreli banka kredileri **70.000.000**, ödenmiş sermaye **50.000.000**. Dönem başı yedek akçeler **116.250.000**; **net kâr marjı %8**, **kâr dağıtım oranı %50**.

- VSNK = %8 × 600.000.000 = **48.000.000**
- Kâr payı = %50 × 48.000.000 = **24.000.000**
- Dağıtılmayan kârlara ilave = **24.000.000** → dönem sonu yedek akçeler = 116.250.000 + 24.000.000 = **140.250.000**

| Proforma pasif | TL |
|---|---|
| Banka kredileri | 70.000.000 |
| Ticari borçlar + ödenecek giderler + vergi/prim | 108.000.000 |
| **Kısa süreli borç toplamı** | **178.000.000** |
| Uzun süreli borç | 0 |
| Ödenmiş sermaye | 50.000.000 |
| Yedek akçeler | 140.250.000 |
| **Pasif toplamı** | **368.250.000** |
| **Finansman açığı** (423.000.000 − 368.250.000) | **54.750.000** |

## 5. Kısa yol
Satışlar arttığında artan satışın **%70,5**'i kadar aktiflere yatırım gerekir; bunun **%18**'i kendiliğinden oluşan kaynaklarla karşılanır. Geriye artan satışın **%52,5**'i kalır.

- Satışlardaki artış = 600.000.000 − 450.000.000 = **150.000.000**
- Ek finansman gereksinimi (iç kaynak öncesi) = %52,5 × 150.000.000 = **78.750.000**
- Bunun **24.000.000** TL'si dağıtılmayan kârlarla karşılanınca dışarıdan bulunacak tutar **54.750.000** TL'dir; tablodaki açıkla aynıdır.

> [!ezber] **Dış finansman ihtiyacı = (A% − B%) × ΔSatış − Dağıtılmayan kârlara ilave**. A% = satışlarla değişen aktiflerin satışlara oranı, B% = kendiliğinden oluşan kaynakların satışlara oranı.
`,
  sorular: [
    {
      s: "Satışların yüzdesi yöntemi ile ilgili hangisi doğrudur?",
      c: ["Tüm bilanço kalemlerinin satışlarla aynı oranda değiştiğini varsayar ve gerçeğe tam olarak uyar", "Bazı kalemlerle satışlar arasında yüzdesel ilişki varsayar; hızlı sonuç verir", "Yalnızca nakit giriş ve çıkışlarını dikkate alır, bilanço kalemlerini kullanmaz", "Yalnızca yeni kurulan ve geçmiş bilançosu olmayan şirketlerde kullanılabilir", "Satış tahmini yapılmadan, yalnız geçmiş yıl bilançosuyla uygulanabilir"],
      d: 1,
      a: "Yöntem, varlıklar ve **bazı pasif kalemlerle** satışlar arasında yüzdesel ilişki varsayar. Bu varsayım **pek gerçekle bağdaşmaz**; ancak yöneticinin veri satış rakamlarına göre **finansman ihtiyacı** hakkında **süratle** sonuca ulaşmasını sağlar.",
      k: "1007 resmi not s. 15"
    },
    {
      s: "Satışların yüzdesi yönteminde aşağıdaki aktif kalemlerden hangisinin satışlara bağlı olarak **değişmediği** kabul edilir?",
      c: ["Alacaklar", "Stoklar", "Kasa-Banka", "Maddi duran varlıklar", "İştirakler"],
      d: 4,
      a: "Aktifte **kasa-banka, alacaklar, stoklar ve maddi duran varlıklar** satışlarla birlikte değişir. **İştirakler** ise satışlara paralel olarak kendiliğinden değişmez.",
      k: "1007 resmi not s. 15"
    },
    {
      s: "Satışların yüzdesi yönteminde aşağıdaki pasif kalemlerden hangisi satışlarla birlikte **kendiliğinden** değişir?",
      c: ["Banka kredileri", "Tahviller", "Ödenmiş sermaye", "Ticari borçlar", "İpotekli borç senetleri"],
      d: 3,
      a: "Pasifte **ticari borçlar**, ödenecek giderler, tahakkuk etmiş vergi ve prim borçları satışlarla paralel değişir. **Banka kredileri, uzun süreli borçlar, tahviller, ipotekli borç senetleri ve ödenmiş sermaye** satışlarla kendiliğinden değişmez.",
      k: "1007 resmi not s. 15-16"
    },
    {
      s: "Satışların yüzdesi yönteminde **yedek akçelerin (dağıtılmamış kârların)** satışların sabit bir yüzdesi olarak tahmin edilmemesinin nedeni nedir?",
      c: ["Yedek akçelerin satışlarla hiçbir ilişkisinin bulunmaması", "Yedek akçelerin yalnızca genel kurul kararıyla ve her yıl aynı tutarda artabilmesi", "Artışın satışla sabit bir ilişkisi olmaması; kâr dağıtım politikasına bağlılığı", "Yedek akçelerin her yıl sonunda kâr payı olarak dağıtılıp sıfırlanması", "Yedek akçelerin pasifte değil aktifte yer alan bir kalem olması"],
      d: 2,
      a: "Satış hacmi genişledikçe yedek akçelerin artması olağandır; ancak bu artışın yüzdesi ile satış artışı arasındaki ilişki **sabit değildir** ve şirketin **kâr dağıtım politikasına** bağlıdır. Bu yüzden yedek akçe, net kâr marjı ve kâr dağıtım oranıyla hesaplanır.",
      k: "1007 resmi not s. 15"
    },
    {
      s: "Satışları 200 milyon TL olan bir şirketin net kâr marjı %10, kâr dağıtım oranı %40'tır. Satışların 250 milyon TL'ye çıkması bekleniyorsa, proforma bilançoda **dağıtılmayan kârlara ilave** edilecek tutar ne kadardır?",
      c: ["15.000.000 TL", "10.000.000 TL", "25.000.000 TL", "12.000.000 TL", "20.000.000 TL"],
      d: 0,
      a: "Yeni satış düzeyinde VSNK = %10 × 250.000.000 = **25.000.000**. Kâr payı = %40 × 25.000.000 = **10.000.000**. Dağıtılmayan kârlara ilave = 25.000.000 − 10.000.000 = **15.000.000 TL**.",
      k: "1007 resmi not s. 16"
    },
    {
      s: "Bir şirkette satışlarla değişen aktiflerin satışlara oranı %60, kendiliğinden oluşan kaynakların satışlara oranı %15'tir. Satışların 100 milyon TL artması bekleniyorsa, dağıtılmayan kârlar dikkate alınmadan **ek finansman gereksinimi** ne kadardır?",
      c: ["60.000.000 TL", "45.000.000 TL", "75.000.000 TL", "15.000.000 TL", "40.000.000 TL"],
      d: 1,
      a: "Artan satışın **%60**'ı kadar aktif yatırımı gerekir, **%15**'i kendiliğinden oluşan kaynaklarla karşılanır. Ek finansman = (%60 − %15) × 100.000.000 = **45.000.000 TL**.",
      k: "1007 resmi not s. 17"
    },
    {
      s: "SANTE A.Ş. örneğinde satışlarla değişen aktifler satışların %70,5'i, kendiliğinden oluşan kaynaklar %18'idir. Satışlar 450 milyon TL'den 600 milyon TL'ye çıkarken dağıtılmayan kârlara 24 milyon TL ilave ediliyorsa, şirketin dışarıdan bulması gereken **finansman açığı** ne kadardır?",
      c: ["78.750.000 TL", "105.750.000 TL", "54.750.000 TL", "24.000.000 TL", "27.000.000 TL"],
      d: 2,
      a: "Artış 150.000.000 TL'dir. (%70,5 − %18) × 150.000.000 = **78.750.000** TL ihtiyacın **24.000.000** TL'si dağıtılmayan kârlarla karşılanır. Dışarıdan bulunacak tutar = 78.750.000 − 24.000.000 = **54.750.000 TL**; proforma bilançodaki açıkla aynıdır.",
      k: "1007 resmi not s. 16-17"
    },
    {
      s: "Satışların yüzdesi yöntemi **yeni kurulan** bir şirket için uygulanacaksa, satışlarla bilanço kalemleri arasındaki oranlar nereden elde edilir?",
      c: ["Aynı endüstrideki benzer şirketlerin satış-bilanço ilişkilerinden", "Şirketin kendi geçmiş beş yıllık bilançolarının ortalamasından", "Kurucuların kişisel mali tablolarından ve gelir beyanlarından", "Merkez Bankası faiz oranlarından ve enflasyon beklentilerinden", "Vergi idaresinin sektörler için belirlediği sabit oranlardan"],
      d: 0,
      a: "Yöntemin ikinci adımında geçmiş yıl bilançolarından yüzdeler hesaplanır. **Yeni kurulan** şirketin geçmişi olmadığından, **aynı endüstri kolundaki benzer şirketlerin** satış-bilanço ilişkilerinden yararlanılır.",
      k: "1007 resmi not s. 16"
    }
  ]
});
