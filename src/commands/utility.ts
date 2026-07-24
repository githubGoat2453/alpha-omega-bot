import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export const utility: Command = {
  data: new SlashCommandBuilder()
    .setName("utility")
    .setDescription("General Alpha Omega utility tools.")
    .addSubcommand((s) =>
      s.setName("avatar").setDescription("Display a user's avatar.")
        .addUserOption((o) => o.setName("user").setDescription("User to inspect")),
    )
    .addSubcommand((s) =>
      s.setName("userinfo").setDescription("Display information about a user.")
        .addUserOption((o) => o.setName("user").setDescription("User to inspect")),
    )
    .addSubcommand((s) => s.setName("channelinfo").setDescription("Display information about the current channel."))
    .addSubcommand((s) =>
      s.setName("roleinfo").setDescription("Display information about a role.")
        .addRoleOption((o) => o.setName("role").setDescription("Role to inspect").setRequired(true)),
    )
    .addSubcommand((s) =>
      s.setName("say").setDescription("Send a message through Alpha Omega.")
        .addStringOption((o) => o.setName("message").setDescription("Message content").setMaxLength(1900).setRequired(true)),
    ),
  async execute(interaction) {
    const action = interaction.options.getSubcommand();
    if (action === "avatar") {
      const user = interaction.options.getUser("user") ?? interaction.user;
      await interaction.reply(user.displayAvatarURL({ size: 1024 }));
      return;
    }
    if (action === "userinfo") {
      const user = interaction.options.getUser("user") ?? interaction.user;
      const member = interaction.guild?.members.cache.get(user.id);
      const embed = new EmbedBuilder()
        .setColor(0x7c5cff)
        .setTitle(user.username)
        .setThumbnail(user.displayAvatarURL({ size: 256 }))
        .addFields(
          { name: "User ID", value: user.id, inline: true },
          { name: "Created", value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: true },
          { name: "Joined", value: member?.joinedTimestamp ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>` : "Unknown", inline: true },
        );
      await interaction.reply({ embeds: [embed] });
      return;
    }
    if (action === "channelinfo") {
      const channel = interaction.channel;
      await interaction.reply(`**Channel:** ${channel?.toString() ?? "Unknown"}\n**ID:** \`${channel?.id ?? "Unknown"}\``);
      return;
    }
    if (action === "roleinfo") {
      const role = interaction.options.getRole("role", true);
      const members = "members" in role ? role.members.size : "Unavailable";
      const color = "hexColor" in role ? role.hexColor : `#${role.color.toString(16).padStart(6, "0")}`;
      await interaction.reply(`**${role.name}**\nID: \`${role.id}\`\nMembers: ${members}\nColor: \`${color}\``);
      return;
    }
    const message = interaction.options.getString("message", true);
    await interaction.reply({ content: message, allowedMentions: { parse: [] } });
  },
};
