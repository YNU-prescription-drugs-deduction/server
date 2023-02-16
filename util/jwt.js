const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.getToken = (payload) => {
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        {
            algorithm: process.env.JWT_ALGORITHM,
            expiresIn: process.env.JWT_EXPIRESIN
        });
    return token;
}