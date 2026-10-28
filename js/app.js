// State Aplikasi
let currentClassId = null;
let currentGameKey = null;

// Registry Bank Soal Universal
const universalBanks = {
  "tka-rukun": tkaQuizData,
  "tpa-kata-rumpang": tpaKataRumpangData,
  "tpa-sambung-ayat": tpaSambungAyatData,
  "tpa-fiqih": tpaFiqihData,
  "tqa-tahfidz-lanjutan": tqaTahfidzData,
  "tqa-tajwid": tqaTajwidData,
  "tqa-kisah-nabi": tqaKisahNabiData
};

// Penyimpanan Sesi Kuis yang Sedang Berjalan (Agar saat refresh F5 tetap lanjut)
function saveActiveQuizSession() {
  try {
    if (currentQuizKey && currentQuizList && currentQuizList.length > 0) {
      sessionStorage.setItem('walidah_active_quiz', JSON.stringify({
        key: currentQuizKey,
        index: currentQuizIndex,
        score: quizScore,
        questions: currentQuizList,
        classId: currentClassId
      }));
    }
  } catch (e) {}
}

function clearActiveQuizSession() {
  try {
    sessionStorage.removeItem('walidah_active_quiz');
  } catch (e) {}
}

// Penyimpanan Soal Kustom Ustadz di LocalStorage (Tergrup Per Kelas)
function getCustomQuestions() {
  try {
    const raw = localStorage.getItem('walidah_custom_questions');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function getCustomQuestionsByClass(classId) {
  const all = getCustomQuestions();
  return all.filter(q => (q.classId || 'tpa') === classId);
}

function saveCustomQuestions(list) {
  try {
    localStorage.setItem('walidah_custom_questions', JSON.stringify(list));
  } catch (e) {
    console.warn("Gagal menyimpan ke localStorage:", e);
  }
}

// Pengacakan Array (Fisher-Yates)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Mode Layar Penuh (Fullscreen untuk Proyektor)
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn("Fullscreen request error:", err);
    });
    const icon = document.getElementById('fsIcon');
    if (icon) icon.innerText = '🗗';
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      const icon = document.getElementById('fsIcon');
      if (icon) icon.innerText = '⛶';
    }
  }
}

// Navigasi Antar Layar
function navigateTo(viewName) {
  playSound('click');
  const views = [
    'view-portal',
    'view-class-menu',
    'view-game-tka-match',
    'view-game-tka-balloon',
    'view-universal-quiz',
    'view-result-screen'
  ];
  views.forEach(v => {
    const el = document.getElementById(v);
    if (el) el.classList.add('hidden');
  });

  closeModalFeedback();

  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.remove('hidden');
  }
}

function goToPortal() {
  playSound('click');
  clearActiveQuizSession();
  currentClassId = null;
  window.location.hash = 'portal';
  navigateTo('portal');
}

function confirmExitGame() {
  showAppModal({
    icon: "❓",
    title: "Kembali ke Menu Game?",
    titleClass: "text-xl sm:text-2xl font-black text-slate-800 mb-1",
    borderClass: "border-amber-400",
    bodyText: "Apakah kamu ingin kembali ke daftar game? Sesi permainan saat ini akan disudahi.",
    buttonText: "Ya, Keluar ke Menu 📋",
    buttonClass: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold",
    cancelButtonText: "Lanjut Main 🎯",
    onAction: () => {
      clearActiveQuizSession();
      if (currentClassId) {
        window.location.hash = currentClassId;
        openClassMenu(currentClassId, false);
      } else {
        goToPortal();
      }
    }
  });
}

