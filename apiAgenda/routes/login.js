module.exports = app => {

    const Login = app.models.login;

    app.get("/login", (req, res) => {
        Login.findAll({}, (login) => {
            res.json({ login: login })
        });
    });
}