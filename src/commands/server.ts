import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export const server: Command = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("View information about this server."),
  async execute(interaction) {
    const guild = interaction.guild;
    if (!guild) {
      await interaction.reply({ content: "This command only works inside a server.", ephemeral: true });
      return;
    }
    const embed = new EmbedBuilder()
      .setColor(0x7c5cff)
      .setTitle(`${guild.name} intelligence`)
      .addFields(
        { name: "Members", value: `${guild.memberCount}`, inline: true },
        { name: "Channels", value: `${guild.channels.cache.size}`, inline: true },
        { name: "Created", value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:D>`, inline: true },
      )
      .setThumbnail(guild.iconURL({ size: 256 }) ?? null);
    await interaction.reply({ embeds: [embed] });
  },
};
