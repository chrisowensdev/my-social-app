import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BaseLayout from './components/layout/BaseLayout';
import App from './App';
import UserProfile from './components/User/UserProfile';
import AddUser from './components/User/AddUser';
import Posts from './components/Posts/Posts';

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
                    <Route path='/signup' component={AddUser} />
                    <Route path='/addpost' component={Posts} />
                </BaseLayout>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
