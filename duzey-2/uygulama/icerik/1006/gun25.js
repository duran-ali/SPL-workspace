SPL.gun("1006", 25, {
  okuma: `
## Bugünün haritası
Yeni bölüm: **Kıymetli Madenler ve Kıymetli Taşlar Piyasası (KMKTP)**. Bugün tarihçeyi, borsanın kanundan doğan görevlerini, piyasaları ve **Kıymetli Madenler Piyasasının (KMP)** işleyişini öğreniyoruz: işlem yöntemi, seans saatleri, fiyat birimleri, valör, fiyat adımları, emir tipleri ve standart madenler.

1. Tarihçe: **İstanbul Altın Borsası**'ndan Borsa İstanbul'a
2. Borsanın **mevzuattan doğan görevleri**
3. KMKTP bünyesindeki **piyasalar**
4. KMP **işlem yöntemi**: sürekli işlem ve tek fiyat
5. **Seans ve takas saatleri**
6. **Fiyat birimleri**, **valör** ve **fiyat adımları**
7. **Emir tipleri**, fiyat limitleri, **fiksing** ve **işlem raporu**
8. **Standart, standart dışı** ve **cevherden üretilen** kıymetli madenler

---

## 1. Tarihçe
- **1993**'te **32 Sayılı Karar**'daki değişikliklerle altının fiyatının belirlenmesi, ithalatı ve ihracatı **serbestleştirildi**.
- Aynı yıl "Kıymetli Madenler Borsalarının Kuruluş ve Çalışma Esasları Hakkında Genel Yönetmelik" yayımlandı.
- **26.07.1995**'te **İstanbul Altın Borsası (İAB)** faaliyete geçti. İAB, alım satım, takas ve kasa saklama hizmeti sunan **dünyanın ilk spot altın borsası** olarak kuruldu.
- **03.04.2013**'te İAB ve İMKB'nin tüzel kişilikleri sona erdi; işlemler **Borsa İstanbul Kıymetli Madenler ve Kıymetli Taşlar Piyasası Bölümü**'ne geçti.

**İAB'nin kuruluş amaçlarından bazıları:** altın sektörüyle finans sektörü arasında **köprü** olmak; sektörün kurumsallaşması ve ihracata katkı; dünya piyasalarına paralel bir piyasa; **likidite**; kıymetli maden işlemlerinde **referans fiyat** belirlemek; yeni yatırım araçları ve uluslararası entegrasyon; kıymetli taşlarda organize piyasa.

---

## 2. Borsanın mevzuattan doğan görevleri
| Görev | Kural |
|---|---|
| **Standart işlenmemiş kıymetli maden ithalatı** | Yalnız **TCMB** ve KMKTP'de **yetkili üyeler** yapabilir (32 Sayılı Karar md. 7/a, d) |
| İthal edilen madenler | **3 iş günü** içinde **borsaya teslim** ve **borsada alım-satım zorunluluğu** |
| Yurt içinde **cevherden üretilen** madenler | Türkiye'deki rafinerilerde rafine edilir; rafinajdan sonra **7 iş günü** içinde borsa kasasına teslim edilip KMP'de satılır (veya Darphane ayar raporuna göre ayrı ayrı işlem) |
| **BYF, yatırım fonu ve yatırım ortaklıklarının** madenleri | Saklaması **KMKTP Bölümünde**; alım satımları **KMP'de** |
| Bankaların **zorunlu karşılık** altınları | Türkiye'de, **Borsa İstanbul kasasında TCMB hesabı** altında saklanır |
| **Kimberley Süreci** (2006/11115 BKK) | Borsa İstanbul, **ham elmas** ithalat ve ihracatında **Türkiye'nin yetkili otoritesidir**; sertifikaları inceler, teyit alır, sertifika düzenler |

> [!ezber] İthal maden → **3 iş günü** içinde borsaya. Cevherden üretilip rafine edilen maden → **7 iş günü** içinde borsa kasasına.

---

## 3. KMKTP bünyesindeki piyasalar
| Piyasa | Ne işlem görür? |
|---|---|
| **Kıymetli Madenler Piyasası (KMP)** | Standart, standart dışı ve cevherden üretilmiş **altın, gümüş, platin, paladyum**; **T+0'dan T+120'ye** kadar valörlü ve fiziki işlemler |
| **Kıymetli Madenler Ödünç Piyasası** | Kıymetli maden **ödünç** işlemleri |
| **Elmas ve Kıymetli Taş Piyasası** | **Elmas** ve kıymetli taşlar |

- Kıymetli madenler ve taşların **saklaması** da Borsa İstanbul kasasında yapılabilir.
- **Bireysel yatırımcılar** da üyeler aracılığıyla KMP'de altın, gümüş, platin ve paladyum alıp satabilir ve **borsadan satın alma şartı olmadan** borsa kasasında saklatabilir.

---

## 4. KMP işlem yöntemi
- Üyeler emirlerini işlem salonundaki temsilcileri aracılığıyla veya **uzaktan erişimle internet üzerinden** **Kıymetli Madenler İşlem Platformu (KİT)**'e iletir. Sertifikasyon şartıyla kendi sistemlerini **FIXAPI** ile entegre edebilirler.
- İşlemler **fiyat ve zaman önceliğine** göre **çok fiyat** yöntemiyle yürür; emirler bilgi dağıtım ekranlarıyla aynı anda üyelere ve **uluslararası piyasalara** ulaşır.
- **Esas: sürekli işlem.** Sürekli işlem seansı içinde belirli bir zaman diliminde **tek fiyat** yöntemiyle emir toplanabilir.

### Tek fiyat seansı
- **Emir toplama:** emirler sıralanır, eşleşme yok; değiştirilebilir ve iptal edilebilir.
- **Fiyat belirleme:** emir girilemez, değiştirilemez, iptal edilemez.
- Tek fiyat seansında yalnız **standart 1 kg altın**, **takas T+0** ve fiyat birimi **USD/ons** olan emirler girilebilir.

---

## 5. Seans ve takas saatleri
| Bölüm | Saat |
|---|---|
| **Tek fiyat** | Takas günlerinde **14:00**'te başlar; emir toplama **10 dk**, fiyat belirleme **5 dk**; **14:15**'te tamamlanır |
| **Fiksing** | **09:00**'da başlar; **London Gold Price** açıklanana kadar sürer |
| **Spot piyasa sürekli işlem** | **08:00 – 16:00** ve **16:10 – 23:45** (16:00-16:10 gün sonu, seans kapalı) |
| Yarım gün | **08:00 – 13:00** |
| **Takas** | Para ve kıymet yükümlülüğü için son saat **17:00**; **erken takas 09:00 – 15:45** |

- Tek fiyat seansı süresince spot piyasa seansına **15 dakika ara** verilir.
- Hafta sonu ve resmî tatillerde işlem ve takas yapılmaz. Tek fiyat ve fiksing yarım günlerde de yapılmaz; fiksing, London Gold Price açıklanmayan günlerde yapılmaz.

---

## 6. Fiyat birimleri, valör ve fiyat adımları
### Fiyat birimleri
- **TL** üzerinden **kilogram ve gram**; **ABD doları ve avro** üzerinden **ons** birim fiyatı. Yükümlülükler işlemin para birimiyle yerine getirilir.
- Fiyatlar her birimde virgülden sonra **iki hane**.
- **TRY/GR** yalnız **mini külçelerde**; **TRY/KG** mini külçelerde **kullanılamaz**.
- **Tek fiyat ve fiksing** emirlerinde fiyat birimi **yalnız USD/ons**.
- **1 kg = 32,1507465 ons**; **1 ons = 31,1034768 gram**.

### Valör
| Emir | Valör |
|---|---|
| **Tek fiyat** | **Yalnız T+0** |
| **Fiksing** | İzleyen **10 takvim günü** içindeki takas günleri; fiyat olarak işlem günü sabah açıklanan **LBMA fiksing** fiyatı |
| **Diğer tüm ürünler** | İzleyen **120 takvim günü** içindeki takas günleri |

### Fiyat adımları (mini külçe hariç)
| Metal | Birim | Adım |
|---|---|---|
| Altın, platin, paladyum | USD veya EUR / ons | **5 cent** |
| Altın, platin, paladyum | TRY / kg | **1 TL** |
| **Gümüş** | USD veya EUR / ons | **1 cent** |
| **Gümüş** | TRY / kg | **10 kuruş** |

---

## 7. Emir tipleri, fiyat limitleri, fiksing ve işlem raporu
- **Limit fiyatlı emir:** fiyat ve miktar belirtilir; gerçekleşmeyen kısım geçerlilik süresi sonuna kadar **pasif** bekler; emirdeki fiyattan veya daha iyisinden eşleşir.
- Öncelik: düşük satış, yüksek alış; eşitse zaman. **Fiyat veya miktar değişirse zaman önceliği kaybolur.**
- Hesap tipi: **portföy, müşteri, fon**. Üyeler yalnız **kendi** müşteri ve fonları adına emir girebilir.
- Emirde **hesap tipi ve hesap serbestçe değiştirilebilir**; işlem görmeyen kısım istenildiği an iptal edilebilir. Emir değişikliği ve iptali **ücretsizdir**.

> [!bilgi] KMP'de **fiyat limitleri** uluslararası fiyatlara göre **dinamik** belirlenir, takas tarihine göre **takvim günü bazında** değişir; **KMKTP Direktörlüğü** belirler.

### Fiksing fiyatlı emirler
- **Londra piyasasının sabah seansındaki LBMA fiksing fiyatına** bağlı verilir.
- Borsada takas olmayan veya LBMA sabah fiksinginin yayımlanmadığı günlerde **yapılmaz**.
- Yalnız **ABD doları** fiyat tipiyle; fiyat hanesine **(±) bir ABD doları değeri** girilerek verilir.

### İşlem raporu
- Belirlenen sınırlar içinde, emir defterine iletmeden ve **karşı üyeyi seçerek** işleme dönüştürmek için girilir.
- Takas **brüt** esaslara göre yapılır.
- Karşı üyenin **aynen kabulüyle** veya aynı şartlarda **ters yönde** işlem raporu girmesiyle işleme dönüşür.
- **Öncelik kuralları uygulanmaz**; üyenin takdirine bağlıdır.

---

## 8. İşleme konu kıymetli madenler
### Standart kıymetli madenler
| Maden | Asgari saflık | Şekil |
|---|---|---|
| **Altın** | **995/1000** | Bar, külçe |
| **Gümüş** | **%99,9** | Bar, külçe, **granül** |
| **Platin** | **%99,95** | Bar, külçe |
| **Paladyum** | **%99,95** | Bar, külçe |

- **Mini bar:** 1 – 2,5 – 5 – 10 – 20 – 50 – 100 – 250 – 500 gr. **Külçe:** 1 kg. **Large bar:** 1 kg'ın üzeri. Gümüşte ayrıca torba ambalajlı **granül**.

### Standart dışı kıymetli madenler
Yukarıdaki saflıkların **altında** (eşik dâhil değil) külçe, bar, **dore bar**, granül, toz veya **hurda** hâlindeki madenler.
- Ayar raporuna uyumdan, madeni **borsa kasasına teslim eden üye** sorumludur.
- **Ramat evleri ve rafineriler**, ürettikleri madenin üzerine firma damgası ile ayar ve ağırlık mühürlerini vurmak zorundadır.
- Üyeler **Darphane ve Damga Matbaası Genel Müdürlüğü**'nden (veya belirleyeceği kuruluşlardan) **ayar raporu** almak zorundadır.
- İthal edilen standart dışı maden; **gümrük beyannamesi**, **ithalat bilgi formu** ve **ayar raporuyla** teslim edilir (ivedi durumlarda ayar raporu ve gümrük beyannamesi yeterli).

### Cevherden üretilen kıymetli madenler
- **Kıymetli Maden Standartları ve Rafinerileri Hakkında Tebliğ** md. 13'e göre: üretici, madenin tebliğe azami uygunluğunu sağlar; üyeler **Darphane**'den ayar raporu almak zorundadır.
- Darphane, cevheri oluşturan **her bir madenin** saflık ve ağırlığını belirleyen ayar raporunu düzenler.

---

## Bugünün özeti
- **1993** serbestleşme; **İAB 26.07.1995** (dünyanın ilk spot altın borsası); **2013**'te Borsa İstanbul'a geçiş.
- Standart maden ithalatı yalnız **TCMB** ve **yetkili üyeler**; ithal maden **3 iş günü**, rafine cevher **7 iş günü** içinde borsaya.
- Bankaların zorunlu karşılık altınları borsa kasasında **TCMB hesabında**; **Kimberley Süreci** otoritesi Borsa İstanbul.
- KMP: **T+0 – T+120**; esas **sürekli işlem**; tek fiyat yalnız **1 kg altın, T+0, USD/ons**.
- Saatler: sürekli **08:00-16:00 / 16:10-23:45**; tek fiyat **14:00-14:15**; fiksing **09:00**'dan; takas son **17:00**.
- **1 kg = 32,1507465 ons**; altın adımı **5 cent / 1 TL**, gümüş **1 cent / 10 kuruş**.
- Fiyat limitleri **dinamik**; emir değişikliği ve iptali **ücretsiz**.
- Saflık: altın **995/1000**, gümüş **%99,9**, platin ve paladyum **%99,95**.
`,
  sorular: [
    {
      s: "**İstanbul Altın Borsası** ile ilgili hangisi doğrudur?",
      c: ["1995'te faaliyete geçen, dünyanın ilk spot altın borsası olarak kurulmuştur", "1986 yılında İMKB bünyesinde bir pazar olarak kurulmuştur", "Tüzel kişiliği bugün de Borsa İstanbul'dan ayrı olarak devam etmektedir", "Yalnızca vadeli altın sözleşmelerinin işlem gördüğü bir borsadır", "2006 yılında Kimberley Süreci kapsamında kurulmuştur"],
      d: 0,
      a: "İAB **26.07.1995**'te faaliyete geçti ve alım satım, takas ve kasa saklama hizmeti sunan **dünyanın ilk spot altın borsası** olarak kuruldu. Tüzel kişiliği **03.04.2013**'te sona erdi ve işlemler Borsa İstanbul'a geçti.",
      k: "1006 resmi not s. 159"
    },
    {
      s: "32 Sayılı Karar'a göre yetkili üyeler tarafından **ithal edilen** standart ve standart dışı işlenmemiş kıymetli madenler ne kadar süre içinde borsaya teslim edilmelidir?",
      c: ["Aynı gün", "1 iş günü", "7 iş günü", "3 iş günü", "10 iş günü"],
      d: 3,
      a: "İthal edilen madenler **3 iş günü** içinde borsaya teslim edilir ve borsada alım-satım zorunludur. Yurt içinde **cevherden üretilen** madenler ise rafinajdan sonra **7 iş günü** içinde borsa kasasına teslim edilir.",
      k: "1006 resmi not s. 159"
    },
    {
      s: "Aşağıdakilerden hangisi Borsa İstanbul'un kıymetli maden ve kıymetli taşlarla ilgili mevzuattan doğan görevlerinden **değildir**?",
      c: ["Ham elmas ithalat ve ihracatında Kimberley Süreci otoritesi olmak", "Bankaların zorunlu karşılık altınlarını kasasında TCMB hesabı altında saklamak", "Kuyumculara altın fiyatı üzerinden vergi tahsil etmek", "Yatırım fonlarının kıymetli madenlerini saklamak", "İthal edilen standart kıymetli madenlerin borsada alım satımını sağlamak"],
      d: 2,
      a: "Borsa İstanbul; Kimberley Süreci otoritesidir, zorunlu karşılık altınlarını ve fonların madenlerini saklar, ithal madenlerin borsada satılmasını sağlar. **Vergi tahsili** borsanın görevlerinden değildir.",
      k: "1006 resmi not s. 159-160"
    },
    {
      s: "Kıymetli Madenler Piyasasında **tek fiyat seansına** hangi emirler girilebilir?",
      c: ["Tüm madenlerde, T+0 ile T+120 arasındaki valörlerle ve her fiyat biriminde", "Yalnızca fiksing fiyatına bağlı ve EUR/ons birimli emirler", "Yalnızca gümüş, T+1 takaslı ve TRY/kg fiyat birimli emirler", "Yalnızca mini altın barlar, TRY/gr fiyat birimiyle", "Yalnızca standart 1 kg altın, T+0 takaslı ve USD/ons fiyat birimli emirler"],
      d: 4,
      a: "Tek fiyat seansında yalnız **standart 1 kg altın** için **takas T+0** ve fiyat birimi **USD/ons** olan emirler girilebilir. Tek fiyat takas günlerinde 14:00'te başlar ve 14:15'te tamamlanır.",
      k: "1006 resmi not s. 160-161"
    },
    {
      s: "Kıymetli Madenler Piyasasında **spot piyasa sürekli işlem** saatleri hangisinde doğru verilmiştir?",
      c: ["09:30 – 17:30", "08:00 – 16:00 ve 16:10 – 23:45", "09:00 – 14:15", "10:00 – 18:00 ve 19:00 – 23:00", "08:00 – 13:00 ve 14:00 – 17:00"],
      d: 1,
      a: "Spot piyasa sürekli işlem **08:00-16:00** ve **16:10-23:45** arasındadır; 16:00-16:10 arası gün sonu işlemleri için seans kapalıdır. Yarım günlerde 08:00-13:00 arası işlem yapılır.",
      k: "1006 resmi not s. 161"
    },
    {
      s: "Kıymetli Madenler Piyasasında **fiyat birimleri** ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
      c: ["TL üzerinden kilogram ve gram, USD ve EUR üzerinden ons birim fiyatı kullanılır", "TRY/GR fiyat birimi yalnızca mini külçelerde uygulanır", "Tek fiyat ve fiksing emirlerinde fiyat birimi yalnızca USD/ons olabilir", "TRY/KG fiyat birimi mini külçelerde de kullanılabilir", "Dönüşümlerde 1 kilogram 32,1507465 ons olarak alınır"],
      d: 3,
      a: "**TRY/KG** fiyat birimi **mini külçelerde kullanılamaz**; mini külçelerde **TRY/GR** kullanılır.",
      k: "1006 resmi not s. 161"
    },
    {
      s: "Kıymetli Madenler Piyasasında **gümüşün USD/ons** cinsinden fiyat adımı nedir?",
      c: ["1 cent", "5 cent", "10 cent", "10 kuruş", "1 TL"],
      d: 0,
      a: "Gümüşte USD veya EUR/ons için adım **1 cent**, TRY/kg için **10 kuruş**tur. Altın, platin ve paladyumda ons başına **5 cent**, kilogram başına **1 TL**'dir.",
      k: "1006 resmi not s. 162"
    },
    {
      s: "Kıymetli Madenler Piyasasında **standart işlenmemiş platin** için aranan asgari saflık oranı nedir?",
      c: ["995/1000", "%99,5", "%99,9", "%99,95", "%99,99"],
      d: 3,
      a: "Standart **platin** ve **paladyum** için en az **%99,95**, **gümüş** için **%99,9**, **altın** için **995/1000** saflık aranır.",
      k: "1006 resmi not s. 163"
    }
  ]
});
