const mongoose = require('mongoose');


const AnuncioSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    preco: Number,
    mensagem: String,
});

module.exports = mongoose.models.Anuncio || mongoose.model('Anuncio', AnuncioSchema);