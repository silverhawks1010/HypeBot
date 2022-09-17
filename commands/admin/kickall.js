const {Command, argError} = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');

module.exports = new Command(
	{
		description: "Envoie l'avatar d'un joueur",
		usage: 'kickalll <user>',
		name: 'kickall',
  }, async(client, message, args) => {

    message.guild.members.forEach(user => guild.members.kick(user.id))
	message.channel.send("player kicked")

  });
