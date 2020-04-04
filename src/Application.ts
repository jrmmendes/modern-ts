import express, { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import morgan from 'morgan';

import logger from './core/logger';
import { ApiError, InternalError, NotFoundError } from './core/api-error';

import test from './routes/test';

export default class ApplicationController {
  private app: express.Application;
  private logger: Logger;

  constructor() {
    this.app = express();
    this.logger = logger;

    this.middlewares();
    this.routes();
    this.catchNotFound();
    this.handleErrors();
  }

  private catchNotFound() {
    this.app.use((req, res, next) => next(new NotFoundError()));
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
    this.app.use(test);
  }
  
  public listen(port:number=3000, hostname?: string, backlog?: number ) {
    this.app.listen(port, hostname, backlog, () => {
      this.logger.info(`Server initiated at port ${port}`);
    });
  }

  private handleErrors() {
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof ApiError) {
        ApiError.handle(err, res);
      } else {
        if (process.env.NODE_ENV === 'development') {
          this.logger.error(err);
          return res.status(500).send(err.message);
        }
        ApiError.handle(new InternalError(), res);
      }
    });
  }

}
