const express = require('express');
const routes = express.Router();


//Controllers
const UserController = require('./src/Controllers/UserController');
const AnuncioController = require('./src/Controllers/AnuncioController');

routes.get('/listar-usuarios', UserController.listarUsuarios);

routes.post('/criar-usuario', UserController.criarUsuario);
routes.delete('/remover-usuario', UserController.removerUsuario);
routes.put('/editar-usuario', UserController.editarUsuario);
routes.post('/login', UserController.login);

routes.get('/listar-anuncios', AnuncioController.listarAnuncios);
routes.post('/criar-anuncio', AnuncioController.criarAnuncio);
routes.delete('/remover-anuncio', AnuncioController.removerAnuncio);
routes.put('/editar-anuncio', AnuncioController.editarAnuncio);

module.exports = routes;