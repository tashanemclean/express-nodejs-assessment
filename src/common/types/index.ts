import { z } from "zod";

export enum Status {
	Success,
	Fail,
}

export class APIResponse<T = null> {
	success?: boolean;
	message?: string;
	data?: T;
	statusCode?: number;

	constructor(status: Status, message: string, data: T, statusCode: number) {
		this.data = data;
		this.success = status === Status.Success;
		this.message = message;
		this.statusCode = statusCode;
	}
}

export const ResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
	z.object({
		message: z.string(),
		data: schema.optional(),
		success: z.boolean(),
		statusCode: z.number(),
	});
