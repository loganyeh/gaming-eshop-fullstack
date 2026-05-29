import { useState, useEffect } from "react";

// components
import Notice from "../components/WishlistComps/Notice";
import Instructions from "../components/WishlistComps/Instructions";
import WishlistHeader from "../components/WishlistComps/WishlistHeader";
import ShareButton from "../components/WishlistComps/ShareButton";
import GamesWishlisted from "../components/WishlistComps/GamesWishlisted";

// types
export type WishlistSchemaProp = {
    _id: string,
    __v: string,
    gameID: number,
    name: string,
    background_image: string,
};

type WishlistProps = {
    setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
    wishlistData: WishlistSchemaProp[],
    setWishlistData: React.Dispatch<React.SetStateAction<WishlistSchemaProp[]>>,
};

function Wishlist({ setGameIdClick, wishlistData, setWishlistData }: WishlistProps ){
    // const [wishlistData, setWishlistData] = useState<WishlistSchemaProp[]>([]);

    useEffect(() => {
        async function getWishlist(){
            const res = await fetch("http://localhost:3000/wishlist");
            const data = await res.json();
            setWishlistData(data);
            // console.log(data);
    
            return data;
        };

        getWishlist();
    }, []);

    return(
        <>
            {/* Page Title & Header */}
            <WishlistHeader wishlistData={wishlistData} />

            {/* Share Wish List Button */}
            {wishlistData.length > 0 && <div className="px-3.5 md:flex md:justify-end xl:hidden">
                <ShareButton />
            </div>}

            {/* Wish List Games */}
            {wishlistData.length > 0 && <GamesWishlisted data={wishlistData} setWishlistData={setWishlistData} setGameIdClick={setGameIdClick} />}

            {wishlistData.length === 0 && <Notice />}
            {wishlistData.length === 0 && <Instructions />}
        </>
    );
};

export default Wishlist;