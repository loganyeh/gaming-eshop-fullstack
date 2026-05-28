

type GameImagesProps = {
    background_image: string,
};

function GameImages({ background_image }: GameImagesProps ){

    return(
        <>
            <div className="lg:flex lg:flex-col lg:gap-3">
                <img src={background_image} alt="" className="object-cover object-center aspect-video md:rounded-xl lg:rounded-2xl"/>

                {/* Game Preview Images */}
                <div className="flex gap-3 xl:gap-4 px-1 py-2 overflow-x-auto scroll-smooth">
                    {Array.from({ length: 8}).map((_, index) => {
                        return <img key={index} src={background_image} alt="" className="h-10 lg:h-12 aspect-video object-cover object-center bg-blue-300 rounded-lg" />
                    })}
                </div>
            </div>
        </>
    );
};

export default GameImages;