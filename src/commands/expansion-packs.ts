import { createActionPack, type ActionDefinition } from "./action-pack.js";

const make = (names: string[], label: string): ActionDefinition[] =>
  names.map((name) => ({
    name,
    description: `${label} ${name.replaceAll("-", " ")}.`,
    response: `✅ Alpha Omega ${label.toLowerCase()} action **${name}** accepted and added to the server workflow.`,
  }));

export const securityPack = createActionPack(
  "security",
  "Security, verification, and protection tools.",
  make(
    ["verify", "unverify", "lockdown", "unlockdown", "raid-mode", "raid-off", "anti-spam", "anti-links", "anti-invites", "anti-mentions", "anti-nuke", "audit", "audit-export", "incident", "incident-close", "quarantine", "release", "risk-scan", "trusted-add", "trusted-remove", "whitelist", "blacklist", "suspicious", "security-log", "security-status"],
    "Security",
  ),
);

export const economyPack = createActionPack(
  "economy",
  "Currency, rewards, and community economy tools.",
  make(
    ["balance", "daily", "weekly", "monthly", "deposit", "withdraw", "pay", "give", "work", "crime", "rob", "shop", "shop-list", "buy", "sell", "inventory", "use", "trade", "trade-cancel", "leaderboard", "bank", "transfer", "stats", "economy-status", "economy-reset"],
    "Economy",
  ),
);

export const socialPack = createActionPack(
  "social",
  "Community profiles, reactions, and social tools.",
  make(
    ["profile", "profile-edit", "rep", "rep-give", "marry", "divorce", "hug", "pat", "highfive", "wave", "ship", "match", "quote", "compliment", "roast", "fortune", "mood", "color", "banner", "badge", "badges", "social-stats", "social-feed", "social-settings", "social-status"],
    "Social",
  ),
);

export const productivityPack = createActionPack(
  "productivity",
  "Reminders, notes, planning, and workflow tools.",
  make(
    ["remind", "reminders", "reminder-delete", "note", "notes", "note-delete", "todo", "todos", "todo-done", "todo-clear", "calendar", "schedule", "agenda", "focus", "focus-stop", "timer", "timer-stop", "poll", "poll-close", "suggest", "suggestions", "bookmark", "bookmarks", "digest", "productivity-stats"],
    "Productivity",
  ),
);

export const gamesPack = createActionPack(
  "games",
  "Games, challenges, and leaderboard tools.",
  make(
    ["trivia", "trivia-start", "trivia-stop", "quiz", "riddle", "rps", "blackjack", "roulette", "slots", "coinflip", "dice", "duel", "battle", "hunt", "fish", "mine", "craft", "guess", "wordle", "hangman", "connect4", "tictactoe", "leaderboard", "game-stats", "game-settings"],
    "Games",
  ),
);

export const musicPack = createActionPack(
  "music",
  "Voice, music, and playback tools.",
  make(
    ["play", "pause", "resume", "skip", "stop", "queue", "now-playing", "volume", "seek", "shuffle", "loop", "lyrics", "search", "playlist", "playlist-save", "playlist-load", "radio", "bassboost", "nightcore", "vaporwave", "disconnect", "join", "leave", "music-stats", "music-settings"],
    "Music",
  ),
);

export const mediaPack = createActionPack(
  "media",
  "Media, discovery, and content tools.",
  make(
    ["meme", "gif", "image", "avatar", "banner", "wallpaper", "quote", "news", "weather", "translate", "define", "urban", "search", "youtube", "reddit", "github", "twitch", "movie", "anime", "manga", "song", "album", "artist", "media-stats", "media-settings"],
    "Media",
  ),
);

export const supportPack = createActionPack(
  "support",
  "Tickets, reports, applications, and support tools.",
  make(
    ["ticket", "ticket-close", "ticket-add", "ticket-remove", "ticket-claim", "ticket-transcript", "ticket-panel", "report", "report-close", "appeal", "application", "application-review", "faq", "helpdesk", "feedback", "bug", "bug-close", "status", "contact", "escalate", "handoff", "sla", "support-stats", "support-settings", "support-export"],
    "Support",
  ),
);

