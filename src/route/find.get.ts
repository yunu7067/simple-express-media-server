import express from 'express';

function download(req: express.Request, res: express.Response) {
  res.send('uplaod');
}

export {download};
