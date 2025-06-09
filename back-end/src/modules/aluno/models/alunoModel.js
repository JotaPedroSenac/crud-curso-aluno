const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDb');

const AlunoModel = sequelize.define('Aluno', {
    matricula: {
        type: DataTypes.STRING(6),
        allowNull: false,
        primaryKey: true,
        validate: {
            is: {
                args: /^[A-Z][0-9]{5}$/,
                msg: 'A matricula deve ter a primeira letra maiuscula seguida de 5 digitos numericos'

            }
        }
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cod_curso: {
        type: DataTypes.STRING(4),
        allowNull: false,
        references: {
            model: 'curso',
            key: 'cod_curso'
        }
    },
},

{
    tableName: 'aluno',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
  },
);

module.exports = AlunoModel