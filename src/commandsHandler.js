const commands = require("./commands");

module.exports = async (msg) => {
  if (msg.channel.id === "891932662103687191") {
    let tokens = msg.content.split(" ");
    switch (tokens[0]) {
      case "$hello":
        commands.hello(msg);
        break;
      case "$whatami":
        commands.whatAmI(msg);
        break;
      case "$gif":
        commands.sendGIF(msg, tokens);
        break;
      case "$help":
        commands.help(msg);
        break;
    }
  }
};
