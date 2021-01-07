module.exports = app => {

    const Alunos = app.db.models.Aluno;

    app.get("/CadastroAluno", (req, res) => {
        Alunos.findAll({}).then(alunos => {
            res.json({alunos: alunos});
        });
    });
};