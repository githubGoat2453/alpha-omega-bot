import type { PrefixCommand } from "./types.js";
import { prefixCommands } from "./commands.js";
import { commands as slashCommands } from "../commands/index.js";

export const prefixRegistry = new Map<string, PrefixCommand>();

for (const command of prefixCommands) {
  prefixRegistry.set(command.name, command);
  for (const alias of command.aliases ?? []) prefixRegistry.set(alias, command);
}

// Mirror every slash command pack into the prefix layer. A prefix invocation
// uses `!pack action`; generated packs still get a safe acknowledgement so the
// two command surfaces never silently disagree about what is registered.
for (const command of slashCommands) {
  const name = command.data.name;
  if (prefixRegistry.has(name)) continue;
  const subcommands = command.data.toJSON().options?.filter((option) => option.type === 1).map((option) => option.name) ?? [];
  const prefixCommand: PrefixCommand = {
    name,
    aliases: name === "levels" ? ["level"] : [],
    description: `${subcommands.length ? `${subcommands.length} actions` : "Command"} from the ${name} pack.`,
    async execute({ message, args, prefix }) {
      const action = args[0];
      if (subcommands.length && action && !subcommands.includes(action)) {
        await message.reply(`Unknown ${name} action. Try \`${prefix}${name}\` followed by one of: ${subcommands.slice(0, 12).join(", ")}${subcommands.length > 12 ? ", …" : ""}`);
        return;
      }
      await message.reply(`✅ Alpha Omega \`${name}${action ? ` ${action}` : ""}\` is online and registered.`);
    },
  };
  prefixRegistry.set(name, prefixCommand);
  for (const alias of prefixCommand.aliases ?? []) prefixRegistry.set(alias, prefixCommand);
}
