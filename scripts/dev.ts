/**
 * Development script — runs the server (nodemon) and type-checker (tsc --noEmit --watch)
 * concurrently for local development.
 */

import concurrently from "concurrently";
import type { ConcurrentlyCommandInput, ConcurrentlyOptions } from "concurrently";

const commands: ConcurrentlyCommandInput[] = [
  { command: "nodemon", name: "server" },
  { command: "tsc --noEmit --watch", name: "typecheck" },
];

const options: Partial<ConcurrentlyOptions> = {
  prefix: "name",
};

const { result } = concurrently(commands, options);

await result.catch(() => {});
