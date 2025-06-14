import { createRoot } from "react-dom/client"
import MyHead from './header';
import MyCard from './div';
import './index.css'
import "remixicon/fonts/remixicon.css";


function Mycode(){
  return(
    <>
      <MyHead />
      <div className=" relative flex flex-wrap">
        <MyCard
            img="src\assets\gambar\Black Clover Shounen Shoump.jfif"
            nama="Black Clover"
            kanji="ブラッククローバー"
            date="3 Oktober 2017"
            mangaka="Yuki Tabata"
            rating="8.1 (MyAnimeList)"
            desk="  Di dunia sihir, Asta adalah anak tanpa kekuatan sihir, tapi bermimpi menjadi Kaisar Sihir. Bersama saingannya, Yuno, ia bertarung melawan kekuatan gelap."
        
        />
        <MyCard
            img="src\assets\gambar\sakamoto days ch_ 113 color page.jfif"
            nama="Sakamoto Days"
            kanji="サカモトデイズ"
            date="3 juni 2025"
            mangaka="Yuto Suzuki"
            rating=" 8.3 (MyAnimeList)"
            desk="Sakamoto, mantan pembunuh bayaran legendaris, kini hidup damai sebagai pemilik toko. Namun, masa lalunya terus membayanginya dan memaksanya kembali ."
        
        />
        <MyCard
            img="src\assets\gambar\fire.jfif"
            nama="Fire Force"
            kanji="炎炎ノ消防隊"
            date=" 6 Juli 2019"
            mangaka="Atsushi Ōkubo"
            rating=" 7.7 (MyAnimeList)"
            desk="Shinra Kusakabe bergabung dengan pasukan pemadam khusus untuk melawan Infernals—manusia yang berubah menjadi api—dan mengungkap"
        
        />
        <MyCard
            img="src\assets\gambar\download (1).jfif"
            nama="Black Clover"
            kanji="ワンピース"
            date="20 Oktober 1999"
            mangaka=" Eiichiro Oda"
            rating="8.7 (MyAnimeList)"
            desk=" Monkey D. Luffy berlayar untuk menjadi Raja Bajak Laut, mencari harta karun legendaris “One Piece”, sambil membentuk kru dan menghadapi berbagai musuh kuat."
        
        />
      </div>

    </>
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
)