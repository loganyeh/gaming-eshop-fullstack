import type { ShowcaseType } from "../../data/HomePageData/showcaseData";

type ShowcaseProp = {
    data: ShowcaseType[],
};

function GameShowcase({ data }: ShowcaseProp){

    return(
        <>
            {/* Game Showcase */}
            <section className="">
                {/* Main Slide */}
                <img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/articles/2026/crack-open-yoshis-next-adventure/2250x1266_availablenow_main" className="bg-blue-200 aspect-[9/10] xl:h-[550px] xl:w-full xl:aspect-[0] 2xl:h-[690px] object-cover object-center" />

                {/* Slide Preview */}
                <div className="border-b border-gray-300 flex justify-center items-center gap-3.5 mx-4 py-5
                                md:pb-16 md:gap-6 lg:mx-6 xl:mx-8 2xl:mx-64
                ">
                    <button className="flex justify-center items-center h-8 w-8 bg-red-600 rounded-full"><i className='bx bx-pause text-4xl text-white' ></i></button>
                    {data.map((game, index) => {
                        return <div key={index} className={`w-12 aspect-square ${game.bgColor} rounded-lg`}></div>
                    })}
                </div>
            </section>
        </>
    )
}

export default GameShowcase;