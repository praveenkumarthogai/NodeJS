const appsettings = require('../config/config');
const jwt = require('jsonwebtoken');


// FORMAT OF TOKEN
// Authorization: Bearer <access_token>
// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;

        // jwt.verify(req.token, appsettings.apiSecretKey, (err, authData) => {
        //     if (err) {
        //         res.sendStatus(403);
        //     } else {
        //         // Next middleware
        //         next();
        //     }
        // });

        let verified = jwt.verify(req.token, appsettings.apiSecretKey);
        if (!verified) {
            res.sendStatus(403);
        } else {
            // Next middleware
            next();
        }

    } else {
        // Forbidden
        res.sendStatus(403);
    }
}


const generateToken = () => {

    //  jwt.sign({ username: 'admin', password: 'admin' }, appsettings.apiSecretKey, async function (err, token) {
    //     return await token;
    // })

    let token = jwt.sign({ username: 'admin', password: 'admin' }, appsettings.apiSecretKey);
    return token;
}


module.exports = { verifyToken, generateToken };