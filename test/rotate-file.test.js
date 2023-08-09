import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () => {
	const logger = winston.createLogger({
		level: "info",
		transports: [
			new DailyRotateFile({
				filename: "app-%DATE%.log",
				zippedArchive: true,
				maxSize: "1m",
				maxFiles: "14d",
			}),
		],
	});

	for (let i = 0; i < 1000; i++) {
		logger.info(`Hello world ${i}`);
	}
});
