import {ifAllConfigOptionsIsNormal} from './runtime';
import {ConfigType} from './type';

const path = require('path');
const express = require('express');

const configPath: string = path.resolve(require.main.path, '..', 'sems.config.js');
const config: ConfigType = require(configPath);

ifAllConfigOptionsIsNormal(config)
  .then(() => {
    const app = express();
    const port = config.server.port || 3000;

    app.post('/upload', (req, res) => {
      res.send('uplaod');
    });

    app.get('/download', (req, res) => {
      res.send('downlaod');
    });

    app.delete('/remove', (req, res) => {
      res.send('remove');
    });

    app.get('/metadata', (req, res) => {
      res.send('metadata');
    });

    app.get('/thumb', (req, res) => {
      res.send('thumbnail');
    });

    app.listen(port, () => {
      console.log(`SEMS server on port ${port}!`);
    });
  })
  .catch(e => {
    console.error(e);
  });
