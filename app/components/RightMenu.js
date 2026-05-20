const menus = [

  {
    name:"Shop",
    icon:"https://files.catbox.moe/gtj2an.png"
  },

  {
    name:"Gacha",
    icon:"https://files.catbox.moe/t4u1jm.png"
  },

  {
    name:"Event",
    icon:"https://files.catbox.moe/n2xxtz.png"
  },

  {
    name:"Story",
    icon:"https://files.catbox.moe/g5bg2d.png"
  },

  {
    name:"Character",
    icon:"https://files.catbox.moe/wowim7.png"
  },

  {
    name:"Memory",
    icon:"https://files.catbox.moe/y6rszi.png"
  },

];

export default function RightMenu(){

  function clickMenu(name){
    alert(name);
  }

  return(
    <div className="right-menu">

      {menus.map((menu,index)=>(

        <button
          key={index}
          className="circle-btn"
          onClick={()=>
            clickMenu(menu.name)
          }
        >

          <img
            src={menu.icon}
            alt=""
          />

        </button>

      ))}

    </div>
  );
}
