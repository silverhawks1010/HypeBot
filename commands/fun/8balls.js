const {Command, argError} = require('advanced-command-handler');

module.exports = new Command(
	{
		aliases: ['8b'],
		description: 'Poser une question au bot.',
		usage: '8ball <text>',
		name: '8ball',
	},
	async (handler, message, args) => {
        if(!args[2]) return message.reply("Please ask a full question !");
        let replies = ["Oui", "Non", "Je ne sais pas", "Je repondrais plus tard", "Surement", "Surement pas", "Peut être", "Peut être pas"]

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");

        const ballembed = {
            color: 0xff8040,
            author: {
                name: message.member.user.username,
                icon_url: message.member.user.displayAvatarURL
            },
            fields: [{
                name: 'Question',
                value: `${question}`
            },
            {
                name: 'Réponse',
                value: `${replies[result]}`
            }]
        }
        return message.channel.send({embed: ballembed });
	}
);
