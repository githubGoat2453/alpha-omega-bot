import {
  PermissionFlagsBits,
  SlashCommandBuilder,
} from "discord.js";
import type { Command } from "../types.js";

export const moderation: Command = {
  data: new SlashCommandBuilder()
    .setName("moderation")
    .setDescription("Alpha Omega moderation controls.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addSubcommand((s) =>
      s.setName("timeout").setDescription("Timeout a member.")
        .addUserOption((o) => o.setName("member").setDescription("Member to timeout").setRequired(true))
        .addIntegerOption((o) => o.setName("minutes").setDescription("Timeout duration").setMinValue(1).setMaxValue(40320).setRequired(true)),
    )
    .addSubcommand((s) =>
      s.setName("kick").setDescription("Kick a member.")
        .addUserOption((o) => o.setName("member").setDescription("Member to kick").setRequired(true))
        .addStringOption((o) => o.setName("reason").setDescription("Reason")),
    )
    .addSubcommand((s) =>
      s.setName("ban").setDescription("Ban a member.")
        .addUserOption((o) => o.setName("member").setDescription("Member to ban").setRequired(true))
        .addStringOption((o) => o.setName("reason").setDescription("Reason")),
    ),
  async execute(interaction) {
    if (!interaction.guild || !interaction.memberPermissions) {
      await interaction.reply({ content: "This command only works in a server.", ephemeral: true });
      return;
    }
    const member = interaction.options.getMember("member");
    if (!member || !("kick" in member)) {
      await interaction.reply({ content: "That member could not be found.", ephemeral: true });
      return;
    }
    const action = interaction.options.getSubcommand();
    const reason = interaction.options.getString("reason") ?? "Alpha Omega moderation";
    try {
      if (action === "timeout" && "timeout" in member) {
        const minutes = interaction.options.getInteger("minutes", true);
        await member.timeout(minutes * 60_000, reason);
        await interaction.reply(`✅ Timed out <@${member.id}> for ${minutes} minute(s).`);
      } else if (action === "kick") {
        await member.kick(reason);
        await interaction.reply(`✅ Kicked <@${member.id}>.`);
      } else {
        await member.ban({ reason });
        await interaction.reply(`✅ Banned <@${member.id}>.`);
      }
    } catch {
      await interaction.reply({ content: "I could not complete that action. Check my role hierarchy and permissions.", ephemeral: true });
    }
  },
};
