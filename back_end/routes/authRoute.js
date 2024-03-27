const express = require('express');
const {register, login, pageDefault} =  require('../controllers/authController');
const Router = express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);

module.exports = Router;