const productService = require('./../services/product.service');
const productValidator = require('../validators/product.validator');


async function getAllProducts(req, res, next) {
    try {
        await productService.getAllProductDetails(req, (err, data) => {
            res.send(data)
        });
    } catch (err) {
        console.error(`Error while getting product details `, err.message);
        next(err);
    }
}



async function addNewProduct(req, res, next) {

    try {

        //Validate request body
        req.body = await productValidator.validateAsync(req.body);

        await productService.createNewItem(req.body, (err, data) => {
            res.send("New Item Created Successfully");
        })
    }
    catch (err) {
        next(err)

    }
}



module.exports = { getAllProducts, addNewProduct };