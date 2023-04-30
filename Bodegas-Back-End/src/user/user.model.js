'use strict'

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    surname:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    phone:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        require: true,
        uppercase: true
    }
},{ versionKey: false });

module.exports = mongoose.model('User',userSchema)