import { APIResponse } from "@/common/types/index";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export const handleResponse = (
	serviceResponse: APIResponse<any> | string[],
	response: Response
) => {
	return response.status(StatusCodes.OK).send(serviceResponse);
};
