import { useState } from "react";

export default function Home(){

  const [started,setStarted]=useState(false);

  return(
    <>

      {/* START SCREEN */}

      <div className={`screen start-screen ${started ? "fade-out" : ""}`}>

        <video autoPlay muted loop playsInline className="bg-video">
          <source src="https://files.catbox.moe/k0x9h1.mp4"/>
        </video>

        <div className="overlay"/>

        <img
        className="logo"
        src="https://files.catbox.moe/09zcs2.png"/>

        <img
        className="tap-start"
        src="https://files.catbox.moe/x4st1d.png"
        onClick={()=>setStarted(true)}/>

      </div>

      {/* LOBBY */}

      {started && (

        <div className="screen lobby-screen">

          <video autoPlay muted loop playsInline className="bg-video">
            <source src="https://files.catbox.moe/82malf.mp4"/>
          </video>

          <div className="overlay"/>

          <div className="profile-card">

            <img src="https://files.catbox.moe/5tkiti.png"/>

            <div>
              <h2>Hoshizora</h2>
              <p>Lv.45</p>
              <small>EXP 73%</small>
            </div>

          </div>

          <div className="top-bar">

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
          src="https://files.catbox.moe/wowim7.png"/>

          <div className="right-buttons">

            <Feature
            icon="https://files.catbox.moe/gtj2an.png"
            title="Shop"/>

            <Feature
            icon="https://files.catbox.moe/t4u1jm.png"
            title="Gacha"/>

            <Feature
            icon="https://files.catbox.moe/n2xxtz.png"
            title="Event"/>

            <Feature
            icon="https://files.catbox.moe/g5bg2d.png"
            title="Story"/>

          </div>

          <div className="banner-slider">

            <img src="https://files.catbox.moe/ayzel7.jpg"/>

            <img src="https://files.catbox.moe/qw3xtr.png"/>

            <img src="https://files.catbox.moe/tnd2up.png"/>

            <img src="https://files.catbox.moe/6zjdt9.png"/>

            <img src="https://files.catbox.moe/rz95eo.png"/>

          </div>

          <img
          className="quest-btn"
          src="https://files.catbox.moe/8kfqeu.png"/>

        </div>

      )}

<style jsx global>{`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Segoe UI',sans-serif;
}

html,body{
  width:100%;
  height:100%;
  overflow:hidden;
  background:black;
}

.screen{
  width:100%;
  height:100dvh;
  position:relative;
  overflow:hidden;
}

.bg-video{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
}

.overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.25);
}

.start-screen{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}

.logo{
  width:min(520px,90vw);
}

.tap-start{
  width:min(320px,80vw);
  margin-top:20px;
  cursor:pointer;
  animation:pulse 2s infinite;
}

@keyframes pulse{
  0%,100%{transform:scale(1);}
  50%{transform:scale(1.05);}
}

.fade-out{
  animation:fadeOut 1s forwards;
}

@keyframes fadeOut{
  to{
    opacity:0;
    visibility:hidden;
  }
}

.profile-card{
  position:absolute;
  top:12px;
  left:12px;
  background:rgba(0,0,0,.4);
  backdrop-filter:blur(10px);
  padding:10px;
  border-radius:18px;
  display:flex;
  gap:12px;
  align-items:center;
  color:white;
  z-index:10;
}

.profile-card img{
  width:60px;
  height:60px;
  border-radius:50%;
}

.top-bar{
  position:absolute;
  top:12px;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  gap:8px;
  z-index:10;
}

.currency{
  background:rgba(0,0,0,.5);
  padding:8px 14px;
  border-radius:14px;
  display:flex;
  gap:8px;
  align-items:center;
  color:white;
}

.currency img{
  width:22px;
}

.character{
  position:absolute;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  height:88%;
}

.right-buttons{
  position:absolute;
  right:12px;
  top:50%;
  transform:translateY(-50%);
  display:flex;
  flex-direction:column;
  gap:12px;
  z-index:10;
}

.feature{
  width:110px;
  height:110px;
  background:rgba(255,255,255,.12);
  backdrop-filter:blur(10px);
  border-radius:22px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
}

.feature img{
  width:46px;
  margin-bottom:8px;
}

.banner-slider{
  position:absolute;
  left:12px;
  right:12px;
  bottom:12px;
  display:flex;
  gap:12px;
  overflow-x:auto;
}

.banner-slider img{
  width:280px;
  height:155px;
  object-fit:cover;
  border-radius:20px;
  flex-shrink:0;
}

.quest-btn{
  position:absolute;
  right:16px;
  bottom:22px;
  width:min(220px,36vw);
  animation:pulse 2s infinite;
}

@media(max-width:768px){

  .character{
    height:60%;
  }

  .feature{
    width:78px;
    height:78px;
  }

  .feature img{
    width:30px;
  }

  .banner-slider img{
    width:200px;
    height:110px;
  }

  .quest-btn{
    width:140px;
    bottom:120px;
  }

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
  );

}
