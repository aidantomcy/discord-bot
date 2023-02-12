import { CacheType, Interaction, REST, Routes } from "discord.js";
import { token, clientId, client } from "./constants";
import {
  DadJokeApiResponse,
  MemeApiResponse,
  SlashCommandsList,
} from "./types";
import commands from "./commands";
import fetchData from "./fetchData";

const rest = new REST({ version: "10" }).setToken(token ?? "");

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientId ?? ""), {
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

client.on("interactionCreate", async (interaction: Interaction<CacheType>) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  switch (interaction.commandName as SlashCommandsList) {
    case "meme": {
      const data = await fetchData<MemeApiResponse>(
        "https://meme-api.com/gimme",
        {}
      );
      const url = data.url;

      await interaction.reply(url);
    }
    case "dadjoke": {
      const data = await fetchData<DadJokeApiResponse>(
        "https://icanhazdadjoke.com",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const joke = data.joke;

      await interaction.reply(joke);
    }
  }
});

client.login(token);
