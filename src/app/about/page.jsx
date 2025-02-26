"use client"

import { useRouter } from "next/navigation"

function About() {
    const router = useRouter()

    return (
        <div>
            <h1>Sobre mi</h1>
            <button
                className="bg-customColorOliver hover:bg-customColorLilac text-white font-bold py-2 px-4 rounded-md"
                onClick={()=>{
                    router.push("/")
                }}
            >
                Volver
            </button>
        </div>
    )
}

export default About