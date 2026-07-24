import type { Message } from "discord.js";

export type PrefixContext = {
  message: Message;
  args: string[];
  prefix: string;
};

export type PrefixCommand = {
  name: string;
  aliases?: string[];
  description: string;
  ownerOnly?: boolean;
  execute: (context: PrefixContext) => Promise<void>;
};
