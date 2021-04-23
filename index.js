// id: 834048020017840189 
// link: https://discord.com/oauth2/authorize?client_id=834048020017840189&scope=bot&permissions=511040

// faz o require do pacote discord.js files/modules/functions 
const Discord = require("discord.js");

// cria uma nova aplicação
var client = new Discord.Client();

// faz o require do token do arquivo token.json
const {
    token 
} = require("./token.json");

// evento de bot pronto
    client.on("ready", () =>{
        console.log("O bot está online!!!: " + client.user.tag);
    });

// evento de mensagem
    client.on("message", message =>{
        // o que ele digitar vai para lowercase(minúsculo)
        var message_LC = message.content.toLowerCase();

        // se o usuário digitar !hello
        if(message_LC == "!hello"){
            // o bot ira responder:
            message.reply("KOE MALUCO!");
        }

        //console.log(message); 
    });

    // faz o login da aplicação (o bot)
    client.login(token);










































