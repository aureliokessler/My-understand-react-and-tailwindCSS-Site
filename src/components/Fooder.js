import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function Fooder( { navigationLeft  = [], socialMediaLinks = [] } ) {
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
                        <a href="https://www.youtube.com/@aureliokessler" className="text-gray-500 hover:text-black px-2 text-lg">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://www.tiktok.com/@aureliokessler" className="text-gray-500 hover:text-black px-2 text-lg">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="https://www.twitch.tv/aureliokessler" className="text-gray-500 hover:text-black px-2 text-lg">
                            <FontAwesomeIcon icon={faTwitch} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}