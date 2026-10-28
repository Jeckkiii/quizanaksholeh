# 🕌 Portal Game Edukasi Islami - TPA Walidah

Aplikasi web interaktif pembelajaran Al-Qur'an dan Pendidikan Agama Islam (PAI) untuk santri TPA Walidah. Dirancang bersih, modern, ramah layar proyektor (tanpa perlu scrolling), dan siap digunakan secara offline maupun online gratis di **GitHub Pages** (`github.io`).

---

## 🌟 Fitur Utama

1. **Navigasi Mulus & Ramah Layar Penuh Proyektor (SPA):**
   - Seluruh modul kelas (TKA, TPA, TQA) berjalan langsung di dalam satu halaman yang mulus (**Single Page Application**).
   - Saat masuk ke **Mode Layar Penuh (Fullscreen)**, Ustadz/ah dapat bebas memilih kelas, berganti game, atau membuka menu tanpa khawatir layar penuh tertutup secara tiba-tiba.
   - Tidak ada kedipan layar putih atau muat ulang file terpisah (`.html`).

2. **Dialog Konfirmasi In-App (Bebas Popup Browser Bawaan):**
   - Tombol "Keluar ke Menu" saat di dalam game menggunakan **Popup Modal In-App** dengan pilihan *"Ya, Keluar ke Menu"* atau *"Lanjut Main"*.
   - Tidak menggunakan dialog `confirm()` atau `alert()` bawaan browser yang biasanya otomatis memaksa laptop keluar dari mode Fullscreen.

3. **Tetap di Game Saat Di-Refresh (URL Hash & Session Persistence):**
   - Setiap jenjang dan modul game memiliki penanda tautan hash yang rapi (misal: `#tpa`, `#tpa-sambung-ayat`, `#tka-balloon`).
   - Apabila halaman di-refresh (F5), aplikasi **tidak akan kembali ke beranda awal**, melainkan otomatis memuat kembali game yang sedang dimainkan dan melanjutkan urutan soal serta perolehan skor saat itu.

4. **Popup Modal Balon Ceria:**
   - Saat santri memecahkan balon yang keliru pada game **Tangkap Balon Hijaiyah**, muncul popup dialog pemandu yang menampilkan huruf target dan huruf yang disentuh, tanpa menggunakan alert browser yang kaku.

5. **Bank Soal Lengkap 20 Butir Tiap Kategori:**
   - TKA: 28 Huruf Hijaiyah (Geser & Balon) + 20 Soal Rukun Islam & Iman.
   - TPA: 20 Kata Rumpang + 20 Sambung Ayat + 20 Fiqih Ibadah Praktis.
   - TQA: 20 Tahfidz Juz 30 Lanjutan + 20 Hukum Tajwid + 20 Sirah & Kisah Nabi.
   - Dilengkapi pengatur jumlah soal: **5**, **10**, **20**, atau **Semua** dengan pengacakan dinamis (*Fisher-Yates Shuffle*).

6. **Mode Ustadz (Kontrol Pengajar):**
   - 🎯 **Lihat & Tampilkan Soal Tertentu:** Memilih 1 soal spesifik untuk ditampilkan di proyektor saat menunjuk santri tertentu untuk menjawab.
   - 🎲 **Acak Santri (Picker):** Mengocok nomor absen santri secara adil untuk giliran menjawab.
   - ✏️ **Buat Soal Sendiri (Per Kelas):** Ustadz/ah dapat menambahkan soal kustom baru untuk kelas **TKA**, **TPA**, maupun **TQA** secara mandiri yang otomatis tersimpan di browser (*localStorage*).

7. **Audio Efek Mandiri (Web Audio API):**
   - Efek suara 'ting' ceria, nada salah yang bersahabat, pop letusan balon, dan nada kemenangan tanpa memerlukan file MP3 eksternal.

---

## 🚀 Cara Menjalankan Offline di Laptop / Proyektor

1. Buka folder `quiz`.
2. Klik dua kali pada file [index.html](file:///d:/TPA%20Walidah/quiz/index.html).
3. Aplikasi langsung terbuka di browser (Google Chrome, Microsoft Edge, Mozilla Firefox) tanpa perlu koneksi internet.

---


© 2026 TPA Walidah • Didik Generasi Qur'ani yang Cerdas & Berakhlak Mulia.
