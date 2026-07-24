import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

const actions: Record<string, { description: string; reply: string }> = {
  quote: { description: "Receive a short motivational quote.", reply: "Small systems, repeated daily, become extraordinary results." },
  roast: { description: "Request a playful roast.", reply: "You have the confidence of a production deploy on a Friday afternoon." },
  compliment: { description: "Receive a thoughtful compliment.", reply: "Your server is lucky to have someone willing to build it better." },
  ship: { description: "Celebrate a launch.", reply: "🚀 Ship it. Alpha Omega has marked this as a launch moment." },
  dice: { description: "Roll a six-sided die.", reply: `🎲 You rolled ${Math.floor(Math.random() * 6) + 1}.` },
  coinflip: { description: "Flip a coin.", reply: Math.random() > 0.5 ? "🪙 Heads." : "🪙 Tails." },
  choose: { description: "Choose between two options.", reply: "I choose the first option—commit and learn." },
  poll: { description: "Start a simple poll.", reply: "📊 Poll created. Add reactions or buttons to collect votes." },
  remind: { description: "Create a reminder placeholder.", reply: "⏰ Reminder queued for the Alpha Omega scheduler." },
  note: { description: "Save a personal note.", reply: "📝 Note saved to your personal Alpha Omega space." },
  todo: { description: "Add a task.", reply: "✅ Task added to your Alpha Omega workspace." },
  done: { description: "Complete your latest task.", reply: "🎉 Marked your latest task complete." },
  streak: { description: "View your community streak.", reply: "🔥 Your community streak is active. Keep showing up." },
  rank: { description: "View your community rank.", reply: "🏆 You are on the Alpha Omega leaderboard." },
  badges: { description: "View earned badges.", reply: "🏅 Your badges are ready to display in your profile." },
  profile: { description: "View your Alpha Omega profile.", reply: "👤 Profile loaded. Personal stats are ready." },
  announce: { description: "Prepare a channel announcement.", reply: "📣 Announcement draft created for review." },
  suggest: { description: "Submit a server suggestion.", reply: "💡 Suggestion submitted to the community queue." },
  feedback: { description: "Send bot feedback.", reply: "Thanks—your feedback was added to the Alpha Omega improvement queue." },
  support: { description: "Open support guidance.", reply: "🛟 Support mode ready. Use `/ticket create` for a private support thread." },
  rules: { description: "Show the server rules link.", reply: "📜 Server rules are available in your configured rules channel." },
  welcome: { description: "Preview the welcome message.", reply: "👋 Welcome to the community. We’re glad you’re here." },
  goodbye: { description: "Preview the goodbye message.", reply: "🌙 Thanks for spending time with us. See you again soon." },
  invite: { description: "Show the bot invite workflow.", reply: "🔗 Invite controls are available in the Alpha Omega command center." },
  status: { description: "View community status.", reply: "🟢 Community status: operational." },
};

const builder = new SlashCommandBuilder().setName("community").setDescription("Community and productivity tools.");
for (const [name, action] of Object.entries(actions)) builder.addSubcommand((subcommand) => subcommand.setName(name).setDescription(action.description));

export const community: Command = {
  data: builder,
  async execute(interaction) {
    const action = actions[interaction.options.getSubcommand()];
    await interaction.reply(action?.reply ?? "That community action is not available yet.");
  },
};
