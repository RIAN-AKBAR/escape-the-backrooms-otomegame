"use client";

import "./LobbyScreen.css";

import TopBar from "../components/TopBar";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import BannerSlider from "../components/BannerSlider";

export default function LobbyScreen(){

  return(
    <div className="lobby-container">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="lobby-video"
      >
        <source
          src="https://files.catbox.moe/6ab7z1.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay"/>

      <TopBar />

      <LeftMenu />

      <BannerSlider />

      <RightMenu />

      <button className="quest-btn">

        <img
          src="https://files.catbox.moe/8kfqeu.png"
          alt=""
        />

      </button>

    </div>
  );
}
