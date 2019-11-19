require('dotenv/config');
const User = require('../Models/User');
const NodeMailer = require('./../../lib/NodeMailer');
//const NodeMailerObject = NodeMailer.NodeMailer();

module.exports = {
    async listarUsuarios(req, res){
        const users = await User.find();
        return res.json(users);
    },
    async criarUsuario(req, res){
        const { email, nome, senha, celular, cpf} = req.body;

        var user = await User.create({
            nome,
            email,
            senha,
            celular,
            cpf
        });
        if(user){
            NodeMailer.sendMail(email, "SEJA BEM VINDO!", 
            "<strong>Conta criada com sucesso!</strong>");
            res.status(200).json({
                sucesso: true
            });
            
        }else{
            res.status(500).json({
                sucesso: false
            });
        }
        
    },
    async editarUsuario(req, res){
        const { email, nome, senha, celular, cpf } = req.body;
        
        const sucesso = await User.findOneAndUpdate({ email}, {
            email, 
            nome, 
            senha, 
            celular,
            cpf,
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
    async removerUsuario(req, res){
        const { email } = req.body;
        const sucesso = await User.findOneAndRemove({ email: email},function(err,result){
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
    async login (req, res){
        var { email, senha } = req.body;

        var user = await User.findOne({ email, senha});
        //ok
        if(user){
            res.status(200).json({
                email,
                senha,
                nome: user.nome,
                celular: user.celular,
                sucesso: true
            });
        }else{
            res.status(500).json({
                sucesso: false
            });
        }
    }

}