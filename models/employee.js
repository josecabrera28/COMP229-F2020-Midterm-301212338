let moongoose = require('mongoose');

//create model of product
let employeeModel = moongoose.Schema(
    {
        "name": String,
        "address": String,
        "phone": Number,
    },
    {
        collection: "employee"
    }
);

module.exports = moongoose.model('Employee', employeeModel);