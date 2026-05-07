// config.js - Otome game configuration (karakter, tasks, dialogues & starting stats)
window.OTOME_CONFIG = {
    // Daftar karakter dengan affinity dinamis (Low/High)
    characters: [
        { name: "Kimiya Koshigiri", affinity: "Low" },
        { name: "Koji Sakai", affinity: "High" },
        { name: "Takashi Jinnai", affinity: "Low" },
        { name: "Naomasa Koshigiri", affinity: "Low" },
        { name: "Katsumi", affinity: "Low" }      // tambahan dari elemen Lv.UP
    ],

    // Task / misi harian seperti screenshot
    tasks: [
        { name: "Akulber Beginner", timeLeft: "4 days left", reward: "Sale" },
        { name: "Akuban Beginner", timeLeft: "4 days left", reward: "Sale" },
        { name: "Nightmare Chapter", timeLeft: "328 days left", reward: "✨ x2 EXP" },
        { name: "Devil’s ToDo", timeLeft: "4 days left", reward: "Memory+ " },
        { name: "STAYC Collab", timeLeft: "43:57:03", reward: "Limited" }
    ],

    // Kumpulan dialog otome yang muncul saat tap / interaksi
    dialogues: [
        { speaker: "Mammon", text: "Hey... Oi... All right, already! Pay attention to me!" },
        { speaker: "Asmodeus", text: "Asahuman, it will probably take a little while for you to adjust to things here in the Devildom." },
        { speaker: "Katsumi", text: "Lv. 3? I just gained EXP+100! Let's aim for more power." },
        { speaker: "Koji Sakai", text: "High affinity means I trust you, master. Don't let me down." },
        { speaker: "Kimiya", text: "Low affinity... but I sense potential. Spend time with me." },
        { speaker: "Lucifer", text: "The monster is approaching! Attack before it's too late." },
        { speaker: "Belphegor", text: "zzz... Oh, you again. If you have free time, do the tasks." }
    ],

    // Opsi untuk menimpa status awal player (cocok dengan gambar: Lv.2, 66%, 136 diamond, 51 affection)
    playerOverrides: {
        level: 2,
        expPercent: 66,
        diamonds: 136,
        affection: 51
    }
};
