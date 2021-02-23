import { v1 as uuidv1 } from 'uuid';
import {
    ADD_COMMENT,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
} from '../actionTypes';

const initialState = {
    postList: [
        {
            id: 1,
            authorId: 1,
            content: 'this is a test post content',
            date: '02/19/21',
            comments: [],
        },
        {
            id: 2,
            authorId: 2,
            content: 'this is a test post content',
            date: '02/19/21',
            comments: [],
        },
        {
            id: 3,
            authorId: 2,
            content: 'this is a test post content',
            date: '02/19/21',
            comments: [],
        },
        {
            id: 4,
            authorId: 3,
            content: 'this is a test post content',
            date: '02/19/21',
            comments: [],
        },
    ],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postList: [action.payload, ...state.postList],
            };
        case UPDATE_POST:
            return state;
        case DELETE_POST:
            return state;
        case ADD_COMMENT:
            // const post = state.postList.filter(
            //     (post) => action.payload.id === post.id
            // )[0];

            const arrCopy = [...state.postList];

            let index = arrCopy.findIndex(
                (post) => post.id === action.payload.id
            );

            arrCopy[index] = {
                ...action.payload.post,
                comments: [
                    action.payload.comment,
                    ...action.payload.post.comments,
                ],
            };

            console.log(index);

            // const postWithComment = {
            //     ...post,
            //     comments: [...post.comments, commentData],
            // };
            return {
                ...state,
                postList: arrCopy,
            };
        default:
            return state;
    }
};

export default postReducer;
