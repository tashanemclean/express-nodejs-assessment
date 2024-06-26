import { handleResponse } from "@/common/utils/http";
import { Router, Request, Response } from "express";
import * as express from "express";
import { GreetingService } from "../services/GreetingIan";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiDocResponse } from "@/api-docs/openApiResponse";
import { z } from "zod";

export const registry = new OpenAPIRegistry();

export const greetingIanRoute: Router = (() => {
	const router = express.Router();

	const service = new GreetingService();
	registry.registerPath({
		method: "get",
		path: "/greetian",
		tags: ["Greeting Ian Route"],
		responses: createApiDocResponse(z.null(), "Ok"),
	});
	router.get("/", async (_req: Request, res: Response) => {
		const result = await service.greetingIanRequest();
		handleResponse(result, res);
	});

	return router;
})();
