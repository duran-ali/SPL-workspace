SPL.gun("1016", 13, {
  okuma: `
## Bugünün haritası
Bugün **32 Ticari Borçlar** ve **33 Diğer Borçlar** gruplarını öğreniyoruz: satıcılar ve borç senetleri, dönem sonu envanter işlemleri, **borç senetleri reeskontu** ve iç iskonto formülü, alınan depozito ve teminatlar ile ortaklara, iştiraklere ve personele borçlar.

1. **32 Ticari Borçlar** hesapları
2. **320 Satıcılar**
3. Satıcılarla ilgili dönem sonu işlemleri
4. **321 Borç Senetleri**
5. **322 Borç Senetleri Reeskontu** ve iç iskonto
6. **326 Alınan Depozito ve Teminatlar**
7. **33 Diğer Borçlar**

---

## 1. 32 Ticari Borçlar
> [!ezber] Ticari borçlar, işletmenin **ticari ilişkileri** nedeniyle doğan senetli ve senetsiz borçlardır. Ayırt edici unsur borcun **kime** olduğu değil, **ticari faaliyetten** doğup doğmadığıdır. Ticari olmayan borçlar **33 Diğer Borçlar**'da izlenir.

| Hesap | İçerik |
|---|---|
| **320 Satıcılar** | Faaliyet konusu mal ve hizmet alımlarından **senetsiz** borçlar |
| **321 Borç Senetleri** | Aynı alımlardan **senede bağlanmış** borçlar; işletmenin keşide ettiği **vadeli çekler** de burada |
| **322 Borç Senetleri Reeskontu (−)** | Vadesi ertesi yıl dolacak senetlerin bilanço tarihi ile vade arasına düşen reeskontu |
| **326 Alınan Depozito ve Teminatlar** | Nakit olarak alınan depozito ve teminatlar |
| **329 Diğer Ticari Borçlar** | Diğerlerine girmeyen ticari borçlar |

## 2. 320 Satıcılar
- Ortaklara, ana kuruluşa, iştirak ve bağlı ortaklıklara olan **ticari** senetsiz borçlar da 320'de izlenir; ancak **dipnotlarda** gösterilir.

| **Alacaklanır** | **Borçlanır** |
|---|---|
| Kredili alımlar | Nakden veya hesaben ödemeler |
| Anlaşma gereği satıcının ödediği giderler | **Mal iadesi** |
| Cari hesaba yürütülen faizler | Satıcının uyguladığı **iskontolar** |
| Yabancı paralı borçta kur artışı | Kur azalışı |

> [!dikkat] Kredili alım **ana faaliyet konusuyla ilgili değilse** borç 320'de değil **336 Diğer Çeşitli Borçlar**'da izlenir. Örnek: kırtasiye borcu, kırtasiye ticareti yapan işletmede 320'de, diğer işletmelerde 336'da.

- Borcun **erken ödenmesi** nedeniyle satıcının yaptığı indirim **649 Diğer Olağan Gelir ve Kârlar (alış iskontosu gelirleri)** olarak kaydedilebilir.
- Satıcı lehine poliçe düzenlenip kabule gönderilmesi nazım hesaplarda izlenir.

## 3. Dönem sonu işlemleri
- **Mutabakat** sağlanır; farklar düzeltilir.
- Anlaşma gereği **faiz** yürütülmüşse: **780 Finansman Giderleri** borç / **320** alacak.
- **Yabancı paralı** borçlar bilanço günü kuruyla değerlenir; artış **656 Kambiyo Zararları** borç / 320 alacak.
- **SPK'ya tabi** şirketlerde **3 aydan uzun vadeli senetsiz** borçlar reeskonta tabidir: **320** borç / **647 Reeskont Faiz Gelirleri** alacak; izleyen dönem başında **657** ile kapatılır.

## 4. 321 Borç Senetleri
- Senedin **imzalanması** veya işletme üzerine düzenlenen poliçenin **kabulüyle** alacaklanır, ödenince borçlanır.
- Ana faaliyet dışındaki alımlar için imzalanan senetler **336**'da izlenir.
- Yabancı paralı senetlerde kur farkı **646 Kambiyo Kârları** veya **656 Kambiyo Zararları**'na yazılır.

## 5. 322 Borç Senetleri Reeskontu (−)
TL senetlerde reeskont oranı: senette faiz oranı **belirtilmişse o oran**, belirtilmemişse **TCMB resmi iskonto oranı**; yabancı paralı senetlerde belirtilmemişse **LIBOR**.

> [!ezber] **İç iskonto formülü: Reeskont = a × n × t / (36.500 + n × t)**. a = anapara, n = vadeye kalan gün, t = faiz oranı.

**Örnek:** 10 gün vadeli 17.000 TL'lik senet, %60 → 17.000 × 10 × 60 / (36.500 + 600) = **275 TL**.

| Tarih | Borç | Alacak |
|---|---|---|
| Dönem sonu | **322 Borç Senetleri Reeskontu** | **647 Reeskont Faiz Gelirleri** |
| İzleyen dönem başı | **657 Reeskont Faiz Giderleri** | **322** |

> [!dikkat] Reeskont gerçekte bir gelir değil, **değer düzeltme** işlemidir. Gelir hesabı dönem sonunda 690'a kapatıldığı için yeni dönemdeki düzeltme ancak tutarın **gider** yazılmasıyla olur.

| | Alacak senetleri reeskontu (122) | Borç senetleri reeskontu (322) |
|---|---|---|
| Dönem sonu | **657 gider** / 122 | 322 / **647 gelir** |
| İzleyen dönem | 122 / 647 gelir | 657 gider / 322 |

## 6. 326 Alınan Depozito ve Teminatlar
- **Nakit** olarak alınan depozito ve teminatlar 326'da; **menkul kıymet, senet, emtia, teminat mektubu** gibi değerler **nazım hesaplarda** izlenir.
- Alınınca alacak, geri verilince veya mahsup edilince borç.
- Yükümlülüğünü yerine getirmeyen yüklenicinin teminatı anlaşmaya göre **irat kaydedilebilir**: **326** borç / **679 Diğer Olağandışı Gelir ve Kârlar** alacak.
- Örnek: şişe depozitosu alındı (10.000); 2.000 TL'lik şişe kırıldı → **326** borç / **256 Diğer Maddi Duran Varlıklar** alacak 2.000.

## 7. 33 Diğer Borçlar
**Ticari bir nedene dayanmadan** doğan ve en çok **bir yıl** içinde ödenecek borçlar.

| Hesap | İçerik |
|---|---|
| **331 Ortaklara Borçlar** | Esas faaliyet dışındaki işlemlerden ortaklara borçlar (şahıs işletmesinde işletme sahibine) |
| **332 İştiraklere Borçlar** | Örnek: genel kurulda dağıtılması kararlaştırılan kârın iştirake düşen payı → **570 Geçmiş Yıllar Kârları** borç / **332** alacak |
| **333 Bağlı Ortaklıklara Borçlar** | |
| **335 Personele Borçlar** | Tahakkuk eden **ücret, prim, ikramiye**; bordronun **net** tutarı ödenene kadar alacak |
| **336 Diğer Çeşitli Borçlar** | Ticari olmayıp diğerlerine girmeyen borçlar (ör. **hatır senedi** karşılığı) |
| **337 Diğer Borç Senetleri Reeskontu (−)** | |

- Ortaklardan alınan kredi ve faizi: alışta **100** borç / **331** alacak; ödemede **331** ve **780 Finansman Giderleri** borç / 100 alacak.
- Ortak, iştirak ve bağlı ortaklıklarla **esas faaliyete ilişkin** borçlar 33'te değil **32**'de izlenir ve dipnotlarda açıklanır.
`,
  sorular: [
    {
      s: "Bir borcun **32 Ticari Borçlar** grubunda mı **33 Diğer Borçlar** grubunda mı izleneceğini belirleyen ayırt edici unsur nedir?",
      c: ["Borcun kime olduğu", "Borcun senetli olup olmadığı", "Borcun ticari faaliyetten doğup doğmadığı", "Borcun yabancı para cinsinden olup olmadığı", "Borcun tutarı"],
      d: 2,
      a: "Ayırt edici unsur borcun **kime** olduğu değil, **ticari faaliyet nedeniyle doğup doğmadığıdır**. Ticari faaliyet dışındaki ilişkilerden doğan borçlar **33 Diğer Borçlar**'da izlenir.",
      k: "1016 resmi not s. 102"
    },
    {
      s: "Kırtasiye ticareti yapmayan bir işletmenin **kredili kırtasiye alımından** doğan borcu hangi hesapta izlenir?",
      c: ["320 Satıcılar", "321 Borç Senetleri", "336 Diğer Çeşitli Borçlar", "329 Diğer Ticari Borçlar", "331 Ortaklara Borçlar"],
      d: 2,
      a: "Satıcılar hesabında alımın **ana faaliyet konusuyla ilgili** olup olmadığına bakılır. Kırtasiye ticareti yapmayan işletme için bu borç **336 Diğer Çeşitli Borçlar**'da izlenir; kırtasiye ticareti yapan işletmede 320'de izlenirdi.",
      k: "1016 resmi not s. 103"
    },
    {
      s: "Aşağıdakilerden hangisi **320 Satıcılar** hesabının **borçlandığı** durumlardan biridir?",
      c: ["Kredili mal alımı", "Satıcının cari hesaba yürüttüğü faiz", "Satın alınan malın iadesi", "Yabancı paralı borçta kur artışı", "Anlaşma gereği satıcının ödediği giderler"],
      d: 2,
      a: "Satıcılar hesabı ödemeler, **mal iadesi**, satıcının uyguladığı **iskontolar** ve kur azalışı durumlarında **borçlanır**. Kredili alım, yürütülen faiz, kur artışı ve satıcının ödediği giderler hesabı **alacaklandırır**.",
      k: "1016 resmi not s. 103"
    },
    {
      s: "Notlara göre **Sermaye Piyasası Kanunu'na tabi** şirketlerde hangi senetsiz borçlar reeskonta tabi tutulur?",
      c: ["Tüm senetsiz borçlar", "1 aydan uzun vadeli senetsiz borçlar", "3 aydan uzun vadeye sahip senetsiz borçlar", "1 yıldan uzun vadeli senetsiz borçlar", "Senetsiz borçlar vadesine bakılmaksızın reeskonta tabi tutulmaz"],
      d: 2,
      a: "SPK'ya tabi şirketlerde **3 aydan uzun vadeye sahip senetsiz borçlar** reeskonta tabi tutulur: **320 Satıcılar** borç / **647 Reeskont Faiz Gelirleri** alacak; izleyen dönem başında **657** ile kapatılır.",
      k: "1016 resmi not s. 106"
    },
    {
      s: "İşletmenin **keşide ettiği vadeli (ileri tarihli) çekler** hangi hesapta izlenir?",
      c: ["321 Borç Senetleri", "103 Verilen Çekler ve Ödeme Emirleri", "320 Satıcılar", "305 Çıkarılmış Bonolar ve Senetler", "336 Diğer Çeşitli Borçlar"],
      d: 0,
      a: "İşletmenin keşide ettiği **vadeli çekler** **321 Borç Senetleri** hesabında izlenir; 103 yalnızca vadesiz çekler ve ödeme emirleri içindir.",
      k: "1016 resmi not s. 106"
    },
    {
      s: "Vadesine 20 gün kalan 36.500 TL'lik bir borç senedi için faiz oranı %50'dir. İç iskonto formülüne göre **reeskont tutarı** yaklaşık ne kadardır?",
      c: ["1.000 TL", "2.000 TL", "1.027 TL", "500 TL", "973 TL"],
      d: 4,
      a: "**Reeskont = a × n × t / (36.500 + n × t)** = 36.500 × 20 × 50 / (36.500 + 1.000) = 36.500.000 / 37.500 ≈ **973 TL**. Dış iskontoyla bulunacak 1.000 TL'den küçüktür.",
      k: "1016 resmi not s. 108"
    },
    {
      s: "Dönem sonunda hesaplanan **borç senetleri reeskontu** nasıl kaydedilir?",
      c: ["657 Reeskont Faiz Giderleri borç / 322 Borç Senetleri Reeskontu alacak", "122 Alacak Senetleri Reeskontu borç / 647 alacak", "321 Borç Senetleri borç / 322 Borç Senetleri Reeskontu alacak", "780 Finansman Giderleri borç / 321 Borç Senetleri alacak", "322 Borç Senetleri Reeskontu borç / 647 Reeskont Faiz Gelirleri alacak"],
      d: 4,
      a: "Dönem sonunda **322 Borç Senetleri Reeskontu** borç, **647 Reeskont Faiz Gelirleri** alacak kaydedilir. İzleyen dönem başında **657 Reeskont Faiz Giderleri** borç / **322** alacak yazılarak kapatılır.",
      k: "1016 resmi not s. 108-109"
    },
    {
      s: "Bir ihaleye katılan firmadan **teminat mektubu** alınmıştır. Bu değer nasıl izlenir?",
      c: ["Nazım hesaplarda", "326 Alınan Depozito ve Teminatlar hesabında", "102 Bankalar hesabında", "126 Verilen Depozito ve Teminatlar hesabında", "Hiçbir şekilde izlenmez"],
      d: 0,
      a: "326 yalnızca **nakit** olarak alınan depozito ve teminatları izler. **Menkul kıymet, senet, emtia ve teminat mektubu** gibi değerler **nazım hesaplarda** izlenir.",
      k: "1016 resmi not s. 109"
    }
  ]
});
