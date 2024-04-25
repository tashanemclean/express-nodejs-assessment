import {
	OpenApiGeneratorV3,
	OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import { registry as healthRegistry } from "@/dataAccessLayer/api/healthCheck";
import { registry as greetingRegistry } from "@/dataAccessLayer/api/greetingIan";

export const generateApiDoc = () => {
	const registry = new OpenAPIRegistry([healthRegistry, greetingRegistry]);
	const generator = new OpenApiGeneratorV3(registry.definitions);

	return generator.generateDocument({
		openapi: "3.0.0",
		info: {
			version: "1.0.0",
			title: "My API",
			description: "This is the Assessment Express API Spec",
		},
		externalDocs: {
			description: "View the OpenAPI Specification in JSON format",
			url: "/swagger.json",
		},
		servers: [{ url: "v1" }],
	});
};
