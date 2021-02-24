import { useState } from 'react';
import styled from 'styled-components';
import SingleComment from './SingleComment';

const ViewComments = ({ post }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <>
            <CommentCountButton onClick={() => setShowComments(!showComments)}>
                {post.comments.length} comments
            </CommentCountButton>

            {showComments ? (
                <>
                    <CommentList>
                        {post.comments.map((comment, index) => (
                            <SingleComment key={index} comment={comment} />
                        ))}
                    </CommentList>
                </>
            ) : (
                ''
            )}
        </>
    );
};

export default ViewComments;

const CommentCountButton = styled.button`
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: 12px;
    color: #379683;
    cursor: pointer;

    :focus {
        outline: none;
    }
`;

const CommentList = styled.ul`
    margin: 10px 0;
    padding: 0;
    list-style-type: none;
    font-size: 14px;
`;
