module.exports = app => {

    const Users = app.db.models.User;

    app.post("/Login", (req, res) => {

        const usuario = req.body.login;
        const senha = req.body.senha;

        if (usuario && senha) {
            autentiqueUsuario(Users, usuario, senha, res);
        }
        else {
            res.sendStatus(404);
        }
    });
}

function autentiqueUsuario(Users, usuario, senha, res) {

    Users.findOne({ where: { login: usuario } })
        .then(user => {
            if (user.senha == senha) {                                        
                res.send({admin: user.administrador});
            }
            else {
                res.sendStatus(401);
            }
        })
        .catch(error => {
            res.status(401).json({ msg: error.message });
        });
}
