import type { PrefixCommand } from "./types.js";
import { prefixCommands } from "./commands.js";

export const prefixRegistry = new Map<string, PrefixCommand>();

for (const command of prefixCommands) {
  prefixRegistry.set(command.name, command);
  for (const alias of command.aliases ?? []) prefixRegistry.set(alias, command);
}
