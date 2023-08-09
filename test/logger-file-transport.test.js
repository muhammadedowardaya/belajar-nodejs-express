import winston from "winston";

test("create new logger with console & file transport", () => {
	const logger = winston.createLogger({
		level: "info",
		transports: [
			new winston.transports.Console({}),
			new winston.transports.File({
				filename: "application.log",
			}),
		],
	});

	logger.info("Hello World");
});
