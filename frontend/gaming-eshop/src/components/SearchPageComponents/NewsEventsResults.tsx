

function NewsEventsResults(){

    return(
        <>
            <section className="p-4 w-full max-w-6xl">
                {/* Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-600 tracking-wider">News & Events results</h2>
                    <button className="border-b-2 border-red-600 w-fit text-sm md:text-base font-semibold md:font-bold text-red-600">See all</button>
                </div>

                {/* Game Scrolling */}
                <div className="flex gap-8 pl-5 w-full overflow-x-auto">
                    {Array.from({ length: 2 }).map((_, index) => {
                        return <div key={index} className="flex flex-col gap-6 py-6 md:py-10 w-52 md:w-62 shrink-0">
                                    <img src="/bestSellersImages/stardewvalley.avif" alt="" className="aspect-video object-cover object-center rounded-xl" />
                
                                    <p className="text-sm md:text-base font-bold text-gray-700 line-clamp-3">Hit the turf in EA SPORTS Madden NFL 26!</p>

                                    <button className="border-b-2 w-fit font-semibold text-red-600">Read more</button>
                                </div>
                    })}

                    <button className="mt-6 px-8 md:text-lg bg-red-600 text-white font-semibold whitespace-nowrap rounded-lg">
                        See all
                    </button>

                </div>
            </section>
        
        </>
    );
};

export default NewsEventsResults;