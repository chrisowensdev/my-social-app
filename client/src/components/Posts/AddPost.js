import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';
import { addPost } from '../../redux/actions/postActions';

const AddPost = () => {
    const [body, setBody] = useState('');

    const activeUser = useSelector((state) => state.user.activeUser);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let post = {
            id: uuidv1(),
            authorId: activeUser.id,
            content: body,
            date: Date.now(),
            comments: [],
            likes: [],
        };

        if (body) {
            dispatch(addPost(post));
            setBody('');
        }
    };
    return (
        <>
            {activeUser._id ? (
                <PostArea>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <button>Submit</button>
                    </form>
                </PostArea>
            ) : (
                <SignInMessage>Please sign in to post</SignInMessage>
            )}
        </>
    );
};

export default AddPost;

/************STYLES*************/

const PostArea = styled.div`
    margin: 50px auto;
    width: 430px;
    form {
        display: flex;
        flex-direction: column;

        textarea {
            height: 100px;
            width: 424px;
            resize: none;
            border-bottom: none;
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

        button {
            width: 430px;
            background-color: #379683;
            color: #fff;
            border: none;
            padding: 5px 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            cursor: pointer;
        }

        button:focus {
            outline: none;
        }

        button:active {
            transform: scaleY(0.95);
            outline: none;
        }
    }
`;

const SignInMessage = styled.div`
    height: 100px;
    width: 430px;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
