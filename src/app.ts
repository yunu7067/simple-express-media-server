import path from 'path';
import express from 'express';
import {ifAllConfigOptionsIsNormal} from './runtime';
import {ConfigType} from './type';
import {router} from './route';

const configPath: string = path.resolve(require.main.path, '..', 'sems.config.js');
const config: ConfigType = require(configPath);

ifAllConfigOptionsIsNormal(config)
  .then(() => {
    const app = express();
    const port = config.server.port || 3000;

    app.use('/', router);
    app.listen(port, () => {
      console.log(`SEMS server on port ${port}!`);
    });
  })
  .catch(e => {
    console.error(e);
  });
