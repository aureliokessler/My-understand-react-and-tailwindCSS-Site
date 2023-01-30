import { Badge } from './Badge'

export function Banner450p( { content = [], imageClass = "" } ) {
    return (
        <div className={imageClass + ' bg-no-repeat bg-cover bg-center h-screen md:h-450'}>
            {content}
        </div>
    );
}

export function Banner128( { imageClass = "", bgColorClass = "", title = "" } ) {
    return (
        <div className={imageClass + ' bg-no-repeat bg-cover bg-center h-32'}>
            <div className="mx-auto max-w-7xl pt-16 px-6 lg:px-8">
                <div className={'inline rounded-md px-7 py-2 text-2xl font-semibold text-white ' + bgColorClass}>{title.toUpperCase()}</div>
            </div>
        </div>
    );
}