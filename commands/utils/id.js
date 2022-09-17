const { Command } = require('advanced-command-handler');
module.exports = new Command({
    name: 'id',
    description: "Voir l'identifiant du discord et de l'utilisateur",
    // Optionnals :
    usage: 'id',
    category: 'utils',
    nsfw: false,
    guildOnly: true,
    ownerOnly: false,
    userPermissions: [],
    clientPermissions: [],
}, async(handler, message, args) => {
        message.reply(`\n your user ID is: ${message.author.id} \n ans the server ID is: ${message.guild.id}`)
});
