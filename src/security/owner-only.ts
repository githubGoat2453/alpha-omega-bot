import type { ChatInputCommandInteraction } from "discord.js";

const ownerId = process.env.OWNER_USER_ID;

export async function requireOwner(interaction: ChatInputCommandInteraction): Promise<boolean> {
  if (interaction.user.id === ownerId) return true;
  await interaction.reply({
    content: "⛔ This Alpha Omega command is restricted to the bot owner.",
    ephemeral: true,
  });
  return false;
}
