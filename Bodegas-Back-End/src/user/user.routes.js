'use strict'

const express = require('express')
const api = express.Router();
const userController = require('./user.controller')
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/test', userController.test)
api.post('/saveClient',/* [ensureAuth,isAdmin], */ userController.registerClient)
api.post('/saveUser', /* [ensureAuth,isAdmin], */userController.saveUser)
api.post('/saveWorker',  /* [ensureAuth,isAdmin], */userController.saveWorker)
api.post('/login', userController.loginUser)
api.put('/update/:id', /* [ensureAuth,isAdmin], */ userController.updateUser)
api.delete('/delete/:id', /* [ensureAuth,isAdmin], */userController.deleteUser)
api.get('/getUsers', userController.getUsers)
api.get('/getId/:id', userController.getUserId)

module.exports = api;