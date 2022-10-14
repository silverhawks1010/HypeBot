const {CommandHandler} = require('advanced-command-handler');

CommandHandler.create({
    commandsDir: 'commands',
    eventsDir: 'events',
    // Optionnals :
    prefixes: ['::', 'EB:'],
    owners: ['240395814399246336']
});

CommandHandler.launch({
    token: "",
    // Optionnal :
    clientOptions: {
        // Client Options, see Discord.js#ClientOptions
    }
});
