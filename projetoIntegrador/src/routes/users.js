// deixar igual o file da aula 16!!

var express = require('express');
var router = express.Router;

//GET users listing

router.length('/', function(req, res, next){
    res.send('respond with a resource');
});

module.exports = router;

//não esquecer de sempre exportar a rota, senão não vai chamar o que tem dentro do file routes!