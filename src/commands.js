const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const hello = (msg) => {
  msg.channel.send("Hello!");
};

const whatAmI = (msg) => {
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
  let index = Math.floor(Math.random() * whatami.length);
  msg.channel.send(whatami[index]);
};

const sendGIF = async (msg, tokens) => {
  let keywords = "dog";

  if (tokens.length > 1) {
    keywords = tokens.slice(1, tokens.length).join(" ");
  }
  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&contentfilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  let index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].url);
  msg.channel.send(`GIF from Tenor ${keywords}`);
};

const help = (msg) => {
  msg.channel.send(`
$hello   - Say Hello
$whatami - Tells what you are
$gif     - Give a random GIF
$help    - Send this help message
`);
};

module.exports = {
  hello,
  whatAmI,
  sendGIF,
  help,
};
