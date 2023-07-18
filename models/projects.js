const Mongoose = require('mongoose');

const projectModel = Mongoose.Schema(
    {
    "title": String,
    "description": String,
    "deadline": Date
    },
    {
    "collection":"projects"
    }
);

module.exports = Mongoose.model('projects',projectModel);