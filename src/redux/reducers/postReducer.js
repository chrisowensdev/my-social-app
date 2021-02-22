import { v1 as uuidv1 } from 'uuid';
import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actionTypes';

const initialState = {
    postList: [
        {
            id: 1,
            authorId: 1,
            content: 'this is a test post content',
            date: '02/19/21',
        },
        {
            id: 2,
            authorId: 2,
            content: 'this is a test post content',
            date: '02/19/21',
        },
        {
            id: 3,
            authorId: 2,
            content: 'this is a test post content',
            date: '02/19/21',
        },
        {
            id: 4,
            authorId: 3,
            content: 'this is a test post content',
            date: '02/19/21',
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
        default:
            return state;
    }
};

export default postReducer;
