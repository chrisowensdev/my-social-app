const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

app.listen(3001, () => {
    console.log('Server is running on 3001');
})

const rootController = require('./routes');
const userController = require('./routes/user');
const postController = require('./routes/post');

app.use('/api/v1', rootController)
app.use('/api/v1/users', userController);
app.use('/api/v1/posts', postController);