import { useNavigate } from "react-router-dom";

type SearchInputProp = {
    setIsSearchPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
};


function SearchInput({ setIsSearchPopUp, searchQuery, setSearchQuery }: SearchInputProp ){
    const navigate = useNavigate();

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            navigate("/search");
            setSearchQuery("");
            setIsSearchPopUp(false);
        };

        if(e.key === "Escape") {
            setIsSearchPopUp(false);
        };
    };

    return(
        <>
            <div className="flex items-center xl:justify-between gap-4 xl:w-full bg-white">

                <div className="flex items-center gap-6 w-full">
                    {/* Nintendo Logo */}
                    <div className="hidden xl:block bg-red-600 p-4">
                        <h1 className="border-3 border-white px-1.5 w-fit font-bold text-white tracking-widest rounded-full">Nintendo</h1>
                    </div>

                    {/* Search Input */}
                    <label className="border-b border-red-600 flex gap-2 py-1 w-full xl:max-w-md 2xl:max-w-lg">
                        <i className='bx bx-search text-2xl text-red-600'></i>
                        <input onKeyDown={handleKeyDown} onChange={(e) => setSearchQuery(e.target.value)} type="text" value={searchQuery} placeholder="Search games, hardware, news, etc" className="w-full font-medium tracking-wide focus:outline-none" />
                    </label>

                </div>

                {/* Exit Click */}
                <div onClick={() => setIsSearchPopUp(false)} className="flex justify-center items-center xl:mx-4 bg-gray-400 rounded-full cursor-pointer">
                    <i className='bx bx-x text-2xl text-white hover:text-red-500 active:text-red-700' ></i>
                </div>


            </div>
        </>
    );
};

export default SearchInput;