const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

let options = {
    usernameField: 'email'
}

let localLogin = new LocalStrategy(options, async(email, password, done) => {
    
})