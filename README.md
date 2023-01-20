# Actual

The Homepage [Design](DESIGN.md) I have createt for this Projekt.
Here are the list I nead help [Problems](PROBLEMS.md)

# Wath I use

I use the Package Manager [Homebrew](https://brew.sh) and [nodejs](https://nodejs.org/) for the development environment. Then for the Web development I use [reactjs](https://reactjs.org) with

## React

Here is all the information on how I use reactjs.

```bash
npx create-react-app my-site
cd my-site
```

then for the Site navigation use React Router:

```bash
npm install react-router-dom
```

sample code:

```javascript
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
{
    path: "/",
    element: <Home />
}
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

function Hello() {
    return (
        <p>Wellcom your React coder</p>
    );
}
```

export default App;

See below what's Imported, then create a constat that uses the createBrowserRoute method for seting up your routes and then use this constant in the `<RouterProvider route={router} />`.

## TailwindCSS

follow [Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app) or use the comands below:

```bash
npm install -D tailwindcss
npx taiilwindcss init
```

by sure that you're in the react project directory in this directory update the tailwind.config.js to this:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

after you have update the content you can use tailwindcss regular in your react project with className attribute.

## Setting up Font Awesome

```bash
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
```

you can use the regular Font Awesome icons in te free plan. I go with using [Add Individual Icons Explicity](https://fontawesome.com/docs/web/use-with/react/add-icons#add-individual-icons-explicitly) way in this project.

sample react code:

```javascript
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)
```