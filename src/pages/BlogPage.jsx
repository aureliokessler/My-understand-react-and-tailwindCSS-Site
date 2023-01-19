import { Banner128 } from '../components/Banner'
import { BlogElement } from '../components/BlogPost'

const posts = [
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: "10-10-2022u15:00"
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: "10-10-2022u15:00"
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: "10-10-2022u15:00"
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: "10-10-2022u15:00"
    },
    {
        title: "ESP-IDF in a Docker",
        description: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.",
        createdAt: "10-10-2022u15:00"
    },
];

export default function BlogPage() {
    return (
        <>
            <Banner128 title="blog" bgColor="bg-purple-700" imageClass="blog-bg" />
            <div class="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
                { posts.map( (post) => (
                    <BlogElement post={post} />
                ))}
            </div>
        </>
    );
}