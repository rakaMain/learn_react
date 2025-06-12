export default function MyHead(){
  return(
    <header className='rounded-b-2xl mx-auto relative container px-7 items-center-safe  flex justify-between w-full bg-[#2f2f2f] h-20'>
        <img src="src\assets\react.svg" className='size-[35x] ' alt="" />
        <ul className='font font-semibold text-[12px] flex justify-around  w-64'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <div className='flex flex-col justify-center'>
        <div className='bg-sky-700 h-7 w-7 rounded-full'></div>
        <p className='font-bold '>user</p>
        </div>
    </header>    
    )
}
