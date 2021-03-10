import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleButton = () => {
        dispatch(logoutUser());
        history.push('/');
    };
    return (
        <>
            <button onClick={handleButton}>Log Out</button>
        </>
    );
};

export default Logout;
