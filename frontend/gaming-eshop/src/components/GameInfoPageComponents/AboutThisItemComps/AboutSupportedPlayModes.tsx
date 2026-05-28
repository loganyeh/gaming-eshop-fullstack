

function SupportedPlayModes(){
    const playModes = [
        {
            id: 1,
            boxicon: "bx bx-tv text-3xl",
            text: "TV",
        },
        {
            id: 2,
            boxicon: "bx bx-tv text-3xl",
            text: "Tabletop",
        },
        {
            id: 3,
            boxicon: "bx bx-tv text-3xl",
            text: "Handheld",
        },

    ];

    return(
        <>
            <div className="border-t border-gray-300 flex flex-col md:flex-row items-center md:mx-4 md:py-6 text-gray-700 tracking-wide">
                {/* Left Side */}
                <div className="flex md:items-center gap-3 px-3 py-6 w-full md:max-w-72">
                    <i className={`bx bx-tv text-4xl`} ></i>

                    <div className="flex flex-col gap-3 w-full">
                        <p className="md:text-lg font-bold">Supported play modes</p>

                        {/* Mobile */}
                        <div className="md:hidden flex flex-wrap gap-5">
                            {playModes.map((mode, index) => {
                                return <div key={index} className="flex flex-col items-center">
                                            <i className='bx bx-tv text-3xl' ></i>
                                            <p className="text-sm">{mode.text} mode</p>
                                        </div>
                            })}
                        </div>

                        {/* Mobile */}
                        <p className="md:hidden text-[10px]">Software compatibility and play experience may differ on Nintendo Switch Lite. Additional accessories may be required(sold separately). See support for details.</p>
                    </div>

                </div>
                
                {/* Right Side - Tablet Breakpoint++ */}
                <div className="hidden md:flex flex-col flex-1 items-start gap-4">
                    <div className="hidden md:flex flex-wrap gap-5">
                        {playModes.map((mode, index) => {
                            return <div key={index} className="flex flex-col items-center">
                                        <i className='bx bx-tv text-3xl' ></i>
                                        <p className="text-sm">{mode.text} mode</p>
                                    </div>
                        })}
                    </div>
                    <p className="text-xs">Software compatibility and play experience may differ on Nintendo Switch Lite. Additional accessories may be required(sold separately). See support for details.</p>
                </div>
                
            </div>
        </>
    );
};

export default SupportedPlayModes;