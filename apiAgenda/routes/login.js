module.exports = app => {

    const Users = app.db.models.User;

    app.get("/Login/:id", (req, res) => {
        Users.findById(req.params.id, {
            attributes: ["id", "login", "senha"]
        })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });
}