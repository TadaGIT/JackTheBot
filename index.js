// token: ODM0MDQ4MDIwMDE3ODQwMTg5.YH7Nvw.kntIVYKYn4hsGKQK7840nhMAmgU
// id: 834048020017840189 
// link: https://discord.com/oauth2/authorize?client_id=834048020017840189&scope=bot&permissions=511040

const Discord = require("discord.js");

var client = new Discord.client();

    client.on("ready", () =>{
        console.log("O bot está online!!!: " + client.user.tag);
    });

    client.on("message", message =>{
        var message_LC = message.content.toLowerCase();

        if(message_LC == "!hello"){
            message.reply("KOE MALUCO!");
        }
    })









































