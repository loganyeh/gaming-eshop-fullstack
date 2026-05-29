import GameShowcase from "../components/HomePageComponents/ShowcaseComp";
import FeaturedGames from "../components/HomePageComponents/FeaturedSectionComp";
import RedButtonBlock from "../components/HomePageComponents/RedButtonBlock";
import NewsSectionComp from "../components/HomePageComponents/NewsSectionComp";
import CharacterSectionComp from "../components/HomePageComponents/CharacterSectionComp";
import DigitalSectionComp from "../components/HomePageComponents/DigitalSectionComp";

// DATA imports
import { showcaseData } from "../data/HomePageData/showcaseData";
import { featureData } from "../data/HomePageData/featureData";
import { redButtonData } from "../data/HomePageData/RedButtonData";
import { bigNewsArticlesData, smallNewsArticlesData } from "../data/HomePageData/NewsData";
import { characterSectionData } from "../data/HomePageData/CharacterSectionData";
import { bestSellersData, newReleasesData } from "../data/HomePageData/DigitalData";

// types
import type { GamesObject } from "../api/rawg";
import type { WishlistSchemaProp } from "./Wishlist";

type HomePageProps = {
    defaultListOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
    wishlistData: WishlistSchemaProp[],
    setWishlistData: React.Dispatch<React.SetStateAction<WishlistSchemaProp[]>>,
};

function HomePage({ defaultListOfGames, setGameIdClick, wishlistData, setWishlistData }: HomePageProps ){
    
    return(
        <>
            <GameShowcase data={showcaseData}/>

            <FeaturedGames data={featureData} defaultListOfGames={defaultListOfGames} setGameIdClick={setGameIdClick} />

            <RedButtonBlock data={redButtonData} />

            <NewsSectionComp bigNewsData={bigNewsArticlesData} smallNewsData={smallNewsArticlesData} />

            <CharacterSectionComp data={characterSectionData} />

            <DigitalSectionComp data={defaultListOfGames.slice(0, 1)} title="Digital best sellers" setGameIdClick={setGameIdClick} wishlistData={wishlistData} setWishlistData={setWishlistData}/>
            <DigitalSectionComp data={defaultListOfGames.slice(2, 3)} title="Digital new releases" setGameIdClick={setGameIdClick} wishlistData={wishlistData} setWishlistData={setWishlistData}/>
            {/* <DigitalSectionComp data={bestSellersData} title="Digital best sellers" setGameIdClick={setGameIdClick}/>
            <DigitalSectionComp data={newReleasesData} title="Digital new releases" setGameIdClick={setGameIdClick}/> */}
        </>
    );
}

export default HomePage;