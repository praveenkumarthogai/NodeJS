function errorHandler(error, req, res, next) {
    console.log("log from Global Error Handler function");
    res.status(error.status || 500);
    res.send({ message: error.message || 'internal server error' })
}


module.exports = errorHandler;