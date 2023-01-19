import { Badge } from './Badge'

export function Banner450p( { imageClass = "",  content = [] } ) {
    // let bgStyle = "bg-[url('" + image + "')] bg-cover h-screen md:h-96";

    return (
        <div className={imageClass + ' bg-no-repeat bg-cover bg-center h-screen md:h-450'}>
            {content}
        </div>
    );
}

export function Banner128( { imageClass = "", bgColor = "", title = "" } ) {
    return (
        <div className={imageClass + ' bg-no-repeat bg-cover bg-center h-screen h-32'}>
            <div class="mx-auto max-w-7xl pt-16 px-2 sm:px-6 lg:px-8">
                <div class={'inline rounded-md px-7 py-2 text-2xl font-semibold text-white ' + bgColor}>{title.toUpperCase()}</div>
            </div>
        </div>
    );
}

export function BannerTo( {text = "", } ) {
    return (
        <div class="relative bg-white/70 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 sm:bg-white">
            <div class="mx-auto max-w-xs">
                <div class="flex space-x-1">
                    <Badge text="projects" bgColorClass="bg-cyan-600" />
                    <Badge text="blog" bgColorClass="bg-purple-700" />
                </div>
                <h1 class="pb-2 text-3xl font-semibold">Dolore magna aliqua</h1>
                <div class="divide-y divide-gray-300/50">
                    <div class="pb-3 space-y-2 text-base leading-7 text-gray-500">
                        <p>{text}</p>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-5">
                        <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Read more &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}