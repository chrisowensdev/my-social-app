import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BaseLayout from './components/layout/BaseLayout';
import App from './App';
import UserProfile from './components/User/UserProfile';
import SignUp from './components/User/SignUp';
import Posts from './components/Posts/Posts';
import ViewUser from './components/User/ViewUser';
import Login from './components/User/Login';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <BaseLayout>
                    <Route exact path='/' component={App} />
                    <Route path='/profile' component={UserProfile} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={Login} />
                    <Route path='/addpost' component={Posts} />
                    <Route path='/users/:id' component={ViewUser} />
                </BaseLayout>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
