
export default function MyCardy(props){
  return(
    <>
      <div className="relative w-[350px] mx-auto mt-3  h-40 flex gap-x-2" id="card">
        <div className=" flex-1/4 me-2 bg-amber-400 rounded-xl"></div>
        <div className="relative flex-1/2  flex flex-col h-full  py-4 text-black">
            <p className=" font-semibold text-[10px]">JAPAN <span className=" text-gray-500  opacity-70 underline ms-2">see on google maps</span> </p>
            <p className=" font-extrabold text-3xl mb-3">JUDUL</p>
            <p className=" font-bold text-[10px]">12 Jan 2021 - 2024 Jan 2021</p>
            <p className="text-[8px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sit officiis asperiores modi cupiditate dolor iste temporibus et nesciunt, est, id aliquam consequatur voluptate, maiores tempore magni facere minima! Id!</p>
        </div>
      </div>
    </>
  )
}

// export default function MyFooter(){
//   return(
//     <header className='rounded-2xl mt-[12px] mx-auto  relative container px-7 items-center-safe  flex justify-center w-full bg-[#2f2f2f] h-20'>
//        <p className='font-semibold text-sm'> @ 2025 codingan by raka</p>
//     </header>    
//   )
// }
