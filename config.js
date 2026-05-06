// ==================== CONFIGURATION FILE ====================
// THE BACKROOMS - Otome Horror Game
// Atur status chapter di sini

const GAME_CONFIG = {
    // Total chapter yang tersedia
    totalChapters: 5,
    
    // Status setiap chapter (true = tersedia / coming soon, false = terkunci)
    // Untuk chapter 1 selalu true karena ini chapter awal
    chapters: {
        1: {
            available: true,      // Chapter 1 selalu terbuka
            title: "The Awakening",
            description: "Kesadaran di lorong kuning tak berujung"
        },
        2: {
            available: false,     // Ubah ke true untuk membuka chapter 2
            title: "The Whispering Walls",
            description: "Bisikan dari balik dinding"
        },
        3: {
            available: false,     // Ubah ke true untuk membuka chapter 3
            title: "The Forgotten Memories",
            description: "Mengungkap masa lalu yang tersembunyi"
        },
        4: {
            available: false,     // Ubah ke true untuk membuka chapter 4
            title: "The Truth Behind",
            description: "Menemukan kebenaran sebenarnya"
        },
        5: {
            available: false,     // Ubah ke true untuk membuka chapter 5
            title: "The Final Exit",
            description: "Menemukan jalan keluar terakhir"
        }
    },
    
    // Setting coming soon untuk chapter yang belum tersedia
    comingSoon: {
        enabled: true,
        message: "🚧 Coming Soon! Selesaikan chapter sebelumnya untuk membuka 🚧"
    },
    
    // Setting untuk penyimpanan
    storage: {
        key: "backrooms_game_save",
        version: "1.0"
    },
    
    // Setting visual lobby
    lobby: {
        title: "THE BACKROOMS",
        subtitle: "Horor Psikologis · Otome Visual Novel"
    },
    
    // Data karakter untuk lobby
    characters: {
        haruno: {
            name: "HARUNO",
            avatar: "🐉",
            trait: "berani · pelindung",
            personality: "Berani namun pemarah. Dibalik amarahnya, dia selalu berkepala dingin saat situasi genting. Bertindak sebagai pelindung tim.",
            voice: "Tegas dan berwibawa"
        },
        katsumi: {
            name: "KATSUMI",
            avatar: "👑",
            trait: "ceria · jenius teka-teki",
            personality: "Selalu ceria, ramah dengan siapapun, dan sosok yang gaul yang selalu mengikuti tren. Sering menjadi pencair suasana namun bisa panik saat bahaya datang. Gadis yang pintar dan suka dengan teka-teki sulit.",
            voice: "Ceria dan energetik"
        },
        juun: {
            name: "JUUN",
            avatar: "❄️",
            trait: "tenang · logis",
            personality: "Kurang bisa mengekspresikan diri, ekspresinya selalu terlihat dingin dan datar. Namun, selalu berbicara dengan nada yang ramah dan lemah lembut. Sangat logis dan observatif.",
            voice: "Lembut dan kalem"
        },
        touya: {
            name: "TOUYA",
            avatar: "📚",
            trait: "penakut · mistis",
            personality: "Penakut dan mudah gugup. Memiliki hobi membaca artikel sulit dan sangat suka mencari hal-hal yang berbau mistis/aneh. Punya pengetahuan luas tapi sering kewalahan dengan rasa takut.",
            voice: "Gugup dan gemetar"
        }
    }
};

// Fungsi untuk mengecek apakah chapter terbuka
function isChapterAvailable(chapterNumber) {
    if (chapterNumber === 1) return true;
    const completedChapters = getCompletedChapters();
    // Chapter terbuka jika chapter sebelumnya sudah selesai DAN available = true di config
    return completedChapters.includes(chapterNumber - 1) && GAME_CONFIG.chapters[chapterNumber]?.available === true;
}

// Fungsi untuk menandai chapter selesai
function completeChapter(chapterNumber) {
    const completed = getCompletedChapters();
    if (!completed.includes(chapterNumber)) {
        completed.push(chapterNumber);
        localStorage.setItem(GAME_CONFIG.storage.key + "_completed", JSON.stringify(completed));
    }
}

// Fungsi untuk mendapatkan chapter yang sudah selesai
function getCompletedChapters() {
    const saved = localStorage.getItem(GAME_CONFIG.storage.key + "_completed");
    return saved ? JSON.parse(saved) : [];
}

// Fungsi untuk reset semua progress
function resetProgress() {
    localStorage.removeItem(GAME_CONFIG.storage.key + "_completed");
    localStorage.removeItem(GAME_CONFIG.storage.key + "_chapter1");
}

// Fungsi untuk menyimpan progress chapter tertentu
function saveChapterProgress(chapter, data) {
    localStorage.setItem(GAME_CONFIG.storage.key + "_chapter" + chapter, JSON.stringify(data));
}

// Fungsi untuk memuat progress chapter
function loadChapterProgress(chapter) {
    const saved = localStorage.getItem(GAME_CONFIG.storage.key + "_chapter" + chapter);
    return saved ? JSON.parse(saved) : null;
}

// Ekspor untuk penggunaan (jika menggunakan module)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GAME_CONFIG, isChapterAvailable, completeChapter, getCompletedChapters, resetProgress, saveChapterProgress, loadChapterProgress };
}
