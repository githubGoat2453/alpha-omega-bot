import "dotenv/config";
import { Client, Collection, GatewayIntentBits, Events } from "discord.js";
import pino from "pino";
import { commands } from "./commands/index.js";
import { prefixRegistry } from "./prefix/registry.js";

const log = pino({ level: process.env.LOG_LEVEL ?? "info" });
const token = process.env.DISCORD_TOKEN;
const prefix = process.env.BOT_PREFIX ?? "!";
const ownerId = process.env.OWNER_USER_ID;
if (!token) throw new Error("DISCORD_TOKEN is required. Add it as a Railway variable.");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const commandMap = new Collection<string, (typeof commands)[number]["execute"]>();
for (const command of commands) commandMap.set(command.data.name, command.execute);

client.once(Events.ClientReady, (ready) => {
  log.info({ user: ready.user.tag, commands: commandMap.size }, "Alpha Omega is online");
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const execute = commandMap.get(interaction.commandName);
  if (!execute) return;
  try {
    await execute(interaction);
  } catch (error) {
    log.error({ error, command: interaction.commandName }, "Command failed");
    const content = "Alpha Omega hit an internal error while running that command.";
    if (interaction.replied || interaction.deferred) await interaction.followUp({ content, ephemeral: true });
    else await interaction.reply({ content, ephemeral: true });
  }
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  const [rawName, ...args] = message.content.slice(prefix.length).trim().split(/\s+/);
  if (!rawName) return;
  const command = prefixRegistry.get(rawName.toLowerCase());
  if (!command) return;
  if (command.ownerOnly && message.author.id !== ownerId) {
    await message.reply("⛔ This Alpha Omega command is restricted to the bot owner.");
    return;
  }
  try {
    await command.execute({ message, args, prefix });
  } catch (error) {
    log.error({ error, command: command.name }, "Prefix command failed");
    await message.reply("Alpha Omega hit an internal error while running that command.");
  }
});

client.login(token);
