"use client";

import "./StartScreen.css";
import { startGame } from "./StartLogic";

export default function StartScreen(){

  return(
    <div className="start-container">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
      >
        <source
          src="https://files.catbox.moe/vrdx9j.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay"/>

      <button
        className="start-btn"
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
