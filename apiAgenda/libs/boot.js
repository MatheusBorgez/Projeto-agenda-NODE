const PORT = app.get("port");

module.exports = app => {
    app.db.sync().done(() => {
        app.listen(PORT, () => {
            console.log(`Api rodando na porta ${PORT} :3`);
        });
    });
}