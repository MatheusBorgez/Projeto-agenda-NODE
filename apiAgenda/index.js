const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 3333;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/index", (req, res) => {
    res.json({
        tasks: [
            {title: "teste 1"},
            {title: "teste 2"},
        ]
    });
});

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT} :3`));