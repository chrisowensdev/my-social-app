import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import SinglePost from './SinglePost';

const ShowPostList = () => {
    const posts = useSelector((state) => state.posts.postList);
    return (
        <>
            <PostListScroll>
                <ul>
                    {posts.map((post) => (
                        <SinglePost key={post.id} post={post} />
                    ))}
                </ul>
            </PostListScroll>
        </>
    );
};

export default ShowPostList;

const PostListScroll = styled.div`
    margin: 0 auto;
    height: 60vh;
    overflow-y: scroll;
    max-width: 550px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;
