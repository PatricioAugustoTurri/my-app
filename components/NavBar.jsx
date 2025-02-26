import Link from "next/link"
import { caprasimo, montserrat} from "../app/layout"
import Menu from "./Menu"
import { ShoppingBasket } from "lucide-react"

function NavBar() {
    return (
        <div className="fixed w-full h-32 bg-customColorOliver shadow-lg top-0 left-0 rounded-md content-center z-10">
            <div className="flex justify-between items-center lg:px-20 md:px-10 px-5 text-white font-bold ">
                <div className="block md:hidden" >
                    <Menu />
                </div>
                <div className="text-customColorFlamingo flex flex-col items-center justify-center text-2xl md:text-4xl gap-0">
                    <h1 className={caprasimo.className}>illustrando</h1>
                    <h1 className={caprasimo.className}>ad occhi chiusi</h1>
                </div>
                <div className="hidden md:block">
                    <div className="gap-10 flex">
                        <Link href="/" className={montserrat.className + " hover:text-customColorFlamingo text-xl"}>Home</Link>
                        <Link href="/about" className={montserrat.className + " hover:text-customColorFlamingo text-xl"}>About</Link>
                        <Link href="/tienda" className={montserrat.className + " hover:text-customColorFlamingo text-xl"}>Shop</Link>
                        <Link href="/posts" className={montserrat.className + " hover:text-customColorFlamingo text-xl"}>Posts</Link>
                    </div>
                </div>
                <div>
                    <Link href="/carrito" className="hover:text-customColorFlamingo"><ShoppingBasket size={35} /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar