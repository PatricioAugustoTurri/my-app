import PostCart from "@/components/PostCart"

async function loadPosts() {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}

async function Posts() {

    const posts = await loadPosts()
    
    return (
        <div >
            <PostCart posts={posts} />
        </div>
    )
}

export default Posts