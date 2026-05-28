

type GameTitleInfoProps = {
    title: string,
};


function GameTitleInfo({ title }: GameTitleInfoProps ){
    const versionData = [
        {
            id: 1,
            option: "Nintendo Switch",
        },
        {
            id: 2,
            option: "Nintendo Switch 2",
        },
        {
            id: 3,
            option: "Upgrade Pack",
        },
    ];

    return(
        <>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-700 tracking-wide">{title}</h2>

                <p className="text-xs xl:text-sm font-semibold text-gray-800">Select a version</p>

                <div className="flex flex-wrap gap-3 ">
                    {versionData.map((option, _) => {
                        return <label key={option.id} htmlFor="" className="border-2 border-gray-300 flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-semibold text-gray-800 rounded-lg">
                                <input type="radio" name="game-version" className="accent-red-600" /> 
                                {option.option}
                            </label>
                    })}
                </div>

            </div>
        </>
    );
};

export default GameTitleInfo;