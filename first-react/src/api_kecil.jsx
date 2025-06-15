import Card from "./div"
import data_anime from "./data_anime" 


export default function MyCardy(){
  const dataAnime = data_anime.map(function(data){
    return <Card 
        img = {data.img}
        nama = {data.nama}
        kanji = {data.kanji}
        date = {data.date}
        mangaka = {data.mangaka}
        rating = {data.rating}
        desk = {data.desk}
    />

  })

  return(
    <main>
        {dataAnime}
    </main>
  )
}

// export default function MyFooter(){
//   return(
//     <header className='rounded-2xl mt-[12px] mx-auto  relative container px-7 items-center-safe  flex justify-center w-full bg-[#2f2f2f] h-20'>
//        <p className='font-semibold text-sm'> @ 2025 codingan by raka</p>
//     </header>    
//   )
// }
