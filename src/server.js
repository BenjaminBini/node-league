import express from 'express';
import bodyParser from 'body-parser';
import logger from 'winston';

/**
 * This class is used to serve public resources
 */
export default class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this._configure();
  }

  _configure() {
    // Body parsers
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
    this.app.use(bodyParser.json());
  }

  serve() {
    this.app.listen(this.port, () => {
      logger.info(`Server running on port ${this.port}`);
    });
  }
}
