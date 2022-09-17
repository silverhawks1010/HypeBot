const {Command, argError} = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');

module.exports = new Command(
	{
		description: "Envoie l'avatar d'un joueur",
		usage: 'avatar <user>',
		name: 'avatar',
  }, async(client, message, args) => {
      let user = message.mentions.users.first() || message.guild.member(args[0]);
      if ( !user )  user = message.author

      let avatarURL = user.avatarURL({format: 'png', size: 4096, dynamic: true});
      let embed = {
          color: 0xff8040,
          description: `👤 **${message.author.username}**,  Voici l'avatar de ${user.tag} `,
          image: {
              url: avatarURL
          }
      }
     await message.channel.send({embed:embed});

  });
