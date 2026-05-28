

function AboutESRB(){

    return(
        <>
            <div className="border-y border-gray-300 flex flex-col md:flex-row items-center md:mx-4 md:py-5 text-gray-700 tracking-wide">
                {/* Left Side */}
                <div className="flex md:items-center gap-3 px-3 py-6 w-full md:max-w-72">
                    <i className={`bx bxs-cog text-4xl`} ></i>

                    <div className="flex flex-col gap-2 w-full">
                        <p className="md:text-lg font-bold">ESRB Rating</p>

                        {/* Mobile */}
                        <div className="md:hidden flex items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-xPOFLIGukFjyaHvPjs_A6Hl2Q1El8qG2Q&s" alt="" className="w-12 aspect-[3/4]"/>

                            <div className="flex flex-col gap-1 p-2 text-[10px]">
                                <p className="border-b border-gray-700 pb-1">Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco</p>
                                <p>Users Interact</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tablet Breakpoint++ */}
                {/* Right Side */}
                <div className="hidden md:flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-xPOFLIGukFjyaHvPjs_A6Hl2Q1El8qG2Q&s" alt="" className="w-14 aspect-[3/4]"/>

                    <div className="flex flex-col gap-1 p-2">
                        <p className="border-b border-gray-700 pb-1 text-xs">Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco</p>
                        <p className="text-xs">Users Interact</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutESRB;