/* const { model } = require('mongoose'); */
const { mongoose }= require('../db');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true},
    role: { type: String, default: "User"}
}, { timestamps: true});

const User = mongoose.model( 'User', userSchema );

module.exports = { User };