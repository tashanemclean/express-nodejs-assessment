import { APIResponse } from "@/common/types/index";
import { Response } from "express";

export const handleResponse = (
	serviceResponse: APIResponse<any>,
	response: Response
) => {
	return response.status(serviceResponse.statusCode).send(serviceResponse);
};
