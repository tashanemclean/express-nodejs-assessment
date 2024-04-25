import { StatusCodes } from "http-status-codes";
import { z } from "zod";

import { ResponseSchema } from "@/common/types/index";

export const createApiDocResponse = (
	schema: z.ZodTypeAny,
	description: string,
	statusCode = StatusCodes.OK
) => {
	return {
		[statusCode]: {
			description,
			content: {
				"application/json": {
					schema: ResponseSchema(schema),
				},
			},
		},
	};
};
