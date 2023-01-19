import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import Header from './components/Header'
import Fooder from './components/Fooder'

import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ProjectsPage from './pages/ProjectsPage'
import ImpressumPage from './pages/ImpressumPage'
import ContactsPage from './pages/ContactsPage'
import ReactRouterErrorPage from './pages/ReactRouterErrorPage'

import './App.css';

const navigationData = [
    { name: 'Home', href: '/', current: true },
    { name: 'Blog', href: 'blog', current: false },
    { name: 'Projects', href: 'projects', current: false },
]

const navigationFooder = [
    { name: 'Impressum', href: 'impressum', current: false },
    { name: 'Contact', href: 'contacts', current: false },
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ReactRouterErrorPage />,
    },
    {
        path: "blog",
        element: <BlogPage />
    },
    {
        path: "projects",
        element: <ProjectsPage />
    },
    {
        path: "impressum",
        element: <ImpressumPage />
    },
    {
        path: "contacts",
        element: <ContactsPage />
    },
    ]);

function App() {
    return (
        <>
            <Header navigation={navigationData} />
            <RouterProvider router={router} />
            <Fooder navigationLeft={navigationFooder} socialMediaLinks={[]} />
        </>
    );
}

export default App;
