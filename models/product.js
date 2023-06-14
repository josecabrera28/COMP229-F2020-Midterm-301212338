let moongoose = require('mongoose');

//create model of product
let productModel = moongoose.Schema(
    {
        "name": String,
        "company": String,
        "price": Number,
    },
    {
        collection: "product"
    }
);

module.exports = moongoose.model('Product', productModel);