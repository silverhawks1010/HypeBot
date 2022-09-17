const {Command, argError} = require('advanced-command-handler');

module.exports = new Command(
	{
		aliases: ['fd'],
		description: 'Make the bot say something.',
		usage: 'fd <text>',
		name: 'discord',
		userPermissions: ['MANAGE_MESSAGES'],
	},
	async (handler, message, args) => {
	const sayMessage = args.join(" ");
    message.delete();
    const devEmbed = {
        color: 0xff8040,
        author: {
            name: "➽ Discord Factions",
            icon_url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png'
        },

        fields: [{
            name: '➥ Discord Héro',
            value: `https://discord.gg/znFAy99ZHb`
        },
	{
            name: '➥ Discord Yuei',
            value: `https://discord.gg/AX4nDpaxuS`
        }]
    }
    return message.channel.send({embed: devEmbed });
	}
);
