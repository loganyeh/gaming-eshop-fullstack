import GameShowcase from "../components/HomePageComponents/ShowcaseComp";
import FeaturedGames from "../components/HomePageComponents/FeaturedSectionComp";
import RedButtonBlock from "../components/HomePageComponents/RedButtonBlock";
import NewsSectionComp from "../components/HomePageComponents/NewsSectionComp";
import CharacterSectionComp from "../components/HomePageComponents/CharacterSectionComp";
import DigitalSectionComp from "../components/HomePageComponents/DigitalSectionComp";

// DATA imports
import { showcaseData } from "../data/HomePageData/showcaseData";
import { RedButtonData } from "../data/HomePageData/redButtonData";
import { bigNewsArticlesData, smallNewsArticlesData } from "../data/HomePageData/NewsData";
import { characterSectionData } from "../data/HomePageData/CharacterSectionData";

// types
import type { GamesObject } from "../api/rawg";
import type { WishlistSchemaProp } from "./Wishlist";

type HomePageProps = {
    defaultListOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
    wishlistData: WishlistSchemaProp[],
};

function HomePage({ defaultListOfGames, setGameIdClick, wishlistData }: HomePageProps ){
    
    return(
        <>
            <GameShowcase data={showcaseData}/>

            <FeaturedGames defaultListOfGames={defaultListOfGames} setGameIdClick={setGameIdClick} />

            <RedButtonBlock data={RedButtonData} />

            <NewsSectionComp bigNewsData={bigNewsArticlesData} smallNewsData={smallNewsArticlesData} />

            <CharacterSectionComp data={characterSectionData} />

            <DigitalSectionComp data={defaultListOfGames.slice(0, 3)} title="Digital best sellers" setGameIdClick={setGameIdClick} wishlistData={wishlistData}/>
            {/* <DigitalSectionComp data={defaultListOfGames.slice(10, 20)} title="Digital new releases" setGameIdClick={setGameIdClick} wishlistData={wishlistData}/> */}
            {/* <DigitalSectionComp data={bestSellersData} title="Digital best sellers" setGameIdClick={setGameIdClick}/>
            <DigitalSectionComp data={newReleasesData} title="Digital new releases" setGameIdClick={setGameIdClick}/> */}
        </>
    );
}

export default HomePage;