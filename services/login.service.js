const generateToken = require('../middlewares/authentication').generateToken;
const dbContext = require('./../utility/dbConnection');
const dateConverter = require('./../utility/dateConverter');

async function getUserPassword(userName, password) {
    return await new Promise((resolve, reject) => {
        dbContext.query(`select PASSWORD from Users where UserNAME = '${userName}'`, function (err, result) {
            if (err) {
                return reject(err);
            } else {
                return resolve(result[0].PASSWORD)
            }
        })
    });
}

const getToken = () => {
    return generateToken();
}


const RegisterNewUser = async (req) => {
    return await new Promise((resolve, reject) => {
        let query = `Insert into Users(USERNAME ,PASSWORD ,ROLE ,CREATEDBY,CREATEDDATE ) VALUES ('${req.body.username}','${req.body.password}','${req.body.role}','ADMIN','${dateConverter.ConvertToYYYYMMDDHHMMSS(new Date())}')`;

        dbContext.query(query, (err, results, fields) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        })
    })
}

module.exports = { getToken, RegisterNewUser, getUserPassword };