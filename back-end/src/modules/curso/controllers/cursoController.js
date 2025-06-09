const Curso = require('../models/cursoModel');

class CursoController {
  static async criar(req, res) {
    try {
      const { cod_curso, nome } = req.body;

      if (!cod_curso || !nome) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
      }

      const curso = await Curso.create({ cod_curso, nome });
      return res.status(201).json({ mensagem: 'Curso criado com sucesso', curso });
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao criar curso', erro: error.message });
    }
  }

  static async listar(req, res) {
    try {
      const cursos = await Curso.findAll();

      if (cursos.length > 0) {
        return res.status(200).json(cursos);
      }

      return res.status(200).json({ mensagem: 'Nenhum curso encontrado' });
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao listar cursos', erro: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { cod_curso } = req.params;
      const { nome } = req.body;

      if (!cod_curso || !nome) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
      }

      const curso = await Curso.findByPk(cod_curso);
      if (!curso) {
        return res.status(404).json({ mensagem: 'Curso não encontrado' });
      }

      await curso.update({ nome });

      return res.status(200).json({ mensagem: 'Curso atualizado com sucesso', curso });
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao atualizar curso', erro: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { cod_curso } = req.params;

      if (!cod_curso) {
        return res.status(400).json({ mensagem: 'Código do curso não informado' });
      }

      const curso = await Curso.findByPk(cod_curso);
      if (!curso) {
        return res.status(404).json({ mensagem: 'Curso não encontrado' });
      }

      await curso.destroy();

      return res.status(200).json({ mensagem: 'Curso deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao deletar curso', erro: error.message });
    }
  }
}

module.exports = CursoController;
