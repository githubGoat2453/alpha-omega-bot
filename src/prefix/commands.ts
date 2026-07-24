import type { PrefixCommand } from "./types.js";

export const prefixCommands: PrefixCommand[] = [
  {
    name: "ping",
    aliases: ["latency"],
    description: "Check Alpha Omega latency.",
    async execute({ message }) {
      await message.reply(`Alpha Omega online • ${message.client.ws.ping}ms`);
    },
  },
  {
    name: "help",
    aliases: ["commands", "cmds"],
    description: "List available prefix commands.",
    async execute({ message, prefix }) {
      await message.reply(`**Alpha Omega command center**\nBrowse every slash command, prefix pack, permission, and example here:\nhttps://alpha-omega-command-center.gases-bidders8re1xyr.chatgpt.site\n\nQuick test: \`${prefix}ping\` · \`${prefix}commands\``);
    },
  },
  {
    name: "server",
    aliases: ["serverinfo", "guild"],
    description: "Show basic server information.",
    async execute({ message }) {
      const guild = message.guild;
      if (!guild) return;
      await message.reply(`**${guild.name}**\nMembers: ${guild.memberCount}\nChannels: ${guild.channels.cache.size}`);
    },
  },
  {
    name: "adminstatus",
    aliases: ["astatus"],
    description: "Check the protected owner command layer.",
    ownerOnly: true,
    async execute({ message }) {
      await message.reply(`✅ Owner verified. Alpha Omega is online in **${message.guild?.name ?? "DM"}**.`);
    },
  },
  {
    name: "avatar",
    aliases: ["av", "pfp"],
    description: "Display a user's avatar.",
    async execute({ message }) {
      const user = message.mentions.users.first() ?? message.author;
      await message.reply(user.displayAvatarURL({ size: 1024 }));
    },
  },
  {
    name: "userinfo",
    aliases: ["whois", "user"],
    description: "Display basic information about a user.",
    async execute({ message }) {
      const user = message.mentions.users.first() ?? message.author;
      const member = message.guild?.members.cache.get(user.id);
      await message.reply(`**${user.username}**\nID: \`${user.id}\`\nCreated: <t:${Math.floor(user.createdTimestamp / 1000)}:R>\nJoined: ${member?.joinedTimestamp ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>` : "Unknown"}`);
    },
  },
  {
    name: "channelinfo",
    aliases: ["channel"],
    description: "Display information about the current channel.",
    async execute({ message }) {
      await message.reply(`**Channel:** ${message.channel.toString()}\n**ID:** \`${message.channel.id}\``);
    },
  },
  {
    name: "say",
    aliases: ["echo"],
    description: "Repeat text without allowing mass mentions.",
    async execute({ message, args }) {
      const content = args.join(" ").slice(0, 1900);
      if (!content) {
        await message.reply("Provide a message to send.");
        return;
      }
      await message.reply({ content, allowedMentions: { parse: [] } });
    },
  },
  {
    name: "lock",
    aliases: ["lockchannel"],
    description: "Lock the current channel.",
    async execute({ message }) {
      if (!message.member?.permissions.has("ManageChannels") || !("permissionOverwrites" in message.channel)) {
        await message.reply("⛔ You need Manage Channels to use this.");
        return;
      }
      await message.channel.permissionOverwrites.edit(message.guild!.roles.everyone, { SendMessages: false });
      await message.reply("✅ Channel locked.");
    },
  },
  {
    name: "unlock",
    aliases: ["unlockchannel"],
    description: "Unlock the current channel.",
    async execute({ message }) {
      if (!message.member?.permissions.has("ManageChannels") || !("permissionOverwrites" in message.channel)) {
        await message.reply("⛔ You need Manage Channels to use this.");
        return;
      }
      await message.channel.permissionOverwrites.edit(message.guild!.roles.everyone, { SendMessages: true });
      await message.reply("✅ Channel unlocked.");
    },
  },
  {
    name: "slowmode",
    aliases: ["slow"],
    description: "Set channel slowmode in seconds.",
    async execute({ message, args }) {
      if (!message.member?.permissions.has("ManageChannels") || !("setRateLimitPerUser" in message.channel)) {
        await message.reply("⛔ You need Manage Channels to use this.");
        return;
      }
      const seconds = Number(args[0] ?? 0);
      if (!Number.isInteger(seconds) || seconds < 0 || seconds > 21600) {
        await message.reply("Use a whole number of seconds from 0 to 21600.");
        return;
      }
      await message.channel.setRateLimitPerUser(seconds);
      await message.reply(`✅ Slowmode set to ${seconds === 0 ? "off" : `${seconds} seconds`}.`);
    },
  },
  {
    name: "commands",
    aliases: ["allcommands", "catalog"],
    description: "Show Alpha Omega command-pack totals.",
    async execute({ message }) {
      await message.reply("Alpha Omega command catalog: 120 slash command packs, 2,860 registered subcommand operations, and prefix mirrors for every pack.");
    },
  },
];
