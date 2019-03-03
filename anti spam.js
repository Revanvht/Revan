const Discord = require("discord.js");
const client = new Discord.Client()
const antispam = require("discord-anti-spam");



client.on('ready', () => {


	antispam(client, {

		warnBuffer: 3,

		maxBuffer: 5,

		interval: 1000,

		warningMessage: "Jangan Spam Oiii,,Sanksi Banned PERMANENT @here",

		maxDuplicatesWarning: 4,

		maxDuplicatesBan: 5,

		deleteMessageAfterBanForPastDay: 7,

		exemptRoles: [],

		exemptUser: [],

});


});



client.on('message', msg => {


  client.emit('checkMessage', msg);

})
client.login("NTQ4NTQxMzk0NTgzNTUyMDAx.D11pOA.Ae0G5tKVDiXw6wSTp4wNT33pCcY");
