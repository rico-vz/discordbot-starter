require("dotenv").config();
const { REST, Routes } = require("discord.js");
const logger = require("./logger");

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    logger("Started refreshing application (/) commands.", "info");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: 'TODO' }
    );

    logger("Successfully reloaded application (/) commands.", "success");
  } catch (error) {
    logger(error, "error");
  }
})();
