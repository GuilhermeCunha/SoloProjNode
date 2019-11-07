var nodemailer = require('nodemailer');
require('dotenv/config');

var transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: process.env.EMAIL_USER, // Basta dizer qual o nosso usuário
      pass: process.env.EMAIL_PASSWORD            // e a senha da nossa conta
    } 
});


/*
transporter.sendMail(email, function(err, info){
    if(err)
        throw err; // Oops, algo de errado aconteceu.

    console.log('Email enviado! Leia as informações adicionais: ', info);
});
*/
var NodeMailer = function() {
    this.sendMail = async function(to, subject, html){
        var email = {
            from: process.env.EMAIL_FROM, // Quem enviou este e-mail
            to: to, // Quem receberá
            subject: subject,  // Um assunto bacana :-) 
            html: html // O conteúdo do e-mail
        };
        transporter.sendMail(email, function(err, info){
            if(err)
                throw err; // Oops, algo de errado aconteceu.
        
            console.log('Email enviado para ' + email);
        });
    }
}

exports.NodeMailer = NodeMailer;
