import express from 'express';
import {saveDB} from '../database/connect';
import MediaModel, {MediaType} from '../database/model/MediaModel';

async function upload(req: express.Request, res: express.Response) {
  const file = req.file;
  const body = req.body;

  try {
    if (file !== undefined) {
      const metadata: MediaType = {...file, additional: {...body}};

      const doc = await saveDB(new MediaModel(metadata));
      console.log({...doc});
    } else {
      throw new Error('file not found.');
    }

    res.send('success');
  } catch (e) {
    console.error(e);
    throw new Error('error.');
  }
}

export {upload};
