import { createRoot } from "react-dom/client"
import MyHead from './header';
import React from 'react'

// import MyCard from './div';
// import DataAnime from './api_kecil'
import MyForm from "./from";

import './index.css'
import "remixicon/fonts/remixicon.css";

 
function Mycode(){

  function handlesubmit(formData) {
    // n.preventDefault()
    // console.log('submited')
    // const formEL = n.currentTarget
    // const formData = new FormData(formEL)
    // const email = formData.get("email")
    // const pass = formData.get("password")
    // console.log(formData)
    // // submit it to data baackend
    // console.log(email, pass)
    // formEL.reset()

    const email = formData.get('email')
    const pass = formData.get('password')
    const Employment = formData.get('employment')
    const distraksi = formData.getAll('distraksi')
    
    console.log(` ${distraksi}`)
  }
  return(
    <div className="w-full container h-auto pt-6">
    <div className=" relative overflow-hidden p-5 flex-col justify-center mx-auto gap-1.5 w-80 h-auto rounded-2xl shadow-xl bg-gray-100">
      <div className="h-76 w-76 absolute rounded-full bg-gray-200 end-[-100px] bottom-[-100px]"></div>
      <p className=" ms-3 mb-5">Signup Form</p>

      <section>
        <form action={handlesubmit} className="mb-3 scale-90" >
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" placeholder="example@gmail.com" className=" shadow rounded-md line-clamp-2  border-2 p-1 w-64"/>
          <br />

          <label htmlFor="password">Password : </label>
          <input type="password" name="password" placeholder="Abcd12345!" className=" shadow rounded-md  line-clamp-2 border-2 p-1 w-64"/>
          <br />

          <label htmlFor="Description">Description : </label>
          <textarea className=" w-64 h-auto block bg-gray-100 border-2 rounded-md " name="Description" id="Descrption"></textarea>
          
          <fieldset className="mt-4 w-64 p-2 rounded-md border-black border">
            <legend>Employment Status:</legend>
            <label className=" me-3 mt-4" htmlFor="">
              <input className="me-2" type="radio" name="employment" value='Chapcta' />
              Chapcta
            </label>
            <label className=" mt-4" htmlFor="">
              <input className="me-2" type="radio" name="employment" value='Federasi'/>
              Federasi
            </label>
          </fieldset>

           <fieldset className="mt-4 w-64 p-2 rounded-md border-black border">
            <legend>distraksi</legend>
            <label className=" me-3 mt-4" htmlFor="">
              <input className="me-2" type="checkbox" name="distraksi" value='Chapcta1' />
              Chapcta
            </label>
            <label className=" mt-4" htmlFor="">
              <input className="me-2" type="checkbox" name="distraksi" value='Federasi1'/>
              Federasi
            </label>
  
          </fieldset>

          

          <button className=" border-2 rounded-xl my-5 text-sm p-2 hover:bg-black hover:text-white "> submit</button>

        </form>
      </section>
    </div>
    </div>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
) 





