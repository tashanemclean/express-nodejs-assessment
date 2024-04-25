import { RequestHandler } from "express";

import { config } from "@/common/utils/config";

export const logger: RequestHandler = (_req, res, next) => {
	const notProd = config.NODE_ENV === "development";
	if (notProd) {
		const send = res.send;
		res.send = function (content) {
			res.locals.responseBody = content;
			res.send = send;
			return send.call(res, content);
		};
	}
	next();
};
