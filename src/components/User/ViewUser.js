import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const ViewUser = () => {
    const users = useSelector((state) => state.users.userList);
    const { id } = useParams();

    const user = users.filter((user) => parseInt(id) === user.id)[0];

    console.log(user);
    return (
        <ViewUserTop>
            <img src={user.imageUrl} alt={user.firstName} />
            <div className='user-info'>
                <p>
                    {user.firstName} {user.lastName}
                </p>
                <p>{user.email}</p>
            </div>
        </ViewUserTop>
    );
};

const ViewUserTop = styled.div`
    width: 500px;
    margin: 20px auto;
    display: flex;

    .user-info {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        justify-content: center;
    }

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
    }

    p {
        margin: 5px;
    }
`;

export default ViewUser;
