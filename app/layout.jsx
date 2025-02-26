import "./globals.css"
import NavBar from "../components/NavBar"
import { Montserrat, Caprasimo, Vibur, Pacifico } from "next/font/google"
import Footer from "../components/Footer"

export const metadata = {
    title: "Illustrando",
    description: "Esta es mi pagina de prueba para una illustradora",
    keywords: "tienda, online, illustra"
}


export const montserrat = Montserrat({
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal"],
    subsets: ["latin"],
})

export const caprasimo = Caprasimo ({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

export const vibur = Vibur ({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

export const pacifico = Pacifico ({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin", "latin-ext"]
})

function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <NavBar />
                <main className="pt-40 p-10 min-h-screen bg-white">
                    {children}
                </main>
                <footer className="flex justify-center items-center w-full h-40 bg-customColorFlamingo shadow-xl">
                    <Footer />
                </footer>
            </body>
        </html>
    )
}

export default RootLayout