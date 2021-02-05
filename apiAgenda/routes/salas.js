module.exports = app => {
    const Alunos = app.db.models.Aluno;
    const Horarios = app.db.models.Horario;

    app.route("/sala/:id/:sala")
        .get((req, res) => {
            obtenhaHorariosAluno(Horarios, req, res);
        });

    app.post("/sala", (req, res) => {
            insiraOuAtualize(Horarios, req, res);
        });

}

function insiraOuAtualize(Horarios, req, res) {

    console.log(req.body);

    Horarios.findOne({
        where: {
            idAluno: req.body.idAluno,
            sala: req.body.sala
        }
    })
        .then(
            function (result) {
                if (result) {
                    atualizeHorarios(Horarios, req, res);
                }
                else {
                    insiraHorarios(Horarios, req, res);
                }
            }
        )
        .catch(error => envieMensagemErro(res, error));
}

function atualizeHorarios(Horarios, req, res) {
    req.body.horarios.forEach(horario => {
        Horarios.update(horario, {
            where: {
                idAluno: horario.id,
                sala: horario.sala
            }
        })
        .then(res.sendStatus(203));
    });
}

function insiraHorarios(Horarios, req, res) {

    req.body.forEach(horario => {
        Horarios.create(req.body)
                .then(res.sendStatus(201));                
    });
}

function obtenhaHorariosAluno(Horarios, req, res) {
    Horarios.findAll({ where: req.params })
        .then(result => res.json({ horarios: result }))
        .catch(error => {
            envieMensagemErro(res, error);
        });

}

function envieMensagemErro(res, error) {
    res.status(412).json({
        msg: `${error.message}, ${error.instance}, ${error.path}, ${error.type}`
    });
}
