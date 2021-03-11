const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const commentSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        commentText: {
            type: String,
            required: true
        }
    }
)

const userSchema = mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
    },
    comments: []

})

const User = mongoose.model('User', userSchema);

module.exports = User;