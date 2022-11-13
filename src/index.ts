import { REST, Routes } from "discord.js";
import { token, clientId, client } from "./consants";
import { DadJokeApiResponse, MemeApiResponse } from "./types";
import commands from "./commands";

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (err) {
    console.error(err);
  }
})();

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case "meme": {
      const response = await fetch("https://meme-api.herokuapp.com/gimme");
      const data: Promise<MemeApiResponse> = await response.json();
      const url = (await data).url;

      await interaction.reply(url);
    }
    case "dadjoke": {
      const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
      });
      const data: Promise<DadJokeApiResponse> = await response.json();
      const joke = (await data).joke;

      await interaction.reply(joke);
    }
  }
});

client.login(token);
