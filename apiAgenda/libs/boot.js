module.exports = app => {
    app.db.sequelize.sync();
    
    app.listen(app.get("port"), () => {
        console.log(`Api rodando na porta ${app.get("port")} :3`);
    });
}