

type AdditionalResultsProp = {
    data: string[]
}


function AdditionalResults({ data }: AdditionalResultsProp ){

    return(
        <>
            <div className="flex flex-col gap-6 md:px-4 xl:w-full xl:max-w-7xl">
                <h1 className="text-2xl font-semibold text-gray-700">Additional results for "madden":</h1>

                <div className="flex flex-col gap-4">
                    {data.map((link, index) => {
                        return <div key={index} className="flex items-center gap-2">
                                    <i className='bx bx-link-external text-2xl text-gray-700' ></i>
                                    <p className="font-bold text-red-600">{link}</p>
                                </div>
                    })}
                </div>

                <button className="border-b-2 w-fit font-bold text-red-600">All results for "madden"</button>
            </div>
        </>
    );
};

export default AdditionalResults;