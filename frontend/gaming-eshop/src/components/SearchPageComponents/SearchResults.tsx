

function SearchResults(){

    return(
        <>
            <section className="flex flex-col gap-5 px-4 py-6 w-full max-w-[1350px] 2xl:max-w-[1475px]">
                <p className="text-[10px] md:text-xs text-gray-700 tracking-wide">Showing 6 results of 6</p>

                <div className="flex justify-between md:justify-start md:gap-3 items-end">
                    <p className="text-2xl md:text-3xl font-bold text-gray-600 tracking-wider">Results for "stardew"</p>

                    <button className="flex items-center gap-1 text-red-600 shrink-0">
                        <i className='bx bxs-pencil text-2xl' ></i>
                        <p className="font-bold">Edit</p>
                    </button>
                </div>

            </section>
        </>
    );
};

export default SearchResults;