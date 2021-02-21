import React from 'react';
import { useSelector } from 'react-redux';
import AddUser from './components/User/AddUser';

const App = () => {
    const users = useSelector((state) => state.users.userList);
    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <div>
                            {user.firstName} {user.lastName} <br />
                            {user.email}
                        </div>
                    </li>
                ))}
            </ul>
            <AddUser />
        </>
    );
};

export default App;
