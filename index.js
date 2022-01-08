const Discord = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

const client = new Discord.Client();

let whatami = [
  "Potato Person 🥔",
  "Chocolate Lover 💩",
  "Funky Monkey 🐒",
  "Vain Brain 🧠",
  "Cosmic Cuttlefish 🦑",
  "Groovy Gorilla 🦍",
  "Perky Penguin 🐧",
  "Swift Snail 🐌",
  "Fancy Frog 🐸",
  "Sassy Snake 🐍",
  "Lazy Lion 🦁",
  "Auspicious Alien 👽",
  "Tame Tomato 🍅",
  "Smelly Socks 🧦",
  "Elegant Elephant 🐘",
  "Dumb Dolphin 🐬",
];

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", async (msg) => {
  if (msg.channel.id === "891932662103687191") {
    let tokens = msg.content.split(" ");
    if (tokens[0] === "$hello") {
      msg.channel.send("Hello!");
    } else if (tokens[0] === "$whatami") {
      const index = Math.floor(Math.random() * whatami.length);
      msg.channel.send(whatami[index]);
    } else if (tokens[0] === "$gif") {
      let keywords = "dog";
      if (tokens.length > 1) {
        keywords = tokens.slice(1, tokens.length).join(" ");
      }
      let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.BOT_TOKEN}&contentfilter=high`;
      let response = await fetch(url);
      let json = await response.json();
      let index = Math.floor(Math.random() * json.results.length);
      msg.channel.send(json.results[index].url);
      msg.channel.send(`GIF from Tenor ${keywords}`);
    }
  }
});
