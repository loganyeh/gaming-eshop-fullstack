import { Link } from "react-router-dom";
import type { GamesObject } from "../../api/rawg";

type featureProp = {
    defaultGamesLoading: boolean,
    defaultListOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
};

function FeaturedGames({ defaultGamesLoading, defaultListOfGames, setGameIdClick }: featureProp){

    return(
        <>
        {/* Featured Section */}
        <section className="border-b border-gray-300 pl-4 py-8 lg:pl-6 lg:py-10 xl:pl-8 xl:py-12 2xl:pl-10 ">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-600 tracking-wider md:text-3xl 2xl:pl-[216px] ">Featured</h2>

                {/* <i className='bx bx-loader text-3xl text-gray-600 animate-spin'></i> */}
                {/* Featured Games */}
                <div className="flex gap-6 py-5 overflow-x-auto lg:pl-4 xl:pl-0 ">
                    {defaultGamesLoading && Array.from({ length: 10 }).map((_, index) => {
                        return <div key={index} className="border border-gray-300 flex justify-center items-center h-64 md:h-[316px] w-52 rounded-lg shrink-0 md:w-64 ">
                            <i className='bx bx-loader text-3xl text-gray-600 animate-spin'></i>
                        </div>
                    })}

                    {!defaultGamesLoading && defaultListOfGames.slice(0, 3).map((game, index) => {
                        return <div key={index} className="border border-gray-300 w-52 rounded-lg shrink-0 md:w-64 ">
                            {/* Game Image */}
                            <Link to={"/game"}>
                                <img onClick={() => setGameIdClick(game.id)} src={game.background_image} alt="" className="aspect-video rounded-t-lg"/>
                            </Link>
                            {/* <div className="aspect-video bg-gray-300 rounded-t-lg"></div> */}

                            {/* Game Info */}
                            <div className="flex flex-col px-2 py-4">
                                <h3 className="h-[72px] text-sm font-semibold text-gray-800 line-clamp-2 md:h-24 md:text-base ">{game.name}</h3>
                                {/* <h3 className="h-[72px] text-sm font-semibold text-gray-800 line-clamp-2 md:h-24 md:text-base ">{game.description}</h3> */}
                                {/* fix this line-clamp-2 */}

                                <div className="flex flex-col gap-1.5">
                                    <p className={`px-2 w-fit text-[10px] font-semibold bg-red-600 text-white tracking-wide rounded-full md:px-2.5 md:text-xs`}>Available Now</p>
                                    <p className={`border-l-2 border-red-600 pl-1 text-[10px] md:pl-2 md:text-sm md:tracking-wide `}>Nintendo Switch 2</p>
                                    {/* <p className={`px-2 w-fit text-[10px] font-semibold ${game.tagColor} text-white tracking-wide rounded-full md:px-2.5 md:text-xs `}>{game.tag}</p>
                                    <p className={`border-l-2 ${game.eventColor} pl-1 text-[10px] md:pl-2 md:text-sm md:tracking-wide `}>{game.event}</p> */}
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </section>
        </>
    )
};

export default FeaturedGames;