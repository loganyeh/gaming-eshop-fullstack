// hooks
import { useState } from "react";
import { Link } from "react-router";

// types 
import type { WishlistSchemaProp } from "../../pages/Wishlist";

type GamesWishlistedProp = {
    data: WishlistSchemaProp[],
    setWishlistData: React.Dispatch<React.SetStateAction<WishlistSchemaProp[]>>,
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
};

function GamesWishlisted({ data, setWishlistData, setGameIdClick }: GamesWishlistedProp ){
    const [removedGames, setRemovedGames] = useState<string[]>([]);

    async function removeGame(_id: string){
        try {
            const res = await fetch(`https://gaming-eshop-fullstack-1.onrender.com/wishlist/${_id}`, {
                method: "DELETE",  
            });

            if(!res.ok){
                throw new Error("Failed to remove game");
            };
    
            const data = await res.json();
    
            setWishlistData(prev => 
                prev.filter(game => game._id !== _id)
            );
    
            return data;
            
        } catch (error) {
            console.error(`Wishlist DELETE request failed`, error);
        };
    };

    return(
        <>
            <section className="xl:flex xl:justify-center px-3">
                <div className="py-6 md:py-3 xl:w-full xl:max-w-6xl text-sm md:text-base font-bold md:tracking-wide">
                    {removedGames.map((game, index) => {
                        return <p key={index} className="border-b border-gray-300 py-5 md:py-3 text-gray-700">Removed <span className="text-red-600 underline decoration-2">{game}</span> from your Wish List.</p>
                    })}
                </div>
            </section>

            <section className="px-3.5 xl:flex xl:flex-col xl:items-center">
                {data.map((game, index) => {
                    return <div key={index} className={`${data.length - 1 === index ? "" : "border-b border-gray-300"} flex flex-col gap-4 py-8 md:flex-row md:justify-between md:items-center xl:w-full xl:max-w-6xl`}>
                        <Link to={"/game"} onClick={() => setGameIdClick(game.gameID)} className="flex items-center gap-5 md:w-full md:max-w-md lg:max-w-2xl">
                            <img src={game.background_image} alt="" className="w-28 aspect-square object-cover object-center rounded-lg md:w-32 md:shrink-0" />

                            <div className="flex flex-col text-gray-700 tracking-wide lg:gap-0.5">
                                <p className="text-lg font-bold md:text-xl md:line-clamp-3">{game.name}</p>
                                <time className="text-sm md:text-base">1/1/2000</time>
                            </div>
                        </Link>

                        <div className="flex justify-between items-center md:gap-5 md:tracking-wide">
                            <p className="text-sm font-semibold text-gray-700 md:text-base">$19.99</p>
                            <button className="hidden md:flex py-3.5 w-fit font-semibold bg-red-600 text-white rounded-md tracking-wide md:px-6 md:text-lg">Pre-order</button>
                            <i onClick={() => {removeGame(game._id); setRemovedGames(prev => [...prev, game.name])}} className='bx bxs-heart text-2xl text-red-600 md:text-3xl'></i>
                        </div>

                        <button className="md:hidden py-3.5 w-full font-semibold bg-red-600 text-white rounded-md tracking-wide">Pre-order</button>
                    </div>
                })}
            </section>
        </>
    );
};

export default GamesWishlisted;