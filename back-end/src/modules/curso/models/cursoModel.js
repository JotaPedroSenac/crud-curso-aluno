const { DataTypes } = require('sequelize');
const { sequelize }= require('../../../config/configDb');

const CursoModel = sequelize.define('Curso', {
    cod_curso:{
        type: DataTypes.STRING(4),
        allowNull:false,
        primaryKey:true,
        validate:{
            is:{
                args:/^[A-Z][0-9]{3}$/,
                msg: 'o codigo da turma deve ter a primeira letra maiuscula seguida de 3 digitos numericos'

            }
        }
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      }
},

{
    tableName: 'curso',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
  },
);

module.exports = CursoModel