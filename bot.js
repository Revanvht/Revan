const Discord = require("discord.js") 
const settings = require("./your_settings.json")
const bot = new Discord.Client()
const prefix = "/";
const client = new Discord.Client()
const antispam = require("./antispam.js");

const clear = require("./clear.js");
const embed = require("./embed.js");
const msg = require("./msg.js");
const role = require("./role.js");
const panglima = require("./panglima.js");
const avatar = require("./avatar.js");
const vote = require("./vote.js");

const index = require("./index.js");








bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rainbowcommand) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, settings.rainbowdelay); 
            message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))

    }
    if(command === settings.prefix + settings.rainbowstop) {
            setTimeout(function () {
           process.exit()
            }, 1000);
           
                       message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
                       }
});





bot.on('ready', async => {
console.log("Bot Melucur!" + "\n" + bot.user.tag + "\n" + "Server Count: "  + bot.guilds.size + "\n" + "Cached users: " + bot.users.size + "\n" + "Bot Berhasil Tapi tetap Periksa Aplikasi Termux jika bot mati dan hidupkan ulang!")

bot.user.setActivity("Ansel Server", {type: "LISTENING"});

let activNum = 0;
setInterval(function() {
	if (activNum === 0) {
		bot.user.setActivity("/help | Bantuan", {type: "LISTENING"});
		activNum = 1;
	 }else if(activNum === 1) {
		bot.user.setActivity("Youtube : Ansel TSM",{type: "STREAMING"});
		activNum = 0;
		
		}
}, 5000);



});



bot.on('message', message => {
	
	if (message.content === "/avatar") {
		message.reply(message.author.avatarURL);
	}});




bot.on('message', message => {
	if (message.content === 'wkwkwk') {
	message.reply('Wikwikwik');
	}
});


bot.login(process.env.BOT_TOKEN);
