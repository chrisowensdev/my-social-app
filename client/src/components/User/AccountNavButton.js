import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';

import styled from 'styled-components';

const AccountNavButton = () => {
    const [active, setActive] = useState(false);
    console.log('Active', active);
    const activeUser = useSelector((state) => state.users.activeUser);
    return (
        <>
            {activeUser.id ? (
                <AccountButton onClick={(e) => setActive(!active)}>
                    <NavProfilePic
                        src={activeUser.imageUrl}
                        alt={activeUser.firstName}
                    />
                    <AccountMenu active={active ? 'active' : ''}>
                        <Logout />
                    </AccountMenu>
                </AccountButton>
            ) : (
                <Link className='navbar-link' to='/login'>
                    Login
                </Link>
            )}
        </>
    );
};

export default AccountNavButton;

const NavProfilePic = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
`;

const AccountButton = styled.div`
    position: relative;
`;
const AccountMenu = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #fff;
    color: #379683;
    right: 0;
    top: 75px;
    transition: transform 0.2s ease-in;
    z-index: 5;

    ${(props) => {
        if (props.active) {
            return `
                transform: scaleY(1);
                transform-origin: top;
            `;
        } else {
            return `
                transform: scaleY(0);
                transform-origin: top;
            `;
        }
    }};
`;
