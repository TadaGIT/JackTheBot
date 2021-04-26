// id: 834048020017840189 
// link: https://discord.com/oauth2/authorize?client_id=834048020017840189&scope=bot&permissions=511040

// faz o require do pacote discord.js files/modules/functions 
const Discord = require("discord.js");

// cria uma nova aplicação
const DiscordClient = new Discord.Client();



// adiciona um modo mais seguro de guardar o token (password)

const{
    token
    
} = require("./token.json");

// evento de bot ficando online , dispara apenas uma vez
    DiscordClient.on("ready", () =>{
        console.log(`Logado como : ${DiscordClient.user.tag}!`);
    });

// array de usuários que deram join
const arrayDeUsuarios = [];

// função que sorteia os participantes
const getRandomFromArray = array => array[Math.floor(Math.random() * array.length)];

const fazGrupo = (lista, tamanho) => {
    const grupo = [];

    while(grupo.length < tamanho && tamanho < lista.length){
        const sorteado = getRandomFromArray(lista);
        if(grupo.indexOf(sorteado) < 0) 
            grupo.push(sorteado);
    }

    return grupo;
}


// evento de verificação da mensagem que o usuário manda
    DiscordClient.on("message", message => {

        const inputToLowerCase = message.content.toLowerCase();

        if(inputToLowerCase.includes("!join") && message.author.bot == false){

            arrayDeUsuarios.push(message.author.username);
            console.log(arrayDeUsuarios);
            message.reply("entrou na lista de tft!");
        }
        else if (inputToLowerCase.includes("!sortear") && message.author.bot == false ){


            console.log("grupos "+fazGrupo(arrayDeUsuarios, 1));

        }

        
        //comando help
        else if(inputToLowerCase == "!help"){
            message.reply("Meus comandos são: !join e !sortear");
        }



    });


   

       

    // faz o login da aplicação (o bot)
    DiscordClient.login(token);










































