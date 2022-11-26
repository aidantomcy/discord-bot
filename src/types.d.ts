interface SlashCommands {
  name: string;
  description: string;
}

type SlashCommandsList = "meme" | "dadjoke";

interface MemeApiResponse {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
  preview: string[];
}

interface DadJokeApiResponse {
  id: string;
  joke: string;
  status: 200;
}

export {
  SlashCommands,
  MemeApiResponse,
  DadJokeApiResponse,
  SlashCommandsList,
};
