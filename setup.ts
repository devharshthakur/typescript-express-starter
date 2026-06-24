#!/usr/bin/env tsx
// setup.ts — Clean up template-repo management files for a fresh project start.
// Run after scaffolding to remove files relevant only to template maintenance.

import { execSync } from "node:child_process";
import { rmSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = __dirname;
const TARGETS = [".github", "CHANGELOG.md", ".changelogenrc"];

interface RemoveError {
  name: string;
  error: string;
}

interface RemoveResult {
  removed: string[];
  errors: RemoveError[];
}

/** Delete files/dirs. Returns `{removed, errors}`. */
function removeTargets(targets: string[]): RemoveResult {
  const removed: string[] = [];
  const errors: RemoveError[] = [];

  for (const name of targets) {
    const fullPath = join(PROJECT_ROOT, name);
    try {
      rmSync(fullPath, { recursive: true, force: true });
      removed.push(name);
    } catch (err) {
      errors.push({ name, error: (err as Error).message });
    }
  }

  return { removed, errors };
}

/** Strip changelogen scripts & devDep from package.json object. Returns removed keys. */
function stripChangelogen(pkg: Record<string, unknown>): string[] {
  const removed: string[] = [];
  const changelogScripts = ["changelog", "changelog:bump", "changelog:release"];

  const scripts = pkg.scripts as Record<string, string> | undefined;
  for (const key of changelogScripts) {
    if (key in (scripts ?? {})) {
      delete scripts![key];
      removed.push(`package.json -> scripts.${key}`);
    }
  }

  const devDeps = pkg.devDependencies as Record<string, string> | undefined;
  if (devDeps?.changelogen) {
    delete devDeps.changelogen;
    removed.push("package.json -> devDependencies.changelogen");
  }

  return removed;
}

/** Write updated package.json to disk. */
function writePackage(pkg: Record<string, unknown>): void {
  const pkgPath = join(PROJECT_ROOT, "package.json");
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf-8");
}

/** Print results to console. */
function printSummary(removed: string[], errors: RemoveError[]): void {
  if (removed.length > 0) {
    console.log("Removed:");
    removed.forEach((r) => console.log(" - " + r));
  }

  if (errors.length > 0) {
    console.error("Failed:");
    errors.forEach(({ name, error }) => console.error(" - " + name + ": " + error));
  }

  console.log("\nDone. " + removed.length + " cleaned, " + errors.length + " errors.");
}

function main(): void {
  const { removed: fsRemoved, errors } = removeTargets(TARGETS);

  const pkgPath = join(PROJECT_ROOT, "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf-8")) as Record<string, unknown>;

  const pkgRemoved = stripChangelogen(pkg);
  writePackage(pkg);

  const allRemoved = [...fsRemoved, ...pkgRemoved];
  printSummary(allRemoved, errors);

  try {
    console.log("\nSyncing lockfile...");
    execSync("pnpm install", { stdio: "inherit", cwd: PROJECT_ROOT });
  } catch {
    console.warn("⚠️ Lockfile sync failed. Run 'pnpm install' manually.");
  }
}

main();
