// Bank Huruf Hijaiyah untuk Kelas TKA
const fullHijaiyahBank = [
  { ar: "ا", name: "Alif" },
  { ar: "ب", name: "Ba" },
  { ar: "ت", name: "Ta" },
  { ar: "ث", name: "Tsa" },
  { ar: "ج", name: "Jim" },
  { ar: "ح", name: "Kha" },
  { ar: "خ", name: "Kho" },
  { ar: "د", name: "Dal" },
  { ar: "ذ", name: "Dzal" },
  { ar: "ر", name: "Ro" },
  { ar: "ز", name: "Zay" },
  { ar: "س", name: "Sin" },
  { ar: "ش", name: "Syin" },
  { ar: "ص", name: "Shod" },
  { ar: "ض", name: "Dhod" },
  { ar: "ط", name: "Tho" },
  { ar: "ظ", name: "Zho" },
  { ar: "ع", name: "'Ain" },
  { ar: "غ", name: "Ghain" },
  { ar: "ف", name: "Fa" },
  { ar: "ق", name: "Qof" },
  { ar: "ك", name: "Kaf" },
  { ar: "ل", name: "Lam" },
  { ar: "م", name: "Mim" },
  { ar: "ن", name: "Nun" },
  { ar: "و", name: "Wawu" },
  { ar: "هـ", name: "Ha" },
  { ar: "ي", name: "Ya" }
];

