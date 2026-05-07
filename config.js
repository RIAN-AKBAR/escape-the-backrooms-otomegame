// ==================== CONFIGURATION FILE ====================
// THE BACKROOMS - Otome Horror Game
// Atur status chapter di sini

const GAME_CONFIG = {
    totalChapters: 5,
    
    chapters: {
        1: {
            available: true,
            title: "The Awakening",
            description: "Kesadaran di lorong kuning tak berujung"
        },
        2: {
            available: false,
            title: "The Whispering Walls",
            description: "Bisikan dari balik dinding"
        },
        3: {
            available: false,
            title: "The Forgotten Memories",
            description: "Mengungkap masa lalu yang tersembunyi"
        },
        4: {
            available: false,
            title: "The Truth Behind",
            description: "Menemukan kebenaran sebenarnya"
        },
        5: {
            available: false,
            title: "The Final Exit",
            description: "Menemukan jalan keluar terakhir"
        }
    },
    
    // URL Foto Karakter
    characterImages: {
        haruno: "https://files.catbox.moe/eyag0t.png",
        juun: "https://files.catbox.moe/6s4c4j.png",
        katsumi: "https://files.catbox.moe/sq34nd.png",
        touya: "https://files.catbox.moe/jmn9ys.png"
    },
    
    comingSoon: {
        enabled: true,
        message: "🚧 Coming Soon! Selesaikan chapter sebelumnya untuk membuka 🚧"
    },
    
    storage: {
        key: "backrooms_game_save",
        version: "1.0"
    },
    
    lobby: {
        title: "THE BACKROOMS",
        subtitle: "Horor Psikologis · Otome Visual Novel"
    },
    
    characters: {
        haruno: {
            name: "HARUNO",
            avatar: "🐉",
            imageUrl: "https://files.catbox.moe/eyag0t.png",
            trait: "berani · pelindung",
            personality: "Berani namun pemarah. Dibalik amarahnya, dia selalu berkepala dingin saat situasi genting. Bertindak sebagai pelindung tim.",
            voice: "Tegas dan berwibawa"
        },
        katsumi: {
            name: "KATSUMI",
            avatar: "👑",
            imageUrl: "https://files.catbox.moe/sq34nd.png",
            trait: "ceria · jenius teka-teki",
            personality: "Selalu ceria, ramah dengan siapapun, dan sosok yang gaul yang selalu mengikuti tren. Sering menjadi pencair suasana namun bisa panik saat bahaya datang. Gadis yang pintar dan suka dengan teka-teki sulit.",
            voice: "Ceria dan energetik"
        },
        juun: {
            name: "JUUN",
            avatar: "❄️",
            imageUrl: "https://files.catbox.moe/6s4c4j.png",
            trait: "tenang · logis",
            personality: "Kurang bisa mengekspresikan diri, ekspresinya selalu terlihat dingin dan datar. Namun, selalu berbicara dengan nada yang ramah dan lemah lembut. Sangat logis dan observatif.",
            voice: "Lembut dan kalem"
        },
        touya: {
            name: "TOUYA",
            avatar: "📚",
            imageUrl: "https://files.catbox.moe/jmn9ys.png",
            trait: "penakut · mistis",
            personality: "Penakut dan mudah gugup. Memiliki hobi membaca artikel sulit dan sangat suka mencari hal-hal yang berbau mistis/aneh. Punya pengetahuan luas tapi sering kewalahan dengan rasa takut.",
            voice: "Gugup dan gemetar"
        }
    }
};

window.isChapterAvailable = function(chapterNumber) {
    if (chapterNumber === 1) return true;
    const completed = getCompletedChapters();
    return completed.includes(chapterNumber - 1) && GAME_CONFIG.chapters[chapterNumber]?.available === true;
};

window.completeChapter = function(chapterNumber) {
    const completed = getCompletedChapters();
    if (!completed.includes(chapterNumber)) {
        completed.push(chapterNumber);
        localStorage.setItem(GAME_CONFIG.storage.key + "_completed", JSON.stringify(completed));
    }
};

window.getCompletedChapters = function() {
    const saved = localStorage.getItem(GAME_CONFIG.storage.key + "_completed");
    return saved ? JSON.parse(saved) : [];
};

window.resetProgress = function() {
    localStorage.removeItem(GAME_CONFIG.storage.key + "_completed");
    localStorage.removeItem(GAME_CONFIG.storage.key + "_chapter1");
};

window.saveChapterProgress = function(chapter, data) {
    localStorage.setItem(GAME_CONFIG.storage.key + "_chapter" + chapter, JSON.stringify(data));
};

window.loadChapterProgress = function(chapter) {
    const saved = localStorage.getItem(GAME_CONFIG.storage.key + "_chapter" + chapter);
    return saved ? JSON.parse(saved) : null;
};

window.getCharacterImage = function(charKey) {
    return GAME_CONFIG.characterImages[charKey] || "";
};
