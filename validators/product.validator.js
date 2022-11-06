const modelValidator = require('@hapi/joi');


const productValidator = modelValidator.object({
    ProductId : modelValidator.number().optional(),
    ItemName: modelValidator.string().required(),
    ItemCategory: modelValidator.string().required(),
    Price: modelValidator.number().required(),
    InStock: modelValidator.string().min(1).max(1).required()
});

module.exports = productValidator;