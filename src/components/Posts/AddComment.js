import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/actions/postActions';

import AddCommentIcon from '@material-ui/icons/AddComment';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddComment = ({ post }) => {
    const [commentToggle, setCommentToggle] = useState(false);
    const [commentText, setCommentText] = useState('');

    const activeUser = useSelector((state) => state.users.activeUser);

    const dispatch = useDispatch();

    const handleAddComment = (e) => {
        e.preventDefault();
        let comment = {
            userId: activeUser.id,
            commentText: commentText,
            date: Date.now(),
        };

        dispatch(addComment(post, comment));

        setCommentToggle(false);
        setCommentText('');
    };
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
                        <form onSubmit={(e) => handleAddComment(e)}>
                            <textarea
                                type='text'
                                placeholder='Add Comment'
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                            <button type='submit'>
                                <AddCircleIcon />
                            </button>
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
        display: flex;
        margin-top: 15px;

        button {
            background-color: transparent;
            border: none;
            color: #379683;
            cursor: pointer;

            :focus {
                outline: none;
            }

            :hover {
                color: grey;
            }
        }
    }

    textarea {
        resize: none;
        margin: 0 auto;
        width: 95%;
        height: 20px;
        border-radius: 5px;
        border: 1px solid grey;
        padding: 5px;
        font-family: inherit;

        :focus {
            outline: none;
        }
    }
    @media (prefers-color-scheme: dark) {
        textarea {
            background-color: rgb(26, 22, 22);
            color: #fff;
        }
    }
`;
