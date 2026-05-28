export type GameInfoProp = {
    boxicon: string,
    title: string,
    text?: string[],
    underlineText?: string[],
};

function GameInfo({ boxicon, title, text, underlineText }: GameInfoProp ){

    return(
        <>
            <div className="border-t border-gray-300 flex flex-col md:flex-row items-center md:mx-4 text-gray-700 tracking-wide">
                {/* Left Side */}
                <div className="flex md:items-center gap-3 px-3 py-6 w-full md:max-w-72">
                    <i className={`${boxicon} text-4xl`} ></i>

                    <div className="flex flex-col gap-2 w-full">
                        <p className="md:text-lg font-bold">{title}</p>

                        {/* Mobile */}
                        {text && 
                            <div className="md:hidden flex flex-col gap-4">
                                {text.map((text, index) => {
                                    return <p key={index} className="text-sm">{text}</p>
                                })}
                            </div>
                        }

                        {underlineText && 
                            <div className="md:hidden flex gap-4">
                                {underlineText.map((text, index) => {
                                    return <p key={index} className="border-b-2 border-red-600 w-fit text-sm font-bold text-red-600">{text}</p>
                                })}
                            </div>
                        }
                    </div>

                </div>
                
                {/* Right Side - Tablet Breakpoint++ */}
                {text && 
                    <div className="hidden md:flex flex-1 items-center gap-4 py-4">
                        {text.map((text, index) => {
                            return <p key={index}>{text}</p>
                        })}
                    </div>
                }

                {underlineText && 
                    <div className="hidden md:flex flex-1 items-center gap-4">
                        {underlineText.map((text, index) => {
                            return <p key={index} className="border-b-2 border-red-600 font-bold text-red-600">{text}</p>
                        })}
                    </div>
                }
            </div>
        </>
    );
};

export default GameInfo;