#!/usr/bin/env tsx
/**
 * Dependency update script.
 *
 * Checks for outdated packages via `pnpm outdated` and interactively prompts
 * the user to upgrade all to the latest versions.
 */

import { execSync } from "node:child_process";
import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

/**
 * Prompt the user for a yes/no answer.
 *
 * @param question - Question text displayed to the user
 * @returns Resolves `true` when the user answers y/Y, `false` otherwise
 */
async function askYesNo(question: string): Promise<boolean> {
  const rl = createInterface({ input: stdin, output: stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y");
    });
  });
}

function printHeader(): void {
  console.log("=== Outdated Dependencies ===");
}

function hasOutdated(): boolean {
  try {
    execSync("pnpm outdated", { stdio: "inherit" });
    return false;
  } catch {
    return true;
  }
}

function updateAll(): void {
  console.log("Updating...");
  execSync("pnpm update --latest", { stdio: "inherit" });
  console.log("Done!");
}

async function main(): Promise<void> {
  printHeader();

  if (!hasOutdated()) {
    console.log("\nAll up to date!");
    return;
  }

  const shouldUpdate = await askYesNo("\nUpdate all outdated dependencies to latest? (y/N) ");

  if (shouldUpdate) {
    updateAll();
  } else {
    console.log("Skipped.");
  }
}

await main();
