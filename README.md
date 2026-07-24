# Alpha Omega

Production-ready Discord bot foundation for a modular command platform.

## Local setup

```bash
npm install
cp .env.example .env
npm run audit:commands
npm run deploy:commands
npm run dev
```

Required variables:

- `DISCORD_TOKEN` — Discord bot token
- `DISCORD_CLIENT_ID` — Discord application ID
- `DISCORD_GUILD_ID` — optional; use it for instant guild command updates while developing
- `OWNER_USER_ID` — Discord user ID allowed to use protected owner commands
- `BOT_PREFIX` — prefix for message commands, defaults to `!`

## Railway deployment

Create a Railway service from this repository, set the three variables above in **Variables**, and deploy. Railway uses `railway.json` to build and start the bot.

Never commit `.env` or paste the bot token into chat.

Prefix commands require **Message Content Intent** under Developer Portal → Bot → Privileged Gateway Intents.

## Architecture

Commands live in `src/commands/` and implement the `Command` type. Add command packs by creating modules and exporting them from `src/commands/index.ts`. The registry is intentionally simple so it can grow toward hundreds of commands without rewriting the runtime.
