import { connect, connection } from 'mongoose';
import logger from '../core/logger';

export default (connectionString: string) => {
  try {
    logger.debug(`Mongo Connection String: ${connectionString}`);
    connect(
      connectionString,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    connection.once('open', () => {
      logger.info('Connected to database');
    });
  } catch (error) {
    logger.info('Couldn\'t connect to database');
    logger.error(error);
  }
};
