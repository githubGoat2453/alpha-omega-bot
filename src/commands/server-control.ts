import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export const serverControl: Command = {
  data: new SlashCommandBuilder()
    .setName("serverctl")
    .setDescription("Manage the current server and channel.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
    .addSubcommand((s) => s.setName("lock").setDescription("Lock the current channel."))
    .addSubcommand((s) => s.setName("unlock").setDescription("Unlock the current channel."))
    .addSubcommand((s) =>
      s.setName("slowmode").setDescription("Set channel slowmode in seconds.")
        .addIntegerOption((o) => o.setName("seconds").setDescription("0 disables slowmode").setMinValue(0).setMaxValue(21600).setRequired(true)),
    )
    .addSubcommand((s) =>
      s.setName("clear").setDescription("Delete recent messages.")
        .addIntegerOption((o) => o.setName("amount").setDescription("1-100 messages").setMinValue(1).setMaxValue(100).setRequired(true)),
    ),
  async execute(interaction) {
    const channel = interaction.channel;
    if (!channel || !("permissionOverwrites" in channel) || !("setRateLimitPerUser" in channel)) {
      await interaction.reply({ content: "This command needs a manageable text channel.", ephemeral: true });
      return;
    }
    const action = interaction.options.getSubcommand();
    try {
      if (action === "lock" || action === "unlock") {
        await channel.permissionOverwrites.edit(interaction.guild!.roles.everyone, {
          SendMessages: action === "unlock",
        });
        await interaction.reply(`✅ Channel ${action === "lock" ? "locked" : "unlocked"}.`);
      } else if (action === "slowmode") {
        const seconds = interaction.options.getInteger("seconds", true);
        await channel.setRateLimitPerUser(seconds);
        await interaction.reply(`✅ Slowmode set to ${seconds === 0 ? "off" : `${seconds} seconds`}.`);
      } else {
        const amount = interaction.options.getInteger("amount", true);
        const deleted = await channel.bulkDelete(amount, true);
        await interaction.reply({ content: `✅ Deleted ${deleted.size} message(s).`, ephemeral: true });
      }
    } catch {
      await interaction.reply({ content: "I could not complete that server action. Check my permissions.", ephemeral: true });
    }
  },
};
