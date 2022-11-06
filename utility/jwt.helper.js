const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const secretKey = require('../config/config').apiSecretKey;



const signAccessToken = (userId) => {
    return new Promise((resolve, reject) => {

        const payload = {};
        const options = {
            expiresIn: '1h',
            issuer: 'flipkart.com',
            audience: userId,
        }

        jwt.sign(payload, secretKey, options, (err, token) => {
            if (err) {
                reject(createError.InternalServerError("unablw to generate token"))
            }
            else {
                resolve(token);
            }
        })
    })
}




const signRefreshToken = () => {
    const options = {
        expiresIn: '1h',
        issuer: 'flipkart.com',
        audience: userId,
    }
    return new Promise((resolve, reject) => {
        jwt.sign({}, secretKey, options, (err, token) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(token)
            }

        })
    })
}