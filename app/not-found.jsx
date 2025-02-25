import Link from "next/link"

function NotFound () {
    return (
        <div>
            <h1>404</h1>
            <Link href="/">Go back home</Link>
        </div>
    )
}

export default NotFound