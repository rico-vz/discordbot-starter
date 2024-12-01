const { Events, ActivityType } = require('discord.js');
const logger = require('../utils/logger');

module.exports = {
    name : Events.ClientReady,
    once : true,
    async execute(client) {
        logger(`Authenticated as ${client.user.tag}`, 'success');
        logger(`Detected ${client.guilds.cache.size} servers and ${client.users.cache.size} users.`, 'info');

        client.user.setActivity({
            name : 'your commands',
            type : ActivityType.Watching
        });
    }
};
