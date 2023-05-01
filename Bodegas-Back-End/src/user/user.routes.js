'use strict'

const express = require('express')
const api = express.Router();
const userController = require('./user.controller')
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/test', userController.test)
api.post('/saveClient', userController.registerClient)
api.post('/saveUser', userController.saveUser)
api.post('/login', userController.loginUser)
api.put('/update/:id', ensureAuth, userController.updateUser)
api.delete('/delete/:id', ensureAuth,userController.deleteUser)
api.get('/getUsers', userController.getUsers)

module.exports = api;