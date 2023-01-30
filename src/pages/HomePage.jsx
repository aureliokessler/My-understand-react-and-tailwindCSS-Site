import { Banner450p } from '../components/Banner'
import { Card } from '../components/Cards'

export default function HomePage( { bannerData = []} ) {
    return (
        <>
            <Banner450p imageClass="home-bg" content={
                    <>
                        <div className="justify-center items-center flex flex-col py-5 space-y-10 md:flex-row md:space-x-10 md:space-y-0 overflow-hidden">
                            {bannerData.map( (data, index) => (
                                <Card key={index} data={data} />
                            ))}
                        </div>
                        <div className="relative flex justify-center space-x-2">
                            <div className="bg-lime-600 border border-lime-400 w-3.5 h-3.5 rounded-full"></div>
                            <div className="bg-white border border-lime-400 w-3.5 h-3.5 rounded-full"></div>
                            <div className="bg-white border border-lime-400 w-3.5 h-3.5 rounded-full"></div>
                            <div className="bg-white border border-lime-400 w-3.5 h-3.5 rounded-full"></div>
                        </div>
                    </>
                } />
            <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
                <div className="inline rounded-md px-7 py-2 text-2xl font-semibold text-white bg-lime-500">ME</div>
                <h1 className="py-6 text-5xl font-semibold text-gray-600">Aurelio Kessler</h1>
                <p className="text-gray-600 pb-5">
                    Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
                </p>
                <p className="text-gray-600  pb-5">
                    Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
                </p>
            </div>
        </>
    );
}