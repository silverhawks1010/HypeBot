const {Command, argError} = require('advanced-command-handler');

module.exports = new Command(
	{
		aliases: ['boost'],
		description: 'Make the bot say something.',
		usage: 'boost <text>',
		name: 'boost',
		userPermissions: ['MANAGE_MESSAGES'],
	},
	async (handler, message, args) => {
	const sayMessage = args.join(" ");
    message.delete();
    const devEmbed = {
        color: 0x7289da,
        author: {
            name: "➽ Boosters",
            icon_url: 'https://emoji.gg/assets/emoji/7485_server_boost.png'
        },

        fields: [{
            name: '➥ Boost informations',
            value: `Notre discord accepte les bras ouverts les personnes qui boost notre discord pour cause, vous aidez à l'embellissement de notre serveur discord et ça nous fait plaisir. Pour cela notre serveur a décidé de vous offrir des avantages qui sont écrits ci-dessous vous pourrez demander vos récompenses en envoyant un mp au fondateur ou autre super-admin ingame..`
        },
	{
            name: '➥ Avantage',
            value: `● 250 000 Yens \n ● Grade Booster \n ● Accés au salon VIP \n ● 1 Reroll`
        },
	{
            name: '➥ Autres',
            value: `Les boosts sont cumulables du coup si vous booster 2 fois vous aurez deux fois les récompenses`
        }]
    }
    return message.channel.send({embed: devEmbed });
	}
);
