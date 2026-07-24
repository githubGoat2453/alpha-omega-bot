import "dotenv/config";
import { commands } from "./commands/index.js";

const failures: string[] = [];
const topLevelNames = new Set<string>();
let subcommandCount = 0;

const interaction = (subcommand: string) => ({
  user: { id: process.env.OWNER_USER_ID ?? "1501897844624461904", username: "audit-owner", createdTimestamp: Date.now(), displayAvatarURL: () => "https://cdn.discordapp.com/embed/avatars/0.png" },
  guild: { name: "Alpha Omega Audit Guild", members: { cache: new Map() } },
  client: {
    uptime: 123_000,
    guilds: { cache: new Map([["audit", {}]]) },
    users: { cache: new Map([["owner", {}]]) },
    ws: { ping: 42, shards: new Map([["0", {}]]) },
    application: { commands: { cache: new Map() } },
  },
  options: {
    getSubcommand: () => subcommand,
    getString: (_name: string, required?: boolean) => required ? "audit-message" : null,
    getBoolean: (_name: string, required?: boolean) => required ? true : null,
    getUser: () => ({ id: "audit-user", username: "audit-user", createdTimestamp: Date.now(), displayAvatarURL: () => "https://cdn.discordapp.com/embed/avatars/0.png" }),
    getRole: () => ({ id: "audit-role", name: "Audit Role", color: 0x7c5cff, members: new Map() }),
    getChannel: () => ({ id: "audit-channel", name: "audit-channel" }),
  },
  reply: async (_payload: unknown) => undefined,
});

for (const command of commands) {
  const name = command.data.name;
  if (topLevelNames.has(name)) failures.push(`duplicate top-level command: ${name}`);
  topLevelNames.add(name);
  if (typeof command.execute !== "function") failures.push(`missing handler: ${name}`);

  const json = command.data.toJSON();
  const seen = new Set<string>();
  for (const option of json.options ?? []) {
    if (option.type !== 1) continue;
    subcommandCount += 1;
    if (seen.has(option.name)) failures.push(`duplicate subcommand: ${name} ${option.name}`);
    seen.add(option.name);
    try {
      await command.execute(interaction(option.name) as never);
    } catch (error) {
      failures.push(`handler threw: ${name} ${option.name} — ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

if (failures.length) {
  console.error(`Command audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Command audit passed: ${topLevelNames.size} top-level commands, ${subcommandCount} subcommands exercised.`);
