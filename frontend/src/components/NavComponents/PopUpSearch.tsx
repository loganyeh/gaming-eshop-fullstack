// comps
import SearchInput from "./SearchInput";
import TrendingTopics from "./TrendingTopics";
import TopStoreProducts from "./TopStoreProducts";

// data
import { trendingTopics } from "../../data/NavData/TrendingTopicData";
import { externalLinks } from "../../data/NavData/ExternalLinkData";
import AdditionalResults from "./AdditionalResults";

// type
import type { GamesObject } from "../../api/rawg";

type PopUpSearchProp = {
    loading: boolean,
    isSearchPopUp: boolean,
    setIsSearchPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
    listOfGames: GamesObject[],
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
};

function PopUpSearch({ loading, isSearchPopUp, setIsSearchPopUp, searchQuery, setSearchQuery, listOfGames, setGameIdClick }: PopUpSearchProp ){

    return(
        <>
            <section className={`${isSearchPopUp ? "translate-y-0" : "-translate-y-full"} fixed top-0 left-0 flex flex-col xl:items-center gap-6 xl:gap-0 p-4 pb-10 xl:p-0 h-screen w-screen bg-white xl:bg-black/50 transition-transform duration-300 overflow-y-auto`}>
            {/* <section className={`border ${isSearchPopUp ? "translate-y-0" : "-translate-y-full"} fixed top-0 left-0 flex flex-col xl:items-center gap-6 p-4 pb-10 xl:p-0 xl:pb-14 h-screen w-screen bg-white xl:bg-black/50 transition-transform duration-300 overflow-y-auto`}> */}
                <SearchInput setIsSearchPopUp={setIsSearchPopUp} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                <div className="flex flex-col justify-center xl:items-center 2xl:items-start gap-6 xl:p-6 xl:pb-14 2xl:px-28 w-full bg-white">
                    <div className="flex flex-col xl:flex-row xl:justify-between gap-6 xl:w-full xl:max-w-7xl 2xl:max-w-[1550px]">
                        { !searchQuery && <TrendingTopics data={trendingTopics} /> }
                        { searchQuery && <TopStoreProducts loading={loading} listOfGames={listOfGames} setisSearchPopUp={setIsSearchPopUp} setGameIdClick={setGameIdClick} />}
                    </div>

                    { searchQuery && <AdditionalResults data={externalLinks} /> }
                </div>
            </section>
        </>
    );
};

export default PopUpSearch;