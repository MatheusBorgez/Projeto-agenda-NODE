module.exports = app => {
    const Users = app.db.models.User;
    const Alunos = app.db.models.Aluno;

    app.route("/administracao/:id")
        .get((req, res) => {
            obtenhaAluno(Alunos, req, res);
        });
        
}