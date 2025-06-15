
export default function MyCardy(){
  const Manusia = ["raka", "kayla", "mahhmud"]
  const namaH2 = Manusia.map((n) => <h3 className=" font-semibold">{n}</h3>)

  const h2nama = <h2>bayu</h2>

  return(
    <>
      {namaH2}
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
