

function RelatedTags(){
    const gameTags = [
        "Action", "Simulation", "Character customization", "Choose your own path",
        "Pixel art", "Romance", "Meet up & play together", "Online co-op", 
        "Play together on multiple consoles", "Play together on one console",
    ];

    return(
        <>
            <section className="flex flex-col gap-3 px-4 w-full max-w-6xl">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-700 tracking-wide">Related tags</h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                    {gameTags.map((tag, index) => {
                        return <p key={index} className={`${index > 5 ? "hidden md:inline" : ""} px-2 py-1 text-sm font-bold bg-gray-100 text-gray-700 rounded-md`}>{tag}</p>
                    })}
                </div>

                <button className="md:hidden flex items-center gap-2 py-2 text-red-600"> 
                    <i className='bx bx-plus-medical text-lg'></i>
                    <p className="text-sm font-bold">Show more</p>
                </button>
            </section>
        </>
    );
};

export default RelatedTags;