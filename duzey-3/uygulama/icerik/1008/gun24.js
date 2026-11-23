SPL.gun("1008", 24, {
  okuma: `
## Bugünün haritası
Üçlü arbitraj örneğinin sonucu, **vadeli döviz piyasası** (kotasyon, prim ve iskonto, **korumalı faiz paritesi**, vadeli işlemlerle korunma) ve **uluslararası parite koşulları**: **korumasız faiz paritesi**, **vadeli kur paritesi**, **satın alma gücü paritesi** ve **Fisher etkisi**.

1. Üçlü arbitraj örneği
2. Vadeli döviz piyasası ve kotasyon
3. Korumalı faiz oranı paritesi
4. Vadeli işlemlerle korunma, pozisyon ve değerleme
5. Korumasız faiz oranı paritesi
6. Vadeli kur paritesi
7. Satın alma gücü paritesi
8. Fisher etkisi

---

## 1. Üçlü arbitraj örneği
Bankalararası piyasadaki **örtük** JPY/GBP kuru 97,92/98,07 iken efektif piyasada JPY/GBP 96,83/96,94 ise: yatırımcı GBP'yi **efektif piyasada 96,94 JPY'ye alır**, **bankalararası piyasada 97,92 JPY'ye satar** ve risksiz kâr eder.

## 2. Vadeli döviz piyasası
- Avantajları: spot piyasa risklerini yönetmek, gelecek fiyatlar hakkında yol göstermek, **daha az sermayeyle** işlem. Vadeli piyasa döviz işlem hacminin yaklaşık **%15**'idir.
- İşlemler önceden belirlenen fiyat ve vadede alım/satım **yükümlülüğüne** dayanır; vadeler genellikle **30, 60, 90 ve 180 gün**. Tezgâh üstünde (**forward**) veya borsada (**future**) yapılır.

> [!ezber] Vadeli kotasyon, spot kura **vade puanı (pip)** eklenerek veya çıkarılarak bulunur. **Vadeli kur > spot kur** ise baz para birimi **primli**, **vadeli kur < spot kur** ise **iskontolu** işlem görür.

> [!bilgi] USD/EUR spot 1,1218, 1 yıllık vadeli 1,1427 ise (1,1427 − 1,1218) × 10.000 = **+209** puan **primli**. Vadeli 1,1039 olsaydı **−179** puan iskontolu olurdu.

- Vadeli piyasada makas, vade **uzadıkça** genişler (risk artar) ve vadeli piyasa spot piyasadan **daha az likit** olduğu için makas **spot piyasadan geniştir**.

## 3. Korumalı faiz oranı paritesi
Vadeli kur ile spot kur arasındaki farkın **en önemli etkeni**, iki paranın **faiz oranlarıdır**. Risksiz iki yatırım (yerli parada faiz veya yabancı paraya çevirip faiz) **aynı getiriyi** sağlamalıdır; yoksa arbitraj olur.

> [!ezber] **Korumalı faiz oranı paritesi:** **F × (1 + id) = S × (1 + if)** (f/d kotasyonunda). P/B kotasyonunda: **F = S × (1 + iP) / (1 + iB)**. Bu koşulda **arbitraj olanağı yoktur**.

> [!bilgi] S = 3,6749, fiyat parasının faizi %7, baz parasının faizi %5 ise 1 yıllık **F = 3,6749 × 1,07 / 1,05 ≈ 3,7448** (+699 puan **primli**); 3 aylık vadeli ≈ 3,6930 (+181 puan). **Vade kısaldıkça vade puanı düşer.** Fiyat parasının faizi baz parasınınkinden **düşükse** vadeli kur **iskontolu** olur (EUR/CHF örneği: −27 puan).

## 4. Vadeli işlemlerle korunma
- Vadeli piyasa en çok **kur riskinden korunma (hedge)** için kullanılır; spekülasyon ve arbitraj için de kullanılır.
- **Statik hedge:** pozisyon güncellenmez. **Dinamik hedge:** belirli periyotlarla pozisyon güncellenir.
- **Uzun pozisyon:** vadeli sözleşmeyi **satın almak**. **Kısa pozisyon:** vadeli sözleşmeyi **satmak**.
- Vadeden önce pozisyonun değeri, **ters işlemle netleştirme** ve **basit faiz iskontosu** ile bulunur (**mark to market**).

> [!bilgi] **Örnek:** 1 milyon EUR'luk Alman hissesi olan İngiliz yatırımcı EUR'un değer kaybından korunmak için EUR'da **kısa**, GBP'de **uzun** olmalıdır. Hisseler 700 bin EUR'ya düşerse fazla kalan **300 bin EUR** için ters yönde (satış) pozisyon açar.

## 5. Korumasız faiz oranı paritesi
- Uluslararası parite koşulları **sıfır işlem maliyeti** ve **etkin piyasa** varsayımlarına dayanır.
- **Korumalı** paritede kur riski tamamen **hedge edilir**; **korumasızda** hedge yapılmaz, **kur riski vardır**.

> [!ezber] **Korumasız faiz oranı paritesi:** kurda **beklenen değişim**, iki paranın **faiz farkına** eşittir: **%ΔS = if − id**. **Yüksek faizli para birimi gelecekte değer kaybeder**; böylece yüksek getiri avantajı ortadan kalkar ve iki paranın beklenen getirisi eşitlenir.

> [!bilgi] Yabancı paranın faizi %15, yerli paranınki %7 ise yerli paranın yaklaşık **%8 değer kazanması** beklenir.

## 6. Vadeli kur paritesi
> [!ezber] **Vadeli kur paritesi:** **vadeli kurlar, gelecekteki spot kurların yansız tahmin edicisidir**; süreç ilerledikçe spot ve vadeli kur **eşitlenir**. **Korumalı ve korumasız** faiz paritelerinin **birlikte** geçerli olduğu durumda ortaya çıkar.

- Ampirik çalışmalar bu yaklaşımın **kısa dönemde geçerli olmadığını, uzun dönemde geçerli olduğunu** göstermektedir (**forward rate bias**). Geçerli olmadığında arbitraj doğar: pahalı piyasada satılır, ucuz piyasada alınır.

> [!bilgi] S = 2,2340, id = %4, if = %5 ise F = 2,2340 × 1,05 / 1,04 ≈ **2,2554**; beklenen değişim %5 − %4 = **%1**.

## 7. Satın alma gücü paritesi (SAGP)
Döviz kurları ile **enflasyon** arasındaki ilişkiyi açıklar.
- **Mutlak SAGP:** dünyada **tek fiyat kanunu** geçerlidir; malın uluslararası fiyatı, yurt içi fiyatı ve kura bağlıdır: **Pf = S × Pd**. Kuru iki ülkenin **fiyat seviyeleri** belirler.
- **Göreceli SAGP:** kuru iki ülkenin **enflasyon farkı** belirler: **%ΔS = πf − πd** (ileriye dönük versiyonda **beklenen** enflasyon farkı).

> [!ezber] **Yüksek enflasyon beklentisi olan ülkenin parası değer kaybeder.** Örnek: yabancı ülkede beklenen enflasyon %6, yerlide %4, S = 1,0508 ise 1 yıl sonraki beklenen kur ≈ **1,0710**, beklenen değişim **%2**.

## 8. Fisher etkisi
> [!ezber] **Irving Fisher:** **nominal faiz = reel faiz + beklenen enflasyon (i = r + πe)**. Beklenen enflasyon artarsa nominal faiz buna göre düzelir, **reel faiz sabit kalır**.
`,
  sorular: [
    {
      s: "Vadeli döviz piyasasında **vadeli kur spot kurdan büyükse** baz para birimi nasıl işlem görür?",
      c: ["İskontolu", "Primli", "Paritede", "Spot kurla aynı fiyattan", "Yalnızca borsada işlem görür"],
      d: 1,
      a: "Vadeli kur spot kurdan **büyükse** baz para birimi **primli**, **küçükse iskontolu** işlem görür. Örneğin spot 1,1218 ve vadeli 1,1427 ise +209 puan primlidir.",
      k: "1008 resmi not s. 167"
    },
    {
      s: "USD/EUR spot kuru **1,1218** ve 1 yıllık vadeli kuru **1,1039** ise vadeli kur nasıl kote edilmiştir?",
      c: ["+209 puan primli", "+179 puan primli", "−209 puan iskontolu", "−179 puan iskontolu", "Paritede, puan farkı yok"],
      d: 3,
      a: "Vade puanı = (1,1039 − 1,1218) × 10.000 = **−179**. Vadeli kur spot kurdan düşük olduğu için **iskontolu** kote edilmiştir.",
      k: "1008 resmi not s. 167"
    },
    {
      s: "Korumalı faiz oranı paritesine göre spot kur (P/B) 3,6749, fiyat para biriminin yıllık faizi %7 ve baz para biriminin yıllık faizi %5 ise 1 yıllık vadeli kur yaklaşık kaçtır?",
      c: ["3,6050", "3,6749", "3,6930", "3,7448", "3,9321"],
      d: 3,
      a: "F = S × (1 + iP) / (1 + iB) = 3,6749 × 1,07 / 1,05 ≈ **3,7448**; vadeli kur +699 puan primlidir. 3,6930 ise aynı örneğin 3 aylık vadeli kurudur.",
      k: "1008 resmi not s. 168"
    },
    {
      s: "Vadeli piyasadaki alım-satım makası için notlarda hangisi belirtilmiştir?",
      c: ["Vadeli piyasa daha likit olduğu için makas spot piyasadan dardır", "Vade uzadıkça makas daralır", "Vade uzadıkça risk arttığı için makas genişler ve makas spot piyasadan geniştir", "Vadeli piyasada makas yoktur", "Makası yalnız işlem büyüklüğü belirler"],
      d: 2,
      a: "Vadeli piyasada vade tarihi **uzadıkça** risk arttığı için makas **genişler**; ayrıca vadeli piyasa spot piyasaya göre **daha az likit** olduğundan makas **spot piyasadan geniştir**.",
      k: "1008 resmi not s. 169"
    },
    {
      s: "Vadeli işlemlerde pozisyonun belirli periyotlarla güncellendiği korunma yöntemine ne ad verilir?",
      c: ["Statik hedge", "Kısa pozisyon", "Mark to market", "Dinamik hedge", "Üçlü arbitraj"],
      d: 3,
      a: "**Dinamik hedge** işleminde belirli periyotlarla pozisyon güncellemesi yapılır; **statik hedge**'de güncelleme olmaz. Mark to market ise pozisyonun vadeden önceki değerinin hesaplanmasıdır.",
      k: "1008 resmi not s. 169"
    },
    {
      s: "**Korumasız faiz oranı paritesine** göre faiz oranı yüksek olan para biriminden ne beklenir?",
      c: ["Gelecekte değer kazanması", "Kurunun sabit kalması", "Gelecekte değer kaybetmesi", "Yalnızca enflasyonunun düşmesi", "Vadeli kurunun spot kura eşit kalması"],
      d: 2,
      a: "Korumasız faiz paritesinde kurdaki beklenen değişim faiz farkına eşittir; **yüksek faizli para birimi gelecekte değer kaybeder** ve iki paranın beklenen getirileri eşitlenir. Bu yaklaşımda kur riski hedge edilmez.",
      k: "1008 resmi not s. 171"
    },
    {
      s: "**Vadeli kur paritesi** için hangisi **doğrudur**?",
      c: ["Vadeli kurlar, gelecekteki spot kurların yansız tahmin edicisidir", "Yalnızca korumalı faiz paritesinin geçerli olduğu durumda ortaya çıkar", "Ampirik olarak kısa dönemde her zaman geçerlidir", "Enflasyon farkını kurun tek belirleyicisi sayar", "Arbitraj olanağının sürekli olduğunu söyler"],
      d: 0,
      a: "Vadeli kur paritesine göre **vadeli kurlar spot kurların yansız tahmin edicisidir**; korumalı ve korumasız paritelerin **birlikte** geçerli olduğu durumda ortaya çıkar. Ampirik çalışmalar kısa dönemde değil, **uzun dönemde geçerli** olduğunu gösterir (forward rate bias).",
      k: "1008 resmi not s. 171-172"
    },
    {
      s: "**Fisher etkisine** göre beklenen enflasyon artarsa ne olur?",
      c: ["Reel faiz artar, nominal faiz sabit kalır", "Nominal faiz düşer", "Nominal ve reel faiz birlikte düşer", "Döviz kuru sabitlenir", "Nominal faiz düzelir (artar), reel faiz sabit kalır"],
      d: 4,
      a: "Irving Fisher'a göre **nominal faiz = reel faiz + beklenen enflasyon**. Beklenen enflasyon artarsa **nominal faiz** buna göre düzelir ve **reel faiz sabit kalır**.",
      k: "1008 resmi not s. 173"
    }
  ]
});
