const { Command } = require('advanced-command-handler');
const moment = require ('moment')
module.exports = new Command({
    name: 'serverinfo',
    description: 'Voir les informations relative au serveur',
    // Optionnals :
    usage: 'bserverinfo',
    category: 'info',
    nsfw: false,
    guildOnly: true,
    ownerOnly: false,
    aliases: ["si"],
    userPermissions: [],
    clientPermissions: [],
}, async(handler, message, args) => {

  const serverEmbed = {
      color: 0x0099ff,
      thumbnail: {
          url: message.guild.iconURL
      },
      author: {
          name: message.guild.name,
          icon_url: message.guild.iconURL
      },
      fields: [{
          name: 'Discord Owner',
          value: `${message.guild.owner.user.tag}`,
          inline: true
      },
      {
          name: 'Server ID',
          value: `${message.guild.id}`,
          inline: true
      },
      {
          name: '󠀀󠀀 ',
          value: '󠀀󠀀 ',
          inline: false
      },
      {
          name: '󠀀󠀀Members',
          value: `${message.guild.memberCount}`,
          inline: true
      },
      {
          name: '󠀀󠀀Human',
          value: `${message.guild.members.cache.filter(member => member.user.bot === false).size}`,
          inline: true
      },
      {
          name: 'Bots',
          value: `${message.guild.members.cache.filter(mem => mem.user.bot === true).size}`,
          inline: true
      },
      {
          name: 'Roles',
          value: `${message.guild.roles.size - 1}`,
          inline: true
      },
      {
          name: 'Channels',
          value: `${message.guild.channels.size}`,
          inline: true
      },
      {
          name: 'Emojis',
          value: `${message.guild.emojis.size}`,
          inline: true
      },
      {
          name: '󠀀󠀀 ',
          value: '󠀀󠀀 ',
          inline: false
      },
      {
          name: 'Region',
          value: `${message.guild.region}`,
          inline: true
      },
      {
          name: 'Create At',
          value: `${moment.utc(message.guild.createdAt).format("DD/MM/YY HH:mm")}`,
          inline: true
      },
      {
          name: '󠀀󠀀 ',
          value: '󠀀󠀀 ',
          inline: false
      },
      {
          name: 'Roles List',
          value: `Soon`,
          inline: false
      },
      {
          name: 'Emojis List ',
          value: `Soon`,
          inline: true
      }]
  }
      return message.channel.send({embed: serverEmbed });

});
