# Discord Bot Starter

**✅ A Basic Discord Bot Starter template\
🐳 Docker ready\
🧑‍🚀 Discord.js v14**

This is a simple discord bot starter template that you can use to create your own discord bot.\
This template is written in JavaScript and uses Discord.js v14.\
It includes a simple command handler and event handler to get you started.\
Dockerfile is included to run the bot in a container.

Main goal of this template is to provide a simple and clean starting point for your discord bot projects without any unnecessary complexity, so that it's not overwhelming. You can build on top of this template and add more features as you go.

**⭐ If you find this template helpful, please consider giving it a star!**

## Features

- **Command handler**\
   Commands are stored in the `commands` folder and are loaded dynamically.\
   Each command is a separate file.
- **Event handler**\
   Events are stored in the `events` folder and are loaded dynamically.\
   Each event is a separate file.
- **Pretty logging**\
   Logs are color coded and formatted for easy reading. You can customize the log format in the `logger.js` file.
- **Command cooldowns**\
   You can set cooldowns for each command by setting the `cooldown` property in the command file.
- **Folder structure**\
   The project is organized in a clean and simple folder structure.
- **Docker ready**\
   Dockerfile is included to run the bot in a container.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Rename the `.env.example` file to `.env` and add your bot token and application id
4. Rename the `config.example.json` file to `config.json` and add your development Guild ID
5. Run `npm dev` to start the bot in development mode using nodemon (restarts the bot on file changes)
6. Run `npm deploy-command-dev` to deploy the commands to your development guild

## Running in production

To run the bot in production, you have 2 options:

1. Run `npm start` to start the bot in production mode, which uses pm2 to keep the bot running & restart it on crashes
2. Build the docker image using the provided Dockerfile and run the container

### PM2 Method

1. Install pm2 globally using `npm install -g pm2`
2. Run `npm start` to start the bot in production mode

If you want to stop the bot, run `npm stop`

### Docker Method

1. Build the docker image using `docker-compose build`
2. Run the container using `docker-compose run`

### Deploying commands to all servers

To deploy the commands to all servers, run `npm deploy-commands-global` after you have added the bot to your server.

## Contributing

If you have any suggestions or improvements, feel free to open an issue or a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord.js Documentation](https://discord.js.org/docs)
- [Discord.js Guide](https://discordjs.guide/)
