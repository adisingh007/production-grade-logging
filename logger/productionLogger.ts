// const winston = require("winston");
import { createLogger, format, Logger, transports } from "winston";
const { combine, timestamp, printf } = format;

const LOGS_DIR = "logs/";

const myFormat = printf(({level, message, timestamp}) => {
    return `[${level}] ${timestamp} ${message}`;
});

export const productionLogger = (): Logger => {
    return createLogger({
        level: "info",
        format: combine(
            timestamp(),
            myFormat
        ),
        transports: [
            new transports.Console(),
            new transports.File({ filename: `${LOGS_DIR}/error.log`, level: "error" }),
            new transports.File({ filename: `${LOGS_DIR}/combined.log` }),
        ]
    });
};
