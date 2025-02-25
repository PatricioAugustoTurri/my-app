import Link from "next/link"
import { borel } from "../app/layout"
import Menu from "./Menu"
import { ShoppingCart } from "lucide-react"

function NavBar() {
    return (
        <div className="fixed w-full h-32 bg-customColorFlamingo shadow-lg top-0 left-0 content-center rounded-md">
            <div className="flex justify-between items-center lg:px-20 px-10 text-white font-bold ">
                <div className="block md:hidden" >
                    <Menu />
                </div>
                <div className={borel.className + " md:text-4xl text-3xl text-customColorPoppy text-center md:text-start"}>
                    <h1>Illustrando</h1>
                    <h1>ad occhi chiusi</h1>
                </div>
                <div className="hidden md:block">
                    <div className="gap-10 flex">
                        <Link href="/" className="hover:text-customColorPoppy">Home</Link>
                        <Link href="/about" className="hover:text-customColorPoppy">About</Link>
                        <Link href="/tienda" className="hover:text-customColorPoppy">Tienda</Link>
                        <Link href="/posts" className="hover:text-customColorPoppy">Posts</Link>
                    </div>
                </div>
                <div>
                    <Link href="/carrito" className="hover:text-customColorPoppy"><ShoppingCart size={30} /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar