// Bank Soal Kelas TPA (Taman Pendidikan Al-Qur'an)
// Berisi: Kata Rumpang (15 Soal), Sambung Ayat (15 Soal), dan Fiqih Ibadah (15 Soal)

const tpaKataRumpangData = [
  {
    topic: "Surah Al-Ikhlas: 1",
    prompt: "Pilihlah kata yang tepat untuk melengkapi ayat ini:",
    arabic: "قُلْ هُوَ اللَّهُ [...]",
    text: "Arti: 'Katakanlah (Muhammad), Dialah Allah, Yang Maha Esa'",
    options: ["أَحَدٌ", "الصَّمَدُ", "يَلِدْ", "أَحَدٍ"],
    correct: 0,
    exp: "Lafadz lengkap ayat ke-1 Surah Al-Ikhlas adalah: Qul huwallahu ahad (قُلْ هُوَ اللَّهُ أَحَدٌ)."
  },
  {
    topic: "Surah Al-Ikhlas: 2",
    prompt: "Lengkapi kata yang rumpang pada ayat berikut:",
    arabic: "اللَّهُ [...]",
    text: "Arti: 'Allah tempat meminta segala sesuatu'",
    options: ["الصَّمَدُ", "الْأَحَدُ", "الْعَلِيمُ", "الْحَكِيمُ"],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-Ikhlas adalah: Allahush-shamad (اللَّهُ الصَّمَدُ)."
  },
  {
    topic: "Surah Al-Ikhlas: 3",
    prompt: "Pilihlah kelanjutan kata yang benar untuk ayat ini:",
    arabic: "لَمْ يَلِدْ وَلَمْ [...]",
    text: "Arti: 'Dia tidak beranak dan tidak pula diperanakkan'",
    options: ["يُولَدْ", "يَلِدْ", "أَحَدٌ", "الصَّمَدُ"],
    correct: 0,
    exp: "Lafadz lengkap ayat ke-3 Surah Al-Ikhlas adalah: Lam yalid wa lam yuulad (لَمْ يَلِدْ وَلَمْ يُولَدْ)."
  },
  {
    topic: "Surah Al-Falaq: 1",
    prompt: "Lengkapi kata yang hilang pada awal Surah Al-Falaq:",
    arabic: "قُلْ أَعُوذُ بِرَبِّ [...]",
    text: "Arti: 'Katakanlah, Aku berlindung kepada Tuhan yang menguasai subuh'",
    options: ["الْفَلَقِ", "النَّاسِ", "الْعَالَمِينَ", "الْفِيلِ"],
    correct: 0,
    exp: "Ayat ke-1 Surah Al-Falaq: Qul a'uudzu birabbil falaq (بِرَبِّ الْفَلَقِ)."
  },
  {
    topic: "Surah Al-Falaq: 4",
    prompt: "Lengkapi kata yang rumpang pada ayat berikut:",
    arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي [...]",
    text: "Arti: 'Dan dari kejahatan wanita-wanita penyihir yang meniup pada buhul-buhul (talinya)'",
    options: ["الْعُقَدِ", "الْفَلَقِ", "الْوَسْوَاسِ", "غَاسِقٍ"],
    correct: 0,
    exp: "Ayat ke-4 Surah Al-Falaq berbunyi: Wa min syarrin-naffaatsaati fil 'uqad (فِي الْعُقَدِ)."
  },
  {
    topic: "Surah An-Nas: 4",
    prompt: "Lengkapi potongan ayat Surah An-Nas berikut:",
    arabic: "مِن شَرِّ الْوَسْوَاسِ [...]",
    text: "Arti: 'Dari kejahatan (bisikan) setan yang bersembunyi'",
    options: ["الْخَنَّاسِ", "النَّاسِ", "الصُّدُورِ", "الْفَلَقِ"],
    correct: 0,
    exp: "Ayat ke-4 Surah An-Nas adalah: Min syarril waswaasil khannaas (الْخَنَّاسِ)."
  },
  {
    topic: "Surah An-Nas: 5",
    prompt: "Lengkapi potongan ayat berikut dengan tepat:",
    arabic: "الَّذِي يُوَسْوِسُ فِي [...] النَّاسِ",
    text: "Arti: 'Yang membisikkan (kejahatan) ke dalam dada manusia'",
    options: ["صُدُورِ", "قُلُوبِ", "أَعْيُنِ", "أَيْدِي"],
    correct: 0,
    exp: "Lafadz ayat ke-5 An-Nas adalah: Alladzii yuwaswisu fii shuduurin-naas (فِي صُدُورِ النَّاسِ)."
  },
  {
    topic: "Surah Al-Kautsar: 1",
    prompt: "Lengkapi awal ayat Surah Al-Kautsar berikut:",
    arabic: "إِنَّا أَعْطَيْنَاكَ [...]",
    text: "Arti: 'Sungguh, Kami telah memberimu nikmat yang banyak'",
    options: ["الْكَوْثَرَ", "الْأَبْتَرَ", "الصَّلَاةَ", "الْفَتْحَ"],
    correct: 0,
    exp: "Ayat ke-1 Surah Al-Kautsar adalah: Innaa a'thainaakal kautsar (الْكَوْثَرَ)."
  },
  {
    topic: "Surah Al-Kautsar: 2",
    prompt: "Isi kata yang hilang pada ayat kedua Surah Al-Kautsar:",
    arabic: "فَصَلِّ لِرَبِّكَ [...]",
    text: "Arti: 'Maka laksanakanlah sholat karena Tuhanmu, dan berkurbanlah'",
    options: ["وَانْحَرْ", "وَاصْبِرْ", "وَاشْكُرْ", "وَاسْجُدْ"],
    correct: 0,
    exp: "Lafadz ayat ke-2 adalah: Fashalli lirabbika wanhar (وَانْحَرْ)."
  },
  {
    topic: "Surah Al-Ma'un: 1",
    prompt: "Lengkapi ayat pertama Surah Al-Ma'un:",
    arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ [...]",
    text: "Arti: 'Tahukah kamu orang yang mendustakan agama?'",
    options: ["بِالدِّينِ", "بِالْيَتِيمِ", "بِالصَّلَاةِ", "بِالْمَالِ"],
    correct: 0,
    exp: "Ayat ke-1 Surah Al-Ma'un adalah: Ara-aital ladzii yukadz-dzibu bid-diin (بِالدِّينِ)."
  },
  {
    topic: "Surah Al-Ma'un: 3",
    prompt: "Lengkapi lafadz ayat berikut:",
    arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ [...]",
    text: "Arti: 'Dan tidak mendorong memberi makan orang miskin'",
    options: ["الْمِسْكِينِ", "الْيَتِيمِ", "الصَّابِرِينَ", "الْمُصَلِّينَ"],
    correct: 0,
    exp: "Ayat ke-3 Surah Al-Ma'un adalah: Wa laa yahudh-dhu 'alaa tha'aamil miskiin."
  },
  {
    topic: "Surah Al-Fil: 5",
    prompt: "Lengkapi akhir ayat dari Surah Al-Fil berikut:",
    arabic: "فَجَعَلَهُمْ كَعَصْفٍ [...]",
    text: "Arti: 'Sehingga Dia menjadikan mereka seperti daun-daun yang dimakan (ulat)'",
    options: ["مَّأْكُولٍ", "سِجِّيلٍ", "أَبَابِيلَ", "مَّنْفُوشٍ"],
    correct: 0,
    exp: "Ayat ke-5 Surah Al-Fil adalah: Fa ja'alahum ka'ashfim ma'kuul (كَعَصْفٍ مَّأْكُولٍ)."
  },
  {
    topic: "Surah Al-Humazah: 4",
    prompt: "Lengkapi potongan ayat berikut:",
    arabic: "كَلَّا لَيُنبَذَنَّ فِي [...]",
    text: "Arti: 'Sekali-kali tidak! Pasti dia akan dilemparkan ke dalam (neraka) Huthamah'",
    options: ["الْحُطَمَةِ", "الْهَاوِيَةِ", "سَقَرَ", "جَهَنَّمَ"],
    correct: 0,
    exp: "Lafadz ayat ke-4 Al-Humazah adalah: Kallaa layumbadzanna fil huthamah (فِي الْحُطَمَةِ)."
  },
  {
    topic: "Surah At-Takatsur: 2",
    prompt: "Lengkapi kelanjutan kata pada ayat berikut:",
    arabic: "أَلْهَاكُمُ التَّكَاثُرُ ۝ حَتَّىٰ زُرْتُمُ [...]",
    text: "Arti: 'Sampai kamu masuk ke dalam kubur'",
    options: ["الْمَقَابِرَ", "النَّارَ", "الْبُيُوتَ", "الْمَسَاجِدَ"],
    correct: 0,
    exp: "Ayat ke-2 At-Takatsur adalah: Hattaa zurtumul maqaabir (الْمَقَابِرَ)."
  },
  {
    topic: "Surah Al-Qari'ah: 4",
    prompt: "Lengkapi potongan ayat ini:",
    arabic: "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ [...]",
    text: "Arti: 'Pada hari itu manusia seperti laron yang berterbangan'",
    options: ["الْمَبْثُوثِ", "الْمَنفُوشِ", "الْمَرْفُوعِ", "الْمَسْكُوبِ"],
    correct: 0,
    exp: "Lafadz ayat ke-4 Al-Qari'ah: Yauma yakuunun-naasu kal faraasyil mabtsuuts (الْمَبْثُوثِ)."
  },
  {
    topic: "Surah Al-'Adiyat: 1",
    prompt: "Lengkapi awal ayat dari Surah Al-'Adiyat:",
    arabic: "وَالْعَادِيَاتِ [...] ۝ فَالْمُورِيَاتِ قَدْحًا",
    text: "Arti: 'Demi kuda perang yang berlari kencang terengah-engah'",
    options: ["ضَبْحًا", "نَقْعًا", "صُبْحًا", "جَمْعًا"],
    correct: 0,
    exp: "Ayat ke-1 Al-'Adiyat adalah: Wal 'aadiyaati dhab-haa (ضَبْحًا)."
  },
  {
    topic: "Surah Az-Zalzalah: 1",
    prompt: "Lengkapi kata yang hilang pada ayat pertama Surah Az-Zalzalah:",
    arabic: "إِذَا زُلْزِلَتِ الْأَرْضُ [...]",
    text: "Arti: 'Apabila bumi diguncangkan dengan guncangan yang dahsyat'",
    options: ["زِلْزَالَهَا", "أَثْقَالَهَا", "أَخْبَارَهَا", "أَوْهَانَهَا"],
    correct: 0,
    exp: "Ayat ke-1 Surah Az-Zalzalah adalah: Idzaa zulzilatil ardhu zilzaalahaa (زِلْزَالَهَا)."
  },
  {
    topic: "Surah Al-Qadr: 1",
    prompt: "Lengkapi kata yang rumpang pada Surah Al-Qadr berikut:",
    arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ [...]",
    text: "Arti: 'Sesungguhnya Kami telah menurunkannya (Al-Qur'an) pada malam kemuliaan'",
    options: ["الْقَدْرِ", "الْبَدْرِ", "الْفَجْرِ", "النَّصْرِ"],
    correct: 0,
    exp: "Ayat ke-1 Surah Al-Qadr adalah: Innaa anzalnaahu fii lailatil qadr (الْقَدْرِ)."
  },
  {
    topic: "Surah An-Nashr: 1",
    prompt: "Lengkapi kata penutup pada ayat pertama Surah An-Nashr:",
    arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ [...]",
    text: "Arti: 'Apabila telah datang pertolongan Allah dan kemenangan'",
    options: ["وَالْفَتْحُ", "وَالنَّصْرُ", "وَالْفَلَقُ", "وَالْحَقُّ"],
    correct: 0,
    exp: "Ayat ke-1 Surah An-Nashr adalah: Idzaa jaa-a nashrullaahi wal fath (وَالْفَتْحُ)."
  },
  {
    topic: "Surah Al-Bayyinah: 5",
    prompt: "Lengkapi potongan ayat Surah Al-Bayyinah berikut:",
    arabic: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ [...]",
    text: "Arti: 'Padahal mereka hanya diperintah menyembah Allah dengan ikhlas menaati-Nya semata-mata karena (menjalankan)...'",
    options: ["الدِّينَ", "الْكِتَابَ", "الصَّلَاةَ", "الزَّكَاةَ"],
    correct: 0,
    exp: "Lafadz lengkapnya: Mukhlisiina lahud-diin (مُخْلِصِينَ لَهُ الدِّينَ)."
  }
];

