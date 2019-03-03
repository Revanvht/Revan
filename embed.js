const Discord = require('discord.js');


const Client = new Discord.Client();

const OwnerID = "402367348364935169";


const prefix = "/";




Client.on("message", async (message) => {

	if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;


	let command = message.content.split(" ")[0];

	command = command.slice(prefix.length);


	let args = message.content.split(" ").slice(1);


	if (command === "ping") {

		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);

	} else


	if (command === "say") {

		message.delete()

        const embed = new Discord.RichEmbed()

		.setColor(0x954D23)

		.setDescription(message.author.username + " says: " + args.join(" "));

		message.channel.send({embed})

	} else


	if (command == "help") {

		const embed = new Discord.RichEmbed()

		.setColor("RANDOM")

		.setTitle("Command List:")

		.addField("/help", "Perintah Bot")

		.addField("/rainbow", "Untuk memulai Rainbow Role \nContoh: /rainbow @role")

		.addField("/clear", "Untuk menghapus pesan \nContoh: /clear 100")

		.addField("/avatar", "Menampilkan Avatar \nContoh /avatar , masih testing belum bisa tag ")

		.addField("/kick", "Kick member \nContoh: /kick @user")
		.addField("/ban", "Ban member, \nContoh: /ban @user")
		.addField("/hapus", " fitur ini sama dengan /clear namun sedikit berbeda")

		message.channel.send({embed})

	}


});

Client.login("NTQ4NTQxMzk0NTgzNTUyMDAx.D11pOA.Ae0G5tKVDiXw6wSTp4wNT33pCcY");
