import { Badge } from './Badge'

export function Card( { data = [] } ) {
    return (
        <div className="w-96 px-8 py-8 rounded-md shadow-md bg-white md:h-96">
            {data.badges && data.badges.map( (badge, index) => (
                <Badge key={index} text={badge.text} bgColorClass={badge.bgColorClass + " mr-1"} />
            ))}
            <h1 className="pt-1 text-3xl font-semibold">{data.title}</h1>
            <div className="py-4 text-gray-500">
                {data.description}
            </div>
            <div className="text-lime-500 font-semibold">
                <a href="https://tailwindcss.com/docs">Read more &rarr;</a>
            </div>
        </div>
    );
}