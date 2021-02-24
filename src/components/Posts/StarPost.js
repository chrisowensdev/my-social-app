import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import styled from 'styled-components';
import { toggleLike } from '../../redux/actions/postActions';

const StarPost = ({ post }) => {
    const [favorite, setFavorite] = useState(false);

    const activeUser = useSelector((state) => state.users.activeUser);

    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(toggleLike(post.id, activeUser.id));
    };

    useEffect(() => {
        const getPostLike = () => {
            let postLiked = post.likes.filter(
                (like) => like === activeUser.id
            )[0];
            setFavorite(postLiked);
        };
        getPostLike();
    }, [activeUser, post]);
    return (
        <LikeButton onClick={handleLike}>
            {favorite ? <StarIcon className='color' /> : <StarBorderIcon />}
        </LikeButton>
    );
};

const LikeButton = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #379683;

    :focus {
        outline: none;
    }

    :active {
        outline: none;
    }

    .color {
        color: gold;
    }
`;

export default StarPost;
