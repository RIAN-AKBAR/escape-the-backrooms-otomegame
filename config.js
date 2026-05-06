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
            avatar: "https://files.catbox.moe/eyag0t.png",
            trait: "berani · pelindung",
            personality: "Berani namun pemarah. Dibalik amarahnya, dia selalu berkepala dingin saat situasi genting.",
            voice: "Tegas dan berwibawa"
        },
        katsumi: {
            name: "KATSUMI",
            avatar: "https://files.catbox.moe/sq34nd.png",
            trait: "ceria · jenius teka-teki",
            personality: "Selalu ceria, ramah dengan siapapun, dan pintar dalam memecahkan teka-teki sulit.",
            voice: "Ceria dan energetik"
        },
        juun: {
            name: "JUUN",
            avatar: "https://files.catbox.moe/6s4c4j.png",
            trait: "tenang · logis",
            personality: "Ekspresi dingin tapi berbicara dengan ramah. Sangat logis dan observatif.",
            voice: "Lembut dan kalem"
        },
        touya: {
            name: "TOUYA",
            avatar: "https://files.catbox.moe/jmn9ys.png",
            trait: "penakut · mistis",
            personality: "Penakut dan mudah gugup. Punya pengetahuan luas tentang hal-hal mistis.",
            voice: "Gugup dan gemetar"
        }
    }
};

// Fungsi global yang tersedia
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
