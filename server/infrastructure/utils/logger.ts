import { Logger, LoggerInstance, LoggerOptions, transports } from 'winston';

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
      filename: './logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false
    }),
  ]
});

declare module 'winston' {
  interface LeveledLogMethod {
    (meta: any): LoggerInstance;
  }
}
