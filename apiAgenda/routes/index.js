module.exports = app => {
    app.get("/index", (req, res) => {
        res.json({status: "teste rota1"});
    });
};
