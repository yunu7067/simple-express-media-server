import express from 'express';
import connectDB from './database/connect';
import {appRouter} from './route';
import {config, ifAllConfigOptionsIsNormal} from './runtime';

ifAllConfigOptionsIsNormal(config)
  .then(() => {
    // console.log(__dirname);
    const app = express();
    const port = config.server.port || 3000;

    connectDB(config.database).catch(error => console.error(error));

    app.use('/', appRouter);
    app.listen(port, () => {
      console.log(`SEMS server on port ${port}!`);
    });
  })
  .catch(error => {
    console.error(error);
  });
