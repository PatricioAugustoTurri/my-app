import Carousell from "@/components/Carousell"
import { caprasimo } from "./layout"

function Home() {

    return (
        <div className="flex flex-col p-2">
            <h1 className={`${caprasimo.className} mb-4 font-bold text-3xl flex items-center justify-center text-customColorPoppy`}>Benvenuti nel mio mondo illustrato ...</h1>
            <div className="md:grid grid-cols-3 gap-4 hidden">
                <img src="/nubes.jpg" alt="imagen" className="rounded-xl shadow-xl w-auto h-auto hover:scale-105 transition-all duration-700" />
                <img src="/setlla.jpg" alt="imagen" className="rounded-xl shadow-xl w-auto h-auto hover:scale-105 transition-all duration-700" />
                <img src="/mundo.jpg" alt="imagen" className="rounded-xl shadow-xl w-auto h-auto hover:scale-105 transition-all duration-700" />
            </div>
            <div className="md:hidden w-full h-auto">
               <Carousell/>
            </div>
        </div>
    )
}

export default Home