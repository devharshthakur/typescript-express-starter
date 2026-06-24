/**
 * Global error handler middleware.
 * Catches unhandled errors and returns a 500 JSON response.
 * @module middleware/error-handler
 */

import type { Request, Response, NextFunction } from "express";

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
}
