const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config()

const bcrypt = require('bcryptjs');


let options = {
    usernameField: 'email'
}

let localLogin = new LocalStrategy(options, async (email, password, done) => {
    try {
        

        
    } catch (error) {
        return done(error);
    }
})