const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.sign = (payload) => {
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        {
            algorithm: process.env.JWT_ALGORITHM,
            expiresIn: process.env.JWT_EXPIRESIN
        });
    return token;
}

exports.verify = (token) => {
    var decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (err) {
        console.log('err.message : ' + err.message);
        if(err.message === 'jwt expired'){ // 만료된 token
            console.log('expired');
            return 'expired';
        } else { // 유효하지 않은 token
            console.log('invalid');
            return 'invalid';
        }
    }
    return decoded;
}