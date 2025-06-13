import { createRoot } from "react-dom/client"
import MyHead from './header';
import MyBody from './div';
import './index.css'


function Mycode(){
  return(
    <>
      <MyHead />
      <MyBody />
      <MyBody />
      <MyBody />
    </>
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
)