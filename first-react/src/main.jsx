// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
import './index.css'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )






// ------------- nav and main ---------------------
// function MyNavbar(){
//   return (
//     <nav className="navigation">
//       <div className="n1">icon</div>
//       <div className="n2">
//         <h4>react is great</h4>
//       </div>
//       <div className="n3">user</div>
//   </nav>
//   )
// }
// function MainContent() {
//   return <h1>react is great</h1>
// }


// import { createElement } from "react";
// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"))
// const reactElement = createElement("h1", null, createElement("span", null, " iam in span"))

// root.render(
//   <div>
//     <MyNavbar />
//     <MainContent />
//   </div>
// )





 // -----------h1 appendchild ----------

// import { createElement } from "react";

// ---------- imperative 
// const one = document.createElement("h1")
// one.textContent = "hai"
// one.className = "header"


// document.getElementById("root").appendChild(one)

// ---------- narative

// import { createElement } from "react";
// import { createRoot } from "react-dom/client"

// function one () {
//   return <h1 className='header'> hai </h1> 
// }

// const root = createRoot(document.getElementById("root"))

// root.render(
//   one()
// )

// ---------------image
// function OneMyline() {
//   return <h1>react is great</h1>
// }
// import { createRoot } from "react-dom/client"


// const root = createRoot(document.getElementById("root"))
// root.render(
//   <div>
//     <img src="src\assets\react.svg" alt="" srcset="" />
//     <OneMyline />
//   </div>
  
// )

//-------------------project simple-------------------

//  import './index.css'

// import { createElement } from "react";
// import { createRoot } from "react-dom/client"

// function MyheadLine() {
//   return <h3 className='text-red-100'>Fun fuct about react </h3>
// }

// function MylistLine() {
//   return (
//     <ul>
//       <li> lorem ipsum dolor amet</li>
//       <li> lorem ipsum dolor amet</li>
//       <li> lorem ipsum dolor amet</li>
//       <li> lorem ipsum dolor amet</li>
//     </ul>
//   )
// }

// const root = createRoot(document.getElementById("root"))
// root.render(
//   <div>
//     <img src="src\assets\react.svg" className=''  alt="" srcset="" />
//     <MyheadLine />
//     <MylistLine />
//   </div>
// )

//  


//--------------------------- costum component chalange1 

// import { createElement } from "react";
// import { createRoot } from "react-dom/client"

// function MyheadLine() {
//   return <h3 className='font-bold'>Fun fuct about react </h3>
// }

// function MylistLine() {
//   return (
//     <ol className='mt-2 font-semibold '>
//       <li>1. lorem ipsum dolor amet</li>
//       <li>2. lorem ipsum dolor amet</li>
//       <li>3. lorem ipsum dolor amet</li>
//       <li>4. lorem ipsum dolor amet</li>
//     </ol>
//   )
// }

// function MainBodyList() {
//   return (
//   <div className='p-4'>
//     <img src="src\assets\react.svg" className='mb-2'  alt="" srcset="" />
//     <MyheadLine />
//     <MylistLine />
//   </div>
//   )
// }


// const root = createRoot(document.getElementById("root"))
// root.render(
//   <MainBodyList />
// )




//--------------------------- costum component chalange2

// import { createElement } from "react";
// import { createRoot } from "react-dom/client"


// function MyHeaderLine() {
//   return (
//     <header className='countainer flex justify-between h-20 w-full bg-[#213547] font-semibold items-center-safe px-7'>
//       <div>
//          <img src="src\assets\react.svg" alt="" srcset="" />
//          <p>react</p>
//       </div>
//       <div>nav</div>
//       <div>user</div>
//     </header>
//   )
// }

// function MyBodyLine() {
//   return (
//     <div className='container  p-2.5 h-[400px] w-full flex flex-col'>
//       <h2 className='font-semibold text-2xl '> i like  reacet</h2>
//       <div className='mt-7'>
//         <ol className=''>
//           <li> 1. suka saja </li>
//           <li> 2. suka saja </li>
//           <li> 3. suka saja </li>
//           <li> 4. suka aaja </li>
//         </ol>
//       </div>
//     </div>
//   )
// }

// function MyFooterLine() {
//   return (
//     <footer className=' container w-full flex justify-center pt-[60px]'>
//       <p> @ 2025 codingan by raka</p>
//     </footer>
//   )
// }
// function MyCodeLine(){
//   return (
//     <div>
//          <MyHeaderLine /> 
//          <MyBodyLine />
//          <MyFooterLine />
//     </div>
//   )
// }



// const root = createRoot(document.getElementById("root"))
// root.render(
//   MyCodeLine()
// )


// ----------------fragment utntuk merapihkan div yyanng membungkus

// import { createElement } from "react";
// import { createRoot } from "react-dom/client"
// import { Fragment  } from 'react';

// function HeadMiLine(){
//   return (
//     <>
//         <header><p>thi header</p></header>
//         <main><h1>Halo</h1><p>Lorem, ipsum dolor sit amet co</p></main>
//         <footer><p>@ 2035 copyright </p></footer>
//     </>
//   )
// }

// const root = createRoot(document.getElementById("root"))

// root.render(
//   HeadMiLine()
// )
//---------------------------day3


import { createElement } from "react";
import { createRoot } from "react-dom/client"
import MyHead from './header';
import MyBody from './div';



function MyCodeLine(){
  return (
    <>
      <MyHead />
      <MyBody />
    </>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(
  MyCodeLine()
)
