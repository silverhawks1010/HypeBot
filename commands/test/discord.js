const {Command, argError} = require('advanced-command-handler');

module.exports = new Command(
	{
		aliases: ['yuei'],
		description: 'Make the bot say something.',
		usage: 'yuei <text>',
		name: 'yuei',
		userPermissions: ['MANAGE_MESSAGES'],
	},
	async (handler, message, args) => {
	const sayMessage = args.join(" ");
    message.delete();
    const devEmbed = {
        color: 0xff8040,
        author: {
            name: "➽ Yuei",
            icon_url: 'https://i.imgur.com/7RpBJyb.png'
        },

        fields: [{
            name: '➥ Filliére',
            value: `Héroïque ➽ \n Assistante ➽ `
        },
	{
            name: '➥ Discord Yuei',
            value: `https://discord.gg/AX4nDpaxuS`
        }]
    }
    return message.channel.send({embed: devEmbed });
	}
);
