'use strict'

const express = require('express')
const api = express.Router();
const cellarController = require('./cellar.controller')

api.get('/test', cellarController.test);
api.post('/save', cellarController.addCellar)
api.put('/update/:id', cellarController.updateCellar)
api.delete('/delete/:id', cellarController.deleteCellar)
api.get('/get', cellarController.getCellars)
api.post('/search', cellarController.searchCellar)

module.exports = api;