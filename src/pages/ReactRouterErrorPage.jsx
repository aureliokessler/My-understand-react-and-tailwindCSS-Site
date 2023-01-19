import { useRouteError } from "react-router-dom";

export default function ReactRouterErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <h1 className="rounded-lg px-4 py-2 bg-red-600 text-white text-xl">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}