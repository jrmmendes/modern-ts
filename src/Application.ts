import express from 'express';
import { Logger } from 'winston';
import morgan from 'morgan';

import logger from './core/logger';

export default class ApplicationController {
  private app: express.Application;
  private logger: Logger;

  constructor() {
    this.app = express();
    this.logger = logger;

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(morgan('combined', {
      stream: {
        write: (meta: any) => {
          this.logger.info(meta);
        }
      }
    }));
  }

  private routes() {
  }
  
  public listen(port:number=3000, hostname?: string, backlog?: number ) {
    this.app.listen(port, hostname, backlog, () => {
      this.logger.info(`Server initiated at port ${port}`);
    });
  }

}