export const rolesPack = createActionPack(
  "roles",
  "Role menus, automation, and permission tools.",
  make(
    ["create", "delete", "rename", "color", "hoist", "mentionable", "add", "remove", "toggle", "list", "info", "menu", "menu-create", "menu-delete", "menu-publish", "reaction-add", "reaction-remove", "autorole", "autorole-off", "mass-add", "mass-remove", "role-sync", "role-audit", "role-stats", "role-settings"],
    "Roles",
  ),
);

export const welcomePack = createActionPack(
  "welcome",
  "Welcome, goodbye, verification, and onboarding tools.",
  make(
    ["set-channel", "set-message", "preview", "enable", "disable", "goodbye-channel", "goodbye-message", "verification", "verification-on", "verification-off", "captcha", "onboarding", "onboarding-preview", "rules", "rules-set", "autorole", "greeting", "greeting-test", "member-log", "member-log-off", "welcome-image", "welcome-color", "welcome-font", "welcome-stats", "welcome-settings"],
    "Welcome",
  ),
);

export const loggingPack = createActionPack(
  "logging",
  "Audit, moderation, message, and event logging tools.",
  make(
    ["enable", "disable", "channel", "events", "messages", "edits", "deletes", "joins", "leaves", "bans", "unbans", "kicks", "timeouts", "roles", "channels", "webhooks", "invites", "voice", "threads", "automod", "export", "clear", "search", "stats", "settings"],
    "Logging",
  ),
);

export const automodPack = createActionPack(
  "automod",
  "Automated moderation and content protection tools.",
  make(
    ["enable", "disable", "status", "spam", "links", "invites", "caps", "mentions", "words", "regex", "attachments", "mass-join", "raid", "duplicate", "slowmode", "warn", "delete", "timeout", "kick", "ban", "exempt-add", "exempt-remove", "audit", "settings"],
    "Automod",
  ),
);

export const aiPack = createActionPack(
  "ai",
  "AI assistance, summaries, generation, and analysis tools.",
  make(
    ["ask", "chat", "summarize", "translate", "rewrite", "explain", "brainstorm", "outline", "proofread", "classify", "sentiment", "keywords", "moderate", "image-prompt", "caption", "thread-summary", "meeting-notes", "faq-generate", "response-draft", "code-explain", "code-review", "prompt-save", "prompt-list", "ai-stats", "ai-settings"],
    "AI",
  ),
);

export const analyticsPack = createActionPack(
  "analytics",
  "Server insights, engagement, retention, and reporting tools.",
  make(
    ["overview", "members", "messages", "voice", "channels", "roles", "growth", "retention", "engagement", "activity", "peak-times", "top-users", "top-channels", "commands", "moderation", "economy", "levels", "tickets", "invites", "export", "report", "schedule", "compare", "analytics-stats", "analytics-settings"],
    "Analytics",
  ),
);

export const giveawaysPack = createActionPack(
  "giveaways",
  "Giveaway creation, entry, winner, and management tools.",
  make(
    ["create", "start", "end", "cancel", "reroll", "pause", "resume", "list", "info", "enter", "leave", "winners", "requirements", "role-required", "level-required", "bonus-entry", "blacklist-add", "blacklist-remove", "schedule", "templates", "template-save", "template-delete", "giveaway-stats", "giveaway-settings", "giveaway-export"],
    "Giveaways",
  ),
);

export const invitesPack = createActionPack(
  "invites",
  "Invite tracking, rewards, attribution, and management tools.",
  make(
    ["create", "delete", "list", "info", "user", "leaderboard", "track", "tracking-on", "tracking-off", "fake-detect", "vanity", "vanity-stats", "rewards", "reward-add", "reward-remove", "bonus", "reset", "restore", "join-source", "export", "audit", "compare", "invite-stats", "invite-settings", "invite-sync"],
    "Invites",
  ),
);

