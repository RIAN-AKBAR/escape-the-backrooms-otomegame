"use client";

import { useEffect, useState } from "react";

export default function TopBar(){

  const [player,setPlayer] = useState({
    username:"User",
    level:1,
    exp:0,
    stamina:120,
    maxStamina:120,
    gold:10000,
    diamond:0,
  });

  useEffect(()=>{

    const saved = localStorage.getItem("playerData");

    if(saved){
      setPlayer(JSON.parse(saved));
    }else{
      localStorage.setItem(
        "playerData",
        JSON.stringify(player)
      );
    }

  },[]);

  function gainExp(){

    let newPlayer = {...player};

    newPlayer.exp += 10;

    if(newPlayer.exp >= 100){
      newPlayer.level += 1;
      newPlayer.exp = 0;
    }

    if(newPlayer.stamina > 0){
      newPlayer.stamina -= 5;
    }

    setPlayer(newPlayer);

    localStorage.setItem(
      "playerData",
      JSON.stringify(newPlayer)
    );

  }

  return(
    <div className="topbar">

      <button
        className="profile-card"
        onClick={gainExp}
      >

        <img
          src="https://files.catbox.moe/5tkiti.png"
          alt=""
        />

        <div className="profile-info">

          <h3>{player.username}</h3>

          <p>Lv. {player.level}</p>

          <div className="exp-bar">
            <div
              className="exp-fill"
              style={{
                width:`${player.exp}%`
              }}
            />
          </div>

          <span>{player.exp}%</span>

        </div>

      </button>

      <div className="currency-group">

        <button className="currency-card">

          <img
            src="https://files.catbox.moe/m1el12.png"
            alt=""
          />

          <span>
            {player.stamina}/{player.maxStamina}
          </span>

        </button>

        <button className="currency-card">

          <img
            src="https://files.catbox.moe/sw6qzn.png"
            alt=""
          />

          <span>
            {player.gold.toLocaleString()}
          </span>

        </button>

        <button className="currency-card">

          <img
            src="https://files.catbox.moe/iu7jh9.png"
            alt=""
          />

          <span>
            {player.diamond}
          </span>

        </button>

      </div>

    </div>
  );
}
