```jsx
'use client'
import { useEffect, useRef, useState } from "react";

export default function YureikakuOtomeGame() {
  const [started, setStarted] = useState(false);
  const bgmRef = useRef(null);

  useEffect(() => {
    if (bgmRef.current) {
      bgmRef.current.volume = 0.4;
    }
  }, []);

  return (
    <div className="game-container">
      {/* ================= START SCREEN ================= */}
      {!started && (
        <div className="start-screen fade-in">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
          >
            <source
              src="https://files.catbox.moe/k0x9h1.mp4"
              type="video/mp4"
            />
          </video>

          <div className="overlay" />

          <div className="title-wrapper">
            <img
              src="https://files.catbox.moe/09zcs2.png"
              className="title-logo"
              alt="title"
            />

            <h1 className="game-title">ユレイカク</h1>
            <p className="game-subtitle">
              2D Otome Visual Novel Experience
            </p>

            <button
              className="start-button"
              onClick={() => setStarted(true)}
            >
              <img
                src="https://files.catbox.moe/x4st1d.png"
                alt="start"
              />
              <span>TAP TO START</span>
            </button>
          </div>

          <div className="bottom-menu">
            <div className="bottom-item">Account</div>
            <div className="bottom-item">News</div>
            <div className="bottom-item">Support</div>
          </div>
        </div>
      )}

      {/* ================= LOBBY ================= */}
      {started && (
        <div className="lobby-screen fade-in">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
          >
            <source
              src="https://files.catbox.moe/82malf.mp4"
              type="video/mp4"
            />
          </video>

          <div className="overlay" />

          {/* TOP BAR */}
          <div className="top-bar glass">
            <div className="profile-card">
              <img
                src="https://files.catbox.moe/5tkiti.png"
                alt="profile"
              />
              <div>
                <h3>Yureikaku</h3>
                <p>Lv. 45</p>
              </div>
            </div>

            <div className="currency-group">
              <div className="currency-card">
                <img src="https://files.catbox.moe/m1el12.png" />
                <span>120/120</span>
              </div>

              <div className="currency-card">
                <img src="https://files.catbox.moe/sw6qzn.png" />
                <span>123,456</span>
              </div>

              <div className="currency-card">
                <img src="https://files.catbox.moe/iu7jh9.png" />
                <span>8,910</span>
              </div>
            </div>
          </div>

          {/* LEFT MENU */}
          <div className="left-menu">
            <MenuItem
              icon="https://files.catbox.moe/ahuv24.png"
              text="Notice"
            />

            <MenuItem
              icon="https://files.catbox.moe/oh2crc.png"
              text="Mission"
            />

            <MenuItem
              icon="https://files.catbox.moe/t2tq8v.png"
              text="Inventory"
            />

            <MenuItem
              icon="https://files.catbox.moe/k0x9h1.mp4"
              text="Inbox"
            />

            <MenuItem
              icon="https://files.catbox.moe/ienh9z.png"
              text="Feedback"
            />

            <MenuItem
              icon="https://files.catbox.moe/ehpdje.png"
              text="Settings"
            />
          </div>

          {/* CHARACTER */}
          <div className="character-area">
            <img
              src="https://files.catbox.moe/wowim7.png"
              className="character-image"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="action-menu">
            <ActionButton
              icon="https://files.catbox.moe/gtj2an.png"
              label="Shop"
            />

            <ActionButton
              icon="https://files.catbox.moe/t4u1jm.png"
              label="Gacha"
            />

            <ActionButton
              icon="https://files.catbox.moe/n2xxtz.png"
              label="Event"
            />

            <ActionButton
              icon="https://files.catbox.moe/g5bg2d.png"
              label="Story"
            />
          </div>

          {/* EVENT BANNERS */}
          <div className="banner-section">
            <img src="https://files.catbox.moe/ayzel7.jpg" />
            <img src="https://files.catbox.moe/qw3xtr.png" />
            <img src="https://files.catbox.moe/tnd2up.png" />
            <img src="https://files.catbox.moe/6zjdt9.png" />
            <img src="https://files.catbox.moe/rz95eo.png" />
          </div>

          {/* QUEST BUTTON */}
          <button className="quest-button">
            <img src="https://files.catbox.moe/8kfqeu.png" />
            <span>QUEST</span>
          </button>

          {/* DAILY LOGIN */}
          <div className="daily-card glass">
            <img src="https://files.catbox.moe/dwk0g5.png" />
            <div>
              <h3>Daily Reward</h3>
              <p>Login today and get rewards!</p>
            </div>
          </div>
        </div>
      )}

      {/* AUDIO */}
      <audio
        ref={bgmRef}
        autoPlay
        loop
        src="https://files.catbox.moe/k0x9h1.mp4"
      />

      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          margin: 0;
          overflow: hidden;
        }

        .game-container {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .bg-video {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          top: 0;
          left: 0;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(2px);
        }

        .fade-in {
          animation: fade 1s ease;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* START SCREEN */

        .start-screen {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .title-wrapper {
          position: absolute;
          z-index: 10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .title-logo {
          width: 220px;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 20px #ff8af7);
        }

        .game-title {
          font-size: 80px;
          color: white;
          margin: 0;
          letter-spacing: 8px;
          text-shadow: 0 0 20px #ff5edc;
        }

        .game-subtitle {
          color: #f1d6ff;
          margin-top: 10px;
          font-size: 18px;
          letter-spacing: 3px;
        }

        .start-button {
          margin-top: 40px;
          border: none;
          background: linear-gradient(
            135deg,
            #7a4cff,
            #ff61d8
          );
          color: white;
          padding: 18px 40px;
          border-radius: 20px;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-inline: auto;
          transition: 0.3s;
          box-shadow: 0 0 30px rgba(255,255,255,0.3);
        }

        .start-button:hover {
          transform: scale(1.05);
        }

        .start-button img {
          width: 40px;
        }

        .bottom-menu {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 30px;
          z-index: 10;
        }

        .bottom-item {
          color: white;
          background: rgba(255,255,255,0.1);
          padding: 12px 22px;
          border-radius: 14px;
          backdrop-filter: blur(10px);
        }

        /* LOBBY */

        .lobby-screen {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .glass {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(15px);
        }

        .top-bar {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          height: 80px;
          border-radius: 20px;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
        }

        .profile-card {
          display: flex;
          align-items: center;
          gap: 15px;
          color: white;
        }

        .profile-card img {
          width: 55px;
          height: 55px;
          border-radius: 50%;
        }

        .currency-group {
          display: flex;
          gap: 14px;
        }

        .currency-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 15px;
          background: rgba(255,255,255,0.15);
          color: white;
        }

        .currency-card img {
          width: 24px;
          height: 24px;
        }

        .left-menu {
          position: absolute;
          top: 120px;
          left: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          z-index: 20;
        }

        .menu-item {
          width: 85px;
          height: 85px;
          border-radius: 20px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          gap: 8px;
          transition: .3s;
          cursor: pointer;
        }

        .menu-item:hover {
          transform: scale(1.08);
        }

        .menu-item img {
          width: 34px;
          height: 34px;
          object-fit: contain;
        }

        .character-area {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }

        .character-image {
          height: 92vh;
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(255,255,255,0.2));
        }

        .action-menu {
          position: absolute;
          right: 40px;
          top: 200px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 20;
        }

        .action-btn {
          width: 130px;
          height: 130px;
          border-radius: 30px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: white;
          transition: .3s;
          cursor: pointer;
        }

        .action-btn:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 20px rgba(255,255,255,0.25);
        }

        .action-btn img {
          width: 55px;
          height: 55px;
        }

        .banner-section {
          position: absolute;
          bottom: 25px;
          left: 140px;
          display: flex;
          gap: 12px;
          z-index: 20;
        }

        .banner-section img {
          width: 180px;
          height: 100px;
          border-radius: 18px;
          object-fit: cover;
          border: 2px solid rgba(255,255,255,0.2);
          transition: .3s;
        }

        .banner-section img:hover {
          transform: scale(1.04);
        }

        .quest-button {
          position: absolute;
          right: 40px;
          bottom: 40px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: none;
          background: radial-gradient(
            circle,
            #b56cff,
            #6a3cff
          );
          color: white;
          font-size: 26px;
          font-weight: bold;
          z-index: 25;
          cursor: pointer;
          transition: .3s;
          box-shadow: 0 0 40px rgba(171,111,255,.5);
        }

        .quest-button:hover {
          transform: scale(1.08);
        }

        .quest-button img {
          width: 70px;
          display: block;
          margin: auto;
          margin-bottom: 8px;
        }

        .daily-card {
          position: absolute;
          top: 120px;
          right: 220px;
          width: 300px;
          padding: 18px;
          border-radius: 20px;
          color: white;
          z-index: 20;
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .daily-card img {
          width: 70px;
          height: 70px;
          border-radius: 14px;
        }

        @media(max-width: 900px) {
          .character-image {
            height: 70vh;
          }

          .banner-section {
            display: none;
          }

          .action-btn {
            width: 90px;
            height: 90px;
          }

          .quest-button {
            width: 120px;
            height: 120px;
            font-size: 18px;
          }

          .daily-card {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

function MenuItem({ icon, text }) {
  return (
    <div className="menu-item">
      <img src={icon} alt={text} />
      <span>{text}</span>
    </div>
  );
}

function ActionButton({ icon, label }) {
  return (
    <div className="action-btn">
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
}
```
