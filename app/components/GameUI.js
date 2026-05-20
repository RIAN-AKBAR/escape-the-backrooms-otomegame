"use client";

export default function GameUI() {
  return (
    <div className="ui-container">

      {/* PROFILE */}
      <button className="profile-btn">
        <img
          src="/ui/profile.png"
          alt=""
        />
      </button>

      {/* MENU LEFT */}
      <div className="left-menu">

        <button className="menu-btn">
          <img src="/ui/notice.png" alt="" />
        </button>

        <button className="menu-btn">
          <img src="/ui/mission.png" alt="" />
        </button>

        <button className="menu-btn">
          <img src="/ui/inventory.png" alt="" />
        </button>

      </div>

      {/* RIGHT MENU */}
      <div className="right-menu">

        <button className="circle-btn">
          <img src="/ui/shop.png" alt="" />
        </button>

        <button className="circle-btn">
          <img src="/ui/gacha.png" alt="" />
        </button>

        <button className="circle-btn">
          <img src="/ui/event.png" alt="" />
        </button>

      </div>

      {/* QUEST */}
      <button className="quest-btn">
        <img src="/ui/quest.png" alt="" />
      </button>

    </div>
  );
}
