

function ShareButton(){

    return(
        <>
            <button className="flex justify-center items-center gap-3 py-2.5 w-full bg-blue-900 text-white rounded-md md:px-6 md:w-fit">
                <i className='bx bx-link-external text-lg' ></i>
                <p className="text-lg font-medium tracking-wide">Share Wish List</p>
            </button>
        </>
    );
};

export default ShareButton;