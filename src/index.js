const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const logger = require("./utils/logger");

logger("[Discord Bot Starter by github.com/rico-vz]");

// Create a new client instance with the intents
// Make sure to enable the GuildMembers intent from the Discord Developer Portal
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

// Loads all handlers in ./handlers
require("./handlers")(client);
