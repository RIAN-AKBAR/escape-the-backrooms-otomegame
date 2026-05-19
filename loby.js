// FILE: pages/index.js

import { useState } from "react";

export default function Home() {

  const [started, setStarted] = useState(false);

  return (
    <>
      <div className={`screen start ${started ? "fade" : ""}`}>

        <video autoPlay muted loop playsInline className="bg">
          <source src="https://files.catbox.moe/k0x9h1.mp4" />
        </video>

        <div className="overlay"/>

        <img
          className="logo"
          src="https://files.catbox.moe/09zcs2.png"
        />

        <img
          className="startBtn"
          src="https://files.catbox.moe/x4st1d.png"
          onClick={()=>setStarted(true)}
        />

      </div>

      {started && (
        <div className="screen lobby">

          <video autoPlay muted loop playsInline className="bg">
            <source src="https://files.catbox.moe/82malf.mp4" />
          </video>

          <div className="overlay"/>

          <div className="profile">

            <img src="https://files.catbox.moe/5tkiti.png"/>

            <div>
              <h2>Hoshizora</h2>
              <p>Lv.45</p>
              <small>EXP 73%</small>
            </div>

          </div>

          <div className="topBar">

            <div className="currency">
              <img src="https://files.catbox.moe/m1el12.png"/>
              120/120
            </div>

            <div className="currency">
              <img src="https://files.catbox.moe/sw6qzn.png"/>
              123,456
            </div>

            <div className="currency">
              <img src="https://files.catbox.moe/iu7jh9.png"/>
              8,910
            </div>

          </div>

          <img
            className="character"
            src="https://files.catbox.moe/wowim7.png"
          />

          <div className="features">

            <Feature
              icon="https://files.catbox.moe/gtj2an.png"
              title="Shop"
            />

            <Feature
              icon="https://files.catbox.moe/t4u1jm.png"
              title="Gacha"
            />

            <Feature
              icon="https://files.catbox.moe/n2xxtz.png"
              title="Event"
            />

            <Feature
              icon="https://files.catbox.moe/g5bg2d.png"
              title="Story"
            />

          </div>

          <div className="banners">

            <img src="https://files.catbox.moe/ayzel7.jpg"/>
            <img src="https://files.catbox.moe/qw3xtr.png"/>
            <img src="https://files.catbox.moe/tnd2up.png"/>
            <img src="https://files.catbox.moe/6zjdt9.png"/>
            <img src="https://files.catbox.moe/rz95eo.png"/>

          </div>

          <img
            className="quest"
            src="https://files.catbox.moe/8kfqeu.png"
          />

        </div>
      )}

      <style jsx global>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Segoe UI;
        }

        body{
          overflow:hidden;
          background:black;
        }

        .screen{
          width:100%;
          height:100vh;
          position:relative;
        }

        .bg{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .overlay{
          position:absolute;
          inset:0;
          background:rgba(0,0,0,.2);
        }

        .start{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }

        .logo{
          width:500px;
          z-index:2;
        }

        .startBtn{
          width:340px;
          cursor:pointer;
          z-index:2;
          animation:pulse 2s infinite;
        }

        .fade{
          animation:fadeOut 1s forwards;
        }

        @keyframes fadeOut{
          to{
            opacity:0;
            visibility:hidden;
          }
        }

        @keyframes pulse{
          0%,100%{transform:scale(1);}
          50%{transform:scale(1.05);}
        }

        .profile{
          position:absolute;
          top:20px;
          left:20px;
          display:flex;
          gap:14px;
          align-items:center;
          background:rgba(0,0,0,.4);
          padding:14px;
          border-radius:20px;
          color:white;
          z-index:2;
        }

        .profile img{
          width:70px;
          height:70px;
          border-radius:50%;
        }

        .topBar{
          position:absolute;
          top:20px;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          gap:10px;
          z-index:2;
        }

        .currency{
          background:rgba(0,0,0,.5);
          padding:10px 18px;
          border-radius:18px;
          display:flex;
          align-items:center;
          gap:8px;
          color:white;
        }

        .currency img{
          width:28px;
        }

        .character{
          position:absolute;
          bottom:0;
          left:50%;
          transform:translateX(-50%);
          height:90%;
          z-index:1;
        }

        .features{
          position:absolute;
          right:40px;
          top:50%;
          transform:translateY(-50%);
          display:flex;
          flex-direction:column;
          gap:18px;
          z-index:2;
        }

        .feature{
          width:140px;
          height:140px;
          border-radius:30px;
          background:rgba(255,255,255,.15);
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          color:white;
          cursor:pointer;
          backdrop-filter:blur(10px);
        }

        .feature img{
          width:64px;
          margin-bottom:10px;
        }

        .feature span{
          font-size:22px;
          font-weight:bold;
        }

        .banners{
          position:absolute;
          left:120px;
          bottom:20px;
          display:flex;
          gap:15px;
          overflow:auto;
          width:58%;
          z-index:2;
        }

        .banners img{
          width:320px;
          border-radius:24px;
        }

        .quest{
          position:absolute;
          right:40px;
          bottom:40px;
          width:220px;
          z-index:2;
          animation:pulse 2s infinite;
        }

      `}</style>
    </>
  );
}

function Feature({icon,title}){

  return(
    <div className="feature">
      <img src={icon}/>
      <span>{title}</span>
    </div>
  )
}
