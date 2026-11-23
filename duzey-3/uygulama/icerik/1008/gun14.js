SPL.gun("1008", 14, {
  okuma: `
## Bugünün haritası
Maliye politikaları bölümünün sonu: **IS-LM dengesi** ve politikaların etkisi, **dışlama etkisi** ve **tam dışlama**, **politika karması**, IS ve LM'nin eğimini etkileyen faktörler, **likidite tuzağında** para ve maliye politikası, ve iktisat okullarının (Klasik, Keynesyen, Monetarist, Yeni Klasik, Yeni Keynesyen) görüşleri.

1. IS-LM dengesi
2. Para ve maliye politikasının IS-LM'deki etkisi
3. Dışlama etkisi
4. Politika karması; IS ve LM eğimleri
5. Likidite tuzağında politikaların etkinliği
6. İktisat okulları

---

## 1. IS-LM dengesi
- **IS mal piyasasını, LM para piyasasını** temsil eder. Eşanlı denge, **IS ile LM'nin kesiştiği** noktada denge faizi ve denge milli geliriyle oluşur.

## 2. Politikaların etkisi
| Politika | Eğri | Milli gelir | Faiz |
|---|---|---|---|
| **Genişletici maliye** | IS **sağa** | **Artar** | **Artar** |
| **Daraltıcı maliye** | IS sola | Azalır | Düşer |
| **Genişletici para** | LM **sağa** | **Artar** | **Düşer** |
| **Daraltıcı para** | LM sola | Azalır | Artar |

## 3. Dışlama etkisi (crowding out)
> [!ezber] **Dışlama etkisi:** devlet artan harcamalarını **piyasadan borçlanarak** finanse edince **faizler yükselir**, yatırımların maliyeti artar ve **özel yatırımlar düşer** (yatırımların faize duyarlılığının yüksek olduğu varsayılır). Bu adı **Monetaristler** vermiştir.

- **LM eğrisi dikleştikçe dışlama etkisi artar.** LM; para talebi gelire **çok duyarlı** ve/veya faize **duyarsız** olduğunda diktir.
- **Tam dışlama (full crowding out):** **LM tam dikeyse** kamu harcaması artışı **yalnız faizi artırır**, çıktıyı **değiştirmez**; maliye politikasının çıktıya etkisi kalmaz.

## 4. Politika karması; IS ve LM eğimleri
> [!ezber] **Politika karması:** para ve maliye politikalarının **eşanlı** kullanılması. Örnek: yalnız genişletici maliye politikası hem hasılayı hem faizi artırır; hasılayı artırıp **faizi sabit tutmak** için ona **genişletici para politikası** eşlik eder.

| IS daha **yatık** olur, eğer... | LM **dikleşir**, eğer... |
|---|---|
| **Marjinal tüketim eğilimi artarsa** | Para talebinin **faize duyarlılığı azalırsa** (sıfırsa LM dikey) |
| **Marjinal vergi oranı azalırsa** | Para talebinin **gelire duyarlılığı artarsa** (sonsuzsa LM dikey) |
| **Marjinal ithalat eğilimi azalırsa** | Para talebinin faize duyarlılığı **sonsuzsa** LM **yatay** olur |
| **Yatırımların faiz esnekliği artarsa** | |

## 5. Likidite tuzağında politikaların etkinliği
> [!ezber] **Likidite tuzağında (LM yatay):**
> - **Maliye politikası tam etkindir:** IS sağa kayınca faiz **değişmez**, dolayısıyla **dışlama etkisi olmaz**.
> - **Para politikası etkisizdir:** faizler çok düşük, tahvil fiyatları en yüksek düzeydedir; artan para arzının **tamamı elde tutulur**, tahvil talebi artmaz, faiz ve hasıla **değişmez**.

## 6. İktisat okulları
| Okul | Temel görüşler |
|---|---|
| **Klasik** | Piyasa **tam istihdam** dengesinde; ücret ve fiyatlar **esnek**; piyasa mekanizması çözümdür, para ve maliye politikasının etkinliği sınırlı; **para nötrdür**; birimler rasyonel; tam rekabet; **denk bütçe** ön planda; bütçe açıkları faizi artırır. **Klasik dikotomi:** para uzun dönemde **yansızdır**, reel değişkenleri etkilemez; para işlem amaçlı **pasif** bir araçtır |
| **Keynesyen** | Ekonomi **eksik istihdamda**; fiyat ve ücretler **katı (yapışkan)**; denge planlanan harcama = milli gelir; faizi para arzı ve talebi belirler; **devlet müdahalesi gerekir**; para arzı artınca faiz düşer, yatırım ve gelir artar; **toplam talebe** dikkat çeker |
| **Monetarist** | **Enflasyon para kaynaklıdır**; **para arzının kontrolü** önemlidir; para arzı artınca toplam talep ve **nominal GSYH** artar; para **uzun dönemde nötr**, kısa dönemde önemlidir; nominal gelir para miktarıyla doğrudan ilişkilidir |
| **Yeni Klasik** | **Rasyonel beklentiler** geçerlidir; ücret ve fiyatlar esnek; **politika etkisizliği:** para ve maliye politikalarının **hem kısa hem uzun dönemde** reel değişkenlere etkisi yoktur |
| **Yeni Keynesyen** | Rasyonel beklentiler geçerli olabilir ama istisnalar vardır: ücret ve fiyatlar **kısa dönemde esnek değildir**; para ve maliye politikalarının hasılaya **etkisi vardır** |
`,
  sorular: [
    {
      s: "IS-LM modelinde **genişletici para politikası** denge milli gelir ve faiz oranını nasıl etkiler?",
      c: ["Milli gelir artar, faiz yükselir", "Milli gelir artar, faiz düşer", "Milli gelir düşer, faiz yükselir", "İkisi de düşer", "Milli gelir değişmez, faiz düşer"],
      d: 1,
      a: "Genişletici para politikası LM eğrisini **sağa** kaydırır; milli gelir **artar**, faiz **düşer**. Genişletici maliye politikası ise IS'yi sağa kaydırır ve hem geliri hem faizi artırır.",
      k: "1008 resmi not s. 99"
    },
    {
      s: "Kamunun artan harcamalarını piyasadan borçlanarak finanse etmesi sonucu faizlerin yükselip **özel yatırımların düşmesine** ne ad verilir?",
      c: ["Çarpan etkisi", "Tasarruf paradoksu", "Klike etkisi", "Ricardocu denklik", "Dışlama etkisi"],
      d: 4,
      a: "Bu **dışlama etkisidir** (crowding out); adını Monetaristler vermiştir. Kamu borçlanması faizi yükseltir, yatırım maliyeti artar ve özel yatırımlar düşer.",
      k: "1008 resmi not s. 99-100"
    },
    {
      s: "**Tam dışlama etkisi** hangi durumda ortaya çıkar ve sonucu nedir?",
      c: ["IS dikeyken; para politikası tamamen etkisiz kalır", "LM yatayken; faiz değişmez, çıktı tam artar", "LM dikeyken; harcama yalnız faizi artırır", "IS yatayken; vergi indirimi çıktıyı iki katına çıkarır", "Denk bütçede; çarpan sıfır olur"],
      d: 2,
      a: "**LM tam dikey** olduğunda kamu harcaması artışı **yalnız faizi artırır**, çıktıyı değiştirmez; harcama artışının etkisi özel yatırımların azalmasıyla tamamen yok olur. LM dikleştikçe dışlama etkisi artar.",
      k: "1008 resmi not s. 100"
    },
    {
      s: "Politika yapıcılar denge milli hasılayı artırmak ama **faizi sabit tutmak** istiyorsa notlara göre hangi politika karması uygulanabilir?",
      c: ["Genişletici maliye politikası ile genişletici para politikası", "Genişletici maliye politikası ile daraltıcı para politikası", "Daraltıcı maliye politikası ile genişletici para politikası", "Yalnızca daraltıcı para politikası", "Yalnızca genişletici maliye politikası"],
      d: 0,
      a: "Yalnız genişletici maliye politikası hem hasılayı hem faizi artırır. Faizi sabit tutmak için ona **genişletici para politikası** eşlik eder; böylece hasıla artarken faiz değişmez. Buna **politika karması** denir.",
      k: "1008 resmi not s. 101"
    },
    {
      s: "Aşağıdakilerden hangisi **IS eğrisini daha yatık** hâle getirir?",
      c: ["Marjinal tüketim eğiliminin azalması", "Marjinal vergi oranının artması", "Marjinal ithalat eğiliminin artması", "Yatırımların faiz esnekliğinin artması", "Para talebinin gelire duyarlılığının artması"],
      d: 3,
      a: "IS; marjinal tüketim eğilimi **arttıkça**, marjinal vergi oranı ve marjinal ithalat eğilimi **azaldıkça** ve **yatırımların faiz esnekliği arttıkça** yatıklaşır. Para talebinin gelire duyarlılığı LM'nin eğimini etkiler.",
      k: "1008 resmi not s. 101"
    },
    {
      s: "Keynesyen **likidite tuzağı** durumunda para ve maliye politikalarının etkinliği nasıldır?",
      c: ["Para politikası tam etkin, maliye politikası etkisizdir", "Maliye politikası tam etkin, para politikası etkisizdir", "Her ikisi de tam etkindir", "Her ikisi de etkisizdir", "Maliye politikası tam dışlama etkisine uğrar"],
      d: 1,
      a: "Likidite tuzağında LM yataydır: genişletici maliye politikası faizi değiştirmediği için **dışlama olmaz** ve **maliye politikası tam etkindir**. Artan para arzı elde tutulduğu için faiz ve hasıla değişmez; **para politikası etkisizdir**.",
      k: "1008 resmi not s. 103"
    },
    {
      s: "**Klasik dikotomi** neyi ifade eder?",
      c: ["Paranın uzun dönemde reel değişkenleri etkilemediğini", "Fiyat ve ücretlerin kısa ve uzun dönemde katı olduğunu", "Ekonominin eksik istihdamda dengeye geldiğini", "Maliye politikasının para politikasından üstün olduğunu", "Bütçe açıklarının faiz oranlarını sürekli düşürdüğünü"],
      d: 0,
      a: "Klasik iktisatta **klasik dikotomi** geçerlidir: **para uzun dönemde yansızdır**, istihdam ve çıktı gibi reel değişkenler üzerinde etkisi yoktur. Katı fiyatlar ve eksik istihdam Keynesyen görüşe aittir.",
      k: "1008 resmi not s. 102"
    },
    {
      s: "Para ve maliye politikalarının **hem kısa hem uzun dönemde** reel değişkenler üzerinde etkisi olmadığını savunan okul hangisidir?",
      c: ["Keynesyen iktisat", "Yeni Keynesyen iktisat", "Monetarist iktisat", "Klasik iktisat", "Yeni Klasik iktisat"],
      d: 4,
      a: "**Yeni Klasik** iktisatta rasyonel beklentiler ve esnek fiyatlar nedeniyle **politika etkisizliği** geçerlidir: para ve maliye politikaları hem kısa hem uzun dönemde reel değişkenleri etkilemez. Monetaristlere göre para kısa dönemde önemlidir; Yeni Keynesyenlere göre politikalar hasılayı etkiler.",
      k: "1008 resmi not s. 103-104"
    }
  ]
});
