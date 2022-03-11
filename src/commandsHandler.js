const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

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

module.exports = async (msg) => {
  if (msg.channel.id === "891932662103687191") {
    let tokens = msg.content.split(" ");
    let index;
    switch (tokens[0]) {
      case "$hello":
        msg.channel.send("Hello!");
        break;
      case "$whatami":
        index = Math.floor(Math.random() * whatami.length);
        msg.channel.send(whatami[index]);
        break;
      case "$gif":
        let keywords = "dog";
        if (tokens.length > 1) {
          keywords = tokens.slice(1, tokens.length).join(" ");
        }
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&contentfilter=high`;
        let response = await fetch(url);
        let json = await response.json();
        index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
        msg.channel.send(`GIF from Tenor ${keywords}`);
        break;
      case "$help":
        msg.channel.send(`
$hello   - Say Hello
$whatami - Tells what you are
$gif     - Give a random GIF
$help    - Send this help message
`);
        break;
    }
  }
};