// Soal Ramah Anak Usia Dini (TKA): Rukun Islam, Iman, & Adab Cilik (20 Butir Soal Lengkap)
const tkaQuizData = [
  {
    topic: "Rukun Islam",
    prompt: "Ayo tebak pertanyaan rukun Islam berikut:",
    text: "Rukun Islam ada berapa jumlahnya?",
    options: ["5 (Lima)", "3 (Tiga)", "4 (Empat)", "6 (Enam)"],
    correct: 0,
    exp: "Rukun Islam ada 5: Syahadat, Sholat, Zakat, Puasa, dan Naik Haji bila mampu."
  },
  {
    topic: "Rukun Islam",
    prompt: "Ayo tebak pertanyaan rukun Islam berikut:",
    text: "Rukun Islam yang pertama adalah mengucapkan dua kalimat ...",
    options: ["Syahadat", "Takbir", "Tahmid", "Tasbih"],
    correct: 0,
    exp: "Dua kalimat syahadat: Asyhadu an laa ilaaha illallah, wa asyhadu anna Muhammadar Rasulullah."
  },
  {
    topic: "Tauhid Cilik",
    prompt: "Ayo tebak pertanyaan berikut:",
    text: "Tuhan yang menciptakan alam semesta dan wajib kita sembah adalah ...",
    options: ["Allah SWT", "Malaikat", "Pohon Besar", "Matahari"],
    correct: 0,
    exp: "Tiada Tuhan selain Allah yang Maha Esa dan Maha Penyayang."
  },
  {
    topic: "Nabi Kita",
    prompt: "Ayo tebak pertanyaan berikut:",
    text: "Nabi dan Rasul terakhir yang menjadi teladan kita semua bernama Nabi ...",
    options: ["Muhammad SAW", "Ibrahim AS", "Musa AS", "Adam AS"],
    correct: 0,
    exp: "Nabi Muhammad SAW adalah nabi terakhir pembawa ajaran Islam yang mulia."
  },
  {
    topic: "Kitab Suci",
    prompt: "Ayo tebak pertanyaan berikut:",
    text: "Kitab suci pedoman hidup umat Islam bernama Al-...",
    options: ["Al-Qur'an", "Taurat", "Injil", "Zabur"],
    correct: 0,
    exp: "Al-Qur'an adalah firman Allah yang diturunkan kepada Nabi Muhammad SAW."
  },
  {
    topic: "Arah Kiblat",
    prompt: "Ayo tebak pertanyaan berikut:",
    text: "Ketika kita mendirikan shalat, arah kiblat kita menghadap ke ...",
    options: ["Ka'bah di Baitullah", "Matahari Terbit", "Gunung", "Kutub Utara"],
    correct: 0,
    exp: "Ka'bah di Masjidil Haram (Makkah) adalah kiblat sholat umat Islam."
  },
  {
    topic: "Malaikat Allah",
    prompt: "Ayo tebak pertanyaan berikut:",
    text: "Malaikat yang bertugas menyampaikan wahyu bernama Malaikat ...",
    options: ["Jibril", "Mikail", "Israfil", "Izrail"],
    correct: 0,
    exp: "Malaikat Jibril adalah malaikat yang membawa wahyu kepada para nabi."
  },
  {
    topic: "Doa Harian Cilik",
    prompt: "Ayo tebak pertanyaan adab santri berikut:",
    text: "Sebelum makan dan sebelum mulai mengaji, kita membaca ...",
    options: ["Bismillaahir Rahmaanir Rahiim", "Alhamdulillaahi Rabbil 'Aalamiin", "Astaghfirullah", "Allahu Akbar"],
    correct: 0,
    exp: "Membaca Basmalah mengawali setiap perbuatan baik agar mendapat berkah."
  },
  {
    topic: "Doa Setelah Makan",
    prompt: "Ayo tebak pertanyaan adab santri berikut:",
    text: "Setelah selesai makan dan minum, kita bersyukur kepada Allah dengan mengucap ...",
    options: ["Alhamdulillaah", "Bismillaah", "Subhanallah", "Allahu Akbar"],
    correct: 0,
    exp: "Alhamdulillah artinya segala puji bagi Allah sebagai wujud rasa syukur kita."
  },
  {
    topic: "Bulan Puasa",
    prompt: "Ayo tebak pertanyaan berikut:",
    text: "Bulan di mana kita berpuasa selama satu bulan penuh adalah bulan ...",
    options: ["Ramadhan", "Syawal", "Muharram", "Rabiul Awwal"],
    correct: 0,
    exp: "Bulan suci Ramadhan adalah bulan diwajibkannya ibadah puasa bagi orang beriman."
  },
  {
    topic: "Shalat Subuh",
    prompt: "Ayo tebak pertanyaan shalat berikut:",
    text: "Shalat fardhu yang dikerjakan pada pagi hari sebelum matahari terbit berjumlah 2 rakaat adalah shalat ...",
    options: ["Subuh", "Dzuhur", "Ashar", "Maghrib"],
    correct: 0,
    exp: "Shalat Subuh dikerjakan saat fajar menyingsing sebanyak 2 rakaat."
  },
  {
    topic: "Shalat Maghrib",
    prompt: "Ayo tebak pertanyaan shalat berikut:",
    text: "Shalat fardhu yang dikerjakan saat matahari terbenam (petang) sebanyak 3 rakaat adalah shalat ...",
    options: ["Maghrib", "Isya", "Subuh", "Dzuhur"],
    correct: 0,
    exp: "Shalat Maghrib dikerjakan ketika waktu senja tiba berjumlah 3 rakaat."
  },
  {
    topic: "Salam Sesama Muslim",
    prompt: "Ayo tebak adab berteman berikut:",
    text: "Ucapan salam yang baik ketika bertemu dengan teman sesama muslim adalah ...",
    options: ["Assalaamu'alaikum warahmatullaah", "Selamat pagi kawan", "Halo sampai jumpa", "Permisi kawan"],
    correct: 0,
    exp: "Ucapan salam mendoakan keselamatan, rahmat, dan keberkahan bagi sesama muslim."
  },
  {
    topic: "Tempat Ibadah",
    prompt: "Ayo tebak pertanyaan berikut:",
    text: "Tempat suci bagi umat Islam untuk shalat berjamaah dan mengaji adalah ...",
    options: ["Masjid", "Gereja", "Pura", "Vihara"],
    correct: 0,
    exp: "Masjid adalah rumah Allah tempat beribadah dan berkumpulnya kaum muslimin."
  },
  {
    topic: "Wudhu",
    prompt: "Ayo tebak adab sebelum shalat berikut:",
    text: "Sebelum shalat, tubuh kita harus suci dengan cara melakukan ...",
    options: ["Wudhu dengan air bersih", "Tidur siang", "Makan kue", "Berlari-lari"],
    correct: 0,
    exp: "Wudhu menyucikan diri dari hadas kecil agar shalat kita sah."
  },
  {
    topic: "Adab Mengaji",
    prompt: "Ayo tebak adab santri TPA berikut:",
    text: "Ketika ustadz atau ustadzah sedang membacakan Al-Qur'an, sikap santri yang baik adalah ...",
    options: ["Mendengarkan dengan tenang dan tertib", "Bercanda dengan teman", "Bermain game di HP", "Tidur di kelas"],
    correct: 0,
    exp: "Mendengarkan bacaan Al-Qur'an dengan seksama akan mendatangkan rahmat dari Allah SWT."
  },
  {
    topic: "Orang Tua",
    prompt: "Ayo tebak akhlak santri sholeh berikut:",
    text: "Kepada ayah dan ibu di rumah, sikap anak sholeh yang benar adalah ...",
    options: ["Hormat, patuh, dan mendoakan mereka", "Membantah dan marah-marah", "Pura-pura tidak mendengar", "Malas membantu"],
    correct: 0,
    exp: "Berbakti kepada kedua orang tua (birrul walidain) adalah perintah agung dalam Islam."
  },
  {
    topic: "Hari Raya Islam",
    prompt: "Ayo tebak hari besar Islam berikut:",
    text: "Hari raya umat Islam setelah selesai berpuasa sebulan penuh di bulan Ramadhan dinamakan ...",
    options: ["Hari Raya Idul Fitri", "Hari Raya Idul Adha", "Tahun Baru Masehi", "Hari Kemerdekaan"],
    correct: 0,
    exp: "Idul Fitri dirayakan pada tanggal 1 Syawal sebagai hari kemenangan umat Islam."
  },
  {
    topic: "Malaikat Penjaga Surga",
    prompt: "Ayo tebak nama malaikat berikut:",
    text: "Malaikat mulia yang bertugas menjaga pintu Surga yang indah adalah Malaikat ...",
    options: ["Ridwan", "Malik", "Atid", "Raqib"],
    correct: 0,
    exp: "Malaikat Ridwan adalah penjaga surga yang penuh kenikmatan bagi orang beriman."
  },
  {
    topic: "Nabi Pertama",
    prompt: "Ayo tebak kisah nabi berikut:",
    text: "Nabi pertama yang diciptakan Allah sekaligus manusia pertama di bumi adalah Nabi ...",
    options: ["Nabi Adam AS", "Nabi Nuh AS", "Nabi Ibrahim AS", "Nabi Isa AS"],
    correct: 0,
    exp: "Nabi Adam AS adalah manusia dan nabi pertama yang diciptakan Allah SWT."
  }
];
