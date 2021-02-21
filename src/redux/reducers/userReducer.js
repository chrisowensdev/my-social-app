import { v1 as uuidv1 } from 'uuid';

import {
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    SET_ACTIVE_USER,
} from '../actionTypes';

const initialState = {
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

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                userList: [
                    ...state.userList,
                    {
                        id: uuidv1(),
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        email: action.payload.email,
                    },
                ],
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
