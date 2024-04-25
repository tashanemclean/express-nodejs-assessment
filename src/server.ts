// import * as express from "express";
// import * as cors from "cors";
import cors from "cors";
import express, { Express } from "express";
import { logger } from "@/common/middleware/loggerMiddleware";
import errorHandlerMiddleware from "./common/middleware/errorHandlerMiddleware";
import { healthCheckRoute } from "./dataAccessLayer/api/healthCheck";
import { greetingIanRoute } from "./dataAccessLayer/api/greetingIan";

const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middleware
app.use(cors({ credentials: true }));

app.use(logger);

// Routes
app.use("/v1/_health", healthCheckRoute);
app.use("/v1/greetian", greetingIanRoute);

// Error handler
app.use(errorHandlerMiddleware());

export default app;
