import { Banner128 } from '../components/Banner'
import { CollectionElement } from '../components/CollectionView'



export default function CollectionPage( { title="default", titleBGColorClass="bg-purple-700", posts=[], panelRightContent } ) {
    return (
        <>
            <Banner128 title={title} bgColorClass={titleBGColorClass} imageClass="blog-bg" />
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                <div className="flex space-x-4">
                    <div className="flex-initial">
                        { posts.map( (post, index) => (
                            <CollectionElement key={index} post={post} />
                        ))}
                    </div>
                    {panelRightContent &&
                        <div className="hidden md:flex">
                            <div className="flex-none">
                                <div className="bg-gray-200 h-96 w-px"></div>
                                <div className="bg-gray-200 h-96 w-px"></div>
                            </div>
                            <div className="flex-auto md:w-64 lx:w-96 pl-4 pt-2">
                                {panelRightContent}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}