'use strict'

const express = require('express');
const api = express.Router();
const leaseController = require('./lease.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/test', leaseController.test)
api.post('/save', /* [ensureAuth, isAdmin], */ leaseController.saveLease)
api.put('/update/:id', /* [ensureAuth, isAdmin], */ leaseController.updateLease)
api.delete('/delete/:id',/*  [ensureAuth, isAdmin], */ leaseController.deleteLease)
api.get('/get', leaseController.getLease)
api.get('/getId/:id', leaseController.getLeaseId)

module.exports = api;