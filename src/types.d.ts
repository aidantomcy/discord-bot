type SlashCommands = {
  name: string;
  description: string;
};

type SlashCommandsList = "meme" | "dadjoke";

type MemeApiResponse = {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
  preview: string[];
};

type DadJokeApiResponse = {
  id: string;
  joke: string;
  status: 200;
};

export {
  SlashCommands,
  MemeApiResponse,
  DadJokeApiResponse,
  SlashCommandsList,
};
