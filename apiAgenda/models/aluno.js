module.exports = (sequelize, DataType) => {
    
    const Aluno = sequelize.define("Aluno", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },

        cpf: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: { len: [0, 11] }
        },

        dataDeNacimento: {
            type: DataType.DATE,
            allowNull: false,
            validate: { isBefore: new Date().toISOString().substring(0, 10) }
        },

        matricula: {
            type: DataType.INTEGER,
            unique: true,
            allowNull: true
        },

        endereco: {
            type: DataType.STRING
        },

        telefone: {
            type: DataType.STRING
        },

        email: {
            type: DataType.STRING,
            validate: { isEmail: true }
        }
    })
}