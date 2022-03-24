const express = require ('express');
const router = express.Router();
const ServicoController = require('../controllers/ServicoController');
const upload = require('../../multer');



router.get('/cadastrar', ServicoController.editar);
router.post('/cadastrar', upload.single('servico-img'), ServicoController.criar);

router.get('/', ServicoController.index);
router.get('/admin', ServicoController.admin);

//aqui tem que colocar cadastrar/:id, qdo tiver id!
router.get('/editar/:id', ServicoController.editar);
router.put('/editar/:id', upload.single('servico-img'), ServicoController.atualizar);

router.delete('/deletar/:id', ServicoController.deletar);

module.exports = router;