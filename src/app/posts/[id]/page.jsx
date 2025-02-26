import Posts from "../page"
import { Suspense } from "react"

async function loadPost(a) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${a}`)
    const data = await res.json()
    return data

}

async function Page({ params }) {
    
    const post = await loadPost(params.id)

    return (
        <div className="flex gap-4 flex-col">
            <div>
                <h1 className="font-bold text-xl">{post.id}. {post.title}</h1>
                <p>{post.body}</p>
            </div>
            <hr className="font-bold" />
            <h3>Otras publicaciones</h3>
            <Suspense fallback={
                <div>Loading...</div>
            }>
                <Posts />
            </Suspense>
        </div>
    )
}

export default Page