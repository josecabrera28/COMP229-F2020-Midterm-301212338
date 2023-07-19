const mongoose = require("mongoose");
require('dotenv').config();
const DB_URI = process.env.DB_URI;


/* .connect() does not accepts callback anymore */

async function dbConnect() {
    try {
      await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Mongo Atlas DataBase Connexion Successful');
    } catch (error) {
      console.error('Mongo DataBase Connexion Failed!:\n', error);
    }
  }

module.exports = dbConnect;