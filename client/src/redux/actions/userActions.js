import axios from 'axios';
import {
    ADD_USER,
    AUTH_USER,
    DELETE_USER,
    LOGIN_USER,
    LOGOUT_USER,
    UPDATE_USER,
} from '../actionTypes';

// export const addUser = (user) => ({
//     type: ADD_USER,
//     payload: user,
// });

export const signup = (user, cb) => {
    
    return async dispatch => {
        try {
            let response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/signup`, user);

            console.log(response.data);
            dispatch({type: AUTH_USER, data: response.data})
            cb();

        } catch (error) {
            console.error(error);
        }
    }
}

export const updateUser = (user) => ({
    type: UPDATE_USER,
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id,
});

export const loginUser = (data) => ({
    type: LOGIN_USER,
    payload: data,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});
