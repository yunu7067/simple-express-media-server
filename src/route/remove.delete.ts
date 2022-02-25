import express from 'express';

function remove(req: express.Request, res: express.Response) {
  res.send('remove');
}

export {remove};
