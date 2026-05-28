import type { RedButtonType } from "../../data/HomePageData/RedButtonData";

type RedButtonProp = {
    data: RedButtonType[],
};

function RedButtonBlock({ data }: RedButtonProp ){

    return(
        <>
        {/* Red Button Sections */}
            {data.map((redSection, index) => {
                return <section key={index} className="border-b border-gray-300 flex justify-center px-4 py-8
                                                        lg:px-6 lg:py-10 xl:px-8 xl:py-12
                ">
                            <div className="flex flex-col gap-6 w-full max-w-6xl
                                            xl:gap-10
                            ">
                                <div className="flex flex-col gap-4
                                                xl:gap-10
                                ">
                                    <h2 className="text-xl font-bold text-gray-600 tracking-wider
                                                    md:text-3xl
                                    ">{redSection.title}</h2>
                                    <img src={redSection.urlMobile} alt="" className="object-cover object-center rounded-lg
                                                                                        md:hidden
                                    "/>
                                    <img src={redSection.urlMD} alt="" className="hidden object-cover object-center rounded-lg
                                                                                    md:block
                                    "/>
                                    {/* <div className="aspect-[19/9] bg-gray-300 rounded-lg"></div> */}
                                </div>

                                <div className="flex flex-col gap-6
                                                xl:flex-row xl:items-center
                                ">
                                    <p className="text-lg font-bold text-gray-600 tracking-wide
                                                md:text-xl
                                    ">{redSection.description}</p>

                                    <button className="py-2.5 text-lg font-medium text-center bg-red-600 text-white rounded
                                                        md:text-xl xl:px-5 xl:shrink-0 xl:rounded-lg
                                    ">{redSection.button}</button>
                                </div>

                                {redSection.finePrint && 
                                    <p className="text-[10px] text-gray-600
                                                md:text-xs
                                    ">{redSection.finePrint}</p>
                                }
                            </div>

                        </section>
            })}
        </>
    )
};

export default RedButtonBlock;