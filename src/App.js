import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import { directoryTree } from './components/core/Functions'

import { Badge } from './components/Badge'
import HeaderView from './components/HeaderView'
import FooderView from './components/FooderView'

import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import DataProtectionPage from './pages/DataProtectionPage'
import ContactsPage from './pages/ContactsPage'
import ReactRouterErrorPage from './pages/ReactRouterErrorPage'

import './App.css';


const bannerData = [
    {
        title: "ESP-IDF in a Docker",
        badges: [
            {
                text: "projects",
                bgColorClass: "bg-cyan-600"
            },
            {
                text: "blog",
                bgColorClass: "bg-purple-700"
            }
        ],
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: 1674244305000
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: 1674152802000
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: 1674152802000
    },
];

const posts = [
    {
        title: "ESP-IDF in a Docker",
        badges: [
            {
                text: "projects",
                bgColorClass: "bg-cyan-600"
            },
            {
                text: "blog",
                bgColorClass: "bg-purple-700"
            }
        ],
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: 1674244305000
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: 1674152802000
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: 1673634402000
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: 1672527600000
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: 1623015435000
    },
];

const testTree = [
    {
        type: "directory",
        name: "2020 Roadmap",
        children: [
            {
                type: "directory",
                name: "Public GitHub Projects",
                children: [
                    {
                        type: "externLink",
                        name: "aureliokessler.ch",
                        url: "github repo"
                    },
                    {
                        type: "externLink",
                        name: "RavenfalBridgeAPI in PHP",
                        url: "github repo"
                    }
                ]
            },
            {
                type: "directory",
                name: "Learns",
                children: [
                    {
                        type: "book",
                        name: "Swift 4.2 Book",
                        progress: {
                            sites: 1000,
                            read: 67
                        }
                    },
                ]
            },            
            {
                type: "directory",
                name: "Projects",
                children: [
                    {
                        type: "relativLink",
                        name: "Lawalamp",
                        url: "#"
                    },
                ]
            },            
        ]
    }
];

const navigationHeader = [
    { name: 'Home', href: '/', current: true },
    { name: 'Blog', href: 'blog', current: false },
    { name: 'Projects', href: 'projects', current: false },
]

const navigationFooder = [
    { name: 'data protection', href: 'dataprotection', current: false },
    { name: 'Contact', href: 'contacts', current: false },
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage bannerData={bannerData} />,
        errorElement: <ReactRouterErrorPage />,
    },
    {
        path: "blog",
        element: <CollectionPage title="blog" posts={posts} panelRightContent={
            <>
                <Badge text="Project" bgColorClass="bg-cyan-600 mr-2" />
                <Badge text="Project" bgColorClass="bg-cyan-600" />
            </>
        } />
    },
    {
        path: "projects",
        element: <CollectionPage title="projects" titleBGColorClass='bg-cyan-600' posts={posts} panelRightContent={directoryTree(testTree)} />
    },
    {
        path: "dataprotection",
        element: <DataProtectionPage />
    },
    {
        path: "contacts",
        element: <ContactsPage />
    },
]);

function App() {
    return (
        <>
            <HeaderView navigation={navigationHeader} />
            <RouterProvider router={router} />
            <FooderView navigationLeft={navigationFooder} socialMediaLinks={[]} />
        </>
    );
}

export default App;
