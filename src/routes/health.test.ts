import { describe, it, expect } from "vitest";
import express from "express";
import supertest from "supertest";
import healthRouter from "./health.js";

describe("GET /health", () => {
  const app = express();
  app.use(healthRouter);
  const request = supertest(app);

  it("returns 200 with status ok", async () => {
    const res = await request.get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
