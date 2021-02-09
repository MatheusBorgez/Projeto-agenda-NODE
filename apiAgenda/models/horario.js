module.exports = (sequelize, DataTypes) => {
    const Horario = sequelize.define("Horario", {

        faixaHorario: {
            type: DataTypes.STRING,
            allowNull: false
        },

        idAluno: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        diaSemana: {
            type: DataTypes.STRING,
            allowNull: false
        },

        sala: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Horario;
}