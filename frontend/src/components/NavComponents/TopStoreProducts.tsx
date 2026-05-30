import { Link } from "react-router-dom";

// type
import type { GamesObject } from "../../api/rawg";

type TopStoreProductsProp = {
    loading: boolean,
    setisSearchPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    listOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
};

function TopStoreProducts({ loading, listOfGames, setisSearchPopUp, setGameIdClick }: TopStoreProductsProp ){

    return(
        <>
            <div className="flex flex-col gap-6 md:px-4 xl:w-full xl:max-w-6xl">
                <h1 className="text-2xl font-semibold text-gray-700">Top store products</h1>
                
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:grid-cols-3 w-full">
                    {/* Loading */}
                    {loading && <div className="border border-gray-300 flex gap-3 p-2 rounded-md">
                        <div className="flex justify-center items-center w-24 aspect-square bg-gray-300 rounded-md">
                            <i className='bx bx-loader-alt text-2xl text-gray-700 animate-spin'></i>
                        </div>
                    </div>}

                    {!loading && listOfGames.slice(0, 1).map((game, _) => {
                        return <Link to={"/game"} onClick={() => {setisSearchPopUp(false), setGameIdClick(game.id)}} key={game.id} className="border border-gray-300 flex gap-3 p-2 rounded-md">
                            <img src={game.background_image} alt="" className="w-24 aspect-square object-cover object-center bg-blue-300 rounded-md"/>

                            <div className="flex flex-col justify-center gap-3 w-full text-gray-700">
                                <h2 className="text-sm font-semibold tracking-wide">{game.name}</h2>

                                <div className="flex justify-between items-center text-gray-700">
                                    <div className="flex items-center gap-1">
                                        <i className='bx bx-plus-medical' ></i>
                                        <p className="text-xs">Games</p>
                                    </div>

                                    <i className='bx bx-heart text-xl text-red-600' ></i>
                                </div>
                            </div>

                        </Link>
                        })}
                    </div>
            </div>
        </>
    );
};

export default TopStoreProducts;