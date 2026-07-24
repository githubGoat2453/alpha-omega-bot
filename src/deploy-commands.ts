import "dotenv/config";
import { REST, Routes } from "discord.js";
import { commands } from "./commands/index.js";

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;
if (!token || !clientId) throw new Error("DISCORD_TOKEN and DISCORD_CLIENT_ID are required.");

const rest = new REST({ version: "10" }).setToken(token);
const route = guildId ? Routes.applicationGuildCommands(clientId, guildId) : Routes.applicationCommands(clientId);
await rest.put(route, { body: commands.map((command) => command.data.toJSON()) });
console.log(`Registered ${commands.length} Alpha Omega commands.`);
