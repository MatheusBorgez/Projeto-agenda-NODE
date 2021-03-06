module.exports = app => {

    const Alunos = app.db.models.Aluno;
    const Users = app.db.models.User;
    const op = app.db.Sequelize;

    app.route("/administracao")
        .get((req, res) => {
            obtenhaTodosAlunos(Alunos, res);
        })
        .post((req, res) => {
            insiraAluno(Alunos, Users, req, res);
        });

    app.route("/administracao/:id")
        .get((req, res) => {
            obtenhaAluno(Alunos, req, res);
        })
        .put((req, res) => {
            atualizeAluno(Alunos, req, res);
        })
        .delete((req, res) => {            
            excluaAluno(Alunos, req, res);
        });

    app.get("/administracao/delete/:id", (req, res) => {
        excluaAluno(Alunos, req, res);
    });

    app.get("/administracao/busca/:termoBusca", (req, res) => {
        let termoBusca = req.params.termoBusca
        filtreAlunos(Alunos, termoBusca, res, op);
    })

};

function filtreAlunos(Alunos, termoPesquisa, res, op) {
    const { Op } = require("sequelize");

    Alunos.findAll({
        where: {
            nome: {
                [Op.like]: `%${termoPesquisa}%`
            }
        }
    })
        .then(result => res.json({ alunos: result }))
        .catch(error => envieMensagemErro(res, error));
}

function obtenhaAluno(Alunos, req, res) {
    Alunos.findOne({ where: req.params })
        .then(result => {
            if (result) {
                res.json(result);
            }
            else {
                res.sendStatus(404);
            }
        })
        .catch(error => {
            envieMensagemErro(res, error);
        });
}

function excluaAluno(Alunos, req, res) {

    Alunos.destroy({ where: req.params })
        .then(result => res.sendStatus(201))
        .catch(error => {
            envieMensagemErro(res, error);
        });
}

function atualizeAluno(Alunos, req, res) {
    Alunos.update(req.body, { where: req.params })
        .then(result => res.sendStatus(201))
        .catch(error => {
            envieMensagemErro(res, error);
        });
}

function insiraAluno(Alunos, Users, req, res) {

    Alunos.create(req.body)
        .then(result => {
            res.sendStatus(201);
            res.json(result);
        })
        .catch(error => {
            res.sendStatus(404);
            //envieMensagemErro(res, error);
        });

    Users.create({
        login: req.body.cpf,
        senha: req.body.cpf,
        administrador: false
    })
        .then(result => {
            res.sendStatus(201);
            res.json(result);
        })
        .catch(error => {
            envieMensagemErro(res, error);
        });

}

function obtenhaTodosAlunos(Alunos, res) {
    Alunos.findAll({})
        .then(result => res.json({ alunos: result }))
        .catch(error => {
            envieMensagemErro(res, error);
        });
}

function envieMensagemErro(res, error) {
    res.status(412).json({
        msg: `${error.message}, ${error.instance}, ${error.path}, ${error.type}`
    });
}