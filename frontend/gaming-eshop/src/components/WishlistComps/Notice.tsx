

function Notice(){

    return(
        <>
            <div className="bg-gray-200 xl:flex xl:justify-center">
                <section className="bg-gray-200 flex items-center gap-3 px-3.5 py-8 text-gray-700 md:py-12 xl:px-0 xl:w-full xl:max-w-7xl 2xl:max-w-[1400px]">
                    <i className='bx bxs-error-circle text-5xl md:text-7xl' ></i>
                    <p className="text-xl font-bold md:text-3xl">Nothing's been added to your Wish List yet.</p>
                </section>
            </div>
        </>
    );
};

export default Notice;