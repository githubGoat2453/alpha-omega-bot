import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export type ActionDefinition = {
  name: string;
  description: string;
  response: string;
};

export function createActionPack(
  name: string,
  description: string,
  actions: ActionDefinition[],
): Command {
  const data = new SlashCommandBuilder().setName(name).setDescription(description);
  for (const action of actions) {
    data.addSubcommand((subcommand) =>
      subcommand.setName(action.name).setDescription(action.description),
    );
  }
  return {
    data,
    async execute(interaction) {
      const action = actions.find((item) => item.name === interaction.options.getSubcommand());
      await interaction.reply(action?.response ?? "That Alpha Omega action is unavailable.");
    },
  };
}
