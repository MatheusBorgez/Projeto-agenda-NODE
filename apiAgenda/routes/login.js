module.exports = app => {

    const Users = app.db.models.User;

    app.get("/Login/:id", (req, res) => {
        Users.findOne({ where: req.params })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });

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
                res.sendStatus(200);
            }
            else {
                res.sendStatus(401);
            }
        })
        .catch(error => {
            res.status(401).json({ msg: error.message });
        });
}
