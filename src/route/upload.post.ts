import express from 'express';
import multer from 'multer';

function upload(req: express.Request, res: express.Response) {
  console.log({file: req.file, body: {...req.body}});
  res.send('uplaod');
}

export {upload};
