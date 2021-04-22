const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const { token } = require('../authentication/index');

const User = require('../models/userModel');

router.get('/', async (req, res) => {
    res.json({
        msg: "Get user route"
    })
})

router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password} = req.body;
    let hashPassword = bcrypt.hashSync(password, 8);
    try {
        
        const userExists = await User.findOne({email});

        if(!userExists) {
            const createdUser = await User.create({
                firstName,
                lastName,
                email,
                password: hashPassword
            });

            const user = await User.findById(createdUser._id).select('-password');

            let jwtToken = token(user);

            res.json({
                msg: 'response',
                user: user,
                token: jwtToken
            })
        }


    } catch (error) {
        console.error(error);
    }
    
});


module.exports = router;