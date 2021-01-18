module.exports = app => {

    const Users = app.db.models.User;

    app.get("/Login/:id", (req, res) => {
        Users.findOne({ where: req.params })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });
}