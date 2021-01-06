module.exports = (sequelize, DataType) => {
    const Aluno = sequelize.define("Aluno", {
        id: {
            Type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            Type: DataType.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },

        cpf: {
            Type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: { len: [0, 11] }
        },

        dataDeNacimento: {
            Type: DataType.DATE,
            allowNull: false,
            validate: { isBefore: new Date().toISOString().substring(0, 10) }
        },

        matricula: {
            Type: DataType.INTEGER,
            unique: true,
            allowNull: true
        },

        endereco: {
            Type: DataType.STRING
        },

        telefone: {
            Type: DataType.STRING
        },

        email: {
            Type: DataType.STRING,
            validate: { isEmail: true }
        }
    })
}