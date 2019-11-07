require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
//const requireDir = require('require-dir');
const routes = require('./routes');
var cors = require('cors')

//require('./.env')
//Iniciando o APP
const app = express();

//Conectando DB
mongoose.connect(process.env.ATLAS_MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

// Faz com que o express entenda o JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Equivale a dar um require() em todas os arquivos dentro desta pasta
//requireDir('./src/models');
require('./src/Models/User');

//Reconhece as rotas
app.use(cors());
app.use(routes);




//app.listen( process.env.PORT || 3000);
app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});