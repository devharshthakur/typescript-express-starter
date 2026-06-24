import { describe, it, expect } from "vitest";
import express from "express";
import supertest from "supertest";
import greetRouter from "./greet.js";

interface GreetResponse {
  message: string;
  timestamp: string;
}

interface ErrorResponse {
  error: {
    fieldErrors: Record<string, string[]>;
    formErrors: string[];
  };
}

describe("GET /greet", () => {
  const app = express();
  app.use(greetRouter);
  const request = supertest(app);

  it("returns 200 with greeting for valid name", async () => {
    const res = await request.get("/greet?name=Vitest");
    expect(res.status).toBe(200);
    const body = res.body as GreetResponse;
    expect(body.message).toBe("Hello, Vitest!");
    expect(body.timestamp).toBeDefined();
  });

  it("returns 400 when name is missing", async () => {
    const res = await request.get("/greet");
    expect(res.status).toBe(400);
    const body = res.body as ErrorResponse;
    expect(body.error).toEqual({
      fieldErrors: { name: ["Invalid input: expected string, received undefined"] },
      formErrors: [],
    });
  });

  it("returns 400 when name is whitespace only", async () => {
    const res = await request.get("/greet?name=%20%20");
    expect(res.status).toBe(400);
    const body = res.body as ErrorResponse;
    expect(body.error).toEqual({
      fieldErrors: { name: ["Query parameter 'name' is required"] },
      formErrors: [],
    });
  });
});
