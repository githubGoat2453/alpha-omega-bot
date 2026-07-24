import type { Command } from "../types.js";
import { help } from "./help.js";
import { ping } from "./ping.js";
import { server } from "./server.js";
import { admin } from "./admin.js";
import { moderation } from "./moderation.js";
import { utility } from "./utility.js";
import { serverControl } from "./server-control.js";
import { community } from "./community.js";
import { expansionPacks } from "./expansion-packs.js";

export const commands: Command[] = [help, ping, server, admin, moderation, utility, serverControl, community, ...expansionPacks]
  .sort((left, right) => left.data.name.localeCompare(right.data.name));
