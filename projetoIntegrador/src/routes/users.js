var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('cadastroUsuario', function(req, res, next) {
  res.send('cadastroUsuario');
});

module.exports = router;
