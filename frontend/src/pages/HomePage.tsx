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

type HomePageProps = {
    defaultListOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
};

function HomePage({ defaultListOfGames, setGameIdClick }: HomePageProps ){
    
    return(
        <>
            <GameShowcase data={showcaseData}/>

            <FeaturedGames data={featureData} defaultListOfGames={defaultListOfGames} />

            <RedButtonBlock data={redButtonData} />

            <NewsSectionComp bigNewsData={bigNewsArticlesData} smallNewsData={smallNewsArticlesData} />

            <CharacterSectionComp data={characterSectionData} />

            <DigitalSectionComp data={defaultListOfGames.slice(0, 5)} title="Digital best sellers" setGameIdClick={setGameIdClick}/>
            <DigitalSectionComp data={defaultListOfGames.slice(5, 10)} title="Digital new releases" setGameIdClick={setGameIdClick}/>
            {/* <DigitalSectionComp data={bestSellersData} title="Digital best sellers" setGameIdClick={setGameIdClick}/>
            <DigitalSectionComp data={newReleasesData} title="Digital new releases" setGameIdClick={setGameIdClick}/> */}
        </>
    );
}

export default HomePage;