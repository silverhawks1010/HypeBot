const {Command, argError} = require('advanced-command-handler');

module.exports = new Command(
	{
		aliases: ['dl'],
		description: 'Make the bot say something.',
		usage: 'dl <text>',
		name: 'devlog',
		userPermissions: ['MANAGE_MESSAGES'],
	},
	async (handler, message, args) => {
	const sayMessage = args.join(" ");
    message.delete();
    const devEmbed = {
        color: 0xff8040,
        author: {
            name: "Devlog MHA",
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1024px-Circle-icons-dev.svg.png'
        },

        fields: [{
            name: '➽ Modification Serveur',
            value: `${sayMessage}`
        }],
        timestamp: new Date(),
        footer: {
            text: `Developpeur: ${message.member.user.username}`,
            icon_url: 'https://cdn.discordapp.com/attachments/786715021962379302/787400190486904832/logomha.png',
        },
    }
    return message.channel.send({embed: devEmbed });
	}
);
