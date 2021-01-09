module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("User", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { min: 8 }
        }
    });

    return Users;
}