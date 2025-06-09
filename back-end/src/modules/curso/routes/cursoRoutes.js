const express = require('express');
const CursoController = require('../controllers/cursoController');

const router = express.Router();

router.post('/', CursoController.criar);
router.get('/', CursoController.listar);
router.put('/:matricula', CursoController.atualizar);
router.delete('/:matricula', CursoController.deletar);

module.exports = router;
