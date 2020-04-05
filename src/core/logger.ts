import path from 'path';

import { createLogger, format, transports } from 'winston';

import { baseDir, env } from '../settings';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({ filename: path.join(baseDir, 'logs','error.log'), level: 'error' }),
    new transports.File({ filename: path.join(baseDir, 'logs', 'combined.log')}),
  ],
  exitOnError: false,
});

if (env !== 'production') {
  logger.add(new transports.Console({
    level: 'debug',
    format: format.cli(),
  }));
};

export default logger;
