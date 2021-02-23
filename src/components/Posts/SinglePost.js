import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddComment from './AddComment';
import { getYear } from '../../data/functions';

import StarPost from './StarPost';

const SinglePost = ({ post }) => {
    const users = useSelector((state) => state.users.userList);

    const author = users.filter((user) => user.id === post.authorId)[0];

    return (
        <ListItem>
            <div className='author-info'>
                <img src={author.imageUrl} alt={author.firstName} />
                <h4>
                    <Link to={`/users/${author.id}`} className='user-link'>
                        {author.firstName} {author.lastName}
                        <h6>{author.email}</h6>
                    </Link>
                </h4>
            </div>

            <p className='content'>{post.content}</p>

            <p className='date'>{getYear(post.date)}</p>
            <PostButtons>
                <StarPost />
                <AddComment />
            </PostButtons>
        </ListItem>
    );
};

const PostButtons = styled.div`
    position: relative;
    text-align: right;
`;

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
        margin: 5px 0;
    }

    .content {
        line-break: anywhere;
        margin: 5px;
    }

    .user-link {
        text-decoration: none;
        color: #379683;
    }

    .date {
        font-size: 12px;
        position: absolute;
        margin: 0;
        top: 10px;
        right: 10px;
    }
`;

export default SinglePost;
