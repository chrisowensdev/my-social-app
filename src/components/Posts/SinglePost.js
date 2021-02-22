import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import StarPost from './StarPost';

const SinglePost = ({ post }) => {
    const users = useSelector((state) => state.users.userList);

    const author = users.filter((user) => user.id === post.authorId)[0];

    return (
        <ListItem>
            <div className='author-info'>
                <img src={author.imageUrl} alt={author.firstName} />
                <h4>
                    <Link to={`/users/${author.id}`}>
                        {author.firstName} {author.lastName}
                    </Link>
                </h4>
            </div>

            <h6>{author.email}</h6>
            <p className='content'>{post.content}</p>

            <p className='date'>{post.date}</p>
            <StarPost />
        </ListItem>
    );
};

const ListItem = styled.li`
    border: 1px solid #379683;
    width: 400px;
    padding: 20px;
    list-style-type: none;
    margin: 20px;
    position: relative;
    border-radius: 10px;

    .author-info {
        display: flex;
        align-items: center;
    }

    img {
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 50%;
    }

    h4 {
        margin: 0 0 0 10px;
    }

    h6 {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .content {
        line-break: anywhere;
    }

    .date {
        font-size: 12px;
        position: absolute;
        margin: 0;
        bottom: 10px;
        right: 10px;
    }
`;

export default SinglePost;
