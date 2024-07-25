import { GetStaticProps } from 'next';
import React from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    posts: Post[];
}

const ISRPage: React.FC<Props> = ({ posts }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">ISR Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="mb-4">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: { posts },
        revalidate: 10, // Revalidate every 10 seconds
    };
};

export default ISRPage;
