const { Client, IntentsBitField } = require("discord.js");
const chalk = require("chalk");
const logger = require("./logger");
require("dotenv").config();


const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers],
});

logger("Starting bot...", "info");
client.login(process.env.BOT_TOKEN);

client.on("ready", (bot) => {
  logger(`Logged in as ${bot.user.tag}`, "success");
  logger(
    `Detected ${bot.guilds.cache.size} servers and ${bot.users.cache.size} users`,
    "info"
  );
});
