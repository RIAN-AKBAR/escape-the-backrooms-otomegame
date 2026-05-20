"use client";

import "./LobbyScreen.css";
import { openPage } from "./LobbyLogic";

const menuLeft = [
  {
    name: "Notice",
    icon: "https://files.catbox.moe/ahuv24.png",
  },
  {
    name: "Mission",
    icon: "https://files.catbox.moe/oh2crc.png",
  },
  {
    name: "Inventory",
    icon: "https://files.catbox.moe/t2tq8v.png",
  },
  {
    name: "Feedback",
    icon: "https://files.catbox.moe/ienh9z.png",
  },
  {
    name: "Settings",
    icon: "https://files.catbox.moe/ehpdje.png",
  },
];

const menuRight = [
  {
    name: "Shop",
    icon: "https://files.catbox.moe/gtj2an.png",
  },
  {
    name: "Gacha",
    icon: "https://files.catbox.moe/t4u1jm.png",
  },
  {
    name: "Event",
    icon: "https://files.catbox.moe/n2xxtz.png",
  },
  {
    name: "Story",
    icon: "https://files.catbox.moe/g5bg2d.png",
  },
  {
    name: "Character",
    icon: "https://files.catbox.moe/wowim7.png",
  },
  {
    name: "Memory",
    icon: "https://files.catbox.moe/y6rszi.png",
  },
];

export default function LobbyScreen() {
  return (
    <div className="lobby-container">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="lobby-video"
      >
        <source
          src="https://files.catbox.moe/82malf.mp4"
          type="video/mp4"
        />
      </video>

      <div className="dark-overlay" />

      <div className="top-bar">

        <img
          src="https://files.catbox.moe/5tkiti.png"
          className="profile-card clickable"
          onClick={() => openPage("profile")}
        />

        <div className="currency-group">

          <img
            src="https://files.catbox.moe/m1el12.png"
            className="currency clickable"
            onClick={() => openPage("stamina")}
          />

          <img
            src="https://files.catbox.moe/sw6qzn.png"
            className="currency clickable"
            onClick={() => openPage("gold")}
          />

          <img
            src="https://files.catbox.moe/iu7jh9.png"
            className="currency clickable"
            onClick={() => openPage("gem")}
          />

        </div>

      </div>

      <div className="left-menu">

        {menuLeft.map((item, index) => (
          <button
            key={index}
            className="menu-btn clickable"
            onClick={() => openPage(item.name)}
          >
            <img src={item.icon} alt="" />
          </button>
        ))}

      </div>

      <div className="right-menu">

        {menuRight.map((item, index) => (
          <button
            key={index}
            className="circle-btn clickable"
            onClick={() => openPage(item.name)}
          >
            <img src={item.icon} alt="" />
          </button>
        ))}

      </div>

      <div className="banner-area">

        <img
          src="https://files.catbox.moe/ayzel7.jpg"
          className="banner clickable"
          onClick={() => openPage("banner1")}
        />

        <div className="small-banners">

          <img
            src="https://files.catbox.moe/qw3xtr.png"
            className="small-banner clickable"
            onClick={() => openPage("banner2")}
          />

          <img
            src="https://files.catbox.moe/tnd2up.png"
            className="small-banner clickable"
            onClick={() => openPage("banner3")}
          />

          <img
            src="https://files.catbox.moe/6zjdt9.png"
            className="small-banner clickable"
            onClick={() => openPage("banner4")}
          />

          <img
            src="https://files.catbox.moe/rz95eo.png"
            className="small-banner clickable"
            onClick={() => openPage("banner5")}
          />

        </div>

      </div>

      <button
        className="quest-btn clickable"
        onClick={() => openPage("quest")}
      >
        <img
          src="https://files.catbox.moe/8kfqeu.png"
          alt=""
        />
      </button>

    </div>
  );
}
