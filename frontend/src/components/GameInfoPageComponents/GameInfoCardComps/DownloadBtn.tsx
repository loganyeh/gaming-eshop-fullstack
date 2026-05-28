

function DownloadBtn(){

    return(
        <>
            <button className="flex justify-center items-center gap-4 py-3.5 md:py-5 xl:py-4 bg-red-600 text-white rounded-md">
                <i className='bx bx-download text-2xl' ></i>
                <p className="font-semibold text-lg md:text-xl tracking-wider">Direct Download</p>
            </button>
        </>
    );
};

export default DownloadBtn;