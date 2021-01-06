const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.set("json spaces", 4);

consign()
.include("libs/config.js")
.then("db.js")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);
