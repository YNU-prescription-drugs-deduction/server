const jwt = require('jsonwebtoken');
require('dotenv').config();

const sign = (payload) => {
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        {
            algorithm: process.env.JWT_ALGORITHM,
            expiresIn: process.env.JWT_EXPIRESIN
        });
    return token;
}

const verify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
};

const auth = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).send({ message: 'Authorization header is missing' });
    }

    const token = authorization.split(' ')[1];

    verify(token)
        .then((decoded) => {
            req.user = decoded;
            next();
        })
        .catch((err) => {
            if (err instanceof jwt.TokenExpiredError) {
                return res.status(401).send({ message: 'Token has expired' });
            }
            if (err instanceof jwt.JsonWebTokenError) {
                return res.status(401).send({ message: 'Invalid token' });
            }
            return res.status(401).send({ message: 'Authorization error' });
        });
};

module.exports = { sign, auth };