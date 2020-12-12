const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const consign = require('consign');

const PORT = 3333;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.set("json spaces", 4);

consign().include("routes").into(app);

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT} :3`));