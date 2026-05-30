// comps
import SearchResults from "../components/SearchPageComponents/SearchResults";
import SearchFilters from "../components/SearchPageComponents/SearchFilters";
import DigitalSectionComp from "../components/HomePageComponents/DigitalSectionComp";

// data
import { filterNames } from "../data/SearchPage/FilterNameData";
import NewsEventsResults from "../components/SearchPageComponents/NewsEventsResults";
import AdditionalResults from "../components/SearchPageComponents/AdditionalResults";

// apis

// types
import type { GamesObject } from "../api/rawg";
import type { WishlistSchemaProp } from "./Wishlist";

type SearchPageProps = {
    listOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
    defaultListOfGames: GamesObject[],
    wishlistData: WishlistSchemaProp[],
};

function SearchPage({ listOfGames, setGameIdClick, defaultListOfGames, wishlistData }: SearchPageProps ){

    return(
        <>
            <div className="flex flex-col items-center">
                <SearchResults />
                <SearchFilters data={filterNames} />
            </div>
            
            {/* Game Results */}
            {listOfGames.length === 0 ?
            <DigitalSectionComp data={defaultListOfGames.slice(0, 1)} title="Game results" setGameIdClick={setGameIdClick} wishlistData={wishlistData} />
            :
            <DigitalSectionComp data={listOfGames} title="Game results" setGameIdClick={setGameIdClick} wishlistData={wishlistData} />
            }

            <div className="flex flex-col items-center">
                <NewsEventsResults />
                <AdditionalResults />
            </div>
        </>
    );
};

export default SearchPage;