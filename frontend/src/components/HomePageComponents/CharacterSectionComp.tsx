import type { CharacterDataType } from "../../data/HomePageData/CharacterSectionData";

type CharacterSectionProp = {
    data: CharacterDataType[],
};

function CharacterSectionComp({ data }: CharacterSectionProp ){

    return(
        <>
            {/* Characters Section */}
            <section className="border-b border-gray-300 flex justify-center px-4 py-8 w-full
                                    lg:px-6 lg:py-10 xl:py-12
                ">

                <div className="flex flex-col gap-4 max-w-6xl">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-600 tracking-wider
                                md:text-3xl
                    ">Characters</h2>
                    
                    <div className="grid grid-cols-2 gap-5
                                    md:grid-cols-4
                    ">
                        {data.map((character, index) => {
                            return <div key={index} className="flex flex-col gap-2">
                                        <img src={character.url} alt="" className={`border border-gray-100 ${character.bgColor} rounded-lg
                                                                                    xl:rounded-2xl
                                        `} />
                                        {/* <div className="border border-gray-400 aspect-square bg-gray-300 rounded-lg"></div> */}
                                        <h3 className="text-lg font-bold text-gray-800 tracking-wide
                                                    md:text-xl
                                        ">{character.gameTitle}</h3>
                                    </div>
                        })}
                    </div>

                </div>

            </section>
        </>
    );
};

export default CharacterSectionComp;