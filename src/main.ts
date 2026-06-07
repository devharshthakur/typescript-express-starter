import express from "express";
import routes from "#/routes.js";
import { config } from "#lib/config.js";

const app = express();

app.use(routes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
  console.log(`http://localhost:${config.PORT}`);
});
