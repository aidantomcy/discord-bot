interface SlashCommands {
  name: string;
  description: string;
}

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

export { SlashCommands, MemeApiResponse };
