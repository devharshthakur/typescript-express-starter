import { Router } from "express";
import { requestLogger } from "#middleware/request-logger.js";
import { mountGreet } from "#routes/greet.js";
import { mountHealth } from "#routes/health.js";

const router = Router();

router.use(requestLogger);

mountHealth(router);
mountGreet(router);

export default router;