// Konfigurasi Menu 3 Kelas TPA Walidah
const classConfigs = {
  tka: {
    title: "Kelas TKA (Taman Kanak-kanak Al-Qur'an)",
    subtitle: "Mengenal Huruf Hijaiyah & Dasar Rukun Islam",
    games: [
      {
        key: "tka-match",
        title: "Geser & Pasangkan Huruf",
        badge: "Drag & Drop",
        desc: "Geser atau klik huruf Arab ke kotak bunyi pasangannya.",
        icon: "🧩",
        color: "border-amber-400 hover:border-amber-500",
        action: () => startTkaMatchGame()
      },
      {
        key: "tka-balloon",
        title: "Tangkap Balon Hijaiyah",
        badge: "Pecah Balon",
        desc: "Pecahkan balon terbang sesuai huruf yang diminta ustadz!",
        icon: "🎈",
        color: "border-sky-400 hover:border-sky-500",
        action: () => startTkaBalloonGame()
      },
      {
        key: "tka-rukun",
        title: "Kuis Cilik Rukun Islam & Iman",
        badge: "Mudah & Ceria",
        desc: "Mengenal Allah, Nabi Muhammad SAW, Al-Qur'an, Sholat, dan adab santri.",
        icon: "🌟",
        color: "border-emerald-400 hover:border-emerald-500",
        action: () => startUniversalQuiz('tka-rukun')
      }
    ]
  },
  tpa: {
    title: "Kelas TPA (Taman Pendidikan Al-Qur'an)",
    subtitle: "Surat Pendek Juz 'Amma & Fiqih Ibadah Praktis",
    games: [
      {
        key: "tpa-kata-rumpang",
        title: "Tebak Kata yang Hilang",
        badge: "Lengkapi Ayat",
        desc: "Isi 1 kata yang rumpang di tengah ayat surat pendek favorit.",
        icon: "🔍",
        color: "border-emerald-500 hover:border-emerald-600",
        action: () => startUniversalQuiz('tpa-kata-rumpang')
      },
      {
        key: "tpa-sambung-ayat",
        title: "Sambung Ayat Surat Pendek",
        badge: "Tahfidz Cilik",
        desc: "Lanjutkan potongan ayat ke ayat selanjutnya dengan tepat.",
        icon: "📖",
        color: "border-teal-500 hover:border-teal-600",
        action: () => startUniversalQuiz('tpa-sambung-ayat')
      },
      {
        key: "tpa-fiqih",
        title: "Cerdas Cermat Fiqih Ibadah",
        badge: "Fiqih Anak Sholeh",
        desc: "Uji pemahaman mendalam seputar Thaharah, Macam Air, Wudhu, dan Sholat.",
        icon: "🕌",
        color: "border-amber-500 hover:border-amber-600",
        action: () => startUniversalQuiz('tpa-fiqih')
      }
    ]
  },
  tqa: {
    title: "Kelas TQA (Ta'limul Qur'an lil Aulad)",
    subtitle: "Tahfidz Juz 30 Lanjutan, Master Tajwid & Sirah Nabawiyah",
    games: [
      {
        key: "tqa-tahfidz-lanjutan",
        title: "Tahfidz Juz 30 Lanjutan",
        badge: "Tingkat Mahir",
        desc: "Sambung ayat surat-surat panjang: An-Naba, An-Nazi'at, 'Abasa, Al-Muthaffifin, dll.",
        icon: "👑",
        color: "border-sky-500 hover:border-sky-600",
        action: () => startUniversalQuiz('tqa-tahfidz-lanjutan')
      },
      {
        key: "tqa-tajwid",
        title: "Detektif Master Tajwid",
        badge: "Hukum Tajwid",
        desc: "Pahami hukum bacaan: Idzhar Wajib, Ikhfa Ab'ad/Aqrab, Mad Wajib/Jaiz, Ra' Tafkhim/Tarqiq.",
        icon: "🔬",
        color: "border-indigo-500 hover:border-indigo-600",
        action: () => startUniversalQuiz('tqa-tajwid')
      },
      {
        key: "tqa-kisah-nabi",
        title: "Kisah 25 Nabi & Sirah Nabawiyah",
        badge: "Tarikh Islam",
        desc: "Kuis sejarah penting: Piagam Madinah, Perang Khandaq, Samiri, dan para Nabi Ulul Azmi.",
        icon: "📜",
        color: "border-teal-600 hover:border-teal-700",
        action: () => startUniversalQuiz('tqa-kisah-nabi')
      }
    ]
  }
};

function openClassMenu(classId, updateHash = true) {
  playSound('click');
  currentClassId = classId;
  const conf = classConfigs[classId];
  if (!conf) return;

  if (updateHash && window.location.hash !== '#' + classId) {
    window.location.hash = classId;
  }

  document.getElementById('classMenuTitle').innerText = conf.title;
  document.getElementById('classMenuSubtitle').innerText = conf.subtitle;

  const grid = document.getElementById('classGamesGrid');
  grid.innerHTML = '';

  conf.games.forEach(g => {
    const card = document.createElement('div');
    card.className = `rounded-3xl p-6 border-4 ${g.color} shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1.5 flex flex-col justify-between text-left cursor-pointer bg-white`;
    card.onclick = g.action;
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-3xl">${g.icon}</span>
          <span class="px-3 py-1 rounded-full bg-slate-900 text-amber-300 font-extrabold text-[11px] uppercase tracking-wide">
            ${g.badge}
          </span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-slate-800 mb-2">${g.title}</h3>
        <p class="text-slate-600 text-xs sm:text-sm font-semibold mb-6">${g.desc}</p>
      </div>
      <button class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-2xl shadow-md transition flex items-center justify-center gap-1.5">
        <span>Mainkan Game</span>
        <span>➡️</span>
      </button>
    `;
    grid.appendChild(card);
  });

  // Tampilkan Kartu Soal Kustom jika Ustadz pernah membuat soal khusus kelas ini
  const classCustomList = getCustomQuestionsByClass(classId);
  if (classCustomList.length > 0) {
    const customCard = document.createElement('div');
    customCard.className = `rounded-3xl p-6 border-4 border-amber-400 bg-amber-50/70 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1.5 flex flex-col justify-between text-left cursor-pointer bg-white`;
    customCard.onclick = () => startUniversalQuiz('custom-' + classId, classCustomList);
    customCard.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-3xl">⭐</span>
          <span class="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wide">
            ${classCustomList.length} Soal Kustom
          </span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-amber-950 mb-2">Soal Kustom Ustadz</h3>
        <p class="text-slate-600 text-xs sm:text-sm font-semibold mb-6">Koleksi soal khusus buatan ustadz/ustadzah untuk kelas ${classId.toUpperCase()}.</p>
      </div>
      <button class="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm rounded-2xl shadow-md transition flex items-center justify-center gap-1.5">
        <span>Mainkan Soal Ustadz</span>
        <span>➡️</span>
      </button>
    `;
    grid.appendChild(customCard);
  }

  navigateTo('class-menu');
}

/* =========================================================
   GAME ENGINE UNIVERSAL & POPUP MODAL (NO SCROLL!)
   ========================================================= */
let currentQuizList = [];
let currentQuizIndex = 0;
let quizScore = 0;
let currentQuizKey = "";
let questionLimit = 10;

function setQuestionLimit(val) {
  playSound('click');
  questionLimit = val;
  ['5', '10', '20', 'all'].forEach(k => {
    const btn = document.getElementById(`qCountBtn-${k}`);
    if (btn) {
      if (k === String(val)) {
        btn.className = "px-3 py-1 rounded-xl transition bg-emerald-600 text-white font-black shadow-sm";
      } else {
        btn.className = "px-3 py-1 rounded-xl transition text-slate-600 hover:bg-slate-100 font-semibold";
      }
    }
  });
}

function restoreOrStartQuiz(key) {
  try {
    const raw = sessionStorage.getItem('walidah_active_quiz');
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved && saved.key === key && Array.isArray(saved.questions) && saved.questions.length > 0) {
        currentQuizKey = saved.key;
        currentQuizList = saved.questions;
        currentQuizIndex = Math.min(saved.index || 0, saved.questions.length - 1);
        quizScore = saved.score || 0;
        const scoreEl = document.getElementById('quizLiveScore');
        if (scoreEl) scoreEl.innerText = quizScore;
        loadUniversalQuestion();
        navigateTo('universal-quiz');
        return;
      }
    }
  } catch (e) {
    console.warn("Gagal memulihkan sesi quiz:", e);
  }

  // Jika tidak ada sesi tersimpan, mulai kuis baru untuk key tersebut
  startUniversalQuiz(key, null, false);
}

