const {Command, argError} = require('advanced-command-handler');

module.exports = new Command(
	{
		aliases: ['speak'],
		description: 'Make the bot say something.',
		usage: 'say <text>',
		name: 'say',
		userPermissions: ['MANAGE_MESSAGES'],
	},
	async (handler, message, args) => {
		const sayMessage = args.join(" ");
    message.delete();
    message.channel.send(sayMessage + ' - Message envoyer par: <@' + message.author + '>')
	}
);
