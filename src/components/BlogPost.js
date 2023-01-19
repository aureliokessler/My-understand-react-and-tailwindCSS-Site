import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export function BlogPost( { post } ) {
    const title = post.title;
    const description = post.description;
    const textBlob = post.text;
    const createdAt = post.createdAt;

    return (
        <div class="pb-10">
            <h1 class="font-semibold text-3xl">{title}</h1>
            <div class="text-gray-400 italic">
                <FontAwesomeIcon icon={faClock} /> {createdAt}
            </div>
            <div class="italic py-3">{description}</div>
            <div>
                {textBlob}
            </div>
        </div>
    );
}

export function BlogElement( { post } ) {
    const title = post.title;
    const description = post.description;
    const createdAt = post.createdAt;

    return (
        <div class="pb-10">
            <h1 class="font-semibold text-3xl">{title}</h1>
            <div class="italic py-3">{description}</div>
            <div class="text-gray-400 italic">
                <FontAwesomeIcon icon={faClock} /> {createdAt}
            </div>
        </div>
    );
}