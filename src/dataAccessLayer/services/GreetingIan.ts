export class GreetingService {
	constructor() {}

	public greetingIanRequest = async (): Promise<string[]> => {
		return new Promise((resolve, _) => {
			setTimeout(() => {
				resolve([
					"Hello Ian!",
					"This API was fun to create",
					"Although Nestjs is also a fun Nodejs framework! :)",
				]);
			}, 500);
		});
	};
}
