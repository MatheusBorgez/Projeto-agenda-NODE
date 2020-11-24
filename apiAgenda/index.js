import express from 'express';

const PORT = 3333;
const app = express();

app.get("/", (req, res) => res.json("ntask api"));

app.listen(PORT, () => console.log(`NTask API - Porta ${PORT}`));