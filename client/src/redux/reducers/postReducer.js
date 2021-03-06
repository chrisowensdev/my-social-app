import {
    ADD_COMMENT,
    ADD_POST,
    DELETE_POST,
    TOGGLE_LIKE,
    UPDATE_POST,
} from '../actionTypes';

const initialState = {
    postList: [
        {
            id: 1,
            authorId: 1,
            content: 'this is a test post content',
            date: '02/19/21',
            comments: [
                { userId: 1, commentText: 'Comment 1', date: Date.now() },
            ],
            likes: [],
        },
        {
            id: 2,
            authorId: 2,
            content: 'this is a test post content',
            date: '02/19/21',
            comments: [],
            likes: [1],
        },
        {
            id: 3,
            authorId: 2,
            content: 'this is a test post content',
            date: '02/19/21',
            comments: [],
            likes: [],
        },
        {
            id: 4,
            authorId: 3,
            content: 'this is a test post content',
            date: '02/19/21',
            comments: [],
            likes: [],
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

        case TOGGLE_LIKE:
            const arrayCopy = [...state.postList];

            let likeIndex = arrayCopy.findIndex(
                (post) => post.id === action.payload.postId
            );

            console.log(likeIndex);

            return {
                ...state,
            };
        default:
            return state;
    }
};

export default postReducer;
