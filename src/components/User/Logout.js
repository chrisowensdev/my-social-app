import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={(e) => dispatch(logoutUser())}>Log Out</button>
        </>
    );
};

export default Logout;
