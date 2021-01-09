module.exports = (sequelize, DataTypes) => {

    const Aluno = sequelize.define("Aluno", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },

        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { len: [0, 12] }
        },

        dataDeNacimento: {
            type: DataTypes.DATE,
            validate: { isBefore: new Date().toISOString().substring(0, 10) }
        },

        matricula: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        },

        endereco: {
            type: DataTypes.STRING
        },

        telefone: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true }
        }
    })

    return Aluno;
}