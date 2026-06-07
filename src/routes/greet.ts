/**
 * Greet route — demonstrates middleware + service pattern.
 * @module routes/greet
 */

import { Router } from "express";
import { requestLogger } from "#middleware/request-logger.js";
import { greet } from "#services/greeter.js";

const router = Router();

router.use(requestLogger);

router.get("/greet", (req, res) => {
  const name = req.query.name;

  if (typeof name !== "string" || name.trim().length === 0) {
    res.status(400).json({ error: "Query parameter 'name' is required" });
    return;
  }

  res.json(greet(name));
});

export default router;
