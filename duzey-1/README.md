# SPL Düzey 1 çalışma modülü

Sermaye Piyasası Faaliyetleri **Düzey 1** lisans sınavı için çalışma uygulaması, konu haritası ve kaynak listesi. Kaynaklar resmi kanallardan (SPL, SPK, mevzuat.gov.tr) 04.11.2026'da derlendi.

## Çalışma uygulaması
**`uygulama/index.html` dosyasına çift tıkla.** Uygulama tarayıcıda açılır, internet gerektirmez.

> SPL'nin resmi çalışma notu PDF'leri telif hakkı nedeniyle repoda yok. Uygulamadaki "resmi not" bağlantılarının çalışması için PDF'leri [`kaynaklar/README.md`](kaynaklar/README.md) dosyasındaki adlarla indirmen yeterli.

- **Günlük okuma:** 15–20 dakikalık konu anlatımı ve resmi notun ilgili sayfalarına bağlantı.
- **Mini test:** her günün sonunda, anında geri bildirimli kısa test.
- **Ders sonu testi:** dersin bütün günleri bitince açılır; 25 soru, baraj 75 (resmi sınavdaki ders barajı 50; kendimize daha yüksek bir hedef koyduk).
- **Genel deneme:** dört dersin ders sonu testleri bitince açılır. Resmi ölçütle puanlanır: her dersten en az 50, ortalama en az 60. Ortalama en yakın tam sayıya yuvarlanır, yanlış cevap doğruyu götürmez.
  - **Tam deneme:** 4 × 25 soru, 180 dakika geri sayım. Süre dolunca sınav kendiliğinden biter.
  - **Tek ders oturumu:** gerçek sınavdaki bir oturum gibi 25 soru, 45 dakika. Düşük kalan dersi tekrar etmek için.
  - **Soru havuzu:** her dersin yalnızca denemede çıkan 50 sorusu vardır (`deneme.js`, iki set × 25). İkinci set, günlerde ve ders sonunda hiç soru çıkmamış sayfalardan yazıldı. Önce görülmemiş deneme soruları sorulur; böylece ilk iki deneme tamamen yeni sorulardan oluşur. Hepsi çıktıktan sonra denemeler, daha önce çözülen sorulardan karışık seçilir.
- **Resmi çalışma soruları (1003):** SPL'nin 1003 için yayımladığı 105 açık uçlu çalışma sorusu, konusuna göre ilgili günün sonunda listelenir; her biri PDF'teki sayfasına bağlantı verir (`veri/calisma-sorulari.js`). Ana notla çelişen birkaç sorunun yanında not vardır.
- **Yanlış defteri:** yanlış yaptığın sorular burada toplanır; doğru cevaplayınca defterden silinir.
- **Önizleme modu (Ayarlar):** kilitleri kaldırır; bütün günler, testler ve deneme açılır.
- İlerleme tarayıcıda saklanır. Ayarlar'dan yedeğini indirebilirsin.

İçerik dosyaları `uygulama/icerik/<ders kodu>/` altındadır: günlük okumalar ve mini testler `gunXX.js`, ders sonu testi `ders-sonu.js`, deneme soruları `deneme.js`. Günlük plan `uygulama/veri/program.js` dosyasındadır.

