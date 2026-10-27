// Bank Soal Kelas TQA (Ta'limul Qur'an lil Aulad)
// Berisi: Tahfidz Juz 30 Lanjutan (20 Soal), Hukum Tajwid (20 Soal), dan Sirah Nabawiyah (20 Soal)

const tqaTahfidzData = [
  {
    topic: "Surah An-Naba': 1-3",
    prompt: "Lanjutkan potongan ayat Surah An-Naba' berikut:",
    arabic: "عَمَّ يَتَسَاءَلُونَ ۝ عَنِ النَّبَإِ الْعَظِيمِ",
    text: "'Tentang apakah mereka saling bertanya-tanya? Tentang berita yang besar,'",
    options: [
      "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ",
      "كَلَّا سَيَعْلَمُونَ",
      "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا",
      "وَالْجِبَالَ أَوْتَادًا"
    ],
    correct: 0,
    exp: "Ayat ke-3 An-Naba': Alladzii hum fiihi mukhtalifuun."
  },
  {
    topic: "Surah An-Naba': 6-8",
    prompt: "Lanjutkan potongan ayat Surah An-Naba' berikut:",
    arabic: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا ۝ وَالْجِبَالَ أَوْتَادًا",
    text: "'Bukankah Kami telah menjadikan bumi sebagai hamparan? Dan gunung-gunung sebagai pasak?'",
    options: [
      "وَخَلَقْنَاكُمْ أَزْوَاجًا",
      "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا",
      "وَجَعَلْنَا اللَّيْلَ لِبَاسًا",
      "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا"
    ],
    correct: 0,
    exp: "Ayat ke-8 berbunyi: Wa khalaqnaakum azwaajaa (Dan Kami menciptakan kamu berpasang-pasangan)."
  },
  {
    topic: "Surah An-Nazi'at: 1-3",
    prompt: "Lanjutkan awal Surah An-Nazi'at berikut:",
    arabic: "وَالنَّازِعَاتِ غَرْقًا ۝ وَالنَّاشِطَاتِ نَشْطًا",
    text: "'Demi (malaikat) yang mencabut (nyawa) dengan keras, dan yang mencabut dengan lemah lembut,'",
    options: [
      "وَالسَّابِحَاتِ سَبْحًا",
      "فَالسَّابِقَاتِ سَبْقًا",
      "فَالْمُدَبِّرَاتِ أَمْرًا",
      "يَوْمَ تَرْجُفُ الرَّاجِفَةُ"
    ],
    correct: 0,
    exp: "Ayat ke-3 An-Nazi'at adalah: Was-saabihaati sab-haa."
  },
  {
    topic: "Surah An-Nazi'at: 15-16",
    prompt: "Lanjutkan kisah Nabi Musa dalam Surah An-Nazi'at:",
    arabic: "هَلْ أَتَاكَ حَدِيثُ مُوسَىٰ",
    text: "'Sudahkah sampai kepadamu kisah Musa?'",
    options: [
      "إِذْ نَادَاهُ رَبُّهُ بِالْوَادِ الْمُقَدَّسِ طُوًى",
      "اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ",
      "فَقُلْ هَل لَّكَ إِلَىٰ أَن تَزَكَّىٰ",
      "فَأَرَاهُ الْآيَةَ الْكُبْرَىٰ"
    ],
    correct: 0,
    exp: "Ayat ke-16 melanjutkan: Idz naadaahu rabbuhuu bil waadil muqaddasi thuwaa."
  },
  {
    topic: "Surah 'Abasa: 1-2",
    prompt: "Lanjutkan awal ayat Surah 'Abasa berikut:",
    arabic: "عَبَسَ وَتَوَلَّىٰ",
    text: "'Dia (Muhammad) berwajah masam dan berpaling,'",
    options: [
      "أَن جَاءَهُ الْأَعْمَىٰ",
      "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ",
      "أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ",
      "أَمَّا مَنِ اسْتَغْنَىٰ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah 'Abasa: An jaa-ahul a'maa."
  },
  {
    topic: "Surah 'Abasa: 17-19",
    prompt: "Lanjutkan ayat Surah 'Abasa berikut:",
    arabic: "قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ",
    text: "'Binasalah manusia! Alangkah amat sangat kekafirannya!'",
    options: [
      "مِنْ أَيِّ شَيْءٍ خَلَقَهُ ۝ مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ",
      "ثُمَّ السَّبِيلَ يَسَّرَهُ",
      "ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ",
      "كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ"
    ],
    correct: 0,
    exp: "Ayat ke-18 dan 19: Min ayyi syai-in khalaqah, min nuthfatin khalaqahuu faqaddarah."
  },
  {
    topic: "Surah At-Takwir: 1-2",
    prompt: "Lanjutkan awal Surah At-Takwir berikut:",
    arabic: "إِذَا الشَّمْسُ كُوِّرَتْ",
    text: "'Apabila matahari digulung,'",
    options: [
      "وَإِذَا النُّجُومُ انكَدَرَتْ",
      "وَإِذَا الْجِبَالُ سُيِّرَتْ",
      "وَإِذَا الْعِشَارُ عُطِّلَتْ",
      "وَإِذَا الْبِحَارُ سُجِّرَتْ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah At-Takwir adalah: Wa idzan-nujuumun-kadarat."
  },
  {
    topic: "Surah Al-Infithar: 1-2",
    prompt: "Lanjutkan awal Surah Al-Infithar berikut:",
    arabic: "إِذَا السَّمَاءُ انفَطَرَتْ",
    text: "'Apabila langit terbelah,'",
    options: [
      "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ",
      "وَإِذَا الْبِحَارُ فُجِّرَتْ",
      "وَإِذَا الْقُبُورُ بُعْثِرَتْ",
      "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-Infithar: Wa idzal kawaakibun-tatsarat."
  },
  {
    topic: "Surah Al-Muthaffifin: 1-2",
    prompt: "Lanjutkan awal Surah Al-Muthaffifin berikut:",
    arabic: "وَيْلٌ لِّلْمُطَفِّفِينَ",
    text: "'Celakalah bagi orang-orang yang curang (dalam menakar dan menimbang)!'",
    options: [
      "الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ",
      "وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ",
      "أَلَا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ",
      "لِيَوْمٍ عَظِيمٍ"
    ],
    correct: 0,
    exp: "Ayat ke-2: Alladziina idzak-taaluu 'alan-naasi yastaufuun."
  },
  {
    topic: "Surah Al-Muthaffifin: 7",
    prompt: "Lanjutkan ayat Surah Al-Muthaffifin berikut:",
    arabic: "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ",
    text: "'Sekali-kali tidak! Sesungguhnya catatan orang yang durhaka benar-benar tersimpan dalam Sijjin.'",
    options: [
      "وَمَا أَدْرَاكَ مَا سِجِّينٌ ۝ كِتَابٌ مَّرْقُومٌ",
      "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
      "كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ",
      "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ"
    ],
    correct: 0,
    exp: "Ayat ke-8 dan 9 menjelaskan Sijjin: Wa maa adraaka maa sijjiin, kitaabum marquum."
  },
  {
    topic: "Surah Al-Insyiqaq: 7-8",
    prompt: "Lanjutkan potongan ayat Surah Al-Insyiqaq berikut:",
    arabic: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ",
    text: "'Maka adapun orang yang diberikan kitabnya dari sebelah kanannya,'",
    options: [
      "فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا",
      "وَيَنقَلِبُ إِلَىٰ أَهْلِهِ مَسْرُورًا",
      "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ",
      "فَسَوْفَ يَدْعُو ثُبُورًا"
    ],
    correct: 0,
    exp: "Ayat ke-8: Fa saufa yuhaasabu hisaabay yasiiraa (maka dia akan dihisab dengan hisab yang mudah)."
  },
  {
    topic: "Surah Al-Buruj: 11",
    prompt: "Lanjutkan ayat ke-11 Surah Al-Buruj:",
    arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ جَنَّاتٌ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ ۚ",
    text: "'...bagi mereka surga yang mengalir di bawahnya sungai-sungai; itulah kemenangan yang besar.'",
    options: [
      "ذَٰلِكَ الْفَوْزُ الْكَبِيرُ ۝ إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ",
      "إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ",
      "وَهُوَ الْغَفُورُ الْوَدُودُ",
      "ذُو الْعَرْشِ الْمَجِيدُ"
    ],
    correct: 0,
    exp: "Ayat ke-11 ditutup dengan 'Dzaalikal fauzul kabiir', lalu ayat 12: 'Inna bathsya rabbika lasyadiid'."
  },
  {
    topic: "Surah Ath-Thariq: 1-3",
    prompt: "Lanjutkan awal Surah Ath-Thariq berikut:",
    arabic: "وَالسَّمَاءِ وَالطَّارِقِ ۝ وَمَا أَدْرَاكَ مَا الطَّارِقُ",
    text: "'Demi langit dan yang datang pada malam hari, dan tahukah kamu apakah yang datang pada malam hari itu?'",
    options: [
      "النَّجْمُ الثَّاقِبُ",
      "إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ",
      "فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ",
      "خُلِقَ مِن مَّاءٍ دَافِقٍ"
    ],
    correct: 0,
    exp: "Ayat ke-3 Ath-Thariq adalah: An-najmuts-tsaaqib (yaitu bintang yang bersinar tajam)."
  },
  {
    topic: "Surah Al-A'la: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Al-A'la berikut:",
    arabic: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
    text: "'Sucikanlah nama Tuhanmu Yang Mahatinggi,'",
    options: [
      "الَّذِي خَلَقَ فَسَوَّىٰ",
      "وَالَّذِي قَدَّرَ فَهَدَىٰ",
      "وَالَّذِي أَخْرَجَ الْمَرْعَىٰ",
      "فَجَعَلَهُ غُثَاءً أَحْوَىٰ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-A'la adalah: Alladzii khalaqa fasawwaa."
  },
  {
    topic: "Surah Al-A'la: 9-10",
    prompt: "Lanjutkan ayat Surah Al-A'la berikut:",
    arabic: "فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ",
    text: "'Oleh sebab itu berikanlah peringatan karena peringatan itu bermanfaat,'",
    options: [
      "سَيَذَّكَّرُ مَن يَخْشَىٰ ۝ وَيَتَجَنَّبُهَا الْأَشْقَى",
      "الَّذِي يَصْلَى النَّارَ الْكُبْرَىٰ",
      "ثُمَّ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ",
      "قَدْ أَفْلَحَ مَن تَزَكَّىٰ"
    ],
    correct: 0,
    exp: "Ayat ke-10 dan 11: Sayadz-dzakkaru may yakhsyaa, wa yatajannabuhal asyqaa."
  },
  {
    topic: "Surah Al-Ghasyiyah: 1-3",
    prompt: "Lanjutkan awal Surah Al-Ghasyiyah berikut:",
    arabic: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ ۝ وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ",
    text: "'Sudahkah sampai kepadamu berita tentang hari kiamat? Pada hari itu banyak wajah yang tertunduk hina,'",
    options: [
      "عَامِلَةٌ نَّاصِبَةٌ",
      "تَصْلَىٰ نَارًا حَامِيَةً",
      "تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ",
      "لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ"
    ],
    correct: 0,
    exp: "Ayat ke-3 Surah Al-Ghasyiyah adalah: 'Aamilatun naashibah (bekerja keras lagi kepayahan)."
  },
  {
    topic: "Surah Al-Fajr: 1-4",
    prompt: "Lanjutkan sumpah Allah dalam awal Surah Al-Fajr berikut:",
    arabic: "وَالْفَجْرِ ۝ وَلَيَالٍ عَشْرٍ ۝ وَالشَّفْعِ وَالْوَتْرِ",
    text: "'Demi fajar, demi malam yang sepuluh, demi yang genap dan yang ganjil,'",
    options: [
      "وَاللَّيْلِ إِذَا يَسْرِ",
      "هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ",
      "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ",
      "إِرَمَ ذَاتِ الْعِمَادِ"
    ],
    correct: 0,
    exp: "Ayat ke-4 Surah Al-Fajr adalah: Wal-laili idzaa yasr (dan demi malam apabila berlalu)."
  },
  {
    topic: "Surah Al-Balad: 1-3",
    prompt: "Lanjutkan awal Surah Al-Balad berikut:",
    arabic: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ ۝ وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ",
    text: "'Aku bersumpah dengan negeri ini (Makkah), dan engkau (Muhammad) bertempat di negeri ini,'",
    options: [
      "وَوَالِدٍ وَمَا وَلَدَ",
      "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ",
      "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ",
      "يَقُولُ أَهْلَكْتُ مَالًا لُّبَدًا"
    ],
    correct: 0,
    exp: "Ayat ke-3 Surah Al-Balad adalah: Wa waalidiw wa maa walad (dan demi pertalian bapak dan anaknya)."
  },
  {
    topic: "Surah Asy-Syams: 1-3",
    prompt: "Lanjutkan awal Surah Asy-Syams berikut:",
    arabic: "وَالشَّمْسِ وَضُحَاهَا ۝ وَالْقَمَرِ إِذَا تَلَاهَا",
    text: "'Demi matahari dan sinarnya pada pagi hari, demi bulan apabila mengiringinya,'",
    options: [
      "وَالنَّهَارِ إِذَا جَلَّاهَا",
      "وَاللَّيْلِ إِذَا يَغْشَاهَا",
      "وَالسَّمَاءِ وَمَا بَنَاهَا",
      "وَالْأَرْضِ وَمَا طَحَاهَا"
    ],
    correct: 0,
    exp: "Ayat ke-3 Surah Asy-Syams adalah: Wan-nahaari idzaa jallaahaa (demi siang apabila menampakkannya)."
  },
  {
    topic: "Surah Adh-Dhuha: 1-3",
    prompt: "Lanjutkan awal Surah Adh-Dhuha berikut:",
    arabic: "وَالضُّحَىٰ ۝ وَاللَّيْلِ إِذَا سَجَىٰ",
    text: "'Demi waktu dhuha, dan demi malam apabila telah sunyi,'",
    options: [
      "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
      "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ",
      "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
      "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ"
    ],
    correct: 0,
    exp: "Ayat ke-3 Surah Adh-Dhuha adalah: Maa wadda'aka rabbuka wa maa qalaa (Tuhanmu tiada meninggalkan kamu dan tiada pula benci)."
  }
];

const tqaTajwidData = [
  {
    topic: "Nun Sukun / Tanwin",
    prompt: "Perhatikan lafadz bergaris bawah berikut. Hukum bacaan pada (نْ bertemu م) adalah ...",
    arabic: "مِّن مَّارِجٍ",
    text: "Hukum bacaan pada lafadz di atas adalah:",
    options: [
      "Idgham Bighunnah (dilebur dengan dengung)",
      "Idzhar Halqi (dibaca terang tanpa dengung)",
      "Iqlab (diubah menjadi bunyi mim)",
      "Ikhfa Syafawi (disamarkan di bibir)"
    ],
    correct: 0,
    exp: "Nun sukun bertemu huruf Mim (م) yang merupakan salah satu dari huruf Yanmu (ي ن م و), dibaca masuk ke huruf mim disertai dengung 2 harakat."
  },
  {
    topic: "Idzhar Halqi",
    prompt: "Perhatikan lafadz berikut:",
    arabic: "مِنْ خَوْفٍ",
    text: "Nun sukun bertemu huruf Kha (خ) dibaca jelas tanpa dengung karena termasuk hukum ...",
    options: [
      "Idzhar Halqi",
      "Idgham Bighunnah",
      "Ikhfa Haqiqi",
      "Iqlab"
    ],
    correct: 0,
    exp: "Huruf halqi ada 6 (Hamzah, Ha, 'Ain, Ghain, Ha, Kha). Jika nun mati bertemu huruf-huruf ini, wajib dibaca jelas (Idzhar)."
  },
  {
    topic: "Idgham Bilaghunnah",
    prompt: "Perhatikan lafadz berikut:",
    arabic: "مِّن رَّبِّهِمْ",
    text: "Nun sukun bertemu huruf Ra (ر) dilebur langsung tanpa dengung. Hukum bacaannya adalah ...",
    options: [
      "Idgham Bilaghunnah",
      "Idgham Bighunnah",
      "Idzhar Halqi",
      "Iqlab"
    ],
    correct: 0,
    exp: "Huruf Idgham Bilaghunnah ada 2 yaitu Lam (ل) dan Ra (ر). Dibaca masuk tanpa mendengung."
  },
  {
    topic: "Iqlab",
    prompt: "Perhatikan lafadz berikut:",
    arabic: "مِن بَعْدِ",
    text: "Nun sukun bertemu huruf Ba (ب) bunyinya berubah menjadi suara mim samar disertai dengung. Hukum ini adalah ...",
    options: [
      "Iqlab",
      "Idzhar Syafawi",
      "Idgham Mimi",
      "Qalqalah"
    ],
    correct: 0,
    exp: "Iqlab artinya membalik/mengganti suara nun mati menjadi mim jika bertemu huruf tunggal Ba (ب)."
  },
  {
    topic: "Pengecualian Idgham (Idzhar Wajib)",
    prompt: "Hukum Tajwid: Perhatikan contoh kata-kata berikut:",
    arabic: "دُنْيَا - قِنْوَانٌ - صِنْوَانٌ - بُنْيَانٌ",
    text: "Meskipun nun mati bertemu Ya/Wawu, kata-kata di atas TIDAK BOLEH didengungkan karena berada dalam SATU KATA. Hukum ini disebut ...",
    options: [
      "Idzhar Wajib / Mutlaq",
      "Idgham Bighunnah",
      "Ikhfa Haqiqi",
      "Mad Silah Thowilah"
    ],
    correct: 0,
    exp: "Jika nun sukun bertemu huruf idgham dalam satu kalimat bersambung, wajib dibaca jelas (Idzhar Mutlaq) agar tidak merusak makna asal kata."
  },
  {
    topic: "Tingkatan Ikhfa",
    prompt: "Hukum Tajwid: Perhatikan potongan ayat berikut:",
    arabic: "مِن قَبْلِكُمْ - مِن كِتَابٍ",
    text: "Ketika nun mati bertemu huruf Qaf (ق) atau Kaf (ك), bunyinya tebal dan jauh dari lidah depan. Tingkatan ikhfa ini dinamakan ...",
    options: [
      "Ikhfa Ab'ad (paling jauh ke bunyi dengung 'NG')",
      "Ikhfa Aqrab (paling dekat ke huruf 'N')",
      "Ikhfa Ausath (pertengahan)",
      "Idzhar Syafawi"
    ],
    correct: 0,
    exp: "Ikhfa Ab'ad terjadi pada huruf Qaf dan Kaf karena makhrajnya paling jauh dari makhraj Nun (pangkal lidah dekat tenggorokan)."
  },
  {
    topic: "Mad Wajib vs Mad Jaiz",
    prompt: "Hukum Tajwid: Perhatikan lafadz berikut:",
    arabic: "سَوَاءٌ عَلَيْهِمْ",
    text: "Huruf Mad bertemu Hamzah dalam SATU KATA BERSAMBUNG. Hukum dan panjang bacaannya adalah ...",
    options: [
      "Mad Wajib Muttashil (panjang 4 atau 5 harakat)",
      "Mad Jaiz Munfashil (panjang 2 harakat saja)",
      "Mad Lazim Mutsaqqal Kilmi (panjang 6 harakat wajib)",
      "Mad Thabi'i asli (panjang 2 harakat)"
    ],
    correct: 0,
    exp: "Mad Wajib Muttashil terjadi saat huruf mad dan hamzah bersambung dalam satu kata kalimat (Muttashil = bersambung), panjangnya 4-5 harakat (atau 6 harakat saat waqaf)."
  },
  {
    topic: "Mad Jaiz Munfashil",
    prompt: "Hukum Tajwid: Perhatikan lafadz berikut:",
    arabic: "إِنَّا أَعْطَيْنَاكَ",
    text: "Huruf Mad berada di akhir kata dan Hamzah di awal kata berikutnya secara terpisah kata. Hukum bacaannya adalah ...",
    options: [
      "Mad Jaiz Munfashil (panjang 4-5 harakat)",
      "Mad Wajib Muttashil",
      "Mad Layyin",
      "Mad Iwadl"
    ],
    correct: 0,
    exp: "Mad Jaiz Munfashil terjadi apabila huruf mad dan hamzah terpisah kata (Munfashil = terpisah)."
  },
  {
    topic: "Hukum Mim Mati: Ikhfa Syafawi",
    prompt: "Hukum Tajwid: Perhatikan lafadz berikut:",
    arabic: "تَرْمِيهِم بِحِجَارَةٍ",
    text: "Mim sukun (مْ) bertemu dengan huruf Ba (ب). Hukum mim mati ini dinamakan ...",
    options: [
      "Ikhfa Syafawi (disamarkan di bibir dengan dengung)",
      "Idzhar Syafawi",
      "Idgham Mimi",
      "Iqlab"
    ],
    correct: 0,
    exp: "Mim sukun bertemu huruf tunggal Ba (ب) disebut Ikhfa Syafawi dan dibaca samar di kedua bibir disertai dengung."
  },
  {
    topic: "Hukum Mim Mati: Idgham Mimi",
    prompt: "Hukum Tajwid: Perhatikan lafadz berikut:",
    arabic: "لَهُم مَّا يَشَاءُونَ",
    text: "Mim sukun (مْ) bertemu huruf sesamanya yaitu Mim (م). Hukum bacaannya adalah ...",
    options: [
      "Idgham Mimi / Mutamatsilain",
      "Ikhfa Syafawi",
      "Idzhar Syafawi",
      "Ghunnah Musyaddadah"
    ],
    correct: 0,
    exp: "Mim sukun bertemu huruf Mim dibaca melebur dengan dengung sempurna (Idgham Mimi)."
  },
  {
    topic: "Hukum Mim Mati: Idzhar Syafawi",
    prompt: "Hukum Tajwid: Perhatikan lafadz berikut:",
    arabic: "أَلَمْ تَرَ كَيْفَ",
    text: "Mim sukun (مْ) bertemu huruf selain Ba dan Mim (seperti huruf Ta). Hukum bacaannya adalah ...",
    options: [
      "Idzhar Syafawi (dibaca jelas di bibir tanpa dengung)",
      "Ikhfa Syafawi",
      "Idgham Mimi",
      "Iqlab"
    ],
    correct: 0,
    exp: "Idzhar Syafawi terjadi bila mim sukun bertemu 26 huruf hijaiyah selain Mim dan Ba, dibaca jelas di bibir."
  },
  {
    topic: "Ghunnah Musyaddadah",
    prompt: "Hukum Tajwid: Perhatikan lafadz berikut:",
    arabic: "إِنَّ النَّاسَ",
    text: "Huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ) memiliki hukum bacaan ...",
    options: [
      "Ghunnah Musyaddadah (wajib mendengung 2 harakat)",
      "Qalqalah",
      "Mad Thabi'i",
      "Idzhar"
    ],
    correct: 0,
    exp: "Setiap huruf Nun atau Mim yang bertasydid wajib dibaca Ghunnah (berdengung ditahan 2 ketukan)."
  },
  {
    topic: "Qalqalah Sugra",
    prompt: "Hukum Tajwid: Perhatikan kata berikut:",
    arabic: "يَجْعَلُونَ",
    text: "Huruf Jim (ج) berharakat sukun asli di tengah-tengah kata. Pantulannya tergolong pantulan ringan, disebut ...",
    options: [
      "Qalqalah Sugra (pantulan kecil di tengah kata)",
      "Qalqalah Kubra",
      "Mad Thabi'i",
      "Idzhar Halqi"
    ],
    correct: 0,
    exp: "Huruf Qalqalah (Ba, Jim, Dal, Tha, Qaf) yang berharakat sukun asli di tengah kata adalah Qalqalah Sugra."
  },
  {
    topic: "Qalqalah Kubra",
    prompt: "Hukum Tajwid: Perhatikan akhir ayat Surah Al-Lahab berikut:",
    arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝",
    text: "Huruf Ba bertasydid di akhir ayat ketika dihentikan (waqaf) memiliki pantulan yang sangat kuat, disebut ...",
    options: [
      "Qalqalah Kubra / Akbar",
      "Qalqalah Sugra",
      "Ghunnah Musyaddadah",
      "Idzhar Syafawi"
    ],
    correct: 0,
    exp: "Huruf qalqalah di akhir kalimat yang bertasydid (seperti وَتَبَّ) dibaca Qalqalah Akbar/Kubra dengan pantulan yang sangat mantul saat waqaf."
  },
  {
    topic: "Hukum Ra' (Tafkhim / Tarqiq)",
    prompt: "Hukum Tajwid: Perhatikan lafadz nama Fir'aun berikut:",
    arabic: "فِرْعَوْنَ",
    text: "Huruf Ra' sukun didahului huruf berharakat Kasrah asli dan tidak bertemu huruf isti'la. Maka huruf Ra' dibaca ...",
    options: [
      "Tarqiq (tipis)",
      "Tafkhim (tebal)",
      "Jawazul Wajhain (boleh tebal boleh tipis)",
      "Saktah (berhenti tanpa nafas)"
    ],
    correct: 0,
    exp: "Huruf Ra' sukun yang didahului kasrah asli dan tidak bertemu huruf isti'la dibaca Tarqiq (tipis)."
  },
  {
    topic: "Alif Lam Syamsiyah",
    prompt: "Hukum Tajwid: Perhatikan lafadz berikut:",
    arabic: "وَالشَّمْسِ - الرَّحْمٰنِ",
    text: "Huruf Alif Lam (ال) bertemu huruf syamsiyah (bertasydid), sehingga huruf lam tidak terbaca dan langsung masuk ke huruf berikutnya. Hukum ini disebut ...",
    options: [
      "Alif Lam Syamsiyah (Idgham Syamsiyah)",
      "Alif Lam Qamariyah (Idzhar Qamariyah)",
      "Idzhar Halqi",
      "Iqlab"
    ],
    correct: 0,
    exp: "Alif Lam Syamsiyah ditandai dengan tasydid setelah 'Al', bunyi lam lebur ke huruf berikutnya."
  },
  {
    topic: "Alif Lam Qamariyah",
    prompt: "Hukum Tajwid: Perhatikan lafadz berikut:",
    arabic: "الْقَمَرِ - الْحَمْدُ",
    text: "Huruf Alif Lam (ال) bertemu huruf qamariyah dan bertanda sukun di atas Lam sehingga huruf Lam terbaca jelas. Hukum ini disebut ...",
    options: [
      "Alif Lam Qamariyah (Idzhar Qamariyah)",
      "Alif Lam Syamsiyah",
      "Ikhfa Syafawi",
      "Qalqalah Sugra"
    ],
    correct: 0,
    exp: "Alif Lam Qamariyah dibaca jelas huruf lam sukunnya (Qamariyah = seperti bulan tampak jelas)."
  },
  {
    topic: "Mad Layyin",
    prompt: "Hukum Tajwid: Perhatikan lafadz waqaf berikut:",
    arabic: "قُرَيْشٍ - خَوْفٍ",
    text: "Huruf Wawu sukun (وْ) atau Ya' sukun (يْ) didahului harakat Fathah dan berada di akhir ayat saat berhenti (waqaf). Hukum bacaannya adalah ...",
    options: [
      "Mad Layyin (Mad Lin)",
      "Mad Thabi'i",
      "Mad Badal",
      "Mad Wajib Muttashil"
    ],
    correct: 0,
    exp: "Mad Layyin terjadi bila wau/ya sukun didahului fathah dan diwaqafkan, dibaca lunak/lembut 2, 4, atau 6 harakat."
  },
  {
    topic: "Mad 'Aridh Lissukun",
    prompt: "Hukum Tajwid: Perhatikan akhir ayat Surah Al-Fatihah:",
    arabic: "نَسْتَعِينُ ۝ - الْعَالَمِينَ ۝",
    text: "Huruf Mad Thabi'i bertemu huruf hidup di akhir ayat yang dibaca mati karena waqaf (berhenti). Hukum bacaan ini disebut ...",
    options: [
      "Mad 'Aridh Lissukun (panjang 2, 4, atau 6 harakat)",
      "Mad Iwadl",
      "Mad Silah Thowilah",
      "Mad Badal"
    ],
    correct: 0,
    exp: "Mad 'Aridh Lissukun terjadi ketika huruf mad berhenti karena sukun mendatang akibat waqaf di ujung ayat."
  },
  {
    topic: "Saktah",
    prompt: "Hukum Tajwid / Bacaan Khusus:",
    arabic: "عِوَجًا ۜ قَيِّمًا",
    text: "Berhenti sejenak selama 2 harakat TANPA mengambil nafas, lalu melanjutkan bacaan berikutnya disebut hukum bacaan ...",
    options: [
      "Saktah",
      "Imalah",
      "Tashil",
      "Isymam"
    ],
    correct: 0,
    exp: "Saktah adalah berhenti sejenak tanpa bernafas dengan niat melanjutkan membaca, seperti terdapat pada Surah Al-Kahfi ayat 1-2."
  }
];

const tqaKisahNabiData = [
  {
    topic: "Kisah Nabi Adam AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi pertama sekaligus manusia pertama yang diciptakan Allah SWT dari tanah dan dimuliakan di surga adalah ...",
    options: [
      "Nabi Adam AS",
      "Nabi Idris AS",
      "Nabi Nuh AS",
      "Nabi Ibrahim AS"
    ],
    correct: 0,
    exp: "Nabi Adam AS adalah bapak umat manusia (Abu al-Basyar) yang diciptakan langsung oleh Allah SWT."
  },
  {
    topic: "Kisah Nabi Nuh AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang berdakwah dengan penuh kesabaran selama 950 tahun dan diperintahkan membuat bahtera besar adalah ...",
    options: [
      "Nabi Nuh AS",
      "Nabi Hud AS",
      "Nabi Shalih AS",
      "Nabi Luth AS"
    ],
    correct: 0,
    exp: "Nabi Nuh AS termasuk Rasul Ulul Azmi yang membuat kapal besar penyelamat kaum mukminin dari banjir bah."
  },
  {
    topic: "Kisah Nabi Ibrahim AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang dijuluki 'Khalilullah' (Kekasih Allah) dan api menjadi dingin menyejukkan ketika ia dibakar Raja Namrud adalah ...",
    options: [
      "Nabi Ibrahim AS",
      "Nabi Ismail AS",
      "Nabi Yusuf AS",
      "Nabi Yunus AS"
    ],
    correct: 0,
    exp: "Nabi Ibrahim AS diselamatkan Allah ketika kobaran api Namrud diubah menjadi dingin dan selamat (bardaw wa salaamaa)."
  },
  {
    topic: "Kisah Nabi Ibrahim & Ismail AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi Ibrahim AS diberi ujian agung oleh Allah untuk mengorbankan putranya. Siapakah nama ibunda dari Nabi Ismail AS?",
    options: [
      "Sayyidah Hajar",
      "Sayyidah Sarah",
      "Sayyidah Asiyah",
      "Sayyidah Maryam"
    ],
    correct: 0,
    exp: "Sayyidah Hajar adalah ibunda Nabi Ismail AS yang gigih berlari antara bukit Shafa dan Marwah hingga memancarlah air zamzam."
  },
  {
    topic: "Kisah Nabi Yusuf AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang dianugerahi paras sangat tampan, diuji dimasukkan ke sumur oleh saudaranya, dan pandai menafsirkan mimpi adalah ...",
    options: [
      "Nabi Yusuf AS",
      "Nabi Musa AS",
      "Nabi Daud AS",
      "Nabi Yahya AS"
    ],
    correct: 0,
    exp: "Kisah Nabi Yusuf AS diceritakan dalam Al-Qur'an sebagai kisah terbaik (Ahsanul Qashash) yang sarat hikmah kesabaran."
  },
  {
    topic: "Kisah Nabi Musa AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Ketika Nabi Musa AS bermunajat selama 40 hari di Gunung Sinai, salah seorang pengikutnya membuat patung anak sapi emas untuk disembah. Tokoh pembuat patung tersebut bernama ...",
    options: [
      "Samiri",
      "Qarun",
      "Haman",
      "Bal'am bin Ba'ura"
    ],
    correct: 0,
    exp: "Samiri membuat patung anak sapi emas yang bisa mengeluarkan suara desuhan dan menyesatkan Bani Israil saat ditinggal Nabi Musa AS."
  },
  {
    topic: "Kisah Nabi Daud AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang dianugerahi Kitab Zabur, suara sangat merdu saat bertasbih, dan mukjizat melunakkan besi dengan tangannya adalah ...",
    options: [
      "Nabi Daud AS",
      "Nabi Sulaiman AS",
      "Nabi Zakariya AS",
      "Nabi Yahya AS"
    ],
    correct: 0,
    exp: "Nabi Daud AS memimpin Bani Israil dengan keadilan dan melunakkan besi untuk membuat baju zirah pelindung."
  },
  {
    topic: "Kisah Nabi Sulaiman AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Burung yang mengabarkan kepada Nabi Sulaiman AS tentang keberadaan Ratu Balqis dan kerajaan Saba' yang menyembah matahari adalah ...",
    options: [
      "Burung Hud-hud",
      "Burung Ababil",
      "Burung Gagak",
      "Burung Elang"
    ],
    correct: 0,
    exp: "Burung Hud-hud terbang jauh ke negeri Yaman dan membawakan kabar penting tentang kerajaan Saba' kepada Nabi Sulaiman AS."
  },
  {
    topic: "Kisah Nabi Yunus AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang berdzikir memohon ampun kepada Allah saat berada di dalam kegelapan perut ikan paus (Hut) adalah ...",
    options: [
      "Nabi Yunus AS",
      "Nabi Ayyub AS",
      "Nabi Luth AS",
      "Nabi Hud AS"
    ],
    correct: 0,
    exp: "Doa Nabi Yunus AS: Laa ilaaha illaa Anta subhaanaka innii kuntu minazh-zhaalimiin."
  },
  {
    topic: "Kisah Nabi Ayyub AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang menjadi teladan puncak kesabaran luar biasa ketika diuji penyakit parah bertahun-tahun dan kehilangan hartanya adalah ...",
    options: [
      "Nabi Ayyub AS",
      "Nabi Ya'qub AS",
      "Nabi Syu'aib AS",
      "Nabi Harun AS"
    ],
    correct: 0,
    exp: "Nabi Ayyub AS senantiasa bersabar dan lisannya tidak pernah berhenti berdzikir memuji Allah SWT."
  },
  {
    topic: "Kisah Nabi Isa AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang dilahirkan dari Sayyidah Maryam tanpa ayah, dapat berbicara sejak bayi, dan menyembuhkan orang sakit atas izin Allah adalah ...",
    options: [
      "Nabi Isa AS",
      "Nabi Yahya AS",
      "Nabi Zakariya AS",
      "Nabi Ilyas AS"
    ],
    correct: 0,
    exp: "Nabi Isa AS adalah rasul Ulul Azmi pembawa kitab Injil yang diangkat oleh Allah ke langit."
  },
  {
    topic: "Sirah: Wahyu Pertama",
    prompt: "Kuis Sirah Nabawiyah & Sejarah Islam:",
    text: "Wahyu pertama (Surah Al-'Alaq ayat 1-5) diturunkan kepada Nabi Muhammad SAW di Gua Hira melalui Malaikat Jibril ketika beliau berusia ...",
    options: [
      "40 Tahun",
      "25 Tahun",
      "30 Tahun",
      "63 Tahun"
    ],
    correct: 0,
    exp: "Rasulullah SAW diangkat menjadi nabi pada usia 40 tahun dengan turunnya wahyu pertama 'Iqra' di Gua Hira."
  },
  {
    topic: "Sirah: Piagam Madinah",
    prompt: "Kuis Sirah Nabawiyah & Sejarah Islam:",
    text: "Dokumen resmi pertama di dunia yang dirumuskan Rasulullah SAW di Madinah untuk mempersatukan kaum Muhajirin, Anshar, dan kaum Yahudi dikenal dengan nama ...",
    options: [
      "Piagam Madinah (Shahifah al-Madinah)",
      "Perjanjian Hudaibiyah",
      "Bai'at Aqabah Kubra",
      "Khutbah Wada'"
    ],
    correct: 0,
    exp: "Piagam Madinah menjamin kebebasan beragama, keadilan hukum, dan persatuan pertahanan seluruh penduduk kota Madinah."
  },
  {
    topic: "Sirah: Perang Khandaq",
    prompt: "Kuis Sirah Nabawiyah & Sejarah Islam:",
    text: "Sahabat Nabi yang mengusulkan strategi militer menggali parit besar (khandaq) mengelilingi Madinah untuk menahan serbuan 10.000 pasukan sekutu Quraisy adalah ...",
    options: [
      "Salman Al-Farisi RA",
      "Khalid bin Walid RA",
      "Ali bin Abi Thalib RA",
      "Sa'ad bin Abi Waqqash RA"
    ],
    correct: 0,
    exp: "Salman Al-Farisi yang berasal dari Persia menyarankan taktik parit pertahanan yang belum pernah dikenal oleh bangsa Arab sebelumnya."
  },
  {
    topic: "Sirah: Khulafaur Rasyidin",
    prompt: "Kuis Sirah Sahabat Nabi:",
    text: "Sahabat Nabi yang dijuluki 'Al-Faruq' (pembeda antara yang hak dan yang batil) dan menjadi Khalifah kedua adalah ...",
    options: [
      "Umar bin Khattab RA",
      "Abu Bakar Ash-Shiddiq RA",
      "Utsman bin Affan RA",
      "Ali bin Abi Thalib RA"
    ],
    correct: 0,
    exp: "Umar bin Khattab RA adalah khalifah kedua yang dikenal sangat tegas, adil, dan berwibawa tinggi."
  },
  {
    topic: "Kisah Nabi Harun AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang merupakan saudara kandung Nabi Musa AS, diutus bersamanya menemui Fir'aun karena kefasihan tutur katanya adalah ...",
    options: [
      "Nabi Harun AS",
      "Nabi Syu'aib AS",
      "Nabi Ilyas AS",
      "Nabi Dzulkifli AS"
    ],
    correct: 0,
    exp: "Nabi Harun AS adalah saudara kandung Nabi Musa AS yang memiliki tutur kata yang sangat fasih dan lembut dalam mendakwahi Fir'aun."
  },
  {
    topic: "Kisah Nabi Zakariya & Yahya AS",
    prompt: "Kuis Sirah Nabawiyah & Kisah 25 Nabi:",
    text: "Nabi yang senantiasa berdoa dengan penuh tawakal memohon keturunan yang sholeh di usia senja hingga dikaruniai seorang putra bernama Nabi Yahya AS adalah ...",
    options: [
      "Nabi Zakariya AS",
      "Nabi Ya'qub AS",
      "Nabi Ishaq AS",
      "Nabi Shaleh AS"
    ],
    correct: 0,
    exp: "Nabi Zakariya AS merawat Sayyidah Maryam di mihrab dan terus memanjatkan doa hingga dikaruniai putra Nabi Yahya AS."
  },
  {
    topic: "Sirah: Perang Badar",
    prompt: "Kuis Sirah Nabawiyah & Sejarah Islam:",
    text: "Pertempuran agung pertama umat Islam yang terjadi pada tanggal 17 Ramadhan tahun ke-2 Hijriyah, di mana 313 kaum muslimin menang atas 1.000 kaum musyrikin Quraisy adalah ...",
    options: [
      "Perang Badar",
      "Perang Uhud",
      "Perang Hunain",
      "Perang Mu'tah"
    ],
    correct: 0,
    exp: "Perang Badar dinamakan 'Yaumul Furqan' (hari pembeda kebenaran dan kebatilan) yang dimenangkan oleh kaum muslimin dengan pertolongan Allah SWT."
  },
  {
    topic: "Sirah: Fathu Makkah",
    prompt: "Kuis Sirah Nabawiyah & Sejarah Islam:",
    text: "Peristiwa pembebasan kota Makkah oleh Rasulullah SAW bersama 10.000 pasukan tanpa pertumpahan darah pada tahun ke-8 Hijriyah dikenal dengan ...",
    options: [
      "Fathu Makkah",
      "Perjanjian Hudaibiyah",
      "Haji Wada'",
      "Hijrah ke Habasyah"
    ],
    correct: 0,
    exp: "Fathu Makkah adalah kemenangan gemilang umat Islam di mana berhala-berhala di sekitar Ka'bah dibersihkan dan penduduk Makkah dimaafkan oleh Rasulullah SAW."
  },
  {
    topic: "Sirah: Gelar Sahabat Abu Bakar Ash-Shiddiq",
    prompt: "Kuis Sirah Sahabat Nabi:",
    text: "Sahabat terdekat Rasulullah SAW yang langsung membenarkan peristiwa mukjizat Isra' Mi'raj tanpa ragu sehingga diberi gelar 'Ash-Shiddiq' adalah ...",
    options: [
      "Abu Bakar RA",
      "Umar bin Khattab RA",
      "Utsman bin Affan RA",
      "Ali bin Abi Thalib RA"
    ],
    correct: 0,
    exp: "Gelar 'Ash-Shiddiq' (yang membenarkan) disematkan kepada Abu Bakar RA karena keimanan dan kepercayaannya yang mutlak kepada Rasulullah SAW."
  }
];