function startUniversalQuiz(key, customQuestionList = null, setHash = true) {
  currentQuizKey = key;
  
  if (setHash && window.location.hash !== '#' + key) {
    window.location.hash = key;
  }
  
  let bank = customQuestionList;
  if (!bank) {
    if (key.startsWith('custom')) {
      const classKey = key.replace('custom-', '');
      bank = (classKey === 'custom' || classKey === 'all') ? getCustomQuestions() : getCustomQuestionsByClass(classKey);
    } else {
      bank = universalBanks[key];
    }
  }

  if (!bank || bank.length === 0) {
    showAppModal({
      icon: "⚠️",
      title: "Bank Soal Belum Tersedia",
      titleClass: "text-xl sm:text-2xl font-black text-amber-900 mb-1",
      borderClass: "border-amber-400",
      bodyText: "Belum ada soal untuk kategori ini atau belum ada soal kustom yang dibuat.",
      buttonText: "Mengerti 👍",
      buttonClass: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold",
      onAction: () => {}
    });
    return;
  }

  // Jika dipanggil satu soal spesifik dari Mode Ustadz
  if (customQuestionList && customQuestionList.length === 1) {
    currentQuizList = customQuestionList;
  } else {
    // Shuffle soal & pilihan
    const shuffledBank = shuffleArray(bank);
    const count = (questionLimit === 'all') ? shuffledBank.length : Math.min(questionLimit, shuffledBank.length);

    currentQuizList = shuffledBank.slice(0, count).map(q => {
      const correctText = q.options[q.correct];
      const shuffledOptions = shuffleArray(q.options);
      const newCorrectIndex = shuffledOptions.indexOf(correctText);
      return {
        ...q,
        options: shuffledOptions,
        correct: newCorrectIndex
      };
    });
  }

  currentQuizIndex = 0;
  quizScore = 0;

  document.getElementById('quizLiveScore').innerText = "0";
  loadUniversalQuestion();
  navigateTo('universal-quiz');
}

