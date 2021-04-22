import { v1 as uuidv1 } from 'uuid';

import {
    ADD_USER,
    AUTH_USER,
    DELETE_USER,
    UPDATE_USER,
    LOGIN_USER,
    LOGOUT_USER,
} from '../actionTypes';

const initialState = {
    authenticated: '',
    activeUser: {},
    userList: [
        {
            id: 1,
            firstName: 'Chris',
            lastName: 'Owens',
            email: 'chrisowensdev@gmail.com',
            password: '123',
            imageUrl:
                'https://chrisowensdev.com/images/pic150x200.jpg',
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'janedoe@gmail.com',
            password: '123',
            imageUrl: 'https://randomuser.me/api/portraits/women/75.jpg',
        },
        {
            id: 3,
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            password: '123',
            imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
    ],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: action.data.token,
                activeUser: action.data.user
            }
        case UPDATE_USER:
            return state;

        case DELETE_USER:
            return state;

        case LOGIN_USER:
            return {
                ...state,
                activeUser: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                authenticated: '',
                activeUser: {},
            };

        default:
            return state;
    }
};

export default userReducer;
