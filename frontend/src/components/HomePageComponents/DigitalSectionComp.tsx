import { Link } from "react-router-dom";

import type { DigitalType } from "../../data/HomePageData/DigitalData";
import type { GamesObject } from "../../api/rawg";
import type { WishlistSchemaProp } from "../../pages/Wishlist";

type DigitalProp = {
    data: DigitalType[] | GamesObject[],
    title: string,
    setGameIdClick?: React.Dispatch<React.SetStateAction<number>>,
    wishlistData: WishlistSchemaProp[],
    setWishlistData: React.Dispatch<React.SetStateAction<WishlistSchemaProp[]>>,
};

function DigitalSectionComp({ data, title, setGameIdClick, wishlistData, setWishlistData }: DigitalProp ){
    
    async function addGameToWishlist(game: GamesObject){
        const res = await fetch("http://localhost:3000/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                gameID: game.id,
                name: game.name,
                background_image: game.background_image,
             }),
        });

        const data = await res.json();
        console.log(`wishlist response`, data);
    };   

    function wishlistToggle(gameID: number){
        return wishlistData.some(
            game => game.gameID === gameID,
        );
    };

    return(
        <>
            <div className="flex justify-center w-full">
                <div className="px-4 pt-8 pb-0 overflow-x-auto lg:px-6 lg:pt-10 xl:max-w-6xl xl:px-0 xl:pt-12">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                        <h2 className="text-xl font-bold text-gray-600 tracking-wider md:border-r md:border-gray-300 md:pr-4 md:text-3xl  ">{title}</h2>
                        {/* <div className="text-gray-600">I</div> */}
                        <button className="border-b-2 border-red-600 w-fit text-sm font-semibold text-red-600 md:text-base">See full list</button>
                    </div>

                    {/* Game Slideshow */}
                    <div className="flex gap-8 pt-8 pb-6 pl-5 overflow-x-auto xl:pl-8">
                        {data.map((game, _) => {
                            return <div key={game.id} className="border border-gray-300 rounded-lg">
                                <Link to={"/game"} onClick={() => {setGameIdClick(game.id)}} className="">
                                    <div className="w-52 aspect-square bg-gray-300 bg-center bg-cover rounded-t-lg md:w-64" style={{ backgroundImage: `url(${game.url || game.background_image})`}}></div>
                                </Link>

                                <div className="flex flex-col gap-2 p-2 pt-4 md:p-4">
                                    <div className="min-h-16">
                                        <h3 className="text-sm font-bold text-gray-700 line-clamp-2 md:text-base">{game.gameTitle || game.name}</h3>
                                        <time className="block text-[10px] font-light text-gray-500 md:text-xs">{game.date || game.released}</time>
                                        {/* the ^ moves when changing from div to time ??? */}
                                    </div>

                                    <div className={`px-1.5 min-h-[1rem] w-fit text-[10px] font-medium ${game.tagColor} text-white rounded-full md:text-xs md:px-2 md:py-0.5`}>{game.tag || ""}</div>

                                    <p className="text-sm font-semibold text-gray-800 md:text-base">${game.price || "19.99"}</p>

                                    <div className="flex justify-between items-end">
                                        <div className="flex justify-between items-center gap-1 text-gray-700">
                                            <i className='bx bx-plus-medical' ></i>
                                            <div className="text-[10px] md:text-xs">Games</div>
                                        </div>
                                        
                                        <i onClick={() => addGameToWishlist(game)} className={`bx bxs-heart text-2xl ${wishlistToggle(game.id) ? "text-red-600" : "text-gray-300 "} md:text-3xl cursor-pointer`}></i>

                                    </div>
                                </div>
                            </div>
                        })}

                    </div>

                </div>

            </div>
        </>
    );
};

export default DigitalSectionComp;