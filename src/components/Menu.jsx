"use client"

import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Montserrat } from "next/font/google"

const montserrat2 = Montserrat({
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal"],
    subsets: ["latin" , "latin-ext"]
})

function Menu() {
    const [abrir, setAbrir] = useState(false)

    return (
        <div>
            <button onClick={() => setAbrir(!abrir)} className="text-white hover:text-customColorFlamingo"><MenuIcon size={35} /></button>
            {abrir && <div className="fixed w-full h-full bg-black opacity-50 z-10 top-0 left-0" onClick={() => setAbrir(false)} />}
            <div className={`h-full bg-customColorLilac fixed ${abrir ? "-translate-x-0" : "-translate-x-full"} transition-all shadow-xl duration-500 ease-in-out z-20 top-0 left-0 w-60 rounded-md`}>
                <div className="flex flex-col gap-8 p-6">
                    <Link href="/" className={`${montserrat2.className}text-base text-white hover:text-customColorFlamingo`} onClick={() => setAbrir(false)}>Home</Link>
                    <Link href="/about" className={`${montserrat2.className}text-base text-white hover:text-customColorFlamingo`} onClick={() => setAbrir(false)}>About</Link>
                    <Link href="/tienda" className={`${montserrat2.className}text-base text-white hover:text-customColorFlamingo`} onClick={() => setAbrir(false)}>Tienda</Link>
                    <Link href="/posts" className={`${montserrat2.className}text-base text-white hover:text-customColorFlamingo`} onClick={() => setAbrir(false)}>Posts</Link>
                </div>
            </div>
        </div>
    )
}

export default Menu