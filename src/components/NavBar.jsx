import { DarkModeButton } from "../components/DarkModeButton";

export function NavBar() {
    return(
        <div className=" h-36 w-full flex items-center justify-center  ">
            <nav className=" h-[70%] w-[90%] flex items-center justify-between">                
                <article className="flex items-center" >
                    <box-icon  name='dumbbell' size='70px'  ></box-icon>
                    <h1 className="text-7xl text-yellow-400 font-montserrat font-bold" >TITULO</h1>
                </article> 
                <div className="h-[80%] w-[48%] flex items-center justify-between">
                    <ul className=" flex  justify-between font-montserrat font-bold text-2xl space-x-4 dark:text-gray-200 " >
                        <li className="border-b-4 border-transparent hover:border-b-yellow-400 transition-colors duration-300 cursor-pointer " >INICIO</li>
                        <li className="border-b-4 border-transparent hover:border-b-yellow-400 transition-colors duration-300 cursor-pointer " >HOMBRES</li>
                        <li className="border-b-4 border-transparent hover:border-b-yellow-400 transition-colors duration-300 cursor-pointer " >Elemento 3</li>
                        <li className="border-b-4 border-transparent hover:border-b-yellow-400 transition-colors duration-300 cursor-pointer " >Elemento 4</li>
                    </ul>
                    <article className="flex items-center justify-center  " >
                        <DarkModeButton />
                    </article>
                </div>
                
            </nav>
        </div>
    )
}