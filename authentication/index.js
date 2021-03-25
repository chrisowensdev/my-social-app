const passport = require('passport');
const jwt = require('jwt-simple');
require('dotenv').config();

exports.token = user => {
    let timestamp = new Date().getTime();
    return jwt.encode({sub: user._id, iat: timestamp}, process.env.JWTSECRET);
}

exports.requireSignIn = passport.authenticate('local', {session: false});
exports.requireAuth = passport.authenticate('jwt', {session:false})