function loadUniversalQuestion() {
  saveActiveQuizSession();
  const q = currentQuizList[currentQuizIndex];
  const total = currentQuizList.length;

  document.getElementById('quizBadgeCategory').innerText = (currentClassId || 'KUIS').toUpperCase();
  document.getElementById('quizBadgeTopic').innerText = q.topic || "Latihan Bersama Ustadz";
  document.getElementById('quizProgressCount').innerText = `Soal ${currentQuizIndex + 1} dari ${total}`;

  const pct = ((currentQuizIndex) / total) * 100;
  document.getElementById('quizProgressBar').style.width = `${pct}%`;

  document.getElementById('quizPromptInstruction').innerText = q.prompt || "Pilih Jawaban yang Tepat:";

  // Teks Pertanyaan Utama
  document.getElementById('quizQuestionText').innerText = q.text || q.q || "";

  // Teks Arab Kaligrafi (Hanya tampil jika ada potongan ayat Quran / harakat yang wajib dibaca)
  const arabicBox = document.getElementById('quizArabicBox');
  if (q.arabic && q.arabic.trim() !== '') {
    arabicBox.classList.remove('hidden');
    arabicBox.innerText = q.arabic;
  } else {
    arabicBox.classList.add('hidden');
    arabicBox.innerText = '';
  }

  // Render Pilihan Jawaban
  const optContainer = document.getElementById('quizOptionsContainer');
  optContainer.innerHTML = '';

  const letters = ["A", "B", "C", "D"];
  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = "w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/50 shadow-sm transition transform hover:-translate-y-0.5 active:translate-y-0 font-bold text-slate-800 text-sm sm:text-base flex items-center justify-between group";
    btn.onclick = () => selectUniversalAnswer(idx, btn);

    btn.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center font-extrabold text-xs transition">
          ${letters[idx] || "•"}
        </span>
        <span class="font-semibold text-slate-800">${optText}</span>
      </div>
      <span class="text-slate-300 group-hover:text-emerald-500 text-lg transition">👉</span>
    `;
    optContainer.appendChild(btn);
  });
}

// Saat santri memilih jawaban -> Munculkan POPUP MODAL (Tidak merusak layout / no-scroll)
function selectUniversalAnswer(selectedIndex, clickedBtn) {
  const q = currentQuizList[currentQuizIndex];
  const isCorrect = (selectedIndex === q.correct);
  const allBtns = document.querySelectorAll('#quizOptionsContainer button');
  allBtns.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    playSound('correct');
    quizScore += 10;
    document.getElementById('quizLiveScore').innerText = quizScore;
    clickedBtn.className = "w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-100 font-bold text-emerald-950 text-sm sm:text-base flex items-center justify-between";
  } else {
    playSound('wrong');
    clickedBtn.className = "w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-red-400 bg-red-100 text-red-950 font-bold text-sm sm:text-base flex items-center justify-between";
    if (allBtns[q.correct]) {
      allBtns[q.correct].className = "w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold text-sm sm:text-base flex items-center justify-between ring-2 ring-emerald-400";
    }
  }

  saveActiveQuizSession();

  // Tampilkan Popup Modal
  openModalFeedback(isCorrect, q.exp, q.options[q.correct]);
}

let currentModalCallback = null;

function showAppModal({ icon, title, titleClass, borderClass, noticeHtml, bodyText, buttonText, buttonClass, cancelButtonText, onAction, onCancel }) {
  const modal = document.getElementById('feedbackModal');
  const modalBox = document.getElementById('modalContentBox');
  const iconEl = document.getElementById('modalIcon');
  const titleEl = document.getElementById('modalTitle');
  const noticeEl = document.getElementById('modalCorrectNotice');
  const expEl = document.getElementById('modalExplanation');
  const btnEl = document.getElementById('modalActionBtn');
  const cancelBtn = document.getElementById('modalCancelBtn');

  if (!modal) return;

  if (iconEl) iconEl.innerText = icon || "🌟";
  if (titleEl) {
    titleEl.innerText = title || "Informasi";
    titleEl.className = titleClass || "text-xl sm:text-2xl font-black text-emerald-800 mb-1";
  }
  if (modalBox) {
    modalBox.className = `bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border-4 ${borderClass || 'border-emerald-400'} shadow-2xl text-center animate-pop relative`;
  }

  if (noticeEl) {
    if (noticeHtml) {
      noticeEl.innerHTML = noticeHtml;
      noticeEl.classList.remove('hidden');
    } else {
      noticeEl.classList.add('hidden');
    }
  }

  if (expEl) expEl.innerText = bodyText || "";
  if (btnEl) {
    btnEl.innerText = buttonText || "Lanjut ➡️";
    btnEl.className = `w-full py-3.5 ${buttonClass || 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white'} font-black text-base sm:text-lg rounded-2xl shadow-xl transition active:scale-95`;
  }

  if (cancelBtn) {
    if (cancelButtonText) {
      cancelBtn.innerText = cancelButtonText;
      cancelBtn.classList.remove('hidden');
      cancelBtn.onclick = () => {
        playSound('click');
        closeModalFeedback();
        if (typeof onCancel === 'function') onCancel();
      };
    } else {
      cancelBtn.classList.add('hidden');
    }
  }

  currentModalCallback = onAction || null;
  modal.classList.remove('hidden');
}

function handleModalActionClick() {
  playSound('click');
  closeModalFeedback();
  if (typeof currentModalCallback === 'function') {
    const cb = currentModalCallback;
    currentModalCallback = null;
    cb();
  } else {
    modalNextAction();
  }
}

function openModalFeedback(isCorrect, explanation, correctAnswerText) {
  if (isCorrect) {
    showAppModal({
      icon: "🌟",
      title: "Mumtaz! Jawaban Benar!",
      titleClass: "text-xl sm:text-2xl font-black text-emerald-800 mb-1",
      borderClass: "border-emerald-400",
      noticeHtml: null,
      bodyText: explanation || "Masya Allah, jawabanmu tepat sekali!",
      buttonText: "Lanjut ke Soal Berikutnya ➡️",
      buttonClass: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white",
      onAction: () => modalNextAction()
    });
  } else {
    showAppModal({
      icon: "💡",
      title: "Kurang Tepat, Mari Pelajari!",
      titleClass: "text-xl sm:text-2xl font-black text-amber-900 mb-1",
      borderClass: "border-amber-400",
      noticeHtml: `Jawaban yang tepat: <strong class="text-emerald-700">${correctAnswerText}</strong>`,
      bodyText: explanation || "Perhatikan dan pelajari kaidahnya dengan seksama.",
      buttonText: "Lanjut ke Soal Berikutnya ➡️",
      buttonClass: "bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-700 hover:to-emerald-700 text-white",
      onAction: () => modalNextAction()
    });
  }
}

function closeModalFeedback() {
  const modal = document.getElementById('feedbackModal');
  if (modal) modal.classList.add('hidden');
}

function modalNextAction() {
  playSound('click');
  closeModalFeedback();
  currentQuizIndex++;
  if (currentQuizIndex < currentQuizList.length) {
    loadUniversalQuestion();
  } else {
    showFinalResults();
  }
}

function showFinalResults() {
  clearActiveQuizSession();
  document.getElementById('quizProgressBar').style.width = "100%";
  playSound('fanfare');
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });

  const scoreEl = document.getElementById('resultFinalScore');
  scoreEl.innerText = quizScore;

  const totalSoal = currentQuizList.length;
  const benar = Math.round(quizScore / 10);
  document.getElementById('resultScoreBreakdown').innerText = `Menjawab Benar ${benar} dari ${totalSoal} Soal`;

  const emoji = document.getElementById('resultEmoji');
  const sub = document.getElementById('resultSubtitle');

  if (quizScore >= 80) {
    emoji.innerText = "🏆";
    sub.innerText = "Mumtaz! Hafalan dan pemahaman santri sangat hebat! Pertahankan ya!";
  } else if (quizScore >= 60) {
    emoji.innerText = "⭐";
    sub.innerText = "Bagus sekali! Santri sudah menguasai materi dengan baik.";
  } else {
    emoji.innerText = "🌱";
    sub.innerText = "Tetap semangat belajar! Ayo ulangi lagi agar semakin mutqin pemahamannya!";
  }

  navigateTo('result-screen');
}

