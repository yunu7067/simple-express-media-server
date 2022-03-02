import {rejects} from 'assert';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './database/connect';
import {appRouter} from './route';
import {config, ifAllConfigOptionsIsNormal} from './runtime';

ifAllConfigOptionsIsNormal(config)
  .then(() => {
    // console.log(__dirname);
    const app = express();
    const port = config.server.port || 3000;

    connectDB(config.database).catch(e => {
      console.error(e);
      return Promise.reject('Fail to create database connection.');
    });

    app.use('/', appRouter);
    app.listen(port, () => {
      console.log(`SEMS server on port ${port}! (http://localhost:3333/)`);
    });
  })
  .catch(error => {
    console.error(error);
  });
