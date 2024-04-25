import { createApiDocResponse } from "@/api-docs/openApiResponse";
import { APIResponse, Status } from "@/common/types";
import { handleResponse } from "@/common/utils/http";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { Router, Request, Response } from "express";
import * as express from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";

export const registry = new OpenAPIRegistry();

export const healthCheckRoute: Router = (() => {
	const router = express.Router();

	registry.registerPath({
		method: "get",
		path: "/_health",
		tags: ["Health check"],
		responses: createApiDocResponse(z.null(), "Ok"),
	});

	router.get("/", (_req: Request, res: Response) => {
		const result = new APIResponse(
			Status.Success,
			"Health check route ok",
			null,
			StatusCodes.OK
		);
		handleResponse(result, res);
	});

	return router;
})();