function playAgainSameGame() {
  clearActiveQuizSession();
  if (currentQuizKey) {
    startUniversalQuiz(currentQuizKey);
  } else if (currentClassId && currentClassId !== 'portal') {
    openClassMenu(currentClassId);
  } else {
    window.location.href = 'index.html';
  }
}

/* =========================================================
   MODE USTADZ: PREVIEW SOAL, LUNCURKAN SOAL KE SANTRI, & BUAT SOAL
   ========================================================= */
function openTeacherMode() {
  playSound('click');
  renderTeacherQuestionsList('tpa-sambung-ayat');
  renderCustomQuestionsList();
  document.getElementById('teacherModal').classList.remove('hidden');
}

function closeTeacherMode() {
  playSound('click');
  document.getElementById('teacherModal').classList.add('hidden');
}

function switchTeacherTab(tabName) {
  playSound('click');
  const tabs = ['tab-preview', 'tab-create'];
  tabs.forEach(t => {
    document.getElementById(t).classList.add('hidden');
    document.getElementById(`btn-${t}`).classList.remove('bg-emerald-600', 'text-white');
    document.getElementById(`btn-${t}`).classList.add('bg-slate-100', 'text-slate-700');
  });

  document.getElementById(`tab-${tabName}`).classList.remove('hidden');
  document.getElementById(`btn-tab-${tabName}`).classList.add('bg-emerald-600', 'text-white');
  document.getElementById(`btn-tab-${tabName}`).classList.remove('bg-slate-100', 'text-slate-700');
}

function renderTeacherQuestionsList(key) {
  const container = document.getElementById('teacherQuestionsContainer');
  container.innerHTML = '';
  
  let list = [];
  if (key === 'custom-all' || key === 'custom') {
    list = getCustomQuestions();
  } else if (key === 'custom-tka') {
    list = getCustomQuestionsByClass('tka');
  } else if (key === 'custom-tpa') {
    list = getCustomQuestionsByClass('tpa');
  } else if (key === 'custom-tqa') {
    list = getCustomQuestionsByClass('tqa');
  } else {
    list = universalBanks[key] || [];
  }

  if (list.length === 0) {
    container.innerHTML = '<p class="text-sm text-slate-500 italic p-4 text-center">Belum ada soal dalam kategori ini.</p>';
    return;
  }

  list.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = "p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3";
    
    let arabicSnippet = q.arabic ? `<div class="font-arabic text-lg text-emerald-800 font-bold">${q.arabic}</div>` : '';
    const classBadge = q.classId ? `<span class="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">${q.classId}</span>` : '';

    card.innerHTML = `
      <div class="flex-grow">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">#${idx + 1}</span>
          ${classBadge}
          <span class="text-xs font-bold text-amber-700">${q.topic || 'Soal'}</span>
        </div>
        ${arabicSnippet}
        <p class="text-xs sm:text-sm font-semibold text-slate-800">${q.text || q.prompt || ''}</p>
        <p class="text-xs text-slate-500 mt-1">Jawaban benar: <strong class="text-emerald-700">${q.options[q.correct]}</strong></p>
      </div>
      <button onclick="launchSingleQuestionFromTeacher('${key}', ${idx})" class="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition active:scale-95 whitespace-nowrap">
        ▶️ Tampilkan ke Santri
      </button>
    `;
    container.appendChild(card);
  });
}

function launchSingleQuestionFromTeacher(key, index) {
  closeTeacherMode();
  let list = [];
  if (key === 'custom-all' || key === 'custom') {
    list = getCustomQuestions();
  } else if (key === 'custom-tka') {
    list = getCustomQuestionsByClass('tka');
  } else if (key === 'custom-tpa') {
    list = getCustomQuestionsByClass('tpa');
  } else if (key === 'custom-tqa') {
    list = getCustomQuestionsByClass('tqa');
  } else {
    list = universalBanks[key] || [];
  }

  if (!list || !list[index]) return;

  const singleQuestion = [list[index]];
  startUniversalQuiz(key, singleQuestion);
}

function pickRandomStudentNumber() {
  playSound('fanfare');
  const max = parseInt(document.getElementById('maxSantriInput').value) || 25;
  const picked = Math.floor(Math.random() * max) + 1;
  const target = document.getElementById('pickedStudentBadge');
  target.innerText = `🎯 Giliran Santri No. Absen: ${picked}`;
  target.classList.remove('hidden');
}

