import React, { useState } from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import styled from 'styled-components';

const StarPost = () => {
    const [favorite, setFavorite] = useState(false);
    return (
        <LikeButton onClick={() => setFavorite(!favorite)}>
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
