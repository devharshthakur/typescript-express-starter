import { describe, it, expect } from "vitest";
import { greet } from "./greeter.js";

describe("greet", () => {
  it("returns a greeting message with the name", () => {
    const result = greet("World");
    expect(result.message).toBe("Hello, World!");
  });

  it("includes a timestamp", () => {
    const result = greet("X");
    expect(result.timestamp).toBeDefined();
    expect(new Date(result.timestamp).toISOString()).toBe(result.timestamp);
  });
});
