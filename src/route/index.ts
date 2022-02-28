import {Router} from 'express';

import {upload} from './upload.post';
import {download} from './download.get';
import {remove} from './remove.delete';
import {metadata} from './metadata.get';
import {thumb} from './thumb.get';
import multer from 'multer';
import {config} from '../runtime';

const appRouter = Router();
const appMulter = multer({...config.storage.multer});

appRouter.post('/upload', appMulter.single('image'), upload);
appRouter.get('/download', download);
appRouter.delete('/remove', remove);
appRouter.get('/metadata', metadata);
appRouter.get('/thumb', thumb);

export {appRouter};
