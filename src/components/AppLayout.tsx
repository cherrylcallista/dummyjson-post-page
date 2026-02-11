import type React from "react"
import { Header, Footer, PreFooter } from  "./exportComponents"

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-70 p-8 relative">
            <Header />
            <div>{ children }</div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default AppLayout
