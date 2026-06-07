import { Router } from "express";
import { requestLogger } from "#lib/middlewares/request-logger.js";
import healthRouter from "#routes/health.js";
import greetRouter from "#routes/greet.js";

const router = Router();

router.use(requestLogger);
router.use(healthRouter);
router.use(greetRouter);

export default router;
