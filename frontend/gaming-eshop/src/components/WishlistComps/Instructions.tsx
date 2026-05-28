

function Instructions(){

    return(
        <>
            <section className="px-3.5 pt-8 md:pt-12 xl:flex xl:justify-center">

                <div className="border border-red-600 flex flex-col gap-5 p-8 rounded-lg xl:flex-row xl:items-center xl:w-full xl:max-w-7xl 2xl:max-w-[1400px]">
                    <p className="text-sm text-gray-600 tracking-wide md:text-base">You can save games and other products you like by clicking the . 
                        It’s a handy way to keep track of items you’re interested in. 
                        We’ll even let you know when one of your Wish List items goes on sale.
                    </p>

                    <div className="border-t xl:border-l xl:border-t-0 border-gray-300 flex justify-center items-center gap-5 pt-5 xl:gap-3 xl:px-4 xl:py-3 xl:shrink-0">
                        <p className="text-xl font-semibold text-gray-700 md:text-2xl">Give it a try:</p>
                        <i className='bx bx-heart text-red-600 text-3xl md:text-4xl' ></i>
                    </div>

                </div>
                
            </section>

        </>
    );
};

export default Instructions;