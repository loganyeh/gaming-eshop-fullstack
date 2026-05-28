

type TrendingTopicsProp = {
    data: string[],
};


function TrendingTopics({ data }: TrendingTopicsProp ){

    return(
        <>
            <div className="flex flex-col gap-6 md:px-4">
                <h1 className="text-2xl font-semibold text-gray-700">Trending topics</h1>
                
                <div className="flex flex-col gap-4">
                    {data.map((topic, index) => {
                        return <p key={index} className="text-lg font-semibold text-red-600">
                                    {topic}
                                </p>
                    })}
                </div>
            </div>
        </>
    );
};

export default TrendingTopics;