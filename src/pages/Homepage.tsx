import { AppLayout } from "../components/exportComponents"
import { Search, Dislike, Like } from "../assets/icons"
import { useEffect, useState } from "react"

type PostType = {
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
            <div className="flex flex-col gap-4 justify-between items-center">
                <h1 className="text-3xl font-bold">Dummyjson Posts</h1>
                <p className="text-gray-500 text-sm text-center">Choose posts from a variety of tags,<br /> or using a simple search</p>

                <div className="flex items-center px-4 py-2 border border-gray-500 rounded-md gap-4 mt-8">
                    <input type="text" placeholder="Search" className="outline-none"/>
                    <Search color="#6a7282" />
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mt-12">
                {
                    posts ?
                    <>
                    {
                        posts.map(p => (
                            <div key={p.id} className="p-6 border border-gray-500 rounded-lg flex flex-col gap-2 justify-between">
                                <p className="text-gray-500">Post #{ p.id }</p>
                                <h3 className="font-bold text-lg">{ p.title }</h3>

                                <div className="flex gap-2">
                                {
                                    p.tags.map(t => (
                                        <div key={t} className="text-xs py-1 px-2  text-gray-500 rounded-sm border border-gray-500">{ t }</div>
                                    ))
                                }
                                </div>

                                <div className="flex gap-4 items-center mt-6">
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
