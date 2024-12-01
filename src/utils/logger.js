const chalk = require('chalk');

/**
 * Log messages to console
 *
 * @param {string} message
 * @param {string} [type="log"] - log type `(log, success, warn, error, info)`
 * @returns {void}
 */
const logger = (message, type = 'log') => {
    const log = {
        log     : chalk.hex('#b8d2ff'),
        success : chalk.green,
        warn    : chalk.yellow,
        error   : chalk.red,
        info    : chalk.blue
    };

    if (!message) return console.log(log.error('[❌] No message provided.'));
    if (!type) return console.log(log.error('[❌] No log type provided.'));

    if (!log[type]) return console.log(log.error('[❌] Invalid log type provided.'));

    console.log(
        log[type](
            `${
                type === 'info'
                    ? '[🔎]'
                    : type === 'warn'
                      ? '[⚠️]'
                      : type === 'error'
                        ? '[❌]'
                        : type === 'success'
                          ? '[✅]'
                          : ''
            } ${message}`
        )
    );
};

module.exports = logger;
