'use strict'

require('dotenv').config()
const mongoConfig = require('./configs/mongo');
const app = require('./configs/app');
const userDef = require('./src/user/user.controller')

userDef.userDefault();
mongoConfig.connect();
app.initServer();