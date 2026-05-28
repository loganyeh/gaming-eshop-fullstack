

function GamesWishlisted(){
    const mockWishlist = [
        {
            image: "",
            title: "Star Fox",
            released: "06/25/26",
            price: "49.99",
        },
        {
            image: "",
            title: "FINAL FANTASY VII REBIRTH",
            released: "06/03/26",
            price: "49.99",
        },
        {
            image: "",
            title: "Tomodachi Life: Living the Dream",
            released: "04/16/26",
            price: "59.99",
        },
    ];

    return(
        <>
            <section className="px-3.5 xl:flex xl:flex-col xl:items-center">
                {mockWishlist.map((game, index) => {
                    return <div key={index} className={`${mockWishlist.length - 1 === index ? "" : "border-b border-gray-300"} flex flex-col gap-4 py-8 md:flex-row md:justify-between md:items-center xl:w-full xl:max-w-6xl`}>
                        <div className="flex items-center gap-5 md:w-full md:max-w-md lg:max-w-2xl">
                            <img alt="" className="bg-blue-300 w-28 aspect-square rounded-lg md:w-32 md:shrink-0" />

                            <div className="flex flex-col text-gray-700 tracking-wide lg:gap-0.5">
                                <p className="text-lg font-bold md:text-xl md:line-clamp-3">{game.title}</p>
                                <time className="text-sm md:text-base">{game.released}</time>
                            </div>
                        </div>

                        <div className="flex justify-between items-center md:gap-5 md:tracking-wide">
                            <p className="text-sm font-semibold text-gray-700 md:text-base">${game.price}</p>
                            <button className="hidden md:flex py-3.5 w-fit font-semibold bg-red-600 text-white rounded-md tracking-wide md:px-6 md:text-lg">Pre-order</button>
                            <i className='bx bxs-heart text-2xl text-red-600 md:text-3xl' ></i>
                        </div>

                        <button className="md:hidden py-3.5 w-full font-semibold bg-red-600 text-white rounded-md tracking-wide">Pre-order</button>
                    </div>
                })}
            </section>
        </>
    );
};

export default GamesWishlisted;