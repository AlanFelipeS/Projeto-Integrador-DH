// deixar igual o file da aula 16!!

var express = require('express');
var router = express.Router();

//GET users listing

router.get('/', function(req, res, next){
    res.send('respond with a resource');
});

module.exports = router;
