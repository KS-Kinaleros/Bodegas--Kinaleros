'use strict'
const express = require('express')
const api = express.Router();
const addServiceController = require('./additionalService.controller')

api.get('/test', addServiceController.test)
api.get('/get',addServiceController.getServices)
api.post('/add', addServiceController.saveAddService)
api.put('/update/:id', addServiceController.updateAddService)
api.delete('/delete/:id', addServiceController.deleteAddService)

module.exports = api; 