const generateToken = require('../middlewares/authentication').generateToken;

function ValidateLogin() {
    return generateToken();
}

module.exports = {ValidateLogin};