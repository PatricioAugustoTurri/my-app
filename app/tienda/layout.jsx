import Link from "next/link"

function TiendaLayout ({children}) {
    return (
        <div>
            <div>
                <Link href="/tienda/categorias">Categorias</Link>
                <Link href="/tienda/categorias/computadoras">Computadoras</Link>
            </div>
            {children}
        </div>
    )
}

export default TiendaLayout