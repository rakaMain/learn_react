import './index.css'
import React from 'react'

export default function MyForm(){
    const [conatct, setConteact] = React.useState({
        fnamae : "raka",
        lname : "kayla",
        phone : "085559254601",
        email : "rakakayla7@gmail.com",
        isFav : false
    })

    const value = conatct.isFav ? "ri-star-fill" : "ri-star-line"
    return (
        <>
        <div id='card' className=' container overflow-hidden bg-white  w-60 h-80  rounded-2xl shadow-md m-auto mt-20 flex flex-col'>
            <div className=' bg-amber-50 flex-1/2 flex'>
                <i className=' ri-user-fill text-amber-300  m-auto scale-300  '></i>
            </div>
            <div className=' bg-amber-100 flex-1/3 p-4'>
              <i className={value}></i>
              <p className=' font-semibold'>{conatct.fnamae}{" "}{conatct.lname}</p>
              <p className=' opacity-50 text-[11px]'>{conatct.phone}</p>
              <p className=' opacity-25 text-[10px]'>{conatct.email}</p>            
            </div>
        </div>
        </>
    )
}