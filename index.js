const express = require('express'),
    app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 13444, () => console.log('ambiente logado com sucesso!'));

const {Client, MessageAttachment} = require('discord.js'),
    client = new Client();
    config = require('./config.json');
    pokeQuizz = require('./src/js/pokequizz');

client.on('ready', () =>{
        console.log(`${client.user.tag} logado com sucesso!`)
    })

    client.on('message', msg => {
        if(msg.content == `${config.prefix}pokequizz`){
            pokeQuizz(msg, MessageAttachment);
        }
    })

   /*  client.on('message', msg =>{
        if(msg.content == 'ping'){
            msg.reply('pong');
        }
        if(msg.content ==  `${config.prefix}avatar`){
        msg.reply(msg.author.displayAvatarURL());
        }
        if(msg.content == `${config.prefix}foto`){
            const attachement = new MessageAttachment(msg.author.displayAvatarURL());
            msg.channel.send(attachement    );
        }
    }) */
    client.login(config.token);
