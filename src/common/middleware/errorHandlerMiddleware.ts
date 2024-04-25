import { ErrorRequestHandler, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

const notFoundRequest: RequestHandler = (_req, res) => {
	res.sendStatus(StatusCodes.NOT_FOUND);
};

const loggerError: ErrorRequestHandler = (err, _req, res, next) => {
	res.locals.err = err;
	next(err);
};

export default () => [notFoundRequest, loggerError];
