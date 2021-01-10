module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("User", {

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