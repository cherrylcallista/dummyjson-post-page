import type React from "react"
import { Header, Footer, PreFooter } from  "./exportComponents"

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen">
            <div className="mx-70 p-8 h-full">
                <Header />
                <div>{ children }</div>
                <PreFooter />
                <Footer />
            </div>
        </div>
    )
}

export default AppLayout
