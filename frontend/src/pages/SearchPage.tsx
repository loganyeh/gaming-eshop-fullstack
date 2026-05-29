// hooks
import { useState, useEffect } from "react";

// comps
import SearchResults from "../components/SearchPageComponents/SearchResults";
import SearchFilters from "../components/SearchPageComponents/SearchFilters";
import DigitalSectionComp from "../components/HomePageComponents/DigitalSectionComp";

// data
import { filterNames } from "../data/SearchPage/FilterNameData";
import { bestSellersData } from "../data/HomePageData/DigitalData";
import NewsEventsResults from "../components/SearchPageComponents/NewsEventsResults";
import AdditionalResults from "../components/SearchPageComponents/AdditionalResults";

// apis
import { fetchAListOfGames } from "../api/rawg";

// types
import type { GamesObject } from "../api/rawg";

type SearchPageProps = {
    listOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
    defaultListOfGames: GamesObject[],
    // setDefaultListOfGames: React.Dispatch<React.SetStateAction<GamesObject[]>>,
};

function SearchPage({ listOfGames, setGameIdClick, defaultListOfGames }: SearchPageProps ){
    // const [defaultListOfGames, setDefaultListOfGames] = useState<GamesObject[]>([]);

    // useEffect(() => {
    //     async function getAListOfGames(){
    //         const data = await fetchAListOfGames();
    //         setDefaultListOfGames(data);
    //         console.log(data);

    //         return data;
    //     };

    //     getAListOfGames();
    // }, []);

    return(
        <>
            <div className="flex flex-col items-center">
                <SearchResults />
                <SearchFilters data={filterNames} />
            </div>
            
            {/* Game Results */}
            {listOfGames.length === 0 ?
            <DigitalSectionComp data={defaultListOfGames.slice(0, 10)} title="Game results" setGameIdClick={setGameIdClick} />
            :
            <DigitalSectionComp data={listOfGames} title="Game results" setGameIdClick={setGameIdClick} />
            }

            <div className="flex flex-col items-center">
                <NewsEventsResults />
                <AdditionalResults />
            </div>
        </>
    );
};

export default SearchPage;