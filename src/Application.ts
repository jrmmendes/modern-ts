import path from 'path';
import YAML from 'yamljs';

import { Logger } from 'winston';
import morgan from 'morgan';
import swaggerUi, { JsonObject } from 'swagger-ui-express';
import express, { Request, Response, NextFunction } from 'express';

import logger from './core/logger';
import { ApiError, InternalError, NotFoundError } from './core/api-error';
import * as settings from './settings';

import test from './routes/test';

export default class ApplicationController {
  private app: express.Application;
  private logger: Logger;

  constructor() {
    this.app = express();
    this.logger = logger;

    this.middlewares();
    if (settings.env !== 'test') this.swagger({ version: 1 });
    this.routes();
    this.catchNotFound();
    this.handleErrors();
  }

  private swagger({ version }: { version: number }) {
    this.logger.info(`Creating swagger page for API v${version}`);
    const swaggerDocument: JsonObject = YAML.load(
      path.join(
        settings.baseDir,
        'swagger',
        `v${version}`,
        'index.yml',
      ));

    this.app.use(
      `/v${version}/docs`,
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument),
    );
  }

  private catchNotFound() {
    this.app.use((req, res, next) => next(new NotFoundError()));
  }

  private middlewares() {
    this.logger.info('Initializing middlewares...');
    this.app.use(morgan('combined', {
      stream: {
        write: (meta: any) => {
          this.logger.info(meta);
        }
      }
    }));
  }

  private routes() {
    this.logger.info('Initializing API routes...');
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
          this.logger.error('Internal error');
          return res.status(500).send(err.message);
        }
        ApiError.handle(new InternalError(), res);
      }
    });
  }
}
