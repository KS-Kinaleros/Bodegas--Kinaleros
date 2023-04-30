'use strict'

const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3200
const userRoutes = require('../src/user/user.routes')
const serviceRoutes = require('../src/additionalService/additionalService.routes')
const cellarRoutes = require('../src/cellar/cellar.routes')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use('/user', userRoutes)
app.use('/cellar', cellarRoutes)
app.use('Service', serviceRoutes) 

exports.initServer = ()=>{
    app.listen(port);
    console.log(`Server running in port ${port}`)
}