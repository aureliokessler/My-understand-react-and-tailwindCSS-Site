//function classNames(...classes) {
//    return classes.filter(Boolean).join(' ')
//}

export default function HeaderView( { navigation  = [] } ) {
    return (
        <div className="bg-lime-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="ak_logo_192.png"
                                alt="Website name aureliokessler"
                            />
                        </div>
                        <div className="sm:ml-6 sm:block">
                            <div className="flex">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={'text-gray-500 hover:text-black px-3 py-2 text-sm font-medium'}
                                        >
                                        {item.name.toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}