const menus = [
  {
    name:"Notice",
    icon:"https://files.catbox.moe/ahuv24.png"
  },
  {
    name:"Mission",
    icon:"https://files.catbox.moe/oh2crc.png"
  },
  {
    name:"Inventory",
    icon:"https://files.catbox.moe/t2tq8v.png"
  },
  {
    name:"Feedback",
    icon:"https://files.catbox.moe/ienh9z.png"
  },
  {
    name:"Settings",
    icon:"https://files.catbox.moe/ehpdje.png"
  },
];

export default function LeftMenu(){

  function clickMenu(name){
    alert(name);
  }

  return(
    <div className="left-menu">

      {menus.map((menu,index)=>(

        <button
          key={index}
          className="left-btn"
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
