const login = require("fca-unofficial");
const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

const appState = require("./appstate.json");
const commandsPath = path.join(__dirname, "commands");
const commands = {};

// Load all commands
fs.readdirSync(commandsPath).forEach(file => {
  if (file.endsWith(".js")) {
    const command = require(path.join(commandsPath, file));
    commands[command.config.name] = command.run;
  }
});

login({ appState }, (err, api) => {
  if (err) return console.error("Login error:", err);
  console.log(chalk.green("🤖 Bot is now running..."));

  api.listenMqtt((err, event) => {
    if (err || event.type !== "message") return;

    const body = event.body || "";
    const prefix = "!";
    if (!body.startsWith(prefix)) return;

    const [cmdName, ...args] = body.slice(prefix.length).trim().split(/\s+/);
    const command = commands[cmdName.toLowerCase()];
    if (command) command({ api, event, args });
  });
});