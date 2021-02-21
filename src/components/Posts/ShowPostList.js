import React from 'react';
import { useSelector } from 'react-redux';

const ShowPostList = () => {
    const posts = useSelector((state) => state.posts.postList);
    return (
        <>
            <h1>Show Post List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </>
    );
};

export default ShowPostList;
