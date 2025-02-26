import Link from "next/link"
import Menu from "./Menu"
import { ShoppingBasket } from "lucide-react"
import { caprasimo, vibur } from "@/app/layout"

function NavBar() {
    return (
        <div className="fixed w-full h-32 bg-customColorOliver shadow-lg top-0 left-0 rounded-md content-center z-10">
            <div className="flex justify-between items-center lg:px-20 md:px-10 px-5 font-bold content-center">
                <div className="block md:hidden" >
                    <Menu />
                </div>
                <div className="text-white flex flex-col items-center justify-center text-3xl md:text-4xl gap-0">
                    <h1 className={vibur.className}>illustrando</h1>
                    <h1 className={vibur.className}>ad occhi chiusi</h1>
                </div>
                <div className="hidden md:block">
                    <div className="gap-10 flex">
                        <Link href="/" className={caprasimo.className + " text-customColorFlamingo text-xl hover:text-white"}>Home</Link>
                        <Link href="/about" className={caprasimo.className + " text-customColorFlamingo text-xl hover:text-white"}>About</Link>
                        <Link href="/tienda" className={caprasimo.className + " text-customColorFlamingo text-xl hover:text-white"}>Shop</Link>
                        <Link href="/posts" className={caprasimo.className + " text-customColorFlamingo text-xl hover:text-white"}>Posts</Link>
                    </div>
                </div>
                <div>
                    <Link href="/carrito" className="hover:text-white text-customColorFlamingo md:text-white md:hover:text-customColorFlamingo"><ShoppingBasket size={35} /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar