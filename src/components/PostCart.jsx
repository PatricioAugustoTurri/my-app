
import Link from "next/link"

function PostCart({posts}) {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map ((a=>{
            return (
                <div className="p-2 bg-slate-100 shadow-lg rounded-xl gap-1 flex flex-col" key={a.id}>
                    <h1 className="md:text-xl font-bold">{a.id}. {a.title}</h1>
                    <p >{a.body}</p>
                    <Link href={`/posts/${a.id}`} className="p-2 bg-slate-200 rounded-xl flex justify-center items-center hover:bg-slate-300">Ver</Link>
                </div>
            )
        }))}
    </div>
    )
}

export default PostCart