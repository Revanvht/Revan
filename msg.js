const Discord = require("discord.js");
const client = new Discord.Client()
const prefix = "/";



client.on("message", message => {
	msg = message.content.toLowerCase();
	if(message.author.users) return;
	mention = message.mentions.users.first();
	
	if(msg.startsWith (prefix + "send")) {
		
		if (mention == null) { return; }
		message.delete();
		mentionMessage = message.content.slice (8);
		mention.sendMessage (mentionMessage);
		message.channel.send("Sukses!");
		
	}
})

client.login("NTQ4NTQxMzk0NTgzNTUyMDAx.D11pOA.Ae0G5tKVDiXw6wSTp4wNT33pCcY");
