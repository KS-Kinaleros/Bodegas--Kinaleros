'use strict'

const mongoose = require('mongoose')

const cellarSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true,
        uppercase: true
    },
    description:{
        type: String,
        require: true
    },
    size:{
        type: String,
        require: true
    },
    location:{
        type: String, 
        require: true
    },
    price:{
        type: String,
        require: true
    },
    availability:{
        type: String,
        require: true
    }
},{ versionKey: false })

module.exports = mongoose.model('Cellar', cellarSchema)