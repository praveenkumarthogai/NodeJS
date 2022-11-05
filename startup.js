//imports
const express = require('express');
const errHandler = require('./middlewares/errorHandler');
const log = require('./middlewares/logger')
const bodyparser = require('body-parser');
const app = express();

const loginRouter = require('./routes/login.router');
const productRouter = require('./routes/product.router');
const authenticationMiddleware =  require('./middlewares/authentication');

//req body parsing middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//logger middleware
app.use(log.logger);


//Health Check
app.get('/',(req,res)=>{
res.send("POC application Health Check is successfull")
})


//login router
app.use('/api/login', loginRouter);

//authentication middleware
app.use(authenticationMiddleware.verifyToken);

//product router
app.use('/api/products', productRouter);

//404 handler and pass to global error handler
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

//global error handler
app.use(errHandler);


app.listen(8080, () => {
    console.log("POC - Application is running")
})
