'use strict'

const mongoose = require('mongoose')

const leaseSchema = mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    worker:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    cellar: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Cellar',
        require: true
    },
    additionalService: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'AddService',
    },
    total: {
        type: Number,
        require: true
    }
}, { versionKey: false })

module.exports = mongoose.model('Lease', leaseSchema)