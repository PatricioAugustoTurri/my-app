

function Home() {
    return (
        <div className="flex flex-col p-4">
            <div className="md:grid grid-cols-3 gap-4 hidden">
                <img src="/nubes.jpg" alt="imagen" className="rounded-xl shadow-xl w-auto h-auto hover:scale-110 transition-all duration-700" />
                <img src="/IMG_3014.jpg" alt="imagen"  className="rounded-xl shadow-xl w-auto h-auto hover:scale-110 transition-all duration-700" />
                <img src="/mundo.jpg" alt="imagen"  className="rounded-xl shadow-xl w-auto h-auto hover:scale-110 transition-all duration-700" />
            </div>
            <div className="md:hidden w-full h-auto">
                <img src="/nubes.jpg" alt="imagen" className="rounded-xl shadow-xl w-auto h-auto hover:scale-110 transition-all duration-700" />
            </div>
        </div>
    )
}

export default Home