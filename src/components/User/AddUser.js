import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/userActions';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 0 auto;
    border: 1px solid #379683;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px #379683;

    h1 {
        margin: 0 0 20px;
        text-align: center;
    }

    input {
        margin: 10px 0;
        padding: 5px;
        border: none;
        border-bottom: 1px solid #000;
        font-size: 1.2rem;
    }

    input:focus {
        outline: none;
    }

    button {
        margin-top: 10px;
        padding: 10px 10px;
        background-color: #379683;
        color: #fff;
        font-family: inherit;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
    }
    button:focus {
        outline: none;
    }
`;

const Error = styled.p`
    text-align: center;
    color: red;
    margin: 20px auto 0;
`;

const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
        };

        if (!firstName) {
            setErrorMessage('Please enter first name');
        } else if (!lastName) {
            setErrorMessage('Please enter last name');
        } else if (!email) {
            setErrorMessage('Please enter email');
        } else {
            dispatch(addUser(user));

            setFirstName('');
            setLastName('');
            setEmail('');
            setErrorMessage('');
        }
    };

    return (
        <Form>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Enter Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type='submit'>Add User</button>
                <Error>{errorMessage ? errorMessage : ''}</Error>
            </form>
        </Form>
    );
};

export default AddUser;
