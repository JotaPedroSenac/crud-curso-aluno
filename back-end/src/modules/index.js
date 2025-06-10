const Aluno = require('./aluno/models/alunoModel');
const Curso = require('./curso/models/cursoModel');

Aluno.belongsTo(Curso,
    {
        foreignKey: 'cod_curso',
        targetKey: 'cod_curso'
    }
);
Curso.hasMany(Aluno,
    {
        foreignKey: 'cod_curso',
        sourceKey: 'cod_curso'
    }
);
module.exports = {
    Aluno, Curso
}