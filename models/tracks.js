const Mongoose = require('mongoose');

const trackModel = Mongoose.Schema(
    {
    "name": String,
    "artist": String,
    "duration": Number,
    "year": Number
    },
    {
    "collection":"tracks"
    }
);

module.exports = Mongoose.model('tracks',trackModel);