import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';
import { addPost } from '../../redux/actions/postActions';

const TextArea = styled.textarea`
    height: 100px;
    width: 494px;
    resize: none;
    border-bottom: none;

    :focus {
        outline: none;
    }
`;

const PostArea = styled.div`
    margin: 0 auto;
    width: 500px;
    form {
        display: flex;
        flex-direction: column;

        button {
            width: 500px;
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

const AddPost = () => {
    const [body, setBody] = useState('');

    const activeUser = useSelector((state) => state.users.activeUser);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let post = {
            id: uuidv1(),
            authorId: activeUser.id,
            content: body,
            date: Date.now(),
        };

        dispatch(addPost(post));

        console.log(post);
        setBody('');
    };
    return (
        <>
            <PostArea>
                <form onSubmit={handleSubmit}>
                    <div>
                        Active User:
                        {activeUser.id}
                        {activeUser.firstName}
                    </div>
                    <TextArea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></TextArea>
                    <button>Submit</button>
                </form>
            </PostArea>
        </>
    );
};

export default AddPost;
