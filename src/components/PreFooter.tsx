
function PreFooter() {
    return (
        <div className="grid grid-cols-[40%_60%] gap-8 h-60 my-20">
            <div className="bg-sky-800 rounded-md py-8 w-full text-white flex flex-col items-center text-center gap-4">
                <h2 className="font-bold text-xl">Subscribe To <br />Our Newsletter</h2>
                <p className="w-3/4 text-slate-300 text-xs">Get weekly food news, articles, and videos delivered to your inbox.</p>

                <form className="flex gap-2 mt-4">
                    <input type="email" placeholder="Email" className="bg-white text-gray-500 rounded-xs pl-2 py-1"/>
                    <button type="submit" className="bg-sky-950 p-2 rounded-xs">Sign Up</button>
                </form>
            </div>

            <div>
                <p className="font-bold">RECENT POSTS</p>
            </div>
        </div>
    )
}

export default PreFooter
