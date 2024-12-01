const logger = require('../utils/logger');

module.exports = (client) => {
    logger('Starting the bot...', 'info');
    client.login(process.env.BOT_TOKEN).catch((err) => {
        logger(err, 'error');
    });
};
