import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check Alpha Omega's response time."),
  async execute(interaction) {
    await interaction.reply(`Alpha Omega online • ${interaction.client.ws.ping}ms`);
  },
};
