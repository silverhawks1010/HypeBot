const {CommandHandler} = require('advanced-command-handler');

CommandHandler.create({
    commandsDir: 'commands',
    eventsDir: 'events',
    // Optionnals :
    prefixes: ['::', 'EB:'],
    owners: ['240395814399246336']
});

CommandHandler.launch({
    token: "MTAyMDQ4MTMzODM1NDE4MDEzNg.GZJZfB.Ngd8Wa3MOvHmDO9gwePJNvHF2DCc1AD-f0EggI",
    // Optionnal :
    clientOptions: {
        // Client Options, see Discord.js#ClientOptions
    }
});