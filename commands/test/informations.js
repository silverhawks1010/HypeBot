const {Command, argError} = require('advanced-command-handler');

module.exports = new Command(
	{
		aliases: ['inf'],
		description: 'Make the bot say something.',
		usage: 'dl <text>',
		name: 'info',
		userPermissions: ['MANAGE_MESSAGES'],
	},
	async (handler, message, args) => {
	const sayMessage = args.join(" ");
    message.delete();
    const devEmbed = {
        color: 0xff8040,
        author: {
            name: "➽ Informations Serveur",
            icon_url: 'https://cdn.discordapp.com/attachments/786715021962379302/787400190486904832/logomha.png'
        },

        fields: [{
            name: '➥ Nom',
            value: `[FR] My Hero Academia | K'S Community`
        },
	{
            name: '➥ Gamemode',
            value: `MangaRP`
        },
	{
            name: '➥ Collection',
            value: `https://steamcommunity.com/sharedfiles/filedetails/?id=2233985963`
        },
	{
            name: '➥ IP',
            value: `149.202.223.29:27028`
        },
	{
            name: '➥ URL de connection',
            value: `steam://connect/149.202.223.29:27028`
        }]
    }
    return message.channel.send({embed: devEmbed });
	}
);