// Simpan Soal Kustom Baru (Tergrup Per Kelas)
function handleCreateCustomQuestion(e) {
  if (e) e.preventDefault();
  const targetClass = document.getElementById('customClassSelect').value || 'tpa';
  const qText = document.getElementById('customQText').value.trim();
  const optA = document.getElementById('customOptA').value.trim();
  const optB = document.getElementById('customOptB').value.trim();
  const optC = document.getElementById('customOptC').value.trim();
  const optD = document.getElementById('customOptD').value.trim();
  const correctVal = parseInt(document.getElementById('customCorrect').value) || 0;
  const arabicText = document.getElementById('customArabic').value.trim();
  const expText = document.getElementById('customExp').value.trim();

  if (!qText || !optA || !optB || !optC || !optD) {
    showAppModal({
      icon: "⚠️",
      title: "Form Belum Lengkap",
      titleClass: "text-xl sm:text-2xl font-black text-rose-800 mb-1",
      borderClass: "border-rose-400",
      bodyText: "Harap isi pertanyaan dan seluruh pilihan jawaban A, B, C, dan D dengan lengkap.",
      buttonText: "Perbaiki ✍️",
      buttonClass: "bg-rose-500 hover:bg-rose-600 text-white font-bold",
      onAction: () => {}
    });
    return;
  }

  const newQuestion = {
    classId: targetClass,
    topic: `Soal Kustom ${targetClass.toUpperCase()}`,
    prompt: "Jawablah pertanyaan berikut:",
    text: qText,
    arabic: arabicText || null,
    options: [optA, optB, optC, optD],
    correct: correctVal,
    exp: expText || "Jawaban telah diverifikasi oleh Ustadz/Ustadzah."
  };

  const list = getCustomQuestions();
  list.push(newQuestion);
  saveCustomQuestions(list);

  // Reset form
  document.getElementById('customQText').value = '';
  document.getElementById('customOptA').value = '';
  document.getElementById('customOptB').value = '';
  document.getElementById('customOptC').value = '';
  document.getElementById('customOptD').value = '';
  document.getElementById('customArabic').value = '';
  document.getElementById('customExp').value = '';

  playSound('correct');
  showAppModal({
    icon: "🎉",
    title: "Alhamdulillah! Soal Berhasil Disimpan!",
    titleClass: "text-xl sm:text-2xl font-black text-emerald-800 mb-1",
    borderClass: "border-emerald-400",
    bodyText: `Soal baru untuk kelas ${targetClass.toUpperCase()} telah tersimpan dan siap dimainkan!`,
    buttonText: "Lihat Koleksi Soal 👍",
    buttonClass: "bg-emerald-600 hover:bg-emerald-700 text-white font-bold",
    onAction: () => {}
  });
  renderCustomQuestionsList();
}

let currentCustomFilter = 'all';

function filterCustomList(target) {
  playSound('click');
  currentCustomFilter = target;
  ['all', 'tka', 'tpa', 'tqa'].forEach(k => {
    const btn = document.getElementById(`customFilter-${k}`);
    if (btn) {
      if (k === target) {
        btn.className = "px-2.5 py-1 rounded-lg bg-emerald-600 text-white shadow-sm font-bold";
      } else {
        btn.className = "px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold";
      }
    }
  });
  renderCustomQuestionsList();
}

function renderCustomQuestionsList() {
  const all = getCustomQuestions();
  const list = currentCustomFilter === 'all' ? all : all.filter(q => (q.classId || 'tpa') === currentCustomFilter);
  const container = document.getElementById('customListContainer');
  if (!container) return;
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = '<p class="text-xs text-slate-400 italic p-3 text-center">Belum ada soal kustom untuk kategori ini.</p>';
    return;
  }

  list.forEach((q) => {
    const originalIndex = all.indexOf(q);
    const item = document.createElement('div');
    item.className = "flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-xs gap-2";
    const classBadgeColor = q.classId === 'tka' ? 'bg-amber-100 text-amber-800' : q.classId === 'tqa' ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-800';
    
    item.innerHTML = `
      <div class="truncate flex-grow">
        <span class="text-[10px] font-black px-1.5 py-0.5 rounded-md ${classBadgeColor} uppercase">${(q.classId || 'tpa').toUpperCase()}</span>
        <span class="font-semibold text-slate-800 ml-1">${q.text}</span>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0">
        <button onclick="launchSingleQuestionFromTeacher('custom', ${originalIndex})" class="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold">Main</button>
        <button onclick="deleteCustomQuestion(${originalIndex})" class="px-2 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-bold">Hapus</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function deleteCustomQuestion(index) {
  if (confirm("Hapus soal kustom ini?")) {
    const list = getCustomQuestions();
    list.splice(index, 1);
    saveCustomQuestions(list);
    renderCustomQuestionsList();
  }
}

function playFilteredCustomQuestions() {
  const all = getCustomQuestions();
  const list = currentCustomFilter === 'all' ? all : all.filter(q => (q.classId || 'tpa') === currentCustomFilter);
  if (list.length === 0) {
    showAppModal({
      icon: "ℹ️",
      title: "Koleksi Masih Kosong",
      titleClass: "text-xl sm:text-2xl font-black text-amber-900 mb-1",
      borderClass: "border-amber-400",
      bodyText: "Belum ada soal kustom untuk kategori ini. Silakan buat soal baru terlebih dahulu di tab 'Buat Soal Sendiri'.",
      buttonText: "Siap Ustadz 👍",
      buttonClass: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold",
      onAction: () => {}
    });
    return;
  }
  closeTeacherMode();
  startUniversalQuiz('custom-' + currentCustomFilter, list);
}

/* =========================================================
   GAME TKA 1: PENCOCOKAN / GESER HURUF HIJAIYAH (DRAG & DROP)
   ========================================================= */
let tkaScore = 0;
let selectedLetter = null;
let currentRoundPairs = [];

function startTkaMatchGame(setHash = true) {
  if (setHash) window.location.hash = 'tka-match';
  currentClassId = 'tka';
  tkaScore = 0;
  const scoreEl = document.getElementById('tkaMatchScore');
  if (scoreEl) scoreEl.innerText = tkaScore;
  setupTkaMatchGame();
  navigateTo('game-tka-match');
}

function setupTkaMatchGame() {
  const nextBtn = document.getElementById('tkaNextRoundBtn');
  if (nextBtn) nextBtn.classList.add('hidden');
  selectedLetter = null;

  const shuffled = shuffleArray(fullHijaiyahBank);
  currentRoundPairs = shuffled.slice(0, 4);

  // Sumber huruf Arab
  const lettersToPick = shuffleArray(currentRoundPairs);
  const sourceContainer = document.getElementById('tkaLetterSource');
  if (!sourceContainer) return;
  sourceContainer.innerHTML = '';

  lettersToPick.forEach(item => {
    const btn = document.createElement('button');
    btn.id = `src-${item.name}`;
    btn.draggable = true;
    btn.className = "h-24 bg-white hover:bg-amber-100 border-4 border-amber-300 rounded-2xl flex flex-col items-center justify-center font-arabic text-4xl text-amber-950 font-bold shadow-md transition transform active:scale-95 cursor-grab active:cursor-grabbing";
    btn.innerText = item.ar;
    btn.onclick = () => selectSourceLetter(item, btn);
    btn.ondragstart = (e) => {
      e.dataTransfer.setData("text/plain", item.name);
      selectSourceLetter(item, btn);
    };
    sourceContainer.appendChild(btn);
  });

  // Target kotak sasaran
  const targetsToMatch = shuffleArray(currentRoundPairs);
  const targetsContainer = document.getElementById('tkaLetterTargets');
  if (!targetsContainer) return;
  targetsContainer.innerHTML = '';

  targetsToMatch.forEach(item => {
    const row = document.createElement('div');
    row.id = `target-${item.name}`;
    row.className = "flex items-center justify-between p-3.5 bg-white border-2 border-dashed border-emerald-300 rounded-2xl cursor-pointer hover:border-emerald-500 transition";
    row.onclick = () => tryMatchTarget(item, row);
    row.ondragover = (e) => {
      e.preventDefault();
      row.classList.add('bg-emerald-100', 'border-emerald-500', 'scale-[1.02]');
    };
    row.ondragleave = () => {
      row.classList.remove('bg-emerald-100', 'border-emerald-500', 'scale-[1.02]');
    };
    row.ondrop = (e) => {
      e.preventDefault();
      row.classList.remove('bg-emerald-100', 'border-emerald-500', 'scale-[1.02]');
      const droppedName = e.dataTransfer.getData("text/plain");
      const found = currentRoundPairs.find(p => p.name === droppedName);
      if (found) {
        selectedLetter = found;
        tryMatchTarget(item, row);
      }
    };
    row.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">?</span>
        <span class="font-extrabold text-base sm:text-lg text-emerald-950">Bunyi: ${item.name}</span>
      </div>
      <div id="target-slot-${item.name}" class="w-14 h-14 rounded-xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center font-arabic text-2xl font-bold text-slate-400">
        ---
      </div>
    `;
    targetsContainer.appendChild(row);
  });
}

