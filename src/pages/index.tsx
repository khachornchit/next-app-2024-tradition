import { GetServerSideProps } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { setPosts } from '../slices/postsSlice';
import { RootState } from '../store';
import { AppDispatch, useAppDispatch } from '../store';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    initialPosts: Post[];
}

const Home: React.FC<Props> = ({ initialPosts }) => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(setPosts(initialPosts));
    }, [initialPosts, dispatch]);

    const posts = useSelector((state: RootState) => state.posts.posts);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Next.js v14 and traditional structure</h1>
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

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return { props: { initialPosts: posts } };
};

export default Home;
