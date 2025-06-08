import chalk from "chalk";
import fca from "fca-unofficial";
import fs from "fs-extra";
import axios from "axios";

// Sample log to test chalk
console.log(chalk.green("Bot is starting..."));

// Your existing fca-unofficial login code here
// Example placeholder (replace with your logic):
const appStatePath = "./appstate1.json";

const appState = await fs.readJSON(appStatePath);

fca({ appState }, (err, api) => {
  if (err) return console.error(chalk.red("Login failed:"), err);

  console.log(chalk.green("Logged in successfully!"));

  // Bot logic here, for example:
  api.listenMqtt((err, message) => {
    if (err) return console.error(err);
    console.log(chalk.blue("New message:"), message);
    // Your message handling logic...
  });
});
