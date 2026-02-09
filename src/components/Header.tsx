import { NavLink } from "react-router"

function Header() {
    const navigationOptions = [
        {
            title: "Navigation 1",
            href: "/"
        },
        {
            title: "Navigation 2",
            href: "/"
        },
        {
            title: "Navigation 3",
            href: "/"
        }
    ]
    return (
        <div className="flex justify-between items-center mb-12">
            {/* Title */}
            <h1 className="text-2xl font-bold text-sky-950">DummyPosts</h1>

            {/* Navigation */}
            <div className="flex gap-6">
            {
                navigationOptions.map(n => (
                    <div key={n.title} className="text-gray-500 hover:underline">
                        <NavLink to={n.href}>
                            { n.title }
                        </NavLink>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Header
