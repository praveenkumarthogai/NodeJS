const loginService = require('../services/login.service');
const bcrypt = require('bcrypt');

function login(req, res, next) {
    try {
        //let password = '';
        //bcrypt.compare(password,'hashedPassword')
        let token = loginService.ValidateLogin();
        res.json(token);
    }
    catch (ex) {

    }
}


function Register(req, res, next) {
    let password = '';
    const salt = bcrypt.genSalt(10);
    encryptedPassword = bcrypt.hash(password, salt);


}

module.exports = login;