

function AdditionalResults(){

    return(
        <>
            <section className="p-4 w-full max-w-6xl">
                <h2 className="text-xl md:text-3xl font-bold text-gray-600 tracking-wider">Additional Results</h2>

                {Array.from({ length: 3 }).map((_, index) => {
                    return <div key={index} className="border-b border-gray-200 flex flex-col md:flex-row gap-2 md:gap-8 py-4 md:py-8">
                                <div className="flex gap-5">
                                    <img src="bestSellersImages/stardewvalley.avif" alt="" className=" w-32 md:w-64 aspect-video object-cover object-center rounded-lg md:shrink-0" />
                                    <p className="md:hidden font-bold text-red-600 line-clamp-3">Stardew Valley for Nintendo Switch - Nintendo Official Site</p>
                                </div>
                                
                                <div className="flex flex-col md:justify-between gap-2">
                                    <p className="hidden md:line-clamp-1 text-lg font-bold text-red-600">Stardew Valley for Nintendo Switch - Nintendo Official Site</p>
                                    <p className="text-sm md:text-base text-gray-700 tracking-wider line-clamp-2">Buy <span className="font-bold">Stardew Valley</span> and shop other great Nintendo products online at the official My Nintendo Store.</p>
                                    <button className="border-b-2 w-fit text-sm md:text-base font-bold text-red-600">Read More</button>
                                </div>

                            </div>
                })}
            </section>
        </>
    );
};

export default AdditionalResults;