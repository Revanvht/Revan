const yourID = "402367348364935169"; //Instructions on how to get this: https://redd.it/40zgse

const setupCMD = "/rolez"

let initialMessage = `**TUTORIAL DISCORD BOT ANDROID VERSION! **`;

const roles = ["VOTE", "DISABLE"];

const reactions = ["", ""];

 /*You'll have to set this yourself; read more

here https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token*/


//Load up the bot...

const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login(botToken);


//If there isn't a reaction for every role, scold the user!

if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";


//Function to generate the role messages, based on your settings

function generateMessages(){

    var messages = [];

    messages.push(initialMessage);

    for (let role of roles) messages.push(`Klik Reaction Di bawah untuk mulai **"${role}"** `); //DONT CHANGE THIS

    return messages;

}



bot.on("message", message => {

    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){

        var toSend = generateMessages();

        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];

        for (let mapObj of mappedArray){

            message.channel.send(mapObj[0]).then( sent => {

                if (mapObj[1]){

                  sent.react(mapObj[1]); 

                } 

            });

        }

    }

})



bot.on('raw', event => {

    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){

        

        let channel = bot.channels.get(event.d.channel_id);

        let message = channel.fetchMessage(event.d.message_id).then(msg=> {

        let user = msg.guild.members.get(event.d.user_id);

        

        if (msg.author.id == bot.user.id && msg.content != initialMessage){

       

            var re = `\\*\\*"(.+)?(?="\\*\\*)`;

            var role = msg.content.match(re)[1];

        

            if (user.id != bot.user.id){

                var roleObj = msg.guild.roles.find(r => r.name === role);

                var memberObj = msg.guild.members.get(user.id);

                

                if (event.t === "MESSAGE_REACTION_ADD"){

                    memberObj.addRole(roleObj)

                } else {

                    memberObj.removeRole(roleObj);

                }

            }

        }

        })

 

    } 

});

bot.login("NTQ4NTQxMzk0NTgzNTUyMDAx.D11pOA.Ae0G5tKVDiXw6wSTp4wNT33pCcY");
