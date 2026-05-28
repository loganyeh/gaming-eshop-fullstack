

type GameBlurbProps = {
    description: string,
    image: string
};

function GameBlurb({ description, image }: GameBlurbProps ){
    const introText = description?.split(" ").slice(0, 5).join(" ");
    
    return(
        <>
            <section className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6 px-4 pt-16 pb-14 md:py-24 w-full max-w-6xl">
                <div className="flex flex-col lg:justify-start gap-3">
                    <div className="flex flex-col gap-3">
                        <p className="text-lg md:text-xl font-bold text-gray-700 tracking-wide">{introText}...</p>
                        <p className="text-sm md:text-base text-gray-700 tracking-wide line-clamp-10">
                            {description}
                        </p>
                    </div>

                    <button className="flex items-center gap-2 px-2 md:px-0 text-red-600"> 
                        <i className='bx bx-plus-medical text-xl'></i>
                        <p className="text-lg font-bold">Read more</p>
                    </button>

                    <p className="text-[10px] md:text-xs text-gray-700">Software description provided by the publisher.</p>

                    <button className="py-3 lg:px-8 lg:w-fit text-base md:text-lg font-medium md:font-semibold bg-red-600 text-white tracking-wide rounded-md">Explore this game's official website</button>
                </div>

                <img src={image} alt="" className="mt-4 md:mt-0 md:w-[350px] lg:w-[475px] xl:w-[525px] aspect-video object-cover object-center rounded-lg"/>
            </section>
        </>
    );
};

export default GameBlurb;