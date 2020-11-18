import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => res.json({status: "API Agendamento"}));
app.listen(PORT, () => console.log(`Api agendamento - porta ${PORT}`));
