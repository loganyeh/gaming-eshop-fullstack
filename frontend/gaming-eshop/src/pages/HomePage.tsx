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

function HomePage(){
    
    return(
        <>
            <GameShowcase data={showcaseData}/>

            <FeaturedGames data={featureData} />

            <RedButtonBlock data={redButtonData} />

            <NewsSectionComp bigNewsData={bigNewsArticlesData} smallNewsData={smallNewsArticlesData} />

            <CharacterSectionComp data={characterSectionData} />

            <DigitalSectionComp data={bestSellersData} title="Digital best sellers" />
            <DigitalSectionComp data={newReleasesData} title="Digital new releases" />
        </>
    );
}

export default HomePage;