import { v1 as uuidv1 } from 'uuid';
import {
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    SET_ACTIVE_USER,
} from '../actionTypes';

const initalState = {
    activeUser: {
        id: 1,
        firstName: 'Chris',
        lastName: 'Owens',
        email: 'chrisowensdev@gmail.com',
        password: '123',
    },
    userList: [
        {
            id: 1,
            firstName: 'Chris',
            lastName: 'Owens',
            email: 'chrisowensdev@gmail.com',
            password: '123',
        },
    ],
};

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case UPDATE_USER:
            return state;

        case DELETE_USER:
            return state;

        case SET_ACTIVE_USER:
            return {
                ...state,
                activeUser: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