function selectSourceLetter(item, btnElement) {
  playSound('click');
  selectedLetter = item;
  const allSrc = document.querySelectorAll('#tkaLetterSource button');
  allSrc.forEach(b => b.classList.remove('ring-4', 'ring-emerald-500', 'bg-amber-200'));
  btnElement.classList.add('ring-4', 'ring-emerald-500', 'bg-amber-200');
}

function tryMatchTarget(targetItem, rowElement) {
  if (!selectedLetter) {
    showAppModal({
      icon: "🧩",
      title: "Pilih Huruf Terlebih Dahulu",
      titleClass: "text-xl sm:text-2xl font-black text-amber-900 mb-1",
      borderClass: "border-amber-400",
      bodyText: "Klik atau geser salah satu kartu huruf Arab di sebelah kiri terlebih dahulu ya!",
      buttonText: "Mengerti 🎯",
      buttonClass: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold",
      onAction: () => {}
    });
    return;
  }

  if (selectedLetter.name === targetItem.name) {
    playSound('correct');
    tkaScore += 25;
    const scoreEl = document.getElementById('tkaMatchScore');
    if (scoreEl) scoreEl.innerText = tkaScore;

    const slot = document.getElementById(`target-slot-${targetItem.name}`);
    if (slot) {
      slot.innerText = selectedLetter.ar;
      slot.className = "w-14 h-14 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-arabic text-3xl font-bold shadow-md";
    }

    rowElement.className = "flex items-center justify-between p-3.5 bg-emerald-50 border-2 border-emerald-500 rounded-2xl pointer-events-none";

    const srcBtn = document.getElementById(`src-${selectedLetter.name}`);
    if (srcBtn) {
      srcBtn.disabled = true;
      srcBtn.classList.remove('ring-4', 'ring-emerald-500', 'bg-amber-200');
      srcBtn.className += " opacity-30 cursor-not-allowed bg-slate-200 border-slate-300";
    }
    selectedLetter = null;

    const disabledBtns = document.querySelectorAll('#tkaLetterSource button:disabled');
    if (disabledBtns.length === 4) {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      playSound('fanfare');
      const nextBtn = document.getElementById('tkaNextRoundBtn');
      if (nextBtn) nextBtn.classList.remove('hidden');
    }
  } else {
    playSound('wrong');
    rowElement.classList.add('bg-red-100', 'border-red-400');
    setTimeout(() => {
      rowElement.classList.remove('bg-red-100', 'border-red-400');
    }, 500);
  }
}

/* =========================================================
   GAME TKA 2: PECAHKAN BALON HIJAIYAH (POP BALLOON)
   ========================================================= */
let balloonStars = 0;
let targetBalloon = null;

function startTkaBalloonGame(setHash = true) {
  if (setHash) window.location.hash = 'tka-balloon';
  currentClassId = 'tka';
  balloonStars = 0;
  const starsEl = document.getElementById('balloonStars');
  if (starsEl) starsEl.innerText = balloonStars;
  initBalloonGame();
  navigateTo('game-tka-balloon');
}

