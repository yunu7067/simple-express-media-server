import {Router} from 'express';

import {upload} from './upload.post';
import {download} from './download.get';
import {remove} from './remove.delete';
import {metadata} from './metadata.get';
import {thumb} from './thumb.get';
import multer, {Multer} from 'multer';
import {config} from '../runtime';

const appRouter = Router();

const appStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const appMulter = multer({...config.storage.multer, storage: appStorage});

appRouter.post('/upload', appMulter.single('media'), upload);
appRouter.get('/download', download);
appRouter.delete('/remove', remove);
appRouter.get('/metadata', metadata);
appRouter.get('/thumb', thumb);

export {appRouter};
