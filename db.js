// connection to mongodb file
const mongoose = require('mongoose'); // common js module system. Default import
// import mongoose from 'mongoose' // ES6 module system. Named import
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGODBATLAS_URI);
    console.log('Connected to MONGODB ATLAS');
}

module.exports = { connectDB, mongoose };
