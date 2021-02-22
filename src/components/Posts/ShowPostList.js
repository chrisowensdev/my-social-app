import React from 'react';
import { useSelector } from 'react-redux';

import SinglePost from './SinglePost';

const ShowPostList = () => {
    const posts = useSelector((state) => state.posts.postList);
    return (
        <>
            <h1>Show Post List</h1>
            <ul>
                {posts.map((post) => (
                    <SinglePost key={post.id} post={post} />
                ))}
            </ul>
        </>
    );
};

export default ShowPostList;
