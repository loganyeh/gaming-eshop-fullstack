// state

// comps
import SearchResults from "../components/SearchPageComponents/SearchResults";
import SearchFilters from "../components/SearchPageComponents/SearchFilters";
import DigitalSectionComp from "../components/HomePageComponents/DigitalSectionComp";

// data
import { filterNames } from "../data/SearchPage/FilterNameData";
import { bestSellersData } from "../data/HomePageData/DigitalData";
import NewsEventsResults from "../components/SearchPageComponents/NewsEventsResults";
import AdditionalResults from "../components/SearchPageComponents/AdditionalResults";

// types
import type { GamesObject } from "../api/rawg";

type SearchPageProps = {
    listOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
};

function SearchPage({ listOfGames, setGameIdClick }: SearchPageProps ){
    return(
        <>
            <div className="flex flex-col items-center">
                <SearchResults />
                <SearchFilters data={filterNames} />
            </div>
            
            {/* Game Results */}
            <DigitalSectionComp data={listOfGames} title="Game results" setGameIdClick={setGameIdClick} />

            <div className="flex flex-col items-center">
                <NewsEventsResults />
                <AdditionalResults />
            </div>
        </>
    );
};

export default SearchPage;