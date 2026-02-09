import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Use DATA api in react-router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
// Use an export page so all pages can be imported in one line
import { Homepage, SinglePost } from "./pages/exportPages"
import "./index.css"

// Where we configure the routes available in the web
const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/homepage" replace />
    },
    {
        path: "/homepage",
        element: <Homepage />
    },
    {
        // For dynamic routing
        path: "/posts/:id",
        element: <SinglePost />
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
