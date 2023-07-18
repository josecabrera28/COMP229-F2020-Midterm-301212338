let moongoose = require('mongoose');

//create model of product
let contactsModel = moongoose.Schema(
    {
        "fname": String,
        "lname": String,
        "address1": String,
        "address2": String,
        "city": String,
        "state": String,
        "zip": String,
        "cel": Number,
        "request": String,
    },
    {
        collection: "Contacts"
    }
);

module.exports = moongoose.model('Contacts', contactsModel);