// comps
import AboutCard from "./AboutThisItemComps/AboutCard";
import AboutSupportedPlayModes from "./AboutThisItemComps/AboutSupportedPlayModes";
import AboutOnlineMode from "./AboutThisItemComps/AboutOnlineMode";
import AboutESRB from "./AboutThisItemComps/AboutESRB";
import AboutNumOfPlayers from "./AboutThisItemComps/AboutNumOfPlayers";

function AboutThisItem(){

    return(
        <>

            <div className="flex flex-col gap-3 pt-4 md:py-12 w-full max-w-6xl text-gray-700">
                <h2 className="px-4 lg:px-8 text-xl md:text-3xl font-semibold text-gray-700 tracking-wide">About this item</h2>
                
                {/* About Item Container */}
                <div>
                    <AboutCard boxicon="bx bxs-data" title="Game file size" text={["Nintendo Switch: 1.5 GB", "Nintendo Switch 2: 2.2 GB"]} />
                    <AboutSupportedPlayModes />
                    <AboutCard boxicon="bx bxs-smile" title="Nintendo Account family-group lending" text={["Supported"]} />
                    <AboutCard boxicon="bx bx-plus-medical" title="Genre" underlineText={["Action", "Simulation"]} />
                    <AboutOnlineMode />
                    <AboutCard boxicon="bx bxs-video" title="System" underlineText={["Nintendo Switch"]} />
                    <AboutCard boxicon="bx bxs-building" title="Publisher" underlineText={["ConcernedApe"]} />
                    <AboutCard boxicon="bx bxs-wrench" title="Developer" underlineText={["ConcernedApe"]} />
                    <AboutCard boxicon="bx bx-globe" title="Supported Languages" text={["Japanese, French, German, Italian, Spanish, Korean, Portuguese, Russian, Simplified Chinese, Latin American Spanish, Traditional Chinese, American English"]} />
                    <AboutCard boxicon="bx bxs-calendar" title="Release date" text={["October 5, 2017"]} />
                    <AboutESRB />
                </div>

                <AboutNumOfPlayers />
            </div>
        </>
    );
};

export default AboutThisItem;