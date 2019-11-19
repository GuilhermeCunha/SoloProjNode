require('dotenv/config');
const Anuncio = require('../Models/Anuncio');

module.exports = {
    async listarAnuncios(req, res){
        const anuncios = await Anuncio.find();
        return res.json(anuncios);
    },
    async criarAnuncio(req, res){
        const { id, nome, preco, mensagem } = req.body;
        var anuncio = await Anuncio.create({
            id,
            nome,
            preco,
            mensagem,
        });

        if(anuncio){
            res.status(200).json({
                sucesso: true
            });
        }else{
            res.status(500).json({
                sucesso: false
            });
        }
    },
    async editarAnuncio(req, res){
        const { id, nome, preco, mensagem } = req.body;
        
        const sucesso = await Anuncio.findOneAndUpdate({ id }, { 
            nome,
            preco, 
            mensagem,
        }).then(function(result){
            return true;
        }).catch(e =>{
            return false;
        })

        if(sucesso){
            res.status(200).json({
                sucesso: true
            });
        }else{
            res.status(500).json({
                sucesso: false
            });
        }
    },
    async removerAnuncio(req, res){
        const { id } = req.body;
        const sucesso = await Anuncio.findOneAndRemove({ id },function(err,result){
            if(err) return false;
            return true;
        });

        if(sucesso){
            res.status(200).json({
                sucesso: true
            });
        }else{
            res.status(500).json({
                sucesso: false
            });
        }
        
    },
}