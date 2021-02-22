import { ADD_USER, DELETE_USER, LOGIN_USER, UPDATE_USER } from '../actionTypes';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

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
