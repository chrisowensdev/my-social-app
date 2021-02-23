import {
    ADD_COMMENT,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
} from '../actionTypes';

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
});

export const updatePost = (post) => ({
    type: UPDATE_POST,
});

export const deleteUser = (id) => ({
    type: DELETE_POST,
    payload: id,
});

export const addComment = (post, comment) => ({
    type: ADD_COMMENT,
    payload: {
        post,
        comment,
    },
});
