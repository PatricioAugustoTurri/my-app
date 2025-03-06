import { NextResponse } from "next/server"

console.log (process.env.TOKEN)

export async function GET () {

    const res = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data)
}

export async function POST (request) {
    const {nombre , apellido} = await request.json()
    console.log(nombre , apellido)
    return NextResponse.json({
        message: "crear datos"
    })
}

export function PUT () {
    return NextResponse.json({
        message: "actualizar datos"
    })
}

export function DELETE () {
    return NextResponse.json({
        message: "borrar datos"
    })
}