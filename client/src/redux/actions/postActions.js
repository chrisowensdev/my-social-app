//import axios from 'axios';
import {
    ADD_COMMENT,
    ADD_POST,
    DELETE_POST,
    TOGGLE_LIKE,
    UPDATE_POST,
} from '../actionTypes';

// export const getPosts = (userId) => {
//     return async dispatch => {
//         try {
//             let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/`)
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }
    
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

export const addComment = (postId, comment) => ({
    type: ADD_COMMENT,
    payload: {
        postId,
        comment,
    },
});

export const toggleLike = (postId, activeUserId) => ({
    type: TOGGLE_LIKE,
    payload: {
        postId,
        activeUserId,
    },
});
