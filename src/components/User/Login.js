import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginUser } from '../../redux/actions/userActions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const users = useSelector((state) => state.users.userList);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        // let loginInfo = {
        //     email: email,
        //     password: password,
        // };

        if (!email) {
            setErrorMessage('Please enter email');
        } else if (!password) {
            setErrorMessage('Please enter password');
        } else {
            const user = users.filter(
                (user) => user.email === email && user.password === password
            )[0];

            if (user) {
                dispatch(loginUser(user));

                setEmail('');
                setPassword('');
                setErrorMessage('');
                history.push('/');
            }
        }
    };
    return (
        <Form>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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

                <button type='submit'>Add User</button>
                <Error>{errorMessage ? errorMessage : ''}</Error>
            </form>
        </Form>
    );
};

export default Login;

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