function initBalloonGame() {
  const fb = document.getElementById('balloonFeedback');
  if (fb) fb.classList.add('hidden');
  const shuffled = shuffleArray(fullHijaiyahBank);
  targetBalloon = shuffled[0];

  const letterEl = document.getElementById('targetBalloonLetter');
  if (letterEl) letterEl.innerText = targetBalloon.ar;
  const nameEl = document.getElementById('targetBalloonName');
  if (nameEl) nameEl.innerText = `Huruf "${targetBalloon.name}"`;

  const options = shuffleArray([targetBalloon, shuffled[1], shuffled[2], shuffled[3]]);
  const balloonColors = [
    "bg-gradient-to-t from-red-500 to-red-400 text-white",
    "bg-gradient-to-t from-amber-400 to-amber-300 text-amber-950",
    "bg-gradient-to-t from-emerald-500 to-emerald-400 text-white",
    "bg-gradient-to-t from-sky-500 to-sky-400 text-white"
  ];

  const grid = document.getElementById('balloonGrid');
  if (!grid) return;
  grid.innerHTML = '';

  options.forEach((item, index) => {
    const balloon = document.createElement('div');
    balloon.className = `balloon-item w-28 h-36 sm:w-32 sm:h-40 rounded-full flex flex-col items-center justify-center font-arabic text-4xl sm:text-5xl font-bold cursor-pointer shadow-xl relative ${balloonColors[index % balloonColors.length]}`;
    balloon.innerHTML = `
      <span>${item.ar}</span>
      <div class="w-2 h-4 bg-slate-400/80 absolute -bottom-3 rounded-full"></div>
    `;
    balloon.onclick = () => clickBalloon(item, balloon);
    grid.appendChild(balloon);
  });
}

function clickBalloon(item, element) {
  if (item.name === targetBalloon.name) {
    playSound('pop');
    balloonStars += 1;
    const starsEl = document.getElementById('balloonStars');
    if (starsEl) starsEl.innerText = balloonStars;

    element.style.transform = 'scale(1.3)';
    element.style.opacity = '0';
    element.style.transition = 'all 0.2s ease-out';

    const fb = document.getElementById('balloonFeedback');
    if (fb) {
      fb.classList.remove('hidden');
      fb.innerText = `🎉 Mumtaz! Huruf ${item.name} (${item.ar}) berhasil dipecahkan!`;
    }

    confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });

    setTimeout(() => {
      initBalloonGame();
    }, 1200);
  } else {
    // Popup Modal Feedback Ceria (Bukan Browser Alert!)
    playSound('wrong');
    showAppModal({
      icon: "🎈",
      title: "Kurang Tepat, Ayo Coba Lagi!",
      titleClass: "text-xl sm:text-2xl font-black text-amber-900 mb-1",
      borderClass: "border-amber-400",
      noticeHtml: `
        <div class="py-2 text-center bg-amber-50 rounded-2xl border border-amber-200">
          <p class="text-xs text-slate-500 font-semibold mb-1">Balon yang disentuh:</p>
          <p class="text-3xl font-black text-amber-700 font-arabic">${item.ar} <span class="font-sans text-base font-bold text-slate-700">("${item.name}")</span></p>
          <div class="my-2 border-t border-amber-200"></div>
          <p class="text-xs text-slate-500 font-semibold mb-1">Ayo cari balon berhuruf target:</p>
          <p class="text-4xl font-black text-emerald-700 font-arabic">${targetBalloon.ar} <span class="font-sans text-base font-bold text-emerald-800">("${targetBalloon.name}")</span></p>
        </div>
      `,
      bodyText: "Perhatikan bentuk huruf dan titiknya ya! Adik-adik santri pasti bisa menemukan balon yang benar! 🌟",
      buttonText: "Siap, Coba Lagi! 🎯",
      buttonClass: "bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white font-black",
      onAction: () => {
        // Santri dapat langsung mencari dan mencoba balon yang lain
      }
    });
  }
}

// Router Berbasis Hash (Tetap Berada di Game yang Sama Saat Di-Refresh & Fullscreen Awet)
function initPageRouter() {
  const rawHash = (window.location.hash || '').replace('#', '').trim();

  if (!rawHash || rawHash === 'portal') {
    currentClassId = null;
    navigateTo('portal');
    return;
  }

  if (rawHash === 'tka' || rawHash === 'tpa' || rawHash === 'tqa') {
    openClassMenu(rawHash, false);
    return;
  }

  if (rawHash === 'tka-match') {
    startTkaMatchGame(false);
    return;
  }

  if (rawHash === 'tka-balloon') {
    startTkaBalloonGame(false);
    return;
  }

  if (universalBanks[rawHash] || rawHash.startsWith('custom')) {
    if (rawHash.startsWith('tka-') || rawHash.includes('tka')) currentClassId = 'tka';
    else if (rawHash.startsWith('tpa-') || rawHash.includes('tpa')) currentClassId = 'tpa';
    else if (rawHash.startsWith('tqa-') || rawHash.includes('tqa')) currentClassId = 'tqa';
    else currentClassId = 'tpa';

    restoreOrStartQuiz(rawHash);
    return;
  }

  navigateTo('portal');
}

window.addEventListener('DOMContentLoaded', initPageRouter);
window.addEventListener('hashchange', () => {
  const rawHash = (window.location.hash || '').replace('#', '').trim();
  if (rawHash === 'portal') {
    currentClassId = null;
    navigateTo('portal');
  } else if (rawHash === 'tka' || rawHash === 'tpa' || rawHash === 'tqa') {
    if (currentClassId !== rawHash) {
      openClassMenu(rawHash, false);
    }
  }
});
