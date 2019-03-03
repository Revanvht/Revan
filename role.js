const yourID = "402367348364935169"; //Instructions on how to get this: https://redd.it/40zgse

const setupCMD = "/role";

let initialMessage = `**MAAF YA SEMUANYA BERHUBUNGAN DENGAN YANG SUKA BERMAIN BOT ATAU SPAM CHAT BIAR TIDAK TERJADI BAN SERVER SILAHKAN AMBIL ROLE ANTI BANNED DI BAWAH Ini**`;

const roles = ["KEY", "Disable Cuk", "Disable Cuk", "Disable Cuk"];

const reactions = ["", "ðŸ‘©", "ðŸ‘¦", "ðŸ‘§"];

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

Â Â Â Â var messages = [];

Â Â Â Â messages.push(initialMessage);

Â Â Â Â for (let role of roles) messages.push(`Klik Reaction Untuk mendapatkan  **"${role}"** role!`); //DONT CHANGE THIS

Â Â Â Â return messages;

}



bot.on("message", message => {

Â Â Â Â if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){

Â Â Â Â Â Â Â Â var toSend = generateMessages();

Â Â Â Â Â Â Â Â let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];

Â Â Â Â Â Â Â Â for (let mapObj of mappedArray){

Â Â Â Â Â Â Â Â Â Â Â Â message.channel.send(mapObj[0]).then( sent => {

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â if (mapObj[1]){

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â sent.react(mapObj[1]); 

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â } 

Â Â Â Â Â Â Â Â Â Â Â Â });

Â Â Â Â Â Â Â Â }

Â Â Â Â }

})



bot.on('raw', event => {

Â Â Â Â if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){

Â Â Â Â Â Â Â Â 

Â Â Â Â Â Â Â Â let channel = bot.channels.get(event.d.channel_id);

Â Â Â Â Â Â Â Â let message = channel.fetchMessage(event.d.message_id).then(msg=> {

Â Â Â Â Â Â Â Â let user = msg.guild.members.get(event.d.user_id);

Â Â Â Â Â Â Â Â 

Â Â Â Â Â Â Â Â if (msg.author.id == bot.user.id && msg.content != initialMessage){

Â Â Â Â Â Â Â 

Â Â Â Â Â Â Â Â Â Â Â Â var re = `\\*\\*"(.+)?(?="\\*\\*)`;

Â Â Â Â Â Â Â Â Â Â Â Â var role = msg.content.match(re)[1];

Â Â Â Â Â Â Â Â 

Â Â Â Â Â Â Â Â Â Â Â Â if (user.id != bot.user.id){

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â var roleObj = msg.guild.roles.find(r => r.name === role);

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â var memberObj = msg.guild.members.get(user.id);

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â 

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â if (event.t === "MESSAGE_REACTION_ADD"){

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â memberObj.addRole(roleObj)

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â } else {

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â memberObj.removeRole(roleObj);

Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â }

Â Â Â Â Â Â Â Â Â Â Â Â }

Â Â Â Â Â Â Â Â }

Â Â Â Â Â Â Â Â })

Â 

Â Â Â Â } 

});

bot.login(process.env.BOT_TOKEN);
