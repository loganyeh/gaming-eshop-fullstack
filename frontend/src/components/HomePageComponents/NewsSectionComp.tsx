import type { BigArticleType, SmallArticleType } from "../../data/HomePageData/NewsData";

type NewsSectionCompProp = {
    bigNewsData: BigArticleType[],
    smallNewsData: SmallArticleType[],
};

function NewsSectionComp({ bigNewsData, smallNewsData }: NewsSectionCompProp ){

    return(
        <>
            {/* News Section */}
            <section className="border-b border-gray-300 flex justify-center px-4 py-8 w-full
                                lg:px-6 lg:py-10 xl:py-12
            ">
                
                <div className="flex flex-col gap-5 max-w-6xl
                                lg:gap-10
                ">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-600 tracking-wider
                                    md:text-3xl
                    ">News</h2>

                    {/* Big News Article */}
                    <div className="grid gap-5
                                    md:grid-cols-2 md:gap-8
                    ">
                        {bigNewsData.map((news, _) => {
                            return <div key={news.id} className="flex flex-col gap-2
                                                                md:gap-4
                                    ">     
                                        <img src={news.url} alt="" className="aspect-[16/9] bg-gray-300 rounded-lg 2xl:rounded-xl"/>
                                        {/* <div className="aspect-[16/9] bg-gray-300 rounded-lg"></div> */}

                                        <div className="flex items-center gap-1.5">
                                            <i className='bx bx-plus-medical text-2xl text-red-600' ></i>
                                            <time className="text-sm text-gray-600 tracking-wider
                                                            md:text-base
                                            ">{news.date}</time>
                                        </div>

                                        <p className="text-base font-bold text-gray-700 tracking-wide line-clamp-2
                                                    md:text-lg
                                        ">{news.subtitle}</p>

                                        <p className="text-sm text-gray-600 tracking-wide line-clamp-2
                                                    md:text-base
                                        ">{news.description}</p>

                                        <button className="border-b-2 border-red-600 w-fit font-bold text-red-600">Read more</button>
                                    </div>
                        })}
                    </div>

                    {/* Small News Article */}
                    <div className="grid grid-cols-2 gap-8
                                    md:grid-cols-4
                    ">
                        {smallNewsData.map((news, _) => {
                            return <div key={news.id} className="flex flex-col gap-3">
                                        <img src={news.url} alt="" className="border border-gray-300 aspect-video bg-gray-300 rounded-lg 2xl:rounded-xl"/>
                                        {/* <div className="border border-gray-400 aspect-video bg-gray-300 rounded-lg"></div> */}

                                        <div className="flex items-center gap-1.5">
                                            <i className={news.boxicon} ></i>
                                            <time className="text-sm text-gray-600 tracking-wider
                                                            md:text-base
                                            ">{news.date}</time>
                                        </div>

                                        <p className="min-h-[3.75rem] text-sm font-bold text-gray-700 line-clamp-3
                                                    md:text-base
                                        ">{news.subtitle}</p>

                                        <button className="border-b-2 border-red-600 w-fit font-bold text-red-600">Read more</button>
                                    </div>
                        })}
                    </div>

                    <button className="border flex justify-center items-center gap-4 py-2.5 bg-red-600 text-white rounded-lg
                                        xl:px-5 xl:w-fit
                    ">
                        <i className='bx bxs-comment-detail text-xl
                                    md:text-2xl
                        ' ></i>
                        <p className="text-lg font-medium tracking-wide">See all news articles</p>
                    </button>

                </div>

            </section>
        </>
    );
};

export default NewsSectionComp;