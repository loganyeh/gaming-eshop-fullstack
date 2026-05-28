import type { FilterNameType } from "../../data/SearchPage/FilterNameData";

type SearchFilterProp = {
    data: FilterNameType[]
};

function SearchFilters({ data }: SearchFilterProp ){
    
    return(
        <>
            <section className="flex items-center gap-2 p-3 w-full max-w-[1350px] 2xl:max-w-[1475px] bg-gray-100 md:rounded-xl overflow-x-auto">
                {data.map((filter, index) => {
                    return <button key={index} className={`border flex items-center gap-1.5 px-4 py-2.5 ${index === 0 ? "bg-blue-800 text-white" : "bg-white text-blue-800"} shrink-0 rounded-full`}>
                                <i className={`${filter.boxicon} text-lg`} ></i>
                                <p className="text-sm md:text-base font-bold">{filter.text}</p>
                            </button>
                })}
            </section>
        </>
    );
};

export default SearchFilters;