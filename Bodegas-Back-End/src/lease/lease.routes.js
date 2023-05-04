'use strict'

const express = require('express');
const api = express.Router();
const leaseController = require('./lease.controller');

api.get('/test', leaseController.test)
api.post('/save', leaseController.saveLease)
api.put('/update/:id', leaseController.updateLease)
api.delete('/delete/:id', leaseController.deleteLease)
api.get('/get', leaseController.getLease)
api.get('/getId/:id', leaseController.getLeaseId)

module.exports = api;