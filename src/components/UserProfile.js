import React from 'react';

import { useSelector } from 'react-redux';

const UserProfile = () => {
    const activeUser = useSelector((state) => state.users.activeUser);

    return (
        <>
            <h1>User Profile</h1>
        </>
    );
};

export default UserProfile;
