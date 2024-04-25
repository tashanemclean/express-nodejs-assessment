import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const config = {
	host: process.env.host ?? "localhost",
	port: process.env.port ?? 5000,
	NODE_ENV: process.env.NODE_ENV ?? "development",
};
