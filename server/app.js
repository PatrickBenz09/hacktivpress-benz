'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/hacktiv-overflow');

const user = require('./routers/user');
const article = require('./routers/article');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', user)
app.use('/articles', article)

app.listen(process.env.PORT || 3000)
