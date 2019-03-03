const Discord = require("discord.js");
const bot = new Discord.Client()
const prefix = "/";



bot.on('message', message => {




    let messageArray = message.content.split(' ');


    let args = messageArray.slice(1);


    let argument = args.join(' ');


    let gras = '~';






    //on vas detecté si le contenue du message commence par prefix + clear (prefix = !)


    if(message.content.startsWith(`${prefix}`)){




        //on regarde si il a la permission


        if(message.member.hasPermission('MANAGE_MESSAGES')){




            // en gros on va prendre l'aurgument (exemple: !clear 10 10 est l'argument) mais notre argument il est '10' et nous on veux 10


            var nombre = parseFloat(


                argument


            )


            //on va regardé si notre nombre est plus grand que 0 et plus petit que 101


            if((nombre > 0) && (nombre < 101)){


                //on va ajoutez 1 a notre argument qu'ont va appeller nombre




                message.delete()// on va supprimé le message dans notre cas !clear argument


                message.channel.bulkDelete(nombre)// et on va supprimé le nombre de message selectionné par l'utilisateur




                /


                setTimeout(() => {

	let bicon = bot.user.displayAvatarURL;


                    let embed = new Discord.RichEmbed()

                        .setColor('#00ff00')

                        .setTitle(`${nombre} pesan Berhasil Di hapus boossquh ${gras}${message.author.username}${gras}`)

  .addField('Informasi bot')

  .addField('Nama Bot', bot.user.username)

  .setThumbnail(bicon)

  .addField('Di Buat Pada', bot.user.createdAt)
  .setFooter("YT: Ansel TSM - BOT DISCORD RESMI ANSEL ©2019")


                    message.channel.send(embed)




                }, 200); // 1000 = 1sec donc 500 égale a 0.5 sec




            }else{


                let embed = new Discord.RichEmbed()


                    .setColor('#ff0000')

  .setAuthor('INVITE BOT')

  .setTitle('KLIK DISINI')
  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=548541394583552001&permissions=8&scope=bot")

  .setDescription('Silahkan Klik link nya,dan gunakan dengan Bijak')
  



                message.channel.send(embed)




            }




        }else{


            let embed = new Discord.RichEmbed()


                .setColor('#ff0000')


                .setTitle(`Saya butuh izin Manage Message Gan untuk di gunakan`)


           message.channel.send(embed)


       }


   }


});


bot.login("NTQ4NTQxMzk0NTgzNTUyMDAx.D11pOA.Ae0G5tKVDiXw6wSTp4wNT33pCcY");
