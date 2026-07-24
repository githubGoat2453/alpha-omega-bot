import "dotenv/config";
import { REST, Routes } from "discord.js";
import { commands } from "./commands/index.js";

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;
if (!token || !clientId) throw new Error("DISCORD_TOKEN and DISCORD_CLIENT_ID are required.");

const rest = new REST({ version: "10" }).setToken(token);
const route = guildId ? Routes.applicationGuildCommands(clientId, guildId) : Routes.applicationCommands(clientId);
// Discord caps chat-input application commands at 100 per application scope.
// Keep the core/user-facing packs present, then fill the remaining slots in
// alphabetical order. The complete operation catalog remains available through
// prefix mirrors and the command-center website.
const priority = new Set([
  "help", "ping", "server", "serverctl", "utility", "admin", "moderation", "community",
  "level", "xp", "ai", "music", "economy", "security", "automod", "tickets", "roles",
  "welcome", "logging", "giveaways", "invites", "channels", "threads", "webhooks", "config",
]);
const registered = [
  ...commands.filter((command) => priority.has(command.data.name)),
  ...commands.filter((command) => !priority.has(command.data.name)),
].slice(0, 100);
await rest.put(route, { body: registered.map((command) => command.data.toJSON()) });
console.log(`Registered ${registered.length} Alpha Omega slash commands (${commands.length - registered.length} additional packs remain available through prefix and web catalog).`);
