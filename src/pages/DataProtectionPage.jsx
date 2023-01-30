//import { Banner450p } from '../components/Banner'

export default function DataProtectionPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                <h1 className=" text-2xl font-semibold mb-2">Data Protection</h1>
                <p>Below is a list of artists and photos I use:</p>
                <ul className="my-2 list-disc list-inside ml-2">
                    <li><a className="text-lime-500 hover:text-lime-400" href="https://unsplash.com/@doctype?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aleks Dorohovich</a> and <a className="text-lime-500 hover:text-lime-400" href="https://unsplash.com/de/fotos/nJdwUHmaY8A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo</a></li>
                    <li><a className="text-lime-500 hover:text-lime-400" href="https://unsplash.com/@thoughtcatalog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thought Catalog</a> and <a className="text-lime-500 hover:text-lime-400" href="https://unsplash.com/de/fotos/505eectW54k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo</a></li>
                </ul>
            </div>
        </>
    );
}