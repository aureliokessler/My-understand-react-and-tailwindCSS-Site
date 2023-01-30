import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function FooderView( { navigationLeft  = [], socialMediaLinks = [] } ) {
    return (
        <div className="bg-lime-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex">
                        {navigationLeft.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={'text-gray-500 hover:text-black px-3 py-2 text-sm font-medium'}
                                >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex">
                        <a className="text-gray-500 hover:text-black px-2 text-lg" href="https://www.youtube.com/@aureliokessler">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a className="text-gray-500 hover:text-black px-2 text-lg" href="https://www.tiktok.com/@aureliokessler">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a className="text-gray-500 hover:text-black px-2 text-lg" href="https://www.twitch.tv/aureliokessler">
                            <FontAwesomeIcon icon={faTwitch} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}