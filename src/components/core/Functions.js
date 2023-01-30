import { Fragment } from 'react'

export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const diffInSeconds = diff / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    const diffInWeeks = diffInDays / 7;
    // const diffInMonths = diffInDays / 30.4167;

    if (diffInSeconds < 60) {
        return `vor ${Math.round(diffInSeconds)} Sekunde(n)`;
    } else if (diffInMinutes < 60) {
        return `vor ${Math.round(diffInMinutes)} Minute(n)`;
    } else if (diffInHours < 24) {
        return `vor ${Math.round(diffInHours)} Stunde(n)`;
    } else if (diffInDays < 7) {
        return `vor ${Math.round(diffInDays)} Tag(en)`;
    } else if (diffInWeeks < 52) {
        return `vor ${Math.round(diffInWeeks)} Woche(n)`;
    } else {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `am ${day}.${month}.${year} um ${date.getHours()}:${date.getMinutes()}`;
    }
}

export function directoryTree(tree) {
    // let rand = Math.floor(Math.random() * 500);
    return (
        <ul className="ml-5 list-disc">
        {
            tree.map((element) => {
                switch (element.type) {
                    case "directory":
                        return (
                            <Fragment key={element.name}>
                                <li>{element.name}</li>
                                {directoryTree(element.children)}
                            </Fragment>
                        );
                    case "externLink":
                        return <li key={element.name}><a className="text-lime-500 hover:text-lime-400" href={element.url} target="_blank" rel="noreferrer">{element.name}</a></li>
                    case "relativLink":
                        return <li key={element.name}><a className="text-lime-500 hover:text-lime-400" href={element.url}>{element.name}</a></li>
                    case "book":
                        return <li key={element.name}>{element.name} (<b>{element.progress.read}</b> - {element.progress.sites})</li>
                    default:
                        return <p>error</p>
                }
            })
        }
        </ul>
    );
}