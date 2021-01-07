module.exports = app => {

    console.log()

    const Login = app.db.models.login;

    app.get("/login", (req, res) => {
        Login.findAll({}, (login) => {
            res.json({ login: login })
        });
    });
}