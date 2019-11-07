const express = require('express');
const routes = express.Router();


//Controllers
const UserController = require('./src/Controllers/UserController');

routes.get('/listar-usuarios', UserController.listarUsuarios);

routes.post('/criar-usuario', UserController.criarUsuario);
routes.post('/remover-usuario', UserController.removerUsuario);
routes.post('/editar-usuario', UserController.editarUsuario);
routes.post('/login', UserController.login);

module.exports = routes;