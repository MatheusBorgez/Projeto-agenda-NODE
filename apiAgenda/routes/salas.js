module.exports = app => {
    const Alunos = app.db.models.Aluno;
    const Horarios = app.db.models.Horario;

    app.route("/sala/:id/:sala")
        .get((req, res) => {
            obtenhaHorariosAluno(Horarios, req, res);
        })
        .post((req, res) => {
            insiraOuAtualize(Horarios, req, res);
        })



}

function insiraOuAtualize(Horarios, req, res) {
    Horarios.findOne({
        where: {
            idAluno: req.body.id,
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
        });
    });
}

function insiraHorarios(Horarios, req, res) {

    req.body.horarios.forEach(horario => {
        Horarios.create(horario);
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
