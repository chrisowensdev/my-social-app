import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    margin: 0;
    height: 100px;
    width: 100%;
    background-color: #379683;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h2`
    padding-left: 100px;
`;

const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    padding-right: 100px;
`;

const ListItem = styled.li`
    font-size: 18px;
    transition: all 0.3s ease;
    margin: 20px;

    :hover {
        background-color: #fff;
        color: #379683;
    }

    :hover .navbar-link {
        color: #379683;
    }
`;

const Header = () => {
    return (
        <Nav>
            <Title>My Social App</Title>
            <Menu>
                <ListItem>
                    <Link className='navbar-link' to='/profile'>
                        Profile
                    </Link>
                </ListItem>
                <ListItem>
                    <Link className='navbar-link' to='/about'>
                        About
                    </Link>
                </ListItem>
                <ListItem>
                    <Link className='navbar-link' to='/addpost'>
                        Add Post
                    </Link>
                </ListItem>
                <ListItem>
                    <Link className='navbar-link' to='/signup'>
                        Sign Up
                    </Link>
                </ListItem>
            </Menu>
        </Nav>
    );
};

export default Header;
