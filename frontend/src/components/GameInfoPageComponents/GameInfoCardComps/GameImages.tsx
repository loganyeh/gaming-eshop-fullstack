

type GameImagesProps = {
    gameInfoLoading: boolean,
    background_image: string,
};

function GameImages({ gameInfoLoading, background_image }: GameImagesProps ){

    return(
        <>
            <div className="lg:flex lg:flex-col lg:gap-3">
                {gameInfoLoading ? 
                    <div className="object-cover object-center aspect-video bg-gray-300 md:rounded-xl lg:rounded-2xl animate-pulse"></div>
                :
                    <img src={background_image} alt="" className="object-cover object-center aspect-video md:rounded-xl lg:rounded-2xl"/>
                }

                {/* Game Preview Images */}
                <div className="flex gap-3 xl:gap-4 px-1 py-2 overflow-x-auto scroll-smooth">
                    {Array.from({ length: 3}).map((_, index) => (
                        <div key={index}>
                            {gameInfoLoading ? 
                                <div className="h-10 lg:h-12 aspect-video object-cover object-center bg-gray-300 rounded-lg animate-pulse"></div>
                            : 
                                <img src={background_image} alt="" className="h-10 lg:h-12 aspect-video object-cover object-center rounded-lg" />
                            }
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GameImages;