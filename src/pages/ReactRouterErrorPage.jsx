import { useRouteError } from "react-router-dom";

export default function ReactRouterErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="mx-auto max-w-7xl px-8 py-8">
            <h1 className="font-semibold text-2xl text-gray-700 pb-2">Oops!</h1>
            <p className="text-sm">Sorry, an unexpected error has occurred.</p>
            <p className="pt-2 text-gray-700">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}