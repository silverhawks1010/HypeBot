const {Logger} = require('advanced-command-handler');
const {DateTime} = require('luxon');
const Gamedig = require('gamedig')

module.exports = async handler => {
	/**
	 * Log information of the bot in the console.
	 * @returns {void}
	 */
	function log() {
		Logger.event(`Date : ${Logger.setColor('yellow', DateTime.local().toFormat('TT'))}`);
		Logger.event(`RAM used  : ${Logger.setColor('magenta', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2))} ` + Logger.setColor('magenta', 'MB'));
	}

	Logger.event(
		Logger.setColor(
			'#c0433f',
			`Client online ! Client ${Logger.setColor('orange', handler.client.user.username, '#c0433f')} has ${handler.client.guilds.cache.size + Logger.setColor('#c0433f')} guilds, it sees ${
				handler.client.users.cache.size + Logger.setColor('#c0433f')
			} users.`
		)
	);

	log();
	setInterval(() => {
		log();
	}, 20 * 60 * 1000);

	function serverstatus() {
		Gamedig.query({
			type: 'garrysmod',
			host: '51.210.222.139',
			port: '27034'
		}).then((state) => {
			const statusEmbed = {
				color: 0x008004,
				title: state.name,
				fields: [
					{
						name: 'Statut',
						value: ':green_circle: Ouvert',
						inline: true,
					},
					{
						name: 'IP:Port',
						value: state.connect,
						inline: true,
					},
					{
						name: 'Map',
						value: state.map,
						inline: true,
					}, 
					{
						name: 'Joueur',
						value: `${state.raw.numplayers} / ${state.maxplayers}`,
						inline: true,
					}, 
					{
						name: 'Jeu',
						value: state.raw.folder,
						inline: true,
					}, 
					{
						name: 'Connect URL',
						value: `steam://connect/${state.connect}`,
						inline: true,
					} 

				],
				timestamp: new Date(),
				footer: {
					text: "King's Community | Statut de serveur",
					icon_url: 'https://i.imgur.com/yERFnFo.png',
				},
			}
			return handler.client.channels.cache.get("801130087306625025").send({embed: statusEmbed });
		}).catch((error) => {
			const statusEmbed = {
				color: 0x9D0000,
				title: "My Hero Academia RP",
				fields: [
					{
						name: 'Statut',
						value: ':red_circle: Fermer',
						inline: true,
					},
					{
						name: 'IP:Port',
						value: `Inconnue`,
						inline: true,
					},
					{
						name: 'Map',
						value: `Inconnue`,
						inline: true,
					}, 
					{
						name: 'Joueur',
						value: `Inconnue`,
						inline: true,
					}, 
					{
						name: 'Jeu',
						value: `Inconnue`,
						inline: true,
					}, 
					{
						name: 'Connect URL',
						value: `Inconnue`,
						inline: true,
					} 

				],
				timestamp: new Date(),
				footer: {
					text: "King's Community | Statut de serveur",
					icon_url: 'https://i.imgur.com/yERFnFo.png',
				},
			}
			return handler.client.channels.cache.get("801130087306625025").send({embed: statusEmbed });
		});
	}
	serverstatus();
	setInterval(() => {
		serverstatus();
	}, 600000);

};
