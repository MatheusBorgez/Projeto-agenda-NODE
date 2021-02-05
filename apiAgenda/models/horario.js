module.exports = (sequelize, DataTypes) => {
    const Horario = sequelize.define("Horario", {

        inicio: {
            type: DataTypes.STRING,
            allowNull: false
        },

        fim: {
            type: DataTypes.STRING,
            allowNull: false
        },

        idAluno: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        diaSemana: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        sala: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Horario;
}