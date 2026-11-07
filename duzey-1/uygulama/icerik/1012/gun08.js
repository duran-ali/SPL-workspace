SPL.gun("1012", 8, {
  okuma: `
## Bugünün haritası
Bugün **Borsa İstanbul Pay Piyasası**'nın takasını adım adım izliyoruz.
1. **T+2** ve takas prensipleri
2. **Brüt takas**
3. Takas süreci: **T, T+1, T+2**
4. **Nakit takası**
5. **Temerrüt**, temerrüt faizi ve **mağduriyet ödemesi**
6. **Risk limitleri** ve **teminat** yönetimi (başlangıç)

---

## 1. T+2 ve takas prensipleri
- **Takas günü = işlem gününü izleyen ikinci iş günü (T+2).**
- **Yarım günlerde takas yapılmaz.** Yarım günde yapılan işlemler bir önceki günün işlemleriyle birleştirilir ve yarım günü izleyen **ikinci iş günü** toplu olarak takas edilir.
- Takas süreleri hesaplanırken Takasbank'ın **ve** Pay Piyasası'nın açık olduğu günler dikkate alınır.
- Yükümlülükler takas tarihinden **önce yerine getirilerek takas sonuçlandırılamaz**.

| Prensip | Anlamı |
|---|---|
| **Netleştirme** | Menkul kıymet bazında, **müşteri/portföy ayrımı** gözetilerek **çok taraflı** netleştirme. **Günlük** netleştirme yapılır; temerrüt dışında **günler arası geçiş yoktur**. |
| **Teslim karşılığı ödeme** | Borcunu kapatmayan kuruma **alacağı ödenmez**. **Kısmi takas** mümkündür. |
| **Kaydi takas** | Borçlar **hesaben** ödenir; alacaklar Takasbank ve MKK hesaplarına aktarılır. |
| **Merkezi takas** | Tüm işlemlerin takası **Takasbank**'ta yapılır (Kurul istisnaları hariç). |
| **Aynı gün valörlü ödeme** | Borcunu kapatan kurum alacağını **aynı gün** alır. |

> [!bilgi]
> **Toptan Satışlar Pazarı** işlemlerinin takası, alıcı ve satıcı isterse ve **BİAŞ uygun görürse** Takasbank dışında, üyeler arasında yapılabilir.

---

## 2. Brüt takas
- Kurul, Borsa ya da piyasa işleticisi şunlara karar verebilir:
  - **brüt takas** (netleştirme yapılmadan),
  - **blok satış ve özel emirlerin** netleştirme dışında tutulması,
  - netleştirmenin **yalnızca iki üye arasında** yapılması.
- Brüt takasta üye; **sattığı kıymet kadar kıymet borçlu, karşılığı kadar nakit alacaklı**; **aldığı tutar kadar nakit borçlu, kıymet kadar kıymet alacaklı** olur.
- Brüt takasa konu alacaklar **takas süresinin sonrasında** dağıtılır.

---

## 3. Takas süreci

| Gün | Ne olur? |
|---|---|
| **T** (işlem günü) | Müşteri/portföy ayrımıyla **anlık takas pozisyonları** oluşur ve seans boyunca güncellenir. Gün sonunda **net pozisyonlar** ve **MKK dosyası** oluşur. Aracı kurum onayıyla borçlu müşterilerin kıymetleri **SERB** (serbest) alt hesabından **TAVB** (Takas Amaçlı Virman Blokajı) alt hesabına alınır. |
| **T+1** | Portföy/müşteri, müşteri numarası ya da **AFK** hataları, **T günü işlemden T+1 seans sonuna kadar** Takasbank Üye Terminali'nden düzeltilebilir. Yeniden netleştirme yapılır. **Takas talimatları T+1 gün sonunda** oluşur. Düzeltilmeyen hatalı işlemler için **AKHATAP** (Aracı Kuruluş Hatalı Portföy İşlem Hesabı) kullanılır. |
| **T+2** (takas günü) | Blokeli kıymetler serbestleşir ve **AKTAH** (Aracı Kurum Takas Havuz Hesabı) üzerinden **TBTAH** (Takasbank Takas Havuz Hesabı) hesabına aktarılır. Takasbank'a borç kapatma mesajı gider ve kurumun takas borcu kapanır. |

> [!ezber]
> **SERB → TAVB** (T günü bloke) → **AKTAH → TBTAH** (T+2 aktarım). Hata düzeltme **T+1 seans sonuna** kadar; düzeltilmeyenler **AKHATAP**'ta.

---

## 4. Nakit takası
- Üyeler nakit takas borçlarını **saat 16:45**'e kadar yatırır:
  - **XXXX-22-1** Pay Takas Borcu Hesabı,
  - **XXXX-88-1** Pay **Brüt** Takas Borcu Hesabı.
- **Ödeme yolları:** **EFT**, Takasbank'taki başka bir hesaptan **virman**, diğer piyasalardaki alacakların **mahsubu**.
  - Mahsup talimatı yalnızca **verildiği gün** geçerlidir. O gün gerçekleşen mahsupta **temerrüt uygulanmaz**.
  - Alacak aynı gün alınamazsa üye borcunu **aynı gün kendisi öder**.
- **Nakit alacak** için önce **menkul kıymet yükümlülüğü** yerine getirilmiş olmalıdır. Alacaklar kurumun **Serbest Cari (11)** hesabına dağıtılır.

---

## 5. Temerrüt

### Ne zaman?
Takas günü **16:45**'e kadar yükümlülüğünü yerine getirmeyen üye **bildirime gerek olmadan** temerrüde düşer. Yükümlülüğün zamanında yerine getirilip getirilmediğine şu anlara bakılır:

| Borç türü | Esas alınan an |
|---|---|
| **Kıymet** | Kıymetin MKK'da **Takas Havuz hesabına** aktarıldığı saat |
| **Nakit (EFT ile)** | TCMB'deki Takasbank **TIC** hesabına geçiş saati |
| **Nakit (virmanla)** | Takasbank'taki **borç kapama hesabına** geçiş saati |

### Temerrüt faizi
*Faiz = Matrah × Faiz oranı × Gün × Katsayı / 360*

- **Matrah:**
  - nakitte gecikmeli kapatılan tutar,
  - kıymette **adet × işlem günü ağırlıklı ortalama fiyat**.
- **Faiz oranı:** BİAŞ Repo-Ters Repo, TCMB Bankalararası ve Takasbank Para Piyasası **gecelik ağırlıklı ortalama** oranlarının **en yükseği**.
- **Katsayı:**
  - takas günü **17:30'a kadar** (dahil) kapatılırsa **1**,
  - **17:31 ve sonrası** ya da **sonraki günlerde** kapatılırsa **3**.
- Faiz, temerrüdün kapandığı günü **izleyen iş günü** tahakkuk eder ve **3 iş günü** içinde ödenir. Ödenmezse ertesi iş günü Serbest Cari hesaptan **re'sen** alınır.

### T+3: re'sen borç kapatma
**T+3 günü 11:00**'e kadar borcunu kapatamayan kurum adına Borsa'da **aynı gün valörlü** alım ya da satım yapılır. Bunun için Borsa'da **temerrüt sırası** açılır.

### Mağduriyet ödemesi
- Alacağını geç alan üyeye, temerrüt cezasının **2/3**'ü ödenir; ödeme **Serbest Cari** hesabına yapılır.
- **Şartlar:**
  - gecikme BİAŞ, Takasbank, MKK ya da TCMB **sistem sorunlarından** kaynaklanmamalı,
  - temerrüde düşenin itirazı **geçersiz** sayılıp ceza tahsil edilmiş olmalı,
  - alacaklı üye **kendi yükümlülüklerini zamanında** yerine getirmiş olmalı.

---

## 6. Risk limitleri ve teminat
- Pay Piyasası'nda risk yönetimini **Takasbank** yapar. Her hesap için **portföy bazlı** yöntemle "bulunması gereken teminat" hesaplanır.

### Risk limitleri
- Takasbank, MKT olduğu her piyasada üyelere **mali yeterlilikleri oranında** risk limiti tanımlar. Takip, **BISTECH**'te toplam tutar üzerinden yapılır.
- Limit **aşılırsa** aşan kısım prosedürdeki katsayılarla çarpılır ve **ilave işlem teminatı** hesabına yansıtılır.
  - Teminat açığında çağrı yapılır. Yükümlülük **izleyen iş günü 15:00**'e kadar yerine getirilmezse **temerrüt** hükümleri uygulanır.
- **Risk/limit oranı %200'ü aşarsa** teminat yeterli olsa bile **emir iletimi engellenebilir** ve tüm **pasif emirler iptal edilir**. Oran %200'ün altına inince emir iletimine yeniden izin verilir.
- İlave işlem teminatı, üyenin **kendi** ya da üzerinde **tasarruf hakkı** olan varlıklardan karşılanır.

### Başlangıç ve değişim teminatı
- **Başlangıç teminatı** parametreleri:
  - güven düzeyi **%99,5**,
  - elde tutma süresi yeni işlemler için **2 gün**; aynı gün takası yapılacak pozisyonlarda **1 gün**.
  - Parametreler **ayda bir** gözden geçirilir.
- **Değişim teminatı**, pozisyonun **cari değeri** ile **takas (işlem) fiyatıyla** değeri arasındaki farktır.
`,
  sorular: [
    {
      s: "Borsa İstanbul Pay Piyasası'nda yarım günde gerçekleştirilen işlemlerin takası nasıl yapılır?",
      c: ["Yarım günün kendisinde, aynı gün valörüyle yapılır.", "Önceki günün işlemleriyle birleştirilerek yarım günü izleyen ikinci iş günü yapılır.", "Yarım günün işlemleri, önceki günden ayrı tutularak yarım günü izleyen ilk iş günü takas edilir.", "Yarım günlerde pay piyasasında işlem yapılamaz.", "Yarım günden üç iş günü sonra, toplu olarak yapılır."],
      d: 1,
      a: "Yarım günlerde takas yapılmaz. Yarım gün işlemleri **bir önceki günün işlemleriyle birleştirilir** ve yarım günü izleyen **ikinci iş günü** toplu olarak takas edilir.",
      k: "1012 resmi not s. 71"
    },
    {
      s: "Aşağıdakilerden hangisi Takasbank'ın pay piyasası takas prensiplerinden biri **değildir?**",
      c: ["Netleştirme", "Kaydi takas", "Teslim karşılığı ödeme", "Günler arası netleştirme", "Aynı gün valörlü ödeme"],
      d: 3,
      a: "Takas prensipleri: **netleştirme, kaydi takas, teslim karşılığı ödeme, merkezi takas ve aynı gün valörlü ödeme**. Günler arası yükümlülük geçişi (temerrüt hali dışında) **yapılmaz**.",
      k: "1012 resmi not s. 71–72"
    },
    {
      s: "Pay piyasasında Borsa sözleşmelerindeki müşteri numarası veya portföy/müşteri alanı hataları en geç ne zamana kadar aracı kurumlarca düzeltilebilir?",
      c: ["İşlem günü (T) seans sonuna kadar", "T+1 günü Borsa seans sonuna kadar", "T+2 günü saat 11:00'e kadar", "T+2 günü saat 16:45'e kadar", "T+3 günü saat 11:00'e kadar"],
      d: 1,
      a: "Hatalar **T günü işlem anından T+1 günü Borsa seans sonuna kadar** Takasbank Üye Terminali'nden düzeltilebilir. Düzeltilmeyenler için **AKHATAP** hesabı kullanılır.",
      k: "1012 resmi not s. 72"
    },
    {
      s: "Pay piyasasında takas için blokeye alınan kıymetler hangi alt hesapta tutulur?",
      c: ["SERB", "TAVB", "AKTAH", "TBTAH", "AKHATAP"],
      d: 1,
      a: "Borçlu müşterilerin kıymetleri **SERB** (serbest) alt hesabından **TAVB** (Takas Amaçlı Virman Blokajı) alt hesabına alınarak bloke edilir. Takas günü AKTAH üzerinden TBTAH'a aktarılır.",
      k: "1012 resmi not s. 72"
    },
    {
      s: "Pay piyasasında üyelerin nakit takas borçlarını Takasbank'taki ilgili hesaplara en geç saat kaçta yatırmaları gerekir?",
      c: ["11:00", "15:00", "16:45", "17:30", "18:00"],
      d: 2,
      a: "Nakit takas borçları takas günü **16:45**'e kadar Pay Takas Borcu (22-1) ve Pay Brüt Takas Borcu (88-1) hesaplarına yatırılmalıdır; bu saatten sonra temerrüt oluşur.",
      k: "1012 resmi not s. 73"
    },
    {
      s: "Pay piyasasında temerrüde düşen bir üye yükümlülüğünü takas günü 18:00'de yerine getirmiştir. Temerrüt faizi hesabında uygulanacak katsayı kaçtır?",
      c: ["0,25", "0,50", "1", "2", "3"],
      d: 4,
      a: "Takas günü **17:30'a kadar** (dahil) kapatılırsa katsayı **1**, **17:31 ve sonrası** ya da izleyen günlerde kapatılırsa katsayı **3**'tür. 18:00 için katsayı 3'tür.",
      k: "1012 resmi not s. 74"
    },
    {
      s: "Pay piyasasında temerrüt nedeniyle alacağını geç alan üyeye ödenen mağduriyet ödemesi, tahsil edilen temerrüt cezasının ne kadarıdır?",
      c: ["Tamamı", "Yarısı", "1/3'ü", "2/3'ü", "1/4'ü"],
      d: 3,
      a: "Alacağını gecikmeli alan üyeye temerrüt cezasının **2/3**'ü mağduriyet ödemesi olarak Serbest Cari hesabına ödenir.",
      k: "1012 resmi not s. 75"
    },
    {
      s: "Pay piyasasında bir üyenin risk/limit oranı hangi seviyeyi aşarsa, teminatı yeterli olsa bile emir iletimi engellenebilir?",
      c: ["%100", "%120", "%150", "%200", "%250"],
      d: 3,
      a: "Risk/limit oranı **%200**'ü aşarsa teminatın yeterliliğine bakılmaksızın emir iletimi engellenebilir ve pasif emirler iptal edilir.",
      k: "1012 resmi not s. 75"
    }
  ]
});
