module.exports = (sequelize, DataTypes) => {

    const Alunos = sequelize.define("Aluno", {

        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "id não pode ser nulo"
                }
            }
        },

        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [0, 12],
                    msg: "CPF em formato errado"
                }
            }
        },

        dataNacimento: {
            type: DataTypes.STRING,
        },

        matricula: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false            
        },

        endereco: {
            type: DataTypes.STRING
        },

        telefone: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "email em formato errado"
                },
            }
        }
    })

    return Alunos;
}