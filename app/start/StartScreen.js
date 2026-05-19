"use client";

import "./StartScreen.css";
import { startGame } from "./StartScreenLogic";

export default function StartScreen() {
  return (
    <div className="start-container">

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

      <img
        src="https://files.catbox.moe/09zcs2.png"
        className="title-logo"
        alt=""
      />

      <button
        className="start-button"
        onClick={startGame}
      >
        <img
          src="https://files.catbox.moe/x4st1d.png"
          alt=""
        />
      </button>

    </div>
  );
}
