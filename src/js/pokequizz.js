const config = require('../../config.json');
const axios = require('axios');
const { MessageAttachment } = require('discord.js');

function formatName(str){
    let newStr = str.replace(/[_]/g, ' ')
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    return newStr;
}

module.exports = (msg, MessageAttachment) => {
    let number = Math.floor( (Math.random() * config.maxPokemon) + 1);
    const header = {
        method: "get",
        url: config.endpoint + number
    }

    axios(header)
        .then((response) =>{
            let res = response.data;
            let item = {
                "question": "quem é este pokemon? *(Vocês tem 30 segundos)*",
                "answer": [`${formatName(res.name)}`]
            }
            const filter = response =>{
                return item.answer.some(answer => answer.toLowerCase() == response.content.toLowerCase());
            }
            msg.channel.send(item.question).then(() => {
                const attachement = new MessageAttachment(res.sprites.front_default);
                msg.channel.send(attachement);
                msg.channel.awaitMessages(filter, { max: 1, time: 5000, errors: ['time'] })
                    .then( collected =>{
                        msg.channel.send(`${collected.first().author} acertou a resposta!`);
                    })
                    .catch(collected => {
                        msg.channel.send(`O nome dele é... **${item.answer}**`);
                    })
            })
        })
        .catch(error =>{
            console.log(error)
        })
}