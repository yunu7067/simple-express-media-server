import express from 'express';

function metadata(req: express.Request, res: express.Response) {
  res.send('metadata');
}

export {metadata};
