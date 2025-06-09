const express = require('express');
const AlunoController = require('../controllers/alunoController');

const router = express.Router();

router.post('/', AlunoController.criar);
router.get('/', AlunoController.listar);
router.put('/:matricula', AlunoController.atualizar);
router.delete('/:matricula', AlunoController.deletar);

module.exports = router;
