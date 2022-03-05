const express = require ('express');
const router = express.Router();
const ServicoController = require('../controllers/ServicoController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, callback){
        callback(null, 'public/image/uploads');
    },

    filename(req, file, callback){
        const [filename, extension] = file.originalname.split('.');
        callback(null, filename + '-' + Date.now() + "." + extension); //lemnrar de qdo o bruno falou sobre qtd de files com mesmo nome, por isso a data pra cada req

    }
});

const upload = multer({ storage });


router.get('/cadastrar', ServicoController.editar);
router.post('/cadastrar', upload.single('servico-img'), ServicoController.criar);

router.get('/', ServicoController.index);
router.get('/admin', ServicoController.admin);

//aqui tem que colocar cadastrar/:id, qdo tiver id!
router.get('/editar/:id', ServicoController.editar);
router.put('/editar/:id', upload.single('servico-img'), ServicoController.atualizar);

router.delete('/deletar/:id', ServicoController.deletar);

module.exports = router;