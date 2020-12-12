module.exports = app =>{

    const PORT = app.get("port");

    app.listen(PORT, () => {
        console.log(`Api rodando na porta ${PORT} :3`);
    });
};