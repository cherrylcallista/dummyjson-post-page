import { useParams } from "react-router"
import { AppLayout } from "../components/exportComponents"
import { useEffect, useState } from "react"
import type { PostType } from "./Homepage"
import { Dislike, Like } from "../assets/icons"

function SinglePost() {
    const { id } = useParams()
    const [ post, setPost ] = useState<PostType>()

    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(`https://dummyjson.com/posts/${id}`)
            const data = await res.json()

            setPost(data)
        }

        fetchPost()
    }, [])

    return (
        <AppLayout>
        {
            post ? 
            <div className="flex flex-col gap-8 border-t border-sky-950 pt-8">
                <h1 className="font-bold text-3xl">{ post.title }</h1>

                <div className="flex gap-2">
                {
                    post.tags.map(t => (
                        <div key={t} className="py-1 px-2 text-xs text-gray-500 bg-white rounded-sm border-gray-500 border">{ t }</div>
                    ))
                }
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex gap-2 text-xs text-gray-500">
                        <Like color="green" />
                        { post.reactions.likes }
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500">
                        <Dislike color="red" />
                        { post.reactions.dislikes }
                    </div>
                </div>

                <div className="text-justify">
                    { post.body }
                </div>
            </div>
            :
            <div>
                <p>Post not found</p>
            </div>
        }
        </AppLayout>
    )
}

export default SinglePost
