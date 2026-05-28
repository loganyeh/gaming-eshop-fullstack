

function ShippingHeader(){

    return(
        <>
            <section className="flex justify-center py-3.5 text-xs bg-gray-100 text-gray-700 tracking-wide">
                <div className={`xl:border-r flex md:gap-2.5 px-4`}>
                    <p className="hidden md:inline">
                        <i className='bx bxs-truck text-2xl text-red-600' ></i>
                    </p>
                    <p className="font-light md:text-base">
                        <span className="font-semibold xl:font-bold">Free shipping</span> on orders $50 or more. <span className="font-semibold xl:font-bold underline">Restrictions<br className="md:hidden" /> apply.</span>
                    </p>
                </div>
                
                <div className="hidden xl:flex items-center gap-2.5 px-4">
                    <p>
                        <i className='bx bx-coin text-2xl text-red-600' ></i>
                    </p>
                    <p className="font-light text-base">
                        Redeem your <span className="font-bold">My Nintendo Platinum Points</span> for <span className="font-bold underline">fun rewards</span>
                    </p>
                </div>
            </section>
        </>
    );
};

export default ShippingHeader;