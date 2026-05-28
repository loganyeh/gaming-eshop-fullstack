import { useState } from "react";

// components
import Notice from "../components/WishlistComps/Notice";
import Instructions from "../components/WishlistComps/Instructions";
import WishlistHeader from "../components/WishlistComps/WishlistHeader";
import ShareButton from "../components/WishlistComps/ShareButton";
import GamesWishlisted from "./GamesWishlisted";

function Wishlist(){
    const [isGamesInWishlist, setIsGamesInWishlist] = useState(true);
    // can toggle on and off for wishlisted games

    return(
        <>
            {/* Page Title & Header */}
            <WishlistHeader isGamesInWishlist={isGamesInWishlist} />

            {/* Share Wish List Button */}
            {isGamesInWishlist && <div className="px-3.5 md:flex md:justify-end xl:hidden">
                <ShareButton />
            </div>}

            {/* Wish List Games */}
            {isGamesInWishlist && <GamesWishlisted />}

            {!isGamesInWishlist && <Notice />}
            {!isGamesInWishlist && <Instructions />}
        
        </>
    );
};

export default Wishlist;