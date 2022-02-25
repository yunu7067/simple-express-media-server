import express from 'express';

function upload(req: express.Request, res: express.Response) {
  res.send('uplaod');
}

export {upload};