const tpaSambungAyatData = [
  {
    topic: "Surah Al-Fatihah",
    prompt: "Sambung ayat Al-Qur'an: Lanjutkan ayat ke-5 Surah Al-Fatihah berikut:",
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    text: "'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.'",
    options: [
      "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
      "الرَّحْمَٰنِ الرَّحِيمِ",
      "مَالِكِ يَوْمِ الدِّينِ"
    ],
    correct: 0,
    exp: "Ayat ke-6 Surah Al-Fatihah adalah: Ihdinash-shiraathal mustaqiim."
  },
  {
    topic: "Surah Al-Kafirun",
    prompt: "Sambung ayat: Setelah membaca ayat ini, ayat berikutnya adalah:",
    arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
    text: "'Dan kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah.'",
    options: [
      "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ",
      "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
      "لَا أَعْبُدُ مَا تَعْبُدُونَ",
      "قُلْ يَا أَيُّهَا الْكَافِرُونَ"
    ],
    correct: 0,
    exp: "Urutan ayat ke-3 adalah 'Wa laa antum...', dilanjutkan ayat ke-4: 'Wa laa ana 'aabidum maa 'abattum'."
  },
  {
    topic: "Surah Al-Kafirun: Penutup",
    prompt: "Sambung ayat penutup Surah Al-Kafirun setelah ayat ke-5:",
    arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ۝",
    text: "'Dan kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah.'",
    options: [
      "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
      "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
      "لَا أَعْبُدُ مَا تَعْبُدُونَ",
      "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ"
    ],
    correct: 0,
    exp: "Ayat ke-6 penutup Surah Al-Kafirun adalah: Lakum diinukum wa liya diin."
  },
  {
    topic: "Surah Quraisy: 1-2",
    prompt: "Lanjutkan potongan ayat Surah Quraisy berikut:",
    arabic: "لِإِيلَافِ قُرَيْشٍ",
    text: "'Karena kebiasaan orang-orang Quraisy,'",
    options: [
      "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
      "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
      "الَّذِي أَطْعَمَهُم مِّن جُوعٍ",
      "وَآمَنَهُم مِّنْ خَوْفٍ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Quraisy adalah: Iilaafihim rihlatasy-syitaa-i wash-shaif."
  },
  {
    topic: "Surah Quraisy: 3-4",
    prompt: "Lanjutkan potongan ayat Surah Quraisy berikut:",
    arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
    text: "'Maka hendaklah mereka menyembah Tuhan (pemilik) rumah ini (Ka'bah)'",
    options: [
      "الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ",
      "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
      "لِإِيلَافِ قُرَيْشٍ",
      "فَصَلِّ لِرَبِّكَ وَانْحَرْ"
    ],
    correct: 0,
    exp: "Setelah ayat ke-3, ayat ke-4 penutup Surah Quraisy adalah: Alladzii ath'amahum min juu'iw wa aamanahum min khauf."
  },
  {
    topic: "Surah An-Nashr",
    prompt: "Lanjutkan ayat ke-2 Surah An-Nashr berikut:",
    arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
    text: "'Dan engkau melihat manusia berbondong-bondong masuk agama Allah'",
    options: [
      "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا",
      "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
      "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
      "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ"
    ],
    correct: 0,
    exp: "Ayat ke-3 penutup An-Nashr adalah: Fa sabbih bihamdi rabbika wastaghfir-h, innahuu kaana tawwaabaa."
  },
  {
    topic: "Surah Al-Lahab: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Al-Lahab berikut:",
    arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
    text: "'Binasalah kedua tangan Abu Lahab dan benar-benar binasa dia!'",
    options: [
      "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
      "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
      "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
      "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-Lahab: Maa aghnaa 'an-hu maaluhuu wa maa kasab."
  },
  {
    topic: "Surah Al-Lahab: 3-4",
    prompt: "Lanjutkan ayat ke-3 Surah Al-Lahab berikut:",
    arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
    text: "'Kelak dia akan masuk ke dalam api yang bergejolak (neraka)'",
    options: [
      "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
      "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ",
      "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
      "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ"
    ],
    correct: 0,
    exp: "Ayat ke-4 membicarakan istri Abu Lahab: Wamra-atuhuu hammaalatal hathab."
  },
  {
    topic: "Surah Al-Ma'un: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Al-Ma'un berikut:",
    arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ",
    text: "'Tahukah kamu orang yang mendustakan agama?'",
    options: [
      "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ",
      "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
      "فَوَيْلٌ لِّلْمُصَلِّينَ",
      "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-Ma'un adalah: Fadzaalikal ladzii yadu'-'ul yatiim."
  },
  {
    topic: "Surah Al-Ma'un: 4-5",
    prompt: "Lanjutkan ayat ke-4 Surah Al-Ma'un berikut:",
    arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
    text: "'Maka celakalah bagi orang-orang yang sholat'",
    options: [
      "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
      "الَّذِينَ هُمْ يُرَاءُونَ",
      "وَيَمْنَعُونَ الْمَاعُونَ",
      "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ"
    ],
    correct: 0,
    exp: "Ayat ke-5 melanjutkan: Alladziina hum 'an shalaatihim saahuun (yang lalai terhadap sholatnya)."
  },
  {
    topic: "Surah Al-Fil: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Al-Fil berikut:",
    arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
    text: "'Tidakkah engkau perhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?'",
    options: [
      "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ",
      "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
      "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ",
      "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-Fil adalah: Alam yaj'al kaidahum fii tadhliil."
  },
  {
    topic: "Surah Al-'Ashr: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Al-'Ashr berikut:",
    arabic: "وَالْعَصْرِ",
    text: "'Demi masa,'",
    options: [
      "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
      "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ",
      "وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
      "أَلْهَاكُمُ التَّكَاثُرُ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-'Ashr adalah: Innal insaana lafii khusr."
  },
  {
    topic: "Surah At-Tin: 5-6",
    prompt: "Lanjutkan ayat ke-5 Surah At-Tin berikut:",
    arabic: "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ",
    text: "'Kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya'",
    options: [
      "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
      "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ",
      "أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ",
      "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ"
    ],
    correct: 0,
    exp: "Ayat ke-6 mengecualikan orang-orang beriman: Illalladziina aamanuu wa 'amilush-shaalihaat..."
  },
  {
    topic: "Surah Al-Insyirah: 5-6",
    prompt: "Lanjutkan ayat ke-5 Surah Asy-Syarh berikut:",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    text: "'Maka sesungguhnya beserta kesulitan ada kemudahan'",
    options: [
      "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      "فَإِذَا فَرَغْتَ فَانصَبْ",
      "وَإِلَىٰ رَبِّكَ فَارْغَب",
      "وَرَفَعْنَا لَكَ ذِكْرَكَ"
    ],
    correct: 0,
    exp: "Ayat ke-6 menegaskan kembali: Inna ma'al 'usri yusraa."
  },
  {
    topic: "Surah Al-Qari'ah: 1-3",
    prompt: "Lanjutkan ayat ke-2 Surah Al-Qari'ah berikut:",
    arabic: "الْقَارِعَةُ ۝ مَا الْقَارِعَةُ",
    text: "'Hari Kiamat, Apakah hari Kiamat itu?'",
    options: [
      "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ",
      "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ",
      "وَتَكُon الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ",
      "فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ"
    ],
    correct: 0,
    exp: "Ayat ke-3 Surah Al-Qari'ah adalah: Wa maa adraaka mal qaari'ah."
  },
  {
    topic: "Surah Al-Falaq: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Al-Falaq berikut:",
    arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
    text: "'Katakanlah, Aku berlindung kepada Tuhan yang menguasai subuh (fajar),'",
    options: [
      "مِن شَرِّ مَا خَلَقَ",
      "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-Falaq adalah: Min syarri maa khalaq."
  },
  {
    topic: "Surah Az-Zalzalah: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Az-Zalzalah berikut:",
    arabic: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا",
    text: "'Apabila bumi diguncangkan dengan guncangan yang dahsyat,'",
    options: [
      "وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا",
      "وَقَالَ الْإِنسَانُ مَا لَهَا",
      "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا",
      "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Az-Zalzalah: Wa akhrajatil ardhu atsqaalahaa."
  },
  {
    topic: "Surah Al-Qadr: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Al-Qadr berikut:",
    arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
    text: "'Sesungguhnya Kami telah menurunkannya (Al-Qur'an) pada malam kemuliaan.'",
    options: [
      "وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ",
      "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
      "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا",
      "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-Qadr: Wa maa adraaka maa lailatul qadr."
  },
  {
    topic: "Surah At-Tin: 1-2",
    prompt: "Lanjutkan ayat pertama Surah At-Tin berikut:",
    arabic: "وَالتِّينِ وَالزَّيْتُونِ",
    text: "'Demi buah Tin dan buah Zaitun,'",
    options: [
      "وَطُورِ سِينِينَ",
      "وَهَٰذَا الْبَلَدِ الْأَمِينِ",
      "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah At-Tin adalah: Wa thuuri siiniin."
  },
  {
    topic: "Surah Al-Bayyinah: 1-2",
    prompt: "Lanjutkan ayat pertama Surah Al-Bayyinah berikut:",
    arabic: "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ",
    text: "'Orang-orang kafir dari golongan Ahli Kitab dan orang-orang musyrik tidak akan meninggalkan (agamanya) sampai datang kepada mereka bukti yang nyata,'",
    options: [
      "رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً",
      "فِيهَا كُتُبٌ قَيِّمَةٌ",
      "وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ",
      "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ"
    ],
    correct: 0,
    exp: "Ayat ke-2 Surah Al-Bayyinah: Rasuulum minallaahi yatluu shuhufam muthahharah."
  }
];

const tpaFiqihData = [
  {
    topic: "Ketentuan Air Suci",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Air teh atau air kopi yang dibuat dari air murni tidak sah dipakai untuk wudhu karena berstatus ...",
    options: [
      "Suci zatnya tetapi tidak dapat menyucikan",
      "Air mutanajis (terkena najis)",
      "Air mutlak yang murni",
      "Air musta'mal yang bekas pakai"
    ],
    correct: 0,
    exp: "Air yang telah dicampur bahan suci hingga berubah warna, bau, atau rasanya (seperti teh/kopi) tetap suci untuk diminum tetapi tidak sah dipakai berwudhu (Tohir ghoiru muthohhir)."
  },
  {
    topic: "Tingkatan Najis",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Air kencing bayi laki-laki berusia di bawah 2 tahun yang belum makan apapun selain ASI termasuk najis mukhaffafah. Cara menyucikannya cukup dengan ...",
    options: [
      "Memercikkan air bersih ke bagian yang terkena",
      "Membasuhnya 7 kali dengan campuran tanah",
      "Mencucinya dengan sabun sampai berbusa",
      "Mengeringkannya di bawah sinar matahari tanpa air"
    ],
    correct: 0,
    exp: "Najis mukhaffafah disucikan secara ringan, cukup dengan memercikkan air secara merata pada tempat yang terkena najis."
  },
  {
    topic: "Rukun vs Sunnah Wudhu",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Di antara gerakan berikut, manakah yang merupakan RUKUN WUDHU (jika ditinggalkan maka wudhu tidak sah)?",
    options: [
      "Mengusap sebagian kepala",
      "Berkumur-kumur",
      "Menghirup air ke hidung (istinsyaq)",
      "Membasuh kedua daun telinga"
    ],
    correct: 0,
    exp: "Rukun wudhu ada 6: Niat, membasuh muka, membasuh kedua tangan sampai siku, mengusap sebagian kepala, membasuh kedua kaki sampai mata kaki, dan tertib. Berkumur dan telinga adalah sunnah."
  },
  {
    topic: "Waktu Shalat",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Batas akhir waktu sholat Isya yang utama adalah sampai ...",
    options: [
      "Terbit fajar shadiq (masuk waktu Subuh)",
      "Tepat tengah malam pukul 00.00",
      "Matahari terbit (syuruq)",
      "Bayangan benda sama panjang dengan aslinya"
    ],
    correct: 0,
    exp: "Waktu sholat Isya membentang sejak hilangnya syafaq merah (langit petang) hingga terbit fajar shadiq saat masuk waktu Subuh."
  },
  {
    topic: "Tata Cara Shalat",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Ketika seorang makmum tertinggal satu rakaat pada sholat Maghrib berjamaah, apa yang harus ia lakukan setelah imam mengucap salam?",
    options: [
      "Berdiri menambah satu rakaat yang tertinggal",
      "Langsung ikut salam bersama imam",
      "Mengulang shalat dari awal 3 rakaat sendirian",
      "Cukup sujud sahwi dua kali lalu salam"
    ],
    correct: 0,
    exp: "Makmum masbuq tidak boleh ikut salam, melainkan berdiri menambah rakaat yang tertinggal hingga shalatnya sempurna."
  },
  {
    topic: "Pembatal Shalat",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Di antara hal-hal berikut, manakah yang MEMBATALKAN sholat?",
    options: [
      "Terbukanya aurat secara sengaja atau berbicara di luar bacaan sholat",
      "Menangis karena khusyu' mendengarkan ayat Al-Qur'an",
      "Melirik sedikit tanpa memalingkan dada dari kiblat",
      "Membaca ayat dengan suara pelan saat shalat Dhuhur"
    ],
    correct: 0,
    exp: "Berbicara dengan sengaja walau hanya dua huruf dan terbukanya aurat membatalkan shalat seketika."
  },
  {
    topic: "Rukun Shalat",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Duduk dan diam sejenak dengan tenang setelah melakukan ruku' atau sujud disebut ...",
    options: [
      "Thuma'ninah",
      "Tasyahud",
      "Takbiratul Ihram",
      "Tawadhu'"
    ],
    correct: 0,
    exp: "Thuma'ninah (berhenti sejenak sekadar lamanya membaca 'Subhanallah') adalah rukun dalam ruku', i'tidal, sujud, dan duduk di antara dua sujud."
  },
  {
    topic: "Najis Berat (Mughalladhah)",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Pakaian yang terkena air liur anjing termasuk najis berat. Cara menyucikannya adalah ...",
    options: [
      "Dibasuh 7 kali dan salah satunya dicampur debu/tanah suci",
      "Cukup dicuci dengan deterjen 1 kali",
      "Dijemur hingga kering tanpa dicuci",
      "Dibersihkan dengan tisu basah"
    ],
    correct: 0,
    exp: "Najis mughalladhah wajib dicuci 7 kali, di mana salah satu basuhannya dicampur dengan tanah atau debu yang suci."
  },
  {
    topic: "Rukun Shalat: Takbiratul Ihram",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Ucapan 'Allahu Akbar' yang menandai dimulainya shalat dan diiringi dengan niat di dalam hati dinamakan ...",
    options: [
      "Takbiratul Ihram",
      "Takbir Intiqal",
      "Tahiyyat Awal",
      "Doa Iftitah"
    ],
    correct: 0,
    exp: "Takbiratul Ihram adalah takbir pembuka yang mengharamkan perbuatan selain shalat hingga ditutup dengan salam."
  },
  {
    topic: "Syarat Sah Shalat",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Sebelum shalat dimulai, ada syarat-syarat sah yang wajib dipenuhi. Manakah yang termasuk SYARAT SAH SHALAT?",
    options: [
      "Menghadap kiblat dan menutup aurat",
      "Membaca Surah Pendek setelah Al-Fatihah",
      "Melakukan sujud sahwi",
      "Mengangkat kedua tangan saat takbir"
    ],
    correct: 0,
    exp: "Syarat sah shalat mencakup: Suci dari hadas & najis, menutup aurat, masuk waktu shalat, dan menghadap kiblat."
  },
  {
    topic: "Pembatal Wudhu",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Di antara hal-hal berikut, manakah yang DAPAT MEMBATALKAN WUDHU?",
    options: [
      "Tidur lelap dalam posisi berbaring",
      "Makan kurma dan minum air putih",
      "Memotong kuku tangan",
      "Berbicara dengan orang tua"
    ],
    correct: 0,
    exp: "Hilangnya akal (seperti tidur lelap berbaring, pingsan, atau mabuk) membatalkan wudhu."
  },
  {
    topic: "Tayamum",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Ketika tidak menemukan air setelah berusaha mencari atau karena sakit parah, seorang muslim bersuci dengan cara ...",
    options: [
      "Tayamum menggunakan debu suci",
      "Mandi air bunga",
      "Menunggu hujan turun baru shalat",
      "Cukup mengusap muka dengan kain kering"
    ],
    correct: 0,
    exp: "Tayamum adalah rukhsah (keringanan) pengganti wudhu dan mandi wajib menggunakan debu suci."
  },
  {
    topic: "Zakat Fitrah",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Berapa takaran zakat fitrah makanan pokok (beras) yang wajib dikeluarkan untuk setiap jiwa muslim?",
    options: [
      "1 Sha' (sekitar 2,5 kg atau 3,5 liter beras)",
      "10 kg beras",
      "1 kg beras",
      "Setengah liter beras"
    ],
    correct: 0,
    exp: "Kadar zakat fitrah per orang adalah 1 sha' gandum/beras, setara dengan sekitar 2,5 kg atau 3,5 liter makanan pokok."
  },
  {
    topic: "Shalat Berjamaah",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Apabila imam shalat melakukan kekeliruan (lupa rakaat), makmum laki-laki mengingatkannya dengan mengucapkan ...",
    options: [
      "Subhanallah",
      "Allahu Akbar",
      "Alhamdulillah",
      "Astaghfirullah"
    ],
    correct: 0,
    exp: "Makmum laki-laki mengingatkan imam dengan membaca 'Subhanallah', sedangkan makmum perempuan dengan cara menepuk tangan (tashfiq)."
  },
  {
    topic: "Puasa: Hal Membatalkan",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Di antara perbuatan berikut, manakah yang MEMBATALKAN puasa di siang hari?",
    options: [
      "Makan atau minum secara sengaja",
      "Makan karena benar-benar lupa",
      "Mandi basah untuk mendinginkan badan",
      "Memakai minyak wangi"
    ],
    correct: 0,
    exp: "Memasukkan makanan/minuman ke dalam rongga secara sengaja membatalkan puasa. Jika lupa, puasanya tetap sah."
  },
  {
    topic: "Rukun Iman",
    prompt: "Kuis Fiqih & Aqidah Santri:",
    text: "Berapa jumlah Rukun Iman yang wajib diyakini dalam hati setiap muslim?",
    options: [
      "6 (Enam) Perkara",
      "5 (Lima) Perkara",
      "4 (Empat) Perkara",
      "7 (Tujuh) Perkara"
    ],
    correct: 0,
    exp: "Rukun Iman ada 6: Iman kepada Allah, Malaikat, Kitab, Rasul, Hari Kiamat, dan Qada & Qadar."
  },
  {
    topic: "Adab Masuk Masjid",
    prompt: "Kuis Adab & Ibadah Santri:",
    text: "Ketika melangkahkan kaki memasuki pintu masjid, sunnah yang diajarkan Rasulullah SAW adalah mendahulukan kaki ...",
    options: [
      "Kanan seraya berdoa masuk masjid",
      "Kiri",
      "Melompat dengan kedua kaki",
      "Bebas kaki mana saja"
    ],
    correct: 0,
    exp: "Masuk masjid disunnahkan mendahulukan kaki kanan seraya berdoa: Allahummaf-tahlii abwaaba rahmatik."
  },
  {
    topic: "Sujud Sahwi",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Sujud dua kali yang dilakukan sebelum atau sesudah salam karena lupa atau ragu jumlah rakaat shalat dinamakan ...",
    options: [
      "Sujud Sahwi",
      "Sujud Tilawah",
      "Sujud Syukur",
      "Sujud Rukun"
    ],
    correct: 0,
    exp: "Sujud Sahwi dilakukan 2 kali untuk menambal kekurangan atau keraguan dalam pelaksanaan shalat."
  },
  {
    topic: "Shalat Jenazah",
    prompt: "Kuis Fiqih Ibadah Santri:",
    text: "Dalam tata cara shalat jenazah, tidak terdapat gerakan ...",
    options: [
      "Ruku' dan Sujud (shalat dilakukan berdiri dengan 4 takbir)",
      "Membaca Surat Al-Fatihah",
      "Membaca Shalawat Nabi",
      "Mengucapkan Salam"
    ],
    correct: 0,
    exp: "Shalat jenazah dilakukan dengan berdiri tegak tanpa ruku' dan sujud, diiringi 4 takbir dan doa bagi jenazah."
  },
  {
    topic: "Adab Masuk Kamar Mandi",
    prompt: "Kuis Fiqih & Thaharah Santri:",
    text: "Ketika masuk ke dalam kamar mandi / toilet untuk buang hajat, kita mendahulukan melangkahkan kaki ...",
    options: [
      "Kiri seraya membaca doa memohon perlindungan dari godaan setan",
      "Kanan",
      "Kedua kaki bersamaan",
      "Berlari cepat"
    ],
    correct: 0,
    exp: "Masuk tempat buang hajat disunnahkan mendahulukan kaki kiri seraya membaca doa perlindungan, dan keluar dengan kaki kanan."
  }
];
