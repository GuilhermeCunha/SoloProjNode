const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: String,
    senha: String,
    nome: String,
    celular: String,
    cpf: String,
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);