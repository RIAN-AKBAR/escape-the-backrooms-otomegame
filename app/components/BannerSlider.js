"use client";

import { useEffect, useState } from "react";

const banners = [
  "https://files.catbox.moe/ayzel7.jpg",
  "https://files.catbox.moe/qw3xtr.png",
  "https://files.catbox.moe/tnd2up.png",
  "https://files.catbox.moe/6zjdt9.png",
  "https://files.catbox.moe/rz95eo.png",
];

export default function BannerSlider(){

  const [index,setIndex] = useState(0);

  useEffect(()=>{

    const interval = setInterval(()=>{

      setIndex((prev)=>
        (prev + 1) % banners.length
      );

    },5000);

    return ()=>clearInterval(interval);

  },[]);

  return(
    <div className="banner-slider">

      <img
        src={banners[index]}
        className="banner-image"
        alt=""
      />

    </div>
  );
}
