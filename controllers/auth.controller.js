const loginService = require('../services/login.service');
const bcrypt = require('bcrypt');

async function login(req, res, next) {
    try {
        let password = await loginService.getUserPassword(req.query.userName);
        if (req.query.password && await bcrypt.compare(req.query.password, password)) {
            let token = await loginService.getToken();
            return res.json({accessToken:token});
        }
        else {
            res.status(400);
            return res.json({ message: "bad request" });
        }
    }
    catch (ex) {
        res.status(500);
        return res.json({ message: "internal server error" });
    }
}


async function register(req, res, next) {
    try {
        let password = req.body.password;

        const salt = await bcrypt.genSalt(10);
        encryptedPassword = await bcrypt.hash(password, salt);
        req.body.password = encryptedPassword;
        await loginService.RegisterNewUser(req);
    }
    catch (ex) {
        res.send({ message: ex || ex.message })
        return;
    }
    res.send({ message: "User Successfully created" });
}

module.exports = { login, register };