import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../redux/actions/userActions';
import styled from 'styled-components';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        if (!firstName) {
            setErrorMessage('Please enter first name');
        } else if (!lastName) {
            setErrorMessage('Please enter last name');
        } else if (!email) {
            setErrorMessage('Please enter email');
        } else if (!password) {
            setErrorMessage('Please enter email');
        } else {
            dispatch(signup(user, () => {
                history.push('/');
            }));

            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErrorMessage('');
        }
    };

    return (
        <Form>
            <h1>Sign Up</h1>
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

                <input
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {confirmPassword.length > 0 && confirmPassword !== password ? 'passwords do not match' : null}

                <button type='submit'>Sign Up</button>
                <Error>{errorMessage ? errorMessage : ''}</Error>
            </form>
        </Form>
    );
};

export default SignUp;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: 30px auto;
    border: 1px solid #379683;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px #379683;

    h1 {
        margin: 0 0 20px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        input {
        margin: 10px auto;
        padding: 15px 10px;
        border: none;
        border-radius: 5px;
        border-bottom: 1px solid #000;
        font-size: 1rem;
        width: 90%;
    }

    input:focus {
        outline: none;
    }

    button {
        margin: 10px auto;
        padding: 10px 10px;
        background-color: #379683;
        color: #fff;
        font-family: inherit;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        width: 150px;
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }
    }

    
`;

const Error = styled.p`
    text-align: center;
    color: red;
    margin: 20px auto 0;
`;
