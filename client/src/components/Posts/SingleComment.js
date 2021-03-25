import React from 'react';
import styled from 'styled-components';

const SingleComment = ({ comment }) => {
    return (
        <>
            <ViewSingleComment>{comment.commentText}</ViewSingleComment>
        </>
    );
};

export default SingleComment;

const ViewSingleComment = styled.li`
    padding: 10px;
    margin: 2px;
    background-color: #379683;
    border-radius: 5px;
    color: #fff;
`;
