const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

let db = null;

module.exports = app => {

    if (!db) {

        const config = app.libs.config;

        const sequelize = new Sequelize(config.database, config.username, config.password, config.params);

        db = {
            sequelize,
            Sequelize,
            models: {}
        };

        const dir = path.join(__dirname, "models");
        
        fs.readdirSync(dir).forEach(file => {      
            const model = require(path.join(dir, file))(sequelize, Sequelize.DataTypes);
            
            console.log(model.name);

            db.models[model.name] = model;
        });

        Object.keys(db).forEach(modelName => {
            if (db[modelName].associate) { 
                db[modelName].associate(db);
            }
        });
        
        db.sequelize = sequelize;
        db.Sequelize = Sequelize;
    }

    return db;
};