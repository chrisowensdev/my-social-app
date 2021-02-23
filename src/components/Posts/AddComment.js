import React, { useState } from 'react';
import styled from 'styled-components';

import AddCommentIcon from '@material-ui/icons/AddComment';

const AddComment = () => {
    const [commentToggle, setCommentToggle] = useState(false);
    return (
        <>
            {commentToggle ? (
                <>
                    <CommentButton
                        onClick={() => setCommentToggle(!commentToggle)}
                    >
                        <AddCommentIcon />
                    </CommentButton>
                    <AddCommentForm>
                        <form>
                            <textarea type='text' placeholder='Add Comment' />
                        </form>
                    </AddCommentForm>
                </>
            ) : (
                <CommentButton onClick={() => setCommentToggle(!commentToggle)}>
                    <AddCommentIcon />
                </CommentButton>
            )}
        </>
    );
};

export default AddComment;

const CommentButton = styled.button`
    padding: 0;
    margin: 0 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    top: 2px;
    color: #379683;

    :focus {
        outline: none;
    }

    :active {
        outline: none;
    }
`;

const AddCommentForm = styled.div`
    width: 100%;

    text-align: center;

    form {
        width: 100%;
    }

    textarea {
        resize: none;
        margin: 0 auto;
        width: 95%;
        border-radius: 5px;
        border: 1px solid grey;
        padding: 5px 5px;
        font-family: inherit;

        :focus {
            outline: none;
        }
    }
`;
