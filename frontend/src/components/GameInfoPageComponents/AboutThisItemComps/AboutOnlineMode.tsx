

function OnlineMode(){

    return(
        <>
            <div className="border-t border-gray-300 flex flex-col md:flex-row items-center md:mx-4 md:py-5 text-gray-700 tracking-wide">
                {/* Left Side */}
                <div className="flex md:items-center gap-3 px-3 py-6 w-full md:max-w-72">
                    <i className={`bx bxs-square text-4xl text-red-600`} ></i>

                    <div className="flex flex-col gap-2 w-full">
                        <p className="md:text-lg font-bold">Nintendo Switch Online</p>

                        {/* Mobile */}
                        <div className="md:hidden flex gap-4">
                            <p className="border-b-2 border-red-600 w-fit text-sm font-bold text-red-600">Online Play</p>
                            <p className="border-b-2 border-red-600 w-fit text-sm font-bold text-red-600">Save Data Cloud</p>
                        </div>

                        <p className="md:hidden block text-[10px]">
                            Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership. <span className="border-b-2 border-red-600 font-bold text-red-600">Learn more</span>
                        </p>
                    </div>

                </div>
                
                {/* Right Side - Tablet Breakpoint++ */}
                <div className="hidden md:flex flex-col gap-3">
                    <div className="flex gap-4">
                        <p className="border-b-2 border-red-600 font-bold text-red-600">Online Play</p>
                        <p className="border-b-2 border-red-600 font-bold text-red-600">Save Data Cloud</p>
                    </div>
                    
                    <p className="block text-xs">
                        Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership. <span className="border-b-2 border-red-600 font-bold text-red-600">Learn more</span>
                    </p>
                </div>

            </div>
        </>
    );
};

export default OnlineMode;