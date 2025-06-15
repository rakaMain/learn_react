import { createRoot } from "react-dom/client"
import MyHead from './header';
import MyCard from './div';
import DataAnime from './api_kecil'
import './index.css'
import "remixicon/fonts/remixicon.css";
import BlackClover from "./assets/gambar/Black Clover Shounen Shoump.jfif"

 
function Mycode(){
  return(
    <div className="p-5">
      <DataAnime />
    </div>
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
)