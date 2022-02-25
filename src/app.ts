import path from 'path';
import express from 'express';
import {config, ifAllConfigOptionsIsNormal} from './runtime';
import {ConfigType} from './type';
import {router} from './route';

ifAllConfigOptionsIsNormal(config)
  .then(() => {
    console.log(__dirname);
    const app = express();
    const port = config.server.port || 3000;

    app.use('/', router);
    app.set('shared', {
      config,
    });
    app.listen(port, () => {
      console.log(`SEMS server on port ${port}!`);
    });
  })
  .catch(e => {
    console.error(e);
  });
