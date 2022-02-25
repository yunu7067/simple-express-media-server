import express from 'express';
import multer from 'multer';

function upload(req: express.Request, res: express.Response) {
  console.log(req.file, req.body);
  res.send('uplaod');
}

export {upload};
