const { REST, Routes } = require('discord.js');
const { developmentGuildId } = require('../../config.json');
const fs = require('node:fs');
const path = require('node:path');
const logger = require('./logger');
require('dotenv').config();

const commands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join(__dirname, '../commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // Grab all the command files from the commands directory you created earlier
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            logger(`The command at ${filePath} is missing a required 'data' or 'execute' property.`, 'warn');
        }
    }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.BOT_TOKEN);

// Determine if the commands should be deployed globally or to a specific guild
const isGlobal = process.argv[2] === 'global';
const route = isGlobal
    ? Routes.applicationCommands(process.env.BOT_APPLICATION_ID)
    : Routes.applicationGuildCommands(process.env.BOT_APPLICATION_ID, developmentGuildId);

// and deploy your commands!
(async () => {
    try {
        logger(`Started refreshing ${commands.length} application (/) commands.`, 'info');

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(route, { body: commands });

        logger(`Successfully reloaded ${data.length} (/) commands.`, 'success');
    } catch (error) {
        logger(error, 'error');
    }
})();
