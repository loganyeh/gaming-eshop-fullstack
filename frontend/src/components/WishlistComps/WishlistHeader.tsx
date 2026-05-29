import WishlistTrail from "./WishlistTrail";
import ShareButton from "./ShareButton";
import type { WishlistSchemaProp } from "../../pages/Wishlist";

type WishlistHeaderProps = {
    wishlistData: WishlistSchemaProp[],
};

function WishlistHeader({ wishlistData }: WishlistHeaderProps ){

    return(
        <>
            <section className="xl:flex xl:justify-center">
                <div className="xl:hidden border-b border-gray-300 flex items-center gap-1 p-3.5 text-xs font-semibold text-gray-600">
                    <WishlistTrail />
                </div>

                <div className="flex flex-col gap-5 px-3.5 py-4 w-full md:max-w-xl lg:max-w-2xl xl:px-0 xl:py-6 xl:max-w-6xl">
                    {/* Title */}
                    <p className="text-[28px] font-semibold text-gray-700 tracking-wide md:text-4xl">Wish List</p>
                    
                    <div className="hidden xl:flex items-center gap-1 text-xs font-semibold text-gray-600">
                        <WishlistTrail />
                    </div>

                    {/* Page Description and Share Button */}
                    <div className="xl:flex xl:justify-between">
                        <p className="text-sm font-normal text-gray-700 md:text-base lg:w-full lg:max-w-3xl">Explore, purchase, or remove items from your Wish List here. You can also share your current list with friends and family.</p>
                        {wishlistData.length > 0 && <div className="hidden xl:flex">
                            <ShareButton />
                        </div>}
                    </div>
                </div>
            </section>

        </>
    );
};

export default WishlistHeader;