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

        dataDeNacimento: {
            type: DataTypes.DATE,
            validate: {
                isBefore: {
                    args: new Date().toISOString().substring(0, 10),
                    msg: "Data inválida"
                }
            }
        },

        matricula: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    args: true, msg: "matricula não pode ser nula"
                }
            }
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