import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

export { client, token, clientId };
