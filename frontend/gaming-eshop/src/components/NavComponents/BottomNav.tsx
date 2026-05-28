import type { NavButtonType } from "../../data/NavData/NavData";

type BottomNavType = {
    data: NavButtonType[],
    handleNavClick: (action: string) => void;
};

function BottomNav({ data, handleNavClick }: BottomNavType ){

    return(
        <>
            <section className="xl:hidden fixed bottom-3.5 flex justify-center w-full px-1.5">
                <div className="border border-gray-200 flex justify-around items-center w-full max-w-md px-2 py-2 bg-white text-gray-600 rounded-full shadow-2xl">
                    {data.map((button, index) => {
                        return <div key={index} className="flex justify-center items-center">
                                    {/* <i className={`${button.boxicon} text-4xl ${index === 2 ? "-mt-5 p-3 bg-red-600 text-white rounded-full" : ""}`} ></i> */}
                                    <i onClick={() => handleNavClick(button.action)} className={`${button.boxicon} text-4xl ${index === 2 ? "-mt-5 p-3 bg-red-600 text-white rounded-full" : ""}`} ></i>
                                </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default BottomNav;