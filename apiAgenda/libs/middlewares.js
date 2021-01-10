const bodyParser = require("body-parser");

module.exports = app =>{
    app.set("port", 3333);
    app.set("json spaces", 4);
    app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Contet-Type", "Authorization"]
    }));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
};