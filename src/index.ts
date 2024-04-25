import { config } from "@/common/utils/config";
import app from "@/server";

app.listen(config.port, () => {
	const { NODE_ENV, host, port } = config;
	console.log(`Server (${NODE_ENV}) running on port http://${host}:${port}`);
});
