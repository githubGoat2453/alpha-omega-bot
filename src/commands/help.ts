import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export const help: Command = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Explore Alpha Omega command systems."),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x7c5cff)
      .setTitle("Alpha Omega command systems")
      .setDescription("Your modular command center is online. More systems can be enabled as command packs are added.")
      .addFields(
        { name: "Security", value: "`/ping`  `/server`", inline: true },
        { name: "Utility", value: "`/help`  `/ping`", inline: true },
        { name: "Coming next", value: "Moderation • tickets • leveling • economy • AI", inline: false },
      )
      .setFooter({ text: "Alpha Omega • built to scale" });
    await interaction.reply({ embeds: [embed] });
  },
};
