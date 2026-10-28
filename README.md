# 🕌 Portal Game Edukasi Islami - TPA Walidah

Aplikasi web interaktif pembelajaran Al-Qur'an dan Pendidikan Agama Islam (PAI) untuk santri TPA Walidah. Dirancang bersih, modern, ramah layar proyektor (tanpa perlu scrolling), dan siap digunakan secara offline maupun online gratis di **GitHub Pages** (`github.io`).

---

## 🌟 Fitur Utama

1. **Halaman Terpisah Per Jenjang (Multi-Page Architecture):**
   - **`index.html`**: Portal beranda utama untuk memilih kelas dan akses Mode Ustadz.
   - **`tka.html`**: Halaman khusus Kelas TKA (Taman Kanak-kanak Al-Qur'an):
     - 🧩 *Geser & Cocokkan Huruf Hijaiyah*: Drag & drop dan tap untuk memasangkan huruf Arab dengan bunyinya (28 huruf Hijaiyah lengkap).
     - 🎈 *Tangkap Balon Hijaiyah*: Game memecahkan balon berhuruf Arab dengan skor bintang, efek suara letusan, dan dialog popup pemandu interaktif.
     - 🌟 *Kuis Rukun Islam & Iman*: 20 soal seputar Rukun Islam, Rukun Iman, dan adab cilik santri.
   - **`tpa.html`**: Halaman khusus Kelas TPA (Taman Pendidikan Al-Qur'an / SD):
     - 🔍 *Tebak Kata Rumpang Ayat*: 20 soal melengkapi satu kata yang hilang di ayat-ayat Juz 'Amma.
     - 📖 *Sambung Ayat Surat Pendek*: 20 soal melanjutkan potongan ayat berikutnya.
     - 🕌 *Fiqih Ibadah Praktis*: 20 soal thaharah, wudhu, sholat 5 waktu, najis, dan puasa.
   - **`tqa.html`**: Halaman khusus Kelas TQA (Ta'limul Qur'an lil Aulad / Lanjutan):
     - 👑 *Tahfidz Juz 30 Lanjutan*: 20 soal surat-surat panjang (*An-Naba', An-Nazi'at, 'Abasa, At-Takwir, Al-Muthaffifin, Al-A'la, Al-Ghasyiyah, dll.*).
     - 🔬 *Hukum Tajwid*: 20 soal hukum Nun Sukun/Tanwin, Mim Mati, Qalqalah, Mad, Alif Lam Syamsiyah/Qamariyah, dan Saktah.
     - 📜 *Kisah 25 Nabi & Sirah Nabawiyah*: 20 soal sirah Rasulullah SAW, para sahabat, dan sejarah para nabi.

2. **Tetap di Game Saat Di-Refresh (URL Hash & Session Persistence):**
   - Setiap game memiliki URL Hash yang unik (misal: `tpa.html#sambung-ayat`, `tka.html#balloon`).
   - Apabila halaman di-refresh (F5), aplikasi **tidak akan kembali ke awal**, melainkan tetap berada di game yang sedang aktif dan mempertahankan urutan soal serta perolehan skor saat itu.

3. **Popup Modal Feedback Cantik (Bebas Alert Browser Default):**
   - Seluruh dialog informasi, termasuk saat santri menyentuh balon yang kurang tepat di game balon, kini menggunakan **Popup Modal Interaktif** yang ramah anak, senada dengan popup kuis (menampilkan huruf target, bunyi, dan kata-kata penyemangat).
   - Penjelasan jawaban yang benar/salah muncul mengambang di tengah layar tanpa perlu scroll naik-turun.

4. **Bank Soal 20 Butir & Sistem Acak Dinamis:**
   - Setiap kategori quiz memiliki **20 butir soal lengkap**.
   - Dilengkapi pengatur jumlah soal saat bermain: **5**, **10**, **20**, atau **Semua**.
   - Setiap sesi permainan mengacak urutan soal dan mengacak urutan pilihan jawaban (*Fisher-Yates Shuffle*).

5. **Mode Ustadz (Kontrol Pengajar):**
   - 🎯 **Lihat & Tampilkan Soal Tertentu:** Ustadz/ah dapat melihat seluruh bank soal dan memilih 1 soal spesifik untuk ditampilkan di proyektor saat menunjuk santri tertentu untuk menjawab.
   - 🎲 **Acak Santri (Picker):** Mengocok nomor absen santri secara adil untuk giliran menjawab.
   - ✏️ **Buat Soal Sendiri (Per Kelas):** Ustadz/ah dapat menambahkan soal kustom baru untuk kelas **TKA**, **TPA**, maupun **TQA** secara mandiri yang otomatis tersimpan di browser (*localStorage*).

6. **Audio Efek Mandiri (Web Audio API):**
   - Efek suara 'ting' ceria, nada salah yang bersahabat, pop letusan balon, dan nada kemenangan tanpa memerlukan file MP3 eksternal.

---

## 🚀 Cara Menjalankan Offline di Laptop / Proyektor

1. Buka folder `quiz`.
2. Klik dua kali pada file [index.html](file:///d:/TPA%20Walidah/quiz/index.html).
3. Aplikasi langsung terbuka di browser (Google Chrome, Microsoft Edge, Mozilla Firefox) tanpa perlu koneksi internet.

---


© 2026 TPA Walidah • Didik Generasi Qur'ani yang Cerdas & Berakhlak Mulia.
