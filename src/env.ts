/**
 * Environment configuration module.
 * Loads .env via dotenv, validates against a zod schema, and exits early on invalid values.
 * @module config
 */
import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(8000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

type Env = z.infer<typeof envSchema>;

let parsed: Env;

try {
  parsed = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    const tree = z.treeifyError(error);
    console.error("❌ Invalid environment variables:");
    console.dir(tree, { depth: null });
  } else {
    console.error("❌ Unexpected error parsing environment variables:", error);
  }
  process.exit(1);
}

export const env = parsed;
