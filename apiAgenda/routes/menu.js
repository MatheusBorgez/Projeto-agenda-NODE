module.exports = app => {
    const Alunos = app.db.models.Aluno;

    app.route("/menu/:cpf")
        .get((req, res) => {
            obtenhaAluno(Alunos,req, res);
        });
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

function envieMensagemErro(res, error) {
    res.status(412).json({
        msg: `${error.message}, ${error.instance}, ${error.path}, ${error.type}`
    });
}
