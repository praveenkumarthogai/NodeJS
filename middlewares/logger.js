const { createLogger, transports, format } = require('winston');

const customlogger = createLogger({
    transports: [
        new transports.File({
            level: 'info',
            filename: 'filelog-info.log',
            json: true,
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            level: 'error',
            filename: 'filelog-error.log',
            json: true,
            format: format.combine(format.timestamp(), format.json())
        })
    ]
});



const logger = (req, res, next) => {
    customlogger.log('info', `method : ${req.method}  url - ${req.url}  status - ${res.status}`)
    next();
}


module.exports = {customlogger,logger};