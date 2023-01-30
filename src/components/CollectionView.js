import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { formatDate } from './core/Functions'


export function CollectionPost( { post } ) {
    const title = post.title;
    const description = post.description;
    const textBlob = post.text;
    const createdAt = post.createdAt;

    return (
        <div className="pb-10">
            <h1 className="font-semibold text-3xl">{title}</h1>
            <div className="text-gray-400 italic">
                <FontAwesomeIcon icon={faClock} /> {createdAt}
            </div>
            <div className="italic py-3">{description}</div>
            <div>
                {textBlob}
            </div>
        </div>
    );
}

export function CollectionElement( { post } ) {
    const title = post.title;
    const description = post.description;
    const createdAt = post.createdAt;

    return (
        <div className="pb-10">
            <h1 className="font-semibold text-3xl">{title}</h1>
            <div className="italic py-3">{description}</div>
            <div className="text-gray-400 italic">
                <FontAwesomeIcon icon={faClock} /> {formatDate(createdAt)}
            </div>
        </div>
    );
}