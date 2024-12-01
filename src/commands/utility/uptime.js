const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown : 5,
    data     : new SlashCommandBuilder()
        .setName('uptime')
        .setDescription("Provides information about the bot's uptime."),
    async execute(interaction) {
        const uptime = interaction.client.uptime;
        const days = Math.floor(uptime / 86400000);
        const hours = Math.floor(uptime / 3600000) % 24;
        const minutes = Math.floor(uptime / 60000) % 60;
        const seconds = Math.floor(uptime / 1000) % 60;

        await interaction.reply({
            content : `Uptime: ${days}d, ${hours}h, ${minutes}m, ${seconds}s`
        });
    }
};