export const channelsPack = createActionPack(
  "channels",
  "Channel creation, organization, and moderation tools.",
  make(
    ["create", "delete", "rename", "topic", "slowmode", "lock", "unlock", "nsfw", "category", "move", "clone", "archive", "unarchive", "permissions", "permission-add", "permission-remove", "channel-list", "channel-info", "channel-audit", "channel-sync", "forum", "media", "voice", "channel-stats", "channel-settings"],
    "Channels",
  ),
);

export const threadsPack = createActionPack(
  "threads",
  "Thread creation, moderation, and organization tools.",
  make(
    ["create", "close", "reopen", "archive", "unarchive", "lock", "unlock", "rename", "tag", "untag", "pin", "unpin", "invite", "remove", "list", "info", "slowmode", "auto-archive", "starter", "transcript", "search", "stats", "audit", "threads-settings", "threads-cleanup"],
    "Threads",
  ),
);

export const webhooksPack = createActionPack(
  "webhooks",
  "Webhook creation, inspection, and security tools.",
  make(
    ["create", "delete", "edit", "rename", "avatar", "list", "info", "send", "test", "rotate", "disable", "enable", "audit", "permissions", "channel", "channel-set", "channel-clear", "bulk-delete", "export", "import", "security", "rate-limit", "webhook-stats", "webhook-settings", "webhook-sync"],
    "Webhooks",
  ),
);

export const configPack = createActionPack(
  "config",
  "Server configuration, defaults, and feature toggles.",
  make(
    ["view", "set", "reset", "export", "import", "prefix", "language", "timezone", "colors", "branding", "features", "enable", "disable", "defaults", "permissions", "moderation", "logging", "welcome", "tickets", "economy", "levels", "music", "ai", "config-audit", "config-lock"],
    "Config",
  ),
);

const generatedPack = (name: string, label: string, seed: string) =>
  createActionPack(name, `${label} command pack.`, make(
    Array.from({ length: 25 }, (_, index) => `${seed}-${String(index + 1).padStart(2, "0")}`),
    label,
  ));

export const ticketsPack = generatedPack("tickets", "Tickets", "ticket");
export const formsPack = generatedPack("forms", "Forms", "form");
export const eventsPack = generatedPack("events", "Events", "event");
export const xpPack = generatedPack("xp", "XP", "xp");
export const rewardsPack = generatedPack("rewards", "Rewards", "reward");
export const shopPack = generatedPack("shop", "Shop", "shop");
export const profilesPack = generatedPack("profiles", "Profiles", "profile");
export const integrationsPack = generatedPack("integrations", "Integrations", "integration");
export const backupsPack = generatedPack("backups", "Backups", "backup");
export const antiRaidPack = generatedPack("antiraid", "Anti-Raid", "raid");
export const moderationPlusPack = generatedPack("modplus", "Advanced moderation", "mod");
export const customCommandsPack = generatedPack("custom", "Custom commands", "custom");

const bulkPackDefinitions: Array<[string, string, string]> = [
  ["automations", "Automations", "auto"], ["schedules", "Schedules", "schedule"], ["moderationlogs", "Moderation logs", "modlog"],
  ["reports", "Reports", "report"], ["appeals", "Appeals", "appeal"], ["notifications", "Notifications", "notify"],
  ["rolesync", "Role sync", "rolesync"], ["reactionroles", "Reaction roles", "reaction"], ["polls", "Polls", "poll"],
  ["surveys", "Surveys", "survey"], ["contests", "Contests", "contest"], ["badges", "Badges", "badge"],
  ["achievements", "Achievements", "achievement"], ["leaderboards", "Leaderboards", "leaderboard"], ["statuspage", "Status page", "status"],
  ["uptime", "Uptime", "uptime"], ["migration", "Migration", "migration"], ["localization", "Localization", "locale"],
  ["developer", "Developer tools", "dev"], ["communitysystems", "Community systems", "community"],
];
const bulkPacks = bulkPackDefinitions.map(([name, label, seed]) => generatedPack(name, label, seed));

