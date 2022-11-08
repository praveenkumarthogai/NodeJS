


const ConvertToYYYYMMDDHHMMSS = (date) => {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}

//require('moment')().format('YYYY-MM-DD HH:mm:ss');


module.exports = { ConvertToYYYYMMDDHHMMSS }