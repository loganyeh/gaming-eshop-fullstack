import type { FooterType } from "../../data/HomePageData/FooterData";

type FooterProp = {
    data: FooterType[],
};

function Footer({ data }: FooterProp ){

    return(
        <>
            {/* Footer */}
            <footer className="mt-24">
                <div className="flex justify-center py-10 bg-red-600">
                    <h1 className="border-4 border-white px-2 w-fit text-3xl font-bold text-white tracking-widest rounded-full">Nintendo</h1>
                </div>

                <div className="flex flex-col items-center gap-8 py-12 tracking-wide
                                md:gap-12 xl:pb-0
                ">
                {/* <div className="flex flex-col gap-8 py-12 px-14 tracking-wide"> */}

                    <div className="grid gap-8 px-4
                                    md:grid-cols-3 xl:grid-cols-6 2xl:max-w-7xl
                    ">
                        {data.map((cat, index) => {
                            return <div key={index} className="border-l-1 border-gray-300 flex flex-col gap-5 pl-5">
                                        <h2 className="font-semibold text-gray-800
                                                        lg:text-lg
                                        ">{cat.header}</h2>

                                        <div className="flex flex-col gap-1.5 text-sm font-bold text-red-600
                                                        lg:text-base
                                        ">
                                            {cat.categories.map((subCat, index) => {
                                                return <h3 key={index}>{subCat}</h3>
                                            })}
                                        </div>
                                    </div>
                        })}
                    </div>

                    <div className="flex flex-col items-center gap-8 py-12 tracking-wide
                                    md:gap-12 xl:flex-row xl:justify-between xl:w-full xl:px-5 2xl:max-w-7xl
                    ">
                        {/* Social Media Icons */}
                        <div className="flex gap-8 text-4xl text-gray-700">
                            <i className='bx bxl-facebook-circle' ></i>
                            <i className='bx bxl-instagram' ></i>
                            <i className='bx bxl-twitter' ></i>
                            <i className='bx bxl-youtube' ></i>
                        </div>

                        {/* Ad */}
                        <img src="https://caru.bbbprograms.org/seal/GetSeal/1514703882" alt="Place ad here" className="w-48"/>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center gap-8 pt-10 px-16 pb-40 text-[10px] font-light bg-zinc-800 text-gray-100
                                xl:flex-row xl:gap-16 xl:px-0 xl:py-8 xl:text-xs
                ">
                    <div className="text-center">
                        © Nintendo <br className="md:hidden"/>
                        Games are property of their respective owners <br className="md:hidden"/>
                        Nintendo of America Inc <br className="xl:hidden"/>
                        Headquarters are in Redmond, Washington, US 
                    </div>

                    <div className="flex gap-4">
                        <p>Contact Us</p>
                        <p>Website feedback</p>
                        <p>Terms of Use</p>
                    </div>

                    <p className="text-xs font-medium text-white">🇺🇸 English (United States)</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;