const { Command } = require('advanced-command-handler');
const Gamedig = require('gamedig')
module.exports = new Command({
    name: 'status',
    description: "Voir les information du serveur",
    // Optionnals :
    usage: 'status',
    category: 'utils',
    nsfw: false,
    guildOnly: true,
    ownerOnly: false,
    userPermissions: [],
    clientPermissions: [],
}, async(handler, message, args) => {
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
        return message.channel.send({embed: statusEmbed });
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
        return message.channel.send({embed: statusEmbed });
    });
});
