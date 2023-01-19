import { Banner450p, BannerTo } from '../components/Banner'

const bannerTextData = [
    { text: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.' },
];

export default function HomePage() {
    return (
        <>
            <Banner450p imageClass="home-bg" content={
                    <>
                        <div class="relative flex flex-col lg:flex-row mx-auto lg:max-w-7xl py-3 sm:py-5">
                            <BannerTo text="first" />
                            <BannerTo text="second" />
                            <BannerTo text={bannerTextData[0].text} />
                        </div>
                        <div class="relative flex justify-center space-x-2">
                            <div class="bg-lime-600 border border-lime-400 w-3.5 h-3.5 rounded-full"></div>
                            <div class="bg-white border border-lime-400 w-3.5 h-3.5 rounded-full"></div>
                            <div class="bg-white border border-lime-400 w-3.5 h-3.5 rounded-full"></div>
                            <div class="bg-white border border-lime-400 w-3.5 h-3.5 rounded-full"></div>
                        </div>
                    </>
                } />
            <div class="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
                <div class="inline rounded-md px-7 py-2 text-2xl font-semibold text-white bg-green-600">ME</div>
                <h1 class="py-6 text-5xl font-semibold text-gray-600">Aurelio Kessler</h1>
                <p class="text-gray-600 pb-5">
                    Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
                </p>
                <p class="text-gray-600  pb-5">
                    Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
                </p>
            </div>
        </>
    );
}