
import Menu from "./Menu";
import MenuIcon from "./MenuIcon";

export default function Header({open,setOpen,textareaValue}) {
  const changeOpen=()=>{

    setOpen(()=>!open)
  }
  return (
    <div className="h-15 ">
      {open&&<Menu textareaValue/>}
      <div className="bg-slate-200 "onClick={changeOpen}>
        <MenuIcon />
        </div>
        <div className="bg-slate-200 font-bold flex justify-center items-center h-10 text-lg ">
          <a
            target="_blank"
            rel="noreferrer"
            className=" text-2xl hover:text-3xl hover:text-green-700 transition-all duration-150"
            href="https://github.com/CompileWithG"
          >
            23BRS1156
          </a>
        </div>
      
    </div>
  );
}