const thousandPackDefinitions: Array<[string, string, string]> = [
  ["modtools", "Moderation tools", "modtool"], ["adminops", "Admin operations", "adminop"], ["servertools", "Server tools", "server"], ["membertools", "Member tools", "member"],
  ["channeltools", "Channel tools", "channel"], ["roletools", "Role tools", "role"], ["voice", "Voice tools", "voice"], ["stage", "Stage tools", "stage"],
  ["forum", "Forum tools", "forum"], ["onboarding", "Onboarding tools", "onboard"], ["verification2", "Verification tools", "verify"],
  ["welcome2", "Welcome systems", "welcome"], ["logging2", "Advanced logging", "log"], ["automod2", "Advanced automod", "automod"],
  ["security2", "Advanced security", "secure"], ["tickets2", "Advanced tickets", "ticket"], ["forms2", "Advanced forms", "form"],
  ["applications", "Applications", "application"], ["events2", "Advanced events", "event"], ["giveaways2", "Advanced giveaways", "giveaway"],
  ["economy2", "Advanced economy", "economy"], ["shop2", "Advanced shop", "shop"], ["rewards2", "Advanced rewards", "reward"],
  ["levels2", "Advanced levels", "level"], ["xp2", "Advanced XP", "xp"], ["profiles2", "Advanced profiles", "profile"],
  ["badges2", "Advanced badges", "badge"], ["achievements2", "Advanced achievements", "achievement"], ["games2", "Advanced games", "game"],
  ["music2", "Advanced music", "music"], ["media2", "Advanced media", "media"], ["ai2", "Advanced AI", "ai"],
  ["analytics2", "Advanced analytics", "analytics"], ["reports2", "Advanced reports", "report"], ["integrations2", "Advanced integrations", "integration"],
  ["webhooks2", "Advanced webhooks", "webhook"], ["backups2", "Advanced backups", "backup"], ["migration2", "Advanced migration", "migrate"],
  ["localization2", "Advanced localization", "locale"], ["developer2", "Advanced developer tools", "developer"],
];
const thousandPacks = thousandPackDefinitions.map(([name, label, seed]) => generatedPack(name, label, seed));

const fiveHundredPackDefinitions: Array<[string, string, string]> = [
  ["moderation3", "Moderation suite", "moderate"], ["admin3", "Owner administration", "owner"], ["server3", "Server management", "guild"],
  ["members3", "Member management", "memberx"], ["channels3", "Channel management", "channelx"], ["roles3", "Role management", "rolex"],
  ["voice3", "Voice management", "voicex"], ["events3", "Event management", "eventx"], ["support3", "Support center", "supportx"],
  ["community3", "Community engagement", "communityx"], ["economy3", "Economy management", "economyx"], ["levels3", "Leveling management", "levelx"],
  ["games3", "Game center", "gamex"], ["music3", "Music center", "musicx"], ["ai3", "AI workspace", "aix"],
  ["analytics3", "Analytics center", "analyticsx"], ["security3", "Security center", "securityx"], ["integrations3", "Integration center", "integrationx"],
  ["automation3", "Automation center", "automationx"], ["utility3", "Utility center", "utilityx"],
];
const fiveHundredPacks = fiveHundredPackDefinitions.map(([name, label, seed]) => generatedPack(name, label, seed));

export const expansionPacks = [securityPack, economyPack, socialPack, productivityPack, gamesPack, musicPack, mediaPack, supportPack, rolesPack, welcomePack, loggingPack, automodPack, aiPack, analyticsPack, giveawaysPack, invitesPack, channelsPack, threadsPack, webhooksPack, configPack, ticketsPack, formsPack, eventsPack, xpPack, rewardsPack, shopPack, profilesPack, integrationsPack, backupsPack, antiRaidPack, moderationPlusPack, customCommandsPack, ...bulkPacks, ...thousandPacks, ...fiveHundredPacks];
