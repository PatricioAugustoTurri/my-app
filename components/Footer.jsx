import { FacebookIcon, InstagramIcon, Mail } from "lucide-react"
import Link from "next/link"

function Footer() {
    return (
        <div className="flex justify-center items-center gap-10">
            <p><Mail size={42} className="text-white hover:text-customColorOliver ring-2 rounded-full p-1 ring-white hover:ring-customColorOliver"/></p>
           <Link href={"https://instagram.com/bendedetta"} className="text-white hover:text-customColorOliver ring-2 rounded-full p-1 ring-white hover:ring-customColorOliver"><InstagramIcon size={35} /></Link>
           <Link href={"https://www.facebook.com/bendedetta"} className="text-white hover:text-customColorOliver ring-2 rounded-full p-1 ring-white hover:ring-customColorOliver"><FacebookIcon size={35} /></Link>
        </div>
    )
}

export default Footer