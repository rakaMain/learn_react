import './index.css'

export default function MyForm(){
  return(
        <div id="form" className="w-full h-16 flex justify-center bg-whte items-center gap-x-2">
            <form action="" id="add-ingredient" className="flex justify-center items-center">
                <input 
                type="text" 
                aria-label="Add ingredient"
                placeholder="e. g. oregano"
                className=" border-1 border-gray-200 rounded-md h-6 text-sm p-3 "
                />
                <button className=" h-6 w-16 bg-black rounded-md overflow-hidden ms-2  text-white flex justify-center items-center"><p className="text-[12px]">+ add</p></button>
            </form>
        </div>
    )   
}