import { Logger, LoggerInstance, LoggerOptions, transports } from 'winston';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

const env = dotenv.config({path: '.env'});
const logsDir = process.env.SERVER_LOGS_FOLDER;

console.log(env);
if (!fs.existsSync(`${logsDir}`)) {
  fs.mkdirSync(`${logsDir}`);
}

export const logger: LoggerInstance = new Logger(<LoggerOptions> {
  exitOnError: false,
  transports: [
    new transports.Console({
      colorize: true,
      level: 'debug',
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: false,
      prettyPrint: true,
      timestamp: () => (new Date()).toLocaleTimeString()
    }),
    new transports.File({
      level: 'info',
      filename: `${logsDir}/all-logs.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false
    }),
  ]
});
