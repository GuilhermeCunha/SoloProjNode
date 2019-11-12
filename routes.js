const express = require('express');
const routes = express.Router();


//Controllers
const UserController = require('./src/Controllers/UserController');

routes.get('/listar-usuarios', UserController.listarUsuarios);

routes.post('/criar-usuario', UserController.criarUsuario);
routes.delete('/remover-usuario', UserController.removerUsuario);
routes.put('/editar-usuario', UserController.editarUsuario);
routes.post('/login', UserController.login);

module.exports = routes;