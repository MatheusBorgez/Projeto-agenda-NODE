module.exports = app => {

    const Alunos = app.db.models.Aluno;

    app.route("/cadastroAluno")
        .get((req, res) => {

            Alunos.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        .post((req, res) => {
            Alunos.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    console.log(error);

                    res.status(412).json({
                        msg:
                            `${error.message}, ${error.instance}, ${error.path}, ${error.type}, ${error.type}`
                    });
                });
        });

    app.route("/cadastroAluno/:id")
        .get((req, res) => {

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
                    res.status(412).json({ msg: error.message });
                });
        })
        .put((req, res) => {
            Alunos.update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        .delete((req, res) => {
            Alunos.destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.sendStatus(412).json({ msg: error.message })
                });
        });

};