## Kaynaklardaki çelişkiler
Resmi kaynaklarda birbiriyle çelişen birkaç bilgi var. Bu noktalar testlerde sorulmadı (tek istisna aşağıda); "(gün)" yazanlar ilgili günde "dikkat" kutusuyla da belirtildi:
- **1003:** geri alınan payların hakları (s. 7 ve s. 56; 6. gün); halka arz için aktif toplam ve hasılat şartı (not s. 28 "veya" diyor, resmi çalışma soruları iki şartı birlikte arıyor; 3. gün). Fiyat marjı ve devre kesici: not s. 62'de temel düzenlemeyi, s. 63'te ise Borsa'nın 2020/20 sayılı kararıyla yürürlükte olan değerleri (Yıldız ve Ana Pazar'da marj ±%10, devre kesici %5) veriyor. Çalışma soruları da güncel değerleri kullandığı için 6–7. günlerde güncel değerler soruluyor; temel düzenleme dikkat kutusunda gösteriliyor (6–8. gün).
- **1012:** BAP temerrüt katsayısı saat aralığı (s. 100 ve s. 122; 13. gün); döviz VİS/opsiyon fiziki teslimat son saati (bölüm sorusu cevabı 15:00, s. 132'deki tablo 16:00; 14. gün); VİOP işlem teminatlarıyla ilgili bir bölüm sorusunun cevabı EK-2 tablosuyla uyuşmuyor; teminat değerleme katsayılarının gözden geçirilme sıklığı (s. 107 BAP için yılda bir, s. 169 genel olarak yılda iki kez).
- Borçlanma aracı sahipleri kurulu (BASK) karar nisabı: 1001 notu (s. 21) Kanundaki asgari şartı (nominal tutarın en az yarısı), 1003 notu (s. 86) Tebliğ'deki daha ağır şartı (tertip kararlarında üçte iki) veriyor. Bunlar çelişki değil; 1001 3. günün sorusu "asgari" şartı soruyor, açıklamada ikisi birlikte anlatılıyor.
- Vergi oranları (1003, 19–20. günler) Şubat 2026 GİB rehberine göredir ve sık değişir.

## Klasör yapısı
```
duzey-1/
├── README.md                 ← bu dosya
├── 01_sinav_bilgileri.md     ← lisans kuralları, başarı ölçütü, yenileme (Tebliğ VII-128.7)
├── 02_konu_haritasi.md       ← 4 ders, 20 konu, 11 alt konu (SPL resmi listesi)
├── 03_kaynaklar.md           ← tüm resmi bağlantılar (notlar + birincil mevzuat)
├── konular.json              ← konu ağacı, modül kodu doğrudan okuyabilir
├── uygulama/                 ← çalışma uygulaması (index.html, içerik, sorular)
└── kaynaklar/                ← indirme listesi (README.md); PDF'ler repoda yok
    ├── calisma-notlari/      ← SPL'nin resmi çalışma notu PDF'leri (1001, 1003, 1005, 1012)
    ├── metin/                ← PDF'lerin düz metin hâli (yalnızca yerelde)
    └── resmi-belgeler/       ← e-LS sınav kılavuzu
```

## Dört ders (her biri 25 soru)
1. **1001** Dar Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları
2. **1003** Sermaye Piyasası Araçları 1
3. **1005** Yatırım Kuruluşları
4. **1012** Takas, Saklama ve Operasyon İşlemleri

Geçme şartı: her dersten en az 50, ortalama en az 60.

## Soru denetimi (Kasım 2026)
Toplam 860 soru (1001: 219, 1003: 235, 1005: 187, 1012: 219) şık örüntülerine karşı tarandı:
- Şıkları karışan sorularda doğru şık en uzun şık olma oranı %33–35; hiçbir soruda doğru şık diğerlerinden belirgin biçimde (1,3 kat ve üzeri) uzun değil.
- Sırası sabit kalan sorularda (öncüllü, sayısal) doğru cevaplar A–E arasında dengeli dağılıyor.
- Çeldiricilerdeki "yalnızca, hiçbir, her zaman" gibi ele veren kesin ifadeler azaltıldı.
- Deneme soruları, günlük ve ders sonu sorularıyla benzerlik taramasından geçirildi; tekrar eden sorular değiştirildi.

## Güncellik takibi
- Çalışma notlarının son güncellemesi 30.06.2026. Her sınav döneminden önce https://spl.com.tr/sinav-calisma-notlari/ sayfasındaki "Güncelleme Tablosu"na bakılmalı.
- Mevzuat kesim tarihi: https://spl.com.tr/mevzuat-kesim-tarihi/
