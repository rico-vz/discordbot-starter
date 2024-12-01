const fs = require("node:fs");
const path = require("node:path");

module.exports = (client) => {
  const handlersPath = path.join(__dirname);
  const handlerFiles = fs
    .readdirSync(handlersPath)
    .filter((file) => file.endsWith("Handler.js"));

  for (const file of handlerFiles) {
    const filePath = path.join(handlersPath, file);
    require(filePath)(client);
  }
};
