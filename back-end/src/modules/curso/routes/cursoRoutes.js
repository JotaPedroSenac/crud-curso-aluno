const express = require('express');
const CursoController = require('../controllers/cursoController');

const router = express.Router();

router.post('/', CursoController.criar);
router.get('/', CursoController.listar);
router.put('/:cod_curso', CursoController.atualizar);
router.delete('/:cod_curso', CursoController.deletar);

module.exports = router;
