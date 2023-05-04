'use strict'
const express = require('express')
const api = express.Router();
const addServiceController = require('./additionalService.controller')
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/test', addServiceController.test)
api.get('/get',addServiceController.getServices)
api.get('/getId/:id', addServiceController.getServiceId)
api.post('/add', [ensureAuth, isAdmin], addServiceController.saveAddService)
api.put('/update/:id', [ensureAuth, isAdmin], addServiceController.updateAddService)
api.delete('/delete/:id', [ensureAuth,isAdmin], addServiceController.deleteAddService)

module.exports = api; 