import Link from "next/link"
import { caprasimo } from "../layout"


function TiendaLayout ({children}) {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-8 text-2xl text-customColorOliver">
                <Link href="/tienda/categorias" className={caprasimo.className}>Categorias</Link>
                <Link href="/tienda/categorias/computadoras" className={caprasimo.className}>Computadoras</Link>
            </div>
            {/*{children}*/}
        </div>
    )
}

export default TiendaLayout