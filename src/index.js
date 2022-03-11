const Discord = require("discord.js");
const keepAlive = require("./server");
const commandHandler = require("./commandsHandler");
require("dotenv").config();

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", commandHandler);

keepAlive();
client.login(process.env.BOT_TOKEN);
