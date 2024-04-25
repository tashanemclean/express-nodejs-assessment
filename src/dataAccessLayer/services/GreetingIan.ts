export class GreetingService {
	constructor() {}

	public greetingIanRequest = async (): Promise<string> => {
		return new Promise((resolve, _) => {
			setTimeout(() => {
				resolve("Hello Ian!");
			}, 500);
		});
	};
}
