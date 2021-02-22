import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Login from './Login';

import styled from 'styled-components';

const Section = styled.div`
    padding: 50px;
    position: relative;
    display: flex;
    width: 500px;
    box-shadow: 0 0 10px #379683;
    margin: 20px auto;

    .edit-button {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #379683;
        color: #fff;
        font-family: inherit;
        border: none;
        padding: 5px 10px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
    }

    .edit-button:focus {
        outline: none;
    }

    .edit-button:active {
        transform: scale(0.97);
    }
`;

const UserProfile = () => {
    const [edit, setEdit] = useState(false);
    const user = useSelector((state) => state.users.activeUser);

    return (
        <>
            {!edit ? (
                <>
                    <h1>User Profile</h1>
                    <Section>
                        <button className='edit-button'>Edit</button>
                        <div>
                            <p>
                                {user.firstName} {user.lastName}
                            </p>
                            <p>{user.email}</p>
                        </div>
                    </Section>
                </>
            ) : (
                <form></form>
            )}
            <Login />
        </>
    );
};

export default UserProfile;
