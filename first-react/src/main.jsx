import { createRoot } from "react-dom/client"
import MyHead from './header';
import React from 'react'

// import MyCard from './div';
// import DataAnime from './api_kecil'
import MyForm from "./from";

import './index.css'
import "remixicon/fonts/remixicon.css";


 
function Mycode(){
  return(
    <div className=" flex-col justify-center gap-1.5">
      <MyForm />
    </div>
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
) 