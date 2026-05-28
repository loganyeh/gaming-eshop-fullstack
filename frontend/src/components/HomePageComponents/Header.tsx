import type { HeaderType } from "../../data/HomePageData/headerData";
import { Link } from "react-router-dom";

type HeaderProp = {
    data: HeaderType[],
    handleNavClick: (action: string) => void,
};

function Header({ data, handleNavClick }: HeaderProp){

    return(
        <>
            {/* Mobile-Laptop Header */}
            <header className="border-b border-gray-300 flex justify-between items-center px-4 py-1.5 bg-red-600 text-white xl:hidden">
                <Link to={"/"} className="border-3 px-1 text-sm font-semibold tracking-wide rounded-full">Nintendo</Link>
                <Link to={"/game"} className="text-2xl">🇺🇸</Link>
            </header>

            {/* xl-2xl Header */}
            <header className="hidden border-b border-gray-300 xl:flex justify-between">
                {/* Left Side - Nintendo Logo */}
                <div className="flex gap-4">
                    <Link to={"/"} className="bg-red-600 p-4">
                        <h1 className="border-3 border-white px-1.5 w-fit font-bold text-white tracking-widest rounded-full">Nintendo</h1>
                    </Link>

                    {data.map((header, _) => {
                        return <div key={header.id} className="flex items-center gap-1">
                                <i className={`${header.boxicon} text-xl text-red-600`}></i>
                                <h2 className="font-semibold text-gray-700">{header.text}</h2>
                            </div>
                    })}
                </div>

                {/* Right Side - Search/Login */}
                <div className="flex items-center px-4 gap-5 text-gray-700">
                    {/* Search */}
                    <div onClick={() => handleNavClick("search")}  className="flex items-center gap-2 px-3.5 py-1 bg-gray-200 rounded-full cursor-pointer hover:text-gray-400 active:text-gray-800">
                        <i className='bx bx-search text-xl' ></i>
                        <p className="font-semibold">Search</p>
                    </div>

                    {/* Wishlist */}
                    <div onClick={() => handleNavClick("wishlist")} className="flex items-center px-2.5 py-1 bg-gray-200 rounded-2xl cursor-pointer hover:text-red-600 active:text-red-700">
                        <i className='bx bxs-heart text-xl' ></i>
                    </div>

                    {/* Cart */}
                    <div className="flex items-center px-2.5 py-1 bg-gray-200 rounded-2xl">
                        <i className='bx bxs-cart text-xl' ></i>
                    </div>

                    {/* Login */}
                    <div className="border flex items-center gap-2 px-2.5 py-0.5 text-red-600 rounded-full">
                        <i className='bx bxs-user text-xl' ></i>
                        <p className="font-semibold">Log in / Sign up</p>
                    </div>

                    <Link to={"/game"} className="text-2xl">🇺🇸</Link>

                </div>

            </header>
        </>
    )
}

export default Header;