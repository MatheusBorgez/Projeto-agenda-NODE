module.exports = app => {
    const Horarios = app.db.models.Horario;

    app.route("/sala/:idAluno/:sala")
        .get((req, res) => {
            obtenhaHorariosAluno(Horarios, req, res);
        });

    app.post("/sala", (req, res) => {
        insiraOuAtualize(Horarios, req, res);
    });
}

function insiraOuAtualize(Horarios, req, res) {

    console.log(`${req.body.idAluno}`);
    console.log(`${req.body.sala}`);

    Horarios.findOne({
        where: {
            idAluno: req.body.idAluno,
            sala: req.body.sala
        }
    })
        .then((result) => {            
            if (result) {
                atualizeHorarios(Horarios, req, res);
            }
            else {
                insiraHorarios(Horarios, req, res);
            }
        })
        .catch(error => {
            console.log(`${error.message}, ${error.instance}, ${error.path}, ${error.type}`);
            return envieMensagemErro(res, error);
        });
}

function atualizeHorarios(Horarios, req, res) {
    Horarios.update(req.body, {
        where: {
            idAluno: req.body.idAluno,
            diaSemana: req.body.diaSemana,
            sala: req.body.sala
        }
    })
    .then(result =>  res.sendStatus(201))
    .catch(error => envieMensagemErro(res, error));
}

function insiraHorarios(Horarios, req, res) {

    console.log(req.body);

    Horarios.create(req.body)
    .then(result =>  res.sendStatus(201))
    .catch(error => envieMensagemErro(res, error));
}

function obtenhaHorariosAluno(Horarios, req, res) {

    Horarios.findAll({ where: req.params })
        .then(result => {
            res.json({ horarios: result });
            console.log(result);
            })
        .catch(error => {
            envieMensagemErro(res, error);
        });
}

function envieMensagemErro(res, error) {

    console.log(`${error.message}, ${error.instance}, ${error.path}, ${error.type}`);

    return res.status(412).json({
        msg: `${error.message}, ${error.instance}, ${error.path}, ${error.type}`
    });
}
