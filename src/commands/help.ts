import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export const help: Command = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Explore Alpha Omega command systems."),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x7c5cff)
      .setTitle("Alpha Omega command systems")
      .setDescription("Your modular command center is online. Browse the full Alpha Omega catalog, examples, and permissions on the command center website.")
      .addFields(
        { name: "Security", value: "`/ping`  `/server`", inline: true },
        { name: "Utility", value: "`/help`  `/ping`", inline: true },
        { name: "Command center", value: "https://alpha-omega-command-center.gases-bidders8re1xyr.chatgpt.site", inline: false },
      )
      .setFooter({ text: "Alpha Omega • built to scale" });
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setLabel("Open command center")
        .setStyle(ButtonStyle.Link)
        .setURL("https://alpha-omega-command-center.gases-bidders8re1xyr.chatgpt.site"),
    );
    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
