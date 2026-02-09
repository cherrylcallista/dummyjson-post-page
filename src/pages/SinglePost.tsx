import { useParams } from "react-router"
import { AppLayout } from "../components/exportComponents"

function SinglePost() {
    const { id } = useParams()

    return (
        <AppLayout>
            Post { id }
        </AppLayout>
    )
}

export default SinglePost
