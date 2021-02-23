import { v1 as uuidv1 } from 'uuid';

import { ADD_USER, DELETE_USER, UPDATE_USER, LOGIN_USER } from '../actionTypes';

const initialState = {
    activeUser: {
        id: 1,
        firstName: 'Chris',
        lastName: 'Owens',
        email: 'chrisowensdev@gmail.com',
        password: '123',
        imageUrl: 'https://chrisowensdev.com/images/profile_pic_400x533.jpg',
    },
    userList: [
        {
            id: 1,
            firstName: 'Chris',
            lastName: 'Owens',
            email: 'chrisowensdev@gmail.com',
            password: '123',
            imageUrl:
                'https://chrisowensdev.com/images/profile_pic_400x533.jpg',
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

        case LOGIN_USER:
            return {
                ...state,
                activeUser: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
