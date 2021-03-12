const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const postSchema = mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    comments: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            commentText: {
                type: String,
                required: true
            },
            date: {
                type: Number,
                required: true
            }
        }
    ],
    likes: [Number]

})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;