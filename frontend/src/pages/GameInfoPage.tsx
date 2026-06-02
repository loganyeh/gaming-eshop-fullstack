// Components
import DigitalSectionComp from "../components/HomePageComponents/DigitalSectionComp";
import ShippingHeader from "../components/GameInfoPageComponents/ShippingHeader";
import GameInfoCard from "../components/GameInfoPageComponents/GameInfoCard";
import GameBlurb from "../components/GameInfoPageComponents/GameBlurb";
import RelatedTags from "../components/GameInfoPageComponents/RelatedTags";

// Data
import { bestSellersData } from "../data/HomePageData/DigitalData";
import AboutThisItem from "../components/GameInfoPageComponents/AboutThisItem";

// type
import type { GamesObject } from "../api/rawg";
import type { WishlistSchemaProp } from "./Wishlist";

type GameInfoPageProps = {
    gameInfoLoading: boolean,
    gameInfoData: GamesObject,
    wishlistData: WishlistSchemaProp[],
};

function GameInfoPage({ gameInfoLoading, gameInfoData, wishlistData }: GameInfoPageProps ){

    return(
        <>
            <ShippingHeader />
            <GameInfoCard gameInfoLoading={gameInfoLoading} gameInfoData={gameInfoData} />
            {/* GameInfoCardProps in this ^^ */}

            <div className="xl:flex xl:flex-col xl:items-center">
                <GameBlurb description={gameInfoData?.description_raw} image={gameInfoData?.background_image} />
                <RelatedTags />
                <AboutThisItem />
                <DigitalSectionComp data={bestSellersData} title="More like this" wishlistData={wishlistData} />
                {/* Fine Print */}
                <p className="px-4 pt-12 w-full max-w-6xl text-[10px] md:text-xs xl:text-sm text-gray-700">
                    WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.<br /><br />
                    Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/online<br /><br />
                    Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
                </p>
            </div>
        </>
    );
};

export default GameInfoPage;    