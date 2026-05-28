// comps 
import PagePaths from "./GameInfoCardComps/PagePaths";
import GameImages from "./GameInfoCardComps/GameImages";
import ESRB from "./GameInfoCardComps/ESRB";
import Compatibility from "./GameInfoCardComps/Compatibility";
import GameTitleInfo from "./GameInfoCardComps/GameTitleInfo";
import UpgradePack from "./GameInfoCardComps/UpgradePack";
import Price from "./GameInfoCardComps/Price";
import DownloadBtn from "./GameInfoCardComps/DownloadBtn";

// type
import type { GamesObject } from "../../api/rawg";

type GameInfoCardProps = {
    gameInfoData: GamesObject,
};

function GameInfoCard({ gameInfoData }: GameInfoCardProps ){
    

    return(
        <>
            <div className="xl:flex xl:justify-center bg-blue-100">
                {/* Game Price Info */}
                <section className="xl:mt-8 xl:-mb-8 md:px-10 md:pt-3 md:pb-12 xl:px-12 xl:py-8 w-full max-w-[1250px] bg-white md:shadow-lg xl:shadow-xl xl:rounded-xl">
                    <PagePaths />

                    <div className="md:flex md:gap-12">
                        {/* Left Side - Game Image Slideshow */}
                        <div className="md:flex md:flex-col md:gap-5 md:w-96 lg:w-130 xl:w-165">
                            <GameImages background_image={gameInfoData?.background_image} />
                            <div className="hidden md:flex items-center h-[72px] lg:w-full lg:max-w-md">
                                <ESRB />
                            </div>
                            <div className="hidden md:flex items-center gap-2.5 p-3 md:py-4 bg-gray-100 shadow rounded-md">
                                <Compatibility />
                            </div>
                        </div>

                        {/* Right Side - Game Description */}
                        <div className="flex flex-col gap-4 p-4 py-6 md:p-0 shadow-lg md:shadow-none">
                            <GameTitleInfo title={gameInfoData?.name} />
                            {/* why the ? in this scenatio bc the object might not have the information at first render */}
                            {/* <GameTitleInfo title={gameInfoData?.name || "Stardew Valley"} /> */}
                            <UpgradePack />
                            <Price />
                            <div className="flex items-center md:hidden h-[72px]">
                                <ESRB />
                            </div>
                            <DownloadBtn />
                            <p className="text-[10px] md:text-xs text-gray-600">This item will be sent to your system automatically after purchase</p>
                            <div className="border flex items-center gap-2.5 md:hidden p-3 bg-gray-100 shadow rounded-md">
                                <Compatibility />
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </>
    );
};

export default GameInfoCard;