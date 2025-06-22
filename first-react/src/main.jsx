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
    <div className="p-5 flex-col justify-center gap-1.5 w-full h-60">
      <p className=" ms-5 mb-5">Signup Form</p>
      <section>
        <form className="mb-3 scale-90">
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" placeholder="example@gmail.com" className=" shadow rounded-md line-clamp-2 border-2"/>
          <br />
          <label htmlFor="pass">Password : </label>
          <input type="password" name="password" placeholder="*********" className=" shadow rounded-md line-clamp-2 border-2 "/>

          <button className=" border-2 rounded-xl my-5 text-sm p-2 hover:bg-black hover:text-white "> submit</button>
        </form>
      </section>
    </div>
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
) 