import { createLogger, format, Logger, transports } from "winston";
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({level, message, timestamp}): string => {
    return `${timestamp} [${level}] ${message}`;
});

export const localLogger = (): Logger => {
    return createLogger({
        level: "debug",
        format: combine(
            colorize(),
            timestamp({format: "DD/MM/YYYYTHH:mm:ss"}),
            myFormat
        ),
        transports: [
            new transports.Console(),
        ]
    });
};
