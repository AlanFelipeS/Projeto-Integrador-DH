const UsuarioModel = require('../models/UsuarioModel');

const UsuarioController = {
    index: (req, res) => {
        res.render('cadastroUsuario');
    }
}
module.exports = UsuarioController;
