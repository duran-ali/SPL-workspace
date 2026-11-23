SPL.gun("1008", 26, {
  okuma: `
## Bugünün haritası
Dersin son günü: **ara kazanç ticaretinin riskleri** ve **Mundell-Fleming modeli**: üçlü açmaz, tam sermaye hareketliliğinde sabit ve esnek kurda para ve maliye politikası, **sınırlı sermaye hareketliliği**.

1. Ara kazanç ticareti örneği ve riskleri
2. Mundell-Fleming modeli ve üçlü açmaz
3. Tam sermaye hareketliliği: sabit kur
4. Tam sermaye hareketliliği: esnek kur
5. Sınırlı sermaye hareketliliği

---

## 1. Ara kazanç ticareti örneği ve riskleri
> [!bilgi] 100 bin dolarlık Amerikalı yatırımcı: dolar mevduat faizi %10, avro mevduat faizi %5; cari kur 1,1 $/€, beklenen kur 1,2 $/€. Dolarda yıl sonunda **110 bin $**; avroya çevirip yatırırsa beklenen kurla yaklaşık **114 bin $**. Avronun faizi düşük olsa da **kurda beklenen değişim** yatırımcıyı avroya yöneltir.

- Strateji önemli **döviz kuru riski** taşır. **Kriz dönemlerinde** risk iştahı azalır, güvenli limanlara yönelinir, yüksek getirili riskli paralardan çıkış olur ve bu paralar **değer kaybeder**; **kaldıraç** riski büyütür.

> [!ezber] Carry trade getirisinin dağılımı **normal değildir, sola çarpıktır**: **yüksek olasılıkla düşük getiri, düşük olasılıkla büyük kayıp** (piyasa çöküş riski). Normal dönemlerde istikrarlı getiri, kriz dönemlerinde beklenmedik büyük kayıplar.

## 2. Mundell-Fleming modeli
- Geliştiricileri **Robert Mundell ve Marcus Fleming**. Uluslararası sermaye hareketlerinin farklı kur sistemlerinde politikaların etkinliğini belirlemedeki rolünü inceler.

> [!ezber] **Mundell-Fleming modeli, IS-LM modelinin açık ekonomiye uyarlanmış hâlidir (IS-LM-BP).** Mal (IS), para (LM) ve döviz piyasası (BP veya FE) ilişkisini ortaya koyar. İki önemli varsayımı: **tam sermaye hareketliliği** ve **sabit döviz kuru**.

- **Üçlü açmaz kuralı:** **tam sermaye hareketliliği** ve **sabit kur** varsayımları altında **para politikası özerkliğini yitirir**; faizler dünya faizinden farklılaşamaz.
- **BP = 0** eğrisi, yerli faiz (i) dünya faizine (iw) eşitken ödemeler dengesinin sağlandığını gösterir; tam sermaye hareketliliğinde **yataydır** (sermaye faize sonsuz duyarlı, iç ve dış faiz eşit).

## 3. Tam sermaye hareketliliği: sabit kur
- **Genişletici para politikası:** LM sağa kayar, faiz dünya faizinin **altına** düşer → **sermaye çıkışı**, dış açık, yerli para değer kaybeder. Kuru korumak için merkez bankası **döviz satıp yerli para çeker**; LM **eski yerine döner**. Milli gelir **artmaz**: **para politikası etkin değildir**.
- **Genişletici maliye politikası:** IS sağa kayar, faiz dünya faizinin **üstüne** çıkar → **sermaye girişi**, yerli para değer kazanır. Kuru korumak için merkez bankası **döviz alıp para arzını artırır**; LM de sağa kayar. Aynı faizde **daha yüksek gelir**: **maliye politikası etkindir** (esnek kura göre çıktıya daha çok etkili).

## 4. Tam sermaye hareketliliği: esnek kur
- **Genişletici para politikası:** LM sağa kayar, faiz düşer, gelir artar; sermaye çıkışıyla yerli para **değer kaybeder**, ihracat artar, ithalat azalır, **net ihracat artınca IS de sağa kayar**. Aynı faizde **daha yüksek gelir**: **para politikası etkindir**.
- **Genişletici maliye politikası:** IS sağa kayar, faiz ve gelir artar; sermaye girişiyle yerli para **değer kazanır**, ithalat ucuzlar, **net ihracat azalır** ve **IS eski yerine döner**. Gelir **artmaz**: **maliye politikası etkin değildir**.

> [!ezber] **Tam sermaye hareketliliğinde:**
> | Kur rejimi | Para politikası | Maliye politikası |
> |---|---|---|
> | **Sabit kur** | **Etkin değil** | **Etkin** |
> | **Esnek kur** | **Etkin** | **Etkin değil** |

## 5. Sınırlı sermaye hareketliliği
- Sermaye hareketlerinin faize duyarlılığı düşük olduğu için **BP pozitif eğimli** ve daha diktir.
- **Genişletici para politikası:** gelir artar, faiz düşer; düşük faiz **sermaye çıkışına**, yüksek gelir **ithalat artışına** yol açar → **dış açık**.
- **Genişletici maliye politikası:** gelir ve faiz artar; yüksek faiz **sermaye girişini** artırır, yüksek gelir **ithalat eğilimini** artırır; bu iki etki dış dengeyi **zıt yönlerde** etkiler, sonucu büyüklükleri belirler.

> [!ezber] **Sınırlı sermaye hareketliliğinde:**
> | Kur rejimi | Para politikası | Maliye politikası |
> |---|---|---|
> | **Sabit kur** | **Etkin değil** | **Etkin değil** |
> | **Esnek kur** | **Etkin** | **Etkin** |

- Yerli faiz dünya faizinden **yüksekse** yerli para **değer kazanır**, ihracat azalır, ithalat artar; **düşükse** yerli para **değer kaybeder**, ihracat artar, ithalat azalır.
`,
  sorular: [
    {
      s: "Notlara göre ara kazanç ticareti (carry trade) stratejisinin getiri dağılımı nasıldır?",
      c: ["Normal dağılıma uyar; kayıp ve kazanç olasılığı eşittir", "Sağa çarpıktır; arada bir çok yüksek kazanç sağlar", "Sola çarpıktır; arada bir büyük kayıp yaşatır", "Simetriktir; kriz dönemlerinde riski azalır", "Tek tip dağılır; getirisi her dönemde sabittir"],
      d: 2,
      a: "Carry trade getirisinin dağılımı normal değildir ve **sola çarpıktır**: **yüksek olasılıkla düşük getiri**, **düşük olasılıkla büyük kayıp** (piyasa çöküş riski). Normal dönemde istikrarlı getiri sağlar, krizlerde büyük kayıplara yol açar.",
      k: "1008 resmi not s. 181"
    },
    {
      s: "**Mundell-Fleming modeli** hangisidir?",
      c: ["IS-LM modelinin açık ekonomiye uyarlanmış hâli (IS-LM-BP)", "Kapalı ekonomide para talebini açıklayan bir model", "Yalnızca mal piyasasını inceleyen bir model", "Uzun dönem büyümeyi açıklayan bir model", "Enflasyon ile işsizlik arasındaki ilişkiyi gösteren eğri"],
      d: 0,
      a: "Robert Mundell ve Marcus Fleming'in modeli **IS-LM modelinin açık ekonomiye uyarlanmış hâlidir**; mal (IS), para (LM) ve döviz piyasası (BP) ilişkisini inceler. Temel varsayımları tam sermaye hareketliliği ve sabit kurdur.",
      k: "1008 resmi not s. 181"
    },
    {
      s: "**Üçlü açmaz kuralına** göre tam sermaye hareketliliği ve sabit döviz kuru birlikte varsa ne olur?",
      c: ["Maliye politikası etkisiz kalır", "Döviz kuru serbestçe dalgalanır", "Para politikası özerkliğini yitirir", "Sermaye hareketleri durur", "Faizler dünya faizinden bağımsız belirlenir"],
      d: 2,
      a: "Üçlü açmaza göre **tam sermaye hareketliliği** ve **sabit kur** altında **para politikası özerkliğini yitirir**: faiz değişikliği sermaye akımıyla kuru bozar, merkez bankası faizi eski düzeyine getirmek zorunda kalır; faizler dünya faizinden farklılaşamaz.",
      k: "1008 resmi not s. 182"
    },
    {
      s: "Tam sermaye hareketliliği ve **sabit kurda** genişletici para politikası uygulanırsa sonuç ne olur?",
      c: ["Milli gelir kalıcı olarak yükselir", "Faizler kalıcı olarak dünya faizinin altında kalır", "Sermaye girişiyle yerli para değer kazanır", "LM eski yerine döner, gelir artmaz", "IS eğrisi de sağa kayar"],
      d: 3,
      a: "LM sağa kayınca faiz dünya faizinin altına düşer, sermaye çıkar ve yerli para değer kaybeder. Kuru korumak için merkez bankası **döviz satıp yerli para çeker**; LM eski yerine döner ve gelir **artmaz**: sabit kurda para politikası etkin değildir.",
      k: "1008 resmi not s. 183-184"
    },
    {
      s: "Tam sermaye hareketliliği ve **esnek kurda** genişletici maliye politikası neden etkin değildir?",
      c: ["Faizler düştüğü için ülkeden sermaye çıkar", "Merkez bankası para arzını artırmak zorunda kalır", "LM eğrisi sola kayarak geliri düşürür", "Yerli para değerlenir, net ihracat azalır, IS geri döner", "Yerli para değer kaybettiği için ithalat azalır"],
      d: 3,
      a: "IS sağa kayınca faiz yükselir, **sermaye girer** ve yerli para **değer kazanır**; ithalat ucuzlar, **net ihracat azalır** ve **IS eski yerine döner**. Gelir artmadığı için esnek kurda maliye politikası etkin değildir.",
      k: "1008 resmi not s. 185-186"
    },
    {
      s: "Tam sermaye hareketliliğinde para ve maliye politikalarının etkinliği hangisinde **doğru** verilmiştir?",
      c: ["Sabit: para etkin, maliye değil; esnek: para değil, maliye etkin", "Sabit: ikisi de etkin; esnek: ikisi de etkin değil", "Sabit: para değil, maliye etkin; esnek: para etkin, maliye değil", "Sabit: ikisi de etkin değil; esnek: ikisi de etkin", "Sabit: yalnız para etkin; esnek: yalnız para etkin"],
      d: 2,
      a: "Tam sermaye hareketliliğinde **sabit kurda** para politikası etkin değil, **maliye politikası etkindir**; **esnek kurda** ise **para politikası etkindir**, maliye politikası etkin değildir.",
      k: "1008 resmi not s. 183"
    },
    {
      s: "**Sınırlı sermaye hareketliliği** ve **sabit kur** altında para ve maliye politikalarının etkinliği nasıldır?",
      c: ["İkisi de etkin değildir", "Para etkin, maliye etkin değil", "Para etkin değil, maliye etkin", "İkisi de etkindir", "Yalnızca vergi politikası etkindir"],
      d: 0,
      a: "Notlardaki tabloya göre sınırlı sermaye hareketliliğinde **sabit kurda iki politika da etkin değildir**, **esnek kurda ikisi de etkindir**.",
      k: "1008 resmi not s. 186"
    },
    {
      s: "Sınırlı sermaye hareketliliğinde **iç faiz uluslararası faizden yüksekse** ne olur?",
      c: ["Yerli para değer kaybeder, ihracat artar", "Yerli para değerlenir, ihracat azalır", "Kur ve dış ticaret dengesi değişmez", "İthalat azalır, ihracat hızla artar", "BP eğrisi yatay hâle gelir"],
      d: 1,
      a: "İç faiz uluslararası faizden **yüksek** olduğunda yerli para **değer kazanır**, **ihracat azalır ve ithalat artar**. İç faiz düşükse yerli para değer kaybeder, ihracat artar, ithalat azalır.",
      k: "1008 resmi not s. 187"
    }
  ]
});
