var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cadastroUsuario', function(req, res, next) {
  res.render('cadastroUsuario');
});

module.exports = router;
