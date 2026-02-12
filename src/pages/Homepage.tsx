import { AppLayout } from "../components/exportComponents"
import { Search, Dislike, Like } from "../assets/icons"
import { useEffect, useState } from "react"
import { Link } from "react-router"

export type PostType = {
    id: number,
    title: "",
    body: "",
    tags: string[],
    reactions: {
        likes: number,
        dislikes: number
    },
    views: number,
    userId: number
}

function Homepage() {
    const [ posts, setPosts ] = useState<PostType[]>()

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch("https://dummyjson.com/posts")
            const data = await res.json()

            // console.log(data)

            setPosts(data.posts)
        }

        fetchPosts()
    }, [])

    return (
        <AppLayout>
            <div className="flex flex-col justify-between items-center gap-4">
                <h1 className="text-3xl font-bold">Dummyjson Posts</h1>
                <p className="text-gray-500 text-sm text-center">Choose posts from a variety of tags,<br /> or using a simple search</p>

                <div className="flex items-center px-4 py-2 gap-4 mt-8 border-gray-500 rounded-md border">
                    <input type="text" placeholder="Search" className="outline-none"/>
                    <Search color="#6a7282" />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-12 w-full">
                {
                    posts ?
                    <>
                    {
                        posts.map(p => (
                            <Link to={`/posts/${p.id}`} key={p.id}>
                            <div  
                                className="flex flex-col justify-between p-6 gap-2 bg-white border-gray-500 rounded-lg cursor-pointer border hover:bg-gray-100 h-full"
                            >
                                <p className="text-gray-500">Post #{ p.id }</p>
                                <h3 className="font-bold text-lg">{ p.title }</h3>

                                <div className="flex gap-2">
                                {
                                    p.tags.map(t => (
                                        <div key={t} className="py-1 px-2 text-xs text-gray-500 bg-white rounded-sm border-gray-500 border">{ t }</div>
                                    ))
                                }
                                </div>

                                <div className="flex items-center gap-4 mt-6">
                                    <div className="flex gap-2 text-xs text-gray-500">
                                        <Like color="green" />
                                        { p.reactions.likes }
                                    </div>
                                    <div className="flex gap-2 text-xs text-gray-500">
                                        <Dislike color="red" />
                                        { p.reactions.dislikes }
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))
                    }
                    </>
                    :
                    <div>
                        No posts found.
                    </div>
                }
                </div>
            </div>
        </AppLayout>
    )
}

export default Homepage
