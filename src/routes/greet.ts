/**
 * Greet route — demonstrates middleware + service pattern.
 * @module routes/greet
 */

import { Router } from "express";
import { z } from "zod";
import { greet } from "$services/greeter.js";

const querySchema = z.object({
  name: z.string().trim().min(1, "Query parameter 'name' is required"),
});

const router = Router();

router.get("/greet", (req, res) => {
  const parsed = querySchema.safeParse(req.query);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }

  res.json(greet(parsed.data.name));
});

export default router;
