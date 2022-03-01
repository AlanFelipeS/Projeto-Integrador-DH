const express = require('express');
const router = express.Router();

const LoginController = {
    login: (req, res) => {
        res.render('login');
    }
}

module.exports = LoginController;