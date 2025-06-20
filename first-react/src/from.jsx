import './index.css'
import React from 'react'

export default function MyForm(){

  const [ingredient, setiIngredient] = React.useState(["Chicken", "Oregano", "Tomatoes"])

  const ListInggredient = ingredient.map( n => (
    <li className=" text-[13px] text-black self-start" key={n}><i className='ri-price-tag-3-fill me-1'></i>{n}</li>
  ))
  

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient_form")
    newIng = ingredient.push(newIngredient)
    setiIngredient(newIng)
    console.log(newIng)
  }

  return(
        <div id="form" className="w-full h-auto flex-col flex justify-center bg-whte items-center gap-x-2">
            <form action="" id="add-ingredient" 
            className="flex justify-center items-center h-17"
            onSubmit={handleSubmit}
            >
                <input 
                type="text" 
                aria-label="Add ingredient"
                placeholder="e. g. oregano"
                className=" border-1 border-gray-200 rounded-md h-6 text-sm p-3 w-65 "
                name='ingredient_form'
                
                />
                <button 
                className=" h-6 w-30 bg-black rounded-md overflow-hidden ms-2 text-[10px]  text-white flex justify-center items-center">+ add ingredient</button>
            </form>
            <ul className='  relative flex  flex-col w-95 lining-nums '>
                {ListInggredient}
            </ul>
        </div>
    )   
}