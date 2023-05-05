'use strict'

const express = require('express')
const api = express.Router();
const cellarController = require('./cellar.controller')
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/test', cellarController.test);
api.post('/save', /* [ensureAuth,isAdmin], */ cellarController.addCellar)
api.put('/update/:id', /* [ensureAuth,isAdmin], */ cellarController.updateCellar)
api.delete('/delete/:id', /* [ensureAuth,isAdmin], */ cellarController.deleteCellar)
api.get('/get', cellarController.getCellars)
api.get('/getId/:id', cellarController.getCellarId)
api.post('/search', cellarController.searchCellar)
api.put('/availability/:id',cellarController.availability);


module.exports = api;