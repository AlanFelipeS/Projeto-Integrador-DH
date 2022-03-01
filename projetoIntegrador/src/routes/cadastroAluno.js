var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cadastroAluno', { title: 'Cadastro | Mohave' });
});

module.exports = router;
