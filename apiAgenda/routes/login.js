module.exports = app => {
    app.get("/login", (req, res) => {
        res.json({
            tasks: [
                { title: "teste 1" },
                { title: "teste 2" },
            ]
        });
    });
}