const loginService = require('../services/login.service');

function login(req,res,next) {
    let token = loginService.ValidateLogin();
    res.json(token);
}

module.exports = login;