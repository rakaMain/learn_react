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