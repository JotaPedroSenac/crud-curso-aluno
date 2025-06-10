// const Aluno = require('../models/alunoModel');
// const Curso = require('../../curso/models/cursoModel');
const {Aluno, Curso} = require('../../index');

class AlunoController {
    static async criar(req, res) {
        try {
            const { matricula, nome, cod_curso } = req.body;
            if (!matricula || !nome || !cod_curso) {
                return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
            }

            const aluno = await Aluno.create({ matricula, nome, cod_curso });
            return res.status(201).json({ mensagem: 'Aluno criado com sucesso', aluno });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao criar aluno', erro: error.message });
        }
    }

    static async listar(req, res) {
        try {
            const alunos = await Aluno.findAll({
                include: [{ model: Curso, attributes: ['nome'] }]
            });

            if (alunos.length > 0) {
                return res.status(200).json(alunos);
            }

            return res.status(200).json({ mensagem: 'Nenhum aluno encontrado' });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao listar alunos', erro: error.message });
        }
    }

    static async atualizar(req, res) {
        try {
            const { matricula } = req.params;
            const { nome, cod_curso } = req.body;

            if (!matricula || !nome || !cod_curso) {
                return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
            }

            const aluno = await Aluno.findByPk(matricula);
            if (!aluno) {
                return res.status(404).json({ mensagem: 'Aluno não encontrado' });
            }

            await aluno.update({ nome, cod_curso });

            return res.status(200).json({ mensagem: 'Aluno atualizado com sucesso', aluno });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao atualizar aluno', erro: error.message });
        }
    }
    static async deletar(req, res) {
        try {
            const matricula = req.params.matricula;
            if (matricula) {
                const aluno_matricula = Aluno.findByPk(matricula)
                if (!aluno_matricula) {
                    res.status(400).json({ mensagem: 'Aluno não encontrado.' })
                } else {
                    await aluno_matricula.destroy()
                    res.status(200).json({ mensagem: 'Registro deletado com Sucesso!' })
                }
            }
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }

    }

    static async deletar(req, res) {
        try {
          const { matricula } = req.params;
      
          if (!matricula) {
            return res.status(400).json({ mensagem: 'Matrícula não informada' });
          }
      
          const aluno = await Aluno.findByPk(matricula);
      
          if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' });
          }
      
          await aluno.destroy();
      
          return res.status(200).json({ mensagem: 'Aluno deletado com sucesso' });
        } catch (error) {
          return res.status(500).json({ mensagem: 'Erro ao deletar aluno', erro: error.message });
        }
      }
      
}

module.exports = AlunoController;
